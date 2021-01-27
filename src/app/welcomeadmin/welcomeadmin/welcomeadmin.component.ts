import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TokenServiceService } from 'src/app/TokenService/token-service.service';
import { DOCUMENT } from '@angular/common'; 
import $ from 'jquery';
import * as uikit from 'uikit';
import { FormGroup } from '@angular/forms';

import {FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-welcomeadmin',
  templateUrl: './welcomeadmin.component.html',
  styleUrls: ['./welcomeadmin.component.css'],
})
export class WelcomeadminComponent implements OnInit {
 
  Formulario : FormGroup ;

  USUARIOLOAGADO : any  ; 

  constructor(
    private token: TokenServiceService,
    private router: Router , 
    @Inject(DOCUMENT) private _document: Document ,
    private formbuilder : FormBuilder
    
    ) {
        this.Formulario = this.formbuilder.group({
             nome: ['',Validators.required]
        });
    }
  

  ngOnInit(): void {
     this.USUARIOLOAGADO    =  this.token.getToken();  
  }


  adicionar(){
    uikit.modal("#cadastrar",{center: true, stack: true}).show();
  }

  
  perfil(){
    uikit.modal("#perfil",{center: true, stack: true}).show();
  }
 


  
}
