import DashboardPage from 'views/Dashboard/Dashboard.js';
import UserProfile from 'views/UserProfile/UserProfile.js';
import TableList from 'views/TableList/TableList.js';
import Typography from 'views/Typography/Typography.js';
import Icons from 'views/Icons/Icons.js';
import Maps from 'views/Maps/Maps.js';
import NotificationsPage from 'views/Notifications/Notifications.js';

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications
} from 'material-ui-icons';

const appRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Referix Dashboard',
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: '/user',
    sidebarName: 'User Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserProfile
  },
  {
    path: '/table',
    sidebarName: 'Table List',
    navbarName: 'Table List',
    icon: ContentPaste,
    component: TableList
  },
  {
    path: '/typography',
    sidebarName: 'Typography',
    navbarName: 'Typography',
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: '/icons',
    sidebarName: 'Icons',
    navbarName: 'Icons',
    icon: BubbleChart,
    component: Icons
  },
  {
    path: '/maps',
    sidebarName: 'Maps',
    navbarName: 'Map',
    icon: LocationOn,
    component: Maps
  },
  {
    path: '/notifications',
    sidebarName: 'Notifications',
    navbarName: 'Notifications',
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' }
];

export default appRoutes;
