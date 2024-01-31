import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  challengeData: any;
  member: any;

  private readonly API = 'https://clube-dbv-1946073446dc.herokuapp.com';


  constructor(private httpClient: HttpClient) { }


  creatChallenge(challenge: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API}/creatChallenge`, challenge);
  }

  getRoles(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.API}/getRoles`);
  }

  getChallenges(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API}/getChallenges`);
  }

  getChallengeById(id: any): Observable<any>{
    return this.httpClient.get<any>(`${this.API}/getChallengeById/${id}`)
  }

  updateChallenge(editChallenge: any): Observable<any> {
    return this.httpClient.put<any>(`${this.API}/updateChallenge`, editChallenge);
  }

  registerMember(member: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API}/registerMember`, member);
  }

  getPositions(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API}/getPositions`);
  }
  
  getMembers(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API}/getMembers`);
  }
  
  getInactiveMembers(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API}/getInactiveMembers`);
  }

  setMember(member: any) {
    this.member = member;
  }

  getMember() {
    return this.member;
  }

  getMembersbyId(id: any): Observable<any>{
    return this.httpClient.get<any>(`${this.API}/getMembersbyId/${id}`)
  }

  editMember(editMember: any): Observable<any> {
    return this.httpClient.put<any>(`${this.API}/editMember`, editMember);
  }

  getStatusMember(id: any): Observable<any>{
    return this.httpClient.get<any>(`${this.API}/getStatusMember/${id}`)
  }

  changeStatus(data: any): Observable<any>{
    return this.httpClient.put<any>(`${this.API}/changeStatus/`, data)
  }

  filterMemberName(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API}/filterMemberName`, data);
  }

  filterMemberNameInactive(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API}/filterMemberNameInactive`, data);
  }

  getUnits(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API}/getUnits`);
  }

  createUnit(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API}/createUnit`, data);
  }

  getUnitbyId(id: any): Observable<any>{
    return this.httpClient.get<any>(`${this.API}/getUnityById/${id}`)
  }

  updateUnit(data: any): Observable<any>{
    return this.httpClient.put<any>(`${this.API}/updateUnit/`, data)
  }

  getTools(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API}/getTools`);
  }

  createTool(data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API}/createTool`, data);
  }

  getToolsById(id: any): Observable<any>{
    return this.httpClient.get<any>(`${this.API}/getToolsById/${id}`)
  }

  updateTools(data: any): Observable<any>{
    return this.httpClient.put<any>(`${this.API}/updateTools/`, data)
  }

  updateStatusTools(data: any): Observable<any>{
    return this.httpClient.put<any>(`${this.API}/updateT/`, data)
  }

  getNameUnits(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.API}/getNameUnits`);
  }

  createEstabelecimento(estabelecimentoData: any): Observable<any> {
    return this.httpClient.post<any>(`${this.API}/creatEstabelicimento`, estabelecimentoData);
  }

  getCustumerById(id: number): Observable<any[]> {
    const url = `${this.API}/getcustomersById/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  private formEditValuesSource = new BehaviorSubject<any>(null);
  formEditValues$ = this.formEditValuesSource.asObservable();

  setFormEditValues(values: any) {
    this.formEditValuesSource.next(values);
  }

  getStatus(id: number): Observable<any[]> {
    const url = `${this.API}/getStatus/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  setStatus(status: any): Observable<any> {
    return this.httpClient.put<any>(`${this.API}/deleteCustomer`, status);
  }
  
  getProfilePicture(id: number): Observable<any[]>{
    const url = `${this.API}/getProfilePicture/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  editProfilePicture(editProfilePicture: any): Observable<any> {
    return this.httpClient.put<any>(`${this.API}/editProfilePicture`, editProfilePicture);
  }
  
  addphotos(fotos: any): Observable<any>{
    return this.httpClient.put<any>(`${this.API}/editPhotos`, fotos);
  }

  deleteImage(value: any): Observable<any[]>{
    return this.httpClient.put<any[]>(`${this.API}/deleteImage`, value)
  }
}
