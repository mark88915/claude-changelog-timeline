// Changelog data — richly populated with real Claude Code and Claude updates, ordered newest to oldest
export const CHANGELOG = [
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
  }
];

// category metadata
export const CATEGORIES = {
  new:  { label: "新功能",     short: "新功能",       className: "cat-new" },
  enh:  { label: "功能增強",   short: "增強",         className: "cat-enh" },
  bug:  { label: "錯誤修正",   short: "修正",         className: "cat-bug" },
  brk:  { label: "重大變更",   short: "重大變更",     className: "cat-brk" },
};
