import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';


const routes: Routes = [
  { path: 'list-all', component: TableListComponent },
  { path: '', redirectTo: 'list-all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
