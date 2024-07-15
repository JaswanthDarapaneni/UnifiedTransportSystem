import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input'
import { user } from '../interfaces';
import { AuthService } from '../auth.service';

/**
 * The `VerificationPage` component is responsible for handling the verification process
 * in the authentication flow of the application. It allows users to enter an OTP (One-Time
 * Password) code and submit it for verification. The component also provides functionality
 * to resend the OTP code if needed.
 *
 * The component has the following methods:
 * - `onOtpChange($event: string)`: Handles the change event of the OTP input and updates the `otp` property.
 * - `otpVerification()`: Performs the verification logic for the entered OTP code. Currently, it always returns `true`.
 * - `onSubmit()`: Handles the submission of the OTP code. It checks if the OTP code length is 5 characters, calls `otpVerification()`, and navigates to the `/auth/setpassword` route if the verification is successful.
 * - `resendCode()`: Adds logic to resend the OTP code.
 */
@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
  standalone: true,
  providers: [AuthService],
  imports: [NgOtpInputModule, IonInput, ReactiveFormsModule, IonBackButton, IonButtons, IonButton, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})

export class VerificationPage {
  @ViewChild(NgOtpInputComponent, { static: false }) ngOtpInput!: NgOtpInputComponent;
  protected back: any;
  protected otp: string = '';
  protected verificationForm!: FormGroup;
  protected user!: user;

  constructor(private auth_service: AuthService, private route: ActivatedRoute, private _router: Router) {
    const userString = localStorage.getItem('user');
    this.user = userString ? JSON.parse(userString) : null;
  }

  protected onOtpChange($event: string) {
    this.otp = $event;
  }

  protected onSubmit() {
    this.otp.length === 5 ? this.otpVerification() : false;
  }

  protected otpVerification() {
    // Implement verification logic
    // this.auth_service.verify(this.user).subscribe((res: any) => {
    //   res != null ? this._router.navigate(['/auth/main']) : this.ngOtpInput.setValue(''); this.otp = '';
    // })
  }

  protected resendCode() {
    // Add logic to resend the OTP code
    // this.auth_service.resendCode(this.user);
    this.ngOtpInput.setValue('');
  }

}
