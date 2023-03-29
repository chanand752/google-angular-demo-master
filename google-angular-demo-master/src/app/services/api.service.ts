import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'todos/1';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
