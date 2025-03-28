import { Component } from '@angular/core';

@Component({
  selector: 'app-detailed-features',
  templateUrl: './detailed-features.component.html',
  styleUrl: './detailed-features.component.css'
})
export class DetailedFeaturesComponent {
  pricingPlans = [
    {
      name: 'Free',
      price: '$0 / month',
      applicable: [true, false, false, false]
    },
    {
      name: 'Starter',
      price: '$25 / month',
      applicable: [true, true, false, false]
    },
    {
      name: 'Business',
      price: '$65 / month',
      applicable: [true, true, true, false]
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      applicable: [true, true, true, true]
    }
  ];


  features = [
    { name: "Objective", unpaid: "Get hands-on experience on Live projects", interview: "Comprehensive interview preparation with real-world projects" },
    { name: "Ideal For", unpaid: ["Freshers hunting for JOB", "Java & Spring knowledge but no hands-on experience", "Quick real-world internship to boost resume"], 
      interview: ["College Students", "Freshers hunting for JOB", "Beginners or career switchers with no Java/Spring knowledge", "Utilize gap after college to gain experience"] },
    { name: "Prerequisite", unpaid: "MUST have knowledge of Spring/Java", interview: "None, We will provide training from scratch" },
    { name: "Selection", unpaid: "Based on project submission & 1 interview", interview: "None" },
    { name: "Duration", unpaid: "1 month", interview: "2-6 months" },
    { name: "Charges", unpaid: "Free", interview: "1st Month is Free" },
    { name: "Payment Schedule", unpaid: "None", interview: "Starts from 2nd Month" },
    { name: "Live Projects", unpaid: true, interview: true },
    { name: "Scrum call", unpaid: "2 Per week", interview: "3 days Per week" },
    { name: "Interview Tips", unpaid: true, interview: true },
    { name: "Weekly Connect", unpaid: "2 days - Scrum Calls", interview: "5 days - 2 Scrum Calls + 3 Training Sessions" },
    { name: "Training", unpaid: false, interview: "3 days" },
    { name: "DS and Algo", unpaid: false, interview: "Weekly session" },
    { name: "Mock Interview", unpaid: false, interview: true },
    { name: "Group Discussions", unpaid: false, interview: true },
    { name: "System Design", unpaid: false, interview: true }
  ];


  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }  
  
}
