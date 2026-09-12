// ============================================================
// i18n dictionary
// ============================================================
const I18N = {
    "zh-CN": {
        // connection
        connecting: "连接中...",
        connected: "已连接",
        disconnected: "已断开，重连中...",
        // nav
        nav_manual: "手动下载",
        nav_bookmark: "收藏夹导入",
        nav_recommend: "作品推荐",
        nav_follow: "已关注新作",
        nav_ranking: "排行榜",
        nav_search: "标签搜索",
        nav_user_search: "用户搜索",
        nav_user_detail: "用户详情",
        nav_settings: "设置",
        // manual
        manual_single: "单个添加",
        manual_url_ph: "URL 或作品 ID",
        btn_enqueue: "加入队列",
        manual_batch: "批量添加（每行一个）",
        btn_batch_enqueue: "批量加入队列",
        // bookmark
        bookmark_select: "选择收藏夹 HTML 文件",
        btn_parse: "解析链接",
        btn_enqueue_all: "全部加入队列",
        // recommend
        rec_mode: "推荐模式:",
        rec_auto: "自动推荐",
        rec_queue: "根据下载队列",
        rec_history: "根据历史记录",
        rec_from_work: "根据作品:",
        rec_pid_ph: "输入 PID",
        rec_similar: "推荐相似作品",
        rec_advanced: "高级推荐...",
        // follow
        follow_scope: "作品范围:",
        follow_all: "全部",
        follow_public: "公开",
        follow_private: "私密",
        follow_load: "加载新作",
        // ranking
        ranking_type: "类型:",
        ranking_day: "日榜",
        ranking_week: "周榜",
        ranking_month: "月榜",
        ranking_day_male: "男性向",
        ranking_day_female: "女性向",
        ranking_week_original: "原创",
        ranking_week_rookie: "新人",
        ranking_day_r18: "R-18",
        btn_fetch_ranking: "获取排行榜",
        // search
        search_tag: "标签:",
        search_tag_ph: "例如: 原神",
        search_sort: "排序:",
        sort_newest: "最新",
        sort_oldest: "最早",
        sort_popular: "最热",
        search_page: "页码:",
        search_pages: "页数:",
        btn_prev: "上一页",
        btn_next: "下一页",
        btn_backward: "← 向前",
        btn_forward: "向后 →",
        btn_search: "搜索",
        // user search
        usearch_word: "关键词:",
        usearch_ph: "用户名 / 账户名",
        usearch_btn: "搜索用户",
        // user detail
        udetail_uid: "UID:",
        udetail_uid_ph: "输入用户 UID",
        udetail_load: "加载用户",
        // settings
        settings_account: "账号",
        settings_token: "刷新令牌:",
        token_ph: "粘贴 Pixiv RefreshToken",
        token_help_title: "如何获取 RefreshToken",
        settings_language: "语言:",
        lang_auto: "自动",
        settings_download: "下载",
        settings_dir: "下载目录:",
        settings_proxy: "代理:",
        settings_dl_delay: "下载延迟(秒):",
        settings_api_delay: "API延迟(秒):",
        settings_workers: "并行线程(1-8):",
        settings_max_retries: "最大重试:",
        settings_rate_delay: "限速等待(秒):",
        settings_max_results: "默认结果数:",
        btn_save: "保存设置",
        btn_test_login: "测试登录",
        btn_test_latency: "测试延迟",
        // common labels
        label_count: "数量:",
        label_filter: "标签筛选:",
        filter_ph: "多个标签用逗号分隔(AND)",
        btn_clear: "清除",
        label_filter_type: "过滤:",
        filter_illust: "插画",
        filter_manga: "漫画",
        filter_novel: "小说",
        // footer
        footer_queue: "队列:",
        footer_failed: "失败:",
        btn_add_selected: "加入选中到队列",
        btn_recommend_selected: "根据选中推荐",
        btn_start_queue: "开始下载队列",
        btn_stop: "停止",
        btn_stopping: "停止中...",
        btn_clear_queue: "清空队列",
        btn_retry_failed: "重试失败作品",
        // logs
        logs_title: "📋 日志",
        // advanced modal
        adv_title: "高级推荐参数",
        adv_seeds: "种子作品 ID（bookmark_illust_ids）",
        adv_seeds_ph: "逗号分隔，最多 30 个，例如 123,456,789",
        adv_seeds_hint: "用于生成相似推荐的种子作品。留空则使用默认推荐逻辑。",
        adv_viewed: "已浏览作品 ID（viewed）",
        adv_viewed_ph: "逗号分隔，最多 30 个",
        adv_viewed_hint: "标记为已浏览的作品，影响推荐结果。",
        adv_ranking: "包含排行榜作品（include_ranking_illusts）",
        adv_ranking_hint: "推荐结果中是否包含当前排行榜上的作品。",
        adv_privacy: "包含隐私政策（include_privacy_policy）",
        adv_privacy_hint: "响应中是否附带隐私政策信息。",
        adv_limit: "返回数量上限",
        adv_limit_hint: "最大 120 条（Pixiv API 限制）。",
        btn_cancel: "取消",
        btn_execute: "执行推荐",
        btn_close: "关闭",
        // toasts
        toast_queue_saved: "队列已自动保存",
        toast_no_connection: "未连接到服务器",
        toast_need_url: "请输入 URL 或 ID",
        toast_need_urls: "请输入至少一个 URL",
        toast_select_file: "请选择 HTML 文件",
        toast_parsed: "解析到 {0} 个链接",
        toast_search_done: "搜索完成: {0} 条",
        toast_ranking_done: "排行榜获取完成: {0} 条",
        toast_recommend_done: "推荐完成: {0} 条",
        toast_follow_done: "关注新作: {0} 条",
        toast_user_search_done: "搜索完成: {0} 位用户",
        toast_user_detail_done: "用户详情加载完成: {0} 个作品",
        toast_no_select: "请先选择作品",
        toast_no_item: "当前页面没有可加入的作品",
        toast_first_page: "已在第一页",
        toast_need_tag: "请输入标签",
        toast_need_pid: "请输入 PID",
        toast_invalid_pid: "PID 无效",
        toast_need_keyword: "请输入关键词",
        toast_need_uid: "请输入 UID",
        toast_invalid_uid: "UID 无效",
        toast_need_token: "请先填写刷新令牌",
        toast_login_ok: "登录成功",
        toast_login_fail: "登录失败，请检查刷新令牌是否正确",
        toast_latency_ok: "延迟: {0}ms",
        toast_latency_slow: "延迟: {0}ms (较慢)",
        toast_latency_fail: "延迟测试失败: {0}",
        toast_latency_testing: "正在测试到 Cloudflare 的延迟...",
        toast_network_bad:
            "你的网络不佳，建议检查VPN和代理设置以获得更好的体验。",
        toast_confirm_clear: "确定清空队列？",
        toast_confirm_retry:
            "重试所有失败任务？将使用 -m 忽略次要错误并导出 JSON。",
        toast_adv_seeds_invalid: "种子作品 ID 无效: {0}",
        toast_adv_viewed_invalid: "已浏览 ID 无效: {0}",
        toast_adv_seeds_max: "种子作品最多 30 个",
        toast_adv_viewed_max: "已浏览作品最多 30 个",
        toast_adv_limit: "返回数量必须在 1-120 之间",
        toast_loaded_user: "已加载用户 UID: {0}",
        toast_selected_queued: "已加入选中到队列: {0} 个",
        // status
        status_requesting: "请求中: {0}",
        status_search_progress: "请求中: 第{0}页 ({1}/{2})",
        status_done: "完成: {0}",
        status_done_search: "完成: 从第{0}页起 {1}页，共 {2} 条",
        status_done_ranking: "完成: 共 {0} 条",
        status_done_recommend: "完成: {0} 条 (模式: {1})",
        status_filter: "筛选: {0}/{1} 条",
        status_loading_user: "正在加载用户信息...",
        status_loading_user_illusts:
            "正在加载作品列表 (第 {0} 页, 已获取 {1} 个)...",
        // loading text
        loading_ranking: "正在获取排行榜，请稍候...",
        loading_search: "正在获取搜索结果，请稍候...",
        loading_user: "正在加载用户信息...",
        loading_user_illusts: "正在加载作品列表 (第 {0} 页)...",
        loading_follow: "正在加载关注新作...",
        loading_usearch: "正在搜索用户...",
        loading_recommend: "正在获取推荐...",
        loading_adv_recommend: "正在执行高级推荐...",
        // table headers
        th_pid: "PID",
        th_title: "标题",
        th_pages: "页数",
        th_author: "作者",
        th_views: "浏览",
        th_bookmarks: "收藏",
        th_badges: "标记",
        th_tags: "标签",
        th_date: "日期",
        th_uid: "UID",
        th_name: "用户名",
        th_account: "账户名",
        th_followed: "关注状态",
        th_followed_yes: "已关注",
        th_title_link: "在新标签页打开作品页",
        th_author_link: "查看用户详情",
        th_user_name_link: "在 Pixiv 官方页打开",
        th_user_detail_link: "查看用户详情",
        meta_following: "已关注",
        meta_accept_request_yes: "✉️ 接受约稿",
        meta_accept_request_no: "✉️ 不接受约稿",
        meta_followers: "👥 关注者",
        meta_illusts: "🎨 作品",
        meta_novels: "📖 小说",
        meta_manga: "📚 漫画",
        meta_region: "🌍",
        no_result: "无结果",
        page_label: "第 {0} 页",
        more_btn: "加载更多 (已显示 {0} 个作品)",
        loading_more: "加载中...",
    },
    en: {
        connecting: "Connecting...",
        connected: "Connected",
        disconnected: "Disconnected, reconnecting...",
        nav_manual: "Manual",
        nav_bookmark: "Bookmarks",
        nav_recommend: "Recommend",
        nav_follow: "Following",
        nav_ranking: "Ranking",
        nav_search: "Tag Search",
        nav_user_search: "User Search",
        nav_user_detail: "User Detail",
        nav_settings: "Settings",
        manual_single: "Single URL",
        manual_url_ph: "URL or artwork ID",
        btn_enqueue: "Enqueue",
        manual_batch: "Batch (one per line)",
        btn_batch_enqueue: "Batch Enqueue",
        bookmark_select: "Select bookmarks HTML",
        btn_parse: "Parse",
        btn_enqueue_all: "Enqueue All",
        rec_mode: "Mode:",
        rec_auto: "Auto",
        rec_queue: "From queue",
        rec_history: "From history",
        rec_from_work: "From artwork:",
        rec_pid_ph: "Enter PID",
        rec_similar: "Recommend similar",
        rec_advanced: "Advanced...",
        follow_scope: "Scope:",
        follow_all: "All",
        follow_public: "Public",
        follow_private: "Private",
        follow_load: "Load new works",
        ranking_type: "Type:",
        ranking_day: "Daily",
        ranking_week: "Weekly",
        ranking_month: "Monthly",
        ranking_day_male: "Male",
        ranking_day_female: "Female",
        ranking_week_original: "Original",
        ranking_week_rookie: "Rookie",
        ranking_day_r18: "R-18",
        btn_fetch_ranking: "Fetch Ranking",
        search_tag: "Tag:",
        search_tag_ph: "e.g. genshin",
        search_sort: "Sort:",
        sort_newest: "Newest",
        sort_oldest: "Oldest",
        sort_popular: "Popular",
        search_page: "Page:",
        search_pages: "Pages:",
        btn_prev: "Prev",
        btn_next: "Next",
        btn_backward: "← Back",
        btn_forward: "Forward →",
        btn_search: "Search",
        usearch_word: "Keyword:",
        usearch_ph: "Username / Account",
        usearch_btn: "Search Users",
        udetail_uid: "UID:",
        udetail_uid_ph: "Enter user UID",
        udetail_load: "Load User",
        settings_account: "Account",
        settings_token: "Refresh Token:",
        token_ph: "Paste Pixiv RefreshToken",
        token_help_title: "How to get RefreshToken",
        settings_language: "Language:",
        lang_auto: "Auto",
        settings_download: "Download",
        settings_dir: "Download Dir:",
        settings_proxy: "Proxy:",
        settings_dl_delay: "Download delay(s):",
        settings_api_delay: "API delay(s):",
        settings_workers: "Parallel (1-8):",
        settings_max_retries: "Max retries:",
        settings_rate_delay: "Rate wait(s):",
        settings_max_results: "Default count:",
        btn_save: "Save",
        btn_test_login: "Test Login",
        btn_test_latency: "Test Latency",
        label_count: "Count:",
        label_filter: "Tag filter:",
        filter_ph: "Multiple tags, comma-separated (AND)",
        btn_clear: "Clear",
        label_filter_type: "Filter:",
        filter_illust: "Illust",
        filter_manga: "Manga",
        filter_novel: "Novel",
        footer_queue: "Queue:",
        footer_failed: "Failed:",
        btn_add_selected: "Add selected",
        btn_recommend_selected: "Recommend from selected",
        btn_start_queue: "Start Queue",
        btn_stop: "Stop",
        btn_stopping: "Stopping...",
        btn_clear_queue: "Clear Queue",
        btn_retry_failed: "Retry Failed",
        logs_title: "📋 Logs",
        adv_title: "Advanced Recommendation",
        adv_seeds: "Seed IDs (bookmark_illust_ids)",
        adv_seeds_ph: "Comma-separated, up to 30, e.g. 123,456,789",
        adv_seeds_hint:
            "Seed artworks used for similarity. Leave empty for default logic.",
        adv_viewed: "Viewed IDs (viewed)",
        adv_viewed_ph: "Comma-separated, up to 30",
        adv_viewed_hint: "Artworks marked as viewed, influences results.",
        adv_ranking: "Include ranking (include_ranking_illusts)",
        adv_ranking_hint: "Include current ranking artworks in results.",
        adv_privacy: "Include privacy policy (include_privacy_policy)",
        adv_privacy_hint: "Include privacy policy info in response.",
        adv_limit: "Limit",
        adv_limit_hint: "Max 120 (Pixiv API limit).",
        btn_cancel: "Cancel",
        btn_execute: "Execute",
        btn_close: "Close",
        toast_queue_saved: "Queue saved",
        toast_no_connection: "Not connected to server",
        toast_need_url: "Please enter URL or ID",
        toast_need_urls: "Please enter at least one URL",
        toast_select_file: "Please select HTML file",
        toast_parsed: "Parsed {0} link(s)",
        toast_search_done: "Search complete: {0}",
        toast_ranking_done: "Ranking loaded: {0}",
        toast_recommend_done: "Recommendations loaded: {0}",
        toast_follow_done: "Following new works: {0}",
        toast_user_search_done: "Found {0} user(s)",
        toast_user_detail_done: "User detail loaded: {0} artworks",
        toast_no_select: "Please select first",
        toast_no_item: "No selectable artwork on this page",
        toast_first_page: "Already on first page",
        toast_need_tag: "Please enter a tag",
        toast_need_pid: "Please enter PID",
        toast_invalid_pid: "Invalid PID",
        toast_need_keyword: "Please enter keyword",
        toast_need_uid: "Please enter UID",
        toast_invalid_uid: "Invalid UID",
        toast_need_token: "Please fill in refresh token",
        toast_login_ok: "Login succeeded",
        toast_login_fail: "Login failed, check your refresh token",
        toast_latency_ok: "Latency: {0}ms",
        toast_latency_slow: "Latency: {0}ms (slow)",
        toast_latency_fail: "Latency test failed: {0}",
        toast_latency_testing: "Testing Cloudflare latency...",
        toast_network_bad:
            "Your network seems slow. Check VPN/proxy settings for a better experience.",
        toast_confirm_clear: "Clear the queue?",
        toast_confirm_retry:
            "Retry all failed tasks? Will use -m to ignore minor errors and export JSON.",
        toast_adv_seeds_invalid: "Invalid seed ID: {0}",
        toast_adv_viewed_invalid: "Invalid viewed ID: {0}",
        toast_adv_seeds_max: "Seeds limited to 30",
        toast_adv_viewed_max: "Viewed IDs limited to 30",
        toast_adv_limit: "Limit must be between 1 and 120",
        toast_loaded_user: "Loaded user UID: {0}",
        toast_selected_queued: "Enqueued {0} selected",
        status_requesting: "Requesting: {0}",
        status_search_progress: "Requesting: page {0} ({1}/{2})",
        status_done: "Done: {0}",
        status_done_search: "Done: from page {0}, {1} page(s), {2} items",
        status_done_ranking: "Done: {0} items",
        status_done_recommend: "Done: {0} items (mode: {1})",
        status_filter: "Filter: {0}/{1}",
        status_loading_user: "Loading user info...",
        status_loading_user_illusts:
            "Loading artworks (page {0}, {1} fetched)...",
        loading_ranking: "Loading ranking, please wait...",
        loading_search: "Loading search results, please wait...",
        loading_user: "Loading user info...",
        loading_user_illusts: "Loading artworks (page {0})...",
        loading_follow: "Loading followed artists' new works...",
        loading_usearch: "Searching users...",
        loading_recommend: "Loading recommendations...",
        loading_adv_recommend: "Executing advanced recommendation...",
        th_pid: "PID",
        th_title: "Title",
        th_pages: "Pages",
        th_author: "Author",
        th_views: "Views",
        th_bookmarks: "Bookmarks",
        th_badges: "Badges",
        th_tags: "Tags",
        th_date: "Date",
        th_uid: "UID",
        th_name: "Username",
        th_account: "Account",
        th_followed: "Following",
        th_followed_yes: "Following",
        th_title_link: "Open artwork page in new tab",
        th_author_link: "View user details",
        th_user_name_link: "Open on Pixiv",
        th_user_detail_link: "View user details",
        meta_following: "Following",
        meta_accept_request_yes: "✉️ Accepts commissions",
        meta_accept_request_no: "✉️ No commissions",
        meta_followers: "👥 Followers",
        meta_illusts: "🎨 Artworks",
        meta_novels: "📖 Novels",
        meta_manga: "📚 Manga",
        meta_region: "🌍",
        no_result: "No results",
        page_label: "Page {0}",
        more_btn: "Load more ({0} artworks shown)",
        loading_more: "Loading...",
    },
};

let currentLang = "en";

function t(key, ...args) {
    let s =
        (I18N[currentLang] && I18N[currentLang][key]) || I18N["en"][key] || key;
    args.forEach((arg, i) => {
        s = s.replace(new RegExp(`\\{${i}\\}`, "g"), arg);
    });
    return s;
}

function detectLang() {
    // Priority: backend config > localStorage > navigator.language
    const saved = localStorage.getItem("nagato_lang");
    if (saved && (saved === "zh-CN" || saved === "en")) return saved;
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("zh") ? "zh-CN" : "en";
}

function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
        el.title = t(el.dataset.i18nTitle);
    });
    // update footer labels that have suffix "(0)"
    updateSelectionCount();
    // switch header
    document.getElementById("conn-text").textContent = isConnected
        ? t("connected")
        : t("connecting");
    // language switcher
    const sw = document.getElementById("lang-switcher");
    if (sw) sw.value = currentLang;
}

function switchLanguage(lang) {
    if (lang !== "zh-CN" && lang !== "en") return;
    currentLang = lang;
    localStorage.setItem("nagato_lang", lang);
    applyI18n();
    // also update config in backend
    send({ cmd: "set_language", lang });
    renderTokenHelp();
}

function renderTokenHelp() {
    const el = document.getElementById("token-help-body");
    if (!el) return;
    if (currentLang === "zh-CN") {
        el.innerHTML = `
            <p style="margin-bottom:12px">由于 Pixiv 已不再支持用户名密码登录，您需要先获取一个 RefreshToken。以下方式任选其一：</p>
            <div style="background:#1e2228; border-radius:6px; padding:12px; margin-bottom:12px">
                <div style="color:#7eb6ff; font-weight:600; margin-bottom:8px">方式一：Pixiv-Viewer 网页端（推荐）</div>
                <ol style="margin-left:18px; color:#a0a4ab">
                    <li>安装 <a href="https://einaregilsson.com/redirector/" target="_blank" style="color:#7eb6ff">Redirector</a> 和 <a href="https://www.tampermonkey.net/index.php" target="_blank" style="color:#7eb6ff">Tampermonkey</a> 扩展</li>
                    <li>导入 Redirector 规则：<code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">https://pixiv.pictures/helper/Redirector.json</code></li>
                    <li>安装 <a href="https://fastly.jsdelivr.net/gh/asadahimeka/pixiv-viewer@master/public/helper/helper.user.js" target="_blank" style="color:#7eb6ff">登录工具用户脚本</a></li>
                    <li>访问 <a href="https://pixiv.pictures/account/login" target="_blank" style="color:#7eb6ff">pixiv.pictures/account/login</a>，选择 <b>App API (OAuth)</b> 登录</li>
                    <li>登录成功后，在 <a href="https://pixiv.pictures/setting/others" target="_blank" style="color:#7eb6ff">设置页面</a> 导出 RefreshToken</li>
                </ol>
            </div>
            <div style="background:#1e2228; border-radius:6px; padding:12px; margin-bottom:12px">
                <div style="color:#7eb6ff; font-weight:600; margin-bottom:8px">方式二：pxder（Node.js）</div>
                <ol style="margin-left:18px; color:#a0a4ab">
                    <li>安装 Node.js 16+，执行 <code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">npm i -g pxder</code></li>
                    <li>如需代理：<code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">pxder --setting</code> → 选择 5 设置代理</li>
                    <li>执行 <code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">pxder --login</code> 完成登录</li>
                    <li>执行 <code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">pxder --export-token</code> 导出 Token</li>
                </ol>
            </div>
            <div style="background:#1e2228; border-radius:6px; padding:12px; margin-bottom:12px">
                <div style="color:#7eb6ff; font-weight:600; margin-bottom:8px">方式三：PixEz（Android/iOS）</div>
                <ol style="margin-left:18px; color:#a0a4ab">
                    <li>从 <a href="https://github.com/Notsfsssf/pixez-flutter" target="_blank" style="color:#7eb6ff">GitHub</a> 下载安装</li>
                    <li>登录后进入 <b>更多 → 账户信息 → Token export</b> 导出</li>
                </ol>
            </div>
            <p style="color:#f59e0b; font-size:12px; margin-top:12px">⚠️ RefreshToken 时效较长，登录一次保存好即可长期使用。如果无法直连 Pixiv，请先在设置中配置代理。</p>
            <p style="color:#808590; font-size:12px; margin-top:8px">原始教程：<a href="https://www.nanoka.top/posts/e78ef86/" target="_blank" style="color:#7eb6ff">https://www.nanoka.top/posts/e78ef86/</a></p>
        `;
    } else {
        el.innerHTML = `
            <p style="margin-bottom:12px">Pixiv no longer supports username/password login. You need a RefreshToken. Choose one of the following methods:</p>
            <div style="background:#1e2228; border-radius:6px; padding:12px; margin-bottom:12px">
                <div style="color:#7eb6ff; font-weight:600; margin-bottom:8px">Method 1: Pixiv-Viewer (recommended)</div>
                <ol style="margin-left:18px; color:#a0a4ab">
                    <li>Install <a href="https://einaregilsson.com/redirector/" target="_blank" style="color:#7eb6ff">Redirector</a> and <a href="https://www.tampermonkey.net/index.php" target="_blank" style="color:#7eb6ff">Tampermonkey</a></li>
                    <li>Import redirect rule: <code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">https://pixiv.pictures/helper/Redirector.json</code></li>
                    <li>Install the <a href="https://fastly.jsdelivr.net/gh/asadahimeka/pixiv-viewer@master/public/helper/helper.user.js" target="_blank" style="color:#7eb6ff">login helper userscript</a></li>
                    <li>Visit <a href="https://pixiv.pictures/account/login" target="_blank" style="color:#7eb6ff">pixiv.pictures/account/login</a>, choose App API (OAuth)</li>
                    <li>Export the token from <a href="https://pixiv.pictures/setting/others" target="_blank" style="color:#7eb6ff">Settings</a></li>
                </ol>
            </div>
            <div style="background:#1e2228; border-radius:6px; padding:12px; margin-bottom:12px">
                <div style="color:#7eb6ff; font-weight:600; margin-bottom:8px">Method 2: pxder (Node.js)</div>
                <ol style="margin-left:18px; color:#a0a4ab">
                    <li>Install Node.js 16+, run <code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">npm i -g pxder</code></li>
                    <li>Proxy (if needed): <code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">pxder --setting</code> → option 5</li>
                    <li>Run <code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">pxder --login</code></li>
                    <li>Run <code style="background:#2f343c; padding:2px 6px; border-radius:3px; font-size:12px">pxder --export-token</code></li>
                </ol>
            </div>
            <div style="background:#1e2228; border-radius:6px; padding:12px; margin-bottom:12px">
                <div style="color:#7eb6ff; font-weight:600; margin-bottom:8px">Method 3: PixEz (mobile)</div>
                <ol style="margin-left:18px; color:#a0a4ab">
                    <li>Download from <a href="https://github.com/Notsfsssf/pixez-flutter" target="_blank" style="color:#7eb6ff">GitHub</a></li>
                    <li>More → Account → Token export</li>
                </ol>
            </div>
            <p style="color:#f59e0b; font-size:12px; margin-top:12px">⚠️ RefreshToken is long-lived. Save it once after login. If you cannot reach Pixiv directly, configure a proxy first.</p>
            <p style="color:#808590; font-size:12px; margin-top:8px">Original guide: <a href="https://www.nanoka.top/posts/e78ef86/" target="_blank" style="color:#7eb6ff">https://www.nanoka.top/posts/e78ef86/</a></p>
        `;
    }
}

// ============================================================
// Global state
// ============================================================
const filterSets = {
    "ranking-tag-cloud": new Set(),
    "udetail-tag-cloud": new Set(),
};

let parsedBookmarkUrls = [];
let rankingItems = [],
    rankingItemsAll = [];
let searchItems = [],
    userSearchItems = [];
let recommendItems = [],
    followItems = [];
let userDetailItems = [],
    userDetailAllItems = [];
let userDetailUid = null;
let followCurrentOffset = 0;
let followPage = 1;
let isConnected = false;

// ============================================================
// WebSocket
// ============================================================
let ws = null;
let reconnectTimer = null;

function connect() {
    const proto = location.protocol === "https:" ? "wss:" : "ws:";
    ws = new WebSocket(proto + "//" + location.host + "/ws");
    ws.onopen = () => {
        isConnected = true;
        document.getElementById("conn-status").className = "status-dot online";
        document.getElementById("conn-text").textContent = t("connected");
        // notify backend of language
        send({ cmd: "set_language", lang: currentLang });
    };
    ws.onclose = () => {
        isConnected = false;
        document.getElementById("conn-status").className = "status-dot offline";
        document.getElementById("conn-text").textContent = t("disconnected");
        if (reconnectTimer) clearTimeout(reconnectTimer);
        reconnectTimer = setTimeout(connect, 2000);
    };
    ws.onerror = () => {};
    ws.onmessage = (ev) => {
        try {
            handleMessage(JSON.parse(ev.data));
        } catch (e) {
            console.error(e);
        }
    };
}

function send(obj) {
    if (ws && ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(obj));
    else toast(t("toast_no_connection"), "error");
}

function handleMessage(msg) {
    switch (msg.type) {
        case "init":
            fillConfig(msg.config);
            updateQueueStatus(msg.queue, msg.failed, msg.running, msg.stopping);
            break;
        case "log":
            appendLog(msg.msg, msg.level);
            break;
        case "queue_status":
            updateQueueStatus(msg.queue, msg.failed, msg.running, msg.stopping);
            break;
        case "queue_saved":
            toast(t("toast_queue_saved"), "success");
            break;
        case "search_result":
            renderSearchResults(msg.items, msg.start_page, msg.pages);
            break;
        case "search_progress":
            document.getElementById("search-list").innerHTML =
                `<div class="loading"><div class="spinner"></div>${t("loading_search")}</div>`;
            document.getElementById("search-status").textContent = t(
                "status_search_progress",
                msg.page,
                msg.current,
                msg.total,
            );
            break;
        case "ranking_result":
            renderRankingResults(msg.items);
            break;
        case "recommend_result":
            renderRecommendResults(msg.items, msg.mode);
            break;
        case "follow_result":
            renderFollowResults(msg.items, msg.offset, msg.has_more);
            break;
        case "bookmark_parsed":
            renderBookmarkPreview(msg.urls);
            break;
        case "config":
            fillConfig(msg.data);
            break;
        case "success":
            toast(msg.msg, "success");
            break;
        case "error":
            toast(msg.msg, "error");
            break;
        case "login_result":
            toast(
                msg.success ? t("toast_login_ok") : t("toast_login_fail"),
                msg.success ? "success" : "error",
            );
            break;
        case "language_set":
            // no-op, already applied locally
            break;
        case "user_search_result":
            renderUserSearchResults(msg.items);
            break;
        case "user_detail_phase":
            handleUserDetailPhase(msg);
            break;
        case "user_detail_result":
            renderUserDetail(msg.user, msg.items);
            break;
        case "rate_limited":
            showRateLimitToast(msg.delay);
            break;
        case "latency_result":
            if (msg.success) {
                const slow = msg.latency > 300;
                toast(
                    slow
                        ? t("toast_latency_slow", msg.latency)
                        : t("toast_latency_ok", msg.latency),
                    slow ? "warn" : "success",
                );
            } else {
                toast(t("toast_latency_fail", msg.error), "error");
            }
            break;
        case "startup_latency":
            if (msg.latency > 300) {
                toast(t("toast_network_bad"), "warn");
            }
            break;
    }
}

// ============================================================
// Toast & logs
// ============================================================
let toastTimer = null;
let rateLimitTimer = null;

function clearAllToasts() {
    if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = null;
    }
    if (rateLimitTimer) {
        clearInterval(rateLimitTimer);
        rateLimitTimer = null;
    }
}

function toast(msg, type = "") {
    clearAllToasts();
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.className = "toast show " + type;
    toastTimer = setTimeout(() => {
        el.className = "toast " + type;
    }, 2500);
}

function showRateLimitToast(delaySeconds) {
    clearAllToasts();
    const endTime = Date.now() + delaySeconds * 1000;
    const el = document.getElementById("toast");
    const tick = () => {
        const remaining = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
        if (remaining <= 0) {
            el.className = "toast";
            if (rateLimitTimer) {
                clearInterval(rateLimitTimer);
                rateLimitTimer = null;
            }
            return;
        }
        const prefix =
            currentLang === "zh-CN"
                ? "⚠️ 触发 API 速率限制"
                : "⚠️ Rate limit triggered";
        const suffix =
            currentLang === "zh-CN" ? "秒后自动重试" : "s until retry";
        el.textContent = `${prefix}，${remaining} ${suffix}...`;
        el.className = "toast show warn";
    };
    tick();
    rateLimitTimer = setInterval(tick, 500);
}

function appendLog(msg, level = "info") {
    const body = document.getElementById("logs-body");
    const line = document.createElement("div");
    line.className = "log-line " + level;
    line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    body.appendChild(line);
    body.scrollTop = body.scrollHeight;
    while (body.children.length > 500) body.removeChild(body.firstChild);
}

function toggleLogs() {
    const logs = document.getElementById("logs");
    logs.classList.toggle("collapsed");
    document.getElementById("log-toggle").textContent = logs.classList.contains(
        "collapsed",
    )
        ? "▲"
        : "▼";
}

// ============================================================
// Queue status
// ============================================================
function updateQueueStatus(q, f, running, stopping) {
    document.getElementById("queue-count").textContent = q;
    document.getElementById("failed-count").textContent = f;
    const btnStart = document.getElementById("btn-start");
    const btnStop = document.getElementById("btn-stop");

    if (stopping) {
        btnStart.disabled = true;
        btnStop.disabled = true;
        btnStop.textContent = t("btn_stopping");
    } else if (running) {
        btnStart.disabled = true;
        btnStop.disabled = false;
        btnStop.textContent = t("btn_stop");
    } else {
        btnStart.disabled = false;
        btnStop.disabled = true;
        btnStop.textContent = t("btn_stop");
    }

    document.querySelectorAll(".add-queue-btn").forEach((btn) => {
        if (running) {
            btn.disabled = true;
        } else {
            if (btn.id === "bookmark-add-btn") {
                btn.disabled = parsedBookmarkUrls.length === 0;
            } else {
                btn.disabled = false;
            }
        }
    });

    updateSelectionCount();
}

// ============================================================
// Nav
// ============================================================
document.querySelectorAll("nav button").forEach((btn) => {
    btn.onclick = () => {
        document
            .querySelectorAll("nav button")
            .forEach((b) => b.classList.remove("active"));
        document
            .querySelectorAll(".tab")
            .forEach((t) => t.classList.remove("active"));
        btn.classList.add("active");
        document
            .getElementById("tab-" + btn.dataset.tab)
            .classList.add("active");
        updateSelectionCount();
    };
});

// ============================================================
// Manual / bookmark
// ============================================================
function addSingleUrl() {
    const url = document.getElementById("manual-url").value.trim();
    if (!url) return toast(t("toast_need_url"), "error");
    send({ cmd: "add_urls", urls: [url] });
    document.getElementById("manual-url").value = "";
}

function addBatchUrls() {
    const text = document.getElementById("manual-batch").value.trim();
    if (!text) return toast(t("toast_need_urls"), "error");
    const urls = text
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s);
    send({ cmd: "add_urls", urls });
    document.getElementById("manual-batch").value = "";
}

function parseBookmark() {
    const fi = document.getElementById("bookmark-file");
    if (!fi.files.length) return toast(t("toast_select_file"), "error");
    const reader = new FileReader();
    reader.onload = (e) =>
        send({ cmd: "parse_bookmark", html: e.target.result });
    reader.readAsText(fi.files[0], "utf-8");
}

function renderBookmarkPreview(urls) {
    parsedBookmarkUrls = urls;
    document.getElementById("bookmark-preview").innerHTML = urls
        .map(
            (u) =>
                `<div style="padding:4px 0; border-bottom:1px solid #2f343c">${escapeHtml(u)}</div>`,
        )
        .join("");
    const btn = document.getElementById("bookmark-add-btn");
    const running = document.getElementById("btn-start").disabled;
    btn.disabled = running || urls.length === 0;
    toast(t("toast_parsed", urls.length), "success");
}

function addBookmarkUrls() {
    if (!parsedBookmarkUrls.length) return;
    send({ cmd: "add_urls", urls: parsedBookmarkUrls });
}

// ============================================================
// Sorting
// ============================================================
const WORK_COLUMNS = [
    { key: "id", get: "th_pid", numeric: true },
    { key: "title", get: "th_title", numeric: false },
    { key: "page_count", get: "th_pages", numeric: true },
    { key: "author", get: "th_author", numeric: false },
    { key: "views", get: "th_views", numeric: true },
    { key: "bookmarks", get: "th_bookmarks", numeric: true },
    { key: "badges", get: "th_badges", numeric: false, sortable: false },
    { key: "tags", get: "th_tags", numeric: false },
    { key: "date", get: "th_date", numeric: false },
];

const TABLE_COLUMNS = {
    "ranking-list": WORK_COLUMNS,
    "search-list": WORK_COLUMNS,
    "recommend-list": WORK_COLUMNS,
    "follow-list": WORK_COLUMNS,
    "user-detail-list": [
        { key: "id", get: "th_pid", numeric: true },
        { key: "title", get: "th_title", numeric: false },
        { key: "page_count", get: "th_pages", numeric: true },
        { key: "views", get: "th_views", numeric: true },
        { key: "bookmarks", get: "th_bookmarks", numeric: true },
        { key: "badges", get: "th_badges", numeric: false, sortable: false },
        { key: "tags", get: "th_tags", numeric: false },
        { key: "date", get: "th_date", numeric: false },
    ],
};

const sortState = {
    "ranking-list": { col: null, asc: true },
    "search-list": { col: null, asc: true },
    "recommend-list": { col: null, asc: true },
    "follow-list": { col: null, asc: true },
    "user-detail-list": { col: null, asc: true },
};

function getSortValue(item, key) {
    switch (key) {
        case "id":
            return item.id || 0;
        case "title":
            return (item.title || "").toLowerCase();
        case "page_count":
            return item.page_count || 1;
        case "author":
            return (item.author || "").toLowerCase();
        case "views":
            return item.views || 0;
        case "bookmarks":
            return item.bookmarks || 0;
        case "tags":
            return (item.tags || []).join(",").toLowerCase();
        case "date":
            return item.date || "";
        default:
            return "";
    }
}

function sortTable(containerId, colKey) {
    const state = sortState[containerId];
    if (state.col === colKey) state.asc = !state.asc;
    else {
        state.col = colKey;
        state.asc = true;
    }
    applySort(containerId);
}

function applySort(containerId) {
    const state = sortState[containerId];
    let items;
    if (containerId === "ranking-list") items = rankingItems;
    else if (containerId === "search-list") items = searchItems;
    else if (containerId === "recommend-list") items = recommendItems;
    else if (containerId === "follow-list") items = followItems;
    else if (containerId === "user-detail-list") items = userDetailItems;
    else return;
    if (!items || !items.length) return;

    if (state.col) {
        const colDef = TABLE_COLUMNS[containerId].find(
            (c) => c.key === state.col,
        );
        const numeric = colDef ? colDef.numeric : false;
        items.sort((a, b) => {
            let va = getSortValue(a, state.col);
            let vb = getSortValue(b, state.col);
            if (numeric) {
                const diff = (va || 0) - (vb || 0);
                return state.asc ? diff : -diff;
            } else {
                va = String(va);
                vb = String(vb);
                if (va < vb) return state.asc ? -1 : 1;
                if (va > vb) return state.asc ? 1 : -1;
                return 0;
            }
        });
    }
    renderTable(containerId, items);
}

// ============================================================
// Render table
// ============================================================
function renderTable(containerId, items) {
    const container = document.getElementById(containerId);
    if (!items.length) {
        container.innerHTML = `<div style="padding:20px; text-align:center; color:#666">${t("no_result")}</div>`;
        updateSelectionCount();
        return;
    }

    const selectedPids = new Set();
    container.querySelectorAll("tr.selected").forEach((tr) => {
        const firstTd = tr.querySelector("td");
        if (firstTd) selectedPids.add(firstTd.textContent.trim());
    });

    const state = sortState[containerId];
    const cols = TABLE_COLUMNS[containerId];

    const thead = cols
        .map((c) => {
            const sortable = c.sortable !== false;
            const indicator =
                state.col === c.key ? (state.asc ? " ▲" : " ▼") : "";
            const cls = sortable ? "sortable-th" : "";
            const align = c.numeric ? ' style="text-align:right"' : "";
            const onclick = sortable
                ? ` onclick="sortTable('${containerId}', '${c.key}')"`
                : "";
            return `<th${align} class="${cls}"${onclick}>${t(c.get)}${indicator}</th>`;
        })
        .join("");

    const rows = items
        .map((it, idx) => {
            const isSelected = selectedPids.has(String(it.id));
            let badges = "";
            if (it.ai_generated) badges += '<span class="badge ai">AI</span>';
            if (it.restriction) {
                const cls = it.restriction.toLowerCase().replace("-", "");
                badges += `<span class="badge ${cls}">${it.restriction}</span>`;
            }
            const tagsHtml = (it.tags || [])
                .slice(0, 5)
                .map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`)
                .join("");

            const titleHtml = `<a href="https://www.pixiv.net/artworks/${it.id}"
            target="_blank" rel="noopener"
            onclick="event.stopPropagation()"
            style="color:#7eb6ff; text-decoration:none; border-bottom:1px dashed #7eb6ff;"
            title="${t("th_title_link")}">${escapeHtml(truncate(it.title, 30))}</a>`;

            let tds = "";
            for (const c of cols) {
                switch (c.key) {
                    case "id":
                        tds += `<td>${it.id}</td>`;
                        break;
                    case "title":
                        tds += `<td>${titleHtml}</td>`;
                        break;
                    case "page_count":
                        tds += `<td style="text-align:right">${it.page_count || 1}</td>`;
                        break;
                    case "author":
                        if (it.author_id) {
                            tds += `<td><a href="#" onclick="event.preventDefault(); event.stopPropagation(); openUserDetail(${it.author_id}); return false;" style="color:#7eb6ff; text-decoration:none; border-bottom:1px dashed #7eb6ff;" title="${t("th_author_link")}">${escapeHtml(it.author)}</a></td>`;
                        } else {
                            tds += `<td>${escapeHtml(it.author)}</td>`;
                        }
                        break;
                    case "views":
                        tds += `<td style="text-align:right">${formatNum(it.views)}</td>`;
                        break;
                    case "bookmarks":
                        tds += `<td style="text-align:right">${formatNum(it.bookmarks)}</td>`;
                        break;
                    case "badges":
                        tds += `<td>${badges}</td>`;
                        break;
                    case "tags":
                        tds += `<td>${tagsHtml}</td>`;
                        break;
                    case "date":
                        tds += `<td>${it.date || ""}</td>`;
                        break;
                }
            }

            return `<tr data-idx="${idx}" class="${isSelected ? "selected" : ""}" onclick="toggleRow(this)">${tds}</tr>`;
        })
        .join("");

    container.innerHTML = `<table><thead><tr>${thead}</tr></thead><tbody>${rows}</tbody></table>`;
    updateSelectionCount();
}

function toggleRow(tr) {
    tr.classList.toggle("selected");
    updateSelectionCount();
}

function getSelectedUrls(containerId, items) {
    const urls = [];
    document.querySelectorAll(`#${containerId} tr.selected`).forEach((tr) => {
        const it = items[parseInt(tr.dataset.idx)];
        if (it) urls.push(`https://www.pixiv.net/artworks/${it.id}`);
    });
    return urls;
}

function formatNum(n) {
    return (n || 0).toLocaleString();
}
function truncate(s, n) {
    return !s ? "" : s.length > n ? s.slice(0, n) + "..." : s;
}
function escapeHtml(s) {
    if (!s) return "";
    return String(s).replace(
        /[&<>"']/g,
        (c) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            })[c],
    );
}

// ============================================================
// Selection
// ============================================================
function getActiveTab() {
    const active = document.querySelector("nav button.active");
    return active ? active.dataset.tab : null;
}

function getSelectionInfo() {
    const tab = getActiveTab();
    if (tab === "ranking")
        return { containerId: "ranking-list", items: rankingItems };
    if (tab === "search")
        return { containerId: "search-list", items: searchItems };
    if (tab === "recommend")
        return { containerId: "recommend-list", items: recommendItems };
    if (tab === "follow")
        return { containerId: "follow-list", items: followItems };
    if (tab === "user-detail")
        return { containerId: "user-detail-list", items: userDetailItems };
    return null;
}

function updateSelectionCount() {
    const info = getSelectionInfo();
    const btn = document.getElementById("btn-add-selected");
    const btnRec = document.getElementById("btn-recommend-selected");
    if (!btn) return;
    if (!info) {
        btn.innerHTML = `${t("btn_add_selected")} (0)`;
        btn.disabled = true;
        if (btnRec) {
            btnRec.innerHTML = `${t("btn_recommend_selected")} (0)`;
            btnRec.disabled = true;
        }
        return;
    }
    const container = document.getElementById(info.containerId);
    const count = container
        ? container.querySelectorAll("tr.selected").length
        : 0;
    btn.innerHTML = `${t("btn_add_selected")} (${count})`;
    const isRunning = document.getElementById("btn-start").disabled;
    btn.disabled = count === 0 || isRunning;

    if (btnRec) {
        btnRec.innerHTML = `${t("btn_recommend_selected")} (${count})`;
        btnRec.disabled = count === 0;
    }
}

function addSelectedToQueue() {
    const info = getSelectionInfo();
    if (!info) return toast(t("toast_no_item"), "error");
    const urls = getSelectedUrls(info.containerId, info.items);
    if (!urls.length) return toast(t("toast_no_select"), "error");
    send({ cmd: "add_urls", urls });
    document
        .querySelectorAll(`#${info.containerId} tr.selected`)
        .forEach((tr) => tr.classList.remove("selected"));
    updateSelectionCount();
    toast(t("toast_selected_queued", urls.length), "success");
}

// ============================================================
// Ranking
// ============================================================
function fetchRanking() {
    const mode = document.getElementById("ranking-mode").value;
    const limit =
        parseInt(document.getElementById("ranking-limit").value) || 30;

    document.getElementById("ranking-list").innerHTML =
        `<div class="loading"><div class="spinner"></div>${t("loading_ranking")}</div>`;
    document.getElementById("btn-fetch-ranking").disabled = true;
    document.getElementById("ranking-status").textContent = t(
        "status_requesting",
        `${mode} / ${limit}`,
    );
    send({ cmd: "ranking", mode, limit });
}

function renderRankingResults(items) {
    rankingItemsAll = items;
    document.getElementById("ranking-filter").value = "";
    filterSets["ranking-tag-cloud"].clear();
    document.getElementById("ranking-filter-status").textContent = "";
    rankingItems = items.slice();
    buildTagCloud("ranking-tag-cloud", items, "filterRankingByTags");
    renderTable("ranking-list", rankingItems);
    document.getElementById("btn-fetch-ranking").disabled = false;
    document.getElementById("ranking-status").textContent = t(
        "status_done_ranking",
        items.length,
    );
    toast(t("toast_ranking_done", items.length), "success");
}

function filterRankingByTags() {
    const rawInput = document.getElementById("ranking-filter").value.trim();
    const manualTags = rawInput
        ? rawInput
              .split(/[,，]/)
              .map((s) => s.trim().toLowerCase())
              .filter((s) => s)
        : [];
    const chipTags = [...filterSets["ranking-tag-cloud"]].map((x) =>
        x.toLowerCase(),
    );
    const keywords = [...new Set([...manualTags, ...chipTags])];

    if (keywords.length === 0) {
        rankingItems = rankingItemsAll.slice();
    } else {
        rankingItems = rankingItemsAll.filter((it) => {
            const tagStr = (it.tags || []).join(" ").toLowerCase();
            return keywords.every((k) => tagStr.includes(k));
        });
    }
    renderTable("ranking-list", rankingItems);
    const total = rankingItemsAll.length;
    const shown = rankingItems.length;
    document.getElementById("ranking-filter-status").textContent =
        keywords.length ? t("status_filter", shown, total) : "";
}

function clearRankingFilter() {
    document.getElementById("ranking-filter").value = "";
    filterSets["ranking-tag-cloud"].clear();
    document
        .querySelectorAll("#ranking-tag-cloud .tag-chip")
        .forEach((el) => el.classList.remove("active"));
    filterRankingByTags();
}

// ============================================================
// Search
// ============================================================
function doSearch() {
    const tag = document.getElementById("search-tag").value.trim();
    if (!tag) return toast(t("toast_need_tag"), "error");
    const sort = document.getElementById("search-sort").value;
    const startPage =
        parseInt(document.getElementById("search-page").value) || 1;
    const pages = parseInt(document.getElementById("search-pages").value) || 1;

    document.getElementById("search-list").innerHTML =
        `<div class="loading"><div class="spinner"></div>${t("loading_search")}</div>`;
    document.getElementById("btn-search").disabled = true;
    document.getElementById("search-status").textContent = t(
        "status_requesting",
        `${tag} | ${startPage}/${pages}`,
    );
    send({
        cmd: "search",
        tag,
        sort,
        start_page: startPage,
        pages,
        filters: {
            illust: document.getElementById("f-illust").checked,
            manga: document.getElementById("f-manga").checked,
            novel: document.getElementById("f-novel").checked,
        },
    });
}

function searchPrev() {
    const p = parseInt(document.getElementById("search-page").value) || 1;
    if (p > 1) {
        document.getElementById("search-page").value = p - 1;
        doSearch();
    }
}
function searchNext() {
    const p = parseInt(document.getElementById("search-page").value) || 1;
    document.getElementById("search-page").value = p + 1;
    doSearch();
}
function searchBackward() {
    const p = parseInt(document.getElementById("search-page").value) || 1;
    const n = parseInt(document.getElementById("search-pages").value) || 1;
    const newPage = Math.max(1, p - n);
    const realN = p - newPage;
    if (realN <= 0) return toast(t("toast_first_page"), "error");
    document.getElementById("search-page").value = newPage;
    document.getElementById("search-pages").value = realN;
    doSearch();
}
function searchForward() {
    const p = parseInt(document.getElementById("search-page").value) || 1;
    const n = parseInt(document.getElementById("search-pages").value) || 1;
    document.getElementById("search-page").value = p + n;
    doSearch();
}

function renderSearchResults(items, startPage, pages) {
    searchItems = items;
    renderTable("search-list", items);
    document.getElementById("btn-search").disabled = false;
    document.getElementById("search-status").textContent = t(
        "status_done_search",
        startPage,
        pages,
        items.length,
    );
    toast(t("toast_search_done", items.length), "success");
}

// ============================================================
// Tag cloud
// ============================================================
function buildTagCloud(containerId, items, callbackName) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const freq = {};
    for (const it of items) {
        for (const tag of it.tags || []) freq[tag] = (freq[tag] || 0) + 1;
    }
    const sorted = Object.entries(freq)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 50);
    container.innerHTML = sorted
        .map(
            ([tag, count]) =>
                `<span class="tag-chip" data-tag="${escapeHtml(tag)}"
            onclick="tagChipClick(this, '${containerId}', '${callbackName}')">
            ${escapeHtml(tag)}<span class="count">${count}</span>
        </span>`,
        )
        .join("");
}

function tagChipClick(el, cloudId, callbackName) {
    const tag = el.dataset.tag;
    const set = filterSets[cloudId];
    if (!set) return;
    if (set.has(tag)) {
        set.delete(tag);
        el.classList.remove("active");
    } else {
        set.add(tag);
        el.classList.add("active");
    }
    if (callbackName === "filterRankingByTags") filterRankingByTags();
    else if (callbackName === "applyUserDetailFilter") applyUserDetailFilter();
}

// ============================================================
// User search
// ============================================================
function doUserSearch() {
    const word = document.getElementById("usearch-word").value.trim();
    if (!word) return toast(t("toast_need_keyword"), "error");
    const page = parseInt(document.getElementById("usearch-page").value) || 1;
    const offset = (page - 1) * 30;

    document.getElementById("usearch-list").innerHTML =
        `<div class="loading"><div class="spinner"></div>${t("loading_usearch")}</div>`;
    document.getElementById("btn-user-search").disabled = true;
    document.getElementById("usearch-status").textContent = t(
        "status_requesting",
        word,
    );
    send({ cmd: "search_users", word, offset });
}

function renderUserSearchResults(items) {
    userSearchItems = items;
    const container = document.getElementById("usearch-list");
    if (!items.length) {
        container.innerHTML = `<div style="padding:20px; text-align:center; color:#666">${t("no_result")}</div>`;
    } else {
        const rows = items
            .map(
                (u) => `
            <tr>
                <td>${u.id}</td>
                <td><a href="#" onclick="event.preventDefault(); openUserDetail(${u.id}); return false;"
                       style="color:#7eb6ff; text-decoration:none; border-bottom:1px dashed #7eb6ff;"
                       title="${t("th_user_detail_link")}">${escapeHtml(u.name)}</a></td>
                <td style="color:#808590">${escapeHtml(u.account)}</td>
                <td>${u.is_followed ? `<span style="color:#4ade80">${t("th_followed_yes")}</span>` : ""}</td>
            </tr>`,
            )
            .join("");
        container.innerHTML = `<table>
            <thead><tr><th>${t("th_uid")}</th><th>${t("th_name")}</th><th>${t("th_account")}</th><th>${t("th_followed")}</th></tr></thead>
            <tbody>${rows}</tbody>
        </table>`;
    }
    document.getElementById("btn-user-search").disabled = false;
    document.getElementById("usearch-status").textContent = t(
        "status_done",
        items.length,
    );
    toast(t("toast_user_search_done", items.length), "success");
}

// ============================================================
// User detail
// ============================================================
function openUserDetail(uid) {
    document
        .querySelectorAll("nav button")
        .forEach((b) => b.classList.remove("active"));
    document
        .querySelectorAll(".tab")
        .forEach((t) => t.classList.remove("active"));
    const navBtn = document.querySelector('nav button[data-tab="user-detail"]');
    if (navBtn) navBtn.classList.add("active");
    document.getElementById("tab-user-detail").classList.add("active");

    document.getElementById("udetail-uid").value = uid;
    resetUserDetailView();

    document.getElementById("udetail-header").innerHTML =
        `<div class="loading"><div class="spinner"></div>${t("loading_user")}</div>`;
    document.getElementById("udetail-status").textContent = `UID: ${uid}`;
    document.getElementById("btn-load-udetail").disabled = true;

    send({ cmd: "user_detail", uid });
}

function resetUserDetailView() {
    userDetailUid = null;
    userDetailItems = [];
    userDetailAllItems = [];

    const cloud = document.getElementById("udetail-tag-cloud");
    if (cloud) cloud.innerHTML = "";
    filterSets["udetail-tag-cloud"] = new Set();

    const filterInput = document.getElementById("udetail-filter");
    if (filterInput) filterInput.value = "";
    document.getElementById("udetail-filter-status").textContent = "";

    document.getElementById("user-detail-list").innerHTML = "";
}

function loadUserDetailFromInput() {
    const v = document.getElementById("udetail-uid").value.trim();
    if (!v) return toast(t("toast_need_uid"), "error");
    const uid = parseInt(v);
    if (!uid) return toast(t("toast_invalid_uid"), "error");
    openUserDetail(uid);
}

function handleUserDetailPhase(msg) {
    if (msg.phase === "detail") {
        renderUserHeaderOnly(msg.user);
    } else if (msg.phase === "illusts") {
        document.getElementById("udetail-status").textContent = t(
            "status_loading_user_illusts",
            msg.page,
            msg.count,
        );
        document.getElementById("user-detail-list").innerHTML =
            `<div class="loading"><div class="spinner"></div>${t("loading_user_illusts", msg.page)}</div>`;
    }
}

function buildUserCardHtml(user) {
    const avatarProxy = user.avatar
        ? `/proxy_image?url=${encodeURIComponent(user.avatar)}`
        : "";
    const avatarHtml = avatarProxy
        ? `<img class="user-avatar" src="${avatarProxy}" alt="avatar"
                onerror="this.style.background='#3a3f48'; this.removeAttribute('src');">`
        : '<div class="user-avatar"></div>';

    const officialUrl = `https://www.pixiv.net/users/${user.id}`;
    const metaParts = [];
    if (user.region)
        metaParts.push(`${t("meta_region")} ${escapeHtml(user.region)}`);
    if (user.total_follow_users)
        metaParts.push(
            `${t("meta_followers")} ${formatNum(user.total_follow_users)}`,
        );
    if (user.total_illusts)
        metaParts.push(`${t("meta_illusts")} ${user.total_illusts}`);
    if (user.total_novels)
        metaParts.push(`${t("meta_novels")} ${user.total_novels}`);
    if (user.total_manga)
        metaParts.push(`${t("meta_manga")} ${user.total_manga}`);

    if (user.is_accept_request === true) {
        metaParts.push(
            `<span style="color:#4ade80">${t("meta_accept_request_yes")}</span>`,
        );
    } else if (user.is_accept_request === false) {
        metaParts.push(
            `<span style="color:#808590">${t("meta_accept_request_no")}</span>`,
        );
    }

    const commentHtml = user.comment
        ? `<div class="user-comment">${escapeHtml(user.comment)}</div>`
        : "";

    return `
        <div class="user-card">
            ${avatarHtml}
            <div class="user-info">
                <div>
                    <a class="user-name" href="${officialUrl}" target="_blank" rel="noopener"
                       title="${t("th_user_name_link")}">${escapeHtml(user.name)}</a>
                    <span class="user-account">@${escapeHtml(user.account)} (UID: ${user.id})</span>
                    ${user.is_followed ? `<span style="color:#4ade80; margin-left:8px; font-size:12px">${t("meta_following")}</span>` : ""}
                </div>
                <div class="user-meta">${metaParts.join("")}</div>
                ${commentHtml}
            </div>
        </div>`;
}

function renderUserHeaderOnly(user) {
    document.getElementById("udetail-header").innerHTML =
        buildUserCardHtml(user);
    document.getElementById("btn-load-udetail").disabled = false;
}

function renderUserDetail(user, items) {
    userDetailUid = user.id;
    renderUserHeaderOnly(user);
    document.getElementById("udetail-uid").value = user.id;
    document.getElementById("udetail-status").textContent = t(
        "status_done",
        `${user.name} (${items.length})`,
    );

    userDetailAllItems = items.slice();
    userDetailItems = items.slice();

    buildTagCloud("udetail-tag-cloud", items, "applyUserDetailFilter");
    renderTable("user-detail-list", userDetailItems);

    toast(t("toast_user_detail_done", items.length), "success");
}

function applyUserDetailFilter() {
    const rawInput = document.getElementById("udetail-filter").value.trim();
    const manualTags = rawInput
        ? rawInput
              .split(/[,，]/)
              .map((s) => s.trim().toLowerCase())
              .filter((s) => s)
        : [];
    const chipTags = [...filterSets["udetail-tag-cloud"]].map((x) =>
        x.toLowerCase(),
    );
    const keywords = [...new Set([...manualTags, ...chipTags])];

    if (keywords.length === 0) {
        userDetailItems = userDetailAllItems.slice();
    } else {
        userDetailItems = userDetailAllItems.filter((it) => {
            const tagStr = (it.tags || []).join(" ").toLowerCase();
            return keywords.every((k) => tagStr.includes(k));
        });
    }
    renderTable("user-detail-list", userDetailItems);
    const total = userDetailAllItems.length;
    const shown = userDetailItems.length;
    document.getElementById("udetail-filter-status").textContent =
        keywords.length ? t("status_filter", shown, total) : "";
}

function clearUserDetailFilter() {
    document.getElementById("udetail-filter").value = "";
    filterSets["udetail-tag-cloud"].clear();
    document
        .querySelectorAll("#udetail-tag-cloud .tag-chip")
        .forEach((el) => el.classList.remove("active"));
    applyUserDetailFilter();
}

// ============================================================
// Recommend
// ============================================================
function doRecommend(mode) {
    let pid = null;
    if (mode === "work") {
        const v = document.getElementById("recommend-pid").value.trim();
        if (!v) return toast(t("toast_need_pid"), "error");
        pid = parseInt(v);
        if (!pid || pid <= 0) return toast(t("toast_invalid_pid"), "error");
    }
    document.getElementById("recommend-list").innerHTML =
        `<div class="loading"><div class="spinner"></div>${t("loading_recommend")}</div>`;
    document.getElementById("recommend-status").textContent = t(
        "status_requesting",
        mode,
    );
    document.getElementById("btn-rec-auto").disabled = true;
    const cmd = { cmd: "recommend", mode, limit: 120 };
    if (pid) cmd.pid = pid;
    send(cmd);
}

function renderRecommendResults(items, mode) {
    recommendItems = items;
    renderTable("recommend-list", items);
    document.getElementById("btn-rec-auto").disabled = false;
    document.getElementById("recommend-status").textContent = t(
        "status_done_recommend",
        items.length,
        mode,
    );
    toast(t("toast_recommend_done", items.length), "success");
}

function openAdvancedRecommend() {
    document.getElementById("advanced-rec-modal").classList.add("show");
}
function closeAdvancedRecommend() {
    document.getElementById("advanced-rec-modal").classList.remove("show");
}

function submitAdvancedRecommend() {
    const seedsRaw = document.getElementById("adv-seeds").value.trim();
    const viewedRaw = document.getElementById("adv-viewed").value.trim();
    const includeRanking = document.getElementById("adv-ranking").checked;
    const includePrivacy = document.getElementById("adv-privacy").checked;
    const limit = parseInt(document.getElementById("adv-limit").value) || 60;

    const seedList = seedsRaw
        ? seedsRaw
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s)
        : [];
    for (const s of seedList)
        if (!/^\d+$/.test(s))
            return toast(t("toast_adv_seeds_invalid", s), "error");
    if (seedList.length > 30) return toast(t("toast_adv_seeds_max"), "error");

    const viewedList = viewedRaw
        ? viewedRaw
              .split(",")
              .map((s) => s.trim())
              .filter((s) => s)
        : [];
    for (const v of viewedList)
        if (!/^\d+$/.test(v))
            return toast(t("toast_adv_viewed_invalid", v), "error");
    if (viewedList.length > 30)
        return toast(t("toast_adv_viewed_max"), "error");
    if (limit < 1 || limit > 120) return toast(t("toast_adv_limit"), "error");

    closeAdvancedRecommend();

    const params = {};
    if (seedList.length) params.bookmark_illust_ids = seedList;
    if (viewedList.length) params.viewed = viewedList;
    if (includeRanking) params.include_ranking_illusts = true;
    if (includePrivacy) params.include_privacy_policy = true;

    document.getElementById("recommend-list").innerHTML =
        `<div class="loading"><div class="spinner"></div>${t("loading_adv_recommend")}</div>`;
    document.getElementById("recommend-status").textContent = t(
        "status_requesting",
        "advanced",
    );
    document.getElementById("btn-rec-auto").disabled = true;
    send({ cmd: "recommend", mode: "advanced", limit, params });
}

function recommendFromSelected() {
    const info = getSelectionInfo();
    if (!info) return toast(t("toast_no_item"), "error");
    const container = document.getElementById(info.containerId);
    const selected = container.querySelectorAll("tr.selected");
    if (!selected.length) return toast(t("toast_no_select"), "error");
    const firstIdx = parseInt(selected[0].dataset.idx);
    const item = info.items[firstIdx];
    if (!item) return;

    document.querySelector('nav button[data-tab="recommend"]').click();
    document.getElementById("recommend-pid").value = item.id;
    doRecommend("work");
}

// ============================================================
// Follow
// ============================================================
function loadFollowNew(offset) {
    const restrict = document.getElementById("follow-restrict").value;
    document.getElementById("follow-list").innerHTML =
        `<div class="loading"><div class="spinner"></div>${t("loading_follow")}</div>`;
    document.getElementById("btn-load-follow").disabled = true;
    document.getElementById("follow-status").textContent = t(
        "status_requesting",
        `offset=${offset}`,
    );
    send({ cmd: "follow_new", offset, restrict });
}

function renderFollowResults(items, offset, hasMore) {
    followItems = items;
    followCurrentOffset = offset;
    renderTable("follow-list", items);
    document.getElementById("btn-load-follow").disabled = false;
    const page = Math.floor(offset / 30) + 1;
    followPage = page;
    document.getElementById("follow-status").textContent = t(
        "status_done",
        items.length,
    );
    document.getElementById("follow-page-info").textContent = t(
        "page_label",
        page,
    );
    toast(t("toast_follow_done", items.length), "success");
}

function followPrevPage() {
    if (followCurrentOffset <= 0) return toast(t("toast_first_page"), "error");
    loadFollowNew(Math.max(0, followCurrentOffset - 30));
}
function followNextPage() {
    loadFollowNew(followCurrentOffset + 30);
}

// ============================================================
// Queue
// ============================================================
function startQueue() {
    send({ cmd: "start_queue" });
}
function stopQueue() {
    send({ cmd: "stop_queue" });
}
function clearQueue() {
    if (confirm(t("toast_confirm_clear"))) send({ cmd: "clear_queue" });
}
function retryFailed() {
    if (confirm(t("toast_confirm_retry"))) send({ cmd: "retry_failed" });
}

// ============================================================
// Config
// ============================================================
const CONFIG_KEYS = [
    "refresh_token",
    "download_dir",
    "proxy",
    "language",
    "download_delay",
    "api_request_delay",
    "parallel_workers",
    "max_retries",
    "rate_limit_retry_delay",
    "max_results",
];

function fillConfig(cfg) {
    CONFIG_KEYS.forEach((k) => {
        const el = document.getElementById("cfg-" + k);
        if (el && cfg[k] !== undefined) el.value = cfg[k];
    });
    // if backend has a concrete language and it differs from current, honor it
    if (
        cfg.language &&
        (cfg.language === "zh-CN" || cfg.language === "en") &&
        cfg.language !== currentLang
    ) {
        currentLang = cfg.language;
        localStorage.setItem("nagato_lang", currentLang);
        applyI18n();
        renderTokenHelp();
    }
}

function saveConfig() {
    const data = {};
    CONFIG_KEYS.forEach((k) => {
        const el = document.getElementById("cfg-" + k);
        if (el)
            data[k] =
                el.type === "number" ? parseFloat(el.value) || 0 : el.value;
    });
    send({ cmd: "save_config", data });
    // if language changed via settings, apply
    if (data.language === "zh-CN" || data.language === "en") {
        switchLanguage(data.language);
    }
}

function testLogin() {
    const rt = document.getElementById("cfg-refresh_token").value.trim();
    if (!rt) return toast(t("toast_need_token"), "error");
    send({ cmd: "login", refresh_token: rt });
}

function testLatency() {
    toast(t("toast_latency_testing"), "");
    send({ cmd: "test_latency" });
}

// ============================================================
// Token help modal
// ============================================================
function showTokenHelp() {
    document.getElementById("token-help-modal").classList.add("show");
}
function closeTokenHelp() {
    document.getElementById("token-help-modal").classList.remove("show");
}

// ============================================================
// Boot
// ============================================================
currentLang = detectLang();
applyI18n();
renderTokenHelp();
connect();
