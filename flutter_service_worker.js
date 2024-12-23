'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3873ff5efd748da670cb248a19b3194c",
".git/config": "09d5843018fa8d453cf52a235d3e2da3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "73536f0c94aa3dc057370a726f3584ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d3c470909e67e9863cf28aba997b9db2",
".git/logs/refs/heads/master": "d3c470909e67e9863cf28aba997b9db2",
".git/logs/refs/remotes/origin/master": "bcaac9006d42c2fe265db9331e985daa",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/68fbd4fa706441ec8d4a27f82a9e42b9145bfb": "f4bcf0763513d75a50eeedc41e334c72",
".git/objects/06/a50d3a11bb8aeafadf91e8ba3a0e14454838e5": "e2eba0a5f85f721333e5d86766e9197e",
".git/objects/09/5814bec2a69cdbbb271dff7f78d5d0bddc82b3": "f3696566784ebdff9aa7081d843e7347",
".git/objects/0a/54b52bd4647aa871c6bbf07d6d34be31d7aba1": "5b0420f637f610faea88502d1c8d6dc7",
".git/objects/13/1bfad725a969711334b4c7430e43e3382c108d": "8c4284076900d7e012ba31675458ed20",
".git/objects/13/d14f695757173f6ad94d8d046d84ca1718046b": "0b8e5dd3e81a6a2338e886bf972258c5",
".git/objects/19/91c5d2b63f78c02b2f3ebfec532521068d6355": "ba333018ad5131e203823fb7d2d2e0a3",
".git/objects/1d/9e7d9572458d73f0156acdd4a1a91caeb93ebd": "62379ee7d1e0a6999fd79e85b0f7c0c5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/36602d579f4452da20d18ba45c620fabcdfd40": "efe2e9fad08f6ef55cbbbb2b876b2d29",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/31c0965899d7b0a3ca64cc37ab6eda8015f635": "92771cf83628e0dbe1624562aad43ea4",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/32/26614aa8d94271cc715f0578a9decc9bb3ca77": "98395309f9993a44ad1620fa2dce34ef",
".git/objects/3e/f0d3076f1d72f18afd767d036e78699ea61edb": "fdfb140e4083339234df283d6731c693",
".git/objects/44/1cb1595ed1bda6d1dfd5ebdf83be77b99aa40a": "44ab1c96bedfbba63c7cec16d5f6f1ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d78f51818924c885d94f2ef22d8873770f1b08": "b41afdcfc978f6b38e71a1b9b96014e6",
".git/objects/4c/0325490fdb578430d0bfd99e7e3a010b6fa743": "0b2bf67d7e67fe4eb0e623ac83414915",
".git/objects/50/117221a274ad8019db9bc165ec75d54ef34d8e": "96b08287cd0899de52441e1d6729050b",
".git/objects/59/5df83b752c692d35bb188d7e2cb73ebee664f5": "c5f73810abb7a3e8bcf596ed4a5d7fb8",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/65/576252c9452ed553eb355c27fa8b55114cff21": "151ae3286f83b4644a7ec965ff255a0c",
".git/objects/68/e6eae6dcf188d0286b268ca1c43b0f89f029a5": "a4b2ee1fe9683d8f1e416af36023f389",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/9e6dff11f7ab61ccbe042b938ed203d07989d9": "7984cf7e8b6323aff307580bb14d3d3f",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/f7436045b09f4029362cc41a17ffc530a4a4bd": "27beee454474ebb371d90a86570aec4a",
".git/objects/7a/b7391da155399368d4af085d2af7bb88945068": "98b1667b6771db871aca909a407280d6",
".git/objects/80/d7f94a3cd70d12a6ae59eebd8da56b7c49eb0b": "b1e6c40546ce84fe33c627047bb803de",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/541de7cadc8a8cbdbce0b577e8c1ab3bccd4df": "2d2ebc5e32fba3c42b9d54540e7a22ee",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/76684018553115b558b79b96944ee85265c09b": "5e1f7bce6c9382e106f8bbcb2e06d9c4",
".git/objects/92/23f4261a5f2ac2996e1f3a3989edc55b14b209": "87e65ddccd0cd573f9f18c12e2d4abc3",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/d432f4bf44f07546b52446716a06fa2d6e03f8": "97379b507a5385129bf50d99bdb3c0c7",
".git/objects/9a/53149c8f785d33bfeae7afee170e24f3bedfe6": "871094072097c6106f6c1bc446b448e6",
".git/objects/9d/433fd01f2b0e3bd9261a536586ebaf6ee102fa": "7244cb087ebc093740add1afd31713f9",
".git/objects/a0/41b268359cdeb87eef567a9021ab46d896094f": "8c22c9ab6f994017fd7d322a24f09e29",
".git/objects/a0/aa6a6e01e83c74cff69486b3b34a698842e62a": "9dd0de31abae22b2ad3cd57ecef26de2",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/cb1e48a250a48434f5316a1d2a1829e58b4b99": "082674751e4df40a896f2cbefd03c448",
".git/objects/b5/39159286aa2b351f4a10101053f3de1e49dfeb": "1594c951cd0b1867c78abd18ab30ffec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c2/05f3d403d052b06b82a587182645036dbd2a19": "e3e4064935e260de0daa877381eca3a3",
".git/objects/c2/37442eb34c612ebb0af4040327e17518081bb0": "3ac372e373ea043054192d00fba3c7ba",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/2c2141419f6ea8f312c3f972739a35ab2e9476": "2bcec4cb3e2a95cbf28b4508ca76afb2",
".git/objects/d1/78379764b8be575974049931bd2d958579b7db": "1a064400625750255f4200f74e2cb2a6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/690e2f2bd9677a9d5b39a598caebc1fea3fe13": "d5a8491267757d7ebaaf0e34b6466c7f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/778ce983b1f5059eb6d4ef2b1c25349b60c7bf": "a23635fec1fc1c5d138383672778b152",
".git/objects/d8/07cd997aa0f97a71a9d2a7da486f6268a55892": "4a1d4b52667387ed6a8a0ebc7d0f0cee",
".git/objects/df/e1f73696834f35fe4aa7ac8095e1ace0e580e6": "1eb549492165d478b3233ab1e49fa319",
".git/objects/e1/0682ba4cfb39084e56dc153b79a9cbc21be373": "19185341829cfe5c7a3cd0f43936d71c",
".git/objects/e1/14d6b76dc1b07f73d417bb7a7dcc65412a247c": "23b978a23f6e282459800b039faa38e5",
".git/objects/e1/6ae2f583abd64473be1cb06410704028a4d635": "e063321a7fcb1cf4ad20f3b43f6f14dc",
".git/objects/e2/afd8f626ca9b5622830ad347380210ee2e0e35": "3f5a8d3a0fc393142b20acee4e29c650",
".git/objects/e3/415e32dbf1da5d6607aa320b4ef54e2b22c4b7": "01d6bdbf410a044562bfb49061eedc29",
".git/objects/e4/78cdc3ec5a77df15f77f52604eb8ed0b45541c": "f8f772228d0f0b6c0c0825ad67d7abbb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/06a5f6364cbcb13bdd6d170a9f40a0ef0f552f": "55f267c64dae065f9c77a1562c9fda21",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/990016235bb20a009734b7c82a9b127cdbe9c9": "d1c4a9aa934e72997a76d5c3c0f1a755",
".git/objects/ef/be0265b265983369d0ef127dbfc1e8f865c9b1": "1651fe091149c092b4c5d0177f1766ec",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/0dd62ce2343e1cf03d271f32d8de2790dffe88": "d35bfb54258458a34af0e55bb242578e",
".git/objects/f6/bfffc4bd99af7d92b552c95986086b14ab7c76": "5c8294498d9836bd6beb4b80199559ec",
".git/refs/heads/master": "8668a68c29447d4c75aecc2723cae948",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/master": "8668a68c29447d4c75aecc2723cae948",
"assets/AssetManifest.bin": "d6755c5ae36ca66478644f29a16ab015",
"assets/AssetManifest.bin.json": "6257825f7a8dc9d4c915e4514a396fe9",
"assets/AssetManifest.json": "2d83f1440b4a0797c0aaac545cb999ac",
"assets/assets/1.jpg": "a13fdfaa0602ff15a807206c59f94669",
"assets/assets/10.jpg": "9e9e6c09acd04e819552af4430102290",
"assets/assets/11.jpg": "c93c309b0284fb7d07829c23540d54f0",
"assets/assets/12.jpg": "f18908d281017bec552630cdba6655e4",
"assets/assets/13.jpg": "30fe5a21dc1e18b9d6a8fa98a625c0d0",
"assets/assets/14.jpg": "e8e6b285ba4b3c3bb86072e7a61fb74a",
"assets/assets/15.jpg": "5babc7bb2a2aadfc107bcb0e2bc50ece",
"assets/assets/16.jpg": "cb7e81efe76c853aeb1de6f9a6474ba8",
"assets/assets/17.jpg": "5f71479cd76c2d04fb49ca85585b8c38",
"assets/assets/18.jpg": "d16573aa026a67d44e73619650dee8bc",
"assets/assets/2.jpg": "dd833dc18ac24a679ac8bfe105de03dc",
"assets/assets/3.jpg": "647a0ebb365d7328ff229fbded04d0f7",
"assets/assets/4.jpg": "5336dd97859c73aee590b27b03f1bd04",
"assets/assets/5.jpg": "ba6ace0bbfb0da27a9701c3bb7df35d4",
"assets/assets/6.jpg": "453966c54edbbc572ef99e6fa4e608d5",
"assets/assets/7.jpg": "7fe5d42eab0c6ff896a5c069bc9046c3",
"assets/assets/8.jpg": "93c94f21f13fb5b845e6730865731c84",
"assets/assets/9.jpg": "94c6f3d86d791ad1f50256a0253bd100",
"assets/assets/bg.png": "56de37b59c889e3ea82cc5e3535752a6",
"assets/assets/lightpinkrose.png": "bdf494ee48cadb3c014aff9584e23794",
"assets/assets/pinkrose.png": "70107b0588e36ef85323f91722d0530b",
"assets/assets/rose.png": "426c4338ce768651f8b04a150bb91cbc",
"assets/assets/text.txt": "97bf6e209870f764471df859e3ed1ac5",
"assets/assets/tree.png": "ca21c6e9c509895d7c128b5ece53467d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cf73f43bd13ebd93f9f0fba89cdbf950",
"assets/NOTICES": "cf3add41865cc40f018d2dd69c48e6d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "a283c08ea7563ea9a1682c090e1170a7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6d520c38f94ce5bc33f53a1dc1cbc902",
"/": "6d520c38f94ce5bc33f53a1dc1cbc902",
"main.dart.js": "ebdc672e3dbbfbc02cb2f212ccf161b8",
"manifest.json": "776d1acc19f639c6e9e295acb0214a6c",
"version.json": "cf3e60e6571feb707d1849ff180188a7"};
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
