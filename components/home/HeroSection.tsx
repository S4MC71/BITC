"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "calc(100svh - 40px)",
        background:
          "linear-gradient(135deg, #011a0e 0%, #022c16 35%, #003821 65%, #011208 100%)",
      }}
    >
      {/* Animated background — lightweight, GPU-composited only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#D4A820 1px, transparent 1px), linear-gradient(90deg, #D4A820 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs — will-change:transform for GPU compositing */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212, 168, 32, 0.15) 0%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 107, 60, 0.18) 0%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Diagonal accent */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="absolute top-0 right-0 w-full h-full"
            style={{ background: "linear-gradient(135deg, transparent 60%, rgba(212,168,32,0.3) 100%)" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="max-w-2xl order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex items-center gap-3 mb-5 sm:mb-6"
            >
              <div className="w-8 h-0.5 bg-[#D4A820]" />
              <span className="text-[#F0D060] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                National University Affiliated
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5 sm:mb-6"
            >
              Shaping{" "}
              <span className="text-[#F0D060]">Future Leaders</span>
              <br />
              Through Academic{" "}
              <span className="relative inline-block">
                Excellence
                <motion.span
                  className="absolute bottom-0 left-0 h-1 bg-[#D4A820] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.75, delay: 0.85, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
              className="text-green-200 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl"
            >
              Barisal Information Technology College — offering world-class BBA,
              CSE, LLB, MBA, and M.Ed programs with experienced faculty, modern
              facilities, and a vibrant campus culture.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
              className="flex flex-row items-center gap-3 sm:gap-4"
            >
              {/* Primary CTA — Crimson Red */}
              <Link
                href="/admissions"
                className="group flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-4 bg-[#C41E1E] text-white font-bold text-xs sm:text-base rounded-xl hover:bg-[#9B1515] transition-all duration-300 shadow-lg hover:shadow-[#C41E1E]/30 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA — outline */}
              <Link
                href="/academics"
                className="group flex items-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-2.5 sm:py-4 border-2 border-white/30 text-white font-semibold text-xs sm:text-base rounded-xl hover:border-[#D4A820] hover:text-[#F0D060] transition-all duration-300"
              >
                <Play size={12} className="fill-current" />
                Explore Programs
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
              className="mt-10 sm:mt-14 hidden sm:flex flex-wrap gap-5 sm:gap-8"
            >
              {[
                { value: "5000+", label: "Graduates" },
                { value: "50+", label: "Expert Faculty" },
                { value: "5", label: "Programs" },
                { value: "20+", label: "Years of Excellence" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="text-xl sm:text-2xl font-bold text-[#F0D060] font-display">
                    {stat.value}
                  </div>
                  <div className="text-green-300 text-xs sm:text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Campus Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg">
              {/* Decorative border behind image — hidden on small mobile */}
              <div
                className="hidden sm:block absolute -top-4 -right-4 lg:-top-5 lg:-right-5 w-full h-full rounded-2xl lg:rounded-3xl border-2 border-[#D4A820]/30"
                style={{ zIndex: 0 }}
              />
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                style={{ background: "radial-gradient(circle, #D4A820 0%, transparent 70%)", zIndex: 0 }}
              />
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10" style={{ zIndex: 1 }}>
                <Image
                  src="/images/campus.png"
                  alt="BITC Campus — Barisal Information Technology College"
                  width={620}
                  height={440}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <div className="bg-[#011a0e]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-3 border border-[#D4A820]/30">
                    <p className="text-[#F0D060] text-[9px] sm:text-xs font-semibold tracking-wider uppercase">
                      Barisal Information Technology College
                    </p>
                    <p className="text-green-300/80 text-[8px] sm:text-xs mt-0.5">
                      Established 2003 · Barisal, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden sm:flex"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-green-400/60 text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-green-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}
