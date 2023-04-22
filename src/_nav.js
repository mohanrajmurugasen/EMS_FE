import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBike,
  cilBlind,
  cilBook,
  cilHospital,
  cilPhone,
  cilPrint,
  cilSave,
  cilSitemap,
  cilTag,
  cilVector,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Call Details',
    to: '/CallDetails',
    icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Assessment',
    to: '/Assessment',
    icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Treatment',
    to: '/Treatment',
    icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Reports',
    to: '/reports',
    icon: <CIcon icon={cilPrint} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: 'Call Details',
  //   to: '/base',
  //   icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Patient Details',
  //       to: '/callDetails/PatientDetails',
  //       icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Vehicle Details',
  //       to: '/callDetails/VehicleDetails',
  //       icon: <CIcon icon={cilBike} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Incident Details',
  //       to: '/callDetails/IncidentDetails',
  //       icon: <CIcon icon={cilTag} customClassName="nav-icon" />,
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Assessment',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Patient History',
  //       to: '/assessment/PatientHistory',
  //       icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Primary Assessment',
  //       to: '/assessment/PrimaryAssessment',
  //       icon: <CIcon icon={cilSave} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Patient Assessment',
  //       to: '/assessment/PatientAssessment',
  //       icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Treatment',
  //   icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Patient Details',
  //       to: '/treatment/PatientDetails',
  //       icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Vital Sign',
  //       to: '/treatment/VitalSign',
  //       icon: <CIcon icon={cilVector} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  // {
  //   component: CNavGroup,
  //   name: 'Report',
  //   to: '/reports',
  //   icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CallDetails Report',
  //       to: '/reports/CallDetailsReport',
  //       icon: <CIcon icon={cilPrint} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Assessment Report',
  //       to: '/reports/AssessmentReport',
  //       icon: <CIcon icon={cilPrint} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Treatment Report',
  //       to: '/reports/TreatmentReport',
  //       icon: <CIcon icon={cilPrint} customClassName="nav-icon" />,
  //     },
  //     // {
  //     //   component: CNavGroup,
  //     //   name: 'CallDetails Report',
  //     //   to: '/base',
  //     //   icon: <CIcon icon={cilPhone} customClassName="nav-icon" />,
  //     //   items: [
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'Patient Report',
  //     //       to: '/reports/calldetails/patientdetails',
  //     //       icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  //     //     },
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'Vehicle Report',
  //     //       to: '/reports/calldetails/vehicledetails',
  //     //       icon: <CIcon icon={cilBike} customClassName="nav-icon" />,
  //     //     },
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'Incident Report',
  //     //       to: '/reports/calldetails/incidentdetails',
  //     //       icon: <CIcon icon={cilTag} customClassName="nav-icon" />,
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   component: CNavGroup,
  //     //   name: 'Assessment Report',
  //     //   to: '/buttons',
  //     //   icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
  //     //   items: [
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'Patient History Report',
  //     //       to: '/reports/assessment/patienthistory',
  //     //       icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  //     //     },
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'Primary Assess Report',
  //     //       to: '/reports/assessment/primaryassessment',
  //     //       icon: <CIcon icon={cilSave} customClassName="nav-icon" />,
  //     //     },
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'Patient Assess Report',
  //     //       to: '/reports/assessment/patientassessment',
  //     //       icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   component: CNavGroup,
  //     //   name: 'Treatment Report',
  //     //   icon: <CIcon icon={cilHospital} customClassName="nav-icon" />,
  //     //   items: [
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'Patient Report',
  //     //       to: '/reports/tratment/Patientdetailstreatment',
  //     //       icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  //     //     },
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'Vital Sign Report',
  //     //       to: '/reports/treatment/vitalsign',
  //     //       icon: <CIcon icon={cilVector} customClassName="nav-icon" />,
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
]

export default _nav
