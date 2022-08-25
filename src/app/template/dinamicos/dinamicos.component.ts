import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Oscar',
    favoritos: [
      {id: 1, nombre: 'Metal Gear'},
      {id: 2, nombre: 'PES 2022'},
    ]
  }

  guardar() {
    console.log('Formulario posteado')
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
