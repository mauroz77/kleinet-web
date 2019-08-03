import { Component } from '@angular/core';
import { Page } from './model/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kleinet';
  page: Page;

  constructor(){
    this.page = {title: 'hola', content: 'ooe<b>dddd</b>jssjs'}
  }
}
