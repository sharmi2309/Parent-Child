import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //@Input()
  //Cname = 'Sharmi';
  //@Output()
  //sendmsgemitter = new EventEmitter()

  //sendmessage(e: any) {
  //  this.sendmsgemitter.emit(e.target.value);
  //}
  @Input()
  items: { name: string; type: string }[] = [];

  @Output()
  selectedItemEmitter = new EventEmitter<any>(); 
  selectItem(item: { name: string; type: string }) {
    this.selectedItemEmitter.emit(item);
  }
}
