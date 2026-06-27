"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { SemesterSyllabus } from "@/data/programs";

interface Props {
  syllabus: SemesterSyllabus[];
}

export default function SyllabusAccordion({ syllabus }: Props) {
  const [openSemesters, setOpenSemesters] = useState<Record<number, boolean>>({
    1: true, // Keep the first semester open by default
  });

  const toggleSemester = (semNum: number) => {
    setOpenSemesters((prev) => ({
      ...prev,
      [semNum]: !prev[semNum],
    }));
  };

  return (
    <div className="space-y-4">
      {syllabus.map((sem) => {
        const isOpen = !!openSemesters[sem.semester];
        return (
          <div
            key={sem.semester}
            className="border border-[#006B3C]/15 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200"
          >
            <button
              onClick={() => toggleSemester(sem.semester)}
              className="w-full flex items-center justify-between px-5 py-4 bg-[#e8f5ee]/40 hover:bg-[#e8f5ee]/70 text-left transition-colors cursor-pointer border-none"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#006B3C] text-white flex items-center justify-center font-bold text-sm">
                  {sem.semester}
                </div>
                <h3 className="font-display font-bold text-[#004D2C] text-base">
                  Semester {sem.semester}
                </h3>
              </div>
              <div className="text-[#006B3C]">
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-[#006B3C]/10 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#004D2C] text-white text-left">
                      <th className="px-5 py-3 font-semibold">Course Code</th>
                      <th className="px-5 py-3 font-semibold">Course Name</th>
                      <th className="px-5 py-3 font-semibold text-center">Credits</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#006B3C]/10">
                    {sem.courses.map((course, idx) => (
                      <tr
                        key={course.code}
                        className={`transition-colors duration-150 hover:bg-[#e8f5ee]/10 ${
                          idx % 2 === 0 ? "bg-white" : "bg-[#e8f5ee]/5"
                        }`}
                      >
                        <td className="px-5 py-3 font-mono font-bold text-[#D4A820]">
                          {course.code}
                        </td>
                        <td className="px-5 py-3 text-[#1a2e22] font-medium">
                          {course.name}
                        </td>
                        <td className="px-5 py-3 text-center text-[#5a6a60] font-semibold">
                          {course.credits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
