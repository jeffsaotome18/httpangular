import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) {

    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id'] );
      // console.log( params['id'] );
      this.heroe.casa = this.getCasa(this.heroe.casa);
      // console.log("hereo casa: " +this.heroe.casa);

    });

  }

  getCasa(casa: string) {
    if(casa === "DC") {
      return "assets/img/dc.png";
    } else {
      return "assets/img/marvel.png";
    }
  }

}
