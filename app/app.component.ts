import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  <list-keg [childKegs]="kegs" (oneLessPintSender)="oneLessPint($event)"></list-keg>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Punk IPA', 'Brewdog', 9, 7),
    new Keg('Code24', '10Barrel', 3, 5),
    new Keg('Budvar', 'Budweiser', 5, 5)
  ];

  oneLessPint(keg) {
    keg.pints -= 1;
  }

  newKeg(newName, newBrand, newPrice, newAlcoholContent) {
    this.kegs.push(new Keg(newName, newBrand, parseInt(newPrice), parseInt(newAlcoholContent)));
  }
}
