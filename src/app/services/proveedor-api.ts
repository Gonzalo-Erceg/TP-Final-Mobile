import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProveedorAPI {
  constructor(private http: HttpClient) {}

  LlamarAPI() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
