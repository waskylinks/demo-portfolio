import { CheckCircle, Download, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const skills = [
  'React & Next.js',
  'TypeScript',
  'Node.js & Express',
  'Python & Django',
  'UI/UX Design',
  'Mobile Development',
  'Cloud Architecture',
  'Database Design',
];

const experience = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    period: '2021 - Present',
    description: 'Led development of enterprise web applications serving 100k+ users. Mentored junior developers and established best practices.',
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Digital Agency',
    period: '2019 - 2021',
    description: 'Developed responsive websites and web applications for various clients. Specialized in React and modern frontend technologies.',
  },
  {
    title: 'Junior Developer',
    company: 'StartupHub',
    period: '2018 - 2019',
    description: 'Built MVPs and prototypes for early-stage startups. Gained experience in rapid development and agile methodologies.',
  },
];

export default function About() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Hi, I'm Alex
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                A passionate full-stack developer with 5+ years of experience 
                creating digital solutions that make a difference.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                I specialize in building modern, scalable applications using 
                cutting-edge technologies. My goal is to help businesses thrive 
                in the digital world through innovative solutions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                <img
                  src="/placeholder.svg"
                  alt="Alex Thompson"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-background border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Based in</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technical Skills
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Technologies I work with to bring your ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center space-x-2 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Experience
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My professional journey in software development
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <p className="font-medium text-primary mb-2">{job.company}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to bring your project to life? I'd love to hear about it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Start a Project
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
