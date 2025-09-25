import React from 'react'
import type { Issue } from '../types/Types'

const ViewIssue: React.FC<{ issue: Issue, setViewIssue: React.Dispatch<React.SetStateAction<boolean>> }> = ({ issue, setViewIssue }) => {
  return (
    <>
    <div className='fixed inset-0 bg-slate-500/50 flex items-center justify-center z-10'>
        <div className='shadow-md border border-slate-200 rounded-md p-4 space-y-4 max-w-3xl mx-auto bg-white'>
            <label htmlFor='id'>Id</label>
            <input type="text" readOnly className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50 !cursor-not-allowed" disabled={true} value={issue.id}/>

            <label htmlFor="title">Title</label>
            <input type="text" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={issue.title} 
            onChange={(e) => issue.title = e.target.value} />
            {issue.description && (
              <>
                <label htmlFor="description">Description</label>
                <textarea className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" rows={4} defaultValue={issue.description} onChange={(e) => issue.description = e.target.value}></textarea>
              </>
            )}

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                    <label htmlFor="status">Status</label>
                    <input
                        type="text"
                        readOnly
                        disabled
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50 !cursor-not-allowed"
                        value={issue.status}
                    />
                </div>
                <div>
                    <label htmlFor="priority">Priority</label>
                    <input
                        type="text"
                        readOnly
                        disabled
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50 !cursor-not-allowed"
                        value={issue.priority}
                    />
                </div>
                <div>
                    <label htmlFor="assignee">Assignee</label>
                    <input
                        type="text"
                        readOnly
                        disabled
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50 !cursor-not-allowed"
                        value={issue.assignee || "No assignee"}
                    />
                </div>
            </div>
            <div className='mt-4 flex justify-center gap-2'>
                <button className='px-4 py-2 w-36 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 transition-colors'
                onClick={
                    () => setViewIssue(false)
                }
                >Close</button>
            </div>
        </div>
    </div>
        </>
    )
}

export default ViewIssue