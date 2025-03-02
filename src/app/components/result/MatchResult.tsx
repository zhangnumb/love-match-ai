'use client';

import Link from 'next/link';

interface MatchResultProps {
  maleName: string;
  femaleName: string;
  matchScore: number;
  analysis: string;
}

export default function MatchResult({ maleName, femaleName, matchScore, analysis }: MatchResultProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      {/* 名字展示 */}
      <div className="flex items-center justify-center space-x-4">
        <span className="text-2xl font-bold text-pink-500">{maleName}</span>
        <span className="text-2xl">❤️</span>
        <span className="text-2xl font-bold text-purple-500">{femaleName}</span>
      </div>

      {/* 匹配分数 */}
      <div className="text-center">
        <div className="text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          {matchScore}%
        </div>
        <div className="mt-2 text-gray-600">匹配度</div>
      </div>

      {/* AI 分析 */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">AI 分析</h3>
        <p className="text-gray-700 whitespace-pre-line">{analysis}</p>
      </div>

      {/* 返回按钮 */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
