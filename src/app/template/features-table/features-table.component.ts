import { Component } from '@angular/core';

@Component({
  selector: 'app-features-table',
  templateUrl: './features-table.component.html',
  styleUrl: './features-table.component.css',
})
export class FeaturesTableComponent {
  pricingPlans = [
    {
      name: 'Free',
      price: '$0 / month',
      applicable: [true, false, false, false],
    },
    {
      name: 'Starter',
      price: '$25 / month',
      applicable: [true, true, false, false],
    },
    {
      name: 'Business',
      price: '$65 / month',
      applicable: [true, true, true, false],
    },
    {
      name: 'Enterprise',
      price: 'Custom Pricing',
      applicable: [true, true, true, true],
    },
  ];

  features = [
    {
      name: 'Objective',
      unpaid: 'Deploy and test on AWS',
      paid: 'Understand AWS comprehensively',
    },
    {
      name: 'Ideal For',
      unpaid: [
        'Freshers hunting for JOB',
        'Get hands on AWS and face interviews more confidently',
        'Boost your resume with  real-world internship',
      ],
      paid: [
        'Experienced professionals, Learn and apply AWS in JOB',
        'Beginners or career switchers with no prior AWS knowledge',
      ],
    },
    {
      name: 'Prerequisite',
      unpaid: 'Basic knowledge of any programming language ',
      paid: 'Basic knowledge of any programming language ',
    },
    { name: 'Duration', unpaid: '1 month', paid: '2 months' },
    { name: 'Charges', unpaid: 'Free', paid: '1st Month is Free, 2400/- for second month' },
    { name: 'Payment Schedule', unpaid: 'None', paid: 'Starts from 2nd Month' },
    { name: 'Live Projects', unpaid: true, paid: true },
    {
      name: 'IAM',
      unpaid: true,
      paid: 'Yes - 3 days',
    },
    {
      name: 'DynamoDB',
      unpaid: true,
      paid: 'Yes - Weekly Session',
    },
    {
      name: 'EC2',
      unpaid: true,
      paid: true,
    },
    {
      name: 'S3',
      unpaid: true,
      paid: true,
    },
    {
      name: 'Networking',
      unpaid: false,
      paid: true,
    },
    {
      name: 'Scalability',
      unpaid: false,
      paid: true,
    },
    {
      name: 'App Security',
      unpaid: false,
      paid: true,
    },
    {
      name: 'Load Balancer',
      unpaid: false,
      paid: true,
    },
    {
      name: 'API Gateway',
      unpaid: false,
      paid: true,
    },
    {
      name: 'Serverless',
      unpaid: false,
      paid: true,
    },
    {
      name: 'SQS',
      unpaid: false,
      paid: true,
    },
    {
      name: 'Event Driven Architecture',
      unpaid: false,
      paid: true,
    },
  ];

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }
}
