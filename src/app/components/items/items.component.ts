import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
items: Item[];
editState: boolean = false;
itemToEdit: Item;

  items2: { date: string; newCases: string; newDeaths: string; hospitalEX: string; recovered: string; totalDeath: string; totalCases: string; }[];
  constructor(private itemService: ItemService) { }


  displayedColumns: string[] = ['date', 'newCases', 'newDeaths', 'hospitalEX', 'recovered', 'totalDeath', 'totalCases', 'description'];
  dataSource = new MatTableDataSource<Item>(this.items);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.dataSource.data = items;
      });
      this.dataSource.paginator = this.paginator;
      this.items= [
  
      ]; 
      // this.items2= [
  

      //   {date: "00000", newCases: 'newCases',newDeaths: 'newDeaths',hospitalEX: 'hospitalEX',recovered: 'recovered', totalDeath: 'totalDeath', totalCases: 'totalCases'},
      //   {date: '000000', newCases: 'new000Cases',newDeaths: 'newDeaths',hospitalEX: 'hospitalEX',recovered: 'recovered', totalDeath: 'totalDeath', totalCases: 'totalCases'},
      
      // ];
  }
    deleteItem(event, item){
      this.clearState();
      this.itemService.deleteItem(item);
    }

    editItem(event ,item){
      this.editState = true;
      this.itemToEdit = item;
    }
    
    updateItem(item: Item){
      this.itemService.updateItem(item);
      this.clearState();
    }

    clearState(){
      this.editState = false;
      this.itemToEdit = null;
    }

    

    
}



