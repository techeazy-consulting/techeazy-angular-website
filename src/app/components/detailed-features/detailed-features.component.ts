import { Component } from '@angular/core';

@Component({
  selector: 'app-detailed-features',
  templateUrl: './detailed-features.component.html',
  styleUrl: './detailed-features.component.css'
})
export class DetailedFeaturesComponent {

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
    { name: 'Charges', unpaid: 'Free', paid: '1st Month is Free, 4000/- for second month' },
    { name: 'Payment Schedule', unpaid: 'None', paid: 'Starts from 2nd Month' },
    { name: 'Live Projects', unpaid: true, paid: true },
    {
      name: 'IAM',
      unpaid: true,
      paid: true,
    },
    {
      name: 'DynamoDB',
      unpaid: true,
      paid: true,
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
