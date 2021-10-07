import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { SeatType } from '../Models/Enum';
let BookingFormComponent = class BookingFormComponent {
    constructor(formBuilder, auth, toaster, httpservice, route, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toaster = toaster;
        this.httpservice = httpservice;
        this.route = route;
        this.router = router;
        this.SampleSeats = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        // This will store both the booked as well as non booked seats
        this.selectedSeats = [];
        this.totalAmount = 0;
        this.totalTickets = 0;
        this.finalSeatsValues = [];
        this.SeatType = SeatType;
        this.frontSeats = [];
        this.middleSeats = [];
        this.lastSeats = [];
        // this.currentshowprofile = history.state;
    }
    ngOnInit() {
        // console.log(this.currentshowprofile);    
        // this.getAvailableSeats();
        // Authentication service to get the Current Logged In User
        this.UserSubscription = this.auth.currentUser.subscribe(user => {
            this.userDetails = user;
            console.log("the user is ", this.userDetails);
        });
    }
    ngOnChanges(changes) {
        this.currentshowprofile = (changes.currentshowprofile.currentValue);
        console.log("in booking form method : ", this.currentshowprofile);
        this.getAvailableSeats();
    }
    ngOnDestroy() {
        this.UserSubscription.unsubscribe();
    }
    getAvailableSeats() {
        var _a, _b, _c, _d, _e, _f, _g;
        let totalSeats = (_b = (_a = this.currentshowprofile) === null || _a === void 0 ? void 0 : _a.movieHall) === null || _b === void 0 ? void 0 : _b.numberOfSeats;
        var bookedSeats = (_c = this.currentshowprofile) === null || _c === void 0 ? void 0 : _c.totalSeatsBooked;
        let frontRowlastseat = (_e = (_d = this.currentshowprofile) === null || _d === void 0 ? void 0 : _d.movieHall) === null || _e === void 0 ? void 0 : _e.frontRowLastSeat;
        let middleRowlastseat = (_g = (_f = this.currentshowprofile) === null || _f === void 0 ? void 0 : _f.movieHall) === null || _g === void 0 ? void 0 : _g.middleRowLastSeat;
        let cnt = 0;
        for (let i = 1; i <= totalSeats; i++) {
            var currseat = {
                seatNumber: i,
                isBooked: false,
                seatType: SeatType.Other
            };
            if (this.checkIfSeatIsBooked(i, bookedSeats) != -1) {
                cnt++;
                currseat.isBooked = true;
            }
            if (i <= frontRowlastseat) {
                currseat.seatType = SeatType.FrontRow;
                this.frontSeats.push(currseat);
            }
            else if (i <= middleRowlastseat) {
                currseat.seatType = SeatType.MiddleRow;
                this.middleSeats.push(currseat);
            }
            else {
                currseat.seatType = SeatType.LastRow;
                this.lastSeats.push(currseat);
            }
        }
        console.log("front are : ", this.frontSeats, " middle seats are ", this.middleSeats, " and last seats are : ", this.lastSeats, " cnt is ", cnt);
    }
    checkIfSeatIsBooked(seatnumber, bookedSeats) {
        let index = 0;
        let finalIndexValue = -1;
        bookedSeats.forEach((seat) => {
            if (seat.seatNumber == seatnumber) {
                finalIndexValue = index;
            }
            index++;
        });
        return finalIndexValue;
    }
    bookTickets() {
        var _a, _b, _c, _d;
        if (this.userDetails == undefined || !this.IsNotNullandUndefined(this.userDetails)) {
            this.toaster.warning("Login to Book Tickets", "Booking Unsuccessfull");
            this.ngOnDestroy();
            (_a = document.getElementById('closeModal')) === null || _a === void 0 ? void 0 : _a.click();
            this.router.navigateByUrl('/login');
            return;
        }
        this.getSelectedSeatsValue();
        var bookingDetail = {
            seatNumbers: this.finalSeatsValues,
            userId: (_b = this.userDetails) === null || _b === void 0 ? void 0 : _b.id,
            amountPaid: this.totalAmount,
            showId: (_d = (_c = this.currentshowprofile) === null || _c === void 0 ? void 0 : _c.showRecord) === null || _d === void 0 ? void 0 : _d.id
        };
        // bookingDetail.seatNumber = this.selectedSeatsValues;
        console.log("booking form value in component - ", bookingDetail);
        this.httpservice.savebooking(bookingDetail)
            .subscribe((result) => {
            var _a;
            console.log("contact saved ", result);
            this.toaster.success("Ticket Booked", "Booking Successful");
            (_a = document.getElementById('closeModal')) === null || _a === void 0 ? void 0 : _a.click();
            this.router.navigateByUrl('/home');
        }, (error) => {
            console.error("the error is ", error);
        });
    }
    IsNotNullandUndefined(val) {
        if (val == null || val == undefined) {
            return false;
        }
        return true;
    }
    // Toggle the Seat 
    ToggleSeat(seatDetail) {
        let index = this.checkIfSeatIsBooked(seatDetail.seatNumber, this.selectedSeats);
        let price = this.getAmountofSeat(seatDetail);
        if (index != -1) {
            this.totalAmount = this.totalAmount - price;
            this.selectedSeats.splice(index, 1);
        }
        else {
            this.totalAmount += price;
            this.selectedSeats.push(seatDetail);
        }
        this.totalTickets = this.selectedSeats.length;
    }
    // Get the Number of Seats which are Booked in the end
    getSelectedSeatsValue() {
        this.selectedSeats.forEach(seat => {
            this.finalSeatsValues.push(seat.seatNumber);
        });
    }
    // Get the Amount of the Seat based on the type of the Seat
    getAmountofSeat(seatDetail) {
        var _a, _b, _c, _d, _e, _f;
        let price = 0;
        switch (seatDetail.seatType) {
            case SeatType.FrontRow:
                price = (_b = (_a = this.currentshowprofile) === null || _a === void 0 ? void 0 : _a.movieHall) === null || _b === void 0 ? void 0 : _b.frontRowSeatsPrice;
                break;
            case SeatType.MiddleRow:
                price = (_d = (_c = this.currentshowprofile) === null || _c === void 0 ? void 0 : _c.movieHall) === null || _d === void 0 ? void 0 : _d.middleRowSeatsPrice;
                break;
            case SeatType.LastRow:
                price = (_f = (_e = this.currentshowprofile) === null || _e === void 0 ? void 0 : _e.movieHall) === null || _f === void 0 ? void 0 : _f.lastRowSeatsPrice;
                break;
            default: price = 0;
        }
        return price;
    }
};
__decorate([
    Input()
], BookingFormComponent.prototype, "currentshowprofile", void 0);
BookingFormComponent = __decorate([
    Component({
        selector: 'app-booking-form',
        templateUrl: './booking-form.component.html',
        styles: []
    })
], BookingFormComponent);
export { BookingFormComponent };
//# sourceMappingURL=booking-form.component.js.map