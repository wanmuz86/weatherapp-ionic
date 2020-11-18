import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public httpClient:HttpClient) { }

  getWeather(city){
  	return this
  	.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9fd7a449d055dba26a982a3220f32aa2')
  }
}
