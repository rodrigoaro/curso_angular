import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGeneralComponent } from './components/dashboard-general/dashboard-general.component';
import { DashboardDetailsComponent } from './components/dashboard-details/dashboard-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { authGuard } from './components/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { FormularioUnoComponent } from './components/formulario-uno/formulario-uno.component';
import { TodoComponent } from './components/todo/todo.component';
import { CollapsableComponent } from './components/collapsable/collapsable.component';
import { ListaOrdenadaComponent } from './components/lista-ordenada/lista-ordenada.component';
import { StandaloneComponent } from './material/standalone/standalone.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'admin', component:AdminDashboardComponent, canActivate:[authGuard]},
  {path:'login', component:LoginComponent},
  {path:'formulario-uno', component:FormularioUnoComponent},
  {path:'todo', component:TodoComponent},
  {path:'collapsable', component:CollapsableComponent},
  {path:'lista', component:ListaOrdenadaComponent},
  {path:'material-standalone', component:StandaloneComponent},
  {
    path:'dashboard', component:DashboardComponent,
    children: [
      {path:'', redirectTo:'general', pathMatch:'full'},
      {path:'general', component: DashboardGeneralComponent},
      {path:':entorno', component: DashboardDetailsComponent},
    ]
  },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
