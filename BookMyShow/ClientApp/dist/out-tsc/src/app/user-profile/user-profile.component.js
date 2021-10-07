import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserProfileComponent = class UserProfileComponent {
    constructor(httpservice, router, auth) {
        this.httpservice = httpservice;
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
        this.UserSubscription = this.auth.currentUser.subscribe(user => {
            this.userDetails = user;
        });
    }
    ngOnDestroy() {
        this.UserSubscription.unsubscribe();
    }
    onLogout() {
        this.auth.logout();
    }
};
UserProfileComponent = __decorate([
    Component({
        selector: 'app-user-profile',
        templateUrl: './user-profile.component.html',
        styles: []
    })
], UserProfileComponent);
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map