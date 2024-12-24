import React from 'react';
import { SearchBar } from './SearchBar';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  onSearch: (query: string) => void;
  onShuffle: () => void;
}

export function Header({ onSearch, onShuffle }: HeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Discover the World
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Explore fascinating facts about countries around the globe
      </p>
      
      <div className="flex flex-col items-center space-y-4">
        <SearchBar onSearch={onSearch} />
        
        <button
          onClick={onShuffle}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <ArrowPathIcon className="h-5 w-5 mr-2" />
          Shuffle Country
        </button>
      </div>
    </div>
  );
}