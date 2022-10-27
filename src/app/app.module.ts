import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { IdPokemonPipe } from './pipes/pokemon-id/id-pokemon.pipe';
import { ModalPokemonComponent } from './components/modal-pokemon/modal-pokemon.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { SearchPokemon } from './pipes/search-pokemon.pipe';
import { AtributtesPipe } from './pipes/atributtes/atributtes.pipe';
import { EvolutionsComponent } from './components/evolutions/evolutions.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdPokemonPipe,
    ModalPokemonComponent,
    SearchPokemon,
    AtributtesPipe,
    EvolutionsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ModalModule],
  providers: [BsModalService, BsModalRef],
  bootstrap: [AppComponent],
})
export class AppModule {}
