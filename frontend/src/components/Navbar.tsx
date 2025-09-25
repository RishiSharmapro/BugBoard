import React from 'react'

const Navbar = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <a href='/' className="cursor-pointer text-2xl font-bold text-slate-800 p-2">BugBoard</a>
                    <nav>
                        <a href="#features" className="text-black/60 hover:text-black transition-colors duration-300">Features</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar