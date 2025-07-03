import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

//Angular material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';

//Para usar el mask
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

//Componentes de la app - screens
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { FooterAppComponent } from './partials/footer-app/footer-app.component';
import { HeaderAppComponent } from './partials/header-app/header-app.component';
import { LeftSidebarComponent } from './partials/left-sidebar/left-sidebar.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { PoliticaPrivacidadScreenComponent } from './screens/politica-privacidad-screen/politica-privacidad-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { TerminosYCondicionesScreenComponent } from './screens/terminos-y-condiciones-screen/terminos-y-condiciones-screen.component';
import { JuegoScreenComponent } from './screens/juego-screen/juego-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { UsuarioScreenComponent } from './screens/usuario-screen/usuario-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    FooterAppComponent,
    HeaderAppComponent,
    LeftSidebarComponent,
    HomeScreenComponent,
    BasesPromocionScreenComponent,
    PoliticaPrivacidadScreenComponent,
    InstruccionesScreenComponent,
    NuevoLookScreenComponent,
    TerminosYCondicionesScreenComponent,
    JuegoScreenComponent,
    JuegoTerminadoScreenComponent,
    UsuarioScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMaskDirective,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
