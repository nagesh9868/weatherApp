import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';
import { __param } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName:string): Observable<weatherData>{
    return this.http.get<weatherData>('https://open-weather13.p.rapidapi.com'+`/city/${cityName}`, {headers: new HttpHeaders().set('X-RapidAPI-Key','ffb71d6b16msh1103b68ce7319dap1388c0jsnd18e83054cbe').set('X-RapidAPI-Host','open-weather13.p.rapidapi.com')
      // params: new ().set('/',cityName)
    } )
  }
}
