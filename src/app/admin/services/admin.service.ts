import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  challengeData: any;
  member: any;


  constructor(private httpClient: HttpClient) { }


  creatChallenge(challenge: any): Observable<any> {
    return this.httpClient.post<any>('https://clube-dbv-1946073446dc.herokuapp.com/creatChallenge', challenge);
  }
  
  getCustomers(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://clube-dbv-1946073446dc.herokuapp.com/getcustomers');
  }

  getCategorias(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://clube-dbv-1946073446dc.herokuapp.com/getCategorias');
  }

  getRoles(): Observable<any[]> {
    return this.httpClient.get<any[]>('https://clube-dbv-1946073446dc.herokuapp.com/getRoles');
  }

  editEstabelecimento(editCustomer: any): Observable<any> {
    return this.httpClient.put<any>('https://clube-dbv-1946073446dc.herokuapp.com/editCustomerViewAdm', editCustomer);
  }

  deleteEstabelecimento(deletedCustomer: any): Observable<any> {
    return this.httpClient.put<any>('https://clube-dbv-1946073446dc.herokuapp.com/deleteCustomer', deletedCustomer);
  }

  getAddressByCep(cep: string): Observable<any> {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    return this.httpClient.get(apiUrl);
  }

  getChallenges(): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/getChallenges`);
  }

  getChallengeById(id: any): Observable<any>{
    return this.httpClient.get<any>(`https://clube-dbv-1946073446dc.herokuapp.com/getChallengeById/${id}`)
  }

  updateChallenge(editChallenge: any): Observable<any> {
    return this.httpClient.put<any>('https://clube-dbv-1946073446dc.herokuapp.com/updateChallenge', editChallenge);
  }

  registerMember(member: any): Observable<any> {
    return this.httpClient.post<any>('https://clube-dbv-1946073446dc.herokuapp.com/registerMember', member);
  }


  getPositions(): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/getPositions`);
  }
  
  getMembers(): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/getMembers`);
  }
  
  getInactiveMembers(): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/getInactiveMembers`);
  }

  setMember(member: any) {
    this.member = member;
  }

  getMember() {
    return this.member;
  }

  getMembersbyId(id: any): Observable<any>{
    return this.httpClient.get<any>(`https://clube-dbv-1946073446dc.herokuapp.com/getMembersbyId/${id}`)
  }

  editMember(editMember: any): Observable<any> {
    return this.httpClient.put<any>('https://clube-dbv-1946073446dc.herokuapp.com/editMember', editMember);
  }

  getStatusMember(id: any): Observable<any>{
    return this.httpClient.get<any>(`https://clube-dbv-1946073446dc.herokuapp.com/getStatusMember/${id}`)
  }

  changeStatus(data: any): Observable<any>{
    return this.httpClient.put<any>(`https://clube-dbv-1946073446dc.herokuapp.com/changeStatus/`, data)
  }

  filterMemberName(data: any): Observable<any> {
    return this.httpClient.post<any>(`https://clube-dbv-1946073446dc.herokuapp.com/filterMemberName`, data);
  }

  filterMemberNameInactive(data: any): Observable<any> {
    return this.httpClient.post<any>(`https://clube-dbv-1946073446dc.herokuapp.com/filterMemberNameInactive`, data);
  }

  getUnits(): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/getUnits`);
  }

  createUnit(data: any): Observable<any> {
    return this.httpClient.post<any>(`https://clube-dbv-1946073446dc.herokuapp.com/createUnit`, data);
  }

  getUnitbyId(id: any): Observable<any>{
    return this.httpClient.get<any>(`https://clube-dbv-1946073446dc.herokuapp.com/getUnityById/${id}`)
  }

  updateUnit(data: any): Observable<any>{
    return this.httpClient.put<any>(`https://clube-dbv-1946073446dc.herokuapp.com/updateUnit/`, data)
  }


  getTools(): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/getTools`);
  }

  createTool(data: any): Observable<any> {
    return this.httpClient.post<any>(`https://clube-dbv-1946073446dc.herokuapp.com/createTool`, data);
  }

  getToolsById(id: any): Observable<any>{
    return this.httpClient.get<any>(`https://clube-dbv-1946073446dc.herokuapp.com/getToolsById/${id}`)
  }

  updateTools(data: any): Observable<any>{
    return this.httpClient.put<any>(`https://clube-dbv-1946073446dc.herokuapp.com/updateTools/`, data)
  }

  updateStatusTools(data: any): Observable<any>{
    return this.httpClient.put<any>(`https://clube-dbv-1946073446dc.herokuapp.com/updateT/`, data)
  }

  getNameUnits(): Observable<any[]>{
    return this.httpClient.get<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/getNameUnits`);
  }

  createEstabelecimento(estabelecimentoData: any): Observable<any> {
    return this.httpClient.post<any>('https://clube-dbv-1946073446dc.herokuapp.com/creatEstabelicimento', estabelecimentoData);
  }

  getCustumerById(id: number): Observable<any[]> {
    const url = `https://clube-dbv-1946073446dc.herokuapp.com/getcustomersById/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  private formEditValuesSource = new BehaviorSubject<any>(null);
  formEditValues$ = this.formEditValuesSource.asObservable();

  setFormEditValues(values: any) {
    this.formEditValuesSource.next(values);
  }

  getStatus(id: number): Observable<any[]> {
    const url = `https://clube-dbv-1946073446dc.herokuapp.com/getStatus/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  setStatus(status: any): Observable<any> {
    return this.httpClient.put<any>('https://clube-dbv-1946073446dc.herokuapp.com/deleteCustomer', status);
  }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    return this.httpClient.post('sua/url/de/upload', formData);
  }
  
  getProfilePicture(id: number): Observable<any[]>{
    const url = `https://clube-dbv-1946073446dc.herokuapp.com/getProfilePicture/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  getFotos(id: number): Observable<any[]>{
    const url = `https://clube-dbv-1946073446dc.herokuapp.com/getFotos/${id}`;
    return this.httpClient.get<any[]>(url);
  }

  editProfilePicture(editProfilePicture: any): Observable<any> {
    return this.httpClient.put<any>('https://clube-dbv-1946073446dc.herokuapp.com/editProfilePicture', editProfilePicture);
  }
  
  addphotos(fotos: any): Observable<any>{
    return this.httpClient.put<any>('https://clube-dbv-1946073446dc.herokuapp.com/editPhotos', fotos);
  }

  deleteImage(value: any): Observable<any[]>{
    return this.httpClient.put<any[]>(`https://clube-dbv-1946073446dc.herokuapp.com/deleteImage`, value)
  }
}
