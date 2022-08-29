import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ]],
    email: ['', [ Validators.required, Validators.pattern(this.vs.emailPattern) ], [this.emailValidator]],
    username: ['', [ Validators.required, this.vs.noPuedeSerTzn ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmarPassword: ['', [Validators.required]],
  }, {
    validators: [ this.vs.camposIguales('password', 'confirmarPassword') ]
  })

  constructor( private fb: FormBuilder,
               private vs: ValidatorService,
               private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Oscar Davila',
      email: 'test1@test.com',
      username: 'oscarandresdav',
      password: 'A123456.',
      confirmarPassword: 'A123456.'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }
  
  emailRequerido() {
    return this.miFormulario.get('email')?.errors?.['required'] &&
           this.miFormulario.get('email')?.touched
  }

  emailFormato() {
    return this.miFormulario.get('email')?.errors?.['pattern'] &&
           this.miFormulario.get('email')?.touched
  }

  emailTomado() {
    return this.miFormulario.get('email')?.errors?.['emailTomado'] &&
           this.miFormulario.get('email')?.touched
  }


  submitFormulario() {
    this.miFormulario.markAllAsTouched();
    console.log(this.miFormulario.value);
  }

}
