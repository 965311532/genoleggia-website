const PROVINCES = [
  { value: "AG", label: "AGRIGENTO" },
  { value: "AL", label: "ALESSANDRIA" },
  { value: "AN", label: "ANCONA" },
  { value: "AO", label: "AOSTA" },
  { value: "AR", label: "AREZZO" },
  { value: "AP", label: "ASCOLI PICENO" },
  { value: "AT", label: "ASTI" },
  { value: "AV", label: "AVELLINO" },
  { value: "BA", label: "BARI" },
  { value: "BT", label: "BARLETTA-ANDRIA-TRANI" },
  { value: "BL", label: "BELLUNO" },
  { value: "BN", label: "BENEVENTO" },
  { value: "BG", label: "BERGAMO" },
  { value: "BI", label: "BIELLA" },
  { value: "BO", label: "BOLOGNA" },
  { value: "BZ", label: "BOLZANO" },
  { value: "BS", label: "BRESCIA" },
  { value: "BR", label: "BRINDISI" },
  { value: "CA", label: "CAGLIARI" },
  { value: "CL", label: "CALTANISSETTA" },
  { value: "CB", label: "CAMPOBASSO" },
  { value: "CI", label: "CARBONIA-IGLESIAS" },
  { value: "CE", label: "CASERTA" },
  { value: "CT", label: "CATANIA" },
  { value: "CZ", label: "CATANZARO" },
  { value: "CH", label: "CHIETI" },
  { value: "CO", label: "COMO" },
  { value: "CS", label: "COSENZA" },
  { value: "CR", label: "CREMONA" },
  { value: "KR", label: "CROTONE" },
  { value: "CN", label: "CUNEO" },
  { value: "EN", label: "ENNA" },
  { value: "FM", label: "FERMO" },
  { value: "FE", label: "FERRARA" },
  { value: "FI", label: "FIRENZE" },
  { value: "FG", label: "FOGGIA" },
  { value: "FC", label: "FORLI’-CESENA" },
  { value: "FR", label: "FROSINONE" },
  { value: "GE", label: "GENOVA" },
  { value: "GO", label: "GORIZIA" },
  { value: "GR", label: "GROSSETO" },
  { value: "IM", label: "IMPERIA" },
  { value: "IS", label: "ISERNIA" },
  { value: "SP", label: "LA SPEZIA" },
  { value: "AQ", label: "L’AQUILA" },
  { value: "LT", label: "LATINA" },
  { value: "LE", label: "LECCE" },
  { value: "LC", label: "LECCO" },
  { value: "LI", label: "LIVORNO" },
  { value: "LO", label: "LODI" },
  { value: "LU", label: "LUCCA" },
  { value: "MC", label: "MACERATA" },
  { value: "MN", label: "MANTOVA" },
  { value: "MS", label: "MASSA-CARRARA" },
  { value: "MT", label: "MATERA" },
  { value: "VS", label: "MEDIO CAMPIDANO" },
  { value: "ME", label: "MESSINA" },
  { value: "MI", label: "MILANO" },
  { value: "MO", label: "MODENA" },
  { value: "MB", label: "MONZA E BRIANZA" },
  { value: "NA", label: "NAPOLI" },
  { value: "NO", label: "NOVARA" },
  { value: "NU", label: "NUORO" },
  { value: "OG", label: "OGLIASTRA" },
  { value: "OT", label: "OLBIA-TEMPIO" },
  { value: "OR", label: "ORISTANO" },
  { value: "PD", label: "PADOVA" },
  { value: "PA", label: "PALERMO" },
  { value: "PR", label: "PARMA" },
  { value: "PV", label: "PAVIA" },
  { value: "PG", label: "PERUGIA" },
  { value: "PU", label: "PESARO E URBINO" },
  { value: "PE", label: "PESCARA" },
  { value: "PC", label: "PIACENZA" },
  { value: "PI", label: "PISA" },
  { value: "PT", label: "PISTOIA" },
  { value: "PN", label: "PORDENONE" },
  { value: "PZ", label: "POTENZA" },
  { value: "PO", label: "PRATO" },
  { value: "RG", label: "RAGUSA" },
  { value: "RA", label: "RAVENNA" },
  { value: "RC", label: "REGGIO CALABRIA" },
  { value: "RE", label: "REGGIO EMILIA" },
  { value: "RI", label: "RIETI" },
  { value: "RN", label: "RIMINI" },
  { value: "RM", label: "ROMA" },
  { value: "RO", label: "ROVIGO" },
  { value: "SA", label: "SALERNO" },
  { value: "SS", label: "SASSARI" },
  { value: "SV", label: "SAVONA" },
  { value: "SI", label: "SIENA" },
  { value: "SR", label: "SIRACUSA" },
  { value: "SO", label: "SONDRIO" },
  { value: "TA", label: "TARANTO" },
  { value: "TE", label: "TERAMO" },
  { value: "TR", label: "TERNI" },
  { value: "TO", label: "TORINO" },
  { value: "TP", label: "TRAPANI" },
  { value: "TN", label: "TRENTO" },
  { value: "TV", label: "TREVISO" },
  { value: "TS", label: "TRIESTE" },
  { value: "UD", label: "UDINE" },
  { value: "VA", label: "VARESE" },
  { value: "VE", label: "VENEZIA" },
  { value: "VB", label: "VERBANO-CUSIO-OSSOLA" },
  { value: "VC", label: "VERCELLI" },
  { value: "VR", label: "VERONA" },
  { value: "VV", label: "VIBO VALENTIA" },
  { value: "VI", label: "VICENZA" },
  { value: "VT", label: "VITERBO" },
];

const LOCATIONS = {
  Piemonte: [
    {
      name: "Saluzzo Broker",
      address: "Corso XXVII Aprile 17 12037 Saluzzo (CN)",
      tel: "+39017546513",
    },
    {
      name: "MFB / Agenzia Reale Mutua Torino Giulio Cesare",
      address: "Corso Giulio Cesare 268 10154 Torino (TO)",
      tel: "+390112050200",
      email: "f.macagno@mfbgroup.it",
    },
    {
      name: "BELTRAMO ASSICURAZIONI",
      address: "Strada Villastellone 2 10024 Torino (TO)",
      tel: "+390116407212",
      email: "martino@beltramoassicurazioni.it",
    },
    {
      name: "ALTA BROKER & PARNERS Srl",
      address: "Corso della Repubblica 22A 15057 Tortona (AL)",
      tel: "+390131483471",
      email: "tortona@genoleggia.it",
    },
    {
      name: "BIA Srl Brazzoli Assicurazioni",
      address: "Via XX Settembre 51 12100 Saluzzo (CN)",
      tel: "+39017167182",
      email: "brazzoli@brazzoliassicurazioni.it",
    },
    {
      name: "BIA Srl Brazzoli Assicurazioni",
      address: "Via Bagni 1Q 12037 Saluzzo (CN)",
      tel: "+39017542626",
      email: "brazzoli@brazzoliassicurazioni.it",
    },
    {
      name: "Nolè4Share Srl",
      address: "Via Circonvallazione 19 12037 Saluzzo (CN)",
      tel: "+390175478809",
      email: "info@nole4share.com",
    },
    {
      name: "EASY BROKER",
      address: "Via Verbano 88 28100 Novara (NO)",
      tel: "+393477141152",
      email: "MC@gruppoeasybroker.it",
    },
    {
      name: "FIGENPA",
      address: "VIA GRAMSCI 34 15121 Alessandria (AL)",
      tel: "+390131231910",
      email: "alessandria@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "CORSO IVREA 11 14100 Asti (AT)",
      tel: "+393454935977",
      email: "asti@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "CORSO NIZZA 72 12100 Cuneo (CN)",
      tel: "+39017166653",
      email: "cuneo@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "CORSO TORINO 34C 28100 Novara (NO)",
      tel: "+390321391604",
      email: "novara@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA TRIPOLI 20A 10136 Torino (TO)",
      tel: "+390113275452",
      email: "torino@figenpa.it",
    },
    {
      name: "EURA HUB",
      address: "Corso Unione Sovietica 73/A 10134 Torino (TO)",
      tel: "+390115622760",
      email: "flavio.mangia@euramail.it",
    },
    {
      name: "LORENZO GATTI CONSULENTE ASSICURATIVO",
      address: "Via Lancia 7 10024 Moncalieri (TO)",
      tel: "+393391689683",
      email: "L.GATTI@BELTRAMOASSICURAZIONI.IT",
    },
  ],
  Lombardia: [
    {
      name: "Mediass",
      address: "Corso Sempione, 23 20145 Milano (MI)",
      tel: "+390236737436",
    },
    {
      name: "ALTA BROKER & PARNERS Srl",
      address: "Via Buonarroti 18 20145 Milano (MI)",
      tel: "+390222228180",
      email: "milano@genoleggia.it",
    },
    {
      name: "MAURO COLOMBINI Broker Assicurativo",
      address: "Via Zendrini 2 20147 Milano (MI)",
      tel: "+39024159260",
      email: "info@colombiniassicurazioni.com",
    },
    {
      name: "EASY BROKER",
      address: "Via Giorgio e Guido Paglia 3 24122 Bergamo (BG)",
      tel: "+393477141152",
      email: "MC@gruppoeasybroker.it",
    },
    {
      name: "FIGENPA",
      address: "VIA G e G.PAGLIA 32A 24122 Bergamo (BG)",
      tel: "+39035236370",
      email: "bergamo@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA FRATELLI UGONI 32E 25126 Brescia (BS)",
      tel: "+390303755740",
      email: "brescia@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA MELCHIORRE GIOIA 64 20125 Milano (MI)",
      tel: "+390267101005",
      email: "milano@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA LUIGI SACCO 16 21100 Varese (VA)",
      tel: "+3903321580240",
      email: "varese@figenpa.it",
    },
  ],
  Lazio: [
    {
      name: "Mediass",
      address: "Via Parioli 55 00197 Roma (RM)",
      tel: "+39068091901",
    },
    {
      name: "Financing & Credit Broker Srl",
      address: "Via di Vigna Stelluti 157 00191 Roma (RM)",
      tel: "+390773733658",
      email: "roma@genoleggia.it",
    },
    {
      name: "Financing & Credit Broker Srl",
      address: "Via Badino 182 04019 Terracina (LT)",
      tel: "+390773733658",
      email: "terracina@genoleggia.it",
    },
    {
      name: "FIGENPA",
      address: "VIA MADONNA DELLA NEVE 61 03100 Frosinone (FR)",
      tel: "+390775898485",
      email: "frosinone@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA ISONZO 65 04100 Latina (LT)",
      tel: "+390773472287",
      email: "latina@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "PIAZZA ANTONIO MEUCCI 7B 04146 Roma (RM)",
      tel: "+390651607080",
      email: "roma@figenpa.it",
    },
    {
      name: "Europ Assistance Ms Insurance",
      address: "Via Alfieri, 5-7-9 00185 Roma RM",
      tel: "+390115622760",
      email: "flavio.mangia@euramail.it",
    },
  ],
  Abruzzo: [
    {
      name: "Mediass",
      address: "Piazza Ettore Troilo, 12 65127 Pescara (PE)",
      tel: "+390854511194",
    },
  ],
  Liguria: [
    {
      name: "GENOLEGGIA SpA",
      address: "Piazza della Vittoria 9 16121 Genova (GE)",
      tel: "+390109860606",
      email: "direzione@genoleggia.it",
    },
    {
      name: "ALTA BROKER & PARNERS Srl",
      address: "Piazz della Vittoria 9 16121 Genova (GE)",
      tel: "+390109860606",
      email: "altabroker@genoleggia.it",
    },
    {
      name: "CARS Srl",
      address: "Via Fiasella 53R 16121 Genova (GE)",
      tel: "+390109860606",
      email: "fiasella@genoleggia.it",
    },
    {
      name: "OVERFORM NOLEGGIA",
      address: "Corso Europa 606 16148 Genova (GE)",
      tel: "+39010396137",
      email: "overform@genoleggia.it",
    },
    {
      name: "SALBORA SRL",
      address: "Viale Franchini 24/2 16167 Genova Nervi (GE)",
      tel: "+393498702292",
      email: "luigi.cornaglia@genoleggia.it",
    },
    {
      name: "EPICA COSTRUZIONI",
      address: "Via Casaregis 77R 16129 Genova (GE)",
      tel: "+39010565078",
      email: "info@epicacostruzioni.com",
    },
    {
      name: "FIGENPA",
      address: "VIA CECCHI 111R 16129 Genova (GE)",
      tel: "+39010532100",
      email: "genova@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIALE SAN BARTOLOMEO 101 19126 La Spezia (SP)",
      tel: "+390187280010",
      email: "laspezia@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "CORSO G.MAZZINI 42R 17100 Savona (SV)",
      tel: "+390198335471",
      email: "savona@figenpa.it",
    },
  ],
  Toscana: [
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Via dell’Artigianato 39/A 57121 Livorno (LI)",
      tel: "+390586429676",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Via della Cava 28 57016 Rosignano Solvay (LI)",
      tel: "+390586374734",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Corso Matteotti 117 57023 Cecina (LI)",
      tel: "+390586680734",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Via Toscoromagnola 1570 56021 Cascina (PI)",
      tel: "+39050788743",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Via San Lino 87 56021 Volterra (PI)",
      tel: "+390588812244",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Via della Repubblica 17 58022 Follonica (GR)",
      tel: "+390586266881",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Via Santorre di Santarosa 19 58100 Grosseto (GR)",
      tel: "+3905641726777",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Via Scalpellini 58043 Castiglione della Pescaia (GR)",
      tel: "+390564933004",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Piazza Borrani 15 58015 Orbetello (GR)",
      tel: "+390564863773",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Piazza Gramsci 54 50051 Castelfiorentino (FI)",
      tel: "+390571632326",
      email: "csa@genoleggia.it",
    },
    {
      name: "CENTRO SERVIZI ASSICURATIVI SpA",
      address: "Via Jacopo Carrucci 214 50053 Empoli (FI)",
      tel: "+39057177104",
      email: "csa@genoleggia.it",
    },
    {
      name: "FIGENPA",
      address: "VIA BACCIO DA MONTELUPO 32H 50142 Firenze (FI) UBERTO",
      tel: "+390557327526",
      email: "firenze@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA PIETRO NENNI 8 56124 Pisa (PI)",
      tel: "+39050970392",
      email: "pisa@figenpa.it",
    },
  ],
  Marche: [
    {
      name: "CAPOZUCCA Insurance Broker Srl",
      address: "Corso Garibaldi 308 62012 Civitanova Marche (MC)",
      tel: "+390733771966",
      email: "genoleggia@capozucca.com",
    },
  ],
  "Emilia Romagna": [
    {
      name: "FIGENPA",
      address: "VIA DEL LAVORO 33E 40127 Bologna (BO)",
      tel: "+390541356527",
      email: "bologna@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIALE A.FRATTI 52 43122 Parma (PR)",
      tel: "+390521270822",
      email: "parma@figenpa.it",
    },
    {
      name: "Europ Assistance Futura Hub",
      address: "Via Francesco Zanardi, 6/A 40131 Bologna BO",
      tel: "+390115622760",
      email: "flavio.mangia@euramail.it",
    },
  ],
  Veneto: [
    {
      name: "FIGENPA",
      address: "VIA ALBERTO CAVALLETTO 7A 35123 Padova (PD)",
      tel: "+390495476850",
      email: "padova@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "PIAZZA PRADAVAL 16C 37122 Verona (VR)",
      tel: "+390452324011",
      email: "verona@figenpa.it",
    },
  ],
  Sicilia: [
    {
      name: "FIGENPA",
      address: "P.ZA S. MARIA DELLA GUARDIA 3 95129 Catania (CT)",
      tel: "+390957477715",
      email: "catania@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "P.ZA V. EMANUELE ORLANDO 29 90138 Palermo (PA)",
      tel: "+390916119132",
      email: "palermo@figenpa.it",
    },
  ],
  Umbria: [
    {
      name: "FIGENPA",
      address: "PIAZZA MARIO RIDOLFI 18/19 05100 Terni (TR)",
      tel: "+390744032336",
      email: "terni@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA SETTEVALLI 439 06129 Perugia (PG)",
      tel: "+390755055365",
      email: "perugia@figenpa.it",
    },
  ],
  Calabria: [
    {
      name: "FIGENPA",
      address: "VIA FRATELLI BANDIERA 15E 87100 Cosenza (CS)",
      tel: "+390984466734",
      email: "cosenza@figenpa.it",
    },
  ],
  Campania: [
    {
      name: "FIGENPA",
      address: "VIA SILVIO BARATTA 38 84134 Salerno (SA)",
      tel: "+390892857767",
      email: "salerno@figenpa.it",
    },
  ],
  Sardegna: [
    {
      name: "FIGENPA",
      address: "VIALE BONARIA 62 09125 Cagliari (CA)",
      tel: "+390706848612",
      email: "cagliari@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA LAMARMORA 117 08100 Nuoro (NU)",
      tel: "+390784399040",
      email: "nuoro@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIA LONGHENA 23 07026 Olbia (SS)",
      tel: "+390789598163",
      email: "olbia@figenpa.it",
    },
    {
      name: "FIGENPA",
      address: "VIALE DANTE 38A 07100 Sassari (SS)",
      tel: "+39079270167",
      email: "sassari@figenpa.it",
    },
  ],
};

function initializeProvincesSelect() {
  // Find the provinces select element
  var provinceSelect = document.getElementById("Provincia");
  // Add the options to the select element
  for (var province of PROVINCES) {
    var option = document.createElement("option");
    option.value = province.value;
    option.text = province.label;
    provinceSelect.appendChild(option);
  }
}

function registerOffersContactButtons() {
  // Find all elements with the attribute "car-offer"
  var carOfferElements = document.querySelectorAll("[car-offer]");
  // For each element find the element with the attribute "car-name"
  for (var carOfferElement of carOfferElements) {
    const carNameElement = carOfferElement.querySelector("[car-name]");
    console.log(carNameElement.innerText);
    // Find the element with the attribute "car-contact"
    const carContactElement = carOfferElement.querySelector("[car-contact]");
    // Add the click event listener
    carContactElement.addEventListener("click", (event) => {
      // Get the car name text
      const carName = carNameElement.innerText;
      console.log(carName);
      // Set the car name in the contact form with the template literal
      const message = `Salve, sono interessato all'offerta per la ${carName}`;
      const notesElement = document.getElementById("Note");
      notesElement.value = message;
      // Scroll to the contact form
      document.getElementById("contact-us-section").scrollIntoView();
      // Save original background color
      const originalBg = notesElement.style.backgroundColor;
      // Briefly highlight the field
      notesElement.style.transition = "all 1s linear";
      notesElement.style.backgroundColor = "#ffed9e";
      setTimeout(function () {
        notesElement.style.backgroundColor = originalBg;
      }, 250);
    });
  }
}

function registerLocationSelect() {
  // Find the location select element
  var locationSelect = document.getElementById("locations");
  // Add the options to the select element
  for (var province of Object.keys(LOCATIONS).sort()) {
    var option = document.createElement("option");
    option.value = province;
    option.text = `${province} (${LOCATIONS[province].length})`;
    locationSelect.appendChild(option);
  }
  // Add the change event listener
  locationSelect.addEventListener("change", (event) => {
    // Get the selected province
    const province = event.target.value;
    // Get all of the locations for that province
    const locations = LOCATIONS[province];
    // Find the locations container element
    const locationsContainer = document.getElementById("locations-container");
    // Remove all of the existing locations
    locationsContainer.innerHTML = "";
    // Add the new locations
    for (var i = 0; i < locations.length; i++) {
      var location = locations[i];
      const locationElement = document.createElement("div");
      // Set styles
      locationElement.style.marginBottom = "1rem";
      locationElement.style.borderBottom = "1px solid #ccc"
        ? i < locations.length - 1
        : "none";
      // Set inner HTML
      locationElement.innerHTML = `
        <span style="font-weight: semibold">${location.name}</span><br/>
        ${location.address}<br/>
        ${location.tel || ""} ${location.tel && location.email && " · "} ${
        location.email || ""
      }
      `;
      locationsContainer.appendChild(locationElement);
    }
  });
}

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", function (event) {
  initializeProvincesSelect();
  registerOffersContactButtons();
  registerLocationSelect();
});
