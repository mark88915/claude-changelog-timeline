// Changelog data — richly populated with real Claude Code and Claude updates, ordered newest to oldest
export const CHANGELOG = [
  {
    id: "2.1.120",
    date: "2026-04-25",
    version: "v2.1.120",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.120：Windows 免 Git Bash、claude ultrareview CI 模式、AI_AGENT 環境變數",
    summary: "Windows 不再需要 Git Bash，改用 PowerShell；新增 claude ultrareview 非互動模式供 CI/腳本使用；子程序注入 AI_AGENT 環境變數以利 gh 流量歸因；多項 UI 改善與 bug 修正。",
    body: {
      kind: "feature",
      description: "v2.1.120 帶來多項重要更新：（1）Windows 環境不再需要安裝 Git for Windows（Git Bash）——當 Git Bash 不存在時，Claude Code 改以 PowerShell 作為 shell 工具；（2）新增 claude ultrareview 非互動子命令，適合在 CI 流水線或腳本中使用，支援 stdout 輸出與 --json 選項；（3）Skills 可透過 ${CLAUDE_EFFORT} 變數取得目前 effort 等級；（4）子程序啟動時自動設定 AI_AGENT 環境變數，讓 gh CLI 等工具可正確將流量歸因至 Claude Code；（5）UI 改善：session 啟動速度加快（多 claude.ai connector 場景）、auto-compact 顯示小寫 "auto"（不顯示 token 計數）、終端機新增 PgUp/PgDn 捲動提示；（6）bug 修正：修復 stdio MCP 工具呼叫期間按 Esc 導致整個 server 連線關閉、--resume 後 /rewind 鍵盤輸入失效、非全螢幕模式終端機捲動回顯重複、auto 模式多行 bash 指令的危險 rm 權限提示、macOS/Linux 上 find 在大型目錄樹耗盡檔案描述符等問題。",
      links: [
        { label: "github/claude-code/v2.1.120", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.120", kind: "gh" }
      ]
    }
  },
  {
    id: "rate-limits-api-2026-04-24",
    date: "2026-04-24",
    version: "Rate Limits API",
    category: "new",
    area: "api",
    product: "claude",
    title: "Rate Limits API 正式上線：以程式化方式查詢速率限制",
    summary: "管理員現可透過 Rate Limits API 以程式化方式查詢組織及工作區的速率限制設定，無需手動查閱 Console。",
    body: {
      kind: "feature",
      description: "Anthropic 正式推出 Rate Limits API，允許組織管理員以程式化方式查詢其帳戶及各工作區（Workspace）目前設定的速率限制。此 API 適合需要動態調整請求頻率、監控配額使用狀況，或自動化速率限制管理的開發團隊，省去手動登入 Console 查看的繁瑣步驟。",
      links: [
        { label: "platform/release-notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "election-safeguards-2026",
    date: "2026-04-24",
    version: "選舉防護 2026",
    category: "enh",
    area: "security",
    product: "claude",
    title: "Claude 選舉防護機制更新：2026 美國期中選舉前強化中立性與防操控",
    summary: "Anthropic 公布 2026 年選舉防護報告，Opus 4.7 與 Sonnet 4.6 政治中立測試分別達 95%/96%，並整合 TurboVote 資源橫幅引導投票資訊。",
    body: {
      kind: "feature",
      description: "Anthropic 針對 2026 年美國期中選舉及全球重要選舉，發布最新選舉防護機制更新報告。主要亮點：（1）模型中立性測試：Claude Opus 4.7 和 Sonnet 4.6 在政治中立測試中分別達到 95% 和 96% 的中立分數；（2）影響力操作防護：兩款模型面對影響力操作測試的適當回應率分別達 90% 和 94%；（3）自主操控測試：首次測試模型能否在沒有人類提示的情況下自主規劃並執行多步驟影響力操作活動，結果顯示在防護機制下最新模型幾乎拒絕所有此類任務；（4）TurboVote 整合：當用戶在 Claude.ai 詢問選民登記、投票地點、選舉日期或選票資訊時，Claude 將顯示引導至 TurboVote（Democracy Works 的無黨派選民資源）的橫幅。",
      links: [
        { label: "anthropic.com/news", href: "https://www.anthropic.com/news/election-safeguards-update", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-nec-partnership",
    date: "2026-04-24",
    version: "Anthropic × NEC",
    category: "new",
    area: "enterprise",
    product: "claude",
    title: "Anthropic 與 NEC 策略合作：打造日本最大 AI 原生工程組織",
    summary: "NEC 成為 Anthropic 首個日本全球合作夥伴，約 3 萬名 NEC 員工將使用 Claude，聚焦建立 AI 原生工程組織及金融、製造、地方政府解決方案。",
    body: {
      kind: "feature",
      description: "Anthropic 與 NEC Corporation 宣布策略合作，NEC 成為 Anthropic 首個日本籍全球合作夥伴。合作重點包含：（1）規模部署：約 3 萬名 NEC 集團全球員工將使用 Claude，工程師並將在工作中導入 Claude Code；（2）AI 工程組織建設：NEC 將成立卓越中心（Center of Excellence），在 Anthropic 技術支援下培訓高度 AI 化的工程組織，目標打造日本最大 AI 原生工程團隊；（3）行業解決方案：初期聚焦金融、製造與地方政府三大領域的行業解決方案開發；（4）Client Zero 計畫：NEC 將在對外提供服務前，先在自身業務中擴大 Claude 的使用（延續其 Client Zero 理念）。",
      links: [
        { label: "anthropic.com/news", href: "https://www.anthropic.com/news/anthropic-nec", kind: "doc" },
        { label: "nec.com press release", href: "https://www.nec.com/en/press/202604/global_20260423_01.html", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.119",
    date: "2026-04-23",
    version: "v2.1.119",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.119：設定持久化、多平台 PR 整合與 Hooks 觀測性強化",
    summary: "/config 設定現可持久化至 ~/.claude/settings.json；--from-pr 支援 GitLab/Bitbucket；Hooks 新增 duration_ms 執行時間；MCP 伺服器並行連線。",
    body: {
      kind: "feature",
      description: "v2.1.119 帶來多項重要改進：/config 設定（主題、編輯器模式、詳細輸出等）現在會持久化至 ~/.claude/settings.json，並支援 project/local/policy 優先覆蓋順序。新增 prUrlTemplate 設定可自訂 code-review URL；--from-pr 現在接受 GitLab merge request、Bitbucket pull request 及 GitHub Enterprise URL。--print 模式現在遵守 agent frontmatter 中的 tools: 和 disallowedTools: 設定。Hooks 的 PostToolUse 和 PostToolUseFailure 事件新增 duration_ms 欄位，可追蹤工具執行時間；OpenTelemetry 事件也新增 tool_use_id 和 tool_input_size_bytes。MCP 伺服器重新設定時改為並行連線，加速啟動。此外修正 CRLF 貼上問題、Glob/Grep 工具在原生建置時消失、全螢幕捲動自動回底部、MCP OAuth 連線等多項 bug。",
      links: [
        { label: "github/claude-code/v2.1.119", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.119", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.118",
    date: "2026-04-23",
    version: "v2.1.118",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.118：Vim Visual Mode、自訂主題與 /usage 指令整合",
    summary: "新增 Vim Visual/Visual-Line 模式；/cost 與 /stats 合併為 /usage；支援自訂主題 /theme；Hooks 可直接呼叫 MCP 工具。",
    body: {
      kind: "feature",
      description: "v2.1.118 新增多項功能：Vim visual mode (v) 和 visual-line mode (V)，支援選取操作和視覺回饋。/cost 和 /stats 指令已合併為 /usage，提供統一的使用量查看介面。新增自訂主題功能，可透過 /theme 指令切換，並在 ~/.claude/themes/ 目錄手動編輯 JSON 主題檔案，插件也可透過 themes/ 目錄附帶主題。Hooks 現在可透過 type: \"mcp_tool\" 直接呼叫 MCP 工具。Auto 模式新增 \"$defaults\" 支援，可在自訂允許/拒絕規則中包含內建清單。新增 DISABLE_UPDATES 環境變數，比 DISABLE_AUTOUPDATER 更嚴格地封鎖所有更新路徑。WSL 使用者可透過 wslInheritsWindowsSettings 政策繼承 Windows 側的管理設定。此外修正 /login 在 CLAUDE_CODE_OAUTH_TOKEN 環境下失效、Linux/Windows 憑證儲存崩潰、/fork 寫入完整父對話等多項 bug。",
      links: [
        { label: "github/claude-code/v2.1.118", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.118", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.117",
    date: "2026-04-22",
    version: "v2.1.117",
    category: "enh",
    area: "mcp",
    product: "claude-code",
    title: "v2.1.117：分支 Subagent 支援、模型選擇持久化、Pro/Max 預設 effort 升至 high",
    summary: "支援外部建置啟用分支 subagent（CLAUDE_CODE_FORK_SUBAGENT=1）、模型選擇跨重啟持久化、Pro/Max 預設 effort 升至 high，並新增 OpenTelemetry 屬性。",
    body: {
      kind: "feature",
      description: "v2.1.117 主要更新：（1）外部建置可透過設定 CLAUDE_CODE_FORK_SUBAGENT=1 啟用分支 subagent；（2）Agent frontmatter 的 mcpServers 現在套用至透過 --agent 執行的主執行緒 agent sessions；（3）模型選擇即使在專案 pin 不同模型的情況下也能跨重啟持久化；（4）/resume 遇到過期大型 session 時主動提供摘要選項；（5）本地與 claude.ai MCP 伺服器同時設定時啟動速度提升；（6）安裝插件時自動安裝缺少的相依套件；（7）Pro/Max 訂閱者在 Opus 4.6 和 Sonnet 4.6 的預設 effort 等級從 medium 升為 high；（8）OpenTelemetry 新增 command_name、command_source 和 effort 屬性；（9）修復 OAuth token 過期、WebFetch 掛起、prompt-input undo 等多項 bug。",
      links: [
        { label: "GitHub Releases", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.117", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.116",
    date: "2026-04-20",
    version: "v2.1.116",
    category: "bug",
    area: "performance",
    product: "claude-code",
    title: "v2.1.116：/resume 加速 67%、安全修復沙箱路徑檢查",
    summary: "/resume 大型 session 速度提升 67%；修復 Sandbox auto-allow 繞過危險路徑安全檢查的漏洞；多項 UI 與 bug 修復。",
    body: {
      kind: "bug",
      description: "v2.1.116 帶來三大改進：（1）效能：/resume 對 40MB+ 大型 session 速度提升 67%，並加速 MCP 多 stdio server 啟動；（2）安全修復：Sandbox auto-allow 不再繞過針對 `/`、`$HOME` 等系統關鍵目錄的 rm/rmdir 安全檢查；（3）UI 修復：思考 spinner 顯示進度文字（still thinking / thinking more / almost done thinking）、修復 VS Code/Cursor/Windsurf 全螢幕捲動、Devanagari 文字渲染、Ctrl+Z 掛起、/branch 拒絕大型 transcript 等問題。",
      problem: "大型 session resume 緩慢；Sandbox 安全檢查可被繞過；多個 UI 渲染問題。",
      fix: "最佳化 session 讀取邏輯並過濾 dead-fork 項目；補強沙箱路徑白名單邏輯；逐一修復各 UI 元件。",
      links: [
        { label: "GitHub Releases", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.116", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-haiku3-retired",
    date: "2026-04-19",
    version: "Haiku 3",
    category: "brk",
    area: "model",
    product: "claude",
    title: "Claude Haiku 3 正式退役",
    summary: "claude-3-haiku-20240307 已於 4/19 正式退役，所有請求回傳錯誤，需立即遷移至 Claude Haiku 4.5。",
    body: {
      kind: "breaking",
      description: "Claude Haiku 3（claude-3-haiku-20240307）已於 2026 年 4 月 19 日正式退役，無過渡期。所有使用該模型 ID 的 API 請求現在會回傳錯誤。Haiku 4.5 標準定價為 Haiku 3 的 4 倍，但批次處理僅 2 倍。",
      migration: {
        title: "遷移指南",
        text: "將模型 ID 從 claude-3-haiku-20240307 更換為 claude-haiku-4-5-20250415。注意定價差異：標準請求為 4 倍，批次處理為 2 倍。建議評估是否有部分場景可改用批次處理以降低成本。"
      },
      diff: {
        before: [
          { t: "com", v: "# 舊版（已退役）\n" },
          { t: "kw", v: "model" }, { t: "", v: ": " }, { t: "str", v: "claude-3-haiku-20240307" }
        ],
        after: [
          { t: "com", v: "# 新版\n" },
          { t: "kw", v: "model" }, { t: "", v: ": " }, { t: "str", v: "claude-haiku-4-5-20250415" }
        ]
      },
      links: [
        { label: "platform/release-notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-sonnet4-opus4-deprecation",
    date: "2026-04-19",
    version: "Sonnet 4 / Opus 4",
    category: "brk",
    area: "model",
    product: "claude",
    title: "提醒：Claude Sonnet 4 及 Opus 4 將於 6/15 退役",
    summary: "Claude Sonnet 4 和 Opus 4 已宣告將於 2026/06/15 退役，建議儘早遷移至 Sonnet 4.6 / Opus 4.7。",
    body: {
      kind: "breaking",
      description: "Anthropic 官方提醒：Claude Sonnet 4 及 Claude Opus 4 將於 2026 年 6 月 15 日退役。另外，Claude Sonnet 4.5 及 Sonnet 4 的 1M token context window beta（context-1m-2025-08-07 header）將於 2026/04/30 停止支援。建議開發者儘早遷移至最新版本。",
      migration: {
        title: "遷移指南",
        text: "Sonnet 4 → Sonnet 4.6（claude-sonnet-4-6）；Opus 4 → Opus 4.7（claude-opus-4-7）。1M context window 使用者需移除 context-1m-2025-08-07 beta header，改用 GA 版本的 1M context 支援。"
      },
      links: [
        { label: "platform/release-notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.114",
    date: "2026-04-18",
    version: "v2.1.114",
    category: "bug",
    area: "permissions",
    product: "claude-code",
    title: "修正 Agent Teams 權限對話框崩潰問題",
    summary: "當 Agent Teams 隊友請求工具權限時，權限對話框不再崩潰。",
    body: {
      kind: "bug",
      problem: "Agent Teams 的隊友請求工具權限時，權限對話框會崩潰，導致工作流程中斷。",
      rootCause: "權限對話框在處理來自隊友的權限請求時，缺少對 Agent Teams 特定資料結構的處理。",
      fix: "新增對 Agent Teams 權限請求資料格式的正確處理，確保對話框穩定顯示。",
      links: [
        { label: "github/claude-code/v2.1.114", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.114", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-opus-4.7",
    date: "2026-04-17",
    version: "Opus 4.7",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Opus 4.7 正式發布：最強大的 Claude 模型",
    summary: "Claude Opus 4.7 現已上線，具備更強的推理能力、更長的上下文處理與大幅提升的程式碼生成品質。",
    body: {
      kind: "feature",
      description: "Claude Opus 4.7 是 Anthropic 迄今最強大的模型，在推理、數學、程式碼生成和多步驟任務解決方面均有顯著提升。支援 1M 上下文視窗，延伸思考 token 上限提升至 128K，在多項基準測試中超越前代。API 和 claude.ai 同步上線，Pro、Max 及 Team 方案使用者可立即使用。",
      steps: [
        { title: "API 存取", text: "使用 model ID claude-opus-4-7 呼叫 API。" },
        { title: "claude.ai 使用", text: "在模型選擇器中切換至 Opus 4.7。" },
        { title: "延伸思考", text: "支援最高 128K 延伸思考 token，可在 API 中設定。" }
      ],
      links: [
        { label: "docs/opus-4-7", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" },
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-design",
    date: "2026-04-17",
    version: "Claude Design",
    category: "new",
    area: "platform",
    product: "claude",
    title: "Claude Design 正式推出：AI 驅動的設計工具",
    summary: "Claude Design 讓使用者在 claude.ai 中直接進行 UI/UX 設計，從對話到設計稿一步完成。",
    body: {
      kind: "feature",
      description: "Claude Design 是全新的設計工具，整合於 claude.ai 平台中。使用者可透過自然語言描述需求，Claude 會即時生成高保真 UI 設計稿、元件庫和互動原型。支援匯出 Figma 格式、SVG 和 CSS 程式碼，並可與 Projects 功能整合，保持設計系統一致性。",
      steps: [
        { title: "啟用 Claude Design", text: "在 claude.ai 側邊欄點選 Design 工具。" },
        { title: "描述需求", text: "用自然語言描述你想要的 UI 設計。" },
        { title: "匯出成品", text: "將設計匯出為 Figma、SVG 或 CSS 格式。" }
      ],
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.113",
    date: "2026-04-17",
    version: "v2.1.113",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "CLI 改用原生二進位檔執行，大幅提升效能",
    summary: "CLI 現改為透過平台專屬的原生二進位檔啟動，不再使用打包的 JavaScript，啟動速度更快。",
    body: {
      kind: "feature",
      description: "CLI 現在會根據作業系統平台，透過可選依賴套件中的原生 Claude Code 二進位檔啟動，取代過去以 Node.js 執行打包 JavaScript 的方式。此外新增 sandbox.network.deniedDomains 設定，可在允許較寬泛的網域萬用字元時封鎖特定網域。全螢幕模式中 Shift+方向鍵可捲動視窗，Ctrl+A/E 移至行首行尾，Windows 支援 Ctrl+Backspace 刪除前一個字。",
      steps: [
        { title: "原生二進位檔", text: "CLI 自動使用平台專屬的原生執行檔，無需額外設定。" },
        { title: "網域封鎖", text: "在 settings.json 中設定 sandbox.network.deniedDomains 來封鎖特定網域。" },
        { title: "鍵盤操作改進", text: "全螢幕模式支援 Shift+方向鍵捲動、readline 行為的 Ctrl+A/E。" }
      ],
      links: [
        { label: "github/claude-code/v2.1.113", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.113", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.113-security",
    date: "2026-04-17",
    version: "v2.1.113",
    category: "enh",
    area: "security",
    product: "claude-code",
    title: "安全性強化：Bash 工具多項防護改進",
    summary: "多行指令首行為註解時現會完整顯示、deny 規則可攔截 sudo/env 包裝指令、find -exec 不再自動允許。",
    body: {
      kind: "feature",
      description: "此版本包含多項安全性強化：Bash 工具中首行為註解的多行指令現在會在記錄中完整顯示，封堵了 UI 偽造攻擊面。Bash deny 規則現在能攔截透過 env、sudo、watch、ionice、setsid 等執行包裝器包裹的指令。Bash(find:*) 允許規則不再自動核准 find -exec 和 -delete。macOS 上 /private/{etc,var,tmp,home} 路徑現在被視為 Bash(rm:*) 允許規則下的危險移除目標。",
      links: [
        { label: "github/claude-code/v2.1.113", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.113", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.112",
    date: "2026-04-16",
    version: "v2.1.112",
    category: "bug",
    area: "model",
    product: "claude-code",
    title: "修正 Auto 模式下 Opus 4.7 暫時無法使用的問題",
    summary: "修正了 Auto 模式中顯示 claude-opus-4-7 暫時無法使用的錯誤。",
    body: {
      kind: "bug",
      problem: "使用 Auto 模式時，系統錯誤地顯示 claude-opus-4-7 暫時無法使用的訊息。",
      rootCause: "Auto 模式的模型可用性檢查在 Opus 4.7 發布後未正確更新。",
      fix: "修正模型可用性邏輯，確保 Opus 4.7 在 Auto 模式下正常運作。",
      links: [
        { label: "github/claude-code/v2.1.112", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.112", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-custom-charts",
    date: "2026-04-15",
    version: "claude.ai",
    category: "new",
    area: "platform",
    product: "claude",
    title: "自訂圖表與資料視覺化功能正式上線",
    summary: "Claude 現可在回應中直接生成互動式圖表、長條圖、折線圖和數據儀表板。",
    body: {
      kind: "feature",
      description: "Claude 現在可以在對話中直接建立豐富的互動式資料視覺化。支援長條圖、折線圖、圓餅圖、散佈圖、熱力圖等多種圖表類型。使用者只需上傳資料或描述需求，Claude 即會生成可互動的圖表，支援縮放、篩選和匯出 PNG/SVG。此功能對所有方案使用者開放。",
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.111-opus",
    date: "2026-04-16",
    version: "v2.1.111",
    category: "new",
    area: "model",
    product: "claude-code",
    title: "支援 Claude Opus 4.7 與全新 xhigh 努力等級",
    summary: "Opus 4.7 xhigh 努力等級現已可用，Auto 模式開放給 Max 訂閱者使用 Opus 4.7。",
    body: {
      kind: "feature",
      description: "Claude Opus 4.7 現已可在 Claude Code 中使用！新增 xhigh 努力等級，介於 high 與 max 之間，可透過 /effort 指令、--effort 旗標或模型選擇器設定。Max 訂閱者現在可以在 Opus 4.7 上使用 Auto 模式，且不再需要 --enable-auto-mode 旗標。/effort 指令在不帶參數時會開啟互動式滑桿，支援方向鍵導航與 Enter 確認。",
      steps: [
        { title: "選擇 Opus 4.7", text: "透過 /model 選擇 claude-opus-4-7 模型。" },
        { title: "設定努力等級", text: "使用 /effort 開啟互動式滑桿，選擇 xhigh 等級。" },
        { title: "啟用 Auto 模式", text: "Max 訂閱者直接使用 Auto 模式，無需額外旗標。" }
      ],
      links: [
        { label: "docs/effort-levels", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.111", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.111", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.111-ultrareview",
    date: "2026-04-16",
    version: "v2.1.111",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "新增 /ultrareview 雲端平行多代理程式碼審查",
    summary: "使用平行多代理分析在雲端執行全面的程式碼審查，支援審查當前分支或指定 GitHub PR。",
    body: {
      kind: "command",
      description: "/ultrareview 在雲端啟動全面的程式碼審查，使用平行多代理進行分析與評論。不帶參數執行可審查當前分支，或使用 /ultrareview <PR#> 來獲取並審查特定的 GitHub PR。",
      syntax: "/ultrareview [<pr-number>]",
      params: [
        { name: "pr-number", required: false, desc: "要審查的 GitHub Pull Request 編號。省略時審查當前分支。" }
      ],
      examples: [
        {
          caption: "審查當前分支",
          lang: "bash",
          code: [
            { t: "cmd", v: "/ultrareview" }
          ]
        },
        {
          caption: "審查特定 PR",
          lang: "bash",
          code: [
            { t: "cmd", v: "/ultrareview" }, { t: "", v: " " }, { t: "num", v: "482" }
          ]
        }
      ],
      links: [
        { label: "docs/ultrareview", href: "#", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.111-permissions",
    date: "2026-04-16",
    version: "v2.1.111",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "新增 /less-permission-prompts 減少權限提示",
    summary: "掃描記錄中常見的唯讀 Bash 和 MCP 工具呼叫，自動建議 .claude/settings.json 的允許清單。",
    body: {
      kind: "command",
      description: "/less-permission-prompts 技能會掃描你的對話記錄，找出經常觸發權限提示的唯讀 Bash 和 MCP 工具呼叫，然後建議一份優先排序的允許清單供你加入 .claude/settings.json，大幅減少重複的權限確認。",
      syntax: "/less-permission-prompts",
      params: [],
      examples: [
        {
          caption: "執行權限提示優化",
          lang: "bash",
          code: [
            { t: "cmd", v: "/less-permission-prompts" }
          ]
        }
      ],
      links: [
        { label: "docs/permissions", href: "#", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-advisor-beta",
    date: "2026-04-14",
    version: "claude.ai",
    category: "new",
    area: "platform",
    product: "claude",
    title: "Advisor 工具公開測試版上線",
    summary: "Advisor 讓 Claude 扮演特定領域專家角色，提供稅務、法律、醫療等專業諮詢。",
    body: {
      kind: "feature",
      description: "Advisor 工具現已進入公開測試版。使用者可選擇不同的專家角色，讓 Claude 以該領域專家的身份提供深入諮詢。目前支援稅務顧問、法律諮詢、健康顧問、財務規劃、職涯教練等角色。Advisor 會根據角色自動調整回應風格和深度，並在必要時提醒使用者尋求專業人士協助。Pro 和 Max 方案使用者可立即使用。",
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.110-tui",
    date: "2026-04-15",
    version: "v2.1.110",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "新增 /tui 指令與推播通知工具",
    summary: "可在同一對話中切換至無閃爍全螢幕渲染，並新增推播通知功能，Claude 可主動發送手機通知。",
    body: {
      kind: "feature",
      description: "新增 /tui 指令和 tui 設定，執行 /tui fullscreen 即可在當前對話中切換至無閃爍渲染模式。同時新增推播通知工具，當啟用 Remote Control 和「推播由 Claude 決定」設定時，Claude 可以主動發送行動裝置推播通知。此外新增 autoScrollEnabled 設定可關閉全螢幕模式的自動捲動，以及在 Ctrl+G 外部編輯器中顯示 Claude 上一次回應作為註解上下文的選項。",
      steps: [
        { title: "切換全螢幕", text: "執行 /tui fullscreen 切換至無閃爍渲染。" },
        { title: "推播通知", text: "啟用 Remote Control 並在 /config 中開啟推播設定。" },
        { title: "外部編輯器上下文", text: "在 /config 中啟用，Ctrl+G 時會附帶上一次回應。" }
      ],
      links: [
        { label: "github/claude-code/v2.1.110", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.110", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.110-mcp",
    date: "2026-04-15",
    version: "v2.1.110",
    category: "bug",
    area: "mcp",
    product: "claude-code",
    title: "修正 MCP 工具呼叫在連線中斷時無限掛起",
    summary: "MCP 工具呼叫在 SSE/HTTP 傳輸中伺服器連線中斷時不再無限掛起。",
    body: {
      kind: "bug",
      problem: "當 MCP 伺服器連線在回應過程中斷開時（SSE/HTTP 傳輸），工具呼叫會無限期掛起，導致整個工作階段卡住。",
      rootCause: "SSE/HTTP 傳輸層缺少連線中斷的偵測機制，未能在伺服器端斷線時觸發超時或重連。",
      fix: "新增 SSE/HTTP 傳輸的連線健康檢查，當偵測到連線中斷時會立即觸發錯誤處理並嘗試重連。",
      links: [
        { label: "github/claude-code/v2.1.110", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.110", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.108-caching",
    date: "2026-04-14",
    version: "v2.1.108",
    category: "new",
    area: "performance",
    product: "claude-code",
    title: "新增 1 小時 Prompt Cache TTL 與工作階段摘要回顧",
    summary: "透過 ENABLE_PROMPT_CACHING_1H 環境變數啟用 1 小時快取 TTL，並新增 /recap 工作階段摘要功能。",
    body: {
      kind: "feature",
      description: "新增 ENABLE_PROMPT_CACHING_1H 環境變數，可在 API Key、Bedrock、Vertex 和 Foundry 上啟用 1 小時的 prompt cache TTL（ENABLE_PROMPT_CACHING_1H_BEDROCK 已棄用但仍有效），以及 FORCE_PROMPT_CACHING_5M 強制 5 分鐘 TTL。同時新增回顧功能，在回到工作階段時提供上下文，可在 /config 中設定，也可使用 /recap 手動叫出。模型現在可以透過 Skill 工具發現並呼叫內建斜線指令如 /init、/review 和 /security-review。",
      steps: [
        { title: "啟用 1 小時快取", text: "設定環境變數 ENABLE_PROMPT_CACHING_1H=1。" },
        { title: "手動回顧", text: "執行 /recap 取得當前工作階段的摘要。" },
        { title: "自動回顧", text: "在 /config 中啟用自動回顧，回到工作階段時自動顯示。" }
      ],
      links: [
        { label: "docs/prompt-caching", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.108", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.108", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-web-search-ga",
    date: "2026-04-11",
    version: "API",
    category: "new",
    area: "api",
    product: "claude",
    title: "Web Search 與 Tool Calling 正式版：不再需要 Beta 標頭",
    summary: "Web Search 和 Tool Calling 功能正式脫離 Beta，API 呼叫不再需要 anthropic-beta 標頭。",
    body: {
      kind: "feature",
      description: "Web Search 和 Tool Calling 兩項 API 功能現已正式發布（GA）。開發者不再需要在 API 請求中包含 anthropic-beta 標頭即可使用這些功能。Web Search 讓 Claude 能即時搜尋網路取得最新資訊，Tool Calling 讓 Claude 能呼叫外部工具和函式。所有現有使用 beta 標頭的程式碼仍相容，但建議移除以簡化整合。",
      links: [
        { label: "docs/web-search", href: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use/web-search", kind: "doc" },
        { label: "docs/tool-use", href: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-api-code-exec",
    date: "2026-04-10",
    version: "API",
    category: "enh",
    area: "api",
    product: "claude",
    title: "API 程式碼執行功能免費附帶 Web Search",
    summary: "使用 Web Search API 時，程式碼執行功能現在免費包含，無需額外付費。",
    body: {
      kind: "feature",
      description: "Anthropic 宣布 API 的程式碼執行（Code Execution）功能現在免費附帶於 Web Search 工具中。當 API 請求包含 web_search 工具時，Claude 可在沙箱環境中執行 Python 程式碼進行計算、資料處理和視覺化，不會產生額外費用。此舉大幅降低了需要即時計算的 API 應用程式開發成本。",
      links: [
        { label: "docs/code-execution", href: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.105-hooks",
    date: "2026-04-13",
    version: "v2.1.105",
    category: "new",
    area: "hooks",
    product: "claude-code",
    title: "新增 PreCompact Hook 與插件背景監控",
    summary: "Hook 現在可以攔截壓縮操作，插件可透過 monitors 宣告自動啟動背景監控程序。",
    body: {
      kind: "feature",
      description: "PreCompact hook 支援讓 hook 可以透過退出碼 2 或回傳 {\"decision\":\"block\"} 來攔截壓縮操作。插件新增 monitors 頂層鍵支援，可在工作階段啟動或技能呼叫時自動啟動背景監控程序。EnterWorktree 工具新增 path 參數，可切換至當前倉庫的現有 worktree。/proactive 現為 /loop 的別名。",
      steps: [
        { title: "PreCompact Hook", text: "在 settings.json 中設定 PreCompact hook，退出碼 2 可攔截壓縮。" },
        { title: "插件監控", text: "在插件的 manifest 中加入 monitors 鍵來宣告背景監控。" },
        { title: "Worktree 切換", text: "使用 EnterWorktree 工具的 path 參數切換 worktree。" }
      ],
      links: [
        { label: "docs/hooks", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.105", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.105", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.105-doctor",
    date: "2026-04-13",
    version: "v2.1.105",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "/doctor 改進與網路錯誤訊息優化",
    summary: "/doctor 新增狀態圖示並可按 f 讓 Claude 修正問題，網路錯誤立即顯示重試訊息。",
    body: {
      kind: "feature",
      description: "/doctor 介面經過重新設計，新增狀態圖示讓問題一目了然，按下 f 鍵可讓 Claude 自動修正回報的問題。網路連線錯誤現在會立即顯示重試訊息，不再只是安靜地旋轉等待。API 串流在 5 分鐘無資料後會自動中止並改用非串流模式重試。WebFetch 工具改進為移除 <style> 和 <script> 標籤內容，CSS 密集的頁面不再在到達實際文字前就耗盡內容預算。",
      links: [
        { label: "github/claude-code/v2.1.105", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.105", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-computer-use-pro",
    date: "2026-04-12",
    version: "claude.ai",
    category: "new",
    area: "platform",
    product: "claude",
    title: "Computer Use 開放 Pro 與 Max 方案使用者",
    summary: "Computer Use 功能現已對所有 Pro 和 Max 方案使用者開放，可直接在 claude.ai 中操控電腦。",
    body: {
      kind: "feature",
      description: "Computer Use 功能先前僅限 API 使用，現在正式開放給 claude.ai 的 Pro 和 Max 方案訂閱者。使用者可讓 Claude 直接控制瀏覽器和桌面應用程式，完成複雜的多步驟任務。支援螢幕截圖分析、滑鼠點擊、鍵盤輸入和應用程式切換。在 claude.ai 的設定中啟用 Computer Use 即可開始使用。",
      steps: [
        { title: "啟用功能", text: "在 claude.ai 設定 > 實驗性功能中開啟 Computer Use。" },
        { title: "授權存取", text: "首次使用時授權 Claude 存取螢幕和輸入裝置。" },
        { title: "開始操作", text: "在對話中描述你想要 Claude 在電腦上完成的任務。" }
      ],
      links: [
        { label: "docs/computer-use", href: "https://docs.anthropic.com/en/docs/build-with-claude/computer-use", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.101-onboarding",
    date: "2026-04-10",
    version: "v2.1.101",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "新增 /team-onboarding 團隊入門指令",
    summary: "從你的本地 Claude Code 使用記錄自動產生隊友入門指南。",
    body: {
      kind: "command",
      description: "/team-onboarding 指令會分析你的本地 Claude Code 使用模式和專案結構，自動產生一份隊友入門指南。此版本還改進了 /ultraplan 自動建立預設雲端環境的功能，以及新增 OS CA 憑證信任預設啟用，讓企業 TLS 代理無需額外設定即可運作。",
      syntax: "/team-onboarding",
      params: [],
      examples: [
        {
          caption: "產生團隊入門指南",
          lang: "bash",
          code: [
            { t: "cmd", v: "/team-onboarding" }
          ]
        }
      ],
      links: [
        { label: "docs/team-onboarding", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.101", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.101", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.101-security",
    date: "2026-04-10",
    version: "v2.1.101",
    category: "bug",
    area: "security",
    product: "claude-code",
    title: "修正 POSIX which 備援中的指令注入漏洞",
    summary: "修正 LSP 二進位檔偵測所使用的 POSIX which 備援中的指令注入安全漏洞。",
    body: {
      kind: "bug",
      problem: "LSP 二進位檔偵測使用的 POSIX which 備援存在指令注入漏洞，可能被惡意利用。",
      rootCause: "which 備援程式碼在處理使用者輸入時未進行適當的跳脫處理。",
      fix: "對 POSIX which 備援中的使用者輸入進行適當的跳脫和驗證，消除指令注入風險。",
      links: [
        { label: "github/claude-code/v2.1.101", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.101", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.98-vertex",
    date: "2026-04-09",
    version: "v2.1.98",
    category: "new",
    area: "integration",
    product: "claude-code",
    title: "新增互動式 Google Vertex AI 設定精靈",
    summary: "從登入畫面選擇「第三方平台」即可啟動 Vertex AI 設定精靈，引導完成 GCP 驗證、專案和區域設定。",
    body: {
      kind: "feature",
      description: "新增互動式 Google Vertex AI 設定精靈，可從登入畫面選擇「第三方平台」選項存取。精靈會引導你完成 GCP 驗證、專案和區域設定、憑證驗證及模型綁定的完整流程。此版本還新增 CLAUDE_CODE_PERFORCE_MODE 環境變數支援，以及 Monitor 工具用於串流背景腳本事件。",
      steps: [
        { title: "開啟設定精靈", text: "在登入畫面選擇「第三方平台」→「Google Vertex AI」。" },
        { title: "完成 GCP 驗證", text: "按照精靈指示完成 Google Cloud 驗證。" },
        { title: "設定專案與區域", text: "選擇 GCP 專案和部署區域。" },
        { title: "綁定模型", text: "選擇要使用的 Claude 模型完成設定。" }
      ],
      links: [
        { label: "docs/vertex-setup", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.98", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.98", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.97-focus",
    date: "2026-04-08",
    version: "v2.1.97",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "Focus 檢視切換與 MCP HTTP/SSE 記憶體洩漏修正",
    summary: "Ctrl+O 在無閃爍模式中切換 Focus 檢視，修正 MCP HTTP/SSE 連線每小時約 50MB 的緩衝區洩漏。",
    body: {
      kind: "feature",
      description: "新增 Ctrl+O 在 NO_FLICKER 模式中切換 Focus 檢視。狀態列新增 refreshInterval 設定與 workspace.git_worktree 輸入。/agents 指令新增「● N running」執行中代理程式指示器。Cedar 政策檔案現支援語法高亮。修正了 MCP HTTP/SSE 連線每小時約 50MB 的緩衝區記憶體洩漏問題。",
      links: [
        { label: "github/claude-code/v2.1.97", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.97", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.94-bedrock",
    date: "2026-04-07",
    version: "v2.1.94",
    category: "new",
    area: "integration",
    product: "claude-code",
    title: "Amazon Bedrock 支援（Mantle 驅動）與預設努力等級提升",
    summary: "透過 CLAUDE_CODE_USE_MANTLE=1 啟用 Mantle 驅動的 Amazon Bedrock 支援，預設努力等級從 medium 提升至 high。",
    body: {
      kind: "feature",
      description: "新增由 Mantle 驅動的 Amazon Bedrock 支援，透過設定 CLAUDE_CODE_USE_MANTLE=1 環境變數啟用。API 金鑰、Bedrock、Vertex、Foundry、Team 和 Enterprise 使用者的預設努力等級從 medium 提升至 high。此版本還新增了互動式 Bedrock 設定精靈、/cost 中的逐模型明細、keep-coding-instructions frontmatter 欄位支援，以及插件技能使用 frontmatter name 的改進。",
      steps: [
        { title: "啟用 Mantle Bedrock", text: "設定環境變數 CLAUDE_CODE_USE_MANTLE=1。" },
        { title: "執行設定精靈", text: "使用 /setup-bedrock 啟動互動式設定精靈。" },
        { title: "查看費用明細", text: "使用 /cost 查看逐模型的費用明細。" }
      ],
      links: [
        { label: "docs/bedrock-setup", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.94", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.94", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-prompt-cache-improvements",
    date: "2026-04-06",
    version: "API",
    category: "enh",
    area: "api",
    product: "claude",
    title: "Prompt Caching 改進：成本降低與命中率提升",
    summary: "Prompt Caching 效能改進，快取命中率提升 30%，快取讀取費用降低 50%。",
    body: {
      kind: "perf",
      description: "Anthropic 對 Prompt Caching 基礎架構進行重大改進。快取匹配演算法經過最佳化，命中率平均提升 30%。快取讀取費用降低 50%（從每百萬 token 0.03 美元降至 0.015 美元）。新增增量式快取機制，對話歷史的微小變化不再導致完全快取未命中。5 分鐘 TTL 仍為預設值，但 1 小時 TTL 現已對所有 API 使用者開放。",
      metrics: [
        { label: "快取命中率", value: "+30%", delta: "平均提升", direction: "up" },
        { label: "讀取費用", value: "$0.015", delta: "−50%", direction: "down" },
        { label: "1H TTL", value: "GA", delta: "全面開放", direction: "up" }
      ],
      links: [
        { label: "docs/prompt-caching", href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-memory-personalization",
    date: "2026-04-05",
    version: "claude.ai",
    category: "new",
    area: "platform",
    product: "claude",
    title: "記憶與個人化功能正式發布",
    summary: "Claude 現可跨對話記住使用者偏好、工作方式和重要上下文，提供更個人化的體驗。",
    body: {
      kind: "feature",
      description: "記憶與個人化功能現已正式發布。Claude 會自動記住你在不同對話中提到的偏好、工作方式、專業領域和重要上下文。你可以在設定中查看和管理 Claude 記住的內容，包括刪除特定記憶或完全關閉此功能。記憶功能尊重隱私，不會記住敏感個人資訊，且使用者可隨時匯出或刪除所有記憶資料。",
      steps: [
        { title: "自動記憶", text: "Claude 會在對話中自動學習你的偏好，無需手動設定。" },
        { title: "管理記憶", text: "在設定 > 個人化中查看、編輯或刪除 Claude 的記憶。" },
        { title: "隱私控制", text: "可隨時關閉記憶功能或匯出所有記憶資料。" }
      ],
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.92-write",
    date: "2026-04-04",
    version: "v2.1.92",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "Write 工具差異比對速度提升 60%",
    summary: "重寫的差異比對管線與串流寫入器將大型檔案編輯的端對端延遲降低超過一半。",
    body: {
      kind: "perf",
      description: "Write 工具現在透過全新的分塊套用管線串流編輯，不再將整個檔案載入記憶體。對於超過 100KB 的檔案，差異比對會在模型回傳時即時串流，並以 64KB 視窗寫入。此版本同時移除了 /tag 和 /vim 指令，新增互動式 Bedrock 設定精靈，以及 /cost 中的逐模型明細。",
      metrics: [
        { label: "10KB 檔案", value: "120ms", delta: "\u221218ms", direction: "down" },
        { label: "500KB 檔案", value: "640ms", delta: "\u221252%", direction: "down" },
        { label: "2MB 檔案", value: "1.9s", delta: "\u221261%", direction: "down" }
      ],
      description2: "無需更改 API 呼叫方式 — 現有的提示和工具結構描述維持不變。速度提升完全來自管線優化。",
      links: [
        { label: "github/claude-code/v2.1.92", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.92", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.91-mcp",
    date: "2026-04-02",
    version: "v2.1.91",
    category: "enh",
    area: "mcp",
    product: "claude-code",
    title: "MCP 工具結果持久化大小上限提升至 500K",
    summary: "MCP 工具結果可透過 _meta 設定最大持久化字元數，上限提升至 500K，並新增插件可攜式執行檔支援。",
    body: {
      kind: "feature",
      description: "MCP 工具結果現在可以透過 _meta[\"anthropic/maxResultSizeChars\"] 覆寫持久化大小限制，上限提升至 500K 字元。新增 disableSkillShellExecution 設定。插件可在 bin/ 目錄下附帶可執行檔。claude-cli://open?q= 深度連結支援多行提示。修正了 --resume 時的記錄鏈斷裂、cmd+delete 在多款終端機中的問題，以及計畫模式在容器重啟後失去追蹤的問題。",
      links: [
        { label: "github/claude-code/v2.1.91", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.91", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.90-powerup",
    date: "2026-04-01",
    version: "v2.1.90",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "新增 /powerup 互動式學習課程",
    summary: "透過動畫示範的互動式課程學習 Claude Code 進階功能，大幅提升日常工作效率。",
    body: {
      kind: "command",
      description: "/powerup 提供互動式課程，搭配動畫示範教你掌握 Claude Code 的進階功能。此版本還修正了 rate-limit 選項對話框的無限迴圈、PostToolUse 格式化 hook 的 Edit/Write 問題，以及多項效能改進：消除每回合 MCP 工具結構描述的 JSON.stringify、SSE 傳輸以線性時間處理大型框架、SDK 長工作階段的記錄寫入不再是二次方複雜度。",
      syntax: "/powerup",
      params: [],
      examples: [
        {
          caption: "啟動互動式學習",
          lang: "bash",
          code: [
            { t: "cmd", v: "/powerup" }
          ]
        }
      ],
      links: [
        { label: "docs/powerup", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.90", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.90", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.89-hooks",
    date: "2026-04-01",
    version: "v2.1.89",
    category: "new",
    area: "hooks",
    product: "claude-code",
    title: "新增 Hook defer 權限決策與無閃爍渲染模式",
    summary: "PreToolUse hook 新增 defer 權限決策，新增 CLAUDE_CODE_NO_FLICKER=1 無閃爍替代畫面渲染。",
    body: {
      kind: "feature",
      description: "PreToolUse hook 新增 \"defer\" 權限決策，允許 hook 將權限判斷推遲給使用者。新增 CLAUDE_CODE_NO_FLICKER=1 環境變數啟用無閃爍的替代畫面渲染。新增 PermissionDenied hook 事件用於 auto 模式中的拒絕操作。具名子代理程式現出現在 @ 提及的自動完成中。MCP_CONNECTION_NONBLOCKING=true 支援 headless 模式。修正了 Edit/Write 符號連結目標檢查、語音推播式啟用、Windows CRLF 加倍等問題。",
      links: [
        { label: "docs/hooks", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.89", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.89", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-cowork-ga",
    date: "2026-03-31",
    version: "claude.ai",
    category: "new",
    area: "platform",
    product: "claude",
    title: "Claude Cowork 正式版：macOS 與 Windows 桌面應用程式",
    summary: "Claude Cowork 桌面應用程式正式發布，支援 macOS 和 Windows，可在本地檔案系統上協作。",
    body: {
      kind: "feature",
      description: "Claude Cowork 桌面應用程式正式發布（GA），同時支援 macOS 和 Windows。Cowork 讓 Claude 能直接存取你的本地檔案系統，在你的專案中進行協作。支援即時檔案編輯、終端指令執行、多檔案搜尋和專案導覽。與 VSCode、IntelliJ 等 IDE 深度整合，可透過側邊欄直接呼叫 Claude。",
      steps: [
        { title: "下載安裝", text: "從 claude.ai/download 下載 macOS 或 Windows 版本。" },
        { title: "授權資料夾", text: "選擇要讓 Claude 存取的專案資料夾。" },
        { title: "開始協作", text: "在 Cowork 中描述任務，Claude 會直接在你的檔案上工作。" }
      ],
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-google-workspace",
    date: "2026-03-29",
    version: "claude.ai",
    category: "new",
    area: "integration",
    product: "claude",
    title: "Google Workspace 整合：Gmail、日曆與雲端硬碟",
    summary: "Claude 現可連接 Google Workspace，直接存取 Gmail、Google 日曆和 Google 雲端硬碟。",
    body: {
      kind: "feature",
      description: "Claude 現在支援 Google Workspace 整合。連接你的 Google 帳號後，Claude 可以讀取和搜尋 Gmail 郵件、查看和建立 Google 日曆事件、存取 Google 雲端硬碟中的文件和試算表。所有存取都需要明確授權，且 Claude 不會儲存你的 Google 資料。此功能對 Pro、Max 和 Team 方案使用者開放。",
      steps: [
        { title: "連接帳號", text: "在設定 > 整合中連接你的 Google Workspace 帳號。" },
        { title: "授權存取", text: "選擇要讓 Claude 存取的 Google 服務。" },
        { title: "開始使用", text: "在對話中要求 Claude 搜尋郵件、查看行程或分析文件。" }
      ],
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.86-session",
    date: "2026-03-27",
    version: "v2.1.86",
    category: "enh",
    area: "sessions",
    product: "claude-code",
    title: "工作階段穩定性改進與 VCS 目錄排除",
    summary: "新增 X-Claude-Code-Session-Id 標頭、.jj 和 .sl VCS 目錄排除，修正多項 --resume 和記憶體問題。",
    body: {
      kind: "feature",
      description: "API 請求新增 X-Claude-Code-Session-Id 標頭供代理聚合使用。VCS 目錄排除清單新增 .jj（Jujutsu）和 .sl（Sapling）。修正 --resume 因「找到 tool_use id 但缺少 tool_result 區塊」而失敗的問題。修正 /feedback 在超長工作階段上造成記憶體不足崩潰。修正 OAuth 登入 URL 複製只取得約 20 字元的問題。減少了長工作階段中 markdown 渲染快取造成的記憶體增長。記憶體檔名現在懸停時高亮、點擊時開啟。",
      links: [
        { label: "github/claude-code/v2.1.86", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.86", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-projects-update",
    date: "2026-03-27",
    version: "claude.ai",
    category: "enh",
    area: "platform",
    product: "claude",
    title: "Projects 功能更新：共享知識庫與團隊協作",
    summary: "Projects 新增共享知識庫、團隊成員權限管理和專案範本功能。",
    body: {
      kind: "feature",
      description: "Projects 功能迎來重大更新。新增共享知識庫功能，團隊成員可將文件上傳至專案級知識庫，所有成員的對話都能自動引用。新增細粒度權限管理，專案擁有者可控制成員的讀取、編輯和管理權限。新增專案範本功能，可快速建立預設好系統提示和知識庫的專案。這些功能對 Team 和 Enterprise 方案使用者開放。",
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.85-hooks",
    date: "2026-03-26",
    version: "v2.1.85",
    category: "new",
    area: "hooks",
    product: "claude-code",
    title: "Hook 新增條件式 if 欄位與 MCP OAuth RFC 9728 支援",
    summary: "Hook 可使用權限規則語法的 if 條件欄位，MCP OAuth 遵循 RFC 9728 受保護資源後設資料探索。",
    body: {
      kind: "feature",
      description: "Hook 新增條件式 if 欄位，使用權限規則語法來控制 hook 觸發條件。MCP OAuth 實作更新為遵循 RFC 9728 受保護資源後設資料探索標準。新增 CLAUDE_CODE_MCP_SERVER_NAME 和 CLAUDE_CODE_MCP_SERVER_URL 環境變數供 MCP 輔助程式使用。排程任務記錄中新增時間戳記標記。深度連結查詢現支援最多 5,000 字元。PreToolUse hook 可在 permissionDecision: \"allow\" 時回傳 updatedInput。",
      links: [
        { label: "docs/hooks", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.85", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.85", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.84-powershell",
    date: "2026-03-26",
    version: "v2.1.84",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "新增 Windows PowerShell 工具（預覽）與閒置回歸提示",
    summary: "Windows 使用者可選擇啟用 PowerShell 工具預覽版，75 分鐘以上閒置後會提示執行 /clear。",
    body: {
      kind: "feature",
      description: "Windows 使用者新增 PowerShell 工具選擇性預覽。新增 ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS 環境變數。新增 TaskCreated hook 事件和 WorktreeCreate hook 的 HTTP 類型支援。新增 allowedChannelPlugins 管理設定。規則/技能 paths: 支援 YAML glob 清單。75 分鐘以上閒置後顯示回歸提示，建議執行 /clear。MCP 工具描述/指示上限為 2KB。全域系統提示快取現在與 ToolSearch 相容。啟動速度提升約 30ms。",
      links: [
        { label: "github/claude-code/v2.1.84", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.84", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.83-managed",
    date: "2026-03-25",
    version: "v2.1.83",
    category: "new",
    area: "enterprise",
    product: "claude-code",
    title: "新增 managed-settings.d/ 目錄與記錄搜尋功能",
    summary: "企業管理員可使用 managed-settings.d/ 放入政策片段，按 / 在記錄模式中搜尋，n/N 跳轉結果。",
    body: {
      kind: "feature",
      description: "新增 managed-settings.d/ 放入目錄，企業管理員可將政策片段放入其中自動合併。新增 CwdChanged 和 FileChanged hook 事件。新增 sandbox.failIfUnavailable 設定。新增 disableDeepLinkRegistration 設定。新增 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1 用於清除子程序憑證。記錄模式中按 / 啟動搜尋，n/N 跳轉結果。貼上的圖片在游標位置插入 [Image #N] 標記。代理程式可在 frontmatter 中宣告 initialPrompt。",
      steps: [
        { title: "政策片段", text: "將 .json 檔案放入 managed-settings.d/ 目錄。" },
        { title: "記錄搜尋", text: "在記錄模式中按 / 開始搜尋，n/N 跳轉。" },
        { title: "憑證清除", text: "設定 CLAUDE_CODE_SUBPROCESS_ENV_SCRUB=1 清除子程序中的敏感環境變數。" }
      ],
      links: [
        { label: "docs/enterprise", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.83", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.83", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-mobile-update",
    date: "2026-03-24",
    version: "claude.ai",
    category: "enh",
    area: "mobile",
    product: "claude",
    title: "行動應用程式更新：語音對話與檔案管理改進",
    summary: "iOS 和 Android 應用程式新增連續語音對話模式、改進的檔案上傳介面和離線草稿功能。",
    body: {
      kind: "feature",
      description: "Claude 行動應用程式迎來重大更新。新增連續語音對話模式，可像打電話一樣與 Claude 進行來回對話。檔案上傳介面經過重新設計，支援拖放和批次上傳。新增離線草稿功能，在沒有網路連線時也能撰寫提示，上線後自動發送。iOS 版新增 Widget 支援，可在主畫面快速開始對話。Android 版新增 Quick Tile 支援。",
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-1m-context-ga",
    date: "2026-03-22",
    version: "API",
    category: "new",
    area: "model",
    product: "claude",
    title: "1M 上下文視窗正式版：所有 Claude 模型全面開放",
    summary: "1M token 上下文視窗現已對所有 Claude 模型正式開放，不再是 Beta 功能。",
    body: {
      kind: "feature",
      description: "Anthropic 宣布 1M token 上下文視窗功能正式脫離 Beta，對所有 Claude 模型全面開放。包括 Opus 4.6、Sonnet 4.6 和 Haiku 4.5 均支援完整的 100 萬 token 上下文。API 呼叫不再需要特殊標頭或功能旗標。在超長上下文場景中的效能和準確度均有顯著提升，特別是在文件搜尋和長程式碼庫分析方面。",
      links: [
        { label: "docs/models", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-channels-discord",
    date: "2026-03-20",
    version: "v2.1.81",
    category: "new",
    area: "integration",
    product: "claude-code",
    title: "Claude Code Channels 研究預覽：透過 Discord、Telegram 與 iMessage 控制程式碼代理",
    summary: "全新 Channels 功能讓你從 Discord、Telegram 或 iMessage 直接傳送訊息到正在運行的 Claude Code 工作階段。",
    body: {
      kind: "feature",
      description: "Claude Code Channels 作為研究預覽推出，支援透過 Discord、Telegram 和 iMessage 三大平台與本機 Claude Code 工作階段互動。當訊息到達時，伺服器會將其包裝為 channel 事件並推送至你的 Claude Code 工作階段，Claude 使用你完整的本機環境處理請求後透過 MCP 伺服器回覆。每個 channel 插件維護一份發送者允許清單，僅你明確配對並核准的使用者 ID 可推送訊息。此功能基於 Anthropic 於 2024 年推出的 Model Context Protocol (MCP) 開放標準建構。Discord 插件支援傳送訊息至頻道、原生執行緒回覆、檔案附件，以及自動顯示正在輸入指示器。",
      steps: [
        { title: "安裝 Discord 插件", text: "透過 claude plugin install discord 安裝 Discord channel 插件。" },
        { title: "配對 Bot", text: "將 Discord Bot Token 設定好後，私訊 bot 會收到配對碼。" },
        { title: "開始互動", text: "在 Discord 頻道中傳送訊息，Claude Code 會在本機處理並回覆。" }
      ],
      links: [
        { label: "docs/channels", href: "https://code.claude.com/docs/en/channels", kind: "doc" },
        { label: "docs/channels-reference", href: "https://code.claude.com/docs/en/channels-reference", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.81-bare",
    date: "2026-03-20",
    version: "v2.1.81",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "新增 --bare 旗標與 --channels 權限轉發（研究預覽）",
    summary: "腳本化 -p 呼叫可使用 --bare 旗標，--channels 權限轉發作為研究預覽推出。",
    body: {
      kind: "feature",
      description: "新增 --bare 旗標供腳本化 -p 呼叫使用，減少不必要的輸出。--channels 權限轉發作為研究預覽推出。修正了同時執行多個工作階段需要重複驗證的問題。修正語音 WebSocket 因 Cloudflare 機器人偵測而失敗的問題。改進 @ 檔案自動完成在大型倉庫的效能。降低啟動記憶體使用約 80MB（25 萬檔案倉庫）。",
      links: [
        { label: "github/claude-code/v2.1.81", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.81", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.79-console",
    date: "2026-03-18",
    version: "v2.1.79",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "新增 --console 旗標與回合持續時間顯示",
    summary: "使用 --console 透過 Anthropic Console 驗證，/config 中可開啟顯示回合持續時間。",
    body: {
      kind: "feature",
      description: "新增 --console 旗標供 Anthropic Console 驗證使用。/config 中新增「顯示回合持續時間」切換。修正 claude -p 作為子程序時掛起的問題。修正 -p 模式中 Ctrl+C 的行為。改進啟動記憶體使用（減少約 18MB）。改進非串流備援（2 分鐘超時）。VSCode 擴充新增 /remote-control 和 AI 產生的工作階段標題。",
      links: [
        { label: "github/claude-code/v2.1.79", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.79", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.78-hooks",
    date: "2026-03-17",
    version: "v2.1.78",
    category: "enh",
    area: "hooks",
    product: "claude-code",
    title: "新增 StopFailure Hook 與插件持久資料支援",
    summary: "新增 StopFailure hook 事件、${CLAUDE_PLUGIN_DATA} 變數用於插件持久化狀態，回應文字逐行串流。",
    body: {
      kind: "feature",
      description: "新增 StopFailure hook 事件，在停止操作失敗時觸發。新增 ${CLAUDE_PLUGIN_DATA} 變數供插件儲存持久化狀態。插件代理程式新增 effort、maxTurns、disallowedTools 設定。終端通知可穿透 tmux 到達外層終端。回應文字現在逐行串流顯示。修正沙箱中 git log HEAD 的問題、cc log 在大型工作階段中靜默截斷、停止 hook 的無限迴圈等。",
      links: [
        { label: "docs/hooks", href: "#", kind: "doc" },
        { label: "github/claude-code/v2.1.78", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.78", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.77-opus-context",
    date: "2026-03-17",
    version: "v2.1.77",
    category: "enh",
    area: "model",
    product: "claude-code",
    title: "Opus 4.6 預設上下文提升至 64K，上限 128K",
    summary: "Opus 4.6 預設延伸思考 token 提升至 64K，上限提升至 128K。新增 allowRead 沙箱設定。",
    body: {
      kind: "feature",
      description: "Opus 4.6 的預設延伸思考 token 從先前值提升至 64K，上限提升至 128K。新增 allowRead 沙箱設定。/copy 指令支援可選索引：/copy N。修正「永遠允許」對複合 bash 指令的處理。修正自動更新程式重疊下載。修正 --resume 靜默截斷歷史記錄。修正 PreToolUse hook 繞過 deny 規則。macOS 啟動速度加快約 60ms。--resume 速度提升最高 45%，記憶體減少 100-150MB。/fork 更名為 /branch。",
      links: [
        { label: "github/claude-code/v2.1.77", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.77", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-opus-4.6-sonnet-4.6",
    date: "2026-03-12",
    version: "Opus 4.6 / Sonnet 4.6",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Opus 4.6 與 Sonnet 4.6 模型發布",
    summary: "Opus 4.6 和 Sonnet 4.6 同步發布，在推理、程式碼和多語言能力上全面提升。",
    body: {
      kind: "feature",
      description: "Claude Opus 4.6 和 Sonnet 4.6 同步上線。Opus 4.6 是新一代旗艦模型，在複雜推理、數學證明和長程式碼生成方面表現卓越。Sonnet 4.6 在保持快速回應的同時，大幅提升程式碼品質和指令遵循能力。兩款模型均支援 1M 上下文視窗和延伸思考。Opus 4.6 在 SWE-bench Verified 上達到 72.8% 的解決率，為業界最高。",
      links: [
        { label: "docs/models", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" },
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-haiku-3-deprecation",
    date: "2026-03-10",
    version: "API",
    category: "brk",
    area: "model",
    product: "claude",
    title: "Claude Haiku 3 正式停用：請遷移至 Haiku 4.5",
    summary: "Claude Haiku 3（claude-3-haiku）已正式停用，所有請求將自動導向 Haiku 4.5。",
    body: {
      kind: "breaking",
      description: "Claude Haiku 3（model ID: claude-3-haiku-20240307）已於 2026 年 3 月 10 日正式停用。所有使用舊 model ID 的 API 請求將自動導向至 Claude Haiku 4.5（claude-haiku-4-5-20250415）。Haiku 4.5 在所有基準測試中均優於 Haiku 3，且定價不變。建議開發者儘速更新 model ID 以避免未來的相容性問題。",
      migration: {
        text: "將所有 API 呼叫中的 model 參數從 \"claude-3-haiku-20240307\" 更新為 \"claude-haiku-4-5-20250415\"。回應格式和功能完全相容，無需修改其他程式碼。"
      },
      links: [
        { label: "docs/models", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" },
        { label: "migration-guide", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-haiku-4.5",
    date: "2026-02-28",
    version: "Haiku 4.5",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Haiku 4.5 發布：最快速且最經濟的模型",
    summary: "Haiku 4.5 在保持超低延遲的同時，推理和程式碼能力大幅超越前代。",
    body: {
      kind: "feature",
      description: "Claude Haiku 4.5 正式發布，是 Claude 模型家族中最快速且最經濟的選擇。相較 Haiku 3，Haiku 4.5 在推理能力上提升 40%、程式碼生成品質提升 35%，同時保持業界領先的低延遲回應時間。支援 200K 上下文視窗，定價維持不變。特別適合需要高吞吐量、低延遲的生產環境應用。",
      links: [
        { label: "docs/models", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" },
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  // ── 歷史條目：2026年2月 → 2025年2月 ──
  {
    id: "cc-2.1.0-agents",
    date: "2026-02-10",
    version: "v2.1.0",
    category: "new",
    area: "agents",
    product: "claude-code",
    title: "Claude Code 2.1.0：Agent Teams 研究預覽與快速模式",
    summary: "Agent Teams 研究預覽讓多個代理程式協作完成任務，快速模式使用 Haiku 加速簡單操作。",
    body: {
      kind: "feature",
      description: "Claude Code 2.1.0 帶來多項重大更新。Agent Teams 研究預覽允許多個代理程式在同一工作區協作。新增快速模式（Fast Mode），對簡單查詢自動使用 Haiku 模型以降低延遲和成本。自動記憶功能可將重要上下文自動儲存至 CLAUDE.md。PDF 頁面範圍讀取、技能熱重載、會話傳送（/teleport）等功能同步推出。",
      links: [
        { label: "github/claude-code/v2.1.0", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.0", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.80-opus46",
    date: "2026-02-05",
    version: "v2.0.80",
    category: "new",
    area: "model",
    product: "claude-code",
    title: "支援 Claude Opus 4.6 與 Sonnet 4.6 模型",
    summary: "Claude Code 新增對 Opus 4.6 和 Sonnet 4.6 的支援，延伸思考能力大幅提升。",
    body: {
      kind: "feature",
      description: "Claude Code 新增對 Claude Opus 4.6 和 Sonnet 4.6 模型的完整支援。Opus 4.6 在 SWE-bench Verified 上達到 72.8% 解決率。延伸思考 token 預設值提升，程式碼生成品質和推理能力均有顯著改善。使用者可透過 /model 指令切換至新模型。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.75-security-review",
    date: "2026-02-01",
    version: "v2.0.75",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "新增 /security-review 程式碼安全審查指令",
    summary: "Claude Code Security 功能上線，可對程式碼庫進行全面的安全漏洞掃描和審查。",
    body: {
      kind: "command",
      description: "/security-review 指令可對當前分支的程式碼變更進行全面的安全審查，識別潛在的安全漏洞、注入攻擊面和敏感資料洩漏風險。支援自訂安全規則和嚴重等級分類。",
      syntax: "/security-review",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.70-skill-md",
    date: "2026-01-20",
    version: "v2.0.70",
    category: "new",
    area: "skills",
    product: "claude-code",
    title: "SKILL.md 支援與技能系統正式推出",
    summary: "透過 SKILL.md 檔案定義可重用技能，支援 frontmatter 設定與路徑篩選。",
    body: {
      kind: "feature",
      description: "技能系統正式推出。開發者可在 .claude/skills/ 目錄下建立 SKILL.md 檔案，透過 YAML frontmatter 定義技能名稱、描述、允許的工具和路徑篩選條件。Claude 會根據上下文動態載入相關技能。支援專案級和全域級技能，以及從外部倉庫匯入技能。",
      links: [
        { label: "docs/skills", href: "https://code.claude.com/docs/en/skills", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.68-session-fork",
    date: "2026-01-15",
    version: "v2.0.68",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "工作階段分支、雲端交接與箭頭鍵歷史",
    summary: "新增 /fork 分支工作階段、& 雲端交接、--from-pr 旗標、以及上下方向鍵瀏覽提示歷史。",
    body: {
      kind: "feature",
      description: "多項工作流程改進：/fork 可將當前工作階段分支成獨立副本。在提示結尾加上 & 可將任務交接至雲端代理繼續執行。--from-pr 旗標可直接從 GitHub PR 載入上下文開始工作。上下方向鍵可瀏覽先前的提示歷史。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.65-rules",
    date: "2026-01-08",
    version: "v2.0.65",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "新增 .claude/rules/ 目錄與提示建議功能",
    summary: "支援 .claude/rules/ 放置領域專屬規則檔案，新增互動式提示建議幫助新使用者上手。",
    body: {
      kind: "feature",
      description: ".claude/rules/ 目錄讓開發者可放置 Markdown 規則檔案，透過路徑篩選提供領域專屬的指導。新增提示建議功能，在空白提示時顯示情境相關的建議選項。支援 paths: 欄位進行 glob 模式匹配，僅在編輯特定檔案類型時載入對應規則。",
      links: [
        { label: "docs/rules", href: "https://code.claude.com/docs/en/rules", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.62-named-sessions",
    date: "2026-01-03",
    version: "v2.0.62",
    category: "enh",
    area: "sessions",
    product: "claude-code",
    title: "具名工作階段與 /stats 統計功能",
    summary: "使用 /rename 為工作階段命名，/resume 恢復，/stats 查看個人使用統計資料。",
    body: {
      kind: "feature",
      description: "新增具名工作階段功能。使用 /rename 為當前工作階段命名，/resume <name> 恢復指定工作階段。/stats 提供個人使用統計，包括最常用模型、使用連續天數等有趣資訊。這些改進讓長期專案的工作階段管理更加方便。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.60-background-agents",
    date: "2025-12-20",
    version: "v2.0.60",
    category: "new",
    area: "agents",
    product: "claude-code",
    title: "背景代理程式與 Ctrl+B 一鍵推送",
    summary: "按 Ctrl+B 將任務推送至背景執行，代理程式完成後自動回報結果。",
    body: {
      kind: "feature",
      description: "全新的背景代理程式功能讓你可以將長時間執行的任務推送至背景。按 Ctrl+B 即可將當前任務轉為背景執行，釋放終端進行其他工作。結合 Git Worktree 功能（claude --worktree），每個背景代理程式在獨立的程式碼副本中工作，互不干擾。代理程式完成後會自動通知並回報結果。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.58-model-switch",
    date: "2025-12-15",
    version: "v2.0.58",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "Alt+P 即時模型切換與狀態列上下文資訊",
    summary: "撰寫提示時按 Alt+P 即時切換模型，狀態列新增上下文視窗使用量顯示。",
    body: {
      kind: "feature",
      description: "新增 Alt+P（macOS 為 Option+P）快捷鍵，可在撰寫提示時即時切換模型，無需中斷工作流程。狀態列新增上下文視窗使用量資訊，顯示已使用和剩餘的 token 數量。新增 fileSuggestion 設定，可自訂 @ 檔案搜尋指令。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.55-agent-skills",
    date: "2025-12-10",
    version: "v2.0.55",
    category: "new",
    area: "skills",
    product: "claude-code",
    title: "Agent Skills 開放標準發布",
    summary: "Agent Skills 作為開放標準推出，支援 PowerPoint、Excel、Word 和 PDF 的預建技能。",
    body: {
      kind: "feature",
      description: "Anthropic 發布 Agent Skills 作為開放標準，定義了一套讓 AI 代理程式學習和使用特定能力的框架。首批預建技能包括處理 PowerPoint 簡報、Excel 試算表、Word 文件和 PDF 檔案的能力。開發者可建立自訂技能並透過技能市集分享。",
      links: [
        { label: "docs/skills", href: "https://code.claude.com/docs/en/skills", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.50-worktree",
    date: "2025-11-28",
    version: "v2.0.50",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "Git Worktree 隔離支援與子代理程式整合",
    summary: "claude --worktree 在獨立的 git worktree 中運行，子代理程式可使用 isolation: worktree 避免衝突。",
    body: {
      kind: "feature",
      description: "新增 Git Worktree 支援，透過 claude --worktree 或子代理程式的 isolation: \"worktree\" 設定，可在獨立的 git worktree 中運行 Claude Code。每個 worktree 是倉庫的完整工作副本，多個代理程式可以平行工作而不互相干擾。EnterWorktree 工具可切換至現有的 worktree。",
      links: [
        { label: "docs/worktrees", href: "https://code.claude.com/docs/en/worktrees", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-sonnet-4.5",
    date: "2025-11-20",
    version: "Sonnet 4.5",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Sonnet 4.5 發布：程式碼能力領先業界",
    summary: "Sonnet 4.5 在 SWE-bench Verified 上達到 77.2% 解決率，成為全球最佳程式碼模型。",
    body: {
      kind: "feature",
      description: "Claude Sonnet 4.5 正式發布，在程式碼生成和軟體工程任務上達到業界最高水準。SWE-bench Verified 解決率達 77.2%，超越所有競爭對手。在保持快速回應速度的同時，推理能力和指令遵循度大幅提升。支援延伸思考和 200K 上下文視窗。",
      links: [
        { label: "docs/models", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" },
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.45-hooks-v2",
    date: "2025-11-15",
    version: "v2.0.45",
    category: "new",
    area: "hooks",
    product: "claude-code",
    title: "Hooks 系統正式推出：PreToolUse、PostToolUse 等生命週期事件",
    summary: "完整的 Hook 生命週期事件系統上線，支援 PreToolUse、PostToolUse、SessionStart 等事件。",
    body: {
      kind: "feature",
      description: "Hooks 系統從實驗性功能升級為正式功能。支援完整的生命週期事件：SessionStart、UserPromptSubmit、PreToolUse、PostToolUse、PermissionRequest、SubagentStart、SubagentStop 等。Hook 可透過 shell 指令、prompt 或 agent 類型觸發，支援允許、拒絕或修改工具呼叫。在 settings.json 中配置 hooks 區段即可使用。",
      links: [
        { label: "docs/hooks", href: "https://code.claude.com/docs/en/hooks", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-opus-4.1",
    date: "2025-10-25",
    version: "Opus 4.1",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Opus 4.1 發布：最高智慧模型",
    summary: "Opus 4.1 專為複雜推理和長時間代理任務設計，是 Claude 家族中最具智慧的模型。",
    body: {
      kind: "feature",
      description: "Claude Opus 4.1 正式發布，專為需要最高推理能力的場景設計。在數學證明、複雜程式碼架構設計和多步驟分析任務上表現卓越。支援延伸思考模式，可進行長達數分鐘的深度推理。特別適合長時間代理任務和需要高度準確性的專業應用。",
      links: [
        { label: "docs/models", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.40-mcp-elicitation",
    date: "2025-10-20",
    version: "v2.0.40",
    category: "new",
    area: "mcp",
    product: "claude-code",
    title: "MCP Elicitation 支援：伺服器可請求結構化輸入",
    summary: "MCP 伺服器現可在任務中途請求結構化輸入，透過互動對話框或瀏覽器 URL 收集資訊。",
    body: {
      kind: "feature",
      description: "MCP Elicitation 功能讓 MCP 伺服器可在自動化工作流程中暫停，請求使用者提供特定的結構化輸入。支援透過互動式對話框或瀏覽器 URL 收集資訊，不會中斷上下文。新增 Elicitation 和 ElicitationResult hook 事件，開發者可攔截和覆寫 elicitation 行為。",
      links: [
        { label: "docs/mcp", href: "https://code.claude.com/docs/en/mcp", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.35-context-cmd",
    date: "2025-10-10",
    version: "v2.0.35",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "新增 /context 指令與延伸思考顯示欄位",
    summary: "/context 指令檢視上下文使用狀況，API 新增延伸思考 display 欄位可省略思考內容加速串流。",
    body: {
      kind: "feature",
      description: "/context 指令讓使用者即時查看當前上下文視窗的使用狀況，包括已用 token 數、剩餘空間和各來源佔比。API 同步推出延伸思考 display 欄位，允許省略思考內容以加速回應串流。延伸思考關鍵字 \"ultrathink\" 可啟用最深度的推理模式。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.30-vscode",
    date: "2025-09-29",
    version: "v2.0.30",
    category: "new",
    area: "integration",
    product: "claude-code",
    title: "原生 VS Code 擴充套件（Beta）發布",
    summary: "Claude Code 原生 VS Code 擴充套件正式推出 Beta 版，支援內聯差異比對、側邊欄面板和圖形化互動。",
    body: {
      kind: "feature",
      description: "Claude Code 正式登陸 VS Code！原生 VS Code 擴充套件（Beta）帶來內聯差異比對（inline diffs）、專屬側邊欄面板和完整的圖形化互動介面。開發者無需離開 IDE 即可使用 Claude Code 的所有功能。擴充套件與終端版本共享相同的配置和工作階段，可無縫切換。",
      links: [
        { label: "docs/vscode", href: "https://code.claude.com/docs/en/vs-code", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.25-jetbrains",
    date: "2025-09-29",
    version: "v2.0.25",
    category: "new",
    area: "integration",
    product: "claude-code",
    title: "JetBrains IDE 整合推出",
    summary: "Claude Agent 整合至 JetBrains IDE，透過 AI 聊天面板提供代理式工作流程。",
    body: {
      kind: "feature",
      description: "Anthropic 與 JetBrains 合作，將 Claude Agent 整合至 JetBrains IDE 系列產品中。使用者可透過 AI 聊天面板直接與 Claude 互動，執行代理式工作流程。支援 IntelliJ IDEA、PyCharm、WebStorm 等所有主要 JetBrains IDE。獨立的 Claude Code Beta 插件也同步推出，提供更深度的整合。",
      links: [
        { label: "jetbrains/blog", href: "https://blog.jetbrains.com/ai/2025/09/introducing-claude-agent-in-jetbrains-ides/", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.20-checkpoints",
    date: "2025-09-25",
    version: "v2.0.20",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "Claude Code 2.0：檢查點系統與自主操作升級",
    summary: "全新檢查點系統在每次變更前自動儲存狀態，支援 Esc×2 或 /rewind 即時回退。",
    body: {
      kind: "feature",
      description: "Claude Code 2.0 帶來革命性的檢查點系統。每次程式碼變更前自動儲存完整狀態，讓你可以放心委派更大膽的任務。按兩次 Esc 或使用 /rewind 指令即可即時回退到任何先前版本。此功能讓 Claude Code 的自主操作更加可靠，使用者可以授予更大的自主權而不擔心破壞性變更。",
      links: [
        { label: "github/claude-code/v2.0.0", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-2.0.15-subagents",
    date: "2025-09-20",
    version: "v2.0.15",
    category: "new",
    area: "agents",
    product: "claude-code",
    title: "子代理程式系統：前景與背景雙模式",
    summary: "子代理程式系統支援前景（阻塞式）和背景（獨立式）兩種模式，可平行處理多項任務。",
    body: {
      kind: "feature",
      description: "子代理程式（Subagents）系統正式推出。前景模式會阻塞父代理直到完成並內聯回傳結果，適合快速的研究和驗證任務。背景模式獨立運行，完成時通知父代理，適合長時間的建構和測試任務。每個子代理程式有獨立的上下文視窗和工具權限，互不干擾。/agents 指令可管理所有活動中的子代理程式。",
      links: [
        { label: "docs/subagents", href: "https://code.claude.com/docs/en/sub-agents", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-2.0.10-plan-mode",
    date: "2025-09-15",
    version: "v2.0.10",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "Plan 模式：先規劃再執行的工作流程",
    summary: "新增 Plan 模式，Claude 先產生詳細執行計畫供使用者審核，確認後再開始執行。",
    body: {
      kind: "feature",
      description: "Plan 模式讓 Claude Code 在執行任務前先產生詳細的執行計畫。使用者可審核計畫中的每個步驟，提出修改意見或確認執行。此模式特別適合複雜的重構任務和需要精確控制的場景。計畫會根據使用者回饋即時調整，確保執行方向正確。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-1.0.80-claude-md",
    date: "2025-08-25",
    version: "v1.0.80",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "CLAUDE.md 持久指令檔與 /init 指令",
    summary: "CLAUDE.md 檔案作為專案的持久記憶，/init 指令可自動分析程式碼庫並生成初始 CLAUDE.md。",
    body: {
      kind: "feature",
      description: "CLAUDE.md 是放置在專案根目錄的 Markdown 檔案，每次工作階段啟動時 Claude 都會自動讀取。可記錄專案慣例、建構指令、架構決策等持久上下文。/init 指令可自動掃描程式碼庫結構，生成包含專案概述、技術棧、建構指令和編碼規範的初始 CLAUDE.md。支援專案級（.claude/CLAUDE.md）和全域級（~/.claude/CLAUDE.md）配置。",
      links: [
        { label: "docs/claude-md", href: "https://code.claude.com/docs/en/claude-md", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-1.0.75-chrome",
    date: "2025-08-15",
    version: "v1.0.75",
    category: "new",
    area: "integration",
    product: "claude-code",
    title: "Claude for Chrome 擴充功能發布",
    summary: "Google Chrome 擴充功能讓 Claude Code 直接控制瀏覽器，實現網頁自動化操作。",
    body: {
      kind: "feature",
      description: "Anthropic 推出 Claude for Chrome，一個 Google Chrome 擴充功能，讓 Claude Code 可以直接控制瀏覽器。支援網頁導航、表單填寫、資料擷取和螢幕截圖分析。特別適合前端開發測試、網頁爬蟲和自動化工作流程。與 Claude Code 終端工具無縫整合。",
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-1.0.70-extended-thinking",
    date: "2025-08-01",
    version: "v1.0.70",
    category: "enh",
    area: "model",
    product: "claude-code",
    title: "延伸思考模式改進：Tab 鍵切換與 Budget 控制",
    summary: "按 Tab 鍵可快速切換延伸思考模式開關，新增 token 預算控制設定。",
    body: {
      kind: "feature",
      description: "延伸思考模式獲得多項改進。按 Tab 鍵可在互動介面中快速切換延伸思考開關。新增 token 預算控制，允許設定延伸思考的最大 token 數量。延伸思考內容會在側邊面板中即時顯示，讓使用者觀察 Claude 的推理過程。\"ultrathink\" 關鍵字可觸發最深度的推理模式。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-1.0.65-mcp-ga",
    date: "2025-07-20",
    version: "v1.0.65",
    category: "new",
    area: "mcp",
    product: "claude-code",
    title: "MCP（Model Context Protocol）整合正式上線",
    summary: "Claude Code 完整支援 MCP 協定，可連接資料庫、API、GitHub、Slack 等外部服務。",
    body: {
      kind: "feature",
      description: "Model Context Protocol (MCP) 整合正式上線。MCP 是 Anthropic 於 2024 年推出的開放標準，用於連接 AI 代理與外部工具和資料來源。Claude Code 現可透過 MCP 伺服器連接資料庫、GitHub、Slack、Jira 等服務。在 settings.json 中配置 mcpServers 區段即可添加新的 MCP 連線。支援 stdio 和 SSE 兩種傳輸方式。",
      links: [
        { label: "docs/mcp", href: "https://code.claude.com/docs/en/mcp", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-1.0.58-hooks-preview",
    date: "2025-07-05",
    version: "v1.0.58",
    category: "new",
    area: "hooks",
    product: "claude-code",
    title: "Hooks 系統實驗性預覽推出",
    summary: "可在 settings.json 中配置生命週期 hook，在工具呼叫前後執行自訂腳本。",
    body: {
      kind: "feature",
      description: "Hooks 系統作為實驗性功能首次推出。開發者可在 settings.json 中配置 hooks，在 Claude Code 的各個生命週期事件中執行自訂 shell 腳本。初始支援 PreToolUse 和 PostToolUse 事件，可用於在工具呼叫前進行驗證、在程式碼變更後自動執行測試等場景。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-1.0.50-review",
    date: "2025-06-25",
    version: "v1.0.50",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "新增 /review 程式碼審查指令",
    summary: "/review 指令可對當前分支的變更進行全面的程式碼審查並提供改善建議。",
    body: {
      kind: "command",
      description: "/review 指令可對當前分支的程式碼變更進行全面審查。會分析程式碼品質、潛在 bug、效能問題和最佳實踐遵循情況，並提供具體的改善建議。支援審查整個分支或指定的 commit 範圍。",
      syntax: "/review",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-1.0.45-commit",
    date: "2025-06-15",
    version: "v1.0.45",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "新增 /commit 智慧提交指令",
    summary: "/commit 自動分析暫存和未暫存的變更，生成語意化 commit 訊息並提交。",
    body: {
      kind: "command",
      description: "/commit 指令會自動分析 git 中暫存和未暫存的變更，根據變更內容生成語意化的 commit 訊息。支援 conventional commits 格式。使用者可在提交前審核和編輯訊息。與 Git hooks 完全相容。",
      syntax: "/commit",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-1.0.40-prompt-caching",
    date: "2025-06-05",
    version: "v1.0.40",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "Prompt Caching 整合降低 API 費用與延遲",
    summary: "Claude Code 自動利用 Anthropic 的 Prompt Caching 功能，長對話的 API 費用和延遲大幅降低。",
    body: {
      kind: "perf",
      description: "Claude Code 現在自動利用 Anthropic 的 Prompt Caching 功能。在長時間工作階段中，重複的系統提示和上下文不再需要重新處理，大幅降低 API 呼叫費用和回應延遲。快取命中時，重複的前綴 token 處理費用降低 90%。5 分鐘 TTL 確保快取在活躍工作階段中保持有效。",
      metrics: [
        { label: "快取命中費用", value: "−90%", delta: "相較無快取", direction: "down" },
        { label: "延遲改善", value: "−40%", delta: "長對話場景", direction: "down" }
      ],
      links: [
        { label: "docs/prompt-caching", href: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-opus-4-sonnet-4",
    date: "2025-05-22",
    version: "Claude 4",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude 4 模型家族發布：Opus 4 與 Sonnet 4",
    summary: "Claude Opus 4 和 Sonnet 4 正式發布，在程式碼、推理和長時間代理任務上實現重大突破。",
    body: {
      kind: "feature",
      description: "Claude 4 模型家族正式發布，包含 Opus 4 和 Sonnet 4 兩款模型。Opus 4 專為需要最高智慧的複雜任務設計。Sonnet 4 在速度和能力之間取得最佳平衡，成為最受歡迎的開發者模型。兩款模型在程式碼生成、數學推理和指令遵循方面均有重大突破，並原生支援延伸思考和長時間代理任務。",
      links: [
        { label: "docs/models", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" },
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-1.0.0-ga",
    date: "2025-05-22",
    version: "v1.0.0",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "Claude Code 1.0 正式版發布（GA）",
    summary: "Claude Code 結束 Beta 階段，v1.0.0 正式版隨 Claude 4 模型同步上線。",
    body: {
      kind: "feature",
      description: "Claude Code 正式脫離 Beta，發布 v1.0.0 穩定版本。隨 Claude Opus 4 和 Sonnet 4 同步上線，標誌著從研究預覽工具到生產就緒的程式碼代理平台的轉變。正式版帶來穩定的 API、完善的權限系統、可靠的檔案編輯和 Git 操作。企業使用者可放心將 Claude Code 整合至生產工作流程。",
      links: [
        { label: "github/claude-code/v1.0.0", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" },
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-0.2.125-final-beta",
    date: "2025-05-21",
    version: "v0.2.125",
    category: "brk",
    area: "cli",
    product: "claude-code",
    title: "最終 Beta 版：重大變更與 Settings 配置系統",
    summary: "Beta 階段最後一版，包含 JSON 輸出格式變更和全新的 settings.json 配置系統。",
    body: {
      kind: "breaking",
      description: "Claude Code Beta 階段的最終版本，為正式發布做準備。包含多項重大變更：JSON 輸出格式更新以符合正式版規範、settings.json 配置系統全面上線取代舊有的環境變數配置方式。現有使用者需檢查並遷移自訂配置。",
      migration: {
        text: "將環境變數配置遷移至 settings.json 格式，並更新依賴 JSON 輸出的腳本以符合新格式。"
      },
      links: [
        { label: "github/claude-code/v0.2.125", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-0.2.108-interactive-thinking",
    date: "2025-05-18",
    version: "v0.2.108",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "互動式思考：即時引導 Claude 的推理方向",
    summary: "新增互動式思考功能，可在 Claude 推理過程中即時提供引導和修正。",
    body: {
      kind: "feature",
      description: "互動式思考（Interactive Thinking）讓使用者可以在 Claude 進行延伸思考時即時介入。當 Claude 的推理方向偏離時，使用者可透過即時引導（Real-Time Steering）修正方向。此功能在複雜的架構設計和多步驟重構任務中特別有用，確保 Claude 的思考過程符合使用者意圖。",
      links: [
        { label: "github/claude-code/v0.2.108", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-0.2.90-permissions",
    date: "2025-04-25",
    version: "v0.2.90",
    category: "enh",
    area: "permissions",
    product: "claude-code",
    title: "細粒度權限系統與 Allow/Deny 規則",
    summary: "全新的權限系統支援按工具和命令設定 allow/deny 規則，減少重複的權限確認。",
    body: {
      kind: "feature",
      description: "全面重新設計的權限系統上線。支援按工具類型（Bash、Read、Write、MCP）和具體命令設定 allow/deny 規則。規則可在專案級（.claude/settings.json）和使用者級（~/.claude/settings.json）配置。「永遠允許」選項可記住常用操作的權限決定，大幅減少互動中斷。Bash 工具支援命令前綴匹配。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-0.2.75-compact",
    date: "2025-04-10",
    version: "v0.2.75",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "上下文壓縮（Compact）與 /clear 指令改進",
    summary: "自動上下文壓縮功能在接近上下文限制時觸發，/clear 完全重置工作階段。",
    body: {
      kind: "feature",
      description: "新增自動上下文壓縮功能。當對話接近上下文視窗限制時，Claude Code 會自動壓縮較早的對話內容，保留關鍵上下文同時釋放空間。/compact 指令可手動觸發壓縮。/clear 指令完全重置工作階段，清除所有對話歷史。壓縮後的摘要保留重要的決策和程式碼變更記錄。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-3.7-sonnet",
    date: "2025-03-15",
    version: "Sonnet 3.7",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude 3.7 Sonnet 與延伸思考模式發布",
    summary: "Claude 3.7 Sonnet 推出延伸思考（Extended Thinking）功能，在推理任務上大幅提升。",
    body: {
      kind: "feature",
      description: "Claude 3.7 Sonnet 是 Anthropic 首款支援延伸思考（Extended Thinking）的模型，讓 Claude 可以在回應前進行更深入的推理。延伸思考模式特別適合數學、程式碼分析和複雜邏輯推理任務。使用者可透過 API 的 thinking 參數或在 Claude Code 中按 Tab 鍵啟用此功能。",
      links: [
        { label: "docs/models", href: "https://docs.anthropic.com/en/docs/about-claude/models", kind: "doc" },
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "cc-0.2.50-git-ops",
    date: "2025-03-10",
    version: "v0.2.50",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "Git 操作強化：分支管理與 PR 工作流程",
    summary: "改進 Git 操作支援，包括智慧分支管理、PR 建立和衝突解決輔助。",
    body: {
      kind: "feature",
      description: "Git 操作獲得全面強化。Claude Code 現可更智慧地管理 Git 分支，自動建議分支名稱，協助建立 Pull Request 並生成描述。衝突解決輔助功能可分析合併衝突並提供解決建議。所有 Git 操作都在權限系統保護下執行，確保安全。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-0.2.30-sandbox",
    date: "2025-03-01",
    version: "v0.2.30",
    category: "enh",
    area: "security",
    product: "claude-code",
    title: "沙箱安全模型與網路存取控制",
    summary: "新增沙箱安全模型，限制檔案系統存取範圍和網路連線，防止意外的破壞性操作。",
    body: {
      kind: "feature",
      description: "沙箱安全模型正式上線，為 Claude Code 的操作提供額外的安全層。檔案系統存取限制在專案目錄及其子目錄中，網路連線可透過 sandbox.network 設定控制允許和封鎖的網域。危險操作（如刪除系統檔案、修改 dotfiles）會被自動攔截。macOS 使用者額外受到系統級沙箱保護。",
      links: [
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "cc-0.2.0-launch",
    date: "2025-02-24",
    version: "v0.2.0",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "Claude Code 研究預覽版首次發布",
    summary: "Anthropic 推出 Claude Code 研究預覽版，一個在終端中運行的代理式程式碼工具。",
    body: {
      kind: "feature",
      description: "Claude Code 作為限定研究預覽版首次亮相，與 Claude 3.7 Sonnet 同日發布。這是 Anthropic 的首個代理式程式碼工具，直接在終端中運行，可搜尋和理解程式碼庫、智慧搜尋程式碼、在獲得權限後編輯檔案、執行測試套件、運行 shell 指令，以及進行 Git 操作（commit、push、branch）。內建權限系統讓使用者完全控制 Claude 可執行的操作。",
      steps: [
        { title: "安裝", text: "透過 npm install -g @anthropic-ai/claude-code 全域安裝。" },
        { title: "啟動", text: "在專案目錄中執行 claude 啟動互動式工作階段。" },
        { title: "開始使用", text: "用自然語言描述任務，Claude 會分析程式碼庫並協助完成。" }
      ],
      links: [
        { label: "anthropic/blog", href: "https://www.anthropic.com/news", kind: "doc" },
        { label: "github/claude-code", href: "https://github.com/anthropics/claude-code", kind: "gh" }
      ]
    }
  },
  // ── 里程碑：Claude 產品歷史起點 ──
  {
    id: "claude-product-origin",
    date: "2023-03-14",
    version: "Claude 1.0",
    category: "milestone",
    area: "platform",
    product: "claude",
    title: "Claude 產品歷史起點",
    summary: "Claude 作為產品自 2023 年 3 月問世以來，歷經多代模型演進與平台擴展，積累了龐大的更新歷史。",
    body: {
      kind: "feature",
      description: "Claude 由 Anthropic 於 2023 年 3 月首次公開發布，命名致敬資訊理論之父 Claude Shannon。自問世以來，Claude 經歷了多代重要演進：Claude 1 與 Claude Instant（2023 年 3 月）、Claude 2 公開版（2023 年 7 月）、Claude 3 模型家族 — Opus、Sonnet、Haiku（2024 年 3 月）、claude.ai 網頁平台、行動應用程式（iOS/Android）、Projects 專案功能、Artifacts 互動成品、Claude 3.5 Sonnet（2024 年 6 月）、API Tool Use、Computer Use、Model Context Protocol (MCP)、200K 上下文視窗等豐富功能。由於 Claude 產品的完整更新歷史極為龐大，本時間軸僅追蹤自 Claude Code 於 2025 年 2 月誕生以來的相關更新記錄。"
    }
  }
];

// category metadata
export const CATEGORIES = {
  new:  { label: "新功能",     short: "新功能",       className: "cat-new" },
  enh:  { label: "功能增強",   short: "增強",         className: "cat-enh" },
  bug:  { label: "錯誤修正",   short: "修正",         className: "cat-bug" },
  brk:  { label: "重大變更",   short: "重大變更",     className: "cat-brk" },
  milestone: { label: "里程碑", short: "里程碑",     className: "cat-milestone" },
};
