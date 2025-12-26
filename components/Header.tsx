"use client";

import { Button } from "@/components/ui/button";
import { Bell, User, Moon, Sun, LogOut, Settings, BookOpen, PenLine, Library } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [userDropdown, setUserDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname.startsWith("/reading")) return "reading";
    if (pathname.startsWith("/writing")) return "writing";
    if (pathname.startsWith("/vocabulary")) return "vocabulary";
    return "home";
  };

  const activeTab = getActiveTab();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-purple-100/50 shadow-sm">
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
                ? "text-indigo-600 border-indigo-600"
                : "text-gray-700 border-transparent hover:text-indigo-600 hover:border-indigo-300"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            독해
          </Link>
          <Link
            href="/writing"
            className={`flex items-center gap-2 px-1 py-3 text-lg font-extrabold border-b-3 transition-all ${
              activeTab === "writing"
                ? "text-purple-600 border-purple-600"
                : "text-gray-700 border-transparent hover:text-purple-600 hover:border-purple-300"
            }`}
          >
            <PenLine className="w-5 h-5" />
            작문
          </Link>
          <Link
            href="/vocabulary"
            className={`flex items-center gap-2 px-1 py-3 text-lg font-extrabold border-b-3 transition-all ${
              activeTab === "vocabulary"
                ? "text-blue-600 border-blue-600"
                : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300"
            }`}
          >
            <Library className="w-5 h-5" />
            어휘
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-purple-50 transition-colors group">
            <Bell className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg hover:bg-purple-50 transition-colors group"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
            )}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setUserDropdown(!userDropdown)}
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
                    <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                      마이페이지
                    </button>
                  </Link>
                  <div className="h-px bg-gray-100 my-1" />
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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
