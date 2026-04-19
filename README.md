# Claude Changelog Timeline

Claude 與 Claude Code 的線性歷史更新日誌網站。以垂直時間軸呈現所有更新紀錄，點擊卡片展開詳細資訊。

## 線上預覽

🔗 [https://mark88915.github.io/claude-changelog-timeline/](https://mark88915.github.io/claude-changelog-timeline/)

## 功能

- **垂直時間軸** — 按日期從新到舊排列，浮動月份標記隨滾動切換
- **可展開卡片** — 點擊展開詳細內容，依類型顯示不同格式：
  - Slash Command：語法、參數表、使用範例
  - 新功能：說明、步驟、預覽圖
  - 效能改進：修正前/後指標對比
  - Bug 修正：問題描述、根因、修正方式、程式碼 diff
  - 重大變更：遷移指南、程式碼 diff
- **產品篩選** — 切換顯示 Claude / Claude Code / 全部
- **類別篩選** — 新功能、功能增強、錯誤修正、重大變更
- **即時搜尋** — 搜尋指令名稱或關鍵字，匹配文字高亮
- **程式碼區塊** — 語法高亮 + 一鍵複製
- **響應式設計** — 支援桌面到手機
- **繁體中文介面**

## 技術棧

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- Google Fonts：JetBrains Mono + Inter
- 深色主題 + 暖橘色調（oklch 色彩空間）
- GitHub Actions 自動部署至 GitHub Pages

## 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建置
npm run build

# 預覽建置結果
npm run preview
```

## 專案結構

```
src/
├── App.vue                    # 主頁面（時間軸 + 月份分組）
├── style.css                  # 完整 CSS
├── main.js                    # Vue 3 入口
├── data/
│   └── changelog.js           # 更新資料（46 筆）
├── composables/
│   └── useChangelog.js        # 狀態管理（搜尋、篩選、展開）
└── components/
    ├── AppHeader.vue          # 毛玻璃 header + 搜尋 + 篩選
    ├── EntryCard.vue          # 時間軸卡片（展開/收合動畫）
    ├── EntryBody.vue          # 依類型渲染展開內容
    ├── CodeBlock.vue          # 程式碼區塊 + 複製按鈕
    └── LinkRow.vue            # 連結標籤
```

## 部署

推送到 `main` 分支後，GitHub Actions 自動建置並部署至 GitHub Pages。

工作流程定義在 `.github/workflows/deploy.yml`。

## 授權

MIT
