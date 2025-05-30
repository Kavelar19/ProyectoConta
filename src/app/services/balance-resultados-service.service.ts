import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BalanceResultadosServiceService {

  private apiUrl = 'http://localhost:3000/api/balance/resultados';

  constructor(private http: HttpClient) {}

  getBalanceResultados(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
