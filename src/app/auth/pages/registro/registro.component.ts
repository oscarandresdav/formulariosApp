import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  // TODO: Temporal
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  noPuedeSerTzn(control: FormControl) {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'tzn') {
      return {
        noTzn: true
      }
    }

    return null;
  }



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.nombreApellidoPattern) ]],
    email: ['', [ Validators.required, Validators.pattern(this.emailPattern) ]],
    username: ['', [ Validators.required, this.noPuedeSerTzn ]],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Oscar Davila',
      email: 'test1@test.com',
      username: 'oscarandresdav'
    })
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
