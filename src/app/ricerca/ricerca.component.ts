// ricerca.component.ts
import { Component } from '@angular/core';
import { ArchivioService } from '../archivio.service';
import { Archivio } from '../archivio.model';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
})
export class RicercaComponent {
  archivio: Archivio | undefined;

  constructor(private archivioService: ArchivioService) {
    this.caricaArchivio();
  }

  caricaArchivio() {
    this.archivioService.getArchivio().subscribe({
      next: (archivio) => {
        this.archivio = archivio;
      },
      error: (error) => {
        console.error("Errore durante il recupero dell'archivio:", error);
      },
    });
  }
}
