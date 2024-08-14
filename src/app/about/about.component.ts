import { Component, Input } from '@angular/core';
import { JsonLoaderService } from '../json-loader.service';
import { CommonModule, NgFor } from '@angular/common';
import { FullImgComponent } from "../full-img/full-img.component";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgFor, FullImgComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../page.scss']
})
export class AboutComponent {
  @Input() src: any;

  public content: any;

  constructor(private jsonLoaderService: JsonLoaderService) { }

  async ngOnInit() {
    this.content = await this.jsonLoaderService.loadJson(this.src);
  }

}