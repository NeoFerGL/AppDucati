import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit{
  @Output() cerrar = new EventEmitter();

  public isLogin: boolean = true;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  public cerrar_drawer(){
    this.cerrar.emit();
  }

  public iniciarSesion(){

  }

  public goInicio(){
    this.router.navigate(["home"]);
  }

  public goBasesPromocion(){
    this.router.navigate(["bases-promocion"]);
  }

  public goTiendasParticipantes(){
    window.open('https://docs.google.com/document/d/10J6EUDqat7ISeHheKPc-oJDQGQ7xXQO0/edit?tab=t.0', '_blank');
  }

  public goPerfil(){
    this.router.navigate(["usuario-screen"]);
  }

  public logout(){
    this.router.navigate(["/"]);
  }
}
