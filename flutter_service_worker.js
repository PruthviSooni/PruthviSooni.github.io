'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0c26b11043f4aef07042d9bd1fc49db2",
".git/config": "a802e40465c887f81c42bcff0a54bff5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f38b4500d6ff389d280f7dc989398f91",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23914fede91a57a85500c0fe62a63494",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2ec73aebc5078d6ded44bf5c4d3420ba",
".git/logs/refs/heads/master": "2ec73aebc5078d6ded44bf5c4d3420ba",
".git/logs/refs/remotes/origin/HEAD": "90578b4a91b98d6b202b9a0ccef518b7",
".git/logs/refs/remotes/origin/master": "ba028aec76af73b395f056c158ca9f8e",
".git/objects/05/161c7ef40863804e0ecfa1e8a166ce87e53054": "adce97db20d870093d819f099e2a952e",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/43/df01c8b8845f42e3afbf82790950ad8123b5cb": "71560c9bc8f3dc308b45284d1028872f",
".git/objects/49/d00c752a48d2cce3fa57998867d4a270f8de09": "46084479647d0cb5d571e7b4846dec1e",
".git/objects/4a/230ab6aa152b5d316a91911b76ccbfc773b156": "e9645dd3850fad4bdf4d8afc07f1c7fd",
".git/objects/53/07fd62ff1d807c84a5303e0066004f6f63ed78": "329c52672233561bb96f0efd83601354",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/63/a79ea5435230d56002de3333b46558046e666d": "551b98d3c36d8c7c3dd8ed5b88f1599b",
".git/objects/64/de64437c02088c4e3826211513a7b2bd54e457": "61bf1114f5df38cd1d611f60456a5a17",
".git/objects/6c/b8c2632fb501879456f1e1588512a36d151e84": "cc1f9bb7682934c6f90014d324df8c33",
".git/objects/73/e9bf81e5b5616ed6bac72263aefe4004a88370": "2870812287cb424bb82d4c9882ac3659",
".git/objects/74/02c0b1fa0b3e071bbe49b05c60b494f5551b6a": "d3e8530bfe728ff140e44186fe5d311c",
".git/objects/7d/46d78e26f8143eca99ad2fa8258bcc71304506": "63b86bde5b8c478edf119dd2873df283",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/93/170cacdfd759b96865787d93522a27f8043573": "068bab5dcaf120c4aede66ec6d5df8eb",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/4e9bb264ba43e58058007f0c64d9716d5992c5": "e63621ff6ddb830a31be43975caf23d2",
".git/objects/ac/164f4ae9e453e22fdebc4a317a6eab87f7e89a": "8fa2aaacd4ec478d061d6ff627fb3371",
".git/objects/b0/c10e5730a8dfb553a674ab1861a004030a91ed": "90ab3f061ab5f3c46c8880acea0984f8",
".git/objects/b1/fc79d56694ac7b1778f9a60d0dd382c239d3ba": "20ab5e92f7537d118c75bb7c4d290302",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ba/67448b5332907d088046f80991c7044a499e96": "4d34e9e4cc5e2cca8a58bfa37105aec8",
".git/objects/c1/dcf6569df3d42ae665c97135cf5dea66ec8f48": "1c3d0561182eb78820aa7c359f917ae6",
".git/objects/c9/f212deb5de1d6416750b7e1b2fb48fdf0f9104": "bae578d487bcc36468e0a0e422d25982",
".git/objects/dc/cb2d430b98c677aa9d4fa120bf6372b88ef86a": "83a8fba4b55613caa7edd95addb37dcf",
".git/objects/e3/586e6f577a577c49df36760fada4f3e35beae3": "ab0def2a510fc8286845f997a53fdb22",
".git/objects/e7/43f5133a7865ffbc5dc7449bf4e0acece0900f": "87f8b3ef84a7ca97b6af1b9ce79f3444",
".git/objects/ea/8271f701a424d39d1b0d7a7bc6bae669e862a7": "6b30fe7c359af7bf3329fc7befde291a",
".git/objects/ed/224eba050dd7e373580fde69b76dcc7899038f": "5c2fce6ac0a31e77af10ff7343586f8b",
".git/objects/f9/3d5a7719fcedaad1ab5c3b2134e9d591692094": "8a5e416a3786701aaaf93b6da0eb62e7",
".git/objects/fb/6c07c7caf9748028ca7b70587305531fcd6dda": "88572034f401410cff82be0d01d10a93",
".git/objects/pack/pack-e8fc71f85c9e574b62b4fc4d1e6d70c765b2b56f.idx": "83cb63f6d60709bb029ee77e48b8434a",
".git/objects/pack/pack-e8fc71f85c9e574b62b4fc4d1e6d70c765b2b56f.pack": "44c8aab9352bfa347b3ad9e27600183f",
".git/packed-refs": "c4d47e5762a225c2c494b861fb922eb9",
".git/refs/heads/master": "c69b82b33e2fc80a2698dac866f912bd",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "c69b82b33e2fc80a2698dac866f912bd",
"assets/AssetManifest.json": "83e2a95e5052181e6579a6ee949c8c01",
"assets/assets/conversation.png": "6a9f12bccdd6c1200e8f9e0a6a42c665",
"assets/assets/databases.png": "6dd6036487adb516151006bc64f2f068",
"assets/assets/database_icon.png": "915cebfe021dee663a06d9dd2ba07b5f",
"assets/assets/developer.png": "541a55d94742f92c95f6244e05999b77",
"assets/assets/icons/android.png": "4abe97a9c9dfe46266236a6d8e2bf6b8",
"assets/assets/icons/c.png": "f614053d8716064a88df68083df767a0",
"assets/assets/icons/csharp.png": "cde5ff5a45a94e8a3bcf8a25034a8012",
"assets/assets/icons/css3.png": "40886f6581fb85b00119139aba6598e4",
"assets/assets/icons/dart.png": "61eb0be9e5d26fc78558f634d5bd89e7",
"assets/assets/icons/firebase.png": "ffa5ea3810cbce047ce2f392c09a3d83",
"assets/assets/icons/flutter.png": "afa5f137918021360c46a50786c9fdbf",
"assets/assets/icons/git.png": "d71f0abf7b71b36f4bb7f30748eae860",
"assets/assets/icons/github.png": "8a9c0e84f7e85c4beafbf424deabb795",
"assets/assets/icons/heroku.png": "03d21eff884ce234d079f9568b2a6597",
"assets/assets/icons/html.png": "2103ecd9bc9a0144ddcdc728a0723a7a",
"assets/assets/icons/intellij.png": "6232229ef9e620ae678901997a0e5eb7",
"assets/assets/icons/java.png": "3af1684a991fcfb238cc4192fcc9e2ef",
"assets/assets/icons/javascript.png": "5dfc64a8540882ccfe060ea64954b977",
"assets/assets/icons/mongodb.png": "2b29289c47a74b3ffa54052a0448c96d",
"assets/assets/icons/mysql.png": "ee5c11e518d05fb61057f24d6d5b0e35",
"assets/assets/icons/node.js.png": "876f037918dc3e7b17d1f379da21d521",
"assets/assets/icons/php.png": "cbcad5973edb76a15ee5e99effe470cc",
"assets/assets/icons/python.png": "996859023643c6db55de3bd24e60bb8c",
"assets/assets/icons/vscode.png": "6cd172940f859242603af838bdd1a992",
"assets/assets/images/profile.jpg": "09ba98b1c83023eb1c2dc35d42b5bd17",
"assets/assets/languages.png": "dd1d6e2843719d8994ae56644cfd4243",
"assets/assets/language_icon.png": "ae3434aed93df9a80406a4c57c1dcca8",
"assets/assets/technologies.png": "d0a54930322fb8c8a6913a49e20f647f",
"assets/assets/tech_icon.png": "2aae3bd2d0acb521ffa59bb1561317d2",
"assets/assets/tools.png": "1a676e42f3a88bec84cfc87bb1f12da1",
"assets/assets/tools_icon.png": "b8f43694ba0a7ccfbeb169501e3d2836",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/NOTICES": "d18b07201010130a286c4e1f36505dd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"CNAME": "8079ac3a672266522655c01353b9df2f",
"favicon.ico": "e4bfe4b441f14cc2da8c9e86d14a98d6",
"icons/Icon-192.png": "f4f9fb52c32c14630a72474b413a79d9",
"icons/Icon-512.png": "12bc8f09e00a85472fe1547ef96d0f24",
"icons/manifest.json": "fe7b2dbef5e2d9d02d918e6287b20465",
"index.html": "730cf32e19139a0cb9544b1b06d7ca08",
"/": "730cf32e19139a0cb9544b1b06d7ca08",
"main.dart.js": "e246e259d7522239edbc72d471f4860d",
"manifest.json": "75721181c830e84b9d2b33e7c2b97e0a",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
