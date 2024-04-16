import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../types/CocktailType';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  private http = inject(HttpClient);

  constructor() {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('assets/cocktails.json');
  }
}
