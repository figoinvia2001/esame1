// aggiungi.component.ts
import { Component } from '@angular/core';
import { ArchivioService } from '../archivio.service';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
})
export class AggiungiLibroComponent {
  nuovoLibro: Libro = {
    posizione: 0,
    autore: '',
    titolo: '',
    utentePrestito: '',
  };

  constructor(private archivioService: ArchivioService) {}

  aggiungiLibro() {
    this.archivioService.aggiungiLibro(this.nuovoLibro).subscribe({
      next: () => {
        console.log('Libro aggiunto con successo.');
        this.nuovoLibro = {
          posizione: 0,
          autore: '',
          titolo: '',
          utentePrestito: '',
        };
      },
      error: (error) => {
        console.error("Errore durante l'aggiunta del libro:", error);
      },
    });
  }
}
