import DashboardPage from 'views/Dashboard/Dashboard.js';
import UserProfile from 'views/UserProfile/UserProfile.js';
import TableList from 'views/TableList/TableList.js';
import Typography from 'views/Typography/Typography.js';
import Icons from 'views/Icons/Icons.js';
import Maps from 'views/Maps/Maps.js';
import NotificationsPage from 'views/Notifications/Notifications.js';
import UserManagement from 'views/UserManagement/UserManagement';
import JobManagement from 'views/JobManagement/JobManagement';

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  Work
} from 'material-ui-icons';

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
    path: '/profile',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile,
    access: 7
  },
  {
    path: '/table',
    sidebarName: 'Table List',
    navbarName: 'Table List',
    icon: ContentPaste,
    component: TableList,
    access: 7
  },
  {
    path: '/typography',
    sidebarName: 'Typography',
    navbarName: 'Typography',
    icon: LibraryBooks,
    component: Typography,
    access: 7
  },
  {
    path: '/icons',
    sidebarName: 'Icons',
    navbarName: 'Icons',
    icon: BubbleChart,
    component: Icons,
    access: 7
  },
  {
    path: '/maps',
    sidebarName: 'Maps',
    navbarName: 'Map',
    icon: LocationOn,
    component: Maps,
    access: 7
  },
  {
    path: '/notifications',
    sidebarName: 'Notifications',
    navbarName: 'Notifications',
    icon: Notifications,
    component: NotificationsPage,
    access: 7
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' }
];

export default appRoutes;
