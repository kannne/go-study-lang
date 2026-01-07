"use client";

import { Button } from "@/components/ui/button";
import {
  BookOpen,
  PenLine,
  Library,
  Flame,
  Sparkles,
  CheckCircle2,
  Circle,
} from "lucide-react";
import Link from "next/link";

export default function Home() {

  // Mock data
  const weeklyActivity = [
    { day: "월", date: "12/23", reading: 2, writing: 0, vocabulary: 20 },
    { day: "화", date: "12/24", reading: 3, writing: 1, vocabulary: 15 },
    { day: "수", date: "12/25", reading: 1, writing: 1, vocabulary: 10 },
    { day: "목", date: "12/26", reading: 0, writing: 0, vocabulary: 0 },
    { day: "금", date: "12/27", reading: 0, writing: 0, vocabulary: 0 },
  ];

  const todos = [
    { id: 1, text: "어제 틀린 문제 2개 다시 풀기", type: "review", done: false },
    { id: 2, text: "추론 문제 연습 (정확도 향상)", type: "weak", done: false },
    { id: 3, text: "N2 일상 생활 주제 지문", type: "new", done: false },
  ];

  const stats = {
    streak: 7,
    readingProgress: 6,
    readingTotal: 10,
    writingProgress: 2,
    writingTotal: 5,
    vocabProgress: 45,
    vocabTotal: 50,
  };

  const weeklyGoalProgress = 68;

  const getActivityLevel = (total: number) => {
    if (total === 0) return "opacity-30";
    if (total < 5) return "opacity-60";
    if (total < 15) return "opacity-80";
    return "opacity-100";
  };

  return (
    <>
      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar - Sticky */}
        <aside className="hidden lg:block w-52 p-6 sticky top-24 h-[calc(100vh-6rem)] flex-shrink-0">
          <div className="space-y-6">
            {/* Streak */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-purple-100/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-black bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                    {stats.streak}
                  </p>
                  <p className="text-xs font-semibold text-gray-500">일 연속</p>
                </div>
              </div>
            </div>

            {/* Weekly Goal - Vertical Progress */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-purple-100/50">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">주간 목표</p>
                <p className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {weeklyGoalProgress}%
                </p>
              </div>
              <div className="w-full h-32 bg-gray-100 rounded-full overflow-hidden relative">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700"
                  style={{ height: `${weeklyGoalProgress}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-purple-100/50 space-y-4">
              {/* Reading */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-gray-500">독해</p>
                  <p className="text-sm font-bold text-indigo-600">
                    {stats.readingProgress}/{stats.readingTotal}
                  </p>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all"
                    style={{ width: `${(stats.readingProgress / stats.readingTotal) * 100}%` }}
                  />
                </div>
              </div>

              {/* Writing */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-gray-500">작문</p>
                  <p className="text-sm font-bold text-purple-600">
                    {stats.writingProgress}/{stats.writingTotal}
                  </p>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                    style={{ width: `${(stats.writingProgress / stats.writingTotal) * 100}%` }}
                  />
                </div>
              </div>

              {/* Vocabulary */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-gray-500">어휘</p>
                  <p className="text-sm font-bold text-blue-600">
                    {stats.vocabProgress}/{stats.vocabTotal}
                  </p>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                    style={{ width: `${(stats.vocabProgress / stats.vocabTotal) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-8">
          {/* AI Recommendation CTA */}
          <div className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 rounded-3xl p-8 shadow-2xl text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -ml-24 -mb-24" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider opacity-90">AI 추천</span>
              </div>
              <h2 className="text-3xl font-black mb-2">오늘의 추천 학습</h2>
              <p className="text-lg opacity-90 mb-6">
                추론 문제에서 정확도가 낮아요. 집중 연습으로 실력을 높여보세요!
              </p>
              <Link href="/reading?focus=inference">
                <button className="px-6 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform">
                  추론 문제 시작하기 →
                </button>
              </Link>
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100/50">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
              오늘 할 일
            </h3>
            <div className="space-y-3">
              {todos.map((todo) => (
                <button
                  key={todo.id}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group"
                >
                  <div className="flex-shrink-0">
                    {todo.done ? (
                      <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-300 group-hover:text-indigo-400 transition-colors" />
                    )}
                  </div>
                  <span className="flex-1 text-left text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                    {todo.text}
                  </span>
                  <div className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    시작
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Weekly Activity - Dot Timeline */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-purple-100/50">
            <h3 className="text-xl font-bold text-gray-900 mb-6">이번 주 활동</h3>
            <div className="space-y-4">
              {weeklyActivity.map((day, idx) => {
                const total = day.reading + day.writing + day.vocabulary;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-16">
                      <p className="text-sm font-bold text-gray-900">{day.day}</p>
                      <p className="text-xs text-gray-500">{day.date}</p>
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      {/* Reading dots */}
                      <div className="flex gap-1">
                        {[...Array(Math.min(day.reading, 5))].map((_, i) => (
                          <div
                            key={`r-${i}`}
                            className={`w-3 h-3 rounded-full bg-indigo-500 ${getActivityLevel(total)}`}
                          />
                        ))}
                      </div>
                      {/* Writing dots */}
                      <div className="flex gap-1">
                        {[...Array(Math.min(day.writing, 5))].map((_, i) => (
                          <div
                            key={`w-${i}`}
                            className={`w-3 h-3 rounded-full bg-purple-500 ${getActivityLevel(total)}`}
                          />
                        ))}
                      </div>
                      {/* Vocabulary dots */}
                      <div className="flex gap-1">
                        {[...Array(Math.min(Math.floor(day.vocabulary / 5), 5))].map((_, i) => (
                          <div
                            key={`v-${i}`}
                            className={`w-3 h-3 rounded-full bg-blue-500 ${getActivityLevel(total)}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="text-right min-w-[60px]">
                      <p className={`text-sm font-bold ${total > 0 ? "text-gray-900" : "text-gray-300"}`}>
                        {total > 0 ? `${total}개` : "-"}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <span className="text-gray-600">독해</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-gray-600">작문</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-gray-600">어휘 (5개 = 1dot)</span>
              </div>
            </div>
          </div>

          {/* Quick Start Buttons */}
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/reading">
              <button className="w-full group relative overflow-hidden bg-gradient-to-br from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] transform">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <BookOpen className="w-8 h-8 mb-3 relative z-10" strokeWidth={2.5} />
                <h4 className="text-lg font-black mb-1 relative z-10">독해 학습</h4>
                <p className="text-sm opacity-90 relative z-10">AI 맞춤형 지문</p>
              </button>
            </Link>

            <Link href="/writing">
              <button className="w-full group relative overflow-hidden bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] transform">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <PenLine className="w-8 h-8 mb-3 relative z-10" strokeWidth={2.5} />
                <h4 className="text-lg font-black mb-1 relative z-10">작문 연습</h4>
                <p className="text-sm opacity-90 relative z-10">자유 작문 첨삭</p>
              </button>
            </Link>

            <Link href="/vocabulary">
              <button className="w-full group relative overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] transform">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform" />
                <Library className="w-8 h-8 mb-3 relative z-10" strokeWidth={2.5} />
                <h4 className="text-lg font-black mb-1 relative z-10">어휘 복습</h4>
                <p className="text-sm opacity-90 relative z-10">간격 반복 학습</p>
              </button>
            </Link>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-purple-100 z-50 shadow-2xl">
        <div className="grid grid-cols-4 gap-1 p-2">
          <Link href="/" className="flex flex-col items-center gap-1 py-2 px-3 bg-indigo-50 text-indigo-600 rounded-xl">
            <Flame className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-xs font-bold">홈</span>
          </Link>
          <Link href="/reading" className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-colors">
            <BookOpen className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-xs font-bold">독해</span>
          </Link>
          <Link href="/writing" className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-colors">
            <PenLine className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-xs font-bold">작문</span>
          </Link>
          <Link href="/vocabulary" className="flex flex-col items-center gap-1 py-2 px-3 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">
            <Library className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-xs font-bold">어휘</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
