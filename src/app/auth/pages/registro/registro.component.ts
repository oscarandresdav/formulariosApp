import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  // TODO: Temporal
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.nombreApellidoPattern) ]]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
    console.log(this.miFormulario.value);
  }

}
