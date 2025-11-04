import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const questions = [
  {
    id: 1,
    text: 'How familiar are you with the subject you want to learn?',
    options: [
      { label: 'I am brand new', value: 1 },
      { label: 'I know some basics', value: 2 },
      { label: 'I am comfortable', value: 3 },
      { label: 'I am experienced', value: 4 },
      { label: 'I can teach it', value: 5 },
    ],
  },
  {
    id: 2,
    text: 'How do you prefer to learn?',
    options: [
      { label: 'Short videos', value: 3 },
      { label: 'Interactive exercises', value: 4 },
      { label: 'Reading articles', value: 2 },
      { label: 'Projects & challenges', value: 5 },
      { label: 'Live sessions', value: 3 },
    ],
  },
  {
    id: 3,
    text: 'How much time can you dedicate weekly?',
    options: [
      { label: '1-2 hours', value: 1 },
      { label: '3-4 hours', value: 2 },
      { label: '5-7 hours', value: 3 },
      { label: '8-10 hours', value: 4 },
      { label: '10+ hours', value: 5 },
    ],
  },
  {
    id: 4,
    text: 'How comfortable are you with problem-solving tasks?',
    options: [
      { label: 'Not comfortable', value: 1 },
      { label: 'A little comfortable', value: 2 },
      { label: 'Somewhat comfortable', value: 3 },
      { label: 'Comfortable', value: 4 },
      { label: 'Very comfortable', value: 5 },
    ],
  },
  {
    id: 5,
    text: 'What is your goal timeline?',
    options: [
      { label: 'Just exploring', value: 2 },
      { label: '1-3 months', value: 3 },
      { label: '3-6 months', value: 4 },
      { label: 'ASAP', value: 5 },
      { label: 'No rush', value: 2 },
    ],
  },
];

export default function Assessment({ onComplete }) {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');

  const totalAnswered = Object.keys(answers).length;

  const handleSelect = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
    setError('');
  };

  const handleSubmit = () => {
    if (totalAnswered !== questions.length) {
      setError('Please answer all questions to continue.');
      return;
    }
    const score = Object.values(answers).reduce((a, b) => a + b, 0);
    const max = questions.length * 5;
    const ratio = score / max;
    let level = 'Beginner';
    if (ratio >= 0.7) level = 'Advanced';
    else if (ratio >= 0.4) level = 'Intermediate';
    onComplete({ score, level, ratio });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">Quick Capability Check</h2>
        <p className="text-gray-600 mb-6">Answer 5 short questions so we can tailor your learning path.</p>

        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="">
              <div className="mb-3 flex items-start gap-2">
                <span className="text-indigo-600 font-semibold">{idx + 1}.</span>
                <p className="text-gray-900 font-medium">{q.text}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {q.options.map((opt) => {
                  const selected = answers[q.id] === opt.value;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => handleSelect(q.id, opt.value)}
                      className={`text-left px-4 py-3 rounded-lg border transition ${
                        selected
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                          : 'border-gray-200 hover:border-gray-300 bg-white text-gray-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {error && (
          <div className="mt-6 flex items-center gap-2 text-rose-600 text-sm">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between">
          <div className="text-sm text-gray-500">Answered {totalAnswered} of {questions.length}</div>
          <button
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition disabled:opacity-50"
          >
            <CheckCircle size={18} />
            Generate My Learning Path
          </button>
        </div>
      </div>
    </div>
  );
}
