import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Phone, Mail, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const CTA_DATA = {
  title: "Prêt à transformer votre entreprise ?",
  subtitle: "Contactez-nous",
  description: "Nos experts sont à votre disposition pour analyser vos besoins et vous proposer les solutions les plus adaptées à votre entreprise.",
  actions: [
    {
      icon: Phone,
      label: "Appelez-nous",
      action: "Consultation téléphonique"
    },
    {
      icon: Mail,
      label: "Écrivez-nous",
      action: "Devis personnalisé"
    },
    {
      icon: Calendar,
      label: "Planifiez un RDV",
      action: "Rendez-vous gratuit"
    }
  ]
}

export function CtaServices() {
  return (
    <Card className="min-h-[60vh] border-0 rounded-none bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden flex items-center">
      {/* Background gradients - Parfaitement symétriques */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-primary/5" />
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--secondary),0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(var(--accent),0.1)_0%,transparent_50%)]" />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="secondary"
              className="text-base font-medium bg-primary/15 text-primary px-8 py-3 backdrop-blur-sm border border-primary/30"
            >
              {CTA_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {CTA_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {CTA_DATA.description}
          </motion.p>
          
          {/* <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {CTA_DATA.actions.map((action, index) => {
              const IconComponent = action.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Button 
                    size="lg" 
                    variant={index === 1 ? "default" : "outline"}
                    className={`px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      index === 1 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : "hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    }`}
                  >
                    <IconComponent className="mr-3 h-6 w-6" />
                    <div className="flex flex-col items-start">
                      <span>{action.label}</span>
                      <span className="text-sm opacity-80">{action.action}</span>
                    </div>
                  </Button>
                </motion.div>
              )
            })}
          </motion.div> */}
        </motion.div>
      </div>
    </Card>
  )
}