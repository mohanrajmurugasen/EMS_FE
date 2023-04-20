import React, { useEffect } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { useState } from 'react'
import PatientCallDetails from '../base/PatientCallDetails/PatientCallDetails'
import VehicleCallDetails from '../base/VehicleCallDetails/VehicleCallDetails'
import IncidentCallDetails from '../base/IncidentCallDetails/IncidentCallDetails'

export default function CallDetails() {
  const [activeKey, setActiveKey] = useState('patient')
  const [conditions, setconditions] = useState(false)
  const [callDetails, setCallDetails] = useState({
    firstName: '',
    sureName: '',
    street: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    telePhone: '',
    DOB: '',
    age: '',
    gender: '',
    aadhar: '',
    medicalInsurance: '',
    typeOfInsurance: '',
    governmentInsurance_insuranceId: '',
    governmentInsurance_coverageAmount: '',
    governmentInsurance_benefits: '',
    privateInsurance_insuranceId: '',
    privateInsurance_benefits: '',
    hospitalChart: '',
    comments: '',
    timeNotified: '',
    timeEnroute: '',
    timeAtScene: '',
    crewPatient: '',
    timeOutScene: '',
    timeAtDestination: '',
    available: '',
    backArea: '',
    responseToScene: '',
    responseFromScene: '',
    crewType: '',
    mileage: '',
    patientContact: '',
    vehicle_destinationDeterminant: '',
    startDate: '',
    endDate: '',
    dateModified: '',
  })

  return (
    <div>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink active={activeKey === 'patient'} style={{ cursor: 'pointer' }}>
            Patient Details
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink style={{ cursor: 'pointer' }} active={activeKey === 'vehicle'}>
            Vehicle Details
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink style={{ cursor: 'pointer' }} active={activeKey === 'incident'}>
            Incident Details
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 'patient'}>
          <div className="mt-4 mb-4">
            <PatientCallDetails
              setActiveKey={setActiveKey}
              activeKey={activeKey}
              setCallDetails={setCallDetails}
              callDetails={callDetails}
              conditions={conditions}
              setconditions={setconditions}
            />
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 'vehicle'}>
          <div className="mt-4 mb-4">
            <VehicleCallDetails
              setActiveKey={setActiveKey}
              activeKey={activeKey}
              setCallDetails={setCallDetails}
              callDetails={callDetails}
              conditions={conditions}
              setconditions={setconditions}
            />
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 'incident'}>
          <div className="mt-4 mb-4">
            <IncidentCallDetails
              setActiveKey={setActiveKey}
              activeKey={activeKey}
              setCallDetails={setCallDetails}
              callDetails={callDetails}
              setconditions={setconditions}
            />
          </div>
        </CTabPane>
      </CTabContent>
    </div>
  )
}
