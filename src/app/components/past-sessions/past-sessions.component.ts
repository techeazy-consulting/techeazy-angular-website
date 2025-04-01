import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-past-sessions',
  templateUrl: './past-sessions.component.html',
  styleUrl: './past-sessions.component.css',
})
export class PastSessionsComponent implements OnInit {
  classes: any[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.data$.subscribe((data) => {
      this.classes = data;
    });
  }

  goToCourses(classItem: any): void {
    const formattedClassName = classItem.className.replace(/ /g, '-');
    this.router.navigate(['/class-detail', formattedClassName]);
  }

  convertLocalDateToReadableFormat(dateStr: string): string {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  }
}
