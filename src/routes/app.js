import DashboardPage from 'views/Dashboard/Dashboard.js';
import UserProfile from 'views/UserProfile/UserProfile.js';
import UserManagement from 'views/UserManagement/UserManagement';
import JobManagement from 'views/JobManagement/JobManagement';
import JobSearch from 'views/JobSearch/JobSearch';
import JobsApplied from 'views/JobsApplied/JobsApplied';

import { Dashboard, Person, Work, Search } from 'material-ui-icons';

const appRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Referix Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    access: 7
  },
  {
    path: '/manageusers',
    sidebarName: 'User Management',
    navbarName: 'User Management',
    icon: Person,
    component: UserManagement,
    access: 1 // admin only
  },
  {
    path: '/managejobs',
    sidebarName: 'Your Jobs',
    navbarName: 'Jobs Management',
    icon: Work,
    component: JobManagement,
    access: 4 // admin only
  },
  {
    path: '/appliedjobs',
    sidebarName: 'Applied Jobs',
    navbarName: 'Applied Jobs',
    icon: Work,
    component: JobsApplied,
    access: 2 // recruiter only
  },
  {
    path: '/searchjobs',
    sidebarName: 'Search Jobs',
    navbarName: 'Job Search',
    icon: Search,
    component: JobSearch,
    access: 2 // recruiter only
  },
  {
    path: '/profile',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile,
    access: 6
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' }
];

export default appRoutes;
