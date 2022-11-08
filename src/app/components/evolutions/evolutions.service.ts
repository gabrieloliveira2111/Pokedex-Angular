import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HomeService } from '../../pages/home/home.service';
import { IPokemonForms } from 'src/app/interfaces/evolution';

interface IEvolution {
  evolution_chain: string;
}

@Injectable({
  providedIn: 'root',
})
export class EvolutionsService {
  url = environment.baseUrl;
  evolution!: any;
  listEvolution: any = [];

  constructor(
    private httpClient: HttpClient,
    private _homeServices: HomeService
  ) {}

  getEvolutionChain(urlChain: string) {
    return this.httpClient.get<any>(`${urlChain}`);
  }
  getEvolutionImg(pokemon: string) {
    return this.httpClient
      .get<any>(`${this.url}pokemon/${pokemon}`)
      .pipe((res) => res);
  }

  getEvolution(pokemonName: string): Observable<any> {
    return this.httpClient
      .get<any>(`${this.url}pokemon-species/${pokemonName}`)
      .pipe(tap((res) => res));
  }
}
