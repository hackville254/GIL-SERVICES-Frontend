import { useRef, useEffect, useState } from "react"

const ANNONCES = [
  "🚀 Découvrez nos nouveaux services en ligne : création de sites web, applications mobiles et conseils stratégiques pour propulser votre entreprise vers le succès numérique.",
  "📞 Contactez-nous au +237 657 842 066 ou via WhatsApp pour un devis gratuit et personnalisé. Notre équipe reste à votre écoute du lundi au samedi.",
  "💬 Suivez-nous sur Facebook, LinkedIn, Instagram et Twitter pour ne rien manquer de nos actualités, astuces et offres spéciales réservées à notre communauté.",
  "✅ Des solutions fiables, scalables et sécurisées pour vos projets web et mobiles. Plus de 150 clients satisfaits au Cameroun et en Afrique centrale."
]

export function PreNavbar() {
  const tickerRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Durée d'affichage d'un message (ms)
  const MESSAGE_DURATION = 5000

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % ANNONCES.length)
    }, MESSAGE_DURATION)
    return () => clearInterval(timer)
  }, [isPaused])

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 right-0 z-60 bg-blue-900 text-white text-xs md:text-sm overflow-hidden h-10 md:h-12 flex items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full overflow-hidden">
        <div
          ref={tickerRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ANNONCES.map((text, i) => (
            <span
              key={i}
              className="w-full flex-shrink-0 px-4 md:px-6 text-center break-words"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
