import { item } from "./item.model";

export class order{
  id:string='';
  orderNo:number=0;
  contactName:string='';
  orderDate:Date=new Date();
  itemsOrdered:item[]=[]

  orderTotal:number=0;
  taxTotal:number=0;
  grandTotal:number=0;  
  // constructor(orderNo: number, contactName: string, orderDate: Date, itemsOrdered: item[], orderTotal: number, taxTotal: number, grandTotal: number) {
  //   this.OrderNo = orderNo;
  //   this.ContactName = contactName;
  //   this.OrderDate = orderDate;
  //   this.ItemsOrdered = itemsOrdered;
  //   this.OrderTotal = orderTotal;
  //   this.TaxTotal = taxTotal;
  //   this.GrandTotal = grandTotal;
  // }
  
}