import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and secure payments.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Healthcare Dashboard',
    description: 'A comprehensive dashboard for healthcare providers to manage patient data, appointments, and medical records.',
    image: '/placeholder.svg',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'D3.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with biometric authentication and real-time transactions.',
    image: '/placeholder.svg',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'SaaS Analytics Tool',
    description: 'Advanced analytics platform helping businesses track KPIs and make data-driven decisions with beautiful visualizations.',
    image: '/placeholder.svg',
    technologies: ['Next.js', 'Python', 'TailwindCSS', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real Estate Platform',
    description: 'Modern real estate platform with virtual tours, advanced search filters, and integrated CRM for agents.',
    image: '/placeholder.svg',
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Comprehensive social media management tool for scheduling posts, analytics, and team collaboration.',
    image: '/placeholder.svg',
    technologies: ['Angular', 'NestJS', 'Redis', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Recent Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A showcase of projects I've built for clients across various industries
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
