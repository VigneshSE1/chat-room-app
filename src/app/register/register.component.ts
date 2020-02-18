import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { MustMatch } from '../must-match/validate-password';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) {

  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],

    }, {
      validator: MustMatch('password', 'confirmpassword')
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      this.emailCheck();
    }
  }

  emailCheck() {

    //var data = this.registerForm.value;
    this.http.get("http://localhost:3500/register", this.registerForm.value)
      .subscribe((data: any) => {
        console.log(data);
      },
        (err) => {
          console.log(err);
        })
  }

}
