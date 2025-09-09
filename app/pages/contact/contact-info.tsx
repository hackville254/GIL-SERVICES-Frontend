import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Calendar } from "lucide-react"

const CONTACT_INFO_DATA = {
  title: "Nos Coordonnées",
  subtitle: "Informations de contact",
  description: "Prenez contact avec nous ou réservez directement un rendez-vous pour discuter de vos besoins.",
  contacts: [
    {
      id: 1,
      icon: Phone,
      title: "Téléphone",
      primary: "+237 657 842 066",
      color: "primary"
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      primary: "contact@gil-services.com",
      color: "secondary"
    },
    {
      id: 3,
      icon: MapPin,
      title: "Adresse",
      primary: "Douala, Cameroun",
      color: "accent"
    }
  ]
}

export function ContactInfo() {
  const openCalendly = () => {
    window.open('https://calendly.com/gilservicessarl/session-de-conseil-strategique-de-30-minutes?back=1&month=2025-09', '_blank')
  }

  return (
    <Card className="min-h-[80vh] border-0 rounded-none bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
      </div>
      
      <CardContent className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative">
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
              {CONTACT_INFO_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {CONTACT_INFO_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {CONTACT_INFO_DATA.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={openCalendly}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Prendre rendez-vous
            </Button>
          </motion.div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {CONTACT_INFO_DATA.contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="p-8 text-center bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group h-full">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {contact.title}
                  </h3>
                  
                  <p className="text-base font-medium text-foreground">
                    {contact.primary}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}