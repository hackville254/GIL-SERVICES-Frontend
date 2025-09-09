import { useState, useMemo } from "react"
import { Link } from "react-router"
import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Calendar, Clock, ArrowRight, Filter } from "lucide-react"
import { motion } from "framer-motion"

// Données de démonstration pour les actualités
const NEWS_DATA = [
  {
    id: 1,
    title: "Lancement de notre nouveau service de conseil stratégique",
    excerpt: "GIL SERVICES élargit son offre avec un service de conseil stratégique personnalisé pour accompagner les entreprises dans leur transformation.",
    date: "2024-01-15",
    category: "Services",
    readTime: "5 min",
    image: "/74362.jpg",
    slug: "nouveau-service-conseil-strategique"
  },
  {
    id: 2,
    title: "Partenariat stratégique avec les leaders du secteur IT",
    excerpt: "Nous annonçons un partenariat majeur qui renforcera notre expertise technologique et notre capacité d'innovation.",
    date: "2024-01-10",
    category: "Partenariats",
    readTime: "3 min",
    image: "/74362.jpg",
    slug: "partenariat-strategique-secteur-it"
  },
  {
    id: 3,
    title: "Formation certifiante en gestion d'entreprise",
    excerpt: "Découvrez notre nouvelle formation certifiante qui vous permettra de maîtriser les fondamentaux de la gestion d'entreprise moderne.",
    date: "2023-12-20",
    category: "Formation",
    readTime: "4 min",
    image: "/74362.jpg",
    slug: "formation-certifiante-gestion-entreprise"
  },
  {
    id: 4,
    title: "Bilan 2023 : Une année de croissance exceptionnelle",
    excerpt: "Retour sur une année marquée par une croissance de 85% et l'accompagnement de plus de 200 nouvelles entreprises.",
    date: "2023-12-15",
    category: "Entreprise",
    readTime: "6 min",
    image: "/74362.jpg",
    slug: "bilan-2023-croissance-exceptionnelle"
  },
  {
    id: 5,
    title: "Innovation : Notre approche digitale révolutionnaire",
    excerpt: "Comment GIL SERVICES révolutionne l'accompagnement des entreprises grâce à des outils digitaux innovants.",
    date: "2023-11-28",
    category: "Innovation",
    readTime: "7 min",
    image: "/74362.jpg",
    slug: "approche-digitale-revolutionnaire"
  },
  {
    id: 6,
    title: "Expansion internationale : Ouverture de nouveaux bureaux",
    excerpt: "GIL SERVICES poursuit son expansion avec l'ouverture de nouveaux bureaux en Europe et en Afrique.",
    date: "2023-11-15",
    category: "Expansion",
    readTime: "4 min",
    image: "/74362.jpg",
    slug: "expansion-internationale-nouveaux-bureaux"
  }
]

const CATEGORIES = ["Tous", "Services", "Partenariats", "Formation", "Entreprise", "Innovation", "Expansion"]
const MONTHS = [
  "Tous", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
]
const YEARS = ["Toutes", "2024", "2023", "2022"]

export function NewsList() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [selectedMonth, setSelectedMonth] = useState("Tous")
  const [selectedYear, setSelectedYear] = useState("Toutes")

  const filteredNews = useMemo(() => {
    return NEWS_DATA.filter(article => {
      const articleDate = new Date(article.date)
      const articleMonth = articleDate.getMonth() + 1
      const articleYear = articleDate.getFullYear().toString()

      const categoryMatch = selectedCategory === "Tous" || article.category === selectedCategory
      const monthMatch = selectedMonth === "Tous" || MONTHS.indexOf(selectedMonth) === articleMonth
      const yearMatch = selectedYear === "Toutes" || articleYear === selectedYear

      return categoryMatch && monthMatch && yearMatch
    })
  }, [selectedCategory, selectedMonth, selectedYear])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <section id="news-list" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contenu principal */}
          <div className="flex-1">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium mb-4">
                Actualités
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dernières Nouvelles
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Restez informé de nos dernières actualités, innovations et succès
              </p>
            </motion.div>

            {/* Articles */}
            <div className="grid gap-8">
              {filteredNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-1/3 relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Contenu */}
                      <div className="md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(article.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {article.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                        </CardHeader>
                        
                        <CardContent className="p-0">
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          
                          <Link to={`/actualites/${article.slug}`}>
                            <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                              Lire la suite
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Message si aucun résultat */}
            {filteredNews.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground text-lg">
                  Aucun article trouvé pour les filtres sélectionnés.
                </p>
              </motion.div>
            )}
          </div>

          {/* Barre de filtres à droite */}
          <div className="lg:w-80">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Filtres</h3>
                </div>
                
                <div className="space-y-6">
                  {/* Filtre par catégorie */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Catégorie
                    </label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Filtre par mois */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Mois
                    </label>
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {MONTHS.map(month => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Filtre par année */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Année
                    </label>
                    <Select value={selectedYear} onValueChange={setSelectedYear}>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {YEARS.map(year => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Bouton reset */}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSelectedCategory("Tous")
                      setSelectedMonth("Tous")
                      setSelectedYear("Toutes")
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}