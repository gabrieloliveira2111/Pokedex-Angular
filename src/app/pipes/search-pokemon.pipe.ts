import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from '../interfaces/pokemon';

@Pipe({
  name: 'searchPokemon',
})
export class SearchPokemon implements PipeTransform {
  transform(value: IPokemon[], args: string): IPokemon[] {
    return value.filter((item: IPokemon) =>
      item.name.toLowerCase().includes(args)
    );
  }
}
