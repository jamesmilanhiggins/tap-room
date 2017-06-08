import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h2> Add a new keg</h2>
    <form>
      <fieldset>
        <label>Name:</label>
        <input #newName type="text">
        <label>Brand:</label>
        <input #newBrand type="text">
        <label>Price:</label>
        <input #newPrice type="text">
        <label>Alcohol content:</label>
        <input #newAlcoholContent type="text">
        <label>Country of origin:</label>
        <input #newCountry type="text">
        <label>Beer Type:</label>
        <input #newBeerType type="text">
        <button class="button button-outline" (click)="createKeg(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value, newCountry.value, newBeerType.value)">New Keg</button>
      </fieldset>
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
