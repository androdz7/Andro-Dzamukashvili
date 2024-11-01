import { Component, OnInit } from '@angular/core';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DisplayService } from './services/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Andro Dzamukashvili';

  Users = [
    {
      firstname: "Andro",
      lastname: "Dzamukashvili",
      age: 18
    },
    {
      firstname: "Irakli",
      lastname: "Chkheidze",
      age: 19
    },
    {
      firstname: "Luka",
      lastname: "Kiknadze",
      age: 21
    },
    {
      firstname: "Lizi",
      lastname: "Chkhutiashvili",
      age: 25
    }
  ];

  Users2: ParentUser[] = [
    { 
      Id: 1,
      Firstname: 'Dachi',
      Lastname: 'Orpexashvili',
      DateOfBirth: new Date("2004-05-15"),
      PhoneNumber: '123456789',
      Email: 'Dachi123Dachi@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Elizabedi',
      Lastname: 'Phevadze',
      DateOfBirth: new Date("2001-06-01"),
      PhoneNumber: '987654321',
      Email: 'phevadzeE@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Gela',
      Lastname: 'Gegechkori',
      DateOfBirth: new Date("2005-02-07"),
      PhoneNumber: '123456789',
      Email: '12309asdasd@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Luka',
      Lastname: 'neparidze',
      DateOfBirth: new Date("2005-21-024"),
      PhoneNumber: '123456789',
      Email: 'Neparidze123@gmail.com'
    },
    { 
      Id: 1,
      Firstname: 'Giorgi',
      Lastname: 'Ghlonti',
      DateOfBirth: new Date("1978-08-023"),
      PhoneNumber: '123456789',
      Email: 'Gghlonti@gmail.com'
    }, 
  ];

  Users3: ChildUser[] = [
    {
      Firstname: "Andro",
      Lastname: "Dzamukashvili",
      DateOfBirth: new Date("2001-06-01"),
      Id: 0,
      PhoneNumber: '',
      Email: ''
    },
    {
      Firstname: "Irakli",
      Lastname: "Chkheidze",
      DateOfBirth: new Date("2001-06-01"),
      Id: 0,
      PhoneNumber: '',
      Email: ''
    },
    {
      Firstname: "Luka",
      Lastname: "Kiknadze",
      DateOfBirth: new Date("2001-06-01"),
      Id: 0,
      PhoneNumber: '',
      Email: ''
    },
    {
      Firstname: "Lizi",
      Lastname: "Chkhutiashvili",
      DateOfBirth: new Date("2001-06-01"),
      Id: 0,
      PhoneNumber: '',
      Email: ''
    }
  ];

  onInputDataChange(v : ChildUser[]){
   this.Users3 = v;
  }
  
  form?: FormGroup;

  ngOnInit(){
      this.form = new FormGroup({
        Id: new FormControl(null,Validators.required),
        Firstname: new FormControl(null,[Validators.required, Validators.minLength(3)]),
        Lastname: new FormControl(null,[Validators.required, Validators.minLength(3)]),
        DateOfBirth: new FormControl(null,[Validators.required]),
        PhoneNumber: new FormControl(null,[Validators.required, Validators.minLength(9)]),
        Email: new FormControl(null,[Validators.required, Validators.minLength(8), Validators.email]),
      })
  }
  Users4: ChildUser[] = [];
  onSubmit(){
    this.Users4.push(this.form?.value);
    console.log(this.Users4)
  }

}
