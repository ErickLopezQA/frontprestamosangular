import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.css']
})
export class AddEditClientComponent {

  formClient: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb:FormBuilder,
    private _clientService: ClientService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute) {


    this.formClient = this.fb.group(
    {
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      address: ['', Validators.required]
    });
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  ngOnInit(): void {
    if(this.id !== 0) {
      this.operacion = 'Editar ';
      this.getClient(this.id);
    }
  }

  getClient(id: number) {
    this._clientService.getClient(id).subscribe((data: Client) => {
      this.loading = true;
      this.formClient.patchValue({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        contact: data.contact,
        address: data.address
      })
      this.loading = false;
    });
  }

  addClient() {
    const dataClient: Client = {
      name: this.formClient.get('name')?.value,
      lastname: this.formClient.get('lastname')?.value,
      email: this.formClient.get('email')?.value,
      contact: this.formClient.get('contact')?.value,
      address: this.formClient.get('address')?.value
    };

    this.loading = true;
    this._clientService.addClient(dataClient).subscribe(() => {
      this.loading = false;
      this.toastr.success('Cliente agregado con éxito', 'Cliente agregado');
      this.router.navigate(['/clients']);
    })
  }


  }
