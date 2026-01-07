"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, RotateCw } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ReadingPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();
  const { getLanguageName } = useLanguage();

  const handleGenerate = () => {
    setIsGenerating(true);
    // TODO: Replace with actual API call
    setTimeout(() => {
      const passageId = crypto.randomUUID();
      // TODO: Save passage data to DB here
      router.push(`/reading/${passageId}`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 pb-24">
        {/* Page Title */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg">
              <BookOpen className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
                {getLanguageName()} 독해 연습
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-0.5 text-sm">
                LLM으로 생성된 맞춤형 지문으로 독해 실력을 향상하세요
              </p>
            </div>
          </div>
        </section>

        {/* Generator Form */}
        <section>
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
            <CardContent className="space-y-4">
              {/* Topic */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  주제
                </label>
                <input
                  type="text"
                  placeholder="예: 기술, 환경, 여행"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-sm"
                />
              </div>

              {/* Difficulty & Length Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Difficulty */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    난이도
                  </label>
                  <select defaultValue="중급" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm">
                    <option>초급</option>
                    <option>중급</option>
                    <option>고급</option>
                  </select>
                </div>

                {/* Length */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    길이
                  </label>
                  <select defaultValue="중간 (250-300 단어)" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm">
                    <option>짧음 (150-200 단어)</option>
                    <option>중간 (250-300 단어)</option>
                    <option>김 (350-400 단어)</option>
                  </select>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg transition-all py-2.5 text-sm font-semibold"
                >
                  {isGenerating ? (
                    <>
                      <RotateCw className="w-4 h-4 mr-2 animate-spin" />
                      지문 생성하기
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-4 h-4 mr-2" />
                      지문 생성하기
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
    </main>
  );
}
