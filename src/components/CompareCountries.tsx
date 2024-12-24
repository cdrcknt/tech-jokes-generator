import React from 'react';
import { Country } from '../types/country';
import { CountryCard } from './CountryCard';

interface CompareCountriesProps {
  country1: Country | null;
  country2: Country | null;
}

export function CompareCountries({ country1, country2 }: CompareCountriesProps) {
  if (!country1 || !country2) return null;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <CountryCard country={country1} />
      <CountryCard country={country2} />
    </div>
  );
}