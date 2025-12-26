import { Award, Search, Rocket, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { motion } from "framer-motion"

// Variables pour stocker les données "Nos Valeurs"
const WHY_US_DATA = {
  title: "NOS VALEURS",
  subtitle: "Notre ADN",
  description: "Les piliers fondamentaux qui guident Gil Services dans chaque mission et garantissent votre satisfaction.",
  values: [
    {
      id: 1,
      number: "01",
      title: "COMPÉTENCE",
      description: "La Satisfaction client, Le Savoir-faire, L'Esprit d'équipe, L'Excellence.",
      details: ["Satisfaction client", "Savoir-faire", "Esprit d'équipe", "Excellence"],
      icon: Award,
      color: "bg-blue-600",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      gradient: "from-blue-50 to-blue-100",
    },
    {
      id: 2,
      number: "02",
      title: "TRANSPARENCE",
      description: "Clarté, Sécurité dans toutes nos démarches.",
      details: ["Clarté", "Sécurité"],
      icon: Search,
      color: "bg-emerald-600",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      gradient: "from-emerald-50 to-emerald-100",
    },
    {
      id: 3,
      number: "03",
      title: "CONQUÊTE",
      description: "L'Innovation constante et la recherche de la Performance.",
      details: ["Innovation", "Performance"],
      icon: Rocket,
      color: "bg-purple-700",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      gradient: "from-purple-50 to-purple-100",
    },
    {
      id: 4,
      number: "04",
      title: "PROXIMITÉ CLIENT",
      description: "Une écoute active pour des solutions adaptées.",
      details: ["Écoute", "Disponibilité"],
      icon: Users,
      color: "bg-green-600",
      textColor: "text-green-600",
      borderColor: "border-green-200",
      gradient: "from-green-50 to-green-100",
    },
  ]
}

export function WhyUsSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoratif */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(var(--primary),0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="secondary"
            className="mb-4 text-sm font-medium bg-primary/10 text-primary px-4 py-1 uppercase tracking-wider"
          >
            {WHY_US_DATA.subtitle}
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase tracking-tight">
            {WHY_US_DATA.title}
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            {WHY_US_DATA.description}
          </p>
        </motion.div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {WHY_US_DATA.values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className={`h-full border-2 ${value.borderColor} hover:shadow-xl transition-all duration-300 group overflow-hidden`}>
                  <div className={`h-2 w-full ${value.color}`} />
                  
                  <CardHeader className="relative pb-2">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl ${value.gradient} ${value.textColor}`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className={`text-4xl font-black opacity-10 ${value.textColor}`}>
                        {value.number}
                      </span>
                    </div>
                    
                    <CardTitle className={`text-xl font-bold uppercase mb-2 ${value.textColor}`}>
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground mb-6 min-h-[3rem]">
                      {value.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {value.details.map((detail, idx) => (
                        <span 
                          key={idx} 
                          className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border ${value.borderColor} ${value.textColor}`}
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}