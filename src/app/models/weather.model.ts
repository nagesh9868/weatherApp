export interface weatherData {
    base: string
    clouds: Clouds
    cod: number
    coord: Coord
    dt: number
    id: number
    main: Main
    name: string
    sys: Sys
    timezone: number
    visibility: number
    weather: Weather[]
    wind: Wind
  }
  
  export interface Clouds {
    all: number
  }
  
  export interface Coord {
    lat: number
    lon: number
  }
  
  export interface Main {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  
  export interface Sys {
    country: string
    id: number
    sunrise: number
    sunset: number
    type: number
  }
  
  export interface Weather {
    description: string
    icon: string
    id: number
    main: string
  }
  
  export interface Wind {
    deg: number
    speed: number
  }

//   export interface weatherData {
//     success: boolean
//     data: Data
//   }
  
//   export interface Data {
//     city: string
//     current_weather: string
//     temp: string
//     expected_temp: string
//     insight_heading: string
//     insight_description: string
//     wind: string
//     humidity: string
//     visibility: string
//     uv_index: string
//     aqi: string
//     aqi_remark: string
//     aqi_description: string
//     last_update: string
//     bg_image: string
//   }
  