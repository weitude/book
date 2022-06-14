const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"320873e5069155d5811b61e373c5cc53","url":"./book/404.html"},{"revision":"8bed111f9a17278bd7c772f3b59eb97f","url":"./book/about/index.html"},{"revision":"c06d3f43aa02f482bb3379f3bc11468c","url":"./book/archives/2022/06/index.html"},{"revision":"94da4d45cc7451fa8e37e6c657aa970a","url":"./book/archives/2022/index.html"},{"revision":"1e3035603e77272e779f281d3afce5b6","url":"./book/archives/index.html"},{"revision":"60fa33cb7f26cd7b8969a51e9f365575","url":"./book/atomic-habits/index.html"},{"revision":"98496c458a4211d074506c3ddd8c17db","url":"./book/categories/index.html"},{"revision":"8b66383a367c4a123a42bb7a00444745","url":"./book/css/index.css"},{"revision":"8729ad854737ce9d6069387a83dbba1e","url":"./book/css/var.css"},{"revision":"e3ef0e0d8469ca599af90ca3d7af47e7","url":"./book/google9bb5135959754c1f.html"},{"revision":"439cef7a99e7ef85b360095bc8dfc239","url":"./book/index.html"},{"revision":"c2d6628801fd2dc0ea1739901cf5d99b","url":"./book/js/main.js"},{"revision":"af567f93a5504310fe16fe368a4ee89e","url":"./book/js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./book/js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./book/js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./book/js/utils.js"},{"revision":"c0bfc0a1076ca050af5abcc6441dee86","url":"./book/manifest.json"},{"revision":"044b50c3b3bd1673ca002de0343166bd","url":"./book/tags/index.html"},{"revision":"afe381cbcc2d2483ca7bd78f15962f90","url":"./book/the-willpower-instinct/index.html"}], {
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