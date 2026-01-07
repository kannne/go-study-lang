"use client";

import { Button } from "@/components/ui/button";
import { Bell, User, Moon, Sun, LogOut, Settings, BookOpen, PenLine, Library, Languages } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const [userDropdown, setUserDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, getLanguageLabel } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const getActiveTab = () => {
    if (pathname.startsWith("/reading")) return "reading";
    if (pathname.startsWith("/writing")) return "writing";
    if (pathname.startsWith("/vocabulary")) return "vocabulary";
    return "home";
  };

  const activeTab = getActiveTab();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-purple-100/50 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            GoLang
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-14">
          <Link
            href="/reading"
            className={`flex items-center gap-2 px-1 py-3 text-lg font-extrabold border-b-3 transition-all ${
              activeTab === "reading"
                ? "text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400"
                : "text-gray-700 dark:text-gray-300 border-transparent hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            독해
          </Link>
          <Link
            href="/writing"
            className={`flex items-center gap-2 px-1 py-3 text-lg font-extrabold border-b-3 transition-all ${
              activeTab === "writing"
                ? "text-purple-600 dark:text-purple-400 border-purple-600 dark:border-purple-400"
                : "text-gray-700 dark:text-gray-300 border-transparent hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300"
            }`}
          >
            <PenLine className="w-5 h-5" />
            작문
          </Link>
          <Link
            href="/vocabulary"
            className={`flex items-center gap-2 px-1 py-3 text-lg font-extrabold border-b-3 transition-all ${
              activeTab === "vocabulary"
                ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                : "text-gray-700 dark:text-gray-300 border-transparent hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300"
            }`}
          >
            <Library className="w-5 h-5" />
            어휘
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => {
                setLanguageDropdown(!languageDropdown);
                setUserDropdown(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <Languages className="w-4 h-4 text-gray-600 group-hover:text-purple-600 transition-colors" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">
                {getLanguageLabel()}
              </span>
            </button>

            {/* Language Dropdown */}
            {languageDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-2xl border border-purple-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-1">
                  <button
                    onClick={() => {
                      setLanguage("japanese");
                      setLanguageDropdown(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      language === "japanese"
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-700 hover:bg-purple-50"
                    }`}
                  >
                    <span>日本語</span>
                    {language === "japanese" && (
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("english");
                      setLanguageDropdown(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      language === "english"
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-700 hover:bg-purple-50"
                    }`}
                  >
                    <span>English</span>
                    {language === "english" && (
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-purple-50 transition-colors group">
            <Bell className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors group"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            )}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setUserDropdown(!userDropdown);
                setLanguageDropdown(false);
              }}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                <User className="w-4 h-4 text-white" />
              </div>
            </button>

            {/* Dropdown Menu */}
            {userDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-purple-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-3 border-b border-gray-100 bg-gradient-to-br from-indigo-50 to-purple-50">
                  <p className="text-sm font-bold text-gray-900">민 님</p>
                  <p className="text-xs text-gray-500">min@example.com</p>
                </div>
                <div className="p-1">
                  <Link href="/mypage">
                    <button
                      onClick={() => setUserDropdown(false)} 
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                      마이페이지
                    </button>
                  </Link>
                  <div className="h-px bg-gray-100 my-1" />
                  <button 
                    onClick={() => setUserDropdown(false)}
                    className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <LogOut className="w-4 h-4" />
                    로그아웃
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
