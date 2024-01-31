import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private readonly API = 'https://clube-dbv-1946073446dc.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

}
