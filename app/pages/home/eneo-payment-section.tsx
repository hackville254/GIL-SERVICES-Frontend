import { motion } from "framer-motion"
import { Badge } from "~/components/ui/badge"
import { Card } from "~/components/ui/card"

const SERVICE_LOGOS = [
  { name: "DGI", src: "/logos/dgi.png" },
  { name: "CANAL+", src: "/logos/canalplus.png" },
  { name: "ENEO", src: "/logos/eneo.jpg" },
  { name: "Camwater", src: "/logos/camwater.jpg" },
  { name: "CNPS / NSIF", src: "/logos/cnps-nsif.png" },
  { name: "GUCE", src: "/logos/guce.png" },
]

export function EneoPaymentSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Badge variant="primary" className="mb-4 inline-block text-sm font-medium text-primary">
            Paiement factures
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Payez vos factures chez‑nous.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Confiez‑nous le paiement de vos factures en toute sécurité et recevez le reçu en{" "}
            <span className="font-semibold text-primary">3 minutes</span>.
          </p>
        </motion.div>

        {/* Logos des services pris en charge */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {SERVICE_LOGOS.map((logo, i) => (
            <div key={i} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-10 w-full object-contain grayscale hover:grayscale-0 transition duration-200"
                // onError={(e) => {
                //   e.currentTarget.src = "/logo.png"
                // }}
              />
            </div>
          ))}
        </motion.div>

        {/* Mise en avant “3 min” + message de confiance */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          <Card className="p-6 border border-border">
            <h3 className="text-xl font-semibold mb-2">Paiement sécurisé</h3>
            <p className="text-sm text-muted-foreground">
              Nous traitons vos factures ENEO de façon fiable et transparente. Reçu officiel délivré après validation.
            </p>
          </Card>

          <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center w-28 h-28 rounded-full border-2 border-primary">
              <span className="text-lg font-bold text-primary">3 min</span>
            </div>
          </div>

          <Card className="p-6 border border-border">
            <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
            <p className="text-sm text-muted-foreground">
              Gil Services, pour mieux vous servir — nous prenons en charge la démarche et le suivi.
            </p>
          </Card>
        </div>

        {/* Points clés Rapide / Sûr / Fiable */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { title: "Rapide", desc: "Votre reçu en quelques minutes." },
            { title: "Sûr", desc: "Processus de paiement sécurisé." },
            { title: "Fiable", desc: "Support et validation sans tracas." },
          ].map((item, idx) => (
            <Card key={idx} className="p-5 border border-border">
              <div className="text-lg font-semibold">{item.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{item.desc}</div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}