import {Component} from "@angular/core";
/**
 * Created by Moritz on 19.12.16.
 */

@Component ({
  selector : 'my-app',
  template : `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
