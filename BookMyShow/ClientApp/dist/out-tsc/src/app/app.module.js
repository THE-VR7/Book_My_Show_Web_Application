import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';
import { TheatreComponent } from './theatre/theatre.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { MoviesComponent } from './movies/movies.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            routingComponents,
            HeadersComponent,
            ShowDetailComponent,
            TheatreComponent,
            BookingFormComponent,
            SignupComponent,
            LoginComponent,
            UserProfileComponent,
            AddMovieComponent,
            SlideshowComponent,
            MoviesComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            ToastrModule.forRoot({
                timeOut: 2000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
                newestOnTop: true,
                closeButton: true,
                progressBar: true
            }),
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map