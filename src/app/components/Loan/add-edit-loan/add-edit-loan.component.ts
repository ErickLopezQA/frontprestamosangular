import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Loan } from 'src/app/interfaces/loan';
import { Client } from 'src/app/interfaces/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoanService } from 'src/app/services/loan.service';
import { ClientService } from 'src/app/services/client.service';
import { AmountService } from 'src/app/services/amount.service';
import { TimePeriodService } from 'src/app/services/time-period.service';
import { Amount } from 'src/app/interfaces/amount';
import { TimePeriod } from 'src/app/interfaces/time-period';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-add-edit-loan',
  templateUrl: './add-edit-loan.component.html',
  styleUrls: ['./add-edit-loan.component.css']
})
export class AddEditLoanComponent implements OnInit {

  formLoan: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';
  clientList: Client[] = [];
  amountList: Amount[] = [];
  timePeriodList: TimePeriod[] = [];

  constructor(
    private fb: FormBuilder,
    private _loanService: LoanService,
    private _clientService: ClientService,
    private _amountService: AmountService,
    private _timePeriodService: TimePeriodService,
    private router: Router,
    private toastr: ToastrService,
    private aRoute: ActivatedRoute
  ) {
    this.formLoan = this.fb.group({
      id_client: [''],
      id_time_period: [''],
      id_amount: [''],
    });
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    // console.log(this.id);
  }

  ngOnInit(): void {
    this.getListClients();
    this.getListAmounts();
    this.getTimePeriods();
  }

  getListClients() {
    this._clientService.getListClients().subscribe((data: Client[]) => {
      this.clientList = data;
    });
  }

  getListAmounts() {
    this._amountService.getListAmounts().subscribe((data: Amount[]) => {
      this.amountList = data;
    });
  }

  getTimePeriods() {
    this._timePeriodService.getListTimePeriods().subscribe((data: TimePeriod[]) => {
      this.timePeriodList = data;
    })
  }


  addLoan() {
  try {

      const dataLoan: Loan = {
        id_client: this.formLoan.get('id_client')?.value,
        id_time_period: this.formLoan.get('id_time_period')?.value,
        id_amount: this.formLoan.get('id_amount')?.value,
        client: {
          id_client: this.formLoan.get('id_client')?.value,
          name: '',
          lastname: '',
          email: '',
          contact: '',
          address: '',
        },
        createdAt: new Date().toISOString()
      };
      console.log(dataLoan)

      // Lógica para agregar el préstamo, por ejemplo:
    this._loanService.addLoan(dataLoan).subscribe(() => {
      this.toastr.success('Préstamo agregado con éxito', 'Préstamo agregado');
      this.router.navigate(['/loan']);
    }, error => {
      this.toastr.error('Debe seleccionar todos los campos', 'Error');
    });
    } catch (error:any) {
      this.toastr.error(error);


    }




  }
}
