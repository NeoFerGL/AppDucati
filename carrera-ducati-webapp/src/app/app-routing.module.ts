import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';

import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { TerminosYCondicionesScreenComponent } from './screens/terminos-y-condiciones-screen/terminos-y-condiciones-screen.component';
import { JuegoScreenComponent } from './screens/juego-screen/juego-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { UsuarioScreenComponent } from './screens/usuario-screen/usuario-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'instrucciones', component: InstruccionesScreenComponent, pathMatch: 'full' },
  { path: 'nuevo-look', component: NuevoLookScreenComponent, pathMatch: 'full' },
  { path: 'juego-screen', component: JuegoScreenComponent, pathMatch: 'full' },
  { path: 'juego-terminado-screen', component: JuegoTerminadoScreenComponent, pathMatch: 'full' },
  { path: 'usuario-screen', component: UsuarioScreenComponent, pathMatch: 'full' },
  { path: 'politica-privacidad', component: PoliticaPrivacidadScreenComponent, pathMatch: 'full' },
  { path: 'terminos-y-condiciones', component: TerminosYCondicionesScreenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
