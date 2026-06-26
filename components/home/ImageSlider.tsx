"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const slides = [
  {
    src: "/images/gallery/img1.jpg",
    alt: "BITC Campus — Student Activities",
    caption: "Campus Life",
  },
  {
    src: "/images/gallery/img2.jpg",
    alt: "BITC Campus — College Events",
    caption: "College Events",
  },
  {
    src: "/images/gallery/img3.jpg",
    alt: "BITC Campus — Academic Activities",
    caption: "Academic Activities",
  },
  {
    src: "/images/gallery/img4.jpg",
    alt: "BITC — CSE Department Students",
    caption: "CSE Department",
  },
  {
    src: "/images/gallery/img5.jpg",
    alt: "BITC — CSE 3rd Semester Students",
    caption: "CSE 3rd Semester",
  },
  {
    src: "/images/gallery/img6.jpg",
    alt: "BITC Campus — College Life",
    caption: "College Life",
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(goNext, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, goNext]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#D4A820]" />
            <span className="text-[#006B3C] text-xs font-bold uppercase tracking-[0.2em]">
              Campus Gallery
            </span>
            <div className="w-8 h-0.5 bg-[#D4A820]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#004D2C] mb-3">
            Life at BITC
          </h2>
          <p className="text-[#5a6a60] max-w-xl mx-auto text-sm sm:text-base">
            A glimpse into the vibrant campus life, events, and academic journey at Barisal Information Technology College.
          </p>
          <div className="section-divider mt-4" />
        </div>

        {/* Slider */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#006B3C]/10"
          style={{ aspectRatio: "16/7" }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Slides */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              className="absolute inset-0"
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={slides[current].src}
                alt={slides[current].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
                priority={current === 0}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#011a0e]/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Caption */}
          <motion.div
            key={`caption-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute bottom-5 left-5 flex items-center gap-2"
          >
            <div className="bg-[#011a0e]/70 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 border border-white/10">
              <Camera size={14} className="text-[#D4A820]" />
              <span className="text-white text-sm font-medium">{slides[current].caption}</span>
            </div>
          </motion.div>

          {/* Slide counter */}
          <div className="absolute top-4 right-4 bg-[#011a0e]/70 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
            <span className="text-[#F0D060] text-xs font-bold">
              {current + 1} / {slides.length}
            </span>
          </div>

          {/* Arrow buttons */}
          <button
            onClick={() => { setIsPlaying(false); goPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#011a0e]/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D4A820] hover:border-[#D4A820] transition-all duration-200 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => { setIsPlaying(false); goNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#011a0e]/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#D4A820] hover:border-[#D4A820] transition-all duration-200 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot + thumbnail strip */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => {
                setIsPlaying(false);
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                i === current
                  ? "border-[#D4A820] w-16 h-10 opacity-100 shadow-md"
                  : "border-transparent w-10 h-8 opacity-50 hover:opacity-80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-4 max-w-xs mx-auto h-0.5 bg-[#006B3C]/15 rounded-full overflow-hidden">
          <motion.div
            key={current}
            className="h-full bg-gradient-to-r from-[#006B3C] to-[#D4A820] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: isPlaying ? 4.5 : 0, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
