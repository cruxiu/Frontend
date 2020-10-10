import { Component } from '@angular/core'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'manager',
  template: `
    <div class="max-w-md mx-auto flex p-12 bg-gray-100 mt-12 rounded-lg shadow-xl">
      <div class="mx-6 pt-1">
        <img class="object-scale-down h-48 w-full mb-12" src="assets/img/logo.png"/>
        <h1 class="text-2xl text-blue-700 leading-tight text-center">
          Rastreamento Correios
        </h1>
        <ng-template [ngIf]="mode === 'track'">
          <form class="w-full max-w-sm pt-4" (ngSubmit)="onSubmit()">
            <div class="flex items-center border-b border-blue-700 py-2">
              <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Código de rastreamento" [formControl]="order"/>
              <button class="flex-shrink-0 bg-blue-700 hover:bg-blue-700 border-blue-700 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Rastrear
              </button>
            </div>
          </form>
          <button class="object-scale-down w-full mt-6 bg-blue-700 hover:bg-blue-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow uppercase" (click)="see()">
            Meus Pedidos
          </button>
        </ng-template>
        <ng-template [ngIf]="mode === 'details'">
          <div class="flex flex-wrap flex-col md:flex-row py-2">
            <details [code]="orderd"> </details>
          </div>
          <button class="object-scale-down w-full bg-blue-700 hover:bg-blue-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow uppercase" (click)="reset()">
            Voltar
          </button>
        </ng-template>
        <ng-template [ngIf]="mode === 'orders'">
          <div class="flex flex-wrap flex-col md:flex-row py-2">
          <order *ngFor="let code of codes" [code]="code" (remove)="onRemove($event)" (details)="onDetailed($event)"> </order>
          </div>
          <button class="object-scale-down w-full bg-blue-700 hover:bg-blue-300 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow uppercase" (click)="reset()">
            Voltar
          </button>
         </ng-template>
      </div>
    </div>
  `
})
export class ManagerComponent {
  codes: string[] = [];
  mode = 'track'
  orderd = null
  order = new FormControl('')

  onSubmit(){
    this.codes.push(this.order.value)
    this.mode = 'orders'
  }

  reset(){
    this.mode = 'track'
  }

  see(){
    this.mode = 'orders'
  }

  onRemove(o) {
    this.codes = this.codes.filter(function(code) {return code !== o})
    this.mode = 'track'
  }

  onDetailed(o) {
    this.orderd = o
    this.mode = 'details'
  }
}
