import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient) { }

  public getAllImages(): Observable<Image[]> {
    return this.httpClient.get<Image[]>("http://localhost:52088/api/images");
  }

}