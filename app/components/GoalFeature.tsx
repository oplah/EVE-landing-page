"use client";

import { useState } from "react";
import Image from "next/image";

interface Course {
  title: string;
  instructor: string;
  duration: string;
  tag: string;
  cover: string;
}

interface GoalCategory {
  id: string;
  label: string;
  emoji: string;
  color: string;
  courses: Course[];
}

const GOALS: GoalCategory[] = [
  {
    id: "mindset",
    label: "Mindset and peak performance",
    emoji: "🧠",
    color: "#7C3AED",
    courses: [
      { title: "Superbrain", instructor: "Jim Kwik", duration: "36 lessons", tag: "Top rated", cover: "/cover-superbrain.jpg" },
      { title: "Be Extraordinary", instructor: "Vishen Lakhiani", duration: "42 lessons", tag: "Best seller", cover: "/cover-beextraordinary.jpg" },
      { title: "10x Fitness Quest", instructor: "Dr. Michael Roizen", duration: "24 lessons", tag: "New", cover: "/cover-10x.jpg" },
    ],
  },
  {
    id: "health",
    label: "Health and vitality",
    emoji: "💪",
    color: "#059669",
    courses: [
      { title: "Wildfit", instructor: "Eric Edmeades", duration: "90 days", tag: "Life-changing", cover: "/cover-wildfit.jpg" },
      { title: "10x Fitness Quest", instructor: "Dr. Michael Roizen", duration: "24 lessons", tag: "Top rated", cover: "/cover-10x.jpg" },
      { title: "Total Self Confidence", instructor: "Paul McKenna", duration: "30 lessons", tag: "Popular", cover: "/cover-totalselfconfidence.jpg" },
    ],
  },
  {
    id: "relationships",
    label: "Love and relationships",
    emoji: "❤️",
    color: "#E11D48",
    courses: [
      { title: "Calling in the One", instructor: "Katherine Woodward Thomas", duration: "49 lessons", tag: "Best seller", cover: "/cover-callingintheone.jpg" },
      { title: "Quantum Love", instructor: "Dr. Laura Berman", duration: "12 lessons", tag: "Powerful", cover: "/cover-quantumlove.jpg" },
      { title: "Total Self Confidence", instructor: "Paul McKenna", duration: "30 lessons", tag: "Top rated", cover: "/cover-totalselfconfidence.jpg" },
    ],
  },
  {
    id: "career",
    label: "Career and success",
    emoji: "💼",
    color: "#2563EB",
    courses: [
      { title: "Be Extraordinary", instructor: "Vishen Lakhiani", duration: "42 lessons", tag: "Best seller", cover: "/cover-beextraordinary.jpg" },
      { title: "Superbrain", instructor: "Jim Kwik", duration: "36 lessons", tag: "Top rated", cover: "/cover-superbrain.jpg" },
      { title: "Manifesting", instructor: "Natalie Ledwell", duration: "28 lessons", tag: "Popular", cover: "/cover-manifesting.jpg" },
    ],
  },
  {
    id: "spirituality",
    label: "Spirituality and inner peace",
    emoji: "🌸",
    color: "#D97706",
    courses: [
      { title: "Chakra Healing", instructor: "Anodea Judith", duration: "30 lessons", tag: "Best seller", cover: "/cover-chakra.jpg" },
      { title: "Manifesting", instructor: "Natalie Ledwell", duration: "28 lessons", tag: "Popular", cover: "/cover-manifesting.jpg" },
      { title: "Calling in the One", instructor: "Katherine Woodward Thomas", duration: "49 lessons", tag: "Classic", cover: "/cover-callingintheone.jpg" },
    ],
  },
  {
    id: "creativity",
    label: "Creativity and expression",
    emoji: "🎨",
    color: "#7C3AED",
    courses: [
      { title: "Be Extraordinary", instructor: "Vishen Lakhiani", duration: "42 lessons", tag: "Best seller", cover: "/cover-beextraordinary.jpg" },
      { title: "Manifesting", instructor: "Natalie Ledwell", duration: "28 lessons", tag: "Popular", cover: "/cover-manifesting.jpg" },
      { title: "Chakra Healing", instructor: "Anodea Judith", duration: "30 lessons", tag: "Classic", cover: "/cover-chakra.jpg" },
    ],
  },
];

export default function GoalFeature() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPath, setShowPath] = useState(false);

  const handleGoalSelect = (id: string) => {
    if (selectedGoal === id) {
      setSelectedGoal(null);
      setShowPath(false);
      return;
    }
    setSelectedGoal(id);
    setShowPath(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowPath(true);
    }, 600);
  };

  const selected = GOALS.find((g) => g.id === selectedGoal);

  return (
    <section
      id="goal-feature"
      className="bg-white py-24 md:py-32 overflow-hidden"
      aria-label="Goal AI feature"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left: Text */}
          <div className="lg:sticky lg:top-32">
            <h2 className="title-bold-3 text-[#1A1A1A] mb-6">
              Set goals. Get recommendations.
            </h2>
            <p className="body text-gray-500 max-w-lg">
              Tell EVE what you want to achieve — or what&apos;s holding you back.
              She&apos;ll curate a personalised learning path from Mindvalley&apos;s
              world-class library, designed around your goals, challenges, and pace.
            </p>
          </div>

          {/* Right: Interactive goal selector */}
          <div>
            {/* EVE prompt */}
            <div className="flex items-start gap-3 mb-5 p-4 bg-[#F0F0F8] rounded-2xl">
              <Image src="/EVE-icon.svg" alt="EVE" width={24} height={24} className="flex-shrink-0 mt-0.5" />
              <p className="body-small font-semibold text-[#1A1A1A] leading-relaxed">
                What area of life would you most like to transform? Select one below — I&apos;ll build your personalised learning path.
              </p>
            </div>

            {/* 3-column goal grid */}
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              {GOALS.map((goal) => {
                const isSelected = selectedGoal === goal.id;
                return (
                  <button
                    key={goal.id}
                    onClick={() => handleGoalSelect(goal.id)}
                    className="text-left p-3.5 rounded-2xl border-2 transition-all duration-200 active:scale-95 focus:outline-none hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      borderColor: isSelected ? goal.color : "#E5E7EB",
                      background: isSelected ? `${goal.color}12` : "white",
                    }}
                    onMouseEnter={(e) => { if (!isSelected) (e.currentTarget as HTMLElement).style.background = "rgba(86,147,246,0.06)"; }}
                    onMouseLeave={(e) => { if (!isSelected) (e.currentTarget as HTMLElement).style.background = "white"; }}
                    aria-pressed={isSelected}
                    aria-label={`Select goal: ${goal.label}`}
                  >
                    <span className="text-xl mb-2 block">{goal.emoji}</span>
                    <p className="text-xs font-medium text-[#1A1A1A] leading-snug">{goal.label}</p>
                  </button>
                );
              })}
            </div>

            {/* Recommendations panel */}
            <div className="rounded-2xl border border-gray-100 overflow-hidden" style={{ background: "#F7F7F9" }}>
              {/* Panel header */}
              <div className="px-4 py-3 border-b border-gray-200/80">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your recommendations</p>
              </div>

              {/* Empty state */}
              {!selectedGoal && !isLoading && (
                <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                  <svg className="w-6 h-6 mb-2 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                  </svg>
                  <p className="text-sm">Select a goal above to see your path</p>
                </div>
              )}

              {/* Loading state */}
              {isLoading && (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="flex gap-1.5 mb-3">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                  <p className="text-sm font-medium text-gray-500">EVE is curating your path…</p>
                </div>
              )}

              {/* Recommendations list */}
              {showPath && selected && (
                <div className="animate-scale-in">
                  {selected.courses.map((course) => (
                    <div
                      key={course.title}
                      className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100 last:border-b-0"
                    >
                      {/* Cover image — 16:9 */}
                      <div className="flex-shrink-0 rounded-xl overflow-hidden bg-gray-100" style={{ width: 100, height: 56 }}>
                        <Image
                          src={course.cover}
                          alt={course.title}
                          width={100}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#1A1A1A] leading-snug">{course.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{course.instructor} · {course.duration}</p>
                      </div>

                      {/* Tag */}
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 flex-shrink-0 whitespace-nowrap">
                        {course.tag}
                      </span>
                    </div>
                  ))}

                  {/* See all button */}
                  <div className="p-4">
                    <button
                      className="w-full text-center py-2.5 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #9B37F2, #7A12D4)" }}
                    >
                      See all recommendations
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
