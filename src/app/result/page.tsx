import MatchResult from '../components/result/MatchResult';

interface SearchParams {
  maleName?: string;
  femaleName?: string;
}

export default async function ResultPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // TODO: 这里将来需要调用 AI API 获取真实的匹配结果
  const mockResult = {
    matchScore: 85,
    analysis: '根据AI分析，你们是一对非常般配的组合！你们的名字蕴含着相似的能量场，这预示着你们可能会有很好的默契。建议可以多创造相处的机会，发掘彼此的共同兴趣。',
  };

  // 确保 searchParams 的值存在
  const maleName = searchParams?.maleName || '未知';
  const femaleName = searchParams?.femaleName || '未知';

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <MatchResult
          maleName={maleName}
          femaleName={femaleName}
          matchScore={mockResult.matchScore}
          analysis={mockResult.analysis}
        />
      </div>
    </main>
  );
} 