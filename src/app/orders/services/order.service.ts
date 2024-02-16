import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from '../../model/order.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  

  private orders: order[] = [];

  private ordersUrl = 'http://localhost:3000/orders';



  getAll(): Observable<order[]> {
    return this.http.get<order[]>(this.ordersUrl);
  }

  saveOrder(order: order): Observable<order> {
    return this.http.post<order>(this.ordersUrl, order);
  }

  getbyid(id:string){
  return this.http.get<order>(`${this.ordersUrl}/${id}`);
  }

  addOrder(order: order): Observable<order[]> {
    return this.http.post<order[]>(this.ordersUrl, order);
  }
  private ordersUpdated=new Subject<order[]>
 
  notifyOrdersUpdated(orders: order[]): void {
    this.ordersUpdated.next(orders);
  }
 
  onOrdersUpdated(): Observable<order[]> {
    return this.ordersUpdated.asObservable();
  }
}
