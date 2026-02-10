import Image from "next/image";

export default function ProblemStatement() {
  return (
    <section className="w-full bg-[#0b0226] padding-top padding-bottom">
      <div className="section-width">
        <div className="rounded-3xl bg-[#1b1435] px-6 py-10 md:px-10 md:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
            <div className="space-y-4 text-white">
              <span className="inline-flex rounded-md border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90">
                Problem Statement
              </span>
              <h2 className="text-white">
                <span className="text-[#824DEB]">Logistics Industry Challenges</span>{" "}
                for Fleet Owners and Shippers
              </h2>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/pb.png"
                alt="Logistics industry challenges"
                width={760}
                height={520}
                className="h-auto w-full max-w-[560px] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
