import { Component, OnInit, TemplateRef } from '@angular/core';
import { HomeService } from './home.service';
import { IPokemon, IResults } from '../../interfaces/pokemon';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allPokemon: IPokemon[] = [];
  constructor(
    private _homeServices: HomeService,
    private _modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this._homeServices
      .getPokemon()
      .subscribe(
        (pokemon: IResults) => (
          (this.allPokemon = pokemon.results), console.log(this.allPokemon)
        )
      );
  }

  modalRef?: BsModalRef;
  pokemon!: IPokemon;

  openModal(template: TemplateRef<any>, item: IPokemon) {
    this.pokemon = item;
    this.modalRef = this._modalService.show(template);
  }
}
