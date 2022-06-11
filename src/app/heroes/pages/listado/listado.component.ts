import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      .small-flag {
        width: 40px;
      }
    `,
  ],
})
export class ListadoComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroeService) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroesFavoritos();
    console.log(this.heroesService.getHeroesFavoritos());
  }

  eliminarHeroe(heroe: Heroe): void {
    this.heroesService.eliminarHeroe(heroe);
    console.log(this.heroesService.getHeroesFavoritos().length);
    this.heroes = this.heroesService.getHeroesFavoritos();
  }
}
