import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;

  constructor( private fb:FormBuilder, private auth: AuthService , private router:Router){ }

  ngOnInit(): void {
    
  
  this.signupForm=this.fb.group({
      name:new FormControl ("",[Validators.required, Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
      email:new FormControl ("",[Validators.required,Validators.email]),
      birthdate:new FormControl ("",[Validators.required]),
      address:new FormControl ("",[Validators.required]),
      city:new FormControl ("",[Validators.required]),
      country:new FormControl ("",[Validators.required]),
      gender:new FormControl ("",[Validators.required]),
      courses:new FormControl ("",[Validators.required]),
      password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
      status:new FormControl("",[Validators.required])
 });
}

registerSubmit(){
  if(this.signupForm.valid){
    this.auth.signup(this.signupForm.value)
    .subscribe({
      next:(res=>{
        alert(res.message);
        this.signupForm.reset();
        this.router.navigate(['login']);
      }),
      error:(err=>{
        alert(err?.error.message)
      })
       
    })
  console.log(this.signupForm.value);
  }else{

  }

  
  
}

get Name():FormControl{
  return this.signupForm.get("name") as FormControl;
}

get Email():FormControl{
  return this.signupForm.get("email") as FormControl;
}

get Address():FormControl{
  return this.signupForm.get("address") as FormControl;
}

get City():FormControl{
  return this.signupForm.get("city") as FormControl;
}

get Country():FormControl{
  return this.signupForm.get("country") as FormControl;
}

get Gender():FormControl{
  return this.signupForm.get("gender") as FormControl;
}

get Status():FormControl{
  return this.signupForm.get("status") as FormControl;
}

get Courses():FormControl{
  return this.signupForm.get("courses") as FormControl;
}

get Birthdate():FormControl{
  return this.signupForm.get("birthdate") as FormControl;
}

get Password():FormControl{
  return this.signupForm.get("password") as FormControl;
}
}
