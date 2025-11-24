import React from 'react';
import { BlurFade } from '../components/ui/blur-fade';

// Images curated for inclusive innovation, workshops, tech, and community
// Replaced generic images with specific assistive tech / innovation themes
const galleryImages = [
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop", // Robotic Arm closeup
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Person using assistive tech
  "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800&auto=format&fit=crop", // 3D printing lab
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop", // Diverse team collaboration
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", // Braille/Tactile
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", // Students working
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // Electronics Lab
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", // Tech team huddle
  "https://images.unsplash.com/photo-1618519655655-4673f8fb2587?q=80&w=800&auto=format&fit=crop", // Accessibility Ramp/Wheelchair
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop", // Diverse group hugging
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop", // Futuristic circuit
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop", // Coding screen
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop", // Hands stack
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", // Planning meeting
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop"  // Developer
];

export const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
             <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Our <span className="gradient-text">Gallery</span></h1>
          </BlurFade>
          <BlurFade delay={0.2} inView>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
               Glimpses into the innovation, collaboration, and impact happening across the STRIDE ecosystem every day.
             </p>
          </BlurFade>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((imageUrl, idx) => (
            <BlurFade key={imageUrl + idx} delay={0.25 + idx * 0.05} inView>
              <div className="break-inside-avoid overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-slate-200 bg-white">
                <img
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  src={imageUrl}
                  alt={`Gallery image ${idx + 1}`}
                  loading="lazy"
                />
                <div className="p-3 bg-white">
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">STRIDE Community Highlight</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};