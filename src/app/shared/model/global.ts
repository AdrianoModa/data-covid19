import { Country } from './country'

export class Global {

    NewConfirmed: number
    TotalConfirmed: number
    NewDeaths: number
    TotalDeaths: number
    NewRecovered: number
    TotalRecovered: number
    Country: Country = new Country()
}