import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgxBootstrapModule } from './ngx-bootstrap.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { InterceptorService } from '../services/shared/interceptor.service';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { defineLocale, esLocale } from 'ngx-bootstrap/chronos';
defineLocale('es', esLocale);

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { GestionGeneralComponent } from './gestion-general/gestion-general.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
    declarations: [
        PagesComponent,
        GestionGeneralComponent,
        PrincipalComponent
    ],
    exports: [
        /* DashboardComponent */
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        NgxBootstrapModule
     
    ],
    entryComponents: [
       /* Modals */
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
        {
            provide: BsDatepickerConfig, useFactory: () => {
                return Object.assign(new BsDatepickerConfig(), {
                    containerClass: 'theme-blue',
                    adaptivePosition: true,
                    isAnimated: true,
                    locale: 'es'
                })
            }
        }
    ]
})

export class PagesModule { }
