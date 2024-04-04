// archivio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Archivio } from './archivio.model';
import { Libro } from './libro.model';

@Injectable({
  providedIn: 'root'
})
export class ArchivioService {
  private readonly API_URL = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint';
  private readonly API_KEY = '53f6530d';

  constructor(private http: HttpClient) { }

  getArchivio(): Observable<Archivio> {
    return this.http.get<Archivio>(`${this.API_URL}?key=${this.API_KEY}`);
  }

  aggiungiLibro(nuovoLibro: Libro): Observable<any> {
    return this.http.put(`${this.API_URL}?key=${this.API_KEY}`, nuovoLibro);
  }
}
