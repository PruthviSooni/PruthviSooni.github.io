'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3046823624a7019ed20a53c6bd209723",
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
"assets/assets/images/background.jpg": "a5e5d98f03ced43cb3ffe6eabfd8574c",
"assets/assets/images/bitcoin_ticker.png": "e10d49133362ee823b9fbdbd0b870600",
"assets/assets/images/bmi_calculator.png": "e17c3f982835b17a20f46d6c9d9ab27d",
"assets/assets/images/contributions.png": "95b73388a9966c1aeaae7491e0343702",
"assets/assets/images/covid_tracker.png": "47d9a22faec3263766878dfc9a6dae81",
"assets/assets/images/fitness_app.png": "a4617eff5e832abeaefbb37ac13ab0fe",
"assets/assets/images/motofit.png": "138b75f2470b2d3515f2f15cb90cb578",
"assets/assets/images/profile.jpg": "09ba98b1c83023eb1c2dc35d42b5bd17",
"assets/assets/images/resume.png": "779ed7cbadb6c6df0788e8858b6b6815",
"assets/assets/images/smart_village.png": "012c699453fa1f6d67f201411901ffb3",
"assets/assets/images/weather_app.png": "beaf5a75045a5884f2f6690b36e3ae49",
"assets/FontManifest.json": "cdb75f30b39923550a353287d647b12e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/NOTICES": "644cfa61956cf6b2e6e97ece001c0cd8",
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
"favicon.ico": "e4bfe4b441f14cc2da8c9e86d14a98d6",
"icons/Icon-192.png": "f4f9fb52c32c14630a72474b413a79d9",
"icons/Icon-512.png": "12bc8f09e00a85472fe1547ef96d0f24",
"icons/manifest.json": "fe7b2dbef5e2d9d02d918e6287b20465",
"index.html": "33661a701aa2d2e023d4cb70d70bfb5e",
"/": "33661a701aa2d2e023d4cb70d70bfb5e",
"main.dart.js": "1fdbca7030d006a7ed7710cb072d3b38"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
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
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
