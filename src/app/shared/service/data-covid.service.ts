import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataCovidService {

  urlCovid = `${environment.apiUrlBase}/summary`

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get<any>(`${this.urlCovid}`)
  }


}
