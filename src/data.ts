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
    linkedinLabel: string;
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
  footer_col1_title: string;
  footer_col2_title: string;
  footer_col3_title: string;
}

export const data: Record<'es' | 'ca' | 'en' | 'it' | 'de', TranslationData> = {
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
      ],
      linkedinLabel: "Conectar en LinkedIn"
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
          desc: "Debate técnico y contraste de ideas junto a líderes sectoriales."
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
        p7: "Tiene derecho a acceder a sus datos personales, solicitar la rectificación de los datos inexactes, o pedir su supresión cuando los datos ya no sean necesarios. Para ejercer estos derechos, puede enviar una comunicación al correo electrónico hola@crisballester.com adjuntando una prueba válida de identidad."
      },
      cookies: {
        title: "Política de Cookies",
        h1: "¡Compromiso Cookie-Free!",
        p1: "En este sitio web creemos firmemente en la privacidad y la sencillez tecnológica. Por ello, declaramos con orgullo que esta página web NO utiliza ninguna clase de cookie para rastrear, perfilar o analizar su comportamiento de navegación.",
        h2: "¿Qué significa esto para usted?",
        ul: [
          "Sin rastreadores de terceros: No utilizamos Google Analytics, Facebook Pixels, ni ningún otro sistema que deposite cookies publicitarias o estadísticas de terceros en su navegador. Su navegación is totalmente anónima.",
          "Respeto por su privacidad: Al no instalar cookies no esenciales, la normativa europea nos exime plenamente de la obligatoriedad del banner de cookies. Esto resulta en una carga más veloz y en un respeto total por sus datos."
        ],
        h3: "Almacenamiento Local Necesario",
        p3: "El único elemento técnico que se guarda en su dispositivo es una variable de configuración de idioma en el almacenamiento local de su navegador (localStorage) con la clave 'preferred-language'. Esta variable almacena únicamente su preferencia de idioma seleccionada (por ejemplo, 'es' o 'ca') para que la web se cargue en su idioma de forma predeterminada cuando regrese."
      }
    },
    copyright: "© 2026 CrisBallester.com. Todos los derechos reservados. Desarrollo web por <a href='https://websmallorca.es/' target='_blank' class='hover:text-white transition-colors underline'>Webs Mallorca</a>.",
    footer_col1_title: "Navegación",
    footer_col2_title: "Servicios",
    footer_col3_title: "Contacto"
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
          symptom: "Las excel·lents idees de negoci moren als calaixos a causa de la manca d'un pla operatiu amb responsables clars.",
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
          objective: "Acompanyament confidencial de primer nivell dissenyat per ordenar les prioritats del directivo, temprar la presa de decisions complexes i cohesionar la cultura de governança en comitès.",
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
          title: "Sostenibilidad Viable",
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
          objective: "Direcció d'operacions o financera a temps parcial (fractional) per liderar con garanties fases d'alta complexitat com fusions, relleus familiars o llançament de noves marques.",
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
      p2: "Entenc la profunda complexitat de coordinar la rentabilidad financera amb la governança familiar o els consorcis mixts. La meva metodologia és directa i 'in-office': em desplaço a la teva seu, analitzo la realitat operativa del teu equip sobre el terreny i implantem junts un model rendible, organitzat i d'impacte real.",
      sigTitle: "Cris Ballester",
      sigSubtitle: "Estrategia de Signatura & Direcció Financera",
      sidebar: "Cris Ballester / Consulting / Mallorca / 2026",
      metrics: [
        {
          value: "+15 Anys",
          label: "Trajectòria Directiva",
          desc: "Liderant finances, governança i control operatiu."
        },
        {
          value: "+50M €",
          label: "Capital Gestionado",
          desc: "En pressupostos públics i privats optimitzats."
        },
        {
          value: "100%",
          label: "Viabilitat Tècnica",
          desc: "De projectes estratègics analizats i executats."
        }
      ],
      linkedinLabel: "Connectar a LinkedIn"
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
          desc: "Debat tècnic i contrast d'idees al costat de líders sectorials."
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
        h3: "3. Limitación de Responsabilitat",
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
        h6: "Plazo de Conservació",
        p6: "Les seves dades personals es conservaran durant el temps estrictament necessari per respondre a la seva sol·licitud d'informació i, en cas d'entaular-se una relació professional posterior, durant la vigència de la mateixa.",
        h7: "Els seus Drets",
        p7: "Té dret a accedir a les seves dades personals, sol·licitar la rectificació de les dades inexactes, o demanar la seva supressió quan les dades ja no siguin necessàries. Per exercir aquests drets, pot enviar una comunicació al correu electrònic hola@crisballester.com adjuntant una prova vàlida d'identitat."
      },
      cookies: {
        title: "Política de Cookies",
        h1: "Compromís Cookie-Free!",
        p1: "En aquest lloc web creiem fermament en la privacitat i la senzillesa tecnològica. Por això, declarem amb orgull que aquesta pàgina web NO utilitza cap classe de cookie per rastrejar, perfilar o analitzar el seu comportament de navegació.",
        h2: "¿Què significa això per a vostè?",
        ul: [
          "Sense rastrejadors de tercers: No utilitzem Google Analytics, Facebook Pixels, ni cap altre sistema que dipositi cookies publicitàries o estadístiques de tercers al seu navegador. La seva navegació és totalment anònima.",
          "Respecte per la seva privacitat: Al no instal·lar cookies no essencials, la normativa europea ens eximeix plenament de l'obligatorietat del banner de cookies. Això resulta en una càrrega més veloç i en un respecte total per les seves dades."
        ],
        h3: "Almacenament Local Necessari",
        p3: "L'únic element tècnic que es guarda al seu dispositiu és una variable de configuració d'idioma a l'emmagatzematge local del seu navegador (localStorage) amb la clau 'preferred-language'. Questa variable emmagatzema únicament la seva preferència d'idioma seleccionada (por exemple, 'es' o 'ca') perquè la web es carregui en el seu idioma de forma predeterminada quan torni."
      }
    },
    copyright: "© 2026 CrisBallester.com. Tots els drets reservats. Desenvolupament web per <a href='https://websmallorca.es/' target='_blank' class='hover:text-white transition-colors underline'>Webs Mallorca</a>.",
    footer_col1_title: "Navegació",
    footer_col2_title: "Serveis",
    footer_col3_title: "Contacte"
  },
  en: {
    nav: {
      home: "Home",
      challenges: "Challenges",
      services: "Services",
      about: "About Me",
      speaking: "Conversations",
      contact: "Contact",
      cta: "Let's Talk"
    },
    hero: {
      tag: "Firm Mentorship & Consulting",
      title: "I accompany companies, institutions and executive teams to organize, activate and make viable strategic and impactful projects.",
      highlight1: "organize",
      highlight2: "activate",
      highlight3: "make viable",
      desc: "Operational clarity, analytical treasury control and sustainability integrated with your operating margin.",
      btnServices: "View Services",
      btnContact: "Schedule Briefing",
      galleryTitle: "Project Gallery",
      galleryLabel1: "Stone & Tradition — Mallorca",
      galleryLabel2: "Sustainable Design & Growth"
    },
    challenges: {
      tag: "The Management Scenario",
      title: "Overcoming organizational uncertainty",
      desc: "Managing dynamic organizations demands identifying the exact bottleneck and applying methodological rigor against daily inertia.",
      warningLabel: "WARNING SYMPTOM",
      proposalLabel: "STRATEGIC PROPOSAL",
      items: [
        {
          num: "01",
          title: "Lack of Strategic Focus",
          symptom: "Daily urgency dilutes executive decisions, and boards debate without reaching actionable plans.",
          proposal: "Structure executive decision-making, prioritizing high-leverage projects and shielding deep-focus hours."
        },
        {
          num: "02",
          title: "Inertia in Execution",
          symptom: "Moving from an excellent business idea to a viable operational plan is often the biggest hurdle due to the lack of clear responsibilities.",
          proposal: "Convert conceptual strategy into a roadmap with weekly indicators and aligned responsibilities."
        },
        {
          num: "03",
          title: "Viability Uncertainty",
          symptom: "Launching new business lines or products without a prior analytical treasury model, burning cash flow.",
          proposal: "Audit and model financial viability through clear cash flow templates and strict cost control."
        },
        {
          num: "04",
          title: "Complexity in Governance",
          symptom: "Technical blockages in public-private coordination or unresolved tensions in family business successions.",
          proposal: "Design technical governance protocols, facilitating independent external mediation based on processes."
        }
      ]
    },
    services: {
      tag: "Areas of Expertise",
      title: "Strategic Services",
      desc: "Executive solutions designed to organize the chart, shield cash flow and activate operational execution.",
      objectiveLabel: "GENERAL OBJECTIVE",
      milestonesLabel: "KEY MILESTONES OF THIS PILLAR",
      pillars: [
        {
          id: "mentoria",
          title: "Executive Mentorship",
          objective: "High-level confidential guidance designed to order executive priorities, temper complex decision-making and unite board culture.",
          milestones: [
            "Alignment of boards of directors and steering committees.",
            "Change management and cohesion of middle management.",
            "Rapid strategic decision-making protocols.",
            "Leadership development under operational pressure."
          ]
        },
        {
          id: "consultoria",
          title: "Strategic Consulting",
          objective: "Audit operational efficiency, identify real bottlenecks and design an optimized, automated workflow focused on commercial performance.",
          milestones: [
            "Comprehensive operational efficiency audits.",
            "Mapping, restructuring and workflow automation.",
            "Design of 3-year strategic plans.",
            "Implementation of dashboards and Key Performance Indicators (KPIs)."
          ]
        },
        {
          id: "esg",
          title: "Viable Sustainability",
          objective: "Integrate corporate sustainability (ESG) criteria into your business structure in a pragmatic, realistic and, above all, profitable way for your bottom line.",
          milestones: [
            "Real diagnostics of viable impact and materiality.",
            "Resource optimization and circular economy plans.",
            "ESG scoring and preparation for compliance audits.",
            "CSR strategies firmly connected to monetization."
          ]
        },
        {
          id: "interim",
          title: "Interim Management",
          objective: "Part-time (fractional) operations or financial management to lead highly complex phases such as mergers, family succession or new brand launches.",
          milestones: [
            "Part-time Operations Direction and Interim CFO.",
            "Controlled launch of operational spin-offs.",
            "Analytical cash flow models and cost control.",
            "Organizational transitions and shielding during crisis."
          ]
        },
        {
          id: "publico",
          title: "Public Sector & Consortia",
          objective: "Specialized advice in governance, financing and technical-administrative control for public administrations and mixed alliances.",
          milestones: [
            "Strategic territorial and regional development plans.",
            "Technical coordination of public-private partnerships (PPPs).",
            "Management and justification of European funds and grants.",
            "Comprehensive models for public transparency and compliance."
          ]
        }
      ]
    },
    about: {
      tag: "Your Strategic Partner",
      title: "Cris Ballester",
      quote: "I won't present you with 100-page theoretical reports that gather dust. I will provide you with highly useful cash flow templates and analytical control that you will notice in your bank account.",
      p1: "After more than 15 years leading management control and corporate finance departments in national environments, I decided to focus my firm consulting in Mallorca to bring big corporation tools to the reality of our SMEs and institutions.",
      p2: "I understand the deep complexity of coordinating business profitability with family wealth and the governance of mixed alliances. My way of working is direct and 'in-office': I move to your headquarters, analyze the operational reality of your team on the ground and implement a profitable, organized and impactful model.",
      sigTitle: "Cris Ballester",
      sigSubtitle: "Firm Strategy & Financial Management",
      sidebar: "Cris Ballester / Consulting / Mallorca / 2026",
      metrics: [
        {
          value: "+15 Years",
          label: "Executive Career",
          desc: "Leading finance, governance and operational control."
        },
        {
          value: "+50M €",
          label: "Capital Managed",
          desc: "In optimized public and private budgets."
        },
        {
          value: "100%",
          label: "Technical Viability",
          desc: "Of strategic projects analyzed and executed."
        }
      ],
      linkedinLabel: "Connect on LinkedIn"
    },
    speaking: {
      tag: "Thought Leadership",
      title: "Strategic Conversations",
      desc: "Transfer of practical methodologies for governance, viability and circular economy in executive forums.",
      items: [
        {
          num: "01",
          title: "Keynotes & Conferences",
          desc: "Corporate talks on ESG viability, management control, and corporate finance in large auditoriums."
        },
        {
          num: "02",
          title: "Roundtables & Panels",
          desc: "Technical debate and exchange of ideas alongside industry leaders."
        },
        {
          num: "03",
          title: "Executive Masterclasses",
          desc: "Advanced training sessions in finance and management control for executives."
        },
        {
          num: "04",
          title: "Interactive Workshops",
          desc: "Co-design of governance models and operational protocols with high-performance teams."
        }
      ]
    },
    contact: {
      tag: "Confidential Briefing",
      title: "Ready to order and activate your project?",
      desc: "To preserve the strategic confidentiality of your organization, please complete this structured briefing. A formal encrypted email will be generated ready for you to review and send directly.",
      formTitle: "Operational & Financial Briefing",
      labelName: "Full Name",
      labelCompany: "Organization Name",
      labelEmail: "Contact Email",
      labelMessage: "What operational bottleneck or situation is your team facing?",
      placeholderMessage: "E.g. Disagreements in committees, need for a cash flow model for expansion or new line viability analysis...",
      labelBudget: "Estimated budget of the initiative",
      placeholderBudget: "E.g. 20k - 50k €, to be defined, etc.",
      labelPrivacy: "I accept the legal terms and privacy policy of the portal.",
      btnCopy: "Copy Briefing to Clipboard",
      btnMailto: "Open in My Email Client",
      btnSending: "Processing Briefing...",
      successTitle: "Briefing Generated!",
      successDesc: "We have structured the briefing for your security. Below you can copy the generated data to send it through your confidential corporate channel, or open your email manager directly.",
      copySuccess: "Successfully Copied!",
      emailSubject: "Strategic Consulting Briefing - Cris Ballester"
    },
    legal: {
      notice: {
        title: "Legal Notice",
        h1: "1. General Information",
        p1: "In compliance with Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), this website (crisballester.com) is exclusively owned by Cristina Ballester, an independent professional residing in Santa Eugenia, Mallorca, Spain. Contact email: hola@crisballester.com.",
        h2: "2. Intellectual Property",
        p2: "All contents of the website, including texts, graphic designs, interfaces, logos, images and icons, are protected by intellectual and industrial property rights owned by Cris Ballester or her respective licensors. Any reproduction, distribution or transformation without prior written authorization is prohibited.",
        h3: "3. Limitation of Liability",
        p3: "The use of this website is purely informative and professional. Cris Ballester is not liable for damages resulting from interferences, omissions, computer viruses or disconnections in the operational functioning of this system caused by reasons beyond her control.",
        h4: "4. Applicable Law and Jurisdiction",
        p4: "For the resolution of all disputes or questions related to this website or the activities developed on it, Spanish legislation shall apply, being competent the Courts of Palma de Mallorca."
      },
      privacy: {
        title: "Privacy Policy",
        p1: "In accordance with the General Data Protection Regulation (GDPR) and Organic Law 3/2018, of December 5 (LOPDGDD), we inform you about how we process your personal data.",
        h2: "Data Controller",
        p2: "The controller of your personal data is Cristina Ballester, residing in Santa Eugenia, Mallorca, Spain. Email: hola@crisballester.com.",
        h3: "Purpose of Processing",
        p3: "We process the information provided through the contact form solely to resolve your questions, manage your professional inquiries and establish a business relationship based on the consulting or executive mentorship services offered.",
        h4: "Lawfulness of Processing",
        p4: "The legal basis for processing your data is the express and unequivocal consent provided by actively checking the acceptance box at the foot of the form.",
        h5: "Recipients and Transfers",
        p5: "The collected data will not be transferred under any circumstances to third parties outside the web owner, unless legally obligated.",
        h6: "Retention Period",
        p6: "Your personal data will be kept for the time strictly necessary to respond to your request for information and, in case of establishing a subsequent professional relationship, during its validity.",
        h7: "Your Rights",
        p7: "You have the right to access your personal data, request the rectification of inaccurate data, or request their erasure when the data are no longer necessary. To exercise these rights, you can send an email to hola@crisballester.com attaching a valid proof of identity."
      },
      cookies: {
        title: "Cookies Policy",
        h1: "Cookie-Free Commitment!",
        p1: "On this website we firmly believe in privacy and technological simplicity. Therefore, we proudly declare that this website DOES NOT use any class of cookie to track, profile or analyze your browsing behavior.",
        h2: "What does this mean for you?",
        ul: [
          "No third-party trackers: We do not use Google Analytics, Facebook Pixels, or any other system that deposits advertising or statistical third-party cookies on your browser. Your browsing is completely anonymous.",
          "Respect for your privacy: By not installing non-essential cookies, European regulations fully exempt us from cookie banner obligations. This results in faster loading times and total respect for your data."
        ],
        h3: "Necessary Local Storage",
        p3: "The only technical element saved on your device is a language configuration variable in your browser's local storage (localStorage) under the key 'preferred-language'. This variable only stores your selected language preference (e.g. 'es' or 'ca') so that the web loads in your language by default when you return."
      }
    },
    copyright: "© 2026 CrisBallester.com. All rights reserved. Web development by <a href='https://websmallorca.es/' target='_blank' class='hover:text-white transition-colors underline'>Webs Mallorca</a>.",
    footer_col1_title: "Navigation",
    footer_col2_title: "Services",
    footer_col3_title: "Contact"
  },
  it: {
    nav: {
      home: "Inizio",
      challenges: "Sfide",
      services: "Servizi",
      about: "Su di me",
      speaking: "Conversazioni",
      contact: "Contatto",
      cta: "Parliamo"
    },
    hero: {
      tag: "Mentorato & Consulenza Aziendale",
      title: "Accompagno aziende, istituzioni e comitati direttivi a organizzare, attivare e rendere praticabili progetti strategici e d'impatto.",
      highlight1: "organizzare",
      highlight2: "attivare",
      highlight3: "rendere praticabili",
      desc: "Chiarezza operativa, controllo analitico della tesoreria e sostenibilità integrata nel margine operativo.",
      btnServices: "Vedi Servizi",
      btnContact: "Avvia Briefing",
      galleryTitle: "Galleria Progetti",
      galleryLabel1: "Pietra e Tradizione — Maiorca",
      galleryLabel2: "Design e Crescita Sostenibile"
    },
    challenges: {
      tag: "Lo Scenario Direttivo",
      title: "Superare l'incertezza organizzativa",
      desc: "Gestire organizzazioni dinamiche richiede l'identificazione del collo di bottiglia esatto e l'applicazione di un rigoroso metodo operativo.",
      warningLabel: "SINTOMO DI ALLERTA",
      proposalLabel: "PROPOSTA STRATEGICA",
      items: [
        {
          num: "01",
          title: "Mancanza di Focus Strategico",
          symptom: "L'urgenza quotidiana diluisce le decisioni direzionali e i comitati discutono senza raggiungere piani concreti.",
          proposal: "Strutturare il processo decisionale direttivo, dando priorità ai progetti chiave e proteggendo le ore di lavoro focalizzato."
        },
        {
          num: "02",
          title: "Inerzia nell'Esecuzione",
          symptom: "Le ottime idee imprenditoriali muoiono nei cassetti a causa della mancanza di un piano operativo con responsabilità chiare.",
          proposal: "Trasformare la strategia concettuale in una tabella di marcia con indicatori settimanali e responsabilità allineate."
        },
        {
          num: "03",
          title: "Incertezza sulla Fattibilità",
          symptom: "Lancio di nuove linee di business o prodotti senza un modello analitico preventivo della tesoreria, bruciando liquidità.",
          proposal: "Verificare e modellare la fattibilità finanziaria attraverso modelli di flusso di cassa chiari e un controllo rigoroso dei costi."
        },
        {
          num: "04",
          title: "Complessità nella Governance",
          symptom: "Blocchi tecnici nel coordinamento pubblico-privato o tensioni irrisolte nei passaggi generazionali delle imprese familiari.",
          proposal: "Progettare protocolli di governance tecnica, facilitando la mediazione esterna indipendente basata sui processi."
        }
      ]
    },
    services: {
      tag: "Aree di Specializzazione",
      title: "Servizi Strategici",
      desc: "Soluzioni di alta direzione progettate per ordinare l'organigramma, proteggere la liquidità e attivare l'esecuzione operativa.",
      objectiveLabel: "OBIETTIVO GENERALE",
      milestonesLabel: "TAPPE CHIAVE DI QUESTO PILASTRO",
      pillars: [
        {
          id: "mentoria",
          title: "Mentoring Esecutivo",
          objective: "Guida riservata di alto livello progettata per ordinare le priorità del manager, temperare le decisioni complesse e unire la cultura dei comitati.",
          milestones: [
            "Allineamento di consigli di amministrazione e comitati di direzione.",
            "Gestione del cambiamento e coesione del management intermedio.",
            "Protocolli di decisione strategica rapida.",
            "Sviluppo della leadership sotto pressione operativa."
          ]
        },
        {
          id: "consultoria",
          title: "Consulenza Strategica",
          objective: "Analizzare l'efficienza delle operazioni, identificare i colli di bottiglia reali e progettare un flusso di lavoro ottimizzato focalizzato sulle performance commerciali.",
          milestones: [
            "Audit completi di efficienza operativa.",
            "Mappatura, ristrutturazione e automazione dei flussi di lavoro.",
            "Progettazione di piani strategici triennali.",
            "Implementazione di cruscotti e indicatori chiave di prestazione (KPI)."
          ]
        },
        {
          id: "esg",
          title: "Sostenibilità Praticabile",
          objective: "Integrare i criteri di sostenibilità aziendale (ESG) nella struttura operativa dell'organizzazione in modo pragmatico, realistico e redditizio.",
          milestones: [
            "Diagnosi reali di impatto e materialità fattibile.",
            "Piani di ottimizzazione delle risorse ed economia circolare.",
            "Scoring ESG e preparazione per audit di conformità.",
            "Strategie di CSR strettamente collegate alla monetizzazione."
          ]
        },
        {
          id: "interim",
          title: "Interim Management",
          objective: "Gestione esecutiva o finanziaria a tempo parziale (fractional) per guidare fasi altamente complesse come fusioni, successioni familiari o lanci di marchi.",
          milestones: [
            "Direzione delle Operazioni e Interim CFO a tempo parziale.",
            "Lancio controllato di spin-off operative.",
            "Modelli di tesoreria analitici e controllo dei costi.",
            "Transizioni organizzative e protezione in contesti di crisi."
          ]
        },
        {
          id: "publico",
          title: "Settore Pubblico e Consorzi",
          objective: "Consulenza specifica in governance, finanziamento e controllo tecnico-amministrativo per amministrazioni pubbliche e alleanze miste.",
          milestones: [
            "Piani strategici di sviluppo territoriale e regionale.",
            "Coordinamento tecnico di partenariati pubblico-privati (PPP).",
            "Gestione e rendicontazione di fondi europei e sovvenzioni.",
            "Modelli completi di trasparenza e conformità pubblica."
          ]
        }
      ]
    },
    about: {
      tag: "Il Tuo Partner Strategico",
      title: "Cris Ballester",
      quote: "Non ti presenterò relazioni teoriche di 100 pagine che raccolgono polvere. Ti fornirò modelli di tesoreria molto utili e un controllo analitico che noterai direttamente nel tuo conto in banca.",
      p1: "Dopo oltre 15 anni alla guida di reparti di controllo di gestione e finanza aziendale a livello nazionale, ho deciso di focalizzare la mia consulenza di firma a Maiorca per portare gli strumenti delle grandi aziende nella realtà delle nostre PMI e istituzioni.",
      p2: "Comprendo la profonda complessità nel coordinare la redditività finanziaria con il patrimonio familiare o i consorzi misti. Il mio metodo è diretto e 'in-office': mi sposto nella tua sede, analizzo la realtà del tuo team sul campo e implementiamo insieme un modello sostenibile e redditizio.",
      sigTitle: "Cris Ballester",
      sigSubtitle: "Strategia di Firma & Direzione Finanziaria",
      sidebar: "Cris Ballester / Consulting / Maiorca / 2026",
      metrics: [
        {
          value: "+15 Anni",
          label: "Carriera Esecutiva",
          desc: "Guida delle finanze, della governance e del controllo operativo."
        },
        {
          value: "+50M €",
          label: "Capitale Gestito",
          desc: "In budget pubblici e privati ottimizzati."
        },
        {
          value: "100%",
          label: "Fattibilità Tecnica",
          desc: "Di progetti strategici analizzati ed eseguiti."
        }
      ],
      linkedinLabel: "Connettiti su LinkedIn"
    },
    speaking: {
      tag: "Thought Leadership",
      title: "Conversaciones Estratégicas",
      desc: "Trasferimento di metodologie pratiche di governance, fattibilità e economia circolare in forum esecutivi.",
      items: [
        {
          num: "01",
          title: "Conferenze e Keynote",
          desc: "Discorsi aziendali sulla sostenibilità ESG, il controllo di gestione e la finanza aziendale in grandi auditorium."
        },
        {
          num: "02",
          title: "Tavole Rotonde",
          desc: "Dibattito tecnico e confronto di idee insieme a leader del settore."
        },
        {
          num: "03",
          title: "Masterclass Esecutive",
          desc: "Sessioni di formazione avanzata in finanza e controllo di gestione per dirigenti."
        },
        {
          num: "04",
          title: "Workshop Interattivi",
          desc: "Co-progettazione di modelli di governance e protocolli operativi con team ad alte prestazioni."
        }
      ]
    },
    contact: {
      tag: "Briefing Riservato",
      title: "Pronto a ordinare e attivare il tuo progetto?",
      desc: "Per preservare la riservatezza strategica della tua organizzazione, completa questo briefing strutturato. Verrà generata un'e-mail formale crittografata pronta per essere rivista e inviata direttamente.",
      formTitle: "Briefing Operativo e Finanziario",
      labelName: "Nome e Cognome",
      labelCompany: "Nome della tua Organizzazione",
      labelEmail: "E-mail di Contatto",
      labelMessage: "Quale collo di bottiglia operativo o situazione sta affrontando il tuo team?",
      placeholderMessage: "Ad es. Disaccordi nei comitati, necessità di un modello di tesoreria per l'espansione o analisi di fattibilità di una nuova linea...",
      labelBudget: "Budget stimato dell'iniziativa",
      placeholderBudget: "Ad es. 20k - 50k €, da definire, etc.",
      labelPrivacy: "Accetto i termini legali e l'informativa sulla privacy del portale.",
      btnCopy: "Copia il Briefing negli Appunti",
      btnMailto: "Apri nel Mio Client E-mail",
      btnSending: "Elaborazione del Briefing...",
      successTitle: "Briefing Generato!",
      successDesc: "Abbiamo strutturato il briefing per la tua sicurezza. Di seguito puoi copiare i dati generati per inviarli tramite il tuo canale aziendale riservato, o aprire direttamente il tuo gestore di posta.",
      copySuccess: "Copiato con Successo!",
      emailSubject: "Briefing Consulenza Strategica - Cris Ballester"
    },
    legal: {
      notice: {
        title: "Note Legali",
        h1: "1. Informazioni Generali",
        p1: "In conformità a quanto disposto dall'articolo 10 della Legge 34/2002, dell'11 luglio, sui Servizi della Società dell'Informazione e del Commercio Elettronico (LSSI-CE), si informa che questo sito web (crisballester.com) è di proprietà esclusiva di Cristina Ballester, professionista autonoma con domicilio nel comune di Santa Eugenia, Maiorca, Spagna. E-mail di contatto: hola@crisballester.com.",
        h2: "2. Proprietà Intellettuale",
        p2: "Tutti i contenuti del sito web, inclusi testi, progetti grafici, interfacce, loghi, immagini e icone, sono protetti da diritti di proprietà intellettuale e industriale di proprietà di Cris Ballester o dei suoi rispettivi licenzianti. È vietata qualsiasi riproduzione, distribuzione o trasformazione senza previa autorizzazione scritta.",
        h3: "3. Limitazione di Responsabilità",
        p3: "L'uso di questo sito web è puramente informativo e professionale. Cris Ballester non è responsabile per danni derivanti da interferenze, omissioni, virus informatici o disconnessioni nel funzionamento operativo di questo sistema causati da motivi indipendenti dal suo controllo.",
        h4: "4. Legge Applicabile e Giurisdizione",
        p4: "Per la risoluzione di tutte le controversie o questioni relative a questo sito web o alle attività svolte su di esso, si applicherà la legislazione spagnola, essendo competenti i tribunali di Palma di Maiorca."
      },
      privacy: {
        title: "Informativa sulla Privacy",
        p1: "In conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) e con la Legge Organica 3/2018, del 5 dicembre (LOPDGDD), vi informiamo su come trattiamo i vostri dati personali.",
        h2: "Titolare del Trattamento",
        p2: "Il titolare del trattamento dei vostri dati è Cristina Ballester, residente a Santa Eugenia, Maiorca, Spagna. E-mail: hola@crisballester.com.",
        h3: "Finalità del Trattamento",
        p3: "Trattiamo le informazioni fornite tramite il modulo di contatto esclusivamente per risolvere le vostre domande, gestire le vostre richieste professionali e stabilire una relazione commerciale basata sui servizi di consulenza o tutoraggio esecutivo offerti.",
        h4: "Base Giuridica",
        p4: "La base legale per il trattamento dei vostri dati è il consenso espresso e inequivocabile fornito spuntando attivamente la casella di accettazione in calce al modulo.",
        h5: "Destinatari e Trasferimenti",
        p5: "I dati raccolti non saranno trasferiti in nessun caso a terzi estranei al titolare del sito web, salvo obbligo legale.",
        h6: "Periodo di Conservazione",
        p6: "I vostri dati personali saranno conservati per il tempo strettamente necessario a rispondere alla vostra richiesta di informazioni e, in caso di instaurazione di un successivo rapporto professionale, durante la vigenza dello stesso.",
        h7: "I Vostri Diritti",
        p7: "Avete il diritto di accedere ai vostri dati personali, richiedere la rettifica dei dati inesatti o richiederne la cancellazione quando i dati non sono più necessari. Per esercitare questi diritti, potete inviare un'e-mail a hola@crisballester.com allegando una prova valida della vostra identità."
      },
      cookies: {
        title: "Informativa sui Cookie",
        h1: "Impegno Cookie-Free!",
        p1: "Su questo sito web crediamo fermamente nella privacy e nella semplicità tecnologica. Pertanto, dichiariamo con orgoglio che questo sito web NON utilizza alcun tipo di cookie per tracciare, profilare o analizzare il vostro comportamento di navigazione.",
        h2: "Cosa significa questo per te?",
        ul: [
          "Nessun tracciatore di terze parti: Non utilizziamo Google Analytics, Facebook Pixels o altri sistemi che depositano cookie pubblicitari o statistici sul vostro browser. La vostra navigazione è completamente anonima.",
          "Rispetto per la tua privacy: Non installando cookie non essenziali, le normative europee ci esentano completamente dagli obblighi relativi al banner dei cookie. Ciò si traduce in tempi di caricamento più rapidi e nel massimo rispetto per i tuoi dati."
        ],
        h3: "Archiviazione Locale Necessaria",
        p3: "L'unico elemento tecnico salvato sul dispositivo è una variabile di configurazione della lingua nella memoria locale del browser (localStorage) con la chiave 'preferred-language'. Questa variabile memorizza solo la preferenza di lingua selezionata (ad es. 'es' o 'ca') affinché il sito si carichi nella vostra lingua per impostazione predefinita al vostro ritorno."
      }
    },
    copyright: "© 2026 CrisBallester.com. Tutti i diritti riservati. Sviluppo web da <a href='https://websmallorca.es/' target='_blank' class='hover:text-white transition-colors underline'>Webs Mallorca</a>.",
    footer_col1_title: "Navigazione",
    footer_col2_title: "Servizi",
    footer_col3_title: "Contatto"
  },
  de: {
    nav: {
      home: "Startseite",
      challenges: "Herausforderungen",
      services: "Dienstleistungen",
      about: "Über Mich",
      speaking: "Gespräche",
      contact: "Kontakt",
      cta: "Lassen Sie uns reden"
    },
    hero: {
      tag: "Mindset & Direkte Beratung",
      title: "Ich begleite Unternehmen, Institutionen und Führungsteams dabei, strategische und wirkungsvolle Projekte zu ordnen, zu aktivieren und tragfähig zu machen.",
      highlight1: "organisieren",
      highlight2: "aktivieren",
      highlight3: "tragfähig zu machen",
      desc: "Operative Klarheit, analytische Liquiditätskontrolle und Nachhaltigkeit integriert in Ihre operative Marge.",
      btnServices: "Dienstleistungen sehen",
      btnContact: "Briefing anfordern",
      galleryTitle: "Projektgalerie",
      galleryLabel1: "Stein & Tradition — Mallorca",
      galleryLabel2: "Nachhaltiges Design & Wachstum"
    },
    challenges: {
      tag: "Das Führungsszenario",
      title: "Organisatorische Unsicherheit überwinden",
      desc: "Das Management dynamischer Organisationen erfordert das Erkennen des genauen Engpasses und die Anwendung methodischer Strenge gegenüber der täglichen Trägheit.",
      warningLabel: "WARNUNGSSYMPTOM",
      proposalLabel: "STRATEGISCHER VORSCHLAG",
      items: [
        {
          num: "01",
          title: "Fehlender Strategischer Fokus",
          symptom: "Die tägliche Dringlichkeit verwässert Führungsentscheidungen, und Gremien debattieren, ohne zu tragfähigen Plänen zu gelangen.",
          proposal: "Führungsentscheidungen strukturieren, Hebelprojekte priorisieren und fokussierte Arbeitsstunden schützen."
        },
        {
          num: "02",
          title: "Trägheit bei der Umsetzung",
          symptom: "Der Übergang von einer hervorragenden Geschäftsidee zu einem tragfähigen operativen Plan scheitert oft an unklaren Zuständigkeiten.",
          proposal: "Die konzeptionelle Strategie in einen Fahrplan mit wöchentlichen Indikatoren und abgestimmten Zuständigkeiten umwandeln."
        },
        {
          num: "03",
          title: "Unsicherheit bei der Tragfähigkeit",
          symptom: "Einführung neuer Geschäftsbereiche oder Produkte ohne vorheriges analytisches Liquiditätsmodell, wodurch Cashflow verbrannt wird.",
          proposal: "Die finanzielle Tragfähigkeit durch klare Cashflow-Vorlagen und strenge Kostenkontrolle prüfen und modellieren."
        },
        {
          num: "04",
          title: "Komplexität in der Governance",
          symptom: "Technische Blockaden in der öffentlich-privaten Abstimmung oder ungelöste Spannungen in der Nachfolge von Familienunternehmen.",
          proposal: "Technische Governance-Protokolle entwerfen, die eine unabhängige externe Prozessvermittlung erleichtern."
        }
      ]
    },
    services: {
      tag: "Fachgebiete",
      title: "Strategische Dienste",
      desc: "Führungslösungen, die darauf ausgerichtet sind, das Organigramm zu ordnen, die Liquidität zu sichern und die operative Umsetzung zu aktivieren.",
      objectiveLabel: "ALLGEMEINES ZIEL",
      milestonesLabel: "SCHLÜSSELMEILENSTEINE DIESES PFEILERS",
      pillars: [
        {
          id: "mentoria",
          title: "Executive Mentoring",
          objective: "Vertrauliche High-Level-Begleitung, um die Prioritäten des Managers zu ordnen, komplexe Entscheidungsfindungen zu mäßigen und die Gremienkultur zu einen.",
          milestones: [
            "Ausrichtung von Aufsichtsräten und Führungsgremien.",
            "Change Management und Zusammenhalt des mittleren Managements.",
            "Protokolle für schnelle strategische Entscheidungen.",
            "Führungsentwicklung unter operativem Druck."
          ]
        },
        {
          id: "consultoria",
          title: "Strategische Beratung",
          objective: "Die operative Effizienz prüfen, reale Engpässe identifizieren und einen optimierten, automatisierten Workflow mit Fokus auf die Vertriebsleistung entwerfen.",
          milestones: [
            "Umfassende Audits zur betrieblichen Effizienz.",
            "Kartierung, Umstrukturierung und Workflow-Automatisierung.",
            "Entwurf von 3-Jahres-Strategieplänen.",
            "Implementierung von Dashboards und Key Performance Indicators (KPIs)."
          ]
        },
        {
          id: "esg",
          title: "Tragfähige Nachhaltigkeit",
          objective: "Nachhaltigkeitskriterien (ESG) pragmatisch, realistisch und rentabel in die operative Struktur Ihres Unternehmens integrieren.",
          milestones: [
            "Reale Diagnosen der tragfähigen Wirkung und Wesentlichkeit.",
            "Pläne zur Ressourcenoptimierung und Kreislaufwirtschaft.",
            "ESG-Scoring und Vorbereitung auf Compliance-Audits.",
            "Eng mit der Wertschöpfung verbundene CSR-Strategien."
          ]
        },
        {
          id: "interim",
          title: "Interim Management",
          objective: "Teilzeit- (Fractional-) Operations- oder Finanzmanagement zur Leitung hochkomplexer Phasen wie Fusionen, Familiennachfolge oder Markenlaunches.",
          milestones: [
            "Teilzeit-Operationsleitung und Interim-CFO.",
            "Kontrollierter Start von operativen Spin-offs.",
            "Analytische Cashflow-Modelle und Kostenkontrolle.",
            "Organisatorische Übergänge und Absicherung in Krisenzeiten."
          ]
        },
        {
          id: "publico",
          title: "Öffentlicher Sektor & Konsortien",
          objective: "Spezialisierte Beratung in den Bereichen Governance, Finanzierung und technisch-administrative Kontrolle für öffentliche Verwaltungen und gemischte Allianzen.",
          milestones: [
            "Strategische territoriale und regionale Entwicklungspläne.",
            "Technische Koordination von öffentlich-privaten Partnerschaften (ÖPP).",
            "Verwaltung und Nachweis von europäischen Mitteln und Zuschüssen.",
            "Umfassende Modelle für öffentliche Transparenz und Compliance."
          ]
        }
      ]
    },
    about: {
      tag: "Ihr Strategischer Partner",
      title: "Cris Ballester",
      quote: "Ich werde Ihnen keine 100-seitigen theoretischen Berichte vorlegen, die verstauben. Ich liefere Ihnen äußerst nützliche Liquiditätsvorlagen und eine analytische Kontrolle, die Sie direkt auf Ihrem Bankkonto sehen werden.",
      p1: "Nach mehr als 15 Jahren an der Spitze von Controlling- und Unternehmensfinanzabteilungen auf nationaler Ebene habe ich mich entschlossen, meine Kanzleiberatung auf Mallorca zu gründen, um KMUs und Institutionen Werkzeuge für Großunternehmen an die Hand zu geben.",
      p2: "Ich verstehe die tiefen Komplexitäten, die sich aus der Abstimmung der Rentabilität des Unternehmens mit dem Familienvermögen und der Führung gemischter strategischer Allianzen ergeben. Meine Arbeitsweise ist direkt und vor Ort: Ich komme in Ihre Zentrale, analysiere die operativen Realitäten Ihres Teams auf dem Feld und implementiere gemeinsam mit Ihnen ein rentables, organisiertes Modell mit echter Wirkung.",
      sigTitle: "Cris Ballester",
      sigSubtitle: "Kanzleistrategie & Finanzmanagement",
      sidebar: "Cris Ballester / Consulting / Mallorca / 2026",
      metrics: [
        {
          value: "+15 Jahre",
          label: "Führungslaufbahn",
          desc: "Leitung von Finanzen, Governance und operativer Kontrolle."
        },
        {
          value: "+50M €",
          label: "Verwaltetes Kapital",
          desc: "In optimierten öffentlichen und privaten Budgets."
        },
        {
          value: "100%",
          label: "Technische Tragfähigkeit",
          desc: "Von analysierten und ausgeführten strategischen Projekten."
        }
      ],
      linkedinLabel: "Auf LinkedIn vernetzen"
    },
    speaking: {
      tag: "Thought Leadership",
      title: "Strategische Gespräche",
      desc: "Vermittlung praktischer Methoden für Governance, Tragfähigkeit und Kreislaufwirtschaft in Executive-Foren.",
      items: [
        {
          num: "01",
          title: "Keynotes & Konferenzen",
          desc: "Unternehmensvorträge über ESG-Tragfähigkeit, Controlling und Unternehmensfinanzen in großen Auditorien."
        },
        {
          num: "02",
          title: "Podiumsdiskussionen",
          desc: "Technische Debatten und Meinungsaustausch an der Seite von Branchenführern."
        },
        {
          num: "03",
          title: "Executive Masterclasses",
          desc: "Fortgeschrittene Schulungsveranstaltungen in Finanzwesen und Controlling für Führungskräfte."
        },
        {
          num: "04",
          title: "Interaktive Workshops",
          desc: "Gemeinsame Gestaltung von Governance-Modellen und operativen Protokollen mit Hochleistungsteams."
        }
      ]
    },
    contact: {
      tag: "Vertrauliches Briefing",
      title: "Bereit, Ihr Projekt zu ordnen und zu aktivieren?",
      desc: "Um die strategische Vertraulichkeit Ihrer Organisation zu wahren, füllen Sie bitte dieses strukturierte Briefing aus. Es wird eine formelle, verschlüsselte E-Mail generiert, die Sie direkt überprüfen und senden können.",
      formTitle: "Operatives & Finanzielles Briefing",
      labelName: "Vor- und Nachname",
      labelCompany: "Name der Organisation",
      labelEmail: "Kontakt-E-Mail",
      labelMessage: "Vor welchem operativen Engpass oder welcher Situation steht Ihr Team?",
      placeholderMessage: "Z.B. Unstimmigkeiten in Gremien, Bedarf an einem Liquiditätsmodell zur Expansion oder Tragfähigkeitsanalyse einer neuen Linie...",
      labelBudget: "Geschätztes Budget der Initiative",
      placeholderBudget: "Z.B. 20k - 50k €, noch zu definieren, etc.",
      labelPrivacy: "Ich akzeptiere die rechtlichen Bedingungen und die Datenschutzerklärung des Portals.",
      btnCopy: "Briefing in die Zwischenablage kopieren",
      btnMailto: "In Meinem E-Mail-Programm Öffnen",
      btnSending: "Briefing wird verarbeitet...",
      successTitle: "Briefing Generiert!",
      successDesc: "Wir haben das Briefing zu Ihrer Sicherheit strukturiert. Unten können Sie die generierten Daten kopieren, um sie über Ihren vertraulichen Unternehmenskanal zu senden, oder Ihren E-Mail-Manager direkt öffnen.",
      copySuccess: "Erfolgreich Kopiert!",
      emailSubject: "Briefing für Strategische Beratung - Cris Ballester"
    },
    legal: {
      notice: {
        title: "Impressum",
        h1: "1. Allgemeine Informationen",
        p1: "In Übereinstimmung mit Artikel 10 des Gesetzes 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSI-CE) wird darauf hingewiesen, dass diese Website (crisballester.com) im ausschließlichen Eigentum von Cristina Ballester steht, einer selbstständigen Freiberuflerin mit Wohnsitz in Santa Eugenia, Mallorca, Spanien. Kontakt-E-Mail: hola@crisballester.com.",
        h2: "2. Geistiges Eigentum",
        p2: "Alle Inhalte der Website, einschließlich Texte, grafische Entwürfe, Schnittstellen, Logos, Bilder und Symbole, sind durch geistige und gewerbliche Eigentumsrechte geschützt, die Eigentum von Cris Ballester oder ihrer jeweiligen Lizenzgeber sind. Jede Vervielfältigung, Verbreitung oder Umwandlung ohne vorherige schriftliche Genehmigung ist untersagt.",
        h3: "3. Haftungsbeschränkung",
        p3: "Die Nutzung dieser Website dient rein informativen und beruflichen Zwecken. Cris Ballester haftet nicht für Schäden, die durch Störungen, Auslassungen, Computerviren oder Unterbrechungen im Betrieb dieses Systems aus Gründen entstehen, die außerhalb ihrer Kontrolle liegen.",
        h4: "4. Anwendbares Recht und Gerichtsstand",
        p4: "Für die Beilegung aller Streitigkeiten oder Fragen im Zusammenhang mit dieser Website oder den darauf entwickelten Aktivitäten gilt die spanische Gesetzgebung, wobei die Gerichte von Palma de Mallorca zuständig sind."
      },
      privacy: {
        title: "Datenschutzerklärung",
        p1: "In Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO) und dem Organgesetz 3/2018 vom 5. Dezember (LOPDGDD) informieren wir Sie darüber, wie wir Ihre personenbezogenen Daten verarbeiten.",
        h2: "Verantwortlicher für die Verarbeitung",
        p2: "Die Verantwortliche für die Verarbeitung Ihrer Daten ist Cristina Ballester, wohnhaft in Santa Eugenia, Mallorca, Spanien. E-Mail: hola@crisballester.com.",
        h3: "Zweck der Verarbeitung",
        p3: "Wir verarbeiten die über das Kontaktformular bereitgestellten Informationen ausschließlich zur Beantwortung Ihrer Fragen, zur Verwaltung Ihrer geschäftlichen Anfragen und zur Aufnahme einer Geschäftsbeziehung auf der Grundlage der angebotenen Beratungs- oder Executive Mentoring-Dienste.",
        h4: "Rechtsgrundlage der Verarbeitung",
        p4: "Die Rechtsgrundlage für die Verarbeitung Ihrer Daten ist die ausdrückliche und eindeutige Einwilligung, die durch aktives Ankreuzen des Akzeptanzkästchens am Ende des Formulars erteilt wird.",
        h5: "Empfänger und Übermittlungen",
        p5: "Die erhobenen Daten werden unter keinen Umständen an Dritte außerhalb der Website-Eigentümerin weitergegeben, es sei denn, es besteht eine gesetzliche Verpflichtung dazu.",
        h6: "Aufbewahrungsfrist",
        p6: "Ihre personenbezogenen Daten werden so lange aufbewahrt, wie es zur Beantwortung Ihrer Informationsanfrage unbedingt erforderlich ist, und im Falle einer anschließlichen Geschäftsbeziehung für die Dauer deren Gültigkeit.",
        h7: "Ihre Rechte",
        p7: "Sie haben das Recht auf Auskunft über Ihre personenbezogenen Daten, das Recht auf Berichtigung unrichtiger Daten oder das Recht auf Löschung, wenn die Daten nicht mehr benötigt werden. Um diese Rechte auszuüben, können Sie eine E-Mail an hola@crisballester.com senden und einen gültigen Identitätsnachweis beifügen."
      },
      cookies: {
        title: "Cookie-Richtlinie",
        h1: "Cookie-Freies Versprechen!",
        p1: "Auf dieser Website glauben wir fest an Privatsphäre und technologische Einfachheit. Daher erklären wir stolz, dass diese Website KEINERLEI Cookies verwendet, um Ihr Surfverhalten zu verfolgen, Profile zu erstellen oder zu analysieren.",
        h2: "Was bedeutet das für Sie?",
        ul: [
          "Keine Tracker von Drittanbietern: Wir verwenden weder Google Analytics noch Facebook Pixels oder andere Systeme, die Werbe- oder statistische Cookies von Drittanbietern in Ihrem Browser hinterlegen. Ihr Surfen ist absolut anonym.",
          "Respekt für Ihre Privatsphäre: Da keine nicht notwendigen Cookies installiert werden, entbinden uns die europäischen Vorschriften vollständig von der Pflicht zur Anzeige eines Cookie-Banners. Dies führt zu schnelleren Ladezeiten und absolutem Respekt für Ihre Daten."
        ],
        h3: "Erforderlicher Lokaler Speicher",
        p3: "Das einzige technische Element, das auf Ihrem Gerät gespeichert wird, ist eine Sprachkonfigurationsvariable im lokalen Speicher Ihres Browsers (localStorage) unter dem Schlüssel 'preferred-language'. Diese Variable speichert nur Ihre gewählte Sprachpräferenz (z.B. 'es' oder 'ca'), damit die Website bei Ihrer Rückkehr standardmäßig in Ihrer Sprache geladen wird."
      }
    },
    copyright: "© 2026 CrisBallester.com. Alle Rechte vorbehalten. Webentwicklung durch <a href='https://websmallorca.es/' target='_blank' class='hover:text-white transition-colors underline'>Webs Mallorca</a>.",
    footer_col1_title: "Navigation",
    footer_col2_title: "Dienstleistungen",
    footer_col3_title: "Kontakt"
  }
};
