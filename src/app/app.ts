import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Aside } from './aside/aside';
import { Footer } from './footer/footer';
import { HeaderContainer } from './header-container/header-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Footer, Aside, HeaderContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
