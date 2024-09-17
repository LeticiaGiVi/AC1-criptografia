import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-tela-dados',
  templateUrl: './tela-dados.page.html',
  styleUrls: ['./tela-dados.page.scss'],
})
export class TelaDadosPage implements OnInit {

  secretKey: any;
  Chave: string = "";
  NomeEncriptado : any;
  EmailEncriptado: any;
  MensagemEncriptado: any;
  Nome: string = "";
  Email: string ="";
  Mensagem: string ="";

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    this.secretKey = this.activatedRoute.snapshot.paramMap.get('secretKey')
    this.NomeEncriptado = this.activatedRoute.snapshot.paramMap.get('NomeEncriptado')
    this.EmailEncriptado = this.activatedRoute.snapshot.paramMap.get('EmailEncriptado')
    this.MensagemEncriptado = this.activatedRoute.snapshot.paramMap.get('MensagemEncriptado')
  }

  Verificar(){
    if (this.NomeEncriptado && this.secretKey && this.EmailEncriptado && this.MensagemEncriptado && this.Chave==this.secretKey) {
      const bytesNome = CryptoJS.AES.decrypt(this.NomeEncriptado, this.Chave);
      const decryptedNome = bytesNome.toString(CryptoJS.enc.Utf8);
      this.Nome = decryptedNome;

      const bytesEmail = CryptoJS.AES.decrypt(this.EmailEncriptado, this.Chave);
      const decryptedEmail = bytesEmail.toString(CryptoJS.enc.Utf8);
      this.Email= decryptedEmail;

      const bytesMensagem = CryptoJS.AES.decrypt(this.MensagemEncriptado, this.Chave);
      const decryptedMensagem = bytesMensagem.toString(CryptoJS.enc.Utf8);
      this.Mensagem = decryptedMensagem;
    }
  }

}
