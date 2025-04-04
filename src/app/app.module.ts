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
import { RegisterComponent } from './components/register/register.component';
import { InternshipTabComponent } from './components/internship-tab/internship-tab.component';
import { DetailedFeaturesComponent } from './components/detailed-features/detailed-features.component';
import { ComparisonTableComponent } from './template/comparison-table/comparison-table.component';
import { FeaturesTableComponent } from './template/features-table/features-table.component';
import { CourseDetailsTemplateComponent } from './template/course-details-template/course-details-template.component';
import { PastSessionsComponent } from './components/past-sessions/past-sessions.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

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
    ExpressInterestComponent,
    RegisterComponent,
    InternshipTabComponent,
    DetailedFeaturesComponent,
    ComparisonTableComponent,
    FeaturesTableComponent,
    CourseDetailsTemplateComponent,
    PastSessionsComponent,
    BlogPostComponent,
    BlogCardComponent,
    BlogListComponent
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
