const App = {
  data() {
    return {
      itemSelect:{
        count: 0,
        info: '',
        defaults: {
          ice: '',
          sugar: '',
          toppings: []
        },
        iceDisabled: false,
        sugarDisabled: false
      },
      emptyItem: {
        count: 0,
        info: '',
        defaults: {
          ice: '',
          sugar: '',
          toppings: []
        }
      },
      orderList:[],
      orderTotal: 0,
      FinalOrder: false,
      iceType: ['正常冰', '少冰', '微冰', '去冰', '熱'],
      sugarType: ['全糖', '七分', '半糖', '三分', '無糖'],
      toppingsType: ['珍珠', '粉條', '小粉圓', '椰果', '芋頭'],
      products: [
        {
          name: '珍珠鮮奶茶',
          engName: 'Pearl Milk Tea',
          price: 60,
          defaults: {
            toppings: ['珍珠'],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '椰果鮮奶茶',
          engName: 'Coconut Milk Tea',
          price: 60,
          defaults: {
            toppings: ['椰果'],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '鮮奶茶',
          engName: 'Milk Tea',
          price: 50,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '古意冬瓜茶 (糖固定)',
          engName: 'Winter Melon Drink',
          price: 30,
          defaults: {
            toppings: [''],
            sugar: '全糖',
            ice: '',
          }
        },
        {
          name: '蜜香紅茶',
          engName: 'Black Tea',
          price: 30,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '包種青茶',
          engName: 'Black Tea',
          price: 35,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '檸檬烏龍',
          engName: 'Lemon Oolong Tea',
          price: 55,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '薑母茶 (熱飲)',
          engName: 'Ginger Tea',
          price: 55,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '熱',
          }
        },
        {
          name: '青草茶',
          engName: 'Herbal Tea',
          price: 35,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '金桔檸檬',
          engName: 'Kumquat Lemonade',
          price: 40,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
        {
          name: '柳澄青茶',
          engName: 'Orange Mountain Tea',
          price: 45,
          defaults: {
            toppings: [''],
            sugar: '',
            ice: '',
          }
        },
      ],
    }
  },
  methods: {
    selectItem(item){
      this.itemSelect={
        ...JSON.parse(JSON.stringify(item)),
        count:1,      
        info:'',// 備註欄位  
        toppings: [],// 加料
        ice: "正常冰",// 冰塊
        sugar: "全糖"// 甜度           
      }
      // 如果該商品的 ice 有預設值，才 disable
      this.iceDisabled = !!item.defaults.ice
      // 如果該商品的 sugar 有預設值，才 disable
      this.sugarDisabled = !!item.defaults.sugar
      //飲料預設冰塊與甜度
      if(!this.iceDisabled){
        this.itemSelect.defaults.ice='正常冰';
      }
      if(!this.sugarDisabled){
        this.itemSelect.defaults.sugar="全糖";
      }      
    },
    reset(){
      this.itemSelect = JSON.parse(JSON.stringify(this.emptyItem));
    },
    addItem(selectItem){
      
      const unitPrice = this.calcUnitPrice(selectItem);
      const order={
        ...JSON.parse(JSON.stringify(selectItem)),
        total: unitPrice * selectItem.count,
      }
      this.orderList.push(order);
      this.countTotal();
      this.reset();
    },
    countTotal(){
      this.orderTotal=0;
      this.orderList.forEach((item)=>{
        this.orderTotal+=item.total;
      })
    },
    confirm(){
      this.FinalOrder = true;
    },
    //判斷飲料是否有預設料
    isDefaultTopping(topping) {
      if (!this.itemSelect.name) return false;
      const product = this.products.find(p => p.name === this.itemSelect.name);
      return product && product.defaults.toppings.includes(topping);
    },
    //計算單價
    calcUnitPrice(item) {
      const original = this.products.find(p => p.name === item.name)?.defaults.toppings || [];
      const extraToppings = item.defaults.toppings.filter(t => !original.includes(t));
      const extraToppingPrice = extraToppings.length * 10;
      return item.price + extraToppingPrice;
    }
  },
};
Vue.createApp(App).mount('#app');