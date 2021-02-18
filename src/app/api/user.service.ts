import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(public httpApi: HttpClient, public router: Router) {
    }

    login(email: string, password: string): Observable<boolean> {
        return this.httpApi
            .post('https://reqres.in/api/login', {
                email,
                password,
            })
            .pipe(
                tap((response: any) => localStorage.setItem('token', response?.token)),
                map((response: any) => !!response?.token),
                catchError(() => of(false))
            );
    }

    signup(email: string, password: string): Observable<boolean> {
        return this.httpApi
            .post('https://reqres.in/api/register', {
                email,
                password,
            })
            .pipe(
                tap((response: any) => localStorage.setItem('token', response?.token)),
                map((response: any) => !!response?.token),
                catchError(() => of(false))
            );
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('login');
    }

    getUserList() {
        return this.httpApi
            .get('https://reqres.in/api/users?page=1')
            .pipe(map((response: any) => response?.data));
    }

    getUserDetail(id: number): Observable<any> {
        return this.httpApi
            .get(`https://reqres.in/api/users/${id}`)
            .pipe(map((response: any) => response?.data));
    }

    postUserDetail(name: string, job: string): Observable<any> {
        return this.httpApi
            .post(`https://reqres.in/api/users/`, {name, email: job})
            .pipe(map((response: any) => response?.data));
    }

    deleteUserDetail(id: number): Observable<any> {
        return this.httpApi
            .delete(`https://reqres.in/api/users/${id}`)
            .pipe(map((response: any) => response?.data));
    }

    isMinPrice(price: number): boolean {
        const priceRef = 12;
        return price < priceRef;
    }
}
