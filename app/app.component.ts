import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  <div *ngFor="let keg of kegs">
    <h2>{{keg.name}} - {{keg.brand}}</h2>
    <p>{{keg.alcoholContent}}% - USD {{keg.price}} - pints: {{keg.pints}}</p>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Punk IPA', 'Brewdog', 5, 7, 124),
    new Keg('Code24', '10Barrel', 5, 5, 124),
    new Keg('Budvar', 'Budweiser', 5, 5, 124)
  ];
}

export class Keg {
  constructor (public name: string, public brand: string, public price: number, public alcoholContent: number, public pints: number) { }
}
