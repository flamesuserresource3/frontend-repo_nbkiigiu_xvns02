import React from 'react';
import { BookOpen, User, LogOut } from 'lucide-react';

export default function Header({ user, onLogout, stage, onStart }) {
  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-600 text-white"><BookOpen size={18} /></div>
          <span className="font-semibold tracking-tight text-gray-900">LearnPath</span>
        </div>

        <div className="flex items-center gap-3">
          {stage === 'welcome' && (
            <button
              onClick={onStart}
              className="text-sm px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              Start Assessment
            </button>
          )}
          {user ? (
            <>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-700">
                <User size={16} />
                <span>{user.email}</span>
              </div>
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <div className="text-xs text-gray-500">Guest</div>
          )}
        </div>
      </div>
    </header>
  );
}
