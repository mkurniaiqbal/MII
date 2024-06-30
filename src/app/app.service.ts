import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import  axios  from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteData(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  addData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  editData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }
}
