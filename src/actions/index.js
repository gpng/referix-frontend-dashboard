// set axios base config if in production
import axiosDefaults from 'axios/lib/defaults';
if (process.env.NODE_ENV === 'production') {
  axiosDefaults.baseURL = 'http://referix-api.herokuapp.com';
}

// manage all actions exports
export * from 'actions/authentication';
export * from 'actions/responsive';
export * from 'actions/jobs';
