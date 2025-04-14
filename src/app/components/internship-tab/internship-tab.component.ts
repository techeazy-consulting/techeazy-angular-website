import { Component } from '@angular/core';
import { env } from '../../../environment/environment';

@Component({
  selector: 'app-internship-tab',
  templateUrl: './internship-tab.component.html',
  styleUrl: './internship-tab.component.css'
})
export class InternshipTabComponent {
  env_url = env

  pricingCard = [
    {
      'title' : 'Free',
      'price' : '0 / Month',
      'route' : '/class-detail/AWS-Internship',
      'anchorLink' : 'env_url.free_Registration_Link',
      'cardText' : 'Get started with essential features for free.',
      'list' : []
    }
  ]
}
