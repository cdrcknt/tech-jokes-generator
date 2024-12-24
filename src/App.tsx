import React, { useState } from 'react';
import { Joke } from './types/joke';
import { getRandomJoke } from './services/jokeApi';
import { JokeCard } from './components/JokeCard';
import { Footer } from './components/Footer';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchNewJoke() {
    setLoading(true);
    try {
      const newJoke = await getRandomJoke();
      setJoke(newJoke);
    } catch (error) {
      toast.error('Failed to fetch joke');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <main className="flex-grow py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tech Joke Generator
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get your daily dose of programming humor
            </p>
            <button
              onClick={fetchNewJoke}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              {loading ? 'Loading...' : 'Generate Joke'}
            </button>
          </div>

          <JokeCard joke={joke} loading={loading} />
        </div>
      </main>
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
}