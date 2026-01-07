"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Library, BookOpen, Clock } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

type Difficulty = "beginner" | "intermediate" | "advanced";
type Mode = "study" | "test";

export default function VocabularyPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>("intermediate");
  const [mode, setMode] = useState<Mode>("study");
  const router = useRouter();
  const { getLanguageName } = useLanguage();

  const handleStart = () => {
    const sessionId = crypto.randomUUID();
    // TODO: Save session data to DB here
    router.push(`/vocabulary/${mode}/${sessionId}?difficulty=${difficulty}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 pb-24">
      {/* Page Title */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg">
            <Library className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              {getLanguageName()} 어휘 학습
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-0.5 text-sm">
              간격 반복 학습으로 단어를 완벽하게 익히세요
            </p>
          </div>
        </div>
      </section>

      {/* Settings Card */}
      <section>
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
          <CardContent className="pt-6 space-y-8">
            {/* Difficulty Selection */}
            <div>
              <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">난이도 선택</h2>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setDifficulty("beginner")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    difficulty === "beginner"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300"
                  }`}
                >
                  <div className="text-base font-semibold">초급</div>
                </button>
                <button
                  onClick={() => setDifficulty("intermediate")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    difficulty === "intermediate"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300"
                  }`}
                >
                  <div className="text-base font-semibold">중급</div>
                </button>
                <button
                  onClick={() => setDifficulty("advanced")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    difficulty === "advanced"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300"
                  }`}
                >
                  <div className="text-base font-semibold">고급</div>
                </button>
              </div>
            </div>

            {/* Mode Selection */}
            <div>
              <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">학습 모드</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setMode("study")}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    mode === "study"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                      : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      mode === "study" ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                    }`}>
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className={`text-base font-bold ${
                        mode === "study" ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-gray-100"
                      }`}>
                        스터디 모드
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    시간 제한 없이 단어와 뜻, 예문을 천천히 학습합니다
                  </p>
                </button>

                <button
                  onClick={() => setMode("test")}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    mode === "test"
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                      : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      mode === "test" ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
                    }`}>
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className={`text-base font-bold ${
                        mode === "test" ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-gray-100"
                      }`}>
                        테스트 모드
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    시간 제한 안에 4개의 선택지 중 정답을 골라보세요
                  </p>
                </button>
              </div>
            </div>

            {/* Start Button */}
            <Button
              onClick={handleStart}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-md hover:shadow-lg transition-all py-6 text-base font-semibold"
            >
              {mode === "study" ? "📚 스터디 시작하기" : "⏱️ 테스트 시작하기"}
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
