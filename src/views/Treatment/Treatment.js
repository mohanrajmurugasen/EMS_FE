import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { useState } from 'react'
import PatientTreatmentDetails from '../forms/PatientTreatmentDetails/PatientTreatmentDetails'
import VitalSign from '../forms/VitalSign/VitalSign'

export default function Treatment() {
  const [activeKey, setActiveKey] = useState('patientDetails')
  const [conditions, setconditions] = useState(false)
  const [treatment, setTreatment] = useState({
    procedureStartTime: '',
    procedureType: '',
    procedureEndTime: '',
    deviceMethod: '',
    technicianID: '',
    deviceSize: '',
    outcome: '',
    successfull: '',
    treatment: '',
    totalTime: '',
    treatmentType: '',
    administrativeRoute: '',
    assessmentTime: '',
    consciousnessLevel: '',
    pulseRate: '',
    siteOfPulseCheck: '',
    temperature: '',
    siteOfTemperatureCheck: '',
    skinColor: '',
    moisture: '',
    bloodPressure_systolic: '',
    bloodPressure_diastolic: '',
    respiration: '',
    bloodGlucose: '',
    oxygenSaturation_preOxygen: '',
    oxygenSaturation_postOxygen: '',
  })
  return (
    <div>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink active={activeKey === 'patientDetails'} style={{ cursor: 'pointer' }}>
            Patient Details
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink style={{ cursor: 'pointer' }} active={activeKey === 'vitalSign'}>
            Vital Sign
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane
          role="tabpanel"
          aria-labelledby="home-tab"
          visible={activeKey === 'patientDetails'}
        >
          <div className="mt-4 mb-4">
            <PatientTreatmentDetails
              setActiveKey={setActiveKey}
              activeKey={activeKey}
              setTreatment={setTreatment}
              treatment={treatment}
              conditions={conditions}
              setconditions={setconditions}
            />
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 'vitalSign'}>
          <div className="mt-4 mb-4">
            <VitalSign
              setActiveKey={setActiveKey}
              activeKey={activeKey}
              setTreatment={setTreatment}
              treatment={treatment}
              setconditions={setconditions}
            />
          </div>
        </CTabPane>
      </CTabContent>
    </div>
  )
}
