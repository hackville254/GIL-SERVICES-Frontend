import { motion } from "framer-motion"
import { Badge } from "~/components/ui/badge"
import { Card } from "~/components/ui/card"

const TRUST_DATA = {
  title: "Nous font confiance (client)",
  subtitle: "Témoignages",
  testimonials: [
    {
      id: 1,
      name: "Client Alpha",
      role: "CEO, Alpha SARL",
      quote: "Un accompagnement professionnel et efficace. Notre entreprise a été créée en un temps record."
    },
    {
      id: 2,
      name: "Client Beta",
      role: "Responsable, Beta Consulting",
      quote: "Des conseils précis et une équipe réactive. Nous recommandons vivement GIL SERVICES."
    },
    {
      id: 3,
      name: "Client Gamma",
      role: "Directeur, Gamma PME",
      quote: "La digitalisation de nos processus s’est faite sans friction. Résultats concrets dès le premier mois."
    },
    {
      id: 4,
      name: "Client Delta",
      role: "Fondatrice, Delta Startup",
      quote: "Excellente écoute et solutions sur mesure. Nous avons gagné du temps et de la clarté."
    }
  ]
}

export function TrustSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge className="mb-4 inline-block text-sm font-medium">
            {TRUST_DATA.subtitle}
          </Badge>
          <h2 className="text-3xl font-bold mb-4">{TRUST_DATA.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TRUST_DATA.testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
              className="p-0"
            >
              <blockquote className="space-y-2">
                <p className="text-foreground text-sm">{t.quote}</p>
                <footer className="text-xs text-muted-foreground">
                  — {t.name} • {t.role}
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}