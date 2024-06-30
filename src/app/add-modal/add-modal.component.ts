import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppService } from '../app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css'],
})
export class AddModalComponent {
  @Input() showModalAdd: any;
  @Input() dataEdit: any;
  @Output() closeAddModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  title: String = '';
  description: String = '';

  constructor(private AppService: AppService) {}

  ngOnChanges() {
    if (this.dataEdit) {
      this.title = this.dataEdit.title;
      this.description = this.dataEdit.body;
    }
  }

  addData() {
    const data = {
      title: this.title,
      body: this.description,
    };
    this.AppService.addData(data).subscribe(
      () => {
        Swal.fire('Berhasil!', 'Data berhasil ditambahkan.', 'success');
        this.close();
      },
      () => {
        Swal.fire('Gagal!', 'Data gagal ditambahkan.', 'error');
      }
    );
  }

  editData() {
    const data = {
      title: this.title,
      body: this.description,
    };
    const id = this.dataEdit.id;
    this.AppService.editData(id, data).subscribe(
      () => {
        Swal.fire('Berhasil!', 'Data berhasil diperbarui.', 'success');
      },
      () => {
        Swal.fire('Gagal!', 'Data gagal diperbarui.', 'error');
      }
    );
  }

  close() {
    this.closeAddModal.emit(false);
  }
}
