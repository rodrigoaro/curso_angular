import { Component } from '@angular/core';
import { openClose } from 'src/app/animations/openClose';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css'],
  animations: [ openClose ]
})
export class CollapsableComponent {

  isOpen = true;

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
