import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Amount } from '../interfaces/amount';
import { updateAmount } from '../../../../server/src/controllers/amount.controller';

@Injectable({
  providedIn: 'root'
})
export class AmountService {

  private myAppUrl: string;
  private myApiAmountsUrl: string;

  constructor(private http: HttpClient) {
      this.myAppUrl = 'http://localhost:3000/';
      this.myApiAmountsUrl = 'api/amounts/';
    }

    getListAmounts(): Observable<Amount[]> {
      return this.http.get<Amount[]>(this.myAppUrl + this.myApiAmountsUrl);
    }

    addAmount(amount: Amount): Observable<Amount> {
      return this.http.post<Amount>(this.myAppUrl + this.myApiAmountsUrl, amount);
    }

    updateAmount(id: number, amount: Amount): Observable<void> {
      return this.http.put<void>(this.myAppUrl + this.myApiAmountsUrl + id, amount);
    }

    getAmount(id: number): Observable<Amount> {
      return this.http.get<Amount>(this.myAppUrl + this.myApiAmountsUrl + id);
    }

    deleteAmount(id: number): Observable<void> {
      return this.http.delete<void>(this.myAppUrl + this.myApiAmountsUrl + id);
    }


}
