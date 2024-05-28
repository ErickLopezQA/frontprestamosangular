import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../interfaces/loan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private myAppUrl: string;
  private myApiLoansUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiLoansUrl = 'api/loans/';
  }

  getListLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.myAppUrl + this.myApiLoansUrl);
  }

  addLoan(loan: Loan): Observable<Loan[]>  {
    return this.http.post<Loan[]>(this.myAppUrl + this.myApiLoansUrl, loan);
  }

  getLoan(id: number): Observable<Loan[]>  {
    return this.http.get<Loan[]>(this.myAppUrl + this.myApiLoansUrl + id);
  }

  deleteLoan(id: number): Observable<Loan[]>  {
    return this.http.delete<Loan[]>(this.myAppUrl + this.myApiLoansUrl + id);
  }


}
