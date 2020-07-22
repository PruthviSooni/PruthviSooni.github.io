'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "304fa3ccb8beada59e501d8e305490f2",
".git/config": "92218584fab89a3fd84fecc09ff1d90e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d88f423546cf1f39716a76cf08e7cb23",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "cfd812cfe8ad9165987024acbd811f1d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5599df2e4203a2ddf6a8598183e8d882",
".git/logs/refs/heads/dev": "e6ee3ef6d82a98b6d38d5d687bfca8bf",
".git/logs/refs/heads/master": "45d67fae4e17da6411e4b0da3d037127",
".git/logs/refs/remotes/origin/dev": "d287ca27e974d311c7cacbba77ef1ebe",
".git/logs/refs/remotes/origin/master": "297cc3c90b04557bbed7e8bc43b04471",
".git/objects/03/8b52a3cf24f298cc96df694c8fa15e3acee4c0": "181945d429ee3c0e19c307c5a5eefd92",
".git/objects/09/4020f8c2e9cdb7b09d2424bba8f28e20a2fe37": "323511d66f2a4fb87437b2e6ddf66438",
".git/objects/09/64a2feb61a4a4d7a4e0093b76b2f42a9ef220d": "1068fdb3bc1f7bab1ea1771f10cd55f9",
".git/objects/0b/e71a4f5a5e613d97db31441b963e014965c9de": "8831c8e1674ab0197c52fad2de344fde",
".git/objects/0c/78f086c956c64dd4180046467fc8fdf9dbbfaf": "f8ec75f37caeab5468878eae6be9e1fe",
".git/objects/0d/5ba601edf42826217bfc8b17f7330bf028fae8": "c7ca7b62237b57834e667fa9773f2b93",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/10/0031166a7006c6c13a3ca85708da9bc62879dd": "ec384c73d506b1993b1eae1a83732c28",
".git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/bfd1d81af61cb5cca390c7e8ddbca181600a1a": "d5dcf8099ac797549d0c8ce56946f8a7",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1d/9a2a7fa2f6c5baff4e3528282770a5ce57e683": "155116cd0ae37e344282a9b77e8fecb1",
".git/objects/1e/b5f8881c39afe7c438785153cbff4b1c1d7e01": "6cf59e0e0b89182893c246131c4ab206",
".git/objects/1f/264404c428bd705ffef3e030a4ba33c8d6df48": "ebc44a4713df543ea56cb3ea949c38fd",
".git/objects/21/500f893e66bcad3edf4dd4ee7e17a6eb9a8f7a": "5635fa876781ff7b89f0c098a8d2e912",
".git/objects/21/f78c0c7c63433b002146955ddbe3c69d922d70": "d00f57c42cb68bfb46219dcafd76d3ad",
".git/objects/24/378e47e23491e5eee4c17afec2c6f216a14594": "3fd527d0b6c3cede5636ea37d754b7ea",
".git/objects/26/23ec176e674e41ed8ba5e5c71e56e06b9e8605": "aedccf30c2b6a8b64b2ae55b3d86eec0",
".git/objects/27/03cc9a47704466c2270cfab4b2ab3050061a92": "3f82c7c8d4d0c86d25423b3ed66229cf",
".git/objects/2a/9b2aea5d0aefe84fcc9b3ca5ab5fd072c5fc40": "5a8b74b433ba1665da7904538edc0598",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/35/64937721b6ddebe26bfbd1315c4ec745701030": "cfac4c9d8970a9a9cdb0b607d6e995dc",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3b/1278d1c42795ed19d99dd5806fec2e96f9ba9c": "5c0655f1efd279ce30cda33c9167b457",
".git/objects/3d/e496cade9bbe7a8121d815f460514a2e6aae45": "9d4f419b482b6d85f39406abb4c29850",
".git/objects/47/b66238f403b24bed80c489c8c6795d1bfaf6d4": "fade2ff1a2acb3cf2dc358641c8f1abc",
".git/objects/50/42e51c77b5d4289f05b73043e632baa17a7716": "de1af4c554d547692a254b608075605a",
".git/objects/50/8d16d442f10a66bad23414a761b51587f8ccbe": "cbc53f63a2c2f7111131b590d44f3853",
".git/objects/55/61f584acf8f0dbe9bdf090cc69cbca6388784b": "7cdc8d28efe0cb60d1446e8a19d18636",
".git/objects/55/f67089775c2cd2d6c54dcf6f4cb825f6143613": "d8aa976cb9f101bce156d6c9cc055232",
".git/objects/56/e819ad0e15843d1840fa873eaa8af21144629e": "0407ed677f0e7e97fb7a9787f3361c47",
".git/objects/56/f80fcf24ea55a16cc4ba3138f941dc78d309d1": "acf716a50d54586ce8ea52c972c60303",
".git/objects/5d/b9cff756e63de7ccef206b707f2a522c1b95d6": "1a85151707122836badefb5efc2611f1",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/62/d12cb0def85d1a904f7d13c17c457fddd16c72": "fb0f64c1fc208d76d490630ac8b4c0d7",
".git/objects/62/d5c444faf641cb91682214e533122bd59437e9": "6c778ad0751038c0a6b4c87be1b1953b",
".git/objects/63/3102f7a7c7cb04a2d6756f0aa7078c58ff72ac": "e9623ed055f53d0d4e8d431edb93e142",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/68/c3e69c89a116adac5035b7bad08ef8f693c134": "b032ce762882fb977525314e048dd7df",
".git/objects/6c/39aebf03f49acfca0ed89e0282e22547b1fdd5": "3c5aa53d7cc525f6e733905ded34a9a9",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/48354c827ac92fd6ea4370dc7095fa6570f579": "5cb2f104d5db46d7d9794edf5cd7b70f",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/73/62f5dac2cda7147363e5d56f0089ff3b711a79": "f3af6d4f1d06f58daa64907639cb3dd7",
".git/objects/74/6c2423833c7d2dbcb7bd41a678a6bf585c5a38": "f507d59002a65010d339632cde80fafc",
".git/objects/76/1b88acb99d16e7b8bdc8b61e9ad67dcfd529ec": "40f0ed861e9920bee3a34c532be9ff78",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/80/dd7ba1dbceb47e153fcd02543a5d5e637589c7": "6f71c28f902b22dc56664bcacb15c58f",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/697a8e8fc6db43828a29918c2065912d67a23d": "2a5e836d31d8b3eeca8c046e5bba4156",
".git/objects/81/9f65fdd3bde673a4e8408e5f2072a06d0f1505": "5a76ac6531aded1c4e2d915151e33e69",
".git/objects/82/35249ec6f93f1fc2f4d7149a4d2d7ba245ea93": "9c88c65c6960ae30c47ace65b587b88d",
".git/objects/83/559cf61dd2c7cfa81b8ca78e8c0453a8af73df": "d06555963cd394a90b29be705f398fb9",
".git/objects/85/82886d05c247b878c64c0868f7ad8d7b7b4bb8": "ba29e97efb88503f3ce6c75334032b04",
".git/objects/88/024e6edb250fc42021b03f0361253f0d2f66d5": "e30fa8cc567b182bef3a5643bb82d9a6",
".git/objects/8a/25ef746c6d7537a84971ee64d7a80a1cd96d93": "926b4dbc56d7888396f09dabc3425278",
".git/objects/8b/59065669ebd4b5bf8c6b3715f307dc0e729510": "cd024a9cf766f6d5bd2c794b8157361d",
".git/objects/90/bdb64551fc26f65312efed38b7f2ca5a1e5b56": "90ea49fd016b47bd91710ea3e123d514",
".git/objects/92/fb5c199df0d8b94b7fb0247e1bf8359ac8b9b4": "9900710a984d036eaff20bbbdce72a20",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/96/b8266923327743afac6d8b0a95e737917e2e3a": "772cacedc2775ed7cc871cba086fd8ac",
".git/objects/99/37a2f0b0c6e47f01608b33aece7a46e05b60ae": "d47f2525166936414b206d4221ca01cb",
".git/objects/99/92d348cb0b6cd8a1e75aa7f02d03cb3509c9f0": "2fab8e966e0ddda55eb0345b2b648516",
".git/objects/9b/98ada0b27c6349d1702894bde9a3dd009b3a5c": "a851580712e87043b5b2f0ba46d3e4db",
".git/objects/a0/6616d37ae06c3fbae7c7602732291c2f83e889": "d08857bcf10a9ee43bbcb9cc75fc345b",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a3/b8609b9a53a15c38002ae114c88233585cc9fb": "1de2b13ef2adb70729623ebc15ce6c8b",
".git/objects/a4/fc8739b5f220706485afaf7dcc502f3576943b": "c9bb253d30d84a0eb8fa7a6579610391",
".git/objects/ab/0b6e12ff83e9c3354a38c311215546a2b09f36": "3cb4079a6ac1efde6e3b6c928312fc8b",
".git/objects/af/0a7d88ed5b8385e29b4714285cfb3b13e22dd4": "98e8e57e6717a6fe784ded46f67c8785",
".git/objects/af/c5279bf36ce6c3c077d7be2fd28280bb3f84a9": "0c8f2c44f7ec1c6c18a9ce9ec40c1f91",
".git/objects/b0/6141ae7c13a10c091faa9022e6a9eff6be67c2": "95a7f8645b472db7a33cc88ed68efa26",
".git/objects/b1/3dff356c49ee0aef6f7f7f6a812df7a5e7be53": "22e35b46f65c3a18b0df83725411f003",
".git/objects/b2/dee69ac562df7835c7d85d6c97a7b685b53a78": "3fb0ab89e6844be2e8f7042b0ca55fa1",
".git/objects/b5/a14e494d9556c4f0d766ccbb9a20b75f784807": "94fcbfec917c3078e72d588ef9c0200d",
".git/objects/b5/e33fdbf0ab666c08fc9e7895abf6815e23068e": "d6cac5c181797fed72a49fce3bdd91d8",
".git/objects/b6/71e7b8ae62b5ec71dadf65db98885c9b221004": "4d78e68650b70fb9b77908f2b748e5ad",
".git/objects/b6/98dfa75c3020faca62a626b9ccafa0bc066caa": "af0409cc3720cec30c39865f30e487dc",
".git/objects/b8/2b6ebb4ba040f268057885035eb782b394943d": "4b2e81235c5f71105418b8955bf8770c",
".git/objects/bd/31c900ee84b5e4497ff895fecf8bb6047acc15": "69e34b8d2f3997f7b134a8549d078e92",
".git/objects/c3/86930fec9840fa11a59cdd48a27e57ef3a7465": "005eca6af6cebd92052a8431e8d4a929",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cc/2ae18fe1361c4c07fe6862f7243223898d74be": "283b4c505ad7b4f8e3d2e12672096503",
".git/objects/cc/55468beb73666967ca3f8b11e447e55f1d0318": "e48a9749205bc2962b46fc318bf73632",
".git/objects/cc/b8d7d15322e7cc5191f5951be5ce5aa4cde0b4": "6d2d9a4d4e5d083e80e519fe693801c0",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d7/a9a225812a68b30d592d4c9b8caf57f9ab8a6b": "bb266a135411b4944546d39532a398cd",
".git/objects/d8/fd87f7b6cebd345db79827510a1bb464e183ec": "9cb526b4a6b704c8639e817e6008bd55",
".git/objects/dd/8d5e89d094bfb38c0a1681074fe18dc15f8ac6": "75e5a694fa9f71951ab58fc2882d204a",
".git/objects/de/27f2ef5a3659cf6655421012d84010ff1857a7": "a12e2260454b184c8178a7de69ac7dbd",
".git/objects/df/20de0ca39f0818bcc181f9afb920d6c7028bae": "af40f46e8d063700213ffeb8b4279f15",
".git/objects/e0/7df325ef51816f1ea597077efc5479263480f7": "0a32aa6f332236154d87f5a3be05f07d",
".git/objects/e0/a14a22f698303e043820a018fd3ef4f227a231": "b5f03720b958dfd5c62a6d8071ec3841",
".git/objects/e4/a06531389768a5526d385a671dffd5b3dfd7ec": "da2c230bf921d6df80c6abbe97cd5df2",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e4/d268a8c76cdcfebe27da635cc79ffcadab75ed": "fcfa52a97e3b538c896cf04e56c01f85",
".git/objects/ef/3b9dc673aad8a4f2fdc74586d88ac603217fef": "1faed19ddf071a2fd2ca386afc2d6780",
".git/objects/ef/a2a6d002a01698e6a6fe4dc2450f179db743a3": "f4047a43aa1406b548d1e27ee8b01584",
".git/objects/f4/a9a8925e3d96b4bc42b367ad5c88e31ef80d27": "b3fc97364fcaa1635b0f58a32f767fee",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f7/e1bfa7bb8518f0ffdce041f84d62d0e617fd3d": "54c0d116064a2a3b520f1271ff996c48",
".git/objects/f9/13a987f458e003a5307be366e1c6bb24fad0c3": "ea427d6cf888f7ee2ab1eebf5cc3afcd",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/ff/2a745c0385a0727ddaf561d24c71f490b1029f": "2f8ad1493d70550a694ab1a1b521f1f7",
".git/ORIG_HEAD": "d74282829e1aecd441394eecfc50c4bc",
".git/refs/heads/dev": "f9f8b5c19d8606a3928e840dcf82ea9c",
".git/refs/heads/master": "d74282829e1aecd441394eecfc50c4bc",
".git/refs/remotes/origin/dev": "f9f8b5c19d8606a3928e840dcf82ea9c",
".git/refs/remotes/origin/master": "d74282829e1aecd441394eecfc50c4bc",
"assets/AssetManifest.json": "d583843c277010344a7dbfff0d9663fa",
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
"assets/assets/images/bitcoin_ticker.png": "e10d49133362ee823b9fbdbd0b870600",
"assets/assets/images/blog.png": "e4951a70879cec783ebaccf9a969e3f3",
"assets/assets/images/bmiCalculator.png": "83b0f18556b6a941554ce7d1737f0f41",
"assets/assets/images/contributions.png": "3ba53a4f3d574f276b1863c6b34391e9",
"assets/assets/images/covid_tracker.png": "47d9a22faec3263766878dfc9a6dae81",
"assets/assets/images/fitness_app.png": "a4617eff5e832abeaefbb37ac13ab0fe",
"assets/assets/images/motofit.png": "138b75f2470b2d3515f2f15cb90cb578",
"assets/assets/images/newsAPI.png": "57da6f36720f304ea4b855ea2c1aad98",
"assets/assets/images/profile.jpg": "09ba98b1c83023eb1c2dc35d42b5bd17",
"assets/assets/images/resume.png": "779ed7cbadb6c6df0788e8858b6b6815",
"assets/assets/images/smart_village.png": "a08160f1423af7422bb649fe2e41478f",
"assets/assets/images/weather_app.png": "beaf5a75045a5884f2f6690b36e3ae49",
"assets/assets/images/youtube.png": "2404bf5d731e3a315597cf1a27990f97",
"assets/FontManifest.json": "cdb75f30b39923550a353287d647b12e",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/NOTICES": "b54f5772cf9ef1f9f6ffbaf0855a4edd",
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
"main.dart.js": "1e815c8e41b20e7e7467380fd6326d27"
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
