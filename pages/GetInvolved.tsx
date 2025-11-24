import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Card: React.FC<{ title: string; desc: string; buttonText: string; color: string }> = ({ title, desc, buttonText, color }) => {
    const handleApply = () => {
        alert(`Redirecting to the ${title} Application Portal...`);
    }

    return (
    <motion.div 
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      className={`bg-white p-8 rounded-3xl border border-slate-200 hover:border-${color}-400 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl`}
    >
        <h3 className={`text-2xl font-bold text-slate-900 mb-4 border-l-4 border-${color}-500 pl-4`}>{title}</h3>
        <p className="text-slate-600 mb-8 flex-grow">{desc}</p>
        <button 
            onClick={handleApply}
            className={`w-full py-4 border border-${color}-200 text-${color}-600 font-bold rounded-xl hover:bg-${color}-50 transition flex items-center justify-center gap-2 group`}
        >
            {buttonText} <ArrowRight className={`group-hover:translate-x-1 transition-transform text-${color}-500`} size={18} />
        </button>
    </motion.div>
    );
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export const GetInvolved: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-black text-slate-900 mb-6"
            >
              Get <span className="gradient-text">Involved</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
                Join us in transforming lives through inclusive innovation. Whether you're a student, professional, or organization, there's a place for you in the STRIDE ecosystem.
            </motion.p>
        </div>

        {/* Students */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          className="mb-20"
        >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center"><span className="w-3 h-3 rounded-full bg-cyan-500 mr-3"></span> For Students & Colleges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card 
                    color="cyan"
                    title="Student Ambassador" 
                    desc="Join our network of 100 student ambassadors leading the inclusive innovation movement. Organize events and raise awareness."
                    buttonText="Apply Now"
                />
                <Card 
                    color="cyan"
                    title="Host a Session" 
                    desc="Invite STRIDE to conduct workshops, talks, or demonstration sessions at your college. Bring insights on inclusive design."
                    buttonText="Request Session"
                />
                <Card 
                    color="cyan"
                    title="Innovation Centre" 
                    desc="Transform your college into a hub for inclusive innovation. Integrate assistive technology development into curricula."
                    buttonText="Partner With Us"
                />
            </div>
        </motion.div>

        {/* Professionals */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={sectionVariants}
           className="mb-20"
        >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center"><span className="w-3 h-3 rounded-full bg-fuchsia-500 mr-3"></span> For Professionals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card 
                    color="fuchsia"
                    title="Professional Ambassador" 
                    desc="Leverage your expertise to advance inclusive innovation. Join 25+ professional ambassadors from engineering, design, and business."
                    buttonText="Join Network"
                />
                 <Card 
                    color="fuchsia"
                    title="Become a Speaker" 
                    desc="Share your knowledge and experience with the STRIDE community. We're always looking for speakers for our STRIDE Forward series."
                    buttonText="Apply to Speak"
                />
            </div>
        </motion.div>

        {/* Industry */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={sectionVariants}
        >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center"><span className="w-3 h-3 rounded-full bg-violet-500 mr-3"></span> For Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card 
                    color="violet"
                    title="Sponsor Designathon" 
                    desc="Support our flagship innovation challenge. Gain visibility and access to top talent while supporting social impact."
                    buttonText="Sponsor 2026"
                />
                 <Card 
                    color="violet"
                    title="Sponsor a Project" 
                    desc="Directly support specific assistive technology development projects. Enable teams to access materials and equipment."
                    buttonText="Fund a Project"
                />
            </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center bg-gradient-to-r from-violet-600 to-cyan-600 shadow-2xl p-16 rounded-[3rem] relative overflow-hidden text-white">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5 }}
               className="relative z-10"
            >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
                <button 
                    onClick={() => alert("Opening contact form...")}
                    className="px-12 py-5 bg-white text-slate-900 font-bold rounded-full hover:bg-cyan-50 transition shadow-lg hover:shadow-cyan-500/50"
                >
                    Connect With Us
                </button>
            </motion.div>
        </div>

      </div>
    </div>
  );
};