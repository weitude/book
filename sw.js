const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"91c12f90e65c3f930b5a7f00eeba3f2a","url":"./404.html"},{"revision":"d9818c7eef94edb579de15c54273d847","url":"./about/index.html"},{"revision":"7f82acead0c00c2ea272f0c8036d8d86","url":"./archives/2022/06/index.html"},{"revision":"cfae07e7657cb0538356c0b46eccdd3f","url":"./archives/2022/index.html"},{"revision":"b9ef89b101edc35412a6fe35235a873c","url":"./archives/index.html"},{"revision":"dfab5f422eaa7b522ec507ffbf6f2d5b","url":"./atomic-habits/index.html"},{"revision":"dd107dde9f66aefcdde1144b3d93e85a","url":"./categories/index.html"},{"revision":"c7699a8c439deb77a6f492f5c53e5b8c","url":"./css/bg.css"},{"revision":"2f96f3798f6540c38f830ac4ee1e8795","url":"./css/index.css"},{"revision":"4729519118c8c46bc1287f045d0b8c8f","url":"./css/refresh.css"},{"revision":"ffedfe181c4ae2afa8d0a9af34aa6430","url":"./css/var.css"},{"revision":"e3ef0e0d8469ca599af90ca3d7af47e7","url":"./google9bb5135959754c1f.html"},{"revision":"aca6927f1ed4d7965923758e2d11d932","url":"./index.html"},{"revision":"1db1973e857c57757c42460f0c6395a0","url":"./inject/bg.css"},{"revision":"b2a84e86592ee90f13d694fcbde2faf2","url":"./inject/refresh.css"},{"revision":"c2d6628801fd2dc0ea1739901cf5d99b","url":"./js/main.js"},{"revision":"af567f93a5504310fe16fe368a4ee89e","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"6d07f31dd8b4fb043f3468e3d581d3b1","url":"./tags/index.html"},{"revision":"3f5e1bda0a3e8d17fc8c743467dd2c16","url":"./the-willpower-instinct/index.html"}], {
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