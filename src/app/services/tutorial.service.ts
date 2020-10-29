import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8000/tutorials'

@Injectable({
  providedIn: 'root'
})



export class TutorialService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(baseUrl);
  }

  get(id){
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data) {
    return this.http.post(baseUrl,data)
  }
  update(id,data):Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`,data);
  }
  delete(id): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(baseUrl);
  }
  findByTitle(title):Observable<any>{
    return this.http.get(`${baseUrl}?title=${title}`)
  }
}
