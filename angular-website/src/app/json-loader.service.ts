import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonLoaderService {

  constructor(private http: HttpClient) { }

  loadJson(url: string): Promise<any> {
    return firstValueFrom(this.http.get(url));
  }
}
