if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,d)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const f={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return f;default:return e(s)}}))).then((e=>{const s=d(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-12ba96f4"],(function(e){"use strict";e.setCacheNameDetails({prefix:"UMajs"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/241.styles.d57d133c.css",revision:"7efc4913ca7eaa6d4d1a47f81236adf4"},{url:"assets/css/686.styles.84dbfdd9.css",revision:"424dad5de8f8d6dde922458cc39bb56c"},{url:"assets/css/74.styles.093ae661.css",revision:"e0698d10e0cb2ed039a93e18784395c5"},{url:"assets/css/styles.1c462591.css",revision:"5ce7bc91fbaee1cb14756485d6c6c13d"},{url:"assets/img/back-to-top.8b37f773.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/img/search.b017a09f.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/358.77b531fa.js",revision:"dac97b66e576ffee17d27b76f72cbf38"},{url:"assets/js/377.f860bf0b.js",revision:"2e6499385553341c5bae3e059ed10c8c"},{url:"assets/js/42.83f4f865.js",revision:"a5b8a156982a81459dd193ffb670a0d4"},{url:"assets/js/606.e07761ab.js",revision:"1a7157e8d7c9f90fe6fabea3d9e93c3c"},{url:"assets/js/765.ab987805.js",revision:"d3c5682c56e81d2e7e048696aa05e956"},{url:"assets/js/967.f0571788.js",revision:"433e0cfda0a1cc73ae81574bfd20638d"},{url:"assets/js/app.b7603fe5.js",revision:"aef2a80d3612deb2f553f49deba9d7b8"},{url:"assets/js/runtime~app.80989a11.js",revision:"7391872ca597f771364270ee4ea3126f"},{url:"assets/js/v-1222ed3f.5e35b13d.js",revision:"a1b3f18e992409a6b649ee02cf4ebea0"},{url:"assets/js/v-17695571.7c3b8eb1.js",revision:"d883540118a952803f41f0e5006c9377"},{url:"assets/js/v-191862d8.e60c3089.js",revision:"69e47705498632dea81249be5382e15a"},{url:"assets/js/v-1d268e5a.41f0114c.js",revision:"ef5195e308862bf8c34c5a9b56a703a7"},{url:"assets/js/v-1d876aec.8aecec6a.js",revision:"76074a1a5c3c424835de5873cbfe349f"},{url:"assets/js/v-1f045e08.26dbb903.js",revision:"37bf06e3fe33e16526efadbebae9a897"},{url:"assets/js/v-2340f77c.a7776278.js",revision:"10d20b5f49dcb5b033afec8856abba9b"},{url:"assets/js/v-2d0a870d.8cdbafb5.js",revision:"b461a6be5b60ee9077404240f8e7646f"},{url:"assets/js/v-2d0a983f.2d9e3a18.js",revision:"d7843dec079fa38b752f0180bd14404a"},{url:"assets/js/v-36434b7c.205b9b39.js",revision:"155d8aea1c85270ba1cc8c954bb5640e"},{url:"assets/js/v-3706649a.6d977273.js",revision:"38bab2602870f71e484d498e8effe69a"},{url:"assets/js/v-3826fb7f.76a7102f.js",revision:"9fb3aeed88fa0e06a4ab71be640298a2"},{url:"assets/js/v-382e3d48.48201a77.js",revision:"d040795a232d10c4b8c3d38abb9f1640"},{url:"assets/js/v-3b45a3a8.e4b73166.js",revision:"037c39c208d2398dfa6048bee56455a9"},{url:"assets/js/v-480228ba.3f36e79e.js",revision:"63d60bf40bf016068753026ef82e2948"},{url:"assets/js/v-4be5fa48.6005d4d1.js",revision:"9d25f2f93aa360f0cfd5e28b2c78f78a"},{url:"assets/js/v-4e28dc98.0330f987.js",revision:"a34a875dc42a8846ece1a5b9b1cc5fee"},{url:"assets/js/v-50836ccc.59f7a4e9.js",revision:"0f76d9d2f013d547c3189df26a3c5e7d"},{url:"assets/js/v-566f71d2.e150f369.js",revision:"8bb3ac32c36ec46269eeebc97b10de8d"},{url:"assets/js/v-5843c8da.e529aadd.js",revision:"71fde51e6aebfef16b99151305a7a6ae"},{url:"assets/js/v-60a4ebef.82492bd3.js",revision:"e0e1fb136794714392606eb44881d822"},{url:"assets/js/v-644d3224.e4eb556f.js",revision:"75f7c5f455612e03143e5c2bc374da5d"},{url:"assets/js/v-6748c710.098f98bf.js",revision:"e47bd1056a453ab8794755c1abebebb8"},{url:"assets/js/v-6acd30a2.15a88deb.js",revision:"e449edde8be743df3797c1ac20773d59"},{url:"assets/js/v-6dd3e1d4.4fc4ea2c.js",revision:"34c70efdd35b0d680817df18acbf34f7"},{url:"assets/js/v-71450247.5e2a2802.js",revision:"92c6047266af7841b0803d98ab2f29fd"},{url:"assets/js/v-78581044.5ffae658.js",revision:"da394deb72f435d55822d8f3c73e9e96"},{url:"assets/js/v-7bf2d825.94709915.js",revision:"97c03ecb38e2c030d7e55fa07928ff50"},{url:"assets/js/v-8daa1a0e.3be8b252.js",revision:"8d5983a3d3cfdfd4563b7391dff45af2"},{url:"assets/js/v-bf328ace.1da501ff.js",revision:"795131478bbf2161da3332c8085fc07f"},{url:"assets/js/v-c251940a.6c3fa910.js",revision:"ec861d2df0a5fdffd0319d507a7da50c"},{url:"assets/js/v-cd32f782.675a6f2c.js",revision:"682cd75122e65c377c94be550f79eb38"},{url:"assets/js/v-cebfadf2.9710c93d.js",revision:"2cf71e382b438609588ee420a5636c5f"},{url:"assets/js/v-efb539da.34176683.js",revision:"e5f5cabb23d9aca0cea6abc4322f20f5"},{url:"img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"404.html",revision:"832928b8837cfba13a74b716b77d3829"},{url:"en/index.html",revision:"440b4ca8f20e05e651f30d6ea59214ac"},{url:"index.html",revision:"f24cb1ac87ebd3d773153de0c77a68f5"},{url:"ja/index.html",revision:"58525518f5fe52bfbddedca8397a80d6"},{url:"other/ArgDecorator.html",revision:"30d35cef7a89181fabd2d94f636e6e7d"},{url:"other/express升级.html",revision:"5517b9ab25ad100a7f50c5d4cc1672e8"},{url:"other/path.html",revision:"10ba52eca62810570692c672bb1b0eaf"},{url:"other/断点调试.html",revision:"a3a6e5265e0bd00156a26d972b65c9e3"},{url:"other/渐进迁移.html",revision:"463162bee97bd717151f1b48b7e428ba"},{url:"other/错误处理.html",revision:"50f140ff4ec18a682d570b25f55f7f32"},{url:"基础功能/AOP.html",revision:"305ba55b79f7aeacae176258cad6044a"},{url:"基础功能/Config.html",revision:"48a8f44facc07c32d1b8d7d1816d5078"},{url:"基础功能/Controller.html",revision:"0be96b5f0c34ffbb8eb66f1fb886e24d"},{url:"基础功能/Decorator.html",revision:"234065570cfaddf7bd753aa362aff1d5"},{url:"基础功能/IOC.html",revision:"c33c87abd8e53a7d8c1514c55403b289"},{url:"基础功能/Middleware.html",revision:"f6d173a6095fe349f4ad22f0cfe05ad3"},{url:"基础功能/Plugin.html",revision:"07d1fbfcb4b857aa2d598e899299416c"},{url:"基础功能/Result.html",revision:"062da01311ae80a65118f0dc073f025d"},{url:"基础功能/Router.html",revision:"0f4cad765fc0adc0b7d555d6c3b18ace"},{url:"基础功能/Service.html",revision:"cecd756a9a1ef565ff37c58706c3eebf"},{url:"基础功能/Uma.html",revision:"e01c154add09a402eeeb6c0196564c05"},{url:"插件/dev.html",revision:"0085ae5e1d0588ad4b5b5fc83e9058f1"},{url:"插件/i18n.html",revision:"91c9d59a4aed6843c3fe6f34bf86c097"},{url:"插件/Logger.html",revision:"22a96eae93872821beaece256dc7aa2a"},{url:"插件/schedule.html",revision:"6a1057eb7d9630c0841435150395e475"},{url:"插件/Session.html",revision:"345ee7533edad618b4a98ade8e6160ca"},{url:"插件/Static.html",revision:"bceaec78520a351e837be3f4ecd98136"},{url:"插件/Status.html",revision:"5ab6f93142e839501f66c6f26fe71b6e"},{url:"插件/Views.html",revision:"f9472e1ae0b0f2bb33e32dfbb2d14468"},{url:"新手指南/Uma.html",revision:"a38430edb700ab47894601c7c07db51a"},{url:"新手指南/快速开始.html",revision:"7c18d51b6eac17146ef56278c302a581"},{url:"新手指南/框架介绍.html",revision:"72571f3c79f798ca6da5aae8aec47330"},{url:"服务端渲染/React-ssr.html",revision:"43748d4b2cc0b0a9dc1b9fce82c3683e"},{url:"服务端渲染/Vue-ssr.html",revision:"de87b52fed910dab4caaf154b4f417a7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
