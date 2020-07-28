import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  public mensagem;
  public nome;
  public cpf;
  public celular;
  public email;
  public senha;
  public confirmarsenha;
  public data;
  public formulario;


  constructor() { }

  public salvar(){
    this.formulario = this.nome;
    this.formulario = this.cpf;
    this.formulario = this.celular;
    this.formulario = this.email;
    this.formulario = this.senha;
    this.formulario = this.confirmarsenha;
    this.formulario = this.data;
    
 
    if (this.formulario == null){
      this.mensagem = "CADASTRO INCOMPLETO...";
    }
    else {
      this.mensagem  = "CADASTRO CONCLUIDO!";
    }
  }

  public apagar (){
    this.mensagem = null;
    this.nome = null;
    this.cpf = null;
    this.celular = null;
    this.email = null;
    this.senha = null;
    this.confirmarsenha = null;
    this.data = null;
  }

  ngOnInit() {
  }
}