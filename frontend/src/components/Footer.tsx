import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 py-8 text-center text-slate-500">
            <div className="flex justify-center items-center gap-6 mb-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 transition-colors">GitHub</a>
                <a href="#" className="hover:text-slate-800 transition-colors">Docs</a>
                <a href="#" className="hover:text-slate-800 transition-colors">Contact</a>
            </div>
            <p>&copy; {new Date().getFullYear()} BugBoard. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer