import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router:Router){
  }

  redirect(name:any){
    this.router.navigateByUrl(name);
  }
  
  nonPara(){
    alert('nonParameterized method')
  }

  paraMeterizedM(name :any){ // after : its parameter defination
    alert(name.toUpperCase())
  }
}
