import React from 'react'
import { motion } from 'framer-motion'

const CallToAction = () => {
  return (
    <section className="bg-slate-50">
        <div className="container mx-auto px-6 py-20 sm:py-24 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-slate-800"
            >
                Start tracking issues with ease — right now.
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
            >
                <a href="/dashboard" className="inline-flex items-center justify-center rounded-lg text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-14 px-10 py-4">
                    Open App
                </a>
            </motion.div>
        </div>
    </section>
  )
}

export default CallToAction