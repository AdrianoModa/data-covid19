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

  constructor(
    private dataCovidService: DataCovidService
  ) { }

  ngOnInit() {
    this.listData()
  }

  listData(){
    this.dataCovidService.getAllData()
      .toPromise()
      .then(response => this.dataCovid = response)
  }

  
}