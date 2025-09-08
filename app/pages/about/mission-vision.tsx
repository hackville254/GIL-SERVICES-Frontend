import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { motion } from "framer-motion"
import { Eye, Target, Heart } from "lucide-react"

// Variables pour stocker les données mission/vision
const MISSION_VISION_DATA = {
  title: "Notre Mission & Vision",
  subtitle: "Nos Valeurs",
  description: "Nous croyons en l'excellence, l'innovation et l'accompagnement personnalisé pour faire grandir votre entreprise.",
  values: [
    {
      id: 1,
      icon: Target,
      title: "Notre Mission",
      description: "Accompagner les entreprises dans leur développement en proposant des solutions innovantes et personnalisées qui répondent à leurs besoins spécifiques.",
      color: "primary"
    },
    {
      id: 2,
      icon: Eye,
      title: "Notre Vision",
      description: "Devenir le partenaire de référence des entreprises camerounaises et africaines dans leur transformation digitale et leur croissance.",
      color: "secondary"
    },
    {
      id: 3,
      icon: Heart,
      title: "Nos Valeurs",
      description: "Excellence, intégrité, innovation et engagement sont les piliers qui guident chacune de nos actions et décisions.",
      color: "accent"
    }
  ]
}

export function MissionVision() {
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
              {MISSION_VISION_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {MISSION_VISION_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {MISSION_VISION_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Values Grid - Parfaitement aligné et symétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {MISSION_VISION_DATA.values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
                className="group flex"
              >
                <Card className="w-full bg-background/70 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col">
                  <CardHeader className="pb-4 px-6 pt-8 text-center">
                    <Badge variant="secondary" className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-primary/10 backdrop-blur-sm border border-primary/20 group-hover:bg-primary/15 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </Badge>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center mb-4">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-8 px-6 text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}