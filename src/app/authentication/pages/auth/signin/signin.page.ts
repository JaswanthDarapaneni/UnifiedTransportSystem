
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInputPasswordToggle, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonItem, IonBackButton, IonText, IonButton, IonInput, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { eye, lockClosed, logoGoogle } from 'ionicons/icons';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { login } from '../interfaces';

/**
 * The `SigninPage` component is the main entry point for the user authentication process in the application.
 * It provides a form with fields for mobile number and password, and handles the authentication logic.
 * The component is marked as `standalone`, which means it can be used independently without being part of a module.
 * It imports various Ionic components and modules to provide the UI and form functionality.
 */
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
  standalone: true,
  providers: [AuthService],
  imports: [IonInputPasswordToggle, IonIcon, IonInput, ReactiveFormsModule, IonSelectOption, IonButton, IonText, IonBackButton, IonItem, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SigninPage {
  
  back = '/'
  URI = 'Localhost:3000/user/login'
  user!: login;

  signinForm: FormGroup = new FormGroup({
    mobile: new FormControl('8688175159', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    password: new FormControl('J@swanth1430', [Validators.required]),
  });

  constructor(private auth_service: AuthService, private _router: Router, private http: HttpClient) {
    addIcons({
      eye: eye,
      lock_closed: lockClosed,
      logo_google: logoGoogle,
    })
  }

  GetUserData() {
    this.http.get(this.URI).subscribe((m: any) => {
      console.log(m)
    })
  }

  // Perform authentication logic hear.
  onSubmit() {
    if (this.signinForm.valid) {
      const { mobile, password } = this.signinForm.value
      this.user = { number: mobile, password: password }
      this.authenticate_user();
    }
  }
  // Just demo implement in real in feature
  // uncomment in future
  authenticate_user() {
    this._router.navigate(['/tabs']);
    // this.auth_service.login(this.user).subscribe((res: any) => {
    //   res.token ? this._router.navigate(['/home']) : this._router.navigate(['/auth/signin']);
    // })
  }

  navigateToSignup() {
    this._router.navigate(['/auth/signup']);
  }

  forgotPassword(){
    this._router.navigate(['/auth/forgot-password']);
  }

}
