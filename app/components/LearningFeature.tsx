"use client";

import { useState } from "react";
import Image from "next/image";

type Tab = "quiz" | "summary" | "apply";

const QUIZ = {
  question: "According to Regan Hilyer, what is the most powerful factor in successful manifestation?",
  options: [
    { id: "a", text: "Repeating affirmations daily for 30 days", correct: false },
    { id: "b", text: "Aligning your emotional state with what you desire", correct: true },
    { id: "c", text: "Visualising your goals for exactly 10 minutes each morning", correct: false },
    { id: "d", text: "Thinking positive thoughts at all times", correct: false },
  ],
  explanation:
    "Regan Hilyer teaches that manifestation is fundamentally an inside job. Your emotional frequency — not just your thoughts — is the signal you broadcast to the universe. When you genuinely feel the reality of what you want before it arrives, you collapse the gap between desire and outcome.",
};

const SUMMARY_POINTS = [
  "Your outer world is a reflection of your inner state. Lasting change starts within.",
  "Clarity is power — vague intentions create vague results. Get radically specific about what you want.",
  "Your dominant emotional frequency determines what you attract. Raise it deliberately, not by accident.",
  "Embody the version of you who already has what you desire. Be it now, don't wait for proof.",
];

const APPLY_ITEMS = [
  { time: "Morning", action: "Write 3 desires in present tense as if already real — feel them as you write", icon: "🌅" },
  { time: "Afternoon", action: "Check your emotional frequency — are you vibrating at the level of your desire?", icon: "✨" },
  { time: "Evening", action: "Spend 5 minutes visualising your desired reality with full sensory detail and genuine emotion", icon: "🌙" },
  { time: "Weekly", action: "Review with EVE — she'll track your manifestation momentum and refine your focus", icon: "✦" },
];

function PanelIcon() {
  return <Image src="/EVE-icon.svg" alt="EVE" width={18} height={18} className="flex-shrink-0" />;
}

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
                  style={activeTab === id ? { background: "linear-gradient(135deg, #5693F6 0%, #8A87EF 100%)", boxShadow: "0 4px 12px rgba(86,147,246,0.3)" } : {}}
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
                    <PanelIcon />
                    <span className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">Testing your understanding</span>
                  </div>

                  <div className="rounded-2xl p-4 mb-5 border border-blue-100/60" style={{ background: "linear-gradient(135deg, #EEF5FF, #F1F1FC)" }}>
                    <p className="text-[11px] text-[#71767F] font-semibold uppercase tracking-wider mb-1">From: The Art of Manifesting · Regan Hilyer</p>
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
                      <p className="text-xs font-bold text-[#1A1A1A] mb-1.5">EVE explains:</p>
                      <p className="text-sm text-[#1A1A1A] leading-relaxed">{QUIZ.explanation}</p>
                      <button
                        onClick={resetQuiz}
                        className="mt-3 text-xs font-semibold text-[#1A1A1A] hover:text-gray-600 underline underline-offset-2"
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
                    <PanelIcon />
                    <span className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">EVE&apos;s key insights</span>
                  </div>

                  <div className="rounded-2xl p-4 mb-5 border border-blue-100/60" style={{ background: "linear-gradient(135deg, #EEF5FF, #F1F1FC)" }}>
                    <p className="text-[11px] text-[#71767F] font-semibold uppercase tracking-wider mb-0.5">Lesson</p>
                    <p className="text-sm font-bold text-[#1A1A1A]">The Art of Manifesting</p>
                    <p className="text-xs text-gray-500">Regan Hilyer · Mindvalley Quest</p>
                  </div>

                  <div className="space-y-3 mb-5">
                    {SUMMARY_POINTS.map((point, i) => (
                      <div key={i} className="flex gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0 mt-0.5"
                          style={{ background: "linear-gradient(135deg, #5693F6, #8A87EF)" }}
                        >
                          {i + 1}
                        </div>
                        <p className="text-sm text-[#1A1A1A] leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <p className="text-xs font-bold text-amber-700 mb-1">💡 EVE&apos;s Insight</p>
                    <p className="text-sm text-amber-900 leading-relaxed">
                      Based on your current patterns, your biggest breakthrough isn&apos;t doing more — it&apos;s becoming the version of you who already has this. The shift from wanting to being is where manifestation accelerates.
                    </p>
                  </div>
                </div>
              )}

              {/* Apply tab */}
              {activeTab === "apply" && (
                <div className="p-6" role="tabpanel" aria-label="Real-world application mode">
                  <div className="flex items-center gap-2 mb-4">
                    <PanelIcon />
                    <span className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wider">Your daily action plan</span>
                  </div>

                  <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                    EVE translated today&apos;s lesson into actionable steps designed for <strong className="text-[#1A1A1A]">your schedule and goals</strong>:
                  </p>

                  <div className="space-y-3 mb-5">
                    {APPLY_ITEMS.map(({ time, action, icon }) => (
                      <div key={time} className="flex gap-4 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                        <span className="text-xl flex-shrink-0">{icon}</span>
                        <div>
                          <p className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-0.5">{time}</p>
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
