import { Component } from '@angular/core'

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
      <button (click)="newKeg(newName.value, newBrand.value, newPrice.value, newAlcoholContent.value)">New Keg</button>
    </form>
  `
})

export class NewKegComponent{

}
