import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-ordenada',
  templateUrl: './lista-ordenada.component.html',
  styleUrls: ['./lista-ordenada.component.css']
})
export class ListaOrdenadaComponent {

  lista: string[] = ["lalal", "lelelel", "lilili"];

  addObj(inputObj: HTMLInputElement) {
    this.lista.push(inputObj.value);
  }

  removeItem(obj: any) {
    let index = this.lista.indexOf(obj);
    this.lista.splice(index, 1);
  }
}
