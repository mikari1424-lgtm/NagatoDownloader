# NagatoDownloader

> **A Pixiv Artwork Downloader**
> 
> *Fetch the art. Keep the metadata.*

A client-server Pixiv bulk-download client built on Python + WebSocket + vanilla WebUI. Maximum output, minimum footprint.

[简体中文 →](README_CN.md)

AI Disclaimer: This program was created with the assistance of Deepseek V4.1-Flash.

---

## Naming

> *"A humanoid interface created by the Data Overmind."* — Yuki Nagato

In *The Melancholy of Haruhi Suzumiya*, Yuki Nagato is an artificial humanoid interface: silent, precise, and quietly processing vast amounts of information into human-readable form.

This maps cleanly onto the program: no image rendering, no social features, no recommendation engines — just a quiet background process that fetches, archives, and writes metadata, turning scattered artworks into a structured local library.

---

## Why this exists

The official Pixiv client excels at **browsing**, but is fundamentally constrained for **bulk download** and **metadata management**:

| Dimension | Official Client | NagatoDownloader |
| --- | --- | --- |
| Memory, 20 artworks | ~3.6 GB | ~135 MB |
| Memory, 100-artwork ranking | ~10 GB | < 500 MB |
| Sortable fields | 2 (date, popularity) | All available fields |
| Search within ranking | None | Supported (client-side tag filter) |
| Single browse window | Unlimited but memory explodes | 1500 items |
| Bulk download | One by one | Queue + 1–8 workers |
| ExifTool metadata | None | Full support |
| Queue persistence | None | Supported (resume after restart) |

The core difference is not "more features" — it is **design philosophy**. The official client assumes *users want to view everything*. NagatoDownloader assumes *users want to download a few*. The former must hold images in memory; the latter only processes JSON metadata.

---

## Features

### Browsing

- **Rankings**: 8 types, 1–500 items, sortable on every column
- **Tag search**: exact-match mode, stepped pagination, batch multi-page fetch
- **User search**: by name or account
- **User detail**: artwork list + profile + commission status
- **Recommendations**: auto / from queue / from history / from artwork / advanced parameters
- **Followed artists' new works**: via `illust_follow`
- **Tag cloud**: auto-generated from fetched results, one-click filter

### Download

- **Parallel queue**: 1–8 workers, per-artwork granularity avoids file races
- **Global rate-limit sync**: any worker hitting a rate limit pauses all workers
- **Queue persistence**: resume from `queue.json` after restart
- **Failure retry**: uses `-m` to ignore minor errors and exports JSON metadata
- **History**: last 2000 downloads archived to `history.json`

### Metadata

- **Full ExifTool write**: title, author, tags, date, URL, description
- **AI / R-15 / R-18 / R-18G markers**: written to XMP-dc:subject and EXIF:XPKeywords
- **Original filenames preserved**: no renaming, uses Pixiv CDN's original names
- **Failed-task JSON export**: for manual inspection and reprocessing
- **Bilingual metadata**: writes Chinese or English tags based on UI language

### Interaction

- **Direct artwork links**: click title → opens Pixiv artwork page
- **Direct author links**: click author → opens user detail page
- **Multi-select**: Ctrl/Shift select then add to queue in one shot
- **Sticky controls + scrollable results**: filters stay put while results scroll
- **Live log push**: all backend actions streamed to front-end log panel
- **Latency probe**: measures Cloudflare RTT on startup
- **Multi-language UI**: Simplified Chinese / English toggle

---

## Quick Start

### Option 1: Prebuilt binary (recommended for most users)

1. Download from [Releases](https://github.com/mikari1424-lgtm/NagatoDownloader/releases)
2. Extract to any directory (avoid non-ASCII paths)
3. Double-click `NagatoDownloader.exe`
4. The server starts and the WebUI opens in your browser

**First run requires a RefreshToken** (see below).

### Option 2: Run from source (developers)

```bash
git clone https://github.com/mikari1424-lgtm/NagatoDownloader.git
cd NagatoDownloader
pip install -r requirements.txt
python pixiv_server.py
```

---

## Configuring RefreshToken

**Pixiv no longer supports username/password login.** This program uses a RefreshToken.

Click the **❓** icon next to the refresh-token field in Settings — the app includes a built-in guide. Summary:

### Method 1: Pixiv-Viewer (recommended)

1. Install [Redirector](https://einaregilsson.com/redirector/) and [Tampermonkey](https://www.tampermonkey.net/index.php)
2. Import redirect rule: `https://pixiv.pictures/helper/Redirector.json`
3. Install the [login helper userscript](https://fastly.jsdelivr.net/gh/asadahimeka/pixiv-viewer@master/public/helper/helper.user.js)
4. Visit `https://pixiv.pictures/account/login`, choose App API (OAuth)
5. Export the token from [Settings](https://pixiv.pictures/setting/others)

### Method 2: pxder (Node.js)

```bash
npm i -g pxder
pxder --login
pxder --export-token
```

### Method 3: PixEz (mobile)

Download from [GitHub](https://github.com/Notsfsssf/pixez-flutter), then: More → Account → Token export

> Original guide: [https://www.nanoka.top/posts/e78ef86/](https://www.nanoka.top/posts/e78ef86/)

**Note**: If you cannot reach Pixiv directly, configure a proxy in Settings first (socks5/socks4/http supported).

---

## Usage

### Manual download

Paste URL or artwork ID, add to queue. Batch mode: one per line.

### Bookmark import

Select an HTML export from your browser; the program parses all Pixiv artwork links and enqueues them.

### Rankings

Choose type and count; after fetching you can:

- Click any column header to sort
- Filter via tag cloud or manual input
- Multi-select and add to queue

### Tag search

- **Exact match**: returns only artworks whose tag matches exactly
- **Stepped pagination**: fetch multiple pages at once (up to 50 pages, 30 per page)
- **Backward / Forward**: batch-jump and render the entire range

### User search / User detail

- Search: find UID by keyword
- Detail: enter UID or click an author name anywhere; loads all artworks by that user

### Recommendations

- **Auto**: no parameters, Pixiv's default algorithm
- **From queue**: uses first 30 items in the queue as seeds
- **From history**: uses last 30 downloads as seeds
- **From artwork**: enter a PID; recommends similar works
- **Advanced**: full control over `bookmark_illust_ids`, `viewed`, etc.

Maximum 120 items (Pixiv API cap).

### Followed artists' new works

Filter by all/public/private; paginate through new works from followed artists.

### Queue controls

Bottom bar provides:

- **Start**: launch all workers
- **Stop**: soft-stop, workers exit after current task
- **Clear**: remove all unprocessed tasks
- **Retry failed**: re-run metadata with `-m`

While running, the "Add selected to queue" button is disabled to prevent races.

---

## Architecture

```
┌──────────────────────────────────────────┐
│  Browser (WebUI)                         │
│  index.html + style.css + main.js        │
└────────────┬─────────────────────────────┘
             │ WebSocket (/ws)
             │ HTTP (/proxy_image)
┌────────────▼─────────────────────────────┐
│  aiohttp server (pixiv_server.py)        │
│  ├─ WebBridge (WebSocket broadcast)      │
│  ├─ DownloadWorker (1–8 parallel)        │
│  │   ├─ PixivAPI (pixivpy3 wrapper)      │
│  │   ├─ RateLimiter (global sync)        │
│  │   └─ ExifToolWrapper                  │
│  └─ static resource routing              │
└──────────────────────────────────────────┘
```

### Key components

| Component | Responsibility |
| --- | --- |
| `RateLimiter` | When any worker hits rate limit, all workers wait via `threading.Condition` |
| `WebBridge` | Backend status → broadcast to all WebSocket clients |
| `DownloadWorker` | Queue consumption, failure tracking, persistence |
| `ExifToolWrapper` | Each call uses an independent temp arg-file to avoid multi-thread conflicts |
| `proxy_image` | Forwards Pixiv CDN images, bypassing Referer protection |

### Files

```
NagatoDownloader/
├── NagatoDownloader.exe
├── pixiv_client_config.json   # config (auto-created on first run)
├── queue.json                 # queue (auto-save/clean)
├── history.json               # download history (last 2000)
├── logs/
│   └── pixiv_client.log
└── _internal/
    ├── webui/                 # frontend
    └── plugins/
        ├── ExifTool.exe
        └── exiftool_files/
```

---

## Building from source

### Requirements

```bash
pip install -r requirements.txt
```

`requirements.txt`:

```
aiohttp
pixivpy3
requests
beautifulsoup4
```

### Packaging as standalone executable

```bash
pip install pyinstaller
pyinstaller NagatoDownloader.spec --noconfirm
```

Output: `dist/NagatoDownloader/`. Compress the whole directory to distribute.

Ensure `plugins/` contains the complete ExifTool:

```
plugins/
├── ExifTool.exe
└── exiftool_files/          # must be sibling of the exe
```

---

## Known Limitations

- **Invisible artworks**: some works are visible on the website but the API returns `visible: false`. This is a Pixiv API-level filter — cannot be bypassed.
- **Novel text**: the API does not return the full novel body; only metadata is saved.
- **Rate limit**: non-Japan IPs hit rate limits more often. The program waits and retries automatically.
- **ExifTool optional**: if ExifTool is missing, images still download but metadata is not written.

---

## FAQ

**Q: Port in use?**
A: The program automatically finds a free port in 8765–8864.

**Q: Blank browser page?**
A: Check the console for errors, or visit `http://127.0.0.1:<port>/` manually.

**Q: Downloads are slow?**
A: Increase "parallel workers" (max 8) in Settings, or check proxy latency.

**Q: How to clear history?**
A: Delete `history.json`.

**Q: macOS / Linux support?**
A: The code is cross-platform, but you must replace ExifTool with the platform-specific binary and adjust the filename in `plugins/`.

**Q: How to switch language?**
A: Use the language toggle in the top-right, or select in Settings. The choice persists.

---

## Design Philosophy

Core value proposition: **do "discover, batch, download" to the extreme; delegate everything else to the right tool.**

- **No thumbnails**: rendering is delegated to the browser (click title → official page)
- **No social**: likes/comments/follows belong to the official client
- **No predefined sorting**: data lives on the client; the user decides
- **No memory footprint**: only JSON metadata, no bitmap residency

These are not missing features — they are deliberate choices that push complexity and resource cost to where they actually matter.

---

## Acknowledgements

- [pixivpy3](https://github.com/upbit/pixivpy) — Pixiv API wrapper
- [ExifTool](https://exiftool.org/) — metadata writing
- [aiohttp](https://docs.aiohttp.org/) — async HTTP server
- [Yuki Nagato](https://en.wikipedia.org/wiki/Yuki_Nagato) — naming inspiration

---

## License

GPL License v3.0

---

## Disclaimer

This program is for personal study. All downloaded content belongs to its original authors. Do not use for commercial purposes or redistribution. Comply with Pixiv's [Terms of Service](https://www.pixiv.net/terms.php) and local laws.
