import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public countryList: any;
  public columnDefs = [
    {field: 'name', sortable: true, filter: true, cellRenderer: (params)=> {
      return `<a  href="/detail/${params.value}" > ${params.value}</a>`;
    }},
    {field: 'capital' },
    {field: 'region'}
];
  constructor(private apiService: ApiserviceService) { 
    this.countryList = []
  }

  ngOnInit(): void {
    this.apiService.getCountriesList().subscribe(data=>{
      this.countryList = data;
      console.log(data);
    })
  }

}
