import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <h3>Edit:</h3>
  <form>
    <fieldset>
      <label>Name:</label>
      <input type="text" [(ngModel)]="childKeg.name" name="name">
      <label>Brand:</label>
      <input type="text"[(ngModel)]="childKeg.brand" name="brand">
      <label>Price:</label>
      <input type="text"[(ngModel)]="childKeg.price" name="price">
      <label>Alcohol content:</label>
      <input type="text"[(ngModel)]="childKeg.alcoholContent" name="alcoholContent">
      <label>Country of origin:</label>
      <input type="text"[(ngModel)]="childKeg.country" name="country">
      <label>Beer Type:</label>
      <input type="text"[(ngModel)]="childKeg.beerType" name="beerType">
    </fieldset>
  </form>

  `
})

export class EditKegComponent {
  @Input() childKeg: Keg;


}
