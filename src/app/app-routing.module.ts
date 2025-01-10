import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BootcampsPageComponent } from './components/bootcamps-page/bootcamps-page.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path:'home', component: HomePageComponent },
  { path:'blogs', component: BlogsComponent },
  { path:'bootcamps', component: BootcampsPageComponent },
  { path: 'class-detail/:id', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
