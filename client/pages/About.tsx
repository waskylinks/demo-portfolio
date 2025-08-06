import { CheckCircle, Download, MapPin, Mail, Phone } from "lucide-react"; // Icons for UI
import { Button } from "@/components/ui/button"; // Prebuilt button component from your UI library
import { useNavigate } from "react-router-dom"; // React Router hook for programmatic navigation

// Skills list to be displayed dynamically
const skills = [
  "React & Next.js",
  "TypeScript",
  "Node.js & Express",
  "UI/UX Design",
  "Mobile Development",
  "Database Design",
];

// Experience timeline data
const experience = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "2024 - Present",
    description:
      "Led development of enterprise web applications serving 100k+ users. Mentored junior developers and established best practices.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2019 - 2021",
    description:
      "Developed responsive websites and web applications for various clients. Specialized in React and modern frontend technologies.",
  },
  {
    title: "Junior Developer",
    company: "StartupHub",
    period: "2018 - 2019",
    description:
      "Built MVPs and prototypes for early-stage startups. Gained experience in rapid development and agile methodologies.",
  },
];

export default function About() {
  const navigate = useNavigate(); // For navigation to other routes like "/contact"

  // ---- Event Handlers ----
  const handleDownloadResume = () => {
    // Show alert when download resume button is clicked
    alert("This is a DEMO portfolio");
  };

  const handleScheduleCall = () => {
    // For mobile, open phone dialer; for desktop, show phone number in call popup
    window.location.href = "tel:+2349061614369";
  };

  const handleStartProject = () => {
    // Navigate to contact page
    navigate("/contact");
  };

  const handleGetInTouch = () => {
    // Navigate to contact page
    navigate("/contact");
  };

  return (
    <div className="py-16">
      {/* ==== Hero Section ==== */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ==== Left side (Intro text & buttons) ==== */}
            <div>
              {/* Heading */}
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Hi, I'm Likita
              </h1>
              {/* Subheading */}
              <p className="mt-6 text-xl text-muted-foreground">
                A passionate full-stack developer with 5+ years of experience
                creating digital solutions that make a difference.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                I specialize in building modern, scalable applications using
                cutting-edge technologies. My goal is to help businesses thrive
                in the digital world through innovative solutions.
              </p>
              {/* ==== Buttons ==== */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {/* Download Resume Button */}
                <Button size="lg" onClick={handleDownloadResume}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                {/* Get In Touch Button */}
                <Button size="lg" variant="outline" onClick={handleGetInTouch}>
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* ==== Right side (Image and location card) ==== */}
            <div className="relative">
              <div>
                <img
                  src="/Wasky.jpg"
                  alt="Likita Barnabas"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating location card */}
              <div className="absolute -bottom-6 -left-6 bg-background border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Based in</p>
                    <p className="text-muted-foreground">Gombe, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== Skills Section ==== */}
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

          {/* Skills grid */}
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

      {/* ==== Experience Section ==== */}
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

          {/* Timeline style experience listing */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-primary/20 last:border-l-0 last:pb-0"
                >
                  {/* Timeline bullet */}
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                  {/* Job card */}
                  <div className="bg-background rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {job.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {job.period}
                      </span>
                    </div>
                    <p className="font-medium text-primary mb-2">
                      {job.company}
                    </p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==== Contact Call-To-Action Section ==== */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to bring your project to life? I'd love to hear about it.
            </p>
            {/* Buttons for call to action */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              {/* Start a Project button navigates to contact page */}
              <Button size="lg" onClick={handleStartProject}>
                <Mail className="mr-2 h-4 w-4" />
                Start a Project
              </Button>
              {/* Schedule a Call button opens phone dialer */}
              <Button size="lg" variant="outline" onClick={handleScheduleCall}>
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
