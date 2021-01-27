import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  constructor(private http: HttpClient) {}

  cadastrar(value): Observable<any> {
    console.log(value);
    
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let Add = this.http.post<any>(environment.URL + '/register', value, {
      headers,
    });
    return Add;
  }

  autenticacao(value): Observable<any> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let Add = this.http.post<any>(environment.URL + '/login', value, {
      headers,
    });
    return Add;
  }
}
