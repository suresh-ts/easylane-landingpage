import Image from "next/image";

export default function About() {
  return (
    <section className="section-width py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-6 self-start">
          <span className="inline-flex rounded-lg border border-[#E6DDFE] px-4 py-2 text-sm font-semibold text-[#7A63E8]">
            About Us
          </span>
          <div className="space-y-3">
            <h2 className="text-[#7A63E8]">
              Revolutionizing Logistics <span className="text-black">for the Future</span> 
            </h2>
            <p>
              Easy Lane is transforming logistics with tech-driven solutions,
              empowering fleet-owners to become entrepreneurs and helping
              businesses grow, all while bringing order and innovation to the
              industry.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/aboutus/aboutus.jpg"
            alt="Easy Lane team at work"
            width={900}
            height={650}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
