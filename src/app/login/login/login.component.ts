import { Component, OnInit } from '@angular/core';
import * as uikit from 'uikit';
import  {FormBuilder , FormGroup , Validators, Validator} from '@angular/forms';
import $ from 'jquery';
import { LoginserviceService } from 'src/app/loginservice/loginservice.service';
import {Router}  from  '@angular/router';
import { TokenServiceService } from 'src/app/TokenService/token-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  FormularioLogin: FormGroup; 
  FormularioRegistro: FormGroup; 


  constructor(
      formulario: FormBuilder,
      private loginservico: LoginserviceService ,
      private router:Router , 
      private token :  TokenServiceService
      ) {
      this.FormularioLogin =  formulario.group({
        usuario: ['' ,Validators.required] ,  
        password: ['', Validators.required]
      }
      ) ; 
       
      this.FormularioRegistro    = formulario.group({
         primeiro_nome  : ['' ,Validators.required] , 
         ultimo_nome : ['',Validators.required] , 
         email: ['',Validators.required ],
         senha: ['',Validators.required ],
         
      })
   }

  ngOnInit(): void { 
     
  }
 
  showAlert(): void {
    console.log("Foi clicado aqui!");  
  }

   autenticacao(){
       if(this.FormularioLogin.invalid){
             console.log("Ola a todos os compomentes");
             return ; 
       }else{
        uikit.modal("#modal-example1",{center: true, stack: true}).show();
     
         let  usuario = { 
             email:this.FormularioLogin.controls.usuario.value, 
             password:this.FormularioLogin.controls.password.value
           }; 

         this.loginservico.autenticacao(usuario).subscribe(
           dados=>{
          
            this.token.setToken(dados);
            uikit.modal("#modal-example1",{center: true, stack: true}).hide();    
            this.router.navigateByUrl("/welcome");
            
           }, 
           error=>{ 
            uikit.modal("#modal-example1",{center: true, stack: true}).hide();    
            uikit.modal.alert('Erro de Credencias tenta novamente!'); 
           }
           ); 

         
       }
      
   }

   limpar(){
       this.FormularioRegistro.reset();
   }

   registra(){
        uikit.modal("#modal-example",{center: true, stack: true}).show();
   }  

   cadastrar(){
    uikit.modal("#modal-example",{center: true, stack: true}).hide(); 
    uikit.modal("#modal-example1",{center: true, stack: true}).show(); 

       let usuarioadd = {
        firstname: this.FormularioRegistro.controls.primeiro_nome.value , 
        lastname: this.FormularioRegistro.controls.ultimo_nome.value , 
        email:this.FormularioRegistro.controls.email.value ,  
        password:this.FormularioRegistro.controls.senha.value, 
        roles:[1]    
       }
       this.loginservico.cadastrar(usuarioadd).subscribe(
           dados=>{




            uikit.modal("#modal-example1",{center: true, stack: true}).hide();
            uikit.modal.alert('Cadastrado Com Sucesso');
            this.FormularioRegistro.reset();

            

          },error=>{

            uikit.modal("#modal-example1",{center: true, stack: true}).hide();
            uikit.modal.alert('Erro de Cadastro de Usuario'); 
            this.FormularioRegistro.reset();

            
          });
      
   }
}
