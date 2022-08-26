import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(1),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [''],
    precio: [0],
    existencias: [0],
  })

  constructor(private fb: FormBuilder) { }


}
