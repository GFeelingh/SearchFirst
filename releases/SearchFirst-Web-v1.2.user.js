// ==UserScript==
// @name         先搜，再刷。
// @namespace    searchfirst.local
// @version      1.2
// @updateURL    https://raw.githubusercontent.com/GFeelingh/SearchFirst/main/SearchFirst-Web.user.js
// @downloadURL  https://raw.githubusercontent.com/GFeelingh/SearchFirst/main/SearchFirst-Web.user.js
// @icon         data:image/png;base64,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
// @icon64       data:image/png;base64,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
// @description  打开媒体网站时先保留原本的搜索意图，再决定是否进入推荐信息流。
// @author       ChatGPT
// @match        *://*.douyin.com/*
// @match        *://*.xiaohongshu.com/*
// @match        *://*.weibo.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.bilibili.com/*
// @match        *://*.douban.com/*
// @match        *://tieba.baidu.com/*
// @match        *://*.toutiao.com/*
// @match        *://*.youtube.com/*
// @match        *://x.com/*
// @match        *://twitter.com/*
// @match        *://*.reddit.com/*
// @match        *://*.tiktok.com/*
// @match        *://*.instagram.com/*
// @match        *://*.threads.net/*
// @match        *://*.threads.com/*
// @match        *://*.facebook.com/*
// @match        *://*.pinterest.com/*
// @match        *://*.twitch.tv/*
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(() => {
  'use strict';

  const host = location.hostname.replace(/^www\./, '');
  const path = location.pathname;

  const sites = [
    {key:'douyin', names:['douyin.com'], label:'抖音', home:()=>path==='/' || path==='/recommend', search:q=>`https://www.douyin.com/search/${encodeURIComponent(q)}`},
    {key:'xiaohongshu', names:['xiaohongshu.com'], label:'小红书', home:()=>path==='/' || path==='/explore', search:q=>`https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(q)}&source=web_search_result_notes`},
    {key:'weibo', names:['weibo.com'], label:'微博', home:()=>path==='/' || path==='/hot/search', search:q=>`https://s.weibo.com/weibo?q=${encodeURIComponent(q)}`},
    {key:'zhihu', names:['zhihu.com'], label:'知乎', home:()=>path==='/' || path==='/hot' || path==='/follow', search:q=>`https://www.zhihu.com/search?type=content&q=${encodeURIComponent(q)}`},
    {key:'bili', names:['bilibili.com'], label:'Bilibili', home:()=>path==='/' || path==='/v/popular/all', search:q=>`https://search.bilibili.com/all?keyword=${encodeURIComponent(q)}`},
    {key:'douban', names:['douban.com'], label:'豆瓣', home:()=>path==='/', search:q=>`https://www.douban.com/search?q=${encodeURIComponent(q)}`},
    {key:'tieba', names:['tieba.baidu.com'], label:'贴吧', home:()=>path==='/' || path==='/index.html', search:q=>`https://tieba.baidu.com/f/search/res?ie=utf-8&qw=${encodeURIComponent(q)}`},
    {key:'toutiao', names:['toutiao.com'], label:'今日头条', home:()=>path==='/', search:q=>`https://so.toutiao.com/search?keyword=${encodeURIComponent(q)}`},
    {key:'youtube', names:['youtube.com'], label:'YouTube', home:()=>path==='/' || path==='/feed/trending', search:q=>`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`},
    {key:'x', names:['x.com','twitter.com'], label:'X', home:()=>path==='/' || path==='/home' || path==='/explore', search:q=>`https://x.com/search?q=${encodeURIComponent(q)}&src=typed_query`},
    {key:'reddit', names:['reddit.com'], label:'Reddit', home:()=>path==='/' || path==='/r/popular/' || path==='/r/all/', search:q=>`https://www.reddit.com/search/?q=${encodeURIComponent(q)}`},
    {key:'tiktok', names:['tiktok.com'], label:'TikTok', home:()=>path==='/' || path==='/foryou', search:q=>`https://www.tiktok.com/search?q=${encodeURIComponent(q)}`},
    {key:'instagram', names:['instagram.com'], label:'Instagram', home:()=>path==='/' || path==='/explore/' || path==='/explore' || path==='/reels/' || path==='/reels', search:q=>`https://www.instagram.com/explore/search/keyword/?q=${encodeURIComponent(q)}`},
    {key:'threads', names:['threads.net','threads.com'], label:'Threads', home:()=>path==='/' || path==='/for_you', search:q=>`https://www.threads.net/search?q=${encodeURIComponent(q)}`},
    {key:'facebook', names:['facebook.com'], label:'Facebook', home:()=>path==='/' || path==='/home.php' || path==='/watch' || path==='/watch/' || path==='/reels' || path==='/reels/', search:q=>`https://www.facebook.com/search/top/?q=${encodeURIComponent(q)}`},
    {key:'pinterest', names:['pinterest.com'], label:'Pinterest', home:()=>path==='/' || path==='/ideas/', search:q=>`https://www.pinterest.com/search/pins/?q=${encodeURIComponent(q)}`},
    {key:'twitch', names:['twitch.tv'], label:'Twitch', home:()=>path==='/' || path==='/directory', search:q=>`https://www.twitch.tv/search?term=${encodeURIComponent(q)}`}
  ];

  const site = sites.find(s => s.names.some(n => host === n || host.endsWith('.' + n)));
  if (!site) return;

  // 搜索跳转保护 -------------------------------------------------------------
  // 完整页面搜索导航会销毁旧 SouBa。目标搜索页的新 document 需要在
  // document-start 阶段继续用一个纯背景遮罩保护加载过程，否则 X 会露出
  // 黑色启动页、Reddit 会短暂露出主页壳。
  const pendingRaw = GM_getValue('pendingSearchTransition', '');
  let pendingSearch = null;
  try { pendingSearch = pendingRaw ? JSON.parse(pendingRaw) : null; } catch (_) {}

  const pendingFresh = pendingSearch
    && pendingSearch.site === site.key
    && Date.now() - Number(pendingSearch.ts || 0) < 10000;

  const isLikelySearchDestination = (() => {
    if (!pendingFresh) return false;
    try {
      const target = new URL(pendingSearch.target);
      // 支持 Bilibili / 微博 / 头条这类搜索子域名。
      return location.hostname === target.hostname
        && location.pathname === target.pathname;
    } catch (_) {
      return false;
    }
  })();

  if (isLikelySearchDestination) {
    const followBg = {
      douyin:'#0f1012', xiaohongshu:'#ffffff', weibo:'#f2f2f5',
      zhihu:'#ffffff', bili:'#ffffff', douban:'#f3f7f3',
      tieba:'#ffffff', toutiao:'#ffffff', youtube:'#ffffff',
      x:'#ffffff', reddit:'#ffffff', tiktok:'#101010',
      instagram:'#ffffff', threads:'#ffffff', facebook:'#f0f2f5',
      pinterest:'#ffffff', twitch:'#f6f3fb'
    };

    const appearanceMode = GM_getValue('appearanceMode', 'site');
    const customBg = GM_getValue('customBg', '#f3f6f4');
    const transitionBg = appearanceMode === 'custom'
      ? customBg
      : (followBg[site.key] || '#ffffff');

    const transitionStyle = document.createElement('style');
    transitionStyle.id = 'souba-search-transition-style';
    transitionStyle.textContent = `
      html.souba-search-transition {
        background:${transitionBg} !important;
      }
      html.souba-search-transition::before {
        content:"";
        position:fixed;
        inset:0;
        z-index:2147483647;
        background:${transitionBg};
        pointer-events:auto;
      }
    `;
    (document.head || document.documentElement).appendChild(transitionStyle);
    document.documentElement.classList.add('souba-search-transition');

    const startedAt = performance.now();
    let lastMutationAt = startedAt;
    let domReadyAt = 0;
    let removed = false;

    const transitionObserver = new MutationObserver(() => {
      lastMutationAt = performance.now();
    });
    transitionObserver.observe(document.documentElement, {
      childList:true,
      subtree:true,
      attributes:true,
      characterData:true
    });

    const removeTransition = () => {
      if (removed) return;
      removed = true;
      transitionObserver.disconnect();
      document.documentElement.classList.remove('souba-search-transition');
      transitionStyle.remove();
      GM_setValue('pendingSearchTransition', '');
    };

    const markReady = () => {
      if (!domReadyAt) domReadyAt = performance.now();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', markReady, {once:true});
    } else {
      markReady();
    }

    const watchTransition = () => {
      if (removed) return;
      const now = performance.now();

      if (domReadyAt) {
        const sinceReady = now - domReadyAt;
        const quietFor = now - lastMutationAt;

        // 页面至少已经完成基础 DOM 构建 500ms，并且近期 DOM 稍微稳定，
        // 才允许露出搜索结果。对于持续更新的 SPA，1.8s 后强制放行。
        if ((sinceReady >= 500 && quietFor >= 240) || sinceReady >= 1800) {
          removeTransition();
          return;
        }
      }

      // 极端情况下避免遮罩永久存在。
      if (now - startedAt >= 4500) {
        removeTransition();
        return;
      }

      requestAnimationFrame(watchTransition);
    };
    requestAnimationFrame(watchTransition);

    // 目标搜索页只负责过渡保护，不再创建完整 SouBa。
    return;
  }

  // 搜索子域名（search.bilibili.com / s.weibo.com / so.toutiao.com 等）
  // 即使路径恰好是 /，也不能重新盖上 SouBa。
  if (!site.names.includes(host) || !site.home()) return;

  // 防止同时启用稳定版和 Beta 时重复插入。
  if (document.documentElement.dataset.soubaActive === '1') return;
  document.documentElement.dataset.soubaActive = '1';

  const icons = {"douyin": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTQiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMzcuOCAxNC41YzEuOCA1LjYgNS4xIDkuMiAxMC43IDEwLjR2Ny4zYy00LjItLjItNy45LTEuNi0xMC44LTQuMXYxNC4yYzAgMTAuNS03LjggMTcuMi0xNyAxNy4yLTguNyAwLTE1LjQtNi43LTE1LjQtMTUuMiAwLTkgNy0xNS41IDE2LTE1LjUgMSAwIDIgLjEgMyAuM3Y3LjZhMTEuOCAxMS44IDAgMCAwLTMtLjRjLTQuOSAwLTguNiAzLjItOC42IDcuOCAwIDQuMyAzLjIgNy43IDcuNCA3LjcgNC43IDAgNy45LTMuNSA3LjktOVYxNC41aDkuOFoiIGZpbGw9IiMyNUY0RUUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLDIpIi8+CiAgPHBhdGggZD0iTTM3LjggMTQuNWMxLjggNS42IDUuMSA5LjIgMTAuNyAxMC40djcuM2MtNC4yLS4yLTcuOS0xLjYtMTAuOC00LjF2MTQuMmMwIDEwLjUtNy44IDE3LjItMTcgMTcuMi04LjcgMC0xNS40LTYuNy0xNS40LTE1LjIgMC05IDctMTUuNSAxNi0xNS41IDEgMCAyIC4xIDMgLjN2Ny42YTExLjggMTEuOCAwIDAgMC0zLS40Yy00LjkgMC04LjYgMy4yLTguNiA3LjggMCA0LjMgMy4yIDcuNyA3LjQgNy43IDQuNyAwIDcuOS0zLjUgNy45LTlWMTQuNWg5LjhaIiBmaWxsPSIjRkUyQzU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLC0xKSIvPgogIDxwYXRoIGQ9Ik0zNy44IDE0LjVjMS44IDUuNiA1LjEgOS4yIDEwLjcgMTAuNHY3LjNjLTQuMi0uMi03LjktMS42LTEwLjgtNC4xdjE0LjJjMCAxMC41LTcuOCAxNy4yLTE3IDE3LjItOC43IDAtMTUuNC02LjctMTUuNC0xNS4yIDAtOSA3LTE1LjUgMTYtMTUuNSAxIDAgMiAuMSAzIC4zdjcuNmExMS44IDExLjggMCAwIDAtMy0uNGMtNC45IDAtOC42IDMuMi04LjYgNy44IDAgNC4zIDMuMiA3LjcgNy40IDcuNyA0LjcgMCA3LjktMy41IDcuOS05VjE0LjVoOS44WiIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4=", "xiaohongshu": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgICAgIDxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSI1OCIgaGVpZ2h0PSI1OCIgcng9IjE0IiBmaWxsPSIjRkYyNDQyIi8+CiAgICAgIDx0ZXh0IHg9IjMyIiB5PSIzOSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIgogICAgICAgICAgICBmb250LXNpemU9IjIzIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZmZmIj5SRUQ8L3RleHQ+CiAgICA8L3N2Zz4=", "weibo": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRTYxNjJEIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTQwNyAxNzcuNmM3LjYtMjQtMTMuNC00Ni44LTM3LjQtNDEuNy0yMiA0LjgtMjguOC0yOC4xLTcuMS0zMi44IDUwLjEtMTAuOSA5Mi4zIDM3LjEgNzYuNSA4NC44LTYuOCAyMS4yLTM4LjggMTAuOC0zMi0xMC4zek0yMTQuOCA0NDYuN0MxMDguNSA0NDYuNyAwIDM5NS4zIDAgMzEwLjRjMC00NC4zIDI4LTk1LjQgNzYuMy0xNDMuN0MxNzYgNjcgMjc5LjUgNjUuOCAyNDkuOSAxNjFjLTQgMTMuMSAxMi4zIDUuNyAxMi4zIDYgNzkuNS0zMy42IDE0MC41LTE2LjggMTE0IDUxLjQtMy43IDkuNCAxLjEgMTAuOSA4LjMgMTMuMSAxMzUuNyA0Mi4zIDM0LjggMjE1LjItMTY5LjcgMjE1LjJ6bTE0My43LTE0Ni4zYy01LjQtNTUuNy03OC41LTk0LTE2My40LTg1LjctODQuOCA4LjYtMTQ4LjggNjAuMy0xNDMuNCAxMTZzNzguNSA5NCAxNjMuNCA4NS43Yzg0LjgtOC42IDE0OC44LTYwLjMgMTQzLjQtMTE2ek0zNDcuOSAzNS4xYy0yNS45IDUuNi0xNi44IDQzLjcgOC4zIDM4LjMgNzIuMy0xNS4yIDEzNC44IDUyLjggMTExLjcgMTI0LTcuNCAyNC4yIDI5LjEgMzcgMzcuNCAxMiAzMS45LTk5LjgtNTUuMS0xOTUuOS0xNTcuNC0xNzQuM3ptLTc4LjUgMzExYy0xNy4xIDM4LjgtNjYuOCA2MC0xMDkuMSA0Ni4zLTQwLjgtMTMuMS01OC01My40LTQwLjMtODkuNyAxNy43LTM1LjQgNjMuMS01NS40IDEwMy40LTQ1LjEgNDIgMTAuOCA2My4xIDUwLjIgNDYgODguNXptLTg2LjMtMzBjLTEyLjktNS40LTMwIC4zLTM4IDEyLjktOC4zIDEyLjktNC4zIDI4IDguNiAzNCAxMy4xIDYgMzAuOC4zIDM5LjEtMTIuOSA4LTEzLjEgMy43LTI4LjMtOS43LTM0em0zMi42LTEzLjRjLTUuMS0xLjctMTEuNC42LTE0LjMgNS40LTIuOSA1LjEtMS40IDEwLjYgMy43IDEyLjkgNS4xIDIgMTEuNy0uMyAxNC42LTUuNCAyLjgtNS4yIDEuMS0xMC45LTQtMTIuOXoiLz48L3N2Zz4=", "zhihu": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTY3N0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTE3MC41NCAxNDguMTN2MjE3LjU0bDIzLjQzLjAxIDcuNzEgMjYuMzcgNDIuMDEtMjYuMzdoNDkuNTNWMTQ4LjEzSDE3MC41NHptOTcuNzUgMTkzLjkzaC0yNy45NGwtMjcuOSAxNy41MS01LjA4LTE3LjQ3LTExLjktLjA0VjE3MS43NWg3Mi44MnYxNzAuMzF6bS0xMTguNDYtOTQuMzlIOTcuNWMxLjc0LTI3LjEgMi4yLTUxLjU5IDIuMi03My40Nmg1MS4xNnMxLjk3LTIyLjU2LTguNTgtMjIuMzFoLTg4LjVjMy40OS0xMy4xMiA3Ljg3LTI2LjY2IDEzLjEyLTQwLjY3IDAgMC0yNC4wNyAwLTMyLjI3IDIxLjU3LTMuMzkgOC45LTEzLjIxIDQzLjE0LTMwLjcgNzguMTIgNS44OS0uNjQgMjUuMzctMS4xOCAzNi44NC0yMi4yMSAyLjExLTUuODkgMi41MS02LjY2IDUuMTQtMTQuNTNoMjguODdjMCAxMC41LTEuMiA2Ni44OC0xLjY4IDczLjQ0SDIwLjgzYy0xMS43NCAwLTE1LjU2IDIzLjYyLTE1LjU2IDIzLjYyaDY1LjU4QzY2LjQ1IDMyMS4xIDQyLjgzIDM2My4xMiAwIDM5Ni4zNGMyMC40OSA1Ljg1IDQwLjkxLS45MyA1MS05LjkgMCAwIDIyLjk4LTIwLjkgMzUuNTktNjkuMjVsNTMuOTYgNjQuOTRzNy45MS0yNi44OS0xLjI0LTM5Ljk5Yy03LjU4LTguOTItMjguMDYtMzMuMDYtMzYuNzktNDEuODFMODcuOSAzMTEuOTVjNC4zNi0xMy45OCA2Ljk5LTI3LjU1IDcuODctNDAuNjdoNjEuNjVzLS4wOS0yMy42Mi03LjU5LTIzLjYydi4wMXptNDEyLjAyLTEuNmMyMC44My0yNS42NCA0NC45OC01OC41NyA0NC45OC01OC41N3MtMTguNjUtMTQuOC0yNy4zOC00LjA2Yy02IDguMTUtMzYuODMgNDguMi0zNi44MyA0OC4ybDE5LjIzIDE0LjQzem0tMTUwLjA5LTU5LjA5Yy05LjAxLTguMjUtMjUuOTEgMi4xMy0yNS45MSAyLjEzczM5LjUyIDU1LjA0IDQxLjEyIDU3LjQ1bDE5LjQ2LTEzLjczcy0yNS42Ny0zNy42MS0zNC42Ni00NS44NmgtLjAxek02NDAgMjU4LjM1Yy0xOS43OCAwLTEzMC45MS45My0xMzEuMDYuOTN2LTEwMWM0LjgxIDAgMTIuNDItLjQgMjIuODUtMS4yIDQwLjg4LTIuNDEgNzAuMTMtNCA4Ny43Ny00LjgxIDAgMCAxMi4yMi0yNy4xOS0uNTktMzMuNDQtMy4wNy0xLjE4LTIzLjE3IDQuNTgtMjMuMTcgNC41OHMtMTY1LjIyIDE2LjQ5LTIzMi4zNiAxOC4wNWMxLjYgOC44MiA3LjYyIDE3LjA4IDE1Ljc4IDE5LjU1IDEzLjMxIDMuNDggMjIuNjkgMS43IDQ5LjE1Ljg5IDI0LjgzLTEuNiA0My42OC0yLjQzIDU2LjUxLTIuNDN2OTkuODFIMzUxLjQxczIuODIgMjIuMzEgMjUuNTEgMjIuODVoMTA3Ljk0djcwLjkyYzAgMTMuOTctMTEuMTkgMjEuOTktMjQuNDggMjEuMTItMTQuMDguMTEtMjYuMDgtMS4xNS00MS42OS0xLjgxIDEuOTkgMy45NyA2LjMzIDE0LjM5IDE5LjMxIDIxLjg0IDkuODggNC44MSAxNi4xNyA2LjU3IDI2LjAyIDYuNTcgMjkuNTYgMCA0NS42Ny0xNy4yOCA0NC44OS00NS4zMXYtNzMuMzJoMTIyLjM2YzkuNjggMCA4LjctMjMuNzggOC43LTIzLjc4bC4wMy0uMDF6Ii8+PC9zdmc+", "bili": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDBBRUVDIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTQ4OC42IDEwNC4xQzUwNS4zIDEyMi4yIDUxMyAxNDMuOCA1MTEuOSAxNjkuOFYzNzIuMkM1MTEuNSAzOTguNiA1MDIuNyA0MjAuMyA0ODUuNCA0MzcuM0M0NjguMiA0NTQuMyA0NDYuMyA0NjMuMiA0MTkuOSA0NjRIOTIuMDJDNjUuNTcgNDYzLjIgNDMuODEgNDU0LjIgMjYuNzQgNDM2LjhDOS42ODIgNDE5LjQgLjc2NjcgMzk2LjUgMCAzNjguMlYxNjkuOEMuNzY2NyAxNDMuOCA5LjY4MiAxMjIuMiAyNi43NCAxMDQuMUM0My44MSA4Ny43NSA2NS41NyA3OC43NyA5Mi4wMiA3OEgxMjEuNEw5Ni4wNSA1Mi4xOUM5MC4zIDQ2LjQ2IDg3LjQyIDM5LjE5IDg3LjQyIDMwLjRDODcuNDIgMjEuNiA5MC4zIDE0LjM0IDk2LjA1IDguNjAzQzEwMS44IDIuODY4IDEwOS4xIDAgMTE3LjkgMEMxMjYuNyAwIDEzNCAyLjg2OCAxMzkuOCA4LjYwM0wyMTMuMSA3OEgzMDEuMUwzNzUuNiA4LjYwM0MzODEuNyAyLjg2OCAzODkuMiAwIDM5OCAwQzQwNi44IDAgNDE0LjEgMi44NjggNDE5LjkgOC42MDNDNDI1LjYgMTQuMzQgNDI4LjUgMjEuNiA0MjguNSAzMC40QzQyOC41IDM5LjE5IDQyNS42IDQ2LjQ2IDQxOS45IDUyLjE5TDM5NC42IDc4TDQyMy45IDc4QzQ1MC4zIDc4Ljc3IDQ3MS45IDg3Ljc1IDQ4OC42IDEwNC4xSDQ4OC42ek00NDkuOCAxNzMuOEM0NDkuNCAxNjQuMiA0NDYuMSAxNTYuNCA0MzkuMSAxNTAuM0M0MzMuOSAxNDQuMiA0MjUuMSAxNDAuOSA0MTYuNCAxNDAuNUg5Ni4wNUM4Ni40NiAxNDAuOSA3OC42IDE0NC4yIDcyLjQ3IDE1MC4zQzY2LjMzIDE1Ni40IDYzLjA3IDE2NC4yIDYyLjY5IDE3My44VjM2OC4yQzYyLjY5IDM3Ny40IDY1Ljk1IDM4NS4yIDcyLjQ3IDM5MS43Qzc4Ljk5IDM5OC4yIDg2Ljg1IDQwMS41IDk2LjA1IDQwMS41SDQxNi40QzQyNS42IDQwMS41IDQzMy40IDM5OC4yIDQzOS43IDM5MS43QzQ0NiAzODUuMiA0NDkuNCAzNzcuNCA0NDkuOCAzNjguMkw0NDkuOCAxNzMuOHpNMTg1LjUgMjE2LjVDMTkxLjggMjIyLjggMTk1LjIgMjMwLjYgMTk1LjYgMjM5LjdWMjczQzE5NS4yIDI4Mi4yIDE5MS45IDI4OS45IDE4NS44IDI5Ni4yQzE3OS42IDMwMi41IDE3MS44IDMwNS43IDE2Mi4yIDMwNS43QzE1Mi42IDMwNS43IDE0NC43IDMwMi41IDEzOC42IDI5Ni4yQzEzMi41IDI4OS45IDEyOS4yIDI4Mi4yIDEyOC44IDI3M1YyMzkuN0MxMjkuMiAyMzAuNiAxMzIuNiAyMjIuOCAxMzguOSAyMTYuNUMxNDUuMiAyMTAuMiAxNTIuMSAyMDYuOSAxNjIuMiAyMDYuNUMxNzEuNCAyMDYuOSAxNzkuMiAyMTAuMiAxODUuNSAyMTYuNUgxODUuNXpNMzc3IDIxNi41QzM4My4zIDIyMi44IDM4Ni43IDIzMC42IDM4Ny4xIDIzOS43VjI3M0MzODYuNyAyODIuMiAzODMuNCAyODkuOSAzNzcuMyAyOTYuMkMzNzEuMiAzMDIuNSAzNjMuMyAzMDUuNyAzNTMuNyAzMDUuN0MzNDQuMSAzMDUuNyAzMzYuMyAzMDIuNSAzMzAuMSAyOTYuMkMzMjMuMSAyODkuOSAzMjAuNyAyODIuMiAzMjAuNCAyNzNWMjM5LjdDMzIwLjcgMjMwLjYgMzI0LjEgMjIyLjggMzMwLjQgMjE2LjVDMzM2LjcgMjEwLjIgMzQ0LjUgMjA2LjkgMzUzLjcgMjA2LjVDMzYyLjkgMjA2LjkgMzcwLjcgMjEwLjIgMzc3IDIxNi41SDM3N3oiLz48L3N2Zz4=", "douban": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgICAgIDxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSI1OCIgaGVpZ2h0PSI1OCIgcng9IjE0IiBmaWxsPSIjMDBBNjVBIi8+CiAgICAgIDx0ZXh0IHg9IjMyIiB5PSI0MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIgogICAgICAgICAgICBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZmZmIj7osYY8L3RleHQ+CiAgICA8L3N2Zz4=", "tieba": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgICAgIDxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSI1OCIgaGVpZ2h0PSI1OCIgcng9IjE0IiBmaWxsPSIjNEU2RUYyIi8+CiAgICAgIDx0ZXh0IHg9IjMyIiB5PSI0MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIgogICAgICAgICAgICBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZmZmIj7otLQ8L3RleHQ+CiAgICA8L3N2Zz4=", "toutiao": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiAgICAgIDxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSI1OCIgaGVpZ2h0PSI1OCIgcng9IjE0IiBmaWxsPSIjRjA0MTQyIi8+CiAgICAgIDx0ZXh0IHg9IjMyIiB5PSI0MSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmIgogICAgICAgICAgICBmb250LXNpemU9IjI2IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZmZmIj7lpLQ8L3RleHQ+CiAgICA8L3N2Zz4=", "youtube": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkYwMDMzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTU0OS42NTUgMTI0LjA4M2MtNi4yODEtMjMuNjUtMjQuNzg3LTQyLjI3Ni00OC4yODQtNDguNTk3QzQ1OC43ODEgNjQgMjg4IDY0IDI4OCA2NFMxMTcuMjIgNjQgNzQuNjI5IDc1LjQ4NmMtMjMuNDk3IDYuMzIyLTQyLjAwMyAyNC45NDctNDguMjg0IDQ4LjU5Ny0xMS40MTIgNDIuODY3LTExLjQxMiAxMzIuMzA1LTExLjQxMiAxMzIuMzA1czAgODkuNDM4IDExLjQxMiAxMzIuMzA1YzYuMjgxIDIzLjY1IDI0Ljc4NyA0MS41IDQ4LjI4NCA0Ny44MjFDMTE3LjIyIDQ0OCAyODggNDQ4IDI4OCA0NDhzMTcwLjc4IDAgMjEzLjM3MS0xMS40ODZjMjMuNDk3LTYuMzIxIDQyLjAwMy0yNC4xNzEgNDguMjg0LTQ3LjgyMSAxMS40MTItNDIuODY3IDExLjQxMi0xMzIuMzA1IDExLjQxMi0xMzIuMzA1czAtODkuNDM4LTExLjQxMi0xMzIuMzA1em0tMzE3LjUxIDIxMy41MDhWMTc1LjE4NWwxNDIuNzM5IDgxLjIwNS0xNDIuNzM5IDgxLjIwMXoiLz48L3N2Zz4=", "x": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTExMTExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM4OS4yIDQ4aDcwLjZMMzA1LjYgMjI0LjIgNDg3IDQ2NEgzNDVMMjMzLjcgMzE4LjYgMTA2LjUgNDY0SDM1LjhMMjAwLjcgMjc1LjUgMjYuOCA0OEgxNzIuNEwyNzIuOSAxODAuOSAzODkuMiA0OHpNMzY0LjQgNDIxLjhoMzkuMUwxNTEuMSA4OGgtNDJMMzY0LjQgNDIxLjh6Ii8+PC9zdmc+", "reddit": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkY0NTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM3MyAxMzguNmMtMjUuMiAwLTQ2LjMtMTcuNS01MS45LTQxbDAgMGMtMzAuNiA0LjMtNTQuMiAzMC43LTU0LjIgNjIuNGwwIC4yYzQ3LjQgMS44IDkwLjYgMTUuMSAxMjQuOSAzNi4zYzEyLjYtOS43IDI4LjQtMTUuNSA0NS41LTE1LjVjNDEuMyAwIDc0LjcgMzMuNCA3NC43IDc0LjdjMCAyOS44LTE3LjQgNTUuNS00Mi43IDY3LjVjLTIuNCA4Ni44LTk3IDE1Ni42LTIxMy4yIDE1Ni42UzQ1LjUgNDEwLjEgNDMgMzIzLjRDMTcuNiAzMTEuNSAwIDI4NS43IDAgMjU1LjdjMC00MS4zIDMzLjQtNzQuNyA3NC43LTc0LjdjMTcuMiAwIDMzIDUuOCA0NS43IDE1LjZjMzQtMjEuMSA3Ni44LTM0LjQgMTIzLjctMzYuNGwwLS4zYzAtNDQuMyAzMy43LTgwLjkgNzYuOC04NS41QzMyNS44IDUwLjIgMzQ3LjIgMzIgMzczIDMyYzI5LjQgMCA1My4zIDIzLjkgNTMuMyA1My4zcy0yMy45IDUzLjMtNTMuMyA1My4zek0xNTcuNSAyNTUuM2MtMjAuOSAwLTM4LjkgMjAuOC00MC4yIDQ3LjlzMTcuMSAzOC4xIDM4IDM4LjFzMzYuNi05LjggMzcuOC0zNi45cy0xNC43LTQ5LjEtMzUuNy00OS4xek0zOTUgMzAzLjFjLTEuMi0yNy4xLTE5LjItNDcuOS00MC4yLTQ3LjlzLTM2LjkgMjItMzUuNyA0OS4xYzEuMiAyNy4xIDE2LjkgMzYuOSAzNy44IDM2LjlzMzkuMy0xMSAzOC0zOC4xem0tNjAuMSA3MC44YzEuNS0zLjYtMS03LjctNC45LTguMWMtMjMtMi4zLTQ3LjktMy42LTczLjgtMy42cy01MC44IDEuMy03My44IDMuNmMtMy45IC40LTYuNCA0LjUtNC45IDguMWMxMi45IDMwLjggNDMuMyA1Mi40IDc4LjcgNTIuNHM2NS44LTIxLjYgNzguNy01Mi40eiIvPjwvc3ZnPg==", "tiktok": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTExMTExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTQ0OCwyMDkuOTFhMjEwLjA2LDIxMC4wNiwwLDAsMS0xMjIuNzctMzkuMjVWMzQ5LjM4QTE2Mi41NSwxNjIuNTUsMCwxLDEsMTg1LDE4OC4zMVYyNzguMmE3NC42Miw3NC42MiwwLDEsMCw1Mi4yMyw3MS4xOFYwbDg4LDBhMTIxLjE4LDEyMS4xOCwwLDAsMCwxLjg2LDIyLjE3aDBBMTIyLjE4LDEyMi4xOCwwLDAsMCwzODEsMTAyLjM5YTEyMS40MywxMjEuNDMsMCwwLDAsNjcsMjAuMTRaIi8+PC9zdmc+", "instagram": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjQzEzNTg0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTIyNC4xIDE0MWMtNjMuNiAwLTExNC45IDUxLjMtMTE0LjkgMTE0LjlzNTEuMyAxMTQuOSAxMTQuOSAxMTQuOVMzMzkgMzE5LjUgMzM5IDI1NS45IDI4Ny43IDE0MSAyMjQuMSAxNDF6bTAgMTg5LjZjLTQxLjEgMC03NC43LTMzLjUtNzQuNy03NC43czMzLjUtNzQuNyA3NC43LTc0LjcgNzQuNyAzMy41IDc0LjcgNzQuNy0zMy42IDc0LjctNzQuNyA3NC43em0xNDYuNC0xOTQuM2MwIDE0LjktMTIgMjYuOC0yNi44IDI2LjgtMTQuOSAwLTI2LjgtMTItMjYuOC0yNi44czEyLTI2LjggMjYuOC0yNi44IDI2LjggMTIgMjYuOCAyNi44em03Ni4xIDI3LjJjLTEuNy0zNS45LTkuOS02Ny43LTM2LjItOTMuOS0yNi4yLTI2LjItNTgtMzQuNC05My45LTM2LjItMzctMi4xLTE0Ny45LTIuMS0xODQuOSAwLTM1LjggMS43LTY3LjYgOS45LTkzLjkgMzYuMXMtMzQuNCA1OC0zNi4yIDkzLjljLTIuMSAzNy0yLjEgMTQ3LjkgMCAxODQuOSAxLjcgMzUuOSA5LjkgNjcuNyAzNi4yIDkzLjlzNTggMzQuNCA5My45IDM2LjJjMzcgMi4xIDE0Ny45IDIuMSAxODQuOSAwIDM1LjktMS43IDY3LjctOS45IDkzLjktMzYuMiAyNi4yLTI2LjIgMzQuNC01OCAzNi4yLTkzLjkgMi4xLTM3IDIuMS0xNDcuOCAwLTE4NC44ek0zOTguOCAzODhjLTcuOCAxOS42LTIyLjkgMzQuNy00Mi42IDQyLjYtMjkuNSAxMS43LTk5LjUgOS0xMzIuMSA5cy0xMDIuNyAyLjYtMTMyLjEtOWMtMTkuNi03LjgtMzQuNy0yMi45LTQyLjYtNDIuNi0xMS43LTI5LjUtOS05OS41LTktMTMyLjFzLTIuNi0xMDIuNyA5LTEzMi4xYzcuOC0xOS42IDIyLjktMzQuNyA0Mi42LTQyLjYgMjkuNS0xMS43IDk5LjUtOSAxMzIuMS05czEwMi43LTIuNiAxMzIuMSA5YzE5LjYgNy44IDM0LjcgMjIuOSA0Mi42IDQyLjYgMTEuNyAyOS41IDkgOTkuNSA5IDEzMi4xczIuNyAxMDIuNy05IDEzMi4xeiIvPjwvc3ZnPg==", "threads": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTExMTExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTMzMS41IDIzNS43YzIuMiAuOSA0LjIgMS45IDYuMyAyLjhjMjkuMiAxNC4xIDUwLjYgMzUuMiA2MS44IDYxLjRjMTUuNyAzNi41IDE3LjIgOTUuOC0zMC4zIDE0My4yYy0zNi4yIDM2LjItODAuMyA1Mi41LTE0Mi42IDUzaC0uM2MtNzAuMi0uNS0xMjQuMS0yNC4xLTE2MC40LTcwLjJjLTMyLjMtNDEtNDguOS05OC4xLTQ5LjUtMTY5LjZWMjU2di0uMkMxNyAxODQuMyAzMy42IDEyNy4yIDY1LjkgODYuMkMxMDIuMiA0MC4xIDE1Ni4yIDE2LjUgMjI2LjQgMTZoLjNjNzAuMyAuNSAxMjQuOSAyNCAxNjIuMyA2OS45YzE4LjQgMjIuNyAzMiA1MCA0MC42IDgxLjdsLTQwLjQgMTAuOGMtNy4xLTI1LjgtMTcuOC00Ny44LTMyLjItNjUuNGMtMjkuMi0zNS44LTczLTU0LjItMTMwLjUtNTQuNmMtNTcgLjUtMTAwLjEgMTguOC0xMjguMiA1NC40QzcyLjEgMTQ2LjEgNTguNSAxOTQuMyA1OCAyNTZjLjUgNjEuNyAxNC4xIDEwOS45IDQwLjMgMTQzLjNjMjggMzUuNiA3MS4yIDUzLjkgMTI4LjIgNTQuNGM1MS40LS40IDg1LjQtMTIuNiAxMTMuNy00MC45YzMyLjMtMzIuMiAzMS43LTcxLjggMjEuNC05NS45Yy02LjEtMTQuMi0xNy4xLTI2LTMxLjktMzQuOWMtMy43IDI2LjktMTEuOCA0OC4zLTI0LjcgNjQuOGMtMTcuMSAyMS44LTQxLjQgMzMuNi03Mi43IDM1LjNjLTIzLjYgMS4zLTQ2LjMtNC40LTYzLjktMTZjLTIwLjgtMTMuOC0zMy0zNC44LTM0LjMtNTkuM2MtMi41LTQ4LjMgMzUuNy04MyA5NS4yLTg2LjRjMjEuMS0xLjIgNDAuOS0uMyA1OS4yIDIuOGMtMi40LTE0LjgtNy4zLTI2LjYtMTQuNi0zNS4yYy0xMC0xMS43LTI1LjYtMTcuNy00Ni4yLTE3LjhIMjI3Yy0xNi42IDAtMzkgNC42LTUzLjMgMjYuM2wtMzQuNC0yMy42YzE5LjItMjkuMSA1MC4zLTQ1LjEgODcuOC00NS4xaC44YzYyLjYgLjQgOTkuOSAzOS41IDEwMy43IDEwNy43bC0uMiAuMnptLTE1NiA2OC44YzEuMyAyNS4xIDI4LjQgMzYuOCA1NC42IDM1LjNjMjUuNi0xLjQgNTQuNi0xMS40IDU5LjUtNzMuMmMtMTMuMi0yLjktMjcuOC00LjQtNDMuNC00LjRjLTQuOCAwLTkuNiAuMS0xNC40IC40Yy00Mi45IDIuNC01Ny4yIDIzLjItNTYuMiA0MS44bC0uMSAuMXoiLz48L3N2Zz4=", "facebook": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTg3N0YyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTUxMiAyNTZDNTEyIDExNC42IDM5Ny40IDAgMjU2IDBTMCAxMTQuNiAwIDI1NkMwIDM3NiA4Mi43IDQ3Ni44IDE5NC4yIDUwNC41VjMzNC4ySDE0MS40VjI1Nmg1Mi44VjIyMi4zYzAtODcuMSAzOS40LTEyNy41IDEyNS0xMjcuNWMxNi4yIDAgNDQuMiAzLjIgNTUuNyA2LjRWMTcyYy02LS42LTE2LjUtMS0yOS42LTFjLTQyIDAtNTguMiAxNS45LTU4LjIgNTcuMlYyNTZoODMuNmwtMTQuNCA3OC4ySDI4N1Y1MTAuMUM0MTMuOCA0OTQuOCA1MTIgMzg2LjkgNTEyIDI1NmgweiIvPjwvc3ZnPg==", "pinterest": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRTYwMDIzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTQ5NiAyNTZjMCAxMzctMTExIDI0OC0yNDggMjQ4LTI1LjYgMC01MC4yLTMuOS03My40LTExLjEgMTAuMS0xNi41IDI1LjItNDMuNSAzMC44LTY1IDMtMTEuNiAxNS40LTU5IDE1LjQtNTkgOC4xIDE1LjQgMzEuNyAyOC41IDU2LjggMjguNSA3NC44IDAgMTI4LjctNjguOCAxMjguNy0xNTQuMyAwLTgxLjktNjYuOS0xNDMuMi0xNTIuOS0xNDMuMi0xMDcgMC0xNjMuOSA3MS44LTE2My45IDE1MC4xIDAgMzYuNCAxOS40IDgxLjcgNTAuMyA5Ni4xIDQuNyAyLjIgNy4yIDEuMiA4LjMtMy4zLjgtMy40IDUtMjAuMyA2LjktMjguMS42LTIuNS4zLTQuNy0xLjctNy4xLTEwLjEtMTIuNS0xOC4zLTM1LjMtMTguMy01Ni42IDAtNTQuNyA0MS40LTEwNy42IDExMi0xMDcuNiA2MC45IDAgMTAzLjYgNDEuNSAxMDMuNiAxMDAuOSAwIDY3LjEtMzMuOSAxMTMuNi03OCAxMTMuNi0yNC4zIDAtNDIuNi0yMC4xLTM2LjctNDQuOCA3LTI5LjUgMjAuNS02MS4zIDIwLjUtODIuNiAwLTE5LTEwLjItMzQuOS0zMS40LTM0LjktMjQuOSAwLTQ0LjkgMjUuNy00NC45IDYwLjIgMCAyMiA3LjQgMzYuOCA3LjQgMzYuOHMtMjQuNSAxMDMuOC0yOSAxMjMuMmMtNSAyMS40LTMgNTEuNi0uOSA3MS4yQzY1LjQgNDUwLjkgMCAzNjEuMSAwIDI1NiAwIDExOSAxMTEgOCAyNDggOHMyNDggMTExIDI0OCAyNDh6Ii8+PC9zdmc+", "twitch": "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjOTE0NkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjcuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTM5MS4xNywxMDMuNDdIMzUyLjU0djEwOS43aDM4LjYzWk0yODUsMTAzSDI0Ni4zN1YyMTIuNzVIMjg1Wk0xMjAuODMsMCwyNC4zMSw5MS40MlY0MjAuNThIMTQwLjE0VjUxMmw5Ni41My05MS40Mmg3Ny4yNUw0ODcuNjksMjU2VjBaTTQ0OS4wNywyMzcuNzVsLTc3LjIyLDczLjEySDI5NC42MWwtNjcuNiw2NHYtNjRIMTQwLjE0VjM2LjU4SDQ0OS4wN1oiLz48L3N2Zz4="};

  const themes = {
    douyin:      {bg:'#0f1012', surface:'#191a1d', text:'#f4f4f5', secondary:'#a5a6aa', quiet:'#67696e', line:'#34363b', accent:'#fe2c55', focus:'rgba(254,44,85,.18)', overlay:'rgba(25,26,29,.78)'},
    xiaohongshu: {bg:'#ffffff', surface:'#ffffff', text:'#202124', secondary:'#6f7075', quiet:'#a5a6aa', line:'#e4e4e6', accent:'#ff2442', focus:'rgba(255,36,66,.13)', overlay:'rgba(255,255,255,.78)'},
    weibo:       {bg:'#f2f2f5', surface:'#ffffff', text:'#202124', secondary:'#6f7075', quiet:'#a5a6aa', line:'#dedee3', accent:'#ff8200', focus:'rgba(255,130,0,.14)', overlay:'rgba(255,255,255,.74)'},
    zhihu:       {bg:'#f6f8fb', surface:'#ffffff', text:'#1d1d1f', secondary:'#68707a', quiet:'#a0a6ad', line:'#d8dee5', accent:'#1677ff', focus:'rgba(22,119,255,.14)', overlay:'rgba(255,255,255,.74)'},
    bili:        {bg:'#ffffff', surface:'#ffffff', text:'#1d1d1f', secondary:'#66727a', quiet:'#9ca6ac', line:'#e2e5e7', accent:'#00aeec', focus:'rgba(0,174,236,.15)', overlay:'rgba(255,255,255,.76)'},
    douban:      {bg:'#f3f7f3', surface:'#ffffff', text:'#1f2822', secondary:'#68716b', quiet:'#a1aaa4', line:'#d8e0da', accent:'#007722', focus:'rgba(0,119,34,.14)', overlay:'rgba(255,255,255,.74)'},
    tieba:       {bg:'#f5f7fb', surface:'#ffffff', text:'#202124', secondary:'#69707b', quiet:'#a1a7b0', line:'#d9dee7', accent:'#4e6ef2', focus:'rgba(78,110,242,.14)', overlay:'rgba(255,255,255,.74)'},
    toutiao:     {bg:'#ffffff', surface:'#ffffff', text:'#202124', secondary:'#707075', quiet:'#a7a7ac', line:'#e2e2e4', accent:'#f04142', focus:'rgba(240,65,66,.13)', overlay:'rgba(255,255,255,.78)'},
    youtube:     {bg:'#ffffff', surface:'#ffffff', text:'#0f0f0f', secondary:'#606060', quiet:'#909090', line:'#e5e5e5', accent:'#ff0033', focus:'rgba(255,0,51,.13)', overlay:'rgba(255,255,255,.78)'},
    x:           {bg:'#ffffff', surface:'#ffffff', text:'#0f1419', secondary:'#536471', quiet:'#8b98a5', line:'#eff3f4', accent:'#1d9bf0', focus:'rgba(29,155,240,.15)', overlay:'rgba(255,255,255,.78)'},
    reddit:      {bg:'#ffffff', surface:'#ffffff', text:'#1a1a1b', secondary:'#6a6c6e', quiet:'#a1a3a5', line:'#e2e4e6', accent:'#ff4500', focus:'rgba(255,69,0,.14)', overlay:'rgba(255,255,255,.78)'},
    tiktok:      {bg:'#101010', surface:'#191919', text:'#ffffff', secondary:'#a7a7a7', quiet:'#666666', line:'#353535', accent:'#25f4ee', focus:'rgba(37,244,238,.15)', overlay:'rgba(25,25,25,.80)'},
    instagram:   {bg:'#ffffff', surface:'#ffffff', text:'#1d1d1f', secondary:'#737378', quiet:'#aaaaaf', line:'#e2e2e4', accent:'#c13584', focus:'rgba(193,53,132,.13)', overlay:'rgba(255,255,255,.78)'},
    threads:     {bg:'#ffffff', surface:'#ffffff', text:'#111111', secondary:'#696969', quiet:'#a3a3a3', line:'#e2e2e2', accent:'#111111', focus:'rgba(0,0,0,.10)', overlay:'rgba(255,255,255,.78)'},
    facebook:    {bg:'#f0f2f5', surface:'#ffffff', text:'#1c1e21', secondary:'#65676b', quiet:'#a4a6aa', line:'#d9dde3', accent:'#1877f2', focus:'rgba(24,119,242,.14)', overlay:'rgba(255,255,255,.74)'},
    pinterest:   {bg:'#ffffff', surface:'#ffffff', text:'#111111', secondary:'#6d6d6d', quiet:'#aaaaaa', line:'#e2e2e2', accent:'#e60023', focus:'rgba(230,0,35,.13)', overlay:'rgba(255,255,255,.78)'},
    twitch:      {bg:'#f6f3fb', surface:'#ffffff', text:'#201c28', secondary:'#6d6578', quiet:'#aaa4b2', line:'#ddd7e6', accent:'#9146ff', focus:'rgba(145,70,255,.14)', overlay:'rgba(255,255,255,.74)'}
  };

  const neutralTheme = {bg:'#f3f6f4', surface:'#ffffff', text:'#1d1d1f', secondary:'#6e6e73', quiet:'#a4a4aa', line:'#d5d6d8', accent:'#0071e3', focus:'rgba(0,113,227,.14)', overlay:'rgba(255,255,255,.72)'};

  let userEnteredFeed = false;
  let installing = false;
  let rootObserver = null;
  let pauseObserver = null;

  // 0. 首屏绘制前预遮罩。背景使用“主页大面积底色”的兜底值，
  // 而不是统一黑色，避免 X / YouTube / Reddit 等浅色站点出现黑闪。
  const earlyBg = (themes[site.key] || neutralTheme).bg;
  const earlyStyle = document.createElement('style');
  earlyStyle.id = 'souba-early-style';
  earlyStyle.textContent = `
    html.souba-preveil { background:${earlyBg} !important; }
    html.souba-preveil::before{
      content:"";position:fixed;inset:0;z-index:2147483646;
      background:${earlyBg};pointer-events:auto;
    }
    #souba-buffer{
      position:fixed !important;inset:0 !important;
      z-index:2147483647 !important;visibility:visible !important;
    }
  `;
  (document.head || document.documentElement).appendChild(earlyStyle);
  document.documentElement.classList.add('souba-preveil');

  // 缓冲页存在时禁止自动播放；进入 Feed 后恢复。
  const mediaProto = window.HTMLMediaElement && HTMLMediaElement.prototype;
  const originalPlay = mediaProto && mediaProto.play;
  let blockPlay = true;

  if (mediaProto && originalPlay) {
    try {
      mediaProto.play = function(...args) {
        if (blockPlay) {
          try { this.pause(); } catch (_) {}
          return Promise.resolve();
        }
        return originalPlay.apply(this, args);
      };
    } catch (_) {}
  }

  const restoreMediaPlay = () => {
    blockPlay = false;
    if (mediaProto && originalPlay) {
      try { mediaProto.play = originalPlay; } catch (_) {}
    }
  };

  const pauseAll = () => {
    if (userEnteredFeed) return;
    document.querySelectorAll?.('video,audio').forEach(m => {
      try { m.autoplay = false; m.pause(); } catch (_) {}
    });
  };

  const luminance = (hex) => {
    let h = String(hex || '').replace('#','');
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return 1;
    const rgb = [0,2,4].map(i => parseInt(h.slice(i,i+2),16)/255)
      .map(v => v <= .03928 ? v/12.92 : Math.pow((v+.055)/1.055,2.4));
    return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];
  };

  const customTheme = (bg) => {
    const dark = luminance(bg) < .22;
    return dark ? {
      bg, surface:'#1d1f20', text:'#f2f2f3', secondary:'#aaaab0', quiet:'#6f7075',
      line:'#3c3f42', accent:'#0a84ff', focus:'rgba(10,132,255,.20)', overlay:'rgba(29,31,32,.80)'
    } : {
      bg, surface:'#ffffff', text:'#1d1d1f', secondary:'#6e6e73', quiet:'#a4a4aa',
      line:'#d5d6d8', accent:'#0071e3', focus:'rgba(0,113,227,.14)', overlay:'rgba(255,255,255,.72)'
    };
  };

  const cssColorToHex = (value) => {
    if (!value || value === 'transparent') return null;
    const v = String(value).trim();
    if (/^#[0-9a-f]{6}$/i.test(v)) return v.toLowerCase();
    const m = v.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+))?\s*\)$/i);
    if (!m) return null;
    if (m[4] !== undefined && Number(m[4]) < .08) return null;
    const rgb = [1,2,3].map(i => Math.max(0, Math.min(255, Math.round(Number(m[i])))));
    return '#' + rgb.map(n => n.toString(16).padStart(2,'0')).join('');
  };

  const samplePageBackground = (fallback) => {
    // 不读取 html：html 上已经挂了 SouBa 的预遮罩，会污染检测。
    const candidates = [
      document.body,
      document.querySelector('#react-root'),
      document.querySelector('#root'),
      document.querySelector('#app'),
      document.querySelector('#__next'),
      document.querySelector('[role="main"]'),
      document.querySelector('main')
    ].filter(Boolean);

    for (const el of candidates) {
      try {
        const bg = cssColorToHex(getComputedStyle(el).backgroundColor);
        if (bg) return bg;
      } catch (_) {}
    }
    return fallback;
  };

  const siteThemeFromBackground = (bg, fallback) => {
    const dark = luminance(bg) < .22;
    let accent = fallback.accent || '#0071e3';
    // Threads 等黑色品牌强调色在暗背景上自动反白。
    if (dark && luminance(accent) < .12) accent = '#f2f2f3';

    return dark ? {
      ...fallback,
      bg,
      surface:'#17191c',
      text:'#f2f2f3',
      secondary:'#a8a8ae',
      quiet:'#6f7075',
      line:'#34373a',
      accent,
      focus:`color-mix(in srgb, ${accent} 22%, transparent)`,
      overlay:'rgba(23,25,28,.82)'
    } : {
      ...fallback,
      bg,
      surface:'#ffffff',
      text:'#1d1d1f',
      secondary:'#6e6e73',
      quiet:'#a4a4aa',
      line:'#dedfe2',
      accent,
      focus:`color-mix(in srgb, ${accent} 16%, transparent)`,
      overlay:'rgba(255,255,255,.78)'
    };
  };

  const install = () => {
    if (userEnteredFeed || installing || document.getElementById('souba-buffer')) return;
    if (!document.body) {
      requestAnimationFrame(install);
      return;
    }
    installing = true;

    const style = document.createElement('style');
    style.id = 'souba-style';
    style.textContent = `
      #souba-buffer{
        --bg:#f3f6f4;--surface:#fff;--text:#1d1d1f;--secondary:#6e6e73;
        --quiet:#a4a4aa;--line:#d5d6d8;--accent:#0071e3;
        --focus:rgba(0,113,227,.14);--overlay:rgba(255,255,255,.72);
        background:var(--bg);color:var(--text);
        font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","SF Pro Display","PingFang SC","Helvetica Neue",Arial,sans-serif;
        -webkit-font-smoothing:antialiased;
        transition:transform .28s cubic-bezier(.2,.8,.2,1),opacity .28s ease;
        display:grid;grid-template-rows:1fr auto;
      }
      #souba-buffer.souba-leave{transform:translateY(-100%);opacity:.98;pointer-events:none}
      #souba-buffer.souba-theme-animate{transition:transform .28s cubic-bezier(.2,.8,.2,1),opacity .28s ease,background-color .18s ease,color .18s ease}
      #souba-main{display:flex;align-items:center;justify-content:center;padding:62px 24px 30px}
      #souba-content{width:min(650px,100%);transform:translateY(-4vh)}
      #souba-site{display:inline-flex;align-items:center;gap:9px;margin-bottom:24px;color:var(--secondary);font-size:14px;font-weight:500}
      #souba-site img{width:23px;height:23px;object-fit:contain}
      #souba-title{margin:0 0 26px;font-size:clamp(36px,4.6vw,50px);line-height:1.08;letter-spacing:-.042em;font-weight:700;text-align:left}
      #souba-search-wrap{position:relative;width:100%}
      #souba-search-icon{position:absolute;left:20px;top:50%;transform:translateY(-50%);width:20px;height:20px;stroke:var(--secondary);pointer-events:none}
      #souba-search{box-sizing:border-box;width:100%;height:64px;padding:0 102px 0 54px;border:1px solid var(--line);border-radius:18px;background:color-mix(in srgb,var(--surface) 92%,transparent);color:var(--text);outline:none;font-size:18px;box-shadow:0 1px 1px rgba(0,0,0,.015);transition:border-color .15s ease,box-shadow .15s ease,background .15s ease}
      #souba-search::placeholder{color:var(--quiet)}
      #souba-search:focus{background:var(--surface);border-color:var(--accent);box-shadow:0 0 0 4px var(--focus)}
      #souba-enter{position:absolute;right:14px;top:50%;transform:translateY(-50%);min-width:54px;height:34px;padding:0 11px;display:flex;align-items:center;justify-content:center;border:1px solid color-mix(in srgb,var(--text) 13%,transparent);border-radius:9px;background:color-mix(in srgb,var(--surface) 92%,transparent);color:var(--secondary);font-size:12px;user-select:none}
      #souba-browse-area{margin-top:34px;display:flex;flex-direction:column;align-items:flex-start;gap:4px}
      #souba-browse{margin-left:-2px;border:0;background:transparent;color:var(--secondary);padding:7px 2px;font:inherit;font-size:15px;cursor:pointer}
      #souba-browse:hover{color:var(--text)}
      #souba-browse-arrow{margin-right:6px;color:var(--quiet)}
      #souba-help{color:var(--quiet);font-size:12px;line-height:1.5}
      .souba-key{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;border:1px solid color-mix(in srgb,var(--text) 10%,transparent);border-bottom-color:color-mix(in srgb,var(--text) 16%,transparent);border-radius:5px;background:color-mix(in srgb,var(--surface) 48%,transparent);color:var(--quiet);font-size:10px;vertical-align:1px}
      #souba-footer{padding:0 24px 20px}
      #souba-platform-strip{max-width:980px;margin:0 auto;border-top:1px solid color-mix(in srgb,var(--text) 6%,transparent);padding-top:16px;display:flex;align-items:center;justify-content:center;gap:11px}
      #souba-platform-label{color:var(--quiet);font-size:11px;white-space:nowrap}
      #souba-platforms{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:12px}
      .souba-platform{width:20px;height:20px;display:grid;place-items:center;opacity:.42;transition:opacity .14s ease,transform .14s ease,filter .14s ease}
      .souba-platform:hover{opacity:.86;transform:translateY(-1px)}
      .souba-platform img{width:17px;height:17px;object-fit:contain;display:block}
      #souba-buffer[data-theme-dark="1"] .souba-platform.souba-light-sensitive{opacity:.62}
      #souba-buffer[data-theme-dark="1"] .souba-platform.souba-monochrome img{filter:invert(1) brightness(1.15)}
      #souba-buffer[data-theme-dark="1"] .souba-platform.souba-monochrome:hover img{filter:invert(1) brightness(1.35)}
      #souba-buffer[data-theme-dark="1"] #souba-current-logo[data-key="x"],
      #souba-buffer[data-theme-dark="1"] #souba-current-logo[data-key="threads"]{filter:invert(1) brightness(1.18)}

      #souba-appearance{position:absolute;top:18px;right:20px;z-index:5;display:flex;align-items:center;gap:8px}
      #souba-segment{display:flex;padding:3px;border:1px solid color-mix(in srgb,var(--text) 9%,transparent);background:var(--overlay);border-radius:12px;backdrop-filter:blur(10px)}
      #souba-segment button{height:29px;border:0;border-radius:9px;background:transparent;color:var(--secondary);padding:0 11px;font:inherit;font-size:12px;cursor:pointer}
      #souba-segment button.active{background:var(--surface);color:var(--text);font-weight:600;box-shadow:0 1px 4px rgba(0,0,0,.07)}
      #souba-palette{display:none;width:36px;height:36px;border-radius:11px;border:1px solid color-mix(in srgb,var(--text) 9%,transparent);background:var(--overlay);cursor:pointer;place-items:center;backdrop-filter:blur(10px)}
      #souba-palette.show{display:grid}
      #souba-palette-dot{width:15px;height:15px;border-radius:50%;background:var(--bg);border:1px solid color-mix(in srgb,var(--text) 18%,transparent)}
      #souba-popover{position:absolute;top:62px;right:20px;z-index:6;width:250px;padding:14px;border-radius:16px;background:color-mix(in srgb,var(--surface) 96%,transparent);border:1px solid color-mix(in srgb,var(--text) 9%,transparent);box-shadow:0 18px 46px rgba(0,0,0,.11);display:none}
      #souba-popover.open{display:block}
      .souba-pop-title{font-size:12px;font-weight:600;color:var(--text);margin-bottom:10px}
      #souba-swatches{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
      .souba-swatch{width:35px;height:35px;padding:3px;border-radius:50%;border:2px solid transparent;background:transparent;cursor:pointer}
      .souba-swatch::before{content:"";display:block;width:100%;height:100%;border-radius:50%;background:var(--sw);border:1px solid rgba(0,0,0,.10)}
      .souba-swatch.active{border-color:var(--accent)}
      #souba-custom-row{margin-top:12px;padding-top:11px;border-top:1px solid color-mix(in srgb,var(--text) 8%,transparent);display:flex;align-items:center;justify-content:space-between;color:var(--secondary);font-size:12px}
      #souba-color{width:34px;height:26px;padding:0;border:0;background:transparent;cursor:pointer}

      @media(max-width:700px){
        #souba-main{padding-left:18px;padding-right:18px}
        #souba-content{transform:translateY(-2vh)}
        #souba-title{font-size:38px}
        #souba-search{height:60px}
      }
    `;
    document.documentElement.appendChild(style);

    // “跟随网站”启动阶段先使用固定兜底色。
    // 网站自己的 React/Vue 可能在加载早期短暂出现错误背景色（例如 X 短暂黑一下），
    // 因此不能在这里立刻相信第一次采样结果。
    const fallbackSiteBg = (themes[site.key] || neutralTheme).bg;
    let detectedSiteBg = fallbackSiteBg;
    let siteThemeStable = false;

    const box = document.createElement('div');
    box.id = 'souba-buffer';

    const monochromeKeys = new Set(['x','threads']);
    const lightSensitiveKeys = new Set(['douyin','tiktok','x','threads']);
    const platformIcons = sites.map(s => {
      const classes = [
        'souba-platform',
        monochromeKeys.has(s.key) ? 'souba-monochrome' : '',
        lightSensitiveKeys.has(s.key) ? 'souba-light-sensitive' : ''
      ].filter(Boolean).join(' ');
      return `<span class="${classes}" data-key="${s.key}" title="${s.label}"><img src="${icons[s.key] || ''}" alt=""></span>`;
    }).join('');

    box.innerHTML = `
      <div id="souba-appearance">
        <div id="souba-segment">
          <button id="souba-site-mode" type="button">跟随网站</button>
          <button id="souba-custom-mode" type="button">自定义</button>
        </div>
        <button id="souba-palette" type="button" aria-label="选择自定义颜色">
          <span id="souba-palette-dot"></span>
        </button>
      </div>

      <div id="souba-popover">
        <div class="souba-pop-title">背景色调</div>
        <div id="souba-swatches">
          <button class="souba-swatch" data-bg="#f3f6f4" style="--sw:#f3f6f4" title="雾青"></button>
          <button class="souba-swatch" data-bg="#f7f6f2" style="--sw:#f7f6f2" title="柔白"></button>
          <button class="souba-swatch" data-bg="#f2f5f8" style="--sw:#f2f5f8" title="雾蓝"></button>
          <button class="souba-swatch" data-bg="#f5f5f7" style="--sw:#f5f5f7" title="中性灰"></button>
          <button class="souba-swatch" data-bg="#f1f5f0" style="--sw:#f1f5f0" title="淡鼠尾草"></button>
        </div>
        <label id="souba-custom-row">
          <span>自定义背景</span>
          <input id="souba-color" type="color">
        </label>
      </div>

      <main id="souba-main">
        <section id="souba-content">
          <div id="souba-site">
            <img id="souba-current-logo" data-key="${site.key}" src="${icons[site.key] || ''}" alt="">
            <span>${site.label}</span>
          </div>

          <h1 id="souba-title">你原本想搜什么？</h1>

          <div id="souba-search-wrap">
            <svg id="souba-search-icon" viewBox="0 0 24 24" fill="none" stroke-width="1.9" stroke-linecap="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.6-3.6"></path>
            </svg>
            <input id="souba-search" type="text" autocomplete="off" spellcheck="false" placeholder="输入关键词…">
            <div id="souba-enter">Enter</div>
          </div>

          <div id="souba-browse-area">
            <button id="souba-browse" type="button"><span id="souba-browse-arrow">↓</span>我就是想刷</button>
            <div id="souba-help">
              滚轮下滑、<span class="souba-key">Space</span>、<span class="souba-key">PgDn</span> 或 <span class="souba-key">↓</span> 可直接进入原首页
            </div>
          </div>
        </section>
      </main>

      <footer id="souba-footer">
        <div id="souba-platform-strip">
          <span id="souba-platform-label">支持平台</span>
          <div id="souba-platforms">${platformIcons}</div>
        </div>
      </footer>
    `;

    document.documentElement.appendChild(box);

    const input = box.querySelector('#souba-search');
    const siteModeBtn = box.querySelector('#souba-site-mode');
    const customModeBtn = box.querySelector('#souba-custom-mode');
    const paletteBtn = box.querySelector('#souba-palette');
    const popover = box.querySelector('#souba-popover');
    const colorPicker = box.querySelector('#souba-color');
    const swatches = [...box.querySelectorAll('.souba-swatch')];

    let appearanceMode = GM_getValue('appearanceMode', 'site');
    let customBg = GM_getValue('customBg', '#f3f6f4');

    const applyThemeVars = (theme) => {
      const t = {...neutralTheme, ...theme};
      Object.entries(t).forEach(([k,v]) => box.style.setProperty(`--${k}`, v));
    };

    const applyAppearance = ({animate = false} = {}) => {
      const fallback = themes[site.key] || neutralTheme;
      const t = appearanceMode === 'site'
        ? siteThemeFromBackground(detectedSiteBg, fallback)
        : customTheme(customBg);

      box.classList.toggle('souba-theme-animate', Boolean(animate));
      applyThemeVars(t);
      box.dataset.themeDark = luminance(t.bg) < .22 ? '1' : '0';

      siteModeBtn.classList.toggle('active', appearanceMode === 'site');
      customModeBtn.classList.toggle('active', appearanceMode === 'custom');
      paletteBtn.classList.toggle('show', appearanceMode === 'custom');

      if (appearanceMode !== 'custom') popover.classList.remove('open');

      colorPicker.value = /^#[0-9a-fA-F]{6}$/.test(customBg) ? customBg : '#f3f6f4';
      swatches.forEach(s => s.classList.toggle(
        'active',
        s.dataset.bg.toLowerCase() === customBg.toLowerCase()
      ));
    };

    const resampleStableSiteTheme = () => {
      const fallback = themes[site.key] || neutralTheme;
      const readings = [];
      [0, 120, 260].forEach(delay => setTimeout(() => {
        if (appearanceMode !== 'site' || userEnteredFeed) return;
        const bg = samplePageBackground(fallback.bg);
        readings.push(bg);
        if (readings.length === 3 && readings[0] === readings[1] && readings[1] === readings[2]) {
          detectedSiteBg = bg;
          siteThemeStable = true;
          applyAppearance({animate:true});
        }
      }, delay));
    };

    siteModeBtn.addEventListener('click', () => {
      appearanceMode = 'site';
      GM_setValue('appearanceMode', appearanceMode);
      applyAppearance({animate:true});
      resampleStableSiteTheme();
    });

    customModeBtn.addEventListener('click', () => {
      appearanceMode = 'custom';
      GM_setValue('appearanceMode', appearanceMode);
      applyAppearance({animate:true});
      popover.classList.add('open');
    });

    paletteBtn.addEventListener('click', e => {
      e.stopPropagation();
      popover.classList.toggle('open');
    });

    popover.addEventListener('click', e => e.stopPropagation());

    document.addEventListener('click', e => {
      if (!box.contains(e.target)) return;
      if (!popover.contains(e.target) && !paletteBtn.contains(e.target) && e.target !== customModeBtn) {
        popover.classList.remove('open');
      }
    }, true);

    swatches.forEach(s => s.addEventListener('click', () => {
      customBg = s.dataset.bg;
      GM_setValue('customBg', customBg);
      applyAppearance({animate:true});
    }));

    colorPicker.addEventListener('input', () => {
      customBg = colorPicker.value;
      GM_setValue('customBg', customBg);
      applyAppearance({animate:true});
    });

    const stopSouBaObservers = () => {
      if (rootObserver) {
        rootObserver.disconnect();
        rootObserver = null;
      }
      if (pauseObserver) {
        pauseObserver.disconnect();
        pauseObserver = null;
      }
    };

    const removeSouBa = ({animate = true, resumeMedia = true} = {}) => {
      stopSouBaObservers();
      document.documentElement.classList.remove('souba-preveil');

      if (resumeMedia) restoreMediaPlay();

      const finish = () => {
        box.remove();
        document.getElementById('souba-style')?.remove();
        document.getElementById('souba-early-style')?.remove();
        delete document.documentElement.dataset.soubaActive;
      };

      if (animate) {
        box.classList.add('souba-leave');
        setTimeout(finish, 320);
      } else {
        finish();
      }
    };

    const leave = () => {
      if (userEnteredFeed) return;

      userEnteredFeed = true;
      installing = false;
      removeSouBa({animate:true, resumeMedia:true});

      setTimeout(() => {
        document.querySelectorAll?.('video').forEach(v => {
          try {
            if (v.paused && v.closest(':hover')) v.play().catch(()=>{});
          } catch (_) {}
        });
      }, 450);
    };

    const searchCurrentSite = () => {
      if (userEnteredFeed) return;

      const q = input.value.trim();
      if (!q) return;

      const target = site.search(q);
      const before = location.href;

      // 如果这次是完整页面导航，新 document 会读取这个短期标记，
      // 在 document-start 阶段继续遮住网站自己的加载页。
      GM_setValue('pendingSearchTransition', JSON.stringify({
        site: site.key,
        target,
        ts: Date.now()
      }));

      // 搜索期间继续让 SouBa 覆盖旧 Feed。
      // 不再依赖 Navigation API，因为 Reddit 等 SPA 的 sameDocument
      // 行为与浏览器报告并不总是一致。
      userEnteredFeed = true;
      installing = false;
      stopSouBaObservers();

      let urlChangedAt = 0;
      let lastMeaningfulMutationAt = 0;
      let revealed = false;
      let mutationCountAfterRoute = 0;
      let stabilityTimer = null;
      let maxWaitTimer = null;

      const cleanupSearchWatch = () => {
        try { searchMutationObserver.disconnect(); } catch (_) {}
        if (stabilityTimer) clearTimeout(stabilityTimer);
        if (maxWaitTimer) clearTimeout(maxWaitTimer);
      };

      const revealSpaResult = () => {
        if (revealed) return;
        revealed = true;
        cleanupSearchWatch();
        GM_setValue('pendingSearchTransition', '');
        removeSouBa({animate:false, resumeMedia:true});
      };

      const scheduleStableReveal = () => {
        if (!urlChangedAt || revealed) return;

        if (stabilityTimer) clearTimeout(stabilityTimer);

        // 至少给 SPA 300ms 绘制搜索页，并要求最近一轮 DOM 更新停止约 260ms。
        const minHoldRemaining = Math.max(0, 300 - (performance.now() - urlChangedAt));
        const quietWait = 260;

        stabilityTimer = setTimeout(() => {
          if (revealed) return;
          if (location.href === before) return;

          const quietFor = performance.now() - lastMeaningfulMutationAt;

          // DOM 已经发生过搜索后的变化，并且短暂稳定。
          if (mutationCountAfterRoute > 0 && quietFor >= 220) {
            revealSpaResult();
          } else {
            scheduleStableReveal();
          }
        }, Math.max(quietWait, minHoldRemaining));
      };

      const searchMutationObserver = new MutationObserver(mutations => {
        if (!urlChangedAt || revealed) return;

        // 只统计搜索路由发生后的真实页面变化。
        // SouBa 自己位于 html 直属层，过滤掉它和自己的 style。
        const meaningful = mutations.some(mu => {
          const t = mu.target;
          if (!t) return false;
          if (t === box || box.contains?.(t)) return false;
          if (t.id === 'souba-style' || t.id === 'souba-early-style') return false;
          return true;
        });

        if (!meaningful) return;

        mutationCountAfterRoute += 1;
        lastMeaningfulMutationAt = performance.now();
        scheduleStableReveal();
      });

      // 监听底层站点的各种 SPA 更新方式。
      searchMutationObserver.observe(document.documentElement, {
        childList:true,
        subtree:true,
        attributes:true,
        characterData:true
      });

      const routeWatch = () => {
        if (revealed) return;

        if (location.href !== before && !urlChangedAt) {
          urlChangedAt = performance.now();
          lastMeaningfulMutationAt = urlChangedAt;

          // URL 已经变了，但结果页 DOM 可能在同一帧甚至更早就开始更新，
          // 因此这里主动给一次“等待稳定”的机会。
          scheduleStableReveal();

          // 最长兜底：
          // 如果 URL 已变且旧 document 仍然可见，2 秒后按 SPA 处理。
          // 完整页面导航通常会在此之前卸载当前 document，因此不会执行到这里。
          maxWaitTimer = setTimeout(() => {
            if (revealed) return;
            if (location.href !== before && document.visibilityState === 'visible') {
              revealSpaResult();
            }
          }, 2000);
        }

        if (!revealed && performance.now() - submitStarted < 4500) {
          requestAnimationFrame(routeWatch);
        }
      };

      const submitStarted = performance.now();
      requestAnimationFrame(routeWatch);

      try {
        location.assign(target);
      } catch (_) {
        location.href = target;
      }

      // 若 4.5 秒后连 URL 都没变化，说明导航被网站或浏览器拦截。
      // 恢复 SouBa，而不是让页面永远失去操作。
      setTimeout(() => {
        if (revealed) return;

        if (location.href === before && document.visibilityState === 'visible') {
          cleanupSearchWatch();
          GM_setValue('pendingSearchTransition', '');
          userEnteredFeed = false;

          rootObserver = new MutationObserver(() => {
            if (userEnteredFeed) return;
            if (!document.getElementById('souba-buffer')) install();
            pauseAll();
          });
          rootObserver.observe(document.documentElement, {childList:true, subtree:true});

          pauseObserver = new MutationObserver(() => {
            if (!userEnteredFeed) pauseAll();
          });
          pauseObserver.observe(document.documentElement, {childList:true, subtree:true});

          input.focus();
        }
      }, 4500);
    };

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        searchCurrentSite();
      }
    });

    box.querySelector('#souba-browse').addEventListener('click', leave);

    let touchY = null;
    box.addEventListener('touchstart', e => {
      touchY = e.touches?.[0]?.clientY ?? null;
    }, {passive:true});
    box.addEventListener('touchend', e => {
      if (touchY == null) return;
      const y = e.changedTouches?.[0]?.clientY ?? touchY;
      if (touchY - y > 35) leave();
      touchY = null;
    }, {passive:true});

    box.addEventListener('wheel', e => {
      if (e.deltaY > 12 && !popover.contains(e.target)) leave();
    }, {passive:true});

    const keyHandler = e => {
      if (userEnteredFeed) {
        document.removeEventListener('keydown', keyHandler, true);
        return;
      }

      // 外观面板打开时不把方向键误判为“进入 Feed”。
      if (popover.classList.contains('open')) return;

      if (document.activeElement === input && !['PageDown','Escape'].includes(e.key)) return;

      if (['PageDown',' ','ArrowDown','Escape'].includes(e.key)) leave();
    };
    document.addEventListener('keydown', keyHandler, true);

    pauseObserver = new MutationObserver(() => {
      if (!userEnteredFeed) pauseAll();
    });
    pauseObserver.observe(document.documentElement, {childList:true, subtree:true});

    // 首次渲染只用站点兜底色，不做动画。
    applyAppearance({animate:false});

    // 稳定采样：
    // 连续 3 次读到同一背景色，才认为是网站真正的主题。
    // 这样 X/YouTube/Reddit 等 SPA 加载初期的临时黑白闪烁不会被 SouBa 放大。
    if (appearanceMode === 'site') {
      const sampleDelays = [140, 260, 400, 580, 820, 1150];
      let lastSample = null;
      let sameCount = 0;

      sampleDelays.forEach(delay => setTimeout(() => {
        if (userEnteredFeed || appearanceMode !== 'site' || siteThemeStable) return;

        const nextBg = samplePageBackground(fallbackSiteBg);
        if (!nextBg) return;

        if (nextBg === lastSample) {
          sameCount += 1;
        } else {
          lastSample = nextBg;
          sameCount = 1;
        }

        if (sameCount >= 3) {
          siteThemeStable = true;

          if (nextBg !== detectedSiteBg) {
            detectedSiteBg = nextBg;
            // 这是系统识别，不做颜色渐变，避免“闪一下”的感知被放大。
            applyAppearance({animate:false});
          }
        }
      }, delay));
    }

    pauseAll();
    installing = false;

    requestAnimationFrame(() => {
      if (!userEnteredFeed) {
        document.documentElement.classList.remove('souba-preveil');
        input.focus();
      }
    });
  };

  rootObserver = new MutationObserver(() => {
    if (userEnteredFeed) return;
    if (!document.getElementById('souba-buffer')) install();
    pauseAll();
  });
  rootObserver.observe(document.documentElement, {childList:true, subtree:true});

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', install, {once:true});
  }
  install();
})();
