import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RouterModule } from '@angular/router';
import { ListeCompteComponent } from 'src/app/compte/liste-compte/liste-compte.component';
import { AddCompteComponent } from 'src/app/compte/add-compte/add-compte.component';
import { AddClientComponent } from 'src/app/client/add-client/add-client.component';
import { AddEmployeComponent } from 'src/app/employe/add-employe/add-employe.component';
import { ListeClientComponent } from 'src/app/client/liste-client/liste-client.component';
import { ListeEmployeComponent } from 'src/app/employe/liste-employe/liste-employe.component';
import { OperationComponent } from 'src/app/operation/operation.component';
import { EnteteComponent } from 'src/app/composants/entete/entete.component';
import { PiedPageComponent } from 'src/app/composants/pied-page/pied-page.component';
import { MenuVerticalComponent } from 'src/app/composants/menu-vertical/menu-vertical.component';
import { DefaultComponent } from './default.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConnexionComponent } from 'src/app/connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultComponent,
    EnteteComponent,
    PiedPageComponent,
    MenuVerticalComponent,
    ListeCompteComponent,
    AddCompteComponent,
    AddClientComponent,
    ListeClientComponent,
    ListeEmployeComponent,
    AddEmployeComponent,
    OperationComponent,
    ConnexionComponent
    
  ],
  imports: [
    CommonModule, 
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
