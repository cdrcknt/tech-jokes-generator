const BASE_URL = 'https://restcountries.com/v3.1';

export async function getAllCountries() {
  const response = await fetch(`${BASE_URL}/all`);
  if (!response.ok) throw new Error('Failed to fetch countries');
  return response.json();
}

export async function searchCountries(query: string) {
  const response = await fetch(`${BASE_URL}/name/${query}`);
  if (response.status === 404) return [];
  if (!response.ok) throw new Error('Failed to search countries');
  return response.json();
}