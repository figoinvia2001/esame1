// risultati-ricerca.component.ts
import { Component, Input } from '@angular/core';
import { Libro } from '../libro.model';

@Component({
  selector: 'app-risultati',
  templateUrl: './risultati.component.html',
})
export class RisultatiRicercaComponent {
  @Input() results: Libro[]|undefined;

  constructor() {}
}
