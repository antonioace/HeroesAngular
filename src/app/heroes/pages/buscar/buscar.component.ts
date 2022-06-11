import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  heroes: Heroe[] = [];
  constructor(private heroeService: HeroeService) {}

  buscarHeroes() {
    const termino: string = this.txtBuscar.nativeElement.value;
    this.heroeService.getHeroes(termino).subscribe((data) => {
      this.heroes = data.data.results;
    });
  }
  agregarHeroesFav(heroe: Heroe) {
    console.log('entra');
    this.heroeService.agregarHeroeFavorito(heroe);
    console.log(this.heroeService.getHeroesFavoritos());
  }

  ngOnInit(): void {}
}
