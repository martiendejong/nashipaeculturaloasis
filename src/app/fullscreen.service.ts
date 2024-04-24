import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullScreen {

  constructor() { }
  public isFullScreen = false;
  public subject: any;
  toggle(subject: any) {
    if(subject == this.subject) { 
      this.isFullScreen = false;
      this.subject = null;
      return;
    }
    this.isFullScreen = true;
    this.subject = subject;
  }
}
