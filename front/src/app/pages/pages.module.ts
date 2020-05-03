import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
import { PerfilComponent } from './perfil/perfil.component';
import { InvitacionesComponent } from './invitaciones/invitaciones.component';
import { ForminvitacionComponent } from './forminvitacion/forminvitacion.component';
import { FormayudaComponent } from './formayuda/formayuda.component';

@NgModule({
    declarations: [
        PagesComponent,
        PrincipalComponent,
        PerfilComponent,
        InvitacionesComponent,
        ForminvitacionComponent,
        FormayudaComponent
    ],
    exports: [
        PrincipalComponent
        /* DashboardComponent */
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [
       /* Modals */
    ],
    providers: [
    ]
})

export class PagesModule { }
