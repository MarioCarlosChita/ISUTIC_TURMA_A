import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { } 


  setToken(value){
   localStorage.setItem('utilizador' , JSON.stringify(value));
  }
  getToken(){
   return JSON.parse(localStorage.getItem('utilizador'));   
  } 
  

}
