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
      <label>Country of origin:</label>
      <input #newCountry>
      <label>Beer Type:</label>
      <input #newBeerType>
      <button (click)="createKeg(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newCountry.value, newBeerType.value)">New Keg</button>
    </form>
  `
})

export class NewKegComponent{
  @Output() newKegSender = new EventEmitter;

  createKeg(newName, newBrand, newPrice, newAlcoholContent, newCountry, newBeerType) {
    let createdKeg = new Keg(newName, newBrand, newPrice, newAlcoholContent, newCountry, newBeerType)
    this.newKegSender.emit(createdKeg);
  }
}
