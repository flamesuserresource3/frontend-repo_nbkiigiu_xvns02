import React from 'react';
import { Target, Trophy, BookOpenCheck, PlayCircle, ListChecks, Sparkles } from 'lucide-react';

const catalog = {
  Beginner: [
    { title: 'Foundations 101', type: 'Course', duration: '3h', badge: 'Start here' },
    { title: 'Hands-on Basics', type: 'Exercises', duration: '1h', badge: 'Interactive' },
    { title: 'Core Concepts', type: 'Article', duration: '20m', badge: 'Quick read' },
  ],
  Intermediate: [
    { title: 'Projects Track', type: 'Course', duration: '6h', badge: 'Build' },
    { title: 'Problem-Solving Drills', type: 'Exercises', duration: '2h', badge: 'Challenge' },
    { title: 'Patterns Deep Dive', type: 'Article', duration: '30m', badge: 'Insight' },
  ],
  Advanced: [
    { title: 'Expert Systems', type: 'Course', duration: '8h', badge: 'Expert' },
    { title: 'Capstone Challenge', type: 'Project', duration: '4h', badge: 'Portfolio' },
    { title: 'Research Review', type: 'Article', duration: '40m', badge: 'Latest' },
  ],
};

export default function LearningDashboard({ profile, onReset }) {
  const items = catalog[profile.level] || catalog.Beginner;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        <section className="flex-1">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">
                  <Sparkles size={14} /> Personalized
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mt-2">Your learning path</h2>
                <p className="text-gray-600 mt-1">Capability level: <span className="font-medium text-gray-900">{profile.level}</span></p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Readiness score</div>
                <div className="text-3xl font-semibold text-indigo-700">{Math.round(profile.ratio * 100)}%</div>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((it) => (
                <div key={it.title} className="border border-gray-200 rounded-lg p-4 hover:shadow transition bg-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">{it.badge}</span>
                    <span className="text-xs text-gray-500">{it.duration}</span>
                  </div>
                  <h3 className="mt-2 font-semibold text-gray-900">{it.title}</h3>
                  <p className="text-sm text-gray-600">{it.type}</p>
                  <button className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-800">
                    <PlayCircle size={16} /> Start
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="w-full lg:w-80 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <Target size={18} /> Goals
            </div>
            <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Study 30 minutes daily</li>
              <li>Complete 2 modules per week</li>
              <li>Track progress and reflect</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <ListChecks size={18} /> Quick tasks
            </div>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2"><BookOpenCheck size={16} className="text-emerald-600" /> Read today’s summary</li>
              <li className="flex items-center gap-2"><BookOpenCheck size={16} className="text-emerald-600" /> Finish practice quiz</li>
              <li className="flex items-center gap-2"><BookOpenCheck size={16} className="text-emerald-600" /> Review notes</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl p-5 text-white shadow-sm">
            <div className="flex items-center gap-2 font-semibold">
              <Trophy size={18} /> Keep your streak!
            </div>
            <p className="text-sm text-indigo-100 mt-1">Show up daily to unlock bonus content.</p>
            <button
              onClick={onReset}
              className="mt-3 inline-flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 transition px-3 py-1.5 rounded-md"
            >
              Reset Assessment
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
