import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-resultadoheroe',
  templateUrl: './resultadoheroe.component.html'
})
export class ResultadoheroeComponent implements OnInit {

  heroes:Heroe [] = [];
  termino:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
    ) { }

ngOnInit() {
  this.activatedRoute.params.subscribe( params => {
    // console.log("parametro de busqueda recibido: " + params['termino'] );
    this.heroes = this._heroesService.buscarHeroes(params['termino'] );

    // para llegar una variable que devuelve a la vista el termino buscado
    this.termino = params['termino'];
  });

}

}
