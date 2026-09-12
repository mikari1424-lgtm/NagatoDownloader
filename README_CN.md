# NagatoDownloader

> **A Pixiv Artwork Downloader**
>
> *Fetch the art. Keep the metadata.*

一个前后端分离的 Pixiv 批量下载客户端。基于 Python + WebSocket + 原生 WebUI，用最少的资源完成最多的下载。

[English Version →](README.md)

AI声明: 本程序使用Deepseek V4.1-Flash辅助制作。

---

## 命名由来

> "情报统合思念体制造的人形界面" —— 长门有希

《凉宫春日的忧郁》中，长门有希是"情报统合思念体"制造的人形界面：极少言语、静默运行、精确处理海量信息，把杂乱的数据组织成人类可读的形式。

这与本程序的功能高度契合：它不渲染图像、不参与社交、不做推荐算法，只是安静地在后台抓取、归档、写入元数据——把散落的作品信息整理成结构化的本地资产。

---

## 为什么会有这个程序

官方 Pixiv 客户端在**浏览**上做到了极致，但在**批量下载**和**元数据管理**上有先天限制：

| 维度 | 官方客户端 | NagatoDownloader |
| --- | --- | --- |
| 20 作品页面内存 | ~3.6 GB | ~135 MB |
| 100 作品排行榜内存 | ~10 GB | < 500 MB |
| 排序字段 | 2 个（发布时间、热度） | 全部可获取字段 |
| 排行榜内搜索 | 无 | 支持（纯前端标签筛选） |
| 单次浏览上限 | 无固定上限但资源消耗爆炸 | 1500 条 |
| 批量下载 | 逐张手动 | 队列 + 1~8 并行 |
| ExifTool 元数据 | 无 | 完整支持 |
| 队列持久化 | 无 | 支持（关闭后可续传） |

核心差异不是"功能更多"，而是**设计哲学**：官方客户端的假设是"用户想看所有内容"，本程序的假设是"用户只想下载少数"。前者需要把图像纳入内存模型，后者只需要处理 JSON 元数据。

---

## 特性

### 浏览与发现

- **排行榜**：8 种类型，1~500 条可调，全列排序
- **标签搜索**：完全匹配模式，分页步进，批量多页获取
- **用户搜索**：按用户名 / 账户名查找
- **用户详情**：作品列表 + 用户信息 + 约稿状态
- **作品推荐**：自动 / 基于队列 / 基于历史 / 基于作品 / 高级参数
- **已关注新作**：`illust_follow` 接口
- **标签云**：从已获取作品自动生成高频标签，一键筛选

### 下载

- **并行队列**：1~8 工作线程，以作品为单位避免文件竞争
- **全局限速同步**：任一任务触发 Rate Limit，所有线程同步等待
- **队列持久化**：关闭程序后可从 `queue.json` 恢复
- **失败重试**：使用 `-m` 忽略次要错误 + 导出 JSON 元数据
- **历史记录**：最近 2000 条下载自动归档到 `history.json`

### 元数据

- **ExifTool 完整写入**：标题、作者、标签、时间、链接、说明
- **AI/R-15/R-18/R-18G 标记**：写入 XMP-dc:subject 和 EXIF:XPKeywords
- **原始文件名保留**：不重命名，直接使用 Pixiv CDN 的原始文件名
- **失败任务 JSON 导出**：便于人工修复和二次处理

### 交互

- **作品链接直达**：点击标题在新标签页打开 Pixiv 官方作品页
- **作者链接直达**：点击作者名跳转用户详情页
- **多选批量操作**：Ctrl/Shift 多选后一次性加入队列
- **固定控件 + 滚动结果**：筛选参数不随结果滚动
- **实时日志推送**：所有后端动作同步到前端日志面板
- **延迟检测**：启动时自动测量到 Cloudflare 的延迟

---

## 快速开始

### 方式一：直接使用打包版（推荐普通用户）

1. 从 [Releases](https://github.com/YOUR_USERNAME/NagatoDownloader/releases) 下载 `NagatoDownloader.zip`
2. 解压到任意目录（建议路径不含中文）
3. 双击 `NagatoDownloader.exe`
4. 程序自动启动服务并在浏览器中打开界面

**首次使用需要配置 RefreshToken**（见下节）。

### 方式二：从源码运行（推荐开发者）

```bash
git clone https://github.com/YOUR_USERNAME/NagatoDownloader.git
cd NagatoDownloader
pip install -r requirements.txt
python pixiv_server.py
```

---

## 配置 RefreshToken

**Pixiv 已不再支持用户名密码登录**，本程序使用 RefreshToken 认证。

点击设置面板中"刷新令牌"旁的 **❓** 图标，程序内置了详细的获取指南。简要步骤：

### 方式一：Pixiv-Viewer 网页端（推荐）

1. 安装 [Redirector](https://einaregilsson.com/redirector/) 和 [Tampermonkey](https://www.tampermonkey.net/index.php)
2. 导入规则：`https://pixiv.pictures/helper/Redirector.json`
3. 安装[登录工具脚本](https://fastly.jsdelivr.net/gh/asadahimeka/pixiv-viewer@master/public/helper/helper.user.js)
4. 访问 `https://pixiv.pictures/account/login`，选择 App API (OAuth) 登录
5. 在[设置页面](https://pixiv.pictures/setting/others)导出 Token

### 方式二：pxder（Node.js）

```bash
npm i -g pxder
pxder --login
pxder --export-token
```

### 方式三：PixEz（移动端）

从 [GitHub](https://github.com/Notsfsssf/pixez-flutter) 下载，登录后 → 更多 → 账户信息 → Token export

> 原始教程：[https://www.nanoka.top/posts/e78ef86/](https://www.nanoka.top/posts/e78ef86/)

**注意**：如果无法直连 Pixiv，请先在设置中配置代理（支持 socks5/socks4/http）。

---

## 使用指南

### 手动下载

粘贴 URL 或作品 ID，加入队列。支持批量（每行一个）。

### 收藏夹导入

选择从浏览器导出的收藏夹 HTML 文件，程序自动解析其中所有 Pixiv 作品链接并批量加入队列。

### 排行榜

选择类型和数量，获取后可以：

- 点击任意列头排序
- 使用标签云或手动输入筛选
- 多选后加入队列

### 标签搜索

- **完全匹配**：只返回标签精确匹配的作品
- **分页步进**：支持一次获取多页（最多 50 页），每页 30 条
- **向前/向后**：批量跳转，一次性显示范围内所有结果

### 用户搜索 / 用户详情

- 用户搜索：按关键词查找 UID
- 用户详情：输入 UID 或从其他页面点击作者名跳转，自动加载该用户全部作品

### 作品推荐

- **自动推荐**：不传参数，基于 Pixiv 默认算法
- **根据下载队列**：以队列中前 30 个作品为种子
- **根据历史记录**：以最近 30 条下载记录为种子
- **根据作品**：输入 PID，推荐相似作品
- **高级推荐**：手动控制 `bookmark_illust_ids`、`viewed` 等参数

最大返回 120 条（Pixiv API 限制）。

### 已关注新作

按"全部/公开/私密"过滤，分页浏览关注用户的新作品。

### 队列控制

底部栏提供：

- **开始下载队列**：启动所有工作线程
- **停止**：软停止，完成当前任务后退出
- **清空队列**：删除所有未处理任务
- **重试失败作品**：使用 `-m` 重新写入元数据

处理中"加入选中到队列"按钮会禁用，避免状态竞争。

---

## 架构

```
┌──────────────────────────────────────────┐
│  浏览器（WebUI）                          │
│  index.html + style.css + main.js        │
└────────────┬─────────────────────────────┘
             │ WebSocket (/ws)
             │ HTTP (/proxy_image)
┌────────────▼─────────────────────────────┐
│  aiohttp 服务器（pixiv_server.py）        │
│  ├─ WebBridge（WebSocket 广播）          │
│  ├─ DownloadWorker（1~8 并行线程）       │
│  │   ├─ PixivAPI（pixivpy3 封装）        │
│  │   ├─ RateLimiter（全局限速同步）      │
│  │   └─ ExifToolWrapper                  │
│  └─ 静态资源路由                          │
└──────────────────────────────────────────┘
```

### 关键设计

| 组件 | 职责 |
| --- | --- |
| `RateLimiter` | 任一工作线程触发限速时，通过 `threading.Condition` 让所有线程同步等待 |
| `WebBridge` | 后端状态 → WebSocket 广播到所有连接的客户端 |
| `DownloadWorker` | 队列消费、失败记录、队列持久化 |
| `ExifToolWrapper` | 每次调用使用独立临时参数文件，避免多线程冲突 |
| `proxy_image` | 转发 Pixiv CDN 图像，绕过 Referer 防盗链 |

### 数据文件

```
NagatoDownloader/
├── NagatoDownloader.exe
├── pixiv_client_config.json   # 配置（首次运行自动创建）
├── queue.json                 # 队列（自动保存/清理）
├── history.json               # 下载历史（最近 2000 条）
├── logs/
│   └── pixiv_client.log
└── _internal/
    ├── webui/                 # 前端资源
    └── plugins/
        ├── ExifTool.exe
        └── exiftool_files/
```

---

## 从源码构建

### 依赖

```bash
pip install -r requirements.txt
```

`requirements.txt`：

```
aiohttp
pixivpy3
requests
beautifulsoup4
```

### 打包为独立可执行文件

```bash
pip install pyinstaller
pyinstaller NagatoDownloader.spec --noconfirm
```

输出位于 `dist/NagatoDownloader/`，整个目录压缩后即可分发。

打包前确保 `plugins/` 目录包含完整的 ExifTool：

```
plugins/
├── ExifTool.exe
└── exiftool_files/          # 必须与 exe 同级
```

---

## 已知限制

- **不可见作品**：部分作品在网页上可见但 API 返回 `visible: false`，这是 Pixiv 的 API 级过滤，无法绕过
- **小说正文**：API 不返回完整正文，程序仅保存元信息
- **Rate Limit**：非日本 IP 访问 API 更容易触发限速，程序会自动等待重试
- **ExifTool 可选**：若未找到 ExifTool，图片仍会下载但元数据不会写入

---

## 常见问题

**Q: 端口被占用？**
A: 程序会自动在 8765-8864 范围内寻找空闲端口。

**Q: 浏览器白屏？**
A: 检查控制台是否有错误，或访问 `http://127.0.0.1:<端口>/` 手动确认。

**Q: 下载很慢？**
A: 在设置中调高"并行线程"（最大 8），或检查代理延迟。

**Q: 如何清空历史记录？**
A: 直接删除 `history.json` 文件即可。

**Q: 支持 macOS / Linux 吗？**
A: 代码跨平台，但需要自行替换 ExifTool 为对应平台的版本，并修改 `plugins/` 目录中的文件名。

---

## 设计哲学

本程序的核心价值主张：**"发现、批量、下载"三件事做到极致；其他事，交给正确的工具。**

- **不引入缩略图**：图像渲染委托给浏览器（点击标题打开官方页）
- **不集成社交**：点赞/评论/关注使用官方客户端
- **不预定义排序**：数据在客户端，排序方式由用户决定
- **不占用内存**：只持有 JSON 元数据，不驻留图像位图

这些"不做"不是功能缺失，而是把复杂度和资源开销留给真正需要的场景。

---

## 致谢

- [pixivpy3](https://github.com/upbit/pixivpy) - Pixiv API 封装
- [ExifTool](https://exiftool.org/) - 元数据写入
- [aiohttp](https://docs.aiohttp.org/) - 异步 HTTP 服务器
- [长门有希](https://zh.wikipedia.org/wiki/長門有希) - 命名灵感

---

## 许可证

General Public License v3.0

---

## 免责声明

本程序为个人学习用途。使用本程序下载的内容版权归原作者所有，请勿用于商业用途或二次分发。请遵守 Pixiv 的[服务条款](https://www.pixiv.net/terms.php)和当地法律法规。
