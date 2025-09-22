import { Component } from '@angular/core';
import { PeopleList } from '../users/people-list/people-list';
import { ToDo } from '../users/to-do/to-do';

@Component({
  selector: 'app-home',
  imports: [PeopleList, ToDo],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  peopleByCountry: any[] = [{
    'country': 'UK',
    'people': [
      { "name": "Douglas Pace" },
      { "name": "Mcleod Mueller"},
      ]
  },
  {
    'country': 'US',
    'people': [
      { "name": "Day Meyers" },
      { "name": "Aguirre Ellis" },
      {"name": "Cook Tyson" }
      ]
  },
  {
    'country': 'MARS',
    'people': [
      { "name": "Douglas Pace" },
      { "name": "Mcleod Mueller" },
      ]
  }];
/*
  classes = {
    'UK': 'red',
    'US' : 'green',
    'MARS' : 'yellow'
  }
    */
}
