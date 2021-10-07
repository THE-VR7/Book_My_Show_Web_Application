import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let AuthenticationService = class AuthenticationService {
    constructor(router, httpservice) {
        this.router = router;
        this.httpservice = httpservice;
        this.UserLoggedInSource = new BehaviorSubject(false);
        this.UserDetailSource = new BehaviorSubject(this.defaultUser);
        this.isUserLoggedIn = this.UserLoggedInSource.asObservable();
        this.currentUser = this.UserDetailSource.asObservable();
        this.isloggedin();
    }
    isloggedin() {
        if (localStorage.getItem('token')) {
            this.getuser()
                .subscribe((res) => {
                this.UserDetailSource.next(res);
                // console.log(this.currentUser);
            }, (err) => {
                this.UserDetailSource.next(this.defaultUser);
                console.log("error in userdetails ", err);
            });
            this.UserLoggedInSource.next(true);
        }
        else {
            this.UserDetailSource.next(this.defaultUser);
            this.UserLoggedInSource.next(false);
        }
    }
    logout() {
        localStorage.removeItem('token');
        this.UserLoggedInSource.next(false);
        this.UserDetailSource.next(this.defaultUser);
        this.router.navigate(['/home']);
    }
    getuser() {
        return this.httpservice.userProfile();
    }
};
AuthenticationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map