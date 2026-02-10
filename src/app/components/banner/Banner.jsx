"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const Banner = () => {
  const sectionRef = useRef(null);
  const imageTopRef = useRef(null);
  const imageMidRef = useRef(null);
  const imageBottomRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const images = [imageTopRef.current, imageMidRef.current, imageBottomRef.current];

      gsap.set(images, { opacity: 0, y: 40 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        })
        .fromTo(
          imageTopRef.current,
          { opacity: 0, x: 60, y: -30 },
          { opacity: 1, x: 0, y: 0, duration: 0.9, ease: "power3.out" }
        )
        .fromTo(
          imageMidRef.current,
          { opacity: 0, x: 40, y: 50 },
          { opacity: 1, x: 0, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.75"
        )
        .fromTo(
          imageBottomRef.current,
          { opacity: 0, x: 30, y: 70 },
          { opacity: 1, x: 0, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.75"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="w-full h-full bg-[linear-gradient(to_bottom,#f1f1f1_50%,#000000_50%)]">
    <section ref={sectionRef} className="section-width py-8 md:py-12">
      <div className="relative h-[420px] overflow-hidden rounded-xl bg-[#834deb] px-8 py-12  md:pl-16 md:py-0">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h3 className=" font-semibold text-white ">
              Supercharge Your
              <br />
              Logistics Operations
            </h3>
            <p className="mt-5 max-w-lg text-[16px] text-white/90">
              It&apos;s time to take control of your logistics with Easy Lane&apos;s
              innovative platform. Achieve greater efficiency, reduce costs,
              and grow your business with ease.
            </p>
          </div>

          <div className="relative h-[300px] w-full md:h-[380px] lg:h-[420px] xl:h-[440px] 2xl:h-[420px]">
            <div
              ref={imageTopRef}
              className="absolute right-0 top-[-30%] xl:w-[95%] 2xl:w-[85%] rotate-[10deg] xl:top-[-12%] 2xl:top-[-30%]"
            >
              <Image
                src="/home/banner/top-right.jpg"
                alt="Easy Lane dashboard"
                width={900}
                height={600}
                className="h-auto w-full rounded-2xl "
                priority
              />
            </div>
            <div
              ref={imageMidRef}
              className="absolute -bottom-9 right-[35%] xl:w-[80%] 2xl:w-[60%] rotate-[10deg] xl:-bottom-4 xl:right-[30%] 2xl:-bottom-9 2xl:right-[35%]"
            >
              <Image
                src="/home/banner/bottom-right.jpg"
                alt="Easy Lane operations view"
                width={900}
                height={600}
                className="h-auto w-full rounded-2xl "
              />
            </div>
            <div
              ref={imageBottomRef}
              className="absolute bottom-[-7%] right-[-12%] rotate-[10deg] w-[40%] xl:bottom-[-4%] xl:right-[-8%] 2xl:bottom-[-7%] 2xl:right-[-12%]"
            >
              <Image
                src="/home/banner/bottom-rightmos.jpeg"
                alt="Easy Lane mobile screens"
                width={400}
                height={600}
                className="h-auto w-full rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Banner;
