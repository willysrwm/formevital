/* FormeVital — Modal d'inscription professionnel (fichier unique, toutes pages) */
(function(){
  if (window.__fvSubLoaded) return; window.__fvSubLoaded = true;

  var LANG = (function(){ try { return localStorage.getItem('preferredLanguage') || localStorage.getItem('fvLang') || (navigator.language||'en').substring(0,2); } catch(e){ return 'en'; } })();
  var T = {
    en: { title:'🎁 Get Our Free 2026 Supplement Checklist',
          sub:'Science-based health tips + the PDF checklist, straight to your inbox. No spam — unsubscribe in 1 click.',
          ph:'Your email...', btn:'Send me the free checklist →',
          ok:'✅ Check your inbox to confirm your subscription!',
          later:'No thanks, maybe later', note:'No spam. Unsubscribe anytime.' },
    fr: { title:'🎁 Recevez notre Checklist Compléments 2026',
          sub:'Des conseils santé basés sur la science + la checklist PDF, directement dans votre boîte mail. Sans spam — désinscription en 1 clic.',
          ph:'Votre email...', btn:'Recevoir la checklist gratuite →',
          ok:'✅ Vérifiez votre boîte mail pour confirmer !',
          later:'Non merci, plus tard', note:'Pas de spam. Désinscription à tout moment.' }
  };
  var t = T[LANG] || T.en;

  /* Fréquence : jamais si déjà inscrit ; pas plus d'1 fois / 7 jours si refus */
  try {
    if (localStorage.getItem('fvSubscribed')) return;
    var d = localStorage.getItem('fvSubDismissed');
    if (d && (Date.now()-parseInt(d,10)) < 7*24*3600*1000) return;
  } catch(e){}

  var shown = false;
  function show(){
    if (shown) return; shown = true;
    var ov = document.createElement('div');
    ov.id = 'fvSubOverlay';
    ov.innerHTML = '<style>'+
      '#fvSubOverlay{position:fixed;inset:0;background:rgba(15,23,42,.6);backdrop-filter:blur(3px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px}'+
      '#fvSubCard{background:#fff;border-radius:18px;max-width:460px;width:100%;padding:36px 30px;text-align:center;position:relative;box-shadow:0 25px 60px rgba(0,0,0,.3);animation:fvPop .25s ease}'+
      '@keyframes fvPop{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}'+
      '#fvSubCard h3{font-size:1.45rem;color:#0f172a;margin:0 0 10px}'+
      '#fvSubCard p{color:#64748b;font-size:.98rem;margin:0 0 18px;line-height:1.5}'+
      '#fvSubCard input{width:100%;padding:13px 16px;border:2px solid #e2e8f0;border-radius:10px;font-size:1rem;margin-bottom:10px;box-sizing:border-box}'+
      '#fvSubCard input:focus{outline:none;border-color:#10b981}'+
      '#fvSubCard button.cta{width:100%;background:#10b981;color:#fff;border:none;padding:14px;border-radius:10px;font-size:1.05rem;font-weight:700;cursor:pointer}'+
      '#fvSubCard button.cta:hover{background:#059669}'+
      '#fvSubX{position:absolute;top:10px;right:14px;background:none;border:none;font-size:1.4rem;color:#94a3b8;cursor:pointer}'+
      '#fvSubLater{display:block;margin:12px auto 0;background:none;border:none;color:#94a3b8;font-size:.85rem;cursor:pointer;text-decoration:underline}'+
      '#fvSubNote{font-size:.78rem;color:#94a3b8;margin-top:10px}'+
      '</style>'+
      '<div id="fvSubCard">'+
      '<button id="fvSubX" aria-label="Close">×</button>'+
      '<h3>'+t.title+'</h3><p>'+t.sub+'</p>'+
      '<form id="fvSubForm"><input type="email" required placeholder="'+t.ph+'">'+
      '<button type="submit" class="cta">'+t.btn+'</button></form>'+
      '<button id="fvSubLater">'+t.later+'</button>'+
      '<div id="fvSubNote">'+t.note+'</div></div>';
    document.body.appendChild(ov);

    function close(dismiss){
      ov.remove();
      if (dismiss) { try{ localStorage.setItem('fvSubDismissed', String(Date.now())); }catch(e){} }
    }
    ov.querySelector('#fvSubX').onclick = function(){ close(true); };
    ov.querySelector('#fvSubLater').onclick = function(){ close(true); };
    ov.addEventListener('click', function(e){ if(e.target===ov) close(true); });
    document.addEventListener('keydown', function esc(e){ if(e.key==='Escape'){ close(true); document.removeEventListener('keydown',esc); } });

    ov.querySelector('#fvSubForm').addEventListener('submit', function(e){
      e.preventDefault();
      var em = ov.querySelector('input[type="email"]').value;
      var s = document.createElement('script');
      s.src = 'https://assets.mailerlite.com/jsonp/2586709/forms/196322409677063525/subscribe?fields%5Bemail%5D='+encodeURIComponent(em)+'&ml-submit=1&anticsrf=true';
      document.body.appendChild(s);
      try{ localStorage.setItem('fvSubscribed','1'); }catch(e){}
      ov.querySelector('#fvSubCard').innerHTML = '<h3 style="font-size:1.45rem;color:#0f172a;margin:0">'+t.ok+'</h3>';
      setTimeout(function(){ ov.remove(); }, 4000);
    });
  }

  /* Déclencheurs pros : 12 s sur la page OU 45 % de scroll OU intention de sortie */
  setTimeout(show, 12000);
  window.addEventListener('scroll', function(){
    var h = document.documentElement;
    if ((h.scrollHeight - h.clientHeight) > 0 && h.scrollTop/(h.scrollHeight-h.clientHeight) > 0.45) show();
  }, {passive:true});
  document.addEventListener('mouseout', function(e){ if(!e.relatedTarget && e.clientY < 10) show(); });
})();
