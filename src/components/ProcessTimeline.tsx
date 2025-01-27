import { Container } from "./ui/container"

export interface ProcessStep {
  title: string
  description: string
  number: number
}

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold">
          Our Process
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 text-center md:text-left">
                  <h3 className="mb-2 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}