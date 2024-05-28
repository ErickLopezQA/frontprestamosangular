import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Loan } from 'src/app/interfaces/loan';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css'],
  providers: [DatePipe]
})
export class LoanListComponent {

  loanList: Loan[] = [];
  loading: boolean = false;

  constructor(private _loanService: LoanService,
    private toastr: ToastrService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getListLoans();
  }

  getListLoans() {
    this.loading = true;
    this._loanService.getListLoans().subscribe((data: Loan[]) => {
      this.loanList = data;
      this.loading = false;
    })
  }

  deleteLoan(id: number) {
    this.loading = true;
    this._loanService.deleteLoan(id).subscribe((data) => {
      console.log(data);
      this.getListLoans();
      this.toastr.warning('Préstamo eliminado con éxito', 'Préstamo eliminado');
  })

  }
  formatDate(date: string){
    return this.datePipe.transform(date, 'dd MMM yyyy');
  }


}
