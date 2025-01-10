import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { MoodComponent } from './mood/mood.component';

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
    MoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
