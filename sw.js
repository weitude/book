const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "緯度書房"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4d1f9ce30971e608fcc5b38e92b2900f","url":"./404.html"},{"revision":"cad8dcd4d598c59a3e16cde35c104bf4","url":"./about/index.html"},{"revision":"817379d06398c77dd719d3d002afbd9b","url":"./archives/2022/06/index.html"},{"revision":"cf667fb45a901562f8da1ea86eeb455e","url":"./archives/2022/index.html"},{"revision":"5404ab9047692bd8489432fda814b204","url":"./archives/index.html"},{"revision":"593092164d053cbf9f0c82d2f568f430","url":"./atomic-habits/index.html"},{"revision":"f27f7e20160ce635afd27c97d468cc18","url":"./categories/index.html"},{"revision":"20e7b47cc485abde7f777b180b676dca","url":"./css/bg.css"},{"revision":"9b4365a22994eda5e34e1dbb93fd7bd3","url":"./css/index.css"},{"revision":"937d5eb2904275cdc772d7a4cfb1bf34","url":"./css/refresh.css"},{"revision":"d71536f7267bb2334be48348738984e1","url":"./css/var.css"},{"revision":"e3ef0e0d8469ca599af90ca3d7af47e7","url":"./google9bb5135959754c1f.html"},{"revision":"c4b6413bb1af451feda4c7c37d418dbb","url":"./index.html"},{"revision":"b8910fa0ae70104d187453c3a884b7a0","url":"./inject/bg.css"},{"revision":"d3678789267949f4402800a8b06ebff7","url":"./inject/refresh.css"},{"revision":"c2d6628801fd2dc0ea1739901cf5d99b","url":"./js/main.js"},{"revision":"af567f93a5504310fe16fe368a4ee89e","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"15a32d40507e9ca5f47a941d5504a1f0","url":"./manifest.json"},{"revision":"6e9a33e1943870722c1c2c681ae13935","url":"./tags/index.html"},{"revision":"ae49ba42365e41fdccc0b5a4fc2322de","url":"./the-willpower-instinct/index.html"}], {
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