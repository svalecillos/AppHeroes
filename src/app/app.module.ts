import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';  

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DetailHeroeComponent } from './components/detail-heroe/detail-heroe.component';

//Servicios
import { HeroesService } from './services/heroes.service';
import { SearhComponent } from './components/searh/searh.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

//Componentes
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    DetailHeroeComponent,
    SearhComponent,
    HeroeCardComponent
  ],
  //Librerias
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'heroes/detail-heroe/:id', component: DetailHeroeComponent },
      { path: 'heroes/searh/:termino', component: SearhComponent }
    ])
  ],
  //Servicios
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
