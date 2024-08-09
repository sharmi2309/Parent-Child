import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  //Pname = "";
  //message = "";
  //receivemsg(msg: any) {
  //  this.message = msg;
  //}
  filterByType = '';
  filteredItems: { name: string; type: string }[] = [];
  items = [
    { name: 'Green', type: 'color' },
    { name: 'Dog', type: 'animal' },
    { name: 'Apple', type: 'fruit' },
    { name: 'Mango', type: 'fruit' },
    { name: 'Yellow', type: 'color' },
    { name: 'Cat', type: 'animal' },

  ];
  selectedItem: { name: string; type: string } | null = null;

  filterBy(type:string) {
    this.filteredItems = this.items.filter((x) => x.type === type);
  }

  selectItem(item:{ name: string; type: string }) {
    this.selectedItem = item;


  }
}
