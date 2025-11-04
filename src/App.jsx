import React, { useState } from 'react';
import Header from './components/Header';
import Assessment from './components/Assessment';
import AuthGate from './components/AuthGate';
import LearningDashboard from './components/LearningDashboard';

function Welcome({ onStart }) {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 p-10 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Discover your perfect learning path</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Answer a 2-minute capability check, then unlock a personalized dashboard with the right mix of videos, exercises, and challenges for your level.</p>
        <div className="mt-6">
          <button
            onClick={onStart}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow"
          >
            Take the 5-question assessment
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [stage, setStage] = useState('welcome'); // welcome -> assessment -> auth -> dashboard
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);

  const startAssessment = () => setStage('assessment');
  const handleAssessmentComplete = (result) => {
    setProfile(result);
    setStage('auth');
  };
  const handleAuthenticated = (u) => {
    setUser(u);
    setStage('dashboard');
  };
  const handleLogout = () => {
    setUser(null);
    setProfile(null);
    setStage('welcome');
  };
  const resetAssessment = () => {
    setStage('assessment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header user={user} onLogout={handleLogout} stage={stage} onStart={startAssessment} />

      <main className="px-4 py-8">
        {stage === 'welcome' && <Welcome onStart={startAssessment} />}
        {stage === 'assessment' && <Assessment onComplete={handleAssessmentComplete} />}
        {stage === 'auth' && <AuthGate onAuthenticated={handleAuthenticated} />}
        {stage === 'dashboard' && profile && (
          <LearningDashboard profile={profile} onReset={resetAssessment} />
        )}
      </main>

      <footer className="mt-16 py-8 text-center text-sm text-gray-500">
        Built with care to help you learn faster and smarter.
      </footer>
    </div>
  );
}
