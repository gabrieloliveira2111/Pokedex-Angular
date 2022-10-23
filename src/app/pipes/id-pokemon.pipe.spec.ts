import { IdPokemonPipe } from './id-pokemon.pipe';

describe('IdPokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new IdPokemonPipe();
    expect(pipe).toBeTruthy();
  });
});
