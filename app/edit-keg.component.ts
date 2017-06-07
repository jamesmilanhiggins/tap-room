import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <h3>Edit:</h3>
  <form>
    <label>Name:</label>
    <input [(ngModel)]="childKeg.name" name="name">
    <label>Brand:</label>
    <input [(ngModel)]="childKeg.brand" name="brand">
    <label>Price:</label>
    <input [(ngModel)]="childKeg.price" name="price">
    <label>Alcohol content:</label>
    <input [(ngModel)]="childKeg.alcoholContent" name="alcoholContent">
  </form>
  `
})

export class EditKegComponent {
  @Input() childKeg: Keg;


}
