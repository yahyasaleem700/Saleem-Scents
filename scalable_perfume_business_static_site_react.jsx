export default function PerfumeBusinessWebsite() {
  const featuredProducts = [
    {
      name: 'Fragrance Project 01',
      description:
        'A warm and sweet luxury-inspired scent currently in development.',
      status: 'Under Development',
    },
    {
      name: 'Fragrance Project 02',
      description:
        'A fresh green fragrance concept designed for everyday wear.',
      status: 'Under Development',
    },
    {
      name: 'Fragrance Project 03',
      description:
        'A bold evening fragrance blending oud, woods, and spice.',
      status: 'Under Development',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              SALEEM SCENTS
            </h1>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Fragrance Creations
            </p>
          </div>

          <nav className="hidden gap-8 text-sm text-neutral-300 md:flex">
            <a href="#home" className="transition hover:text-white">
              Home
            </a>
            <a href="#products" className="transition hover:text-white">
              Projects
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-400">
            Independent Fragrance Brand
          </p>

          <h2 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            New fragrances currently under development.
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-300">
            Saleem Scents is developing unique fragrances inspired by modern
            luxury perfumery. Stay tuned for future releases and limited
            early-access opportunities.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/20 px-6 py-3 transition hover:border-white/40"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="flex aspect-square items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl">
            <div className="px-8 text-center">
              <div className="mx-auto mb-6 flex h-40 w-28 items-center justify-center rounded-b-xl rounded-t-[2rem] border border-white/20 bg-neutral-800">
                <span className="rotate-90 text-sm tracking-[0.3em] text-neutral-300">
                  PERFUME
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-semibold">Luxury Bottled</h3>

              <p className="text-sm text-neutral-400">
                Elegant fragrances with a modern presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-400">
              In Development
            </p>

            <h2 className="text-4xl font-bold">Upcoming Fragrances</h2>
          </div>

          <a
            href="#contact"
            className="w-fit rounded-2xl border border-white/15 px-5 py-3 text-sm transition hover:border-white/40"
          >
            Inquire Now
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <div
              key={product.name}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="mb-6 flex aspect-square items-center justify-center rounded-2xl bg-neutral-800">
                <div className="h-28 w-20 rounded-b-lg rounded-t-2xl border border-white/20 bg-neutral-700" />
              </div>

              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>

                <span className="text-sm text-neutral-300">
                  {product.status}
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-neutral-400">
                {product.description}
              </p>

              <a
                href="#contact"
                className="block w-full rounded-xl bg-white py-3 text-center font-medium text-black transition hover:opacity-90"
              >
                Contact for Updates
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
            About The Brand
          </p>

          <h2 className="mb-6 text-4xl font-bold">
            Crafted with passion for fragrance.
          </h2>

          <p className="mb-4 leading-relaxed text-neutral-300">
            Saleem Scents focuses on creating high-quality fragrances with
            strong performance, modern style, and carefully selected
            ingredients.
          </p>

          <p className="leading-relaxed text-neutral-400">
            This page currently serves as the official landing page for Saleem
            Scents while new fragrances are under development.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-3xl font-bold">Long</h3>
            <p className="text-sm text-neutral-400">Lasting performance</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-3xl font-bold">Modern</h3>
            <p className="text-sm text-neutral-400">Luxury-inspired style</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-3xl font-bold">Future</h3>
            <p className="text-sm text-neutral-400">Ready for e-commerce</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-2 text-3xl font-bold">Global</h3>
            <p className="text-sm text-neutral-400">Expandable brand vision</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400">
            Contact
          </p>

          <h2 className="mb-4 text-4xl font-bold">Get In Touch</h2>

          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-neutral-300">
            For inquiries, collaborations, or to make a purchase, please
            contact Saleem Scents through the channels below.
          </p>

          <div className="flex flex-col items-center gap-4 text-neutral-300">
            <a
              href="https://instagram.com/saleemscents"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
            >
              @saleemscents
            </a>

            <a
              href="mailto:your@email.com"
              className="rounded-2xl border border-white/20 px-6 py-3 transition hover:border-white/40"
            >
              your@email.com
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-12 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 Saleem Scents. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-neutral-300">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-neutral-300">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
