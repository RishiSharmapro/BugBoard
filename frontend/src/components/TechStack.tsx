import React from 'react'

const TechStack = () => {
  return (
    <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">Powered By a Modern Tech Stack</h3>
            <div className="flex justify-center items-center gap-8 md:gap-12  opacity-70">
                <img src="/assets/React.svg" alt="React" className="h-12 md:h-16 " />
                <img src="/assets/TypeScript.svg" alt="TypeScript" className="h-12 md:h-16 fill-current text-slate-800" />
                <img src="/assets/TailwindCSS.svg" alt="Tailwind CSS" className="h-12 md:h-16 fill-current text-slate-800" />
                <img src="/assets/FastAPI.svg" alt="FastAPI" className="h-12 md:h-16 fill-current text-slate-800" />
                
            </div>
        </div>
    </section>
  )
}

export default TechStack