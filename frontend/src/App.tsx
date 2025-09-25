import { useState, useEffect, useMemo } from 'react';
import { Navbar, Footer, IssuesTable, FiltersBar, Pagination, Hero, FeaturesSection, TechStack, CallToAction } from './components'
import type { Issue, IssuePriority } from './types/Types';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// const mockIssues: Issue[] = [
//   {
//     id: 'BUG-001',
//     title: 'UI Button on login page not rendering correctly on mobile devices',
//     status: 'open',
//     priority: 'high',
//     assignee: mockAssignees[0],
//     createdAt: '2025-09-20T10:00:00Z',
//     updatedAt: '2025-09-24T14:30:00Z',
//   },
//   {
//     id: 'BUG-002',
//     title: 'API endpoint for user profiles returning 500 error',
//     status: 'in-progress',
//     priority: 'critical',
//     assignee: mockAssignees[1],
//     createdAt: '2025-09-19T11:00:00Z',
//     updatedAt: '2025-09-23T18:00:00Z',
//   },
//   {
//     id: 'BUG-003',
//     title: 'Update documentation for the new authentication flow',
//     status: 'closed',
//     priority: 'low',
//     assignee: mockAssignees[2],
//     createdAt: '2025-09-18T12:00:00Z',
//     updatedAt: '2025-09-22T09:00:00Z',
//   },
//   {
//     id: 'BUG-004',
//     title: 'Incorrect calculation in the monthly report generation',
//     status: 'open',
//     priority: 'medium',
//     assignee: mockAssignees[3],
//     createdAt: '2025-09-17T14:00:00Z',
//     updatedAt: '2025-09-21T11:45:00Z',
//   },
//   {
//     id: 'BUG-005',
//     title: 'Performance degradation when loading the main dashboard',
//     status: 'in-progress',
//     priority: 'high',
//     assignee: mockAssignees[0],
//     createdAt: '2025-09-16T15:00:00Z',
//     updatedAt: '2025-09-24T10:00:00Z',
//   },
//   {
//     id: 'BUG-006',
//     title: 'Add accessibility labels to all form inputs',
//     status: 'open',
//     priority: 'medium',
//     assignee: mockAssignees[1],
//     createdAt: '2025-09-15T16:00:00Z',
//     updatedAt: '2025-09-20T16:00:00Z',
//   },
// ];


const App = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    priority: '',
  });
  const [sortKey, setSortKey] = useState('updatedAt');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setTimeout(() => {
      const savedIssues = localStorage.getItem('sample_issues');
      if (savedIssues) {
        setIssues(JSON.parse(savedIssues));
      }
      // setIssues(mockIssues);
      setLoading(false);
    }, 1000);

    const load_samples = async () => {
      console.log("Fetching issues from backend...");
      await fetch('http://127.0.0.1:8000/issues/bulk', { method: 'POST' })
        .then(res => res.json())
        .then(res => { console.log("Backend response:", res); return res; })
        .then(res => {
          setIssues(res);
          localStorage.setItem('sample_issues', JSON.stringify(res));
          console.log("Loaded sample issues:", res);
        });
    };

    if (window.location.search.includes("loadSampleIssues")) {
      window.history.replaceState({}, document.title, "/");
      load_samples();
    }

  }, []);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setFilters(prev => ({ ...prev, search: query.toLowerCase() }));
    setCurrentPage(1);
  }

  const handleSortChange = (key: string) => {
    setSortKey(key);
  };

  const filteredAndSortedIssues = useMemo(() => {
    const result = issues
      .filter(issue =>
        issue.title.toLowerCase().includes(filters.search) &&
        (filters.status ? issue.status === filters.status : true) &&
        (filters.priority ? issue.priority === filters.priority : true)
      );

    const priorityOrder: Record<IssuePriority, number> = { 'low': 0, 'medium': 1, 'high': 2, 'critical': 3 };

    result.sort((a, b) => {
      if (sortKey === 'priority') {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      if (sortKey === 'created_at') {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
      // Default sort by updated_at
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
    console.log('logging result', result);

    return result;
  }, [issues, filters, sortKey]);

  const totalPages = Math.ceil(filteredAndSortedIssues.length / itemsPerPage);
  const paginatedIssues = filteredAndSortedIssues.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const route = createBrowserRouter([
    {
      path: "/dashboard",
      element: (
        <>
            <Navbar />
          <div className="bg-slate-50 min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <FiltersBar
                onSearchChange={handleSearchChange}
                onFilterChange={handleFilterChange}
                onSortChange={handleSortChange}
              />
              <IssuesTable issues={paginatedIssues} loading={loading} />
              {!loading && filteredAndSortedIssues.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </main>
          </div>
        </>
      )
    },
    {
      path: "/",
      element: (
        <>
          <div className="bg-white font-sans antialiased">
            <Navbar />
            <main>
              <Hero />
              <FeaturesSection />
              <TechStack />
              <CallToAction />
            </main>
            <Footer />
          </div>
        </>
      )
    },
    {
      path: "*",
      element: <div className="p-10 text-center">404 - Page Not Found</div>
    }
  ])

  return (
    <RouterProvider router={route} />
  );
};

export default App;
