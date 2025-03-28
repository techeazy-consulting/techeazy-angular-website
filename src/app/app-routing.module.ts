import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BootcampsPageComponent } from './components/bootcamps-page/bootcamps-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CoursesComponent } from './components/courses/courses.component';
import { RegisterComponent } from './components/register/register.component';
import { InternshipTabComponent } from './components/internship-tab/internship-tab.component';
import { DetailedFeaturesComponent } from './components/detailed-features/detailed-features.component';

const routes: Routes = [
  // { path: '', redirectTo:'/home', pathMatch:'full' },
  // { path:'home', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'bootcamps', component: BootcampsPageComponent },
  { path: 'class-detail/:id', component: CoursesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'online_aws_internship', component: InternshipTabComponent },
  { path: 'all-features', component: DetailedFeaturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
