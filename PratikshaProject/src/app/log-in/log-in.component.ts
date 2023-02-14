import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

// global variable
globalPath:any;

  constructor(private router:Router){
    this.globalPath='/users';
  }

  

  onSubmit(data:any){ // function/method
    
    this.router.navigateByUrl(this.globalPath);
  }

  testing(){
    console.log(this.globalPath);
    
  }
}
