import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  userLoguin: UserLogin= new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }
  entrar(){
    this.auth.entrar(this.userLoguin).subscribe((resp: UserLogin)=>{
      this.userLoguin=resp
      this.userLoguin.foto
      environment.token= this.userLoguin.token
      environment.nome= this.userLoguin.nome
      environment.foto=this.userLoguin.foto
      environment.id=this.userLoguin.id


      



      this.router.navigate(['/inicio'])
      
    }, erro =>{
      if(erro.status==500)
      alert ('usuário ou senha está incorreto')
    })

  }

}
