import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'order',
  template: `
  <div>
    <div class="flex flex-wrap bg-white border-b border-blue-tial-100">
      <div class="flex w-full m-4">
        <div class="flex items-center">
          <div class="flex flex-col p-4">
            <h3 class="font-bold text-md text-tial-400">{{ code }}</h3>
            <span class="font-light text-sm">Objeto entregue ao destinatário</span>
            <div class="flex">
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-grow w-full items-center justify-end">
          <div class="flex items-center mr-2 space-x-4">
          <button class="bg-gray-300 hover:bg-gray-400 font-bold  text-red-700 py-2 px-4 rounded inline-flex items-center" (click)="details.emit(code)">
            <span class="text-lg uppercase font-semibold text-green-700 hover:text-green-300">Detalhes</span>
          </button>
          <button class="bg-gray-300 hover:bg-gray-400 font-bold  text-red-700 py-2 px-4 rounded inline-flex items-center" (click)="remove.emit(code)">
            <span class="text-lg uppercase font-semibold text-red-700 hover:text-blue-300">Remover</span>
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class OrderComponent {
  @Input() code: string
  @Output() details = new EventEmitter<string>()
  @Output() remove = new EventEmitter<string>()
}
