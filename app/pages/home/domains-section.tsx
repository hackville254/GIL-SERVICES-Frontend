import { Building2, Calculator, Globe, Smartphone, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { motion } from "framer-motion"

// Variables pour stocker les données des domaines
const DOMAINS_DATA = {
  title: "Nos domaines d'intervention",
  subtitle: "Expertise & Polyvalence",
  description: "Nous avons pour missions d'assister et d'accompagner les entreprises dans la réalisation de leurs objectifs, en menant à bien les projets qui nous sont confiés, en utilisant toutes nos compétences, idées, notre expérience, ainsi que notre portefeuille relationnel.",
  domains: [
    {
      id: 1,
      icon: Building2,
      title: "Création d'entreprise",
      description: "Accompagnement complet dans la création et l'immatriculation de votre entreprise avec un suivi personnalisé",
      image: "/api/placeholder/300/200",
      features: ["SARL/SA", "Immatriculation", "Suivi juridique"],
      size: "large" // Card plus grande
    },
    {
      id: 2,
      icon: Calculator,
      title: "Comptabilité & Gestion",
      description: "Services comptables et de gestion d'entreprise professionnels",
      image: "/api/placeholder/250/180",
      features: ["Comptabilité", "Fiscalité", "Paie"],
      size: "medium"
    },
    {
      id: 3,
      icon: Globe,
      title: "Développement Web",
      description: "Création de sites web et applications web sur mesure",
      image: "/api/placeholder/280/160",
      features: ["Sites web", "E-commerce", "SEO"],
      size: "medium"
    },
    {
      id: 4,
      icon: Smartphone,
      title: "Applications Mobile",
      description: "Développement d'applications mobiles iOS et Android innovantes",
      image: "/api/placeholder/320/220",
      features: ["iOS/Android", "UI/UX", "Maintenance"],
      size: "large" // Card plus grande
    }
  ]
}

export function DomainsSection() {
  return (
    <Card className="min-h-[85vh] border-0 rounded-none bg-gradient-to-bl from-background via-muted/15 to-muted/35 relative overflow-hidden">
      {/* Background gradients - Symétrique comme services section */}
      <div className="absolute inset-0">
        {/* Dégradés symétriques */}
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/8 via-transparent to-primary/6" />
        <div className="absolute inset-0 bg-gradient-to-bl from-accent/6 via-transparent to-secondary/8" />
        
        {/* Dégradés radiaux symétriques */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_25%,rgba(var(--primary),0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_75%,rgba(var(--secondary),0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(var(--accent),0.04)_0%,transparent_60%)]" />
        
        {/* Overlay pour cohérence */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/5 to-transparent" />
      </div>
      
      <CardContent className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative">
        {/* Header Section - Centré symétriquement */}
        <motion.div 
          className="text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="text-sm font-medium bg-secondary/12 text-secondary px-6 py-2 backdrop-blur-sm border border-secondary/25"
            >
              {DOMAINS_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {DOMAINS_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {DOMAINS_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Domains Grid - Layout asymétrique Pinterest style */}
        <div className="max-w-7xl mx-auto">
          {/* Première rangée - 2 cards déséquilibrées */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Card 1 - Grande, à gauche */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/6 z-10" />
                  <img
                    src={DOMAINS_DATA.domains[0].image}
                    alt={DOMAINS_DATA.domains[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <Badge variant="secondary" className="bg-background/95 backdrop-blur-sm p-3 shadow-lg border border-primary/20">
                      <Building2 className="w-6 h-6 text-primary" />
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {DOMAINS_DATA.domains[0].title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {DOMAINS_DATA.domains[0].description}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="flex gap-3 flex-wrap">
                    {DOMAINS_DATA.domains[0].features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-background/60 border-primary/20 text-primary text-sm px-3 py-1.5 font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Card 2 - Petite, à droite */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 to-accent/6 z-10" />
                  <img
                    src={DOMAINS_DATA.domains[1].image}
                    alt={DOMAINS_DATA.domains[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="secondary" className="bg-background/95 backdrop-blur-sm p-2.5 shadow-lg border border-secondary/20">
                      <Calculator className="w-5 h-5 text-secondary" />
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                      {DOMAINS_DATA.domains[1].title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                      {DOMAINS_DATA.domains[1].description}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="flex gap-2 flex-wrap">
                    {DOMAINS_DATA.domains[1].features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-background/60 border-secondary/20 text-secondary text-xs px-2 py-1 font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          
          {/* Deuxième rangée - 2 cards inversées */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 3 - Petite, à gauche */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden h-44">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-primary/6 z-10" />
                  <img
                    src={DOMAINS_DATA.domains[2].image}
                    alt={DOMAINS_DATA.domains[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="secondary" className="bg-background/95 backdrop-blur-sm p-2.5 shadow-lg border border-accent/20">
                      <Globe className="w-5 h-5 text-accent" />
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {DOMAINS_DATA.domains[2].title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                      {DOMAINS_DATA.domains[2].description}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="flex gap-2 flex-wrap">
                    {DOMAINS_DATA.domains[2].features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-background/60 border-accent/20 text-accent text-xs px-2 py-1 font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Card 4 - Grande, à droite */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Card className="h-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden h-60">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/6 z-10" />
                  <img
                    src={DOMAINS_DATA.domains[3].image}
                    alt={DOMAINS_DATA.domains[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <Badge variant="secondary" className="bg-background/95 backdrop-blur-sm p-3 shadow-lg border border-primary/20">
                      <Smartphone className="w-6 h-6 text-primary" />
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {DOMAINS_DATA.domains[3].title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {DOMAINS_DATA.domains[3].description}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="flex gap-3 flex-wrap">
                    {DOMAINS_DATA.domains[3].features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-background/60 border-primary/20 text-primary text-sm px-3 py-1.5 font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}