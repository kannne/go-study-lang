"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Play, RotateCw, Volume2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ReadingNewPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasPassage, setHasPassage] = useState(false);

  // Mock data - TODO: Replace with actual API call
  const mockPassage = {
    title: "京都の古刹を訪れる",
    content: `京都には、数多くの古い寺院が点在しています。これらの寺院は、日本の歴史と文化を今に伝える貴重な遺産です。特に金閣寺や清水寺などは、国内外から多くの観光客が訪れる人気スポットとなっています。

春には桜、秋には紅葉が寺院の境内を彩り、訪れる人々を魅了します。静寂な雰囲気の中で、歴史の重みを感じながら散策することができます。

これらの寺院は、単なる観光地ではなく、今も多くの人々の信仰の場として大切にされています。`,
    wordCount: 142,
    level: "N2",
  };

  const mockQuestions = [
    {
      id: 1,
      question: "この文章の主な内容は何ですか？",
      options: [
        "京都の寺院の歴史的価値と観光地としての魅力",
        "日本の春と秋の季節の変化",
        "金閣寺と清水寺の建築様式の違い",
        "寺院での信仰生活の様子",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "文章によると、京都の寺院について正しいのはどれですか？",
      options: [
        "観光客は訪れることができない",
        "春と秋に特に美しい景色を見ることができる",
        "最近建てられた新しい建物である",
        "外国人観光客は入場できない",
      ],
      correctAnswer: 1,
    },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    // Mock: Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setHasPassage(true);
    }, 1500);
  };

  const handleRandom = () => {
    // TODO: Implement random generation
    handleGenerate();
  };

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
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-[#6B7280] hover:text-[#2C3338] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">홈으로</span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-[#6B7280]">독해 연습</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        {/* Page Title */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5B7C99] to-[#6B8BA3] flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#2C3338] tracking-tight">
                일본어 독해 연습
              </h1>
              <p className="text-[#6B7280] mt-1">
                AI가 생성하는 맞춤형 지문으로 독해 실력을 향상하세요
              </p>
            </div>
          </div>
        </section>

        {/* Generator Form */}
        <section className="mb-12">
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-[#2C3338]">
                지문 생성하기
              </CardTitle>
              <CardDescription className="text-[#6B7280]">
                학습하고 싶은 주제와 난이도를 선택하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Topic */}
              <div>
                <label className="block text-sm font-medium text-[#2C3338] mb-2">
                  주제 (Topic)
                </label>
                <input
                  type="text"
                  placeholder="예: 교토 관광, 일본 문화, 계절, 음식"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#5B7C99] focus:ring-2 focus:ring-[#5B7C99]/20 outline-none transition-all bg-white text-[#2C3338] placeholder:text-[#9CA3AF]"
                />
              </div>

              {/* Difficulty & Length Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Difficulty */}
                <div>
                  <label className="block text-sm font-medium text-[#2C3338] mb-2">
                    난이도 (Difficulty Level)
                  </label>
                  <select defaultValue="N2" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#5B7C99] focus:ring-2 focus:ring-[#5B7C99]/20 outline-none transition-all bg-white text-[#2C3338]">
                    <option>N5 (초급)</option>
                    <option>N4 (초중급)</option>
                    <option>N3 (중급)</option>
                    <option>N2 (중상급)</option>
                    <option>N1 (상급)</option>
                  </select>
                </div>

                {/* Length */}
                <div>
                  <label className="block text-sm font-medium text-[#2C3338] mb-2">
                    길이 (Length)
                  </label>
                  <select defaultValue="짧음 (100-150 단어)" className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#5B7C99] focus:ring-2 focus:ring-[#5B7C99]/20 outline-none transition-all bg-white text-[#2C3338]">
                    <option>짧음 (100-150 단어)</option>
                    <option>중간 (150-250 단어)</option>
                    <option>김 (250-350 단어)</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="flex-1 bg-gradient-to-r from-[#5B7C99] to-[#6B8BA3] hover:from-[#4B6C89] hover:to-[#5B7C99] text-white shadow-sm hover:shadow-md transition-all py-6 text-base font-medium"
                >
                  {isGenerating ? (
                    <>
                      <RotateCw className="w-5 h-5 mr-2 animate-spin" />
                      생성 중...
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-5 h-5 mr-2" />
                      지문 생성하기
                    </>
                  )}
                </Button>

                <Button
                  onClick={handleRandom}
                  disabled={isGenerating}
                  variant="outline"
                  className="px-8 border-2 border-[#5B7C99] text-[#5B7C99] hover:bg-[#5B7C99] hover:text-white transition-all py-6 text-base font-medium"
                >
                  <RotateCw className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Generated Passage */}
        {hasPassage && (
          <>
            <section className="mb-12">
              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl font-semibold text-[#2C3338]">
                        {mockPassage.title}
                      </CardTitle>
                      <span className="px-3 py-1 bg-[#5B7C99]/10 text-[#5B7C99] text-sm font-medium rounded-full">
                        {mockPassage.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#6B7280]">
                        단어 수: <span className="font-semibold text-[#2C3338]">{mockPassage.wordCount}</span>
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#5B7C99] hover:text-[#4B6C89] hover:bg-[#5B7C99]/10"
                      >
                        <Volume2 className="w-4 h-4 mr-2" />
                        음성 듣기
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none">
                    <div className="text-[#2C3338] leading-loose text-lg space-y-4">
                      {mockPassage.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reading Comprehension Questions */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5B7C99]/20 to-[#5B7C99]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#5B7C99]" strokeWidth={2} />
                </div>
                <h2 className="text-2xl font-semibold text-[#2C3338]">
                  독해 문제
                </h2>
              </div>

              <div className="space-y-8">
                {mockQuestions.map((question, qIdx) => (
                  <Card key={question.id} className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-[#2C3338]">
                        Question {qIdx + 1}: {question.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {question.options.map((option, optIdx) => (
                          <button
                            key={optIdx}
                            className="w-full text-left p-4 rounded-xl bg-gradient-to-br from-neutral-50/50 to-white/50 hover:from-[#5B7C99]/5 hover:to-[#5B7C99]/10 border border-neutral-200/50 hover:border-[#5B7C99]/30 transition-all group"
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border border-neutral-200 group-hover:border-[#5B7C99] group-hover:bg-[#5B7C99] group-hover:text-white flex items-center justify-center font-semibold text-sm transition-all">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="flex-1 text-[#2C3338] leading-relaxed pt-1">
                                {option}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <Button
                  className="w-full md:w-auto md:min-w-[300px] bg-gradient-to-r from-[#5B7C99] to-[#6B8BA3] hover:from-[#4B6C89] hover:to-[#5B7C99] text-white shadow-sm hover:shadow-md transition-all py-6 text-base font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  답안 제출하기
                </Button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
