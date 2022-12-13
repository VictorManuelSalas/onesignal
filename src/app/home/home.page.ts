import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

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

  }
}
