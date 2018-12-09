import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
    
    public counter: number = 0; // small pic

    @Input()
    public source: string; // Image source.

    @Input("side")   // side = outer name 
    public length: number; // Width/Height.  // length = inner name ONLY

    @Output()
    public click: EventEmitter<string> = new EventEmitter<string>();

}