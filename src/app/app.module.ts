import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableListComponent } from './table-list/table-list.component';
import { HttpClientModule } from "@angular/common/http";
import { DataCovidPipe } from './shared/pipe/data-covid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    DataCovidPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
