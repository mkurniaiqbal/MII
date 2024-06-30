import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() showModalView: any;
  @Input() dataView: any;
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  close() {
    this.closeModal.emit(false);
  }
}
