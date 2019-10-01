import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

/* Este import sirve para hacer funcionar
  la navegación entre páginas a través de la programación*/
  import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  /* Cuando se inicializa el componente se declara esta variable de tipo Interface Heroe (vacia porque se mandara
  a llenar dentro de la  función de inicio ngOnInit() )
  */
  heroes:Heroe [] = [];

  // Se necestia creaer una variable tipo privada que sea de tipo Router (el servicio que importamos)
  constructor( private _heroesService: HeroesService, private router:Router ) {
    // console.log("Constructor");
  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  // Función de navegación entre páginas de la vista
  // La función requiere el index del item para enviarlo a la ruta de navegación
  verHeroe( idx:number ) {
    // console.log(idx);
    this.router.navigate( ['/heroe', idx] );

  }

}
