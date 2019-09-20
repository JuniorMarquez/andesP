import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArchwizardModule } from 'angular-archwizard';

import * as $ from 'jquery';

window["$"] = $;
window["jQuery"] = $;



//RUTAS
import { app_routing } from "./app.routes";       

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//DIRECTIVAS
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';


//COMPONENTS

//import { CatalogComponent,DialogOverviewExampleDialog } from './components/catalog/catalog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


//SERVICES
//import {InformacionService} from './services/informacion.service';
import {TixsService} from './services/tixs.service';
import {ProductInfoService} from './services/product-info.service';
import {CarService} from './services/car.service';
import {DataApiService} from './services/data-api.service';
import {ScrollTopService} from './services/scroll-top.service';
import {UserWService} from './services/user-w.service';



//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';


import { HttpClientModule } from '@angular/common/http';
//import { LightboxModule } from 'ngx-lightbox';
import { Component, Inject} from '@angular/core';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ToursComponent } from './components/tours/tours.component';
import { FeaturesComponent } from './components/features/features.component';
import { VitrinaComponent } from './components/vitrina/vitrina.component';
import { AboutComponent } from './components/about/about.component';
import { TreksComponent } from './components/treks/treks.component';
import { BlogComponent } from './components/blog/blog.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PreFooterComponent,
    LoginComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    PrincipalComponent,
    DestinosComponent,
    ActividadComponent,
    ToursComponent,
    FeaturesComponent,
    VitrinaComponent,
    AboutComponent,
    TreksComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule,
    ArchwizardModule,
    CarouselModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
 entryComponents:[  ],
  providers: [
    TixsService,
    DataApiService,
    ScrollTopService,
    UserWService
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
