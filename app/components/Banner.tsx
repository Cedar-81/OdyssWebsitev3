"use client";
import Image from "next/image";
import OsunImg from "@/public/osun.png";
import EzeaguImg from "@/public/ezeagu.png";
import YankariImg from "@/public/yankari.png";
import AIInput from "./AIInput";
import { useState, useEffect, useRef } from "react";

// Custom hook to detect screen size
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    "desktop",
  );

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return screenSize;
};

// Utility functions to truncate text based on content type and screen size
// const truncateTitle = (
//   text: string,
//   screenSize: "mobile" | "tablet" | "desktop",
// ) => {
//   const limits = { mobile: 25, tablet: 40, desktop: Infinity };
//   const maxChars = limits[screenSize];

//   if (text.length <= maxChars) return text;
//   return text.substring(0, maxChars).trim() + "...";
// };

// const truncateSubtitle = (
//   text: string,
//   screenSize: "mobile" | "tablet" | "desktop",
// ) => {
//   const limits = { mobile: 50, tablet: 70, desktop: Infinity };
//   const maxChars = limits[screenSize];

//   if (text.length <= maxChars) return text;
//   return text.substring(0, maxChars).trim() + "...";
// };

const truncatePrompt = (
  text: string,
  screenSize: "mobile" | "tablet" | "desktop",
) => {
  const limits = { mobile: 40, tablet: 60, desktop: Infinity };
  const maxChars = limits[screenSize];

  if (text.length <= maxChars) return text;
  return text.substring(0, maxChars).trim() + "...";
};

export default function Banner() {
  const slides = [
    {
      img: YankariImg,
      title: "Live, Laugh and Youthful Wander",
      subtitle:
        "For the young, wild, and intentional—this is travel reimagined.",
      prompt:
        "Curate an affordable birthday getaway for 6 friends—somewhere fun and unforgettable.",
      button_txt: "Get started",
      location: "YANKARI GAME RESERVE",
    },
    {
      img: EzeaguImg,
      title: "Travel in Style rooted in Culture",
      subtitle:
        "Experience the world with flair—guided by the richness of local traditions.",
      prompt:
        "Help me explore Enugu's heritage in style with art tours, local cuisine, and scenic stays.",
      button_txt: "Get started",
      location: "EZEAGU TOURIST COMPLEX",
    },
    {
      img: OsunImg,
      title: "Travel like you belong",
      subtitle:
        "Built for travelers who value connection, culture, and community.",
      prompt:
        "Help me plan an immersive Osun stay for the Osun-Osogbo Festival rooted in communtiy",
      button_txt: "Get started",
      location: "OSUN SACRED GROVE",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef<number>(0);
  const animationRef = useRef<number>();
  const screenSize = useScreenSize();

  const SLIDE_DURATION = 15000; // 5 seconds

  useEffect(() => {
    if (isPaused) return;

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressPercent = (elapsed / SLIDE_DURATION) * 100;

      if (progressPercent >= 100) {
        setProgress(0);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else {
        setProgress(progressPercent);
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentSlide, isPaused, slides.length]);

  const goToSlide = (index: number) => {
    setProgress(0);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="w-full h-[80vh] relative lg:rounded-2xl overflow-clip group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        src={slides[currentSlide].img}
        className="absolute h-full object-cover transition-all duration-700 ease-in-out transform"
        alt={slides[currentSlide].location}
      />
      <h2 className="absolute text-sm lg:text-base text-white right-5 lg:right-10 font-bold top-5 lg:top-10 z-10">
        {slides[currentSlide].location}
      </h2>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-black/20 z-20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-500 ease-in-out transform hover:scale-125 ${
              index === currentSlide
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div
                className="absolute inset-0 rounded-full border-2 border-white/50"
                style={{
                  background: `conic-gradient(white ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-30 z-10 text-white px-4 lg:px-10 space-y-6">
        <div className="transform transition-all duration-700 ease-in-out">
          <AIInput
            content={truncatePrompt(slides[currentSlide].prompt, screenSize)}
          />
        </div>
        <div className="transform transition-all duration-700 ease-in-out delay-100">
          <h1 className="text-3xl lg:text-5xl font-bold">
            {slides[currentSlide].title}
          </h1>
          <p className="lg:text-lg font-medium">
            {slides[currentSlide].subtitle}
          </p>
        </div>
        <button className="px-10 py-3 rounded-xl w-full lg:w-[15rem] text-white bg-black transform transition-all duration-700 ease-in-out delay-200 hover:scale-105 hover:bg-gray-800">
          {slides[currentSlide].button_txt}
        </button>
      </div>
    </section>
  );
}
