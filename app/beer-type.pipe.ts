import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "beerType",
  pure: false
})

export class BeerTypePipe implements PipeTransform{
  transform(input: Keg[], beerType) {
    var output: Keg[] = [];
    if(beerType === "allBeers") {
      return input;
    } else {
      for(let i=0; i < input.length; i++) {
        if (input[i].beerType === beerType) {
          output.push(input[i]);
        }
      }
      return output;
    }
  }

}
