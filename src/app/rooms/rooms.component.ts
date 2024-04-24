import { Component } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [FullImgComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss', '../page.scss']
})
export class RoomsComponent {

}
