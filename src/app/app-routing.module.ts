import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './composantPrincipal/default/default.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path:'', component: ConnexionComponent},
  {path:"connexion", component:ConnexionComponent},
  {path:'layout', component:DefaultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
