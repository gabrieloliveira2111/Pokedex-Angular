import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idPokemon',
})
export class IdPokemonPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    const id = '#' + ('000' + value).slice(-3);
    return id;
  }
}
