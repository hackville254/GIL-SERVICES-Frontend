import { Badge } from "~/components/ui/badge"
import { Users, Settings, Headphones, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const SERVICES_DATA = {
  title: "Nos Services Spécialisés",
  subtitle: "Solutions Complètes",
  description: "Découvrez notre gamme complète de services conçus pour accompagner votre entreprise à chaque étape de son développement.",
  services: [
    {
      id: "conseil",
      icon: Users,
      title: "Conseil",
      shortDescription: "Avis et recommandations stratégiques pour vos problématiques d'entreprise",
      description: "Il s'agit des avis ou recommandations délivrés de façon ponctuelle sur ce qu'il convient de faire face à une problématique d'entreprise spécifique et préalablement définie, ou face à une problématique globale.",
      detailedContent: "Notre équipe d'experts analyse en profondeur votre situation pour vous proposer des solutions stratégiques adaptées à vos enjeux business. Nous intervenons sur des problématiques variées : restructuration organisationnelle, optimisation des processus, stratégie de développement, gestion des risques, et bien plus encore. Chaque mission de conseil est unique et personnalisée selon vos besoins spécifiques.",
      features: ["Expertise pointue", "Solutions sur mesure", "Accompagnement personnalisé", "Analyse approfondie"]
    },
    {
      id: "accompagnement-operationnel",
      icon: Settings,
      title: "Accompagnement opérationnel",
      shortDescription: "Assistance dans la réalisation de vos objectifs opérationnels",
      description: "Il s'agit des services qui consistent à assister les organisations en réalisant pour leur compte de façon ponctuelle ou permanente durant une période définie différentes actions nécessaires dans l'atteinte de leurs objectifs.",
      detailedContent: "Nous nous intégrons à vos équipes pour garantir la réussite de vos projets stratégiques. Notre approche collaborative permet un transfert de compétences efficace tout en assurant l'atteinte de vos objectifs. Que ce soit pour un projet de transformation digitale, une réorganisation interne ou le lancement d'une nouvelle activité, nous vous accompagnons à chaque étape.",
      features: ["Mise en œuvre", "Suivi continu", "Optimisation", "Gestion de projet"]
    },
    {
      id: "assistance-operationnelle",
      icon: Headphones,
      title: "Assistance opérationnelle",
      shortDescription: "Support quotidien pour maintenir votre compétitivité",
      description: "Il s'agit des services qui permettent de veiller au bon fonctionnement des organisations et d'accompagner les équipes opérationnelles au quotidien tout en permettant aux organisations de rester compétitives et de gagner en efficacité.",
      detailedContent: "Un support permanent pour optimiser vos processus métier et maintenir un niveau de performance élevé. Notre assistance couvre tous les aspects opérationnels : support technique, maintenance préventive, formation continue des équipes, et monitoring des performances. Nous assurons la continuité de vos activités tout en identifiant les opportunités d'amélioration.",
      features: ["Support 24/7", "Maintenance", "Formation équipes", "Monitoring continu"]
    },
    {
      id: "formations",
      icon: GraduationCap,
      title: "Formations",
      shortDescription: "Programmes certifiants en gestion et finance d'entreprise",
      description: "Formations pour les professionnels de la Gestion et Finance d'entreprise. Répondre aux enjeux futurs d'un secteur en pleine mutation et développer vos compétences pour les enjeux stratégiques de votre entreprise.",
      detailedContent: "Des programmes certifiants adaptés aux besoins actuels du marché et aux évolutions réglementaires. Nos formations couvrent l'ensemble des domaines de la gestion et de la finance : comptabilité, contrôle de gestion, audit, fiscalité, finance d'entreprise, et management. Chaque programme est conçu pour être immédiatement applicable dans votre contexte professionnel.",
      features: ["Programmes certifiants", "Formation continue", "Expertise métier", "Accompagnement RH"]
    }
  ]
}

export function ServicesList() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
      {/* Background gradients - Parfaitement symétriques */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(var(--secondary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(var(--accent),0.06)_0%,transparent_40%)]" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative">
        {/* Header Section - Centré parfaitement */}
        <motion.div 
          className="text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge
              variant="secondary"
              className="text-sm font-medium bg-primary/10 text-primary px-6 py-2 backdrop-blur-sm border border-primary/20"
            >
              {SERVICES_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {SERVICES_DATA.title}
          </motion.h1>
          
          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {SERVICES_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Services List - Format professionnel */}
        <div className="max-w-6xl mx-auto space-y-16">
          {SERVICES_DATA.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.section
                key={service.id}
                id={service.id} // Ancre individuelle pour chaque service
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                className="scroll-mt-20 border-b border-primary/10 pb-16 last:border-b-0"
              >
                {/* En-tête du service - Nom à gauche, description courte à droite */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  {/* Nom du service avec icône */}
                  <div className="lg:col-span-5 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        {service.title}
                      </h2>
                      <Badge variant="outline" className="border-primary/20 text-primary font-medium text-sm px-3 py-1">
                        #{service.id}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Description courte */}
                  <div className="lg:col-span-7 flex items-center">
                    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
                
                {/* Description détaillée */}
                <div className="space-y-8">
                  {/* Description principale */}
                  <div className="bg-muted/30 rounded-2xl p-8 border border-primary/10">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3" />
                      Description du service
                    </h3>
                    <p className="text-foreground leading-relaxed text-lg mb-6">
                      {service.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.detailedContent}
                    </p>
                  </div>
                  
                  {/* Points clés */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center p-4 bg-background/70 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/20 transition-all duration-300"
                      >
                        <ArrowRight className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )
          })}
        </div>
        
        {/* Navigation rapide vers les services */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Navigation rapide</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SERVICES_DATA.services.map((service) => {
              const IconComponent = service.icon
              return (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="inline-flex items-center px-6 py-3 bg-background/70 backdrop-blur-sm border border-primary/20 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  <span className="font-medium">{service.title}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}