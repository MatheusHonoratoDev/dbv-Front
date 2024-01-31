import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyUnityService {
  member: any;
  private readonly API = 'https://clube-dbv-1946073446dc.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  setMember(member: any) {
    this.member = member;
  }

  getMember() {
    return this.member;
  }

  getMembersByUnitId(id: any): Observable<any>{
    return this.httpClient.get<any>(`${this.API}/getMembersByUnitId/${id}`)
  }

  addPoints(data: any){
    return this.httpClient.post<any>(`${this.API}/addPoints`, { data })
  }
}
