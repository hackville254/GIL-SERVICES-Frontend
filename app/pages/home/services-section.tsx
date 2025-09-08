import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Users, Headphones, Settings, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

// Variables pour stocker les données des services
const SERVICES_DATA = {
  title: "Nos Services",
  subtitle: "Excellence & Innovation",
  description: "Chez GIL SERVICES, on transforme vos problèmes en solutions ! Notre savoir-faire et notre écoute de vos besoins nous permettent de vous aider à réussir. Nos clients sont contents, et vous aussi vous pouvez faire grandir votre entreprise avec nous dès maintenant.",
  services: [
    {
      id: 1,
      icon: Users,
      title: "Conseil",
      description: "Il s'agit des avis ou recommandations délivrer de façon ponctuelle sur ce qu'il convient de faire face à une problématique...",
      image: "/api/placeholder/300/200",
      features: ["Expertise pointue", "Solutions sur mesure", "Accompagnement personnalisé"]
    },
    {
      id: 2,
      icon: Settings,
      title: "Accompagnement opérationnel",
      description: "Il s'agit des services qui consistent à assister les organisations en réalisant pour leur compte de façon ponctuelle ou...",
      image: "/api/placeholder/300/200",
      features: ["Mise en œuvre", "Suivi continu", "Optimisation"]
    },
    {
      id: 3,
      icon: Headphones,
      title: "Assistance opérationnelle",
      description: "Il s'agit des services qui permettent de veiller au bon fonctionnement des organisations et d'accompagner les équipes...",
      image: "/api/placeholder/300/200",
      features: ["Support 24/7", "Maintenance", "Formation équipes"]
    }
  ]
}

export function ServicesSection() {
  return (
    <Card className="min-h-[80vh] border-0 rounded-none bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
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
              {SERVICES_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {SERVICES_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {SERVICES_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Services Grid - Parfaitement aligné et symétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {SERVICES_DATA.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
                className="group flex"
              >
                <Card className="w-full bg-background/70 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col">
                  {/* Image Section - Hauteur fixe pour symétrie */}
                  <div className="relative overflow-hidden h-52">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 z-10" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <Badge variant="secondary" className="bg-background/95 backdrop-blur-sm p-3 shadow-xl border border-primary/20">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content Section - Flex pour égaliser les hauteurs */}
                  <div className="flex flex-col flex-1">
                    <CardHeader className="pb-4 px-6 pt-6">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center mb-3">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-center">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0 pb-4 px-6 flex-1">
                      <div className="flex gap-2 flex-wrap justify-center">
                        {service.features.map((feature, featureIndex) => (
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
                    
                    <CardFooter className="pt-0 px-6 pb-6">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 font-semibold py-3 text-base"
                      >
                        En savoir plus
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardFooter>
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