export interface IPokemonResults {
  count: number;
  next: string;
  previous: string | null;
  results: IPokemon[];
}
export interface IResults {
  results: IPokemon[];
}
export interface IPokemon {
  name: string;
  url: string;
  id: string;
  imagem: string;
  types: ITypes[];
  weight: number;
  height: number;
  stats: IStats[];
}
export interface ITypes {
  slot: string;
  type: IType;
}
export interface IType {
  name: string;
  status?: TStatus;
}
export interface IStats {
  base_stat: number;
  stat: IStat;
}
export interface IStat {
  name: string;
}
export type TStatus = 'capturado' | 'não capturado';
