"use client";

import { useState } from "react";

type Tab = "quiz" | "summary" | "apply";

const QUIZ = {
  question: "According to habit science, what is the average number of days it takes to form a new habit?",
  options: [
    { id: "a", text: "21 days", correct: false },
    { id: "b", text: "66 days on average", correct: true },
    { id: "c", text: "Exactly 30 days", correct: false },
    { id: "d", text: "It's different for everyone — there's no fixed number", correct: false },
  ],
  explanation:
    "Research by Dr. Phillippa Lally at University College London found habits take anywhere from 18 to 254 days to form, with 66 days being the average. The popular '21-day myth' was misinterpreted from early plastic surgery observations.",
};

const SUMMARY_POINTS = [
  "Small 1% improvements compound into extraordinary results — the math of marginal gains.",
  "Your identity shapes your habits more than your goals do. \"I am a reader\" vs. \"I want to read more.\"",
  "Environment design beats willpower every time. Make good habits obvious and easy.",
  "The 2-minute rule: shrink any habit to its smallest possible version to start.",
];

const APPLY_ITEMS = [
  { time: "Morning", action: "Choose one micro-habit and commit to 2 minutes only", icon: "🌅" },
  { time: "Afternoon", action: "Redesign your environment to make your habit unavoidable", icon: "🏡" },
  { time: "Evening", action: "Track your streak and note one thing you noticed about yourself", icon: "📓" },
  { time: "Weekly", action: "Review with EVE — she'll adjust your path based on what's working", icon: "✦" },
];

export default function LearningFeature() {
  const [activeTab, setActiveTab] = useState<Tab>("quiz");
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (id: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(id);
    setTimeout(() => setShowExplanation(true), 500);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (tab !== "quiz") {
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "quiz", label: "Quiz Me", icon: "🧩" },
    { id: "summary", label: "Quick Summary", icon: "📖" },
    { id: "apply", label: "Apply It", icon: "⚡" },
  ];

  return (
    <section
      id="learning-feature"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #DBE9FE 0%, #E5E6FA 45%, #FAFBFF 75%, #FFFFFF 100%)" }}
      aria-label="Learning Assistant feature"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Interactive preview */}
          <div>
            {/* Tab switcher */}
            <div className="flex gap-2 p-1 bg-white/60 rounded-2xl border border-violet-100 backdrop-blur-sm mb-5 shadow-sm">
              {tabs.map(({ id, label, icon }) => (
                <button
                  key={id}
                  onClick={() => handleTabChange(id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === id
                      ? "text-white shadow-md"
                      : "text-gray-500 hover:text-[#1A1A1A]"
                  }`}
                  style={activeTab === id ? { background: "linear-gradient(135deg, #9B37F2 0%, #7A12D4 100%)", boxShadow: "0 4px 12px rgba(122,18,212,0.3)" } : {}}
                  aria-selected={activeTab === id}
                  role="tab"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-white rounded-3xl border border-violet-100/80 shadow-xl shadow-violet-100/50 overflow-hidden">
              {/* Quiz tab */}
              {activeTab === "quiz" && (
                <div className="p-6" role="tabpanel" aria-label="Quiz mode">
                  {/* Context label */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M5 0.5L6.12 3.88H9.51L6.7 5.99L7.82 9.37L5 7.26L2.18 9.37L3.3 5.99L0.49 3.88H3.88L5 0.5Z" fill="white" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">Testing your understanding</span>
                  </div>

                  <div className="bg-violet-50 rounded-2xl p-4 mb-5 border border-violet-100">
                    <p className="text-[11px] text-violet-500 font-semibold uppercase tracking-wider mb-1">From: Atomic Habits · James Clear</p>
                    <p className="text-base font-semibold text-[#1A1A1A] leading-snug">{QUIZ.question}</p>
                  </div>

                  <div className="space-y-2.5 mb-4" role="radiogroup" aria-label="Answer options">
                    {QUIZ.options.map((opt) => {
                      const isSelected = selectedAnswer === opt.id;
                      const isAnswered = !!selectedAnswer;
                      const isCorrect = opt.correct;

                      let style = "border-gray-200 bg-white text-[#1A1A1A] hover:border-violet-300 hover:bg-violet-50";
                      if (isAnswered && isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-900";
                      else if (isAnswered && isSelected && !isCorrect) style = "border-red-400 bg-red-50 text-red-900";
                      else if (isAnswered) style = "border-gray-100 bg-gray-50 text-gray-400 opacity-60";

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleAnswer(opt.id)}
                          disabled={isAnswered}
                          className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-200 flex items-center gap-3 ${style}`}
                          role="radio"
                          aria-checked={isSelected}
                        >
                          <span className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-[10px] font-bold border-current">
                            {opt.id.toUpperCase()}
                          </span>
                          {opt.text}
                          {isAnswered && isCorrect && (
                            <svg className="w-4 h-4 ml-auto text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {showExplanation && (
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-200 animate-slide-up-fade">
                      <p className="text-xs font-bold text-violet-600 mb-1.5">EVE explains:</p>
                      <p className="text-sm text-[#1A1A1A] leading-relaxed">{QUIZ.explanation}</p>
                      <button
                        onClick={resetQuiz}
                        className="mt-3 text-xs font-semibold text-violet-600 hover:text-violet-700 underline underline-offset-2"
                      >
                        Try again →
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Summary tab */}
              {activeTab === "summary" && (
                <div className="p-6" role="tabpanel" aria-label="Quick summary mode">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M5 0.5L6.12 3.88H9.51L6.7 5.99L7.82 9.37L5 7.26L2.18 9.37L3.3 5.99L0.49 3.88H3.88L5 0.5Z" fill="white" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">EVE's key insights</span>
                  </div>

                  <div className="bg-violet-50 rounded-2xl p-4 mb-5 border border-violet-100">
                    <p className="text-[11px] text-violet-500 font-semibold uppercase tracking-wider mb-0.5">Lesson</p>
                    <p className="text-sm font-bold text-[#1A1A1A]">The Power of Atomic Habits</p>
                    <p className="text-xs text-gray-500">James Clear · Mindvalley Quest</p>
                  </div>

                  <div className="space-y-3 mb-5">
                    {SUMMARY_POINTS.map((point, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-sm text-[#1A1A1A] leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <p className="text-xs font-bold text-amber-700 mb-1">💡 EVE's Insight</p>
                    <p className="text-sm text-amber-900 leading-relaxed">
                      Based on your current patterns, your identity shift from &ldquo;someone trying to change&rdquo;
                      to &ldquo;someone who naturally does this&rdquo; is the breakthrough that will unlock everything else.
                    </p>
                  </div>
                </div>
              )}

              {/* Apply tab */}
              {activeTab === "apply" && (
                <div className="p-6" role="tabpanel" aria-label="Real-world application mode">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M5 0.5L6.12 3.88H9.51L6.7 5.99L7.82 9.37L5 7.26L2.18 9.37L3.3 5.99L0.49 3.88H3.88L5 0.5Z" fill="white" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-violet-600 uppercase tracking-wider">Your daily action plan</span>
                  </div>

                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    EVE translated today&apos;s lesson into actionable steps designed for <strong className="text-[#1A1A1A]">your schedule and goals</strong>:
                  </p>

                  <div className="space-y-3 mb-5">
                    {APPLY_ITEMS.map(({ time, action, icon }) => (
                      <div key={time} className="flex gap-4 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="text-xl flex-shrink-0">{icon}</span>
                        <div>
                          <p className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-0.5">{time}</p>
                          <p className="text-sm text-[#1A1A1A] leading-relaxed">{action}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#get-started"
                    className="btn-primary block text-center py-3 rounded-xl text-sm font-semibold"
                  >
                    Add to my daily plan ✦
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="title-bold-3 text-[#1A1A1A] mb-6">
              Learn deeper,{" "}
              <span className="text-[#1A1A1A]">apply faster</span>
            </h2>
            <p className="body text-gray-500 max-w-lg">
              EVE doesn&apos;t just teach — she helps you truly understand, remember,
              and use what you&apos;re learning. With three powerful modes, she meets
              you wherever you are in your learning journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
