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
