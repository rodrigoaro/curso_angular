import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBackendService } from 'src/app/services/api-backend.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  users: any;

  formData: { name: string, email: string } = {
    name: '',
    email: ''
  }

  constructor(private backend : ApiBackendService){}

  ngOnInit(): void {
    /*this.backend.postData({ name: 'Pepe', email: 'pepe@gmail.com'}).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => { console.error(error); }
    });*/

    let params = { id: [1, 2]};

    this.backend.getData(params).subscribe({
      next: (data) => { 
        console.log(data);
        this.users = data; 
      },
      error: (error) => { 
        console.error('Se ha producido un error en la API');
        console.error(error);
      },
      complete: () => { console.log('complete'); }
    })
  }

  onSubmit(): void {
    console.log(this.formData);
    this.backend.postData(this.formData).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => { console.error(error); }
    });
  }
}
