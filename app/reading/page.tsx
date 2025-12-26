"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, RotateCw, Volume2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ReadingPage() {
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
    <main className="max-w-7xl mx-auto px-6 py-12 pb-24">
        {/* Page Title */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-xl">
              <BookOpen className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                일본어 독해 연습
              </h1>
              <p className="text-gray-600 mt-1 text-lg">
                AI가 생성하는 맞춤형 지문으로 독해 실력을 향상하세요
              </p>
            </div>
          </div>
        </section>

        {/* Generator Form */}
        <section className="mb-12">
          <Card className="border border-purple-100/50 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                지문 생성하기
              </CardTitle>
              <CardDescription className="text-gray-600">
                학습하고 싶은 주제와 난이도를 선택하세요
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Topic */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  주제 (Topic)
                </label>
                <input
                  type="text"
                  placeholder="예: 교토 관광, 일본 문화, 계절, 음식"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all bg-white text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Difficulty & Length Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Difficulty */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    난이도 (Difficulty Level)
                  </label>
                  <select defaultValue="N2" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all bg-white text-gray-900">
                    <option>N5 (초급)</option>
                    <option>N4 (초중급)</option>
                    <option>N3 (중급)</option>
                    <option>N2 (중상급)</option>
                    <option>N1 (상급)</option>
                  </select>
                </div>

                {/* Length */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    길이 (Length)
                  </label>
                  <select defaultValue="짧음 (100-150 단어)" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all bg-white text-gray-900">
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
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all py-6 text-base font-bold"
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
                  className="px-8 border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-all py-6 text-base font-bold"
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
              <Card className="border border-purple-100/50 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {mockPassage.title}
                      </CardTitle>
                      <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-bold rounded-full">
                        {mockPassage.level}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600">
                        단어 수: <span className="font-bold text-gray-900">{mockPassage.wordCount}</span>
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                      >
                        <Volume2 className="w-4 h-4 mr-2" />
                        음성 듣기
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none">
                    <div className="text-gray-900 leading-loose text-lg space-y-4">
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  독해 문제
                </h2>
              </div>

              <div className="space-y-8">
                {mockQuestions.map((question, qIdx) => (
                  <Card key={question.id} className="border border-purple-100/50 shadow-lg bg-white">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        Question {qIdx + 1}: {question.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {question.options.map((option, optIdx) => (
                          <button
                            key={optIdx}
                            className="w-full text-left p-4 rounded-xl bg-gray-50 hover:bg-indigo-50 border-2 border-gray-200 hover:border-indigo-300 transition-all group"
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white border-2 border-gray-300 group-hover:border-indigo-500 group-hover:bg-indigo-500 group-hover:text-white flex items-center justify-center font-bold text-sm transition-all">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              <span className="flex-1 text-gray-900 leading-relaxed pt-1 font-medium">
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
                  className="w-full md:w-auto md:min-w-[300px] bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all py-6 text-base font-bold"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  답안 제출하기
                </Button>
              </div>
            </section>
          </>
        )}
    </main>
  );
}
