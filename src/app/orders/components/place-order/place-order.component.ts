import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { order } from '../../../model/order.model';
import { EventEmitter } from 'stream';
import { OrderService } from '../../services/order.service';
import { item } from '../../../model/item.model';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [FormsModule,CommonModule, HttpClientModule,RouterLink,RouterOutlet],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent {

     constructor(private orderService: OrderService) {}

     

  newOrder: order = new order();
 

 
  addOrder(): void {
    this.orderService.addOrder(this.newOrder).subscribe(() => {
      this.orderService.getAll().subscribe((data) => {
        this.orderService.notifyOrdersUpdated(data);
      });
      this.newOrder = new order();
    });
 
  }
 
 
  addItem()
  {
    const newItem:  item = new item(0,'',0,0,0);
    this.newOrder.itemsOrdered.push(newItem);
  }
   removeItem(index:number)
   {
    this.newOrder.itemsOrdered.splice(index,1)
   }
 
  // removeItem(index: number): void {
  //   this.newOrder.itemsOrdered.splice(index, 1);
  // }
  // trackByFn(index:number,item:item): number{
  //   return index;
  // }



}

 
