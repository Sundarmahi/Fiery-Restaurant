import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { order } from '../../../model/order.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "../../../menu/menu.component";

@Component({
    selector: 'app-vieworder',
    standalone: true,
    templateUrl: './vieworder.component.html',
    styleUrl: './vieworder.component.css',
    imports: [FormsModule, CommonModule, HttpClientModule, RouterLink, RouterOutlet, MenuComponent]
})
export class VieworderComponent {

  constructor(private service:OrderService,private router:Router){
 
  }
  getorder:order[]=[];
 
  getOrder(){
    this.service.getAll().subscribe((data:order[]) => {
      this.getorder=data;
      
    })
  } 

  navi(id:string){
    localStorage.setItem("selectedId", id.toString());
    this.router.navigate(["/item-info"],{queryParams:{id:id}});
  }
}
