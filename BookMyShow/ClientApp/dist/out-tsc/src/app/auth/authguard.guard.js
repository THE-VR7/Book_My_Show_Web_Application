import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthguardGuard = class AuthguardGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('token') != null) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
        return true;
    }
};
AuthguardGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthguardGuard);
export { AuthguardGuard };
//# sourceMappingURL=authguard.guard.js.map