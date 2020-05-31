'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "6e75cfb03250c61849878e0bf8933d76",
"/": "6e75cfb03250c61849878e0bf8933d76",
"main.dart.js": "40a89d665231a16b86f9c42bacfb42da",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2d9677052db280d6fb3044d85147f77d",
"assets/AssetManifest.json": "62d8f8f76d34b6a20c5b56c7aa309b22",
"assets/NOTICES": "108d0a1640e6b622b04c79e5a1de9f51",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/posts/flutter-europe-2020-work.md": "79a70ac8ae35ec1a8daa4d7255bcfc67",
"assets/assets/posts/android-internals.md": "eed46f89090ac34449dc74b0eee3614b",
"assets/assets/posts/art-of-code-reviews.md": "1ede17bcd1925d05d133ea8e3429a9d9",
"assets/assets/posts/berlin-2017-how-to-be-expert.md": "db4f94d56b5447ec41665ada36c0ae14",
"assets/assets/posts/common-poor-coding-patterns.md": "aeae9111d90f17c26bfd72dc8fc953e0",
"assets/assets/posts/droidcon-uk-19-addiction.md": "15abcb1808cbb69e9513955b24c99031",
"assets/assets/posts/kotlinconf-2019-hammer.md": "123523e7bb1f1a97e2decf90094fe2a8",
"assets/assets/posts/google-io-2019-keynote.md": "a489fe34f1e4723009050f61adf78989",
"assets/assets/posts/droidcon-uk-19-rome.md": "b8a3072976b328615332cc4c15b49955",
"assets/assets/posts/vulkan-opengl.md": "4fc9257caacda263f4c5d3b8cc75b734",
"assets/assets/posts/google-assistant.md": "230d9637db455a834e26aa71e932309e",
"assets/assets/posts/pyladies-2019-from-academia-to-data-science.md": "225b586265be6f366ee89f5bb798f056",
"assets/assets/posts/flutter-busy-people.md": "adf7b3c0491e71ad1bb7619c269d32a5",
"assets/assets/posts/siri-experiment.md": "1bf9ee73252b27b65fea4923c3f8b437",
"assets/assets/posts/google-io-2019-flutter-design-widgets.md": "ee801042791ea37deaa13ca7e9f30bc1",
"assets/assets/posts/dachfest-better-relationships-technology.md": "05ebd975a014593bd1e16e4f03bb3319",
"assets/assets/posts/selfcare-developers.md": "4331572b776f230280f61c847f65bb9d",
"assets/assets/posts/devfestfl-selfcare-developers.md": "bf3ef25263994d6d8c365b51d95a19c0",
"assets/assets/posts/kotlin-testing-robot.md": "28d779c3ea8f414191969fb8029d41c2",
"assets/assets/posts/flutter-europe-2020-work-m.md": "37c8e6e549c1a8704496622afe86e5ea",
"assets/assets/posts/italy-2018-becoming-better-android-dev.md": "c8c77d4fe8583c49d7d0981afc6d641e",
"assets/assets/posts/droidcon-berlin-2019-hiring-panel.md": "c7a5a116e96cea9c084e859a844716cf",
"assets/assets/posts/appbuilders-2019-android-animation.md": "58d5b566887321ebf622d498ceb91e70",
"assets/assets/posts/tokyo-2018-constraintlayout.md": "90094f4ef8786d5a75021b23e8c57f80",
"assets/assets/posts/7-pilars-design.md": "b3aa7378b831388f748268cdad556dee",
"assets/assets/posts/berlin-2018-convinced-flutter.md": "8b4a9d2ddb76cb101e7f0aec2b32e5d7",
"assets/assets/posts/berlin-2018-fonts-emoji-text.md": "e62ade86a900a3b17bedbb7ed007e743",
"assets/assets/posts/conviced-company-flutter.md": "043f663ba607b51bfa9953e9c5e0e127",
"assets/assets/posts/supporting-each-other.md": "f813255c5ff6c780453b42f196f444c3",
"assets/assets/posts/droidcon-berlin-2019-happy-known-paid.md": "c565d7f0d3af6be1bf7799700bbf5368",
"assets/assets/posts/appbuilders-2019-legacy-code.md": "ab9a4f9fb6d2665bf8b88aec6de363c8",
"assets/assets/posts/fonts-emoji-text.md": "bed5259c5b2c8a2666097462c4d0d88c",
"assets/assets/posts/appbuilders-2019-workmanager.md": "c86eba2c24a38dd426c8bc0ea720ec33",
"assets/assets/posts/tokyo-2018-authentic-developer.md": "eae538c153c8f7a9b768cf6a805eeac4",
"assets/assets/posts/devfestfl-simple-mvi.md": "f4a63ef3d08666ae1121cfc8a3ae8cf7",
"assets/assets/posts/io-android-jetpack.md": "a443be7929ad0b088a7277907104b84c",
"assets/assets/posts/tips-library-devs.md": "8e46366c7dfde02b65317555c8486ef7",
"assets/assets/posts/kotlinconf-2019-power-of-types.md": "0190d7ec410d0c16f6512a8dd79af1c8",
"assets/assets/posts/flutter-interact-2019-material-m.md": "7a17eb85bc36bc007958d146417e1ffb",
"assets/assets/posts/flutter-interact-2019.md": "097a0e0c20fbb5482a3d07839515dc9a",
"assets/assets/posts/berlindroid-swagger-lara.md": "96af3401063a10ecc8861c63dda11428",
"assets/assets/posts/constrainlayout.md": "f9e0fa6d78896534ab4e288e3c6e2e88",
"assets/assets/posts/berlin-2018-compiling.md": "274676501d7cacd0aa83bef4a26525e7",
"assets/assets/posts/graywater.md": "35eafd67be010e6340219877d7d4f255",
"assets/assets/posts/kotlinconf-2019-compose.md": "1c1fa26eda78c2671210c85615169e89",
"assets/assets/posts/journey-java-to-kotlin.md": "f161c60a68037ceeb0c66c8fe5f34724",
"assets/assets/posts/london-2017-retrospective.md": "ab241fa2e528048a6dca2f810f703696",
"assets/assets/posts/wearedevs-2019-flutter.md": "f3cad1ef6ab953c192fb3979d6bc45b9",
"assets/assets/posts/droidcon-berlin-2019-inclusive-design.md": "dee76162252c302081d848a547b612b3",
"assets/assets/posts/apps-for-everyone.md": "26385851387e4daa74b4db88564f1dea",
"assets/assets/posts/hamburg-2017-gender.md": "d48b7a41672b379dc77beeb1db0cdad8",
"assets/assets/posts/tokyo-2018-love-developers.md": "e39635fa51a1727f288b58189ddbc198",
"assets/assets/posts/authentic-developer.md": "a2fac1603d9352c3bd5472cf9037fe75",
"assets/assets/posts/berlin-2018-emoji-android.md": "d217054e73f5b5bc277fa7379150dd4e",
"assets/assets/posts/appbuilders-2019-refactoring-ourselves.md": "389cba394578be3203601a6657140bd0",
"assets/assets/posts/blurring-line-native-web.md": "c3dcebe74969e9a32e71bd76bf84aafa",
"assets/assets/posts/flutter-europe-2020-performance.md": "f25dcd0141391ba78b76837aeaad7fbb",
"assets/assets/posts/droidcon-uk-19-guitar.md": "814bf373dd1371dbc897ac99e6522100",
"assets/assets/posts/io-whats-new-dev-tools.md": "7b1360e93843b90b914a1fedb4b4a1e1",
"assets/assets/posts/everything-know-crypto.md": "ed367702ffbfb52db93b736536a1960a",
"assets/assets/posts/berlindroid-kotlin-testing-robots.md": "27c34476beb1ca5aa218547471ea256f",
"assets/assets/posts/appbuilders-2019-static-analysis.md": "cf05700bfc4409b0f2e3d221ed296b9b",
"assets/assets/posts/exploring-kotlin-multiplatform.md": "61eb5437271eb58916bb220a9b5cad96",
"assets/assets/posts/should-we-flutter.md": "c6b1675d9fc3b98261117d987c878029",
"assets/assets/posts/kotlinconf-2019-native.md": "d56a497a2de09cdaa8f184061ab9b652",
"assets/assets/posts/manager-and-you.md": "4c8889132393e301d76040f2dfa0338e",
"assets/assets/posts/berlin-2018-accessibility.md": "8e3c3b8b572a2bbd379b0d787ff36dc3",
"assets/assets/posts/kotlinconf-2019-mpp.md": "afa9b87f43a3dfc256b3e863d33a2344",
"assets/assets/posts/kotlinconf-2019-ktor.md": "1e899250415314546435d4f3301b72b3",
"assets/assets/posts/berlin-2018-country-skip-day.md": "5ee2a5478f1c46faedcc54f416a8cc16",
"assets/assets/posts/berlin-2018-should-flutter.md": "bd29f455304dfb7fea487e4af0287d06",
"assets/assets/posts/flutter-europe-2020-desktop-m.md": "b0e62878ca45e31be07fc51be2a5acc8",
"assets/assets/posts/google-io-2019-dart.md": "c73e3306478a3dae9362c1eff9804788",
"assets/assets/posts/kotlin-coroutines-android.md": "e2899074c0f77fd349cb2f5cf1abafa7",
"assets/assets/posts/io-modern-android-dev.md": "83321d0ee0d46232ba4528ab4c45cb4f",
"assets/assets/posts/appbuilders-2019-sharing-code.md": "c07621028cad94cffb25e9c5be6b7cd3",
"assets/assets/posts/pragmatic-crafting.md": "7d22ba0be24e8b28ef2908945d298b3a",
"assets/assets/posts/dachfest-coding-schools.md": "3d32ad78af6e3839076f3403ae1752b1",
"assets/assets/posts/droidcon-uk-19-guitar-lm.md": "f4583c21ec21aaac8b74f8d7a0307b5b",
"assets/assets/posts/memory-management.md": "41f0e79989fad90fd714ccc2eef9a87f",
"assets/assets/posts/berlin-2017-user-feedback.md": "92943a1d8376eb670de88c62144c7e5e",
"assets/assets/posts/berlin-2017-user-feedback-2.md": "bd80f4df80195d791e08c52ac3cf24e7",
"assets/assets/posts/tokyo-2018-tensorflow.md": "154a4c05773383f98efbacaf8e783316",
"assets/assets/posts/kotlinconf-2019-compose-lm.md": "c8dd1b6ebae34556ae8215d112a05301",
"assets/assets/posts/droidcon-berlin-2019-android-flutter.md": "c0856e179820d84c397f910d53709bac",
"assets/assets/posts/google-io-2019-designing-accessibility.md": "a309ea1c52e774058e1e7a172ad54210",
"assets/assets/posts/security-pie.md": "91d88ed2f1550eb0fbbfe5c39075b5fe",
"assets/assets/posts/what-is-flutter.md": "14884599172af49cf7c7b84798231118",
"assets/assets/posts/dachfest-secret-society-happiness.md": "5e43ec3a145521dd8e95424f97693501",
"assets/assets/posts/ar-demo-app.md": "556b825b85cbed961eeeaf81ec228c37",
"assets/assets/posts/smooth-criminals.md": "b0bad3e42b5fe4d2f645a796ca87ce21",
"assets/assets/posts/human-side-microservices.md": "323c8d4d28b3e030b446ba5cdfc0edac",
"assets/assets/posts/tokyo-2018-kontribute.md": "1631263e975bb4e7dfb927aee1183462",
"assets/assets/posts/flutter-live.md": "ba4ff7af2b7800188a58666de4b89304",
"assets/assets/posts/droidcon-uk-19-chef.md": "afea93e8b3dc87c556674aa7d1c5e0d6",
"assets/assets/posts/droidcon-berlin-2019-in-app-billing.md": "9abf5a97c693277225ae5e0533f261ce",
"assets/assets/posts/droidcon-berlin-2019-minimalism-dev.md": "0e9c4a3d750dbb3c4dc2edc21fd2b61e",
"assets/assets/posts/cfcamp-2019-mouseless-development-in-vi-mode.md": "5089363786e559969d9963967984577d",
"assets/assets/posts/tensorflow-mobile.md": "09aa049e94fa8888176de183f72178a1",
"assets/assets/posts/devfestfl-kotlin-multiplatform.md": "e59382eb889dab7d962f821783a2bd58",
"assets/assets/posts/dachfest-socially-acceptable-wearables.md": "cbb18178efb64de490a920909a8f7367",
"assets/assets/posts/flutter-europe-2020-nav-m.md": "989ff9d6714df1269651c3243138d6c0",
"assets/assets/posts/cfcamp-2019-moving-to-linux-as-a-dev.md": "0d4dcdcf78252ef36c8290252f55e458",
"assets/assets/posts/berlin-2018-apps-pyjama.md": "1749f767b67d784396f4243b44383055",
"assets/assets/posts/google-io-2019-new-arch-components.md": "5e4edc3f3acfb790d9fddc57d2823487",
"assets/assets/posts/london-2017-coroutines.md": "59e36b39081151d0653edba5c9cc28c6",
"assets/assets/posts/kotlinconf-2019-lona.md": "ec840be8734287089fb8a71c73bdae56",
"assets/assets/posts/berlindroid-art-code-reviews.md": "d6084f373e408ca7c8653e59b6582167",
"assets/assets/posts/whats-awesome-about-flutter.md": "bc6c9f44dd3b3019f5a4debd8ea16aab",
"assets/assets/posts/google-io-2019-new-android.md": "0d412f3f436039e2192c1a9b03c5b6b9",
"assets/assets/posts/why-a-country-skipped-a-day.md": "673c21f090fee7c277d7b171f56e04d9",
"assets/assets/posts/berlindroid-road-to-multimodule.md": "473c1ddb1c6b7524fcdb028640f47332",
"assets/assets/posts/kotlinconf-2019-power-of-types-lm.md": "e863ecddd0650fe420e4bd2faa2e52f2",
"assets/assets/posts/droidcon-uk-19-locomotion.md": "42d6fffa65f87ca8fcca4fb2274160e3",
"assets/assets/posts/simple-mvi.md": "d53238de5a2203ee34dfe5d60f9b66dd",
"assets/assets/posts/berlindroid-styles-themes.md": "bb9af447c6e1255e98db292cd91ed992",
"assets/assets/posts/how-to-contribute.md": "0b4a35c900b0369d1d1d5ff174a1afa3",
"assets/assets/posts/kotlinconf-2019-lona-lm.md": "fc194d58e088c0ca3a43464622909535",
"assets/assets/posts/berlin-2018-sketchnoting.md": "c8ca135f443b7d10a1d48e8835e2a714",
"assets/assets/posts/kotlinconf-2019-native-lm.md": "48018d7f70018d0d9675457fbbaf9ff7",
"assets/assets/posts/tokyo-2018-conductor.md": "317dcd54fd6fdfbb1b570becbd6e1acc",
"assets/assets/posts/flutter-europe-2020-performance-m.md": "9edef0b49659beeeebb31693b1352886",
"assets/assets/posts/management-developers.md": "6b32593a4b855541d1ab40549b1db317",
"assets/assets/posts/data-ethics.md": "0fffcb50ad02856654bd548a5626cae3",
"assets/assets/posts/io-2018-accessibility.md": "96572278ede6ae79981b9ee404a55863",
"assets/assets/posts/becoming-master-window-fitter.md": "fa707cea3256e94b5bfa2f8fdc4406fd",
"assets/assets/posts/dachfest-bridging-the-gap-designers-development.md": "579c61a86bb52ed641c0967b8f04c324",
"assets/assets/posts/berlindroid-whats-awesome-flutter.md": "bf4ab1663919ff4f9e036c763388d1f5",
"assets/assets/posts/art-intentionality.md": "435a298ea6a18c76ac6dac776554490f",
"assets/assets/posts/lightning-talks-dachfest.md": "51162067e0e8c755f5a8efa2c872f442",
"assets/assets/posts/kotlinconf-2019-mpp-lm.md": "595fc91c19413fe7a144599cda30ba43",
"assets/assets/posts/flutter-europe-2020-desktop.md": "b4fe8ffb67049262888e3f5c1b61b81d",
"assets/assets/posts/balancing-brain-chemicals.md": "962e14d07575ca460dcb7909bbb8a156",
"assets/assets/posts/google-io-2019-flutter-beyond-mobile.md": "4a8b6139085569b6d3a8ffa1cc1e334e",
"assets/assets/posts/tokyo-2018-graywater.md": "426f4cf5262e02c41ee26449a7101497",
"assets/assets/posts/multiplatform-kotlin.md": "3b20501db2cf3e9a7b519ebb896b369c",
"assets/assets/posts/developers-users-too.md": "2ad099946ac51419bf419c7cfe0e141a",
"assets/assets/posts/devfest-19-pair.md": "82043174096d0ac0d6fc91164538787c",
"assets/assets/posts/tokyo-2018-ar-core.md": "e76d2867cfc5051d37da5aef74ad7b01",
"assets/assets/posts/vector-worksflows.md": "fe1d8b6e8474b2fd96fbf191cbb66a3a",
"assets/assets/posts/android-retrospective.md": "af84dff50d710e85dbbd0189388a3b4e",
"assets/assets/posts/google-io-2019-accessibility-dev.md": "5cab49b75ca7eb5530c6005c6f606379",
"assets/assets/posts/enterprise-mobile-hybrid-app.md": "3f7871a1d93839fdcd0e943989d3af09",
"assets/assets/posts/android-arch-components.md": "3f5106e481498ca6970fbe75037a1c4c",
"assets/assets/posts/berlin-2017-sketchnoting-for-all.md": "1a3e74fd2dbb8b38e75fc0052863335a",
"assets/assets/posts/flutter-europe-2020-nav.md": "3b4cf40410f149ab570962778f16fdf7",
"assets/assets/posts/droidcon-berlin-2019-inclusive-craft.md": "400409ed158fbdf9fc5f8234db3da59f",
"assets/assets/posts/kotlinconf-2019-keynote.md": "fb6a3fc131ebaeb87349f41d767f4972",
"assets/assets/posts/secret-society-happiness.md": "4c929e4bb36f54ad66942b0c500980eb",
"assets/assets/posts/natural-language-processing.md": "6ae1b90cfff0600db5a1470f6021f16d",
"assets/assets/posts/appbuilders-2019-ab-testing.md": "5ec1a1767a1d346dba3e1855f07b98df",
"assets/assets/posts/berlin-2018-native-web.md": "206f104925ad53b6ad25142ca06122de",
"assets/assets/posts/dachfest-balancing-brain-chemicals-team.md": "93cf85b10e4583ba69ec3d2b5ecfd547",
"assets/assets/posts/tokyo-2018-faster-builds.md": "88b544ccd8ce353ca26771e2dac32cbb",
"assets/assets/posts/berlindroid-styles-themes-miguel.md": "da7da7b91760a4154b32d114731fc08d",
"assets/assets/posts/devfest-19-aosp.md": "c4965697d20bd654bae92017e2e8cb14",
"assets/assets/posts/berlin-2017-scaling.md": "6921661fadd6665fd9253aa8ddae49cd",
"assets/assets/posts/cfcamp-2019-but-doesnt-everyone-on-the-internet-speak-english.md": "00509d2a292d00961b770e0d0e43059c",
"assets/assets/posts/dachfest-interview-process-scratch.md": "7b2200cecee209a769fe1b702debe5d8",
"assets/assets/posts/droidcon-berlin-2019-industry-not-well.md": "c11b58c99d56e43fb81e4d6fafe38ffc",
"assets/assets/posts/berlindroid-protobuf.md": "b3dfef145fb8e6c16b54043a7fb4787b",
"assets/assets/posts/hire-better-faster.md": "98205f30b77ee31d33bd43cabff46f06",
"assets/assets/posts/wtm-mindfulness.md": "8e0bbe6be0b8821ed90ec740f5227917",
"assets/assets/posts/berlindroid-mobile-performance.md": "53d99afcce5ffd90d51741fdd0bdea59",
"assets/assets/posts/berlindroid-swagger-miguel.md": "aa3dc3a8507426d3dfc6cd1a722ef6d0",
"assets/assets/posts/flutter-interact-2019-m.md": "7053268e7b31c563e795c4b434a4f3e5",
"assets/assets/posts/kotlinconf-2019-keynote-lm.md": "59fdd59d39f95bbf97e88ba28c8554e4",
"assets/assets/posts/google-io-2019-flutter-state-management.md": "fd8764d749f49c32149f90ce77d3a248",
"assets/assets/posts/google-io-2019-flutter-ios.md": "01637cd233334f116cbd9c95574bcc4c"
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
