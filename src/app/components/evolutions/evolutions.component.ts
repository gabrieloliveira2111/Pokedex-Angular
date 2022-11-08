import { Component, Input, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon';
import { EvolutionsService } from './evolutions.service';

@Component({
  selector: 'app-evolutions',
  templateUrl: './evolutions.component.html',
  styleUrls: ['./evolutions.component.css'],
})
export class EvolutionsComponent implements OnInit {
  @Input() pokemonName!: string;
  evolution: any = [];
  listEvolution: any = [];

  constructor(private _evolutionService: EvolutionsService) {}

  ngOnInit(): void {
    this._evolutionService.getEvolution(this.pokemonName).subscribe((res) => {
      this._evolutionService
        .getEvolutionChain(res.evolution_chain.url)
        .subscribe((res) => {
          this.evolution.push(
            res.chain.species.name,
            res.chain.evolves_to[0]?.species.name,
            res.chain.evolves_to[0].evolves_to[0]?.species.name
          );
          console.log(this.evolution);
          this.evolution.map((item: any) => {
            this._evolutionService.getEvolutionImg(item).subscribe((res) => {
              this.listEvolution.push(res);
              this.listEvolution.map((item: any) => {
                item.imagem =
                  item.sprites.other['official-artwork'].front_default;
              });
            });
          });
        });
    });
    console.log(this.listEvolution);
  }
}
