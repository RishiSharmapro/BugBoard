import React from 'react'
import { motion } from 'framer-motion'


const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

const BarChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
);

const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
);

const FileJsonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M10 12.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5"></path><path d="M14 12.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5"></path><path d="M10 15.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"></path></svg>
);

const featureList = [
    { icon: <SearchIcon className="w-8 h-8 text-indigo-500" />, title: 'Search & Filter Issues', description: 'Quickly find any issue with powerful, real-time search and intuitive filtering options.' },
    { icon: <BarChartIcon className="w-8 h-8 text-indigo-500" />, title: 'Sort & Paginate Results', description: 'Organize your issue list by priority, creation date, or last update. Navigate through pages with ease.' },
    { icon: <EditIcon className="w-8 h-8 text-indigo-500" />, title: 'Create & Edit Issues', description: 'A clean and straightforward interface for creating new issues and updating existing ones on the fly.' },
    { icon: <FileJsonIcon className="w-8 h-8 text-indigo-500" />, title: 'View Detailed JSON Data', description: 'Inspect the raw JSON data for any issue, perfect for developers and integrations.' },
];

const FeaturesSection = () => {

  return (
    <section id="features" className="py-20 sm:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Powerful Features, Simple Interface</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Everything you need to manage your project's issues without the clutter.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featureList.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-slate-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection