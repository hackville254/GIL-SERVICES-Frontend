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
      primary: "+237 657 84 20 66",
      secondary: "+237 233 41 18 42",
      tertiary: "+237 672 53 90 31",
      note: "",
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
      primary: "Deido Grand Moulin, Douala Cameroun",
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
            
            const buildWhatsAppLink = (tel: string) =>
              `https://wa.me/${tel.replace(/\s|\+/g, '')}`
            
            const buildTelLink = (tel: string) => 
              `tel:${tel.replace(/\s/g, '')}`

            const isPhone = contact.title === 'Téléphone'
            const isEmail = contact.title === 'Email'

            return (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="h-full"
              >
                <Card className="p-8 text-center bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group h-full flex flex-col items-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {contact.title}
                  </h3>

                  <div className="space-y-3 w-full flex flex-col items-center">
                    {/* Primary info */}
                    {contact.primary && (
                      <div className="flex justify-center w-full">
                        {isPhone ? (
                          <a
                            href={buildTelLink(contact.primary)}
                            className="text-base font-medium text-foreground hover:text-primary transition-colors block p-1"
                          >
                            {contact.primary}
                          </a>
                        ) : isEmail ? (
                          <a
                            href={`mailto:${contact.primary}`}
                            className="text-base font-medium text-foreground hover:text-primary transition-colors block p-1"
                          >
                            {contact.primary}
                          </a>
                        ) : (
                          <p className="text-base font-medium text-foreground p-1">
                            {contact.primary}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Secondary info */}
                    {contact.secondary && (
                      <div className="flex justify-center w-full">
                        {isPhone ? (
                          <a
                            href={buildTelLink(contact.secondary)}
                            className="text-base font-medium text-foreground hover:text-primary transition-colors block p-1"
                          >
                            {contact.secondary}
                          </a>
                        ) : (
                          <p className="text-base font-medium text-foreground p-1">
                            {contact.secondary}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Tertiary info - WhatsApp for Phone */}
                    {contact.tertiary && (
                      <div className="flex justify-center w-full">
                        {isPhone ? (
                          <a
                            href={buildWhatsAppLink(contact.tertiary)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base font-medium text-foreground hover:text-[#25D366] transition-colors flex items-center gap-2 p-1"
                          >
                            <span>{contact.tertiary}</span>
                            <span className="text-xs bg-[#25D366]/10 text-[#25D366] px-2 py-0.5 rounded-full border border-[#25D366]/20">WhatsApp</span>
                          </a>
                        ) : (
                          <p className="text-base font-medium text-foreground p-1">
                            {contact.tertiary}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Optional note */}
                    {contact.note && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {contact.note}
                      </p>
                    )}
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