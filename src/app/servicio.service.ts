import { Injectable } from '@angular/core';
import Letters from '../assets/letters.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
private letterJson = '../assets/letters.json'
  constructor(private http : HttpClient) { }

  getLetters(letters : any){
    return this.http.get(this.letterJson);

  }
}
