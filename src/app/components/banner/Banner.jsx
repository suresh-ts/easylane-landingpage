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
      <div className="relative overflow-hidden rounded-xl bg-[#834deb] px-6 py-10 sm:px-10 md:px-12 md:py-12 min-[1350px]:h-[420px] min-[1350px]:pl-16 min-[1350px]:py-0">
        <div className="grid items-center gap-10 min-[1350px]:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-full min-[1350px]:max-w-[370px]">
            <h3 className="font-semibold text-white">
              Supercharge Your
              <br />
              Logistics Operations
            </h3>
            <p className="mt-5 max-w-full text-white/90 min-[1350px]:max-w-[370px]">
              It&apos;s time to take control of your logistics with Easy Lane&apos;s
              innovative platform. Achieve greater efficiency, reduce costs,
              and grow your business with ease.
            </p>
          </div>

          <div className="relative hidden w-full min-[1350px]:block min-[1350px]:h-[420px]">
            <div
              ref={imageTopRef}
              className="absolute right-0  w-[557px] h-[377px]  rotate-[10deg] -top-28"
            >
              <Image
                src="/home/banner/top-right.jpg"
                alt="Easy Lane dashboard"
                 width={1000}
                height={1000}
                className="h-auto w-full rounded-2xl "
                priority
              />
            </div>
            <div
              ref={imageMidRef}
              className="absolute  w-[438px] h-[296px] rotate-[10deg]  -bottom-28 right-52"
            >
              <Image
                src="/home/banner/bottom-right.jpg"
                alt="Easy Lane operations view"
                 width={1000}
                height={1000}
                className="h-auto w-full rounded-2xl "
              />
            </div>
            <div
              ref={imageBottomRef}
              className="absolute rotate-[10deg] w-[283px] h-[190px]  -bottom-20 -right-32"
            >
              <Image
                src="/home/banner/bottom-rightmos.jpeg"
                alt="Easy Lane mobile screens"
                width={1000}
                height={1000}
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
