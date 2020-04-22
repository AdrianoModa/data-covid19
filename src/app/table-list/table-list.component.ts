import { Component, OnInit } from '@angular/core';
import { DataCovidService } from '../shared/service/data-covid.service';
import { Global } from '../shared/model/global';
import { Country } from '../shared/model/country';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  searchTerm: string

  dataCovidCountries: Global[] = []
  dataCovidGlobal: Global[] = []
  dataCovidCountry: Country[] = []

  constructor(
    private dataCovidService: DataCovidService
  ) { }

  ngOnInit() {
    this.listCoutriesData()
    this.listGlobalData()
  }

  listCoutriesData(){
    this.dataCovidService.getAllData()
      .toPromise()
      .then(response => this.dataCovidCountries = response.Countries)
  }

  listGlobalData(){
    this.dataCovidService.getAllData()
      .toPromise()
      .then(response => this.dataCovidGlobal = response.Global)
  }
}