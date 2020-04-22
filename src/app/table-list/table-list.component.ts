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

  dataCovid: Global[] = []
  dataCovidGlobal: Global[] = []
  newConfirmed: number;
  totalConfirmed: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;


  constructor(
    private dataCovidService: DataCovidService
  ) { }

  ngOnInit() {
    this.listData()
    this.listGlobalData()
    this.listGlobalDataProperties()
  }

  listData() {
    this.dataCovidService.getAllData()
      .toPromise()
      .then(response => this.dataCovid = response)
  }
  listGlobalData() {
    this.dataCovidService.getAllData()
      .toPromise()
      .then(response => this.dataCovidGlobal = response)
  }

  listGlobalDataProperties() {
    this.dataCovidService.getAllData()
      .toPromise()
      .then(response => this.dataCovidGlobal = response.Global)
      .then(() => {
        this.newConfirmed = this.dataCovidGlobal['NewConfirmed'],
        this.totalConfirmed = this.dataCovidGlobal['TotalConfirmed'],
        this.newDeaths = this.dataCovidGlobal['NewDeaths'],
        this.totalDeaths = this.dataCovidGlobal['TotalDeaths'],
        this.newRecovered = this.dataCovidGlobal['NewRecovered'],
        this.totalRecovered = this.dataCovidGlobal['TotalRecovered']
      })
  }


}