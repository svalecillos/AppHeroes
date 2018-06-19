import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {
  //Resivimos el heroe desde afuera
  @Input() heroe:any = {};
  @Input() index:number;

  //@Output() heroeSelecionado: EventEmitter<number>;

  constructor( private router:Router ) {
    //this.heroeSelecionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    this.router.navigate(['heroes/detail-heroe',this.index]);
    //console.log(this.index);
    //this.heroeSelecionado.emit(this.index);
  }

}
