import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GenresLabel, LanguageLabel, MovieTypeLabel } from '../Models/Enum';
let HomeComponent = class HomeComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.LanguageLabel = LanguageLabel;
        this.GenresLabel = GenresLabel;
        this.MovieTypeLabel = MovieTypeLabel;
        this.slidemovies = [];
        this.movies = [];
        this.getMovies = () => {
            this.httpService.getMovies()
                .subscribe((result) => {
                console.log("res is ", result);
                this.movies = result;
                // this.movies = this.movies.sort((m1,m2) => {
                //   if(m1.numberOfLikes >= m2.numberOfLikes)
                //   {
                //     return 1;
                //   }
                //   else
                //   {
                //     return -1;
                //   }
                // });
                this.slidemovies = this.movies;
                console.log("in Home page", this.movies);
            }, (error) => {
                console.error(error);
            });
        };
    }
    ngOnInit() {
        this.getMovies();
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styles: []
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map