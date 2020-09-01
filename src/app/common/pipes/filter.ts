import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(values: any, regExp: string = '') {
  	if (values) {
	  	return values.filter(item => {
	  		for (var prop in item) {
			    if (Object.prototype.hasOwnProperty.call(item, prop)) {
			    	const valueToMatch = item[prop].toString().toLowerCase();
			    	if (valueToMatch.includes(regExp.toString().toLowerCase())) {
			    		return item;
			    	}
			    }
			}
	  	});  		
	  }
  }
}