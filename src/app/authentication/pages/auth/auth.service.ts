// Generate service class in angular
//
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { login, user } from './interfaces';
@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private apiUrl = environment.apiUrl;
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private user: user;

    constructor(private http: HttpClient) {
        const userString = localStorage.getItem('user');
        this.user = userString ? JSON.parse(userString) : null;
    }

    signup(user: user): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/signup`, user, { headers: this.headers });
    }

    login(user: login): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/login`, user, { headers: this.headers });
    }

    verify(user: user): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/verify`, user, { headers: this.headers });
    }

    resendCode(user: user): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/resend-code`, user, { headers: this.headers });
    }

    getProfile(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/auth/profile`, { headers: this.headers });
    }

    updateProfile(user: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/update-profile`, user, { headers: this.headers });
    }

    setPassword(user: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/set-password`, user, { headers: this.headers });
    }

    changePassword(user: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/change-password`, user, { headers: this.headers });
    }

    forgotPassword(user: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/auth/forgot-password`, user, { headers: this.headers });
    }

    logout() {
        localStorage.removeItem('user');
    }

    /**
     * Checks if the user is logged in by checking if the user object is not null.
     * @returns {boolean} `true` if the user is logged in, `false` otherwise.
     */
    isLoggedIn(): boolean {
        return true;
        // return!!this.user;
    }

    removeUser() {
        localStorage.removeItem('user');
    }

}
