import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { WordbookSection } from '@/components/wordbook-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WordbookSection />
      <Footer />
    </main>
  )
}
