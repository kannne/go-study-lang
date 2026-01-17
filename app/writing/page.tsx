"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PenLine } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WritingPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { getLanguageName } = useLanguage();

  useEffect(() => {
    document.title = "작문 - GoLang";
  }, []);

  // Calculate statistics
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const charCount = content.length;
  const sentenceCount = content.trim() ? content.split(/[.!?。！？]+/).filter(s => s.trim()).length : 0;

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    setIsSubmitting(true);
    // TODO: Replace with actual API call
    setTimeout(() => {
      const writingId = crypto.randomUUID();
      // TODO: Save writing data to DB here
      router.push(`/writing/${writingId}`);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8 pb-24">
      {/* Page Title */}
      <section className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
            <PenLine className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
              {getLanguageName()} 작문 연습
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-0.5 text-sm">
              자유롭게 글을 작성하고 AI 첨삭을 받아보세요
            </p>
          </div>
        </div>
      </section>

      {/* Writing Form */}
      <section>
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
          <CardContent className="pt-6 space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-gray-300 mb-2">
                Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력해주세요."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base"
              />
            </div>

            {/* Writing Textarea */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-gray-300 mb-2">
                Your Writing:
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용을 작성해주세요."
                rows={15}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-base leading-relaxed resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || !title.trim() || !content.trim()}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-md hover:shadow-lg transition-all py-6 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  첨삭 분석 중...
                </>
              ) : (
                <>
                  📝 Get Review
                </>
              )}
            </Button>

            {/* Statistics */}
            <div className="flex items-center gap-6 pt-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1.5">
                📝 Words: <span className="font-semibold text-gray-900 dark:text-gray-100">{wordCount}</span>
              </span>
              <span className="flex items-center gap-1.5">
                💬 Characters: <span className="font-semibold text-gray-900 dark:text-gray-100">{charCount}</span>
              </span>
              <span className="flex items-center gap-1.5">
                ✏️ Sentences: <span className="font-semibold text-gray-900 dark:text-gray-100">{sentenceCount}</span>
              </span>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
