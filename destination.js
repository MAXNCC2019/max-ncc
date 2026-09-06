let lang="it";
function setLang(l){
  lang=(window.DEST_T&&window.DEST_T[l])?l:"it";
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-t]").forEach(function(e){
    const k=e.dataset.t;
    if(window.DEST_T[lang][k]!=null)e.textContent=window.DEST_T[lang][k];
  });
  document.querySelectorAll(".langs button").forEach(function(b){b.classList.toggle("active",b.dataset.lang===lang)});
  try{localStorage.setItem("maxncc-dest-lang",lang)}catch(e){}
}
document.querySelectorAll(".langs button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.lang)})});
setLang("it");