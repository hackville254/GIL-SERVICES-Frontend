import { Badge } from "~/components/ui/badge"
import { Card, CardContent } from "~/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Briefcase, Users, Award, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Variables pour stocker les données du hero carrières
const HERO_CAREERS_DATA = {
  title: "Rejoignez Notre Équipe",
  subtitle: "Carrières chez GIL SERVICES",
  description: "Nous recherchons des talents passionnés pour rejoindre notre équipe dynamique. Chez GIL SERVICES, nous offrons un environnement de travail stimulant où chaque membre peut s'épanouir et contribuer à notre succès collectif.",
  stats: [
    {
      icon: Briefcase,
      number: 5,
      suffix: "+",
      label: "Postes ouverts"
    },
    {
      icon: Users,
      number: 25,
      suffix: "+",
      label: "Collaborateurs"
    },
    {
      icon: Award,
      number: 3,
      suffix: "",
      label: "Années de croissance"
    },
    {
      icon: TrendingUp,
      number: 100,
      suffix: "%",
      label: "Évolution garantie"
    }
  ]
}

const CountUpAnimation = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const isInView = useInView(elementRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  )
}

export function HeroCareers() {
  return (
    <Card className="min-h-[80vh] border-0 rounded-none bg-gradient-to-br from-background via-muted/20 to-muted/40 relative overflow-hidden">
      {/* Background gradients - Parfaitement symétriques */}
      <div className="absolute inset-0">
        {/* Dégradé principal léger */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/3 via-transparent to-primary/3" />
        
        {/* Dégradés radiaux symétriques */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(var(--primary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(var(--secondary),0.06)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,rgba(var(--accent),0.06)_0%,transparent_40%)]" />
        
        {/* Overlay subtil pour uniformiser */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent" />
      </div>
      
      <CardContent className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
              {HERO_CAREERS_DATA.subtitle}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              {HERO_CAREERS_DATA.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {HERO_CAREERS_DATA.description}
            </p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {HERO_CAREERS_DATA.stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center space-y-2"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    <CountUpAnimation target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}