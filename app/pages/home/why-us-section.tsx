import { CheckCircle, Clock, Award, Users, ArrowRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { motion } from "framer-motion"

// Variables pour stocker les données "Pourquoi nous"
const WHY_US_DATA = {
  title: "Pourquoi choisir GIL SERVICES ?",
  subtitle: "Excellence & Confiance",
  description: "Nous avons pour missions d'assister et d'accompagner les entreprises dans la réalisation de leurs objectifs, en menant à bien les projets qui nous sont confiés, en utilisant toutes nos compétences, idées, notre expérience, ainsi que notre portefeuille relationnel.",
  cta: {
    title: "Contactez-nous !",
    phone: "+(237) 233 411 842",
    description: "Contactez nous et obtenez votre première consultation gratuitement",
    urgency: "L'offre expire dans 24 heures."
  },
  reasons: [
    {
      id: 1,
      icon: CheckCircle,
      title: "Expertise Reconnue",
      description: "Plus de 10 ans d'expérience dans le conseil et l'accompagnement d'entreprises",
      features: ["10+ ans d'expérience", "Conseil expert", "Accompagnement"]
    },
    {
      id: 2,
      icon: Clock,
      title: "Réactivité",
      description: "Création d'entreprise en 72h chrono, satisfait ou remboursé",
      features: ["72h chrono", "Satisfait ou remboursé", "Service rapide"]
    },
    {
      id: 3,
      icon: Award,
      title: "Qualité Garantie",
      description: "Services 100% sur mesure avec un suivi personnalisé",
      features: ["100% sur mesure", "Suivi personnalisé", "Qualité garantie"]
    },
    {
      id: 4,
      icon: Users,
      title: "Équipe Dédiée",
      description: "Une équipe d'experts à votre écoute pour tous vos projets",
      features: ["Équipe d'experts", "À votre écoute", "Tous projets"]
    }
  ]
}

export function WhyUsSection() {
  return (
    <Card className="min-h-[85vh] border-0 rounded-none bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
      {/* Background gradients - Parfaitement symétriques */}
      <div className="absolute inset-0">
        {/* Dégradé principal léger */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3" />
        
        {/* Dégradés radiaux symétriques */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(var(--secondary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(var(--accent),0.06)_0%,transparent_40%)]" />
        
        {/* Overlay subtil pour uniformiser */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
      </div>
      
      <CardContent className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative">
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
              {WHY_US_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {WHY_US_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {WHY_US_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Reasons Grid - Parfaitement aligné et symétrique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">
          {WHY_US_DATA.reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
                className="group flex"
              >
                <Card className="w-full bg-background/70 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Icon Section - Hauteur fixe pour symétrie */}
                  <div className="relative overflow-hidden h-32 bg-gradient-to-br from-primary/8 to-secondary/8 flex items-center justify-center">
                    <div className="absolute top-4 left-4 z-20">
                      <Badge variant="secondary" className="bg-background/95 backdrop-blur-sm p-3 shadow-xl border border-primary/20">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </Badge>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content Section - Flex pour égaliser les hauteurs */}
                  <div className="flex flex-col flex-1">
                    <CardHeader className="pb-4 px-6 pt-6">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center mb-3">
                        {reason.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-center">
                        {reason.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0 pb-4 px-6 flex-1">
                      <div className="flex gap-2 flex-wrap justify-center">
                        {reason.features.map((feature, featureIndex) => (
                          <Badge
                            key={featureIndex}
                            variant="outline"
                            className="bg-background/60 border-primary/25 text-primary text-xs px-3 py-1.5 font-medium"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}