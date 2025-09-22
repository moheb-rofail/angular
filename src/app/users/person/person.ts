import { Component, contentChild, effect, ElementRef } from '@angular/core';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person.html',
  styleUrl: './person.css'
})
export class Person {
  
  // search for contentChildren
  // content child is for a custom component (a component used inside another component)
  countryElement = contentChild.required<ElementRef>('country');
  eleref = effect(() => {
    let ele = this.countryElement().nativeElement as HTMLParagraphElement;
    ele.style.color = 'red';
  });
  
}
