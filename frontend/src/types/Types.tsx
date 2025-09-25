type IssueStatus = 'open' | 'in-progress' | 'closed';
type IssuePriority = 'low' | 'medium' | 'high' | 'critical';


interface Issue {
  id: string;
  title: string;
  description?: string;
  status: IssueStatus;
  priority: IssuePriority;
  assignee: string | null;
  created_at: Date;
  updated_at: Date;
}

export type { Issue, IssueStatus, IssuePriority };