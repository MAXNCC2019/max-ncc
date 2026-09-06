function setLang(l){const d=window.TR[l]||window.TR.it;document.documentElement.lang=l;document.querySelectorAll('[data-k]').forEach(e=>{const k=e.dataset.k;if(d[k]!=null)e.textContent=d[k]});document.querySelectorAll('.langs button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l));try{localStorage.setItem('maxnccLang',l)}catch(e){}}
document.querySelectorAll('.langs button').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));setLang('it');

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

(function(){
  const INFO={
    it:{
      servicesTitle:"Servizi NCC",
      servicesIntro:"Servizi di noleggio con conducente su prenotazione, per spostamenti privati, business e tempo libero.",
      services:[
        "Transfer aeroportuali da/per Fiumicino (FCO) e Ciampino (CIA)",
        "Transfer da/per il Porto di Civitavecchia",
        "Trasferimenti da/per stazioni ferroviarie, hotel e strutture ricettive",
        "Trasferimenti privati a Roma e collegamenti verso altre città",
        "Servizio a disposizione con conducente per ore o per l'intera giornata",
        "Servizi per aziende, meeting, congressi ed eventi",
        "Trasferimenti per cerimonie, ristoranti, teatro e occasioni speciali",
        "Escursioni e trasferimenti su prenotazione verso Lazio, Toscana, Umbria e Marche"
      ],
      contactsTitle:"Contatti",
      contactsIntro:"Puoi contattarmi direttamente tramite telefono, WhatsApp o e-mail.",
      phone:"Telefono",
      whatsapp:"WhatsApp",
      email:"E-mail",
      quote:"Richiedi preventivo",
      close:"Chiudi"
    },
    en:{
      servicesTitle:"NCC Services",
      servicesIntro:"Pre-booked chauffeur services for private travel, business journeys and leisure.",
      services:[
        "Airport transfers to/from Fiumicino (FCO) and Ciampino (CIA)",
        "Transfers to/from the Port of Civitavecchia",
        "Transfers to/from railway stations, hotels and accommodation",
        "Private transfers in Rome and connections to other cities",
        "Chauffeur at disposal by the hour or for the full day",
        "Corporate services, meetings, congresses and events",
        "Transfers for ceremonies, restaurants, theatre and special occasions",
        "Pre-booked excursions and transfers to Lazio, Tuscany, Umbria and Marche"
      ],
      contactsTitle:"Contact",
      contactsIntro:"You can contact me directly by phone, WhatsApp or e-mail.",
      phone:"Phone",
      whatsapp:"WhatsApp",
      email:"E-mail",
      quote:"Request a quote",
      close:"Close"
    },
    fr:{
      servicesTitle:"Services NCC",
      servicesIntro:"Services de voiture avec chauffeur sur réservation, pour déplacements privés, professionnels et loisirs.",
      services:[
        "Transferts aéroport vers/depuis Fiumicino (FCO) et Ciampino (CIA)",
        "Transferts vers/depuis le port de Civitavecchia",
        "Transferts vers/depuis les gares, hôtels et hébergements",
        "Transferts privés à Rome et liaisons vers d'autres villes",
        "Chauffeur à disposition à l'heure ou pour la journée",
        "Services pour entreprises, réunions, congrès et événements",
        "Transferts pour cérémonies, restaurants, théâtre et occasions spéciales",
        "Excursions et transferts sur réservation vers le Latium, la Toscane, l'Ombrie et les Marches"
      ],
      contactsTitle:"Contacts",
      contactsIntro:"Vous pouvez me contacter directement par téléphone, WhatsApp ou e-mail.",
      phone:"Téléphone",
      whatsapp:"WhatsApp",
      email:"E-mail",
      quote:"Demander un devis",
      close:"Fermer"
    },
    de:{
      servicesTitle:"NCC Leistungen",
      servicesIntro:"Chauffeurservice nach Vorbestellung für private Fahrten, Geschäftsreisen und Freizeit.",
      services:[
        "Flughafentransfers von/nach Fiumicino (FCO) und Ciampino (CIA)",
        "Transfers von/zum Hafen Civitavecchia",
        "Transfers von/zu Bahnhöfen, Hotels und Unterkünften",
        "Private Transfers in Rom und Verbindungen zu anderen Städten",
        "Chauffeur stundenweise oder für den ganzen Tag zur Verfügung",
        "Firmenservice, Meetings, Kongresse und Veranstaltungen",
        "Transfers für Feiern, Restaurants, Theater und besondere Anlässe",
        "Vorbestellte Ausflüge und Transfers nach Latium, Toskana, Umbrien und Marken"
      ],
      contactsTitle:"Kontakt",
      contactsIntro:"Sie können mich direkt per Telefon, WhatsApp oder E-Mail kontaktieren.",
      phone:"Telefon",
      whatsapp:"WhatsApp",
      email:"E-Mail",
      quote:"Angebot anfordern",
      close:"Schließen"
    },
    es:{
      servicesTitle:"Servicios NCC",
      servicesIntro:"Servicios con conductor bajo reserva para desplazamientos privados, de negocios y de ocio.",
      services:[
        "Traslados al aeropuerto desde/hacia Fiumicino (FCO) y Ciampino (CIA)",
        "Traslados desde/hacia el Puerto de Civitavecchia",
        "Traslados desde/hacia estaciones de tren, hoteles y alojamientos",
        "Traslados privados en Roma y conexiones con otras ciudades",
        "Conductor a disposición por horas o durante todo el día",
        "Servicios para empresas, reuniones, congresos y eventos",
        "Traslados para ceremonias, restaurantes, teatro y ocasiones especiales",
        "Excursiones y traslados con reserva hacia Lacio, Toscana, Umbría y Marcas"
      ],
      contactsTitle:"Contacto",
      contactsIntro:"Puedes contactarme directamente por teléfono, WhatsApp o correo electrónico.",
      phone:"Teléfono",
      whatsapp:"WhatsApp",
      email:"E-mail",
      quote:"Solicitar presupuesto",
      close:"Cerrar"
    }
  };

  let currentPanel=null;

  function lang(){
    const l=(document.documentElement.lang||"it").toLowerCase().slice(0,2);
    return INFO[l]?l:"it";
  }

  function ensureModal(){
    if(document.getElementById("maxncc-info-modal"))return;
    const style=document.createElement("style");
    style.textContent=`
      #maxncc-info-modal{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(0,0,0,.78);backdrop-filter:blur(7px)}
      #maxncc-info-modal.open{display:flex}
      .maxncc-info-box{width:min(820px,100%);max-height:min(82vh,760px);overflow:auto;position:relative;border:1px solid rgba(231,185,77,.55);border-radius:20px;background:linear-gradient(145deg,#0b151b,#04090d);box-shadow:0 24px 80px rgba(0,0,0,.55);padding:34px;color:#f7f1e5}
      .maxncc-info-box h2{margin:0 48px 8px 0;color:#ffd976;font:700 clamp(2rem,4vw,3rem) Georgia,serif}
      .maxncc-info-box>p{margin:0 0 24px;color:#d5cfc5}
      .maxncc-close{position:absolute;top:16px;right:16px;width:38px;height:38px;border:1px solid rgba(231,185,77,.5);border-radius:50%;background:#071016;color:#ffd976;font-size:22px;line-height:1;cursor:pointer}
      .maxncc-services{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;padding:0;margin:0;list-style:none}
      .maxncc-services li{position:relative;padding:15px 16px 15px 42px;border:1px solid rgba(231,185,77,.26);border-radius:13px;background:rgba(255,255,255,.025);color:#f3ede2}
      .maxncc-services li:before{content:"✓";position:absolute;left:16px;top:14px;color:#ffd976;font-weight:900}
      .maxncc-contact-list{display:grid;gap:12px}
      .maxncc-contact-row{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:15px 17px;border:1px solid rgba(231,185,77,.26);border-radius:13px;background:rgba(255,255,255,.025)}
      .maxncc-contact-row strong{color:#ffd976}
      .maxncc-contact-row a{color:#f7f1e5;text-decoration:none;font-weight:700;word-break:break-word}
      .maxncc-contact-row a:hover{color:#ffd976}
      .maxncc-quote-link{display:inline-flex;margin-top:20px;padding:12px 20px;border-radius:999px;background:linear-gradient(135deg,#f2c45c,#ffdd83);color:#111!important;font-weight:900}
      @media(max-width:650px){.maxncc-info-box{padding:28px 20px}.maxncc-services{grid-template-columns:1fr}.maxncc-contact-row{align-items:flex-start;flex-direction:column;gap:4px}}
    `;
    document.head.appendChild(style);

    const modal=document.createElement("div");
    modal.id="maxncc-info-modal";
    modal.setAttribute("role","dialog");
    modal.setAttribute("aria-modal","true");
    modal.innerHTML='<div class="maxncc-info-box"><button type="button" class="maxncc-close" aria-label="Close">×</button><div id="maxncc-info-content"></div></div>';
    document.body.appendChild(modal);
    modal.querySelector(".maxncc-close").addEventListener("click",closeModal);
    modal.addEventListener("click",function(e){if(e.target===modal)closeModal()});
    document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal()});
  }

  function closeModal(){
    const m=document.getElementById("maxncc-info-modal");
    if(m)m.classList.remove("open");
    currentPanel=null;
  }

  function render(type){
    ensureModal();
    currentPanel=type;
    const d=INFO[lang()];
    const c=document.getElementById("maxncc-info-content");
    const close=document.querySelector("#maxncc-info-modal .maxncc-close");
    close.setAttribute("aria-label",d.close);
    if(type==="services"){
      c.innerHTML='<h2>'+d.servicesTitle+'</h2><p>'+d.servicesIntro+'</p><ul class="maxncc-services">'+d.services.map(function(x){return "<li>"+x+"</li>"}).join("")+"</ul>";
    }else{
      c.innerHTML='<h2>'+d.contactsTitle+'</h2><p>'+d.contactsIntro+'</p>'+
        '<div class="maxncc-contact-list">'+
          '<div class="maxncc-contact-row"><strong>'+d.phone+'</strong><a href="tel:+393935284668">+39 393 528 4668</a></div>'+
          '<div class="maxncc-contact-row"><strong>'+d.whatsapp+'</strong><a href="https://wa.me/393935284668" target="_blank" rel="noopener">+39 393 528 4668</a></div>'+
          '<div class="maxncc-contact-row"><strong>'+d.email+'</strong><a href="mailto:rossimax1966@outlook.it">rossimax1966@outlook.it</a></div>'+
        '</div><a class="maxncc-quote-link" href="preventivo.html">'+d.quote+'</a>';
    }
    document.getElementById("maxncc-info-modal").classList.add("open");
  }

  function wireInfoButtons(){
    const d=INFO[lang()];
    const serviceNames=[INFO.it.servicesTitle,"Servizi",INFO.en.servicesTitle,"Services",INFO.fr.servicesTitle,"Services",INFO.de.servicesTitle,"Leistungen",INFO.es.servicesTitle,"Servicios"].map(function(x){return x.toLowerCase()});
    const contactNames=["contatti","contact","contacts","kontakt","contacto"].map(function(x){return x.toLowerCase()});
    document.querySelectorAll(".mainnav a,.mainnav button,.site-header a,.site-header button").forEach(function(el){
      const key=((el.dataset&&((el.dataset.k||"")+" "+(el.dataset.i18n||"")))||"").toLowerCase().trim();
      const txt=(el.textContent||"").replace(/\s+/g," ").trim().toLowerCase();
      let type=null;
      if(key.split(/\s+/).includes("services")||serviceNames.includes(txt))type="services";
      if(key.split(/\s+/).includes("contacts")||contactNames.includes(txt))type="contacts";
      if(type&&!el.dataset.infoWired){
        el.dataset.infoWired="1";
        el.addEventListener("click",function(e){e.preventDefault();render(type)});
      }
    });
    if(currentPanel)render(currentPanel);
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",wireInfoButtons);else wireInfoButtons();
  document.querySelectorAll(".langs button").forEach(function(b){b.addEventListener("click",function(){setTimeout(wireInfoButtons,0)})});
})();


/* MAX NCC: one quote flow only.
   Direct WhatsApp booking CTA is removed from the home page.
   "Prenota ora" and "Richiedi preventivo" (and translations) always open preventivo.html. */
(function(){
  function onQuotePage(){
    return /(?:^|\/)preventivo\.html$/i.test(location.pathname);
  }

  function normalize(s){
    return (s||"").replace(/\s+/g," ").trim().toLowerCase();
  }

  const quoteLabels=[
    "prenota ora","richiedi preventivo",
    "book now","request a quote",
    "réserver maintenant","demander un devis",
    "jetzt buchen","angebot anfordern",
    "reservar ahora","solicitar presupuesto"
  ];

  function removeDirectWhatsAppBooking(){
    if(onQuotePage())return;
    document.querySelectorAll("a,button").forEach(function(el){
      if(el.closest("#maxncc-info-modal"))return;
      const txt=normalize(el.textContent);
      const href=normalize(el.getAttribute&&el.getAttribute("href"));
      const hasWaKey=!!el.querySelector&&!!el.querySelector('[data-k="wa1"],[data-k="wa2"]');
      const looksLikeBooking=hasWaKey ||
        (txt.includes("whatsapp") && (
          txt.includes("preventiv") ||
          txt.includes("quote") ||
          txt.includes("devis") ||
          txt.includes("angebot") ||
          txt.includes("presupuesto") ||
          txt.includes("prenota") ||
          txt.includes("book") ||
          txt.includes("réserver") ||
          txt.includes("buchen") ||
          txt.includes("reservar")
        ));
      const directWhatsApp=href.includes("wa.me") || href.includes("whatsapp");
      if(looksLikeBooking && (directWhatsApp || hasWaKey)){
        el.remove();
      }
    });
  }

  function wireUnifiedQuoteButtons(){
    if(onQuotePage())return;
    document.querySelectorAll("a,button").forEach(function(el){
      if(el.closest("#maxncc-info-modal") && !el.classList.contains("maxncc-quote-link"))return;
      const txt=normalize(el.textContent);
      const key=normalize((el.dataset&&((el.dataset.k||"")+" "+(el.dataset.i18n||"")))||"");
      const isQuote=key.split(/\s+/).includes("quote") ||
        quoteLabels.some(function(label){return txt===label || txt.includes(label)});
      if(!isQuote)return;

      if(el.tagName==="A"){
        el.setAttribute("href","preventivo.html");
        el.removeAttribute("target");
        el.removeAttribute("rel");
      }else if(!el.dataset.unifiedQuoteWired){
        el.dataset.unifiedQuoteWired="1";
        el.addEventListener("click",function(e){
          e.preventDefault();
          location.href="preventivo.html";
        });
      }
    });
  }

  function applyQuoteFlow(){
    removeDirectWhatsAppBooking();
    wireUnifiedQuoteButtons();
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",applyQuoteFlow);
  }else{
    applyQuoteFlow();
  }

  document.querySelectorAll(".langs button").forEach(function(b){
    b.addEventListener("click",function(){setTimeout(applyQuoteFlow,0)});
  });
})();

/* MAX NCC destination guide: Tuscany card opens the dedicated guide. */
(function(){
  function wireTuscanyCard(){
    const labels = document.querySelectorAll('[data-i18n="tuscany"]');
    labels.forEach(function(label){
      const card = label.closest("article");
      if(!card || card.dataset.tuscanyWired==="1") return;
      card.dataset.tuscanyWired="1";
      card.style.cursor="pointer";
      card.setAttribute("role","link");
      card.setAttribute("tabindex","0");
      card.setAttribute("aria-label","Toscana - guida di viaggio MAX NCC");
      function openGuide(e){
        if(e && e.target && e.target.closest && e.target.closest("a,button")) return;
        window.location.href="toscana.html";
      }
      card.addEventListener("click",openGuide);
      card.addEventListener("keydown",function(e){
        if(e.key==="Enter" || e.key===" "){
          e.preventDefault();
          openGuide(e);
        }
      });
    });
  }
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",wireTuscanyCard);
  }else{
    wireTuscanyCard();
  }
  document.querySelectorAll(".langs button").forEach(function(b){
    b.addEventListener("click",function(){setTimeout(wireTuscanyCard,0)});
  });
})();


/* MAX NCC gallery instruction: replace the old "all destinations" button with a non-clickable hint. */
(function(){
  const TXT={
    it:"Clicca su una foto per scoprire tutte le informazioni sulla destinazione",
    en:"Click a photo to discover all the information about the destination",
    fr:"Cliquez sur une photo pour découvrir toutes les informations sur la destination",
    de:"Klicken Sie auf ein Foto, um alle Informationen zum Reiseziel zu entdecken",
    es:"Haz clic en una foto para descubrir toda la información sobre el destino"
  };
  function lang(){
    const l=(document.documentElement.lang||"it").toLowerCase().slice(0,2);
    return TXT[l]?l:"it";
  }
  function applyGalleryHint(){
    const title=document.querySelector('[data-k="gallery_t"]');
    if(!title)return;
    const section=title.closest("section")||title.parentElement;
    if(!section)return;
    let hint=section.querySelector(".maxncc-gallery-hint");
    if(!hint){
      const candidates=section.querySelectorAll("a,button");
      let old=null;
      candidates.forEach(function(el){
        const txt=(el.textContent||"").replace(/\s+/g," ").trim().toLowerCase();
        const href=(el.getAttribute&&el.getAttribute("href"))||"";
        if(
          href==="#dest" ||
          txt.includes("tutte le destinazioni") ||
          txt.includes("all destinations") ||
          txt.includes("toutes les destinations") ||
          txt.includes("alle reiseziele") ||
          txt.includes("todos los destinos")
        ) old=el;
      });
      hint=document.createElement("div");
      hint.className="maxncc-gallery-hint";
      hint.setAttribute("role","note");
      hint.style.cssText="display:inline-flex;align-items:center;gap:9px;margin:12px 0 24px;padding:11px 16px;border:1px solid rgba(231,185,77,.45);border-radius:999px;background:rgba(231,185,77,.07);color:#f7f1e5;font-weight:700;font-size:.95rem;line-height:1.35";
      hint.innerHTML='<span aria-hidden="true" style="color:#ffd976;font-size:1.1em">ⓘ</span><span class="maxncc-gallery-hint-text"></span>';
      if(old) old.replaceWith(hint);
      else {
        const p=section.querySelector('[data-k="gallery_p"]');
        if(p && p.parentNode) p.insertAdjacentElement("afterend",hint);
        else title.insertAdjacentElement("afterend",hint);
      }
    }
    const span=hint.querySelector(".maxncc-gallery-hint-text");
    if(span)span.textContent=TXT[lang()];
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",applyGalleryHint);else applyGalleryHint();
  document.querySelectorAll(".langs button").forEach(function(b){
    b.addEventListener("click",function(){setTimeout(applyGalleryHint,0)});
  });
})();
