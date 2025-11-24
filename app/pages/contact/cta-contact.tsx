import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { ArrowRight, Calendar, Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const CTA_CONTACT_DATA = {
  title: "Prêt à démarrer votre projet ?",
  subtitle: "Passons à l'action",
  description: "Nos experts sont prêts à vous accompagner. Planifiez dès maintenant votre consultation gratuite et découvrez comment nous pouvons transformer vos idées en réalité.",
  contacts: [
    {
      id: 1,
      icon: Phone,
      title: "Téléphone",
      value: "+237 657 842 066",
      color: "primary",
      action: "tel:+237657842066",
      variant: "outline" as const
    },
    {
      id: 2, 
      icon: Mail,
      title: "Email",
      value: "contact@gil-services.com",
      color: "secondary",
      action: "mailto:contact@gil-services.com",
      variant: "outline" as const
    },
    {
      id: 3,
      icon: Calendar,
      title: "Planifier un RDV",
      value: "Consultation gratuite",
      color: "accent",
      action: "https://calendly.com/gilservicessarl/session-de-conseil-strategique-de-30-minutes?back=1&month=2025-09",
      variant: "default" as const,
      primary: true
    }
  ]
}

export function CtaContact() {
  const handleAction = (action: string) => {
    if (action.startsWith('http')) {
      window.open(action, '_blank')
    } else {
      window.location.href = action
    }
  }

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
              {CTA_CONTACT_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {CTA_CONTACT_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {CTA_CONTACT_DATA.description}
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {CTA_CONTACT_DATA.contacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    variant={contact.variant}
                    onClick={() => handleAction(contact.action)}
                    className={`w-full sm:w-auto px-8 py-4 text-lg font-semibold hover:shadow-2xl transition-all duration-300 ${
                      contact.primary 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'hover:bg-primary/10 hover:text-primary hover:border-primary'
                    }`}
                  >
                    <IconComponent className="mr-2 h-5 w-5" />
                    <span className="whitespace-nowrap">{contact.title}</span>
                    {contact.primary && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </Card>
  )
}