import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(private httpClient: HttpClient) { }

  getMembersbyId(id: any): Observable<any>{
    return this.httpClient.get<any>(`https://clube-dbv-1946073446dc.herokuapp.com/getMembersbyId/${id}`)
  }

  editMember(editMember: any): Observable<any> {
    return this.httpClient.put<any>('https://clube-dbv-1946073446dc.herokuapp.com/editMember', editMember);
  }
}
