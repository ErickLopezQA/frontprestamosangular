import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // No funciono con el import { environment } from 'src/environments/environment'; por eso se cambio a la ruta completa
import { Client } from '../interfaces/client';
import { updateClient } from '../../../../server/src/controllers/client.controller';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private myAppUrl: string;
  private  myApiClientsUrl: string;


  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/';
    this.myApiClientsUrl = 'api/clients/';
  }

  getListClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.myAppUrl + this.myApiClientsUrl);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.myAppUrl + this.myApiClientsUrl, client);
  }

  updateClient(id: number, client: Client): Observable<void> {
    return this.http.put<void>(this.myAppUrl + this.myApiClientsUrl + id, client);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(this.myAppUrl + this.myApiClientsUrl + id);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(this.myAppUrl + this.myApiClientsUrl + id);
  }


}
