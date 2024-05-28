import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './components/client-list/client-list.component';
import { AddEditClientComponent } from './components/add-edit-client/add-edit-client.component';

const routes: Routes = [


{ path: '', component: ClientListComponent },
{ path: 'add', component: AddEditClientComponent },
{ path: 'edit/:id', component: AddEditClientComponent },
{ path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
