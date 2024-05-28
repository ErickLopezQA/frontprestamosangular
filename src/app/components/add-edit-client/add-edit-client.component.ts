import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/interfaces/client';

@Component({
  selector: 'app-add-edit-client',
  templateUrl: './add-edit-client.component.html',
  styleUrls: ['./add-edit-client.component.css']
})
export class AddEditClientComponent {

  formClient: FormGroup;

  constructor(private fb:FormBuilder) {
    this.formClient = this.fb.group(
    {
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      address: ['', Validators.required]
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
    console.log(dataClient);
  }




}
