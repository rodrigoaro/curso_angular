import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-general',
  templateUrl: './dashboard-general.component.html',
  styleUrls: ['./dashboard-general.component.css']
})
export class DashboardGeneralComponent implements OnInit{

  color = '';
  altura = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.color = params['color'] || '';
        this.altura = params['altura'] || 0;
      });
  }
}
