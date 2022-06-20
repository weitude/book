const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f48b5a92eed36b3cb499d4616425d0f0","url":"./404.html"},{"revision":"bbbc401fcde6e664b7b2f06e638cbe81","url":"./about/index.html"},{"revision":"e7ba3ef0d8233fe26894036c34ec6023","url":"./archives/2022/06/index.html"},{"revision":"c874ac79b4bc84f2cf1acaf8f5d1ba92","url":"./archives/2022/index.html"},{"revision":"2549b5306e406ea6d90b20356ab77a1d","url":"./archives/index.html"},{"revision":"0f448a142e6d84cf138c9d91a3920a32","url":"./atomic-habits/index.html"},{"revision":"d7899c506295ea4b1e7d5125394f6713","url":"./categories/index.html"},{"revision":"72189e3f14cb3abf9ee4981981605994","url":"./css/bg.css"},{"revision":"88eddfa6a06fb80756fc15e9a2de325d","url":"./css/index.css"},{"revision":"71c697de039d31ec7cd70981e5770828","url":"./css/refresh.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0ea458a669c0fc7d33842b242f1c05c5","url":"./index.html"},{"revision":"07b03d38dfd3e4c06df78447056180f8","url":"./js/main.js"},{"revision":"4df3c613af12e129feee9b014f9d8695","url":"./js/search/algolia.js"},{"revision":"9a3fa909a665a2ea5c2717e91d4961bb","url":"./js/search/local-search.js"},{"revision":"4b84207e490168db8faf5b25d98027e9","url":"./js/tw_cn.js"},{"revision":"154cd33ff9d3d9bdcc4042423d7eac0a","url":"./js/utils.js"},{"revision":"559c7b46b8f3037e5e837e71d20b22a8","url":"./leverage-reading/index.html"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"c6906676e1a5f6cc4d762ce0124e4d7a","url":"./tags/index.html"},{"revision":"9f6f27e07f2e0676507463b44120dab3","url":"./the-miracle-morning/index.html"},{"revision":"dec4c12bb1395d4a8176ef763413d8bb","url":"./the-willpower-instinct/index.html"}], {
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