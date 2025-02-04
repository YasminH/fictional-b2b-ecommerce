import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">About OfficeVibe</h1>

      <section className="bg-neutral-900/10 p-6 rounded-lg dark:bg-neutral-50/10">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
        </p>
        <p>
          Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut
          dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
          auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
        </p>
        <p>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur
          ac, vestibulum at eros. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus
          posuere velit aliquet.
        </p>
      </section>

      <section className="bg-neutral-100/10 p-6 rounded-lg dark:bg-neutral-800/10">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</li>
          <li>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
          <li>Vestibulum id ligula porta felis euismod semper.</li>
          <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
        </ul>
      </section>

      <div className="text-center">
        <Button asChild>
          <Link href="/products">Explore Our Products</Link>
        </Button>
      </div>
    </div>
  )
}

