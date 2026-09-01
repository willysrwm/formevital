(function(){
  var s=document.createElement('script');s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id=G-8VV7XBC0XZ';
  document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments)}
  window.gtag=gtag;
  gtag('js',new Date());
  gtag('config','G-8VV7XBC0XZ');
  document.addEventListener('click',function(e){
    var a=e.target.closest?e.target.closest('a'):null;
    if(a&&a.href&&(a.href.indexOf('clickbank.net')>-1||(a.rel&&a.rel.indexOf('sponsored')>-1))){
      gtag('event','affiliate_click',{event_label:a.href.substring(0,60)});
    }
  });
})();

(function(){
  var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap';(document.head||document.documentElement).appendChild(l);
  var s=document.createElement('style');s.textContent='.logo{font-family:"Great Vibes",cursive !important;font-size:3rem !important;font-weight:400 !important;letter-spacing:1px}.logo em{font-style:normal !important;color:#10b981 !important}.logo span{color:#2563eb !important}.header-inner{display:flex !important;align-items:center !important;justify-content:space-between !important;flex-wrap:wrap;gap:10px}.logo{display:flex !important;align-items:center !important;gap:8px;text-decoration:none !important}.logo span{color:#2563eb !important}.logo em{color:#10b981 !important}.logo img{height:85px !important;border-radius:50% !important}';(document.head||document.documentElement).appendChild(s);
})();
(function(){
  function fix(){
    document.querySelectorAll('a.logo').forEach(function(a){
      if(!a.querySelector('img')){a.innerHTML='<img src="logo.png" alt="FormeVital"><span>Forme<em>Vital</em></span>';}
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fix);}else{fix();}
})();
