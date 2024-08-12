import { Component, Input } from '@angular/core';
import { JsonLoaderService } from '../json-loader.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../page.scss']
})
export class ContactComponent {
  @Input() src: any;

  public content: any;

  constructor(private jsonLoaderService: JsonLoaderService) { }

  async ngOnInit() {
    this.content = await this.jsonLoaderService.loadJson(this.src);
  }

}
