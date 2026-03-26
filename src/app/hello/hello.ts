import { Component, signal, computed, effect } from '@angular/core';

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
  protected contador = signal(0);

  protected doubleContador = computed(()=>this.contador() * 5);

  private readonly countLog = effect(()=>{
    console.log('Contador mudou:', this.contador())
  })

  protected incrementar() {
    //contador = contador + 1;
    this.contador.update(value => value + 1);
  }
  protected retirar() {
    //contador = contador - 1;
    this.contador.update(value => value - 1);
  }

  protected resetarContador() {
    this.contador.set(0)
  }

  protected nome = '';

  protected aoDigitar(event:Event){
    const input = event.target as HTMLInputElement;
    this.nome = input.value;
  }

}
