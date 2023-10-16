import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentRoute: string = '';
  toolbarEntries: { label: string, route: string }[] = [
    {route: '/home', label: "Home"},
    {route: '/about', label: "Meet Us"},
    {route: '/rsvp', label: "RSVP"},
    {route: '/registry', label: "Registry"},
    {route: '/photos', label: "Photos"},
    {route: '/contact', label: "Contact"},
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log('Current Route:', this.currentRoute);
      }
    });
    console.log("Routes: ", this.toolbarEntries.map(entry => entry.route));
    console.log("Current Route: ", this.currentRoute)
  }
}
