import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Gender, Role, Language, Gener, MovieType, CertificateType } from '../Models/Enum';
let AddMovieComponent = class AddMovieComponent {
    constructor(formgroup, router, httpservice, toaster) {
        this.formgroup = formgroup;
        this.router = router;
        this.httpservice = httpservice;
        this.toaster = toaster;
        this.Gender = Gender;
        this.Role = Role;
        this.Language = Language;
        this.Gener = Gener;
        this.MovieType = MovieType;
        this.CertificateType = CertificateType;
        this.roleKeys = [];
        this.genderKeys = [];
        this.languageKeys = [];
        this.generKeys = [];
        this.movieTypeKeys = [];
        this.certificateTypeKeys = [];
        this.genderKeys = Object.keys(Gender).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
        this.roleKeys = Object.keys(Role).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
        this.languageKeys = Object.keys(Language).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
        this.generKeys = Object.keys(Gener).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
        this.movieTypeKeys = Object.keys(MovieType).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
        this.certificateTypeKeys = Object.keys(CertificateType).filter(f => !isNaN(Number(f))).map(k => parseInt(k));
    }
    ngOnInit() {
        console.log("called");
        this.buildForm();
        this.addCast();
    }
    buildForm() {
        this.movieForm = this.formgroup.group({
            name: ['',],
            movieImageUrl: ['', []],
            posterImageUrl: ['', []],
            casts: new FormArray([]),
            language: [0,],
            gener: [0,],
            movieType: [0,],
            certificateType: [0,],
            description: ['',],
            movieLength: [0.00,],
            releaseDate: [null,],
            numberOfLikes: [0]
        });
    }
    get formControls() {
        return this.movieForm.controls;
    }
    get formArray() {
        return this.formControls.casts;
    }
    castFormGroup() {
        this.castForm = this.formgroup.group({
            name: ['',],
            description: ['',],
            profileImageUrl: [''],
            gender: [0,],
            role: [0,],
        });
        return this.castForm;
    }
    // Add new Cast to the FormArray
    addCast() {
        console.log("add cast");
        this.formArray.push(this.castFormGroup());
    }
    // Remove the added Cast from the formArray
    removeCast(i) {
        this.formArray.removeAt(i);
    }
    onSubmit() {
        console.log("form is ", this.movieForm.value);
        this.httpservice.addMovie(this.movieForm.value)
            .subscribe((res) => {
            console.log("returned response", res);
            this.toaster.success("Movie Saved", "Submission Successfull");
            // this.router.navigateByUrl('/home');   
        }, (error) => {
            console.error("the error is ", error);
        });
    }
};
AddMovieComponent = __decorate([
    Component({
        selector: 'app-add-movie',
        templateUrl: './add-movie.component.html',
        styles: []
    })
], AddMovieComponent);
export { AddMovieComponent };
//# sourceMappingURL=add-movie.component.js.map