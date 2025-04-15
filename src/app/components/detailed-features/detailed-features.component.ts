import { Component } from '@angular/core';
import { env } from '../../../environment/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-features',
  templateUrl: './detailed-features.component.html',
  styleUrl: './detailed-features.component.css',
})
export class DetailedFeaturesComponent {
  env_url = env;

  internshipType: string = '';
  internshipData: any;

  // features = [
  //   {
  //     name: 'Objective',
  //     unpaid: 'Deploy and test on AWS',
  //     paid: 'Understand AWS comprehensively',
  //   },
  //   {
  //     name: 'Ideal For',
  //     unpaid: [
  //       'Freshers hunting for JOB',
  //       'Get hands on AWS and face interviews more confidently',
  //       'Boost your resume with  real-world internship',
  //     ],
  //     paid: [
  //       'Experienced professionals, Learn and apply AWS in JOB',
  //       'Beginners or career switchers with no prior AWS knowledge',
  //     ],
  //   },
  //   {
  //     name: 'Prerequisite',
  //     unpaid: 'Basic knowledge of any programming language ',
  //     paid: 'Basic knowledge of any programming language ',
  //   },
  //   { name: 'Duration', unpaid: '1 month', paid: '2 months' },
  //   { name: 'Charges', unpaid: 'Free', paid: '1st Month is Free, 4000/- for second month' },
  //   { name: 'Payment Schedule', unpaid: 'None', paid: 'Starts from 2nd Month' },
  //   { name: 'Live Projects', unpaid: true, paid: true },
  //   {
  //     name: 'IAM',
  //     unpaid: true,
  //     paid: true,
  //   },
  //   {
  //     name: 'DynamoDB',
  //     unpaid: true,
  //     paid: true,
  //   },
  //   {
  //     name: 'EC2',
  //     unpaid: true,
  //     paid: true,
  //   },
  //   {
  //     name: 'S3',
  //     unpaid: true,
  //     paid: true,
  //   },
  //   {
  //     name: 'Networking',
  //     unpaid: false,
  //     paid: true,
  //   },
  //   {
  //     name: 'Scalability',
  //     unpaid: false,
  //     paid: true,
  //   },
  //   {
  //     name: 'App Security',
  //     unpaid: false,
  //     paid: true,
  //   },
  //   {
  //     name: 'Load Balancer',
  //     unpaid: false,
  //     paid: true,
  //   },
  //   {
  //     name: 'API Gateway',
  //     unpaid: false,
  //     paid: true,
  //   },
  //   {
  //     name: 'Serverless',
  //     unpaid: false,
  //     paid: true,
  //   },
  //   {
  //     name: 'SQS',
  //     unpaid: false,
  //     paid: true,
  //   },
  //   {
  //     name: 'Event Driven Architecture',
  //     unpaid: false,
  //     paid: true,
  //   },
  // ];

  awsData = {
    title: 'AWS Internship',
    pricingCards: [
      {
        title: 'Free',
        title2: 'Unpaid AWS Internship',
        headerClass: 'card-header text-dark',
        route: '/class-detail/AWS-Internship',
        registerLink: 'your_aws_free_link_here',
        btnClass: 'btn-primary',
        btnTextColor: 'text-white',
        titleClass: 'fs-1',
        subtitle: ' ',
        features: [
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
          {
            name: 'Charges',
            unpaid: 'Free',
            paid: '1st Month is Free, 4000/- for second month',
          },
          {
            name: 'Payment Schedule',
            unpaid: 'None',
            paid: 'Starts from 2nd Month',
          },
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
        ],
      },
      {
        title: 'Advanced',
        title2: 'Interview Prep & Internship',
        headerClass: 'bg-primary text-white',
        route: '/class-detail/AWS-Interview-and-Internship',
        registerLink: 'your_aws_paid_link_here',
        btnClass: 'btn-primary',
        btnTextColor: 'text-light',
        titleClass: 'fs-4',
        subtitle: '1st month FREE, then ₹4K / month',
        features: [
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
          {
            name: 'Charges',
            unpaid: 'Free',
            paid: '1st Month is Free, 4000/- for second month',
          },
          {
            name: 'Payment Schedule',
            unpaid: 'None',
            paid: 'Starts from 2nd Month',
          },
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
        ],
      },
    ],
  };

  fullstackData = {
    title: 'Full Stack Internship',
    pricingCards: [
      {
        title: 'Free',
        title2: 'Unpaid FullStack Internship',
        headerClass: 'card-header text-dark',
        route: '/class-detail/Fullstack-Internship',
        registerLink: 'your_fs_free_link_here',
        btnClass: 'btn-primary',
        btnTextColor: 'text-white',
        titleClass: 'fs-1',
        subtitle: ' ',
        features: [
          {
            name: 'Objective',
            unpaid: 'Get your hands dirty on Live project and test your preparations',
            paid: 'Comprehensive interview preparation with real-world projects',
          },
          {
            name: 'Ideal For',
            unpaid: [
              'Freshers hunting for JOB',
              'Already has Java & Spring knowledge but lacks hands-on project experience.',
              'Wants a quick, real-world internship to boost their resume',
            ],
            paid: [
              'College Students OR Freshers -hunting for JOB',
              'Beginners or career switchers with no prior Java/Spring knowledge.',
              'Utilize Gap after college to gain real world experience',
            ],
          },
          {
            name: 'Prerequisite',
            unpaid: 'Must have knowledge of Spring/Java',
            paid: 'None, We will provide training from scratch',
          },
          { name: 'Selection', unpaid: 'Based on project submission and 1 interview call', paid: 'None' },
          {
            name: 'Duration',
            unpaid: '1 month',
            paid: '2-6 months',
          },
          {
            name: 'Tuition Charges',
            unpaid: 'Not Applicable',
            paid: '1st Month is Free',
          },
          {
            name: 'Payment Schedule',
            unpaid: false,
            paid: 'Starts from beginning of 2nd Month',
          },
          {
            name: 'Live Projects',
            unpaid: true,
            paid: true,
          },
          {
            name: 'Scrum call',
            unpaid: 'Yes -2 Per week',
            paid: 'Yes -3 days Per week',
          },
          {
            name: 'Interview Tips',
            unpaid: true,
            paid: true,
          },
          {
            name: 'Weekly Connect',
            unpaid: '2 days - (Scrum Calls)',
            paid: {
              label: '5 days',
              details: ['2 days Scrum calls', '3 Training Sessions']
            }
          },
          {
            name: 'Training',
            unpaid: false,
            paid: true,
          },
          {
            name: 'DS and Algo',
            unpaid: false,
            paid: true,
          },
          {
            name: 'Mock Interview',
            unpaid: false,
            paid: true,
          },
          {
            name: 'Group Discussions',
            unpaid: false,
            paid: true,
          },
          {
            name: 'System Design',
            unpaid: false,
            paid: true,
          },
        ],
      },
      {
        title: 'Advanced',
        title2: 'Interview Prep & Internship',
        headerClass: 'bg-primary text-white',
        route: '/class-detail/Fullstack-Advanced',
        registerLink: 'your_fs_paid_link_here',
        btnClass: 'btn-primary',
        btnTextColor: 'text-light',
        titleClass: 'fs-4',
        subtitle: '1st month FREE, then ₹4K / month',
        features: [
          {
            name: 'Objective',
            unpaid: 'Get your hands dirty on Live project and test your preparations',
            paid: 'Comprehensive interview preparation with real-world projects',
          },
          {
            name: 'Ideal For',
            unpaid: [
              'Freshers hunting for JOB',
              'Already has Java & Spring knowledge but lacks hands-on project experience.',
              'Wants a quick, real-world internship to boost their resume',
            ],
            paid: [
              'College Students OR Freshers -hunting for JOB',
              'Beginners or career switchers with no prior Java/Spring knowledge.',
              'Utilize Gap after college to gain real world experience',
            ],
          },
          {
            name: 'Prerequisite',
            unpaid: 'Must have knowledge of Spring/Java',
            paid: 'None, We will provide training from scratch',
          },
          { name: 'Selection', unpaid: 'Based on project submission and 1 interview call', paid: 'None' },
          {
            name: 'Duration',
            unpaid: '1 month',
            paid: '2-6 months',
          },
          {
            name: 'Tuition Charges',
            unpaid: 'Not Applicable',
            paid: '1st Month is Free',
          },
          {
            name: 'Payment Schedule',
            unpaid: false,
            paid: 'Starts from beginning of 2nd Month',
          },
          {
            name: 'Live Projects',
            unpaid: true,
            paid: true,
          },
          {
            name: 'Scrum call',
            unpaid: 'Yes -2 Per week',
            paid: 'Yes -3 days Per week',
          },
          {
            name: 'Interview Tips',
            unpaid: true,
            paid: true,
          },
          {
            name: 'Weekly Connect',
            unpaid: '2 days - (Scrum Calls)',
            paid: {
              label: '5 days',
              details: ['2 days Scrum calls', '3 Training Sessions']
            }
          },
          {
            name: 'Training',
            unpaid: false,
            paid: true,
          },
          {
            name: 'DS and Algo',
            unpaid: false,
            paid: true,
          },
          {
            name: 'Mock Interview',
            unpaid: false,
            paid: true,
          },
          {
            name: 'Group Discussions',
            unpaid: false,
            paid: true,
          },
          {
            name: 'System Design',
            unpaid: false,
            paid: true,
          },
        ],
      },
    ],
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.internshipType = params.get('type') || 'aws';
      this.internshipData =
        this.internshipType === 'fullstack' ? this.fullstackData : this.awsData;
    });
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }
}
