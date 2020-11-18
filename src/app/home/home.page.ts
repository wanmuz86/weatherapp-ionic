import { Component } from '@angular/core';
import { HttpService } from '../http.service'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	city
	weather
  constructor(public httpService:HttpService) {}

  searchPressed(){
  	this.httpService.getWeather(this.city).subscribe(resp=>{
  		console.log(resp)
  		this.weather = resp
  	})
  }
 
}
