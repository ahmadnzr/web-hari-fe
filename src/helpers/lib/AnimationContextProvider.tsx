"use client";

import React, { createContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

interface AnimationContextInterface {
  animateItemRef: (e: HTMLDivElement | null) => void;
}

export const AnimationContext = createContext<AnimationContextInterface>({
  animateItemRef: () => {},
});

gsap.registerPlugin(ScrollTrigger);

export const AnimationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const animateScrollListRef = useRef<(HTMLDivElement | null)[]>([]);

  const animateItemRef = (el: HTMLDivElement | null) => {
    if (el && !animateScrollListRef.current.includes(el)) {
      animateScrollListRef.current.push(el);
    }
  };

  useGSAP(() => {
    animateScrollListRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "bottom 90%",
              scrub: 1,
            },
          },
        );
      }
    });
  });

  return (
    <AnimationContext.Provider
      value={{
        animateItemRef: animateItemRef,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};
