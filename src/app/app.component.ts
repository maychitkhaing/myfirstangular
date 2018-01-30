import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>

    <h2>My favorite hero is: {{myHero.name}}</h2>
    <h2>List of Heros</h2>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero.name}}
      </li>
    </ul>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes (version 2)';

  heroes = [
    new Hero(1,'Windstorm'),
    new Hero(2,'Bombasto'),
    new Hero(3, 'Magneta'),
    //  JSON.parse({id:4, name:'Tornado'})  -- doesnt work
    {id:4, name:'Tornado Simple'}];

  myHero = this.heroes[0];
  //console.log(myHero);

}
