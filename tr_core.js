function setLang(l){const d=window.TR[l]||window.TR.it;document.documentElement.lang=l;document.querySelectorAll('[data-k]').forEach(e=>{const k=e.dataset.k;if(d[k]!=null)e.textContent=d[k]});document.querySelectorAll('.langs button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));try{localStorage.setItem('maxnccLang',l)}catch(e){}}
document.querySelectorAll('.langs button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));let init='it';try{init=localStorage.getItem('maxnccLang')||'it'}catch(e){}setLang(init);

(function(){
  function wireQuoteForm(){
    const labels=["prenota ora","book now","réserver maintenant","jetzt buchen","reservar ahora"];
    document.querySelectorAll("a,button").forEach(function(el){
      const txt=(el.textContent||"").replace(/\s+/g," ").trim().toLowerCase();
      const key=(el.dataset&&((el.dataset.i18n||"")+" "+(el.dataset.k||""))).toLowerCase();
      if(key.split(/\s+/).includes("quote") || labels.some(function(x){return txt===x || txt.includes(x)})){
        if(el.tagName==="A"){el.setAttribute("href","preventivo.html");el.removeAttribute("target");el.removeAttribute("rel")}
        else if(!el.dataset.quoteWired){el.dataset.quoteWired="1";el.addEventListener("click",function(){location.href="preventivo.html"})}
      }
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",wireQuoteForm);else wireQuoteForm();
  document.querySelectorAll(".langs button").forEach(function(b){b.addEventListener("click",function(){setTimeout(wireQuoteForm,0)})});
})();