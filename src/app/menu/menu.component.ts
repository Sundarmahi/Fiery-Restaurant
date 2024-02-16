import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule,CommonModule, HttpClientModule,RouterLink,RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent{
   constructor(private http:HttpClient){
    this.getAll();
   }

   Menuitem:any=[];
    check=false;


  getAll(){
    
    this.http.get('http://localhost:3000/items')
    .subscribe((res) => {this.Menuitem=res })
  
  }
   click(){
      this.check=true;
   }
}
