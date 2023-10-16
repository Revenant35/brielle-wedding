import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {FlexModule} from "@angular/flex-layout";

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
];

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules,
    ...materialModules,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
