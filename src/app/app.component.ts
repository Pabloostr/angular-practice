import { Component } from '@angular/core';

import { Page } from './interfaces/pages-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  pages: Array<Page> = [
    { name: "Main",link: "/" },
    { name: "CV", link: "cv" },
    { name: "ToDo", link: "todo" },
    { name: "Forms", link: "forms" },
    { name: "GitHub", link: "github" }
  ];
}
