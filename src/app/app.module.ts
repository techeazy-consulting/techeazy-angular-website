import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BestCoursesComponent } from './components/best-courses/best-courses.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { BootcampsPageComponent } from './components/bootcamps-page/bootcamps-page.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoPopupComponent } from './components/video-popup/video-popup.component';
import { FormsModule } from '@angular/forms';
import { ExpressInterestComponent } from './components/express-interest/express-interest.component';

@NgModule({
  declarations: [
    AppComponent,
    BestCoursesComponent,
    BlogsComponent,
    BootcampsComponent,
    BootcampsPageComponent,
    CoursesComponent,
    FooterComponent,
    HomePageComponent,
    NavbarComponent,
    VideoPopupComponent,
    ExpressInterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
