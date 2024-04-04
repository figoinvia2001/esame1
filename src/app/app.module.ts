import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AggiungiLibroComponent } from './aggiungi/aggiungi.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { RisultatiRicercaComponent } from './risultati/risultati.component';
import { ArchivioService } from './archivio.service';

@NgModule({
  declarations: [
    AppComponent,
    AggiungiLibroComponent,
    RicercaComponent,
    RisultatiRicercaComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ArchivioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
