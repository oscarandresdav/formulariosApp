import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  miFormulario: FormGroup = new FormGroup({
    'nombre': new FormControl('')
  })

  constructor() { }


}
