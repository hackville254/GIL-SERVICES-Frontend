import { motion } from "framer-motion"
import { Badge } from "~/components/ui/badge"

const PARTNERS_DATA = {
  title: "Nos partenaires",
  subtitle: "Collaboration & Réseau",
  logos: [
    { id: 1, name: "Partenaire A", src: "/logo.png" },
    { id: 2, name: "Partenaire B", src: "https://picsum.photos/seed/partner-b/120/60" },
    { id: 3, name: "Partenaire C", src: "https://picsum.photos/seed/partner-c/120/60" },
    { id: 4, name: "Partenaire D", src: "https://picsum.photos/seed/partner-d/120/60" },
    { id: 5, name: "Partenaire E", src: "https://picsum.photos/seed/partner-e/120/60" },
    { id: 6, name: "Partenaire F", src: "https://picsum.photos/seed/partner-f/120/60" }
  ]
}

export function PartnersSection() {
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
            {PARTNERS_DATA.subtitle}
          </Badge>
          <h2 className="text-3xl font-bold mb-4">{PARTNERS_DATA.title}</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {PARTNERS_DATA.logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              className="flex items-center justify-center p-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-10 w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}