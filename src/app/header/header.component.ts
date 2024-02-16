import { Component } from '@angular/core';
import { PlaceOrderComponent } from '../orders/components/place-order/place-order.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { VieworderComponent } from '../orders/components/vieworder/vieworder.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent, RouterLink, VieworderComponent,HttpClientModule,PlaceOrderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
