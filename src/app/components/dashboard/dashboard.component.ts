import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent /*implements OnInit*/{
  ambiente = "defecto";
  parametros = {color:"red", altura:55};
  /*constructor(private route:ActivatedRoute){}
  
  ngOnInit(): void{
    //Forma tradicional
    //this.ambiente = this.route.snapshot.paramMap.get('entorno')??'';

    //Forma de subscripción
    this.route.paramMap.subscribe(params => {
      this.ambiente = params.get('entorno') ?? '';
    });
      
  }*/
}
