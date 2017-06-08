import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

import { CountryPipe } from './country.pipe';
import { BeerTypePipe } from './beer-type.pipe';

import { AppComponent } from './app.component';
import { ListKegComponent } from './list-keg.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListKegComponent, EditKegComponent, NewKegComponent, CountryPipe, BeerTypePipe ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
