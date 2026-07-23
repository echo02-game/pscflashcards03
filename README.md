# 普通話水平測試難點字詞詞卡練習

這是一個可放到 GitHub Pages 的 PWA 學習工具。

## 本版更新

- 配色更新為 Color Hunt：`#FFB6A6 #FFEBD3 #9BCEC1 #67A2C5`
- 底部版權標注已合併為一行，並以較淺文字放在頁面最底部
- 「手機加入主畫面」已改為「把網頁加入手機主畫面」
- 首頁教學區改為左右兩欄：
  - 左：把網頁加入手機主畫面
  - 右：AI 發音無法發出普通話時的 iOS / Android 設定教學
- iOS AI 發音邏輯已調整，會優先選用 `zh-CN` / Mandarin / 普通話相關語音
- 已把已處理的錄音放入 `audio/`，並在 `audio-map.js` 配入輕聲及兒化韻詞庫

## 詞庫與發音

- 難點詞語：928 個，使用系統語音示範
- 輕聲及兒化韻：81 個，其中 77 個已配入錄製音頻
- 所有詞語：1009 個

未配到錄音的 4 個詞語見：`audio-missing-report.txt`。

## GitHub Pages 上載方法

1. 登入 GitHub，建立新 repository，例如：`psc-word-card`
2. 把本資料夾內的所有檔案上載到 repository 根目錄
3. 到 repository 的 `Settings` → `Pages`
4. `Build and deployment` 選 `Deploy from a branch`
5. Branch 選 `main`，folder 選 `/root`
6. 等候 1–3 分鐘，GitHub 會提供網址，例如：
   `https://你的帳號.github.io/psc-word-card/`

## 更新快取

本版 `sw.js` 的快取版本是：

```js
const CACHE_NAME = "psc-word-card-v11";
```

日後如更新錄音或網頁，請把版本號改成下一版，例如 `psc-word-card-v12`，再重新上載。
