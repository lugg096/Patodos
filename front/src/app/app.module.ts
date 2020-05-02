import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { ErrorHandlingService } from './services/shared/error-handling.service';

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
  ],
  providers: [
    /* { provide: ErrorHandler, useClass: ErrorHandlingService } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
