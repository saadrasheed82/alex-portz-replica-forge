import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProfileCard from './ProfileCard';
import { AnimatedSection } from './AnimatedSection';

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-12">
        <AnimatedSection direction="left" className="text-center lg:text-left flex-1">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Creative
            <span className="text-gradient block">Developer</span>
          </h1>
          
          <AnimatedSection direction="up" delay={0.2} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            <p>
              I craft exceptional digital experiences through innovative design and cutting-edge development
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
              <a href="#work" className="flex items-center gap-2">
                View My Work
                <ArrowDown size={20} />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#contact" className="flex items-center gap-2" onClick={(e) => {
                e.preventDefault();
                handleContactClick();
              }}>
                Get In Touch
                <Mail size={20} />
              </a>
            </Button>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.6} className="flex justify-center lg:justify-start space-x-6">
            <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@alexportz.com" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-lift">
              <Mail size={24} />
            </a>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2} className="flex-shrink-0">
          <ProfileCard
            handle="alexportz"
            status="Available for Work"
            avatarUrl="/profile_pic.png"
            showUserInfo={false}
            enableTilt={true}
          />
        </AnimatedSection>
      </div>
      
      {/* Scroll indicator */}
      <AnimatedSection direction="up" delay={0.8} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </AnimatedSection>
    </section>
  );
};

export default Hero;
