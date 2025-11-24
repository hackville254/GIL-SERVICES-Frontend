import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { motion } from "framer-motion"
import { Link } from "react-router"

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
      image: "https://picsum.photos/id/1011/400/250", // image stable Picsum
      category: "Services"
    },
    {
      id: 2,
      title: "Digitalisation des PME au Cameroun",
      excerpt: "Comment les PME camerounaises peuvent tirer parti de la transformation digitale.",
      date: "10 Janvier 2025",
      image: "https://picsum.photos/id/1025/400/250",
      category: "Tendances"
    },
    {
      id: 3,
      title: "Nouveau partenariat avec les institutions financières",
      excerpt: "GIL SERVICES renforce ses partenariats pour mieux accompagner vos projets.",
      date: "5 Janvier 2025",
      image: "https://picsum.photos/id/1035/400/250",
      category: "Partenariats"
    }
  ]
}


export function NewsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* En-tête simplifié */}
        <motion.div
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Badge
            className="mb-4 inline-block text-sm font-medium"
          >
            {NEWS_DATA.subtitle}
          </Badge>

          <h2 className="text-3xl font-bold mb-4">
            {NEWS_DATA.title}
          </h2>

          <p className="text-muted-foreground">
            {NEWS_DATA.description}
          </p>
        </motion.div>

        {/* Grille d’articles simplifiée */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {NEWS_DATA.articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full border border-border hover:border-primary/30 transition-colors duration-200">
                {/* Image d’illustration minimale */}
                <div className="w-full overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-40 md:h-44 object-cover border-b border-border"
                  />
                </div>

                <CardHeader className="pb-2 px-6 pt-6">
                  <div className="flex justify-center mb-3">
                    <Badge
                      variant="secondary"
                      className="text-xs font-normal text-white"
                    >
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-medium text-center">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground text-center">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="pt-0 px-6 pb-6 flex items-center justify-between">
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </Badge>
                  <Button
                    variant="link"
                    className="text-primary hover:bg-primary/5 text-sm font-normal"
                  >
                    Lire la suite
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA minimal */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/actualites">
            <Button
              variant="link"
              size="sm"
              className="text-primary hover:bg-primary/5 font-normal"
            >
              Voir toutes les actualités
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}