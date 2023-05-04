import React from 'react'
import Login from './views/pages/login/Login'
import CallDetails from './views/CallDetails/CallDetails'
import Assessment from './views/Assessment/Assessment'
import Treatment from './views/Treatment/Treatment'
import Report from './views/reports/Report'

const routes = [
  { path: '/', exact: true, name: 'Base' },

  { path: '/CallDetails', name: 'Call Details', element: CallDetails },

  { path: '/Assessment', name: 'Assessment', element: Assessment },

  { path: '/Treatment', name: 'Treatment', element: Treatment },
  { path: '/login', name: 'Login', element: Login },
  { path: '/register', name: 'Register', element: Login },

  { path: '/reports', name: 'Reports', element: Report },
]

export default routes
