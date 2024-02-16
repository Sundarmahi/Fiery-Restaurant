import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { order } from '../../../model/order.model';
import { get } from 'http';

@Component({
  selector: 'app-view-order-info',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule,RouterLink,RouterOutlet],
  templateUrl: './view-order-info.component.html',
  styleUrl: './view-order-info.component.css'
})
export class ViewOrderInfoComponent {

  constructor(private  orderService : OrderService) {
   
  }
 orders:order=new order;
  
  ngOnInit(){
    let value:any;
    value=localStorage.getItem("selectedId");
    console.log(value)
    this.orderService.getbyid(value).subscribe((data)=>{
      console.log(data);
      this.orders=data as order;

  });
}
}
