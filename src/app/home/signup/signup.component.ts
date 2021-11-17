import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private userService: UserService) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z]+[0-9]*$/),
          Validators.minLength(5),
          Validators.maxLength(30)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16)
        ]
      ]
    })
  }

  signup() {
    const newUser = this.signupForm.getRawValue();
    this.signupService
      .signup(newUser)
      .subscribe(
          () => {
            alert("Congratulations, You've been registrated! Now, let's log in!");
            this.userService.logout();
            this.router.navigate(['/auth']);
          },
          err =>
              alert('Could not register. Either this e-mail is already in use or this user already exists in Alurapic.')
      );
  }
}
