import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileCard from './ProfileCard';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-12">
        <div className="text-center lg:text-left flex-1 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Creative
            <span className="text-gradient block">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            I craft exceptional digital experiences through innovative design and cutting-edge development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
              <a href="#work" className="flex items-center gap-2">
                View My Work
                <ArrowDown size={20} />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail size={20} />
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-start space-x-6">
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@alexportz.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 animate-fade-in">
          <ProfileCard
            handle="alexportz"
            status="Available for Work"
            contactText="Contact Me"
            avatarUrl="/profile_pic.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => {
              const contactSection = document.querySelector('#contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
