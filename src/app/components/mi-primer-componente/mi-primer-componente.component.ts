import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../../services/mi-servicio.service';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit{

  personas = [
  {
    id: 0,
    nombre: "Alex",
    edad: 23,
    vacuna: true
  },
  {
    id: 1,
    nombre: "Eiden",
    edad: 3,
    vacuna: false
  },
  {
    id: 2,
    nombre: "Millie",
    edad: 15,
    vacuna: true
  }
]


  public mensaje = "Alexa";
  textoImagen = "Imagen de personaje";
  urlImagen = "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Kj8Eq401fP2ecTY8r9B89Q.png";
  mensajeInicializacion = "";
  mensajePadre = "hola desde el componente Padre";
  colorStyle = "red";
  esEspecial = true;
  color = "verde";
  mensajePipes = "Este mensaje será modificado por los Pipes";
  numero = 3.8356957;

  servicio: MiServicioService;

  constructor(miServicio : MiServicioService){
    this.servicio = miServicio;
  }
  ngOnInit(): void {
    this.mensajeInicializacion = "componente inicializado";
  }

  saludar(){
    this.mensaje = this.servicio.saludar();
  }

  recibirMensaje(mensaje: string){
    debugger;
    this.mensajeInicializacion= mensaje;
    console.log(mensaje);
    console.error(mensaje);
  }
}
