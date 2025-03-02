import Header from './components/home/Header';
import NameForm from './components/home/NameForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <NameForm />
      </div>
    </main>
  );
}
