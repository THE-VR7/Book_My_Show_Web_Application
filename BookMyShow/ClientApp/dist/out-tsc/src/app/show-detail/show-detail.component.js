import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LanguageLabel, GenresLabel, MovieTypeLabel, RoleLabel } from '../Models/Enum';
let ShowDetailComponent = class ShowDetailComponent {
    constructor(httpservice, toaster, activateroute, auth) {
        this.httpservice = httpservice;
        this.toaster = toaster;
        this.activateroute = activateroute;
        this.auth = auth;
        this.LanguageLabel = LanguageLabel;
        this.GenresLabel = GenresLabel;
        this.MovieTypeLabel = MovieTypeLabel;
        this.RoleLabel = RoleLabel;
        this.hasUserLiked = false;
        this.id = 0;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.id = this.activateroute.snapshot.params.id;
        this.activateroute.params.subscribe(params => {
            this.id = params['id'];
            this.getMovieById();
        });
        this.UserSubscription = this.auth.currentUser.subscribe(user => {
            console.log("user details are ", this.userDetails);
            this.userDetails = user;
            this.getLikeStatus();
        });
    }
    getMovieById() {
        this.httpservice.getMovieById(this.id)
            .subscribe((res) => {
            this.movie = res;
            this.getLikeStatus();
            console.log(this.movie);
        }, (err) => {
            console.log("error in showdetails ", err);
        });
    }
    getLikeStatus() {
        if (this.userDetails != undefined && this.movie != undefined) {
            this.isLoggedIn = true;
            this.userDetails.likes.forEach((like) => {
                if (like.movieId == this.movie.id) {
                    this.hasUserLiked = true;
                }
            });
        }
    }
    changeUserLikeStatus() {
        this.hasUserLiked = !this.hasUserLiked;
    }
    likeTheMovie() {
        if (this.userDetails == undefined) {
            this.toaster.warning("Login to Like the Movie", "Like Unsuccessfull");
            return;
        }
        this.movie.numberOfLikes++;
        this.changeUserLikeStatus();
        var like = {
            isLiked: true,
            movieId: this.movie.id,
            userId: this.userDetails.id,
            id: 0
        };
        this.httpservice.addLike(like)
            .subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log("error in showdetails adding like ", err);
        });
    }
};
ShowDetailComponent = __decorate([
    Component({
        selector: 'app-show-detail',
        templateUrl: './show-detail.component.html',
        styles: []
    })
], ShowDetailComponent);
export { ShowDetailComponent };
//# sourceMappingURL=show-detail.component.js.map