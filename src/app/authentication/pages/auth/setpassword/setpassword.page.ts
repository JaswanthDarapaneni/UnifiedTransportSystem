import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonInputPasswordToggle, IonContent, IonHeader, IonTitle, IonToolbar, IonText, IonItem, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';

/**
 * The `SetPasswordPage` component is responsible for handling the user's password reset functionality.
 * It includes a form with fields for the new password and confirmation, as well as methods to validate the input and update the password in the database.
 * The component is marked as `standalone`, meaning it can be used independently without being part of a module.
 * It imports various Ionic and Angular modules and components to provide the necessary functionality and UI elements.
 */
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.page.html',
  styleUrls: ['./setpassword.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonInput, IonInputPasswordToggle, ReactiveFormsModule, IonButton, IonItem, IonText, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SetPasswordPage implements OnInit {
  validateMissingElements: string[] = [];
  validateBothElements: string[] = [];

  passwordFrom: FormGroup = new FormGroup({
    password: new FormControl('J@swanth1', [Validators.required]),
    reTypePassword: new FormControl('J@swanth1', [Validators.required,]),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.passwordFrom.get('password')?.valueChanges.subscribe(value => {
      this.passwordValidation(value)
    });
    this.passwordFrom.get('reTypePassword')?.valueChanges.subscribe(value => {
      this.validateBothPassword()
    });
  }

  onSubmit() {
    this.updatePassword(this.passwordFrom.get('password')?.value)
  }

  /**
   * Updates the user's password in the database.
   *
   * @param password - The new password to be set for the user.
   * @returns An observable that emits the response from the server when the password is updated successfully, or an error if the update fails.
   */

  updatePassword(password: string) {
    this.http.put('http://localhost:3000/api/v1/users/password', { password: password }).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Validate both password match or not give code
  private validateBothPassword() {
    if (this.passwordFrom.get('password')?.value != this.passwordFrom.get('reTypePassword')?.value) {
      this.validateBothElements.push("Passwords don't match");
    } else {
      this.validateBothElements = [];
    }
  }

  private passwordValidation(password: string) {
    let hasLowercase = /^(?=.*[a-z])/.test(password);
    let hasUppercase = /^(?=.*[A-Z])/.test(password);
    let hasNumber = /^(?=.*\d)/.test(password);
    let hasSpecialChar = /^(?=.*[@$!%*?&])/.test(password);
    let hasMinLength = password.length >= 8;

    if (hasLowercase && hasUppercase && hasNumber && hasSpecialChar && hasMinLength) {
      this.validateMissingElements = [];
      return true;
    } else {
      this.validateMissingElements = [];
      if (!hasLowercase) this.validateMissingElements.push("lowercase letter");
      if (!hasUppercase) this.validateMissingElements.push("uppercase letter");
      if (!hasNumber) this.validateMissingElements.push("number");
      if (!hasSpecialChar) this.validateMissingElements.push("special character");
      if (!hasMinLength) this.validateMissingElements.push("minimum length of 8 characters");
      return `${this.validateMissingElements.join(", ")}.`;
    }
  }


}
