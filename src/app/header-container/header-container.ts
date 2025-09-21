import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-header-container',
  imports: [Nav, Header],
  templateUrl: './header-container.html',
  styleUrl: './header-container.css'
})
export class HeaderContainer {

}
