export interface Pokemon {
  id: number;
  name: string;
  url: string;
  sprite?: string;
}

export interface PokeResult {
  name: string;
  url: string;
}

export interface PokeResponse {
  count: number;
  next: string;
  previous: null;
  results: PokeResult[];
}
