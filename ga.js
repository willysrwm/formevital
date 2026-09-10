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
(function(){
  function fix2(){
    document.querySelectorAll('a.logo').forEach(function(a){
      a.innerHTML='<img src="logo.png" alt="FormeVital"><span>Forme<em>Vital</em></span>';
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fix2);}else{fix2();}
})();
/* ===== FV NEWSLETTER POPUP ===== */
(function(){
  var KEY='fvNewsPop';
  function until(){ try{ return parseInt(localStorage.getItem(KEY)||'0',10); }catch(e){ return 0; } }
  function lock(ms){ try{ localStorage.setItem(KEY,String(Date.now()+ms)); }catch(e){} }
  if(Date.now()<until()) return;
  var html='<div id="fvModal" style="display:none;position:fixed;inset:0;background:rgba(15,23,42,.65);z-index:99999;align-items:center;justify-content:center;padding:20px">'
  +'<div style="position:relative;background:#fff;border-radius:18px;max-width:440px;width:100%;padding:34px 26px 28px;text-align:center;box-shadow:0 25px 70px rgba(0,0,0,.35);font-family:Segoe UI,system-ui,sans-serif">'
  +'<span id="fvModalX" style="position:absolute;top:10px;right:14px;font-size:22px;line-height:1;cursor:pointer;color:#94a3b8;font-weight:700;display:none">&times;</span>'
  +'<div style="font-size:2.4rem">🎁</div>'
  +'<h3 style="margin:8px 0 6px;color:#1e293b;font-size:1.35rem">Article Exclusif OFFERT</h3>'
  +'<p style="color:#64748b;font-size:.95rem;margin:0 0 16px">Recevez immédiatement <strong>« Le Rituel du Thé Minceur »</strong> + nos guides hebdo + le GIFT de bienvenue.</p>'
  +'<form id="fvModalForm" style="display:flex;flex-direction:column;gap:10px">'
  +'<input id="fvModalEmail" type="email" required placeholder="Votre email..." style="padding:13px 15px;border:1px solid #cbd5e1;border-radius:8px;font-size:15px">'
  +'<button type="submit" style="padding:13px;background:#10b981;color:#fff;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer">Recevoir mon guide gratuit →</button>'
  +'</form>'
  +'<p id="fvModalOk" style="display:none;color:#059669;font-weight:700;margin:14px 0 0">🎉 Merci ! Vérifiez votre boîte mail (+ spams) pour confirmer.</p>'
  +'<p style="color:#94a3b8;font-size:.75rem;margin:12px 0 0">Pas de spam. Désinscription en 1 clic.</p>'
  +'</div></div>';
  document.body.insertAdjacentHTML('beforeend', html);
  var m=document.getElementById('fvModal');
  setTimeout(function(){ m.style.display='flex'; },1500);
  setTimeout(function(){ var x=document.getElementById('fvModalX'); if(x) x.style.display='block'; },8000);
  document.getElementById('fvModalX').onclick=function(){ m.style.display='none'; lock(7*864e5); };
  m.addEventListener('click',function(e){ if(e.target===m){ m.style.display='none'; lock(7*864e5); } });
  document.getElementById('fvModalForm').addEventListener('submit',function(e){
    e.preventDefault();
    var em=document.getElementById('fvModalEmail').value;
    if(!em||em.indexOf('@')<0) return;
    var s=document.createElement('script');
    s.src='https://assets.mailerlite.com/jsonp/2586709/forms/196322409677063525/subscribe?fields%5Bemail%5D='+encodeURIComponent(em)+'&ml-submit=1&anticsrf=true';
    document.body.appendChild(s);
    document.getElementById('fvModalForm').style.display='none';
    document.getElementById('fvModalOk').style.display='block';
    lock(365*864e5);
    setTimeout(function(){ m.style.display='none'; },4000);
  });
})();
