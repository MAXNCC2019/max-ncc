(function(){
  const SEO={
    it:{
      hero_sub:"NCC Roma • tariffe competitive • Centro Italia",
      world_p:"Il Noleggio con Conducente è un servizio di trasporto privato su prenotazione, pensato per chi desidera viaggiare con comfort, puntualità e riservatezza. Per chi cerca un NCC conveniente a Roma o un servizio NCC con prezzi accessibili, MAX NCC propone tariffe competitive e preventivi chiari. Una soluzione flessibile per trasferimenti in città, aeroporti, porti e destinazioni a media e lunga percorrenza.",
      world_note:"Con MAX NCC ogni trasferimento viene seguito con attenzione, dalla prenotazione all’arrivo, con tariffe competitive e preventivi chiari: una soluzione per chi cerca un NCC conveniente a Roma senza rinunciare a comfort, puntualità e professionalità.",
      title:"NCC Roma | Transfer privati e tariffe competitive | MAX NCC",
      desc:"Cerchi un NCC conveniente a Roma? MAX NCC offre noleggio con conducente e transfer privati con tariffe competitive e prezzi accessibili per Fiumicino, Ciampino e Civitavecchia."
    },
    en:{
      hero_sub:"Rome private transfers • competitive rates • Central Italy",
      world_p:"Private chauffeur hire is a pre-booked transport service for travellers who value comfort, punctuality and discretion. If you are looking for an affordable private transfer in Rome or accessible prices, MAX NCC offers competitive rates and clear quotes. A flexible solution for city transfers, airports, ports and medium- or long-distance journeys.",
      world_note:"With MAX NCC every transfer is handled with care from booking to arrival, with competitive rates and clear quotes for travellers looking for an affordable Rome chauffeur service without giving up comfort, punctuality or professionalism.",
      title:"Rome Private Transfer | Competitive Rates | MAX NCC",
      desc:"Affordable private chauffeur transfers in Rome with competitive rates and clear quotes for Fiumicino, Ciampino and Civitavecchia."
    },
    fr:{
      hero_sub:"Transferts privés à Rome • tarifs compétitifs • Italie centrale",
      world_p:"La location avec chauffeur est un service de transport privé sur réservation pour ceux qui recherchent confort, ponctualité et discrétion. Pour un transfert avec chauffeur à Rome à prix accessible, MAX NCC propose des tarifs compétitifs et des devis clairs. Une solution flexible pour la ville, les aéroports, les ports et les longues distances.",
      world_note:"Avec MAX NCC, chaque transfert est suivi avec attention de la réservation à l’arrivée, avec des tarifs compétitifs et des devis clairs, sans renoncer au confort ni au professionnalisme.",
      title:"Transfert privé Rome | Tarifs compétitifs | MAX NCC",
      desc:"Transferts privés avec chauffeur à Rome à prix accessible, avec tarifs compétitifs et devis clair pour Fiumicino, Ciampino et Civitavecchia."
    },
    de:{
      hero_sub:"Privater Transfer Rom • faire Preise • Mittelitalien",
      world_p:"Der Mietwagen mit Fahrer ist ein vorab gebuchter privater Fahrservice für alle, die Komfort, Pünktlichkeit und Diskretion schätzen. Wer einen preislich fairen Chauffeurservice in Rom sucht, erhält bei MAX NCC wettbewerbsfähige Preise und transparente Angebote. Eine flexible Lösung für Stadtfahrten, Flughäfen, Häfen und längere Strecken.",
      world_note:"Mit MAX NCC wird jeder Transfer von der Buchung bis zur Ankunft sorgfältig betreut – mit fairen Preisen und transparenten Angeboten, ohne auf Komfort, Pünktlichkeit oder Professionalität zu verzichten.",
      title:"Privater Transfer Rom | Faire Preise | MAX NCC",
      desc:"Privater Chauffeurservice in Rom mit fairen Preisen und transparentem Angebot für Fiumicino, Ciampino und Civitavecchia."
    },
    es:{
      hero_sub:"Traslados privados Roma • tarifas competitivas • Centro de Italia",
      world_p:"El alquiler con conductor es un servicio de transporte privado con reserva previa para quienes buscan confort, puntualidad y discreción. Si buscas un traslado privado económico en Roma o precios accesibles, MAX NCC ofrece tarifas competitivas y presupuestos claros. Una solución flexible para ciudad, aeropuertos, puertos y larga distancia.",
      world_note:"Con MAX NCC cada traslado se atiende con cuidado desde la reserva hasta la llegada, con tarifas competitivas y presupuestos claros sin renunciar al confort, la puntualidad ni la profesionalidad.",
      title:"Traslado privado Roma | Tarifas competitivas | MAX NCC",
      desc:"Traslados privados con conductor en Roma a precios accesibles, con tarifas competitivas y presupuesto claro para Fiumicino, Ciampino y Civitavecchia."
    }
  };

  function currentLang(){
    const l=(document.documentElement.lang||"it").toLowerCase().slice(0,2);
    return SEO[l]?l:"it";
  }

  function patchTranslations(){
    try{
      if(typeof translations!=="undefined"){
        Object.keys(SEO).forEach(function(l){
          if(translations[l]){
            translations[l].hero_sub=SEO[l].hero_sub;
            translations[l].world_p=SEO[l].world_p;
            translations[l].world_note=SEO[l].world_note;
          }
        });
      }
    }catch(e){}
  }

  function updateMeta(){
    const d=SEO[currentLang()];
    document.title=d.title;
    const md=document.querySelector('meta[name="description"]'); if(md) md.content=d.desc;
    const ogt=document.querySelector('meta[property="og:title"]'); if(ogt) ogt.content=d.title;
    const ogd=document.querySelector('meta[property="og:description"]'); if(ogd) ogd.content=d.desc;
    const twt=document.querySelector('meta[name="twitter:title"]'); if(twt) twt.content=d.title;
    const twd=document.querySelector('meta[name="twitter:description"]'); if(twd) twd.content=d.desc;
  }

  function apply(){
    patchTranslations();
    const l=currentLang();
    try{ if(typeof setLang==="function") setLang(l); }catch(e){}
    updateMeta();
  }

  patchTranslations();
  document.querySelectorAll("[data-lang]").forEach(function(b){
    b.addEventListener("click",function(){setTimeout(function(){patchTranslations();updateMeta();},0)});
  });
  setTimeout(apply,0);
})();