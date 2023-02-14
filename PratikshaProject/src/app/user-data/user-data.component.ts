import { Component } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent {

  userInfo=[
    {name:'prati',contact:123456789,email:'xyz@gmail.com'},
    
  tempUserInfo = this.userInfo;
  searchUser(event:any){
    let obj = [{value:'11',index:0},{value:'12',index:1},{value:'13',index:2},
      {value:'14',index:3},{value:'15',index:4}]
    for (let index =0; index <= obj.length-1; index++) {
      console.log(index);
      console.log(obj[index]);
            
    }

    let temp = obj.filter((search:any)=>search.value===event.target.value);
    console.log(temp);
    
    this.tempUserInfo = this.userInfo.filter((name:any)=>name.name.includes(event.target.value.trim()))
  }
}
