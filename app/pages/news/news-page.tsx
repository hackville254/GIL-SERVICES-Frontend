import { HeroNews } from "./hero-news"
import { NewsList } from "./news-list"
import { CtaNews } from "./cta-news"

export function NewsPage() {
  return (
    <main className="min-h-screen">
      <HeroNews />
      <NewsList />
      <CtaNews />
    </main>
  )
}