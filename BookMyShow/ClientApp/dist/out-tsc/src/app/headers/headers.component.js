import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, filter, distinctUntilChanged } from 'rxjs/operators';
let HeadersComponent = class HeadersComponent {
    constructor(router, httpservice, toaster, auth) {
        this.router = router;
        this.httpservice = httpservice;
        this.toaster = toaster;
        this.auth = auth;
        this.searchedMovies = [];
        this.isSearching = false;
        this.noMovieFound = false;
    }
    ;
    ngOnInit() {
        console.log("called headers");
        this.isAuthenticated = this.auth.isUserLoggedIn;
        this.UserSubscription = this.auth.currentUser.subscribe(user => {
            console.log("user details are ", user);
            this.userDetails = user;
        });
        fromEvent(this.movieSearchInput.nativeElement, 'keyup')
            .pipe(map((event) => {
            return event.target.value;
        }), filter(res => res.length >= 0), debounceTime(500), distinctUntilChanged()).subscribe((name) => {
            this.isSearching = true;
            this.httpservice.getMoviesByName(name)
                .subscribe((res) => {
                this.searchedMovies = res;
                this.isSearching = false;
                if (this.searchedMovies.length == 0 && name.length > 0) {
                    this.noMovieFound = true;
                }
                else {
                    this.noMovieFound = false;
                }
                console.log("movies searched are ", this.searchedMovies);
            }, (err) => {
                console.log("error in showdetails ", err);
            });
        });
    }
    ngOnDestroy() {
        this.UserSubscription.unsubscribe();
    }
    onLogout() {
        this.auth.logout();
        this.toaster.success("User LoggedOut", "LogOut Successfull");
    }
};
__decorate([
    ViewChild('movieSearchInput', { static: true })
], HeadersComponent.prototype, "movieSearchInput", void 0);
HeadersComponent = __decorate([
    Component({
        selector: 'app-headers',
        templateUrl: './headers.component.html',
        styles: []
    })
], HeadersComponent);
export { HeadersComponent };
//# sourceMappingURL=headers.component.js.map