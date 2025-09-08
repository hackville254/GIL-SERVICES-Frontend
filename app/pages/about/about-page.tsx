import { HeroAbout } from "./hero-about"
import { MissionVision } from "./mission-vision"
import { TeamSection } from "./team-section"

export function AboutPage() {
  return (
    <main className="min-h-screen">
      <HeroAbout />
      <MissionVision />
      <TeamSection />
    </main>
  )
}