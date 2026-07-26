const CACHE_NAME = "psc-word-card-v28";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./sw.js",
  "./words.js",
  "./audio-map.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./audio/baibaierduo.mp3",
  "./audio/bolepianke.mp3",
  "./audio/bozhechuan.mp3",
  "./audio/caheir.mp3",
  "./audio/cangying.mp3",
  "./audio/chabuduo.mp3",
  "./audio/chanhuo.mp3",
  "./audio/chenzhe.mp3",
  "./audio/chusheng.mp3",
  "./audio/dabufen.mp3",
  "./audio/dianzhejiao.mp3",
  "./audio/difang.mp3",
  "./audio/dilizhishi.mp3",
  "./audio/doubuguo.mp3",
  "./audio/erduo.mp3",
  "./audio/fengzheng.mp3",
  "./audio/ganzhe.mp3",
  "./audio/gaosu.mp3",
  "./audio/gongfu.mp3",
  "./audio/guiju.mp3",
  "./audio/huankuaihuopo.mp3",
  "./audio/hushi.mp3",
  "./audio/jiaozi.mp3",
  "./audio/jiliang.mp3",
  "./audio/laibuji.mp3",
  "./audio/laochulai.mp3",
  "./audio/lingdang.mp3",
  "./audio/lingjiao.mp3",
  "./audio/lingqibasuir.mp3",
  "./audio/liuda.mp3",
  "./audio/maimai.mp3",
  "./audio/malongtou.mp3",
  "./audio/mingzi.mp3",
  "./audio/nainai.mp3",
  "./audio/nennende.mp3",
  "./audio/pianyi.mp3",
  "./audio/putao.mp3",
  "./audio/qiaobeitou.mp3",
  "./audio/qingcaoweir.mp3",
  "./audio/renao.mp3",
  "./audio/renbuzhu.mp3",
  "./audio/renshi.mp3",
  "./audio/rongbuxia.mp3",
  "./audio/shaoyao.mp3",
  "./audio/shengyiren.mp3",
  "./audio/shihou.mp3",
  "./audio/shikuair.mp3",
  "./audio/shizir.mp3",
  "./audio/shoucheng.mp3",
  "./audio/shubuqing.mp3",
  "./audio/shuyer.mp3",
  "./audio/suozi.mp3",
  "./audio/susude.mp3",
  "./audio/tashizuoren.mp3",
  "./audio/tiaozhedan.mp3",
  "./audio/wanyir.mp3",
  "./audio/wuzi.mp3",
  "./audio/xiansheng.mp3",
  "./audio/xiaocaor.mp3",
  "./audio/xihuan.mp3",
  "./audio/xuesheng.mp3",
  "./audio/xuewen.mp3",
  "./audio/yanjing.mp3",
  "./audio/yaoyaoweiba.mp3",
  "./audio/yifu.mp3",
  "./audio/yigejinr.mp3",
  "./audio/yihuir.mp3",
  "./audio/yinglang.mp3",
  "./audio/yishengjiaozi.mp3",
  "./audio/yisi.mp3",
  "./audio/yuanzili.mp3",
  "./audio/zaochen.mp3",
  "./audio/zhaopai.mp3",
  "./audio/zhenxianpoluo.mp3",
  "./audio/zhenzi.mp3",
  "./audio/zhongguzi.mp3",
  "./audio/zuofang.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((key) => key === CACHE_NAME ? null : caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
