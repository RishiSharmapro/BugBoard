import React from 'react'
import type { Issue } from '../types/Types'

const EditIssue: React.FC<{ issue: Issue, setEdit: React.Dispatch<React.SetStateAction<boolean>> }> = ({ issue, setEdit }) => {
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
                    <select
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        defaultValue={issue.status}
                        onChange={(e) => issue.status = e.target.value as Issue['status']}
                    >
                        <option value="open">Open</option>
                        <option value="in-progress">In-Progress</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="priority">Priority</label>
                    <select
                        className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        defaultValue={issue.priority}
                        onChange={(e) => issue.priority = e.target.value as Issue['priority']}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="assignee">Assignee</label>
                    <input type="text" className="mt-1 block w-full border border-slate-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue={issue.assignee || "No assignee"} onChange={e => issue.assignee = e.target.value} />
                </div>
            </div>
            <div className='mt-4 flex justify-center gap-2'>
                <button className='px-4 py-2 w-36 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 transition-colors'
                onClick={
                    () => setEdit(false)
                }
                >Cancel</button>
                <button className='px-4 py-2 w-36 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors'
                onClick={() => {
                    setEdit(false);
                }}
                >Save Changes</button>

            </div>
        </div>
    </div>
        </>
    )
}

export default EditIssue