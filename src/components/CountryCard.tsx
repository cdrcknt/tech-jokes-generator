import React from 'react';
import { Country } from '../types/country';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  const formatNumber = (num: number) => new Intl.NumberFormat().format(num);
  
  const languages = country.languages 
    ? Object.values(country.languages).join(', ')
    : 'N/A';
    
  const currencies = country.currencies
    ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')
    : 'N/A';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <img 
        src={country.flags.svg} 
        alt={`Flag of ${country.name.common}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{country.name.common}</h2>
        <p className="text-gray-600 mb-4">{country.name.official}</p>
        
        <div className="space-y-2">
          <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
          <p><span className="font-semibold">Region:</span> {country.region}</p>
          <p><span className="font-semibold">Subregion:</span> {country.subregion || 'N/A'}</p>
          <p><span className="font-semibold">Population:</span> {formatNumber(country.population)}</p>
          <p><span className="font-semibold">Languages:</span> {languages}</p>
          <p><span className="font-semibold">Currencies:</span> {currencies}</p>
          <p><span className="font-semibold">Area:</span> {formatNumber(country.area)} km²</p>
          <p><span className="font-semibold">Time Zones:</span> {country.timezones.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}