import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenServiceService } from './TokenService/token-service.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token.getToken().access_token
    })
  };



  constructor(private http : HttpClient , private token :TokenServiceService) {
     
  }


  Adicionar(value):Observable<any>{ 
    // A variavel value  é o objecto com os dados do funcionario
    return this.http.post<any>(environment.URL +'/Adicionar-funcionario',value,this.httpOptions)
  }

  Listar():Observable<any>{
    return this.http.get<any>(environment.URL+"/Listar-funcionario", this.httpOptions);
  }

  Deletar(id):Observable<any>{
    return this.http.delete<any>(environment.URL+"/Deletar-funcionario/"+id,this.httpOptions);
  }

  Visualizar(id){
    return this.http.get<any>(environment.URL+"/Visualizar-funcionario/"+id,this.httpOptions);
  }
  
}
