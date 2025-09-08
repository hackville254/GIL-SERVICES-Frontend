import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { motion } from "framer-motion"

// Variables pour stocker les données des actualités
const NEWS_DATA = {
  title: "Dernières Actualités",
  subtitle: "Actualités & Tendances",
  description: "Restez informé de nos dernières réalisations et actualités du secteur",
  articles: [
    {
      id: 1,
      title: "Nouvelle offre de création d'entreprise en 72h",
      excerpt: "Découvrez notre nouvelle offre révolutionnaire pour créer votre entreprise en un temps record.",
      date: "15 Janvier 2025",
      image: "/api/placeholder/400/250",
      category: "Services"
    },
    {
      id: 2,
      title: "Digitalisation des PME au Cameroun",
      excerpt: "Comment les PME camerounaises peuvent tirer parti de la transformation digitale.",
      date: "10 Janvier 2025",
      image: "/api/placeholder/400/250",
      category: "Tendances"
    },
    {
      id: 3,
      title: "Nouveau partenariat avec les institutions financières",
      excerpt: "GIL SERVICES renforce ses partenariats pour mieux accompagner vos projets.",
      date: "5 Janvier 2025",
      image: "/api/placeholder/400/250",
      category: "Partenariats"
    }
  ]
}

export function NewsSection() {
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
      
      <CardContent className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 relative">
        {/* Header Section - Centré parfaitement */}
        <motion.div 
          className="text-center mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge
              variant="secondary"
              className="text-sm font-medium bg-primary/10 text-primary px-6 py-2 backdrop-blur-sm border border-primary/20"
            >
              {NEWS_DATA.subtitle}
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {NEWS_DATA.title}
          </motion.h2>
          
          <motion.p
            className="text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {NEWS_DATA.description}
          </motion.p>
        </motion.div>
        
        {/* Articles Grid - Parfaitement aligné et symétrique */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto mb-16">
          {NEWS_DATA.articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.7 }}
              className="group flex"
            >
              <Card className="w-full bg-background/70 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden flex flex-col">
                {/* Image Section - Hauteur fixe pour symétrie */}
                <div className="relative overflow-hidden h-52">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/8 z-10" />
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <Badge variant="secondary" className="bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="absolute top-6 right-6 z-20">
                    <Badge variant="outline" className="bg-background/95 backdrop-blur-sm border border-primary/20 text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </Badge>
                  </div>
                </div>
                
                {/* Content Section - Flex pour égaliser les hauteurs */}
                <div className="flex flex-col flex-1">
                  <CardHeader className="pb-4 px-6 pt-6">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-center mb-3">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-center">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="pt-0 px-6 pb-6 mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 font-semibold py-3 text-base"
                    >
                      Lire la suite
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section - Centré parfaitement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="bg-background/70 backdrop-blur-sm border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 font-semibold px-12 py-4 text-lg shadow-xl hover:shadow-2xl hover:shadow-primary/20"
          >
            Voir toutes les actualités
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  )
}