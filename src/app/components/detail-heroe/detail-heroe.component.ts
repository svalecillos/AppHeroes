import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-detail-heroe',
  templateUrl: './detail-heroe.component.html',
})
export class DetailHeroeComponent {

  heroe:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private heroesService:HeroesService ) {

    this.activatedRoute.params.subscribe(params =>{
      console.log(params);
      this.heroe = this.heroesService.getHeroeXId(params['id']);
      //console.log("Heroe: "+this.heroe);
    });

  }

}
