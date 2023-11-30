import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './components/mi-primer-componente/mi-primer-componente.component';
import { MiComponenteHijoComponent } from './components/mi-componente-hijo/mi-componente-hijo.component';
import { TextColorDirective } from './directives/text-color.directive';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { DashboardDetailsComponent } from './components/dashboard-details/dashboard-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioUnoComponent } from './components/formulario-uno/formulario-uno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './components/todo/todo.component';
import { CollapsableComponent } from './components/collapsable/collapsable.component';
import { ListaOrdenadaComponent } from './components/lista-ordenada/lista-ordenada.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiComponenteHijoComponent,
    TextColorDirective,
    CapitalizarPipe,
    HomeComponent,
    DashboardComponent,
    DashboardGeneralComponent,
    DashboardDetailsComponent,
    NotFoundComponent,
    AdminDashboardComponent,
    LoginComponent,
    FormularioUnoComponent,
    TodoComponent,
    CollapsableComponent,
    ListaOrdenadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [CapitalizarPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
