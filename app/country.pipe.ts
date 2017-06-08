import { Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "country",
  pure: false

})

export class CountryPipe implements PipeTransform {
  transform(input: Keg[], country) {
    var output: Keg[] =[];
    if(country === "allCountries") {
      return input;
    } else {
        for(let i=0; i < input.length; i++) {
          if (input[i].country === country) {
            output.push(input[i]);
          }
        }
      return output;
    }
  }
}
