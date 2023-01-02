import { Component , OnInit} from '@angular/core';
import { PushService } from '../services/push.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public puchService: PushService) {
    localStorage.setItem(this.correo, 'salasmanuel030@gmail.com ');
    this.myItem = localStorage.getItem(this.correo);
   }

  correo : string = 'email completo';
  dato: any;

  key: string = 'Name';
  myItem : any;
  storeName() {
    localStorage.setItem(this.key, 'Angular');
    this.myItem = localStorage.getItem(this.key);
  }

  /*
  ngInit() {

  }
  Calcular() {
    var num1 = <HTMLInputElement>document.getElementById('one');
    var num2 = <HTMLInputElement>document.getElementById('two');
    var resultado = <HTMLInputElement>document.getElementById('resultado');
    var simbolo = <HTMLInputElement>document.getElementById('simbolo');

    console.log(resultado);

    let res = 0;

    switch (simbolo.value) {
      case '+':
        res = parseInt(num1.value) + parseInt(num2.value);
        resultado.innerHTML = "" + res;
        break;
      case '-':
        res = parseInt(num1.value) - parseInt(num2.value);
        resultado.innerHTML = "" + res;
        break;
      case '*':
        res = parseInt(num1.value) * parseInt(num2.value);
        resultado.innerHTML = "" + res;
        break;
      case '/':
        res = parseInt(num1.value) / parseInt(num2.value);
        resultado.innerHTML = "" + res;
        break;
      default:
         resultado.innerHTML = "Syntax Error 😣";
        break;
    }

  } */
}
