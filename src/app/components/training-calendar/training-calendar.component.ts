import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training-calendar',
  templateUrl: './training-calendar.component.html',
  styleUrl: './training-calendar.component.css'
})
export class TrainingCalendarComponent implements OnInit {
  classes: any[] = [];
  filteredCourses: any[] = [];
  selectedTabIndex = 0;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.data$.subscribe((data) => {
      this.classes = data;
      this.filterCourses();
    })
  }
  
  onTabChange(index: number) {
    this.selectedTabIndex = index;
    this.filterCourses(); // ✅ Refetch based on selected tab
  }

  formatText(text: string): string {
    if (text === 'INSTRUCTOR_LED_COURSE') return 'Trainings';
    return text.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }
  
  filterCourses() {
    const typeFilters = [
      'INSTRUCTOR_LED_COURSE',
      'INTERNSHIP',
      'SELF_PACED_ONLINE',
      'BOOTCAMP',
      'HACKATHON',
      null, // All
    ];

    const selectedType = typeFilters[this.selectedTabIndex];

    this.filteredCourses = this.classes.filter(course => {
      const isUpcoming = course.courseStatus !== 'COMPLETED' && course.courseStatus !== 'ONGOING'

      if (!isUpcoming) return false;
      if (!selectedType) return true;

      return course.typeOfCourse === selectedType;
    });
  }

  goToCourses(classItem: any): void {
    const formattedClassName = classItem.className.replace(/ /g, '-');
    this.router.navigate(['/class-detail', formattedClassName]);
  }
  
  getImageForType(type: string): string {
    const map: { [key: string]: string } = {
      UNKNOWN: 'assets/images/unknown.jpg',
      INTERNSHIP: 'assets/images/internship.jpg',
      SELF_PACED_ONLINE: 'assets/images/Self-Paced.png',
      BOOTCAMP: 'assets/images/bootcamp.png',
      HACKATHON: 'assets/images/hackathon.png',
      INSTRUCTOR_LED_COURSE: 'assets/images/Instructor-Led-Training.jpg'
    };
    return map[type] || 'assets/images/default.jpg';
  }
  
}
