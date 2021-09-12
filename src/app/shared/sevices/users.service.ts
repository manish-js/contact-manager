import { UsersInterface } from './../interfaces/users.interface';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class UsersService {
    userData: UsersInterface[] = [] as UsersInterface[];
    isUserLoggedIn = false;

    saveUserDetails(users: UsersInterface[]): void {
        this.userData = users;
    }

    getAllUsers(): UsersInterface[] {
        return this.userData;
    }

    setuserLoggedIn(loginStatus: boolean): void {
        this.isUserLoggedIn = loginStatus;
    }

    isUserAuthenticated(): boolean {
        return this.isUserLoggedIn;
    }
}
