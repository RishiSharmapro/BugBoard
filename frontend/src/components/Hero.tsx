import React from 'react'
import { motion } from 'framer-motion';

const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const Hero = () => {

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white overflow-hidden">
    <div className="container mx-auto px-6 py-32 md:py-48 text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter"
      >
        Track Issues. Stay Organized.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-indigo-100"
      >
        BugBoard is a modern, open-source issue tracker built with FastAPI & React, designed for speed and simplicity.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <a href="/dashboard" className="inline-flex items-center justify-center rounded-lg text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-indigo-600 hover:bg-indigo-50 h-12 px-8 py-3 w-full sm:w-auto">
          Get Started
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white/50 bg-white/10 text-white hover:bg-white/20 h-12 px-8 py-3 w-full sm:w-auto">
          <GitHubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
      </motion.div>
    </div>
    <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
  </section>
  )
}

export default Hero