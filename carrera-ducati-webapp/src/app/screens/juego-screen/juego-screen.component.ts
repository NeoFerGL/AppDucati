import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-screen',
  templateUrl: './juego-screen.component.html',
  styleUrls: ['./juego-screen.component.scss']
})
export class JuegoScreenComponent {
  
  constructor(private router: Router) { }

  goInicio() {
    this.router.navigate(['home']);
  }

  irAPantallaJuegoTerminado() {
    this.router.navigate(['juego-terminado-screen']);
  }
  
}
