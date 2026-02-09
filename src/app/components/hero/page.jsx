export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[url('/hero/image.png')] bg-cover bg-center">
      <div className="section-width relative flex min-h-screen items-center py-16 md:py-24">
        <div className="ml-auto max-w-xl text-left md:text-right">
          <h1 className="text-[#7A63E8] text-right">
            Hatao Logistics Ka Pain
          </h1>
          <p className="mt-5 text-[#1F1F1F]">
            Easy Lane empowers fleet owners, promotes entrepreneurship, and
            optimizes logistics across India with tech-driven solutions.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:justify-end">
            <button className="rounded-full bg-[#6A5AE0] px-6 py-2.5 font-semibold text-white shadow-md transition hover:bg-[#5947d4]">
              Get Started
            </button>
            <button className="rounded-full border border-[#1F1F1F] px-6 py-2.5 font-semibold text-[#1F1F1F] transition hover:bg-black/5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
