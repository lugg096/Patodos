import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forminvitacion',
  templateUrl: './forminvitacion.component.html',
  styleUrls: ['./forminvitacion.component.css']
})
export class ForminvitacionComponent implements OnInit {

  constructor() { }

  title = 'FormValidation';
  mobNumberPattern = "^((\\+51-?)|0)?[0-9]{11}$";
  isValidFormSubmitted = false;
  user = new User();


  onFormSubmit(form: NgForm) {
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    form.resetForm();
  }
}

export class User {
  mobileNumber?: string;
}



 