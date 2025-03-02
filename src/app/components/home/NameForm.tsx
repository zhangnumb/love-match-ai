'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NameForm() {
  const [maleName, setMaleName] = useState('');
  const [femaleName, setFemaleName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 简单的表单验证
    if (!maleName.trim() || !femaleName.trim()) {
      setError('请输入两个名字');
      return;
    }
    
    setError('');
    // 使用 router.push 进行客户端导航
    router.push(`/result?maleName=${encodeURIComponent(maleName)}&femaleName=${encodeURIComponent(femaleName)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <div>
        <input
          type="text"
          value={maleName}
          onChange={(e) => setMaleName(e.target.value)}
          placeholder="输入男生姓名"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>
      
      <div>
        <input
          type="text"
          value={femaleName}
          onChange={(e) => setFemaleName(e.target.value)}
          placeholder="输入女生姓名"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        开始匹配
      </button>
    </form>
  );
} 