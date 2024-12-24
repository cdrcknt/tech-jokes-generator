import { Joke } from '../types/joke';

const API_URL = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous?safe-mode';

export async function getRandomJoke(): Promise<Joke> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch joke');
  return response.json();
}