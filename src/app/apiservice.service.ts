import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getCountriesList() {
    return this.http.get(
      'https://restcountries.eu/rest/v2/all'
    );
  }

  getWeatherData(key, code) {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${key},${code}&appid=911528ee5f8df6c0bfd0919936bd3d9a&units=metric`
    );
  }
}
