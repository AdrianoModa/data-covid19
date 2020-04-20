import { Component, OnInit } from '@angular/core';
import { DataCovidService } from '../shared/service/data-covid.service';
import { Global } from '../shared/model/global';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  dataCovid: Global[] = []

  constructor(
    private dataCovidService: DataCovidService
  ) { }

  ngOnInit() {
    this.listarDados()
  }

  listarDados(){
    this.dataCovidService.getAllData()
      .toPromise()
      .then(response => this.dataCovid = response)
      .then(response => console.log(response))
  }

}
