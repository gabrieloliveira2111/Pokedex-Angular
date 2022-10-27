import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'atributtes',
})
export class AtributtesPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    const atributtesValue: number = value / 10;
    return atributtesValue;
  }
}
