import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  Award, 
  Check, 
  Calendar, 
  Languages,
  BookOpenCheck,
  Building2,
  PhoneCall
} from "lucide-react";
import { programs } from "@/data/programs";
import SyllabusAccordion from "./SyllabusAccordion";

interface Props {
  params: Promise<{ program: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { program: slug } = await params;
  const program = programs.find((p) => p.id === slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: `${program.shortName} — ${program.name}`,
    description: program.description,
  };
}

export function generateStaticParams() {
  return programs.map((p) => ({ program: p.id }));
}

export default async function ProgramPage({ params }: Props) {
  const { program: slug } = await params;
  const program = programs.find((p) => p.id === slug);
  if (!program) notFound();

  return (
    <div className="min-h-screen bg-neutral-50/30">
      {/* Hero — dark green gradient */}
      <div
        className="py-24 text-white"
        style={{ background: "linear-gradient(135deg, #011a0e 0%, #022c16 50%, #004D2C 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-sm text-green-300/70 hover:text-[#F0D060] mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Academics
          </Link>
          <div className="text-5xl mb-4">{program.icon}</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">
            {program.shortName}
          </h1>
          <p className="text-lg text-green-200 max-w-2xl mb-6">{program.name}</p>
          <div className="flex flex-wrap gap-6 text-sm text-green-300/70">
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-[#D4A820]" />
              {program.duration}
            </span>
            <span className="flex items-center gap-2">
              <BookOpen size={16} className="text-[#D4A820]" />
              {program.totalCredits} Total Credits
            </span>
            <span className="flex items-center gap-2">
              <Award size={16} className="text-[#D4A820]" />
              {program.faculty}
            </span>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Section 1: Program Overview */}
            <div className="bg-white border border-[#006B3C]/10 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 border-b border-[#006B3C]/10 pb-4 mb-5">
                <BookOpenCheck className="text-[#006B3C]" size={22} />
                <h2 className="font-display text-2xl font-bold text-[#004D2C]">
                  Program Overview
                </h2>
              </div>
              <p className="text-[#5a6a60] leading-relaxed text-sm sm:text-base font-medium">
                {program.overview}
              </p>
            </div>

            {/* Section 2: Eligibility for Admission (Highlighted Callout Box) */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#e8f5ee]/90 to-white border border-l-4 border-[#006B3C] border-[#006B3C]/15 rounded-3xl p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#006B3C]" size={22} />
                <h2 className="font-display text-xl font-bold text-[#004D2C]">
                  Eligibility for Admission
                </h2>
              </div>
              <p className="text-[#1a2e22] text-sm sm:text-base leading-relaxed font-semibold">
                {program.eligibility}
              </p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#006B3C]/5 rounded-bl-full flex items-center justify-center pointer-events-none">
                <span className="text-[#006B3C]/10 font-display font-bold text-3xl select-none">OK</span>
              </div>
            </div>

            {/* Section 3: Class Structure & Medium of Instruction */}
            <div className="bg-white border border-[#006B3C]/10 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-[#006B3C]/10 pb-4">
                <Calendar className="text-[#006B3C]" size={22} />
                <h2 className="font-display text-xl font-bold text-[#004D2C]">
                  Class Structure & Instruction
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#e8f5ee]/30 rounded-xl p-4 border border-[#006B3C]/5 text-center">
                  <span className="text-[10px] font-bold text-[#5a6a60] uppercase tracking-wider block mb-1">Class Schedule</span>
                  <p className="text-xs sm:text-sm font-bold text-[#004D2C]">{program.classStructure.daysPerWeek}</p>
                </div>
                <div className="bg-[#e8f5ee]/30 rounded-xl p-4 border border-[#006B3C]/5 text-center">
                  <span className="text-[10px] font-bold text-[#5a6a60] uppercase tracking-wider block mb-1">Class Duration</span>
                  <p className="text-xs sm:text-sm font-bold text-[#004D2C]">{program.classStructure.classHours}</p>
                </div>
                <div className="bg-[#e8f5ee]/30 rounded-xl p-4 border border-[#006B3C]/5 text-center">
                  <span className="text-[10px] font-bold text-[#5a6a60] uppercase tracking-wider block mb-1">Medium of Instruction</span>
                  <p className="text-xs sm:text-sm font-bold text-[#D4A820] flex items-center justify-center gap-1">
                    <Languages size={14} />
                    {program.mediumOfInstruction}
                  </p>
                </div>
              </div>
              
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200/50 text-xs sm:text-sm text-[#5a6a60] leading-relaxed font-medium">
                {program.classStructure.structureDesc}
              </div>
            </div>

            {/* Section 4: Highlights */}
            <div className="bg-white border border-[#006B3C]/10 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl font-bold text-[#004D2C] mb-4">
                Program Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-[#5a6a60] bg-[#e8f5ee]/40 rounded-xl px-4 py-3 border border-[#006B3C]/10">
                    <span className="w-5 h-5 rounded-full bg-[#006B3C]/10 text-[#006B3C] flex items-center justify-center font-bold text-xs">✓</span> 
                    <span className="font-semibold">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5: Semester-wise Syllabus Accordion */}
            {program.syllabus.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[#006B3C]/10 pb-4">
                  <BookOpen className="text-[#006B3C]" size={22} />
                  <h2 className="font-display text-2xl font-bold text-[#004D2C]">
                    Semester-wise Syllabus
                  </h2>
                </div>
                <SyllabusAccordion syllabus={program.syllabus} />
              </div>
            )}
            
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            
            {/* Fact Sheet */}
            <div className="bg-[#022c16] text-white rounded-3xl p-6 shadow-md border border-[#006B3C]/10">
              <h3 className="font-display text-lg font-bold mb-4 text-[#D4A820] flex items-center gap-2">
                <Building2 size={18} />
                Quick Facts
              </h3>
              <dl className="space-y-3.5 text-xs sm:text-sm">
                {[
                  ["Program", program.shortName],
                  ["Faculty", program.faculty],
                  ["Duration", program.duration],
                  ["Total Credits", `${program.totalCredits} Credits`],
                  ["Medium", program.mediumOfInstruction],
                  ["Affiliation", "National University, BD"],
                ].map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-white/10 pb-2.5 last:border-0 last:pb-0">
                    <dt className="text-green-300/60 font-semibold">{key}</dt>
                    <dd className="text-white font-bold text-right max-w-[60%]">{val}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Facilities Support Box */}
            <div className="bg-white border border-[#006B3C]/10 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-[#004D2C] mb-4 flex items-center gap-2 border-b border-[#006B3C]/10 pb-3">
                <Building2 className="text-[#006B3C]" size={16} />
                Campus Facilities
              </h3>
              <ul className="space-y-3">
                {program.campusFacilities.map((facility, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5a6a60] font-medium">
                    <Check size={14} className="text-[#006B3C] mt-0.5 flex-shrink-0" />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Callout */}
            <div className="bg-[#fcf8eb] border border-[#D4A820]/30 rounded-3xl p-6 shadow-sm">
              <h3 className="font-display text-base font-bold text-[#004D2C] mb-2 flex items-center gap-2">
                <PhoneCall className="text-[#D4A820]" size={16} />
                Need Assistance?
              </h3>
              <p className="text-xs text-[#5a6a60] leading-relaxed mb-4 font-medium">
                Our support desk is available to assist you with registration guidelines, credit transfer, and curriculum details.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006B3C] hover:text-[#004D2C] hover:gap-2.5 transition-all"
              >
                Contact Admissions Desk →
              </Link>
            </div>

            {/* Apply Action Card */}
            <Link
              href="/admissions"
              className="block text-center w-full px-6 py-4 bg-[#C41E1E] text-white font-bold rounded-2xl hover:bg-[#9B1515] transition-all duration-300 hover:scale-[1.02] shadow-lg border-none"
            >
              Apply for {program.shortName} Admission
            </Link>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
