import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { AddEditClientComponent } from './components/add-edit-client/add-edit-client.component';
import { AmountListComponent } from './components/amount-list/amount-list.component';
import { AddEditAmountComponent } from './components/add-edit-amount/add-edit-amount.component';
import { TimePeriodListComponent } from './components/time-period-list/time-period-list.component';
import { AddEditTimePeriodComponent } from './components/add-edit-time-period/add-edit-time-period.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { AddEditLoanComponent } from './components/add-edit-loan/add-edit-loan.component';

const routes: Routes = [

{ path: 'client', component: ClientListComponent },
{ path: 'addclient', component: AddEditClientComponent },
{ path: 'editclient/:id', component: AddEditClientComponent },

{ path: 'amount', component: AmountListComponent },
{ path: 'addamount', component: AddEditAmountComponent },
{ path: 'editamount/:id', component: AddEditAmountComponent },

{ path: 'time_period', component: TimePeriodListComponent },
{ path: 'addtime_period', component: AddEditTimePeriodComponent },
{ path: 'edittime_period/:id', component: AddEditTimePeriodComponent },

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
