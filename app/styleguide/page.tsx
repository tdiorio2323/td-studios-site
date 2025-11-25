import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Skeleton,
  SkeletonCard,
  SkeletonText,
} from "@/components/ui/skeleton"

export default function StyleguidePage() {
  return (
    <main className="min-h-screen px-6 py-10 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl space-y-10">
        <section>
          <h1 className="mb-2 text-4xl font-semibold tracking-tight">
            TD Studios Styleguide
          </h1>
          <p className="text-muted-foreground">
            Internal preview of the TD Studios visual system for the new site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Typography</h2>
          <div className="space-y-2">
            <h1>Heading 1 / Hero</h1>
            <h2>Heading 2 / Section</h2>
            <h3>Heading 3 / Subsection</h3>
            <p>
              Body text showing default font, line-height, and color styling.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cards & Inputs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="space-y-3 p-4">
              <h3 className="font-medium">Card title</h3>
              <p className="text-sm text-muted-foreground">
                Example card content using the shared card primitive.
              </p>
              <Button size="sm">Action</Button>
            </Card>
            <Card className="space-y-3 p-4">
              <label className="text-sm font-medium">Email</label>
              <Input placeholder="you@example.com" />
              <Skeleton className="h-3 w-24" variant="pulse" />
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Badges & Skeletons</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <SkeletonCard />
            <div className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <SkeletonText lines={3} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
