import { Component, viewChild, effect, ElementRef } from '@angular/core';
import { Person } from '../person/person';

@Component({
  selector: 'app-people-list',
  imports: [Person],
  templateUrl: './people-list.html',
  styleUrl: './people-list.css'
})
export class PeopleList {
  people = [{ "name": "Douglas Pace", "age": 35, "country": 'MARS' }, 
    {"name": "Mcleod Mueller", "age": 32, "country": 'USA'}, 
    {"name": "Day Meyers", "age": 21, "country": 'HK'}, 
    { "name": "Aguirre Ellis", "age": 34, "country": 'UK' }, 
    {"name": "Cook Tyson", "age": 32, "country": 'USA'}
  ];

  // view child is for a built in component
  htmlDiv = viewChild.required<ElementRef>('htmlDiv');
  eleref = effect(() => {
    let ele = this.htmlDiv().nativeElement as HTMLParagraphElement;
    ele.textContent = 'this text is changed by effect';
  });
}
