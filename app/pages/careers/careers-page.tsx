import { HeroCareers } from "./hero-careers"
import { JobsList } from "./jobs-list"
import { CtaCareers } from "./cta-careers"

export function CareersPage() {
  return (
    <main className="min-h-screen">
      <HeroCareers />
      <JobsList />
      <CtaCareers />
    </main>
  )
}