import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { InterceptorService } from '../services/shared/interceptor.service';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
    declarations: [
        PagesComponent,
        PrincipalComponent
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
