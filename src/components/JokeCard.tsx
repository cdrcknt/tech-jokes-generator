import React from 'react';
import { Joke } from '../types/joke';

interface JokeCardProps {
  joke: Joke | null;
  loading: boolean;
}

export function JokeCard({ joke, loading }: JokeCardProps) {
  if (loading) {
    return (
      <div className="animate-pulse bg-white rounded-xl p-8 shadow-lg">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (!joke) return null;

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg transform transition-all hover:scale-105">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {joke.category}
        </span>
      </div>
      {joke.type === 'single' ? (
        <p className="text-xl text-gray-800">{joke.joke}</p>
      ) : (
        <div>
          <p className="text-xl text-gray-800 mb-4">{joke.setup}</p>
          <p className="text-xl font-medium text-blue-600">{joke.delivery}</p>
        </div>
      )}
    </div>
  );
}