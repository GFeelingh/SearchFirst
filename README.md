<p align="center">
  <img src="./assets/logo/SearchFirst-Mark.svg" width="112" alt="先搜，再刷。">
</p>

<h1 align="center">先搜，再刷。</h1>

<p align="center">
  先完成原本想做的事，再决定要不要刷。
</p>

---

### Web

先安装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)。

**[装完油猴后，点击安装「先搜，再刷。」](https://raw.githubusercontent.com/GFeelingh/SearchFirst/main/SearchFirst-Web.user.js)**

安装后直接打开支持的网站即可。

### iPhone / iPad

不需要下载 GitHub 中的 `.shortcut` 文件，也不需要自己签名。

**[点击添加「先搜，再刷。」快捷指令](https://www.icloud.com/shortcuts/4c8ebdc22d734be3b5cb0b663086d516)**

---

## 1. 出发点

很多时候，我们打开小红书、Bilibili、抖音、Reddit、X、YouTube 等平台，只是想搜索一个东西。但首页推荐信息流会先出现，人很容易被内容吸引，几分钟甚至几十分钟后才发现：已经忘了最初为什么打开这个平台。

这个项目不是为了增加一个搜索工具，而是为了保护进入平台时原本的搜索意图：

> 先完成原本想做的事，再决定要不要刷。

```text
原本：
打开平台 → 推荐信息流 → 被内容吸引 → 忘记原本要搜索什么

SearchFirst：
打开平台 → 先搜索 → 搜索结果
                    ↓
                 想刷再刷
```

Web 版不会删除原网站的信息流，也不是网站屏蔽器。它只在 Feed 前放置一个搜索缓冲页；如果本来就是想刷，可以直接向下进入原始首页，原来的第一条推荐也会完整保留。

## 2. 使用方法

| 版本 | 使用流程 |
| --- | --- |
| Web | 打开支持的网站 → 输入原本想搜索的内容 → Enter |
| iOS | 打开快捷指令 → 输入关键词 → 选择平台 |

Web 版打开网站首页时会首先显示“你原本想搜什么？”，搜索后直接进入网站自己的搜索结果。如果本来就是想刷，可以滚轮向下，按 Space、PageDown、方向键 ↓，或点击“我就是想刷”，进入完整保留第一条推荐的原始 Feed。搜索缓冲页支持跟随网站主题和自定义颜色。

## 3. 支持平台

### Web

- 抖音
- 小红书
- 微博
- 知乎
- Bilibili
- 豆瓣
- 百度贴吧
- 今日头条
- YouTube
- X
- Reddit
- TikTok
- Instagram
- Threads
- Facebook
- Pinterest
- Twitch

### iOS

- 抖音
- 小红书
- Bilibili
- 知乎
- 微博
- 豆瓣
- YouTube
- X
- Reddit
- TikTok

以上平台已写入适配，但不代表所有平台、版本和地区组合都经过完整测试。平台网页或 App 更新后，搜索路径可能发生变化。

## 4. 限制

- 网站可能随时修改前端结构、SPA 路由或搜索 URL，因此个别平台以后可能需要重新适配。
- App 的 URL Scheme / Deep Link 由平台维护，App 更新可能导致 iOS 某个平台失效。
- SearchFirst 不是广告拦截器、推荐算法修改器或网站内容过滤器。
- 它的目标只是保护用户进入平台时原本的搜索意图。

## 5. iOS 快捷指令与源码

普通用户不需要下载源码或自行签名，推荐直接通过官方 iCloud 链接添加：

**[获取「先搜，再刷。」快捷指令](https://www.icloud.com/shortcuts/4c8ebdc22d734be3b5cb0b663086d516)**

项目同时保留 iOS v1.0 的未签名快捷指令源码和 Mac 签名脚本，供开发者查看、修改或自行部署：

- [`SouBa-iOS-v1.0-unsigned.shortcut`](./releases/SouBa-iOS-v1.0-unsigned.shortcut)
- [`Sign-SouBa-iOS-v1.0.command`](./releases/Sign-SouBa-iOS-v1.0.command)

未签名 `.shortcut` 文件不能直接作为最终分享文件导入；自行部署时需在 Mac 上使用 `shortcuts sign --mode anyone` 签名。
