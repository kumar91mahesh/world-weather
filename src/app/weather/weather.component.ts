import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  private gridApi;
  public weatherSearchForm: FormGroup;
  public weatherInfo: any;
  public queryParam: any;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.weatherInfo = {};
    this.route.queryParams.subscribe(params => {
      this.queryParam = params;
    });
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    this.route.queryParams.subscribe(params => {
      this.queryParam = params;
      this.getData(params)
    });
  }

  getData(params) {
    const {id, code } = params;

    this.apiService.getWeatherData(id, code).subscribe((data1:any)=>{
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'Nocvember',
        'December',
      ];
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDate = new Date();
      const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
        months[currentDate.getMonth()]
      }`;
      const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
      const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

      const weatherInfo = {
        city: data1.name,
        country: data1.sys.country,
        date,
        description: data1.weather[0].description,
        main: data1.weather[0].main,
        temp: Math.floor(data1.main.temp),
        highestTemp: data1.main.temp_max,
        lowestTemp: data1.main.temp_min,
        sunrise,
        sunset,
        clouds: data1.clouds.all,
        humidity: data1.main.humidity,
        wind: data1.wind.speed,
      };
      this.weatherInfo = weatherInfo;
    })
  }

}
