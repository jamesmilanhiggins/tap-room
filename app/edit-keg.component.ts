import { Component } from '@angular/core'

@Component({
  selector: 'edit-keg',
  template: `
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
  `
})

export class EditKegComponent {

}
