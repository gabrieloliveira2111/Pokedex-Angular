import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { IdPokemonPipe } from './pipes/id-pokemon.pipe';
import { ModalPokemonComponent } from './components/modal-pokemon/modal-pokemon.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdPokemonPipe,
    ModalPokemonComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [BsModalService, BsModalRef],
  bootstrap: [AppComponent],
})
export class AppModule {}
