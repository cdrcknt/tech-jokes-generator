export interface Joke {
  type: 'single' | 'twopart';
  joke?: string;
  setup?: string;
  delivery?: string;
  id: number;
  category: string;
}