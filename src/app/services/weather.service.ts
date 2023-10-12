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
    return this.http.get<weatherData>(environment.weatherBaseUrl+`/city/${cityName}`, {headers: new HttpHeaders().set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue).set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostHeaderValue)
      // params: new ().set('/',cityName)
    } )
  }
}
