"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, Volume2 } from "lucide-react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Mode = "study" | "test";

export default function VocabularySessionPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const mode = params.mode as Mode;
  const sessionId = params.sessionId as string;
  const difficulty = searchParams.get("difficulty") || "intermediate";
  const { getLanguageName } = useLanguage();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  // TODO: Fetch vocabulary data from DB
  const mockVocabulary = [
    {
      word: "varies",
      meaning: "다양하다, 변화하다",
      example: "The price varies depending on the season.",
      exampleTranslation: "가격은 계절에 따라 다양합니다.",
      options: ["다양하다", "유지하다", "증가하다", "감소하다"],
      correctIndex: 0,
    },
    {
      word: "embedded",
      meaning: "내장된, 끼워 넣어진",
      example: "The video is embedded in the webpage.",
      exampleTranslation: "비디오가 웹페이지에 내장되어 있습니다.",
      options: ["제거된", "내장된", "외부의", "분리된"],
      correctIndex: 1,
    },
    {
      word: "conquering",
      meaning: "정복하는, 극복하는",
      example: "Conquering fear is the first step to success.",
      exampleTranslation: "두려움을 극복하는 것이 성공의 첫 단계입니다.",
      options: ["회피하는", "무시하는", "정복하는", "방어하는"],
      correctIndex: 2,
    },
  ];

  const totalWords = mockVocabulary.length;
  const currentWord = mockVocabulary[currentIndex];

  // Timer for test mode
  useEffect(() => {
    if (mode === "test" && timeLeft > 0 && selectedAnswer === null) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && selectedAnswer === null) {
      handleNext();
    }
  }, [timeLeft, selectedAnswer, mode]);

  const handleAnswerSelect = (index: number) => {
    if (mode === "test" && selectedAnswer === null) {
      setSelectedAnswer(index);
      if (index === currentWord.correctIndex) {
        setCorrectCount(correctCount + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      // Session completed
      router.push(`/vocabulary?completed=true&correct=${correctCount}&total=${totalWords}`);
    }
  };

  return (
    <main className="min-h-screen px-6 py-8 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={() => router.push("/vocabulary")}
            variant="ghost"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            돌아가기
          </Button>
          <div className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
            {mode === "study" ? "📚 스터디 모드" : "⏱️ 테스트 모드"}
          </div>
        </div>

        {/* Progress */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-3">
            {getLanguageName()} 어휘
          </h1>
          <div className="text-gray-700 dark:text-gray-300 text-sm">
            단어 수: {totalWords} | 오늘 맞힌 개수: {correctCount} | 문제 {currentIndex + 1}/{totalWords}
          </div>
          {mode === "test" && (
            <div className="mt-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
              ⏱️ {timeLeft}s
            </div>
          )}
        </div>

        {/* Content Card */}
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
          <CardContent className="p-8">
            {mode === "study" ? (
              // Study Mode
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-4xl font-black text-gray-900 dark:text-gray-100">{currentWord.word}</h2>
                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <Volume2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </button>
                  </div>
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">{currentWord.meaning}</p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5 space-y-2">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-400">예문:</div>
                  <p className="text-base text-gray-800 dark:text-gray-200 italic">"{currentWord.example}"</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{currentWord.exampleTranslation}</p>
                </div>

                <Button
                  onClick={handleNext}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md py-6 text-base font-semibold"
                >
                  {currentIndex < totalWords - 1 ? (
                    <>
                      다음 단어
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    "학습 완료"
                  )}
                </Button>
              </div>
            ) : (
              // Test Mode
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <h2 className="text-4xl font-black text-gray-900 dark:text-gray-100">{currentWord.word}</h2>
                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <Volume2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </button>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400">의미를 선택하세요</p>
                </div>

                <div className="space-y-3">
                  {currentWord.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentWord.correctIndex;
                    const showResult = selectedAnswer !== null;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-5 rounded-xl border-2 transition-all text-left ${
                          !showResult
                            ? "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30"
                            : isSelected && isCorrect
                            ? "border-green-500 bg-green-50 dark:bg-green-900/30"
                            : isSelected && !isCorrect
                            ? "border-red-500 bg-red-50 dark:bg-red-900/30"
                            : isCorrect
                            ? "border-green-500 bg-green-50 dark:bg-green-900/30"
                            : "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-base font-semibold text-gray-900 dark:text-gray-100">{option}</span>
                          {showResult && isCorrect && (
                            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer !== null && (
                  <Button
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-md py-6 text-base font-semibold"
                  >
                    {currentIndex < totalWords - 1 ? (
                      <>
                        다음 문제
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </>
                    ) : (
                      "테스트 완료"
                    )}
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalWords) * 100}%` }}
            />
          </div>
          <div className="text-center mt-2 text-gray-700 dark:text-gray-300 text-sm">
            진행도: {correctCount}/{currentIndex + 1} ⭐
          </div>
        </div>
      </div>
    </main>
  );
}
