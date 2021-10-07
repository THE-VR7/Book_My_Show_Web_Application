import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { LanguageLabel, GenresLabel, MovieTypeLabel } from '../Models/Enum';
let TheatreComponent = class TheatreComponent {
    constructor(httpservice, route, router) {
        this.httpservice = httpservice;
        this.route = route;
        this.router = router;
        this.id = 0;
        this.allMovieHallProfiles = [];
        this.LanguageLabel = LanguageLabel;
        this.GenresLabel = GenresLabel;
        this.MovieTypeLabel = MovieTypeLabel;
        this.leastPriceArray = [0, 100, 200, 300, 500];
        this.highestPriceArray = [100, 200, 300, 500, Number.POSITIVE_INFINITY];
        this.startTimings = ["12:00", "12:00 PM", "4:00 PM", "8:00 PM"];
        this.startTimeNumb = [0.00, 12.0, 16.0, 20.00];
        this.endTimeNumb = [11.59, 15.59, 19.59, 23.59];
        this.endTimings = ["11:59 AM", "3.59 PM", "7.59 PM", "11.59 PM"];
        this.timeArray = ["Morning", "AfterNoon", "Evening", "Night"];
        this.priceFilters = [];
        this.timimgsFilters = [];
        this.currentDiv = -1;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.getMovieById();
        this.getShowsHallsProfile();
    }
    getMovieById() {
        this.httpservice.getMovieById(this.id)
            .subscribe((res) => {
            this.movie = res;
            console.log(this.movie);
        }, (err) => {
            console.log("error in showdetails ", err);
        });
    }
    getShowsHallsProfile() {
        var movieId = this.id;
        console.log("movieId is ", movieId);
        this.httpservice.getShowsTimeTableByMovieId(movieId)
            .subscribe((res) => {
            this.movieHallProfiles = res;
            this.allMovieHallProfiles = this.movieHallProfiles;
            this.movieHallProfiles = this.movieHallProfiles.filter(x => x.totalSeatsBooked.length != x.movieHall.numberOfSeats);
            console.log("the show time table is  : ", this.movieHallProfiles);
        }, (err) => {
            console.log("error in showdetails ", err);
        });
    }
    navigate(index) {
        let navigationExtras = {
            queryParams: {
                moviehallprofile: this.movieHallProfiles[index]
            }
        };
        this.router.navigate(['bookingform'], navigationExtras);
    }
    AddPriceFilters(val) {
        if (this.priceFilters.includes(val)) {
            const index = this.priceFilters.indexOf(val);
            if (index > -1) {
                this.priceFilters.splice(index, 1);
            }
        }
        else {
            this.priceFilters.push(val);
        }
        this.filterMovieHallProfiles();
    }
    filterMovieHallProfiles() {
        this.movieHallProfiles = this.allMovieHallProfiles;
        if (this.priceFilters.length > 0) {
            this.movieHallProfiles = this.movieHallProfiles.filter(x => {
                let flag = false;
                this.priceFilters.forEach((priceIndex) => {
                    if (x.movieHall.frontRowSeatsPrice >= this.leastPriceArray[priceIndex] && x.movieHall.lastRowSeatsPrice <= this.highestPriceArray[priceIndex]) {
                        flag = true;
                    }
                });
                return flag;
            });
            // console.log("movieprofiles are : ",this.movieHallProfiles);
        }
        if (this.timimgsFilters.length > 0) {
            this.movieHallProfiles = this.movieHallProfiles.filter(x => {
                let flag = false;
                this.timimgsFilters.forEach((timingIndex) => {
                    let currTime = parseFloat("" + x.showRecord.showTiming.hours) + (x.showRecord.showTiming.minutes) / 100.00;
                    if (currTime >= this.startTimeNumb[timingIndex] && currTime <= this.endTimeNumb[timingIndex]) {
                        flag = true;
                    }
                });
                return flag;
            });
        }
    }
    AddTimingsFilters(val) {
        if (this.timimgsFilters.includes(val)) {
            const index = this.timimgsFilters.indexOf(val);
            if (index > -1) {
                this.timimgsFilters.splice(index, 1);
            }
        }
        else {
            this.timimgsFilters.push(val);
        }
        this.filterMovieHallProfiles();
    }
    passShowProfile(index) {
        this.showselected = this.movieHallProfiles[index];
        // this.showselected = this.movieHallProfiles[index];
    }
};
TheatreComponent = __decorate([
    Component({
        selector: 'app-theatre',
        templateUrl: './theatre.component.html',
        styles: []
    })
], TheatreComponent);
export { TheatreComponent };
//# sourceMappingURL=theatre.component.js.map