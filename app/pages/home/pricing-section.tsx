import { motion } from "framer-motion"
import { Badge } from "~/components/ui/badge"
import { Card } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Check } from "lucide-react"

const PRICING_DATA = {
  title: "Nos tarifs d’assistances fiscales et sociales",
  subtitle: "Tarification",
  plans: [
    {
      id: 1,
      name: "MENSUEL",
      features: ["Payable en 12 tranches", "Aucune réduction offerte"],
      price: "50 000 FCFA",
      color: "bg-cyan-500",
      borderColor: "border-cyan-500",
      popular: false,
    },
    {
      id: 2,
      name: "TRIMESTRIEL",
      features: ["Payable en 04 tranches", "01 mois offert", "Vous paierez juste pour 11 mois"],
      price: "550 000 FCFA",
      color: "bg-pink-500",
      borderColor: "border-pink-500",
      popular: false,
    },
    {
      id: 3,
      name: "SEMESTRIEL",
      features: ["Payable en 02 tranches", "02 mois offerts", "Vous paierez juste pour 10 mois"],
      price: "500 000 FCFA",
      color: "bg-orange-500",
      borderColor: "border-orange-500",
      popular: false,
    },
    {
      id: 4,
      name: "ANNUEL",
      features: ["Paiement unique", "03 mois offerts", "Vous paierez juste pour 09 mois"],
      price: "450 000 FCFA",
      color: "bg-green-500",
      borderColor: "border-green-500",
      popular: true, // Le plus acheté / Best Value
    },
  ],
}

export function PricingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Badge variant="primary" className="mb-4 inline-block text-sm font-medium text-primary uppercase tracking-wider">
            {PRICING_DATA.subtitle}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{PRICING_DATA.title}</h2>
          <p className="text-muted-foreground">Choisissez le plan qui correspond le mieux à vos besoins et à votre budget.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {PRICING_DATA.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`relative flex flex-col ${plan.popular ? 'lg:-mt-4 lg:mb-4 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                    Le plus populaire
                  </span>
                </div>
              )}

              <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-2 border-primary shadow-md scale-100' 
                  : 'border border-border hover:border-primary/50'
              }`}>
                {/* Header Coloré */}
                <div className={`${plan.color} p-4 text-center text-white`}>
                  <h3 className="text-xl font-bold uppercase tracking-wide">{plan.name}</h3>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-center mb-6">
                     <span className={`inline-block text-2xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-6 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground text-left">
                        <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className="leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? '' : 'variant-outline'}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choisir ce pack
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}