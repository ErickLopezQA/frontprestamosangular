import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../interfaces/loan';
import { Observable } from 'rxjs';
import { updateLoan } from '../../../../server/src/controllers/loan.controller';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private myAppUrl: string;
  private myApiLoansUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiLoansUrl = 'api/loans';
  }

  getListLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.myAppUrl + this.myApiLoansUrl);
  }

  addLoan(loan: Loan): Observable<Loan[]>  {
    return this.http.post<Loan[]>(this.myAppUrl + this.myApiLoansUrl, loan);
  }

  updateLoan(id: number, loan: Loan): Observable<void>  {
    return this.http.put<void>(this.myAppUrl + this.myApiLoansUrl + id, loan);
  }

  getLoan(id: number): Observable<Loan[]>  {
    return this.http.get<Loan[]>(this.myAppUrl + this.myApiLoansUrl + id);
  }

  deleteLoan(id: number): Observable<Loan[]>  {
    return this.http.delete<Loan[]>(this.myAppUrl + this.myApiLoansUrl + id);
  }

  getAmortizationTable(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.myAppUrl + this.myApiLoansUrl + id);
  }

}
