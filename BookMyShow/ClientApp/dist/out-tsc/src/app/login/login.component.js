import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(formBuilder, auth, toaster, httpservice, route, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toaster = toaster;
        this.httpservice = httpservice;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null) {
            this.router.navigateByUrl('/');
        }
        this.buildForm();
    }
    buildForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    onSubmit() {
        var body = {
            UserName: this.loginForm.value.username,
            Password: this.loginForm.value.password
        };
        this.httpservice.userLogin(body)
            .subscribe((result) => {
            console.log("contact saved ", result);
            localStorage.setItem('token', result.token);
            this.toaster.success("User LoggedIn", "Authentication Successfull");
            this.auth.isloggedin();
            this.router.navigateByUrl('/');
        }, (error) => {
            console.error("the error is ", error);
            if (error.status == 400) {
                this.toaster.error("Incorrect UserName or Password", "Authentication Failed");
            }
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styles: []
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map