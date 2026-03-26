import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {

  protected title = 'Bem Vindo ao My App';
  protected isDisabled = false;
  protected onClick() {
    console.log ('Botão clicado');
    this.isDisabled = !this.isDisabled;
  }
  protected contador = 0;

  incrementar() {
    this.contador++;
    console.log('Contador:', this.contador);
  }
  protected nome = '';

  protected aoDigitar(event:Event){
    const input = event.target as HTMLInputElement;
    this.nome = input.value;
  }

}
