import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data, Heroe, Welcome } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  // https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=venom&&ts=1&apikey=9efe0a6a3a00a511be59a24f98249400&hash=1d283889b9bcd0aab81842d034074367
  apiUrl: string = 'https://gateway.marvel.com:443/v1/public/characters';
  publicKey: string = '9efe0a6a3a00a511be59a24f98249400';
  privateKey: string = '576bdc7a0c44bf28ab5a48194f0a294e2cc9905c';

  hash: string = '1d283889b9bcd0aab81842d034074367';

  heroesFavoritos: Heroe[] = [];
  constructor(private http: HttpClient) {
    if (localStorage.getItem('heroesFavoritos')) {
      this.heroesFavoritos =
        JSON.parse(localStorage.getItem('heroesFavoritos')!) || [];
    }
  }

  getHeroes(termino: string): Observable<Welcome> {
    return this.http.get<Welcome>(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${termino}&&ts=1&apikey=9efe0a6a3a00a511be59a24f98249400&hash=1d283889b9bcd0aab81842d034074367`
    );
  }

  agregarHeroeFavorito(heroe: Heroe) {
    this.heroesFavoritos.push(heroe);
    localStorage.setItem(
      'heroesFavoritos',
      JSON.stringify(this.heroesFavoritos)
    );
  }

  getHeroesFavoritos() {
    return [...this.heroesFavoritos];
  }

  eliminarHeroe(heroe: Heroe) {
    for (let i = 0; i < this.heroesFavoritos.length; i++) {
      if (this.heroesFavoritos[i].id == heroe.id) {
        this.heroesFavoritos.splice(i, 1);
        localStorage.setItem(
          'heroesFavoritos',
          JSON.stringify(this.heroesFavoritos)
        );
        return;
      }
    }
  }
}
