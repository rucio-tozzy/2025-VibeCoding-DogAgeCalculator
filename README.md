# 🐶 狗狗歲數計算機 Dog Age Calculator

一個使用 **原生 HTML / CSS / JavaScript** 製作的簡潔小工具，
讓你可以快速換算狗狗的實際年齡、DNA 甲基化人類年齡、依體型推估的人類年齡。
也會自動記錄使用者的計算歷史，重新整理後依然會保存。

本工具可直接部署在 GitHub Pages、CodePen、Netlify 等平台。

---

## 🚀 Demo（GitHub Pages）

👉 **立即體驗：**
[https://rucio-tozzy.github.io/2025-VibeCoding-DogAgeCalculator/](https://rucio-tozzy.github.io/2025-VibeCoding-DogAgeCalculator/)

---

## ✨ 功能特色

### 🧮 年齡計算

* 狗狗生日（必填）
* 狗狗體型（三種：**小型犬／中型犬／大型犬**）

計算後會呈現：

* 🐕‍🦺 **狗狗實際歲數（含小數）**
* 🧬 **DNA 甲基化換算人類年齡**
  使用公式：`16 × ln(狗齡) + 31`
  參考文獻：PubMed（PMID：32619550）
* 📈 **依體型線性插值換算的人類年齡**
  資料來源：pettownsendvet.com

---

## 💾 資料保存（localStorage）

### ✔ 自動保存最後一次計算結果

* 重新整理後仍會顯示上一次的輸入與計算結果

### ✔ 歷史紀錄（最多保存 5 筆）

歷史紀錄內容包含：

* 計算時間
* 生日
* 体型
* 狗齡、DNA 年齡、體型換算年齡

### ✔ 支援互動管理

* **🗑 單筆刪除（雙步驟確認，不會跳出彈窗）**
* **一鍵清空全部紀錄（雙步驟確認）**

所有資料都只會存放於使用者的瀏覽器中，不會上傳任何伺服器。

---

## 🎨 介面體驗（UI / UX）

本工具主打簡潔、美觀、易用：

* 使用 **銀灰色霧面玻璃（Glassmorphism）** 風格
* 背景使用 Pexels 免費授權圖片並加上柔和模糊
* 標題中的 🐶 帶有可愛晃動動畫效果
* 表單欄位與按鈕寬度一致，操作直覺
* 完整 **RWD 手機友善設計**

**無使用任何外部框架**（Bootstrap、jQuery、Vue、React…皆無），
完全以原生 HTML、CSS、JS 製作。

---

## 🛠 使用技術

* **HTML5**
* **CSS3**（含 `backdrop-filter`、動畫等）
* **Vanilla JavaScript**
* 無第三方套件、無前端框架（Vue/React 皆未使用）

---

## 📁 專案結構

```
├── index.html   # 主頁面
├── style.css    # 樣式
├── script.js    # 運算、localStorage、歷史紀錄邏輯
└── README.md    # 專案說明
```

## 🚀 GitHub Pages 部署方式

若你想複製這份專案並重新部署，可依照以下步驟：

1. 將專案放上 GitHub Repo
2. 開啟：**Settings → Pages**
3. 設定 Source：

   ```
   Branch: main
   Folder: /root
   ```
4. 儲存後等待約 1 分鐘
5. GitHub 會生成公開網址

---

## 🔒 隱私說明

* 所有資料僅存在 **使用者的瀏覽器 localStorage**
* 不會上傳到任何伺服器

---

## 📝 參考資料

* **DNA 甲基化換算人類年齡**
  *Quantitative translation of dog-to-human aging by conserved epigenetic remodeling*
  PubMed：PMID 32619550

* **體型年齡換算表**
  [https://pettownsendvet.com/blog/dog-years/](https://pettownsendvet.com/blog/dog-years/)

* **背景圖片來源（Pexels 免費授權）**
  [https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg](https://images.pexels.com/photos/2664417/pexels-photo-2664417.jpeg)

---

## 🐾 License

本專案採用 MIT License，歡迎自由使用、改作與分支。
