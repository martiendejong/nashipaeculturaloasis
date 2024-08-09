import { Component, Input } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';
import { JsonLoaderService } from '../json-loader.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [FullImgComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss', '../page.scss']
})
export class RoomsComponent { 
  
  @Input() src: any;

  public content: any;

  constructor(private jsonLoaderService: JsonLoaderService) { }

  async ngOnInit() {
    this.content = await this.jsonLoaderService.loadJson(this.src);

}
}
