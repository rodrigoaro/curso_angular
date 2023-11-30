import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-uno',
  templateUrl: './formulario-uno.component.html',
  styleUrls: ['./formulario-uno.component.css']
})
export class FormularioUnoComponent {

  formData = {
    name: '',
    lastName: '',
    birthdate: '',
    gender: '',
    calificacion: 0
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log('Data desde el formulario ', this.formData);
    }else{
      console.log('formulario erroneo');

    }
  }

}
