import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientListComponent } from './components/Client/client-list/client-list.component';
import { AddEditClientComponent } from './components/Client/add-edit-client/add-edit-client.component';
import { AmountListComponent } from './components/Amount/amount-list/amount-list.component';
import { AddEditAmountComponent } from './components/Amount/add-edit-amount/add-edit-amount.component';
import { TimePeriodListComponent } from './components/TimePeriod/time-period-list/time-period-list.component';
import { AddEditTimePeriodComponent } from './components/TimePeriod/add-edit-time-period/add-edit-time-period.component';
import { LoanListComponent } from './components/Loan/loan-list/loan-list.component';
import { AddEditLoanComponent } from './components/Loan/add-edit-loan/add-edit-loan.component';

const routes: Routes = [

  // Client routes
{ path: 'client', component: ClientListComponent },
{ path: 'addclient', component: AddEditClientComponent },
{ path: 'editclient/:id', component: AddEditClientComponent },

  // Amount routes
{ path: 'amount', component: AmountListComponent },
{ path: 'addamount', component: AddEditAmountComponent },
{ path: 'editamount/:id', component: AddEditAmountComponent },

  // Time Period routes
{ path: 'time_period', component: TimePeriodListComponent },
{ path: 'addtime_period', component: AddEditTimePeriodComponent },
{ path: 'edittime_period/:id', component: AddEditTimePeriodComponent },

  // Loan routes
{ path: 'loan', component: LoanListComponent },
{ path: 'addloan', component: AddEditLoanComponent },
{ path: 'editloan/:id', component: AddEditLoanComponent },



{ path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
