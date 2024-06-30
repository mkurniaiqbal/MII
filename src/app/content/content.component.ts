import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  data: any[] = [];
  showModalView: boolean = false;
  showModalAdd: boolean = false;
  loading: boolean = false;
  dataView: any = null;
  dataEdit: any = {};

  constructor(private AppService: AppService) {}

  ngOnInit(): void {
    this.getData();
  }

  addDataModal() {
    this.showModalAdd = true;
  }

  editDataModal(event: any) {
    this.showModalAdd = true;
    this.dataEdit = event;
  }

  closeAddModal(event: any) {
    this.showModalAdd = event;
  }

  openModal(item: any) {
    this.dataView = item;
    this.showModalView = true;
  }

  closeModal(event: boolean) {
    this.showModalView = event;
  }

  getData(): void {
    this.loading = true;
    this.AppService.getData().subscribe((response) => {
      this.data = response;
      this.loading = false;
    });
  }

  handleDelete(id: number): void {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Data yang dihapus tidak dapat dikembalikan!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        this.AppService.deleteData(id).subscribe(
          (response) => {
            Swal.fire(
              'Berhasil!',
              `Data dengan ID ${id} berhasil dihapus.`,
              'success'
            );
          },
          (error) => {
            Swal.fire('Gagal!', `Data dengan ID ${id} gagal dihapus.`, 'error');
          }
        );
      }
    });
  }
}
