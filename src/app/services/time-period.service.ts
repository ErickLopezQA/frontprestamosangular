import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimePeriod } from '../interfaces/time-period';

@Injectable({
  providedIn: 'root'
})
export class TimePeriodService {

  private myAppUrl: string;
  private myApiTimePeriodsUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiTimePeriodsUrl = 'api/time-periods/';
  }

  getListTimePeriods(): Observable<TimePeriod[]> {
    return this.http.get<TimePeriod[]>(this.myAppUrl + this.myApiTimePeriodsUrl);
  }

  addTimePeriod(timePeriod: TimePeriod): Observable<TimePeriod[]>  {
    return this.http.post<TimePeriod[]>(this.myAppUrl + this.myApiTimePeriodsUrl, timePeriod);
  }

  getTimePeriod(id: number): Observable<TimePeriod[]> {
    return this.http.get<TimePeriod[]>(this.myAppUrl + this.myApiTimePeriodsUrl + id);
  }

  deleteTimePeriod(id: number): Observable<TimePeriod[]> {
    return this.http.delete<TimePeriod[]>(this.myAppUrl + this.myApiTimePeriodsUrl + id);
  }

}
