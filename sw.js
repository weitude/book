const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"7959e000ea92979e11ed38e6c8d175c8","url":"./404.html"},{"revision":"a17d6b03a4e49acb3f7605f105f1051f","url":"./about/index.html"},{"revision":"b3ec782a5a90c1f499fe15f5481e0eae","url":"./archives/2022/06/index.html"},{"revision":"8763cedd47b566218f66bfb69f3bd5bb","url":"./archives/2022/index.html"},{"revision":"8263ba13ab6a076629c113f8aca72bad","url":"./archives/index.html"},{"revision":"da0ebbd08fc731255c125c531c7c523c","url":"./atomic-habits/index.html"},{"revision":"17e390ef2643bbaaf48022fd83922ece","url":"./categories/index.html"},{"revision":"404fed561403b1c831ec5ee74eea7954","url":"./css/bg.css"},{"revision":"0c5eee96812b9ffd6f1162d2a2f34488","url":"./css/index.css"},{"revision":"162bd411d80afac1a1e7375b9ef69752","url":"./css/refresh.css"},{"revision":"24f8016a33cab7e9de53775ed48b422d","url":"./css/var.css"},{"revision":"e3ef0e0d8469ca599af90ca3d7af47e7","url":"./google9bb5135959754c1f.html"},{"revision":"7dcb5230baf378a3f0106a024b842ace","url":"./index.html"},{"revision":"07711d71399dba65e35d7c873f69d6d3","url":"./inject/bg.css"},{"revision":"e81a612321562e5e48730323d8a53deb","url":"./inject/refresh.css"},{"revision":"c2d6628801fd2dc0ea1739901cf5d99b","url":"./js/main.js"},{"revision":"af567f93a5504310fe16fe368a4ee89e","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"556adb6af724e688108186b9daf623f7","url":"./tags/index.html"},{"revision":"6cffaf0f436e106989c688ad53c9bf81","url":"./the-willpower-instinct/index.html"}], {
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();