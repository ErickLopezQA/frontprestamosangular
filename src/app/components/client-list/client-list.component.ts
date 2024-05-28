import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client-service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{

  clientList: Client[] = [];
  loading: boolean = false;

  constructor(private _clientService: ClientService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListClients();
  }

  getListClients() {
    this.loading = true;
    this._clientService.getListClients().subscribe((data: Client[]) => {
      this.clientList = data;
      this.loading = false;
    })
  }


  deleteClient(id: number) {
    this.loading = true;
    this._clientService.deleteClient(id).subscribe((data) => {
      console.log(data);
      this.getListClients();
      this.toastr.warning('Cliente eliminado con éxito', 'Cliente eliminado');
  })
  }
}
