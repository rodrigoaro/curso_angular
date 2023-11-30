import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(texto: string): string {
    if(!texto) return "";

    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();

  }
}
