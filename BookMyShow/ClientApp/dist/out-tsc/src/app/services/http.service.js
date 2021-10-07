import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
let HttpService = class HttpService {
    constructor(httpService) {
        this.httpService = httpService;
        this.route = 'http://localhost:5000/api';
        this.getMovies = () => {
            return this.httpService.get(this.route + "/movie");
        };
        this.getEvents = () => {
            return this.httpService.get(this.route + "/events");
        };
        this.getMoviesByName = (name) => {
            return this.httpService.get(this.route + "/Search/GetShowsByName/" + name);
        };
        this.getMovieById = (id) => {
            return this.httpService.get(this.route + "/movie/GetMovieById/" + id);
        };
        this.getMovieHallsByMovieId = () => {
            return this.httpService.get(this.route);
        };
        this.getShowsTimeTableByMovieId = (movieId) => {
            return this.httpService.get(this.route + "/booking/GetHallForMovieProfiles/" + movieId);
        };
        this.getBookedSeatsByMovieId = (route) => {
            return this.httpService.get(route);
        };
    }
    savebooking(bookingdetail) {
        console.log("in save booking service method", bookingdetail);
        return this.httpService.post(this.route + "/Booking", bookingdetail);
    }
    userSignup(body) {
        console.log("in userSignup method ", body);
        return this.httpService.post(this.route + "/User/Register", body);
    }
    userLogin(body) {
        console.log("in userSignup method ", body);
        return this.httpService.post(this.route + "/User/Login", body);
    }
    userProfile() {
        var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
        return this.httpService.get(this.route + "/User/GetUserProfile", { headers: tokenHeader });
    }
    addMovie(movie) {
        // movie.language = parseInt(""+movie.language);
        console.log("movie is ", movie);
        return this.httpService.post(this.route + "/Movie/SaveMovie", movie);
    }
    addLike(likeDetail) {
        return this.httpService.post(this.route + "/User/AddUserLike", likeDetail);
    }
};
HttpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map