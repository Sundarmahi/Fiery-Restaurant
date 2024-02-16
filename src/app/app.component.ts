import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

import { HttpClientModule } from '@angular/common/http';
import { PlaceOrderComponent } from './orders/components/place-order/place-order.component';
import { HeaderComponent } from "./header/header.component";
import { VieworderComponent } from './orders/components/vieworder/vieworder.component';
import { ViewOrderInfoComponent } from './orders/components/view-order-info/view-order-info.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, FooterComponent, RouterLink, HttpClientModule, PlaceOrderComponent, HeaderComponent,VieworderComponent,ViewOrderInfoComponent]
})
export class AppComponent {
  title = 'FieryRestaurant';
  constructor(){}
}
