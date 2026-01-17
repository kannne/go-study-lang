"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Flame,
  Clock,
  CheckCircle2,
  Target,
  Calendar,
  Lock,
  Bell,
  Globe,
} from "lucide-react";

export default function MyPage() {  
  useEffect(() => {
    document.title = "마이페이지 - GoLang";
  }, []);

  // Mock data - TODO: Replace with actual user data
  const userProfile = {
    name: "민 님",
    email: "min@example.com",
    joinDate: "2024.01.15",
    stats: {
      streak: 7,
      totalStudyTime: "48시간 30분",
      completedLessons: 142,
    },
  };

  const learningGoals = {
    weekly: { target: 10, current: 7, percentage: 70 },
    monthly: { target: 40, current: 28, percentage: 70 },
  };

  const accountSettings = {
    password: "********",
    notifications: { email: true, push: true },
    language: "한국어 (Korean)",
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 pb-24">
      {/* Page Header */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl">
            <User className="w-8 h-8 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight">
              마이페이지
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-lg">
              내 프로필과 학습 목표를 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="mb-12">
        <Card className="border border-purple-100/50 dark:border-purple-800/50 shadow-lg bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-blue-950/30">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl">
                  <User className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
              </div>

              {/* Basic Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-2">
                  {userProfile.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-1">{userProfile.email}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  가입일: {userProfile.joinDate}
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-col gap-4 min-w-[200px]">
                <div className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 backdrop-blur-sm">
                  <div className="p-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg">
                    <Flame className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-black bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                      {userProfile.stats.streak}일
                    </p>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">연속 학습</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 backdrop-blur-sm">
                  <div className="p-2 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {userProfile.stats.totalStudyTime}
                    </p>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">총 학습 시간</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/60 dark:bg-gray-800/60 rounded-xl p-3 backdrop-blur-sm">
                  <div className="p-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {userProfile.stats.completedLessons}개
                    </p>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">완료한 학습</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Learning Goals Section */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">학습 목표</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Weekly Goal */}
          <Card className="border border-purple-100/50 dark:border-purple-800/50 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-xl">
                  <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  주간 목표
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {learningGoals.weekly.percentage}%
              </p>
              <div className="w-full max-w-[120px] h-32 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative mb-4">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700"
                  style={{ height: `${learningGoals.weekly.percentage}%` }}
                />
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {learningGoals.weekly.current} / {learningGoals.weekly.target}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">학습 완료</p>
            </CardContent>
          </Card>

          {/* Monthly Goal */}
          <Card className="border border-purple-100/50 dark:border-purple-800/50 shadow-lg bg-white dark:bg-gray-800">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-xl">
                  <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  월간 목표
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <p className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                {learningGoals.monthly.percentage}%
              </p>
              <div className="w-full max-w-[120px] h-32 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden relative mb-4">
                <div
                  className="absolute bottom-0 w-full bg-gradient-to-t from-purple-500 via-pink-500 to-rose-500 rounded-full transition-all duration-700"
                  style={{ height: `${learningGoals.monthly.percentage}%` }}
                />
              </div>
              <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {learningGoals.monthly.current} / {learningGoals.monthly.target}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">학습 완료</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Account Settings Section */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">계정 설정</h3>
        <Card className="border border-purple-100/50 dark:border-purple-800/50 shadow-lg bg-white dark:bg-gray-800">
          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Password */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Lock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">비밀번호</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  {accountSettings.password}
                </span>
              </div>

              <div className="h-px bg-gray-100 dark:bg-gray-700" />

              {/* Email Notifications */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">이메일 알림</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  {accountSettings.notifications.email ? "켜짐" : "꺼짐"}
                </span>
              </div>

              <div className="h-px bg-gray-100 dark:bg-gray-700" />

              {/* Push Notifications */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">푸시 알림</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  {accountSettings.notifications.push ? "켜짐" : "꺼짐"}
                </span>
              </div>

              <div className="h-px bg-gray-100 dark:bg-gray-700" />

              {/* Language */}
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">언어</span>
                </div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  {accountSettings.language}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
