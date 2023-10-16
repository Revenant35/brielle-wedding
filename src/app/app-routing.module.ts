import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {RSVPComponent} from "./rsvp/rsvp.component";
import {HomeComponent} from "./home/home.component";
import {RegistryComponent} from "./registry/registry.component";
import {PhotosComponent} from "./photos/photos.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rsvp', component: RSVPComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contact', component: ContactComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
