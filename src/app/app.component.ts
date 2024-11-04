import { Component, Renderer2, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sidebar';
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    const isToggled = localStorage.getItem('sb|sidebar-toggle') === 'true';
    if (isToggled) {
      this.renderer.addClass(document.body, 'sb-sidenav-toggled');
    }
  }
  toggleSidebar(event: Event): void {
    event.preventDefault();
    if (document.body.classList.contains('sb-sidenav-toggled')) {
      this.renderer.removeClass(document.body, 'sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', 'false');
    } else {
      this.renderer.addClass(document.body, 'sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', 'true');
    }
  }
}
