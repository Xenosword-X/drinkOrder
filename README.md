# 飲料點單系統 Drink Order System

這是一個使用 **Vue 2 (Options API)** 製作的前端點餐系統，模擬飲料店的點單流程，包含商品選擇、加料設定、價格計算與訂單確認。主要練習項目包括資料綁定、條件渲染、事件處理、動態表單互動與計算邏輯整合。

🔗 Demo 線上預覽  
👉 [https://xenosword-x.github.io/drinkOrder](https://xenosword-x.github.io/drinkOrder)

📂 原始碼 GitHub  
👉 [https://github.com/Xenosword-X/drinkOrder](https://github.com/Xenosword-X/drinkOrder)

---

## 📌 專案特色

- 商品列表選擇與高亮顯示  
- 支援冰塊、甜度、加料的個別設定（含預設禁用）  
- 自動計算加料費用（每項加料 +10 元，原始配料不收費）  
- 可調整數量，即時計算小計與總金額  
- 可加入備註與確認訂單  
- 訂單生成後可檢視完整內容與付款狀態  

---

## 📁 技術與工具

- HTML5 / CSS3 / Bootstrap 5  
- Vue.js 2（Options API）  
- JavaScript（ES6）  
- 元件化思維練習（雖尚未拆成元件）  
- 使用 Bootstrap utility class 快速排版與響應式支援  

---

## 📚 學習心得

這個作品是我首次使用 Vue 框架的練習專案，從設計資料結構開始，逐步熟悉 Vue 的資料綁定（`v-model`）、條件渲染（`v-if`）、迴圈渲染（`v-for`）、事件處理（`@click`）、樣式綁定（`:class`）等核心功能。

透過這個點餐系統的實作，我對於前端邏輯的控制流程有了更深入的理解，特別是如何依據資料變化即時更新畫面、維護資料一致性、與使用者互動，以及處理複雜的價格計算邏輯（加料費、數量乘積、小計統計等）。

這個專案也讓我更熟悉使用者流程設計，像是：避免未選飲料就操作、備註欄處理、確認訂單後資訊凍結顯示等。

---

## 📝 備註

- 本專案僅為前端練習用途，未串接實際後端 API 或儲存訂單資料  
- 若未來學習 Vue 3 或 Composition API，會嘗試將此專案重構升級  
- 部分設計參考真實飲料點餐流程進行簡化
