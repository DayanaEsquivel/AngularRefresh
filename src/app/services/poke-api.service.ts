import { Injectable } from '@angular/core';
import { PokeApi } from '../environments/PokeApi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  
  constructor(
    private http: HttpClient
  ) { }
  getPokemons() {
    return this.http.get(`${PokeApi.url}pokemon`);
  }
  getPokemon(id:any) {
    return this.http.get(`${PokeApi.url}pokemon/${id}`)
  }
}
