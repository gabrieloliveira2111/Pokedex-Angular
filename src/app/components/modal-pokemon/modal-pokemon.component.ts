import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.css'],
})
export class ModalPokemonComponent implements OnInit {
  @Input() modalRef: any;
  @Input() pokemon!: IPokemon;

  constructor() {}

  ngOnInit(): void {}
}
