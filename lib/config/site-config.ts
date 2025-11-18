import type { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Kavin Ranawella',
  title: 'Full Stack Engineer',
  email: 'kavin256@gmail.com',
  profileImage: '/profile-pic.jpg',

  summary:
    'Passionate software engineer with expertise in building scalable web applications and solving complex technical challenges. Experienced in full-stack development with a focus on modern technologies and best practices.',

  socialLinks: {
    github: 'https://github.com/kavin256',
    linkedin: 'https://www.linkedin.com/in/kavin-ranawella/',
    facebook: 'https://www.facebook.com/kavin.ranawella',
  },

  skills: {
    languages: ['JavaScript / TypeScript', 'Python', 'Java', 'Go'],
    frameworks: ['React / Next.js', 'Node.js', 'Docker', 'Git'],
  },

  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      period: '2021 - Present',
      achievements: [
        'Led development of microservices architecture serving 1M+ users',
        'Improved application performance by 40% through optimization',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'StartupXYZ',
      period: '2019 - 2021',
      achievements: [
        'Developed and maintained React-based web applications',
        'Collaborated with cross-functional teams to deliver features',
        'Implemented CI/CD pipelines for automated deployments',
      ],
    },
  ],

  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    period: '2015 - 2019',
    details: 'Relevant coursework: Data Structures, Algorithms, Software Engineering',
  },

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
