export interface Game {
  id: number;
  active_users: number;
  category: string;
  content: string;
  image: string;
  name: string;
  rating: number;
  isFavourite: boolean;
}

export interface GameStateType {
  games: Game[];
  isLoading: boolean;
  errors: string;
}

export interface SortValueType {
  field: string;
  order: string;
}

export const GAMES = 'users';
export type GAMES = typeof GAMES;
