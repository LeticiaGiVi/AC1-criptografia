import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  Nome: string = "";
  Email: string ="";
  Mensagem: string ="";
  secretKey= "bolinho";
  NomeEncriptado: string = "";
  EmailEncriptado: string ="";
  MensagemEncriptado: string ="";

  Armazenar(){
    if (this.Mensagem && this.Email && this.Nome) {
      const NomeEncrypted = CryptoJS.AES.encrypt(this.Nome, this.secretKey).toString();
      this.NomeEncriptado = NomeEncrypted;

      const EmailEncrypted = CryptoJS.AES.encrypt(this.Email, this.secretKey).toString();
      this.EmailEncriptado = EmailEncrypted;

      const MenssagemEncrypted = CryptoJS.AES.encrypt(this.Mensagem, this.secretKey).toString();
      this.MensagemEncriptado = MenssagemEncrypted;
    }
  }
  Mostrar(){
  this.router.navigate(['/tela-dados', this.secretKey, this.NomeEncriptado, this.EmailEncriptado, this.MensagemEncriptado])
  }



}
