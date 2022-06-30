'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e15ce5d117c8f1b50dcb2f8401ad87d2",
".git/config": "8f54510c8ad89131edcd406d85acb531",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2008cfcf455c66631f8d70cc8eee347f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "801558fb2a380fea4a4d53746a228b34",
".git/logs/refs/heads/master": "d52f074850fbac89cc3eb0dd756a958f",
".git/logs/refs/remotes/origin/master": "f97690003d004158a126059427593701",
".git/objects/0b/727eefacae549d443967ce8134a33dc505fefc": "209b35f0ef0dc330fac15918d2e117df",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/14/11a96696d73d6696077cfad802895410254068": "4a22c7ceae3c308a44fb420a20017f5d",
".git/objects/1c/16a98184258990662a768b3c5cab5b3b0070bd": "7e9789343ea8dfc85525c54fcadb9771",
".git/objects/22/b16d82904224c4fdf68af46b7b6e2d474c0481": "4e7f3701c57bc2bc13713632f9f66592",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/074cc8f2b60962902d627d0de873cb690f149a": "e522c796a074245f1f383dc8317863bd",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/40/3d8f0c6823257e8ffb714161630fed3e05f70d": "daface1f2a5dab1f3da081f82e1f2c56",
".git/objects/4d/f592dcd82bc2d4504e43925eabf7fdc973d57e": "546c56c95cd37e05dcdfc2d43b67df25",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5b/390ff950e6539bdfd4d84265fdb01e0c35f291": "dac6e694e07cee528be3bcb1da3beca8",
".git/objects/5f/c56d4c521abc2951750886fc3e575d9d71b005": "3d1803d10bbf49907b628495ef4bd976",
".git/objects/66/9b081c71416a95cc6ae7eaf334482d6846d8b4": "db3825ea5ed3a85cf79816c88b4f69ef",
".git/objects/6f/a63b8a5549fbd7b37a8f88c3d77f2622afb34e": "ff74c103e95e5c259adad00b91a93757",
".git/objects/72/7c2c31da401a3c7fc636b5d931dd20b6d54c70": "390281d6d462c823af99ebb57d00e058",
".git/objects/74/b34d54a71b2d9c587bd325404bc8779427dd84": "e84ea318e1f312982482de6bcab7a434",
".git/objects/76/3871a9e18647b57294a6fc89154a1dc4817d1d": "d32d5b72c420e181a7d905f6e6d7f1f4",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/2ffa3458224bc365e6fd6a6ba2a3e0baa2363f": "31703ab053a2ca5309c3286116e1aae9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/1f9c71e74f417a95d7b19e4cd908fabad7b650": "900260f2811e473565c02552e6d8710c",
".git/objects/97/fd18b6b463f8e657f6e6ce99342afc982a5ca9": "946bae0b48d26041b38766f497ec6ecc",
".git/objects/9a/5d268f4f6c21cae8cfd62bbca9a03b93484ac5": "3b3fedac36935f7411a48dc8004b3083",
".git/objects/9b/d0bec9f3222ea8006a6e5e55eef09841aa1476": "1719d84ed45e920fd7ee760453bfdddf",
".git/objects/9c/87da32e182cc9c5d1bf6784fc07298fa74c035": "67554b3cf1cdf7a6283f48318946643e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/b65d4b67df325ffe21a474daf8db32906ffc82": "311df5887c264be5085dfc6a5145ddf3",
".git/objects/c0/1e7431cbe7b3e37c2d22052bebf8e7f5c195a9": "2fced6d1b239a98a930a379ef9bb8c5f",
".git/objects/c0/442ee29ddd0630e42ef043746032cb6cdf74cf": "84088b7eeee99892b1f50ea02ebca182",
".git/objects/c0/93c9cc627cd158b904a15756f9ae8994f96102": "aa17e4c3d1f734ea92d804dbb3fc4aa1",
".git/objects/c2/2baf4d12091e9d1c5b38e5dca7bcc666b16767": "610799af89246a7db6bff77a3d4b1e6a",
".git/objects/c8/6c49f957a45cce45c4613ed02db9e179a04298": "31916b5bbd7277b0b0c154b010f2f55e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d5/8f9b08c5d965bcefb8117e3bef8f844b3c37b0": "033b6c239e3a37003ca215827b5fbd49",
".git/objects/d8/47195c7600a96700df62b68a5009be200f234d": "fece793b795109889423a21d6c321ed0",
".git/objects/d8/c648224eaeb7a6b0040dc48e5ec0fe605e8f5b": "a914c33a81e684d57d8975ab7a6b9d99",
".git/objects/d9/10d8ea79baf1344386c14ee8b3ff289932864d": "bcb243afc86788e77a91e30e34a47839",
".git/objects/d9/98cf5b468413ca1c950096dc9d0f5dfdb1359f": "872d06090d2311cd71232a001d72623a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/53ac9ccee8de824cbbd0e309b70a6d3f4d6411": "93d4e5d85b3d01eb97d0fd89a40f656f",
".git/objects/e0/6634b5e9ea365b699b38f95cdaaefecaed5fa8": "1245950eb1c14c61ba698192aebce9fd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/b1c555ba2b771533943765c057c53e23ba30cc": "06677180317fdfd4ee230f0fe03e29c3",
".git/objects/f8/37be7ddd4056609ffb05af4f5ac6de71e13e67": "23de1df2e49a16865885591f640a0719",
".git/objects/fe/091970cbd47f51108fadd079077cc8403e28ac": "5aace2936cc1779154c8974d14c4a4c8",
".git/refs/heads/master": "d918860db652ef50f37b82dede22f7fd",
".git/refs/remotes/origin/master": "d918860db652ef50f37b82dede22f7fd",
"assets/AssetManifest.json": "8b456a7ed265e73c65960e5c9d07ca9e",
"assets/assets/fonts/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/roboto_bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/roboto_italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/roboto_regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/images/disponible-google-play.png": "81159f1962e160e145bcde424df2e82a",
"assets/assets/images/firebase.png": "59a0ffe990f97a73580540f6d142883f",
"assets/assets/images/flutter.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/images/frontend.png": "f43c02eabced5eeddb1acdfb4abc1d07",
"assets/assets/images/german.jpg": "a5abe382d21d38b851ef6a8e1479e9c5",
"assets/assets/images/google-play-gris.png": "4d6f990897e6d246c8e77ece63496324",
"assets/assets/images/icon_linkedin_64x.png": "6e8c4a2e24b77700fa7989149816967e",
"assets/assets/videos/Video_Cosmere_web.mp4": "54bbe20abebed044531d972770a63c5e",
"assets/assets/videos/Video_Digital_Menu_web.mp4": "48643aea368626db0fed28627d588df5",
"assets/assets/videos/Video_Santiago_Cocina_web.mp4": "e9aeb52fa9a6c0f93374c71890fe0c6a",
"assets/FontManifest.json": "277df259a6b4de0c68481e262c8a9b95",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "91c3ca1f364f2a27a9c404b218d19caa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "5102c5e0a8b83995b6d834a5dffe83f8",
"icons/Icon-192.png": "8878da665c05929a8c737ea18ab4662b",
"icons/Icon-512.png": "c339390aa1e70386abc5236c6f1e9113",
"icons/Icon-maskable-192.png": "8878da665c05929a8c737ea18ab4662b",
"icons/Icon-maskable-512.png": "c339390aa1e70386abc5236c6f1e9113",
"index.html": "fd8597d3170b24d3f0c5a516ed12bfa9",
"/": "fd8597d3170b24d3f0c5a516ed12bfa9",
"loader.css": "3ed0540af717cd56f01a37a08f714759",
"main.dart.js": "3e4b0013a81152ca68f875b7ff4feee9",
"manifest.json": "2bb441574f26026a32eb01e4e286eb30",
"version.json": "e85b4dc53586e48d3c1b1892f14e0af8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
