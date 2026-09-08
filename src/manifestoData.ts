export type TriggerKey =
  | 'execution'
  | 'treasury'
  | 'governance'
  | 'interim'
  | 'sustainability'
  | 'consortia'
  | 'cris'
  | 'awards'
  | 'projects'
  | 'location';

export interface DossierMetric {
  value: string;
  label: string;
}

export interface DossierProject {
  title: string;
  location: string;
  year: string;
  image: string;
  desc: string;
}

export interface DossierItem {
  id: TriggerKey;
  tag: string;
  title: string;
  subtitle: string;
  metric?: DossierMetric;
  symptomTitle?: string;
  symptom?: string;
  solutionTitle?: string;
  solution?: string;
  milestonesTitle?: string;
  milestones?: string[];
  quote?: string;
  awardsList?: {
    year: string;
    name: string;
    organization: string;
    focus: string;
    link?: string;
  }[];
  projects?: DossierProject[];
  ctaText?: string;
  ctaAction?: 'briefing' | 'projects' | 'external' | 'linkedin' | 'whatsapp';
  ctaUrl?: string;
}

export interface ManifestoParagraphPart {
  text: string;
  trigger?: TriggerKey;
  triggerLabel?: string;
}

export interface ManifestoData {
  taglineSignature: string;
  awardsNavText: string;
  awardsBadge: string;
  ctaBriefing: string;
  dossierClose: string;
  dossierBackToManifesto: string;
  helperHint: string;
  linkAwards: string;
  linkProjects: string;
  viewfinderTitle: string;
  viewfinderSubtitle: string;
  viewfinderHonors: string;
  viewfinderStat1: string;
  viewfinderStat2: string;
  viewfinderStat3: string;
  viewfinderLiveBadge: string;
  viewfinderHoverHint: string;
  viewfinderOpenDossier: string;
  p1: ManifestoParagraphPart[];
  p2: ManifestoParagraphPart[];
  p3: ManifestoParagraphPart[];
  dossiers: Record<TriggerKey, DossierItem>;
  briefingModal: {
    tag: string;
    title: string;
    desc: string;
    scenariosLabel: string;
    scenarios: { id: string; label: string }[];
    labelName: string;
    labelOrg: string;
    labelEmail: string;
    labelNotes: string;
    btnGenerate: string;
    copySuccess: string;
    btnCopy: string;
    btnEmail: string;
    btnWhatsApp: string;
  };
}

export const manifestoData: Record<'es' | 'ca' | 'en' | 'it' | 'de', ManifestoData> = {
  es: {
    taglineSignature: "Consultoría de Firma",
    awardsNavText: "Premios",
    awardsBadge: "Royal Academy Prize '24 · OBEL Award '26",
    ctaBriefing: "Agendar Briefing",
    dossierClose: "Cerrar",
    dossierBackToManifesto: "Volver al Manifiesto",
    helperHint: "Pulsa en cualquier término resaltado para desplegar su dossier.",
    linkAwards: "Premios Internacionales",
    linkProjects: "Galería +50M€",
    viewfinderTitle: "Directora & Consultora de Firma",
    viewfinderSubtitle: "Ex-Directora General de Vivienda y Arquitectura · Economista",
    viewfinderHonors: "Reconocimiento Internacional",
    viewfinderStat1: "Licitados",
    viewfinderStat2: "Promociones",
    viewfinderStat3: "Justificados",
    viewfinderLiveBadge: "Inspección en tiempo real",
    viewfinderHoverHint: "Pasa el cursor sobre el texto",
    viewfinderOpenDossier: "Abrir Dossier Completo",
    p1: [
      { text: "La mayoría de las organizaciones no se detienen por falta de visión. Se bloquean por " },
      { text: "inercia en la ejecución", trigger: "execution" },
      { text: ", falta de " },
      { text: "control analítico de tesorería", trigger: "treasury" },
      { text: " y debilidad en la " },
      { text: "gobernanza de comités", trigger: "governance" },
      { text: "." }
    ],
    p2: [
      { text: "Soy " },
      { text: "Cris Ballester", trigger: "cris" },
      { text: ". Economista galardonada con el " },
      { text: "Royal Academy Architecture Prize", trigger: "awards" },
      { text: " y el " },
      { text: "OBEL Award", trigger: "awards" },
      { text: " por transformar más de " },
      { text: "+50M€ en proyectos e infraestructura", trigger: "projects" },
      { text: ". Con sede en " },
      { text: "Mallorca", trigger: "location" },
      { text: "." }
    ],
    p3: [
      { text: "Acompaño a empresas e instituciones como " },
      { text: "Interim CFO", trigger: "interim" },
      { text: " y consultora de firma, estructurando modelos de " },
      { text: "sostenibilidad rentable", trigger: "sustainability" },
      { text: " y liderando la articulación técnica de " },
      { text: "consorcios y alianzas público-privadas", trigger: "consortia" },
      { text: "." }
    ],
    dossiers: {
      execution: {
        id: "execution",
        tag: "Diagnóstico Operativo",
        title: "Inercia en la Ejecución",
        subtitle: "Desbloqueo de comités y activación de hojas de ruta con tracción real",
        metric: { value: "90 Días", label: "Protocolo de Tracción Operativa" },
        symptomTitle: "SÍNTOMA DE ALERTA",
        symptom: "Las decisiones de dirección se diluyen en debates circulares. Las ideas estratégicas no llegan a los mandos intermedios y mueren por falta de un calendario de hitos con responsables inequívocos.",
        solutionTitle: "PROTOCOLO DE INTERVENCIÓN",
        solution: "Traduzco la estrategia en una hoja de ruta ejecutiva con revisiones semanales, KPIs visuales y blindaje de las horas de foco directivo frente a la vorágine diaria.",
        milestonesTitle: "ENTREGABLES TANGIBLES",
        milestones: [
          "Alineamiento ejecutivo de consejos y mandos operativos.",
          "Matriz de priorización de proyectos palanca a 90 días.",
          "Cuadros de mando con indicadores semanales no negociables."
        ],
        ctaText: "Activar Hoja de Ruta",
        ctaAction: "briefing"
      },
      treasury: {
        id: "treasury",
        tag: "Control Financiero",
        title: "Control Analítico de Tesorería",
        subtitle: "Blindaje de la liquidez operativa y maximización del margen de explotación",
        metric: { value: "100%", label: "Visibilidad Real de Margen & Flujo de Caja" },
        symptomTitle: "SÍNTOMA DE ALERTA",
        symptom: "Crecimiento en facturación que no se traduce en liquidez. Lanzamiento de nuevas líneas de negocio sin modelado analítico previo, quemando caja y asumiendo sobrecostes no detectados.",
        solutionTitle: "PROTOCOLO DE INTERVENCIÓN",
        solution: "Audito la estructura de costes directos e indirectos, implanto plantillas de tesorería vivas y alineo la previsión de cobros y pagos con el margen real de la cuenta de resultados.",
        milestonesTitle: "ENTREGABLES TANGIBLES",
        milestones: [
          "Modelo predictivo de tesorería y flujo de caja a 12 meses.",
          "Auditoría analítica de márgenes por unidad de negocio.",
          "Protocolos de autorización de gasto y control de circulante."
        ],
        ctaText: "Auditar Tesorería",
        ctaAction: "briefing"
      },
      governance: {
        id: "governance",
        tag: "Órganos de Decisión",
        title: "Gobernanza de Comités",
        subtitle: "Mediación técnica independiente en consejos, relevos familiares y consorcios",
        metric: { value: "0 Sesgo", label: "Mediación Técnica Basada en Procesos" },
        symptomTitle: "SÍNTOMA DE ALERTA",
        symptom: "Tensiones no resueltas en comités de dirección, desacuerdos entre socios o relevos generacionales bloqueados por cargas emocionales en lugar de criterios técnicos.",
        solutionTitle: "PROTOCOLO DE INTERVENCIÓN",
        solution: "Diseño protocolos formales de gobernanza, clarifico el reparto de poderes de decisión y ejerzo de facilitadora neutral para desbloquear acuerdos estratégicos.",
        milestonesTitle: "ENTREGABLES TANGIBLES",
        milestones: [
          "Protocolos de sucesión y relevo generacional en empresas familiares.",
          "Reglamento y dinámica de comités de dirección ejecutivos.",
          "Mediación técnica neutral entre accionistas y comités mixtos."
        ],
        ctaText: "Consultar Protocolos",
        ctaAction: "briefing"
      },
      interim: {
        id: "interim",
        tag: "Dirección Fraccional",
        title: "Interim CFO & Dirección Estratégica",
        subtitle: "Liderazgo financiero y de operaciones 'in-office' a tiempo parcial",
        metric: { value: "+15 Años", label: "Trayectoria en Alta Dirección Corporativa" },
        symptomTitle: "ESCENARIO DE ACTUACIÓN",
        symptom: "Empresas en fases de transición crítica (fusiones, spin-offs, reestructuraciones o expansión rápida) donde contratar un CFO senior a tiempo completo es inviable o tardío.",
        solutionTitle: "PROTOCOLO DE INTERVENCIÓN",
        solution: "Me incorporo a tu comité directivo de forma fraccional (fractional executive). Tomo el control financiero y operativo, ordeno prioridades y piloto la transición con criterio corporativo de primer nivel.",
        milestonesTitle: "ENTREGABLES TANGIBLES",
        milestones: [
          "Dirección financiera y de operaciones a tiempo parcial.",
          "Modelado de viabilidad ante fusiones, adquisiciones o rondas.",
          "Capacitación de mandos financieros internos para la sucesión."
        ],
        ctaText: "Solicitar Interim CFO",
        ctaAction: "briefing"
      },
      sustainability: {
        id: "sustainability",
        tag: "Sostenibilidad Real",
        title: "Sostenibilidad Rentable (ESG Viable)",
        subtitle: "Directrices de impacto y economía circular que suman al margen económico",
        metric: { value: "ROI Directo", label: "Sostenibilidad Conectada a la Cuenta de Explotación" },
        symptomTitle: "SÍNTOMA DE ALERTA",
        symptom: "Memorias de RSC de 100 páginas que acumulan polvo y no generan tracción. Inversiones en sostenibilidad desconectadas del retorno financiero que son vistas como un gasto superfluo.",
        solutionTitle: "PROTOCOLO DE INTERVENCIÓN",
        solution: "Integro criterios ESG pragmáticos y economía circular directamente en la cadena de valor: reducción de costes por eficiencia material, scoring para financiación y monetización del impacto.",
        milestonesTitle: "ENTREGABLES TANGIBLES",
        milestones: [
          "Diagnóstico de materialidad económica y ahorro de recursos.",
          "Scoring ESG homologado para acceso a crédito y licitaciones.",
          "Estrategia de circularidad ligada al margen de explotación."
        ],
        ctaText: "Implantar ESG Rentable",
        ctaAction: "briefing"
      },
      consortia: {
        id: "consortia",
        tag: "Alianzas Complejas",
        title: "Consorcios & Alianzas Público-Privadas",
        subtitle: "Articulación técnica, gobernanza y justificación de grandes iniciativas",
        metric: { value: "+50M€", label: "Presupuestos Gestionados en Consorcios" },
        symptomTitle: "SÍNTOMA DE ALERTA",
        symptom: "Grandes oportunidades de colaboración público-privada o fondos europeos que fracasan por la fricción entre la burocracia administrativa y la exigencia de plazos empresariales.",
        solutionTitle: "PROTOCOLO DE INTERVENCIÓN",
        solution: "Aporto la doble mirada: conozco los mecanismos internos de la administración y la exigencia de rentabilidad del sector privado. Coordino consorcios mixtos con rigor técnico y justificación impecable.",
        milestonesTitle: "ENTREGABLES TANGIBLES",
        milestones: [
          "Estructuración jurídica y financiera de alianzas público-privadas (APPs).",
          "Gestión integral y justificación de fondos europeos (NextGen, FEDER).",
          "Planes estratégicos territoriales y proyectos de vivienda social."
        ],
        ctaText: "Consultar Alianzas",
        ctaAction: "briefing"
      },
      awards: {
        id: "awards",
        tag: "Reconocimientos Mundiales",
        title: "Royal Academy Prize & OBEL Award",
        subtitle: "La validación internacional de una economista transformando la gestión pública",
        quote: "«No soy arquitecta; soy economista. Los premios no reconocen únicamente los edificios terminados, sino la reinvención integral del sistema de gestión pública, compras locales y sostenibilidad económica que hizo posible su ejecución a escala.»",
        awardsList: [
          {
            year: "2026",
            name: "OBEL Award — Systems' Hack",
            organization: "The Henrik Frode Obel Foundation (Copenhague)",
            focus: "Galardón internacional que premia la reinvención y hackeo del sistema público de vivienda, diseño bioclimático y compras sostenibles.",
            link: "https://obelaward.org"
          },
          {
            year: "2024",
            name: "Royal Academy Architecture Prize",
            organization: "Royal Academy of Arts (Londres)",
            focus: "Premio anual concedido a Cris Ballester por su liderazgo en la supervisión de proyectos de vivienda social descarbonizada y bioregional en Baleares.",
            link: "https://www.royalacademy.org.uk"
          }
        ],
        ctaText: "Ver Proyectos Galardonados",
        ctaAction: "projects"
      },
      projects: {
        id: "projects",
        tag: "Infraestructura Real",
        title: "+50M€ en Activos Gestionados",
        subtitle: "Proyectos emblemáticos de vivienda social descarbonizada en Baleares",
        projects: [
          {
            title: "Salvador Espriu 39",
            location: "Palma, Mallorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_int1.png",
            desc: "8 viviendas sociales construidas en piedra de marés local y forjados de madera. Ejemplo internacional de arquitectura bioclimática de baja huella de carbono."
          },
          {
            title: "Pere Matutes 72",
            location: "Ibiza",
            year: "2018–2022",
            image: "/projects/pere_matutes_int.png",
            desc: "24 viviendas públicas con muros portantes de tierra y sistemas pasivos de ventilación, diseñadas junto a 08014 Arquitectura."
          },
          {
            title: "Olivera 62",
            location: "Magalluf-Calvià, Mallorca",
            year: "2018–2022",
            image: "/projects/olivera_ext.png",
            desc: "48 viviendas públicas diseñadas junto a LLOC Arquitectes, integrando ahorro energético radical en un entorno de alta demanda."
          },
          {
            title: "Salvador Espriu — Fachada Marés",
            location: "Palma, Mallorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_ext.png",
            desc: "Detalle constructivo de cantería tradicional balear aplicada a vivienda pública de vanguardia premiada por la Royal Academy."
          }
        ],
        ctaText: "Solicitar Asesoramiento en Proyectos",
        ctaAction: "briefing"
      },
      cris: {
        id: "cris",
        tag: "Socio Estratégico",
        title: "Cris Ballester Parets",
        subtitle: "Economista, Consultora de Firma & Estratega Directiva",
        metric: { value: "+15 Años", label: "Dirección Financiera, Institucional & ESG" },
        quote: "«No te entregaré informes teóricos de 100 páginas que acumulan polvo en una estantería. Te aportaré modelos analíticos de tesorería y una metodología de trabajo que notarás en el margen de tu cuenta de resultados.»",
        solutionTitle: "METODOLOGÍA DIRECTA & IN-OFFICE",
        solution: "Tras más de una década liderando finanzas corporativas, control de gestión y la dirección pública de presupuestos multimillonarios en Baleares, mi consultoría de firma aporta herramientas de gran corporación adaptadas a la realidad de empresas e instituciones dinámicas. Me desplazo a tu sede, analizo la realidad operativa sobre el terreno y construimos un modelo viable y blindado.",
        milestonesTitle: "ÁREAS DE INTERVENCIÓN",
        milestones: [
          "Mentoría y alineamiento confidencial de comités de dirección.",
          "Interim CFO y dirección fraccional de operaciones.",
          "Estructuración técnica de consorcios y proyectos estratégicos.",
          "Conferencias magistrales y workshops para directivos."
        ],
        ctaText: "Conectar en LinkedIn",
        ctaAction: "linkedin",
        ctaUrl: "https://www.linkedin.com/in/cris-ballester-parets-crisballesterp/"
      },
      location: {
        id: "location",
        tag: "Coordinadas Directivas",
        title: "Mallorca",
        subtitle: "Despacho privado en Santa Eugènia y cobertura nacional",
        symptomTitle: "COBERTURA",
        symptom: "Sede central en Santa Eugènia (Mallorca). Intervenciones in-office y acompañamiento directivo directo en Baleares, Madrid, Barcelona y proyectos internacionales.",
        solutionTitle: "CANALES PRIVADOS",
        solution: "Para preservar la confidencialidad de tu organización, puedes solicitar un briefing estratégico o contactar de forma directa a través de nuestros canales ejecutivos.",
        milestonesTitle: "CONTACTO DIRECTO",
        milestones: [
          "Correo: hola@crisballester.com",
          "Teléfono directo: +34 654 12 66 34",
          "Canal WhatsApp privado para agendas de dirección."
        ],
        ctaText: "Iniciar Briefing Confidencial",
        ctaAction: "briefing"
      }
    },
    briefingModal: {
      tag: "Briefing Confidencial",
      title: "Iniciar Conversación Estratégica",
      desc: "Selecciona el nudo operativo de tu organización para estructurar un despacho confidencial listo para enviar.",
      scenariosLabel: "¿Cuál es la prioridad de tu equipo?",
      scenarios: [
        { id: "ejecucion", label: "Inercia Operativa & Comités" },
        { id: "tesoreria", label: "Control de Tesorería & Margen" },
        { id: "interim", label: "Interim CFO / Dirección Fraccional" },
        { id: "consorcios", label: "Consorcios & Alianzas APPs" },
        { id: "esg", label: "Sostenibilidad Rentable (ESG)" }
      ],
      labelName: "Tu Nombre y Cargo",
      labelOrg: "Nombre de tu Organización",
      labelEmail: "Correo Corporativo",
      labelNotes: "¿Qué situación concreta necesitáis ordenar o activar?",
      btnGenerate: "Generar Despacho Confidencial",
      copySuccess: "¡Copiado al Portapapeles!",
      btnCopy: "Copiar al Portapapeles",
      btnEmail: "Abrir en mi Correo",
      btnWhatsApp: "Enviar por WhatsApp"
    }
  },
  ca: {
    taglineSignature: "Consultoria de Firma",
    awardsNavText: "Premis",
    awardsBadge: "Royal Academy Prize '24 · OBEL Award '26",
    ctaBriefing: "Agendar Briefing",
    dossierClose: "Tancar",
    dossierBackToManifesto: "Tornar al Manifest",
    helperHint: "Prem sobre qualsevol terme ressaltat per desplegar el seu dossier.",
    linkAwards: "Premis Internacionals",
    linkProjects: "Galeria +50M€",
    viewfinderTitle: "Directora i Consultora de Firma",
    viewfinderSubtitle: "Ex-Directora General d'Habitatge i Arquitectura · Economista",
    viewfinderHonors: "Reconeixement Internacional",
    viewfinderStat1: "Licitats",
    viewfinderStat2: "Promocions",
    viewfinderStat3: "Justificats",
    viewfinderLiveBadge: "Inspecció en temps real",
    viewfinderHoverHint: "Passa el cursor sobre el text",
    viewfinderOpenDossier: "Obrir Dossier Complet",
    p1: [
      { text: "La majoria d'organitzacions no s'aturen per manca de visió. Es bloquegen per " },
      { text: "inèrcia en l'execució", trigger: "execution" },
      { text: ", manca de " },
      { text: "control analític de tresoreria", trigger: "treasury" },
      { text: " i feblesa en la " },
      { text: "governança de comitès", trigger: "governance" },
      { text: "." }
    ],
    p2: [
      { text: "Sóc " },
      { text: "Cris Ballester", trigger: "cris" },
      { text: ". Economista guardonada amb el " },
      { text: "Royal Academy Architecture Prize", trigger: "awards" },
      { text: " i l'" },
      { text: "OBEL Award", trigger: "awards" },
      { text: " per transformar més de " },
      { text: "+50M€ en projectes i infraestructura", trigger: "projects" },
      { text: ". Amb seu a " },
      { text: "Mallorca", trigger: "location" },
      { text: "." }
    ],
    p3: [
      { text: "Acompanyo empreses i institucions com a " },
      { text: "Interim CFO", trigger: "interim" },
      { text: " i consultora de firma, estructurant models de " },
      { text: "sostenibilitat rendible", trigger: "sustainability" },
      { text: " i liderant l'articulació tècnica de " },
      { text: "consorcis i aliances públic-privades", trigger: "consortia" },
      { text: "." }
    ],
    dossiers: {
      execution: {
        id: "execution",
        tag: "Diagnòstic Operatiu",
        title: "Inèrcia en l'Execució",
        subtitle: "Desbloqueig de comitès i activació de fulls de ruta amb tracció real",
        metric: { value: "90 Dies", label: "Protocol de Tracció Operativa" },
        symptomTitle: "SÍMPTOMA D'ALERTA",
        symptom: "Les decisions de direcció es dilueixen en debats circulars. Les idees estratègiques no arriben als comandaments intermedis i moren per manca d'un calendari d'objectius amb responsables clars.",
        solutionTitle: "PROTOCOL D'INTERVENCIÓ",
        solution: "Tradueixo l'estratègia en un full de ruta executiu amb revisions setmanals, KPIs visuals i blindatge de les hores d'enfocament directiu davant la inèrcia diària.",
        milestonesTitle: "LLIURABLES TANGIBLES",
        milestones: [
          "Alineament executiu de consells i comandaments operatius.",
          "Matriu de priorització de projectes palanca a 90 dies.",
          "Quadres de comandament amb indicadors setmanals no negociables."
        ],
        ctaText: "Activar Full de Ruta",
        ctaAction: "briefing"
      },
      treasury: {
        id: "treasury",
        tag: "Control Financer",
        title: "Control Analític de Tresoreria",
        subtitle: "Blindatge de la liquiditat operativa i maximització del marge d'explotació",
        metric: { value: "100%", label: "Visibilitat Real de Marge & Flux de Caixa" },
        symptomTitle: "SÍMPTOMA D'ALERTA",
        symptom: "Creixement en facturació que no es tradueix en liquiditat. Llançament de noves línies de negoci sense modelat analític previ, cremant caixa i assumint sobrecostos no detectats.",
        solutionTitle: "PROTOCOL D'INTERVENCIÓ",
        solution: "Audito l'estructura de costos directes i indirectes, implanto plantilles de tresoreria vives i alinio la previsió de cobraments i pagaments amb el marge real del compte de resultats.",
        milestonesTitle: "LLIURABLES TANGIBLES",
        milestones: [
          "Model predictiu de tresoreria i flux de caixa a 12 mesos.",
          "Auditoria analítica de marges per unitat de negoci.",
          "Protocols d'autorització de despesa i control de circulant."
        ],
        ctaText: "Auditar Tresoreria",
        ctaAction: "briefing"
      },
      governance: {
        id: "governance",
        tag: "Òrgans de Decisió",
        title: "Governança de Comitès",
        subtitle: "Mediació tècnica independent en consells, relleus familiars i consorcis",
        metric: { value: "0 Fricció", label: "Mediació Tècnica Basada en Processos" },
        symptomTitle: "SÍMPTOMA D'ALERTA",
        symptom: "Tensions no resoltes en comitès de direcció, desacords entre socis o relleus generacionals bloquejats per càrregues emocionals en lloc de criteris tècnics.",
        solutionTitle: "PROTOCOL D'INTERVENCIÓ",
        solution: "Dissenyo protocols formals de governança, clarifico el repartiment de poders de decisió i exerceixo de facilitadora neutral per desbloquejar acords estratègics.",
        milestonesTitle: "LLIURABLES TANGIBLES",
        milestones: [
          "Protocols de successió i relleu generacional a empreses familiars.",
          "Reglament i dinàmica de comitès de direcció executius.",
          "Mediació tècnica neutral entre accionistes i comitès mixtos."
        ],
        ctaText: "Consultar Protocols",
        ctaAction: "briefing"
      },
      interim: {
        id: "interim",
        tag: "Direcció Fraccional",
        title: "Interim CFO & Direcció Estratègica",
        subtitle: "Lideratge financer i d'operacions 'in-office' a temps parcial",
        metric: { value: "+15 Anys", label: "Trajectòria en Alta Direcció Corporativa" },
        symptomTitle: "ESCENARI D'ACTUACIÓ",
        symptom: "Empreses en fases de transició crítica (fusions, spin-offs, reestructuracions o expansió ràpida) on contractar un CFO sènior a temps complet és inviable o tardà.",
        solutionTitle: "PROTOCOL D'INTERVENCIÓ",
        solution: "M'incorporo al teu comitè directiu de manera fraccional (fractional executive). Prenc el control financer i operatiu, ordeno prioritats i piloto la transició amb criteri corporatiu de primer nivell.",
        milestonesTitle: "LLIURABLES TANGIBLES",
        milestones: [
          "Direcció financera i d'operacions a temps parcial.",
          "Modelat de viabilitat davant fusions, adquisicions o rondes.",
          "Capacitació de comandaments financers interns per a la successió."
        ],
        ctaText: "Sol·licitar Interim CFO",
        ctaAction: "briefing"
      },
      sustainability: {
        id: "sustainability",
        tag: "Sostenibilitat Real",
        title: "Sostenibilitat Rendible (ESG Viable)",
        subtitle: "Directrius d'impacte i economia circular que sumen al marge econòmic",
        metric: { value: "ROI Directe", label: "Sostenibilitat Connectada al Compte d'Explotació" },
        symptomTitle: "SÍMPTOMA D'ALERTA",
        symptom: "Memòries d'RSC de 100 pàgines que acumulen pols i no generen tracció. Inversions en sostenibilitat desconnectades del retorn financer que són vistes com una despesa supèrflua.",
        solutionTitle: "PROTOCOL D'INTERVENCIÓ",
        solution: "Integro criteris ESG pragmàtics i economia circular directament a la cadena de valor: reducció de costos per eficiència material, scoring per a finançament i monetització de l'impacte.",
        milestonesTitle: "LLIURABLES TANGIBLES",
        milestones: [
          "Diagnòstic de materialitat econòmica i estalvi de recursos.",
          "Scoring ESG homologat per a accés a crèdit i licitacions.",
          "Estratègia de circularitat lligada al marge d'explotació."
        ],
        ctaText: "Implantar ESG Rendible",
        ctaAction: "briefing"
      },
      consortia: {
        id: "consortia",
        tag: "Aliances Complexes",
        title: "Consorcis & Aliances Públic-Privades",
        subtitle: "Articulació tècnica, governança i justificació de grans iniciatives",
        metric: { value: "+50M€", label: "Pressupostos Gestionats en Consorcis" },
        symptomTitle: "SÍMPTOMA D'ALERTA",
        symptom: "Grans oportunitats de col·laboració públic-privada o fons europeus que fracassen per la fricció entre la burocràcia administrativa i l'exigència de terminis empresarials.",
        solutionTitle: "PROTOCOL D'INTERVENCIÓ",
        solution: "Aporto la doble mirada: conec els mecanismes interns de l'administració i l'exigència de rendibilitat del sector privat. Coordino consorcis mixtos amb rigor tècnic i justificació impecable.",
        milestonesTitle: "LLIURABLES TANGIBLES",
        milestones: [
          "Estructuració jurídica i financera d'aliances públic-privades (APPs).",
          "Gestió integral i justificació de fons europeus (NextGen, FEDER).",
          "Plans estratègics territorials i projectes d'habitatge social."
        ],
        ctaText: "Consultar Aliances",
        ctaAction: "briefing"
      },
      awards: {
        id: "awards",
        tag: "Reconeixements Mundials",
        title: "Royal Academy Prize & OBEL Award",
        subtitle: "La validació internacional d'una economista transformant la gestió pública",
        quote: "«No sóc arquitecta; sóc economista. Els premis no reconeixen únicament els edificis acabats, sinó la reinvenció integral del sistema de gestió pública, compres locals i sostenibilitat econòmica que va fer possible la seva execució a escala.»",
        awardsList: [
          {
            year: "2026",
            name: "OBEL Award — Systems' Hack",
            organization: "The Henrik Frode Obel Foundation (Copenhaguen)",
            focus: "Guardó internacional que premia la reinvenció i transformació del sistema públic d'habitatge, disseny bioclimàtic i compres sostenibles.",
            link: "https://obelaward.org"
          },
          {
            year: "2024",
            name: "Royal Academy Architecture Prize",
            organization: "Royal Academy of Arts (Londres)",
            focus: "Premi anual concedit a Cris Ballester pel seu lideratge en la supervisió de projectes d'habitatge social descarbonitzat i bioregional a les Balears.",
            link: "https://www.royalacademy.org.uk"
          }
        ],
        ctaText: "Veure Projectes Guardonats",
        ctaAction: "projects"
      },
      projects: {
        id: "projects",
        tag: "Infraestructura Real",
        title: "+50M€ en Actius Gestionats",
        subtitle: "Projectes emblemàtics d'habitatge social descarbonitzat a les Balears",
        projects: [
          {
            title: "Salvador Espriu 39",
            location: "Palma, Mallorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_int1.png",
            desc: "8 habitatges socials construïts en pedra de marès local i forjats de fusta. Exemple internacional d'arquitectura bioclimàtica de baixa petjada de carboni."
          },
          {
            title: "Pere Matutes 72",
            location: "Eivissa",
            year: "2018–2022",
            image: "/projects/pere_matutes_int.png",
            desc: "24 habitatges públics amb murs portants de terra i sistemes passius de ventilació, dissenyats al costat de 08014 Arquitectura."
          },
          {
            title: "Olivera 62",
            location: "Magalluf-Calvià, Mallorca",
            year: "2018–2022",
            image: "/projects/olivera_ext.png",
            desc: "48 habitatges públics dissenyats al costat de LLOC Arquitectes, integrant estalvi energètic radical en un entorn d'alta demanda."
          },
          {
            title: "Salvador Espriu — Façana Marès",
            location: "Palma, Mallorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_ext.png",
            desc: "Detall constructiu de pedra tradicional balear aplicada a habitatge públic d'avantguarda premiat per la Royal Academy."
          }
        ],
        ctaText: "Sol·licitar Assessorament en Projectes",
        ctaAction: "briefing"
      },
      cris: {
        id: "cris",
        tag: "Soci Estratègic",
        title: "Cris Ballester Parets",
        subtitle: "Economista, Consultora de Firma & Estratega Directiva",
        metric: { value: "+15 Anys", label: "Direcció Financera, Institucional & ESG" },
        quote: "«No et lliuraré informes teòrics de 100 pàgines que acumulen pols en una prestatgeria. T'aportaré models analítics de tresoreria i una metodologia de treball que notaràs en el marge del teu compte de resultats.»",
        solutionTitle: "METODOLOGIA DIRECTA & IN-OFFICE",
        solution: "Després de més d'una dècada liderant finances corporatives, control de gestió i la direcció pública de pressupostos multimilionaris a Balears, la meva consultoria de firma aporta eines de gran corporació adaptades a la realitat d'empreses i institucions dinàmiques. Em desplaço a la teva seu, analitzo la realitat operativa sobre el terreny i construïm un model viable i blindat.",
        milestonesTitle: "ÀREES D'INTERVENCIÓ",
        milestones: [
          "Mentoria i alineament confidencial de comitès de direcció.",
          "Interim CFO i direcció fraccional d'operacions.",
          "Estructuració tècnica de consorcis i projectes estratègics.",
          "Conferències magistrals i tallers per a directius."
        ],
        ctaText: "Connectar a LinkedIn",
        ctaAction: "linkedin",
        ctaUrl: "https://www.linkedin.com/in/cris-ballester-parets-crisballesterp/"
      },
      location: {
        id: "location",
        tag: "Coordenades Directives",
        title: "Mallorca",
        subtitle: "Despatx privat a Santa Eugènia i cobertura nacional",
        symptomTitle: "COBERTURA",
        symptom: "Seu central a Santa Eugènia (Mallorca). Intervencions in-office i acompanyament directiu directe a Balears, Madrid, Barcelona i projectes internacionals.",
        solutionTitle: "CANALS PRIVATS",
        solution: "Per preservar la confidencialitat de la teva organització, pots sol·licitar un briefing estratègic o contactar de forma directa a través dels nostres canals executius.",
        milestonesTitle: "CONTACTE DIRECTE",
        milestones: [
          "Correu: hola@crisballester.com",
          "Telèfon directe: +34 654 12 66 34",
          "Canal WhatsApp privat per a agendes de direcció."
        ],
        ctaText: "Iniciar Briefing Confidencial",
        ctaAction: "briefing"
      }
    },
    briefingModal: {
      tag: "Briefing Confidencial",
      title: "Iniciar Conversa Estratègica",
      desc: "Selecciona el nudo operatiu de la teva organització per estructurar un despatx confidencial llest per enviar.",
      scenariosLabel: "Quina és la prioritat del teu equip?",
      scenarios: [
        { id: "ejecucion", label: "Inèrcia Operativa & Comitès" },
        { id: "tesoreria", label: "Control de Tresoreria & Marge" },
        { id: "interim", label: "Interim CFO / Direcció Fraccional" },
        { id: "consorcios", label: "Consorcis & Aliances APPs" },
        { id: "esg", label: "Sostenibilitat Rendible (ESG)" }
      ],
      labelName: "El teu Nom i Càrrec",
      labelOrg: "Nom de la teva Organització",
      labelEmail: "Correu Corporatiu",
      labelNotes: "Quina situació concreta necessiteu ordenar o activar?",
      btnGenerate: "Generar Despatx Confidencial",
      copySuccess: "Copiat al Portapapers!",
      btnCopy: "Copiar al Portapapers",
      btnEmail: "Obrir al meu Correu",
      btnWhatsApp: "Enviar per WhatsApp"
    }
  },
  en: {
    taglineSignature: "Signature Advisory",
    awardsNavText: "Awards",
    awardsBadge: "Royal Academy Prize '24 · OBEL Award '26",
    ctaBriefing: "Schedule Briefing",
    dossierClose: "Close",
    dossierBackToManifesto: "Return to Manifesto",
    helperHint: "Tap or click any highlighted term to view its dossier.",
    linkAwards: "International Awards",
    linkProjects: "Gallery +50M€",
    viewfinderTitle: "Managing Director & Signature Advisor",
    viewfinderSubtitle: "Former Director General of Housing & Architecture · Economist",
    viewfinderHonors: "Global Honors & Recognition",
    viewfinderStat1: "Procured",
    viewfinderStat2: "Developments",
    viewfinderStat3: "Audited & Justified",
    viewfinderLiveBadge: "Real-time Inspection",
    viewfinderHoverHint: "Hover over terms in the manifesto",
    viewfinderOpenDossier: "Open Full Dossier",
    p1: [
      { text: "Most organizations do not stall from a lack of vision. They bottleneck through " },
      { text: "execution inertia", trigger: "execution" },
      { text: ", insufficient " },
      { text: "analytical treasury control", trigger: "treasury" },
      { text: ", and friction in " },
      { text: "committee governance", trigger: "governance" },
      { text: "." }
    ],
    p2: [
      { text: "I am " },
      { text: "Cris Ballester", trigger: "cris" },
      { text: ". Economist recognized with the " },
      { text: "Royal Academy Architecture Prize", trigger: "awards" },
      { text: " and the " },
      { text: "OBEL Award", trigger: "awards" },
      { text: " for transforming over " },
      { text: "+50M€ in assets and infrastructure", trigger: "projects" },
      { text: ". Based in " },
      { text: "Mallorca", trigger: "location" },
      { text: "." }
    ],
    p3: [
      { text: "I partner with executive teams and institutions as an " },
      { text: "Interim CFO", trigger: "interim" },
      { text: " and signature advisor, structuring models of " },
      { text: "profitable sustainability", trigger: "sustainability" },
      { text: " and steering the technical delivery of " },
      { text: "public-private consortia", trigger: "consortia" },
      { text: "." }
    ],
    dossiers: {
      execution: {
        id: "execution",
        tag: "Operational Diagnostics",
        title: "Execution Inertia",
        subtitle: "Unlocking committee deadlock and deploying high-traction operational roadmaps",
        metric: { value: "90 Days", label: "High-Traction Operational Sprint" },
        symptomTitle: "WARNING SIGNAL",
        symptom: "Executive decisions dissolve into circular debates. Strategic ambitions stall before reaching middle management due to missing ownership milestones.",
        solutionTitle: "INTERVENTION PROTOCOL",
        solution: "I translate high-level strategy into an executive roadmap with weekly checkpoint rhythms, visual KPIs, and protected focus hours against daily firefighting.",
        milestonesTitle: "TANGIBLE DELIVERABLES",
        milestones: [
          "Executive alignment across boards and operational heads.",
          "90-day leverage project prioritization matrix.",
          "Executive dashboards with non-negotiable weekly indicators."
        ],
        ctaText: "Activate Roadmap",
        ctaAction: "briefing"
      },
      treasury: {
        id: "treasury",
        tag: "Financial Control",
        title: "Analytical Treasury Control",
        subtitle: "Shielding operational cash runway and optimizing operating profit margins",
        metric: { value: "100%", label: "Real Visibility on Cash Flow & Operating Margin" },
        symptomTitle: "WARNING SIGNAL",
        symptom: "Revenue expansion that fails to convert into free cash flow. Scaling lines without prior predictive modeling, burning liquidity on hidden operational overhead.",
        solutionTitle: "INTERVENTION PROTOCOL",
        solution: "I audit direct and indirect cost drivers, deploy real-time rolling cash-flow frameworks, and align payables and receivables directly with true P&L contribution.",
        milestonesTitle: "TANGIBLE DELIVERABLES",
        milestones: [
          "12-month rolling cash-flow and liquidity forecasting model.",
          "Unit-economics and margin audit per business division.",
          "Working capital controls and executive spend authorization gates."
        ],
        ctaText: "Audit Treasury",
        ctaAction: "briefing"
      },
      governance: {
        id: "governance",
        tag: "Decision Organs",
        title: "Committee Governance",
        subtitle: "Independent technical mediation for boards, succession, and mixed consortia",
        metric: { value: "0 Bias", label: "Process-Based Technical Mediation" },
        symptomTitle: "WARNING SIGNAL",
        symptom: "Unresolved executive committee friction, shareholder misalignment, or family business succession delayed by interpersonal history rather than objective criteria.",
        solutionTitle: "INTERVENTION PROTOCOL",
        solution: "I architect formal governance charters, clarify decision delegation matrices, and serve as a neutral external facilitator to unlock high-stakes board consensus.",
        milestonesTitle: "TANGIBLE DELIVERABLES",
        milestones: [
          "Succession and generational transfer protocols for family enterprises.",
          "Executive committee governance charters and cadence rules.",
          "Objective technical mediation between partners and mixed committees."
        ],
        ctaText: "Review Protocols",
        ctaAction: "briefing"
      },
      interim: {
        id: "interim",
        tag: "Fractional Leadership",
        title: "Interim CFO & Strategic Direction",
        subtitle: "Part-time C-Suite financial and operational leadership on the ground",
        metric: { value: "+15 Yrs", label: "Executive Leadership in Complex Environments" },
        symptomTitle: "DEPLOYMENT SCENARIO",
        symptom: "Organizations undergoing high-stakes inflection points (M&A, carve-outs, restructuring, or rapid scale) where hiring a full-time senior CFO is premature or too slow.",
        solutionTitle: "INTERVENTION PROTOCOL",
        solution: "I embed into your executive committee as a fractional executive. I command financial and operational control, set priority filters, and navigate transitions with tier-one corporate rigor.",
        milestonesTitle: "TANGIBLE DELIVERABLES",
        milestones: [
          "Part-time Chief Financial & Operations Officer leadership.",
          "Financial stress-testing for M&A, financing, or restructuring.",
          "Mentoring internal finance managers to assume permanent leadership."
        ],
        ctaText: "Request Interim CFO",
        ctaAction: "briefing"
      },
      sustainability: {
        id: "sustainability",
        tag: "Viable ESG",
        title: "Profitable Sustainability",
        subtitle: "Circular economy and impact frameworks that compound the bottom line",
        metric: { value: "Net ROI", label: "Sustainability Connected to the P&L" },
        symptomTitle: "WARNING SIGNAL",
        symptom: "100-page corporate sustainability reports that gather dust on shelves. Capital expenditures disconnected from financial returns, perceived as a compliance burden.",
        solutionTitle: "INTERVENTION PROTOCOL",
        solution: "I embed pragmatic ESG parameters and circular economy loops directly into operations: material efficiency cost savings, bankable ESG scoring, and monetized impact.",
        milestonesTitle: "TANGIBLE DELIVERABLES",
        milestones: [
          "Materiality diagnostics focused on economic resource optimization.",
          "Accredited ESG rating prep for institutional capital and tenders.",
          "Circular resource roadmap directly tied to operating margins."
        ],
        ctaText: "Deploy Profitable ESG",
        ctaAction: "briefing"
      },
      consortia: {
        id: "consortia",
        tag: "Complex Alliances",
        title: "Public-Private Partnerships & Consortia",
        subtitle: "Technical architecture, governance, and audit-proof justification",
        metric: { value: "+50M€", label: "Consortia Budgets Supervised" },
        symptomTitle: "WARNING SIGNAL",
        symptom: "Promising public-private collaborations and EU funding allocations that break down due to culture clash between bureaucratic administration and commercial speed.",
        solutionTitle: "INTERVENTION PROTOCOL",
        solution: "I bridge both worlds: knowing internal institutional governance as an economist, alongside commercial viability demands. I steer mixed alliances with audit-proof rigor.",
        milestonesTitle: "TANGIBLE DELIVERABLES",
        milestones: [
          "Legal and financial structuring of public-private partnerships (PPPs).",
          "Comprehensive management and justification of European grants (NextGen).",
          "Regional strategic development frameworks and housing masterplans."
        ],
        ctaText: "Consult on Consortia",
        ctaAction: "briefing"
      },
      awards: {
        id: "awards",
        tag: "Global Honors",
        title: "Royal Academy Prize & OBEL Award",
        subtitle: "Global recognition for an economist transforming public sector management",
        quote: "«I am not an architect; I am an economist. These awards do not merely honor completed buildings—they recognize the systemic overhaul of public procurement, local circular supply chains, and fiscal viability that made them possible at scale.»",
        awardsList: [
          {
            year: "2026",
            name: "OBEL Award — Systems' Hack",
            organization: "The Henrik Frode Obel Foundation (Copenhagen)",
            focus: "Global prize recognizing the systemic overhaul of public housing promotion, bioclimatic design, and sustainable procurement in the Balearic Islands.",
            link: "https://obelaward.org"
          },
          {
            year: "2024",
            name: "Royal Academy Architecture Prize",
            organization: "Royal Academy of Arts (London)",
            focus: "Annual prize awarded to Cris Ballester for her leadership in delivering pioneering decarbonized and bioregional public housing programs.",
            link: "https://www.royalacademy.org.uk"
          }
        ],
        ctaText: "View Awarded Projects",
        ctaAction: "projects"
      },
      projects: {
        id: "projects",
        tag: "Real Infrastructure",
        title: "+50M€ in Executed Assets",
        subtitle: "Landmark decarbonized public housing programs in the Balearic Islands",
        projects: [
          {
            title: "Salvador Espriu 39",
            location: "Palma, Mallorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_int1.png",
            desc: "8 social housing units constructed with local marés sandstone and timber structural slabs. Global reference for low-embodied-carbon bioclimatic design."
          },
          {
            title: "Pere Matutes 72",
            location: "Ibiza",
            year: "2018–2022",
            image: "/projects/pere_matutes_int.png",
            desc: "24 public housing units built with rammed earth load-bearing walls and passive ventilation tunnels, co-designed with 08014 Arquitectura."
          },
          {
            title: "Olivera 62",
            location: "Magalluf-Calvià, Mallorca",
            year: "2018–2022",
            image: "/projects/olivera_ext.png",
            desc: "48 public housing units co-designed with LLOC Arquitectes, providing radical energy efficiency in a high-density urban district."
          },
          {
            title: "Salvador Espriu — Marés Facade",
            location: "Palma, Mallorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_ext.png",
            desc: "Traditional Mallorcan sandstone craftsmanship integrated into avant-garde public infrastructure honored by the Royal Academy."
          }
        ],
        ctaText: "Discuss Project Strategy",
        ctaAction: "briefing"
      },
      cris: {
        id: "cris",
        tag: "Strategic Partner",
        title: "Cris Ballester Parets",
        subtitle: "Economist, Signature Consultant & Executive Strategist",
        metric: { value: "+15 Yrs", label: "Executive Leadership in Finance, Public Policy & ESG" },
        quote: "«I will not hand you 100-page theoretical slides that collect dust on a shelf. I deliver live analytical treasury frameworks and operational disciplines that reflect directly in your operating margin.»",
        solutionTitle: "IN-OFFICE, EMBEDDED METHODOLOGY",
        solution: "Following more than a decade heading corporate financial control and directing multi-million public infrastructure budgets, my signature consultancy brings enterprise-grade disciplines to dynamic companies and institutions. I embed on-site at your headquarters, inspect operational reality firsthand, and construct an audit-proof, profitable model.",
        milestonesTitle: "INTERVENTION DOMAINS",
        milestones: [
          "Confidential board and committee alignment.",
          "Interim CFO and fractional operations leadership.",
          "Technical structuring of complex consortia and capital projects.",
          "Keynote lectures and executive masterclasses."
        ],
        ctaText: "Connect on LinkedIn",
        ctaAction: "linkedin",
        ctaUrl: "https://www.linkedin.com/in/cris-ballester-parets-crisballesterp/"
      },
      location: {
        id: "location",
        tag: "Executive Coordinates",
        title: "Mallorca",
        subtitle: "Private office in Santa Eugènia and national/international reach",
        symptomTitle: "GEOGRAPHIC COVERAGE",
        symptom: "Headquarters in Santa Eugènia (Mallorca). In-office presence across the Balearic Islands, Madrid, Barcelona, and international assignments.",
        solutionTitle: "CONFIDENTIAL CHANNELS",
        solution: "To safeguard strategic confidentiality, you may initiate a structured briefing or connect directly through our direct executive channels.",
        milestonesTitle: "DIRECT CONTACT",
        milestones: [
          "Email: hola@crisballester.com",
          "Direct Phone: +34 654 12 66 34",
          "Private executive WhatsApp channel for leadership agendas."
        ],
        ctaText: "Initiate Confidential Briefing",
        ctaAction: "briefing"
      }
    },
    briefingModal: {
      tag: "Confidential Briefing",
      title: "Initiate Strategic Dialogue",
      desc: "Select your organization's core operational friction to generate an encrypted, pre-formatted executive dispatch ready to review and send.",
      scenariosLabel: "What is your team's immediate priority?",
      scenarios: [
        { id: "ejecucion", label: "Execution Inertia & Committees" },
        { id: "tesoreria", label: "Treasury Control & Margin" },
        { id: "interim", label: "Interim CFO / Fractional Leadership" },
        { id: "consorcios", label: "Public-Private Consortia & Grants" },
        { id: "esg", label: "Profitable Sustainability (ESG)" }
      ],
      labelName: "Your Name & Title",
      labelOrg: "Organization Name",
      labelEmail: "Corporate Email",
      labelNotes: "What specific bottleneck requires alignment or restructuring?",
      btnGenerate: "Generate Executive Dispatch",
      copySuccess: "Copied to Clipboard!",
      btnCopy: "Copy to Clipboard",
      btnEmail: "Open in Email Client",
      btnWhatsApp: "Send via WhatsApp"
    }
  },
  it: {
    taglineSignature: "Consulenza di Firma",
    awardsNavText: "Premi",
    awardsBadge: "Royal Academy Prize '24 · OBEL Award '26",
    ctaBriefing: "Prenota Briefing",
    dossierClose: "Chiudi",
    dossierBackToManifesto: "Torna al Manifesto",
    helperHint: "Tocca o clicca qualsiasi termine evidenziato per aprire il dossier.",
    linkAwards: "Premi Internazionali",
    linkProjects: "Galleria +50M€",
    viewfinderTitle: "Direttrice & Consulente di Firma",
    viewfinderSubtitle: "Ex Direttrice Generale di Edilizia e Architettura · Economista",
    viewfinderHonors: "Riconoscimento Internazionale",
    viewfinderStat1: "Appaltati",
    viewfinderStat2: "Sviluppi",
    viewfinderStat3: "Rendicontati",
    viewfinderLiveBadge: "Ispezione in tempo reale",
    viewfinderHoverHint: "Passa il cursore sul testo",
    viewfinderOpenDossier: "Apri Dossier Completo",
    p1: [
      { text: "La maggior parte delle organizzazioni non fallisce per mancanza di visione. Si blocca per " },
      { text: "inerzia nell'esecuzione", trigger: "execution" },
      { text: ", assenza di " },
      { text: "controllo analitico di tesoreria", trigger: "treasury" },
      { text: " e fragilità nella " },
      { text: "governance dei comitati", trigger: "governance" },
      { text: "." }
    ],
    p2: [
      { text: "Sono " },
      { text: "Cris Ballester", trigger: "cris" },
      { text: ". Economista insignita del " },
      { text: "Royal Academy Architecture Prize", trigger: "awards" },
      { text: " e dell'" },
      { text: "OBEL Award", trigger: "awards" },
      { text: " per la trasformazione di oltre " },
      { text: "+50M€ in progetti e infrastrutture", trigger: "projects" },
      { text: ". Con sede a " },
      { text: "Maiorca", trigger: "location" },
      { text: "." }
    ],
    p3: [
      { text: "Affianco aziende e istituzioni come " },
      { text: "Interim CFO", trigger: "interim" },
      { text: " e consulente strategica, strutturando modelli di " },
      { text: "sostenibilità redditizia", trigger: "sustainability" },
      { text: " e guidando l'articolazione tecnica di " },
      { text: "consorzi e partenariati pubblico-privati", trigger: "consortia" },
      { text: "." }
    ],
    dossiers: {
      execution: {
        id: "execution",
        tag: "Diagnosi Operativa",
        title: "Inerzia nell'Esecuzione",
        subtitle: "Sblocco dei comitati e attivazione di roadmap con trazione reale",
        metric: { value: "90 Giorni", label: "Protocollo di Trazione Operativa" },
        symptomTitle: "SEGNALE D'ALLARME",
        symptom: "Le decisioni di vertice si disperdono in dibattiti circolari. Le ambizioni strategiche si bloccano prima di raggiungere i quadri intermedi.",
        solutionTitle: "PROTOCOLLO DI INTERVENTO",
        solution: "Traduco la strategia in una roadmap operativa con revisioni settimanali, KPI chiari e protezione del tempo di concentrazione direzionale.",
        milestonesTitle: "DELIVERABLE TANGIBILI",
        milestones: [
          "Allineamento esecutivo di consigli e comitati operativi.",
          "Matrice di prioritizzazione a 90 giorni per progetti chiave.",
          "Cruscotti direzionali con indicatori settimanali non negoziabili."
        ],
        ctaText: "Attiva Roadmap",
        ctaAction: "briefing"
      },
      treasury: {
        id: "treasury",
        tag: "Controllo Finanziario",
        title: "Controllo Analitico di Tesoreria",
        subtitle: "Tutela della liquidità operativa e ottimizzazione del margine",
        metric: { value: "100%", label: "Visibilità su Cassa & Margine Operativo" },
        symptomTitle: "SEGNALE D'ALLARME",
        symptom: "Crescita di fatturato che non genera cassa. Lancio di nuove linee senza adeguata modellazione analitica.",
        solutionTitle: "PROTOCOLLO DI INTERVENTO",
        solution: "Verifico i costi diretti e indiretti, installo modelli di cassa dinamici e allineo crediti e debiti con il margine effettivo.",
        milestonesTitle: "DELIVERABLE TANGIBILI",
        milestones: [
          "Modello previsionale di tesoreria e flussi a 12 mesi.",
          "Analisi dettagliata della redditività per linea di business.",
          "Protocolli di autorizzazione spesa e controllo del capitale circolante."
        ],
        ctaText: "Audit Tesoreria",
        ctaAction: "briefing"
      },
      governance: {
        id: "governance",
        tag: "Organi Decisionali",
        title: "Governance dei Comitati",
        subtitle: "Mediazione tecnica neutrale nei consigli, successioni e consorzi",
        metric: { value: "0 Attrito", label: "Mediazione Tecnica Indipendente" },
        symptomTitle: "SEGNALE D'ALLARME",
        symptom: "Tensioni irrisolte nei comitati direttivi o passaggi generazionali bloccati da carichi emotivi.",
        solutionTitle: "PROTOCOLLO DI INTERVENTO",
        solution: "Definisco statuti di governance chiari, chiarisco le deleghe decisionali e facilito accordi stabili e misurabili.",
        milestonesTitle: "DELIVERABLE TANGIBILI",
        milestones: [
          "Patti di famiglia e protocolli di passaggio generazionale.",
          "Regolamento e funzionamento dei comitati esecutivi.",
          "Mediazione tecnica neutrale tra soci e comitati misti."
        ],
        ctaText: "Verifica Protocolli",
        ctaAction: "briefing"
      },
      interim: {
        id: "interim",
        tag: "Leadership Frazionale",
        title: "Interim CFO & Direzione Strategica",
        subtitle: "Guida finanziaria e operativa 'in-office' a tempo parziale",
        metric: { value: "+15 Anni", label: "Esperienza in Alta Direzione" },
        symptomTitle: "SCENARIO D'INTERVENTO",
        symptom: "Fasi aziendali complesse (acquisizioni, scorpori, riorganizzazioni) in cui assumere un CFO senior a tempo pieno è prematuro.",
        solutionTitle: "PROTOCOLLO DI INTERVENTO",
        solution: "Entro nel comitato di direzione come fractional executive, stabilizzo le finanze e guido la transizione con standard elevati.",
        milestonesTitle: "DELIVERABLE TANGIBILI",
        milestones: [
          "Direzione finanziaria e operativa a tempo parziale.",
          "Modellazione di sostenibilità per M&A e finanziamenti.",
          "Formazione e mentoring per il team finanziario interno."
        ],
        ctaText: "Richiedi Interim CFO",
        ctaAction: "briefing"
      },
      sustainability: {
        id: "sustainability",
        tag: "ESG Concreto",
        title: "Sostenibilità Redditizia",
        subtitle: "Linee guida d'impatto ed economia circolare che rafforzano il margine",
        metric: { value: "ROI Reale", label: "Sostenibilità Integrata nel Conto Economico" },
        symptomTitle: "SEGNALE D'ALLARME",
        symptom: "Relazioni di sostenibilità teoriche di 100 pagine che non producono valore o ritorno economico.",
        solutionTitle: "PROTOCOLLO DI INTERVENTO",
        solution: "Integro criteri ESG concreti ed efficienza nell'uso delle risorse per generare risparmi diretti e migliore accesso al credito.",
        milestonesTitle: "DELIVERABLE TANGIBILI",
        milestones: [
          "Diagnosi di materialità economica e risparmio risorse.",
          "Rating ESG conforme per accesso a credito e gare d'appalto.",
          "Strategia circolare legata al margine d'esercizio."
        ],
        ctaText: "Applica ESG Redditizio",
        ctaAction: "briefing"
      },
      consortia: {
        id: "consortia",
        tag: "Alleanze Complesse",
        title: "Consorzi & Partenariati Pubblico-Privati",
        subtitle: "Architettura tecnica, governance e rendicontazione fondi",
        metric: { value: "+50M€", label: "Budget Gestiti in Consorzi" },
        symptomTitle: "SEGNALE D'ALLARME",
        symptom: "Opportunità di partenariato pubblico-privato o fondi europei che si arenano a causa delle differenze culturali e burocratiche.",
        solutionTitle: "PROTOCOLLO DI INTERVENTO",
        solution: "Conosco sia i processi amministrativi che la velocità richiesta dalle imprese: coordino alleanze miste con precisione tecnica.",
        milestonesTitle: "DELIVERABLE TANGIBILI",
        milestones: [
          "Strutturazione di partenariati pubblico-privati (PPP).",
          "Gestione e rendicontazione certificata fondi europei (NextGen).",
          "Piani strategici di sviluppo territoriale e rigenerazione."
        ],
        ctaText: "Consulta Partenariati",
        ctaAction: "briefing"
      },
      awards: {
        id: "awards",
        tag: "Riconoscimenti Internazionali",
        title: "Royal Academy Prize & OBEL Award",
        subtitle: "Il riconoscimento globale a un'economista che ha ripensato la gestione pubblica",
        quote: "«Non sono architetto; sono economista. Questi premi non celebrano solo gli edifici, ma la trasformazione strutturale della gestione pubblica, degli appalti e della sostenibilità economica che li ha resi possibili su larga scala.»",
        awardsList: [
          {
            year: "2026",
            name: "OBEL Award — Systems' Hack",
            organization: "The Henrik Frode Obel Foundation (Copenaghen)",
            focus: "Premio internazionale per la trasformazione sistemica delle politiche abitative pubbliche e della progettazione bioclimatica.",
            link: "https://obelaward.org"
          },
          {
            year: "2024",
            name: "Royal Academy Architecture Prize",
            organization: "Royal Academy of Arts (Londra)",
            focus: "Premio conferito a Cris Ballester per la gestione di modelli di edilizia pubblica sostenibile e a basso impatto nelle Baleari.",
            link: "https://www.royalacademy.org.uk"
          }
        ],
        ctaText: "Guarda i Progetti Premiati",
        ctaAction: "projects"
      },
      projects: {
        id: "projects",
        tag: "Infrastrutture Realizzate",
        title: "+50M€ in Opere Gestite",
        subtitle: "Edilizia residenziale pubblica sostenibile e bioclimatica nelle Isole Baleari",
        projects: [
          {
            title: "Salvador Espriu 39",
            location: "Palma di Maiorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_int1.png",
            desc: "8 alloggi pubblici realizzati in pietra di marés locale e solai in legno. Modello internazionale a bassa impronta di carbonio."
          },
          {
            title: "Pere Matutes 72",
            location: "Ibiza",
            year: "2018–2022",
            image: "/projects/pere_matutes_int.png",
            desc: "24 alloggi pubblici con pareti portanti in terra battuta e ventilazione passiva, in collaborazione con 08014 Arquitectura."
          },
          {
            title: "Olivera 62",
            location: "Magalluf-Calvià, Maiorca",
            year: "2018–2022",
            image: "/projects/olivera_ext.png",
            desc: "48 alloggi pubblici con standard energetici radicali in area ad alta densità, progettati con LLOC Arquitectes."
          },
          {
            title: "Salvador Espriu — Facciata Marés",
            location: "Palma di Maiorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_ext.png",
            desc: "Dettaglio in pietra arenaria tradizionale applicata a progetti innovativi premiati dalla Royal Academy."
          }
        ],
        ctaText: "Parla di Strategia di Progetto",
        ctaAction: "briefing"
      },
      cris: {
        id: "cris",
        tag: "Partner Strategico",
        title: "Cris Ballester Parets",
        subtitle: "Economista, Consulente di Vertice & Stratega Aziendale",
        metric: { value: "+15 Anni", label: "Leadership in Finanza, Amministrazione & ESG" },
        quote: "«Non ti presenterò presentazioni teoriche di 100 pagine destinate all'oblio. Ti fornirò modelli operativi di cassa e una disciplina analitica visibile nel tuo conto economico.»",
        solutionTitle: "METODO DIRETTO 'IN-OFFICE'",
        solution: "Dopo oltre 15 anni alla guida del controllo di gestione, finanze e programmi pubblici milionari nelle Baleari, porto nelle aziende dinamiche gli strumenti delle grandi organizzazioni con interventi diretti sul campo.",
        milestonesTitle: "AMBITI DI ATTIVITÀ",
        milestones: [
          "Mentoring riservato per consigli e comitati di direzione.",
          "Interim CFO e direzione operativa frazionale.",
          "Strutturazione di consorzi e progetti strategici.",
          "Interventi congressuali e masterclass executive."
        ],
        ctaText: "Connetti su LinkedIn",
        ctaAction: "linkedin",
        ctaUrl: "https://www.linkedin.com/in/cris-ballester-parets-crisballesterp/"
      },
      location: {
        id: "location",
        tag: "Coordinate Direzionali",
        title: "Maiorca",
        subtitle: "Studio privato a Santa Eugènia e copertura nazionale",
        symptomTitle: "COPERTURA TERRITORIALE",
        symptom: "Sede a Santa Eugènia (Maiorca). Presenza in-office e supporto esecutivo nelle Baleari, Madrid, Barcellona e a livello internazionale.",
        solutionTitle: "CANALI RISERVATI",
        solution: "Per garantire la massima riservatezza aziendale, è possibile predisporre un briefing strutturato o contattarci direttamente.",
        milestonesTitle: "RECAPITI DIRETTI",
        milestones: [
          "Email: hola@crisballester.com",
          "Telefono diretto: +34 654 12 66 34",
          "Canale WhatsApp riservato per agende di vertice."
        ],
        ctaText: "Avvia Briefing Riservato",
        ctaAction: "briefing"
      }
    },
    briefingModal: {
      tag: "Briefing Riservato",
      title: "Avvia Dialogo Strategico",
      desc: "Indica l'esigenza prioritaria della tua organizzazione per predisporre un messaggio formale pronto all'invio.",
      scenariosLabel: "Qual è la priorità del tuo team?",
      scenarios: [
        { id: "ejecucion", label: "Inerzia Operativa & Comitati" },
        { id: "tesoreria", label: "Controllo di Cassa & Margine" },
        { id: "interim", label: "Interim CFO / Direzione Frazionale" },
        { id: "consorcios", label: "Consorzi & Partenariati PPP" },
        { id: "esg", label: "Sostenibilità Redditizia (ESG)" }
      ],
      labelName: "Nome e Ruolo",
      labelOrg: "Nome dell'Organizzazione",
      labelEmail: "Email Aziendale",
      labelNotes: "Quale situazione specifica intendete riordinare o attivare?",
      btnGenerate: "Genera Messaggio Riservato",
      copySuccess: "Copiato negli Appunti!",
      btnCopy: "Copia negli Appunti",
      btnEmail: "Apri nel Client Email",
      btnWhatsApp: "Invia via WhatsApp"
    }
  },
  de: {
    taglineSignature: "Signatur-Beratung",
    awardsNavText: "Auszeichnungen",
    awardsBadge: "Royal Academy Prize '24 · OBEL Award '26",
    ctaBriefing: "Briefing Vereinbaren",
    dossierClose: "Schließen",
    dossierBackToManifesto: "Zurück zum Manifest",
    helperHint: "Tippen oder klicken Sie auf einen hervorgehobenen Begriff, um das Dossier zu öffnen.",
    linkAwards: "Internationale Auszeichnungen",
    linkProjects: "Galerie +50M€",
    viewfinderTitle: "Geschäftsführerin & Signaturberaterin",
    viewfinderSubtitle: "Ehem. Generaldirektorin für Wohnungsbau und Architektur · Ökonomin",
    viewfinderHonors: "Internationale Anerkennung",
    viewfinderStat1: "Ausgeschrieben",
    viewfinderStat2: "Projekte",
    viewfinderStat3: "Rechtssicher Belegt",
    viewfinderLiveBadge: "Echtzeit-Inspektion",
    viewfinderHoverHint: "Fahren Sie mit dem Cursor über den Text",
    viewfinderOpenDossier: "Vollständiges Dossier Öffnen",
    p1: [
      { text: "Die meisten Organisationen scheitern nicht an mangelnder Vision. Sie blockieren durch " },
      { text: "Ausführungsträgheit", trigger: "execution" },
      { text: ", unzureichende " },
      { text: "analytische Liquiditätskontrolle", trigger: "treasury" },
      { text: " und Schwachstellen in der " },
      { text: "Ausschuss-Governance", trigger: "governance" },
      { text: "." }
    ],
    p2: [
      { text: "Ich bin " },
      { text: "Cris Ballester", trigger: "cris" },
      { text: ". Ökonomin, ausgezeichnet mit dem " },
      { text: "Royal Academy Architecture Prize", trigger: "awards" },
      { text: " und dem " },
      { text: "OBEL Award", trigger: "awards" },
      { text: " für das Management von über " },
      { text: "+50 Mio. € in Infrastruktur und Projekten", trigger: "projects" },
      { text: ". Mit Sitz auf " },
      { text: "Mallorca", trigger: "location" },
      { text: "." }
    ],
    p3: [
      { text: "Ich begleite Unternehmen und Institutionen als " },
      { text: "Interim CFO", trigger: "interim" },
      { text: " und Strategieberaterin, strukturiere Modelle für " },
      { text: "rentable Nachhaltigkeit", trigger: "sustainability" },
      { text: " und steuere die technische Umsetzung von " },
      { text: "öffentlich-privaten Partnerschaften", trigger: "consortia" },
      { text: "." }
    ],
    dossiers: {
      execution: {
        id: "execution",
        tag: "Operative Diagnose",
        title: "Ausführungsträgheit",
        subtitle: "Auflösung von Gremienblockaden und Aktivierung von Roadmaps mit echter Traktion",
        metric: { value: "90 Tage", label: "Operativer Traktionssprint" },
        symptomTitle: "WARNSIGNAL",
        symptom: "Führungsentscheidungen verlieren sich in Endlosdebatten. Strategische Initiativen versickern, bevor sie die mittlere Führungsebene erreichen, da verbindliche Meilensteine fehlen.",
        solutionTitle: "INTERVENTIONSPROTOKOLL",
        solution: "Ich übersetze Strategie in eine operative Umsetzungs-Roadmap mit wöchentlichem Review-Rhythmus, visuellen KPIs und Schutz der Führungsressourcen vor dem Tagesgeschäft.",
        milestonesTitle: "TANGIBLE ERGEBNISSE",
        milestones: [
          "Exekutives Alignment von Führungsgremien und Management.",
          "Priorisierungsmatrix für 90-Tage-Schlüsselprojekte.",
          "Führungscockpits mit verbindlichen wöchentlichen Steuerungsgrößen."
        ],
        ctaText: "Roadmap Aktivieren",
        ctaAction: "briefing"
      },
      treasury: {
        id: "treasury",
        tag: "Finanzkontrolle",
        title: "Analytische Liquiditätskontrolle",
        subtitle: "Absicherung der operativen Liquidität und Optimierung der operativen Marge",
        metric: { value: "100%", label: "Transparenz über Marge & Cashflow" },
        symptomTitle: "WARNSIGNAL",
        symptom: "Umsatzwachstum schlägt sich nicht in Liquidität nieder. Neue Geschäftsfelder werden ohne fundierte Deckungsbeitragsmodelle gestartet und verbrennen unbemerkt Liquidität.",
        solutionTitle: "INTERVENTIONSPROTOKOLL",
        solution: "Ich analysiere Kostenstrukturen, implementiere dynamische Liquiditätsmodelle und synchronisiere Zahlungsströme mit der tatsächlichen Rentabilität.",
        milestonesTitle: "TANGIBLE ERGEBNISSE",
        milestones: [
          "Prädiktives 12-Monats-Liquiditätsmodell.",
          "Deckungsbeitrags- und Margenaudit nach Geschäftsbereichen.",
          "Freigabeprotokolle und Working-Capital-Optimierung."
        ],
        ctaText: "Liquiditätsaudit Anfordern",
        ctaAction: "briefing"
      },
      governance: {
        id: "governance",
        tag: "Entscheidungsorgane",
        title: "Ausschuss-Governance",
        subtitle: "Unabhängige Fachmediation in Beiräten, Gesellschafterkreisen und Konsortien",
        metric: { value: "0 Reibung", label: "Prozessbasierte Fachmediation" },
        symptomTitle: "WARNSIGNAL",
        symptom: "Schwelende Spannungen im Management, Blockaden zwischen Partnern oder Nachfolgeprozesse in Familienunternehmen, die emotional statt sachlich geführt werden.",
        solutionTitle: "INTERVENTIONSPROTOKOLL",
        solution: "Ich strukturiere klare Governance-Prozesse, ordne Entscheidungsbefugnisse und begleite als neutrale Fachinstanz strategische Beschlussfassungen.",
        milestonesTitle: "TANGIBLE ERGEBNISSE",
        milestones: [
          "Nachfolge- und Übergabeprotokolle für Familienunternehmen.",
          "Geschäftsordnungen und Sitzungsroutinen für Executive Boards.",
          "Neutrale Schlichtung und Verhandlungsführung in Joint Ventures."
        ],
        ctaText: "Governance-Modelle Anfragen",
        ctaAction: "briefing"
      },
      interim: {
        id: "interim",
        tag: "Fraktionale Führung",
        title: "Interim CFO & Strategische Leitung",
        subtitle: "Präsenzbasierte Finanz- und Operations-Führung auf Mandatsbasis",
        metric: { value: "+15 Jahre", label: "Führungserfahrung in Finanzen & Institutionen" },
        symptomTitle: "EINSATZSZENARIO",
        symptom: "Unternehmen in Transformationsphasen (M&A, Carve-outs, Restrukturierungen), in denen eine Vollzeit-C-Level-Besetzung zu langsam oder unwirtschaftlich ist.",
        solutionTitle: "INTERVENTIONSPROTOKOLL",
        solution: "Ich übernehme fraktional die Leitung für Finanzen und Operations, ordne Prioritäten und führe die Organisation mit Standards etablierter Großunternehmen.",
        milestonesTitle: "TANGIBLE ERGEBNISSE",
        milestones: [
          "Teilzeit-Finanz- und Operations-Leitung auf C-Level.",
          "Wirtschaftlichkeitsmodelle für Unternehmenstransaktionen.",
          "Befähigung und Übergabe an interne Nachwuchskräfte."
        ],
        ctaText: "Interim CFO Mandat Anfragen",
        ctaAction: "briefing"
      },
      sustainability: {
        id: "sustainability",
        tag: "Reale Nachhaltigkeit",
        title: "Rentable Nachhaltigkeit (ESG)",
        subtitle: "Kreislaufwirtschaft und ESG-Standards mit messbarem Deckungsbeitrag",
        metric: { value: "Positiver ROI", label: "Nachhaltigkeit in der Gewinn- und Verlustrechnung" },
        symptomTitle: "WARNSIGNAL",
        symptom: "Umfangreiche CSR-Berichte ohne geschäftlichen Nutzen. Investitionen in Nachhaltigkeit, die intern als reiner Kostenblock wahrgenommen werden.",
        solutionTitle: "INTERVENTIONSPROTOKOLL",
        solution: "Ich verankere ESG-Kriterien direkt in der Wertschöpfungskette: Effizienzgewinne durch Materialeinsparung, ESG-Ratings für Finanzierungen und Monetarisierung von Impact.",
        milestonesTitle: "TANGIBLE ERGEBNISSE",
        milestones: [
          "Wesentlichkeitsanalyse und Ressourceneffizienz-Audit.",
          "Bankfähiges ESG-Scoring für Kredite und Ausschreibungen.",
          "Zirkuläre Strategien mit direktem Margenbeitrag."
        ],
        ctaText: "ESG Rentabel Strukturieren",
        ctaAction: "briefing"
      },
      consortia: {
        id: "consortia",
        tag: "Komplexe Allianzen",
        title: "Konsortien & ÖPP-Partnerschaften",
        subtitle: "Technische Strukturierung, Governance und Verwendungsnachweise",
        metric: { value: "+50 Mio. €", label: "Verwaltete Projektbudgets" },
        symptomTitle: "WARNSIGNAL",
        symptom: "Scheitern großvolumiger Kooperationen oder EU-Förderprogramme an der Schnittstelle zwischen behördlicher Bürokratie und privatwirtschaftlichen Fristen.",
        solutionTitle: "INTERVENTIONSPROTOKOLL",
        solution: "Ich kenne beide Welten: die institutionellen Mechanismen des öffentlichen Sektors und die Rentabilitätsanforderungen von Unternehmen. Ich steuere Konsortien revisionssicher.",
        milestonesTitle: "TANGIBLE ERGEBNISSE",
        milestones: [
          "Rechtliche und wirtschaftliche Strukturierung von ÖPP-Modellen.",
          "Rechtssichere Beantragung und Nachweisführung von Fördermitteln.",
          "Strategische Regionalentwicklungsprojekte."
        ],
        ctaText: "Partnerschaften Strukturieren",
        ctaAction: "briefing"
      },
      awards: {
        id: "awards",
        tag: "Internationale Auszeichnungen",
        title: "Royal Academy Prize & OBEL Award",
        subtitle: "Internationale Anerkennung für die Transformation öffentlicher Managementmodelle",
        quote: "«Ich bin keine Architektin; ich bin Ökonomin. Die Auszeichnungen würdigen nicht allein vollendete Gebäude, sondern die systemische Neuausrichtung von öffentlicher Beschaffung, zirkulären Lieferketten und wirtschaftlicher Tragfähigkeit.»",
        awardsList: [
          {
            year: "2026",
            name: "OBEL Award — Systems' Hack",
            organization: "The Henrik Frode Obel Foundation (Kopenhagen)",
            focus: "Renommierter internationaler Preis für den systemischen Umbau des geförderten Wohnungsbaus, bioklimatischen Designs und nachhaltigen Vergabewesens.",
            link: "https://obelaward.org"
          },
          {
            year: "2024",
            name: "Royal Academy Architecture Prize",
            organization: "Royal Academy of Arts (London)",
            focus: "Jährliche Auszeichnung an Cris Ballester für die wegweisende Leitung dekarbonisierter und bioregionaler Wohnungsbauprogramme auf den Balearen.",
            link: "https://www.royalacademy.org.uk"
          }
        ],
        ctaText: "Prämierte Projekte Ansehen",
        ctaAction: "projects"
      },
      projects: {
        id: "projects",
        tag: "Realisierte Infrastruktur",
        title: "+50 Mio. € Verwaltetes Projektvolumen",
        subtitle: "Vorzeigeprojekte des dekarbonisierten geförderten Wohnungsbaus auf den Balearen",
        projects: [
          {
            title: "Salvador Espriu 39",
            location: "Palma, Mallorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_int1.png",
            desc: "8 geförderte Wohnungen aus regionalem Marés-Kalkstein und Holzkonstruktionen. Internationales Vorbild für bioklimatische Low-Carbon-Architektur."
          },
          {
            title: "Pere Matutes 72",
            location: "Eivissa, Ibiza",
            year: "2019–2022",
            image: "/projects/pere_matutes_int.png",
            desc: "Wohnanlage mit integrierter Regenwassernutzung, lokaler Materialbeschaffung und innovativen thermischen Lüftungsschächten."
          },
          {
            title: "Olivera 62",
            location: "Magalluf, Calvià",
            year: "2020–2023",
            image: "/projects/olivera_ext.png",
            desc: "48 geförderte Wohnungen in Zusammenarbeit mit LLOC Arquitectes mit radikaler Energieeffizienz im verdichteten Raum."
          },
          {
            title: "Salvador Espriu — Marés-Fassade",
            location: "Palma, Mallorca",
            year: "2018–2021",
            image: "/projects/salvador_espriu_ext.png",
            desc: "Traditionelle mallorquinische Steinmetzkunst in zeitgenössischer Architektur, ausgezeichnet von der Royal Academy."
          }
        ],
        ctaText: "Projektberatung Anfragen",
        ctaAction: "briefing"
      },
      cris: {
        id: "cris",
        tag: "Strategische Partnerin",
        title: "Cris Ballester Parets",
        subtitle: "Ökonomin, Boutique-Beraterin & Executive Strategin",
        metric: { value: "+15 Jahre", label: "Finanzführung, Institutionen & ESG" },
        quote: "«Ich liefere Ihnen keine 100-seitigen Foliensätze, die im Regal verstauben. Ich biete praxiserprobte Liquiditätsmodelle und operative Disziplinen, die sich in Ihrer Betriebsmarge niederschlagen.»",
        solutionTitle: "DIREKTE 'IN-OFFICE'-METHODE",
        solution: "Nach über 15 Jahren im Corporate Financial Controlling und der Leitung von Multimillionen-Infrastrukturprogrammen überträgt meine Beratung erprobte Großunternehmens-Standards auf dynamische Organisationen – direkt vor Ort an Ihrem Hauptsitz.",
        milestonesTitle: "TÄTIGKEITSSCHWERPUNKTE",
        milestones: [
          "Vertrauliche Begleitung von Vorständen und Beiräten.",
          "Interim CFO und fraktionale Operations-Leitung.",
          "Technische Strukturierung komplexer Konsortien und Großprojekte.",
          "Keynotes und Executive Masterclasses."
        ],
        ctaText: "Auf LinkedIn Verbinden",
        ctaAction: "linkedin",
        ctaUrl: "https://www.linkedin.com/in/cris-ballester-parets-crisballesterp/"
      },
      location: {
        id: "location",
        tag: "Führungskoordinaten",
        title: "Mallorca",
        subtitle: "Privates Büro in Santa Eugènia und überregionale Mandate",
        symptomTitle: "EINSATZBEREICH",
        symptom: "Standort Santa Eugènia (Mallorca). Einsätze vor Ort auf den Balearen, in Madrid, Barcelona und international.",
        solutionTitle: "VERTRAULICHE KANÄLE",
        solution: "Zur Wahrung strategischer Vertraulichkeit können Sie ein kurzes Briefing anfordern oder den direkten Kontakt wählen.",
        milestonesTitle: "DIREKTKONTAKT",
        milestones: [
          "E-Mail: hola@crisballester.com",
          "Telefon: +34 654 12 66 34",
          "Diskreter WhatsApp-Kanal für Terminanfragen."
        ],
        ctaText: "Vertrauliches Briefing Starten",
        ctaAction: "briefing"
      }
    },
    briefingModal: {
      tag: "Vertrauliches Briefing",
      title: "Strategischen Dialog Starten",
      desc: "Wählen Sie Ihren Engpass aus, um eine vorbereitete vertrauliche Nachricht für die Abstimmung zu erstellen.",
      scenariosLabel: "Was ist Ihre aktuelle Priorität?",
      scenarios: [
        { id: "ejecucion", label: "Ausführungsträgheit & Gremien" },
        { id: "tesoreria", label: "Liquiditätskontrolle & Marge" },
        { id: "interim", label: "Interim CFO / Fraktionale Führung" },
        { id: "consorcios", label: "Konsortien & ÖPP-Projekte" },
        { id: "esg", label: "Rentable Nachhaltigkeit (ESG)" }
      ],
      labelName: "Name und Funktion",
      labelOrg: "Name der Organisation",
      labelEmail: "Geschäftliche E-Mail",
      labelNotes: "Welcher Engpass soll konkret gelöst werden?",
      btnGenerate: "Nachricht Erstellen",
      copySuccess: "In Zwischenablage kopiert!",
      btnCopy: "In Zwischenablage kopieren",
      btnEmail: "Im E-Mail-Programm öffnen",
      btnWhatsApp: "Per WhatsApp senden"
    }
  }
};
