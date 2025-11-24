import { motion } from "framer-motion"
import { Badge } from "~/components/ui/badge"
import { Card } from "~/components/ui/card"

const PRICING_DATA = {
  title: "Nos tarifs d’assistances fiscales et sociales",
  subtitle: "Tarification",
  plans: [
    {
      id: 1,
      name: "Mensuel",
      features: ["Payable en 12 tranches", "Aucune réduction offerte"],
      price: "25 000 FCFA",
    },
    {
      id: 2,
      name: "Trimestriel",
      features: ["Payable en 04 tranches", "01 mois offert", "Vous paierez juste pour 11 mois"],
      price: "275 000 FCFA",
    },
    {
      id: 3,
      name: "Semestriel",
      features: ["Payable en 02 tranches", "02 mois offerts", "Vous paierez juste pour 10 mois"],
      price: "250 000 FCFA",
    },
    {
      id: 4,
      name: "Annuel",
      features: ["Paiement unique", "03 mois offerts", "Vous paierez juste pour 09 mois"],
      price: "225 000 FCFA",
    },
  ],
}

export function PricingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge variant="primary" className="mb-4 inline-block text-sm font-medium text-primary">
            {PRICING_DATA.subtitle}
          </Badge>
          <h2 className="text-3xl font-bold mb-4">{PRICING_DATA.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {PRICING_DATA.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.06, duration: 0.3 }}
            >
              <Card className="h-full flex flex-col border border-border hover:border-primary/30 transition-colors duration-200 p-6">
                <h3 className="text-xl font-semibold text-center mb-2">{plan.name}</h3>

                <ul className="mt-3 flex-1 space-y-2 text-sm text-muted-foreground text-center">
                  {plan.features.map((f, i) => (
                    <li key={i} className="leading-relaxed">• {f}</li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t text-center">
                  <span className="inline-block text-xl font-bold tracking-wide text-primary">
                    {plan.price}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}