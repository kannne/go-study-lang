"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WritingReviewPage() {
  const router = useRouter();
  const params = useParams();
  const writingId = params.id as string;
  const { getLanguageName } = useLanguage();

  // TODO: Fetch writing data from DB using writingId
  const mockWriting = {
    title: "My Thoughts on Philosophy",
    content: `Before I read this writing, I first read about Nietzsche in a book. Then I completely fell into his fascinating ideas. I wanted to know more about him so I ordered this AI to generate this non-fiction about Nietzsche. It was so impressive that he said people should question rules made by society. I strongly agree. He became my rolemodel today. I realised that people who I admire have a universal feature. They all question original facts and make efforts to make it in better way.`,
    submittedAt: "2025-12-29 14:30",
  };

  const mockFeedback = {
    grammarAdvice: [
      {
        original: 'people who I admire',
        corrected: 'people whom I admire',
        explanation: '관계대명사 who는 주격, whom은 목적격으로 쓰입니다',
      },
      {
        original: 'make efforts to make it in better way',
        corrected: 'make efforts to improve it',
        explanation: '부정관사 \'a\'가 필요하며, 더 간결하게 \'improve\'를 사용할 수 있습니다',
      },
    ],
    suggestions: [
      '시제 사용은 전반적으로 일관성이 있어 좋습니다. 과거 경험을 시술할 때 과거 시제를 적절히 사용했습니다.',
    ],
    score: {
      grammar: 85,
      vocabulary: 90,
      structure: 88,
    },
  };

  return (
    <main className="max-w-[1600px] mx-auto px-6 py-8 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button
          onClick={() => router.push("/writing")}
          variant="ghost"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          돌아가기
        </Button>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Share2 className="w-4 h-4 mr-2" />
            공유하기
          </Button>
          <Button
            variant="outline"
            className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Download className="w-4 h-4 mr-2" />
            다운로드
          </Button>
        </div>
      </div>

      {/* 2-Column Layout */}
      <div className="grid lg:grid-cols-2 gap-6 lg:h-[calc(100vh-180px)]">
        {/* Left Column: Original Writing */}
        <div className="lg:h-full overflow-y-auto">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800 h-full">
            <CardHeader className="pb-4 sticky top-0 bg-white dark:bg-gray-800 z-10 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                ✍ 작성한 글
              </CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{mockWriting.submittedAt}</p>
            </CardHeader>
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{mockWriting.title}</h2>
              <div className="text-gray-800 dark:text-gray-200 leading-relaxed text-base whitespace-pre-wrap bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                {mockWriting.content}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: AI Feedback */}
        <div className="lg:h-full overflow-y-auto">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
            <CardHeader className="pb-4 sticky top-0 bg-white dark:bg-gray-800 z-10 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                📋 AI 첨삭 피드백
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Score Summary */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-5 border border-purple-100 dark:border-purple-800">
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">평가 점수</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-black text-purple-600 dark:text-purple-400">{mockFeedback.score.grammar}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">문법</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-pink-600 dark:text-pink-400">{mockFeedback.score.vocabulary}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">어휘</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{mockFeedback.score.structure}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">구성</div>
                  </div>
                </div>
              </div>

              {/* Grammar Advice */}
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  🔍 문법 조언 (Grammar Advice)
                </h3>
                <div className="space-y-4">
                  {mockFeedback.grammarAdvice.map((advice, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-6 h-6 rounded-md bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <div className="flex-1 space-y-2">
                          <div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">원문: </span>
                            <span className="text-sm text-red-600 dark:text-red-400 line-through">"{advice.original}"</span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">수정: </span>
                            <span className="text-sm text-green-600 dark:text-green-400 font-semibold">"{advice.corrected}"</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-600 p-2 rounded">
                            {advice.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Suggestions */}
              <div>
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  💡 종합 의견
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <ul className="space-y-2">
                    {mockFeedback.suggestions.map((suggestion, idx) => (
                      <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        • {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Retry Button */}
              <div className="pt-4">
                <Button
                  onClick={() => router.push("/writing")}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all py-2.5 text-sm font-semibold"
                >
                  새로운 글 작성하기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
