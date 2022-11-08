import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { IPokemon, IPokemonResults } from '../../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.httpClient
      .get<IPokemonResults>(`${this.url}pokemon/?limit=905`)
      .pipe(
        tap((res) => {
          res.results.map((item: IPokemon) => {
            console.log(res);
            this.getPokemonImg(item.url).subscribe((res) => {
              item.stats = res.stats;
              item.weight = res.weight;
              item.height = res.height;
              item.id = res.id;
              item.imagem = res.sprites.other['official-artwork'].front_default;
              item.types = res.types;
            });
          });
        })
      );
  }
  getPokemonImg(url: string): Observable<any> {
    return this.httpClient.get<IPokemon>(url).pipe(map((res) => res));
  }
}
