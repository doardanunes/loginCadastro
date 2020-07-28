import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public form = [
    { val: 'Manter-se conectado', isChecked: true }
  ];

  public mensagem;
  public email;
  public senha;

  constructor() {}

  public registrar(){
    if(this.email && this.senha == null) {
    this.mensagem = "Login não realizado!";
     }
    else {
    this.mensagem = "Login Realizado!";
    }}
    
    public apagar(){
      this.email = null;
      this.senha = null;
      this.mensagem = null;
    }
}
