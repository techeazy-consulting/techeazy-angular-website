import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrl: './bootcamps.component.css'
})
export class BootcampsComponent implements OnInit{
  classes: any[] = [];

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(){
    this.authService.getClasses().subscribe(
      (data) => {
        this.classes = data;
      },
      (error) => {
        console.error('Error fetching classes', error);
      }
    )
  }
}
