import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }


  noPuedeSerTzn(control: FormControl): ValidationErrors | null {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'tzn') {
      return {
        noTzn: true
      }
    }

    return null;
  }

  camposIguales(campo1: string, campo2: string) {

    return( formGroup: AbstractControl ): ValidationErrors | null => {
      
      const camp1 = formGroup.get(campo1)?.value;
      const camp2 = formGroup.get(campo2)?.value;

      if (camp1 !== camp2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return {
          noIguales: true
        }
      }

      formGroup.get(campo2)?.setErrors(null);

      return null;
    }

  }

}
