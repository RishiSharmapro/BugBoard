import React from 'react';

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);
const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
    </svg>
);


const FiltersBar: React.FC<{
  onSearchChange: (query: string) => void;
  onFilterChange: (filterType: string, value: string) => void;
  onSortChange: (sortKey: string) => void;
}> = ({ onSearchChange, onFilterChange, onSortChange }) => (
  <div className="p-4 bg-white rounded-2xl shadow-sm mb-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Search Input */}
      <div className="relative col-span-1 md:col-span-2 lg:col-span-1">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search issues by title..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-10 pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
        />
      </div>
      
      {/* Filter Dropdowns */}
      <div className="relative">
        <select onChange={(e) => onFilterChange('status', e.target.value)} className="w-full h-10 pl-3 pr-8 text-base border border-slate-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">All Statuses</option>
          <option value="open">Open</option>
          <option value="in-progress">In-Progress</option>
          <option value="closed">Closed</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"/>
      </div>
      
      <div className="relative">
        <select onChange={(e) => onFilterChange('priority', e.target.value)} className="w-full h-10 pl-3 pr-8 text-base border border-slate-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="">All Priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"/>
      </div>
      
      {/* Sorting Dropdown */}
      <div className="relative">
        <select onChange={(e) => onSortChange(e.target.value)} className="w-full h-10 pl-3 pr-8 text-base border border-slate-300 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option value="updatedAt">Sort by Last Updated</option>
          <option value="createdAt">Sort by Created Date</option>
          <option value="priority">Sort by Priority</option>
        </select>
        <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"/>
      </div>
    </div>
  </div>
);

export default FiltersBar;