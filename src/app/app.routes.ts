import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { PlaceOrderComponent } from './orders/components/place-order/place-order.component';
import { VieworderComponent } from './orders/components/vieworder/vieworder.component';
import { ViewOrderInfoComponent } from './orders/components/view-order-info/view-order-info.component';
import { ImgComponent } from './img/img.component';

export const routes: Routes = [
    // {path:'home', loadComponent:()=>  import('./app.component').then(m => m.AppComponent)},
    {path:'view-orders',loadComponent:()=>  import('./orders/components/vieworder/vieworder.component').then(m => m.VieworderComponent)},
    {path:'post-orders',loadComponent:()=>  import('./orders/components/place-order/place-order.component').then(m => m.PlaceOrderComponent)},
    { path: '', component: ImgComponent },
    
       { path: 'item-info', loadComponent:()=>  import('./orders/components/view-order-info/view-order-info.component').then(m => m.ViewOrderInfoComponent)}
];
