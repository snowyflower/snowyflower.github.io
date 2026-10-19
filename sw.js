/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/28/hello-world/index.html","f1ce16e6a9aa9bb1ba8216c43e5234d0"],["/2023/09/30/My-New-Way/index.html","50c5370c2bd1c2d7a37059afcfde266f"],["/2023/10/19/大一期末作业/index.html","5f99217a1186dbb47c2ebfce59817aeb"],["/2023/10/19/大学中Pyrhon数据基础与挖掘/index.html","c0cebcb0fe9ed21cc9e155f80354f450"],["/2026/10/18/修改标题和元标题颜色/index.html","8b02f4a0ae5107f8d764ec23c676953f"],["/2026/10/18/链接卡片样式/index.html","a2a27234db7a6086d63407cb01e97240"],["/404.html","efb1c1f80cfab707d63b7bc3c748ea57"],["/about/index.html","2286532592946f66caf91d5bb971054b"],["/archives/2023/06/index.html","8b0080cbc8593010ab8245c86a9b81b6"],["/archives/2023/09/index.html","5b43480ea6929a339ddbed5a9103a92c"],["/archives/2023/10/index.html","b5929cf89b00a94862cc85722c2c183b"],["/archives/2023/index.html","c537c91b08e305c37f5b8e3d13f92231"],["/archives/2026/10/index.html","886bc057aafd7070bbbf18bf9fcc777b"],["/archives/2026/index.html","c948384a622b1980d8f67444f0e17e2d"],["/archives/index.html","aa569e4181676ada9c3ce4811b06b8b7"],["/categories/index.html","3a4731722896397e3567ffffc79925af"],["/categories/作业/index.html","bb7c2b7be49b24ffd3163fe80a11d92d"],["/categories/学习/index.html","b6526460c24405ce2636047aaaf05665"],["/categories/自定义Css/index.html","673829db2c0376fc04529b063e23790b"],["/categories/自定义Js/index.html","2f9fdf3c7140418adda60a9058e7a9fa"],["/css/CodeBlock.css","fa2b82b927ffced59050ea87727f05ea"],["/css/CodeInLine.css","99bd32848ccc75f1dfa7aa083d494973"],["/css/Footer.css","552b55a5b3b4b5967dd7848aac628bd5"],["/css/FrostedGlassBg.css","93e7ff23c39328d9e2bd89957b93dc36"],["/css/IndexImgHover.css","8f5d75c57f4242f0038dbf345eadfcf5"],["/css/IndexImgHoverAboutHead.css","c0104ca95e9312b4d4bc24beb3f4530f"],["/css/LinkCard.css","e8eaa08ac2935818ff6499eb1a849f31"],["/css/RainbowLoading.css","39ab951c32268da5f7bdc86a9117d8eb"],["/css/ScrollAnimation.css","794b1084020dd40b6717edc68700ba44"],["/css/ScrollBar.css","f7c7e1f80ea33bd3352a0a527e4ebfd2"],["/css/Sidebar.css","ea63e0bdf8579d885eec584b16df95e5"],["/css/StrongInDark.css","8f5b8a6d50e8ce9920bf3bbaed65d771"],["/css/SubtitleColorEdit.css","32a6acbdd9083d0b5d410f701fc8af42"],["/css/TitleNeon.css","239b7264248651d379be525f4a4b069b"],["/css/UnifyImgWidth.css","4fd340e445cbf2576476f5b0f045b823"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/highlight.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/main.css","b51e3032b6aa8c8851b9298822b1bf05"],["/html/Footer.html","670c25a369cebab36e2453864b9069ac"],["/html/RainbowLoading.html","e357f643ffa8ab604dba22e6a1090d7e"],["/html/sakana.html","86eb4488aadb2323c82183d0392bb46c"],["/img/5dd9318d-96d9-4ee8-b9a1-99e9bb8583f2.png","29534736bdbb0f1594f00767b469713c"],["/img/989C8CFA097195CB7E176E6F27A2C52C.jpg","989c8cfa097195cb7e176e6f27a2c52c"],["/img/A6279A3E52D958C7A088AFAB4A10639B.jpg","a6279a3e52d958c7a088afab4a10639b"],["/img/avatar.png","c99e953744223566669e6930df884b27"],["/img/ca870b4b-a8a1-421d-8b99-2252f01abc90.png","736e43cf234d59428517aaaa62b9164f"],["/img/d4d68511-e455-4897-882f-288914f4cda5.png","3fadbc96ae05355f1e491a3835d28dc2"],["/img/default.png","77d897993100f5b20a18e2d2756d2ec4"],["/img/earth-space-hd-wallpaper-Hello-World-1.jpg","9cd7800b5c7196cfab9109fbbcb23113"],["/img/favicon.png","dde8453966ccb2e7b79821348f499bd4"],["/img/fluid.png","567906af91c4f8ff14b8175069f2672f"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/loading/loading6.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/sisu.png","1b8df3d54eec340eed456d6069216575"],["/index.html","58e24985d4fa950f433de7645cc5804a"],["/js/Duration.js","1341891c5914fdee7987cf5ac7288937"],["/js/Hitokoto.js","ac99209cef6f9db73adc809b18ac2ddf"],["/js/LinkCard.js","92e1f8873edd264abb61e20aee7f271f"],["/js/RainbowLoading.js","03c13c45d60af5fc1ab7821184e723f8"],["/js/ScrollAnimation.js","cc113e87ca476a44e69cdaec410b6404"],["/js/Sidebar.js","e8db6098d94b068e31c16b59becc49a7"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","7c02783f484230e7e24b1c382ab12a8c"],["/resources/index.html","9a7fced3473a0b52d4945a95aeb09a7e"],["/schedule/index.html","4cde10e28c392ae7d1adfa4cb64c3a27"],["/sitemap/index.html","73248fbd087340fb400195ec564b68b7"],["/sw-register.js","e7248918fb3c7cb6eaa9ae45970729ae"],["/tags/Css/index.html","a5079f7e1e1f3a924072f0938dc720be"],["/tags/Markdown/index.html","dbeef4f61773a9bfe9f403341c5deb26"],["/tags/Python/index.html","775a2fc0accc2e3b856d2cdb1092d2d4"],["/tags/index.html","410746cda098e0d5df2bb8f9b6532fa8"],["/tags/js/index.html","8196248e94f615f1b950773f804cc3bf"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
