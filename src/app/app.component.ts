import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  weatherInfo?: weatherData
  temperature:number = -17.2222
  exactTemp:number|undefined
  constructor(private weatherService: WeatherService) { }
  searchBar = new FormGroup({
    search: new FormControl('')
  })

  ngOnInit(): void {
    this.weatherService.getWeatherData(`delhi`).subscribe({
      next: (response) => {
        console.log(response);
        let a = (response.main.temp - 32) * 5/9+2
        console.log(a);
        this.exactTemp = a
        this.weatherInfo = response
      }
    })
    console.log(this.weatherInfo);
  }
  
  searchValue(){
    console.log(this.searchBar.value.search);
    this.weatherService.getWeatherData(`${this.searchBar.value.search}`).subscribe({
      next: (response) => {
        console.log(response);
        let a = (response.main.temp - 32) * 5/9+2
        console.log(a);
        this.exactTemp = a
        this.searchBar.value.search = ''
        this.weatherInfo = response
      }
    })
    
  }


}
