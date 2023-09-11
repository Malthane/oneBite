import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'currency'
})

export class CurrencyPipe implements PipeTransform {
    transform(value: any, ...args: any) {
        const[val] = args
        return value * 80
    }
}



