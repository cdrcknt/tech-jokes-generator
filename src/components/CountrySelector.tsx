import React from 'react';
import { Country } from '../types/country';

interface CountrySelectorProps {
  countries: Country[];
  value: string;
  onChange: (countryName: string) => void;
  label: string;
}

export function CountrySelector({ countries, value, onChange, label }: CountrySelectorProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}