import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Mail, Bell, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router"

const CTA_DATA = {
  title: "Restez Connecté",
  subtitle: "Newsletter",
  description: "Ne manquez aucune actualité ! Abonnez-vous à notre newsletter pour recevoir nos dernières nouvelles et insights directement dans votre boîte mail.",
  actions: [
    {
      label: "S'abonner à la newsletter",
      href: "/newsletter",
      variant: "default" as const,
      icon: Mail
    },
    {
      label: "Nous contacter",
      href: "/contact",
      variant: "outline" as const,
      icon: ArrowRight
    }
  ]
}

export function CtaNews() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="border-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
          {/* Background gradients symétriques */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(var(--primary),0.08)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(var(--secondary),0.08)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent" />
          </div>
          
          <CardContent className="relative z-10 p-12 md:p-16">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge et titre */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 mb-8"
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Bell className="mr-2 h-4 w-4" />
                  {CTA_DATA.subtitle}
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  {CTA_DATA.title}
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                {CTA_DATA.description}
              </motion.p>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {CTA_DATA.actions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <motion.div
                      key={action.label}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant={action.variant}
                        size="lg"
                        className="px-8 py-3 text-base font-semibold"
                        asChild
                      >
                        <Link to={action.href}>
                          <Icon className="mr-2 h-5 w-5" />
                          {action.label}
                        </Link>
                      </Button>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}