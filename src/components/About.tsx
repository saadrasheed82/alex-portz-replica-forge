
import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern frameworks and technologies'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces'
    },
    {
      icon: Smartphone,
      title: 'Mobile',
      description: 'Responsive design and mobile-first development'
    },
    {
      icon: Globe,
      title: 'Web Apps',
      description: 'Building scalable and performant web applications'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate creative developer with over 5 years of experience in crafting 
            digital experiences that blend beautiful design with robust functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-6xl font-bold text-gradient">AP</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Turning Ideas Into Reality</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I specialize in creating digital solutions that not only look amazing but also 
              deliver exceptional user experiences. My approach combines technical expertise 
              with creative vision to build products that make a real impact.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether it's a sleek web application, a responsive website, or a complex 
              digital platform, I bring the same level of passion and attention to detail 
              to every project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border-border hover-lift cursor-pointer">
              <CardContent className="p-6 text-center">
                <skill.icon className="mx-auto mb-4 text-primary" size={48} />
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
