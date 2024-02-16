export class item{
    ItemNo:number=0;
    Name:String='';
    Quantity:number=0;
    Price:number=0; 
    ItemValue:number=0;

    constructor(itemNo: number, name: string, quantity: number, price: number, itemValue: number) {
        this.ItemNo = itemNo;
        this.Name = name;
        this.Quantity = quantity;
        this.Price = price;
        this.ItemValue = itemValue;
      }
}