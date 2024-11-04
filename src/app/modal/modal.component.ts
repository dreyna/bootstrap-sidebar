import { Component, ElementRef, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  d: number = 0;
  @ViewChild('myModal') myModal!: ElementRef;
  modal!: Modal;
  ngAfterViewInit() {
    this.modal = new Modal(this.myModal.nativeElement); // Instanciación de Modal en ngAfterViewInit
  }

  openModal() {
    this.modal?.show();
  }

  closeModal() {
      this.modal?.hide();
  }
  save(){
    console.log(this.d++);
    this.closeModal();
  }
  
}
