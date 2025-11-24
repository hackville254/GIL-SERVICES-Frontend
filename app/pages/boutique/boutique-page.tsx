import { motion } from "framer-motion"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardFooter } from "~/components/ui/card"
import { Button } from "~/components/ui/button"

type Product = {
  id: number
  name: string
  image: string
  description: string
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pack Création d'Entreprise",
    image: "/74362.jpg",
    description: "Formalités, conseils et accompagnement complet pour démarrer sereinement.",
  },
  {
    id: 2,
    name: "Optimisation Fiscale",
    image: "/74362.jpg",
    description: "Audit et mise en conformité pour réduire les risques et optimiser les coûts.",
  },
  {
    id: 3,
    name: "Digitalisation & Outils",
    image: "/74362.jpg",
    description: "Solutions digitales pragmatiques pour fluidifier vos opérations au quotidien.",
  },
  {
    id: 4,
    name: "Conseil Stratégique",
    image: "/74362.jpg",
    description: "Vision, trajectoire et plan d’action pour une croissance maîtrisée.",
  },
  {
    id: 5,
    name: "Accompagnement CNPS/ENEO",
    image: "/74362.jpg",
    description: "Gestion de vos démarches et paiements officiels, en toute sécurité.",
  },
  {
    id: 6,
    name: "Formation Express",
    image: "/74362.jpg",
    description: "Sessions courtes et efficaces pour monter en compétence rapidement.",
  },
]

export function BoutiquePage() {
  const SHOP_URL = "https://shop.op-markets.com/o9tx6/4wysd"
  const handleBuy = (product: Product) => {
    window.open(SHOP_URL, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero banner — clean & professional */}
      <section className="relative bg-gradient-to-br mt-10 md:mt-20 from-muted/10 via-background to-muted/10 overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="py-16 text-center">
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Badge variant="primary" className="mb-3 inline-block text-sm font-medium text-primary">Boutique</Badge>
              <h1 className="text-3xl font-semibold tracking-tight">Nos solutions prêtes à l’emploi</h1>
              <p className="mt-2 text-muted-foreground">
                Des outils conçus pour simplifier la gestion de votre entreprise.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
                {[
                  { t: "Rapide", d: "Commande en 2 min" },
                  { t: "Sécurisé", d: "Paiement protégé" },
                  { t: "Support", d: "Réponse sous 24 h" },
                ].map((b, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-border bg-background/60">
                    <span className="font-medium">{b.t}</span> · <span className="text-muted-foreground">{b.d}</span>
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border hover:border-primary/50 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Commander
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA mobile sticky */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-20">
        <div className="mx-auto max-w-md px-4">
          <a
            href="https://shop.op-markets.com/o9tx6"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3 rounded-md border border-border bg-background/80 backdrop-blur hover:border-primary/40 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Acheter maintenant
          </a>
        </div>
      </div>

      {/* Grille produits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="text-3xl font-bold">Nos Solutions</h2>
            <p className="mt-2 text-muted-foreground">Des outils conçus pour booster votre activité dès aujourd’hui.</p>
          </motion.div>

          {/* Grille produits – symétrie et qualité visuelle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, rotateY: 15, y: 40 }}
                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 90 }}
                className="group perspective-1000"
              >
                <Card className="relative h-full flex flex-col rounded-2xl border border-border/40 bg-gradient-to-br from-background via-background to-muted/20 shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "/logo.png"
                        }}
                        aria-labelledby={`product-title-${product.id}`}
                        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                        <h3 id={`product-title-${product.id}`} className="text-xl font-bold text-white drop-shadow-md">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto p-4 border-t border-border/30 flex justify-center">
                    <motion.a
                      href={SHOP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Acheter ${product.name}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/90 text-primary-foreground text-sm font-semibold shadow-md hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Acheter
                    </motion.a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default BoutiquePage