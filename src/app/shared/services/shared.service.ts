import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  getFotos(id: number): Observable<any[]> {
    const url = `https://clube-dbv-1946073446dc.herokuapp.com/getFotos/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  getAvaliations(id: number): Observable<any[]> {
    const url = `https://clube-dbv-1946073446dc.herokuapp.com/getAvalatiation/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  avaliation(values: any): Observable<any[]> {
    return this.httpClient.put<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/avaliation`, values);
  }

  getComments(customer_id: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/getComments/${customer_id}`);
  }

  addComment(customer_id: number, id_User: number, comment_text: string): Observable<any> {
    return this.httpClient.post<any>(`https://clube-dbv-1946073446dc.herokuapp.com/postComment/${customer_id}`, { customer_id, id_User, comment_text });
  }

  addReply(comment_id: number, id_User: number, reply_text: string): Observable<any> {
    console.log(reply_text)
    return this.httpClient.post<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/postReply`, { comment_id, id_User, reply_text });
  }

  getReplies(commentIds: number[]): Observable<any[]> {
    return this.httpClient.post<any[]>('https://clube-dbv-1946073446dc.herokuapp.com/getReplies', { comment_ids: commentIds });
  }
}
