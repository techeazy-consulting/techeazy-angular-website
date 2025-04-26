import { Component } from '@angular/core';
import { env } from '../../../environment/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internship-tab',
  templateUrl: './internship-tab.component.html',
  styleUrl: './internship-tab.component.css',
})
export class InternshipTabComponent {
  env_url = env;

  internshipType: string = '';
  internshipData: any = {};

  allInternships: { [key: string]: any } = {
    aws: {
      bannerTitle: '"🎓 Ready to Kickstart Your IT Career? 🚀"',
      description: `Are you ready to build real-world AWS Cloud Computing skills? This 1-month intensive internship-style trainingby TechEazy Consulting is designed for students and professionals (0-2 years experience) who want to gain hands-on AWS experience by deploying real applications on the cloud.

This program is structured like a real-world cloud engineering role, where you will attend scrum calls, participate in practical sessions, and deploy a live project on AWS.`,
      pricingCards: [
        {
          title: 'Free',
          headerClass: 'bg-primary text-white',
          route: '/class-detail/AWS-Internship',
          registerLink: env.free_Registration_Link,
          btnClass: 'btn-light',
          titleClass: 'super-title',
          btnTextColor: 'text-dark',
          features: [
            'FREE completion certificate',
            'Boost your resume with AWS',
            'Deploy your Project on AWS',
            'Understand Cloud Computing',
            'Learn AWS IAM, EC2, DynamoDB, S3',
            'Interview Tips',
            'Quizzes and feedback',
            'Hackathon',
          ],
          featureRoute: '/all-features/aws'
        },
        {
          title: 'Advanced',
          headerClass: 'bg-light text-primary',
          route: '/class-detail/AWS-Interview-and-Internship',
          registerLink: env.paid_Registration_Link,
          btnClass: 'btn-primary',
          titleClass: 'super-title',
          btnTextColor: 'text-light',
          // subtitle: '1st month FREE, then ₹4K / month',
          features: [
            'Advanced AWS concepts',
            'Horizontal and vertical Scaling',
            'Load balancers in AWS',
            'Networking in AWS',
            'Security in AWS',
            'API gateway in AWS',
            'Serverless architecture',
            'Messaging system in AWS',
            'Event driven architecture',
            'Infrastructure as code (IaaC)',
          ],
          featureRoute: '/all-features/aws'
        },
      ],
    },

    fullstack: {
      bannerTitle: '"💻 Become a Full-Stack Web Developer!"',
      description: `Master both frontend and backend technologies with our Full Stack internship...`,
      pricingCards: [
        {
          title: 'Free',
          headerClass: 'bg-primary text-white',
          route: '/class-detail/Java-Fullstack-with-AWS-Internship',
          registerLink: env.free_Registration_Link,
          btnClass: 'btn-light',
          titleClass: 'super-title',
          btnTextColor: 'text-dark',
          features: [
            'Absolutely FREE ',
            'Boost your resume',
            'Work on Live Projects',
            'Interview Tips',
          ],
          featureRoute: '/all-features/fullstack'
        },
        {
          title: 'Advanced',
          headerClass: 'bg-light text-primary',
          route: '/class-detail/Java-Fullstack-with-AWS-Internship',
          registerLink: env.paid_Registration_Link,
          btnClass: 'btn-primary',
          titleClass: 'super-title',
          btnTextColor: 'text-light',
          // subtitle: '1st month FREE, then ₹4K / month',
          features: [
            'Data structure and Algo',
            'Comprehensive training -no prior knowledge required',
            'One to one mock interviews',
            'One to one resume feedback',
            'Learn cloud computing (AWS)',
            'Learn DevOps, CI/CD',
          ],
          featureRoute: '/all-features/fullstack'
        },
      ],
    },
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const type = params.get('internshipType');
      if (type && this.allInternships[type]) {
        this.internshipType = type;
        this.internshipData = this.allInternships[type];
      }
    });
  }
}
