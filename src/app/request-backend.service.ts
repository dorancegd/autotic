import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestBackendService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('http://[::1]:3000/vehiculos' );
  }
}
