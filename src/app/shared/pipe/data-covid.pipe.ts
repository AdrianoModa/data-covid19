import { Pipe, PipeTransform } from '@angular/core';
import { Global } from '../model/global';

@Pipe({
  name: 'dataCovidFilter'
})
export class DataCovidPipe implements PipeTransform {

  transform(dataCovidCountries: Global[], searchTerm: string): Global[] {
    if (!dataCovidCountries || !searchTerm) {
      return dataCovidCountries
    }
    let searching = dataCovidCountries.filter(countries => countries.Country.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) !== -1)
      return searching
  }

}
