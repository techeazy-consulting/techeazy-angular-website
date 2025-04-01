import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  classes: any[] = [];

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.data$.subscribe(
      (data) => {
        this.classes = data;
      }
    )
  }
}
