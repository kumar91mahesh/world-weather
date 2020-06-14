import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  searchSubmit(formValues) {
    console.log(formValues);
    this.apiService.getCountriesList().subscribe(data=>{
      console.log(data);
    })
  }

}
