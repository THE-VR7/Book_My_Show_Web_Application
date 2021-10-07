import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let SlideshowComponent = class SlideshowComponent {
    constructor() {
        this.slideMovies = [];
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        // console.log(changes);
        this.slideMovies = (changes.slideMovies.currentValue);
        console.log("in ngonchanges method : ", this.slideMovies);
        // if(this.slideMovies.length != 0)
        // {
        //   this.slideMovies.sort((a,b) => b.numberOfLikes - a.numberOfLikes );
        //   this.slideMovies = this.slideMovies.splice(0,3);  
        // console.log("after sorting : ",this.slideMovies);
        // }
    }
};
__decorate([
    Input()
], SlideshowComponent.prototype, "slideMovies", void 0);
SlideshowComponent = __decorate([
    Component({
        selector: 'app-slideshow',
        templateUrl: './slideshow.component.html',
        styles: []
    })
], SlideshowComponent);
export { SlideshowComponent };
//# sourceMappingURL=slideshow.component.js.map