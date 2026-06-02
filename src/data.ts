export interface Bottleneck {
  num: string;
  title: string;
  symptom: string;
  proposal: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  objective: string;
  milestones: string[];
}

export interface MetricCard {
  value: string;
  label: string;
  desc: string;
}

export interface TranslationData {
  nav: {
    home: string;
    challenges: string;
    services: string;
    about: string;
    speaking: string;
    contact: string;
    cta: string;
  };
  hero: {
    tag: string;
    title: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
    desc: string;
    btnServices: string;
    btnContact: string;
    galleryTitle: string;
    galleryLabel1: string;
    galleryLabel2: string;
  };
  challenges: {
    tag: string;
    title: string;
    desc: string;
    warningLabel: string;
    proposalLabel: string;
    items: Bottleneck[];
  };
  services: {
    tag: string;
    title: string;
    desc: string;
    objectiveLabel: string;
    milestonesLabel: string;
    pillars: ServicePillar[];
  };
  about: {
    tag: string;
    title: string;
    quote: string;
    p1: string;
    p2: string;
    sigTitle: string;
    sigSubtitle: string;
    sidebar: string;
    metrics: MetricCard[];
  };
  speaking: {
    tag: string;
    title: string;
    desc: string;
    items: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  contact: {
    tag: string;
    title: string;
    desc: string;
    formTitle: string;
    labelName: string;
    labelCompany: string;
    labelEmail: string;
    labelMessage: string;
    placeholderMessage: string;
    labelBudget: string;
    placeholderBudget: string;
    labelPrivacy: string;
    btnCopy: string;
    btnMailto: string;
    btnSending: string;
    successTitle: string;
    successDesc: string;
    copySuccess: string;
    emailSubject: string;
  };
  legal: {
    notice: {
      title: string;
      h1: string;
      p1: string;
      h2: string;
      p2: string;
      h3: string;
      p3: string;
      h4: string;
      p4: string;
    };
    privacy: {
      title: string;
      p1: string;
      h2: string;
      p2: string;
      h3: string;
      p3: string;
      h4: string;
      p4: string;
      h5: string;
      p5: string;
      h6: string;
      p6: string;
      h7: string;
      p7: string;
    };
    cookies: {
      title: string;
      h1: string;
      p1: string;
      h2: string;
      ul: string[];
      h3: string;
      p3: string;
    };
  };
  copyright: string;
}

export const data: Record<'es' | 'ca', TranslationData> = {
  es: {
    nav: {
      home: "Inicio",
      challenges: "Desafíos",
      services: "Servicios",
      about: "Sobre Mí",
      speaking: "Conversaciones",
      contact: "Contacto",
      cta: "Hablemos"
    },
    hero: {
      tag: "Consultoría de Firma",
      title: "Acompaño a empresas, instituciones y equipos directivos a organizar, activar y hacer viables proyectos estratégicos y con impacto.",
      highlight1: "organizar",
      highlight2: "activar",
      highlight3: "hacer viables",
      desc: "Claridad operativa, control analítico de la tesorería y sostenibilidad integrada con el margen de tu cuenta de explotación.",
      btnServices: "Ver Servicios",
      btnContact: "Agendar Briefing",
      galleryTitle: "Galería de Proyectos",
      galleryLabel1: "Piedra y Tradición — Mallorca",
      galleryLabel2: "Diseño y Crecimiento Sostenible"
    },
    challenges: {
      tag: "El Escenario Directivo",
      title: "Superando la incertidumbre organizativa",
      desc: "Gestionar organizaciones dinámicas exige identificar el nudo exacto y aplicar rigor metodológico frente a la inercia diaria.",
      warningLabel: "SÍNTOMA DE ALERTA",
      proposalLabel: "PROPUESTA ESTRATÉGICA",
      items: [
        {
          num: "01",
          title: "Falta de Foco Estratégico",
          symptom: "La urgencia del día a día diluye las decisiones de dirección y los comités debaten sin llegar a planes viables.",
          proposal: "Estructurar la toma de decisiones directivas, priorizando los proyectos palanca y blindando las horas de enfoque."
        },
        {
          num: "02",
          title: "Inercia en la Ejecución",
          symptom: "Las excelentes ideas de negocio mueren en los cajones debido a la falta de un plan operativo con responsables claros.",
          proposal: "Convertir la estrategia conceptual en una hoja de ruta con indicadores semanales y responsables alineados."
        },
        {
          num: "03",
          title: "Incertidumbre en Viabilidad",
          symptom: "Lanzamiento de nuevas líneas de negocio o productos sin un modelo de tesorería analítico previo, quemando liquidez.",
          proposal: "Auditar y modelar la viabilidad financiera mediante plantillas de flujo de caja claras y control de costes riguroso."
        },
        {
          num: "04",
          title: "Complejidad en Gobernanza",
          symptom: "Bloqueos técnicos en la coordinación público-privada o tensiones no resueltas en los relevos de empresas familiares.",
          proposal: "Diseñar protocolos de gobernanza técnica, facilitando la mediación externa independiente basada en procesos."
        }
      ]
    },
    services: {
      tag: "Áreas de Especialización",
      title: "Servicios Estratégicos",
      desc: "Soluciones de alta dirección diseñadas para ordenar el organigrama, blindar la liquidez y activar la ejecución operativa.",
      objectiveLabel: "OBJETIVO GENERAL",
      milestonesLabel: "HITOS CLAVE DEL PILAR",
      pillars: [
        {
          id: "mentoria",
          title: "Mentoría Ejecutiva",
          objective: "Acompañamiento confidencial de primer nivel diseñado para ordenar las prioridades del directivo, templar la toma de decisiones complejas y cohesionar la cultura de gobernanza en comités.",
          milestones: [
            "Alineamiento de consejos y comités de dirección.",
            "Gestión del cambio y cohesión de mandos intermedios.",
            "Protocolos de decisión estratégica rápida.",
            "Desarrollo del liderazgo bajo presión operativa."
          ]
        },
        {
          id: "consultoria",
          title: "Consultoría Estratégica",
          objective: "Auditar la eficiencia de las operaciones, identificar cuellos de botella reales y diseñar un flujo de trabajo optimizado y automatizado enfocado al rendimiento comercial.",
          milestones: [
            "Auditorías completas de eficiencia organizativa.",
            "Mapeo, reestructuración y automatización de flujos de trabajo.",
            "Diseño de planes estratégicos a 3 años vista.",
            "Implantación de cuadros de mando e indicadores (KPIs)."
          ]
        },
        {
          id: "esg",
          title: "Sostenibilidad Viable",
          objective: "Integrar directrices de sostenibilidad corporativa (ESG) en el núcleo operativo de la organización de forma pragmática, realista y, sobre todo, rentable para tu cuenta de explotación.",
          milestones: [
            "Diagnósticos reales de impacto y materialidad viable.",
            "Planes de optimización de recursos y economía circular.",
            "Scoring ESG y preparación ante auditorías de cumplimiento.",
            "Estrategias de RSC firmemente conectadas a la monetización."
          ]
        },
        {
          id: "interim",
          title: "Interim Management",
          objective: "Dirección de operaciones o financiera a tiempo parcial (fractional) para liderar con garantías fases de alta complejidad como fusiones, relevos familiares o lanzamiento de nuevas marcas.",
          milestones: [
            "Dirección de Operaciones e Interim CFO a tiempo parcial.",
            "Lanzamiento controlado de spin-offs operativas.",
            "Modelos analíticos de tesorería y control de costes.",
            "Transiciones organizativas y blindaje ante crisis."
          ]
        },
        {
          id: "publico",
          title: "Sector Público y Consorcios",
          objective: "Asesoramiento especializado en gobernanza, financiación y control técnico-administrativo para administraciones públicas y alianzas de carácter mixto público-privadas.",
          milestones: [
            "Planes estratégicos de desarrollo territorial y regional.",
            "Coordinación técnica de alianzas público-privadas (APPs).",
            "Gestión y justificación de fondos europeos y subvenciones.",
            "Modelos integrales de transparencia y cumplimiento público."
          ]
        }
      ]
    },
    about: {
      tag: "Tu Socio Estratégico",
      title: "Cris Ballester",
      quote: "No te presentaré informes teóricos de 100 páginas que acumulan polvo. Te aportaré plantillas de tesorería de gran utilidad y un control analítico que notarás en tu cuenta bancaria.",
      p1: "Tras más de 15 años liderando departamentos de control de gestión y finanzas corporativas en entornos nacionales, decidí enfocar mi consultoría de firma en Mallorca para aportar herramientas de gran corporación a la realidad de nuestras Pymes e instituciones.",
      p2: "Entiendo la profunda complejidad de coordinar la rentabilidad financiera con la gobernanza familiar o los consorcios mixtos. Mi metodología es directa e 'in-office': me desplazo a tu sede, analizo la realidad operativa de tu equipo sobre el terreno e implantamos juntos un modelo rentable, organizado y de impacto real.",
      sigTitle: "Cris Ballester",
      sigSubtitle: "Estrategia de Firma & Dirección Financiera",
      sidebar: "Cris Ballester / Consulting / Mallorca / 2026",
      metrics: [
        {
          value: "+15 Años",
          label: "Trayectoria Directiva",
          desc: "Liderando finanzas, gobernanza y control operativo."
        },
        {
          value: "+50M €",
          label: "Capital Gestionado",
          desc: "En presupuestos públicos y privados optimizados."
        },
        {
          value: "100%",
          label: "Viabilidad Técnica",
          desc: "De proyectos estratégicos analizados y ejecutados."
        }
      ]
    },
    speaking: {
      tag: "Liderazgo de Opinión",
      title: "Conversaciones Estratégicas",
      desc: "Transferencia de metodologías prácticas de gobernanza, viabilidad corporativa y economía circular en foros ejecutivos.",
      items: [
        {
          num: "01",
          title: "Conferencias Magistrales",
          desc: "Ponencias corporativas sobre viabilidad ESG y reestructuración operativa de la tesorería."
        },
        {
          num: "02",
          title: "Mesas Redondas",
          desc: "Debate técnico y contraste de ideas directivas junto a líderes sectoriales."
        },
        {
          num: "03",
          title: "Masterclasses Directivas",
          desc: "Sesiones de capacitación financiera y control de gestión para mandos ejecutivos."
        },
        {
          num: "04",
          title: "Workshops Interactivos",
          desc: "Codiseño directo de modelos de gobernanza y protocolos operativos junto a equipos de alto rendimiento."
        }
      ]
    },
    contact: {
      tag: "Briefing Confidencial",
      title: "¿Listo para ordenar y activar tu proyecto?",
      desc: "Para preservar la confidencialidad estratégica de tu organización, completa este briefing estructurado. Se generará un correo formal encriptado listo para que lo revises y envíes directamente.",
      formTitle: "Briefing Operativo y Financiero",
      labelName: "Nombre y Apellidos",
      labelCompany: "Nombre de tu Organización",
      labelEmail: "Correo de Contacto",
      labelMessage: "¿En qué situación de nudo u operativa se encuentra tu equipo?",
      placeholderMessage: "Ej: Desajustes en comités, necesidad de modelo de tesorería por expansión o análisis de viabilidad de nueva línea...",
      labelBudget: "Presupuesto estimado de la iniciativa",
      placeholderBudget: "Ej: 20k - 50k €, por definir, etc.",
      labelPrivacy: "Acepto los términos legales y la política de privacidad del portal.",
      btnCopy: "Copiar Briefing al Portapapeles",
      btnMailto: "Abrir en mi Gestor de Correo",
      btnSending: "Procesando Briefing...",
      successTitle: "¡Briefing Generado!",
      successDesc: "Hemos estructurado el briefing para tu seguridad. A continuación puedes copiar los datos generados para enviarlos por tu canal corporativo confidencial, o abrir directamente tu gestor de correo.",
      copySuccess: "¡Copiado con éxito!",
      emailSubject: "Briefing de Consultoría Estratégica - Cris Ballester"
    },
    legal: {
      notice: {
        title: "Aviso Legal",
        h1: "1. Información General",
        p1: "En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que este sitio web (crisballester.com) es titularidad exclusiva de Cristina Ballester, profesional autónoma con domicilio en el municipio de Santa Eugenia, Mallorca, España. Correo electrónico de contacto: hola@crisballester.com.",
        h2: "2. Propiedad Intelectual",
        p2: "Todos los contenidos del sitio web, incluyendo textos, diseños gráficos, interfaces, logotipos, imágenes e iconos, están protegidos por derechos de propiedad intelectual e industrial propiedad de Cris Ballester o de sus respectivos licenciantes. Queda prohibida la reproducción, distribución o transformación de cualquier elemento sin autorización previa y por escrito.",
        h3: "3. Limitación de Responsabilidad",
        p3: "El uso de este sitio web es de carácter meramente informativo y profesional. Cris Ballester no se responsabiliza de los daños o perjuicios que pudieran derivarse de interferencias, omisiones, virus informáticos o desconexiones en el funcionamiento operativo de este sistema electrónico, motivados por causas ajenas a su control.",
        h4: "4. Legislación y Jurisdicción Aplicable",
        p4: "Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, siendo competentes los Juzgados y Tribunales de Palma de Mallorca."
      },
      privacy: {
        title: "Política de Privacidad",
        p1: "De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), le informamos sobre cómo tratamos sus datos de carácter personal.",
        h2: "Responsable del Tratamiento",
        p2: "La responsable del tratamiento de sus datos es Cristina Ballester, con residencia en Santa Eugenia, Mallorca, España. Correo electrónico: hola@crisballester.com.",
        h3: "Finalidad del Tratamiento",
        p3: "Tratamos la información que nos facilita a través del formulario de contacto únicamente con el fin de resolver sus dudas, gestionar sus consultas profesionales y entablar una relación comercial en base a los servicios de consultoría o mentoría ejecutiva ofertados.",
        h4: "Legitimación",
        p4: "La base legal para el tratamiento de sus datos es el consentimiento expreso e inequívoco proporcionado al marcar de forma activa la casilla de aceptación al pie del formulario.",
        h5: "Destinatarios y Transferencias",
        p5: "Los datos recopilados no se cederán bajo ningún concepto a terceros ajenos a la titular de la web, salvo obligación legal expresa.",
        h6: "Plazo de Conservación",
        p6: "Sus datos personales se conservarán durante el tiempo estrictamente necesario para responder a su solicitud de información y, en caso de entablarse una relación profesional posterior, durante la vigencia de la misma.",
        h7: "Sus Derechos",
        p7: "Tiene derecho a acceder a sus datos personales, solicitar la rectificación de los datos inexactos, o pedir su supresión cuando los datos ya no sean necesarios. Para ejercer estos derechos, puede enviar una comunicación al correo electrónico hola@crisballester.com adjuntando una prueba válida de identidad."
      },
      cookies: {
        title: "Política de Cookies",
        h1: "¡Compromiso Cookie-Free!",
        p1: "En este sitio web creemos firmemente en la privacidad y la sencillez tecnológica. Por ello, declaramos con orgullo que esta página web NO utiliza ninguna clase de cookie para rastrear, perfilar o analizar su comportamiento de navegación.",
        h2: "¿Qué significa esto para usted?",
        ul: [
          "Sin rastreadores de terceros: No utilizamos Google Analytics, Facebook Pixels, ni ningún otro sistema que deposite cookies publicitarias o estadísticas de terceros en su navegador. Su navegación es totalmente anónima.",
          "Respeto por su privacidad: Al no instalar cookies no esenciales, la normativa europea nos exime plenamente de la obligatoriedad del banner de cookies. Esto resulta en una carga más veloz y en un respeto total por sus datos."
        ],
        h3: "Almacenamiento Local Necesario",
        p3: "El único elemento técnico que se guarda en su dispositivo es una variable de configuración de idioma en el almacenamiento local de su navegador (localStorage) con la clave 'preferred-language'. Esta variable almacena únicamente su preferencia de idioma seleccionada (por ejemplo, 'es' o 'ca') para que la web se cargue en su idioma de forma predeterminada cuando regrese."
      }
    },
    copyright: "© 2026 CrisBallester.com. Todos los derechos reservados. Desarrollo web por <a href='https://websmallorca.es/' target='_blank' class='hover:text-white transition-colors underline'>Webs Mallorca</a>."
  },
  ca: {
    nav: {
      home: "Inici",
      challenges: "Desafiaments",
      services: "Serveis",
      about: "Sobre Mí",
      speaking: "Converses",
      contact: "Contacte",
      cta: "Parlem"
    },
    hero: {
      tag: "Consultoria de Signatura",
      title: "Acompanyo empreses, institucions i equips directius a organitzar, activar i fer viables projectes estratègics i amb impacte.",
      highlight1: "organitzar",
      highlight2: "activar",
      highlight3: "fer viables",
      desc: "Claredat operativa, control analític de la tresoreria i sostenibilitat integrada amb el marge del teu compte d'explotació.",
      btnServices: "Veure Serveis",
      btnContact: "Agendar Briefing",
      galleryTitle: "Galeria de Projectes",
      galleryLabel1: "Pedra i Tradició — Mallorca",
      galleryLabel2: "Disseny i Creixement Sostenible"
    },
    challenges: {
      tag: "L'Escenari Directiu",
      title: "Superant la incertesa organitzativa",
      desc: "Gestionar organitzacions dinàmiques exigeix identificar el nus exacte i aplicar rigor metodològic enfront de la inèrcia diària.",
      warningLabel: "SÍNTOMA D'ALERTA",
      proposalLabel: "PROPUESTA ESTRATÈGICA",
      items: [
        {
          num: "01",
          title: "Manca de Foc Estratègic",
          symptom: "La urgència del dia a dia dilueix les decisions de direcció i els comitès debaten sense arribar a plans viables.",
          proposal: "Estructurar la presa de decisions directives, prioritzant els projectes palanca i blindant les hores de foc."
        },
        {
          num: "02",
          title: "Inèrcia en l'Execució",
          symptom: "Les excel·lents idees de negoci moren als calaixos a causa de la manca d'un pla operatiu amb responsables clars.",
          proposal: "Convertir l'estratègia conceptual en un full de ruta amb indicadors setmanals i responsables alineats."
        },
        {
          num: "03",
          title: "Incertesa en Viabilitat",
          symptom: "Llançament de noves línies de negoci o productes sense un model de tresoreria analític previ, cremant liquiditat.",
          proposal: "Auditar i modelar la viabilitat financera mitjançant plantilles de flux de caixa clares i control de costos rigorós."
        },
        {
          num: "04",
          title: "Complexitat en Governança",
          symptom: "Bloquejos tècnics en la coordinació publicoprivada o tensions no resoltes en els relleus d'empreses familiars.",
          proposal: "Dissenyar protocols de governança tècnica, facilitant la mediació externa independent basada en processos."
        }
      ]
    },
    services: {
      tag: "Àrees d'Especialització",
      title: "Serveis Estratègics",
      desc: "Solucions d'alta direcció dissenyades per ordenar l'organigrama, blindar la liquiditat i activar l'execució operativa.",
      objectiveLabel: "OBJECTIU GENERAL",
      milestonesLabel: "HITOS CLAU DEL PILAR",
      pillars: [
        {
          id: "mentoria",
          title: "Mentoria Executiva",
          objective: "Acompanyament confidencial de primer nivell dissenyat per ordenar les prioritats del directiu, temprar la presa de decisions complexes i cohesionar la cultura de governança en comitès.",
          milestones: [
            "Alineament de consells i comitès de direcció.",
            "Gestió del canvi i cohesió de comandaments intermedis.",
            "Protocols de decisió estratègica ràpida.",
            "Desenvolupament del lideratge sota pressió operativa."
          ]
        },
        {
          id: "consultoria",
          title: "Consultoria Estratègica",
          objective: "Auditar l'eficiència de les operacions, identificar colls d'ampolla reals i dissenyar un flux de treball optimitzat i automatitzat enfocat al rendiment comercial.",
          milestones: [
            "Auditories completes d'eficiència organitzativa.",
            "Mapeig, reestructuració i automatització de fluxos de treball.",
            "Disseny de plans estratègics a 3 anys vista.",
            "Implantació de quadres de comandament i indicadors (KPIs)."
          ]
        },
        {
          id: "esg",
          title: "Sostenibilitat Viable",
          objective: "Integrar directrius de sostenibilitat corporativa (ESG) en el nucli operatiu de l'organització de forma pragmàtica, realista i, sobretot, rendible per al teu compte d'explotació.",
          milestones: [
            "Diagnòstics reals d'impacte i materialitat viable.",
            "Plans d'optimització de recursos i economia circular.",
            "Scoring ESG i preparació davant auditories de compliment.",
            "Estratègies de RSC fermament connectades a la monetització."
          ]
        },
        {
          id: "interim",
          title: "Interim Management",
          objective: "Direcció d'operacions o financera a temps parcial (fractional) per liderar amb garanties fases d'alta complexitat com fusions, relleus familiars o llançament de noves marques.",
          milestones: [
            "Direcció d'Operacions i Interim CFO a temps parcial.",
            "Llançament controlat de spin-offs operatives.",
            "Models analítics de tresoreria i control de costos.",
            "Transicions organitzatives i blindatge davant crisis."
          ]
        },
        {
          id: "publico",
          title: "Sector Públic i Consorcis",
          objective: "Assessorament especialitzat en governança, finançament i control tecnicoadministratiu per a administracions públiques i aliances de caràcter mixt publicoprivat.",
          milestones: [
            "Plans estratègics de desenvolupament territorial i regional.",
            "Coordinació tècnica d'aliances publicoprivades (APPs).",
            "Gestió i justificació de fons europeus i subvencions.",
            "Models integrals de transparència i compliment públic."
          ]
        }
      ]
    },
    about: {
      tag: "El Teu Soci Estratègic",
      title: "Cris Ballester",
      quote: "No et presentaré informes teòrics de 100 pàgines que acumulen pols. Et proporcionaré plantilles de tresoreria de gran utilitat i un control analític que notaràs en el teu compte bancari.",
      p1: "Després de més de 15 anys liderant departaments de control de gestió i finances corporatives en entorns nacionals, vaig decidir enfocar la meva consultoria de signatura a Mallorca per aportar eines de gran corporació a la realitat de les nostres Pimes i institucions.",
      p2: "Entenc la profunda complexitat de coordinar la rendibilitat financera amb la governança familiar o els consorcis mixts. La meva metodologia és directa i 'in-office': em desplaço a la teva seu, analitzo la realitat operativa del teu equip sobre el terreny i implantem junts un model rendible, organitzat i d'impacte real.",
      sigTitle: "Cris Ballester",
      sigSubtitle: "Estratègia de Signatura & Direcció Financera",
      sidebar: "Cris Ballester / Consulting / Mallorca / 2026",
      metrics: [
        {
          value: "+15 Anys",
          label: "Trajectòria Directiva",
          desc: "Liderant finances, governança i control operatiu."
        },
        {
          value: "+50M €",
          label: "Capital Gestionat",
          desc: "En pressupostos públics i privats optimitzats."
        },
        {
          value: "100%",
          label: "Viabilitat Tècnica",
          desc: "De projectes estratègics analizats i executats."
        }
      ]
    },
    speaking: {
      tag: "Lideratge d'Opinió",
      title: "Converses Estratègiques",
      desc: "Transferència de metodologies pràctiques de governança, viabilitat corporativa i economia circular en fòrums executius.",
      items: [
        {
          num: "01",
          title: "Conferències Magistrals",
          desc: "Ponències corporatives sobre viabilitat ESG i reestructuració operativa de la tresoreria."
        },
        {
          num: "02",
          title: "Taules Rodones",
          desc: "Debat tècnic i contrast d'idees directives al costat de líders sectorials."
        },
        {
          num: "03",
          title: "Masterclasses Directives",
          desc: "Sessions de capacitació financera i control de gestió per a comandaments executius."
        },
        {
          num: "04",
          title: "Workshops Interactius",
          desc: "Codisseny directe de models de governança i protocols operatius al costat d'equips d'alt rendiment."
        }
      ]
    },
    contact: {
      tag: "Briefing Confidencial",
      title: "Llest per ordenar i activar el teu projecte?",
      desc: "Per preservar la confidencialitat estratègica de la teva organització, completa aquest briefing estructurat. Es generarà un correu formal encriptat llest perquè el revisis i l'enviïs directament.",
      formTitle: "Briefing Operatiu i Financer",
      labelName: "Nom i Cognoms",
      labelCompany: "Nom de la teva Organització",
      labelEmail: "Correu de Contacte",
      labelMessage: "En quina situació de nus o operativa es troba el teu equip?",
      placeholderMessage: "Ej: Desajustaments en comitès, necessitat de model de tresoreria per expansió o anàlisi de viabilitat de nova línia...",
      labelBudget: "Pressupost estimat de la iniciativa",
      placeholderBudget: "Ej: 20k - 50k €, per definir, etc.",
      labelPrivacy: "Accepto els termes legals i la política de privacitat del portal.",
      btnCopy: "Copiar Briefing al Portapapeles",
      btnMailto: "Obrir en el meu Gestor de Correu",
      btnSending: "Processant Briefing...",
      successTitle: "¡Briefing Generat!",
      successDesc: "Hem estructurat el briefing per a la teva seguretat. A continuació pots copiar les dades generades per enviar-les pel teu canal corporatiu confidencial, o obrir directament el teu gestor de correu.",
      copySuccess: "¡Copiat amb èxit!",
      emailSubject: "Briefing de Consultoria Estratègica - Cris Ballester"
    },
    legal: {
      notice: {
        title: "Avís Legal",
        h1: "1. Informació General",
        p1: "En compliment del que disposa l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'informa que aquest lloc web (crisballester.com) és titularitat exclusiva de Cristina Ballester, professional autònoma amb domicili al municipi de Santa Eugènia, Mallorca, Espanya. Correu electrònic de contacte: hola@crisballester.com.",
        h2: "2. Propietat Intel·lectual",
        p2: "Tots els continguts del lloc web, incloent textos, dissenys gràfics, interfícies, logotips, imatges i icones, estan protegits per drets de propietat intel·lectual i industrial propietat de Cris Ballester o dels seus respectius llicenciants. Queda prohibida la reproducció, distribució o transformació de qualsevol element sense autorització prèvia i per escrit.",
        h3: "3. Limitació de Responsabilitat",
        p3: "L'ús d'aquest lloc web és de caràcter merament informatiu i professional. Cris Ballester no es responsabilitza dels danys o perjudicis que es poguessin derivar d'interferències, omissions, virus informàtics o desconnexions en el funcionament operatiu d'aquest sistema electrònic, motivats per causes alienes al seu control.",
        h4: "4. Legislació i Jurisdicció Aplicable",
        p4: "Per a la resolució de totes les controvèrsies o qüestions relacionades amb el present lloc web o de les activitats en ell desenvolupades, serà d'aplicació la legislació espanyola, essent competents els Jutjats i Tribunals de Palma de Mallorca."
      },
      privacy: {
        title: "Política de Privacitat",
        p1: "De conformitat amb el Reglament General de Protecció de Dades (RGPD) i la Llei Orgànica 3/2018, de 5 de desembre (LOPDGDD), us informem sobre com tractem les vostres dades de caràcter personal.",
        h2: "Responsable del Tractament",
        p2: "La responsable del tractament de les vostres dades és Cristina Ballester, amb residència a Santa Eugènia, Mallorca, Espanya. Correu electrònic: hola@crisballester.com.",
        h3: "Finalitat del Tractamiento",
        p3: "Tractem la informació que ens facilita a través del formulari de contacte únicament amb la finalitat de resoldre els seus dubtes, gestionar les seves consultes professionals i entaular una relació comercial en base als serveis de consultoria o mentoria executiva ofertats.",
        h4: "Legitimació",
        p4: "La base legal per al tractament de les seves dades és el consentiment exprés i inequívoc proporcionat en marcar de forma activa la casella d'acceptació al peu del formulari.",
        h5: "Destinataris i Transferències",
        p5: "Les dades recopilades no es cediran sota cap concepte a tercers aliens a la titular de la web, salvaguardant obligació legal expressa.",
        h6: "Plazi de Conservació",
        p6: "Les seves dades personals es conservaran durant el temps estrictament necessari per respondre a la seva sol·licitud d'informació i, en cas d'entaular-se una relació professional posterior, durant la vigència de la mateixa.",
        h7: "Els seus Drets",
        p7: "Té dret a accedir a les seves dades personals, sol·licitar la rectificació de les dades inexactes, o demanar la seva supressió quan les dades ja no siguin necessàries. Per exercir aquests drets, pot enviar una comunicació al correu electrònic hola@crisballester.com adjuntant una prova vàlida d'identitat."
      },
      cookies: {
        title: "Política de Cookies",
        h1: "Compromís Cookie-Free!",
        p1: "En aquest lloc web creiem fermament en la privacitat i la senzillesa tecnològica. Per això, declarem amb orgull que aquesta pàgina web NO utilitza cap classe de cookie per rastrejar, perfilar o analitzar el seu comportament de navegació.",
        h2: "¿Què significa això per a vostè?",
        ul: [
          "Sense rastrejadors de tercers: No utilitzem Google Analytics, Facebook Pixels, ni cap altre sistema que dipositi cookies publicitàries o estadístiques de tercers al seu navegador. La seva navegació és totalment anònima.",
          "Respecte per la seva privacitat: Al no instal·lar cookies no essencials, la normativa europea ens eximeix plenament de l'obligatorietat del banner de cookies. Això resulta en una càrrega més veloç i en un respecte total per les seves dades."
        ],
        h3: "Almacenament Local Necessari",
        p3: "L'únic element tècnic que es guarda al seu dispositiu és una variable de configuració d'idioma a l'emmagatzematge local del seu navegador (localStorage) amb la clau 'preferred-language'. Aquesta variable emmagatzema únicament la seva preferència d'idioma seleccionada (per exemple, 'es' o 'ca') perquè la web es carregui en el seu idioma de forma predeterminada quan torni."
      }
    },
    copyright: "© 2026 CrisBallester.com. Tots els drets reservats. Desenvolupament web per <a href='https://websmallorca.es/' target='_blank' class='hover:text-white transition-colors underline'>Webs Mallorca</a>."
  }
};
