import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Container } from "./ui/container"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  onCtaClick: () => void
}

export function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  onCtaClick 
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {title}
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {subtitle}
            </p>
            <Button 
              size="lg" 
              onClick={onCtaClick}
              className="bg-accent hover:bg-accent/90"
            >
              {ctaText}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] w-full"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-10" />
            <div className="absolute inset-0 rounded-2xl bg-[url('/placeholder.svg')] bg-cover bg-center bg-no-repeat" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}