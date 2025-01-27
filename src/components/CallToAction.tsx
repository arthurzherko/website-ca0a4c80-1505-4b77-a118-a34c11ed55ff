import { Button } from "./ui/button"
import { Container } from "./ui/container"

interface CallToActionProps {
  title: string
  description: string
  buttonText: string
  onAction: () => void
}

export function CallToAction({
  title,
  description,
  buttonText,
  onAction,
}: CallToActionProps) {
  return (
    <section className="bg-accent py-20 text-accent-foreground">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <p className="mb-8 text-lg opacity-90">
            {description}
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={onAction}
            className="bg-white text-accent hover:bg-white/90"
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  )
}