// Modulos de Angular creados con el proyecto
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { AddEditClientComponent } from './components/add-edit-client/add-edit-client.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { AmountListComponent } from './components/amount-list/amount-list.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { AddEditAmountComponent } from './components/add-edit-amount/add-edit-amount.component';
import { AddEditTimeLimitComponent } from './components/add-edit-time-limit/add-edit-time-limit.component';
import { AddEditLoanComponent } from './components/add-edit-loan/add-edit-loan.component';
import { AddEditTimePeriodComponent } from './components/add-edit-time-period/add-edit-time-period.component';
import { TimePeriodListComponent } from './components/time-period-list/time-period-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientListComponent,
    AddEditClientComponent,
    ProgressBarComponent,
    AmountListComponent,
    LoanListComponent,
    AddEditAmountComponent,
    AddEditTimeLimitComponent,
    AddEditLoanComponent,
    AddEditTimePeriodComponent,
    TimePeriodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right',
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
