import { Component } from '@angular/core';
import { fade } from 'src/app/animations/fade';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [ fade ]
})

export class TodoComponent {

  items: string[] = ["comprar entradas a cine", "pasear al perro", "comprar supermercado"]

  addItem(input: HTMLInputElement){
    this.items.push(input.value);
    
  }

  removeItem(item: string){
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
