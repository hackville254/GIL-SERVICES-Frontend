import { Calendar, Clock, Video } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { motion } from "framer-motion"

// Variables pour stocker les données de RDV
const APPOINTMENT_DATA = {
  title: "Réservez votre consultation stratégique",
  subtitle: "Consultation Gratuite",
  description: "Planifiez une session de conseil stratégique de 30 minutes avec nos experts pour discuter de vos projets et objectifs.",
  calendlyUrl: "https://calendly.com/gilservicessarl/session-de-conseil-strategique-de-30-minutes?back=1&month=2025-09",
  features: [
    {
      icon: Calendar,
      title: "Consultation de 30 minutes",
      description: "Session personnalisée selon vos besoins"
    },
    {
      icon: Video,
      title: "En ligne ou en présentiel",
      description: "Choisissez le format qui vous convient"
    },
    {
      icon: Clock,
      title: "Créneaux flexibles",
      description: "Disponibilités du lundi au samedi"
    }
  ]
}

export function AppointmentSection() {
  const openCalendly = () => {
    window.open(APPOINTMENT_DATA.calendlyUrl, '_blank')
  }

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
              {APPOINTMENT_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {APPOINTMENT_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {APPOINTMENT_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Features Grid - Parfaitement aligné et symétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {APPOINTMENT_DATA.features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
                className="group flex"
              >
                <Card className="w-full bg-background/70 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col">
                  <CardContent className="pt-8 pb-4 px-6 text-center">
                    <Badge variant="secondary" className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/10 backdrop-blur-sm border border-primary/20 group-hover:bg-primary/15 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </Badge>
                  </CardContent>
                  <CardHeader className="pt-0 pb-4 px-6">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center mb-3">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-center">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            )
          })}
        </div>
        
        {/* CTA Section - Centré parfaitement */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button 
            size="lg" 
            onClick={openCalendly}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
          >
            Réserver ma consultation gratuite
          </Button>
        </motion.div>
        
        {/* Calendly embed iframe */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="bg-background/70 backdrop-blur-sm border-2 border-primary/10 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src={APPOINTMENT_DATA.calendlyUrl}
                width="100%"
                height="600"
                frameBorder="0"
                title="Calendly - Réservation de consultation"
              />
            </CardContent>
          </Card>
        </motion.div>
      </CardContent>
    </Card>
  )
}