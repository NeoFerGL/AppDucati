import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-screen',
  templateUrl: './usuario-screen.component.html',
  styleUrls: ['./usuario-screen.component.scss']
})
export class UsuarioScreenComponent implements OnInit{

  fecha: string = "Ene 2024";
  nombre: string = "Fernando Garza De La Luz";
  userEmail: string = "fer@gmail.com";
  puntos: number = 3200;

  constructor(private router: Router){}
  
  ngOnInit(): void {
    
  }

  public logout() {
    this.router.navigate(["/"]);
  }
}
