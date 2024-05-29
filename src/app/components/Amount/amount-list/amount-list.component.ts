import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Amount } from 'src/app/interfaces/amount';
import { AmountService } from 'src/app/services/amount.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-amount-list',
  templateUrl: './amount-list.component.html',
  styleUrls: ['./amount-list.component.css']
})
export class AmountListComponent {

  amountList: Amount[] = [];
  loading: boolean = false;

  constructor(private _amountService: AmountService,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.getListAmounts();
    }

  getListAmounts() {
    this.loading = true;
    this._amountService.getListAmounts().subscribe((data: Amount[]) => {
      this.amountList = data;
      this.loading = false;
    })
  }

  deleteAmount(id: number) {
    this.loading = true;
    this._amountService.deleteAmount(id).subscribe((data) => {
      console.log(data);
      this.getListAmounts();
      this.toastr.warning('Monto eliminado con éxito', 'Monto eliminado');
    })
  }


}
