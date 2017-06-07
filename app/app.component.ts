import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  <div *ngFor="let keg of kegs">
    <h2 [class]="priceColor(keg)">{{keg.name}} - {{keg.brand}}</h2>
    <h3>Details:</h3>
    <p [class]="lessThanTenPints(keg)">{{keg.alcoholContent}}% - USD {{keg.price}} - pints: {{keg.pints}}</p>
    <button (click)="oneLessPint(keg)">Sell a pint</button>
    <h3>Edit:</h3>
    <form>
      <label>Name:</label>
      <input [(ngModel)]="keg.name" name="name">
      <label>Brand:</label>
      <input [(ngModel)]="keg.brand" name="brand">
      <label>Price:</label>
      <input [(ngModel)]="keg.price" name="price">
      <label>Alcohol content:</label>
      <input [(ngModel)]="keg.alcoholContent" name="alcoholContent">
    </form>
    <hr>
  </div>

  <form>
    <label>Name:</label>
    <input #newName>
    <label>Brand:</label>
    <input #newBrand>
    <label>Price:</label>
    <input #newPrice>
    <label>Alcohol content:</label>
    <input #newAlcoholContent>
    <button (click)="newKeg(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value)">New Keg</button>
  </form>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Punk IPA', 'Brewdog', 9, 7),
    new Keg('Code24', '10Barrel', 3, 5),
    new Keg('Budvar', 'Budweiser', 5, 5)
  ];

  oneLessPint(keg) {
    keg.pints -= 1
  }

  newKeg(newName, newBrand, newPrice, newAlcoholContent) {
    this.kegs.push(new Keg(newName, newBrand, parseInt(newPrice), parseInt(newAlcoholContent)));
  }
  lessThanTenPints(keg) {
    if (keg.pints < 10) {
      return "bg-danger";
    }
  }

  priceColor(keg) {
    if (keg.price > 5) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}

export class Keg {
  public pints: number = 12;
  constructor (public name: string, public brand: string, public price: number, public alcoholContent: number) { }
}
