import { Component, ViewChild } from '@angular/core';
import { ExpressInterestComponent } from '../express-interest/express-interest.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  @ViewChild(ExpressInterestComponent) formPopup!: ExpressInterestComponent;

  openFormPopup() {
    this.formPopup.openPopup();
  }
}
