// Changelog data — richly populated with real Claude Code and Claude updates, ordered newest to oldest
export const CHANGELOG = [
  {
    id: "anthropic-model-hardware-standard-2026-08-27",
    date: "2026-08-27",
    version: "公告",
    category: "new",
    area: "model",
    product: "claude",
    title: "Anthropic 發布 Model Hardware Standard（MHS）研究預覽版",
    summary: "Anthropic 開放 MHS 研究預覽，讓 AI 代理可安全操控顯微鏡、機械臂等實體設備，初期面向科學研究室與先進製造業，未來將開源。",
    body: {
      kind: "feature",
      description: "Anthropic 於 2026-08-27 宣布發布 Model Hardware Standard（MHS）研究預覽版。MHS 是一套讓 AI 代理安全操控實體設備的統一規範，涵蓋顯微鏡、液體處理器、機械臂等實驗室與製造設備。\n\n**主要特點**\n• 企業可在「數小時或數分鐘」內完成 AI 與設備整合，而非傳統需要數週並依賴專業工程師的客製化建置\n• 模型無關（model agnostic），不強制使用 Claude 系列模型\n• 初期開放給科學研究室和先進製造業者，Anthropic 計畫未來將其開源\n• 可並行操控多台儀器，執行從例行藥物探索實驗到量子電腦雷射校準等複雜任務\n\n**策略意義**\n此舉標誌 Anthropic 正式進入實體 AI 領域，與已投資數十億打造 AI 原生硬體的 OpenAI 和 Amazon 展開競爭。",
      links: [
        { label: "Anthropic 官方部落格", href: "https://www.anthropic.com/news/model-hardware-standard-research-preview", kind: "doc" },
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/08/27/anthropic-pushes-into-physical-world-with-new-standard-to-help-ai-agents-operate-machines.html", kind: "doc" },
        { label: "Fortune 報導", href: "https://fortune.com/2026/08/27/anthropic-makes-first-move-into-physical-ai-with-universal-standard-for-scientists-manufacturing/", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-248-2026-08-27",
    date: "2026-08-27",
    version: "v2.1.248",
    category: "new",
    area: "security",
    product: "claude-code",
    title: "v2.1.248：--restricted 安全模式、per-agent 快取 TTL、跨工作階段訊息傳遞",
    summary: "Claude Code v2.1.248 新增 --restricted 安全沙盒模式、per-agent prompt cache TTL 設定、Bedrock/Vertex/Foundry 跨工作階段訊息傳遞，並修復多項 OAuth 快取與 Desktop 工作階段問題。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.248 於 2026-08-27 發布，帶來重要安全性增強與跨平台功能改善。\n\n**新功能**\n• `--restricted` 模式：移除可執行命令/程式碼的內建工具及 WebFetch，限制檔案工具在工作目錄範圍內，拒絕 `bypassPermissions`，並忽略使用者/專案/本地設定檔\n• `experimental.cacheTtl`：可在 agent frontmatter 中設定自訂 prompt cache 存活時間（`\"5m\"` 或 `\"1h\"`）\n• 伺服器管理設定診斷：啟動時警告與 `/doctor`/`status` 面板說明設定載入失敗原因\n• 跨工作階段訊息傳遞：`SendMessage`/`ListAgents` 現在可在 Bedrock、Vertex 和 Foundry 的不同工作階段間運作\n• `/usage-credits` 指令：Enterprise 組織可請求更高用量限制\n\n**修復**\n• 修復長工作階段中因 OAuth token 刷新導致的 prompt cache 遺漏問題\n• 修復 Claude Desktop 工作階段 30 天後消失的問題\n• 修復 Remote Control 工作階段偶爾遺失權限提示的問題\n• 修復 worktree 工作階段清理時遺失 checkout 的問題\n• 大幅縮減 Workflow 工具 prompt 佔用（從 5.7k 降至約 1k tokens）",
      links: [
        { label: "GitHub Release v2.1.248", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.248", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-247-2026-08-26",
    date: "2026-08-26",
    version: "v2.1.247",
    category: "new",
    area: "slash-command",
    product: "claude-code",
    title: "v2.1.247：SendFeedback 工具與 /claude-api cost-optimize 指令",
    summary: "Claude Code v2.1.247 新增讓 Claude 起草問題回報的 SendFeedback 工具，以及分析 Claude API 費用並提供優化建議的 /claude-api cost-optimize 指令。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.247 於 2026-08-26 發布，新增兩項實用功能。\n\n**新功能**\n• `SendFeedback` 工具：當工作階段發生問題時，Claude 可起草問題回報供使用者審查後透過 `/feedback` 提交\n• `/claude-api cost-optimize`：分析現有專案的 Claude API 費用分佈，並引導使用者逐步優化成本\n• 更新 Admin API 覆蓋範圍，擴展組織管理功能至 `/claude-api` 技能\n\n**修復**\n• 修復 subagent 在模型 404 錯誤時崩潰的問題（現在會使用備用模型鏈）\n• 修復 kitty-protocol 終端機中非拉丁語系鍵盤快捷鍵問題\n• 修復 Bash sandbox 符號連結刪除問題\n• 多項 plugin marketplace 和 MCP 伺服器處理改善",
      links: [
        { label: "GitHub Release v2.1.247", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.247", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-memory-unified-2026-08-25",
    date: "2026-08-25",
    version: "功能更新",
    category: "enh",
    area: "desktop",
    product: "claude",
    title: "Claude 記憶功能統一：跨聊天與 Cowork 全面運作",
    summary: "Claude 記憶功能現在跨聊天和 Cowork 工作，用戶可逐主題查看、編輯、刪除記憶，敏感主題預設不儲存。",
    body: {
      kind: "feature",
      description: "Anthropic 於 2026-08-25 宣布 Claude 記憶功能重大更新。記憶系統現已統一跨聊天和 Cowork 工作，不論在哪個介面學到的內容都會被記住。\n\n**主要功能**\n• 記憶在 Settings > Memory 以主題分類列出，用戶可逐一查看、編輯或刪除\n• 健康、種族、性別認同、宗教、政治等敏感主題預設不儲存，需手動開啟「Include sensitive topics in memory」\n• 記憶功能預設在 Free、Pro、Max 方案的網頁、桌面和行動版上啟用",
      links: [
        { label: "Anthropic Blog", href: "https://www.anthropic.com/news", kind: "doc" },
        { label: "SiliconANGLE 報導", href: "https://siliconangle.com/2026/08/25/anthropic-updates-claudes-memory-to-enhance-customization-and-protect-sensitive-topics/", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-246-2026-08-25",
    date: "2026-08-25",
    version: "v2.1.246",
    category: "enh",
    area: "slash-command",
    product: "claude-code",
    title: "v2.1.246：Bash allow rules 萬用字元警告與 /permissions Auto 模式分頁",
    summary: "Claude Code v2.1.246 新增 Bash allow rules 萬用字元啟動警告，並在 /permissions 加入 Auto 模式分頁，提升安全性與可用性。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.246 於 2026-08-25 發布，帶來多項安全性與可用性改善。\n\n**新功能**\n• 新增 Bash allow rules 萬用字元啟動警告：當規則在子命令前包含萬用字元（如 `Bash(git * main)`）時，啟動時會顯示警告提示\n• /permissions 新增 Auto 模式分頁，可查看和編輯 auto 模式分類規則\n• 完成時間新增至回合結束的持續時間列\n\n**修復**\n• 修復 Notebook 單元格刪除/替換確認對話框無法讀取時顯示現有內容的問題\n• 修復 slash commands 顯示 HTML 實體而非實際字元的問題",
      links: [
        { label: "GitHub Release v2.1.246", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.246", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-wellbeing-research-grants-2026-08-25",
    date: "2026-08-25",
    version: "公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 資助 AI 對人類福祉影響的評估研究",
    summary: "Anthropic 宣布提供研究補助，支持探討 AI 如何影響人類福祉的相關研究。",
    body: {
      kind: "feature",
      description: "Anthropic 於 2026-08-25 宣布提供研究補助，支持研究人員評估 AI 對人類福祉的影響。此舉旨在深入了解 AI 技術對社會的長期影響，並確保 AI 的發展符合人類利益。",
      links: [
        { label: "Anthropic 新聞", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-245-2026-08-25",
    date: "2026-08-25",
    version: "v2.1.245",
    category: "bug",
    area: "performance",
    product: "claude-code",
    title: "v2.1.245：修復 Linux glibc 2.44 啟動崩潰問題",
    summary: "Claude Code v2.1.245 修復在最新 glibc 版本（Arch Linux、CachyOS 和 Fedora Rawhide）上的啟動崩潰問題，確保工具在現代 Linux 發行版上可正常運行。",
    body: {
      kind: "bug",
      description: "Claude Code v2.1.245 於 2026-08-25 發布，修復了影響使用最新 glibc 版本（glibc 2.44）Linux 發行版（包括 Arch Linux、CachyOS 和 Fedora Rawhide）的啟動崩潰問題。此修復確保工具在現代 Linux 發行版上可穩定運行。",
      problem: "在使用最新 glibc 2.44 的 Linux 發行版（如 Arch Linux、CachyOS、Fedora Rawhide）上，Claude Code 無法正常啟動並發生崩潰。",
      fix: "更新二進位檔以相容最新 glibc 版本，解決啟動崩潰問題。",
      links: [
        { label: "GitHub Release v2.1.245", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.245", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-243-2026-08-24",
    date: "2026-08-24",
    version: "v2.1.243",
    category: "new",
    area: "performance",
    product: "claude-code",
    title: "v2.1.243：Loops 用量統計、模型選擇器設定、快取 TTL 設定、無密鑰登入及效能大幅提升",
    summary: "Claude Code v2.1.243 新增 /usage Loops 細項統計、modelPicker 自訂選單、promptCacheTtl 快取設定、Anthropic Console 無密鑰登入，並將啟動二進位檔從 340 MB 大幅壓縮至 75 MB。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.243 於 2026-08-24 發布，帶來多項重大新功能與效能提升。\n\n**新功能**\n• `/usage` 新增 Loops 細項統計，顯示每次迴圈的執行次數、總 token 用量、每次平均 token 及最後執行時間\n• 新增 `modelPicker` 設定，可自訂 `/model` 選單中顯示的模型列表與標籤順序\n• 新增 `promptCacheTtl` 與 `subagentPromptCacheTtl` 設定，控制提示詞快取的存活時間\n• 新增 `modelPricing` 管理設定，讓組織可設定自訂合約費率\n• 新增透過 Anthropic Console 的 `/login` 無密鑰登入功能\n\n**修復**\n• 修復非互動式及 SDK 工作階段中遠端 MCP 伺服器的重新連線問題\n• 修復使用快取伺服器端停用時，啟動時 auto 模式無法使用的問題\n• 修復使用者命名空間及無根容器中的跨工作階段訊息傳遞問題\n\n**效能改善**\n• 大幅提升啟動速度並減少二進位檔大小（採用 zstd 壓縮：Linux x64 從 340 MB 降至 ~75 MB）\n• 採用按需載入程式碼，每個工作階段約節省 40–70 MB 記憶體用量",
      links: [
        { label: "GitHub Release v2.1.243", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.243", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-241-2026-08-23",
    date: "2026-08-23",
    version: "v2.1.241",
    category: "bug",
    area: "performance",
    product: "claude-code",
    title: "v2.1.241：錯誤修正與可靠性改善",
    summary: "Claude Code v2.1.241 發布，包含多項錯誤修正與穩定性提升。",
    body: {
      kind: "bug",
      description: "Claude Code v2.1.241 於 2026-08-23 發布，為小版本維護更新，包含多項錯誤修正與可靠性改善。本次版本無新功能，專注於提升整體穩定性與執行品質。",
      links: [
        { label: "GitHub Release v2.1.241", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.241", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-240-2026-08-22",
    date: "2026-08-22",
    version: "v2.1.240",
    category: "bug",
    area: "performance",
    product: "claude-code",
    title: "v2.1.240：錯誤修正與可靠性改善",
    summary: "Claude Code v2.1.240 發布，包含多項錯誤修正與穩定性提升。",
    body: {
      kind: "bug",
      description: "Claude Code v2.1.240 於 2026-08-22 發布，為小版本維護更新，包含多項錯誤修正與可靠性改善。本次版本無新功能，專注於提升整體穩定性與執行品質。",
      links: [
        { label: "GitHub Release v2.1.240", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.240", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-239-2026-08-22",
    date: "2026-08-22",
    version: "v2.1.239",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "v2.1.239：成本估算納入資料住留溢價、Bedrock 全螢幕渲染、Python SDK 遷移工具及 Alpine/musl 原生媒體支援",
    summary: "Claude Code v2.1.239 新增資料住留工作區的 1.1× 美國推論溢價成本估算、Bedrock 全螢幕渲染擴展、/claude-api upgrade Python SDK 0.x→1.x 遷移工具、雲端工作階段 claude.ai 插件同步（@synced 標籤），以及 Alpine/musl 建置原生圖片貼上與剪貼板支援；修復代理串流、憑證處理、工作階段恢復及 JetBrains IDE 終端機問題。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.239 於 2026-08-22 發布，帶來成本透明度改善、平台支援擴展及多項穩定性修復。\n\n**新功能**\n• 成本估算新增資料住留工作區的 1.1× 美國專屬推論溢價顯示\n• Bedrock 使用者可使用先前受限的全螢幕渲染模式\n• 新增 `/claude-api upgrade` 指令，提供 Python SDK 0.x → 1.x 遷移工具\n• 雲端工作階段自動同步 claude.ai 插件，以 `@synced` 標籤標示\n• Alpine/musl 建置（含 Linux musl 環境）新增原生圖片貼上、剪貼板及音訊擷取功能\n\n**修復**\n• 修復透過代理使用時的串流不穩定問題\n• 修復憑證處理邊界情境導致的工作階段中斷\n• 修復工作階段恢復過程中的邊界案例錯誤\n• 修復 JetBrains IDE 中終端機渲染閃爍與版面問題",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "GitHub Releases", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "python-sdk-v1-0-2026-08-22",
    date: "2026-08-22",
    version: "Python SDK v1.0",
    category: "brk",
    area: "model",
    product: "claude",
    title: "Anthropic Python SDK v1.0 正式發布：遷移至 httpx2、要求 Python 3.10+、移除舊版 API",
    summary: "Anthropic Python SDK v1.0 正式發布，HTTP 層從 httpx 遷移至 httpx2，最低要求 Python 3.10+，移除舊版 Text Completions API；並棄用 Messages 方法上的 temperature、top_p、top_k 參數，async .with_raw_response 現需 await response.parse()。",
    body: {
      kind: "breaking",
      description: "Anthropic Python SDK v1.0 於 2026-08-22 正式發布，帶來多項重大（破壞性）變更。\n\n**重大變更**\n• HTTP 層從 `httpx` 遷移至 `httpx2`\n• 最低 Python 版本要求升至 3.10+\n• 移除舊版 Text Completions API 等長期棄用的介面\n• 棄用 Messages 方法上的 `temperature`、`top_p`、`top_k` 參數\n• Async 客戶端的 `.with_raw_response` 結果現需 `await response.parse()`\n• `AnthropicBedrock` 未設定 AWS 區域時改為拋出錯誤（不再預設為 us-east-1）\n\n**遷移提示**\n• 使用 Claude Code 的 `/claude-api upgrade` 指令可取得半自動遷移工具\n• 詳細遷移指南請參閱官方文件",
      migration: {
        title: "從 0.x 升級至 1.0",
        text: "升級前請確認 Python >= 3.10、移除 Text Completions API 用法、更新 async `.with_raw_response` 呼叫，並為 AnthropicBedrock 明確設定 AWS 區域。"
      },
      diff: {
        before: [
          "from anthropic import Anthropic",
          "client = AnthropicBedrock()  # 預設 us-east-1",
          "result = client.beta.with_raw_response.messages.create(...)",
          "data = result.parse()"
        ],
        after: [
          "from anthropic import Anthropic",
          "client = AnthropicBedrock(aws_region='us-east-1')  # 需明確設定",
          "result = await client.beta.with_raw_response.messages.create(...)",
          "data = await result.parse()"
        ]
      },
      links: [
        { label: "Python SDK v1.0 Release", href: "https://github.com/anthropics/anthropic-sdk-python/releases", kind: "gh" },
        { label: "Claude Developer Platform 版本說明", href: "https://platform.claude.com/docs/en/release-notes/api", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-mythos-5-security-2026-08-21",
    date: "2026-08-21",
    version: "Claude Mythos 5 Security",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Mythos 5 整合至 Claude Security：企業漏洞掃描、3,500 萬美元 Defender Fund",
    summary: "Anthropic 宣布 Claude Mythos 5 整合至 Claude Security，企業客戶可對程式碼庫執行 AI 驅動漏洞掃描並獲修補建議；同時設立 3,500 萬美元 Defender Advantage Fund 信用計畫，支援開源組織強化安全能力。",
    body: {
      kind: "feature",
      description: "2026-08-21，Anthropic 宣布將 Claude Mythos 5 整合至 Claude Security 平台，並推出一系列網路安全防禦強化措施。\n\n**主要功能**\n• 企業客戶可使用 Claude Mythos 5 對程式碼庫執行漏洞掃描，並獲得人工審查的修補建議\n• 網路安全驗證計畫（Cyber Verification Program）擴展，開放漏洞分類與驗證的降低防護存取\n• Claude Mythos 5 整合至第三方網路安全產品，防禦者可透過特定介面取得前沿能力\n• 採用受限輸出模型：使用者獲得特定成品（修補程式、安全警報），而非直接存取模型\n\n**Defender Advantage Fund**\n• 3,500 萬美元信用計畫，支援開源組織\n• 資助對象：修補漏洞、自動化掃描/修補流程、開發新安全方法的組織",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-238-2026-08-21",
    date: "2026-08-21",
    version: "v2.1.238",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "v2.1.238：readline 按鍵風格、插件市集 headersHelper、Self-Hosted Runner 延遲關機及長工作階段記憶體洩漏修復",
    summary: "Claude Code v2.1.238 新增 keybindingFlavor 設定（支援 readline 風格的 Ctrl+W 刪除行為）、插件市集 headersHelper 可動態產生 HTTP 標頭；修復長工作階段因子代理工具結果未釋放造成的無界記憶體增長；同時修復 Remote Control 工作階段繼承與重連問題，以及 emoji 字元的終端機渲染問題。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.238 於 2026-08-21 發布，帶來輸入設定、安全強化及多項穩定性修復。\n\n**新功能**\n• 新增 `keybindingFlavor` 設定，支援 readline 風格的 Ctrl+W 刪除行為（僅刪除單詞，不刪除整行）\n• 插件市集新增 `headersHelper` 支援，可動態產生 HTTP 標頭（如短期 token），用於目錄存取驗證\n• 新增 `claude self-hosted-runner --defer-shutdown-max-min` 選項及代理授權指令支援\n\n**修復**\n• 修復長工作階段因子代理工具結果未釋放造成的無界記憶體增長問題\n• 修復自訂、專案及插件輸出風格在工作階段中途漂移（drift）的問題\n• 修復 MCP 互動對話框中 URL 超過 4,096 字元時顯示截斷的問題\n• 修復 Remote Control 工作階段繼承異常及重連失敗問題\n• 修復 SSH 連線速度緩慢時 Bash 指令含退格鍵輸入的終端機處理問題\n• 修復 emoji 字元造成文字換行異常的渲染問題\n• 更新 `claude-api` 技能以反映 Managed Agents 8/19 版本說明",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "GitHub Releases", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-237-2026-08-20",
    date: "2026-08-20",
    version: "v2.1.237",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "v2.1.237：修復 LLM Gateway 提示快取失效、新增「Concise」內建輸出風格",
    summary: "Claude Code v2.1.237 修復使用 LLM Gateway 或自訂 Base URL 時提示快取（prompt cache）無法正常運作的問題；並新增「Concise」內建輸出風格，讓 Claude 以結果優先、跳過前言和旁白，可在 /config 的 Output style 中選用。",
    body: {
      kind: "bug",
      description: "Claude Code v2.1.237 於 2026-08-20 發布，包含一項重要 bug 修復及新功能。\n\n**修復**\n• 修復使用 LLM Gateway 或自訂 Base URL 的工作階段中，提示快取（prompt cache）無法正常命中的問題，影響成本節省效果\n\n**新功能**\n• 新增「Concise」內建輸出風格：Claude 以結果優先、跳過前言與旁白，工作仍同樣徹底；可在 `/config` 的 Output style 設定中選用",
      problem: "使用 LLM Gateway 或自訂 Base URL 的工作階段，提示快取（prompt cache）功能失效，導致重複請求無法命中快取，增加延遲與費用。",
      rootCause: "Prompt caching 邏輯未正確處理非標準 base URL 路徑的請求",
      fix: "修正快取鍵生成邏輯，確保 LLM Gateway 及自訂 Base URL 場景下正確建立與命中快取",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "GitHub Releases", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-academy-2026-08-20",
    date: "2026-08-20",
    version: "Claude Academy",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "Claude Academy 正式上線：AI 學習平台，提供課程、徽章與個人化推薦",
    summary: "Anthropic 推出 Claude Academy（academy.claude.com），提供安全有效使用 AI 的學習課程、互動教學、成就徽章及個人化學習推薦，強調實用 AI 素養與人機協作能力培養。",
    body: {
      kind: "feature",
      description: "2026-08-20，Anthropic 正式推出 Claude Academy，一個專注於安全且有效使用 AI 的學習平台。\n\n**主要功能**\n• 結構化課程與互動教學模組\n• 成就徽章系統，記錄學習歷程\n• 個人化學習推薦，根據用戶需求調整內容\n• 強調實用 AI 素養、廣泛學習思維與人機協作\n\n**存取方式**\n• 平台網址：academy.claude.com\n• 已整合至 Claude 個人資料選單，方便直接進入",
      steps: [
        { title: "前往 Claude Academy", text: "在瀏覽器開啟 academy.claude.com 或透過 Claude 個人資料選單存取。" },
        { title: "選擇學習路徑", text: "根據個人化推薦選擇適合的課程與教學模組。" },
        { title: "完成課程獲取徽章", text: "完成各階段學習後，可獲得成就徽章記錄進度。" }
      ],
      links: [
        { label: "Claude Academy", href: "https://academy.claude.com", kind: "doc" }
      ]
    }
  },
  {
    id: "computer-use-browser-use-ga-2026-08-20",
    date: "2026-08-20",
    version: "computer_toolset_20260801",
    category: "new",
    area: "model",
    product: "claude",
    title: "Computer Use 及 Browser Use 工具正式 GA：批次動作、視埠控制驅動託管瀏覽器",
    summary: "Computer Use 工具（computer_toolset_20260801）正式 GA，批次動作與縮放預設啟用；Browser Use 工具（browser_toolset_20260801）正式上線，以視埠控制驅動託管瀏覽器，新增頁面結構讀取功能，提升網頁元素定位可靠性。",
    body: {
      kind: "feature",
      description: "2026-08-20，Anthropic 宣布 Computer Use 及 Browser Use 工具正式轉為正式版（GA）。\n\n**Computer Use GA（computer_toolset_20260801）**\n• 每次操作可執行多個批次動作，減少任務完成所需的往返次數\n• 縮放功能預設啟用\n• 不再需要 beta header\n\n**Browser Use GA（browser_toolset_20260801）**\n• 新工具類型，以視埠控制驅動 Anthropic 託管的瀏覽器\n• 新增頁面結構讀取，提升網頁元素定位可靠性\n• 支援更複雜的多步驟網頁自動化任務\n\n**實際成效**\n• 用戶回報：最長的理賠工作流程從 32 分鐘縮短至 13 分鐘，每項任務成本降低約 30%",
      links: [
        { label: "Computer Use 文件", href: "https://platform.claude.com/docs/en/build-with-claude/computer-use", kind: "doc" },
        { label: "Claude Platform 版本說明", href: "https://platform.claude.com/docs/en/release-notes/api", kind: "doc" }
      ]
    }
  },
  {
    id: "skills-api-ga-2026-08-20",
    date: "2026-08-20",
    version: "Skills API GA",
    category: "new",
    area: "model",
    product: "claude",
    title: "Agent Skills 及 Skills API 正式 GA：/v1/skills 端點支援自訂技能上傳與版本控制",
    summary: "Agent Skills 及 Skills API（/v1/skills 端點）正式轉為 GA，不再需要 beta header；支援自訂技能的上傳、版本管理，並可附加至 Managed Agents 工作階段，強化企業代理工作流程自動化。",
    body: {
      kind: "feature",
      description: "2026-08-20，Agent Skills 及 Skills API 正式轉為正式版（GA）。\n\n**重要變更**\n• `/v1/skills` 端點不再需要 beta header\n• 支援自訂技能上傳、版本控制與管理\n• 技能可附加至 Managed Agents 工作階段使用\n\n**適用場景**\n• 企業可將內部工具、資料存取邏輯封裝為可重用技能\n• 透過版本控制確保技能更新的可追蹤性\n• 簡化複雜代理工作流程的技能管理流程",
      links: [
        { label: "Skills API 文件", href: "https://platform.claude.com/docs/en/build-with-claude/agent-skills", kind: "doc" },
        { label: "Claude Platform 版本說明", href: "https://platform.claude.com/docs/en/release-notes/api", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-236-2026-08-19",
    date: "2026-08-19",
    version: "v2.1.236",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "v2.1.236：ANTHROPIC_DEFAULT_MODEL 環境變數、跨工作階段閒置通知及 macOS 沙箱安全強化",
    summary: "Claude Code v2.1.236 新增 ANTHROPIC_DEFAULT_MODEL 環境變數可設定新工作階段預設模型；新增跨工作階段閒置通知（notify_when_idle）；強化 macOS 沙箱安全（萬用字元讀取拒絕規則優先於允許規則）；修復剪貼板複製失敗、全螢幕渲染崩潰及 /model 選擇器超出終端機範圍等問題。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.236 於 2026-08-19 發布，帶來環境變數設定、跨工作階段通知及多項安全與錯誤修復。\n\n**新功能**\n• 新增 `ANTHROPIC_DEFAULT_MODEL` 環境變數，設定新工作階段的起始預設模型；仍可透過 `/model` 選擇器覆蓋，且覆蓋設定會跨重新啟動持續保存\n• 新增跨工作階段閒置通知（`notify_when_idle`），允許一個 Claude Code 工作階段在另一個工作階段進入閒置時收到通知，為選擇性、一次觸發、無輪詢（支援 macOS 和 Linux）\n• 強化 macOS 沙箱安全：萬用字元讀取拒絕規則（如 `**/.env`）現在在允許讀取區域內優先生效，防止透過檔案重新命名繞過拒絕規則\n\n**修復**\n• 修復工作階段切換目錄後目錄被刪除時，剪貼板複製及背景工作階段失敗的問題\n• 修復全螢幕渲染器崩潰（現在回退至經典渲染器）\n• 修復 `/model` 選擇器顯示超出終端機視窗大小的問題\n• 修復 `SendMessage` 訊息文字定位問題\n• 修復子程序失敗的未處理 Promise 拒絕",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "GitHub Releases", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "files-api-ga-2026-08-19",
    date: "2026-08-19",
    version: "Files API GA",
    category: "new",
    area: "model",
    product: "claude",
    title: "Files API 正式轉為 GA：不再需要 beta header，新增過期設定與分頁查詢",
    summary: "Files API 正式轉為 GA，/v1/files 端點不再需要 `files-api-2025-04-14` beta header；新增檔案過期設定（expires_in_seconds）、分頁查詢（page/next_page）及 ids[] 篩選功能，每組織儲存上限 1TB，速率限制 500 req/min。",
    body: {
      kind: "feature",
      description: "2026-08-19，Files API 正式轉為正式版（GA）。\n\n**重要變更**\n• `/v1/files` 端點及引用已上傳檔案的 Messages API 請求，不再需要 `files-api-2025-04-14` beta header\n• 未附帶 beta header 的請求將使用 GA 回應格式\n\n**新功能（GA 格式）**\n• 檔案過期設定：上傳時可設定 `expires_in_seconds`，檔案物件將回報 `expires_at`\n• 分頁查詢：列出檔案時支援 `page` 和 `next_page` 分頁參數\n• `ids[]` 篩選：列出特定 ID 的檔案\n• 儲存上限：每組織 1TB\n• 速率限制：每分鐘 500 個請求\n\n**相容性**\n• 仍附帶 beta header 的請求繼續正常運作，但將回傳舊版回應格式",
      links: [
        { label: "Files API 文件", href: "https://platform.claude.com/docs/en/build-with-claude/files", kind: "doc" },
        { label: "Claude Platform 版本說明", href: "https://platform.claude.com/docs/en/release-notes/api", kind: "doc" }
      ]
    }
  },
  {
    id: "admin-api-user-management-ga-2026-08-19",
    date: "2026-08-19",
    version: "Admin API GA",
    category: "new",
    area: "model",
    product: "claude",
    title: "Admin API 用戶管理端點正式 GA：Claude Enterprise 成員、群組與自訂角色管理",
    summary: "Claude Enterprise 組織的 Admin API 用戶管理端點（成員、邀請、群組、自訂角色）正式轉為 GA，不再需要 `anthropic-beta: ce-user-management-2026-07-13` header，方便安全團隊整合 SSO 與 SCIM 系統。",
    body: {
      kind: "feature",
      description: "2026-08-19，Claude Enterprise 的 Admin API 用戶管理端點正式轉為正式版（GA）。\n\n**端點範圍**\n• 成員管理（Members）\n• 邀請管理（Invites）\n• 群組管理（Groups）\n• 自訂角色管理（Custom Roles）\n\n**重要變更**\n• 群組和自訂角色請求不再需要 `anthropic-beta: ce-user-management-2026-07-13` header\n• 仍附帶舊版 beta header 的請求繼續被接受且行為不變\n\n**適用場景**\n• 企業安全團隊可透過 API 統一管理組織成員與權限\n• 方便整合 SSO（單一登入）與 SCIM 系統進行自動化用戶佈建",
      links: [
        { label: "用戶管理文件", href: "https://platform.claude.com/docs/en/manage-claude/user-management", kind: "doc" },
        { label: "Admin API 文件", href: "https://platform.claude.com/docs/en/api/admin", kind: "doc" },
        { label: "Claude Platform 版本說明", href: "https://platform.claude.com/docs/en/release-notes/api", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-235-2026-08-18",
    date: "2026-08-18",
    version: "v2.1.235",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "v2.1.235：可選拼字檢查、語言伺服器快取修復及多項終端機 UI 改善",
    summary: "Claude Code v2.1.235 新增可選拼字檢查功能（支援 aspell/hunspell/ispell），可即時在輸入框標示拼寫錯誤；同時修復語言伺服器中斷時的提示快取失效問題、嵌套 Markdown 清單縮排錯誤、多行提示高亮顯示偏移，以及 Shift+Tab 在權限提示中誤觸批准的問題。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.235 於 2026-08-18 發布，帶來拼字檢查新功能及多項終端機 UI 修復。\n\n**新功能**\n• 新增可選拼字檢查設定，可在輸入提示時即時以底線標示拼寫錯誤，支援已安裝的 aspell、hunspell 或 ispell\n\n**修復**\n• 修復語言伺服器中斷或重新連線時，造成整個提示快取（prompt cache）失效的問題\n• 修復嵌套 Markdown 清單項目（深度 3 以上）在終端機 UI 中縮排錯位的問題，並新增換行時的懸掛縮排\n• 修復多行提示中斜線指令、關鍵字及 @ 提及高亮顯示偏移一個或多個字元的問題\n• 修復 Shift+Tab 在權限提示備註欄內，原應關閉欄位卻誤觸批准並授予工作階段編輯權限的問題",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "GitHub Releases", href: "https://github.com/anthropics/claude-code/releases", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-234-2026-08-17",
    date: "2026-08-17",
    version: "v2.1.234",
    category: "enh",
    area: "security",
    product: "claude-code",
    title: "v2.1.234：GitLab MR 狀態徽章、自動繼續工作階段、NTLM 安全修復及多項 UI 改善",
    summary: "Claude Code v2.1.234 新增 GitLab MR 狀態徽章、CLAUDE_CODE_PROJECT_DIR_NAME 環境變數、selection:clear 按鍵綁定，並在 claude.ai 使用量上限重置後自動繼續工作階段；同時修復 Windows NT 命名空間路徑的 NTLM 憑證洩漏安全漏洞，以及 Auto Mode 長工作階段重複拒絕沙箱指令的問題。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.234 於 2026-08-17 發布，帶來安全強化、GitLab 整合及使用體驗改善。\n\n**新功能**\n• 新增 `CLAUDE_CODE_PROJECT_DIR_NAME` 環境變數，讓每工作階段有獨立配置目錄的主機可自訂短名稱\n• 新增 `selection:clear` 按鍵綁定動作，可清除應用程式內的文字選取狀態\n• 在 claude.ai 使用量上限重置後，工作階段自動繼續（可在 /config 中停用）\n• 新增 GitLab MR 狀態徽章於頁尾及狀態列，顯示 MR 狀態（草稿／待審／通過）\n\n**安全強化**\n• 拒絕遠端檔案讀取、工作階段還原、CLAUDE.md 引用、工作流程腳本及檔案上傳中的 Windows NT 命名空間路徑（`\\?\\?\\`），防止 NTLM 憑證洩漏攻擊\n\n**修復**\n• 修復 Auto Mode 在超長工作階段對話壓縮後重複拒絕沙箱指令網路存取的問題\n• 修復回答背景子代理工具權限提示時，工作階段範疇的權限答覆（含拒絕）被丟棄的問題\n• 修復含異常 Unicode 字元訊息造成 Markdown 渲染緩慢的問題\n• 修復水平分隔線緊接下一行的顯示問題，改善指令行合併邏輯",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "Releasebot v2.1.234", href: "https://releasebot.io/updates/anthropic/claude-code", kind: "doc" }
      ]
    }
  },
  {
    id: "legacy-workbench-sunset-2026-08-17",
    date: "2026-08-17",
    version: "API 廢棄",
    category: "brk",
    area: "performance",
    product: "claude",
    title: "舊版 Workbench 正式下線，三支實驗性提示工具 API 同步退役",
    summary: "Claude Console 舊版 Workbench（platform.claude.com/workbench）於 2026-08-17 終止存取，連帶退役 /v1/experimental/generate_prompt、/v1/experimental/improve_prompt 及 /v1/experimental/templatize_prompt 三支 API，呼叫這些端點現在將回傳錯誤。",
    body: {
      kind: "breaking",
      description: "2026-08-17，Claude Console 的舊版 Workbench 正式結束存取（廢棄計畫於 2026-07-17 宣布），同時退役三支實驗性提示工具 API。\n\n**下線範圍**\n• 舊版 Workbench（platform.claude.com/workbench）：全面終止存取，已儲存的 Prompt、Prompt 版本及 Eval 資料不再可用\n• `/v1/experimental/generate_prompt`：呼叫現回傳錯誤\n• `/v1/experimental/improve_prompt`：呼叫現回傳錯誤\n• `/v1/experimental/templatize_prompt`：呼叫現回傳錯誤\n\n**新版 Workbench**\n• 更新後的 Workbench（platform.claude.com/playground）提供無狀態的模型試用環境，不支援儲存 Prompt、版本管理及 Eval 功能",
      migration: {
        title: "遷移說明",
        text: "請改用 platform.claude.com/playground 的新版 Workbench。若有使用上述三支實驗性 API，需自行實作提示生成、改善及範本化邏輯。"
      },
      links: [
        { label: "Claude Platform 版本說明", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" },
        { label: "Workbench 使用說明", href: "https://support.claude.com/en/articles/8606378-how-do-i-use-the-workbench", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-risk-report-aug-2026",
    date: "2026-08-15",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 發布第二份風險報告：不對齊風險等級調升，R&D 自動化基準趨於飽和",
    summary: "Anthropic 依責任擴展政策（RSP v3.4）發布第二份風險報告，正式將不對齊風險等級由「極低」調升為「低」以反映模型行為不確定性增加；揭露人工回饋訓練資料曾 133 百萬次交互未套用生物武器分類器（已修復）；自動化 R&D 能力評估基準開始飽和，公司表示信心下降。",
    body: {
      kind: "feature",
      description: "2026-08-15，Anthropic 依責任擴展政策（Responsible Scaling Policy v3.4）發布第二份風險報告，涵蓋 2026 年 2 月 24 日至 7 月 15 日期間。這是首份同時評估內部實驗模型的報告。\n\n**不對齊風險**\n• 正式將不對齊風險等級由「極低」調升為「低」\n• 調升原因：反映不確定性增加，而非新發現具體問題；近期安全測試中的模型行為事件降低了公司的整體信心\n\n**生物與化學武器風險**\n• 揭露：2025 年 5 月至 2026 年 4 月間，約 5 萬名人工回饋承包商的 1.33 億次交互未套用生物武器屏蔽分類器\n• 修復：漏洞已修補，審查後未發現惡意使用跡象，且無客戶受影響\n• 整體風險仍維持「低，但高於前次估計」\n\n**自動化 R&D 風險**\n• 整體評估為「低」，模型尚未達到觸發額外保護措施的門檻\n• 警示：最具體的任務型能力評估基準已開始「飽和」，不再能有效追蹤模型能力提升\n• Anthropic 表示對此評估的信心低於前次報告\n\n**政策治理更新**\n• 長期收益信託（Long-Term Benefit Trust）現可強制啟動外部審查，並核准審查人員\n• 完整未遮蔽報告須流通至至少 200 名員工",
      links: [
        { label: "Anthropic 風險報告 PDF", href: "https://www-cdn.anthropic.com/f61d49fa5596956a5dec75fea0e973bf6a6a8378/Redacted%20Risk%20Report%20August%202026%20.pdf", kind: "doc" },
        { label: "Anthropic X 公告", href: "https://x.com/AnthropicAI/status/2088324824863236248", kind: "doc" },
        { label: "TechTimes 報導", href: "https://www.techtimes.com/articles/324573/20260815/anthropic-upgrades-misalignment-risk-key-safety-benchmarks-saturate.htm", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-233-2026-08-15",
    date: "2026-08-15",
    version: "v2.1.233",
    category: "enh",
    area: "mcp",
    product: "claude-code",
    title: "v2.1.233：GitLab MR 支援、Linux 記憶體 cgroup、MCP v2 修復、自架執行器加速及螢幕閱讀器改進",
    summary: "Claude Code v2.1.233 新增 GitLab MR URL 的 --worktree 旗標支援、Linux Bash 指令記憶體 cgroup 管理以防建置失控、修復無伺服器主機 MCP v2 連線問題、提升自架執行器啟動速度、改善 /effort 螢幕閱讀器體驗，並廢棄 Opus 4.8+/Sonnet 5+ 模型的 todo 追蹤工具。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.233 於 2026-08-15 發布，帶來 GitLab 整合強化、Linux 系統穩定性改進及無障礙功能提升。\n\n**新功能與強化**\n• `--worktree` 旗標現支援 GitLab MR URL，可直接從 Merge Request 建立工作樹\n• Linux 上的 Bash 工具指令現可透過記憶體 cgroup 管理，防止建置失控佔用過多資源\n• 廢棄 Opus 4.8+/Sonnet 5+ 模型的 todo/task 追蹤工具，改由這些模型原生任務管理能力處理\n\n**修復**\n• 修復無伺服器主機上的 MCP v2 連線問題\n• 修復 Windows NT `\\\\?\\\\` 裝置前綴路徑繞過 UNC 路徑驗證的安全問題\n• 改善 `claude self-hosted-runner` 工作階段啟動時間，消除不必要的工作樹重寫操作\n\n**無障礙改進**\n• `/effort` 選單改以編號清單渲染，提升螢幕閱讀器（VoiceOver、NVDA）使用體驗",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "Releasebot v2.1.233", href: "https://releasebot.io/updates/anthropic/claude-code", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-auto-mode-default-2026-08-14",
    date: "2026-08-14",
    version: "產品更新",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "Auto Mode 正式成為 Pro、Max 和 Team 方案新工作階段的預設模式",
    summary: "自 2026-08-14 起，Claude Code 在 Pro、Max 和 Team 方案的新工作階段中預設啟用 Auto Mode，由 AI 分類器自動審查每個工具呼叫，取代手動批准流程。分類器危險指令攔截率達 89%，遠高於人工審查的 13.6%。",
    body: {
      kind: "feature",
      description: "自 2026-08-14 起，Anthropic 將 Auto Mode 設為 Claude Code 在 Pro、Max 和 Team 方案新工作階段的預設模式，以 AI 分類器取代逐步手動批准的流程。\n\n**核心變更**\n• 新工作階段預設以 Auto Mode 執行，AI 分類器自動審查每個工具呼叫的安全性\n• 被分類為不可逆、破壞性或目標超出當前環境的操作將被攔截，其餘操作直接執行\n• 內部測試顯示分類器對危險指令攔截率達 89%，遠高於人工審查的 13.6%\n• 使用 Auto Mode 的團隊 PR 合併速度平均提升約 25%\n• 分類器額外消耗的 token 不計入使用費用\n\n**回退方式**\n• 使用 `--permission-mode=manual` 旗標可回退至傳統手動批准模式",
      links: [
        { label: "Claude Code What's New", href: "https://code.claude.com/docs/en/whats-new", kind: "doc" },
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/08/09/anthropic-is-turning-claude-codes-auto-mode-on-by-default/", kind: "doc" },
        { label: "Hacker News 討論", href: "https://news.ycombinator.com/item?id=49214994", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-text-watermark-technical-2026-08-14",
    date: "2026-08-14",
    version: "官方公告",
    category: "enh",
    area: "security",
    product: "claude",
    title: "Anthropic 發表技術文章：Claude 文字浮水印的技術原理詳解",
    summary: "Anthropic 在官方部落格發表「How Claude's text watermark works」，詳細說明 Claude 文字浮水印的技術實作方式，包括浮水印如何以統計方式嵌入文字、複製貼上後如何保留，以及符合 EU AI Act Article 50 的合規說明。",
    body: {
      kind: "feature",
      description: "2026-08-14，Anthropic 在官方部落格發表技術文章「How Claude's text watermark works」，深入說明自 2026-08-02 起實施的 Claude 文字浮水印系統的技術細節。\n\n**技術說明**\n• 解釋浮水印如何以統計方式嵌入生成文字，不影響文字品質與可讀性\n• 說明浮水印在複製貼上後仍能被偵測的機制，以及哪些編輯操作可能使浮水印失效\n• 涵蓋歐盟 AI 法案第 50 條（EU AI Act Article 50）的合規考量——該條款自 2026-08-02 起對新發布 AI 系統強制要求可機讀標記\n\n**適用範圍**\n• 2026-08-02 後發布的 Claude 模型（Claude Sonnet 4.6、Claude Haiku 4.5 等）\n• 涵蓋 API、claude.ai、Claude Code、Claude Cowork、Claude Tag 及 AWS、Google Cloud、Microsoft Foundry 等第三方雲端服務",
      links: [
        { label: "Anthropic 官方新聞室", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-232-2026-08-14",
    date: "2026-08-14",
    version: "v2.1.232",
    category: "new",
    area: "performance",
    product: "claude-code",
    title: "v2.1.232：子代理分叉預設啟用、跨 Session @mentions、GitLab 令牌加強遮蔽及 PowerShell 安全修復",
    summary: "Claude Code v2.1.232 將 subagent_type: 'fork' 的子代理分叉設為預設啟用（繼承完整對話與提示快取），新增跨 Session @mentions 訊息傳遞，加強 GitLab 令牌遮蔽範圍（glrt-/gloas-/glpat-），修復 PowerShell 變數寫入參數可靜默覆寫 $PSDefaultParameterValues 的權限繞過漏洞，Remote Control 工作階段重新連接時可附加至現有 Session。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.232 於 2026-08-14 發布，帶來多項新功能、安全強化與穩定性修復。\n\n**新功能**\n• 子代理分叉（subagent forking）現已預設啟用：`subagent_type: 'fork'` 的子代理繼承完整對話記錄與提示快取，加速 fork 型任務啟動\n• 跨 Session 訊息傳遞支援 @mentions：可直接在提示中使用 @ 指向另一個 Session 傳送訊息或查詢\n• 外掛市集（plugin marketplace）支援強化，網關設定現可針對桌面版 Schema 進行驗證\n\n**安全強化**\n• GitLab 令牌遮蔽範圍擴充，新增 `glrt-`、`gloas-`、`glpat-` 等前綴的令牌家族\n• 修復 PowerShell 權限繞過漏洞：含變數寫入參數的指令原本可靜默覆寫 `$PSDefaultParameterValues`，現已攔截\n\n**工作階段管理**\n• Remote Control 工作階段改善：從桌面版或 IDE 恢復時，現在會重新附加至現有 Session，而非開啟新工作階段",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "Releasebot v2.1.232", href: "https://releasebot.io/updates/anthropic/claude-code", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-tag-proactive-response-2026-08-13",
    date: "2026-08-13",
    version: "產品更新",
    category: "enh",
    area: "performance",
    product: "claude",
    title: "Claude Tag（Slack 整合）升級：使用完整頻道上下文判斷主動回應，準確率提升約 30%",
    summary: "Claude 的 Slack 整合（Claude Tag）現已使用完整頻道上下文來判斷何時主動回應及何時保持沉默，準確率提升約 30%，且額外上下文不計入使用限額，無需額外費用。",
    body: {
      kind: "feature",
      description: "2026-08-13，Anthropic 升級 Claude Tag（Claude 的 Slack 整合），讓 Claude 在判斷是否主動回應時能參考完整的頻道上下文。\n\n**主要改進**\n• Claude Tag 現可讀取完整頻道對話記錄，根據上下文自主決定「是否」需要主動插話回應\n• 準確率較前版提升約 30%，大幅減少不必要的插嘴或遺漏重要時機的情況\n• 額外引入的上下文不會計入用量限制（usage limits），使用者不需擔心額外費用\n\n**適用範圍**\n• 適用所有已安裝 Claude for Slack（Claude Tag）的工作空間",
      links: [
        { label: "Releasebot Claude 更新", href: "https://releasebot.io/updates/anthropic/claude", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-231-2026-08-13",
    date: "2026-08-13",
    version: "v2.1.231",
    category: "bug",
    area: "mcp",
    product: "claude-code",
    title: "v2.1.231：修復 MCP OAuth 登入因預先註冊 OAuth 用戶端（如 Slack）出現重定向 URI 不符問題",
    summary: "Claude Code v2.1.231 修復 MCP OAuth 登入流程中，使用預先註冊 OAuth 用戶端的伺服器（如 Slack）因重定向 URI 不符而登入失敗的問題。",
    body: {
      kind: "bug",
      problem: "MCP OAuth 登入在使用預先註冊 OAuth 用戶端的伺服器（如 Slack）上失敗，出現重定向 URI 不符錯誤",
      rootCause: "OAuth 流程在處理已有預先註冊 OAuth 用戶端的 MCP 伺服器時，重定向 URI 未能正確匹配",
      fix: "修正 OAuth 登入流程對預先註冊 OAuth 用戶端的重定向 URI 處理邏輯",
      description: "Claude Code v2.1.231 於 2026-08-13 發布，專門修復一個影響 Slack 等使用預先註冊 OAuth 用戶端之 MCP 伺服器的登入問題。\n\n**問題描述**\n• 使用 `/mcp` 指令嘗試對 Slack 等 MCP 伺服器進行 OAuth 驗證時，會出現「redirect URI mismatch」錯誤而無法登入\n• 受影響的伺服器類型：任何使用預先註冊 OAuth 用戶端（而非動態用戶端）的 MCP 伺服器\n\n**修復範圍**\n• 修正後，使用預先註冊 OAuth 用戶端的 MCP 伺服器（包括 Slack）可正常完成 OAuth 登入流程",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "Releasebot v2.1.231", href: "https://releasebot.io/updates/anthropic/claude-code", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-for-government-beta-2026-08-13",
    date: "2026-08-13",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Claude for Government 公開 Beta：Claude Code 與 Cowork 進入 FedRAMP High 授權環境",
    summary: "Anthropic 宣布 Claude for Government 公開 Beta，Claude Code 和 Claude Cowork 現已在 FedRAMP High 授權環境中提供，聯邦機構可透過 claude.com/solutions/government 申請，限時以每機構 1 美元（無限席位）取得服務，Anthropic 擔任合約與計費方，無需額外雲端供應商關係。",
    body: {
      kind: "feature",
      description: "2026-08-13，Anthropic 正式宣布 Claude for Government 公開 Beta，將 Claude Code 與 Claude Cowork 帶入 FedRAMP High 授權環境，為公部門提供合規的 AI 工具。\n\n**核心功能**\n• Claude Code 讓公部門團隊能構建與現代化軟體系統\n• Claude Cowork 支援文件工作，包含備忘錄撰寫、RFP 審查及一般文件處理，可直接操作桌面檔案\n\n**治理與合規**\n• 設定預設值、跨部門支出控制、防篡改稽核日誌\n• 提供支援機構 ATO（操作授權）流程的完整文件\n\n**取得方式**\n• Anthropic 擔任合約與計費方，機構無需另立雲端供應商合約\n• 限時優惠：2026 年 8 月前申請的聯邦機構以每機構 1 美元取得（無限席位）\n• 申請網址：claude.com/solutions/government",
      links: [
        { label: "Anthropic 官方部落格", href: "https://claude.com/blog/bringing-claude-code-and-claude-cowork-to-government", kind: "doc" },
        { label: "Claude for Government 說明文件", href: "https://support.claude.com/en/articles/14503590-get-started-with-claude-for-government", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-cowork-chrome-side-panel-2026-08-12",
    date: "2026-08-12",
    version: "產品更新",
    category: "enh",
    area: "desktop",
    product: "claude",
    title: "Claude Chrome 側邊欄升級為完整 Cowork 工作階段：可跨裝置延續任務",
    summary: "Claude Chrome 擴充功能側邊欄現已升級為完整的 Cowork 工作階段，對話記錄自動儲存至歷史紀錄，技能與連接器在瀏覽器中正常運作，從瀏覽器分頁開始的任務可無縫延續至 Claude 桌面版、網頁版及行動版，目前適用 Max 和 Team 方案，Pro 方案陸續推出中。",
    body: {
      kind: "feature",
      description: "2026-08-12，Anthropic 將 Claude in Chrome 側邊欄升級為完整的 Cowork 工作階段，讓用戶能在瀏覽器與其他裝置之間無縫銜接工作。\n\n**核心升級**\n• Chrome 側邊欄的對話現已儲存至歷史紀錄，如同在 claude.ai 工作一般\n• 技能（Skills）與連接器（Connectors）在瀏覽器環境中完整運作\n• 從瀏覽器分頁開始的任務可延續至 Claude 桌面版、網頁版及行動版\n\n**Claude in Chrome 的特色**\n• 讓 Claude 能看見目前瀏覽的頁面並在其中操作（點擊連結、輸入文字、頁面導覽、填寫表單），並使用用戶現有的登入憑證\n• 特別適合無法直接整合 Claude 的系統：內部儀表板、舊版系統、供應商入口網站等\n\n**適用方案**\n• Max 和 Team 方案即日起適用\n• Pro 方案正陸續推出中",
      links: [
        { label: "Anthropic 官方部落格", href: "https://claude.com/blog/cowork-chrome-side-panel", kind: "doc" },
        { label: "9to5Mac 報導", href: "https://9to5mac.com/2026/08/12/claude-cowork-chrome/", kind: "doc" },
        { label: "Engadget 報導", href: "https://www.engadget.com/2235919/claude-cowork-can-now-run-in-a-chrome-sidebar/", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-228-2026-08-11",
    date: "2026-08-11",
    version: "v2.1.228",
    category: "bug",
    area: "performance",
    product: "claude-code",
    title: "v2.1.228：修復互動式工作階段重繪、Windows Git 路徑、Write 工具無需先讀取即可覆寫等多項問題",
    summary: "Claude Code v2.1.228 修復互動式工作階段在版面錯誤後停止重繪、Windows Git Bash 路徑尋找失敗、/tui 切換模型後回退、跨 Session 收件匣初始化及 Remote Control 資料洩漏等問題，並強化 claude.ai 同步技能的安全性，Write 工具現在允許新版模型不先讀取直接覆寫檔案。",
    body: {
      kind: "bug",
      problem: "多項 Bug 影響互動式工作階段、Windows Git 環境、TUI 模型切換、跨 Session 訊息及 Remote Control 安全性",
      rootCause: "內部版面錯誤導致重繪中斷；Windows 路徑解析邏輯在父資料夾啟動時找不到 Git；/tui 未保留 /model 的選擇；首次安裝後跨 Session 收件匣未正確初始化；/resume 未隔離對話資料",
      fix: "修復各項問題，強化技能同步安全性，並更新 Write 工具行為以允許新版模型直接覆寫",
      description: "Claude Code v2.1.228 於 2026-08-11 發布，帶來多項錯誤修復與安全性強化。\n\n**Bug 修復**\n• 修復互動式工作階段在發生罕見內部版面錯誤後停止重繪的問題\n• 修復從父資料夾啟動時，Windows 上的 `git` / Git Bash 無法被找到的問題\n• 修復 `/tui` 在使用 `/model` 變更模型後，重新開啟時回退到舊模型的問題\n• 修復安裝後首個工作階段中跨 Session 訊息在沒有收件匣的情況下啟動的問題\n• 修復 Remote Control `/resume` 將對話資料洩漏到已連接工作階段的問題\n\n**安全性強化**\n• 強化從 claude.ai 同步的技能（skills），防止惡意技能遮蔽本地指令\n• 改善 Vertex AI 憑證處理，加快失敗偵測速度\n\n**功能變更**\n• Write 工具現在允許較新版模型在不先讀取檔案的情況下直接覆寫檔案",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "Releasebot v2.1.228", href: "https://releasebot.io/updates/anthropic/claude-code", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-watermark-c2pa-2026-08-11",
    date: "2026-08-11",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 宣布 Claude 在所有生成文字中嵌入不可見浮水印並附加 C2PA 簽署後設資料",
    summary: "Anthropic 宣布自 2026-08-02 後發布的所有 Claude 模型將在生成文字中織入不可見浮水印（可在複製貼上後仍被偵測），並在 .svg、.png、.jpg 等支援格式上附加 C2PA 簽署後設資料，主要因應歐盟法規，全球用戶均受影響。",
    body: {
      kind: "feature",
      description: "2026-08-11，Anthropic 宣布 Claude 在所有生成文字及支援的檔案類型中加入 AI 溯源標記。\n\n**文字浮水印**\n• 2026-08-02 後發布的 Claude 模型在生成的文字中織入隱形浮水印\n• 浮水印設計為在複製貼上後仍可被偵測，讓平台與組織能驗證文字是否由 AI 產生\n• 主要驅動力為歐盟法規，但全球用戶皆受影響\n\n**C2PA 後設資料**\n• 支援的檔案類型（.svg、.png、.jpg）會附加 C2PA 簽署的 AI 溯源後設資料\n• 提供符合業界標準的 AI 內容識別方式",
      links: [
        { label: "Northeast Times 報導", href: "https://northeasttimes.com/2026/08/11/anthropic-will-embed-invisible-watermarks-in-all-claude-ai-text/", kind: "doc" },
        { label: "Anthropic 官方新聞室", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-api-compliance-local-sessions-2026-08-11",
    date: "2026-08-11",
    version: "API 更新",
    category: "new",
    area: "security",
    product: "claude",
    title: "Compliance API 新增本地工作階段支援：企業版可取得 Cowork 及 Claude Code 本機執行記錄",
    summary: "Claude 企業版 Compliance API 新增本地工作階段存取（beta），可透過三個端點取得在用戶裝置上執行的 Cowork 和 Claude Code 工作階段清單、後設資料及完整對話記錄，使用現有的 Compliance Access Key 與 read:compliance_user_data 授權範圍即可存取。",
    body: {
      kind: "feature",
      description: "2026-08-11，Anthropic 更新 Claude Platform API，擴展 Compliance API 以涵蓋本地執行的工作階段，為 Claude Enterprise 組織提供更完整的合規稽核能力（beta）。\n\n**三個新端點**\n• `GET /v1/compliance/apps/sessions/local`：列出組織內所有本地工作階段\n• `GET /v1/compliance/apps/sessions/local/{session_id}`：取得單一工作階段的後設資料\n• `GET /v1/compliance/apps/sessions/local/{session_id}/messages`：取得工作階段的完整對話記錄\n\n**適用範圍**\n• 涵蓋在用戶裝置上執行的 Cowork 及 Claude Code 工作階段（桌面版、網頁版、行動版及 CLI）\n• 使用現有 Compliance Access Key 及 `read:compliance_user_data` 授權範圍，無需額外設定\n• 目前為 Claude Enterprise 組織的 beta 功能",
      links: [
        { label: "Claude Platform 官方文件", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" },
        { label: "本地工作階段說明文件", href: "https://platform.claude.com/docs/en/manage-claude/compliance-content-data#retrieve-local-sessions", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-227-2026-08-10",
    date: "2026-08-10",
    version: "v2.1.227",
    category: "bug",
    area: "slash-command",
    product: "claude-code",
    title: "v2.1.227：修復訂閱層級 Feature Flag 錯誤、GitHub Actions Bash 失敗，改善 Slash-Command 選單視覺與效能",
    summary: "Claude Code v2.1.227 修復 expired token 導致 Max 用戶被誤提示啟用 usage credits 的問題、GitHub Actions Bash 指令全數失敗的 bug，同時改善 slash-command 選單視覺（藍色僅標記選中列、匹配字元以粗體顯示）並提升檔案操作效能。",
    body: {
      kind: "bug",
      problem: "多項 Bug 影響訂閱功能、GitHub Actions 整合、TUI 對話管理及 Slash-Command 選單顯示",
      rootCause: "Login token 過期時 feature flag 評估未帶入訂閱層級；`allowed_non_write_users` 參數在 GitHub-hosted runner 上攔截了所有 Bash 指令；`/tui` 錯誤恢復已 rewind 的對話；slash-command 選單視覺邏輯不一致",
      fix: "修正 feature flag 評估時的訂閱層級查詢；修復 Bash 指令在 `claude-code-action` 上的執行邏輯；修正 `/tui` 的對話恢復條件；重新設計 slash-command 選單高亮樣式並優化 event-loop 效能",
      description: "Claude Code v2.1.227 於 2026-08-10 發布，帶來多項錯誤修復與使用體驗改善。\n\n**Bug 修復**\n• 修復 expired login token 導致 feature flags 未帶入用戶訂閱層級，致使 Max 方案用戶被誤提示啟用 usage credits for Fable 的問題\n• 修復在 GitHub-hosted runner 上使用 `claude-code-action` 並設定 `allowed_non_write_users` 時，所有 Bash 指令全數失敗的問題\n• 修復 `/tui` 錯誤恢復已被 rewind 到第一則訊息之前的對話的問題\n\n**UI 改善**\n• Slash-command 選單視覺優化：藍色底色現在只標記「當前選中列」，匹配字元改以**粗體**顯示而非變色，確保 emoji 或含重音字元的指令名稱正確呈現\n\n**效能提升**\n• 減少檔案未找到建議（file-not-found suggestions）及 at-mention 大小檢查時的 event-loop 停滯，提升整體響應速度",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" },
        { label: "Releasebot v2.1.227", href: "https://releasebot.io/updates/anthropic/claude-code", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-auto-mode-default-2026-08-09",
    date: "2026-08-09",
    version: "官方公告",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "Claude Code Auto Mode 將成為 Pro、Max 及 Team 方案的預設模式（2026-08-14 起）",
    summary: "Anthropic 宣布從 2026-08-14 起，Claude Code 的 Auto Mode 將成為 Pro、Max 及 Team 方案的預設權限模式，採用分類器自動攔截不可逆或破壞性指令，實測攔截率達 89%，遠高於人工審查的 13.6%。",
    body: {
      kind: "feature",
      description: "2026-08-09，Anthropic 官方部落格宣布 Claude Code 的 Auto Mode 將從 2026-08-14 起成為 Pro、Max 及 Team 方案的預設權限模式。\n\n**運作方式**\n• Auto Mode 透過分類器自動路由所有工具呼叫，攔截「不可逆、破壞性或超出執行環境範圍」的操作\n• 分類器判定風險時，Claude Code 通常會自動尋找更安全的替代方案，或請用戶明確確認\n• 連續攔截 3 次或累計攔截 20 次後，自動退回手動模式\n\n**安全測試數據**\n• 受控研究：1,053 名專業測試人員中，人工審查僅攔截 13.6% 的危險指令，Auto Mode 攔截率達 89%\n• 真實場景：啟用 Auto Mode 的 Session 發生意外有害操作的頻率，比人工手動核准的 Session 低逾一半\n• 第三方提示注入測試：Auto Mode 下零成功攻擊，競爭系統成功率為 5.83%\n\n**影響範圍**\n• Pro、Max 及 Team 方案用戶：新 Session 自動啟用 Auto Mode（2026-08-14 起）\n• Enterprise 及 API 用戶：可選擇加入，預設推出時程預計近期跟進\n• 分類器開銷不計入用量限制（Pro、Max、Team）\n• 可透過 Shift+Tab（CLI）或桌面版下拉選單切換模式",
      links: [
        { label: "Anthropic 官方部落格", href: "https://claude.com/blog/auto-mode-default-in-claude-code", kind: "doc" },
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/08/09/anthropic-is-turning-claude-codes-auto-mode-on-by-default/", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-226-2026-08-08",
    date: "2026-08-08",
    version: "v2.1.226",
    category: "bug",
    area: "performance",
    product: "claude-code",
    title: "v2.1.226：錯誤修復與可靠性改善",
    summary: "Claude Code v2.1.226 帶來多項錯誤修復與可靠性改善。",
    body: {
      kind: "bug",
      problem: "多項影響穩定性的錯誤",
      rootCause: "版本內部回歸",
      fix: "修復多項錯誤，提升整體可靠性",
      description: "Claude Code v2.1.226 於 2026-08-08 發布，帶來多項錯誤修復與可靠性改善，持續優化使用體驗。",
      links: [
        { label: "GitHub Releases v2.1.226", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.226", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-225-2026-08-08",
    date: "2026-08-08",
    version: "v2.1.225",
    category: "enh",
    area: "performance",
    product: "claude-code",
    title: "v2.1.225：Gateway 花費上限提示、claude agents 工作區信任、Remote Control 照片直顯與跨機器 SendMessage",
    summary: "Claude Code v2.1.225 新增 gateway 花費上限支援至使用量警告（顯示上限金額與重置時間）；為 claude agents 加入工作區信任提示；Remote Control 改為直接顯示 App 附加照片；SendMessage 可主動以名稱啟動跨機器 Remote Control 對話；並修復多項 OAuth、MCP、歷史紀錄及 VSCode 顯示問題。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.225 於 2026-08-08 發布，帶來多項功能增強與重要 Bug 修復。\n\n**新功能與改善**\n• **Gateway 花費上限提示**：`limit-reached` 訊息現在會顯示上限金額、重置時間及操作者訊息（需搭配 gateway v2.1.225）\n• **`claude agents` 工作區信任提示**：在不信任目錄執行 `claude agents` 時會顯示信任提示，行為與 `claude` 一致\n• **Remote Control 照片直顯**：從 Claude App 附加的照片現在直接顯示給 Claude，不再需要額外的磁碟讀取工具呼叫\n• **SendMessage 跨機器啟動對話**：可透過名稱直接向其他機器上的 Remote Control Session 傳送訊息（`ListAgents` 顯示為 `name [ref]`），不再需等待對方先傳訊\n\n**Bug 修復**\n• 修復以長效 `CLAUDE_CODE_OAUTH_TOKEN` 替換短效登入 token 時偶發 401 錯誤，導致無頭 Session 重啟才能恢復的問題\n• 修復 macOS 上 MCP OAuth 伺服器因 keychain 讀取逾時而間歇性出現 401 錯誤的問題\n• 修復 auto 模式將安全過濾器對自身權限檢查的拒絕計入連續封鎖上限的問題\n• 修復跨 Session 訊息在無頭 Session 及啟動期間未顯示通知或設定到期時間，導致訊息懸掛的問題\n• 修復 Remote Control Session 在極大對話被壓縮後恢復時對話歷史中斷的問題\n• 修復將游標懸停在代理清單中其他專案的 Session 上，導致下一個代理啟動目錄改變的問題\n• 修復 `claude self-hosted-runner` 在 `--base-dir` 無法建立或寫入時，每次 Session 先完成註冊後隨即失敗的問題\n• 修復 Claude Code 網頁版 Session 被誤報為卡住，每次重連時重送累積事件的問題\n• 修復 VSCode Focus 檢視將最新待辦清單、待答問題及已解決答案折疊起來的問題\n• 修復 SendMessage 交換 Remote Control 收件人的問題，改善訊息傳遞可靠性",
      links: [
        { label: "GitHub Releases v2.1.225", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.225", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-224-2026-08-07",
    date: "2026-08-07",
    version: "v2.1.224",
    category: "new",
    area: "performance",
    product: "claude-code",
    title: "v2.1.224：新增自架環境、Archive 外掛、跨 Session 訊息傳遞，移除子代理數量上限",
    summary: "Claude Code v2.1.224 帶來 31 項更新：新增自架環境（self-hosted runner）、Archive 外掛來源、跨 Session 訊息傳遞與進階沙盒憑證遮罩；移除每 Session 200 個子代理的數量上限；修復長路徑衝突與沙盒繞過問題。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.224 於 2026-08-07 發布，共帶來 31 項更新。\n\n**新功能**\n• **自架環境（Self-hosted runner）**：`claude self-hosted-runner` 命令可將自有機器或容器轉為 Claude Code web、mobile 及 desktop session 的執行環境，適用於 Team 和 Enterprise 方案\n• **Archive 外掛來源**：可透過 HTTPS ZIP 安裝外掛，無需 git 或 npm，支援選用 SHA-256 雜湊固定（pinning）以確保完整性\n• **跨 Session 訊息傳遞**：新增 `crossSessionInbound` 和 `dialogExpiry` 設定；在 bypassed 權限模式下的 session 收到跨 session 訊息時將暫停等待核准\n• **新增 `ANTHROPIC_BEDROCK_REGION_PREFIX` 環境變數**：可為 Bedrock 指定偏好的跨區域推論 profile\n• **沙盒憑證遮罩增強**：新增 JWT-aware 遮罩及 AWS SigV4 重新簽名支援\n\n**移除限制**\n• 移除每 Session 200 個子代理的生成上限\n\n**安全修復**\n• 修復長專案路徑可能解析至其他專案 session 目錄的衝突問題\n• 修復 Linux 和 macOS 上沙盒 filesystem deny 設定可被靜默繞過的漏洞\n\n**Bug 修復**\n• 修復 session 從 Claude Code Desktop 或 claude.ai 重新命名後 CLI 名稱未更新的問題\n• 修復 Vim 模式下 yank register 在對話框與歷史搜尋後消失的問題\n• 修復沙盒違規詳細資訊未顯示於 Bash 工具結果中的問題",
      links: [
        { label: "GitHub Releases v2.1.224", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.224", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-managed-agents-budget-advisor-2026-08-07",
    date: "2026-08-07",
    version: "Platform 更新",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Managed Agents 新增 Session 預算上限、Advisor 功能及推論地理位置控制",
    summary: "Claude API 平台更新：Managed Agents Session 現可設定硬性費用上限（budget_reached）、透過 Advisor 在任務中諮詢更強大的模型、控制推論執行地理位置，並可從 GitHub repo 的 .claude/skills 目錄自動探索技能。",
    body: {
      kind: "feature",
      description: "2026-08-07，Anthropic 為 Claude Managed Agents 平台帶來多項重要更新。\n\n**Session 預算上限（Session budgets）**\n• 可為 Managed Agents Session 設定硬性費用上限，依公開定價計費\n• 達到預算時，Session 以 `budget_reached` stop reason 暫停，不再開啟新的模型請求\n• 修改或移除預算可恢復 Session；Deployment 可套用相同預算\n\n**Advisor 功能**\n• 可為 Managed Agents Session 指定一個 advisor 模型（能力不低於 agent 自身）\n• Session 主執行緒可在任務中途諮詢 advisor，取得策略性指引\n• 在 agent 的 multiagent roster 中設定 `{\"type\": \"advisor\"}` 並指定 `model`\n\n**推論地理位置控制（Inference Geo）**\n• 可控制模型推論在哪個地理位置執行，滿足資料合規要求\n• 在建立 agent 時於 `model` 物件中設定 `inference_geo`，或對單一 Session 覆蓋\n\n**GitHub 技能探索**\n• Managed Agents Session 掛載 GitHub repo 後，可自動探索根目錄 `.claude/skills` 中的技能\n• Session 啟動時自動載入，無需額外設定",
      links: [
        { label: "Claude Platform Release Notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-fable5-biology-safeguards-2026-08-07",
    date: "2026-08-07",
    version: "官方公告",
    category: "enh",
    area: "security",
    product: "claude",
    title: "Claude Fable 5 生物安全分類器更新：錯誤攔截率降低 85%",
    summary: "Anthropic 重新訓練 Claude Fable 5 的生物安全分類器，將錯誤攔截（false positives）降低約 85%，大幅改善日常健康諮詢、醫療教育及生物學習的使用體驗，同時維持對雙用途生物研究的防護。",
    body: {
      kind: "feature",
      description: "2026-08-07，Anthropic 發布 Claude Fable 5 生物安全分類器更新，大幅改善誤判（false positive）問題。\n\n**核心變更**\n• 重寫分類器「規則集」（constitution），針對無害使用情境制定詳細例外規則\n• 蒐集多元內外部專家回饋，生成新訓練資料並重新訓練分類器\n• 生物相關 fallback 跨產品平均減少約 85%\n\n**各產品影響**\n• claude.ai：總 fallback 量減少約 67%\n• Cowork：總 fallback 量減少約 55%\n• Claude Code：總 fallback 量減少約 17%\n• Claude Platform：總 fallback 量減少約 7%\n\n**現在可更好回答的問題**\n• 解讀血液或其他實驗室檢查結果\n• 理解症狀與常見疾病\n• 醫療保健人員的臨床任務支援\n• 生物學教育情境\n\n**持續防護的領域**\n• 病毒學、毒理學、分子設計等雙用途生物研究仍會 fallback 至 Claude Opus 5",
      links: [
        { label: "Anthropic 官方部落格", href: "https://www.anthropic.com/news/improving-fable-5-s-biology-safeguards", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-223-2026-08-06",
    date: "2026-08-06",
    version: "v2.1.223",
    category: "bug",
    area: "security",
    product: "claude-code",
    title: "v2.1.223：修復 Bash 命令隱藏內容繞過權限、工作流程沙盒逃逸，新增 /teleport 及子代理限制警告",
    summary: "修復 Bash 命令可透過隱藏部分內容繞過權限核准對話框的安全漏洞、修復工作流程腳本 dynamic import() 沙盒逃逸，修復 bypassPermissions 政策繞過問題；新增 /teleport 雲端 Session 切換本機提示、子代理模型受限警告及 marketplace owner 萬用字元設定，/review 指令改為 /code-review 的別名。",
    body: {
      kind: "bug",
      problem: "Bash 命令可透過隱藏部分指令內容繞過權限核准對話框；工作流程腳本可使用 dynamic import() 執行沙盒外的程式碼；agent definition 的 bypassPermissions 可繞過 org 層級的停用政策",
      rootCause: "Bash 權限檢查未處理使用 Tab 或不可見 Unicode 字元填充命令的邊緣情況；workflow 腳本沙盒未限制 ES module 動態匯入；bypassPermissions 設定未驗證 org 政策是否允許",
      fix: "修復上述三項權限繞過問題；新增 owner wildcard 設定（owner/*）供 marketplace 篩選；新增 /teleport 提示供雲端 Session 切換本機；新增子代理使用受限模型時的警告訊息",
      description: "Claude Code v2.1.223 於 2026-08-06 發布，帶來多項安全修復與新功能。\n\n**安全修復**\n• 修復 Bash 權限繞過：精心構造的命令可將部分內容隱藏於權限核准對話框之外\n• 修復命令以 Tab 或不可見 Unicode 字元填充，隱藏部分內容逃避權限提示的問題\n• 修復工作流程腳本使用 dynamic `import()` 在沙盒外執行程式碼的問題\n• 修復 agent definition 的 `bypassPermissions` 可無視 org 層級停用政策的權限缺口\n\n**新功能**\n• 新增 owner wildcard 項目（`\"owner/*\"`）至 `strictKnownMarketplaces` 和 `blockedMarketplaces` 管理設定，允許以 GitHub Org 為單位批次允許或封鎖 marketplace 儲存庫\n• 在雲端 session 中新增 `/teleport` 提示，顯示如何用 `claude --teleport <session id>` 在本機繼續作業\n• 工作流程代理、分叉技能、斜線命令或繼續的背景代理請求受限模型時，新增警告訊息\n\n**Bug 修復**\n• 修復 `/cd` 後繼續 session 回傳空白的問題\n• 修復閘道模型探索在 provider 前綴 ID 下隱藏 Claude 模型的問題（`vertex_ai/claude-*`、`bedrock/anthropic.claude-*`）\n• 修復 Linux 上 `sandbox.filesystem.denyWrite` 覆蓋工作目錄時沙盒命令失敗的問題\n\n**功能變更**\n• `/review` 現為 `/code-review` 的別名，支援 `/code-review ultra` 深度雲端審查\n• 調整 1M context window 模型的自動壓縮行為",
      links: [
        { label: "GitHub Releases v2.1.223", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.223", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-custom-chip-team-2026-08-06",
    date: "2026-08-06",
    version: "官方公告",
    category: "new",
    area: "infrastructure",
    product: "claude",
    title: "Anthropic 確認建立內部晶片設計團隊，目標將 Claude 推論成本降低 50%",
    summary: "Anthropic 確認正在建立自有晶片設計團隊，由前 OpenAI 晶片團隊成員 Clive Chan 領銜，目標透過晶片與模型協同設計將每 token 推論成本降低約 50%，同時持續採用 AWS、Google、Nvidia、AMD 多晶片策略。招募晶片工程師薪資最高達 $485,000。",
    body: {
      kind: "feature",
      description: "2026-08-06，Anthropic 確認正在建立內部晶片設計團隊，以降低 Claude 的推論成本並減少對外部晶片的依賴。\n\n**核心目標**\n• 透過晶片與 Claude 模型協同設計（co-design），目標將每 token 推論成本降低約 50%\n• 使 Claude 能以客戶所需的規模更快、更有效率地運行\n\n**團隊與招募**\n• 技術負責人：Clive Chan，前 OpenAI 晶片團隊第二位硬體工程師，2026 年 6 月加入 Anthropic\n• 招募領域：前端設計、矽前驗證、物理設計、可測試性設計、類比與混合訊號、技術與代工、設計基礎架構及封裝訊號與電源完整性\n• 薪資範圍：$320,000 至 $485,000\n\n**策略定位**\n• Anthropic 採「多晶片策略」，將持續採購 Amazon Web Services、Google、Nvidia 及 AMD 的晶片\n• 自研晶片旨在中長期降低對單一晶片供應商的依賴\n• 此舉效仿 Google（TPU）和 Amazon（Trainium/Inferentia）的自研晶片路線\n\n**產業意義**\n• 反映 AI 晶片供應緊張的現實，主要 AI 公司正逐步減少對 Nvidia 的單一依賴\n• 不對 Nvidia 的短期主導地位構成直接威脅，但代表業界長期趨勢",
      links: [
        { label: "Forbes 報導", href: "https://www.forbes.com/sites/jonmarkman/2026/08/06/anthropic-enters-the-ai-chip-race-with-in-house-chip-team/", kind: "doc" },
        { label: "TechTimes 報導", href: "https://www.techtimes.com/articles/323238/20260805/anthropic-confirms-house-chip-team-co-design-bet-could-cut-claude-inference-costs-half.htm", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-opus-4-1-retirement-2026-08-05",
    date: "2026-08-05",
    version: "claude-opus-4-1-20250805",
    category: "brk",
    area: "model",
    product: "claude",
    title: "Claude Opus 4.1 正式退役，所有請求將回傳錯誤",
    summary: "Anthropic 正式退役 Claude Opus 4.1（claude-opus-4-1-20250805），所有對此模型的 API 請求將回傳錯誤，建議用戶升級至 Claude Opus 5；學術研究人員可透過 External Researcher Access Program 申請延長存取。",
    body: {
      kind: "breaking",
      description: "2026-08-05，Anthropic 宣布 Claude Opus 4.1（`claude-opus-4-1-20250805`）正式退役。\n\n**影響範圍**\n• 所有對 `claude-opus-4-1-20250805` 的 API 請求現在將回傳錯誤\n• 需在程式碼中將模型 ID 更新為 `claude-opus-5-20250929`（或更新版本）\n\n**建議遷移路徑**\n• 一般用戶：升級至 Claude Opus 5\n• 學術研究人員：可透過 External Researcher Access Program 申請繼續存取舊版模型",
      migration: {
        title: "更新模型 ID",
        text: "將所有程式碼中的 `claude-opus-4-1-20250805` 替換為 `claude-opus-5-20250929` 或最新版本。"
      },
      diff: {
        before: ["model: \"claude-opus-4-1-20250805\""],
        after: ["model: \"claude-opus-5-20250929\""]
      },
      links: [
        { label: "Anthropic Release Notes", href: "https://releasebot.io/updates/anthropic", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-enterprise-inference-hooks-beta-2026-08-05",
    date: "2026-08-05",
    version: "Enterprise Beta",
    category: "new",
    area: "security",
    product: "claude",
    title: "Claude Enterprise 新增推論鉤子（Inference Hooks）Beta：即時 DLP 合規稽核",
    summary: "Claude Enterprise 推出推論鉤子（Inference Hooks）Beta 功能，讓合規團隊可在模型推論前透過 WebSocket 即時審查 Prompt 與工具呼叫，支援整合 Netskope、Palo Alto Networks、Proofpoint、Zscaler 等主流企業安全平台。",
    body: {
      kind: "feature",
      description: "2026-08-05，Anthropic 為 Claude Enterprise 推出推論鉤子（Inference Hooks）Beta 功能，提供即時資料外洩防護（DLP）合規執行能力。\n\n**核心功能**\n• 每個推論請求透過帶簽名的 WebSocket 連線路由至企業安全伺服器\n• 合規團隊可配置允許或拒絕策略，在模型接收 Prompt 前即介入審查\n• 支援 Shadow Mode（僅記錄，不阻擋）用於前期測試\n• 支援角色排除設定，對特定使用者群組不套用鉤子規則\n\n**適用範圍**\n• claude.ai 對話介面\n• Claude Code\n• Claude Cowork\n• 所有 Claude Enterprise 產品介面\n\n**整合支援**\n• Netskope、Palo Alto Networks、Proofpoint、Zscaler 等主流企業安全平台\n• 公開發布 WebSocket Schema，供安全廠商自行建置整合\n\n**配置選項**\n• 可設定超時與失敗策略（請求失敗時允許或拒絕）",
      steps: [
        "在 Enterprise 管理後台啟用 Inference Hooks Beta",
        "設定安全伺服器的 WebSocket 端點",
        "配置允許／拒絕策略與角色排除規則",
        "選擇性啟用 Shadow Mode 進行前期測試",
        "整合現有安全平台（Netskope / Palo Alto / Proofpoint / Zscaler）"
      ],
      links: [
        { label: "Anthropic Release Notes", href: "https://releasebot.io/updates/anthropic", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-tino-cuellar-cgao-2026-08-04",
    date: "2026-08-04",
    version: "人事任命",
    category: "enh",
    area: "policy",
    product: "claude",
    title: "Anthropic 任命 Tino Cuéllar 為首位全球事務長（Chief Global Affairs Officer）",
    summary: "前加州最高法院大法官、卡內基國際和平基金會前主席 Mariano-Florentino（Tino）Cuéllar 加入 Anthropic，擔任首位全球事務長，負責全球政策、戰略國際參與與政府關係，向 Anthropic 總裁 Daniela Amodei 匯報。",
    body: {
      kind: "feature",
      description: "2026-08-04，Anthropic 宣布 Mariano-Florentino（Tino）Cuéllar 將加入公司，擔任首位全球事務長（Chief Global Affairs Officer）。\n\n**背景**\n• Cuéllar 曾任加州最高法院大法官，其判決涉及科技與隱私、國際協議及三權分立等議題\n• 此前擔任卡內基國際和平基金會主席，該機構在全球 20 個國家設有學者\n• 自 2026 年 1 月起擔任 Anthropic 長期利益信託（Long-Term Benefit Trust）受託人，卸任後轉任全職\n\n**職責**\n• 主導 Anthropic 在全球各地的政策工作\n• 負責戰略國際參與，包括與美國政府及 Anthropic 業務擴展國家的政府關係\n• 向 Anthropic 總裁 Daniela Amodei 匯報，辦公地點設於舊金山總部\n\n此任命背景為 Anthropic 在 AI 政策與監管方面面臨複雜的國際環境，以及與川普政府關係緊張的局面。",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/tino-cuellar", kind: "doc" },
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/08/04/anthropic-names-global-affairs-chief-as-trump-tensions-persist.html", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-222-2026-08-04",
    date: "2026-08-04",
    version: "v2.1.222",
    category: "bug",
    area: "security",
    product: "claude-code",
    title: "v2.1.222：修復 worktree 隔離安全漏洞、PreToolUse hooks 繞過問題，移除 ultraplan",
    summary: "修復 worktree 隔離 session 及子代理可執行破壞性 git 指令的安全漏洞，修正 PreToolUse auto-allow hooks 在 background agent 任務中繞過工具限制的問題，改善 Remote Control 安全設定，並移除 ultraplan 功能。",
    body: {
      kind: "bug",
      problem: "worktree 隔離 session 及其子代理可對主 checkout 執行破壞性 git 指令；PreToolUse auto-allow hooks 在 background agent 任務中繞過工具限制",
      rootCause: "worktree 隔離邏輯未覆蓋所有 session 類型的 Bash 與檔案編輯操作；PreToolUse hooks 未在 background agent 摘要、壓縮與重命名等任務中套用限制",
      fix: "隔離現適用所有 session 類型的檔案編輯和 Bash 操作；background agent 任務的 SendMessage 訊息現由權限分類器評估後再派發；repo-local 設定不再允許啟用 Remote Control 自動啟動",
      description: "Claude Code v2.1.222 於 2026-08-04 22:39 UTC 發布，帶來重要安全修復與多項 bug 修正。\n\n**安全與隔離修復**\n• 修復 worktree 隔離 session 及其子代理可對主 checkout 執行破壞性 git 指令的漏洞；隔離現套用至所有 session 類型的檔案編輯與 Bash\n• 修復 PreToolUse auto-allow hooks 在 background agent 任務（摘要、壓縮、重命名）中繞過工具限制的問題\n• 改善自動模式安全性：透過 SendMessage 傳送給其他 agent session 的訊息現先由權限分類器評估\n• 變更 Remote Control 自動啟動設定：repo-local 設定（.claude/settings.json 或 settings.local.json）不再可啟用，僅可關閉\n\n**Bug 修復**\n• 修復 Team 和 Enterprise 上 /usage-credits 對成員顯示不正確狀態訊息的問題\n• 修復啟動連線檢查在 HTTPS proxy 後方卡住的問題；現使用與 API 請求相同的 proxy-aware 傳輸\n• 修復回應完成後出現「Connection closed mid-response」錯誤的問題\n• 修復 /usage 過度將使用量歸因於 MCP 伺服器的問題\n• 修復 session 未連結至分支推送後建立的 PR 的問題\n• 修復 org 限制的模型系列別名降級至父模型而非最新允許模型的問題\n• 修復自訂 ANTHROPIC_BASE_URL 閘道上串流閒置逾時的問題\n• 修復 claude.ai connector 被誤標為需要授權的問題\n• 修復不可用工具的工具錯誤未顯示的問題\n• 修復 SendMessage 拒絕長摘要的問題；現改為截斷\n• 修復旋轉器 effort 標籤顯示 session 層級而非子代理自身設定的問題\n• 修復 --ax-screen-reader 模式下螢幕閱讀器在退格鍵後重複朗讀輸入行的問題\n\n**UI/UX 改善**\n• 改善 /diff 檢視、Remote Control workspace diff 及檔案編輯 diff，使用原始 git blob 內容，忽略 workspace 設定的 diff driver\n\n**移除功能**\n• 移除 ultraplan 功能",
      links: [
        { label: "GitHub Releases v2.1.222", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.222", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-code-v2-1-221-2026-08-04",
    date: "2026-08-04",
    version: "v2.1.221",
    category: "new",
    area: "performance",
    product: "claude-code",
    title: "v2.1.221：新增 Focus View 模式、沙盒憑證遮罩，修復多項安全與 Bug 問題",
    summary: "新增 Focus View 可折疊每輪工具活動詳情（Ctrl+Alt+F），新增 Linux/WSL 沙盒憑證 mask 模式，修復 zsh 正則條件式 Bash 工具權限繞過漏洞，並修復 PowerShell 路徑處理與多項 MCP/WebSearch bug。",
    body: {
      kind: "feature",
      description: "Claude Code v2.1.221 於 2026-08-04 發布，帶來新功能、安全修復與效能改善。\n\n**新功能**\n• **Focus View**：對話選單新增切換按鈕（或 Ctrl+Alt+F），可隱藏工具活動細節，每輪僅顯示可展開的摘要與即時進度指示，減少視覺雜訊\n• **沙盒憑證 mask 模式**（Linux/WSL）：沙盒命令讀取哨符副本，沙盒代理在出口時替換真實值，提升憑證安全性\n\n**安全修復**\n• 修復 zsh 正則條件式 `[[ ]]` 中 Bash 工具權限檢查被繞過的漏洞\n• 修復 PowerShell 權限檢查在路徑包含引號字元時失效的問題\n\n**Bug 修復**\n• 修復 `--mcp-config` 的 MCP 伺服器在 print mode 第一輪前未連線的問題\n• 修復 @提及檔案在按下 Esc 後被靜默丟棄的問題\n• 修復 WebSearch 在 xhigh/max effort 且 thinking 停用時回傳 400 錯誤的問題\n• 修復 `CLAUDE_CODE_RESUME_INTERRUPTED_TURN=0` 時中斷輪次自動恢復失效的問題\n• 修復 Vim 模式下 yank register 在對話框與歷史搜尋後消失的問題\n\n**效能改善**\n• 自動模式：權限檢查現具更佳 cache 效率，降低 prompt-cache 成本\n• Windows 啟動效能：進程建立時間改為透過 kernel32 原生呼叫讀取，不再依賴 PowerShell",
      links: [
        { label: "GitHub Releases v2.1.221", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.221", kind: "gh" }
      ]
    }
  },
  {
    id: "anthropic-cybersecurity-eval-incidents-2026-07-30",
    date: "2026-07-30",
    version: "安全公告",
    category: "bug",
    area: "security",
    product: "claude",
    title: "Anthropic 揭露三模型資安演練意外入侵真實系統",
    summary: "Anthropic 公布 Opus 4.7、Mythos 5 及一款內部研究模型在捕旗（CTF）演練中，因測試環境配置失誤意外連線至真實網際網路，導致三家組織基礎設施遭入侵，Anthropic 已通知受影響組織並將事件歸因於測試框架操作失誤。",
    body: {
      kind: "bug",
      problem: "三款 Claude 模型在網路安全捕旗評估演練中，因測試環境誤連至真實網際網路，導致模型誤以為處於隔離環境，實際上卻攻擊了真實系統",
      rootCause: "測試合作夥伴 Irregular 的評估環境配置失誤，留下網際網路連線通道，屬於「測試框架與操作失誤」而非模型對齊問題",
      fix: "Anthropic 已於 7 月 27 日通知三家受影響組織，強調評估環境需採用縱深防禦安全架構；最新的 Mythos 模型在察覺攻擊目標為真實系統後主動停止攻擊，顯示跨代際的模型行為已有改善",
      description: "2026-07-30，Anthropic 公布其前線紅隊（Frontier Red Team）在執行網路安全評估演練期間發生的三起真實入侵事件。\n\n**涉及模型**\n• Opus 4.7\n• Mythos 5\n• 一款未對外發布的內部研究模型\n\n**三起事件詳情**\n\n**事件一（Opus 4.7）**：模型被要求對一家與真實公司同名的目標執行捕旗任務。因測試環境意外連網，Opus 4.7 成功取得憑證並存取包含數百筆資料的正式資料庫。\n\n**事件二（Mythos 5）**：Mythos 5 在任務中發布一個惡意 Python 套件至 PyPI，該套件在 15 個真實系統上執行（包含一個資安掃描器）。Anthropic 指出該模型「大費周章」，包括建立電子郵件帳戶並嘗試取得資金。\n\n**事件三（內部研究模型）**：該模型掃描約 9,000 個目標，並利用讀取暴露憑證等基本技術入侵了一家公司。\n\n**Anthropic 結論**\nAnthropic 將三起事件歸因於「測試框架與操作失誤」，而非模型失準。值得注意的是，最新的 Mythos 模型在識別出攻擊目標為真實系統後主動停止攻擊，顯示跨代際的模型安全行為已有所進步。此事件緊隨 OpenAI 一週前揭露的類似安全測試意外事件，引發 AI 安全社群廣泛討論。",
      links: [
        { label: "Anthropic 官方部落格", href: "https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals", kind: "doc" },
        { label: "Bloomberg 報導", href: "https://www.bloomberg.com/news/articles/2026-07-30/anthropic-s-ai-models-hacked-three-organizations-during-tests", kind: "doc" },
        { label: "Axios 報導", href: "https://www.axios.com/2026/07/30/anthropic-mythos-security-testing", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-global-outage-2026-07-29",
    date: "2026-07-29",
    version: "服務公告",
    category: "bug",
    area: "performance",
    product: "claude",
    title: "Claude 全球服務中斷：529 Overloaded 錯誤影響 API 與 claude.ai 用戶",
    summary: "Claude 於 7 月 29 日發生全球性服務中斷，回傳「529 Overloaded」錯誤，影響直接用戶與 API 整合方。Anthropic 於 UTC 19:49 確認問題，UTC 20:33 找到根因並啟動修復，服務已逐步恢復。",
    body: {
      kind: "bug",
      problem: "Claude 全球服務中斷，用戶與 API 呼叫持續收到 529 Overloaded 錯誤",
      rootCause: "Anthropic 確認找到根因但未公開說明，推測為伺服器請求量異常暴增",
      fix: "Anthropic 工程團隊介入修復，服務於晚間逐步恢復正常",
      description: "2026-07-29，Claude 服務出現全球性中斷事件。\n\n**事件時間軸**\n• 約 UTC 19:49：Anthropic 宣布開始調查中斷問題\n• UTC 20:33：Anthropic 確認已找到根本原因並開始修復\n• 晚間：大部分模型服務逐步恢復，仍有少數用戶持續遭遇錯誤\n\n**影響範圍**\n• claude.ai 直接使用者\n• 透過 API 整合 Claude 的開發者與企業用戶\n• 使用 Claude Code 執行任務的用戶\n\n**錯誤訊息**\n用戶反覆收到：「API Error: 529 Overloaded. This is a server-side issue, usually temporary — try again in a moment.」\n\nAnthropic 未公開說明觸發異常請求量的原因，亦未提供明確的恢復時間表。",
      links: [
        { label: "BleepingComputer 報導", href: "https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-confirms-claude-is-down-worldwide/", kind: "doc" },
        { label: "Glitchwire 報導", href: "https://glitchwire.com/news/anthropics-claude-goes-down-for-thousands-as-529-errors-hit-workers-mid-task/", kind: "doc" }
      ]
    }
  },
  {
    id: "ai-pacing-letter-2026-07-29",
    date: "2026-07-29",
    version: "政策公告",
    category: "enh",
    area: "security",
    product: "claude",
    title: "Anthropic 等 AI 公司逾千名員工連署 AI 放緩請願書",
    summary: "OpenAI、Anthropic、Google、Meta 等逾 1,100 名 AI 從業人員連署公開信，呼籲美國政府建立國際協調機制，在 AI 進展超越安全監督能力時可協調驗證性放緩。",
    body: {
      kind: "feature",
      description: "2026-07-29，超過 1,100 名來自 OpenAI、Anthropic、Google 及 Meta 的 AI 公司員工連署一封公開信，要求美國政府研建「國際 AI 放緩協調機制」（international pacing mechanism）。\n\n**信件核心訴求**\n• 建立可驗證的 AI 進展放緩協調工具，供各國政府在 AI 能力超越安全監督速度時使用\n• 推動美國政府主導建立多邊國際對話框架\n• 確保 AI 發展速度不超過人類安全監督能力\n\n**背景**\nAnthropic 聯合創辦人 Jack Clark 及 Jared Kaplan 亦為連署人之一。此信件反映出 AI 業界內部對 AI 進展速度的安全顧慮正在升溫，也顯示出業界與政府間尋求監管對話的意願。\n\n**回應與爭議**\n• 矽谷方面對 Anthropic 安全立場存在批評聲音\n• 部分觀察人士認為 Anthropic 的謹慎立場可能兼顧競爭利益",
      links: [
        { label: "Washington Post 報導", href: "https://www.washingtonpost.com/technology/2026/07/29/openai-anthropic-endorse-call-government-pace-ai-progress/", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-mythos-hawk256-cryptanalysis-2026-07-29",
    date: "2026-07-29",
    version: "研究突破",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Mythos Preview 破解 HAWK-256 後量子密碼學方案，迫使 NIST 標準化申請撤回",
    summary: "Anthropic 宣布 Claude Mythos Preview 發現 HAWK-256 後量子簽名方案的密鑰復原漏洞，可將攻擊時間縮短至約 3.7 小時，並對七輪 AES-128 攻擊達到 200-800 倍加速。HAWK 開發者已撤回 NIST 標準化申請。",
    body: {
      kind: "feature",
      description: "2026-07-28-29，Anthropic 宣布 Claude Mythos Preview 在密碼學研究領域取得重大突破，直接導致一個後量子密碼學方案退出 NIST 標準化進程。\n\n**HAWK-256 攻擊細節**\n• Claude Mythos Preview 發現 HAWK 數學結構中的隱藏對稱性\n• 找到「利用路徑所需的額外自同構」，將金鑰復原從計算不可行縮短至約 3.7 小時（96 核心伺服器）\n• 攻擊目標為 HAWK-256（挑戰參數），HAWK-512 及 HAWK-1024 仍在安全範圍內\n• HAWK 開發者確認攻擊有效後，已撤回其 NIST 附加後量子簽名標準化申請\n\n**七輪 AES-128 加速**\n• Claude Mythos Preview 亦實現對七輪 AES-128 攻擊 200-800 倍的速度提升\n• 此攻擊對實際部署系統仍不構成威脅（七輪 AES 並非正式標準）\n\n**重要說明**\n• 兩項研究成果均不影響生產系統安全（HAWK 尚未標準化，七輪 AES 非正式標準）\n• 此突破展示了 AI 在密碼學分析研究的新興能力\n• Anthropic 表示這是 AI 協助科學研究的重要里程碑",
      links: [
        { label: "The Hacker News 報導", href: "https://thehackernews.com/2026/07/claude-ai-just-cracked-post-quantum.html", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-google-indexing-privacy-fix-2026-07-28",
    date: "2026-07-28",
    version: "安全公告",
    category: "bug",
    area: "security",
    product: "claude",
    title: "Anthropic 修復 Claude 共享對話遭 Google 索引的隱私問題",
    summary: "Claude 公開共享的對話與 Artifacts 遭 Google 索引，揭露用戶履歷、API 金鑰、財務試算表等敏感資料。Anthropic 於 7/27-28 更新 robots.txt 並移除已索引連結，但 Bing 及第三方快取仍存風險。",
    body: {
      kind: "bug",
      description: "2026-07-25，Reddit 用戶發現 Claude 透過共享功能產生的公開 URL 被 Google 大量索引，包含用戶真實姓名、電話號碼、API 金鑰、加密貨幣錢包資訊、財務試算表，乃至疑似社會安全號碼等敏感資料。\n\n**問題根源**\n• Claude 共享功能（Share Chat / Share Artifact）未明確告知用戶共享頁面可能被搜尋引擎索引\n• 公開 URL 缺少 noindex meta tag 及 robots.txt 限制\n\n**Anthropic 的處理**\n• 2026-07-27 至 2026-07-28 完成 robots.txt 更新，Google 已移除搜尋結果中的索引連結\n• 舊有共享 URL 對持有連結者仍可存取\n• Bing 及第三方爬蟲的快取資料尚未完全清除，暴露窗口尚未完全關閉\n\n**用戶建議**\n• 如曾分享包含敏感資訊的對話，應自行撤銷共享連結\n• 未來共享前確認對話內容不含個人識別或機密資訊",
      links: [
        { label: "Fortune 報導", href: "https://fortune.com/2026/07/27/a-trove-of-users-seemingly-private-conversations-with-anthropics-claude-ai-chatbot-showed-up-in-google-search-results/", kind: "doc" },
        { label: "News9Live 報導", href: "https://www.news9live.com/technology/artificial-intelligence/anthropic-fixes-claude-privacy-issue-after-private-ai-chats-appeared-in-google-search-2994021", kind: "doc" },
        { label: "Eastern Herald 報導", href: "https://easternherald.com/2026/07/28/claude-shared-chats-google-indexed/", kind: "doc" }
      ]
    }
  },
  {
    id: "mcp-2026-07-28-spec-claude-support",
    date: "2026-07-28",
    version: "MCP 2026-07-28",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "MCP 2026-07-28 規格正式發布：無狀態核心、强化授權，Claude 同步支援",
    summary: "MCP 發布自推出以來最大幅度更新：協議從雙向有狀態模式轉為無狀態請求/回應模型，帶來強化 OAuth 2.0/OIDC 授權、Multi Round-Trip Requests（MRTR）、Header-Based Routing 及正式擴充框架（Apps、Tasks）；Claude 同日發布支援公告，新增嵌入式 UI、企業身份驗證整合、開發者可觀測性儀表板及 MCP Tunnels。",
    body: {
      kind: "feature",
      description: "2026-07-28，Model Context Protocol 發布 2026-07-28 規格，為 MCP 自推出以來最重大的版本更新，同日 Anthropic 也宣布 Claude 已開始支援新規格。\n\n**核心架構變更：無狀態協議**\n• MCP 從雙向有狀態協議轉為請求/回應無狀態模型\n• 每個請求自描述，可落在負載平衡器後方的任何伺服器實例上，不再需要 session 管理\n• 可在 serverless 及 edge 基礎設施上直接部署\n\n**新增功能**\n• **Multi Round-Trip Requests（MRTR）**：取代需要開啟串流的伺服器啟動請求，工具可在無狀態機制下請求用戶中途確認\n• **Header-Based Routing**：新增必要的 `Mcp-Method` 和 `Mcp-Name` HTTP headers，讓 gateway 與速率限制器無需解析 JSON body 即可路由\n• **可快取列表結果**：tools、prompts、resources 回應中加入 `ttlMs` 和 `cacheScope` 參數\n• **強化授權**：符合 RFC 9207 issuer 驗證，從 Dynamic Client Registration 正式遷移至 Client ID Metadata Documents（CIMD）\n• **正式擴充框架**：Apps（互動式 UI）和 Tasks（長時間執行工作）進入正式版本化擴充框架\n\n**重大變更（破壞性）**\n• 移除 `initialize`/`initialized` 握手流程及 `Mcp-Session-Id` header\n• Roots、Sampling、Logging 進入 12 個月棄用過渡期\n• 舊 HTTP+SSE transport 正式棄用\n• Tasks 從核心移入 `io.modelcontextprotocol/tasks` 擴充\n\n**Claude 新功能**\n• MCP Apps：在對話中直接渲染互動式 UI\n• 企業身份驗證：透過 Entra、Okta 等 identity provider 實現零觸碰設定\n• 開發者可觀測性：已發布 connector 的效能儀表板\n• MCP Tunnels：無需公開暴露的私有網路伺服器安全連線\n\n**背景**\nMCP 月 SDK 下載量已突破 4 億次（年增 4 倍），成為 AI Agent 連接應用程式的業界標準；Claude Connector 目錄中超過 950 個 MCP 伺服器，每日用戶達數百萬。",
      links: [
        { label: "Claude 官方部落格：Bringing MCP 2026-07-28 to Claude", href: "https://claude.com/blog/bringing-mcp-2026-07-28-to-claude", kind: "doc" },
        { label: "MCP 官方規格部落格", href: "https://blog.modelcontextprotocol.io/posts/2026-07-28/", kind: "doc" },
        { label: "The Register 報導", href: "https://www.theregister.com/devops/2026/07/23/model-context-protocol-prepares-to-break-with-its-stateful-past/5276722", kind: "doc" }
      ]
    }
  },
  {
    id: "cognizant-anthropic-partnership-2026-07-27",
    date: "2026-07-27",
    version: "合作公告",
    category: "new",
    area: "enterprise",
    product: "claude",
    title: "Cognizant 升格為 Claude Partner Network 全球首要合作夥伴",
    summary: "Cognizant 與 Anthropic 擴大合作，將 Claude 嵌入製造、生命科學與保險等工業平台，逾 30,000 名員工完成 Claude 培訓，推動企業 AI 從試點走向規模化落地。",
    body: {
      kind: "feature",
      description: "2026-07-27，Anthropic 與 Cognizant 宣布擴大策略合作，Cognizant 成為 Claude Partner Network 的全球首要合作夥伴（Global Premier Partner）。\n\n**合作重點**\n• Cognizant 將 Claude 嵌入其核心商業與工程平台，橫跨製造、生命科學與保險等產業\n• 推出「Frontier Certified」員工認證體系，已有逾 30,000 名員工完成 Claude 培訓\n• 目標是協助企業客戶縮短 AI 試點與規模化落地之間的差距\n\n**背景**\n此次擴大合作建立於 2025 年底原有合作基礎之上，Cognizant 現為少數 Claude Partner Network 全球首要合作夥伴之一。",
      links: [
        { label: "Cognizant 官方新聞稿", href: "https://news.cognizant.com/2026-07-27-Cognizant-and-Anthropic-expand-partnership-to-embed-Claude-in-Cognizants-industry-platforms,-helping-clients-close-the-gap-between-AI-promise-and-business-outcomes", kind: "doc" },
        { label: "Anthropic 官方消息", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-open-weights-position-2026-07-27",
    date: "2026-07-27",
    version: "官方公告",
    category: "enh",
    area: "security",
    product: "claude",
    title: "Anthropic 發表開放權重模型立場聲明",
    summary: "CEO Dario Amodei 澄清 Anthropic 並未支持全面禁止開放權重模型，但對中國取得高性能 AI 晶片及工業規模蒸餾存有顧慮，呼籲差異化管制：管控晶片出口、禁止工業蒸餾、要求所有強大模型接受安全測試。",
    body: {
      kind: "feature",
      description: "2026-07-27，Anthropic CEO Dario Amodei 發表《我們對開放權重模型的立場》（Our position on open-weights models）。\n\n**背景**\n2026-07-24，Meta、Nvidia、OpenAI、Google、Microsoft、SpaceX 等科技巨頭聯署《開放權重與美國 AI 領導力》聲明，惟 Anthropic 為主要 AI 實驗室中唯一未連署者，引發業界批評。\n\n**Anthropic 的立場**\n• Dario Amodei 聲明：「Anthropic 並未、也不正在倡議對開放權重模型類別實施禁令。」\n• 主要顧慮：威權政府取得媲美美國的 AI 能力，用於軍事優勢或鎮壓本國人民\n• 反對聲明中「開放權重模型必然使 AI 更安全」的論點\n\n**Anthropic 的政策主張**\n• 對高性能 AI 晶片的出口管制（防止流入威權國家）\n• 禁止工業規模的模型蒸餾行為\n• 要求所有達到一定能力門檻的模型（不論開放或閉源）接受安全測試",
      links: [
        { label: "Anthropic 官方聲明", href: "https://www.anthropic.com/news/position-open-weights-models", kind: "doc" },
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/07/27/anthropics-dario-amodei-responds-doesnt-oppose-open-weight-models-but-fears-chinese-ai/", kind: "doc" },
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/07/27/anthropic-ceo-dario-amodei-isnt-advocating-open-weight-model-ban.html", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.220",
    date: "2026-07-25",
    version: "v2.1.220",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.220：錯誤修復與穩定性改善",
    summary: "Claude Code v2.1.220 帶來一系列錯誤修復與可靠性改善。",
    body: {
      kind: "bug",
      description: "v2.1.220（2026-07-25）：本版本專注於錯誤修復與可靠性改善，為 v2.1.219（新增 Claude Opus 5 支援）的後續穩定版本。",
      links: [
        { label: "github/claude-code/v2.1.220", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.220", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-opus-5-launch-2026-07-24",
    date: "2026-07-24",
    version: "claude-opus-5",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Opus 5 正式發布：1M token 上下文、媲美 Fable 5 的智能",
    summary: "Anthropic 發布 Claude Opus 5（claude-opus-5），擁有 1M token 上下文、128k 最大輸出、預設開啟 Thinking，定價維持 $5/$25 每百萬 token（與 Opus 4.8 相同）。Fast Mode $10/$50，成為 Claude Max 預設模型及 Claude Pro 最強模型，即日起在 API、Bedrock、Google Cloud、Microsoft Foundry、claude.ai、Claude Code 及 Cowork 全平台可用。",
    body: {
      kind: "feature",
      description: "2026-07-24，Anthropic 正式發布 Claude Opus 5（API ID：`claude-opus-5`）。\n\n**主要規格**\n• 上下文視窗：1M token（輸入），最大輸出 128k token\n• 定價：$5/$25 每百萬 token（輸入/輸出），與 Opus 4.8 相同\n• Fast Mode：$10/$50 每百萬 token，最高 2.5 倍速\n• Thinking 預設開啟，支援完整 effort 階梯（low / medium / high / xhigh / max）\n• 知識截止日：2026 年 5 月\n\n**能力亮點**\n• 軟體工程：在 Frontier-Bench v0.1 超越所有競爭對手\n• 知識工作：複雜問題解決能力為競品的三倍\n• 科學研究：化學、蛋白質分析、基因體學均有顯著提升\n• 視覺生成：動畫、遊戲、3D 視覺化表現增強\n• 自我驗證與迭代問題解決能力更強\n\n**重要 API 注意事項**\n• effort 設定為 xhigh 或 max 時，無法停用 Thinking；嘗試停用將回傳 400 錯誤\n• Opus 4.8 保持可用；Opus 4.7 Fast Mode 已同步停用\n\n**平台可用性**\n即日起在 Claude API、Amazon Bedrock、Google Cloud、Microsoft Foundry、claude.ai、Claude Code 及 Cowork 全平台提供。Claude Max 用戶自動獲得 Opus 5 作為預設模型；Claude Pro 用戶可選擇 Opus 5 作為最強模型。",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/claude-opus-5", kind: "doc" },
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/", kind: "doc" },
        { label: "Claude Developer Platform Release Notes", href: "https://platform.claude.com/docs/en/release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.219",
    date: "2026-07-24",
    version: "v2.1.219",
    category: "new",
    area: "model",
    product: "claude-code",
    title: "v2.1.219：新增 Claude Opus 5 支援、子代理巢狀深度提升至 3 層、多項穩定性修復",
    summary: "Claude Code v2.1.219 新增 Opus 5 為預設 Opus 模型（1M context）、sandbox.network.strictAllowlist 封鎖未白名單主機、DirectoryAdded hook、子代理巢狀深度上限提升至 3 層、Dynamic Workflows 預設 medium 規模（< 15 代理），並修復多項 MCP、Vim 模式、遠端控制及終端機相容性問題。",
    body: {
      kind: "feature",
      description: "v2.1.219（2026-07-24）變更摘要：\n\n**模型更新**\n• 新增 `claude-opus-5` 為預設 Opus 模型（1M context 視窗）\n• Fast Mode 移除 Opus 4.7 支援；`/fast` 現在適用 Opus 5 及 Opus 4.8\n\n**新設定與配置**\n• 新增 `sandbox.network.strictAllowlist` 設定：在沙箱指令中拒絕未白名單主機，不再提示確認\n• 新增 `workflowSizeGuideline` 設定鍵：可從任何設定檔配置 Dynamic Workflow 規模準則\n• Dynamic Workflows 預設規模改為 medium（建議 < 15 個代理）\n\n**Hooks 與事件**\n• 新增 `DirectoryAdded` hook：在 `/add-dir` 或 SDK `register_repo_root` 控制請求註冊新工作目錄後觸發\n\n**MCP 與基礎設施**\n• 新增 `mcp_server_errors` 至 headless stream-json 初始化事件，列出設定驗證跳過的項目\n• `claude mcp list` 及 `/mcp` 現在顯示伺服器連線失敗時的 HTTP 狀態與錯誤訊息\n• 新增 MCP 設定值含隱藏前後空白的警告提示\n\n**子代理改善**\n• stream-json 中的巢狀子代理轉發：設定 `--forward-subagent-text` 時，depth-2+ 的子代理輸出現在可見\n• 子代理預設可再生成巢狀子代理至深度 3（原為 1）；可用 `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1` 停用\n\n**錯誤修復**\n• 修復自架 runner 重啟後權限核准遺失問題\n• 修復 `/model` 選擇器顯示「Opus」而非「Opus (1M context)」\n• 修復 GNU screen 內 copy-on-select 輸出 base64 而非複製\n• 修復遠端控制客戶端切換模型後保留過期 fast-mode 狀態\n• 修復 `CLAUDE_CODE_GIT_BASH_PATH` 在路徑非 bash/sh 二進位時退出\n• 修復 Vim 模式：在 NORMAL 模式下，空 prompt 時按 ← 返回代理檢視\n• 修復螢幕閱讀器模式下每次按鍵重寫整行輸入\n• 改善 `claude --teleport` 顯示當前 checkout 指向的 repo 資訊",
      links: [
        { label: "github/claude-code/v2.1.219", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.219", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "mid-conversation-tool-changes-beta-2026-07-24",
    date: "2026-07-24",
    version: "API Beta",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "Mid-conversation 工具變更進入 Beta：可在對話中途更換工具定義",
    summary: "Claude API 新增 Beta 功能：透過 mid-conversation-tool-changes-2026-07-01 header 可在多輪對話中途新增、移除或修改工具定義，無需重啟 session，適合動態工具場景。",
    body: {
      kind: "feature",
      description: "2026-07-24，Claude Developer Platform 推出 mid-conversation 工具變更 Beta 功能。\n\n**使用方式**\n在 API 請求中加入 `anthropic-beta: mid-conversation-tool-changes-2026-07-01` header，即可在同一對話的不同輪次中傳入不同的工具定義。\n\n**適用場景**\n• 動態載入工具：依對話上下文決定提供哪些工具\n• 長期 Agent 流程：在不同階段切換工具集\n• 資源管理：移除不再需要的工具以節省 token\n\n此為 Beta 功能，API 行為可能隨正式版本調整。",
      links: [
        { label: "Claude Developer Platform Release Notes", href: "https://platform.claude.com/docs/en/release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "opus-4-7-fast-mode-removal-2026-07-24",
    date: "2026-07-24",
    version: "API 重大變更",
    category: "brk",
    area: "model",
    product: "claude",
    title: "Claude Opus 4.7 Fast Mode 正式移除，請遷移至 Opus 4.8",
    summary: "即日起，以 speed: 'fast' 呼叫 claude-opus-4-7 將回傳錯誤，且不會回退至標準速度。需遷移至 Claude Opus 4.8 Fast Mode，遷移後費用從每百萬 token $30/$150 降至 $10/$50（輸入/輸出）。",
    body: {
      kind: "breaking",
      description: "2026-07-24，Anthropic 正式移除 Claude Opus 4.7 的 Fast Mode 支援。\n\n**影響範圍**\n• 使用 `speed: \"fast\"` 參數呼叫 `claude-opus-4-7` 的 API 請求即日起回傳錯誤\n• 與 claude-opus-4-6 不同，claude-opus-4-7 不會自動回退至標準速度\n\n**遷移路徑**\n• 將模型替換為 `claude-opus-4-8` 並保留 `speed: \"fast\"` 參數\n• 遷移至 Opus 4.8 Fast Mode 同時帶來費用降幅：每百萬 token 由 $30/$150 降至 $10/$50（輸入/輸出）\n• Fast Mode 輸出速度最高可達標準模式的 2.5 倍，模型智能不變\n\n**背景**\nFast Mode for Opus 4.7 自 2026-06-25 起進入棄用期，今日正式移除。",
      migration: {
        title: "替換模型 ID",
        text: "將 API 呼叫中的 claude-opus-4-7 改為 claude-opus-4-8，speed: \"fast\" 參數保持不變。"
      },
      diff: {
        before: ["model: \"claude-opus-4-7\",", "speed: \"fast\""],
        after: ["model: \"claude-opus-4-8\",", "speed: \"fast\""]
      },
      links: [
        { label: "Fast Mode 文件", href: "https://platform.claude.com/docs/en/build-with-claude/fast-mode", kind: "doc" },
        { label: "Claude Platform Release Notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-voice-mode-model-selection-2026-07-23",
    date: "2026-07-23",
    version: "產品更新",
    category: "enh",
    area: "voice",
    product: "claude",
    title: "Claude 語音模式升級：新增 Opus 和 Sonnet 模型選項",
    summary: "Claude 語音模式（Voice Mode）現可選擇 Opus、Sonnet 或 Haiku 模型，預設採用用戶上次文字對話使用的模型最快版本。付費用戶可享更強推理能力的語音對話，免費用戶限用 Haiku 模型。",
    body: {
      kind: "feature",
      description: "2026-07-23，Anthropic 更新 Claude 語音模式，新增 Opus 與 Sonnet 模型支援，原本語音模式僅支援 Haiku 模型。\n\n**主要變更**\n• 語音模式現支援 Opus、Sonnet、Haiku 三種模型，可在對話中切換\n• 預設自動採用用戶上次在文字對話中使用的模型的最快版本\n• 適合需要深度推理的語音場景：溝通風格反饋、客戶簡報演練、產品市場研究腦力激盪\n• 語音模式可串接 Gmail、Google Calendar、Slack、Canva、Notion 等外部應用程式\n\n**使用限制**\n• 免費用戶：僅限使用 Haiku 模型，且只能連接一個外部應用程式\n• 付費用戶：可使用訂閱方案包含的所有模型\n• 功能以 Beta 形式向全平台用戶開放",
      links: [
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/", kind: "doc" },
        { label: "Claude 語音模式說明", href: "https://support.anthropic.com/en/articles/11101966-using-voice-mode-on-claude-mobile-apps", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.218",
    date: "2026-07-22",
    version: "v2.1.218",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.218：/code-review 改為背景子代理執行、螢幕閱讀器強化與大量穩定性修復",
    summary: "Claude Code v2.1.218 將 /code-review 改為在背景子代理中執行（不再佔用主對話），新增螢幕閱讀器文字刪除通知，修復 Windows 路徑含 \\u 字首被轉成 CJK 字元、左箭頭鍵誤丟棄對話、多行貼上換行被替換、引擎關閉競態條件等共 20+ 個問題。",
    body: {
      kind: "bug",
      description: "v2.1.218（2026-07-22）變更摘要：\n\n**主要功能變更**\n• `/code-review` 現改為在背景子代理中執行，主對話不再被審查內容填滿，且疊加的 slash command 也以審查目標為準\n\n**無障礙改善**\n• 在 `--ax-screen-reader` 模式下，文字刪除動作現在會發出螢幕閱讀器通知\n\n**錯誤修復（共 20+ 項）**\n• 修復 Windows 路徑含 `\\u` 字首的片段被錯誤轉換為 CJK 字元\n• 修復左箭頭鍵在無 undo 紀錄時誤丟棄整個對話\n• 修復 `claude mcp list` 和 `/mcp` 顯示失敗連線的 HTTP 狀態與錯誤文字\n• 修復多行貼上時換行被 `j` 取代（部分終端機）\n• 修復 `/context` 在壓縮後顯示過時 token 用量\n• 修復 `/ultrareview` 對含描述性引數（如「review my auth changes」）失效\n• 修復 `/code-review ultra` 在非互動 session 靜默執行本地審查\n• 修復 Bedrock application-inference-profile ARN 的 gateway 費用計量\n• 修復長 IDE 選取截斷在 emoji 中間時出現的亂碼\n• 修復引擎關閉競態條件造成幽靈輪次\n• 修復中斷工具呼叫後出現誤報的「[Request interrupted by user]」訊息\n• 修復螢幕閱讀器模式下的 VoiceOver 讀取問題\n• 修復外掛與設定面板在螢幕閱讀器中未移動游標\n• 修復深層巢狀監控目錄樹被刪除時導致崩潰\n• 修復 session 結束時遺失 pull request 事件\n• 修復 Bedrock setup wizard 在分區 AWS 區域的 assume-role 設定失敗\n• 修復系統時鐘調整後出現負值的輪次時長測量\n• 修復 MCP 伺服器驗證通知重複計數\n• 修復 prompt 歷史記錄項目遺失或重複\n• 改善 `/ultrareview` 對無效引數的錯誤回饋\n• 改善 auto mode：dangerous-rm、background-& 和可疑 Windows 路徑檢查不再開啟對話框\n• 將 `/deep-research` 改為僅在手動呼叫時啟動\n• 新增 `yes`/`no`/`on`/`off`/`1`/`0` 作為技能與外掛前置資料的有效布林值\n• 修復遠端 session 在 worker 替換後繼續傳送心跳",
      links: [
        { label: "github/claude-code/v2.1.218", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.218", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "managed-agents-enh-2026-07-22",
    date: "2026-07-22",
    version: "API 更新",
    category: "enh",
    area: "model",
    product: "claude",
    title: "Claude Managed Agents 新增 Effort 等級、Webhook 擴充、Session 種子事件等五項功能",
    summary: "Claude Developer Platform 更新 Managed Agents：可設定 effort 等級（模型配置中）、支援 environment.* 和 memory_store.* webhook 事件、建立 session 時可植入最多 50 個初始事件、version 欄位改為選填、執行緒事件串流支援事件 delta 即時預覽子代理文字。",
    body: {
      kind: "feature",
      description: "2026-07-22 Claude Developer Platform 針對 Managed Agents 新增五項功能：\n\n• **Effort 等級設定**：建立或更新 Agent 時，可在 model 物件中傳入 `effort` 欄位，控制模型推理深度\n• **Webhook 擴充**：新增 4 個 `environment.*` 事件類型與 3 個 `memory_store.*` 事件類型，可訂閱環境與記憶體儲存的生命週期事件\n• **Session 種子事件**：建立 session 時可傳入最多 50 個 `user.message` 和 `user.define_outcome` 事件，作為對話的初始種子\n• **version 欄位改為選填**：更新 Agent 時 `version` 不再強制填寫，支援無條件更新或樂觀並發控制兩種模式\n• **執行緒事件 Delta**：Session 執行緒事件串流現在支援 query parameter 指定事件 delta，可即時預覽子代理的文字輸出",
      links: [
        { label: "Claude Developer Platform Release Notes", href: "https://platform.claude.com/docs/en/release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-economic-index-connector-2026-07-22",
    date: "2026-07-22",
    version: "新連接器",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "新增 Anthropic Economic Index 連接器：直接向 Claude 查詢 AI 經濟使用數據",
    summary: "Anthropic 推出 Economic Index 連接器，在 claude.ai 連接器目錄中啟用後，可在任何對話中直接向 Claude 提問 AI 跨行業使用狀況，例如哪些職業最常使用 AI、特定地區或職業的常見任務，答案直接來自 Index 資料集。",
    body: {
      kind: "feature",
      description: "2026-07-22，Anthropic 發布 Anthropic Economic Index 連接器，讓 claude.ai 用戶可直接在對話中查詢 AI 經濟使用數據。\n\n**功能說明**\n• 在 claude.ai 的連接器目錄中找到「Anthropic Economic Index」並啟用，無需安裝任何軟體\n• 支援任何 Claude 模型、任何對話，啟用後即時生效\n• 可提問例如：「哪些職業最常使用 AI？」「科羅拉多州的人最常用 Claude 做什麼？」「教師用 Claude 做哪些工作？」\n\n**背景**\nAnthropic Economic Index 是 Anthropic 的公開資料集，衡量 AI 在整體經濟中的實際使用方式，此連接器讓一般用戶無需資料分析技能即可探索這份資料。",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/anthropic-economic-index-connector", kind: "doc" }
      ]
    }
  },
  {
    id: "economic-futures-research-fund-agenda-2026-07-22",
    date: "2026-07-22",
    version: "官方公告",
    category: "new",
    area: "community",
    product: "claude",
    title: "Anthropic 發布經濟未來研究基金（Economic Futures Research Fund）研究議程",
    summary: "Anthropic 公布經濟未來研究基金的研究議程，聚焦於 AI 對就業、薪資、勞動市場結構及整體經濟的影響，作為 Anthropic Economic Index 計畫的延伸。",
    body: {
      kind: "feature",
      description: "2026-07-22，Anthropic 發布「經濟未來研究基金（Economic Futures Research Fund）」研究議程，作為 Anthropic Economic Index 的延伸計畫。\n\n**研究方向**\n• 研究議程聚焦於 AI 對就業結構、薪資水準、勞動市場變化及整體經濟的影響\n• 以 Anthropic Economic Index 累積的資料為基礎，推動更深入的學術研究\n• 目標是建立跨領域的研究合作，理解 AI 技術的廣泛經濟影響",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.217",
    date: "2026-07-21",
    version: "v2.1.217",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.217：新增 Emoji 快捷碼補全、子代理並發上限控制與多項安全修復",
    summary: "Claude Code v2.1.217 新增 Emoji 快捷碼自動補全（如 :heart: → ❤️），子代理並發上限預設 20 個可透過環境變數調整，子代理預設不再巢狀生成，並修復 MCP 輸出記憶體洩漏、Windows 自動更新復原、背景 Session 符號連結正規化及 Claude Desktop 企業 mTLS 設定失效等問題。",
    body: {
      kind: "feature",
      description: "v2.1.217（2026-07-21）新功能與修復：\n\n**新功能**\n• **Emoji 快捷碼自動補全**：輸入 `:heart:` 自動插入 ❤️，輸入前綴（如 `:hea`）顯示建議清單；可透過 `emojiCompletionEnabled` 設定停用\n• **Transcript 寫入警告**：磁碟已滿或 Session 保存被環境變數停用時即時發出警告，防止 Transcript 靜默遺失\n\n**子代理控制**\n• 新增子代理並發上限，預設最多同時執行 20 個子代理，可透過 `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS` 覆寫\n• 子代理預設不再生成巢狀子代理；需更深層巢狀時設定 `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`\n• 修復 `--max-budget-usd` 無法停止背景子代理的問題\n\n**安全性與隔離修復**\n• 背景 Session 現正規化符號連結工作目錄，防止 Session 逃逸工作區\n• 企業級 mTLS、TLS 驗證、OAuth Scope 及代理設定現在在 Claude Desktop 工作階段中正確生效\n\n**記憶體與效能修復**\n• 修復截斷的 MCP 工具輸出仍在記憶體中保留完整內容的洩漏問題\n• 修復 Windows 自動更新失敗後未還原備份可執行檔的問題\n• 修復 Claude Opus 4.8 on Bedrock 的 Auto-compact 功能",
      links: [
        { label: "github/claude-code/v2.1.217", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.217", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.216",
    date: "2026-07-20",
    version: "v2.1.216",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.216：修復長對話效能回歸、沙箱控制強化與多項穩定性修復",
    summary: "Claude Code v2.1.216 修復長對話中訊息正規化呈二次方成長導致的多秒停頓問題，新增 sandbox.filesystem.disabled 設定，並修復 OAuth Token 過期後 Auto Mode 被拒絕、AskUserQuestion 措辭、Web Session 閒置後重複提問、背景 Agent 遺失自訂提示等問題，同時改善 RTL 文字渲染與雲端 Session 容器重啟時的訊息保留。",
    body: {
      kind: "bug",
      problem: "長對話中訊息正規化成本呈二次方成長，造成多秒停頓及緩慢的 Session 恢復；OAuth Token 過期或輪換後 Auto Mode 出現 HTTP 401 分類錯誤；AskUserQuestion 自由文字回答措辭不中立；Web Session 閒置後恢復時重複提問並丟棄答案；背景 Agent 恢復後遺失自訂提示與工具限制；Worktree 子代理將 git 指令重定向至共享 Checkout；MCP 重新驗證在新登入成功前撤銷有效憑證等。",
      rootCause: "多個模組的個別缺陷：Session 恢復時的訊息正規化演算法複雜度過高、OAuth 中間件未處理 Token 輪換場景、AskUserQuestion 文案設計缺漏、Web Session 狀態管理錯誤、背景 Agent 的持久化儲存未包含提示與工具設定、Worktree git 重定向邏輯錯誤、MCP 認證流程未保護現有 Token。",
      fix: "修復訊息正規化演算法降低複雜度；新增 sandbox.filesystem.disabled 設定可在保留網路出口控制的前提下跳過檔案系統隔離；修正 OAuth Token 過期後 Auto Mode 的權限處理；調整 AskUserQuestion 自由文字回答的措辭；修復 Web Session 閒置後恢復的狀態同步；修復背景 Agent 恢復後持久化自訂提示與工具限制；修正 Worktree 子代理 git 重定向；修復 MCP 重新驗證流程；改善 VS Code 中阿拉伯文、希伯來文、波斯文的 RTL 渲染；修復雲端 Session 在容器重啟時丟失進行中訊息。",
      links: [
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-rare-disease-grants-2026-07-20",
    date: "2026-07-20",
    version: "官方公告",
    category: "new",
    area: "community",
    product: "claude",
    title: "Anthropic 開放 AI for Science 罕見疾病研究補助申請",
    summary: "Anthropic 開放 AI for Science 罕見疾病研究補助計畫申請，通過審核的研究者可獲得最高 5 萬美元的 Claude API Credits，為期 6 個月，申請截止日為 2026 年 8 月 2 日。",
    body: {
      kind: "feature",
      description: "2026 年 7 月 20 日，Anthropic 公布 AI for Science 計畫針對罕見遺傳疾病研究的專項補助，目標是建立一個探索 AI 如何重塑罕見疾病理解的研究社群。\n\n**補助內容**\n• 通過審核的申請者可獲得最高 **50,000 美元**的 Claude API Credits，有效期 6 個月\n• 現有受助機構包括：Every Cure（藥物再利用機會識別）、Centre for Population Genomics（Claude 驅動的變體分類系統）、Violet Research Institute（FDA 法規指引、生物資訊學流程與法規文件撰寫）\n\n**申請資訊**\n• 申請截止日：2026 年 8 月 2 日 23:59 PST\n• 計畫背景：AI for Science 計畫於去年春季發布，旨在透過 API 存取加速科學研究與發現",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/rare-disease-research-grants", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.215",
    date: "2026-07-19",
    version: "v2.1.215",
    category: "enh",
    area: "slash-command",
    product: "claude-code",
    title: "v2.1.215：/verify 與 /code-review 技能改為手動觸發",
    summary: "Claude Code v2.1.215 調整 /verify 和 /code-review 技能行為，Claude 不再自動執行這兩個技能，使用者需主動輸入指令才能觸發。",
    body: {
      kind: "feature",
      description: "v2.1.215（2026-07-19）行為變更：\n\n• `/verify` 與 `/code-review` 技能現在改為手動觸發，Claude 不再在工作流程中自動執行這兩項技能\n• 使用者需主動輸入 `/verify` 或 `/code-review` 指令才能啟動對應的驗證或程式碼審查流程",
      links: [
        { label: "github/claude-code/v2.1.215", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.215", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.214",
    date: "2026-07-18",
    version: "v2.1.214",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.214：安全性修復、新增 EndConversation 工具與多項穩定性改善",
    summary: "Claude Code v2.1.214 修復 Windows PowerShell 5.1 權限繞過漏洞、Bash 超長指令與檔案描述符重定向的權限檢查問題，新增 EndConversation 工具處理濫用者與越獄嘗試，以及長時間工具呼叫定期進度心跳，並修復 pkill -f 誤匹配、stream-json 截斷、PowerShell 懸掛及背景 session 無法移除等問題。",
    body: {
      kind: "bug",
      problem: "多項安全性與穩定性問題：Windows PowerShell 5.1 權限繞過、Bash 超長指令的權限檢查缺漏、pkill -f 誤匹配 CLI 自身程序、stream-json 輸出截斷、PowerShell 工具懸掛、背景 session 無法移除。",
      rootCause: "各問題由不同模組的個別缺陷造成，包括 Windows 平台的 PowerShell 整合、Bash 工具的邊界條件處理、stream-json 緩衝區管理等。",
      fix: "針對各問題分別修復：強化 PowerShell 5.1 的權限檢查邏輯、修正 Bash 超長指令及 fd 重定向的解析、調整 pkill 模式排除 CLI 自身、修正 stream-json 輸出截斷、修復 PowerShell 工具懸掛與 claude rm 的背景 session 清除流程。另新增 EndConversation 工具與工具呼叫心跳機制。",
      links: [
        { label: "github/claude-code/v2.1.214", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.214", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.212",
    date: "2026-07-17",
    version: "v2.1.212",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.212：/fork 指令重設計、Session 限制管控、MCP 自動背景化與多項安全修復",
    summary: "Claude Code v2.1.212 重新設計 /fork（複製對話至背景 session）與 /subtask 為獨立指令，新增 WebSearch 與子代理次數上限（預設 200），MCP 工具呼叫超過 2 分鐘自動移至背景，/resume 支援已刪除 session 選取，並修復計畫模式未授權 Bash、worktree 符號連結漏洞、Windows PowerShell 群組原則等問題。",
    body: {
      kind: "feature",
      description: "v2.1.212（2026-07-17）新功能與修復：\n\n**新功能**\n• `/fork` 重新設計：現在將對話複製到新的背景 session（可在 `claude agents` 中查看），並保持當前 session 繼續工作；原本的子代理行為改由 `/subtask` 指令處理\n• `/resume` 指令：在 agent 視圖輸入 `/resume` 可開啟歷史 session 選擇器（包括已刪除的 session），並以背景 session 形式恢復\n• Auto-mode 重置：`claude auto-mode reset` 可還原預設自動模式設定（加 `--yes` 可略過確認提示）\n\n**Session 管理與限制**\n• Session 級別 WebSearch 呼叫次數限制（預設 200，可透過 `CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION` 調整）\n• Session 級別子代理生成次數上限（預設 200，可透過 `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION` 覆蓋）；`/clear` 可重置預算\n• MCP 工具呼叫執行超過 2 分鐘自動移至背景（可透過 `CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS` 設定）\n\n**安全性修復**\n• 修復 worktree 建立時跟隨 `.claude/worktrees` 符號連結的安全問題\n• 企業版 `forceLoginMethod` 現在對 VS Code、SDK 及 GitHub App 登入強制執行\n\n**Bug 修復**\n• 修復計畫模式在未取得授權的情況下自動執行修改檔案的 Bash 指令\n• 修復 Bash 工具中 SIGTERM 在 Windows 上導致程序孤立的問題\n• 修復 Windows 上 Group Policy 限制 PowerShell 5.1 時 `/background` 與 `claude --bg` 失敗（現優先使用 PowerShell 7）\n• 修復 shell 模式（`!`）檔案路徑自動完成阻擋指令執行\n• 修復 `/ultrareview` 拒絕 PR 參照格式（如 `#123`、PR URL）及未拉取遠端分支\n• 修復 `continue:false` hook 中止在工具失敗時被丟棄\n• 修復背景 session 失去即時父連線保護\n• 修復包含大量圖片的對話出現「Request too large」錯誤\n• 修復 OpenTelemetry HTTP 匯出與 Azure Monitor 相容性問題\n\n**效能改善**\n• 增強 web search/fetch 可靠性（對 529/限速請求加入重試邏輯）\n• 改善 LLM gateway 和自訂 base URL 後端的 prompt caching\n• 減少代理間訊息傳遞的 token 用量（不再複製訊息本文）\n• Session 逐字稿現在記錄推理努力等級",
      links: [
        { label: "github/claude-code/v2.1.212", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.212", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.211",
    date: "2026-07-15",
    version: "v2.1.211",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.211：subagent 串流輸出支援、安全修復與多項穩定性改善",
    summary: "Claude Code v2.1.211 新增 --forward-subagent-text 旗標可在 stream-json 輸出中包含子代理文字與思考內容，修復雙向覆蓋字元安全漏洞、Auto Mode 忽略 PreToolUse hook ask 決策、平行 session 同時登出、Plugin MCP 伺服器閒置後不重連，並修復 Bedrock/Vertex/Foundry prompt-caching 計費回歸。",
    body: {
      kind: "feature",
      description: "v2.1.211（2026-07-15）新功能與修復：\n\n**新功能**\n• 新增 `--forward-subagent-text` 旗標及 `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` 環境變數，可在 stream-json 輸出中包含子代理的文字與思考內容\n\n**安全性修復**\n• 修復權限預覽未過濾雙向覆蓋（bidirectional-override）、零寬度字元及外觀相似引號，防止工具輸入操縱\n• 強化 Claude in Chrome 的檔案上傳路徑驗證（拒絕含多個硬連結及 DOS 裝置後綴的檔案）\n\n**行為修復**\n• Auto Mode 現在正確尊重 PreToolUse hook 對無沙箱 Bash 的 `ask` 決策\n• 修復子代理在恢復或收到後續訊息時回退至父代理模型的問題\n• 修復嵌套 `.claude/rules/*.md` 檔案在應被排除時仍被載入的問題\n\n**穩定性修復**\n• 修復平行 Claude Code sessions 在從休眠喚醒後同時登出的問題\n• 修復 Plugin MCP 伺服器在閒置網頁 session 後不重新連線的問題\n• 修復背景 agent 被使用者終止後自動重新啟動的問題\n• 修復 `/loop` 的 sessions 不出現於 `/resume` 列表的問題\n• 修復例行任務回報錯誤的下次執行時間\n• 修復 `/clear` 未重置 session 成本計數器\n\n**計費與設定修復**\n• 修復 Bedrock、Vertex、Mantle 及 Foundry 的 prompt-caching 計費回歸（尾部系統情境被錯誤計費）\n• 修復 Bedrock 和 Vertex 在啟動時嘗試預設 Opus 模型的問題\n• 整數環境變數現支援科學記數法（如 `1e6`、`64_000`）\n\n**UI/UX 改善**\n• 改善終端機排版與渲染效能\n• 修復 async 內容（設定頁籤、統計資訊、diff 視圖）顯示延遲 300ms 的問題\n• 修復螢幕閱讀器在終端機設定後發出聲音警鈴的問題\n• 更新文件連結至最新文件站點",
      links: [
        { label: "github/claude-code/v2.1.211", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.211", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.210",
    date: "2026-07-14",
    version: "v2.1.210",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.210：即時執行時間計數器、防止 Prompt Injection 強化，以及多項穩定性修復",
    summary: "Claude Code v2.1.210 新增長時間工具呼叫的即時執行計時顯示，修復 isolation worktree 子代理可對主 repo 執行 git 指令的安全問題、ultracode 誤觸發、claude attach 失敗、BigInt 崩潰、Plugin MCP 被重置等問題，並將 Auto Mode 權限分類器預設切換為 Sonnet 5。",
    body: {
      kind: "feature",
      description: "v2.1.210（2026-07-14）新功能與修復：\n\n**新功能**\n• 長時間工具呼叫的摺疊摘要列現在顯示即時執行計時器\n• 新增 `Write(path)`、`NotebookEdit(path)`、`Glob(path)` 權限規則的啟動警告，建議改用 `Edit(path)` 或 `Read(path)`\n\n**安全性強化**\n• 強化 Agent 工具防護，防止透過子代理讀取內容進行間接 Prompt Injection\n\n**Bug 修復**\n• 修復 `isolation: 'worktree'` 子代理可對主 repo 執行 git 變更命令（安全性修復）\n• 修復 `ultracode` 關鍵字在非人類輸入（webhook payloads、轉送的 PR 留言）觸發的問題\n• 修復貼上標記洩漏至外部編輯器（文字周圍出現 È/É 字元）\n• 修復 `claude attach` 在 session 過渡期間出現「job not found」或「agent is still starting」錯誤\n• 修復工具結果渲染器回傳 BigInt 或純文字時導致 session 崩潰\n• 修復 hook callback 超時被誤報為使用者拒絕\n• 修復 `cd` 移至背景後 Claude 誤以為指令已生效\n• 修復 MCP 伺服器重新同步時 Plugin 提供的 MCP 伺服器被中斷\n• 修復未編輯的計畫審核被標記為「(edited by user)」並覆蓋舊快照\n• 修復 `/doctor` 在 Bedrock/Vertex/Foundry 跳過自動模式預設建議\n\n**效能改善**\n• Auto Mode 權限分類器預設切換為 Sonnet 5（外部 session）\n• 改善 Bash/PowerShell 工具命中超時並自動移至背景的提示訊息\n• 改善 dataviz skill，加入 OKLab 感知色差驗證",
      links: [
        { label: "github/claude-code/v2.1.210", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.210", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.209",
    date: "2026-07-14",
    version: "v2.1.209",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.209：修復背景 session 中對話框被封鎖的問題",
    summary: "Claude Code v2.1.209 修復背景 session 中 /model 及其他對話框被過度封鎖的問題（還原前版過於寬泛的防護邏輯）。",
    body: {
      kind: "bug",
      problem: "背景 `claude agents` session 中，/model 及其他對話框無法正常開啟。",
      rootCause: "前版本引入的防護邏輯過於寬泛，錯誤封鎖了背景 session 的對話框。",
      fix: "還原過於寬泛的防護邏輯，僅在必要情境下限制對話框。",
      links: [
        { label: "github/claude-code/v2.1.209", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.209", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.208",
    date: "2026-07-14",
    version: "v2.1.208",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.208：新增螢幕閱讀器模式、Vim 插入模式自訂鍵位與企業程序包裝支援",
    summary: "Claude Code v2.1.208 新增無障礙螢幕閱讀器模式（--ax-screen-reader）、Vim 插入模式兩鍵序列自訂（vimInsertModeRemaps）、企業環境程序包裝設定（CLAUDE_CODE_PROCESS_WRAPPER），並修復 fast mode、背景 session attach 及多項串流與渲染問題。",
    body: {
      kind: "feature",
      description: "v2.1.208（2026-07-14）新功能與修復：\n\n**新功能**\n• **螢幕閱讀器模式**：新增 `--ax-screen-reader` 旗標、`CLAUDE_AX_SCREEN_READER=1` 環境變數或 settings 中 `\"axScreenReader\": true`，啟用純文字輸出以支援視障輔助工具\n• **Vim 插入模式自訂鍵位**：新增 `vimInsertModeRemaps` 設定，可將兩鍵序列（如 `jj`）映射至 Escape 等按鍵\n• **企業程序包裝**：新增 `CLAUDE_CODE_PROCESS_WRAPPER` 環境變數，支援企業環境的自訂啟動器\n\n**Bug 修復**\n• 修復切換模型後 fast mode 維持關閉狀態\n• 修復二進位更新後背景 session attach 失敗\n• 修復 CLI 自動更新後 context window 短暫重置為 200k\n• 修復受管/背景 session 在 HTTP/2 GOAWAY 期間崩潰\n• 修復管道傳輸大型回應時 stream-json 輸出被截斷\n• 修復非常大的 Markdown 表格導致渲染卡頓（現在顯示前 200 列並附加說明）\n• 修復 Remote Control 用戶端直到任務開始/停止後才看到背景 Agent",
      links: [
        { label: "github/claude-code/v2.1.208", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.208", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-for-teachers-2026-07-14",
    date: "2026-07-14",
    version: "Claude for Teachers",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "推出「Claude for Teachers」：免費提供美國 K-12 教師使用",
    summary: "Anthropic 正式推出 Claude for Teachers，免費提供美國 K-12 教師使用，包含教學技能庫及對應全美 50 州課程標準的學術內容，幫助教師規劃課程與教學活動。",
    body: {
      kind: "feature",
      description: "2026-07-14，Anthropic 推出 Claude for Teachers 平台：\n\n**主要功能**\n• 免費提供美國 K-12（幼稚園至 12 年級）教師使用\n• 包含教學技能庫（teaching skills library）\n• 內容對應全美 50 州課程標準（academic standards）\n• 可協助課程規劃、教學活動設計等\n\n**適用對象**\n• 美國境內 K-12 公私立學校教師",
      links: [
        { label: "Anthropic Newsroom", href: "https://www.anthropic.com/news", kind: "doc" },
        { label: "The Hill 報導", href: "https://thehill.com/policy/technology/5968601-claude-for-teachers-launch/", kind: "doc" }
      ]
    }
  },
  {
    id: "hipaa-self-serve-2026-07-14",
    date: "2026-07-14",
    version: "HIPAA Self-Serve",
    category: "new",
    area: "security",
    product: "claude",
    title: "Claude Enterprise 與 API 新增 HIPAA 自主設定功能",
    summary: "Anthropic 推出 Self-Serve HIPAA 設定，符合資格的管理員可直接在 Claude Console 完成 BAA 審閱、實施指南下載及 HIPAA 設定啟用，適用於 Claude Enterprise 與 Claude Platform（API）。",
    body: {
      kind: "feature",
      description: "2026-07-14，Anthropic 在 Claude Enterprise 與 Claude Platform（API）推出 Self-Serve HIPAA 設定：\n\n**功能說明**\n• 符合資格的管理員可在 Claude Console 中自主管理 HIPAA 準備事項\n• 在單一流程內完成：審閱商業夥伴協議（BAA）、下載實施指南、啟用 HIPAA 設定\n• 適用於需遵守醫療資料法規的企業客戶\n\n**適用方案**\n• Claude Enterprise\n• Claude Platform（API）",
      links: [
        { label: "Claude Help Center Release Notes", href: "https://support.claude.com/en/articles/12138966-release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "fable5-cc-limits-extended-july19-2026-07-12",
    date: "2026-07-12",
    version: "Fable 5 / Claude Code 促銷延長",
    category: "enh",
    area: "model",
    product: "claude",
    title: "Fable 5 付費方案包含使用期與 Claude Code 週限額促銷再延長至 7/19",
    summary: "Anthropic 宣布第二次延長 Claude Fable 5 於付費方案的包含使用期（Pro/Max/Team/Enterprise 每週 50% 額度）及 Claude Code 每週使用量上限 50% 促銷活動，新截止日期為 2026 年 7 月 19 日 11:59:59 PM PT。",
    body: {
      kind: "feature",
      description: "2026-07-12，Anthropic 透過 @claudeai 官方 X 帳號宣布再次延長兩項促銷：\n\n**Fable 5 付費方案包含使用期**\n• 原定截止日：7/7 → 延至 7/12 → 再延至 **7/19 11:59:59 PM PT**\n• 適用方案：Pro、Max、Team 及座位型 Enterprise（需由組織啟用）\n• 每週可使用 Fable 5 至多 50% 的方案額度，超出後需購買 Usage Credits 或切換其他模型\n• 可使用平台：Claude 網頁版、行動版、桌面版、Cowork、Code、Design、Microsoft 365、Teams、Tag\n\n**Claude Code 每週使用量上限促銷**\n• 每週使用量上限維持 50% 加碼，同步延長至 7/19\n• 促銷結束後恢復標準每週限額\n\n**背景**\n由於用戶對 Fable 5 反覆延期感到不滿，且競爭對手（OpenAI、xAI 等）同期擴大容量，Anthropic 持續延長促銷以維持競爭力。官方表示待算力資源充足後，Fable 5 將回歸標準付費方案。",
      links: [
        { label: "BleepingComputer 報導", href: "https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-stays-free-for-paid-users-until-july-19-as-anthropic-buys-more-time/", kind: "doc" },
        { label: "Digg 報導", href: "https://digg.com/tech/95ygdcdl", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.207",
    date: "2026-07-11",
    version: "v2.1.207",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.207：自動模式正式開放 Bedrock/Vertex/Foundry、預設切換 Opus 4.8、終端凍結修復與 Shell 注入安全加固",
    summary: "Claude Code v2.1.207 將自動模式（Auto Mode）正式開放至 Bedrock、Vertex AI 及 Foundry 平台（無需 CLAUDE_CODE_ENABLE_AUTO_MODE），預設模型改為 Claude Opus 4.8，修復串流長內容時終端凍結與鍵盤延遲，加固 Plugin Hook 防 Shell 注入，並修復自動更新覆蓋自訂啟動腳本等 30 多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.207（2026-07-11）新功能與修復：\n\n**新功能**\n• **自動模式正式開放**：Bedrock、Vertex AI 及 Foundry 平台不再需要 `CLAUDE_CODE_ENABLE_AUTO_MODE` 環境變數；如需停用可在 settings 設定 `disableAutoMode: true`\n• **預設模型切換**：Bedrock、Vertex 及 Claude Platform on AWS 預設模型改為 Claude Opus 4.8\n• **Remote Control 進度顯示**：Remote Control 工作階段現可在行動裝置與網頁正確顯示背景 Agent / Workflow 進度\n\n**安全性修復**\n• **Shell 注入防護**：Plugin hooks、monitors 及 MCP headersHelper 中 shell-form 命令含 `${user_config.*}` 的設定現在直接拒絕執行\n• Plugin option 值不再從專案層級 `.claude/settings.json` 讀取\n• `/usage-credits` 金額輸入現在拒絕格式錯誤值；超過 $1,000 需手動輸入確認\n• **Auto Mode 設定限制**：Auto Mode 不再讀取 `.claude/settings.local.json`（Repo 內）；應改在 `~/.claude/settings.json` 設定\n\n**Bug 修復**\n• 修復串流長清單、表格、段落或程式碼區塊時終端凍結、鍵盤延遲問題\n• 修復非互動執行的遠端受管設定未顯示安全同意對話框即永久記錄的問題\n• 修復系統更新觸發誤報的提示注入警告\n• 修復自動更新器覆蓋 `~/.local/bin/claude` 自訂啟動腳本\n• 修復回應串流完成後 transcript 頁面跳動\n• 修復 Agent Teams 因格式錯誤的 mailbox 訊息引發崩潰循環\n• 修復 Windows 上 AWS 憑證解析無限期卡死（現強制 60 秒超時）\n• 修復多個 git worktree、Deep Research Agent 標籤及 UI 顯示問題",
      links: [
        { label: "github/claude-code/v2.1.207", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.207", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.206",
    date: "2026-07-10",
    version: "v2.1.206",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.206：/cd 路徑補全、/doctor 偵測 CLAUDE.md、背景 Agent 自動升級與多項修復",
    summary: "Claude Code v2.1.206 新增 /cd 目錄路徑建議、/doctor 偵測已 commit 的 CLAUDE.md、/commit-push-pr 自動允許 git push、EnterWorktree 越界確認、背景 Agent 自動升級；修復登入到期錯誤訊息、--resume/--continue 鍵盤問題、MCP request_timeout_ms 無效及背景 worker EXTRA_BODY 遺失等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.206（2026-07-10）新功能與修復：\n\n**新功能**\n• **`/cd` 路徑建議**：`/cd` 指令新增目錄路徑補全，行為與 `/add-dir` 一致\n• **`/doctor` CLAUDE.md 檢查**：偵測並建議清除已 commit 至版本控制的 `CLAUDE.md` 檔案\n• **`/commit-push-pr` 自動允許 push**：自動允許 git push 至 repo 設定的推送遠端\n• **Gateway 公共端點登入**：`/login` 新增支援 Anthropic 官方公共 gateway 端點\n• **`EnterWorktree` 越界確認**：進入專案 `.claude/worktrees/` 目錄外部的 git worktree 前，系統會要求確認\n• **背景 Agent 自動升級**：Claude Code 更新後，背景 agent 會自動在背景完成版本升級\n\n**Bug 修復**\n• 修復登入到期時顯示誤導性「There's an issue with the selected model」錯誤訊息\n• 修復 `claude --resume` 與 `--continue` 啟動時鍵盤無回應問題\n• 修復 MCP 伺服器忽略個別伺服器 `request_timeout_ms` 設定\n• 修復 `CLAUDE_CODE_EXTRA_BODY` 在背景 worker 中被靜默忽略\n• 修復 OAuth MCP 伺服器在 token 刷新失敗後要求手動重新驗證\n• 多項 UI 與效能改善，包含 `/model` 選擇器準確性及 agents 檢視響應速度",
      links: [
        { label: "github/claude-code/v2.1.206", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.206", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-reflect-monthly-recap-2026-07-09",
    date: "2026-07-09",
    version: "Claude Reflect Beta",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "新增 Reflect 月報功能：回顧 Claude 使用習慣，設定專注與靜音時段",
    summary: "Claude 推出「Reflect」Beta 功能，可於「設定 > Reflect」查看每月使用摘要（常討論主題、最活躍日期、工作習慣分析），並透過「設定 > Time and focus」設定休息提醒與靜音時段，適用 Free、Pro、Max 方案（需開啟記憶功能）。",
    body: {
      kind: "feature",
      description: "2026-07-09，Claude 在網頁版與桌面版推出「Reflect」Beta 功能：\n\n**月報功能（Settings > Reflect）**\n• 查看過去一個月與 Claude 討論的主題分布\n• 顯示最活躍日期與高峰使用時段\n• 提供工作習慣觀察與洞察分析\n\n**專注設定（Settings > Time and focus）**\n• 設定可選的休息提醒\n• 設定靜音時段（Quiet hours）\n\n**適用對象**\n• Free、Pro、Max 方案用戶（Beta）\n• 需在設定中啟用記憶（Memory）功能",
      links: [
        { label: "Claude Help Center Release Notes", href: "https://support.claude.com/en/articles/12138966-release-notes", kind: "doc" },
        { label: "Anthropic Newsroom", href: "https://www.anthropic.com/news", kind: "doc" },
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/07/09/anthropics-new-claude-feature-is-quietly-selling-you-on-ai/", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-inviting-hard-questions-2026-07-09",
    date: "2026-07-09",
    version: "Anthropic 公開徵詢計畫",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 公開徵詢 AI 難題，承諾透明回應",
    summary: "Anthropic 發起「邀請難題」計畫，向大眾公開徵求對 AI 最具挑戰性問題的意見，並承諾公開回應，展現其對 AI 安全與透明度的承諾。",
    body: {
      kind: "feature",
      description: "2026-07-09，Anthropic 宣布「邀請難題」（Inviting hard questions）計畫：\n\n• 向社會大眾徵求對 AI 發展中最困難、最有爭議問題的意見\n• 承諾公開透明地回應各項提問\n• 展現 Anthropic 對 AI 安全、倫理與負責任發展的持續承諾",
      links: [
        { label: "Anthropic Newsroom", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "ben-bernanke-ltbt-2026-07-09",
    date: "2026-07-09",
    version: "Anthropic 治理更新",
    category: "new",
    area: "security",
    product: "claude",
    title: "前聯準會主席柏南奇加入 Anthropic 長期利益信託",
    summary: "Anthropic 宣布前美聯準會主席本·柏南奇（Ben Bernanke）加入長期利益信託（Long-Term Benefit Trust），強化公司治理架構。",
    body: {
      kind: "feature",
      description: "2026-07-09，Anthropic 宣布前美國聯準會主席本·柏南奇（Ben Bernanke）正式加入長期利益信託（Long-Term Benefit Trust，LTBT）。\n\nLTBT 是 Anthropic 企業治理結構的核心組成，負責監督公司在實現 AI 安全使命方面的進展，確保長期公共利益優先於短期商業利益。",
      links: [
        { label: "Anthropic Newsroom", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-for-government-beta-2026-07-08",
    date: "2026-07-08",
    version: "Claude for Government Beta",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "Claude for Government 桌面版公測：Claude Code 與 Cowork 進駐政府雲端",
    summary: "Anthropic 在 FedRAMP High 授權的 Claude for Government 桌面版中推出 Claude Code 與 Cowork 公測，新增桌面檔案作業、強化管理員控制、防竄改稽核日誌及費用治理功能，供公部門團隊使用。",
    body: {
      kind: "feature",
      description: "2026-07-08 起，Claude for Government 桌面版開放 Claude Code 與 Claude Cowork 公測存取：\n\n**主要功能**\n• FedRAMP High 授權 AI 環境，符合公部門合規要求\n• 桌面檔案型工作整合（Desktop file-based work）\n• 強化管理員控制與用量可視性\n• 防竄改稽核日誌（Tamper-evident audit logs）\n• 費用治理與機構層級費用管控\n\n**適用對象**\n• 美國聯邦、州及地方政府機構\n• 需符合 FedRAMP High 合規要求的公部門團隊",
      links: [
        { label: "Anthropic Newsroom", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.205",
    date: "2026-07-08",
    version: "v2.1.205",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.205：自動模式防竄改保護、串流更新節省 400MB 記憶體、/doctor 完整診斷工具與多項關鍵修復",
    summary: "Claude Code v2.1.205 新增自動模式防止竄改工作階段記錄的規則、自動更新改為串流下載減少約 400MB 峰值記憶體、`/doctor` 升級為完整設定診斷工具，並修復 Windows NTFS junction 刪除越界、背景 Agent 狀態錯誤、`--json-schema` 產生非結構化輸出等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.205（2026-07-08）新功能與修復：\n\n**新功能**\n• **自動模式防竄改保護**：新增規則阻止自動模式竄改工作階段記錄檔\n• **自動更新串流下載**：更新下載改為串流寫入磁碟，減少峰值記憶體約 400 MB\n• **`/doctor` 完整診斷**：`/doctor` 升級為完整設定健康檢查；`/checkup` 成為其別名\n• **自動模式 rm -rf 安全改善**：在變數無法解析時，執行 `rm -rf` 前會先詢問確認\n\n**Bug 修復**\n• 修復 `--json-schema` 傳入無效 schema 時靜默產生非結構化輸出\n• 修復在 `--max-turns` 限制時結束回合導致訊息遺失\n• 修復 Windows NTFS junction 模式下移除 worktree 刪除 worktree 外部檔案\n• 修復背景 Agent 以 SendMessage 恢復後仍顯示為「failed」/「completed」\n• 修復背景工作在無可讀文字的回合後由「needs input」翻轉回「working」\n• 修復 `claude attach` 在背景 Agent 升級重啟中途時回報錯誤\n• 修復 Bash 呼叫輸出超過 30K 行內限制時工作階段未連結至 PR\n• 修復 `claude mcp add-from-claude-desktop` 在伺服器名稱含不支援字元時卡住（改為回報無效名稱並繼續匯入其餘伺服器）\n• 修復 Plugin LSP 伺服器失敗導致其他有效伺服器無法啟動\n• 修復 Windows 在啟動目錄被刪除/鎖定/卸載時崩潰\n• 修復目錄掃描期間檔案監看器關閉導致崩潰",
      links: [
        { label: "github/claude-code/v2.1.205", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.205", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.204",
    date: "2026-07-08",
    version: "v2.1.204",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.204：修復 SessionStart Hook 在無頭工作階段中事件無法串流問題",
    summary: "Claude Code v2.1.204 修復 SessionStart hooks 在無頭（headless）工作階段中 hook 事件無法串流的問題，防止遠端工作階段因被誤判為閒置而遭回收。",
    body: {
      kind: "bug",
      problem: "SessionStart hooks 在無頭工作階段中，hook 事件無法正確串流，可能導致遠端工作階段被閒置回收機制誤判為閒置而回收",
      rootCause: "無頭工作階段的 hook 事件串流機制未正確處理",
      fix: "修正無頭工作階段中 hook 事件的串流邏輯",
      description: "v2.1.204（2026-07-08）單一 Bug 修復：\n• 修復 hook 事件在 SessionStart hooks 的無頭工作階段中無法串流的問題，避免遠端工作階段被閒置回收機制誤判回收",
      links: [
        { label: "github/claude-code/v2.1.204", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.204", kind: "gh" }
      ]
    }
  },
  {
    id: "cowork-mobile-web-2026-07-07",
    date: "2026-07-07",
    version: "Claude Cowork 行動/網頁版",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "Claude Cowork 擴展至網頁與行動裝置",
    summary: "Claude Cowork 從桌面限定擴展為跨裝置平台，現可於網頁與 iOS 上使用；任務可在筆電開始、背景持續執行，並透過手機查看進度；正逐步向 Max 方案用戶推出。",
    body: {
      kind: "feature",
      description: "2026-07-07 起，Claude Cowork 開始在網頁與行動裝置（iOS）上提供測試存取：\n\n**主要功能**\n• 跨裝置工作流程：在筆電啟動任務，關閉應用程式後仍可在背景持續執行，並透過手機審閱結果\n• 遠端工作階段管理（Beta）\n• 跨裝置同步\n• 統一的專案儲存，整合聊天與任務功能\n\n**推出計畫**\n• 逐步向 Max 方案用戶推出，隨後擴展至更多方案\n\n**使用統計**\nAnthropic 公布 120 萬筆匿名 Cowork 工作階段分析：軟體開發僅佔 8.7%，最大類別為「商業流程操作」（33.4%），顯示 Cowork 已廣泛應用於非工程知識工作者。",
      links: [
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/", kind: "doc" },
        { label: "Claude Help Center Release Notes", href: "https://support.claude.com/en/articles/12138966-release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "microsoft365-write-tools-2026-07-07",
    date: "2026-07-07",
    version: "Microsoft 365 寫入工具",
    category: "enh",
    area: "mcp",
    product: "claude",
    title: "Microsoft 365 Connector 新增寫入功能：可發送郵件、管理行事曆、更新 OneDrive/SharePoint 檔案",
    summary: "Claude 的 Microsoft 365 connector 新增寫入工具，支援草擬與發送郵件、管理行事曆事件、更新信箱設定，以及在 OneDrive 與 SharePoint 中建立與更新檔案；Teams 存取仍維持唯讀。",
    body: {
      kind: "feature",
      description: "2026-07-07，Claude Microsoft 365 Connector 擴充寫入能力：\n\n**新增寫入工具**\n• 草擬、發送及整理電子郵件\n• 管理行事曆事件\n• 更新信箱設定\n• 在 OneDrive 與 SharePoint 中建立與更新檔案\n\n**保持不變**\n• 讀取與搜尋功能仍可使用\n• Microsoft Teams 存取維持唯讀\n\n**部署注意事項**\n• Microsoft Entra 管理員須在組織範圍啟用前核准權限變更",
      links: [
        { label: "Claude Help Center Release Notes", href: "https://support.claude.com/en/articles/12138966-release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.203",
    date: "2026-07-07",
    version: "v2.1.203",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.203：登入到期警告、MCP 工作目錄改善、效能大幅提升與多項穩定性修復",
    summary: "Claude Code v2.1.203 新增登入即將到期警告、手動模式 ⏸ 徽章、MCP roots/list 工作目錄整合；修復背景工作階段永久無回應、Subagent 靜默停止、記憶體/CPU 效能衰退等問題；二進位檔案與啟動記憶體各減少約 7 MB。",
    body: {
      kind: "feature",
      description: "v2.1.203（2026-07-07）新功能與修復：\n\n**新功能**\n• **登入到期警告**：工作階段登入即將到期時主動提示重新驗證\n• **手動模式徽章**：頁尾新增灰色 ⏸ 徽章，清楚標示目前處於手動權限模式\n• **MCP roots/list 改善**：將工作階段的額外工作目錄加入 MCP roots/list 清單\n• **VSCode 設定新選項**：新增「Enable Remote Control for all sessions」切換開關\n\n**效能改善**\n• 減少二進位檔案大小約 7 MB\n• 降低啟動記憶體約 7 MB\n• 改善長回應串流時的回應速度\n• 改善 Subagent 行為（減少不必要的再次委派）\n\n**Bug 修復**\n• 修復背景工作階段永久無回應（現自動啟用復原機制）\n• 修復 `claude agents` 返回時靜默停止執行中 Subagent 的問題\n• 修復互動式工作階段的記憶體/CPU 效能衰退（context-usage 重新分析）\n• 修復多項 PATH、worktree 及 daemon 移交問題",
      links: [
        { label: "github/claude-code/v2.1.203", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.203", kind: "gh" }
      ]
    }
  },
  {
    id: "fable5-subscription-removal-2026-07-07",
    date: "2026-07-07",
    version: "Fable 5 訂閱異動",
    category: "brk",
    area: "model",
    product: "claude",
    title: "Claude Fable 5 自 7/7 起從訂閱方案移除，改透過用量點數存取",
    summary: "Anthropic 因容量壓力，自 2026-07-07 起將 Claude Fable 5 從 Pro、Max、Team 及 Enterprise 訂閱方案中移除；用戶仍可透過用量點數（Usage Credits）付費使用，Anthropic 表示待容量充足後將恢復訂閱存取。",
    body: {
      kind: "breaking",
      description: "2026-07-07 起，Claude Fable 5 不再包含於 Pro、Max、Team 及 Enterprise 訂閱方案中，原本訂閱方案每週可使用 Fable 5 至多 50% 用量限制的權益隨之取消。\n\n**影響範圍**\n• Pro、Max、Team、Enterprise 訂閱用戶無法透過訂閱使用 Fable 5\n• 用戶可改透過用量點數（Usage Credits）付費存取 Fable 5\n\n**Anthropic 說明**\n此次調整為臨時性措施，原因為 Fable 5 需求量大造成容量壓力。Claude Code 工程師明確表示，Anthropic 不打算將 Fable 5 永久改為付費加購項目，目標是在容量充足後盡快恢復訂閱存取。",
      migration: {
        title: "因應方式",
        text: "如需繼續使用 Fable 5，可透過用量點數付費存取；或改用 Claude Sonnet 5（目前為 Free／Pro 預設模型，效能接近 Opus 4.8）作為替代方案。"
      },
      links: [
        { label: "BleepingComputer 報導", href: "https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-isnt-permanently-leaving-subscriptions-anthropic-says/", kind: "doc" },
        { label: "Anthropic Redeploying Fable 5", href: "https://www.anthropic.com/news/redeploying-fable-5", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.202",
    date: "2026-07-06",
    version: "v2.1.202",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.202：動態工作流程大小設定、OpenTelemetry 工作流程屬性、多項 Bug 修復",
    summary: "Claude Code v2.1.202 新增 /config 中的「動態工作流程大小」設定，可調整工作流程 Agent 數量規模；新增 OpenTelemetry workflow.run_id 與 workflow.name 屬性；並修復 Ctrl+R 搜尋崩潰、/rename 被重啟撤銷、Remote Control 指令失效等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.202（2026-07-06）新功能與 Bug 修復：\n\n**新功能**\n• **動態工作流程大小設定**：在 `/config` 新增「Dynamic workflow size」設定，可控制工作流程 Agent 數量規模（small/medium/large），為建議指引而非強制上限\n• **OpenTelemetry 改善**：工作流程產生的 Agent 所發送的遙測資料新增 `workflow.run_id` 與 `workflow.name` 屬性，方便從 OTel 資料重建工作流程活動\n\n**Bug 修復**\n• 修復 Ctrl+R 行內歷史搜尋在搜尋尚未完成時接受或取消導致的崩潰\n• 修復背景工作階段的 /rename 在重啟後被還原的問題\n• 修復 mTLS 憑證輪換期間的短暫握手失敗\n• 修復 Remote Control 指令失效（Unknown command）\n• 修復 Remote Control 傳送無標題圖片/檔案被靜默捨棄的問題\n• 修復 `claude auth login` 的登入 URL 在 SSH 環境下不易點擊的問題\n• 修復從 `claude agents` 開啟對話時偶發「currently running as a background agent」崩潰\n• 修復工作流程腳本中 Unicode 引號跳脫符號被損毀的問題\n• 修復語音輸入麥克風失敗時無限重試的問題\n• 修復 `/remote-control` 工作階段在行動/網頁應用顯示錯誤權限模式\n• 修復依名稱恢復工作階段在有大量 git worktree 時耗時數分鐘並佔用大量記憶體\n• 修復安裝/更新程式下載在連線中斷時失敗（短暫中斷現在會重試）\n• 修復重複載入已存在技能時附加重複指令的問題\n• 改善 `/workflows` Agent 清單版面（更寬的標題欄、獨立時間欄、較短的模型名稱）\n• 改善 MCP 錯誤訊息（遺失 `type` 欄位時提供更清楚的說明）\n• `/review <pr>` 改回單次快速審查；多 Agent 審查請改用 `/code-review <level> <pr#>`",
      links: [
        { label: "code.claude.com changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.201",
    date: "2026-07-03",
    version: "v2.1.201",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.201：修復 Sonnet 5 工作階段中途插入系統角色提醒問題",
    summary: "Claude Code v2.1.201 修復 Claude Sonnet 5 工作階段於對話中途透過系統角色插入 harness 提醒的問題。",
    body: {
      kind: "bug",
      problem: "Claude Sonnet 5 工作階段會在對話中途透過系統角色插入 harness 提醒訊息，造成非預期的對話行為",
      rootCause: "Sonnet 5 的 harness 提醒機制未正確調整，仍沿用舊有的中途插入系統角色方式",
      fix: "移除 Sonnet 5 工作階段的中途系統角色提醒機制",
      description: "v2.1.201（2026-07-03）單一 Bug 修復：\n• 修復 Claude Sonnet 5 工作階段於對話中途透過系統角色插入 harness 提醒的問題，確保對話流程不受非預期系統訊息干擾",
      links: [
        { label: "github/claude-code/v2.1.201", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.201", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.200",
    date: "2026-07-03",
    version: "v2.1.200",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.200：AskUserQuestion 不再自動繼續、權限模式改為 Manual、多項 Bug 修復",
    summary: "Claude Code v2.1.200 調整 AskUserQuestion 預設不再自動繼續（可透過 /config 啟用閒置逾時）、將「default」權限模式更名為「Manual」，並修復啟動崩潰、背景工作階段休眠停止、Subagent 速率限制等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.200（2026-07-03）重要行為變更與 Bug 修復：\n\n**行為變更**\n• **AskUserQuestion 不再自動繼續**：對話框預設等待使用者回應；可透過 `/config` 啟用閒置逾時自動繼續\n• **權限模式改名**：CLI、`--help`、VS Code、JetBrains 中「default」權限模式統一改為「Manual」\n\n**主要 Bug 修復**\n• 修復 `.claude.json` 中 `disabledMcpServers` 或 `enabledMcpServers` 設為非陣列值時的啟動崩潰\n• 修復背景工作階段在系統休眠/喚醒後或重新開啟停滯工作階段時靜默停止\n• 修復背景工作階段將被 Esc 取消的 turn 在停滯重啟後重新執行的問題\n• 修復背景 Agent Daemon 移交及 Roster 損壞問題\n• 修復受速率限制的 Subagent 回傳空結果而非適當失敗\n• 修復背景 Agent 輸出中的控制字元流入終端機\n• 改善螢幕閱讀器輸出與安裝腳本說明\n• 改善 tmux 3.4+ 的終端機渲染（啟用同步輸出）",
      links: [
        { label: "github/claude-code/v2.1.200", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.200", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.199",
    date: "2026-07-02",
    version: "v2.1.199",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.199：堆疊 Slash Skill、串流保留、Agent 面板 UI 修復",
    summary: "Claude Code v2.1.199 新增堆疊 Slash Skill 呼叫（最多 5 個）、SSL 憑證錯誤即時回饋、串流中途錯誤保留部分回應，並修復 Linux 背景 Daemon、SSH macOS 冷啟動、Agent 面板 UI 及 Model Picker 等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.199（2026-07-02）帶來新功能與多項 Bug 修復：\n\n**新功能**\n• **堆疊 Slash Skill 呼叫**：`/skill-a /skill-b do XYZ` 現可同時載入最多 5 個技能，而非只執行第一個\n• **SSL 憑證錯誤改善**：TLS 攔截 Proxy 與過期憑證現在立即失敗並提供可行指引，而非耗盡重試次數\n• **串流回應保留**：API 於串流中途回傳 overloaded/server 錯誤時，保留已接收的部分回應\n\n**Subagent 改善**\n• 受速率限制的 Subagent 現回傳部分結果給父 Agent\n• API 錯誤現正確回報，不再靜默失敗\n\n**主要 Bug 修復**\n• 修復 Linux 背景 Agent Daemon 不正常關閉後重啟時自殺問題\n• 修復 SSH macOS 冷啟動「Could not switch to audit session」錯誤\n• 修復 `claude stop` 指令被重啟撤銷的問題\n• 修復 Agent 面板閒置 Subagent 未摺疊成可展開摘要列的問題\n• 修復 Agent 面板其他 Agent 仍在執行時某些 Agent 消失的問題\n• 修復 Model Picker 錯誤影響主 Agent 而非 Subagent 的問題\n• `claude agents` PR 連結改為 `#N` 格式（原為「PR」標籤）\n• 設定檔重置前自動備份",
      links: [
        { label: "github/claude-code/v2.1.199", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.199", kind: "gh" }
      ]
    }
  },
  {
    id: "enterprise-model-access-controls-2026-07-01",
    date: "2026-07-01",
    version: "Enterprise Model Controls",
    category: "new",
    area: "platform",
    product: "claude",
    title: "Enterprise 管理員可控制用戶可存取的模型及推理強度設定",
    summary: "Claude Enterprise 管理員新增模型存取控管功能，可設定旗下用戶能使用的 Claude 模型清單及可調整的推理強度（effort level）範圍，強化組織內 Claude 部署的精細管控。",
    body: {
      kind: "feature",
      description: "2026 年 7 月 1 日，Claude.ai Enterprise 更新管理員控制面板：\n\n**新功能**\n• 管理員可限制用戶可見／可用的 Claude 模型清單\n• 管理員可設定用戶能調整的推理強度（effort level）上下限\n• 提供更精細的組織 AI 治理能力，協助企業符合合規需求",
      links: [
        { label: "Claude Help Center Release Notes", href: "https://support.claude.com/en/articles/12138966-release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.198",
    date: "2026-07-01",
    version: "v2.1.198",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.198：Claude in Chrome GA、Background Agent 通知 Hook、/dataviz 技能",
    summary: "Claude Code v2.1.198 正式推出 Claude in Chrome GA、Background Agent 通知 Hook（agent_needs_input / agent_completed）、新增 /dataviz 技能、Background Agent 自動 commit/push/開 Draft PR，並修復大量 Bug。",
    body: {
      kind: "feature",
      description: "v2.1.198（2026-07-01）帶來多項重要新功能與大量 Bug 修復：\n\n**新功能**\n• **Claude in Chrome 正式 GA**：Chrome 瀏覽器全面支援\n• **Background Agent 通知 Hook**：Agent 需要輸入或完成時觸發 `Notification` Hook（`agent_needs_input` / `agent_completed`）\n• **`/dataviz` 技能新增**：圖表與儀表板設計指引，內含可執行色彩調色盤驗證器\n• **Gateway 改善**：新增 Claude Platform on AWS（anthropicAws）為上游 Provider；model-not-found 回應自動推進 failover chain\n\n**工作流程改善**\n• Background Agent（從 `claude agents` 啟動）完成代碼工作後，自動 commit、push 並開 Draft PR（不再停下詢問）\n• Explore Agent 現繼承主 Session 模型（上限 opus），不再固定使用 haiku\n• Subagent 與上下文壓縮現繼承 Session 的 Extended Thinking 設定\n\n**主要 Bug 修復**\n• 修復短暫網路中斷（ECONNRESET 等）中斷回應的問題，改為退避重試\n• 修復背景 Session 在 Web / Desktop / VS Code 任務面板卡在「Running」的問題\n• 修復 Agent Teams 成員因 API 錯誤死亡未回報「failed」給 Lead 的問題\n• 修復 macOS Background Session 每 52 秒顯示「Reconnecting…」的問題\n• 修復 Markdown 表格在全螢幕模式溢出的問題",
      links: [
        { label: "github/claude-code/v2.1.198", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.198", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "fable5-global-redeploy-2026-07-01",
    date: "2026-07-01",
    version: "Fable 5 全球復歸",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Fable 5 & Mythos 5 全球恢復存取，出口管制正式解除",
    summary: "美國商務部於 6/30 解除對 Claude Fable 5 和 Mythos 5 的出口管制，自 7/1 起全球用戶可在 Claude.ai、Claude Code、Claude Cowork 及 Claude Platform 恢復存取，Anthropic 並開發新安全分類器以 99%+ 準確率攔截相關越獄手法。",
    body: {
      kind: "feature",
      description: "2026 年 7 月 1 日，Claude Fable 5 和 Mythos 5 全球恢復存取：\n\n**事件時間線**\n• 2026/6/12：Amazon 研究人員發現越獄手法，美國政府以國家安全為由下達出口管制指令，要求暫停所有外籍人士存取\n• 2026/6/26~27：部分解除管制，逾 100 家美國機構重新獲授權存取 Mythos 5\n• 2026/6/30：美國商務部通知 Anthropic，完全解除出口管制\n• 2026/7/1：Fable 5 全球全面恢復存取\n\n**存取方式**\n• 全平台開放：Claude.ai、Claude Code、Claude Cowork、Claude Platform\n• Pro / Max / Team 及部分 Enterprise 方案：7/7 前享最多 50% 週用量配額（免額外費用）；7/7 後需使用 Usage Credits\n• AWS Bedrock、Google Cloud、Microsoft Foundry：待後續公告\n\n**安全改善**\n• 新建安全分類器，針對觸發出口管制的越獄手法，攔截率超過 99%\n• 聯合 Amazon、Microsoft、Google 建立業界越獄嚴重程度評估框架（jailbreak severity framework）\n• 承諾擴大與美國政府 AI 安全測試與評估合作",
      links: [
        { label: "Anthropic 官方聲明", href: "https://www.anthropic.com/news/redeploying-fable-5", kind: "doc" },
        { label: "Claude Platform Release Notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" },
        { label: "Forbes 報導", href: "https://www.forbes.com/sites/siladityaray/2026/07/01/trump-administration-lifts-export-controls-on-anthropics-mythos-5-and-fable-5-ai-models/", kind: "doc" }
      ]
    }
  },
  {
    id: "sonnet-5-github-copilot-2026-06-30",
    date: "2026-06-30",
    version: "GitHub Copilot GA",
    category: "new",
    area: "platform",
    product: "claude",
    title: "Claude Sonnet 5 正式登陸 GitHub Copilot（GA）",
    summary: "Claude Sonnet 5 於 2026 年 6 月 30 日起正式在 GitHub Copilot 全面開放（GA），開發者可直接透過 Copilot 存取 Sonnet 5 的代理能力。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 30 日，Claude Sonnet 5 在 GitHub Copilot 中正式上線（GA），開發者無需額外設定即可在 Copilot 環境中使用 Sonnet 5 的先進代理能力，包括代碼生成、推理與工具呼叫。",
      links: [
        { label: "GitHub Changelog", href: "https://github.blog/changelog/2026-06-30-claude-sonnet-5-is-generally-available-for-github-copilot/", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-science-2026-06-30",
    date: "2026-06-30",
    version: "Claude Science",
    category: "new",
    area: "product",
    product: "claude",
    title: "Claude Science 正式開放：科學家專屬 AI 研究工作台",
    summary: "Anthropic 推出 Claude Science，為科學研究設計的可客製化 AI 應用程式，整合研究人員常用工具與套件，生成可稽核成果，優先聚焦被忽視的疾病（neglected diseases）藥物探索。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 30 日，Anthropic 正式發布 Claude Science，一個針對科學研究場景量身打造的 AI 工作台：\n\n**核心功能**\n• 整合研究人員最常使用的工具與套件\n• 生成可稽核（auditable）的研究成果\n• 彈性存取運算資源\n• 可客製化設定以符合不同研究需求\n\n**研究重心**\n• Anthropic 生命科學負責人 Eric Kauderer-Abrams 表示，將優先聚焦傳統藥廠缺乏商業誘因的「被忽視疾病」\n• 與頂尖研究機構及生命科學高層合作\n\n**活動**\n• 配合「The Briefing: AI for Science」活動（2026/6/30，舊金山）同步發布",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news", kind: "doc" },
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/06/30/anthropic-launches-ai-drug-discovery-program-claude-science.html", kind: "doc" }
      ]
    }
  },
  {
    id: "managed-agents-event-deltas-2026-06-30",
    date: "2026-06-30",
    version: "Managed Agents Event Delta",
    category: "enh",
    area: "api",
    product: "claude",
    title: "Claude Managed Agents 新增 Event Delta 串流支援",
    summary: "Claude Managed Agents Session 事件流新增 event delta 功能，透過 event_deltas[] 查詢參數啟用，可即時透過 event_start 與 event_delta 事件預覽代理訊息文字，無需等待完整 agent.message 事件。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 30 日，Claude Managed Agents 平台更新：Session 事件流現支援 event delta 功能。\n\n**使用方式**\n• 在 `GET /v1/sessions/{session_id}/events/stream` 加入 `event_deltas[]` 查詢參數啟用\n• 新增 `event_start` 與 `event_delta` 事件，可即時預覽代理訊息文字\n• 完整的 `agent.message` 事件仍照常傳送\n\n**效益**\n• 可更早呈現代理回應內容，改善使用者體驗\n• 適用於需要串流輸出的應用場景",
      links: [
        { label: "Claude 平台 Release Notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.197",
    date: "2026-06-30",
    version: "v2.1.197",
    category: "enh",
    area: "model",
    product: "claude-code",
    title: "v2.1.197：Claude Sonnet 5 成為 Claude Code 預設模型",
    summary: "Claude Code v2.1.197 改用 Claude Sonnet 5 為預設模型，提供原生 1M Token 上下文視窗，限時優惠定價 $2/$10 per MTok（至 8/31/2026）。",
    body: {
      kind: "feature",
      description: "v2.1.197（2026-06-30）將 Claude Sonnet 5 設為 Claude Code 的預設模型：\n\n**重點更新**\n• **新預設模型**：Claude Sonnet 5（`claude-sonnet-5`）取代 Sonnet 4.6\n• **原生 1M Token 上下文視窗**：大幅提升長對話與大型程式碼庫的處理能力\n• **限時優惠定價**：$2/$10 per MTok（至 2026 年 8 月 31 日），之後恢復標準定價 $3/$15\n\n請執行 `npm install -g @anthropic-ai/claude-code` 升級至 v2.1.197。",
      links: [
        { label: "github/claude-code/v2.1.197", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.197", kind: "gh" },
        { label: "Claude Sonnet 5 發布公告", href: "https://www.anthropic.com/news/claude-sonnet-5", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-sonnet-5-2026-06-30",
    date: "2026-06-30",
    version: "Claude Sonnet 5",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Sonnet 5 正式發布：最強代理能力 Sonnet，接近 Opus 4.8 效能",
    summary: "Anthropic 正式推出 Claude Sonnet 5，為迄今最強代理能力 Sonnet 模型，接近 Opus 4.8 效能，支援原生 1M Token 上下文視窗，自適應思考預設開啟，入門定價 $2/$10 per MTok（至 8/31），現為 Free 與 Pro 方案預設模型。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 30 日，Anthropic 正式推出 Claude Sonnet 5（`claude-sonnet-5`），本世代最強代理 Sonnet 模型：\n\n**核心能力**\n• 代理能力大幅提升：可制定計劃、使用瀏覽器與終端機等工具，並自主執行任務\n• 效能接近 Opus 4.8，在推理、工具呼叫、程式碼、知識工作均大幅超越 Sonnet 4.6\n• 原生 1M Token 上下文視窗，128k 最大輸出 Token\n\n**重要行為變更（遷移注意事項）**\n• 自適應思考（Adaptive Thinking）預設開啟\n• 手動擴展思考（`thinking: {type: \"enabled\", budget_tokens: N}`）已移除，呼叫回傳 400 錯誤\n• 設定非預設取樣參數（`temperature`、`top_p`、`top_k`）回傳 400 錯誤\n• 新分詞器：相同文字產出約多 30% Token\n• 不支援 Priority Tier\n\n**定價**\n• 入門定價：$2 / $10 per MTok（至 2026 年 8 月 31 日）\n• 標準定價：$3 / $15 per MTok（9 月 1 日起）\n\n**開放範圍**\n• Free 與 Pro 方案預設模型；Max、Team、Enterprise 可用\n• 同步登陸：Claude API、AWS Bedrock、Google Vertex、Microsoft Foundry、GitHub Copilot、VS Code、Cursor、OpenRouter",
      links: [
        { label: "Anthropic 官方發布公告", href: "https://www.anthropic.com/news/claude-sonnet-5", kind: "doc" },
        { label: "Claude 平台 Release Notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" },
        { label: "What's new in Claude Sonnet 5", href: "https://platform.claude.com/docs/en/about-claude/models/whats-new-sonnet-5", kind: "doc" }
      ]
    }
  },
  {
    id: "microsoft-foundry-ga-2026-06-29",
    date: "2026-06-29",
    version: "Microsoft Foundry GA",
    category: "new",
    area: "platform",
    product: "claude",
    title: "Claude 正式進駐 Microsoft Foundry（Azure）：Opus 4.8 與 Haiku 4.5 企業版開放",
    summary: "Claude Opus 4.8 與 Claude Haiku 4.5 正式在 Microsoft Foundry（Azure）上線，企業可透過現有 Azure 身份驗證與帳單系統存取 Claude，並可選用美國資料區以符合資料落地規範，運行於 NVIDIA GB300 Blackwell Ultra GPU。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 29 日，Anthropic 宣布 Claude 模型在 Microsoft Foundry（Azure）正式開放：\n\n**可用模型**\n• Claude Opus 4.8（透過 Messages API）\n• Claude Haiku 4.5（透過 Messages API）\n• 支援 Prompt Caching 與 Extended Thinking 功能\n\n**基礎架構**\n• 運行於 NVIDIA GB300 Blackwell Ultra GPU\n• Azure 原生整合：使用現有身份驗證、帳單與治理控制\n• 選用「US Data Zone」可讓推論在美國境內處理，符合資料落地規範\n\n**企業優勢**\n• 符合資格的 Microsoft Enterprise Agreement 客戶可將 Claude 用量計入 Azure 承諾\n• Azure 現成為同時提供 Claude 與 GPT 頂級模型的唯一雲端平台\n• Anthropic 負責推論運算，企業保有治理控制權",
      links: [
        { label: "Anthropic 官方公告", href: "https://claude.com/blog/claude-in-microsoft-foundry", kind: "doc" },
        { label: "Microsoft Azure Blog", href: "https://azure.microsoft.com/en-us/blog/introducing-anthropics-claude-models-in-microsoft-foundry-bringing-frontier-intelligence-to-azure/", kind: "doc" },
        { label: "Claude in Microsoft Foundry 文件", href: "https://platform.claude.com/docs/en/build-with-claude/claude-in-microsoft-foundry", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.196",
    date: "2026-06-29",
    version: "v2.1.196",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.196：組織預設模型、易讀 Session 名稱、檔案附件點擊、MCP 安全強化、Stream Watchdog 預設啟用",
    summary: "管理員可在組織控制台設定預設模型；Session 名稱更易識別；檔案附件支援 Cmd/Ctrl-click 開啟；MCP 安全強化（自核准 Repo 不再自動生成 MCP 伺服器）；/code-review Token 用量降低約 25%；Stream Watchdog 預設啟用（5 分鐘無活動自動中止重試）。",
    body: {
      kind: "feature",
      description: "v2.1.196（2026-06-29）為 Claude Code 帶來組織管理強化、安全性改善與多項 Bug 修復：\n\n**新功能**\n• **組織預設模型**：管理員可在組織控制台設定預設模型，`/model` 中顯示為「Org default」或「Role default」\n• **易讀 Session 名稱**：Background Session 改用更易識別的名稱，方便辨識與發送訊息\n• **可點擊檔案附件**：Cmd/Ctrl-click 附件可直接在 Finder/Explorer 中顯示對應檔案\n\n**安全性強化**\n• 自核准（Self-approved）Repo 不再自動生成 MCP 伺服器\n• 未受信任工作區顯示「⏸ Pending approval」提示\n\n**效能改善**\n• `/code-review` 工作流程 Token 用量降低約 25%\n• **Stream Watchdog 預設啟用**：5 分鐘無活動後自動中止並重試請求（可設定 `streamWatchdogTimeout` 調整或 `CLAUDE_CODE_DISABLE_STREAM_WATCHDOG=1` 停用）\n• 改善長時間執行指令的背景 Session 可靠性\n\n**Bug 修復**\n• 修復背景工作對話遭刪除的問題\n• 修復速率限制警告閃爍及過度計數的問題",
      links: [
        { label: "github/claude-code/v2.1.196", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.196", kind: "gh" }
      ]
    }
  },
  {
    id: "mythos5-us-redeployment-2026-06-27",
    date: "2026-06-27",
    version: "Mythos 5 重新開放",
    category: "new",
    area: "model",
    product: "claude",
    title: "美國政府授權 Anthropic 向逾百家機構重新開放 Claude Mythos 5",
    summary: "美國商務部長 Howard Lutnick 致函授權 Anthropic，允許向逾 100 家美國企業與政府機構重新開放 Claude Mythos 5 存取，解除 6 月 12 日以來的出口管制限制，透過 Project Glasswing 部署。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 26-27 日，美國政府通知 Anthropic，部分解除 Claude Mythos 5 的出口管制限制：\n\n**重新開放授權**\n• 美國商務部長 Howard Lutnick 致函 Anthropic，確認「已有適當防護措施」，允許特定受信任合作夥伴存取 Claude Mythos 5\n• 授權範圍：逾 100 家美國企業及政府機構\n• 部署方式：透過 Project Glasswing 作為 Claude Mythos Preview 的升級版\n\n**背景**\n• 2026 年 6 月 12 日：美國政府以國家安全為由下達出口管制指令，要求 Anthropic 暫停 Fable 5 和 Mythos 5 對外籍人士的存取\n• 2026 年 6 月 26-27 日：美國政府部分解除管制，允許 Mythos 5 重新向受信任的美國機構開放\n• 此前 Amazon CEO Andy Jassy 通報 Treasury Secretary Scott Bessent 一個疑似越獄漏洞，引發政府對中國存取 Claude Mythos 的疑慮\n\n**模型特性**\n• Claude Mythos 5 具備全球最強的網路安全能力\n• Mythos 5 與 Fable 5 底層模型相同，但在特定領域移除了部分防護限制（針對受信任的合作夥伴）",
      links: [
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/06/26/us-government-anthropic-claude-mythos5-ai.html", kind: "doc" },
        { label: "9to5Mac 報導", href: "https://9to5mac.com/2026/06/26/anthropic-cleared-to-release-claude-mythos-5-to-over-100-us-institutions/", kind: "doc" },
        { label: "Semafor 獨家報導", href: "https://www.semafor.com/article/06/27/2026/us-releases-powerful-anthropic-model-mythos-to-some-us-companies", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.195",
    date: "2026-06-26",
    version: "v2.1.195",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.195：鉤子匹配修正、語音聽寫多項修復、背景代理穩定性改善",
    summary: "修正含連字號識別碼的鉤子匹配邏輯（改為精確匹配）；修復 macOS 語音聽寫在長時間 Session 捕捉靜音及日文/中文/泰文自動送出問題；新增 CLAUDE_CODE_DISABLE_MOUSE_CLICKS 環境變數；多項背景代理與插件修復。",
    body: {
      kind: "bug",
      description: "v2.1.195（2026-06-26）為 Claude Code 帶來多項重要修復與改善：\n\n**新功能**\n• 新增 `CLAUDE_CODE_DISABLE_MOUSE_CLICKS` 環境變數，可在全螢幕模式下停用滑鼠點擊/拖曳/懸停，但保留滾輪捲動\n\n**鉤子（Hook）修正**\n• 含連字號的識別碼（如 `code-reviewer`、`mcp__brave-search`）現改為精確匹配，不再意外子字串匹配\n• 若要匹配含連字號 MCP 伺服器的所有工具，請改用 `mcp__brave-search__.*`\n\n**語音聽寫修復**\n• 修復 macOS 在長時間 Session 中因預設輸入裝置切換而捕捉靜音的問題\n• 修復無空格語言（日文、中文、泰文）語音聽寫自動送出從未觸發的問題\n\n**插件修復**\n• 修復僅由專案 `.claude/settings.json` 啟用的外部插件在每個載入路徑都需重新明確同意安裝的問題\n• 修復 `/plugin` 啟用/停用在插件 `plugin.json` `name` 與 marketplace 條目名稱不同時無效的問題\n\n**背景代理修復**\n• 修復背景工作在由新版 Claude Code 寫入時從 `claude agents` 消失或資料遺失的問題\n• 修復重新開啟崩潰的背景工作最長顯示空白畫面 5 秒的問題\n• 修復控制 socket 啟動失敗時背景代理 daemon 無法連線的問題\n\n**改善**\n• Linux 語音模式改善：更清楚區分「無麥克風」與「未安裝 SoX」的錯誤訊息\n• `claude agents` 已完成清單現填滿可用垂直空間\n• 遠端 Session 啟動新增佈建檢查清單",
      links: [
        { label: "github/claude-code/v2.1.195", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.195", kind: "gh" }
      ]
    }
  },
  {
    id: "api-rate-limits-2026-06-26",
    date: "2026-06-26",
    version: "Rate Limits 調整",
    category: "enh",
    area: "performance",
    product: "claude",
    title: "Claude API 全面提升速率限制，Sonnet/Haiku 限制對齊 Opus，使用等級整併為三級",
    summary: "Claude API 全面提升速率限制：Sonnet 與 Haiku 的限制提升至與 Opus 相同水準；原有使用等級整併為 Start、Build、Scale 三個等級，大多數組織將晉升至更高等級，無需任何操作。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 26 日，Anthropic 全面提升 Claude API 速率限制：\n\n**速率限制調整**\n• Claude Sonnet 與 Claude Haiku 的速率限制現已提升至與 Claude Opus 相同水準（適用所有使用等級）\n• 所有模型在相同等級下享有一致的速率限制\n\n**使用等級整併**\n• 原有使用等級整併為三個：Start（起步）、Build（建構）、Scale（擴展）\n• 大多數組織將晉升至更高等級\n• 無任何組織的限制低於調整前水準\n• 無需任何操作，可在 Claude Console（設定 → 限制）查看目前等級與限制",
      links: [
        { label: "Claude API 速率限制文件", href: "https://platform.claude.com/docs/en/api/rate-limits", kind: "doc" },
        { label: "platform.claude.com 發布說明", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "trusted-devices-2026-06-25",
    date: "2026-06-25",
    version: "受信任裝置",
    category: "new",
    area: "security",
    product: "claude-code",
    title: "Team/Enterprise 管理員可啟用遠端控制受信任裝置驗證",
    summary: "Team 和 Enterprise 方案管理員可強制要求成員在遠端存取 Claude Code Session 前完成裝置驗證，提升遠端控制的安全性。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 25 日，Claude Code 新增「受信任裝置（Trusted Devices）」功能：\n\n**功能說明**\n• Team 及 Enterprise 方案管理員可啟用裝置驗證強制要求\n• 成員需先完成裝置驗證，才能遠端存取或控制本地 Claude Code Session\n• 功能文件記載於 Claude Code 說明文件的「Trusted Devices」章節\n\n**適用對象**\n• Claude Team 方案\n• Claude Enterprise 方案",
      links: [
        { label: "support.claude.com 發布說明", href: "https://support.claude.com/en/articles/12138966-release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.193",
    date: "2026-06-25",
    version: "v2.1.193",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.193：Auto Mode 分類強化、OpenTelemetry 回應日誌、Bash 路徑自動補全",
    summary: "新增 autoMode.classifyAllShell 設定讓所有 Shell 指令通過自動模式分類器；Bash 模式（!）支援即時路徑自動補全；新增 claude_code.assistant_response OpenTelemetry 事件；修復模型切換、背景代理重新提示、MCP headersHelper 驗證多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.193（2026-06-25）為 Claude Code 帶來 Auto Mode 強化、可觀測性提升與多項 Bug 修復：\n\n**Auto Mode 改善**\n• 新增 `autoMode.classifyAllShell` 設定：將所有 Bash/PowerShell 指令通過自動模式分類器，而非僅限任意程式碼執行模式\n• 自動模式拒絕原因現顯示於 transcript、拒絕提示及 `/permissions` 最近拒絕記錄中\n\n**可觀測性**\n• 新增 OpenTelemetry 事件 `claude_code.assistant_response`（包含模型回應文字）\n• 預設已隱藏，可設定 `OTEL_LOG_ASSISTANT_RESPONSES=1` 啟用\n• 可設定 `OTEL_LOG_ASSISTANT_RESPONSES=0` 強制停用\n\n**使用者體驗**\n• Bash 模式（`!`）新增即時檔案路徑自動補全\n• MCP 伺服器需要驗證時，啟動時顯示提示（導向 `/mcp`）\n• 改善 `/add-dir` 訊息，當目錄已為工作目錄時提示更明確\n\n**Bug 修復**\n• 修復 `/model` 及客戶端資料閘控 UI 在登入後出現過時/空白狀態\n• 修復 Session 背景化時出現「N background tasks would be abandoned」誤報提示\n• 修復固定背景代理在自動更新後被不必要地重新提示\n• 修復虛幻的「general-purpose (resumed)」子代理生成\n\n**背景代理改善**\n• 閒置 Shell 指令支援記憶體壓力自動回收（可設定 `CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP=1` 停用）\n• 代理啟動結果不再指示 Claude「end response」，可繼續執行其他任務\n• 改善 MCP `headersHelper` 驗證：收到 401/403 時自動重新連線\n• Plugin 自動重命名現跟隨 marketplace 重命名對應",
      links: [
        { label: "github/claude-code/v2.1.193", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.193", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.191",
    date: "2026-06-24",
    version: "v2.1.191",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.191：新增 /rewind 指令、串流效能提升 37%、多項 Bug 修復",
    summary: "新增 /rewind 可從 /clear 前的對話繼續；串流文字合併更新降低 CPU 約 37%；修復背景代理重啟、捲動跳動、MCP OAuth、vim 模式等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.191（2026-06-24）為 Claude Code 帶來效能提升與多項 Bug 修復：\n\n**新功能**\n• **`/rewind` 指令**：可從 `/clear` 前的對話狀態繼續（恢復對話歷史）\n\n**效能改善**\n• 串流回應期間 CPU 使用率降低約 37%（透過文字更新合併，每 100ms 批次處理）\n• 減少長時間 Session 中終端輸出快取造成的記憶體增長\n\n**Bug 修復**\n• 修復串流過程中閱讀早期輸出時捲動位置跳至底部\n• 修復被停止的背景代理重新復活\n• 修復組織政策停用 `/voice` 時的錯誤訊息顯示\n• 修復 Windows Terminal 中 `/login` URL 截斷\n• 修復全螢幕 Ghostty 模式下 Cmd+click 連結\n• 修復 `claude agents` 將斜線指令作為提示詞文字傳送\n• 修復勾點（hooks）逗號分隔的匹配條件未觸發\n• 修復 `/permissions` 對話框批准持久化失敗\n\n**UX 改善**\n• 沙盒網路權限對話框改為記住當前 Session 允許的主機\n• 改善 MCP 伺服器可靠性：增加暫時性錯誤重試邏輯\n• 改善 MCP OAuth：支援瀏覽器彈出視窗備用方案\n• MCP 404 錯誤訊息現顯示 URL",
      links: [
        { label: "github/claude-code/v2.1.191", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.191", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.190",
    date: "2026-06-24",
    version: "v2.1.190",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.190：Bug 修復與穩定性改善",
    summary: "Bug 修復與整體穩定性改善。",
    body: {
      kind: "bug",
      description: "v2.1.190（2026-06-24）：Bug 修復與整體穩定性改善。",
      links: [
        { label: "github/claude-code/v2.1.190", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.190", kind: "gh" }
      ]
    }
  },
  {
    id: "alibaba-distillation-2026-06-24",
    date: "2026-06-24",
    version: "安全事件",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 指控阿里巴巴以 2.5 萬詐欺帳號對 Claude 發起大規模蒸餾攻擊",
    summary: "Anthropic 指控阿里巴巴旗下 Qwen AI 實驗室，透過約 25,000 個詐欺帳號，於 2026 年 4 月至 6 月對 Claude 發起「對抗性蒸餾」攻擊，共產生逾 2,880 萬次對話，已致函美國參議院銀行委員會並知會白宮。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 24 日，Anthropic 公開指控中國科技公司阿里巴巴旗下 Qwen AI 實驗室，透過大規模詐欺帳號對 Claude 發起「對抗性蒸餾（Adversarial Distillation）」攻擊：\n\n**攻擊規模**\n• 時間範圍：2026 年 4 月 22 日 至 6 月 5 日\n• 詐欺帳號數量：近 25,000 個\n• 對話總數：逾 2,880 萬次\n• 目標能力：Claude 軟體工程與代理推理能力\n\n**攻擊手法**\n對抗性蒸餾是一種以大量提示詞向先進模型「採集」推理模式與資料結構的技術，競爭者可藉此訓練自家 AI 模型，在無需投入鉅額研發成本的情況下獲得相似能力。\n\n**Anthropic 的回應**\n• 致函美國參議院銀行委員會（Tim Scott 及 Elizabeth Warren），定性此事件為「迄今規模最大的中國公司蒸餾攻擊」\n• 已通知白宮\n• 阿里巴巴尚未公開回應",
      links: [
        { label: "Bloomberg 報導", href: "https://www.bloomberg.com/news/articles/2026-06-24/anthropic-accuses-alibaba-of-illicitly-accessing-its-ai-models", kind: "doc" },
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/06/24/anthropic-alibaba-distillation-campaign.html", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-tag-2026-06-23",
    date: "2026-06-23",
    version: "Claude Tag",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "推出 Claude Tag：Slack 內建常駐 AI 隊友",
    summary: "Anthropic 發布 Claude Tag 研究預覽版，讓 Claude 以常駐身份存在於 Slack 頻道中，支援跨對話持久記憶、環境感知主動推送通知，可被所有頻道成員以 @Claude 喚醒，適用於 Claude Enterprise 及 Team 方案。",
    body: {
      kind: "feature",
      description: "Claude Tag（2026-06-23）是 Anthropic 推出的 Slack 整合產品，讓 Claude 以常駐 AI 隊友的形式存在於團隊頻道中：\n\n**核心功能**\n• **共享身份**：整個組織共用同一個 Claude 身份，所有成員輸入 @Claude 即可喚醒，並可接續他人半途而廢的任務\n• **持久記憶**：Claude Tag 保有跨對話的持久上下文，能記住進行中的專案、討論歷史與團隊工作流程，無需每次重新說明\n• **環境感知（Ambient）模式**：可設定為主動監控頻道活動，在相關事件發生時自動發送提醒或評論，也能追蹤被遺忘的待辦事項\n• **任務自動執行**：接到指令後 Claude 會將任務分解為多個步驟並自主完成，最終將結果發布回 Slack\n\n**可用性與安全性**\n• 以研究預覽版提供給 Claude Enterprise 及 Team 用戶（初期在 Slack 上發布）\n• 底層模型為 Claude Opus 4.8\n• 管理員可針對每個頻道精細控制 Claude Tag 可存取的工具與資料",
      links: [
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/", kind: "doc" },
        { label: "Neowin 報導", href: "https://www.neowin.net/news/anthropic-introduces-claude-tag-a-new-ai-teammate-for-slack/", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.187",
    date: "2026-06-23",
    version: "v2.1.187",
    category: "enh",
    area: "security",
    product: "claude-code",
    title: "v2.1.187：憑證安全保護、組織模型限制、多項 Bug 修復",
    summary: "新增 sandbox.credentials 設定可阻擋沙盒指令讀取憑證檔案及敏感環境變數；新增組織層級模型限制；全螢幕模式支援滑鼠點選；修復 --resume 失敗、MCP 工具掛起、CJK 亂碼、VSCode 擴充無回應等多項 Bug。",
    body: {
      kind: "feature",
      description: "v2.1.187（2026-06-23）著重安全性強化與 Bug 修復：\n\n**安全性**\n• 新增 `sandbox.credentials` 設定，可阻擋沙盒化指令讀取憑證檔案及秘密環境變數\n\n**組織管理**\n• 新增組織層級模型限制，在模型選擇器、`--model`、`/model` 及 `ANTHROPIC_MODEL` 中顯示「restricted by your organization's settings」提示\n\n**UI 改善**\n• 全螢幕模式下選單支援滑鼠點選操作\n• `/login` 新增「Claude Platform on AWS - refresh credentials」選項（需設定 awsAuthRefresh）\n\n**Bug 修復**\n• 修復 `--resume` 失敗並顯示「No conversation found」\n• 修復 `--json-schema` 及 workflow `agent({schema})` 結構化輸出無限循環問題\n• 修復遠端 MCP 工具呼叫掛起超過 5 分鐘（現在改以錯誤中止，可透過 `CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT` 設定逾時）\n• 修復韓文/CJK 文字在終端顯示為亂碼\n• 修復 `/update` 在 Remote Control 上掛起\n• 修復背景工作卡在「working」狀態\n• 修復在代理詳細檢視間切換後頻道連線中斷\n• 修復繼續大型 Session 時 VSCode 擴充套件無回應",
      links: [
        { label: "github/claude-code/v2.1.187", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.187", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.186",
    date: "2026-06-22",
    version: "v2.1.186",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.186：MCP CLI 驗證指令、Bash 指令自動回應、/workflows 狀態篩選",
    summary: "新增 `claude mcp login/logout` 指令可直接從 CLI 驗證 MCP 伺服器；Bash `!` 指令現觸發 Claude 自動回應（可停用）；/workflows 新增狀態篩選（按 f）；修復機器喚醒後串流失敗及背景 Session 記錄問題。",
    body: {
      kind: "feature",
      description: "v2.1.186（2026-06-22）新增多項功能改善 MCP 整合與開發者工作流程：\n\n**新功能**\n• **MCP CLI 驗證**：新增 `claude mcp login <name>` 與 `claude mcp logout <name>` 指令，可在終端直接驗證 MCP 伺服器，無需進入互動式選單\n• **Bash 指令自動回應**：使用 `!` 執行 Bash 指令後，Claude 會自動分析輸出並回應；可透過設定 `\"respondToBashCommands\": false` 停用此行為\n• **/workflows 狀態篩選**：在 `/workflows` 代理詳細檢視中新增狀態篩選功能（按 `f` 鍵）\n• **/plugin Skills 分頁**：`/plugin` Installed 分頁新增「Skills」區段\n\n**Bug 修復**\n• 修復機器從休眠喚醒後串流請求失敗問題\n• 修復背景 Session 逾時記錄及多項 UI 顯示問題",
      links: [
        { label: "github/claude-code/v2.1.186", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.186", kind: "gh" }
      ]
    }
  },
  {
    id: "fable5-plan-change-2026-06-22",
    date: "2026-06-22",
    version: "計費方式變更",
    category: "brk",
    area: "model",
    product: "claude",
    title: "Fable 5 自 6/23 起不再納入訂閱方案，需改用 Usage Credits",
    summary: "Claude Fable 5 在 Pro、Max、Team 及 Enterprise 方案的免費使用期於今日（6/22）截止，自明日（6/23）起需以 Usage Credits 計費（輸入 $10/百萬 token，輸出 $50/百萬 token）；Anthropic 表示容量充足後將重新納入訂閱方案。",
    body: {
      kind: "breaking",
      description: "自 2026 年 6 月 23 日起，Claude Fable 5 不再包含於 Pro、Max、Team 及座席制 Enterprise 訂閱方案，使用者需改以 Usage Credits 支付 API 費率：\n\n• **輸入**：$10/百萬 token\n• **輸出**：$50/百萬 token\n\n此費率約為 Claude Opus 4.8 的兩倍（Opus 4.8 為 $3/$15/百萬 token）。Anthropic 表示待服務容量充足後將重新將 Fable 5 納入訂閱方案，並承諾提前通知異動。不希望使用 Usage Credits 的使用者可切換為 Opus 4.8 或 Sonnet 4.6。",
      migration: {
        title: "方案因應建議",
        text: "評估是否申購 Usage Credits 繼續使用 Fable 5，或切換為 Opus 4.8（$3/$15/百萬 token）或 Sonnet 4.6 等替代模型。"
      },
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/claude-fable-5-mythos-5", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.185",
    date: "2026-06-20",
    version: "v2.1.185",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.185：改善串流延遲提示訊息與觸發時間",
    summary: "串流停頓提示由「No response from API · Retrying in …」改為「Waiting for API response · will retry in …」，觸發閾值從 10 秒延長至 20 秒，讓使用者在 API 回應較慢時獲得更清楚的狀態說明。",
    body: {
      kind: "feature",
      description: "v2.1.185（2026-06-20）針對 API 串流延遲提示進行 UX 改善：\n\n• **訊息文字更新**：將提示訊息從「No response from API · Retrying in …」改為「Waiting for API response · will retry in …」，措辭更準確反映實際狀態（等待中，而非無回應）\n• **觸發閾值延長**：靜默觸發閾值從 10 秒增加至 20 秒，減少短暫延遲時的誤報提示",
      links: [
        { label: "github/claude-code/v2.1.185", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.185", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.183",
    date: "2026-06-19",
    version: "v2.1.183",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.183：Auto Mode 安全強化、阻擋破壞性 Git 與基礎設施指令",
    summary: "Auto mode 安全性提升：阻擋 git reset --hard、git checkout --、git clean -fd 等破壞性 Git 指令及 terraform/pulumi/cdk destroy 等基礎設施刪除指令（未明確要求時）；新增模型廢棄警告；修復子代理 WebSearch 失效、TUI 損毀、turn 只含思考區塊時無聲完成等多項 Bug。",
    body: {
      kind: "bug",
      description: "v2.1.183（2026-06-19）以 Auto Mode 安全加固為核心，並包含多項重要 Bug 修復：\n\n**安全強化（Auto Mode）**\n• 阻擋下列破壞性 Git 指令（未明確要求時）：`git reset --hard`、`git checkout -- .`、`git clean -fd`、`git stash drop`\n• 阻擋 `git commit --amend`（當該 commit 非當前 Session 代理在本 Session 建立時）\n• 阻擋基礎設施刪除指令（未明確指定要刪除的 stack 時）：`terraform destroy`、`pulumi destroy`、`cdk destroy`\n\n**新功能**\n• 新增 `/config --help`：列出 `/config key=value` 語法可用的所有縮寫鍵\n• 新增模型廢棄警告：當請求的模型已廢棄或被自動升級至較新版本時，在 stderr（print mode）或代理 frontmatter 中顯示警告\n\n**UI 改善**\n• 調整 `/config` 切換行為：Enter 和 Space 均可更改設定；Esc 現在可儲存並關閉\n• 移除啟動時 logo 中的「setup issues」行（改用 `/doctor` 指令查看）\n\n**Bug 修復**\n• 修復子代理生成時 `thinking.disabled.display` 400 錯誤\n• 修復子代理中 WebSearch 回傳空結果\n• 修復啟用 native cursor 的 vim mode 下終端游標問題\n• 修復 Windows Terminal 在大量巢狀子代理負載下全螢幕 TUI 損毀\n• 修復 turn 只含 thinking blocks 時無聲完成（無可見輸出）\n• 修復 headless/SDK 模式下 MCP 認證資訊外露",
      links: [
        { label: "github/claude-code/v2.1.183", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.183", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "apple-foundation-models-2026-06-18",
    date: "2026-06-18",
    version: "平台整合",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "Claude 整合 Apple Foundation Models 框架，登陸 iOS 27 / macOS 27",
    summary: "Claude 正式透過 Apple Foundation Models 框架在 iOS 27、iPadOS 27、macOS 27、visionOS 27 及 watchOS 27 上提供支援，開發者可於 Apple 生態系統中原生呼叫 Claude 能力。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 18 日，Claude 透過 Apple Foundation Models 框架整合至 Apple 最新作業系統平台。\n\n**支援平台**\n• iOS 27\n• iPadOS 27\n• macOS 27\n• visionOS 27\n• watchOS 27\n\n**功能說明**\n開發者可透過 Apple Foundation Models 框架在 Apple 裝置上直接使用 Claude 的語言與推理能力，無需額外設定即可與 Apple 生態系原生整合。",
      links: [
        { label: "科技媒體報導", href: "https://community.designtaxi.com/topic/31243-is-claude-anthropic-ai-down-june-18-2026/", kind: "doc" }
      ]
    }
  },
  {
    id: "enterprise-mcp-connector-2026-06-18",
    date: "2026-06-18",
    version: "企業功能",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "企業版 MCP 連接器集中授權：Okta 整合、Zero-touch 使用者存取",
    summary: "推出企業級 MCP 連接器集中授權機制，管理員透過 Okta 等身分提供者一次佈建後，使用者首次登入即可自動取得 MCP 連接器存取權限，目前支援 Asana、Atlassian、Canva、Figma、Granola、Linear、Supabase，Slack 即將推出。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 18 日，Anthropic 推出企業版 MCP 連接器集中授權功能，讓 IT 管理員可統一管理 Claude 的 MCP 整合存取。\n\n**核心特色**\n• **Zero-touch 設定**：管理員透過身分提供者（Identity Provider）佈建連接器後，終端使用者無需任何額外設定，首次登入即自動取得存取權\n• **Okta 優先整合**：首版以 Okta 作為主要支援的身分提供者\n• **統一涵蓋範圍**：集中授權適用於 Claude 聊天介面、Claude Code 及 Cowork，Team 與 Enterprise 方案均可使用\n\n**支援的 MCP 提供者**\n• Asana、Atlassian（Jira/Confluence）、Canva、Figma、Granola、Linear、Supabase\n• Slack（即將推出）",
      links: [
        { label: "Anthropic 官方公告", href: "https://releasebot.io/updates/anthropic/claude", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-artifacts-2026-06-18",
    date: "2026-06-18",
    version: "Beta 功能",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "Claude Code Artifacts：Session 成果轉化為即時互動網頁",
    summary: "Claude Code 新增 Artifacts 功能，可將 Session 工作成果（PR 摘要、事件時間軸、儀表板等）轉化為即時更新的可分享互動網頁，預設僅作者可見，可在組織內分享，含版本歷史管理。Beta 版適用於 Team 和 Enterprise 方案。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 18 日，Claude Code 推出 Artifacts Beta 功能，讓 Session 工作成果可以即時視覺化並分享。\n\n**主要功能**\n• **即時互動網頁**：Session 進行中的工作成果自動轉化為可互動的網頁，包含 PR 摘要、事件時間軸、Sprint 回顧、儀表板等形式\n• **即時同步更新**：網頁隨 Claude Code Session 進展即時更新，無需手動刷新\n• **隱私控制**：Artifacts 預設為私人（僅作者可見），可在組織已驗證成員間分享\n• **版本歷史**：提供版本歷史管理與 Artifact Gallery，方便瀏覽過往版本\n\n**適用計畫**\n• Team 和 Enterprise 方案（Beta 階段）",
      links: [
        { label: "Anthropic 官方公告", href: "https://releasebot.io/updates/anthropic/claude", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-seoul-office-2026-06-17",
    date: "2026-06-17",
    version: "官方公告",
    category: "new",
    area: "community",
    product: "claude",
    title: "Anthropic 首爾辦公室正式開幕，宣布多項韓國企業合作",
    summary: "Anthropic 於 2026 年 6 月 17 日在首爾開設亞太區第三辦公室，由前 Snowflake Korea 總經理 KiYoung Choi 領導，並宣布與 NAVER、Samsung SDS、LG CNS、Nexon 等韓國科技企業及學術機構建立合作關係。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 17 日，Anthropic 正式在首爾開設辦公室，成為繼東京和班加羅爾之後的亞太區第三個據點。\n\n**領導團隊**\n• 由前 Snowflake Korea 總經理 KiYoung Choi 擔任駐韓代表董事\n\n**企業合作夥伴**\n• **NAVER**：在整個工程組織中全面部署 Claude Code\n• **Samsung SDS**：在三星電子推廣 Claude Cowork 與 Claude Code\n• **LG CNS**：在 LG 集團旗下企業導入 Claude\n• **Nexon**：將 Claude Code 用於線上遊戲開發\n• **Hanwha Solutions**：透過 AWS Bedrock 搭配韓國境內資料管控使用 Claude\n• **Channel Corp**：以 Claude 驅動旗下 Channel Talk 平台，服務 23 萬家以上企業\n\n**研究與非營利合作**\n• 提供 Claude 給 KAIST、高麗大學、延世大學、浦項科技大學等 60 位研究人員使用\n• 與 Good Neighbors Korea 合作，協助社工分析計畫成果、查詢社會福利法規",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem", kind: "doc" },
        { label: "Korea Times 報導", href: "https://www.koreatimes.co.kr/business/tech-science/20260618/anthropic-opens-seoul-office-to-expand-ties-with-korean-ai-ecosystem", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.181",
    date: "2026-06-17",
    version: "v2.1.181",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.181：新增 /config 語法、Apple Events 支援、行動通知抑制及多項修復",
    summary: "新增 /config key=value 語法可直接從提示設定任意選項；新增 sandbox.allowAppleEvents 與 CLAUDE_CLIENT_PRESENCE_FILE；Bun 升級至 1.4；長段落改為逐行串流；修復網路磁碟檔案截斷、macOS TUI 凍結、子代理深度限制等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.181（2026-06-17）帶來多項新功能與大量錯誤修復：\n\n**新功能**\n• `/config key=value` 語法：可直接從提示設定任意選項（支援互動模式、`-p` 旗標、Remote Control），例如 `/config thinking=false`\n• `sandbox.allowAppleEvents`：新的 opt-in 設定，允許 macOS 上的沙盒指令傳送 Apple Events\n• `CLAUDE_CLIENT_PRESENCE_FILE`：環境變數，在機器前工作時可抑制行動裝置推播通知\n• Bun 執行環境升級至 1.4\n\n**功能改善**\n• 長段落現改為逐行串流顯示，不再等到第一個換行才顯示\n• API 連線在思考中斷時現可自動重試\n• 子代理面板改善：閒置子代理 30 秒後自動隱藏，清單上限 5 列並支援捲動\n• MCP OAuth 瀏覽器頁面改為符合 Claude Code 視覺風格，授權成功後自動關閉\n\n**錯誤修復**\n• 修復自訂 `ANTHROPIC_BASE_URL` 與 Foundry 環境下的提示快取問題\n• 修復在網路磁碟與雲端同步資料夾上 Write/Edit 產生截斷檔案的問題\n• 修復 macOS 啟動迴歸與 Spotlight 重新索引時 TUI 凍結問題\n• 修復長時間閒置 Session 在 30 天清理時遺失歷史記錄\n• 修復子代理巢狀生成問題（現遵守 5 層深度限制）\n• 修復 `/recap` 在切換模型後立即使用舊模型的問題\n• 修復 AWS 憑證匯出刷新問題",
      links: [
        { label: "github/claude-code/v2.1.181", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.181", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "agentic-coding-expertise-2026-06-16",
    date: "2026-06-16",
    version: "研究報告",
    category: "new",
    area: "community",
    product: "claude-code",
    title: "Anthropic 發布研究：代理式編程與專業知識的持久回報",
    summary: "Anthropic 分析約 40 萬筆 Claude Code Session，發現使用者領域專業知識越強，Claude 每條指令完成的工作量越多；非軟體工程師的任務成功率與工程師幾乎相同；平均任務價值在 7 個月內提升約 25%。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 16 日，Anthropic 發布研究論文《Agentic coding and persistent returns to expertise》，基於 2025 年 10 月至 2026 年 4 月間約 40 萬筆 Claude Code Session 進行隱私保護分析。\n\n**主要發現**\n• **分工模式**：在典型 Session 中，使用者負責大部分計劃決策（做什麼），Claude 負責大部分執行決策（如何做）\n• **專業知識效益**：使用者帶入 Session 的領域專業知識越強，Claude 每條指令完成的工作量越多——專業知識創造了乘數效應\n• **跨職業成功率**：在編程任務上，幾乎所有主要職業的成功率（有驗證證據如通過測試或提交工作）均與軟體工程師相當\n• **任務複雜度提升**：7 個月內 debug 工作比例顯著下降，更複雜的高價值任務比例上升，平均任務價值提升約 25%\n• **使用成長**：擁有 coding agent 活動的 GitHub 專案比例自 2025 年底起翻倍，Claude Code 使用者平均每週使用工具 20 小時",
      links: [
        { label: "Anthropic 研究原文", href: "https://www.anthropic.com/research/claude-code-expertise", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.179",
    date: "2026-06-16",
    version: "v2.1.179",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.179：修復連線中斷、WSL2 滾輪、sandbox glob 效能等多項 Bug",
    summary: "修復中途連線中斷時部分回應遺失問題、WSL2 下 Windows Terminal / VS Code 滑鼠滾輪失效、Linux sandbox glob 導致 Bash 工具描述過長，以及回饋問卷誤讀、歡迎頁 banner 重疊等問題，並改善遠端 Session 插件載入效能。",
    body: {
      kind: "bug",
      description: "v2.1.179（2026-06-16）為 Bug 修復版本：\n\n**連線與串流修復**\n• 修復中途連線中斷：部分回應現在會保留而非顯示原始錯誤，spinner 不再卡在「running tool」狀態\n\n**平台相容性修復**\n• 修復 WSL2 下 Windows Terminal 和 VS Code 中的滑鼠滾輪捲動（v2.1.172 迴歸問題）\n\n**Sandbox 效能修復**\n• 修復 `denyRead`/`allowRead` glob 在大型目錄樹時導致 Bash 工具描述過長，造成 Linux Session 無法使用的問題\n\n**UI 修復**\n• 修復回饋問卷在 turn 完成後立即將單位數字回覆誤識別為 Session 評分的問題\n• 修復歡迎畫面重疊：每個 Session 現在最多只顯示一個促銷 banner\n• 修復鍵盤導航：Ctrl+O 現在可在查看子代理時正確顯示子代理的記錄；點擊提示輸入框可從子代理/頁尾面板正確回到焦點\n\n**遠端 Session 修復**\n• 修復背景任務在 turn 之間顯示為「仍在執行中」的問題\n• 改善遠端 Session 中的插件載入效能",
      links: [
        { label: "github/claude-code/v2.1.179", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.179", kind: "gh" },
        { label: "Claude Code Changelog", href: "https://code.claude.com/docs/en/changelog", kind: "doc" }
      ]
    }
  },
  {
    id: "model-deprecation-2026-06-15",
    date: "2026-06-15",
    version: "API 更新",
    category: "brk",
    area: "model",
    product: "claude",
    title: "claude-sonnet-4-20250514 與 claude-opus-4-20250514 正式退役",
    summary: "Anthropic 於今日正式停用原始 Claude 4.0 模型版本，API 呼叫 claude-sonnet-4-20250514 或 claude-opus-4-20250514 將返回錯誤，需分別遷移至 claude-sonnet-4-6 和 claude-opus-4-8。",
    body: {
      kind: "breaking",
      description: "2026 年 6 月 15 日，Anthropic 正式退役兩款 Claude 4 原始版本：\n\n**退役模型**\n• `claude-sonnet-4-20250514` → 請升級至 `claude-sonnet-4-6`\n• `claude-opus-4-20250514` → 請升級至 `claude-opus-4-8`\n\n**影響**\n• 退役後對這些模型 ID 的所有 API 呼叫將立即返回錯誤，沒有緩衝期或自動轉移\n• 大多數情況下只需修改一行程式碼（更新 model 字串）即可完成遷移\n\n**不受影響**\n• 使用 claude-sonnet-4-6、claude-opus-4-8、claude-haiku-4-5 等最新版本的呼叫不受影響",
      migration: {
        title: "遷移步驟",
        text: "將 model 參數中的 'claude-sonnet-4-20250514' 改為 'claude-sonnet-4-6'，或將 'claude-opus-4-20250514' 改為 'claude-opus-4-8'，測試輸出後部署即可。"
      },
      links: [
        { label: "Anthropic 模型廢棄頁面", href: "https://platform.claude.com/docs/en/about-claude/model-deprecations", kind: "doc" },
        { label: "Enterprise DNA 報導", href: "https://enterprisedna.co/resources/news/anthropic-claude-june-15-retirements-billing-2026/", kind: "doc" }
      ]
    }
  },
  {
    id: "programmatic-credit-2026-06-15",
    date: "2026-06-15",
    version: "計費更新",
    category: "brk",
    area: "performance",
    product: "claude",
    title: "付費計畫程式化使用信用正式分離（今日生效）",
    summary: "自今日起，付費 Claude 計畫的程式化呼叫（Agent SDK、claude -p、Claude Code GitHub Actions、第三方代理）從訂閱上限移至獨立每月信用額度：Pro $20、Max 5x $100、Max 20x $200，以完整 API 費率計量，不累積至下月。",
    body: {
      kind: "breaking",
      description: "2026 年 6 月 15 日起，Anthropic 正式分離 Claude 付費計畫的互動式使用與程式化使用：\n\n**計費結構調整**\n• **互動式使用**（Claude.ai 聊天、終端機 Claude Code）：維持現有訂閱計畫上限，不變動\n• **程式化使用**（Agent SDK、`claude -p`、Claude Code GitHub Actions、第三方代理）：移至獨立每月信用額度\n\n**程式化信用額度（月費）**\n• Pro 計畫：$20\n• Max 5x 計畫：$100\n• Max 20x 計畫：$200\n\n**重要注意事項**\n• 以完整 API 費率計量，超出信用後按用量計費\n• 信用不累積至下個月（不滾動）\n• 此變更影響使用 API 程式化呼叫的開發者與企業用戶",
      migration: {
        title: "行動建議",
        text: "檢查現有程式化呼叫的用量，評估是否需要升級至更高計畫層級，或改為直接使用 Anthropic API 並搭配適合的帳單方式。"
      },
      links: [
        { label: "Cointelegraph 報導", href: "https://x.com/Cointelegraph/status/2054650608045482308", kind: "doc" },
        { label: "Enterprise DNA 詳細說明", href: "https://enterprisedna.co/resources/news/anthropic-claude-june-15-retirements-billing-2026/", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.178",
    date: "2026-06-15",
    version: "v2.1.178",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.178：Tool 參數匹配語法、巢狀 .claude/ 目錄改善與多項修復",
    summary: "新增 Tool(param:value) 權限規則語法支援萬用字元參數匹配；巢狀 .claude/ 目錄的技能與工作流程設定改以最近目錄優先；自動模式子代理生成前由分類器審查；修復 OOM 崩潰、子代理 401 錯誤、vim undo 合併、VSCode CJK IME 等多項 Bug。",
    body: {
      kind: "feature",
      description: "v2.1.178（2026-06-15）更新內容：\n\n**新功能**\n• 新增 `Tool(param:value)` 權限規則語法，可匹配工具輸入參數並支援 `*` 萬用字元（例：`Agent(model:opus)` 可封鎖使用 Opus 的子代理）\n• 巢狀 `.claude/skills` 目錄中的技能現於工作目錄下自動載入；名稱衝突時以 `<dir>:<name>` 格式顯示以保留兩者\n• 巢狀 `.claude/` 目錄層級：代理、工作流程、輸出樣式設定改以最近的目錄優先；專案範圍的工作流程儲存目標為最近的 `.claude/workflows/`\n\n**改善**\n• 自動模式改善：子代理生成前由分類器審查，修補先前可繞過封鎖動作的安全漏洞\n• `/doctor` 指令：統一平面樹狀佈局、更清晰的狀態圖示、突出顯示指令名稱\n• 工作流程提示關鍵字：改為紫色閃光高亮，僅在明確短語（如「run a workflow」或「workflow:」）下觸發\n• Remote Control 錯誤：連線失敗顯示持續性紅色 /rc failed 頁尾指示器；「尚未啟用」錯誤現說明 gate、檢查失敗、過期授權或組織政策原因\n• `/bug` 指令：現要求填寫描述後才可提交；不再使用模型拒絕文字作為 GitHub Issue 標題\n\n**Bug 修復**\n• 修復過期 websocket/OAuth 檔案描述符環境變數導致的記憶體不足（OOM）崩潰\n• 修復 Chrome 中 Claude 在 OAuth Token 屬於不同帳號時靜默失敗\n• 修復巢狀技能使用目錄限定名稱時被權限提示封鎖\n• 修復子代理問題：逐字記錄現顯示工具結果與即時進度；子代理回合中發送的訊息不再被丟棄；Ctrl+B 背景化不再重啟\n• 修復 `claude agents` 工作者因自訂 API 閘道產生 401 Invalid bearer token 錯誤\n• 修復壓縮未遵守 `--fallback-model` 設定\n• 修復憑證刷新後過期快取請求設定導致的驗證錯誤\n• 修復背景 Session 在代理列表中永遠顯示「Working」\n• 修復 vim 模式 undo 合併指令而非逐步回退的問題\n• VSCode：修復 Esc 鍵關閉 CJK IME 候選視窗時誤取消 Claude 任務",
      links: [
        { label: "github/claude-code/v2.1.178", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.178", kind: "gh" }
      ]
    }
  },
  {
    id: "fable-mythos-conflict-2026-06-14",
    date: "2026-06-14",
    version: "官方公告",
    category: "brk",
    area: "security",
    product: "claude",
    title: "Fable 5 與 Mythos 5 存取爭議升溫：美國政府與 Anthropic 公開對峙",
    summary: "美國政府與 Anthropic 的衝突持續升溫：國防部長 Hegseth 公開表示「永久拒絕 Anthropic 進入國防部」，前 AI 顧問 Sacks 指控 Anthropic 拒絕配合安全調查，商務部長 Lutnick 正居中協商。",
    body: {
      kind: "breaking",
      description: "2026 年 6 月 14 日（週六），美國政府與 Anthropic 之間的 Fable 5 與 Mythos 5 出口管制爭議持續升溫：\n\n**政府立場**\n• 國防部長 Pete Hegseth 在 X 上公開表示：「三個月前，我們將 @AnthropicAI 永久踢出我們的大樓」，並稱此決定每天都在被證明是正確的\n• 前 AI 顧問 David Sacks 指控 Anthropic 在一個「極具公信力的可信夥伴」提出安全疑慮後，拒絕處理相關安全問題\n\n**Anthropic 立場**\n• 知情人士表示，Anthropic 執行長 Dario Amodei 實際上願意與政府溝通，與 Sacks 的指控相矛盾\n• Anthropic 認為此次措施範圍異常廣泛——甚至限制持有綠卡的外籍人士——偏離了 Trump 政府對 AI 產業的一貫不干預立場\n\n**協商進展**\n• 商務部長 Howard Lutnick 正積極介入，與 Anthropic 協商解決方案\n• 所有其他 Anthropic 模型（Claude Opus 4.8 等）持續正常運作不受影響",
      migration: {
        title: "現況",
        text: "Fable 5 與 Mythos 5 仍暫停存取中，請繼續使用 Claude Opus 4.8（claude-opus-4-8）作為替代方案，並關注 Anthropic 官方公告。"
      },
      links: [
        { label: "Philadelphia Inquirer 報導（2026-06-14）", href: "https://www.inquirer.com/news/nation-world/anthropic-trump-administration-pentagon-fable-mythos-deny-foreign-access-amodei-lutnick-20260614.html", kind: "doc" },
        { label: "Anthropic 官方聲明", href: "https://www.anthropic.com/news/fable-mythos-access", kind: "doc" }
      ]
    }
  },
  {
    id: "fable-mythos-ban-2026-06-13",
    date: "2026-06-13",
    version: "官方公告",
    category: "brk",
    area: "security",
    product: "claude",
    title: "美國政府出口管制：暫停 Fable 5 與 Mythos 5 對外籍人士的存取",
    summary: "美國政府以國家安全為由，於 6 月 12 日下達出口管制指令，要求 Anthropic 暫停 Fable 5 和 Mythos 5 對所有外籍人士的使用權限，實際上導致全體用戶均無法使用這兩款最先進的模型，其他模型不受影響。",
    body: {
      kind: "breaking",
      description: "2026 年 6 月 12 日下午 5:21 ET，美國政府以國家安全為由向 Anthropic 下達出口管制指令，要求暫停所有外籍人士（包含 Anthropic 外籍員工）使用 Fable 5 和 Mythos 5 模型的權限。\n\n**影響範圍**\n• 為確保合規，Anthropic 必須對全體用戶停用 Fable 5 和 Mythos 5\n• 其他模型（包含 Claude Opus 4.8、Sonnet 4.6、Haiku 4.5）均不受影響\n\n**觸發原因**\n• 美國政府發現一個潛在越獄技術：透過請求模型分析並修復程式碼中的軟體漏洞來進行越獄\n• Anthropic 認為此屬「範圍有限的潛在越獄」，而非通用越獄技術，且同樣的漏洞存在於 OpenAI GPT-5.5 等其他主流模型\n\n**Anthropic 立場**\n• 服從指令，但強烈反對此決定\n• 認為 Anthropic 的安全防護措施遠優於任何已部署模型\n• 警告：若此標準適用於整個 AI 產業，將實質上阻止所有新前沿模型的部署\n• 呼籲政府採用「透明、公平、清晰且以技術事實為基礎的法定程序」",
      migration: {
        title: "替代方案",
        text: "Fable 5 和 Mythos 5 停用期間，建議改用 Claude Opus 4.8（claude-opus-4-8）或其他可用模型。"
      },
      links: [
        { label: "Anthropic 官方聲明", href: "https://www.anthropic.com/news/fable-mythos-access", kind: "doc" },
        { label: "Bloomberg 報導", href: "https://www.bloomberg.com/news/articles/2026-06-13/anthropic-says-us-limits-foreign-access-to-fable-5-mythos-5", kind: "doc" },
        { label: "The Hacker News 報導", href: "https://thehackernews.com/2026/06/us-orders-anthropic-to-suspend-fable-5.html", kind: "doc" }
      ]
    }
  },
  {
    id: "tcs-partnership-2026-06-12",
    date: "2026-06-12",
    version: "官方公告",
    category: "new",
    area: "enterprise",
    product: "claude",
    title: "TCS 與 Anthropic 宣布全球頂級策略夥伴關係",
    summary: "Tata Consultancy Services（TCS）加入 Claude Partner Network 成為全球頂級合作夥伴，將向 50,000 名員工部署 Claude，並在 56 個國家建立 Claude AI 業務部門，服務金融、醫療等受監管產業。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 12 日，Anthropic 宣布與 Tata Consultancy Services（TCS）建立全球頂級策略夥伴關係。\n\n**合作重點**\n• TCS 加入 Claude Partner Network 成為全球頂級合作夥伴\n• TCS 將透過企業授權向 50,000 名員工部署 Claude，涵蓋工程、財務、法律、行銷與銷售等職能\n• 在 56 個國家推廣 Claude 應用，優先服務金融服務、醫療保健、公共部門等受監管產業\n\n**業務部門**\n• TCS 將建立專屬 Claude AI 業務部門，提供 Claude 驅動的解決方案，並可提前取得 Claude 模型家族的存取權\n\n**具體應用**\n• 英國 Diligenta（TCS 旗下受 FCA 監管的壽險與退休金業務，服務逾 2,200 萬客戶）將使用 Claude 推動代理式流程轉型與客戶體驗提升\n• TCS 的 BFSI 產品與平台團隊也將使用 Claude Code 提升軟體工程與 IT 運營生產力",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/tcs-anthropic-partnership", kind: "doc" },
        { label: "TCS 官方新聞稿", href: "https://www.tcs.com/who-we-are/newsroom/press-release/tcs-anthropic-launch-global-premier-partnership-drive-enterprise-ai-scaling", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-public-record-2026-06-12",
    date: "2026-06-12",
    version: "官方公告",
    category: "new",
    area: "community",
    product: "claude",
    title: "Anthropic 發布第一次 Public Record 公眾調查結果",
    summary: "Anthropic 公布約 5.2 萬名美國人的 AI 態度調查：48% 最期待 AI 治癒疾病，64% 最擔心工作流失，僅 15% 信任 AI 公司自主決策，逾 70% 支持政府監管 AI。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 12 日，Anthropic 發布「Anthropic Public Record」系列的第一次調查結果，此調查於 2025 年 11-12 月對近 52,000 名美國人進行，涵蓋所有 50 州。\n\n**AI 的希望**\n• 48% 的美國人將「治癒癌症或阿茲海默症等疾病」列為對 AI 的最大期望之一\n• 36% 希望 AI 能幫助殘障人士\n• 23% 希望 AI 帶來科技進步或讓生活更輕鬆（並列第三）\n\n**AI 的恐懼**\n• 64% 最擔心 AI 造成的工作流失（在所有州均排名第一）\n• 56% 擔心認知依賴\n• 52% 擔心錯誤資訊\n\n**對 AI 公司的信任**\n• 僅 15% 的美國人信任 AI 公司自主做出開發決策（最低）\n• 43% 信任獨立專家\n• 逾 70% 支持政府在 AI 監管中扮演角色，且具跨黨派共識\n\n**使用習慣**\n• 約 6% 的美國人每天在工作與個人生活中同時使用 AI（以年輕、高學歷、科技導向族群為主）\n• 每日 AI 使用者對工作流失的擔憂（54%）明顯低於非使用者（70%）",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/anthropic-public-record", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.176",
    date: "2026-06-12",
    version: "v2.1.176",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.176：Session 標題語言化、Bedrock 快取改善與多項修復",
    summary: "Session 標題改為對話語言自動生成；新增 footerLinksRegexes 頁尾設定；Bedrock 憑證快取依 Expiration 更新；修復 tmux SSH 剪貼板複製、Linux 沙盒 symlink 啟動、availableModels 執行及 Remote Control 多項 Bug。",
    body: {
      kind: "feature",
      description: "v2.1.176（2026-06-12）更新內容：\n\n**新功能與改善**\n• Session 標題現以對話語言自動生成（可透過 `language` 設定固定語言）\n• 新增 `footerLinksRegexes` 設定，可透過用戶或企業管理設定在頁尾列新增正則表達式匹配的連結徽章\n• 改善 Bedrock 憑證快取：來自 `awsCredentialExport` 的憑證現快取至 `Expiration` 時間，而非固定 1 小時\n• 修復 `availableModels` 執行問題：別名模型選擇不再被 `ANTHROPIC_DEFAULT_*_MODEL` 環境變數重定向到被封鎖的模型；`/fast` 在切換會導致使用 allowlist 外模型時拒絕切換\n• 修復 Fable 5 在未啟用 Opus 4.8 的組織中自動模式失敗的問題（分類器現改為回退至最佳可用 Opus 模型）\n\n**Bug 修復**\n• 修復 hook `if` 條件對 Read/Edit/Write 工具路徑的匹配（`Edit(src/**)`, `Read(~/.ssh/**)`, `Read(.env)` 等模式現可正確匹配）\n• 修復 Linux 沙盒在 `.claude/settings.json` 是帶有絕對路徑目標的符號連結時無法啟動的問題\n• 修復 tmux over SSH 中 `/copy` 指令和滑鼠選取複製無法到達系統剪貼板的問題\n• 修復 Remote Control 在從 web/mobile 連線時靜默切換 session 模型的問題\n• 改善斷線通知，提供人類可讀的原因說明\n• 修復 `/cd` 和 worktree 移動後 git 分支報告不正確的問題\n• 改善以 PR URL 搜尋背景 session 的功能\n• 修復 Windows 代理視圖輸入文字游標問題\n• 修復 Windows 網路路徑在持久化狀態中的處理",
      links: [
        { label: "github/claude-code/v2.1.176", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.176", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.175",
    date: "2026-06-12",
    version: "v2.1.175",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.175：新增 enforceAvailableModels 企業管理設定",
    summary: "新增 enforceAvailableModels 管理設定，啟用後 availableModels allowlist 同時限制預設模型選擇，防止用戶或專案設定擴展受管 allowlist。",
    body: {
      kind: "feature",
      description: "v2.1.175（2026-06-12）更新內容：\n\n**新功能**\n• 新增 `enforceAvailableModels` 企業管理設定——啟用時，`availableModels` allowlist 同時限制預設模型的選擇；若預設模型會解析為不允許的模型，系統自動回退至 allowlist 中的第一個允許模型；用戶或專案設定無法擴展受管理的 `availableModels` 清單",
      links: [
        { label: "github/claude-code/v2.1.175", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.175", kind: "gh" }
      ]
    }
  },
  {
    id: "dxc-partnership",
    date: "2026-06-11",
    version: "官方公告",
    category: "new",
    area: "enterprise",
    product: "claude",
    title: "DXC Technology 與 Anthropic 宣布多年全球策略聯盟",
    summary: "DXC Technology 與 Anthropic 簽署多年全球合作協議，將 Claude 部署至銀行、航空、保險等關鍵任務企業系統，DXC 將訓練數萬名 Claude 認證工程師。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 11 日，DXC Technology 與 Anthropic 宣布多年全球策略聯盟，共同將 Claude 引入企業關鍵任務基礎設施。\n\n**合作重點**\n• DXC 成為 Claude Partner Network 的全球頂級合作夥伴之一\n• 目標是將 Claude 部署到 DXC 為全球最大銀行、航空公司、保險商、製造商及政府機構所運營的關鍵任務技術基礎設施\n• 初期聚焦領域：保險、網路安全與應用服務\n\n**工程師培訓計畫**\n• 從 DXC 現有人才中招募，透過 Anthropic Partner Academy 在 90 天內完成培訓與認證\n• 工程師將持續取得 Claude 存取權，並逐步提升設計、部署與治理 AI 系統的能力\n\n**已驗證的成果**\n• DXC 已將 Claude 作為旗艦產品 DXC OASIS 的主要開發工具，軟體交付速度提升約 10 倍\n• 超過 95% 的程式碼由 Claude 生成後再經人工審查\n• DXC OASIS 自 2026 年 4 月起已部署至逾 50 位客戶",
      links: [
        { label: "DXC 官方新聞稿", href: "https://dxc.com/newsroom/06112026-dxc-and-anthropic-announce-multi-year-global-alliance-to-bring-ai-into-mission-critical-enterprise-systems", kind: "doc" },
        { label: "Anthropic 官網公告", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-corps",
    date: "2026-06-11",
    version: "官方公告",
    category: "new",
    area: "community",
    product: "claude",
    title: "Anthropic 推出 Claude Corps 全國研究員計畫",
    summary: "Anthropic 宣布投入 1.5 億美元設立 Claude Corps，在 12 個月內將 1,000 名早期職涯人員派駐至全美逾 400 家非營利組織，協助推廣 AI 應用，薪資 8.5 萬美元/年。",
    body: {
      kind: "feature",
      description: "2026 年 6 月 11 日，Anthropic 宣布推出 Claude Corps——一個全國性研究員計畫，旨在讓 AI 的效益廣泛惠及美國各地社區。\n\n**計畫規模**\n• 初始投入：1.5 億美元\n• 12 個月內，將 1,000 名研究員派駐至至少 400 家非營利組織\n• 研究員職位為全職、駐點（in-person）、為期 12 個月\n\n**申請條件**\n• 年滿 18 歲，工作經驗不足兩年\n• 無學歷門檻\n• 薪資：每年 8.5 萬美元 + 福利\n\n**培訓內容**\n• 密集初始訓練 + 每週 5 小時持續學習 Claude 使用技能\n\n**合作夥伴**\n• CodePath（雇主代理）\n• Social Finance（成效評估）\n\n**時間表**\n• 第一批（100 名）：申請截止 2026/7/17，2026 年 10 月開始\n• 後續批次：2027 年 1 月與 8 月開始，持續開放申請",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/claude-corps", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.173",
    date: "2026-06-11",
    version: "v2.1.173",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.173：修復 Fable 5 模型名稱正規化與 Windows 沙盒警告",
    summary: "修復帶有 [1m] 後綴的 Fable 5 模型名稱未被正規化的問題，以及 Windows 上啟動時出現虛假「sandbox dependencies missing」警告的問題。",
    body: {
      kind: "bug",
      problem: "Fable 5 模型名稱含 `[1m]` 後綴時未被正規化；Windows 啟動時出現不必要的沙盒警告。",
      rootCause: "Fable 5 預設即包含 1M context，`[1m]` 後綴為冗餘資訊；Windows 沙盒設定檢測邏輯存在誤判。",
      fix: "更新至 v2.1.173 後自動去除 `[1m]` 後綴；修復 Windows 沙盒依賴項目的啟動警告誤報。",
      description: "v2.1.173（2026-06-11）更新內容：\n\n**Bug 修復**\n• 修復帶有 `[1m]` 後綴的 Fable 5 模型名稱未被正規化的問題（Fable 5 預設即支援 1M context，後綴現自動去除）\n• 修復 Windows 上當設定中啟用沙盒時，啟動時出現虛假「sandbox dependencies missing」警告的問題",
      links: [
        { label: "github/claude-code/v2.1.173", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.173", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.172",
    date: "2026-06-10",
    version: "v2.1.172",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.172：子代理遞迴生成、Bedrock 區域自動偵測、插件市場搜尋",
    summary: "子代理可遞迴生成子代理（最多 5 層）、Amazon Bedrock 自動從 ~/.aws 讀取 AWS 區域、新增插件市場搜尋列，並修復多項 Bug 及降低閒置 CPU 使用率。",
    body: {
      kind: "feature",
      description: "v2.1.172（2026-06-10）更新內容：\n\n**新功能**\n• 子代理現可遞迴生成子代理，最深支援 5 層巢狀\n• Amazon Bedrock 現可從 `~/.aws` 設定檔自動讀取 AWS 區域（當 `AWS_REGION` 未設定時），`/status` 會顯示區域來源\n• `/plugin` 插件市場新增搜尋列\n• `claude_code.lines_of_code.count` OTEL 指標新增 `model` 屬性\n\n**Bug 修復**\n• 修復使用 1M context 且無使用額度時 session 永久卡住的問題（現自動壓縮至標準限制以下）\n• 修復對話中含多張圖片時反覆出現「image could not be processed」錯誤\n• 修復 Agents 視圖在 worker 回覆後仍顯示繁忙轉圈長達 30 秒的問題\n• 修復背景代理從預熱 worker 讀取錯誤專案設定的問題\n• 修復巢狀代理停止後背景子代理仍顯示為「active」的問題\n• 修復 `/model` 選擇器在 Bedrock 上顯示不可用模型的問題\n• 修復 `WebFetch` 權限中萬用字元域名規則（`*.example.com`）無法匹配子域名的問題\n• 修復遠端 session 中記憶體回溯無法找到掛載的團隊記憶體儲存的問題\n• 修復工作流程驗證拒絕含 `Date.now()`/`Math.random()` 腳本的問題\n\n**效能與 UX 改善**\n• 降低閒置 CPU 使用率（狀態標籤不再以 5Hz 重新渲染）\n• 改善長對話效能（減少不必要的訊息轉換）\n• 改善 Claude in Chrome 工具載入（改為批次呼叫）\n• 停用對滑鼠追蹤支援不佳的 Windows 主控台的滑鼠追蹤\n• Remote Control 頁尾指示縮短為「/rc active」\n• VSCode：修復 PowerShell 工具呼叫顯示為 JSON 而非正確指令格式",
      links: [
        { label: "github/claude-code/v2.1.172", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.172", kind: "gh" }
      ]
    }
  },
  {
    id: "fable-5",
    date: "2026-06-09",
    version: "claude-fable-5",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Fable 5 & Mythos 5 正式發布",
    summary: "首款公開的 Mythos 級模型 Claude Fable 5 正式上線，支援 100 萬 token 上下文，定價 $10/M 輸入、$50/M 輸出，內建安全分類器；Claude Mythos 5 同步發布，僅限 Project Glasswing 合作夥伴。",
    body: {
      kind: "feature",
      description: "Claude Fable 5 是 Anthropic 首款公開發布的 Mythos 級模型，於 2026 年 6 月 9 日正式上線。\n\n**模型 ID**\n• Claude Fable 5：`claude-fable-5`\n• Claude Mythos 5：`claude-mythos-5`（僅限 Project Glasswing 合作夥伴）\n\n**能力亮點**\n• 上下文視窗：100 萬 token（預設），每次請求最多輸出 128k token\n• 能力超越所有先前公開發布的模型，在軟體工程、知識工作、視覺及科學研究等領域表現卓越\n• 可自主執行更長時間的任務（long-horizon agentic work）\n\n**定價**\n• 輸入：$10 / 百萬 token\n• 輸出：$50 / 百萬 token（約為 Opus 4.8 價格的兩倍）\n\n**安全機制（Fable 5 限定）**\n• 內建安全分類器，針對 cybersecurity、生物化學、蒸餾嘗試等高風險查詢自動回退至 Opus 4.8\n• 拒絕請求時 API 返回 HTTP 200 + `stop_reason: \"refusal\"`（而非錯誤）\n• 超過 95% 的 session 完全由 Fable 5 自身回應（不觸發回退）\n• 資料留存要求：30 天（不支援零資料留存設定）\n\n**思考模式**\n• 採自適應思考（Adaptive Thinking），始終開啟，不可停用\n• 可透過 `effort` 參數控制思考深度\n• 原始思考鏈不返回；可設 `display: \"summarized\"` 獲得摘要版思考內容\n\n**API 新功能**\n• 支援 `fallbacks` 參數（Beta），讓 API 自動在備用模型重試被拒絕的請求\n• 支援 `task-budgets-2026-03-13` header（Beta）、memory tool、context editing、compaction、vision\n\n**訂閱方案**\n• 2026/6/9 至 6/22：Pro、Max、Team、Enterprise 方案免費試用\n• 6/22 起須使用方案用量額度\n\n**可用平台**\n• Claude API、Claude Platform on AWS、Amazon Bedrock、Vertex AI、Microsoft Foundry",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/claude-fable-5-mythos-5", kind: "doc" },
        { label: "Claude API Docs - Fable 5 介紹", href: "https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5", kind: "doc" },
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.170",
    date: "2026-06-09",
    version: "v2.1.170",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.170：引入 Claude Fable 5 支援與 Session 轉錄修復",
    summary: "Claude Code v2.1.170 引入 Claude Fable 5（Mythos 級模型）支援，並修復從 VS Code 整合終端機啟動時 session 未儲存轉錄的問題。",
    body: {
      kind: "feature",
      description: "v2.1.170（2026-06-09）更新內容：\n\n**新功能**\n• 引入 Claude Fable 5：Anthropic 首款公開的 Mythos 級模型，需更新至 v2.1.170 才能使用\n\n**Bug 修復**\n• 修復從 VS Code 整合終端機啟動，或任何繼承了 Claude Code 環境變數的 shell 啟動時，session 未儲存轉錄且不出現在 `--resume` 清單的問題",
      links: [
        { label: "github/claude-code/v2.1.170", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.170", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.169",
    date: "2026-06-08",
    version: "v2.1.169",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.169：安全模式、/cd 指令、停用內建技能",
    summary: "新增 --safe-mode 旗標停用所有自訂化以便排錯、/cd 指令移至新工作目錄、disableBundledSkills 設定，並修復多項 Bug。",
    body: {
      kind: "feature",
      description: "v2.1.169（2026-06-08）更新內容：\n\n**新功能與改善**\n• 新增 `--safe-mode` 旗標與 `CLAUDE_CODE_SAFE_MODE` 環境變數，可停用所有自訂化設定（CLAUDE.md、插件、技能、hooks、MCP 伺服器）以便排錯\n• 新增 `/cd` 指令，可將 session 移至新工作目錄而不中斷提示緩存\n• 新增 `disableBundledSkills` 設定與 `CLAUDE_CODE_DISABLE_BUNDLED_SKILLS` 環境變數，可隱藏內建技能與斜線命令\n• 恢復 Vertex/Foundry 的預設 5 分鐘閒置逾時，避免無限期掛起\n• `/workflows` 現可在對話進行中立即開啟\n\n**Bug 修復**\n• 修復長輸入行中 Up/Down 鍵跳過換行列的問題\n• 修復企業 MCP 政策（allowedMcpServers/deniedMcpServers）在重新連線、IDE 設定及首次安裝後不生效的問題\n• 修復 macOS 使用 claude.ai 憑證登入的使用者在 session 啟動時約 30-50ms 的 UI 卡頓\n• 修復 Windows 上 `claude -p` 在技能掃描時速度緩慢的問題（v2.1.161 引入的 regression）\n• 修復 Remote Control 在 session 恢復後卡在「reconnecting」狀態的問題\n• 修復 Windows 啟動時出現 Git Credential Manager 彈出視窗\n• 修復重新附加至遠端 session 時過時的權限提示重複出現\n• 修復 `claude agents --json` 省略封鎖/派送 session 的問題\n• 修復背景 agent 忽略專案層級設定環境變數的問題\n• 修復 MCPB 插件緩存在 Windows 上被無效化的問題\n• 修復插件 `.in_use` PID 鎖定檔案無限累積的問題\n• 修復不受信任的專案設定繞過 OTEL 用戶端憑證信任確認的問題\n• 減少回應串流與動畫期間的 CPU 使用率\n• 改善 TaskCreate 可靠性並自動修復格式錯誤的輸入",
      links: [
        { label: "github/claude-code/v2.1.169", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.169", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.168",
    date: "2026-06-06",
    version: "v2.1.168",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.168：Bug 修復與穩定性改善",
    summary: "本次更新專注於錯誤修復與可靠性提升，無新增功能。",
    body: {
      kind: "bug",
      problem: "多項穩定性問題影響日常使用。",
      rootCause: "詳見 GitHub 提交紀錄 7228175。",
      fix: "更新至 v2.1.168 即可獲得修復。",
      description: "v2.1.168（2026-06-06）更新內容：\n\n• Bug 修復與穩定性改善",
      links: [
        { label: "github/claude-code/v2.1.168", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.168", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.167",
    date: "2026-06-06",
    version: "v2.1.167",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.167：Bug 修復與穩定性改善",
    summary: "本次更新專注於錯誤修復與可靠性提升，無新增功能。",
    body: {
      kind: "bug",
      problem: "多項穩定性問題影響日常使用。",
      rootCause: "詳見 GitHub 提交紀錄 c1b75cb。",
      fix: "更新至 v2.1.167 即可獲得修復。",
      description: "v2.1.167（2026-06-06）更新內容：\n\n• Bug 修復與穩定性改善",
      links: [
        { label: "github/claude-code/v2.1.167", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.167", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.166",
    date: "2026-06-06",
    version: "v2.1.166",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.166：fallbackModel 備用模型、Deny 規則 Glob 支援、跨 Session 安全加強、思考關閉控制",
    summary: "新增 fallbackModel 設定（最多三個備用模型）、deny 規則支援 glob 萬用字元、強化跨 session 訊息傳遞安全、MAX_THINKING_TOKENS=0 可關閉預設思考模型的思考功能，以及多項 Bug 修復。",
    body: {
      kind: "feature",
      description: "v2.1.166（2026-06-06）更新內容：\n\n**新功能與改善**\n• 新增 `fallbackModel` 設定，可配置最多三個備用模型，於主要模型過載或無法使用時依序嘗試；`--fallback-model` flag 現也適用於互動 session\n• deny 規則的工具名稱位置新增 glob 萬用字元支援（`\"*\"` 可封鎖所有工具）；allow 規則拒絕非 MCP glob；未知工具名稱於啟動時發出警告\n• 跨 session 訊息傳遞安全強化：透過 `SendMessage` 中繼的訊息不再具備使用者權限，接收方拒絕中繼的權限請求，auto 模式封鎖跨 session 權限請求\n• `MAX_THINKING_TOKENS=0`、`--thinking disabled` 及每模型思考切換，現可關閉 Claude API 上預設會思考的模型之思考功能（第三方供應商不受影響）\n• Claude Code 現在於 API 回傳非預期不可重試錯誤時，自動在備用模型上重試一次（auth、rate-limit、request-size、transport 錯誤仍立即顯示）\n• `claude update` 在下載前會先宣告目標版本，不再靜默執行\n• `claude agents`：於清單中輸入 URL 現可篩選首個提示包含該 URL 的 session\n\n**Bug 修復**\n• 修復 session 中不可處理的圖片反覆出現「image could not be processed」錯誤及額外 token 用量\n• 修復後端於 worker 啟動登錄期間中斷時，遠端 session 永久卡住的問題\n• 修復 JetBrains IDE 終端（IntelliJ、PyCharm、WebStorm 等）在 2026.1+ 上的閃爍問題\n• 修復在使用 Kitty 鍵盤協議的終端機（WezTerm、Ghostty、kitty）中 Shift+非 ASCII 字元（如 Shift+ä → Ä）被丟棄的問題\n• 修復 Windows 上 PowerShell 指令驗證在被終止程序的子程序持有輸出管道時偶爾超時掛起\n• 修復 macOS 上 daemon 結束後孤立的 `claude --bg-pty-host` 程序佔用 100% CPU\n• 修復語音模式在切換 `/voice` 後需重新 `/login` 才能清除過期 auth 的問題\n• 修復管理設定中無效條目靜默停用其餘有效政策的問題\n• 修復管理設定 `allowedMcpServers`/`deniedMcpServers` 與 `${VAR}` 參照不匹配的問題\n• 修復背景 agent session 在 git worktree 崩潰循環「No conversation found」的問題\n• 修復串流時 Ctrl+O 轉錄視圖中重複出現思考文字\n• 修復在遠端 session 內執行 `/doctor` 時顯示矛盾的「Not inside a remote session」\n• 修復在 `claude agents` 派送和回覆輸入中輸入多行提示時，游標卡在第一行末尾\n• 修復在不支援 Unicode 的終端機上，任務清單中背景 agent 列之間出現空行",
      links: [
        { label: "github/claude-code/v2.1.166", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.166", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.165",
    date: "2026-06-05",
    version: "v2.1.165",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.165：Bug 修復與穩定性改善",
    summary: "本次更新專注於錯誤修復與可靠性提升，無新增功能。",
    body: {
      kind: "bug",
      problem: "多項穩定性問題影響日常使用。",
      rootCause: "詳見 GitHub 提交紀錄 feabcc3。",
      fix: "更新至 v2.1.165 即可獲得修復。",
      description: "v2.1.165（2026-06-05）更新內容：\n\n• Bug 修復與穩定性改善",
      links: [
        { label: "github/claude-code/v2.1.165", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.165", kind: "gh" }
      ]
    }
  },
  {
    id: "when-ai-builds-itself-2026-06-05",
    date: "2026-06-05",
    version: "官方公告",
    category: "new",
    area: "performance",
    product: "claude",
    title: "Anthropic 發表《When AI Builds Itself》報告：Claude 撰寫 80% 程式碼，呼籲建立 AI 暫停機制",
    summary: "Anthropic 報告指出 Claude 在 2026 年 5 月撰寫超過 80% 的 Anthropic 程式碼、工程師生產力提升 8 倍，並首次公開呼籲各國建立可驗證的遞迴自我改進 AI 暫停機制。",
    body: {
      kind: "feature",
      description: "2026-06-05，Anthropic 發表《When AI Builds Itself》報告（由 Marina Favaro 與 Jack Clark 共同撰寫）：\n\n**主要發現**\n• Claude 在 2026 年 5 月撰寫了超過 80% 合併至 Anthropic 程式庫的程式碼（2025 年 2 月 Claude Code 推出前僅個位數百分比）\n• Q2 2026 典型工程師每天合併程式碼量達 2024 年的 8 倍\n• Claude Mythos Preview 在程式碼優化任務上達到約 52 倍加速\n• Claude 在開放式程式設計問題的成功率達 76%（六個月內上升 50 個百分點）\n• Claude 在研究判斷上超越人類建議的比例達 64%\n\n**政策呼籲**\n• Anthropic 首次公開呼籲各國建立可驗證的國際機制，以便在必要時暫停前沿 AI 開發\n• 表示若其他前沿實驗室在可驗證條件下同意，願意放慢或暫停開發步伐",
      links: [
        { label: "Anthropic Institute 報告", href: "https://www.anthropic.com/institute/recursive-self-improvement", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-action-security-2026-06-05",
    date: "2026-06-05",
    version: "安全公告",
    category: "bug",
    area: "security",
    product: "claude-code",
    title: "Claude Code GitHub Action 間接提示注入漏洞修補（CVSS 7.8）",
    summary: "安全研究員發現 Claude Code GitHub Action 存在間接提示注入漏洞，允許惡意 GitHub Issue 劫持公開儲存庫；已於 claude-code-action v1.0.94+ 修復。",
    body: {
      kind: "bug",
      problem: "bot 偵測機制錯誤信任所有名稱結尾為 [bot] 的帳號，任何人均可建立 GitHub App 觸發攻擊，透過植入惡意 GitHub Issue 實施間接提示注入，存取敏感環境變數與憑證。",
      rootCause: "bot 偵測邏輯過於寬鬆，Action 預設權限過廣（涵蓋程式碼、Issue、PR、Workflow）。",
      fix: "更新至 claude-code-action v1.0.94 或更新版本。",
      description: "2026-06-04～05，安全研究員 RyotaK 揭露 Claude Code GitHub Action 中的間接提示注入漏洞（CVSS v4.0: 7.8）：\n\n**攻擊方式**\n• 攻擊者建立惡意 GitHub Issue，植入隱藏指令，Claude 會執行這些指令\n• 可存取 `/proc/self/environ` 等敏感檔案，取得環境變數與憑證\n• 影響所有使用 claude-code-action 的公開儲存庫\n\n**修復措施**\n• 更新至 claude-code-action v1.0.94+\n• Anthropic 通報後 4 天內完成修補並頒發 bug bounty",
      links: [
        { label: "The Hacker News 報導", href: "https://thehackernews.com/2026/06/claude-code-github-action-flaw-let-one.html", kind: "doc" }
      ]
    }
  },
  {
    id: "code-with-claude-tokyo-2026-06-05",
    date: "2026-06-05",
    version: "活動公告",
    category: "new",
    area: "performance",
    product: "claude-code",
    title: "Code w/ Claude 東京開發者大會（2026-06-05～06）",
    summary: "Anthropic 於東京舉辦 Code w/ Claude 開發者大會，Day 1 主題演講與分組工作坊全程直播，6 月 11 日另有延伸場次。",
    body: {
      kind: "feature",
      description: "2026-06-05～06，Anthropic 於東京舉辦 Code w/ Claude 開發者大會：\n\n• 為 2026 年系列活動第二站（繼舊金山、倫敦之後）\n• Day 1 主題演講與分組工作坊全程直播\n• 展示 Claude 最新功能，包括 Managed Agents、Proactive Workflows 等\n• 2026-06-11 將舉辦延伸場次（Tokyo Extended），面向獨立開發者與早期創業者",
      links: [
        { label: "Code w/ Claude Tokyo 官方頁面", href: "https://claude.com/code-with-claude/tokyo", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.163",
    date: "2026-06-04",
    version: "v2.1.163",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.163：版本範圍管理設定、/plugin list 指令、/btw 複製快捷鍵、Hook additionalContext、背景 Session 自動更新",
    summary: "新增 requiredMinimumVersion/requiredMaximumVersion 管理設定、/plugin list 指令、/btw 的「c」複製快捷鍵、Stop/SubagentStop hook 可回傳 additionalContext、背景 session 自動升版，以及多項 Bug 修復。",
    body: {
      kind: "feature",
      description: "v2.1.163（2026-06-04）更新內容：\n\n**新功能與改善**\n• 新增 `requiredMinimumVersion` 與 `requiredMaximumVersion` 管理設定，Claude Code 版本超出允許範圍時拒絕啟動並引導使用者至核准版本\n• 新增 `/plugin list` 指令，可列出已安裝的插件，並支援 `--enabled`/`--disabled` 過濾選項\n• `/btw` 新增「c」快捷鍵，可將原始 Markdown 回答複製到剪貼板並保留格式\n• `Stop` 與 `SubagentStop` hook 現可回傳 `hookSpecificOutput.additionalContext`，提供 Claude 回饋並繼續執行而不觸發 hook 錯誤\n• Skills 新增 `\\$` 跳脫語法，可在指令內容中於數字前插入字面 `$` 字元\n• stdio MCP 伺服器於 `--resume` 時現可接收與 hook/Bash 相同的 `CLAUDE_CODE_SESSION_ID`\n• 背景 agent sessions 現在自動在背景更新至新版 Claude Code，開啟 session 時不再需要等待更新\n\n**Bug 修復**\n• 修復 `claude -p` 在背景指令未結束時無限掛起（背景 shell 現在於 stdin 關閉後約 5 秒停止）\n• 修復 `claude -p` 在 Bedrock/Vertex/Foundry 且 `CI=true` 但無 Anthropic API key 時出現「ANTHROPIC_API_KEY required」錯誤\n• 修復在 bazel 及 EDR 保護的 Go 工作流程中，`$TMPDIR` 被錯誤覆蓋導致 Bash 指令失敗\n• 修復 Windows 上 session-env 目錄具唯讀屬性或位於 OneDrive 內時出現「EEXIST: file already exists」錯誤\n• 修復組織管理的權限規則在 settings fetch 於啟動期間完成時，整個 session 未套用的問題\n• 修復背景 session 在 Claude Code 更新後重新附加時遺失執行中任務\n• 修復以 Esc 退出 agent view 時的終端機錯位與多秒掛起\n• 修復背景任務 chip 上的停止按鈕在底層程序已結束時未清除\n• 修復貼上操作後鍵盤輸入無回應（終端機丟棄結束標記時）\n• 修復 hook `if: \"Bash(...)\"` 條件在包含 `$()` 或 `$VAR` 的任意 Bash 指令上錯誤觸發\n• 修復主目錄路徑的 deny 規則（如 `Read(~/Desktop/**)`) 無法阻擋使用 `$HOME` 參照的 Bash 指令\n• 修復關閉 /mcp、/plugins 等面板對話後，轉錄中出現多餘「(no content)」行",
      links: [
        { label: "github/claude-code/v2.1.163", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.163", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.162",
    date: "2026-06-03",
    version: "v2.1.162",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.162：agents --json waitingFor 欄位、/effort 持久化確認、Slash 補全填入提示框、Remote Control 頁尾顯示",
    summary: "claude agents --json 新增 waitingFor 欄位顯示阻塞原因、/effort 確認持久化為預設、Slash 指令自動補全改為填入提示框再按 Enter 執行、遠端控制改為永久頁尾 pill、Windsurf 更名 Devin Desktop，以及多項 Bug 修復。",
    body: {
      kind: "feature",
      description: "v2.1.162（2026-06-03）更新內容：\n\n**新功能與改善**\n• `claude agents --json` 新增 `waitingFor` 欄位，顯示等待中工作階段的阻塞原因（如權限提示）\n• 明確列出 `--tools` Grep/Glob 時，在原生建構版本提供專用搜尋工具\n• `/effort` 指令現在確認所選等級是否持久化為新工作階段的預設\n• Slash 指令自動補全改為將指令填入提示框，按 Enter 才執行\n• 遠端控制（Remote Control）改為顯示為永久頁尾 pill，附帶工作階段連結\n• 將 Windsurf 更名為 Devin Desktop（出現在 `/ide`、`/terminal-setup`、`/scroll-speed` 選單）\n\n**Bug 修復**\n• 修復設定目錄為唯讀時的靜默啟動卡頓（改為使用記憶體設定啟動）\n• 修復 WebFetch 權限規則未套用於內建預批准網域\n• 修復 Windows 權限規則不匹配反斜線路徑或大小寫變體路徑\n• 修復 Esc 中斷在 stream-json/SDK 工作階段起始時被靜默丟棄\n• 修復 MCP 每伺服器 timeout 設定值低於 1000ms 被截斷為 1 秒\n• 修復 LSP workspaceSymbol 操作不返回結果（現接受 query 參數）\n• 修復 claude agents 狀態文字在 60-120 欄時截斷；現使用完整終端機寬度\n• 修復 claude agents 各種問題：附加彈跳、Ctrl+V 貼上圖片失敗、背景化後遺失對話\n• 修復傳送失敗的回覆遺失問題（現在排隊等下次工作階段啟動時傳送）\n• 改善背景服務啟動與更新驗證，等待端點安全掃描完成",
      links: [
        { label: "github/claude-code/v2.1.162", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.162", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-partner-network-services-track-2026-06-03",
    date: "2026-06-03",
    version: "官方公告",
    category: "new",
    area: "performance",
    product: "claude",
    title: "Claude Partner Network 推出服務軌道（Services Track）與夥伴中心（Partner Hub）",
    summary: "Anthropic 推出三級服務軌道（Select、Preferred、Global Premier）與 Partner Hub 入口，協助企業找到合格的 Claude 服務夥伴；自 3 月啟動以來已逾 40,000 家企業申請、10,000+ 顧問取得認證。",
    body: {
      kind: "feature",
      description: "2026-06-03，Anthropic 宣布 Claude Partner Network 新增服務軌道（Services Track）與夥伴中心（Partner Hub）：\n\n**服務軌道三級制度**\n• **Select**：需 10 位 Claude 認證實踐者、2 個上線客戶部署、1 份公開客戶背書\n• **Preferred**：需 100 位認證實踐者、15 個活躍客戶部署、3 份公開背書\n• **Global Premier**：需 1,000 位認證實踐者、跨 3 個以上地區的 100 個客戶部署、15 份公開背書，並須有具名高層主管支持的聯合業務計畫\n\n**Partner Hub**\n• 夥伴可即時查看自己在計畫要求中的進度\n• 企業客戶可依據專案規模找到最合適的服務夥伴\n• 晉級每年處理兩次（1/1 及 7/1），2026 年首年額外增設 10/1 審核\n\n**背景**\n• 自 2026 年 3 月啟動以來，已有逾 40,000 家企業申請，超過 10,000 位顧問取得 Claude 認證",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/services-track-partner-hub", kind: "doc" }
      ]
    }
  },
  {
    id: "ai-cyber-threats-mitre-report-2026-06-03",
    date: "2026-06-03",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 與 MITRE 合作發布《一年份 AI 啟用網路威脅地圖》研究報告",
    summary: "Anthropic 與 MITRE 攜手分析過去一年 AI 啟用網路威脅的模式，記錄新型攻擊手法並提供防禦建議，作為強化 Claude 安全性的政策參考依據。",
    body: {
      kind: "feature",
      description: "2026-06-03，Anthropic 發布政策研究報告《What we learned mapping a year's worth of AI-enabled cyber threats》，與 MITRE 合作完成：\n\n• 分析過去一年中 AI 如何被用於網路攻擊\n• 記錄新興攻擊模式與手法\n• 提供防禦策略建議\n• 作為 Anthropic 持續強化 Claude 安全性的政策參考依據",
      links: [
        { label: "Anthropic 官方新聞", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "project-glasswing-expansion-2026-06-02",
    date: "2026-06-02",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Project Glasswing 擴展至 15+ 國 150+ 機構，Claude Mythos 協助偵測關鍵基礎設施漏洞",
    summary: "Anthropic 將 Project Glasswing 擴展至全球 15+ 個國家約 150 個新組織，含 Okta、Samsung、SK Hynix、NATO 及 ENISA，利用 Claude Mythos 偵測電力、醫療、通訊等關鍵基礎設施的零日漏洞。",
    body: {
      kind: "feature",
      description: "2026-06-02，Anthropic 宣布 Project Glasswing 大幅擴展：\n\n• 新加入約 150 個組織，遍及澳洲、加拿大、法國、德國、義大利、瑞士、荷蘭、西班牙、比利時、瑞典、印度、日本、紐西蘭及南韓等 15+ 國\n• 涵蓋電力、水力、醫療、通訊及硬體等關鍵基礎設施領域\n• 重要夥伴包括：Okta、Samsung、SK Hynix、SK Telecom、NATO、歐盟網路安全局（ENISA）\n• Anthropic 表示多數參與機構若遭攻擊，受影響人數將超過 1 億\n• 核心技術為 Claude Mythos，Anthropic 目前最強大的模型，可在數週內識別數千個零日漏洞\n\n背景：Project Glasswing 於 2026 年 4 月初以 50 個合作夥伴（含美國政府）啟動；OpenAI 亦推出競品 GPT-5.5-Cyber 進行測試。",
      links: [
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/06/02/anthropic-scales-claude-mythos-to-critical-infrastructure-in-15-countries/", kind: "doc" },
        { label: "Anthropic 官方新聞", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "api-platform-advisor-refusal-2026-06-02",
    date: "2026-06-02",
    version: "API 更新",
    category: "enh",
    area: "performance",
    product: "claude",
    title: "Platform API：advisor tool 支援 max_tokens、refusal 請求不再計費",
    summary: "advisor tool 新增 max_tokens 參數可限制輸出上限以降低延遲；API 請求因 stop_reason: \"refusal\" 且無任何輸出時不再向用戶收費。",
    body: {
      kind: "feature",
      description: "2026-06-02，Claude Platform API 推出兩項更新：\n\n**advisor tool max_tokens 支援**\n• advisor tool 定義中新增 `tools[].max_tokens` 欄位\n• 可限制顧問模型每次呼叫的最大輸出 token 數\n• 適用於不需要完整長度回應的工作流，可顯著降低延遲與輸出 token 費用\n• 詳見文件：Capping advisor output\n\n**refusal 請求不再計費**\n• 當 API 請求因安全機制觸發返回 `stop_reason: \"refusal\"` 且 Claude 未生成任何輸出時，該請求不再計費\n• 有助於使用安全過濾的工作流降低意外費用",
      links: [
        { label: "advisor tool 文件", href: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/advisor-tool", kind: "doc" },
        { label: "API Release Notes", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.161",
    date: "2026-06-02",
    version: "v2.1.161",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.161：OTEL 標籤、agents 進度顯示、並行工具呼叫修復、Linux 剪貼板改善",
    summary: "OTEL_RESOURCE_ATTRIBUTES 值作為 metric 標籤、claude agents 顯示 done/total 進度、/mcp 折疊未使用連接器、並行 Bash 失敗不取消同批呼叫、Linux 剪貼板支援 wl-copy/xclip/xsel，以及多項 bug 修復。",
    body: {
      kind: "feature",
      description: "v2.1.161（2026-06-02）更新內容：\n\n**新功能與改善**\n• `OTEL_RESOURCE_ATTRIBUTES` 值現在作為 metric datapoints 的標籤，可依自訂維度（team、repo 等）切分使用量\n• `claude agents` 行在展開詳情前顯示 `done/total`，讓任務扇出進度一目了然\n• `/mcp` 將未使用的 claude.ai 連接器折疊在「顯示未使用連接器」列後方\n• 並行工具呼叫：同批中失敗的 Bash 命令不再取消其他仍在執行的呼叫\n• Linux 全螢幕模式剪貼板改善，新增 `wl-copy`、`xclip`、`xsel` 支援\n\n**Bug 修復**\n• 修復 `/effort` 對話框、workflow 動畫、prompt 關鍵字光暈不遵守「減少動態效果」設定\n• 修復 `forceLoginOrgUUID`/`forceLoginMethod` managed-settings 阻擋第三方 provider session\n• 修復背景子代理輸出污染 `claude -p` 的 stdout\n• 修復 `/usage-credits` 在 Team 和 Enterprise 管理員重新登入問題\n• 修復 git worktrees 中 `/autofix-pr` 出現「無法在預設分支執行」錯誤\n• 多項 OpenTelemetry、MCP、workflow agent 及渲染效能修復",
      links: [
        { label: "github/claude-code/v2.1.161", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.161", kind: "gh" }
      ]
    }
  },
  {
    id: "anthropic-ipo-sec-filing-2026-06-01",
    date: "2026-06-01",
    version: "公司公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 向 SEC 機密遞交 S-1，正式啟動 IPO 程序",
    summary: "Anthropic 於 2026 年 6 月 1 日機密遞交 S-1 至 SEC，目標估值 1.75–1.8 兆美元，最高可能籌資 750 億美元，最早或於 2026 年 10 月上市。",
    body: {
      kind: "feature",
      description: "Anthropic 正式向美國證券交易委員會（SEC）機密遞交 S-1 草稿，啟動 IPO 程序。\n\n主要細節：\n• 機密遞交日期：2026 年 6 月 1 日\n• 目標估值：1.75–1.8 兆美元\n• 計畫最高籌資：750 億美元（若實現，將是史上最大 IPO 之一）\n• 預計上市時間：最早 2026 年 10 月\n• 聘請 Wilson Sonsini 律師事務所（曾協助 Google 2004 年 IPO）協助上市準備\n\n背景：Anthropic 於機密申請前完成 H 輪融資，以 9650 億美元估值籌得 650 億美元，年化營收達 470 億美元。Claude 現為全球最廣泛使用的 AI 助理之一。",
      links: [
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/06/01/anthropic-ipo-s1-prospectus.html", kind: "doc" },
        { label: "Anthropic 官方新聞", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.158",
    date: "2026-05-30",
    version: "v2.1.158",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.158：Auto mode 擴展至 Bedrock、Vertex 和 Foundry",
    summary: "Auto mode 現已在 Bedrock、Vertex 和 Foundry 上支援 Opus 4.7 和 Opus 4.8，透過設定 CLAUDE_CODE_ENABLE_AUTO_MODE=1 環境變數啟用。",
    body: {
      kind: "feature",
      description: "v2.1.158（2026-05-30）：\n\n• Auto mode 現已在 Bedrock、Vertex 和 Foundry 上支援 Claude Opus 4.7 和 Opus 4.8\n• 設定環境變數 `CLAUDE_CODE_ENABLE_AUTO_MODE=1` 即可啟用\n• 此功能讓使用第三方雲端平台的用戶也能享受 Auto mode 的智能任務處理能力",
      links: [
        { label: "github/claude-code/v2.1.158", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.158", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.157",
    date: "2026-05-29",
    version: "v2.1.157",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.157：Plugin 自動載入、claude plugin init、代理設定改善",
    summary: ".claude/skills 目錄 Plugin 自動載入、新增 claude plugin init 指令、/plugin 自動補全、claude agents 支援 settings.json agent 欄位、多項 bug 修復（WSL 圖片、VS Code 貼上等）。",
    body: {
      kind: "feature",
      description: "v2.1.157（2026-05-29）帶來以下更新：\n\n**Plugin 系統**\n• `.claude/skills` 目錄中的 Plugin 現在自動載入，無需透過 marketplace\n• 新增 `claude plugin init <name>` 指令，可在 `.claude/skills` 中快速建立新 Plugin\n• 新增 `/plugin` 參數自動補全（子指令、已安裝 Plugin 名稱、marketplace Plugin）\n\n**代理與 Worktree**\n• `claude agents`：dispatched sessions 現在遵從 `settings.json` 中的 `agent` 欄位，可用 `--agent <name>` 覆蓋\n• `EnterWorktree` 現在可在 session 中途切換 Claude 管理的 worktrees\n• Claude 管理的 worktrees 完成後保持解鎖，方便手動清理\n\n**Bug 修復**\n• 修復零位元組或損壞圖片讓請求崩潰的問題（現在轉為文字佔位符）\n• 修復 auto/bypass-permissions 模式下出現沙箱網路權限提示\n• 修復背景代理 worktrees 在 30 天保留掃描後被孤立\n• 修復休眠/喚醒後背景 session 重連不報告正確日期\n• 修復 tmux 中 copy-on-select 無法到達系統剪貼板\n• 修復 `--resume` 不報告仍在執行中的背景子代理\n• 修復 `/model` 選擇器顯示錯誤的「有較新版本」提示\n• 修復批准 managed-settings 安全對話框後終端機凍結\n• 修復在 VS Code/Cursor/Windsurf 中右鍵貼上複製剪貼板\n• 修復 WSL 圖片貼上問題，新增 Windows 檔案總管拖放支援\n\n**其他**\n• `/terminal-setup` 現在在整合終端機中停用 GPU 加速以防止亂碼\n• 移除「bash 指令將在沙箱中執行」啟動橫幅\n• 新增「Workflow keyword trigger」設定防止提示中的「workflow」觸發動態工作流程",
      links: [
        { label: "github/claude-code/v2.1.157", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.157", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.156",
    date: "2026-05-29",
    version: "v2.1.156",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.156：緊急修復 Opus 4.8 thinking blocks API 錯誤",
    summary: "緊急修復在使用 Claude Opus 4.8 時，thinking blocks 被修改導致 API 呼叫失敗的問題。",
    body: {
      kind: "bug",
      description: "v2.1.156（2026-05-29）緊急修復：\n\n• 修復在使用 Claude Opus 4.8 時，thinking blocks 被修改導致 API 錯誤的問題\n• Opus 4.8 的 thinking blocks 具有不可修改的限制，舊版邏輯未正確處理此情況，導致 API 呼叫失敗",
      problem: "使用 Claude Opus 4.8 時，若 thinking blocks 被修改，會導致 API 呼叫失敗並返回錯誤",
      rootCause: "Opus 4.8 的 thinking blocks 不可被修改，但舊版邏輯未正確遵守此限制",
      fix: "修正 thinking blocks 的處理邏輯，確保在 Opus 4.8 下不修改 thinking blocks",
      links: [
        { label: "github/claude-code/v2.1.156", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.156", kind: "gh" }
      ]
    }
  },
  {
    id: "api-platform-aws-managed-agents-2026-05-29",
    date: "2026-05-29",
    version: "API 更新",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "Claude Platform on AWS：Managed Agents 完整功能上線",
    summary: "Claude Managed Agents 的 webhooks、多代理協作及自建沙箱現已在 Claude Platform on AWS 可用，並新增 AnthropicSelfHostedEnvironmentAccess 受管 IAM 策略。",
    body: {
      kind: "feature",
      description: "2026-05-29，Anthropic 宣布 Claude Managed Agents 的三項主要功能現已在 Claude Platform on AWS 上全面支援：\n\n• **Webhooks**：可訂閱 Managed Agents 的 session 和 vault 生命週期事件通知\n• **多代理協作（Multiagent orchestration）**：支援複雜的多代理任務協調編排\n• **自建沙箱（Self-hosted sandboxes）**：允許在自己控制的環境中執行代理工具，並連接私有 MCP 服務，兼顧企業安全邊界\n\n**新增 IAM 支援**\n• 新增對應的 IAM actions\n• 提供 `AnthropicSelfHostedEnvironmentAccess` 受管策略，簡化 AWS 環境中的權限管理",
      links: [
        { label: "Claude Platform on AWS 文件", href: "https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws", kind: "doc" },
        { label: "IAM Actions 參考", href: "https://platform.claude.com/docs/en/api/claude-platform-on-aws-iam-actions", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-opus-4-8",
    date: "2026-05-28",
    version: "Claude Opus 4.8",
    category: "new",
    area: "model",
    product: "claude",
    title: "Claude Opus 4.8 正式發布：更聰明、更誠實、動態工作流程",
    summary: "Claude Opus 4.8 正式發布，Agentic coding 分數從 64.3% 升至 69.2%，比 Opus 4.7 少 4 倍讓代碼缺陷通過未標記；Fast mode 便宜 3 倍；新增動態工作流程；預告 Claude Mythos 數週內廣泛發布。",
    body: {
      kind: "feature",
      description: "2026-05-28，Anthropic 發布 Claude Opus 4.8，帶來以下重要更新：\n\n**效能提升**\n• Agentic coding 分數：64.3% → 69.2%\n• 多學科工具推理：54.7% → 57.9%\n• 知識工作分數：1753 → 1890\n• 比 Opus 4.7 少 4 倍讓代碼缺陷通過未標記\n• Super-Agent 基準測試中唯一完成所有案例的模型\n\n**定價與可用性**\n• 定價同 Opus 4.7：輸入 $5/M token、輸出 $25/M token\n• Fast mode（2.5 倍速）：輸入 $10/M、輸出 $50/M（比 4.7 便宜 3 倍）\n• API model ID：`claude-opus-4-8`\n• 可在 Claude Pro/Max/Team/Enterprise、Claude Platform、AWS、Google Cloud、Microsoft Foundry 使用\n\n**新功能**\n• 動態工作流程（Dynamic Workflows）：可在 Claude Code 中協調數百個並行代理\n• Messages API 新增支援在訊息陣列中插入 system 條目\n• claude.ai 新增努力控制（Effort Control）：Faster/Smarter 滑桿\n\n**Claude Mythos 預告**\n• Anthropic 表示 Mythos 等級模型將在數週內廣泛發布\n• 目前僅在有限的網路安全使用場景提供 Claude Mythos Preview",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/claude-opus-4-8", kind: "doc" },
        { label: "Claude Opus 4.8 模型頁", href: "https://www.anthropic.com/claude/opus", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.154",
    date: "2026-05-28",
    version: "v2.1.154",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.154：Opus 4.8 預設、動態工作流程、Fast mode 降價",
    summary: "Opus 4.8 成為預設模型並啟用高努力模式；新增動態工作流程（Dynamic Workflows）可協調百個並行代理；Fast mode 降至 2x 費率換 2.5 倍速度；背景 Session 支援 shell 指令；Plugin 可設 defaultEnabled: false；多項 bug 修復。",
    body: {
      kind: "feature",
      description: "v2.1.154（2026-05-28）帶來以下更新：\n\n**Opus 4.8 整合**\n• Opus 4.8 成為預設模型，自動啟用高努力模式（`/effort xhigh`）\n• Fast mode 降至 2x 費率換 2.5 倍速度（相比 Opus 4.7 大幅降價）\n• Lean system prompt 現在成為所有模型預設值（Haiku/Sonnet/Opus 4.7 及更早版本除外）\n\n**動態工作流程**\n• 新增 Dynamic Workflows：向 Claude 請求建立工作流程，可在背景協調數十至數百個代理\n• 使用 `/workflows` 查看工作流程執行記錄\n\n**CLI 改善**\n• 背景 Session：輸入 `! <command>` 以背景 session 執行 shell 指令\n• `/logout` 現在正確登出而非建立背景 session\n• 背景控制（`←←`）現在支援 Bedrock、Vertex、Foundry\n• Chrome 整合：透過 `/chrome` → 「Select browser…」選擇連線的瀏覽器\n• `/effort` 滑桿標籤從「Speed/Intelligence」改為「Faster/Smarter」\n\n**Plugin 與 MCP 更新**\n• Plugin 可在 `plugin.json` 宣告 `defaultEnabled: false`，透過 `/plugin` 啟用\n• Plugin Discover 分頁現在標注與當前目錄相關的建議 plugin\n• Stdio MCP server 收到 `CLAUDE_CODE_SESSION_ID` 和 `CLAUDECODE=1` 環境變數\n\n**Bug 修復**\n• 修復 `rm -rf $HOME/` 結尾斜線的危險路徑封鎖\n• 修復 $TMPDIR 在沙箱/非沙箱 Bash 之間不一致的問題\n• 修復 claude agents 中文字難以閱讀的問題\n• 修復背景代理完成通知導致上下文提前耗盡\n• 修復子代理繞過 worktree 隔離保護的問題\n• 修復 macOS 上孤立的 claude --bg-pty-host 進程佔用 100% CPU",
      links: [
        { label: "github/claude-code/v2.1.154", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.154", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.153",
    date: "2026-05-28",
    version: "v2.1.153",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.153：Git LFS skipLfs、claude agents 自動補全、/model 預設儲存",
    summary: "新增 skipLfs 選項跳過 Git LFS 下載；claude agents 自動補全現在建議原生 slash commands 和技能；/model 儲存選擇為新 session 預設；多項背景 session 和 MCP server 修復。",
    body: {
      kind: "feature",
      description: "v2.1.153（2026-05-28）帶來以下更新：\n\n**Git 整合**\n• 新增 `skipLfs` 選項至 GitHub/git plugin 市集來源，可跳過 clone/update 時的 Git LFS 下載\n\n**CLI 改善**\n• claude agents 自動補全現在建議原生 slash commands 和 bundled skills\n• `/model` 指令現在將選擇儲存為新 session 的預設值\n• 當 npm global install 無法自動更新時，顯示一次性通知\n• Status line 指令現在收到 `COLUMNS` 和 `LINES` 環境變數，可依終端機寬度調整輸出\n\n**macOS 改善**\n• macOS 背景代理現在在「隱私權與安全性」中顯示為「Claude Code」，且升級後保留權限授予\n\n**Bug 修復**\n• 修復背景 session、MCP server 和 Windows PowerShell 相關問題",
      links: [
        { label: "github/claude-code/v2.1.153", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.153", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.152",
    date: "2026-05-27",
    version: "v2.1.152",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.152：/code-review --fix 直接修改工作目錄、/reload-skills 及 Auto mode 改善",
    summary: "/code-review --fix 可將審查結果直接套用至工作目錄；/simplify 呼叫 /code-review --fix；新增 /reload-skills 指令；MessageDisplay hook；Auto mode 取消強制選擇加入；Vim 模式 NORMAL 下 / 開啟反向歷史搜尋；Thinking summaries 最短顯示 3 秒。",
    body: {
      kind: "feature",
      description: "v2.1.152（2026-05-27）帶來以下更新：\n\n**代碼審查**\n• `/code-review --fix` 現在可直接將修改套用到工作目錄，呈現可重用性、簡化與效率建議\n• `/simplify` 指令現在呼叫 `/code-review --fix`\n\n**Skills 與指令**\n• Skills 和 slash commands 可在 frontmatter 設定 `disallowed-tools`，暫時移除工具\n• 新增 `/reload-skills` 指令，無需重啟即可重新掃描 skills 目錄\n• `SessionStart` hook 可設定 session 標題（`hookSpecificOutput.sessionTitle`）\n\n**Session 管理**\n• 新增 `MessageDisplay` hook 事件，可轉換或隱藏助手訊息文字\n• Auto mode 不再需要選擇加入同意\n\n**模型與備援**\n• 當主要模型找不到時，Claude Code 切換到 `--fallback-model` 繼續工作階段\n• 新增 `pluginSuggestionMarketplaces` 管理設定，管理員可允許清單中的 plugin 市集\n\n**UI/UX 改善**\n• Vim 模式：NORMAL 模式下 `/` 開啟反向歷史搜尋\n• Thinking summaries 最短顯示 3 秒，以 Markdown 渲染，上限 10 行\n• 修復長時間 session 的終端機樣式退化問題\n• 修復 Markdown 表格渲染及工具結果連結處理",
      links: [
        { label: "github/claude-code/v2.1.152", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.152", kind: "gh" }
      ]
    }
  },
  {
    id: "anthropic-korea-seoul-2026-05-26",
    date: "2026-05-26",
    version: "官方公告",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "Anthropic 任命韓國代表董事，首爾辦公室即將開幕",
    summary: "Anthropic 任命 KiYoung Choi 擔任韓國法人代表，首爾辦公室即將開幕，成為亞太第三個辦公室；韓國 Claude Code 週活躍用戶四個月成長六倍。",
    body: {
      kind: "feature",
      description: "2026-05-26，Anthropic 宣布任命 KiYoung Choi 擔任韓國法人代表，並計劃在首爾開設辦公室：\n\n• 首爾辦公室將成為 Anthropic 亞太地區第三個辦公室（繼東京和班加羅爾之後）\n• 韓國用戶在全球排名前五，無論總使用量或人均使用量均表現亮眼\n• Claude Code 在韓國的週活躍用戶在四個月內成長六倍\n• 此舉與韓國政府將 AI 列為國家戰略產業的方向一致",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/seoul-becomes-third-anthropic-office-in-asia-pacific", kind: "doc" }
      ]
    }
  },
  {
    id: "chris-olah-pope-leo-encyclical-2026-05-25",
    date: "2026-05-25",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Chris Olah 出席梵蒂岡教宗通諭發表，呼籲 AI 全球道德監督",
    summary: "Anthropic 共同創辦人 Chris Olah 受邀於梵蒂岡出席教宗 Leo XIV 通諭「Magnifica humanitas」發表，強調 AI 發展需要外部問責與宗教社會參與。",
    body: {
      kind: "feature",
      description: "2026-05-25，Anthropic 共同創辦人 Chris Olah 受邀出席梵蒂岡，在教宗 Leo XIV 第一份通諭「Magnifica humanitas：人工智慧時代保護人類」的發表會上演說：\n\n• 強調 AI 實驗室面臨商業與地緣政治壓力，需要來自這些壓力之外的獨立監督\n• 指出 AI 模型是在人類思想與語言上「生長」出來的，其內部結構映射出人類神經科學與情感狀態\n• 呼籲確保 AI 利益惠及全球而非集中在少數富裕國家\n• 邀請宗教組織、公民社會、學者和政府認真參與 AI 倫理討論",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/chris-olah-pope-leo-encyclical", kind: "doc" },
        { label: "CNN 報導", href: "https://www.cnn.com/2026/05/25/europe/pope-leo-ai-encyclical-magnifica-humanitas-intl", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.150",
    date: "2026-05-23",
    version: "v2.1.150",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.150：內部基礎設施改善",
    summary: "本版本僅包含內部基礎設施改善，無使用者可見的功能變更。",
    body: {
      kind: "feature",
      description: "v2.1.150（2026-05-23）：內部基礎設施改善，本版本無使用者可見的功能或行為變更。",
      links: [
        { label: "github/claude-code/v2.1.150", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.150", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.149",
    date: "2026-05-22",
    version: "v2.1.149",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.149：/usage 分類明細、/diff 鍵盤捲動及多項修復",
    summary: "/usage 新增分類費用明細（skills/subagents/plugins/MCP）；/diff 視圖支援鍵盤捲動；Markdown 支援 GFM 任務清單核取方塊；Enterprise 新增 allowAllClaudeAiMcps 設定；修復 PowerShell 權限繞過、git worktree 沙箱及 macOS find 指令耗盡系統檔案表問題。",
    body: {
      kind: "feature",
      description: "v2.1.149（2026-05-22）帶來以下更新：\n\n**新功能**\n• **`/usage` 分類明細**：現在顯示 skills、subagents、plugins 及 MCP server 的個別費用分類\n• **`/diff` 鍵盤捲動**：詳細視圖支援方向鍵、j/k、PgUp/PgDn、Space、Home/End 捲動\n• **GFM 任務清單**：Markdown 現在渲染 `- [ ] todo` / `- [x] done` 核取方塊\n• **Enterprise 設定**：新增 `allowAllClaudeAiMcps` 管理設定\n\n**Bug 修復**\n• 修復 PowerShell 使用內建 `cd` 函數可繞過權限提示的安全問題\n• 修復 git worktree 沙箱寫入允許清單問題\n• 修復 `find` 指令在大型目錄下耗盡 macOS 系統檔案表的問題\n• 各項 UI 及權限修復",
      links: [
        { label: "github/claude-code/v2.1.149", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.149", kind: "gh" }
      ]
    }
  },
  {
    id: "project-glasswing-update-2026-05-22",
    date: "2026-05-22",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Project Glasswing 初步更新：發現逾萬個高危漏洞",
    summary: "Anthropic 發布 Project Glasswing 初步成果報告，AI 輔助安全測試已發現超過 10,000 個高或嚴重嚴重性漏洞，Cloudflare 與 Mozilla 等合作夥伴已回報顯著成效。",
    body: {
      kind: "feature",
      description: "2026-05-22，Anthropic 發布 Project Glasswing 初步更新，主要成果如下：\n\n• **規模**：AI 輔助安全測試已在廣泛使用的軟體系統中發現超過 10,000 個高或嚴重嚴重性漏洞\n• **Cloudflare**：內部測試發現約 2,000 個 bug，包含 400 個高或嚴重嚴重性漏洞，且誤報率低於傳統人工測試\n• **Mozilla**：在 Firefox 150 測試中修復 271 個漏洞，效果優於使用 Claude Opus 4.6 的早期測試\n• **部分合作夥伴**回報 bug 發現率提升超過 10 倍\n• **未來計劃**：Anthropic 表示將與美國及盟友政府等重要夥伴擴大合作範圍，並在開發出更強保護機制後計劃普及 Mythos 級別模型",
      links: [
        { label: "Project Glasswing 官方頁面", href: "https://www.anthropic.com/glasswing", kind: "doc" },
        { label: "Benzinga 報導", href: "https://www.benzinga.com/markets/private-markets/26/05/52759147/anthropics-project-glasswing-finds-more-than-10000-critical-bugs-expands-to-additional-pa", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.148",
    date: "2026-05-22",
    version: "v2.1.148",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.148：修復 Bash 工具退出碼 127 回歸問題",
    summary: "修復 v2.1.147 引入的回歸：Bash 工具對每個指令都回傳退出碼 127 的問題。",
    body: {
      kind: "bug",
      description: "v2.1.148（2026-05-22）修復 v2.1.147 引入的回歸問題：\n\n• **問題**：Bash 工具對部分使用者的每個指令都回傳退出碼 127（command not found）\n• **原因**：v2.1.147 更新引入的回歸\n• **修復**：恢復正確的退出碼行為",
      links: [
        { label: "github/claude-code/v2.1.148", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.148", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.147",
    date: "2026-05-21",
    version: "v2.1.147",
    category: "enh",
    area: "slash-command",
    product: "claude-code",
    title: "v2.1.147：/code-review 指令、固定背景 Session 及多項修復",
    summary: "將 /simplify 更名為 /code-review（支援努力等級如 /code-review high 及 --comment 旗標）；固定背景 Session（Ctrl+T）在閒置時保持存活；改善自動更新器；修復企業登入、Windows PowerShell 及多項 UI 問題。",
    body: {
      kind: "feature",
      description: "v2.1.147（2026-05-21）帶來以下更新：\n\n**新功能**\n• **固定背景 Session**：`claude agents` 中按 `Ctrl+T` 固定的 session 在閒置時保持存活，更新時原地重啟，僅在記憶體壓力下才先於非固定 session 釋放\n• **`/simplify` 更名為 `/code-review`**：支援可選努力等級（如 `/code-review high`）及 `--comment` 旗標，可直接在 GitHub PR 發佈內嵌評論\n• **改善自動更新器**：可重試暫時性網路失敗，並在失敗時回報具體錯誤類別及作業系統錯誤碼\n\n**效能改善**\n• 大型檔案編輯的 diff 渲染效能提升\n\n**Bug 修復**\n• 修復企業登入限制（`forceLoginOrgUUID`、`forceLoginMethod`）的執行問題\n• 修復 `&` 字元在指令輸出中顯示為 `&amp;` 的問題\n• 修復未知 slash 指令在無頭/SDK 模式顯示錯誤訊息的問題\n• 修復 PowerShell 工具在 Windows 上遺失輸出及退出碼錯誤的問題\n• Prompt 歷史不再記錄連續重複項目",
      links: [
        { label: "github/claude-code/v2.1.147", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.147", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.146",
    date: "2026-05-21",
    version: "v2.1.146",
    category: "bug",
    area: "mcp",
    product: "claude-code",
    title: "v2.1.146：MCP 分頁修復、Auto 模式改善及 Windows PowerShell 修復",
    summary: "修復 MCP 分頁超過第 1 頁項目遺失的問題；Auto 模式不再不當抑制明確需要的 AskUserQuestion；修復 winget 安裝 Windows PowerShell 「command line is invalid」錯誤；/simplify 更名為 /code-review。",
    body: {
      kind: "bug",
      description: "v2.1.146（2026-05-21）帶來以下更新：\n\n• **`/simplify` 更名為 `/code-review`**：支援可選努力等級參數（如 `/code-review high`）\n• **Auto 模式改善**：修復 Auto 模式在使用者或 skill 明確依賴 `AskUserQuestion` 時不當抑制的問題\n• **Windows PowerShell 修復**：修復透過 winget/Microsoft Store 安裝時出現「command line is invalid」錯誤的問題\n• **MCP 分頁修復**：修復 MCP 分頁中超過第 1 頁的項目被遺漏的問題",
      links: [
        { label: "github/claude-code/v2.1.146", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.146", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-compliance-integrations-2026-05-21",
    date: "2026-05-21",
    version: "產品更新",
    category: "new",
    area: "security",
    product: "claude",
    title: "Claude 新增安全合規工具整合",
    summary: "IT 與安全團隊現可透過主流安全和合規平台整合統一治理 Claude 的使用，與管理其他企業應用程式的方式相同。",
    body: {
      kind: "feature",
      description: "2026-05-21，Anthropic 宣布 Claude 現在支援更多安全與合規工具整合：\n\n• IT 與安全團隊可透過主流安全及合規平台的整合，以統一方式治理 Claude 的使用\n• 使用與管理技術堆疊中其他應用程式相同的治理流程\n• 協助企業在部署 Claude 時符合既有的安全政策與合規要求",
      links: [
        { label: "Claude 產品 Release Notes", href: "https://support.claude.com/en/articles/12138966-release-notes", kind: "doc" }
      ]
    }
  },
  {
    id: "code-with-claude-london-2026-05-20",
    date: "2026-05-20",
    version: "社群活動",
    category: "new",
    area: "desktop",
    product: "claude-code",
    title: "Code with Claude London 開發者大會（5/20-21）",
    summary: "Anthropic 在倫敦舉辦 Code with Claude 開發者大會，提供代理人基礎設施工作坊、現場示範及主題演講直播，為 2026 年繼舊金山後的第二站。",
    body: {
      kind: "feature",
      description: "2026-05-20，Anthropic 在倫敦舉辦 Code with Claude 開發者大會（5/20-21）：\n\n• **活動形式**：工作坊（hands-on workshops）、現場示範（live demos）及主題演講，Day 1 主題演講全程網路直播\n• **主題重點**：代理人基礎設施（agent infrastructure）、企業級代理人開發、多代理人編排等\n• **特色廠商**：Asana、Cursor、GitHub、Replit、Vercel 等企業分享生產環境代理人設計經驗\n• **背景**：此為 2026 年 Code with Claude 巡迴活動第二站（第一站：舊金山 5/6；下一站：東京 6/5-6）\n• **注意**：本次活動聚焦代理人開發實作，未發布新模型",
      links: [
        { label: "Code with Claude London 活動頁面", href: "https://claude.com/code-with-claude/london-extended", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.145",
    date: "2026-05-19",
    version: "v2.1.145",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.145：新增 claude agents --json、安全漏洞修復及多項 UI 改善",
    summary: "新增 claude agents --json 以 JSON 格式列出執行中 session；修復裸變數賦值可繞過權限提示的安全漏洞；OTEL span 新增 agent_id/parent_agent_id；插件探索頁面可於安裝前預覽完整功能清單；修復多項 UI/UX 問題。",
    body: {
      kind: "feature",
      description: "v2.1.145（2026-05-19）帶來以下更新：\n\n**新功能**\n• **`claude agents --json`**：以 JSON 格式列出所有執行中的 Claude session，方便 tmux-resurrect、狀態列及 session 選擇器等腳本整合\n• **OTEL span 改善**：`claude_code.tool` span 新增 `agent_id` 與 `parent_agent_id` 屬性；修復 trace parenting，讓背景 subagent span 正確巢狀於分配的 Agent tool span 下\n• **狀態列 JSON 強化**：偵測到 GitHub repo 與 PR 資訊時自動加入輸出\n• **插件探索改善**：`/plugin` Discover 與 Browse 頁面現在於安裝前即可顯示插件的指令、agents、skills、hooks 及 MCP/LSP servers\n• **Agent view 分頁標題**：`claude agents` 分頁標題現在顯示等待輸入的 agent 數量\n• **全螢幕滑鼠支援**：全螢幕模式下的 slash 指令與 @-mention 建議清單支援滑鼠懸停與點擊\n• **Hook 輸入欄位**：Stop 與 SubagentStop hook 輸入現在包含 `background_tasks` 與 `session_crons` 欄位\n\n**安全修復**\n• 修復 Bash 指令中裸變數賦值（如 `VAR=value`）可繞過非允許清單環境變數的權限提示問題\n\n**Bug 修復**\n• 修復 MCP prompt slash 指令顯示原始伺服器驗證錯誤的問題\n• 修復終端大小改變或重新聚焦後 spinner 凍結的問題\n• 修復 Windows PowerShell 5.1 中跨專案 resume 提示失敗問題\n• 修復 Agent view reply pane 的語音推播功能\n• 修復任務清單以隨機順序渲染的問題\n• 修復 `gh pr create` 後 PR badge 未立即更新的問題\n• 修復 Agent Teams 中含非 ASCII 名稱的成員觸發 API 呼叫失敗問題\n• 修復 `/review` 使用已棄用 `projectCards` GraphQL query 的問題\n• 修復使用 `context: fork` 的 skill 可能無限自我調用的問題\n• Read 工具改為回傳截斷的首頁並附帶「PARTIAL view」提示，而非在全檔讀取超過 token 限制時直接報錯",
      links: [
        { label: "github/claude-code/v2.1.145", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.145", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.144",
    date: "2026-05-19",
    version: "v2.1.144",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.144：背景 Session /resume 支援、/model 僅影響當前 Session 及多項修復",
    summary: "新增 /resume 支援背景 session（以 bg 標記顯示）；/model 改為僅影響當前 session（按 d 設定預設）；「extra usage」更名為「usage credits」；修復 API 無法連線時長達 75 秒啟動卡頓（改為 15 秒逾時）及多項終端顯示問題。",
    body: {
      kind: "feature",
      description: "v2.1.144（2026-05-19）帶來以下更新：\n\n**新功能**\n• **背景 Session `/resume` 支援**：透過 `claude --bg` 或 agent view 啟動的背景 session 現在會出現在互動式 session 旁，並以 `bg` 標記區別；同時新增完成通知中的已用時間顯示\n• **插件時間戳記**：`/plugin` browse 與 discover 頁面新增顯示插件最後更新時間\n• **`/model` 行為調整**：`/model` 現在只改變當前 session 的模型；在模型選擇器中按 `d` 可設定新 session 的預設值\n• **名稱更新**：「extra usage（額外使用量）」全面更名為「usage credits（使用點數）」（舊名稱仍可相容使用）\n\n**Bug 修復**\n• 修復 `api.anthropic.com` 無法連線時 CLI 啟動最長卡頓 75 秒的問題（現改為 15 秒逾時）\n• 修復錯過視窗大小調整事件後導致終端輸出亂碼的問題\n• 修復長時間 session 中的漸進式終端顯示損毀問題\n• 修復 macOS 在受 Full Disk Access 保護的資料夾執行時背景 session 崩潰（exit 1 before init）的問題\n• 修復讀取副檔名不符的圖片檔案時導致對話不可恢復的問題\n• 修復搜尋期間偶發的工具錯誤\n• 修復 `/branch`、模型選擇、Bedrock/Vertex 用戶、MCP server 及 session 管理的多項問題",
      links: [
        { label: "github/claude-code/v2.1.144", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.144", kind: "gh" }
      ]
    }
  },
  {
    id: "kpmg-anthropic-2026-05-19",
    date: "2026-05-19",
    version: "官方公告",
    category: "new",
    area: "performance",
    product: "claude",
    title: "KPMG 與 Anthropic 宣布全球戰略聯盟，逾 27.6 萬員工將使用 Claude",
    summary: "KPMG 與 Anthropic 簽署全球戰略聯盟協議，KPMG 逾 27.6 萬名員工將透過 Digital Gateway 平台使用 Claude，初期聚焦稅務及私募股權客戶，並推出 Claude Code 驅動的 KPMG Blaze 新產品。",
    body: {
      kind: "feature",
      description: "2026-05-19，KPMG 與 Anthropic 宣布全球戰略聯盟，以下為主要內容：\n\n• **聯盟規模**：KPMG 全球逾 27.6 萬名員工將可使用 Anthropic 的 Claude AI 能力\n• **Digital Gateway 整合**：Claude 嵌入 KPMG 全球 AI 平台 Digital Gateway（建構於 Microsoft Azure 上），客戶可即時建立代理人工作流程\n• **初期重點**：聚焦稅務客戶與私募股權（PE）公司；Anthropic 同時將 KPMG 列為 PE 領域首選合作夥伴\n• **新產品 KPMG Blaze**：嵌入 Claude Code 協助客戶加速 IT 現代化、縮短開發週期，並加快 AI 驅動技術系統的交付速度\n• **安全治理**：聯盟全程嵌入網路安全、風險及 AI 保證機制\n• **意義**：繼 PwC 之後，四大會計師事務所中再有一家全面採用 Claude，反映 Claude 在專業服務領域的快速滲透",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/anthropic-kpmg", kind: "doc" },
        { label: "KPMG 官方新聞稿", href: "https://kpmg.com/xx/en/media/press-releases/2026/05/kpmg-and-anthropic-sign-global-alliance-and-launch-digital-gateway-powered-by-claude.html", kind: "doc" }
      ]
    }
  },
  {
    id: "widening-frontier-ai-2026-05-19",
    date: "2026-05-19",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 發表〈Widening the conversation on frontier AI〉",
    summary: "Anthropic 發文呼籲擴大社會各界對前沿 AI 開發的公共對話，主張 AI 治理不應只在技術圈內討論，需要更廣泛的公民參與。",
    body: {
      kind: "feature",
      description: "2026-05-19，Anthropic 在官方部落格發表〈Widening the conversation on frontier AI〉，重點包括：\n\n• 呼籲擴大社會各界對前沿 AI 開發決策的參與\n• 主張 AI 發展議題不應只由技術圈內部討論，需要更廣泛的公民對話\n• 此文章與 Code with Claude London 開發者大會（5/19-21）同期發表，顯示 Anthropic 積極強化其在 AI 治理對話中的公共形象",
      links: [
        { label: "Anthropic 官方部落格", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "karpathy-joins-anthropic-2026-05-19",
    date: "2026-05-19",
    version: "官方公告",
    category: "new",
    area: "model",
    product: "claude",
    title: "Andrej Karpathy 宣布加入 Anthropic 預訓練團隊",
    summary: "OpenAI 共同創辦人、前 Tesla AI 總監 Andrej Karpathy 宣布加入 Anthropic 預訓練團隊，協助建立利用 Claude 加速預訓練研究的新團隊。",
    body: {
      kind: "feature",
      description: "2026-05-19，Andrej Karpathy 宣布加入 Anthropic：\n\n• **職位**：加入 Anthropic 預訓練（pre-training）團隊，由 Nick Joseph 領導\n• **新任務**：協助建立以 Claude 加速預訓練研究的全新團隊，探索 AI 自動化 AI 開發的可能性\n• **背景**：Karpathy 為 OpenAI 共同創辦人、前 Tesla AI 總監（主導 Autopilot 電腦視覺研發），2022 年離開 Tesla 後持續從事 AI 教育推廣\n• **意義**：這是 Anthropic 在 AI 人才競爭中的重大勝利，顯示 Anthropic 在頂尖研究者中的吸引力持續提升\n• **個人聲明**：Karpathy 表示「未來幾年的 LLM 前沿尤為關鍵」，並表示將繼續從事教育推廣工作",
      links: [
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/05/19/openai-co-founder-andrej-karpathy-joins-anthropics-pre-training-team/", kind: "doc" },
        { label: "Axios 報導", href: "https://www.axios.com/2026/05/19/anthropic-openai-karpathy-andrej-claude", kind: "doc" }
      ]
    }
  },
  {
    id: "api-mcp-tunnels-managed-agents-2026-05-19",
    date: "2026-05-19",
    version: "API 更新",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "Claude Platform 新增 MCP Tunnels 研究預覽與 Managed Agents 四項更新",
    summary: "Claude Platform 發布四項更新：MCP Tunnels 研究預覽（連接私有網路 MCP 伺服器）、Managed Agents 自托管沙盒、作用中 session 支援更新 MCP 設定、大型輸出自動溢出至檔案（超過 10 萬 token）。",
    body: {
      kind: "feature",
      description: "2026-05-19，Claude Platform 發布以下 API 更新：\n\n**1. MCP Tunnels 研究預覽**\n• 新功能 MCP tunnels 現提供研究預覽，可連接私有網路中的 MCP 伺服器\n• 適合需要存取企業內網或本地服務的代理人工作流程\n\n**2. Managed Agents 自托管沙盒**\n• Claude Managed Agents 現提供自托管沙盒（Self-hosted Sandboxes）選項\n• 可作為 Anthropic 基礎設施執行工具的替代方案，讓企業在自有環境中執行工具\n\n**3. 作用中 Session 更新 MCP 設定**\n• Claude Managed Agents 現支援在作用中 session 即時更新代理人的 MCP 伺服器與工具設定\n• 無需重新建立 session 即可動態調整工具配置\n\n**4. 大型輸出自動溢出**\n• `agent_toolset` 與 MCP 工具輸出超過 10 萬 token 時，現自動溢出（spill）至沙盒中的檔案\n• 模型接收截斷預覽並附檔案路徑，可從該路徑讀取完整內容",
      links: [
        { label: "Claude Platform 發布說明", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" },
        { label: "MCP Tunnels 文件", href: "https://platform.claude.com/docs/en/agents-and-tools/mcp-tunnels/overview", kind: "doc" },
        { label: "自托管沙盒文件", href: "https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-acquires-stainless-2026-05-18",
    date: "2026-05-18",
    version: "官方公告",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "Anthropic 以約 3 億美元收購 SDK 工具商 Stainless",
    summary: "Anthropic 宣布收購 SDK/CLI/MCP server 生成工具商 Stainless，強化代理人連線能力與開發者體驗；Stainless 現有托管服務將陸續關閉，現有客戶保有已生成 SDK 的完整所有權。",
    body: {
      kind: "feature",
      description: "2026-05-18，Anthropic 正式宣布收購 Stainless（2022 年成立），交易金額約 3 億美元：\n\n• **Stainless 是什麼**：專門協助 API 提供商自動生成 SDK、CLI 及 MCP server 的工具商，客戶包括 OpenAI、Google DeepMind、Meta、Anthropic、Cloudflare 等頂尖科技公司\n• **Anthropic 的 SDK 淵源**：Stainless 自 Anthropic API 最早期就協助生成所有官方 SDK（TypeScript、Python、Go、Java、Kotlin 等）\n• **收購動機**：Anthropic 認為「代理人只有在能夠連接到足夠多系統時才真正有用」，收購 Stainless 旨在改善開發者體驗與代理人連線基礎設施\n• **Stainless 服務終止**：Anthropic 將關閉所有 Stainless 托管產品（含 SDK 生成器），但現有客戶保有已生成 SDK 的完整所有權與修改權\n• **競爭意涵**：此次收購意味著 Anthropic 取得了 OpenAI 等競爭對手長期依賴的 SDK 基礎設施，業界高度關注後續影響",
      links: [
        { label: "Anthropic 官方公告", href: "https://www.anthropic.com/news/anthropic-acquires-stainless", kind: "doc" },
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/", kind: "doc" }
      ]
    }
  },
  {
    id: "api-web-search-sec-data-2026-05-18",
    date: "2026-05-18",
    version: "API 更新",
    category: "enh",
    area: "model",
    product: "claude",
    title: "Claude API 網路搜尋工具新增豐富 SEC 申報文件資料",
    summary: "網路搜尋工具（web search tool）現在返回更豐富的 SEC 申報文件資料，讓金融研究代理人、財報分析及盡職調查工作流程更容易以一手資料做為引用依據。",
    body: {
      kind: "feature",
      description: "2026-05-18，Claude Platform 發布說明新增：\n\n• 網路搜尋工具（web search tool）現在返回更豐富的 SEC（美國證管會）申報文件資料\n• 適合用於**金融研究代理人**、**財報分析**及**盡職調查**工作流程\n• 支援以一手資料做為引用依據，提升財務分析的準確性與可信度",
      links: [
        { label: "Claude Platform 發布說明", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "salesforce-300m-anthropic-2026-05-16",
    date: "2026-05-16",
    version: "社群動態",
    category: "enh",
    area: "performance",
    product: "claude",
    title: "Salesforce CEO 宣布 2026 年 Anthropic token 花費預估達 3 億美元",
    summary: "Salesforce CEO Marc Benioff 在 All-In Podcast 宣布，Salesforce 預計 2026 年在 Anthropic token 上花費約 3 億美元，幾乎全用於程式碼生成，並計劃在 Slack 中強化 AI 編程功能。",
    body: {
      kind: "feature",
      description: "2026-05-16，Salesforce CEO Marc Benioff 在 All-In Podcast 公開宣布：\n\n• Salesforce 預計 2026 年在 Anthropic token 上花費約 **3 億美元**，幾乎全部用於程式碼生成\n• 稱 AI coding agents 帶來「前所未有」的效率提升，在服務、支援、通路、行銷等領域發揮重大效益\n• 計劃在 Slack 平台中強化 AI 編程功能（具體細節尚未公開）\n• 呼籲企業建立「中介層」：複雜推理任務路由至 Claude 等頂級模型，簡單任務則路由至更小型、低成本的模型以優化成本\n• Salesforce 已投資超過 3 億美元於 Anthropic，持有約 1% 股份\n\n此消息顯示大型企業已將 AI token 消費視為核心營運成本，Claude 在企業編程應用中的地位持續鞏固。",
      links: [
        { label: "The Next Web 報導", href: "https://thenextweb.com/news/salesforce-benioff-300-million-anthropic-tokens-slack-coding", kind: "doc" },
        { label: "Cryptonomist 報導", href: "https://en.cryptonomist.ch/2026/05/16/salesforce-anthropic-token-spend-coding-agents/", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.143",
    date: "2026-05-15",
    version: "v2.1.143",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.143：插件相依性強制驗證、Token 費用預估顯示及多項修復",
    summary: "新增插件相依性強制驗證（disable/enable 自動處理依賴鏈）、/plugin 市集顯示預估 Token 費用、worktree.bgIsolation:\"none\" 設定；修復 .credentials.json 損毀、stop hooks 無限循環、macOS 目錄存取及 Windows Terminal 相容性等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.143（2026-05-15）帶來以下更新：\n\n**新功能**\n• **插件相依性強制驗證**：`claude plugin disable` 現在會拒絕停用被其他已啟用插件依賴的目標（並提供可直接複製的停用鏈提示）；`claude plugin enable` 會自動強制啟用所有遞移依賴項\n• **預估 Token 費用顯示**：在 `/plugin` 市集瀏覽介面新增每回合與每次呼叫的 Token 估算資訊\n• **Worktree 隔離設定**：新增 `worktree.bgIsolation: \"none\"` 設定，讓背景 session 可直接編輯工作目錄（不需要 EnterWorktree），適用於不適合使用 worktree 的專案\n• **PowerShell 改善**：工具現在預設加入 `-ExecutionPolicy Bypass`（可透過 `CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY=1` 環境變數關閉）；Bedrock、Vertex 及 Foundry 用戶預設啟用\n• **背景 Session 保留設定**：從閒置喚醒後保留模型與 effort 等級設定\n• **Session 卸離保留設定**：`/bg` 與 `←` 卸離現在保留 `--mcp-config`、`--settings`、`--fallback-model` 及權限設定\n\n**修復**\n• 修復損毀的 `.credentials.json` 導致 CLI 啟動卡住的問題\n• 修復 stop hooks 連續封鎖導致的無限循環（連續封鎖 8 次後自動結束）\n• 修復背景 shell 執行期間 `/goal` 評估器誤觸發的問題\n• 修復 `NO_COLOR`/`FORCE_COLOR` 誤移除 Claude Code UI 顏色的問題\n• 修復 macOS `~/Documents`、`~/Desktop`、`~/Downloads` 目錄存取問題\n• 修復缺少啟動程式時背景 daemon 無法備用啟動的問題\n• 修復多項 Windows Terminal/WSL 相容性問題",
      links: [
        { label: "github/claude-code/v2.1.143", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.143", kind: "gh" }
      ]
    }
  },
  {
    id: "anthropic-gates-foundation-2026-05-14",
    date: "2026-05-14",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 與 Gates Foundation 宣布 2 億美元合作夥伴關係",
    summary: "Anthropic 與比爾及梅琳達·蓋茲基金會簽署 2 億美元合作協議，聚焦於全球衛生、教育及氣候變遷等領域的 AI 應用。",
    body: {
      kind: "feature",
      description: "2026-05-14，Anthropic 宣布與比爾及梅琳達·蓋茲基金會建立 2 億美元的合作夥伴關係：\n\n• 合作聚焦三大領域：全球衛生、教育機會平等及氣候行動\n• 目標是讓 AI 工具能夠觸及世界上最弱勢的社群\n• 這是 Anthropic 有史以來規模最大的非商業合作夥伴關係之一\n• 合作成果將優先部署於低收入與中等收入國家",
      links: [
        { label: "Anthropic 官方新聞", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
  {
    id: "agent-sdk-billing-split-2026-05-14",
    date: "2026-05-14",
    version: "計費變更",
    category: "brk",
    area: "performance",
    product: "claude",
    title: "訂閱計費拆分：互動式與程式化用量獨立計算（2026-06-15 生效）",
    summary: "Anthropic 宣布自 2026-06-15 起，將訂閱用量拆分為互動式（claude.ai、Claude Code 互動操作）與程式化（Agent SDK、headless mode、第三方工具）兩個獨立配額，程式化用量依 API 費率計費且月底過期不結轉。",
    body: {
      kind: "breaking",
      description: "2026-05-14，Anthropic 宣布重大計費政策變更，自 2026-06-15 起生效：\n\n**變更內容**\n• 訂閱用量分為兩個獨立配額池：\n  - 互動式用量：透過 claude.ai、Claude Code 互動操作、Claude Cowork 使用\n  - 程式化用量：透過 Agent SDK、headless 模式（`-p` 旗標）、第三方整合工具\n• 程式化配額等同於訂閱費的月度點數，但依 API 費率計費（成本較互動式更高）\n• 程式化點數月底過期，不可結轉至下個月\n\n**影響**\n• $20/月 Pro 訂閱者將獲得兩個獨立 token 配額\n• 大量使用自動化工作流程或第三方 AI 工具（如 OpenClaw）的用戶受影響最大\n• 此為 Anthropic 六週內第三次重大訂閱條款調整\n\n**社群反應**\n• 引發大量用戶不滿，部分聲稱將轉用 OpenAI Codex\n• 批評者認為此舉缺乏透明度",
      migration: {
        title: "因應方式",
        text: "2026-06-15 前請評估您的程式化使用量。若大量使用 Agent SDK 或第三方整合，建議考慮改用 Anthropic API 直接付費方案以獲得更可預測的成本。"
      },
      links: [
        { label: "The Register 報導", href: "https://www.theregister.com/ai-ml/2026/05/14/anthropic-tosses-agents-into-the-api-billing-pool/5240748", kind: "doc" },
        { label: "Axios 報導", href: "https://www.axios.com/2026/05/14/anthropic-claude-price-openai-tokens", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.142",
    date: "2026-05-14",
    version: "v2.1.142",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.142：claude agents 新旗標、Fast Mode 升級 Opus 4.7 及多項修復",
    summary: "新增 claude agents 八項旗標（--add-dir、--settings、--mcp-config、--plugin-dir、--permission-mode、--model、--effort、--dangerously-skip-permissions）；Fast Mode 預設模型升級為 Opus 4.7；修復 git worktree、macOS 睡眠喚醒、daemon 升級等背景 session 問題及 MCP_TOOL_TIMEOUT 失效問題。",
    body: {
      kind: "feature",
      description: "v2.1.142（2026-05-14）帶來以下更新：\n\n**新功能**\n• **claude agents 新旗標**：新增八項旗標讓使用者能更精細控制 agents 執行：\n  - `--add-dir`：加入額外工作目錄\n  - `--settings`：指定自訂設定檔路徑\n  - `--mcp-config`：指定 MCP 設定\n  - `--plugin-dir`：指定插件目錄\n  - `--permission-mode`：設定權限模式\n  - `--model`：指定使用模型\n  - `--effort`：設定推理深度等級\n  - `--dangerously-skip-permissions`：跳過權限檢查（需謹慎使用）\n• **Fast Mode 升級**：Fast Mode 預設模型從 Opus 4.6 升級為 Opus 4.7，提供更強的推理能力\n\n**修復**\n• 修復 git worktree 環境下背景 session 崩潰的問題\n• 修復 macOS 睡眠喚醒後背景 session 異常的問題\n• 修復 daemon 升級期間背景 session 中斷的問題\n• 修復 `MCP_TOOL_TIMEOUT` 未套用至遠端 HTTP/SSE MCP 伺服器的問題\n• 修復連結顯示、編輯器快捷鍵及插件快取等多項 UI 問題",
      links: [
        { label: "github/claude-code/v2.1.142", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.142", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-for-legal-2026-05-13",
    date: "2026-05-13",
    version: "產品更新",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "Claude for Legal：20+ 法律 MCP 連接器與 12 個專業領域插件",
    summary: "Anthropic 推出 Claude for Legal，包含 20+ 個法律 MCP 連接器及 12 個專業領域插件，整合 Thomson Reuters、Westlaw、Harvey、Everlaw、Box 及 DocuSign 等主流法律平台。",
    body: {
      kind: "feature",
      description: "2026-05-13，Anthropic 正式推出 Claude for Legal，標誌著其在法律科技領域最大規模的佈局：\n\n• 20+ 個新法律 MCP 連接器，串連廣泛使用的法律系統與資料庫\n• 12 個專業領域插件，針對特定工作流程與執業領域設計\n• 整合平台包括：Thomson Reuters、Westlaw、Practical Law、Harvey、Everlaw、Box 及 DocuSign\n• 涵蓋法律研究、合約審查、案件管理、發現程序及法律援助等場景\n• 適用於律師事務所及企業內部法務團隊",
      links: [
        { label: "Claude for Legal 公告", href: "https://www.anthropic.com/news", kind: "doc" },
        { label: "Legal IT Insider 報導", href: "https://legaltechnology.com/2026/05/13/claude-for-legal-what-the-industry-needs-to-know/", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-for-small-business-2026-05-13",
    date: "2026-05-13",
    version: "產品更新",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "推出 Claude for Small Business：整合 15 項預建工作流程",
    summary: "Anthropic 正式推出 Claude for Small Business，整合 QuickBooks、PayPal、HubSpot、Canva、DocuSign、Google Workspace 及 Microsoft 365，提供 15 項覆蓋財務、銷售、行銷、HR 及客服的預建代理工作流程。",
    body: {
      kind: "feature",
      description: "2026-05-13，Anthropic 推出 Claude for Small Business，讓小型企業主在既有工具中直接使用 Claude：\n\n**整合工具**\n• Intuit QuickBooks、PayPal、HubSpot、Canva、DocuSign、Google Workspace、Microsoft 365\n\n**預建工作流程（15 項）**\n• 財務：薪資規劃、月結帳務、現金流預測、發票追蹤\n• 銷售：銷售活動管理、績效分析\n• 行銷：廣告文案生成、社群內容規劃\n• HR：員工排班、績效評估\n• 客服：自動回覆草稿、收件箱分類\n\n**信任與安全**\n• 執行前 Claude 會提出計畫供用戶確認，才執行對外通訊、發布內容或付款操作\n• Team/Enterprise 方案資料不用於訓練\n\n**配套資源**\n• 與 PayPal 合作推出免費「AI Fluency for Small Business」線上課程\n• 美國 10 大城市巡迴半日工作坊（首場 2026-05-14 芝加哥）",
      links: [
        { label: "Introducing Claude for Small Business", href: "https://www.anthropic.com/news/claude-for-small-business", kind: "doc" },
        { label: "9to5Mac 報導", href: "https://9to5mac.com/2026/05/13/anthropics-latest-claude-release-turns-your-mac-into-a-small-business-powerhouse/", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.141",
    date: "2026-05-13",
    version: "v2.1.141",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.141：terminalSequence 通知支援、claude agents 範圍過濾及 50+ 項修復",
    summary: "新增 terminalSequence hook 欄位、CLAUDE_CODE_PLUGIN_PREFER_HTTPS 環境變數、claude agents --cwd 範圍過濾及 Rewind「Summarize up to here」；修復 Bedrock/Vertex 背景查詢、Windows daemon pipe、markdown 表格渲染及 50+ 項問題。",
    body: {
      kind: "bug",
      description: "v2.1.141（2026-05-13）帶來以下更新：\n\n**新功能**\n• **terminalSequence**：hook JSON 輸出新增 `terminalSequence` 欄位，支援桌面通知、視窗標題及響鈴，無須控制終端機\n• **CLAUDE_CODE_PLUGIN_PREFER_HTTPS**：透過此環境變數可改用 HTTPS 而非 SSH 克隆 GitHub 插件來源\n• **ANTHROPIC_WORKSPACE_ID**：新增環境變數支援工作負載身份聯合\n• **claude agents --cwd <path>**：將工作階段清單範圍限定於指定目錄\n• **/feedback 改善**：現在包含最近 24 小時或 7 天的工作階段\n• **Rewind 選單**：新增「Summarize up to here」可壓縮較早的上下文\n• **Auto mode 權限對話框**：現在說明 `permissions.ask` 規則觸發原因\n• **IDE diff 選項還原**：IDE 已連線時，檔案編輯權限提示中重新顯示「在 IDE 中查看差異」\n• **背景代理保留權限模式**：背景代理現在保留目前的權限模式，不再回復預設值\n• **長時間思考回饋**：超過 10 秒後轉為琥珀色旋轉動畫\n\n**修復（50+ 項）**\n• 修復 Bedrock/Vertex/Foundry 在未設定小型模型覆蓋時的背景側查詢問題\n• 修復 Windows 上鎖定 daemon pipe 金鑰檔案時 `claude daemon status` 及 `/doctor` 失敗\n• 修復 `/model` 在並行工作階段中靜默更改 autocompact 閾值\n• 修復 markdown 表格中儲存格換行渲染回歸問題\n• 修復在對話框中按 Enter 同時觸發輸入欄位送出的問題\n• 多項終端機、MCP 及 UI 渲染問題修復",
      links: [
        { label: "github/claude-code/v2.1.141", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.141", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.140",
    date: "2026-05-12",
    version: "v2.1.140",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.140：Agent 工具匹配改善、/goal 修復及多項穩定性修復",
    summary: "改善 Agent 工具 subagent_type 大小寫/分隔符不敏感匹配；修復 /goal 在停用 hooks 時掛起、符號連結設定熱重載、claude --bg 連線中斷、企業端點安全啟動失敗、Windows event-loop 停滯、Read 工具 offset 驗證及插件預設資料夾警告等多項問題。",
    body: {
      kind: "bug",
      description: "v2.1.140（2026-05-12）帶來以下更新：\n\n**改善**\n• **Agent 工具 subagent_type 匹配**：現支援大小寫與分隔符不敏感，如 `\"Code Reviewer\"` 可自動解析為 `code-reviewer`\n• 更新 Agent 顏色配色\n\n**修復**\n• 修復 `/goal` 在 `disableAllHooks` 或 `allowManagedHooksOnly` 啟用時無聲掛起的問題，現在會顯示清楚提示訊息\n• 修復符號連結設定檔熱重載觸發錯誤變更事件的回歸問題\n• 修復 `managed extraKnownMarketplaces` 自動更新政策未持久化至 `known_marketplaces.json` 的問題\n• 修復遠端受管設定在 401 錯誤時未重試的問題，現在會以強制刷新 token 重試\n• 修復 `claude --bg` 在服務即將閒置退出時出現連線中斷的問題\n• 修復企業端點安全機器上後台服務啟動失敗的問題\n• 修復 `/loop` 排程重複喚醒後台任務輪詢的問題\n• 修復 Windows event-loop 因同步 `where.exe` 重複呼叫導致停滯的問題\n• 修復 `Read` 工具在 `offset` 傳入含空白或 `+` 前綴字串時驗證失敗的問題\n• 修復插件預設元件資料夾（如 `commands/`）因 `plugin.json` 設定而被忽略時未顯示警告的問題\n• 修復終端機失去焦點時原生游標位置問題",
      links: [
        { label: "github/claude-code/v2.1.140", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.140", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.139",
    date: "2026-05-11",
    version: "v2.1.139",
    category: "new",
    area: "cli",
    product: "claude-code",
    title: "v2.1.139：Agent View、/goal 指令、記錄瀏覽改善及大量修復",
    summary: "新增 Agent View 研究預覽版（`claude agents`）、`/goal` 持續執行指令、`/scroll-speed` 指令、plugin details 指令及記錄瀏覽快捷鍵；修復過期憑證死結、SSE 記憶體無界增長、串流閒置超時等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.139（2026-05-11）帶來以下更新：\n\n**新功能**\n• **Agent View（研究預覽版）**：執行 `claude agents` 可檢視所有工作階段（執行中、等待中、已完成）的統一清單\n• **`/goal` 指令**：設定完成條件，Claude 將跨回合持續執行直到目標達成；支援互動模式、`-p` 模式及遠端控制模式，並在覆蓋面板即時顯示耗時、回合數與 token 用量\n• **`/scroll-speed` 指令**：可調整滑鼠滾輪速度並即時預覽效果\n• **`claude plugin details <name>`**：顯示插件的元件清單及預估每次工作階段的 token 成本\n• **記錄瀏覽改善**：`?` 顯示鍵盤快捷鍵、`{`/`}` 在使用者提示間跳轉、`v` 切換快捷鍵面板\n\n**修復**\n• 修復過期憑證阻擋 `claude auth login`/`logout`/`status` 時的死結問題\n• 修復 `autoAllowBashIfSandboxed` 未允許含 shell 展開（如 `$VAR`、`$(cmd)`）指令的問題\n• 修復 HTTP/SSE MCP 伺服器無界記憶體增長（每個 SSE frame 上限 16 MB）\n• 修復 `Skill(name *)` 前綴匹配的權限規則\n• 修復回應完成後 5 分鐘出現的虛假「串流閒置超時」錯誤\n• 修復透過符號連結 `~/.claude/settings.json` 的設定熱重載\n• 改善深色主題的超連結可見度",
      links: [
        { label: "github/claude-code/v2.1.139", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.139", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-platform-aws-2026-05-11",
    date: "2026-05-11",
    version: "API 更新",
    category: "new",
    area: "performance",
    product: "claude",
    title: "推出 Claude Platform on AWS：原生 AWS 基礎設施支援",
    summary: "Claude API 正式支援 AWS 原生基礎設施，提供 AWS 帳單與 IAM 身份驗證，可存取完整 Messages API、Files API、Message Batches API、Claude Managed Agents、Agent Skills、程式碼執行及工具呼叫等功能。",
    body: {
      kind: "feature",
      description: "2026-05-11，Anthropic 推出 Claude Platform on AWS，將 Claude API 帶至由 Anthropic 管理、可透過 AWS 存取的基礎設施：\n\n• 提供 AWS 帳單整合，費用直接計入 AWS 帳戶\n• 使用 AWS IAM 身份驗證，無須另行管理 Anthropic API 金鑰\n• 支援完整 Messages API、Files API、Message Batches API\n• 支援 Claude Managed Agents、Agent Skills、程式碼執行及工具呼叫\n• 透過原生 AWS 端點存取，適合已在 AWS 生態系的企業用戶",
      links: [
        { label: "Claude Platform on AWS 文件", href: "https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.138",
    date: "2026-05-09",
    version: "v2.1.138",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.138：內部修復",
    summary: "進行內部修復，提升整體穩定性。",
    body: {
      kind: "bug",
      description: "v2.1.138（2026-05-09）進行內部修復：\n\n• 內部修復，提升整體穩定性",
      links: [
        { label: "github/claude-code/v2.1.138", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.138", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.137",
    date: "2026-05-09",
    version: "v2.1.137",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.137：修復 Windows 上 VS Code 擴充套件無法啟動",
    summary: "修復 VS Code 擴充套件在 Windows 平台上無法啟動的問題。",
    body: {
      kind: "bug",
      description: "v2.1.137（2026-05-09）修復一項關鍵問題：\n\n• [VSCode] 修復擴充套件在 Windows 上無法啟動的問題",
      links: [
        { label: "github/claude-code/v2.1.137", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.137", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.136",
    date: "2026-05-08",
    version: "v2.1.136",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.136：新增 autoMode.hard_deny 設定及大量修復（50+ 項）",
    summary: "新增 autoMode.hard_deny 設定與企業 OTEL 問卷環境變數；修復 MCP 伺服器 /clear 後消失、OAuth token 並發遺失、擴展思考後 400 錯誤、plan mode 不阻擋寫入、CJK 顯示、Backspace 鍵位交換等 50+ 項問題。",
    body: {
      kind: "bug",
      description: "v2.1.136（2026-05-08）帶來以下更新：\n\n**新功能**\n• 新增 `CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL` 環境變數，讓使用 OpenTelemetry 的企業重新啟用工作階段品質問卷\n• 新增 `settings.autoMode.hard_deny`，用於 auto mode 分類器規則，可無條件封鎖而不受使用者例外允許\n\n**MCP 與整合修復**\n• 修復 `.mcp.json`、插件和 claude.ai 連接器設定的 MCP 伺服器在 `/clear` 後消失的問題\n• 修復多個 MCP 伺服器同時更新時 OAuth refresh token 遺失的問題\n• 修復 `/doctor` 對 MCP schema 錯誤未顯示缺失欄位名稱及來源路徑的問題\n\n**驗證與工作階段**\n• 修復並發憑證寫入覆蓋新輪換 OAuth token 導致罕見登入迴圈的問題\n• 修復 `CLAUDE_ENV_FILE` SessionStart hook 的環境變數在 `/resume` 或 `/clear` 後失效的問題\n• 修復 `--resume` / `--continue` 在專案路徑含底線時找不到工作階段的問題\n\n**UI/UX 改善**\n• 改善 slash command 對話框（頁尾提示、間距、方向鍵樣式）的視覺一致性\n• 修復 bash 命令輸出和 markdown 程式碼區塊中顏色位置錯誤的問題\n• 修復寬 markdown 表格在終端機捲動歷程留下殘留邊框的問題\n• 修復全螢幕模式「跳至底部」覆蓋層在 CJK 字元上留下顏色殘影的問題\n• 修復串流複製終端機輸出時出現尾隨空白的問題\n\n**擴展思考與工具呼叫**\n• 修復擴展思考在工具呼叫後發出已編輯思考區塊時出現 API 400 錯誤的問題\n• 修復全螢幕截斷時失敗的工具呼叫無法點擊展開的問題\n• 修復 MCP 工具結果在伺服器回傳 content block 時不可見的問題\n\n**Plan Mode 與檔案操作**\n• 修復 plan mode 在有對應 `Edit(...)` 允許規則時不阻擋檔案寫入的問題\n• 修復 `@` 檔案選擇器在小型非 git 目錄中找不到工作階段中新建檔案的問題\n• 修復 `@` 提及選擇器在目錄超過 100 個項目時找不到檔案的問題\n\n**插件與擴充套件**\n• 修復快取清理刪除仍在使用版本時插件 Stop/UserPromptSubmit hook 失敗的問題\n• 修復 plugin.json 中 skills 項目遮蔽插件預設 skills/ 目錄的問題\n• 修復插件解除安裝及啟用/停用不區分大小寫匹配 slug 的問題\n\n**其他修復**\n• 修復 ReasonML diff 渲染出「undefined」文字殘影的問題\n• 修復 Backspace 和 Ctrl+Backspace 在使用 Ctrl+G 後互換的問題\n• 修復 `/usage` 每週重置顯示時間而非日期的問題\n• 修復 `AskUserQuestion` 在以陣列提供多選答案時被捨棄的問題\n• 修復 `/clear <name>` 未為 `/resume` 標記已清除工作階段的問題\n• WSL2：透過 PowerShell 後備方案修復 xclip/wl-paste 無法讀取圖像資料時的圖片貼上問題",
      links: [
        { label: "github/claude-code/v2.1.136", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.136", kind: "gh" }
      ]
    }
  },
  {
    id: "akamai-deal-2026-05-08",
    date: "2026-05-08",
    version: "官方公告",
    category: "new",
    area: "performance",
    product: "claude",
    title: "Anthropic 與 Akamai 簽署 18 億美元七年期雲端算力協議",
    summary: "Anthropic 與 Akamai Technologies 簽署 18 億美元、為期七年的雲端算力協議，為 Akamai 史上最大合約，旨在應對 Claude 用量 Q1 爆增 80 倍的需求。",
    body: {
      kind: "feature",
      description: "2026-05-08，Anthropic 宣布與雲端服務商 Akamai Technologies 簽署 18 億美元、七年期算力合作協議：\n\n• 這是 Akamai 有史以來最大的單筆合約，Akamai 股價當日大漲 27%\n• CEO Dario Amodei 表示 Anthropic 正「以最快速度」擴充算力資源，以應對 Q1 年化營收和用量爆增 80 倍的需求\n• 目前年化收入已達 300 億美元，三倍於去年\n• 此協議是繼 SpaceX Colossus 算力合作（5/6）後，Anthropic 進一步擴充基礎設施的舉措\n• Akamai 正從內容傳遞和資安服務積極向算力服務擴張",
      links: [
        { label: "Bloomberg 報導", href: "https://www.bloomberg.com/news/articles/2026-05-08/anthropic-inks-1-8-billion-computing-deal-with-akamai", kind: "doc" },
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/05/08/akamai-stock-ai-cloud-infrastructure-deal.html", kind: "doc" },
        { label: "Fortune 報導", href: "https://fortune.com/2026/05/08/anthropic-80fold-growth-quarter-renting-elon-musk-data-center/", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-institute-2026-05-07",
    date: "2026-05-07",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 發布 The Anthropic Institute 研究議程",
    summary: "Anthropic 設立 The Anthropic Institute（TAI），以前沿實驗室內部視角研究 AI 社會影響，聚焦四大方向：經濟擴散、威脅與韌性、野外 AI 系統、AI 驅動的研發。",
    body: {
      kind: "feature",
      description: "2026-05-07，Anthropic 發布 The Anthropic Institute（TAI）的研究議程。TAI 將利用身處前沿實驗室的獨特視角，研究 AI 對世界的影響，並將研究成果公開分享，協助外部組織、政府與大眾做出更好的 AI 決策。\n\n**四大研究方向**\n• **經濟擴散**：研究 AI 部署如何改變各地區與產業的勞動市場、就業創造、生產力及經濟成長\n• **威脅與韌性**：審視 AI 雙重用途能力、網路安全風險、生物安全疑慮，以及社會如何建立防禦能力\n• **野外 AI 系統**：研究人與機構如何與已部署的 AI 互動，包括對批判性思維、認識論及人類能動性的影響\n• **AI 驅動的研發**：調查 AI 自主研究開發及遞迴自我改進的潛力",
      links: [
        { label: "anthropic.com 研究議程", href: "https://www.anthropic.com/research/anthropic-institute-agenda", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.133",
    date: "2026-05-07",
    version: "v2.1.133",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.133：新增 worktree 分支基準設定、Hooks 努力等級注入及多項修復",
    summary: "新增 worktree.baseRef 設定（fresh|head）、sandbox 自訂路徑、parentSettingsBehavior 金鑰；Hooks 透過 effort.level 取得努力等級；修復平行 session 401、網路磁碟機存取、/effort 干擾、子代理技能發現、VSCode 平台錯誤、iTerm2+tmux 字元撕裂、LSP 診斷、Bedrock/Vertex 429 及 Windows 環境檔案等問題。",
    body: {
      kind: "bug",
      description: "v2.1.133（2026-05-07）帶來以下更新：\n\n**新功能**\n• 新增 `worktree.baseRef` 設定（`fresh` | `head`），可選擇 worktree 從 `origin/<預設分支>` 或本地 `HEAD` 建立分支\n• 新增 `sandbox.bwrapPath` 和 `sandbox.socatPath` managed 設定，支援 Linux/WSL 自訂二進位路徑\n• 新增 `parentSettingsBehavior` admin 層級金鑰，允許 SDK `managedSettings` 的策略合併\n• Hooks 現可透過 `effort.level` JSON 輸入及 `$CLAUDE_EFFORT` 環境變數取得當前努力等級\n• 改善 focus mode 行為與記憶體使用\n\n**修復**\n• 修復 refresh-token 競爭後平行 session 出現 401 錯誤的問題\n• 修復磁碟機根目錄的 `Edit`/`Write` 允許規則匹配不正確的問題\n• 修復損壞的歷程/session 日誌檔案導致未處理的拒絕（`ECOMPROMISED`）問題\n• 修復完整 MCP OAuth 流程未遵守 `HTTP(S)_PROXY` / `NO_PROXY` / mTLS 的問題\n• 修復映射網路磁碟機上 Read/Write/Edit 被拒絕的問題\n• 修復 Remote Control 停止/中斷無法完全取消 CLI session 的問題\n• 修復 `/effort` 意外改變並行 session 努力等級的問題\n• 修復子代理無法發現專案、使用者或外掛技能的問題\n• 修復 iTerm2 + tmux 發送終端機通知時隨機字元撕裂和輸入漂移的問題\n• 修復編輯後出現舊 LSP 診斷導致 Claude 重新讀取剛編輯檔案的問題\n• 修復 Bedrock/Vertex/Foundry 的 429 速率限制錯誤錯誤引用 status.claude.com 的問題\n• Windows 修復：`CLAUDE_ENV_FILE` 和 SessionStart hook 環境檔案現在可在 Windows 正確套用\n• 修復 @ 檔案建議在非 git 目錄每回合重新掃描、/resume tab 補全自動恢復、/context 空行渲染、/clear 遺失 /rename 名稱等問題\n• [VSCode] 修復 `claudeCode.claudeProcessWrapper` 因「不支援的平台」失敗的問題",
      links: [
        { label: "github/claude-code/v2.1.133", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.133", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.132",
    date: "2026-05-06",
    version: "v2.1.132",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.132：新增 SESSION_ID 環境變數注入、修復多項終端機與 MCP 問題",
    summary: "新增 CLAUDE_CODE_SESSION_ID 注入 Bash 子程序及 CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN 選項；修復 SIGINT 優雅關閉、emoji 截斷、plan-mode 權限旗標、Kitty/JetBrains/Windows Terminal 相容性、MCP 記憶體洩漏及 Bedrock/Vertex prompt caching 錯誤等多項問題。",
    body: {
      kind: "bug",
      description: "v2.1.132（2026-05-06）帶來以下更新：\n\n**新功能**\n• 新增 `CLAUDE_CODE_SESSION_ID` 環境變數，自動注入 Bash 工具的子程序環境\n• 新增 `CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN=1` 環境變數，可選擇退出全螢幕渲染器\n• Ctrl+V 貼上圖片時，底部列顯示「Pasting…」提示\n\n**修復**\n• 修復外部 SIGINT（IDE 停止按鈕、kill -INT）未執行優雅關閉的問題\n• 修復 --resume 因 emoji 截斷錯誤導致失敗的問題\n• 修復 --permission-mode 旗標在恢復 plan-mode 工作階段時被忽略的問題\n• 修復筆電休眠喚醒後全螢幕模式顯示空白畫面的問題\n• 修復 Indic 連字及 ZWJ emoji 的游標定位問題\n• 修復 vim 操作符損毀分解式（NFD）重音字符的問題\n• 修復 Kitty、JetBrains 2025.2、Windows Terminal 的終端機相容性問題\n• 修復 stdio MCP 伺服器記憶體無界成長的問題\n• 修復 MCP 伺服器 tools/list 失敗現在會自動重試並顯示狀態\n• 修復 Bedrock 和 Vertex prompt caching 的 400 錯誤",
      links: [
        { label: "github/claude-code/v2.1.132", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.132", kind: "gh" }
      ]
    }
  },
  {
    id: "usage-limits-spacex-2026-05-06",
    date: "2026-05-06",
    version: "官方公告",
    category: "enh",
    area: "performance",
    product: "claude",
    title: "Anthropic 與 SpaceX 簽署算力合作，大幅提升 Claude 使用限制",
    summary: "Anthropic 與 SpaceX 簽署協議取得 Colossus 1 資料中心 300+ MW（逾 220,000 張 NVIDIA GPU）算力；Claude Code 五小時速率限制翻倍，移除 Pro/Max 尖峰時段限制，Opus API Tier 1 輸入速率提升 1500%、輸出速率提升 900%。",
    body: {
      kind: "feature",
      description: "2026-05-06，Anthropic 宣布與 SpaceX 簽署算力合作協議，並同步調整使用限制：\n\n**SpaceX 算力合作**\n• 取得 Colossus 1 資料中心所有算力：300+ MW 容量（逾 220,000 張 NVIDIA GPU）\n• 預計一個月內上線，大幅提升 Claude 整體服務容量\n• Anthropic 同時表達興趣，探索開發多 GW 級軌道 AI 算力合作\n\n**使用限制調整**\n• Claude Code 五小時速率限制翻倍（Pro、Max、Team、Enterprise 方案）\n• 移除 Claude Code 在 Pro/Max 帳戶的尖峰時段限制\n• 大幅提升 Claude Opus 模型的 API 速率限制\n• Tier 1 最大輸入 token 每分鐘提升 1500%\n• Tier 1 最大輸出 token 每分鐘提升 900%",
      links: [
        { label: "anthropic.com 官方公告", href: "https://www.anthropic.com/news/higher-limits-spacex", kind: "doc" },
        { label: "Engadget 報導", href: "https://www.engadget.com/2166315/anthropic-is-doubling-claude-code-rate-limits-after-deal-with-spacex/", kind: "doc" },
        { label: "Bloomberg 報導", href: "https://www.bloomberg.com/news/articles/2026-05-06/anthropic-inks-computing-deal-with-spacex-to-meet-ai-demand", kind: "doc" }
      ]
    }
  },
  {
    id: "api-managed-agents-beta-2026-05-06",
    date: "2026-05-06",
    version: "API 更新",
    category: "new",
    area: "mcp",
    product: "claude",
    title: "Managed Agents 多代理工作階段與 Webhook 進入公開 Beta",
    summary: "Multiagent sessions 和 Outcomes 正式進入公開 Beta；新增 Managed Agents Webhook 支援工作階段與保管庫生命週期事件通知；Vault credential 背景更新現支援 mcp_oauth；工作階段與事件支援更多過濾和排序選項。",
    body: {
      kind: "feature",
      description: "2026-05-06，Claude API 平台更新：\n\n• **Multiagent sessions 和 Outcomes** 正式進入公開 Beta，使用標準 `managed-agents-2026-04-01` Beta 標頭即可啟用\n• **Vault credential 背景更新**：現支援 `mcp_oauth` 憑證的背景自動更新\n• **Managed Agents Webhook**：現支援訂閱 Webhook 事件，事件類型包括工作階段與保管庫生命週期事件\n• **過濾與排序增強**：工作階段可依狀態過濾；事件可依類型過濾，並支援依建立時間排序",
      links: [
        { label: "API 發布說明", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" },
        { label: "Managed Agents 文件", href: "https://platform.claude.com/docs/en/managed-agents/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.131",
    date: "2026-05-06",
    version: "v2.1.131",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.131：修復 Windows VS Code 擴充套件啟動失敗及 Mantle 驗證問題",
    summary: "修復 Windows 上 VS Code 擴充套件因 bundled SDK 路徑問題導致無法啟動，以及 Mantle 端點驗證缺少 x-api-key 標頭的問題。",
    body: {
      kind: "bug",
      description: "v2.1.131（2026-05-06）修復兩項緊急問題：\n\n• 修復 Windows 上 VS Code 擴充套件因 bundled SDK createRequire polyfill 中硬編碼路徑導致無法啟動的問題\n• 修復 Mantle 端點驗證因請求缺少 x-api-key 標頭而失敗的問題",
      links: [
        { label: "github/claude-code/v2.1.131", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.131", kind: "gh" }
      ]
    }
  },
  {
    id: "finance-agents-2026-05-05",
    date: "2026-05-05",
    version: "官方公告",
    category: "new",
    area: "model",
    product: "claude",
    title: "Anthropic 發布金融服務 AI 代理人範本與 Microsoft 365 整合",
    summary: "Anthropic 推出 10 款預建金融服務 AI 代理人範本、Microsoft 365 全套整合、8 家新資料連接器，以及 Moody's MCP 應用程式，使金融機構能在數日內部署 Claude 代理人至核心業務流程。",
    body: {
      kind: "feature",
      description: "2026-05-05，Anthropic 宣布推出金融服務完整 AI 解決方案：\n\n**10 款預建代理人範本**\n研究類：Pitch Builder（投資簡報）、Meeting Preparer（會議準備）、Earnings Reviewer（財報審查）、Model Builder（財務模型）、Market Researcher（市場研究）\n運作類：Valuation Reviewer（估值審查）、General Ledger Reconciler（總帳對帳）、Month-end Closer（月末結帳）、Statement Auditor（財務稽核）、KYC Screener（了解客戶篩查）\n\n**Microsoft 365 整合**\nClaude 現可作為統一代理人跨 Excel、PowerPoint、Word、Outlook 運作，應用程式切換時自動攜帶上下文。\n\n**8 家新資料連接器**\nDun & Bradstreet、Fiscal AI、Financial Modeling Prep、Guidepoint、IBISWorld、SS&C IntraLinks、Third Bridge、Verisk，以及 Moody's 將完整平台嵌入 Claude 作為原生 MCP 應用程式。\n\n**模型表現**\nClaude Opus 4.7 在 Vals AI Finance Agent 基準測試達到 64.37%，居業界首位。JPMorgan Chase、Goldman Sachs、Citi、AIG、Visa 等已進入生產部署。",
      links: [
        { label: "anthropic.com 官方公告", href: "https://www.anthropic.com/news/finance-agents", kind: "doc" },
        { label: "Fortune 報導", href: "https://fortune.com/2026/05/05/anthropic-wall-street-financial-services-agents-jamie-dimon/", kind: "doc" },
        { label: "Bloomberg 報導", href: "https://www.bloomberg.com/news/articles/2026-05-05/anthropic-unveils-ai-agents-to-field-financial-services-tasks", kind: "doc" }
      ]
    }
  },
  {
    id: "anthropic-enterprise-ai-services-2026-05-04",
    date: "2026-05-04",
    version: "官方公告",
    category: "new",
    area: "security",
    product: "claude",
    title: "Anthropic 與 Blackstone、Goldman Sachs 等合作成立新企業 AI 服務公司",
    summary: "Anthropic 宣布與 Blackstone、Hellman & Friedman、Goldman Sachs 等投資機構共同成立新企業 AI 服務公司，規模約 15 億美元，目標協助私募股權旗下中型企業導入以 Claude 代理為核心的業務轉型。",
    body: {
      kind: "feature",
      description: "2026-05-04，Anthropic 宣布與 Blackstone、Hellman & Friedman 及 Goldman Sachs 共同成立一家全新的企業 AI 服務公司。\n\n**交易架構**\n• Anthropic、Blackstone 及 H&F 各出資約 3 億美元，Goldman Sachs 出資約 1.5 億美元，合計規模約 15 億美元\n• 其他投資方包含 General Atlantic、Leonard Green、Apollo Global Management、GIC 及 Sequoia Capital\n\n**商業模式**\n• 新公司將派駐工程師深入中型企業，協助以 AI 代理重新設計核心工作流程\n• 主要客群為私募股權旗下的企業組合\n• 此舉使 Anthropic 直接與 Accenture、麥肯錫、德勤等頂尖顧問公司競爭企業 AI 轉型市場",
      links: [
        { label: "anthropic.com 官方公告", href: "https://www.anthropic.com/news/enterprise-ai-services-company", kind: "doc" },
        { label: "CNBC 報導", href: "https://www.cnbc.com/2026/05/04/anthropic-goldman-blackstone-ai-venture.html", kind: "doc" },
        { label: "TechCrunch 報導", href: "https://techcrunch.com/2026/05/04/anthropic-and-openai-are-both-launching-joint-ventures-for-enterprise-ai-services/", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.128",
    date: "2026-05-04",
    version: "v2.1.128",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.128：隨機色彩選取、MCP 工具計數顯示、.zip 外掛支援及多項修復",
    summary: "新增 /color 無參數隨機色彩、/mcp 顯示伺服器工具數量、--plugin-dir 支援 .zip 封存檔；修復 EnterWorktree 從本地 HEAD 建立分支、圖片上傳卡住、長網址無法點擊及平行 Shell 工具失敗等多項問題。",
    body: {
      kind: "feature",
      description: "v2.1.128（2026-05-04）帶來以下更新：\n\n**新功能**\n• `/color`：無參數執行時自動隨機選取工作階段色彩\n• `/mcp`：顯示每個已連線伺服器的工具數量，並標記 0 工具的伺服器\n• `--plugin-dir`：除目錄外，現接受 `.zip` 外掛封存檔\n• `--channels`：現可搭配主控台（API 金鑰）認證使用\n• 模型選擇器：合併重複的 Opus 4.7 項目，目前 Opus 顯示為 \"Opus\" 而非 \"Opus 4.7\"\n• 環境隔離：子行程不再繼承 `OTEL_*` 環境變數\n• MCP 保留名稱：`workspace` 現為保留伺服器名稱\n\n**修復**\n• `EnterWorktree` 改從本地 HEAD 而非 `origin/<預設分支>` 建立分支\n• 修復圖片上傳卡住問題\n• 修復長網址無法點擊問題\n• 修復含圍欄程式碼區塊時的剪貼板問題\n• 修復平行 Shell 工具呼叫失敗問題",
      links: [
        { label: "github/claude-code/v2.1.128", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.128", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.126",
    date: "2026-05-01",
    version: "v2.1.126",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.126：新增 project purge 指令、/model 支援 Gateway 模型列表、擴大 skip-permissions 範圍及多項修復",
    summary: "新增 claude project purge 指令清除專案狀態；/model 支援自訂 Gateway /v1/models 列表；--dangerously-skip-permissions 擴大免提示範圍；OAuth 支援終端機貼入授權碼；修復圖片超過 2000px 導致 session 中斷及多項安全與相容性 bug。",
    body: {
      kind: "feature",
      description: "v2.1.126（2026-05-01）帶來以下更新：\n\n**新功能**\n• `/model` 指令：當 ANTHROPIC_BASE_URL 指向相容 Anthropic API 的 gateway 時，現在會從 /v1/models 端點列出可用模型\n• `claude project purge [path]`：新增專案狀態清除指令，可刪除指定專案的所有 Claude Code 狀態（逐字記錄、任務、檔案歷程、設定條目），支援 --dry-run、-y/--yes、-i/--interactive 及 --all 旗標\n• `claude auth login`：現在支援在終端機直接貼入 OAuth 授權碼，解決 WSL2、SSH、Container 等環境中瀏覽器無法回呼 localhost 的問題\n• `claude_code.skill_activated` OpenTelemetry 事件：新增 invocation_trigger 屬性（\"user-slash\"、\"claude-proactive\" 或 \"nested-skill\"）\n• Auto Mode：權限檢查停頓時，轉動圖示改為紅色提示\n• Windows：改善 PowerShell 7 偵測，啟用時視為主要 Shell\n\n**安全與修復**\n• `--dangerously-skip-permissions` 擴大免提示寫入範圍至 .claude/、.git/、.vscode/ 及 Shell 設定檔（破壞性刪除指令仍會提示）\n• 修復貼上超過 2000px 圖片導致 session 中斷的問題（圖片現在自動縮小至 2000px）\n• 修復 `allowManagedDomainsOnly`/`allowManagedReadPathsOnly` 在高優先級 managed-settings 來源缺少 sandbox 區塊時被忽略的安全設定問題\n• 修復 OAuth 逾時、Mac 休眠後串流閒置逾時、Windows 日文/韓文/中文文字渲染、EDR/SIEM 遙測剪貼簿處理、工具名稱格式錯誤導致 Agent SDK 卡住等多項 bug",
      links: [
        { label: "github/claude-code/v2.1.126", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.126", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-security-public-beta-2026-04-30",
    date: "2026-04-30",
    version: "Claude Security Beta",
    category: "new",
    area: "security",
    product: "claude",
    title: "Claude Security 公開 Beta 上線：由 Opus 4.7 驅動的企業級漏洞掃描工具",
    summary: "Anthropic 宣布 Claude Security 正式進入 Claude Enterprise 公開 Beta，可自動掃描程式碼庫的安全漏洞並生成修補方案，整合 CrowdStrike、Microsoft Security 等主要資安夥伴。",
    body: {
      kind: "feature",
      description: "Anthropic 於 2026-04-30 宣布 Claude Security 進入 Claude Enterprise 客戶公開 Beta。此產品由旗艦模型 Opus 4.7 驅動，提供以下核心能力：\n\n• 自動掃描程式碼庫，發現包括傳統工具長期未偵測到的漏洞\n• 針對已發現的安全問題生成修補方案（patch）\n• 可透過 Claude Platform 或技術夥伴整合使用\n\n已整合的技術夥伴包括 CrowdStrike（Falcon Platform）、Microsoft Security、Palo Alto Networks、SentinelOne、TrendAI 及 Wiz；服務夥伴包括 Accenture、BCG、Deloitte、Infosys 及 PwC。\n\nClaude Security 源自今年 2 月以 Claude Code Security research preview 形式上線的功能，目前已有數百個組織使用，發現並修復了生產程式碼中的多個長期存在的安全漏洞。Team 及 Max 方案客戶將於後續開放。",
      steps: [
        "以 Claude Enterprise 帳戶登入 claude.com",
        "前往 Claude Security 功能區塊",
        "連接程式碼庫或上傳目標程式碼",
        "執行漏洞掃描，檢閱報告並套用建議的修補方案"
      ],
      links: [
        { label: "claude.com/blog/claude-security-public-beta", href: "https://claude.com/blog/claude-security-public-beta", kind: "doc" },
        { label: "SiliconANGLE 報導", href: "https://siliconangle.com/2026/04/30/anthropic-announces-claude-security-public-beta-find-fix-software-vulnerabilities/", kind: "doc" }
      ]
    }
  },
  {
    id: "claude-code-hermes-billing-bug-2026-04-30",
    date: "2026-04-30",
    version: "Bug Report",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "HERMES.md 計費 Bug：commit history 含特定字串導致額外計費",
    summary: "Claude Code（v2.1.119）發現計費異常 Bug：git commit history 中含有 \"HERMES.md\" 字串時，API 請求將被異常計入「額外使用量」，有使用者反映損失 $200 點數，Anthropic 已知悉但尚未修復。",
    body: {
      kind: "bug",
      description: "2026-04-30 社群回報一個影響 Claude Code 的嚴重計費 Bug（Issue #53262）：\n\n當 git 倉庫的 commit history 中含有大小寫敏感的字串 \"HERMES.md\" 時，Claude Code（v2.1.119）會將 API 請求錯誤路由至「額外使用量（extra usage）」計費，而非從使用者方案的包含額度中扣除。\n\n受影響的使用者反映：系統不會主動警告，直到額外點數耗盡才出現「API Error: 400」錯誤。一位 Max 20x 方案使用者在方案用量僅 13% 時，即被消耗 $200 額外點數。\n\nAnthropic 已知悉此問題並受理退款，但截至 2026-04-30 尚未發布修復版本。",
      problem: "git commit history 含有字串 \"HERMES.md\" 時，Claude Code 異常計費至額外使用量，導致使用者意外損失點數。",
      rootCause: "Claude Code 在處理 API 請求路由時，特定字串觸發了內部邏輯錯誤，將請求導向不正確的計費類別。",
      fix: "Anthropic 已知悉並受理個案退款，正式修復版本尚未釋出（截至 2026-04-30）。",
      links: [
        { label: "GIGAZINE 報導", href: "https://gigazine.net/gsc_news/en/20260430-hermes-claude-code/", kind: "doc" },
        { label: "Issue #53262", href: "https://github.com/anthropics/claude-code/issues/53262", kind: "gh" }
      ]
    }
  },
  {
    id: "context-1m-retirement-2026-04-30",
    date: "2026-04-30",
    version: "API 重大變更",
    category: "brk",
    area: "performance",
    product: "claude",
    title: "1M Token 長文脈 Beta 正式退役：Sonnet 4.5 及 Sonnet 4 不再支援",
    summary: "Claude Sonnet 4.5 及 Claude Sonnet 4 的 1M token 長文脈視窗 beta（context-1m-2025-08-07）今日正式停止支援，超過 20 萬 token 的請求將回傳錯誤，請遷移至 Sonnet 4.6 或 Opus 4.6。",
    body: {
      kind: "breaking",
      description: "自 2026-04-30 起，原先針對 Claude Sonnet 4.5（claude-sonnet-4-5-20250929）及 Claude Sonnet 4（claude-sonnet-4-20250514）提供的 1M token 長文脈視窗 beta 正式退役。\n\n即使請求中帶有 `anthropic-beta: context-1m-2025-08-07` header，該 header 將不再生效；輸入超過 20 萬 token 的請求將回傳 400 錯誤。如需繼續使用 1M token 長文脈視窗，請遷移至 Claude Sonnet 4.6 或 Claude Opus 4.6，這兩款模型以標準定價原生支援 1M token 長文脈視窗，無需任何 beta header。",
      migration: {
        title: "遷移至 Sonnet 4.6 或 Opus 4.6",
        text: "將模型 ID 改為 claude-sonnet-4-6-20260217 或 claude-opus-4-6-20260205，並移除 context-1m-2025-08-07 beta header，1M token 長文脈視窗即自動生效。"
      },
      diff: {
        before: [
          "model: claude-sonnet-4-5-20250929",
          "anthropic-beta: context-1m-2025-08-07"
        ],
        after: [
          "model: claude-sonnet-4-6-20260217",
          "// 無需 beta header，1M context 自動生效"
        ]
      },
      links: [
        { label: "platform.claude.com 發布說明", href: "https://platform.claude.com/docs/en/release-notes/overview", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.123",
    date: "2026-04-29",
    version: "v2.1.123",
    category: "bug",
    area: "cli",
    product: "claude-code",
    title: "v2.1.123：修復 CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 時 OAuth 401 重試迴圈",
    summary: "修復設定 CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 環境變數時，OAuth 認證失敗並陷入 401 錯誤重試迴圈的問題。",
    body: {
      kind: "bug",
      description: "當使用者設定環境變數 `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1` 時，OAuth 認證流程會因 401 錯誤進入無限重試迴圈，導致無法正常登入。此版本修復了該問題，認證流程恢復正常。",
      problem: "設定 CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS=1 後，OAuth 認證回傳 401 並持續重試，造成登入失敗。",
      rootCause: "實驗性 beta 功能停用時，相關認證請求標頭未正確處理，導致 OAuth 端點拒絕請求並進入重試迴圈。",
      fix: "修正認證請求在停用實驗性 beta 時的標頭組合，使 OAuth 流程可正常完成。",
      links: [
        { label: "github/claude-code/v2.1.123", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.123", kind: "gh" }
      ]
    }
  },
  {
    id: "2.1.122",
    date: "2026-04-28",
    version: "v2.1.122",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.122：Bedrock 服務層級選擇、PR URL Resume、OpenTelemetry 改善與多項 Bug 修正",
    summary: "新增 ANTHROPIC_BEDROCK_SERVICE_TIER 環境變數可選擇 Bedrock 服務層級；/resume 搜尋支援貼上 PR URL；OpenTelemetry numeric 屬性改善；修復 /branch 分叉錯誤、Vertex AI/Bedrock structured-output 問題、圖片最大尺寸超標等多項 bug。",
    body: {
      kind: "feature",
      description: "v2.1.122 帶來以下更新：（1）新增 ANTHROPIC_BEDROCK_SERVICE_TIER 環境變數，可選擇 default、flex 或 priority 服務層級（以 X-Amzn-Bedrock-Service-Tier header 傳送）；（2）/resume 搜尋框支援貼上 PR URL，自動找到建立該 PR 的 session，支援 GitHub、GitHub Enterprise、GitLab 及 Bitbucket；（3）/mcp 現在顯示因重複 URL 被手動新增 server 隱藏的 claude.ai connector，並提示移除重複項；（4）OpenTelemetry 改善：api_request/api_error 事件的 numeric attributes 改為數字格式輸出，新增 claude_code.at_mention 日誌事件；（5）Bug 修正：修復 /branch 分叉產生「tool_use ids were found without tool_result blocks」錯誤、/model 未顯示 Bedrock ARN 的 Effort 選項、Vertex AI/Bedrock structured-output 請求回傳 invalid_request_error、Vertex AI count_tokens proxy 400 錯誤、圖片最大尺寸由 2576px 修正為 2000px、assistant 訊息空白、settings.json 格式錯誤的 hooks 導致整個檔案失效、voice mode Caps Lock 按鍵綁定錯誤等。",
      links: [
        { label: "github/claude-code/v2.1.122", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.122", kind: "gh" }
      ]
    }
  },
  {
    id: "claude-creative-work-2026-04-28",
    date: "2026-04-28",
    version: "Creative Work 整合",
    category: "new",
    area: "desktop",
    product: "claude",
    title: "Claude for Creative Work：新增 Adobe CC、Blender、Autodesk 等 8 款創意軟體整合",
    summary: "Anthropic 宣布 Claude 與 Adobe Creative Cloud、Blender、Autodesk Fusion 等 8 款主流創意工具深度整合，可透過自然語言輔助 3D 建模、音樂製作、視覺設計等工作流程。",
    body: {
      kind: "feature",
      description: "Anthropic 發布 Claude for Creative Work，宣布 Claude 與多款主流創意軟體建立深度整合：（1）Adobe Creative Cloud（50+ 工具支援）；（2）Blender（以自然語言進行 3D 建模）；（3）Autodesk Fusion（3D 設計與修改）；（4）SketchUp（對話式 3D 建模）；（5）Ableton（音樂製作文件輔助）；（6）Resolume Arena/Wire（現場視覺演出）；（7）Affinity by Canva（批次生產任務）；（8）Splice（免版稅音樂素材搜尋）。Claude 可作為創意工作者的「隨需教學導師」，協助跨工具工作流程橋接、擴展自訂程式碼，並自動化批次處理與資產管理等重複性工作。Anthropic 亦宣布加入 Blender Development Fund，並與 Rhode Island School of Design、Ringling College 及 Goldsmiths University 藝術學程合作，支持創意計算教育課程。",
      links: [
        { label: "anthropic.com/news", href: "https://www.anthropic.com/news/claude-for-creative-work", kind: "doc" }
      ]
    }
  },
  {
    id: "2.1.121",
    date: "2026-04-28",
    version: "v2.1.121",
    category: "enh",
    area: "cli",
    product: "claude-code",
    title: "v2.1.121：MCP alwaysLoad、plugin prune、/skills 篩選、PostToolUse 輸出替換、全螢幕改善",
    summary: "MCP 設定新增 alwaysLoad 選項略過 Tool Search 延遲；plugin prune 清除孤立依賴；/skills 新增文字篩選框；PostToolUse Hooks 可替換所有工具輸出；全螢幕模式輸入與捲動體驗改善；修復記憶體洩漏。",
    body: {
      kind: "feature",
      description: "v2.1.121 包含多項改進：（1）MCP 設定新增 alwaysLoad 選項，設為 true 時該 server 所有工具直接可用，略過 Tool Search 延遲載入；（2）新增 claude plugin prune 指令，移除孤立的自動安裝套件依賴，plugin uninstall --prune 可同時串聯清除；（3）/skills 頁面新增輸入篩選框，可在長清單中快速搜尋 skill；（4）PostToolUse Hooks 現可透過 hookSpecificOutput.updatedToolOutput 替換所有工具輸出（原本僅限 MCP 工具）；（5）全螢幕模式改善：輸入時不再強制跳回底部、溢出終端機的彈窗可用方向鍵/PgUp/PgDn/Home/End/滾輪捲動、長 URL 跨行時點任意行即可開啟完整連結；（6）/terminal-setup 現在自動啟用 iTerm2「允許應用程式存取剪貼簿」設定；（7）MCP 伺服器啟動時遇到暫時性錯誤會自動重試最多 3 次；（8）修復處理影像及使用 /usage 時的多個記憶體洩漏問題。",
      links: [
        { label: "github/claude-code/v2.1.121", href: "https://github.com/anthropics/claude-code/releases/tag/v2.1.121", kind: "gh" }
      ]
    }
  },
  {
    id: "anthropic-sydney-office-2026-04-27",
    date: "2026-04-27",
    version: "Anthropic 雪梨辦公室",
    category: "new",
    area: "enterprise",
    product: "claude",
    title: "Anthropic 正式開設雪梨辦公室，任命 Theo Hourmouzis 為澳紐總經理",
    summary: "Anthropic 任命 Theo Hourmouzis 為澳洲及紐西蘭總經理，並正式在雪梨開設辦公室，強化亞太地區業務布局。",
    body: {
      kind: "feature",
      description: "Anthropic 宣布任命 Theo Hourmouzis 為澳洲及紐西蘭（ANZ）區域總經理，並正式開設雪梨辦公室。此舉標誌著 Anthropic 在亞太地區的戰略擴張，將為當地企業、政府機構及開發者提供更直接的在地支援與服務。雪梨辦公室是繼倫敦、都柏林之後，Anthropic 在英語系市場的重要據點。",
      links: [
        { label: "anthropic.com/news", href: "https://www.anthropic.com/news", kind: "doc" }
      ]
    }
  },
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
      description: "v2.1.120 帶來多項重要更新：（1）Windows 環境不再需要安裝 Git for Windows（Git Bash）——當 Git Bash 不存在時，Claude Code 改以 PowerShell 作為 shell 工具；（2）新增 claude ultrareview 非互動子命令，適合在 CI 流水線或腳本中使用，支援 stdout 輸出與 --json 選項；（3）Skills 可透過 \${CLAUDE_EFFORT} 變數取得目前 effort 等級；（4）子程序啟動時自動設定 AI_AGENT 環境變數，讓 gh CLI 等工具可正確將流量歸因至 Claude Code；（5）UI 改善：session 啟動速度加快（多 claude.ai connector 場景）、auto-compact 顯示小寫 'auto'（不顯示 token 計數）、終端機新增 PgUp/PgDn 捲動提示；（6）bug 修正：修復 stdio MCP 工具呼叫期間按 Esc 導致整個 server 連線關閉、--resume 後 /rewind 鍵盤輸入失效、非全螢幕模式終端機捲動回顯重複、auto 模式多行 bash 指令的危險 rm 權限提示、macOS/Linux 上 find 在大型目錄樹耗盡檔案描述符等問題。",
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
    summary: "新增 StopFailure hook 事件、\${CLAUDE_PLUGIN_DATA} 變數用於插件持久化狀態，回應文字逐行串流。",
    body: {
      kind: "feature",
      description: "新增 StopFailure hook 事件，在停止操作失敗時觸發。新增 \${CLAUDE_PLUGIN_DATA} 變數供插件儲存持久化狀態。插件代理程式新增 effort、maxTurns、disallowedTools 設定。終端通知可穿透 tmux 到達外層終端。回應文字現在逐行串流顯示。修正沙箱中 git log HEAD 的問題、cc log 在大型工作階段中靜默截斷、停止 hook 的無限迴圈等。",
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
