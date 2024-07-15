import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonSelect, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonBackButton, IonButtons, IonTextarea, IonText } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { VerificationPage } from '../verification/verification.page';
import { user } from '../interfaces';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  providers: [AuthService],
  imports: [ReactiveFormsModule, FormsModule, IonText, IonTextarea, IonButtons, IonBackButton, IonSelect, IonSelectOption, IonButton, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SignupPage {
  back = '/'

  signupForm!: FormGroup;

  constructor(private auth_service: AuthService, private _router: Router, private fb: FormBuilder) {
    this.init();
    this.auth_service.removeUser();
  }
  init() {
    this.signupForm = this.fb.group({
      name: ['ddd', Validators.required],
      email: ['d@gmail.com', [Validators.required, Validators.email]],
      mobile: ['1234567891', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['other', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { name, mobile, gender, email, terms } = this.signupForm.value;
      const user: user = {
        email: email,
        name: name,
        number: mobile,
        gender: gender,
        terms: "true"
      }
      localStorage.setItem('user', JSON.stringify(user));
      this.navigateToVerification();
    }
  }
  private navigateToVerification() {
    const queryParams = { back: '/auth/signup' };
    this._router.navigate(['/auth/verification'], { queryParams });
  }
  navigateToSignin() {
    this._router.navigate(['/auth/signin']);
  }

}
