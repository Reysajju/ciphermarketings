import React from 'react';
import { 
  MousePointer2, Search, Share2, BarChart3, MessageSquare, 
  Mail, PenTool, Globe, Target, Smartphone 
} from 'lucide-react';

const services = [
  { icon: MousePointer2, title: 'PPC Advertising', description: 'Data-driven paid search campaigns that deliver ROI' },
  { icon: Search, title: 'SEO', description: 'Organic search optimization for sustainable growth' },
  { icon: Share2, title: 'Social Media', description: 'Engaging social presence across all platforms' },
  { icon: BarChart3, title: 'Display Ads', description: 'Visual advertising that captures attention' },
  { icon: MessageSquare, title: 'Content Marketing', description: 'Compelling content that converts' },
  { icon: Mail, title: 'Email Marketing', description: 'Targeted campaigns that nurture leads' },
  { icon: PenTool, title: 'Creative Design', description: 'Eye-catching visuals that tell your story' },
  { icon: Globe, title: 'Web Analytics', description: 'Deep insights into your performance' },
  { icon: Target, title: 'Remarketing', description: 'Re-engage interested prospects' },
  { icon: Smartphone, title: 'Mobile Marketing', description: 'Reach users on every device' }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive digital solutions for your business growth</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-xl bg-white border border-gray-100 hover:shadow-xl transition group cursor-pointer"
              >
                <Icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}