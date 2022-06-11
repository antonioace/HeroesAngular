import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    let ruta: string = `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`;
    return ruta;
  }
}
