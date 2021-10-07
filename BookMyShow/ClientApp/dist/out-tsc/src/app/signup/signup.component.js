import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let SignupComponent = class SignupComponent {
    constructor(formgroup, router, httpservice, toaster) {
        this.formgroup = formgroup;
        this.router = router;
        this.httpservice = httpservice;
        this.toaster = toaster;
    }
    ngOnInit() {
        this.buildForm();
        this.errorMessages();
    }
    errorMessages() {
        this.validationMessages = {
            UserName: [
                { type: 'required', message: 'Name is required.' },
                { type: 'minlength', message: 'Enter atleast 4 Characters' }
            ],
            FullName: [
                { type: 'required', message: 'Name is required.' },
                { type: 'minlength', message: 'Enter atleast 4 Characters' }
            ],
            Email: [
                { type: 'required', message: 'email is required.' },
                { type: 'pattern', message: 'Please enter a valid email' },
            ],
            MobileNumber: [
                { type: 'required', message: 'Mobile Number is required' },
                { type: 'minlength', message: 'Enter atleast 10 digits' },
                { type: 'pattern', message: 'Only Numbers Allowed' }
            ],
            lalndline: [
                { type: 'minlength', message: 'Enter 10 digits' },
                { type: 'pattern', message: 'Only Numbers Allowed' }
            ],
            website: [
                { type: 'pattern', message: '(Wrong Format) Ex : www.mp3.com' }
            ],
        };
    }
    buildForm() {
        console.log("called");
        this.signupForm = this.formgroup.group({
            UserName: ['', Validators.required],
            Email: ['', [Validators.email, Validators.required]],
            FullName: [''],
            MobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern("[0-9]*")]],
            Passwords: this.formgroup.group({
                Password: ['', [Validators.required, Validators.minLength(4)]],
                ConfirmPassword: ['', Validators.required]
            }, { validator: this.comparePasswords })
        });
    }
    // Custom validation to compare the password and Confirm Password
    comparePasswords(formgroup) {
        var _a;
        let confirmPassword = formgroup.get('ConfirmPassword');
        if ((confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.errors) == null || 'passwordMismatch' in confirmPassword.errors) {
            if (((_a = formgroup.get('Password')) === null || _a === void 0 ? void 0 : _a.value) != (confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value)) {
                confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.setErrors({ passwordMismatch: true });
            }
            else {
                confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.setErrors(null);
            }
        }
    }
    // Submit Method which will be called When the User presses the Submit Button after Form Completion
    onSubmit() {
        var body = {
            UserName: this.signupForm.value.UserName,
            Email: this.signupForm.value.Email,
            FullName: this.signupForm.value.FullName,
            Password: this.signupForm.value.Passwords.Password,
            MobileNumber: this.signupForm.value.MobileNumber
        };
        this.httpservice.userSignup(body)
            .subscribe((res) => {
            console.log("returned response", res);
            if (res.succeeded) {
                this.signupForm.reset();
                this.toaster.success("New User Created", "User Registration Successfull");
                this.router.navigateByUrl('/login');
            }
            else {
                res.errors.forEach((element) => {
                    this.toaster.error(element.description, element.code);
                });
            }
        }, (error) => {
            console.error("the error is ", error);
        });
    }
};
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styles: []
    })
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map