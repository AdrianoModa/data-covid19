import { Component, OnInit, Input } from '@angular/core';
import { DataCovidService } from '../shared/service/data-covid.service';
import { Global } from '../shared/model/global';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  
  @Input('class') colorLightTable: string = 'table table-sm table-light'
  @Input('class') colorTableGlobal: string = 'table table-dark'

  searchTerm: string 

  dataCovid: Global[] = []
  dataCovidGlobal: Global[] = []
  newConfirmed: number
  totalConfirmed: number
  newDeaths: number
  totalDeaths: number
  newRecovered: number
  totalRecovered: number


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

  darkModeTable(){
    this.colorLightTable = 'table table-sm table-hover table-dark'
    this.colorTableGlobal = 'table table-dark'
  }

  lightModeTable(){
    this.colorLightTable = 'table table-sm table-hover table-light'
    this.colorTableGlobal = 'table table-light'
  }


}