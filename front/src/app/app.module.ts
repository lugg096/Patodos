import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { ErrorHandlingService } from './services/shared/error-handling.service';
import { AyudaComponent } from './pages/modals/ayuda/ayuda.component';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';



/* defineLocale('es', esLocale); */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],

  exports: [
  ],
  entryComponents: [
    AyudaComponent,
  ],

  providers: [
    /* { provide: ErrorHandler, useClass: ErrorHandlingService } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
