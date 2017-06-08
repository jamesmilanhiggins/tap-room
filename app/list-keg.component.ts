import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'list-keg',
  template: `
  <h1>Test List Keg</h1>
  <select (change)="onChangeCountry($event.target.value)">
    <option value="allCountries" selected="selected">All Countries</option>
    <option value="UK">UK</option>
    <option value="USA">US</option>
    <option value="CZ">CZ</option>
  </select>
  <select (change)="onChangeType($event.target.value)">
    <option value="allBeers" selected="selected">All Beers</option>
    <option value="IPA">IPA</option>
    <option value="pale-ale">Pale Ale</option>
    <option value="red-ale">Red Ale</option>
    <option value="stout">Stout</option>
  </select>
  <div *ngFor="let keg of childKegs | country:filterCountry | beerType:filterBeerType">

    <h2>{{keg.name}} - {{keg.brand}}</h2>
    <h3>Details:</h3>
    <p [class]="alcoholColor(keg)">Alcohol content: {{keg.alcoholContent}}% </p>
    <p [class]="priceColor(keg)">Price per pint: USD {{keg.price}} </p>
    <p [class]="pintsColor(keg)">Pints left: {{keg.pints}}</p>
    <p>Country of origin: {{keg.country}}</p>
    <p>Beer Type: {{keg.beerType}}</p>
    <button (click)="oneLessPint(keg)">Sell a pint</button>
    <button (click)="editKeg(keg)">Edit Keg</button>
    <button (click)="deleteKeg(keg)">Delete Keg</button>
  </div>
  `
})

export class ListKegComponent {
  @Input() childKegs: Keg[];
  @Output() oneLessPintSender = new EventEmitter;
  @Output() editKegSender = new EventEmitter;
  @Output() deleteKegSender = new EventEmitter;

  filterCountry: string = "allCountries";
  filterBeerType: string = "allBeers";

  onChangeCountry(optionFromMenu) {
    this.filterCountry = optionFromMenu;
  }
  onChangeType(optionFromMenu) {
    this.filterBeerType = optionFromMenu;
  }

  oneLessPint(keg) {
    this.oneLessPintSender.emit(keg);
  }

  editKeg(keg) {
    this.editKegSender.emit(keg);
  }

  deleteKeg(keg) {
    this.deleteKegSender.emit(keg);
  }

  pintsColor(keg) {
    if (keg.pints < 10) {
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }

  priceColor(keg) {
    if (keg.price > 7) {
      return "bg-danger";
    } else {
      return "bg-info";
    }
  }

  alcoholColor(keg) {
    if(keg.alcoholContent > 6) {
      return "bg-danger";
    }else {
      return "bg-info";
    }
  }
}
