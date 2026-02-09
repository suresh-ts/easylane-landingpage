import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[60vh] lg:min-h-screen w-full overflow-hidden bg-black lg:bg-[url('/hero/image.png')] lg:bg-cover lg:bg-center">
      <div className="relative flex h-full items-center   px-6">
        <div className="mx-auto max-w-xl text-center lg:mr-0 ">
          <h2 className="text-[#7A63E8] text-center sm:text-right">Hatao Logistics Ka Pain</h2>
          <p className="mt-5 text-white lg:text-[#1F1F1F] text-center sm:text-right lg:max-w-lg">
            Easy Lane empowers fleet owners, promotes entrepreneurship, and
            optimizes logistics across India with tech-driven solutions.
          </p>

          <div className="mt-8 lg:hidden">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/hero/image.png"
                alt="Easy Lane truck"
                width={640}
                height={420}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
