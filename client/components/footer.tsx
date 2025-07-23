import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/waskylinks/",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/joel-likita-barnabas?utm_source=source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/Jay_slowasky?t=NKkwustt-Fc5FBtDnG4LxA&s=09/",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100083026935568/",
    icon: Facebook,
  },
];

const footerNavigation = {
  services: [
    { name: "Web Development", href: "/#services" },
    { name: "UI/UX Design", href: "/#services" },
    { name: "Mobile Apps", href: "/#services" },
    { name: "Consulting", href: "/#services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                Wasky_Links
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Professional freelance services to help your business grow. From
              web development to design, we've got you covered.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Services
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>likitajoel@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+234 906 161 4369</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Gombe, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wasky_Links. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
