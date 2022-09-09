import { outputAst } from '@angular/compiler';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-val',
  templateUrl: './val.component.html',
  styleUrls: ['./val.component.css']
})
export class ValComponent implements OnInit, AfterViewInit {

  @Input() sendVal: any
  @Output() newVal: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    console.log(this.sendVal);
  }

  pressMe() {
    this.newVal.emit('got data')
  }
}
