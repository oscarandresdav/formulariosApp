import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(1),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [1, [Validators.required, Validators.min(1)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: '',
      precio: 0,
      existencias: 1
    });
  }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset({
      nombre: '',
      precio: 0,
      existencias: 1
    });
  }


}
