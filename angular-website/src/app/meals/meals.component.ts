import { Component, Input } from '@angular/core';
import { FullImgComponent } from "../full-img/full-img.component";
import { JsonLoaderService } from '../json-loader.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-meals',
    standalone: true,
    templateUrl: './meals.component.html',
    styleUrls: ['./meals.component.scss', '../page.scss'],
    imports: [FullImgComponent, NgIf, NgFor]
})
export class MealsComponent {
    @Input() src: any;

    public content: any;
  
    constructor(private jsonLoaderService: JsonLoaderService) { }
  
    async ngOnInit() {
      this.content = await this.jsonLoaderService.loadJson(this.src);
    }
}
