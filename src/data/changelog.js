// Changelog data — richly populated with real Claude Code and Claude updates, ordered newest to oldest
export const CHANGELOG = [
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
