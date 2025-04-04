import { Component } from '@angular/core';
import { env } from '../../../environment/environment';

@Component({
  selector: 'app-internship-tab',
  templateUrl: './internship-tab.component.html',
  styleUrl: './internship-tab.component.css'
})
export class InternshipTabComponent {
  env_url = env
}
