'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c3a0c133ca3459c607feb6c453cbc1e9",
"assets/AssetManifest.bin.json": "ad939ba211c2ca4c96e627cc666808c6",
"assets/AssetManifest.json": "e9e744890ec7da2b25e75c0bb673a144",
"assets/assets/fonts/Alumni_Sans/AlumniSans-Black.ttf": "03b425cb289fce0d08cadb89f7d711fa",
"assets/assets/fonts/Alumni_Sans/AlumniSans-BlackItalic.ttf": "ebf1f569f785343250c0ce85f6e8f8b5",
"assets/assets/fonts/Alumni_Sans/AlumniSans-Bold.ttf": "0a3992ef3effd85792189cf30f3d2ce0",
"assets/assets/fonts/Alumni_Sans/AlumniSans-BoldItalic.ttf": "9165eb2406d01b2ee92efb33c2cdf225",
"assets/assets/fonts/Alumni_Sans/AlumniSans-ExtraBold.ttf": "06bda546171efb5fd1719912bb98aa74",
"assets/assets/fonts/Alumni_Sans/AlumniSans-ExtraBoldItalic.ttf": "db64553f99ed0b9f06480f19d5282b8a",
"assets/assets/fonts/Alumni_Sans/AlumniSans-ExtraLight.ttf": "32307a35db720831d6eba6e4d91b9378",
"assets/assets/fonts/Alumni_Sans/AlumniSans-ExtraLightItalic.ttf": "0785a7365289414d8c649c2b38892fc1",
"assets/assets/fonts/Alumni_Sans/AlumniSans-Italic.ttf": "2cc4170368ae89b92da217c7c70b4406",
"assets/assets/fonts/Alumni_Sans/AlumniSans-Light.ttf": "e8a52fef1e60fcd0b49fc542919d318d",
"assets/assets/fonts/Alumni_Sans/AlumniSans-LightItalic.ttf": "a49d8f141758be0b7d95f192db30c4fd",
"assets/assets/fonts/Alumni_Sans/AlumniSans-Medium.ttf": "ae15e194db2e5d454b17d3d677aa08fa",
"assets/assets/fonts/Alumni_Sans/AlumniSans-MediumItalic.ttf": "ec16a3ede42860448d7472aaa922bcc5",
"assets/assets/fonts/Alumni_Sans/AlumniSans-Regular.ttf": "57d358bfce404bd58d193b468e4df314",
"assets/assets/fonts/Alumni_Sans/AlumniSans-SemiBold.ttf": "46b6b9a8693b0838f13fef2a962e9dbc",
"assets/assets/fonts/Alumni_Sans/AlumniSans-SemiBoldItalic.ttf": "dba415a4918e2607ea1e469d00d7661d",
"assets/assets/fonts/Alumni_Sans/AlumniSans-Thin.ttf": "b55a38bf3873df3a9d9216091d8449d1",
"assets/assets/fonts/Alumni_Sans/AlumniSans-ThinItalic.ttf": "7fef5c86f9dd79b4877ba4ee6a119564",
"assets/assets/fonts/Chivo/Chivo-Black.ttf": "459f392767136d78183f9b214403ab4f",
"assets/assets/fonts/Chivo/Chivo-BlackItalic.ttf": "98b51a708001516ad69f0195a0f8602f",
"assets/assets/fonts/Chivo/Chivo-Bold.ttf": "ad6df1efb3cd4f5a68198f27faf38f56",
"assets/assets/fonts/Chivo/Chivo-BoldItalic.ttf": "77e9a116848a272e8541f39e18dc2bb9",
"assets/assets/fonts/Chivo/Chivo-ExtraBold.ttf": "16ca4f1affdea0f5487dd6fd9c4cd215",
"assets/assets/fonts/Chivo/Chivo-ExtraBoldItalic.ttf": "75cf59965afbf54770856659f040478e",
"assets/assets/fonts/Chivo/Chivo-ExtraLight.ttf": "3a473172684969aa56b467ba640005b1",
"assets/assets/fonts/Chivo/Chivo-ExtraLightItalic.ttf": "8b479b7e0b1bad6bdb7d65142dffdc4a",
"assets/assets/fonts/Chivo/Chivo-Italic.ttf": "f36296e449f758dcd82790ad31da6915",
"assets/assets/fonts/Chivo/Chivo-Light.ttf": "2e7bc38af13c6dcebdc9c6fab9cb4847",
"assets/assets/fonts/Chivo/Chivo-LightItalic.ttf": "a5a4520820322dfb9922261543d7d309",
"assets/assets/fonts/Chivo/Chivo-Medium.ttf": "5e0e9240f0f259a5297a1e9ac551e265",
"assets/assets/fonts/Chivo/Chivo-MediumItalic.ttf": "22751e9795e8b66d859252f085fdb82f",
"assets/assets/fonts/Chivo/Chivo-Regular.ttf": "b39f593bc4c99d68196ebb4bb63052f3",
"assets/assets/fonts/Chivo/Chivo-SemiBold.ttf": "3d817a468c6e321d14f3c55610041ce6",
"assets/assets/fonts/Chivo/Chivo-SemiBoldItalic.ttf": "4ec126836ed879eb9e3547b57fd3e6ae",
"assets/assets/fonts/Chivo/Chivo-Thin.ttf": "f621e9d524f528c679eae58185d0eb0c",
"assets/assets/fonts/Chivo/Chivo-ThinItalic.ttf": "ec574d4e304d5854857ce471d0a66a8e",
"assets/assets/fonts/forque-font/Forque-M3An.ttf": "d5526cbef97d91401d9418097a466ef2",
"assets/assets/fonts/pridi/PRIDI-BOLD.ttf": "68763fcda5ad518570da804f34fd89d5",
"assets/assets/fonts/pridi/PRIDI-EXTRALIGHT.ttf": "fc67319b857bef51333ea38200821ba6",
"assets/assets/fonts/pridi/PRIDI-LIGHT.ttf": "247957ccac8d075bd7cca2f0dd495ead",
"assets/assets/fonts/pridi/PRIDI-MEDIUM.ttf": "af7d0ec733902f33d1adcd4ca66108ef",
"assets/assets/fonts/pridi/PRIDI-REGULAR.ttf": "5b84338bfc480a95a298c9bf1582c23d",
"assets/assets/fonts/pridi/PRIDI-SEMIBOLD.ttf": "3f73da16f9bbc1a4e6fef7794962efe6",
"assets/assets/fonts/river-adventurer/River%2520Adventurer.ttf": "d27c2b856eeeccaa31e0d709587102cc",
"assets/assets/fonts/southampton-font/Southampton-MRqp.ttf": "19b85bfc2ebd98c3210df6b0637507eb",
"assets/assets/images/apple.png": "328328f44ce8b6cdf81053e3780b35f0",
"assets/assets/images/auto_hw.png": "ed0dc75acc0463883bbb540504167c30",
"assets/assets/images/background.jpg": "0c7816c21c3966e64dea618eb577e638",
"assets/assets/images/background1.png": "81c2661918336d960bf658d8ba852c06",
"assets/assets/images/custom_hw.png": "99f3b1e36776b297f042dda6bdaa2ffc",
"assets/assets/images/easy.png": "2ac864b4f456c5852529cbceb9b12c2d",
"assets/assets/images/feedback.png": "f93353a743b8d5fa5fafef7b0d0ce8a4",
"assets/assets/images/flask.png": "0268fcd531f8b8facfe4db85f31355ab",
"assets/assets/images/free.png": "221af8d930efc8572fa849b5819a3c60",
"assets/assets/images/globe.png": "10ddef0550edb70150ae42e55b869741",
"assets/assets/images/help.png": "99ae5939c8573c9998da96071189d48d",
"assets/assets/images/hw_help.png": "b59991368c454ed2aa3d1e33f235aed1",
"assets/assets/images/live_sessions.png": "c8e40346fbc54ef1e23135b59bd2f50c",
"assets/assets/images/live_sessions_control.png": "a446ae8c65080d77407ce4e26efe0044",
"assets/assets/images/logo_dark.png": "e475fdbda1f722a47987135e2e0aefde",
"assets/assets/images/logo_white.png": "4171c4ac6a7dbc6efe9f6f1a45a616bd",
"assets/assets/images/mascot.png": "51e32f136a5b5761e126ebbdbf001c49",
"assets/assets/images/parent%2520-%2520Copy.png": "77f5d9d94472c3381b77fdef555a3ac8",
"assets/assets/images/parent.png": "1df9204a11b5dc3984ab57bcd7807e13",
"assets/assets/images/progress_tracker.png": "567a27f90440a33e8bb74ba63782ecef",
"assets/assets/images/selected_page.png": "fc247ae4ca8e0939e1dfba2e0964c3a7",
"assets/assets/images/student%2520-%2520Copy.png": "b20683c402d7f06e1bb3adf181139b1e",
"assets/assets/images/student.png": "440c5e27af50f775589cd91462cacebe",
"assets/assets/images/tab1_1.png": "edc518a49937d9aba61b9e280ed8de40",
"assets/assets/images/tab1_2.png": "d2b362cde21baa6e56f988c7bc09ae03",
"assets/assets/images/tab1_3.png": "347629c0a3e8c1bbd5c5d24207de30e9",
"assets/assets/images/tab1_4.png": "5ed1a6e5ef1bdf035a9ea89c1419ad93",
"assets/assets/images/tab2_1.png": "e9841611a6334fd27044a80089d26125",
"assets/assets/images/tab2_2.png": "0ed781c258cd24a34900bd5ae897d1fd",
"assets/assets/images/tab2_3.png": "0b312917672bf480196d174e9edd9831",
"assets/assets/images/tab2_4.png": "dd8e6b90c117d1947cb865773e7e357b",
"assets/assets/images/tab3_1.png": "8bacadda8908212e02208ab739155e1d",
"assets/assets/images/tab3_2.png": "e56f03180ebf15cd8b8e203d8b22cffa",
"assets/assets/images/tab3_3.png": "b13eac04c4b7086155e52c1240968953",
"assets/assets/images/tab3_4.png": "6a3fae7aac3e3af592eecba2fb43ef7f",
"assets/assets/images/teacher%2520-%2520Copy.png": "1aa9195ee89bb1cac558fb6b1129f3c2",
"assets/assets/images/teacher.png": "2f48d866de8d5610788d9073f129c1a9",
"assets/assets/images/track_progress.png": "ce200df693c1ae1df6afaf2d16f02607",
"assets/assets/images/utils.png": "159964d8f6e5fa7d1bfd18fe206dba59",
"assets/background.jpg": "0c7816c21c3966e64dea618eb577e638",
"assets/FontManifest.json": "ca42a87bc52cd3b9ccdff1964a4b7d6e",
"assets/fonts/MaterialIcons-Regular.otf": "a3e0d65b41683d1cbd31b11af652e9c3",
"assets/logo_white.png": "4171c4ac6a7dbc6efe9f6f1a45a616bd",
"assets/NOTICES": "6fd04cf060fccfaa1c527aa0d55fd081",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "e7333bf0d57c38bbc79f6bb15c2e8484",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1fdd9c375e5ccca6aa8be15ef87a7ecf",
"icons/apple-touch-icon.png": "b63796ec3d3636c8cedbe5addd9a76da",
"icons/icon-192-maskable.png": "9b831a7bb85b7f3cff2f85cd953b7e91",
"icons/Icon-192.png": "eff7f5be97deca0c3f3967efba4ce13c",
"icons/icon-512-maskable.png": "42a61004b4cbfbdef86178b5a699769b",
"icons/Icon-512.png": "b83af4196aeb12358272c3428daba495",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "d18d97145d60d359c9e9fa00f762bebd",
"/": "d18d97145d60d359c9e9fa00f762bebd",
"main.dart.js": "44193a1dbf71a70b4a0a12b647b4f288",
"manifest.json": "754b4c78272b2d5221e8d1781252f79b",
"version.json": "32bf08fb4500f195653071ef91abbbf3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
