// import { Directive, ElementRef } from "@angular/core";

// @Directive({
//     selector: '[custom]'
// })

// export class CustomDirective {
//     constructor (private ele: ElementRef) {
//         ele.nativeElement.style.color = 'green'
//     }
// }

import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[custom]'
})

export class CustomDirective {
    constructor (private ele : ElementRef) {
        ele.nativeElement.style.color = 'red'
    }
}


