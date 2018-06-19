import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
})
export class SearhComponent implements OnInit {

  heroes:any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService ) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      //console.log(this.heroes);
    })
  }

}
