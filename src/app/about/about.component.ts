import { Component, Input } from '@angular/core';
import { JsonLoaderService } from '../json-loader.service';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../page.scss']
})
export class AboutComponent {
  @Input() src: any;

  public content: any;

  constructor(private jsonLoaderService: JsonLoaderService) { }

  async ngOnInit() {
    debugger
    this.content = await this.jsonLoaderService.loadJson(this.src);
  }

}
