import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {RSVPComponent} from './rsvp/rsvp.component';
import {HomeComponent} from './home/home.component';
import {RegistryComponent} from './registry/registry.component';
import {PhotosComponent} from './photos/photos.component';
import {ContactComponent} from './contact/contact.component';
import {MatTableModule} from "@angular/material/table";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgOptimizedImage} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";

const components = [
  AppComponent,
  AboutComponent,
  RSVPComponent,
  HomeComponent,
  RegistryComponent,
  PhotosComponent,
  ContactComponent
];

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  FlexModule,
  FormsModule,
  NgOptimizedImage,
];

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
  MatInputModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
    ...materialModules,
    MatIconModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
