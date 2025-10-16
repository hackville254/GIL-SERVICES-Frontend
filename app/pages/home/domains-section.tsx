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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête simplifié */}
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge
            variant="secondary"
              className="text-sm font-medium mb-4 bg-secondary/12 text-secondary px-6 py-2 backdrop-blur-sm border border-secondary/25"
          >
            {DOMAINS_DATA.subtitle}
          </Badge>
          
          <h2 className="text-3xl font-bold mb-4">
            {DOMAINS_DATA.title}
          </h2>
          
          <p className="text-muted-foreground">
            {DOMAINS_DATA.description}
          </p>
        </motion.div>
        
        {/* Grille de domaines simplifiée */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {DOMAINS_DATA.domains.map((domain, index) => {
            const IconComponent = domain.icon
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              >
                <Card className="h-full border border-border hover:border-primary/20 transition-colors duration-200">
                  <CardHeader>
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-full bg-primary/5 mr-3">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-medium">
                        {domain.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm text-muted-foreground">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {domain.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className="text-xs font-normal"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}