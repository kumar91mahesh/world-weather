import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private gridApi;
  private gridColumnApi;
  public rowSelection;
  public countryList: any;
  public columnDefs = [
    {field: 'name', sortable: true, filter: true},
    {field: 'capital', filter: true },
    {field: 'region', filter: true},
    {field: 'subregion', filter: true},
    {field: 'population', filter: true}

];
  constructor(private apiService: ApiserviceService, private router: Router) { 
    this.countryList = [];
    this.rowSelection = "single";
  }

  ngOnInit(): void {
    this.apiService.getCountriesList().subscribe(data=>{
      this.countryList = data;
    })
  }

  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    this.router.navigate(['/detail'], { queryParams: { id: selectedRows[0].capital, code : selectedRows[0].alpha2Code }});
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

  }

}
