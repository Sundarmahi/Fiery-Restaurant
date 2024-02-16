import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-img',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './img.component.html',
  styleUrl: './img.component.css'
})
export class ImgComponent {

}
