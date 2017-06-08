import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Tap Room</h1>
  <list-keg [childKegs]="kegs" (oneLessPintSender)="oneLessPint($event)" (editKegSender)="editKeg($event)" (deleteKegSender)="deleteKeg($event)"></list-keg>
  <edit-keg *ngIf="edit" [childKeg]="selectedKeg"></edit-keg>
  <hr>
  <new-keg (newKegSender)="storeNewKeg($event)"></new-keg>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Punk IPA', 'Brewdog', 9, 7, "UK", "IPA"),
    new Keg('Code24', '10Barrel', 3, 5, "USA", "pale-ale"),
    new Keg('Hefe', 'Widmere', 3, 5, "USA", "pale-ale"),
    new Keg('Black Butte Porter', 'Deschuttes', 3, 5, "USA", "Stout"),
    new Keg('Budvar', 'Budweiser', 5, 5, "CZ", "pale-ale")
  ];

  edit: boolean = false;
  selectedKeg = null;

  editKeg(keg) {
    this.edit = true;
    this.selectedKeg = keg;
  }

  deleteKeg(keg) {
    var i = this.kegs.indexOf(keg);
    this.kegs.splice(i, 1);
  }

  oneLessPint(keg) {
    keg.pints -= 1;
  }

  storeNewKeg(createdkeg) {
    this.kegs.push(createdkeg);
  }
}
