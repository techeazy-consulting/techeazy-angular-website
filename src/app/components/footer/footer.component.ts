import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  classes: any[] = [];

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.authService.data$.subscribe(
      (data) => {
        this.classes = data.slice(-4); //last 4 classes
        // this.classes = data.slice(0, 4); // Only keep the first 4 classes
      }
    )
  }

  goToCourses(classItem: any): void {
    const formattedClassName = classItem.className.replace(/ /g, '-');
    this.router.navigate(['/class-detail', formattedClassName]);
  }
}
