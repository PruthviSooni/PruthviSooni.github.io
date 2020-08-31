'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "431fd2ac0a7a2e0ef3b066cd96352ee5",
".git/config": "a802e40465c887f81c42bcff0a54bff5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "768b0aa13ef76566bd56728b9aa7d010",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "98d045fd9d7cb236569c79632014a5e2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6e3fc28014a0f342f1e83aafbdba4961",
".git/logs/refs/heads/master": "6e3fc28014a0f342f1e83aafbdba4961",
".git/logs/refs/remotes/origin/HEAD": "00a678f29aebb8fa22f928d06ef0ca14",
".git/logs/refs/remotes/origin/master": "9461a466a63c54927c40607f741791d0",
".git/objects/00/357cb9c97408f7904bdc0a73bb937b2a4041e4": "2affc5f764f2b8ab79c72f94c283b42c",
".git/objects/03/99fedd1aff4cc91d8c33f2d723f9c87c2f2dd9": "a7f01b14849b1f950b29a0f01f96b729",
".git/objects/12/6f4364ae4bba0453d0267c7c30b360f5e9ba82": "97aaf03fb1aff9b41d460e371f9f9506",
".git/objects/28/dc4aef750d7720f3816bedb2934efb4bc41154": "7687de91a7ba5ff608b148426112ce7a",
".git/objects/3a/7babf76127e3b535cad331a94d90730f708b29": "ae6f29e710fc36d6784c678458fb4afc",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/53/012fdfe5a58a39169888aea4878c5b195558c3": "70f39097f7fcf0be22c8b4c046b0e51d",
".git/objects/63/48daad2aca28bdabd336406d5b3d4defa422d5": "3becdfa8ae1582211f1bf92f381e0823",
".git/objects/6b/07411c94305a7c776bc32ff3bdbf9292b92b03": "94aa038e43e4bcd00a1af09db4e005ac",
".git/objects/75/56b04dcc7fe5eefef264cba382e5726e3e9bda": "697fa9a107b89a8b028a1ff3a9b25d15",
".git/objects/76/a5afedaf51923315745cc0be7a5207ea2c061f": "342e5b7725c9f1a9483222eedd5c63ea",
".git/objects/7c/90a825c820e38afb0d8fb30869182c6c7e7287": "c89c53fb129c067325a5e966567e4e7b",
".git/objects/86/57508353d539e756c9b535dd545d3e0fda882e": "bc344a9d88945f7c0dcba0b933834b2c",
".git/objects/d8/c55ef46c064d467cfa9669f558ab6cc097077a": "efb29689b304ec3a882724832fea63ba",
".git/objects/e2/1e377f562d45f6c2b636a429d17a4ba0573a74": "2d44cdcdb675d37820b461cb8ce81015",
".git/objects/ec/5c3d81daf622bbf48e16923441ad0a6b389bda": "cb801468e5a82b975d555d6e112fddf8",
".git/objects/pack/pack-6e8e4543b10e9aca9c1d7faac9cad57b0457b777.idx": "0b0312341c0f86951ab091d6132562a7",
".git/objects/pack/pack-6e8e4543b10e9aca9c1d7faac9cad57b0457b777.pack": "c24b4fae2b6c629cdb71f38ad1c9adb4",
".git/ORIG_HEAD": "3b0cd78cd926edc1e9a6a2c75ed1ad3a",
".git/packed-refs": "79d09a1320b26576e930b7c5bd4f7472",
".git/refs/heads/master": "871eb7f48cc1c8721509ed1dc09b5512",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "871eb7f48cc1c8721509ed1dc09b5512",
"assets/AssetManifest.json": "d90a7a950f64340175587b94873e0e9e",
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
"assets/FontManifest.json": "cce7d7e663c1f915f3ece0acbc6aaad9",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/NOTICES": "5229fdaca61623cc2d03192fda7a1bbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
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
"index.html": "d6d6b5774fef5abe9ffe3ba78a12bb76",
"/": "d6d6b5774fef5abe9ffe3ba78a12bb76",
"main.dart.js": "63817e72f656920b6e230467ac7eea52"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
