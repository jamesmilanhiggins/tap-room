import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <form>
      <label>Name:</label>
      <input #newName>
      <label>Brand:</label>
      <input #newBrand>
      <label>Price:</label>
      <input #newPrice>
      <label>Alcohol content:</label>
      <input #newAlcoholContent>
      <button (click)="createKeg(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value)">New Keg</button>
    </form>
  `
})

export class NewKegComponent{
  @Output() newKegSender = new EventEmitter;

  createKeg(newName, newBrand, newPrice, newAlcoholContent) {
    let createdKeg = new Keg(newName, newBrand, newPrice, newAlcoholContent)
    this.newKegSender.emit(createdKeg);
  }
}
