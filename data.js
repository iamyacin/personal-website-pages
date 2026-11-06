/* ============================================================
   SITE CONTENT — edit this file to extend the website.
   Every text field is an object { en: "...", fr: "..." }.
   To add a job, project, skill group, etc., just add an entry
   to the matching array below. Nothing else needs to change.
   ============================================================ */

const SITE = {
  profile: {
    name: "Yassine Daouji",
    firstName: "Yassine",
    role: { en: "DevOps Engineer", fr: "Ingénieur DevOps" },
    location: { en: "Lyon, France", fr: "Lyon, France" },
    email: "contact@yassine.daouji.com",
    linkedin: "https://linkedin.com/in/yassine-daouji",
    photo: "assets/photos.jpg",
    resumeFr: "assets/YassineDaouji-CV-FR.pdf",
    resumeEn: "assets/YassineDaouji-RESUME-EN.pdf",
    availability: false,
    availabilityLabels: {
      available:   { en: "Open to new opportunities", fr: "Ouvert aux nouvelles opportunités" },
      unavailable: { en: "On a mission right now",    fr: "En mission en ce moment" }
    }
  },

  nav: [
    { id: "about",     label: { en: "About",      fr: "À propos" } },
    { id: "experience",label: { en: "Experience", fr: "Expérience" } },
    { id: "skills",    label: { en: "Skills",     fr: "Compétences" } },
    { id: "projects",  label: { en: "Projects",   fr: "Projets" } },
    { id: "contact",   label: { en: "Contact",    fr: "Contact" } }
  ],

  hero: {
    greeting: { en: "Hi, I'm", fr: "Bonjour, je suis" },
    headlineSuffix: { en: ".", fr: "." },
    tagline: {
      en: "I design, automate and run cloud infrastructure, CI/CD pipelines and observability platforms — from OpenStack to Kubernetes.",
      fr: "Je conçois, automatise et opère des infrastructures cloud, des pipelines CI/CD et des plateformes d'observabilité — d'OpenStack à Kubernetes."
    },
    ctaPrimary:   { en: "Get in touch",      fr: "Me contacter" },
    ctaSecondary: { en: "Download my RESUME",    fr: "Télécharger mon CV" },
    stats: [
      { value: "7+", label: { en: "Years of experience", fr: "Années d'expérience" } },
      { value: "2",  label: { en: "Countries",           fr: "Pays" } },
      { value: "3",  label: { en: "Companies",           fr: "Entreprises" } },
      { value: "3",  label: { en: "Industries",          fr: "Secteurs d'activité" } },
      { value: "20+",label: { en: "Tools & technologies",fr: "Outils & technologies" } }
    ]
  },

  about: {
    heading:   { en: "About me", fr: "À propos de moi" },
    paragraphs: [
      {
        en: "I'm a DevOps Engineer based in Lyon, France, currently working at Enedis on the Linky smart-meter program — the largest smart infrastructure project in Europe. I spend my days building the platform other teams ship on: Terraform-provisioned OpenStack environments, Ansible-managed Linux fleets, Jenkins pipelines and Grafana dashboards as code.",
        fr: "Ingénieur DevOps basé à Lyon, France, je travaille actuellement chez Enedis sur le programme du compteur communicant Linky — le plus grand projet d'infrastructure intelligente en Europe. Je construis au quotidien la plateforme sur laquelle les autres équipes livrent : environnements OpenStack provisionnés par Terraform, parcs Linux gérés par Ansible, pipelines Jenkins et dashboards Grafana as code."
      },
      {
        en: "Before that, I built big-data batch pipelines at Orange Business Services and industrialized monitoring for one of Morocco's largest banks. That journey — from data engineering to monitoring to full DevOps — taught me to care about the whole lifecycle: build, deploy, observe, improve.",
        fr: "Auparavant, j'ai construit des pipelines big data chez Orange Business Services et industrialisé la supervision pour l'une des plus grandes banques du Maroc. Ce parcours — du data engineering à la supervision jusqu'au DevOps — m'a appris à m'intéresser au cycle de vie complet : construire, déployer, observer, améliorer."
      }
    ],
    facts: [
      { icon: "pin",    label: { en: "Location",    fr: "Localisation" },   value: { en: "Lyon, France",            fr: "Lyon, France" } },
      { icon: "globe",  label: { en: "Languages",   fr: "Langues" },        value: { en: "Arabic, French, English", fr: "Arabe, Français, Anglais" } }
    ]
  },

  experience: [
    {
      sector: { en: "Energy", fr: "Énergie" },
      sectorIcon: "zap",
      company: "Enedis",
      logoText: "EN",
      role: { en: "DevOps Engineer", fr: "Ingénieur DevOps" },
      period: { en: "Feb 2023 — Present", fr: "Fév. 2023 — Aujourd'hui" },
      location: { en: "Lyon, France", fr: "Lyon, France" },
      summary: {
        en: "Platform engineering for the Linky smart-meter program.",
        fr: "Platform engineering pour le programme du compteur Linky."
      },
      bullets: [
        { en: "Provision OpenStack infrastructure environments with Terraform; automate configuration and deployments on Linux with Ansible.",
          fr: "Provisionnement d'environnements OpenStack avec Terraform ; automatisation des configurations et déploiements Linux avec Ansible." },
        { en: "Build and maintain CI/CD pipelines on Jenkins (Groovy) and Docker images for build and deployment.",
          fr: "Construction et maintenance de pipelines CI/CD sur Jenkins (Groovy) et d'images Docker pour le build et le déploiement." },
        { en: "Manage Grafana dashboards as code, production releases and cross-team support.",
          fr: "Gestion des dashboards Grafana as code, des releases de production et du support des équipes." }
      ],
      tags: ["OpenStack", "Terraform", "Ansible", "Jenkins", "Groovy", "Docker", "Grafana"]
    },
    {
      sector: { en: "Telecom", fr: "Télécom" },
      sectorIcon: "radio",
      company: "Orange Business Services",
      logoText: "OB",
      role: { en: "Data & DevOps Engineer", fr: "Ingénieur Data & DevOps" },
      period: { en: "Apr 2022 — Jan 2023", fr: "Avr. 2022 — Janv. 2023" },
      location: { en: "Rabat, Morocco", fr: "Rabat, Maroc" },
      summary: {
        en: "Big-data batch platform for telecom analytics.",
        fr: "Plateforme big data batch pour l'analytics télécom."
      },
      bullets: [
        { en: "Managed Hadoop HDFS storage and built batch workflows with Spark (Scala) and Hive.",
          fr: "Gestion du stockage Hadoop HDFS et création de workflows batch avec Spark (Scala) et Hive." },
        { en: "Automated UAT/PROD deployments with GitLab CI pipelines.",
          fr: "Automatisation des déploiements UAT/PROD avec des pipelines GitLab CI." },
        { en: "Maintained the Ansible codebase and managed source code on GitLab.",
          fr: "Maintenance du socle Ansible et gestion du code source sur GitLab." }
      ],
      tags: ["Hadoop", "Spark", "Scala", "Hive", "GitLab CI", "Ansible", "Python"]
    },
    {
      sector: { en: "Finance", fr: "Finance" },
      sectorIcon: "landmark",
      company: "Attijariwafa Bank",
      logoText: "AW",
      role: { en: "DevOps Engineer", fr: "Ingénieur DevOps" },
      period: { en: "Jan 2021 — Apr 2022", fr: "Janv. 2021 — Avr. 2022" },
      location: { en: "Casablanca, Morocco", fr: "Casablanca, Maroc" },
      summary: {
        en: "Monitoring industrialization for online banking.",
        fr: "Industrialisation de la supervision pour la banque en ligne."
      },
      bullets: [
        { en: "Automated monitoring of new production platforms with Dynatrace, Ansible and Python.",
          fr: "Monitoring automatisé des nouvelles plateformes de production avec Dynatrace, Ansible et Python." },
        { en: "Ran CI/CD pipelines on Jenkins and GitLab CI; grew a shared Dockerfile repository.",
          fr: "Pipelines CI/CD sur Jenkins et GitLab CI ; développement d'un référentiel partagé de Dockerfiles." },
        { en: "Built monitoring dashboards on Kibana and Dynatrace.",
          fr: "Création de dashboards de supervision sur Kibana et Dynatrace." }
      ],
      tags: ["Dynatrace", "Ansible", "Python", "Jenkins", "GitLab CI", "ELK"]
    },
    {
      sector: { en: "Finance", fr: "Finance" },
      sectorIcon: "landmark",
      company: "Attijariwafa Bank",
      logoText: "AW",
      role: { en: "IT Monitoring Analyst", fr: "Analyste Supervision IT" },
      period: { en: "Oct 2018 — Dec 2020", fr: "Oct. 2018 — Déc. 2020" },
      location: { en: "Casablanca, Morocco", fr: "Casablanca, Maroc" },
      summary: {
        en: "24/7 observability for critical banking systems.",
        fr: "Observabilité 24/7 des systèmes bancaires critiques."
      },
      bullets: [
        { en: "Monitored infrastructure and applications, tracked alerts and performed root-cause analysis.",
          fr: "Supervision des infrastructures et applications, suivi des alertes et analyse des causes racines." },
        { en: "Analyzed logs for online banking services (Attijari Net & Attijari Mobile).",
          fr: "Analyse des logs de la banque en ligne (Attijari Net & Attijari Mobile)." },
        { en: "Reported IT performance to top management; supported ops teams on incidents.",
          fr: "Rapports de performance IT pour la direction générale ; support des équipes exploitation sur les incidents." }
      ],
      tags: ["Dynatrace", "ELK", "Linux", "AIX", "Nginx", "Oracle DB"]
    }
  ],

  skills: [
    {
      icon: "code",
      category: { en: "Programming", fr: "Programmation" },
      items: ["Python", "Scala", "Groovy", "Java", "SQL", "Bash"]
    },
    {
      icon: "infinity",
      category: { en: "CI/CD & DevOps", fr: "CI/CD & DevOps" },
      items: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Ansible", "Terraform"]
    },
    {
      icon: "cloud",
      category: { en: "Cloud & Infrastructure", fr: "Cloud & Infrastructure" },
      items: ["OpenStack", "AWS", "Linux RHEL", "Debian/Ubuntu", "Infoblox"]
    },
    {
      icon: "chart",
      category: { en: "Observability", fr: "Observabilité" },
      items: ["Grafana", "ELK Stack", "Dynatrace", "Telegraf", "Kibana"]
    },
    {
      icon: "database",
      category: { en: "Data Engineering", fr: "Data Engineering" },
      items: ["Hadoop", "Spark", "Hive", "Kafka", "Oozie"]
    },
    {
      icon: "users",
      category: { en: "Practices", fr: "Pratiques" },
      items: ["Scrum", "Code Review", "ITIL", "GitOps"]
    }
  ],

  projects: [
    {
      title: { en: "Linky CI/CD Platform", fr: "Plateforme CI/CD Linky" },
      description: {
        en: "Jenkins pipeline factory with shared Groovy libraries, Docker-based build agents and Grafana dashboards as code — serving dozens of teams on France's smart-meter program.",
        fr: "Fabrique de pipelines Jenkins avec librairies Groovy partagées, agents de build Docker et dashboards Grafana as code — au service de dizaines d'équipes sur le programme du compteur communicant."
      },
      tags: ["Jenkins", "Groovy", "Docker", "Grafana"],
      link: ""
    },
    {
      title: { en: "Telco Batch Analytics", fr: "Analytics Batch Télécom" },
      description: {
        en: "Spark-on-Hadoop batch workflows feeding Hive data marts, with fully automated UAT/PROD deliveries via GitLab CI and Ansible.",
        fr: "Workflows batch Spark sur Hadoop alimentant des data marts Hive, avec des livraisons UAT/PROD entièrement automatisées via GitLab CI et Ansible."
      },
      tags: ["Spark", "Scala", "Hadoop", "GitLab CI"],
      link: ""
    },
    {
      title: { en: "Monitoring as Code", fr: "Monitoring as Code" },
      description: {
        en: "Industrialized monitoring rollout for banking platforms: Dynatrace auto-instrumentation via Ansible, alerting rules as code and Kibana dashboards.",
        fr: "Déploiement industrialisé de la supervision pour des plateformes bancaires : auto-instrumentation Dynatrace via Ansible, règles d'alerting as code et dashboards Kibana."
      },
      tags: ["Dynatrace", "Ansible", "Python", "ELK"],
      link: ""
    }
  ],

  education: [
    {
      year: "2020",
      degree: { en: "Master's in Analytics & Big Data", fr: "Master Analytics & Big Data" },
      school: { en: "Hassan 1st University — Settat, Morocco", fr: "Université Hassan 1er — Settat, Maroc" }
    },
    {
      year: "2018",
      degree: { en: "Bachelor's in Database Administration & Web Technologies", fr: "Licence Administration de Bases de Données et Technologies Web" },
      school: { en: "Hassan 1st University — Settat, Morocco", fr: "Université Hassan 1er — Settat, Maroc" }
    },
    {
      year: "2017",
      degree: { en: "Specialized Technician in Computer Development", fr: "Technicien Spécialisé en Développement Informatique" },
      school: { en: "Institute of Applied Technology — Casablanca, Morocco", fr: "Institut des Technologies Appliquées — Casablanca, Maroc" }
    }
  ],

  certifications: [
    { name: "IBM Big Data Engineer V2 Mastery Award", issuer: "IBM" }
  ],

  contact: {
    heading:  { en: "Let's work together", fr: "Travaillons ensemble" },
    sub: {
      en: "Have a project, a platform to build or a role to fill? My inbox is always open.",
      fr: "Un projet, une plateforme à construire ou un poste à pourvoir ? Ma boîte mail est toujours ouverte."
    },
    cta: { en: "Say hello", fr: "Dites bonjour" },
    labels: { email: {en: "Email", fr: "Email"}, linkedin: {en: "LinkedIn", fr: "LinkedIn"} }
  },

  footer: {
    made: { en: "Designed & built by Yassine Daouji", fr: "Conçu et réalisé par Yassine Daouji" }
  }
};
