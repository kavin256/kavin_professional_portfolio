import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  firstName: 'Kavin',
  lastName: 'Ranawella',
  title: 'Senior Full Stack Engineer',
  email: 'kavin256@gmail.com',
  profileImage: '/profile-pic.jpg',

  summary:
    'Senior Software Engineer with 6+ years of experience designing and delivering scalable, high-performance applications across FinTech, Open Banking, and SaaS. Skilled in building robust backend services, cloud-native architectures, and modern front-end solutions.',

  calendarLink: 'https://calendar.app.google/UxgqisLHMkgJDhFx5',

  socialLinks: {
    github: 'https://github.com/kavin256',
    linkedin: 'https://www.linkedin.com/in/kavin-ranawella/',
    facebook: 'https://www.facebook.com/kavin.ranawella',
  },

  skills: {
    languages: ['Java', 'TypeScript', 'JavaScript', 'Python'],
    frameworks: ['React / React Native', 'Angular', 'Spring Boot', 'Node.js', 'Express.js', 'AWS (Lambda, EC2, S3)', 'Docker', 'Terraform'],
  },

  experience: [
    {
      title: 'Senior Full Stack Engineer',
      company: 'Memaree Ventures',
      period: 'Jan 2023 - Present',
      achievements: [
        'Led development of "Scenes" feature using React Native, securing the company\'s first $120K investment',
        'Replaced monolithic API layers with AWS Lambda and S3, reducing latency by 30%',
        'Optimized image rendering with lazy loading, cutting initial load times from 2s to 0.5s',
        'Automated AWS resource provisioning using Terraform and CloudFormation, reducing manual deployment by 90%',
        'Mentored junior developers in RESTful API best practices, reducing backend integration bugs by 25%',
      ],
    },
    {
      title: 'Senior Customer Success Engineer',
      company: 'WSO2 Inc.',
      period: 'Aug 2021 - Sep 2022',
      achievements: [
        'Secured a $100K+ customer by leading product deployment of WSO2 API Manager software',
        'Led a team of 8 engineers in Germany, deploying WSO2 products across diverse server environments',
        'Developed PSD2-compliant APIs using Java/Spring Boot, driving customer adoption of open banking services',
        'Enhanced authentication workflows with OAuth2.0/OIDC protocols, reducing security breaches by 5%',
        'Integrated Berlin Group standards into core APIs, accelerating regulatory certification for 10+ Tier-1 financial institutions',
      ],
    },
    {
      title: 'Fullstack Software Engineer',
      company: 'CodeGen International',
      period: 'Mar 2019 - Aug 2021',
      achievements: [
        'Optimized 6 RESTful API endpoints, leading to a 60% increase in UI rendering performance',
        'Developed user and payment management features using Okta, ensuring compliance with Australian data privacy regulations',
        'Implemented API documentation using Swagger, reducing cross-team integration tickets by 50%',
        'Conducted unit testing with JUnit and leveraged Splunk for log monitoring to ensure service quality',
      ],
    },
  ],

  education: [
    {
      degree: 'PG Certificate in Mobile Application Development',
      institution: 'Fanshawe College, Canada',
      period: '2022 - 2023',
      details: 'Focused on modern mobile application development practices and technologies',
    },
    {
      degree: 'Masters of Business Administration',
      institution: 'University of Wolverhampton, UK',
      period: '2019 - 2021',
      details: 'Business management and strategic leadership',
    },
    {
      degree: 'BSc (Hons) in Computer Engineering',
      institution: 'University of Peradeniya, Sri Lanka',
      period: '2014 - 2018',
      details: 'Comprehensive study in computer engineering, software development, and algorithms',
    },
  ],

  projects: [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform built with Next.js and Node.js. Features include user authentication, payment processing, and inventory management.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates. Built using React and WebSockets for seamless collaboration.',
      technologies: ['React', 'WebSockets', 'MongoDB', 'Express'],
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard that displays current conditions and forecasts. Integrates with multiple weather APIs.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'REST APIs'],
    },
    {
      title: 'Social Media Analytics Tool',
      description:
        'Analytics dashboard for tracking social media metrics across multiple platforms. Features data visualization and export capabilities.',
      technologies: ['Python', 'Django', 'React', 'D3.js'],
    },
  ],
}
