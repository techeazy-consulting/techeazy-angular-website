import { Component } from '@angular/core';
import { env } from '../../../environment/environment';

@Component({
  selector: 'app-detailed-features',
  templateUrl: './detailed-features.component.html',
  styleUrl: './detailed-features.component.css'
})
export class DetailedFeaturesComponent {

  env_url = env;
  
  features = [
    {
      name: 'Objective',
      unpaid: 'Deploy and test on AWS',
      paid: 'Understand AWS comprehensively',
      advanced: 'Upskill urself with AWS'
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
      advanced: [
        'Experienced professionals, Upskill and apply AWS in JOB',
        'Experienced or career switchers with no prior AWS knowledge',
      ],
    },
    {
      name: 'Prerequisite',
      unpaid: 'Basic knowledge of any programming language ',
      paid: 'Basic knowledge of any programming language ',
      advanced: true
    },
    { name: 'Duration', unpaid: '1 month', paid: '2 months', advanced: true },
    { name: 'Charges', unpaid: 'Free', paid: '1st Month is Free, 4000/- for second month', advanced: true },
    { name: 'Payment Schedule', unpaid: 'None', paid: 'Starts from 2nd Month', advanced: true },
    { name: 'Live Projects', unpaid: true, paid: true, advanced: true },
    {
      name: 'IAM',
      unpaid: true,
      paid: true,
      advanced: true
    },
    {
      name: 'DynamoDB',
      unpaid: true,
      paid: true,
      advanced: true
    },
    {
      name: 'EC2',
      unpaid: true,
      paid: true,
      advanced: true
    },
    {
      name: 'S3',
      unpaid: true,
      paid: true,
      advanced: true
    },
    {
      name: 'Networking',
      unpaid: false,
      paid: true,
      advanced: true
    },
    {
      name: 'Scalability',
      unpaid: false,
      paid: true,
      advanced: true
    },
    {
      name: 'App Security',
      unpaid: false,
      paid: true,
      advanced: true
    },
    {
      name: 'Load Balancer',
      unpaid: false,
      paid: true,
      advanced: true
    },
    {
      name: 'API Gateway',
      unpaid: false,
      paid: true,
      advanced: true
    },
    {
      name: 'Serverless',
      unpaid: false,
      paid: true,
      advanced: true
    },
    {
      name: 'SQS',
      unpaid: false,
      paid: true,
      advanced: true
    },
    {
      name: 'Event Driven Architecture',
      unpaid: false,
      paid: true,
      advanced: true
    },
  ];


  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }  
  
}
