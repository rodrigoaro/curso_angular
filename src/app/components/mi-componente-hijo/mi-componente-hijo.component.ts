import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CapitalizarPipe } from '../../pipes/capitalizar.pipe';

@Component({
  selector: 'app-mi-componente-hijo',
  templateUrl: './mi-componente-hijo.component.html',
  styleUrls: ['./mi-componente-hijo.component.css']
})
export class MiComponenteHijoComponent {
  @Input() mensaje: string = "";

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private capitalizar: CapitalizarPipe){}

  handleClick(){
    let mensaje = 'mensaje desde el componente HIJO';
    this.messageEvent.emit(this.capitalizar.transform(mensaje));
  }
}
