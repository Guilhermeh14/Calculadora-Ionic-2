import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  valor1: Number;
  valor2: Number;
  resultado: Number;
  maior: number;
  menor: number;
  conta: string;

  constructor(private alertController: AlertController) { }

  async AlertSoma() {
    this.resultado = Number(this.valor1) + Number(this.valor2);
    this.conta = 'Soma';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `Primeiro Valor: ${this.valor1}<br>` +
        `Segundo Valor: ${this.valor2}<br>` +
        `Resultado: ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async AlertSubtracao() {
    this.resultado = Number(this.valor1) - Number(this.valor2);
    this.conta = 'Subtraçao';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `Primeiro Valor: ${this.valor1}<br>` +
        `Segundo Valor: ${this.valor2}<br>` +
        `Resultado: ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async AlertMultiplicacao() {
    this.resultado = Number(this.valor1) * Number(this.valor2);
    this.conta = 'Multiplicação';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `Primeiro Valor: ${this.valor1}<br>` +
        `Segundo Valor: ${this.valor2}<br>` +
        `Resultado: ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async AlertDivisao() {
    this.resultado = Number(this.valor1) / Number(this.valor2);
    this.conta = 'Divisão';
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `Primeiro Valor: ${this.valor1}<br>` +
        `Segundo Valor: ${this.valor2}<br>` +
        `Resultado: ${this.resultado}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

 async limpar() {
    this.valor1= null;
    this.valor2=null;
    this.resultado=null;
    this.conta=null;
 }
   
 


}



