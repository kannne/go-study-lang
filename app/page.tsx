"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, PenLine, Library, TrendingUp, Calendar, Flame, Clock, ArrowRight, Target } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Mock data - TODO: fetch from server
  const stats = {
    streak: 7,
    todayMinutes: 25,
    totalWords: 142,
    weeklyGoal: 60,
  };

  const recentPassages = [
    { id: 1, title: "京都の古刹を訪れる", level: "N2", date: "2025-12-16", accuracy: 85 },
    { id: 2, title: "日本の四季", level: "N3", date: "2025-12-15", accuracy: 92 },
  ];

  const reviewWords = [
    { word: "古刹", reading: "こさつ", meaning: "오래된 절" },
    { word: "融合", reading: "ゆうごう", meaning: "융합" },
    { word: "筆者", reading: "ひっしゃ", meaning: "필자" },
  ];

  const progressPercent = Math.min((stats.todayMinutes / stats.weeklyGoal) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF9F7] via-[#FDFCFA] to-[#F5F3F0]">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2C3338 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-neutral-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-gradient-to-br from-[#5B7C99] to-[#7C9885] rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-white font-semibold text-base">語</span>
              </div>
              <h1 className="text-lg font-semibold text-[#2C3338]">GoLang</h1>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/reading"
                className="text-sm font-medium text-[#6B7280] hover:text-[#5B7C99] transition-colors"
              >
                독해
              </Link>
              <Link
                href="/writing"
                className="text-sm font-medium text-[#6B7280] hover:text-[#7C9885] transition-colors"
              >
                작문
              </Link>
              <Link
                href="/vocabulary"
                className="text-sm font-medium text-[#6B7280] hover:text-[#D4704B] transition-colors"
              >
                어휘
              </Link>
            </nav>

            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-[#6B7280] hover:text-[#2C3338] hover:bg-neutral-100"
            >
              설정
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24 md:pb-16">
        {/* Welcome Section */}
        <section
          className={`mb-16 transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3338] mb-3 tracking-tight">
            안녕하세요, 민 님
          </h2>
          <p className="text-lg text-[#6B7280] font-medium">
            오늘도 꾸준히 성장하는 하루 되세요
          </p>
        </section>

        {/* Stats Grid */}
        <section
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 transition-all duration-1000 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Streak */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group bg-gradient-to-br from-white to-[#FFF9F5]">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF6B6B]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Flame className="w-5 h-5 text-[#D4704B]" strokeWidth={2} />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#2C3338] mb-1">{stats.streak}일</p>
              <p className="text-sm text-[#9CA3AF] font-medium">연속 학습</p>
            </CardContent>
          </Card>

          {/* Today Minutes */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group bg-gradient-to-br from-white to-[#F0F5FF]">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5B7C99]/10 to-[#5B7C99]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-[#5B7C99]" strokeWidth={2} />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#2C3338] mb-1">{stats.todayMinutes}분</p>
              <p className="text-sm text-[#9CA3AF] font-medium">오늘 학습</p>
            </CardContent>
          </Card>

          {/* Total Words */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group bg-gradient-to-br from-white to-[#F0FDF4]">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7C9885]/10 to-[#7C9885]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Library className="w-5 h-5 text-[#7C9885]" strokeWidth={2} />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#2C3338] mb-1">{stats.totalWords}</p>
              <p className="text-sm text-[#9CA3AF] font-medium">학습한 단어</p>
            </CardContent>
          </Card>

          {/* Level */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 group bg-gradient-to-br from-white to-[#FAFAFA]">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#9CA3AF]/10 to-[#9CA3AF]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5 text-[#6B7280]" strokeWidth={2} />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#2C3338] mb-1">N2</p>
              <p className="text-sm text-[#9CA3AF] font-medium">현재 레벨</p>
            </CardContent>
          </Card>
        </section>

        {/* Weekly Progress */}
        <section
          className={`mb-16 transition-all duration-1000 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold text-[#2C3338]">
                    이번 주 목표
                  </CardTitle>
                  <CardDescription className="text-[#9CA3AF] mt-1">
                    주 {stats.weeklyGoal}분 학습 목표
                  </CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#2C3338]">
                    {Math.round(progressPercent)}%
                  </p>
                  <p className="text-sm text-[#9CA3AF] mt-1">
                    {stats.todayMinutes}/{stats.weeklyGoal}분
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-3 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-gradient-to-r from-[#5B7C99] via-[#6B8BA3] to-[#7C9885] rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Action Cards */}
        <section
          className={`mb-16 transition-all duration-1000 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-2xl font-semibold text-[#2C3338] mb-6">
            학습 시작하기
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Reading */}
            <Link href="/reading/new" className="group">
              <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-[#F0F5FF] group-hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5B7C99] to-[#6B8BA3] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      <BookOpen className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#5B7C99] group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-[#2C3338] mb-2">
                    독해 학습
                  </CardTitle>
                  <CardDescription className="text-[#6B7280] leading-relaxed">
                    AI가 생성한 맞춤형 지문으로<br />독해 실력을 키워보세요
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/70 backdrop-blur-sm text-[#5B7C99] text-xs font-medium rounded-full border border-[#5B7C99]/20">
                      N5-N1 난이도
                    </span>
                    <span className="px-3 py-1 bg-white/70 backdrop-blur-sm text-[#5B7C99] text-xs font-medium rounded-full border border-[#5B7C99]/20">
                      후리가나 표시
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Writing */}
            <Link href="/writing/new" className="group">
              <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-[#F0FDF4] group-hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C9885] to-[#8CA895] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      <PenLine className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#7C9885] group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-[#2C3338] mb-2">
                    작문 연습
                  </CardTitle>
                  <CardDescription className="text-[#6B7280] leading-relaxed">
                    자유롭게 작문하고<br />AI 첨삭을 받아보세요
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/70 backdrop-blur-sm text-[#7C9885] text-xs font-medium rounded-full border border-[#7C9885]/20">
                      문법 체크
                    </span>
                    <span className="px-3 py-1 bg-white/70 backdrop-blur-sm text-[#7C9885] text-xs font-medium rounded-full border border-[#7C9885]/20">
                      표현 제안
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Vocabulary */}
            <Link href="/vocabulary" className="group">
              <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-[#FFF9F5] group-hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4704B] to-[#E0805B] flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                      <Library className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#D4704B] group-hover:translate-x-1 transition-all" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-[#2C3338] mb-2">
                    어휘 복습
                  </CardTitle>
                  <CardDescription className="text-[#6B7280] leading-relaxed">
                    오늘 {reviewWords.length}개 단어가<br />복습을 기다리고 있어요
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/70 backdrop-blur-sm text-[#D4704B] text-xs font-medium rounded-full border border-[#D4704B]/20">
                      플래시카드
                    </span>
                    <span className="px-3 py-1 bg-white/70 backdrop-blur-sm text-[#D4704B] text-xs font-medium rounded-full border border-[#D4704B]/20">
                      간격 반복
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Recent & Review Section */}
        <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Recent Passages */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#2C3338]">
                최근 학습한 지문
              </h3>
              <Link
                href="/reading"
                className="text-sm font-medium text-[#5B7C99] hover:text-[#4B6C89] transition-colors flex items-center gap-1"
              >
                전체보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {recentPassages.map((passage) => (
                    <Link
                      key={passage.id}
                      href={`/reading/${passage.id}`}
                      className="block group"
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-50/50 to-white/50 hover:from-neutral-50 hover:to-white transition-all hover:shadow-sm">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-[#2C3338] flex-1 group-hover:text-[#5B7C99] transition-colors">
                            {passage.title}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#5B7C99] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="px-2 py-0.5 bg-[#5B7C99]/10 text-[#5B7C99] rounded font-medium text-xs">
                            {passage.level}
                          </span>
                          <span className="text-[#9CA3AF] flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {passage.date}
                          </span>
                          <span className="text-[#9CA3AF]">
                            정확도 {passage.accuracy}%
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Review Words */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[#2C3338]">
                오늘의 복습 단어
              </h3>
              <Link
                href="/vocabulary"
                className="text-sm font-medium text-[#D4704B] hover:text-[#C4603B] transition-colors flex items-center gap-1"
              >
                전체보기
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  {reviewWords.map((word, idx) => (
                    <div
                      key={idx}
                      className="pb-4 border-b border-neutral-100 last:border-0 last:pb-0"
                    >
                      <p className="text-2xl font-semibold text-[#2C3338] mb-1">
                        {word.word}
                      </p>
                      <p className="text-sm text-[#9CA3AF] mb-1 font-medium">
                        {word.reading}
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        {word.meaning}
                      </p>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#5B7C99] to-[#7C9885] hover:from-[#4B6C89] hover:to-[#6C8875] text-white shadow-sm hover:shadow-md transition-all"
                >
                  <Link href="/vocabulary/review">
                    복습 시작하기
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-neutral-200/50 z-50 shadow-lg">
        <div className="grid grid-cols-4">
          <Link
            href="/"
            className="flex flex-col items-center gap-1.5 p-4 text-[#5B7C99] bg-neutral-50/50"
          >
            <TrendingUp className="w-5 h-5" strokeWidth={2} />
            <span className="text-xs font-medium">홈</span>
          </Link>
          <Link
            href="/reading"
            className="flex flex-col items-center gap-1.5 p-4 text-[#6B7280] hover:text-[#5B7C99] hover:bg-neutral-50/50 transition-colors"
          >
            <BookOpen className="w-5 h-5" strokeWidth={2} />
            <span className="text-xs font-medium">독해</span>
          </Link>
          <Link
            href="/writing"
            className="flex flex-col items-center gap-1.5 p-4 text-[#6B7280] hover:text-[#7C9885] hover:bg-neutral-50/50 transition-colors"
          >
            <PenLine className="w-5 h-5" strokeWidth={2} />
            <span className="text-xs font-medium">작문</span>
          </Link>
          <Link
            href="/vocabulary"
            className="flex flex-col items-center gap-1.5 p-4 text-[#6B7280] hover:text-[#D4704B] hover:bg-neutral-50/50 transition-colors"
          >
            <Library className="w-5 h-5" strokeWidth={2} />
            <span className="text-xs font-medium">어휘</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
