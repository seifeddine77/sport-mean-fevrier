import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  players:any;
  signupForm:FormGroup;
  constructor(private  FormBuilder:FormBuilder,
            private userService:UserService
    ) { }

  ngOnInit() {
    this.signupForm=this.FormBuilder.group(
      {
        firstName:['',[Validators.minLength(3),Validators.required]],
        lastName:['',[Validators.minLength(5),Validators.required]],
        email:['',[Validators.email,Validators.required]],
        pwd:['',[Validators.minLength(8),Validators.required]],
        confirmPwd:[''],
      }
    )
  }
  signup(x){
    console.log('btn Clicked',x);
    this.userService.signup(x).subscribe(
      ()=>{
        console.log('singup with success');
      }
    )
      
    
    
  }


}
