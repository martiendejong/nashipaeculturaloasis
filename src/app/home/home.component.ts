import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FullImgComponent } from '../full-img/full-img.component';
import { CarouselCycleComponent } from "../carousel-cycle/carousel-cycle.component";
import { NgFor, NgIf }from '@angular/common';
import { JsonLoaderService } from '../json-loader.service';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss', '../page.scss'],
    providers: [{provide: HttpClient, useFactory: provideHttpClient}],
    imports: [FullImgComponent, CarouselCycleComponent, NgFor, NgIf, HttpClientModule]
})
export class HomeComponent implements OnInit {
  @ViewChild(CarouselCycleComponent) carousel!: CarouselCycleComponent;

  @Input() src: any;

  public content: any;

  constructor(private jsonLoaderService: JsonLoaderService) { }

  async ngOnInit() {
    this.content = await this.jsonLoaderService.loadJson(this.src);
  }
}