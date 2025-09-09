import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

// Variables pour le CTA carrières
const CTA_DATA = {
  title: "Prêt à Nous Rejoindre ?",
  description: "Contactez notre équipe RH pour en savoir plus sur nos opportunités de carrière et notre culture d'entreprise.",
  contact: {
    email: "contact@gil-services.com",
    phone: "+237 657 842 066", 
    address: "Deido Grand Moulin, Douala Cameroun"
  }
}

export function CtaCareers() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(var(--secondary),0.1)_0%,transparent_50%)]" />
          </div>
          
          <CardContent className="relative z-10 text-center py-16 px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {CTA_DATA.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {CTA_DATA.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">
                    {CTA_DATA.contact.email}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Téléphone</div>
                  <div className="text-sm text-muted-foreground">
                    {CTA_DATA.contact.phone}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm font-medium">Adresse</div>
                  <div className="text-sm text-muted-foreground text-center">
                    {CTA_DATA.contact.address}
                  </div>
                </motion.div>
              </div>

              <Button 
                onClick={() => {
                  const subject = encodeURIComponent('Demande d\'information - Carrières')
                  const body = encodeURIComponent('Bonjour,\n\nJe souhaite obtenir plus d\'informations sur vos opportunités de carrière.\n\nCordialement')
                  window.location.href = `mailto:${CTA_DATA.contact.email}?subject=${subject}&body=${body}`
                }}
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 px-8"
              >
                <Mail className="w-4 h-4 mr-2" />
                Nous Contacter
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}