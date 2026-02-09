"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { fadeIn } from "../../../utils/motion";
import { motion } from "framer-motion";

const clientLogo = [
  "/home/clients/i1.jpg",
  "/home/clients/i2.jpg",
  "/home/clients/i3.jpg",
  "/home/clients/i4.jpg",
  "/home/clients/i5.jpg",
  "/home/clients/i6.jpg",
  "/home/clients/i7.jpg",
  "/home/clients/i8.jpg",
];

const Logo = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Calculate the exact width needed for seamless loop
    const firstChild = scrollElement.firstElementChild;
    if (firstChild) {
      const scrollWidth = firstChild.scrollWidth;
      scrollElement.style.setProperty('--scroll-width', `${scrollWidth}px`);
    }
  }, []);

  return (
    <div className="section-padding">
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="section-width">
          <div className="text-center mb-8 font-medium">
            <p className="text-black text-2xl font-bold">Trusted by Leading Institutes</p>
          </div>
          
          {/* Smooth scrolling logos container */}
          <div className="w-full overflow-hidden relative">
            <div ref={scrollRef} className="flex animate-ultra-smooth">
              {/* First set of logos */}
              <div className="flex shrink-0">
                {clientLogo.map((item, i) => (
                  <div
                    key={`original-${i}`}
                    className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 lg:mx-8 flex items-center justify-center w-24 sm:w-28 md:w-32 lg:w-40"
                  >
                    <Image
                      src={item}
                      className="h-auto w-auto max-w-full object-contain max-h-16 md:max-h-20"
                      alt={`client-${i}`}
                      height={80}
                      width={200}
                    />
                  </div>
                ))}
              </div>
              
              {/* Duplicated set for seamless loop */}
              <div className="flex shrink-0">
                {clientLogo.map((item, i) => (
                  <div
                    key={`clone-${i}`}
                    className="flex-shrink-0 mx-3 sm:mx-4 md:mx-6 lg:mx-8 flex items-center justify-center w-24 sm:w-28 md:w-32 lg:w-40"
                  >
                    <Image
                      src={item}
                      className="h-auto w-auto max-w-full object-contain max-h-16 md:max-h-20"
                      alt={`client-clone-${i}`}
                      height={80}
                      width={200}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* White overlay gradients for smooth fade effect */}
            <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        :root {
          --scroll-width: 0px;
        }

        @keyframes ultra-smooth-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(var(--scroll-width) * -1));
          }
        }

        .animate-ultra-smooth {
          animation: ultra-smooth-scroll 45s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0); /* Force hardware acceleration */
        }

        /* Prevent any layout shifts */
        .animate-ultra-smooth > div {
          display: flex;
          flex-shrink: 0;
        }

        /* Ensure smooth rendering */
        .animate-ultra-smooth img {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Logo;
