import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  countryData: any;

  constructor(private http:ApiService) { }

  ngOnInit(): void {
    this.getApiData()

  }

  getApiData() {
    this.http.getData().subscribe((data)=>{
      console.log(data);
      this.countryData = data;
});
  }

}
