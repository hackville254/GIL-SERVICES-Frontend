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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header Section - Simplifié */}
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge
            variant="secondary"
              className="text-sm font-medium bg-primary/10 text-primary px-6 py-2 mb-7 md:mb-14 backdrop-blur-sm border border-primary/20"
          >
            {SERVICES_DATA.subtitle}
          </Badge>
          
          <h2 className="text-3xl font-bold mb-4">
            {SERVICES_DATA.title}
          </h2>
          
          <p className="text-muted-foreground">
            {SERVICES_DATA.description}
          </p>
        </motion.div>
        
        {/* Services Grid - Simplifié */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES_DATA.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border border-border hover:border-primary/30 transition-colors duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-4 flex justify-center">
                      <div className="p-2 rounded-full bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-medium text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {service.features.map((feature, featureIndex) => (
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
                  
                  <CardFooter className="pt-0 flex justify-center">
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary hover:bg-primary/5 text-sm font-normal"
                    >
                      En savoir plus
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}