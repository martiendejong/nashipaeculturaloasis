import { Injectable } from '@angular/core';
import { Router } from 'express';

@Injectable({
  providedIn: 'root',
})
export class Scroll {

  constructor() { 
  }

  static readonly view  = {
    frontPage: "frontpage",
    transitioning: "transitioning",
    otherPage: "otherpage"
  };

  view: string = Scroll.view.frontPage;

  onWindowScroll() {
    if(typeof window === 'undefined') return;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.view = scrollPosition < window.innerHeight * 46 / 50 ? Scroll.view.frontPage 
      : scrollPosition < window.innerHeight * 49 / 50 ? Scroll.view.transitioning
      : Scroll.view.otherPage;
  }
}