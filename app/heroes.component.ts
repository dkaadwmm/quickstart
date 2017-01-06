import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  moduleId: module.id,
  styleUrls: ['heroes.component.css'],
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  ngOnInit(): void {
    this.getHeroes();
  };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {};

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
