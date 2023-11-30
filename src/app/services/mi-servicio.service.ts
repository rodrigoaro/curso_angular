import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  constructor() { }

  saludar(){
    return "Hola mundo desde un servicio";
  }
}
