import { Component } from '@angular/core';
import * as AOS from 'aos';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor() {
  }
ngOnInit():void{
  AOS.init(); 
}

// scrollTo(className: string):void {
//   const elementList = document.querySelectorAll('.' + className);
//   const element = elementList[0] as HTMLElement;
//   element.scrollIntoView({ behavior: 'smooth' });
// }
}
