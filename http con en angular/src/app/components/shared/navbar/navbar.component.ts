import { Component, OnInit } from '@angular/core';

/* Este import sirve para hacer funcionar
  la navegación entre páginas a través de la programación*/
  import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) {

  }

  ngOnInit() {
  }

  buscarHeroe( termino:string ) {
    // console.log( "Texto: " + termino );
    this.router.navigate( ['/buscar', termino] );

  }

}
