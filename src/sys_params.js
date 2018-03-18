export default {
  /**
   * @param {string} label Text to be displayed on nav bar
   * @param {string} icon Icon to be displayed on nav bar, taken from material.io/icons/
   * @param {string} path Redirect path
   * @param {string} title Title to be displayed on header
   * @param {integer} access Summation of role id, controls whether to display on nav bar
   */
  routes: [
    {
      label: 'Dashboard',
      icon: 'PieChart',
      path: '/dashboard',
      title: 'Dashboard',
      access: 7 // all
    },
    {
      label: 'User Management',
      icon: 'AccountCircle',
      path: '/dashboard/usermanagement',
      title: 'User Management',
      access: 1 // admin only
    },
    {
      label: 'Profile',
      icon: 'AccountCircle',
      path: '/dashboard/profile',
      title: 'Profile',
      access: 6 // recruiter + company
    },
    {
      label: 'Search Jobs',
      icon: 'Work',
      path: '/dashboard/jobsearch',
      title: 'Search Jobs',
      access: 2 // recruiter only
    },
    {
      label: 'Your Jobs',
      icon: 'Work',
      path: '/dashboard/jobmanagement',
      title: 'Your Jobs',
      access: 4 // company only
    },
    {
      label: 'Change Password',
      icon: 'Edit',
      path: '/dashboard/passwordchange',
      title: 'Change Password',
      access: 6 //  recruiter + company
    }
  ],
  constants: {
    drawerWidth: 240,
    appBarHeight: 64
  },
  roles: {
    admin: 1, // 001
    recruiter: 2, // 010
    company: 4 // 100
  }
};
