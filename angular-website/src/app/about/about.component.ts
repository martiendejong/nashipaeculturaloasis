import { Component, Input, OnInit } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';
import { JsonLoaderService } from '../json-loader.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FullImgComponent, NgFor, NgIf],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../page.scss']
})
export class AboutComponent implements OnInit {

  @Input() src: string = '../../assets/about.json';

  public content: any[] = [];  // Ensure content is an array

  constructor(private jsonLoaderService: JsonLoaderService) { }

  async ngOnInit() {
    try {
      this.content = await this.jsonLoaderService.loadJson(this.src);
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  }
}