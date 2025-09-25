import type { Issue, IssueStatus, IssuePriority } from '../types/Types';
import { EditIssue, ViewIssue } from './';
import React, { useState } from 'react';

const formatDate = (date: Date) => {
  console.log(date);
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const StatusBadge: React.FC<{ status: IssueStatus }> = ({ status }) => {
  const baseClasses = "px-2.5 py-0.5 text-xs font-semibold rounded-full inline-block";
  const statusClasses = {
    open: 'bg-green-100 text-green-800',
    'in-progress': 'bg-slate-200 text-slate-800',
    closed: 'bg-red-100 text-red-800',
  };
  return <span className={`${baseClasses} ${statusClasses[status]}`}>{status.replace('-', ' ')}</span>;
};

// Priority Badge Component
const PriorityBadge: React.FC<{ priority: IssuePriority }> = ({ priority }) => {
  const baseClasses = "px-2.5 py-0.5 text-xs font-semibold rounded-full inline-block";
  const priorityClasses = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-orange-100 text-orange-800',
    critical: 'bg-purple-100 text-purple-800',
  };
  return <span className={`${baseClasses} ${priorityClasses[priority]}`}>{priority}</span>;
};


const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const IssuesTable: React.FC<{ issues: Issue[]; loading: boolean }> = ({ issues, loading }) => {
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [viewIssue, setViewIssue] = useState(false);

  if (viewIssue && selectedIssue) {
    return <ViewIssue issue={selectedIssue} setViewIssue={setViewIssue}/>;
  }

  if (openEdit && selectedIssue) {
    return <EditIssue issue={selectedIssue} setEdit={setOpenEdit} />;
  }

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        <p className="mt-4 text-slate-500">Loading issues...</p>
      </div>
    );
  }

  if (issues.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
        <h3 className="text-lg font-medium text-slate-700">No issues found</h3>
        <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filter criteria.</p>
        <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => { window.location.search = "?loadSampleIssues" }}
        >
          Load Sample Issues
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-300 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Priority</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Assignee</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Updated At</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-200">
            {issues.map((issue) => (
              <tr key={issue.id} onClick={() => {
                console.log(`Opening details for issue: ${issue.id}`);
                setSelectedIssue(issue);
                setViewIssue(true);
              }}
                className="hover:bg-slate-50 cursor-pointer transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-500">{issue.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 max-w-xs truncate">{issue.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 capitalize"><StatusBadge status={issue.status} /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 capitalize"><PriorityBadge priority={issue.priority} /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className='font-medium'>{issue.assignee}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{formatDate(issue.updated_at)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="text-indigo-600 hover:text-indigo-900 p-1 rounded-full hover:bg-indigo-100 transition-colors"
                    onClick={() => { setSelectedIssue(issue); setOpenEdit(true); }}
                  >
                    <EditIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuesTable;