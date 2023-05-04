import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import { useState } from 'react'
import PatientAssessmentHistory from '../AssessmentComponents/PatientAssessmentHistory/PatientAssessmentHistory'
import PrimaryAssessment from '../AssessmentComponents/PrimaryAssessment/PrimaryAssessment'
import PatientAssessmentDetails from '../AssessmentComponents/PatientAssessmentDetails/PatientAssessmentDetails'

export default function Assessment() {
  const [activeKey, setActiveKey] = useState('patientHistory')
  const [conditions, setconditions] = useState(false)
  const [assessment, setAssessment] = useState({
    dateOfInjury: '',
    timeOfInjury: '',
    coResponders: '',
    treatmentRendered: '',
    patientCondition: '',
    patientDisplacement: '',
    suspectedIntoxication: '',
    chiefComplaint: '',
    neroResponse: '',
    bodySystem: '',
    glasGlow: '',
    generalAssessment: '',
    airway: '',
    symptoms: '',
    respiration: '',
    seizure: '',
    toxicExposure: '',
    cardiacArrest: '',
    chestPain: '',
    neonatal: '',
    obstetric: '',
    trauma: '',
  })
  return (
    <div>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            active={activeKey === 'patientHistory'}
            onClick={() => setActiveKey('patientHistory')}
            style={{ cursor: 'pointer' }}
          >
            Patient History
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            style={{ cursor: 'pointer' }}
            active={activeKey === 'primary'}
            onClick={() => setActiveKey('primary')}
          >
            Primary Assessment
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            style={{ cursor: 'pointer' }}
            active={activeKey === 'patientAssessment'}
            onClick={() => setActiveKey('patientAssessment')}
          >
            Patient Assessment
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane
          role="tabpanel"
          aria-labelledby="home-tab"
          visible={activeKey === 'patientHistory'}
        >
          <div className="mt-4 mb-4">
            <PatientAssessmentHistory
              setActiveKey={setActiveKey}
              activeKey={activeKey}
              setAssessment={setAssessment}
              assessment={assessment}
              conditions={conditions}
              setconditions={setconditions}
            />
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 'primary'}>
          <div className="mt-4 mb-4">
            <PrimaryAssessment
              setActiveKey={setActiveKey}
              activeKey={activeKey}
              setAssessment={setAssessment}
              assessment={assessment}
              conditions={conditions}
              setconditions={setconditions}
            />
          </div>
        </CTabPane>
        <CTabPane
          role="tabpanel"
          aria-labelledby="contact-tab"
          visible={activeKey === 'patientAssessment'}
        >
          <div className="mt-4 mb-4">
            <PatientAssessmentDetails
              setActiveKey={setActiveKey}
              activeKey={activeKey}
              setAssessment={setAssessment}
              assessment={assessment}
              setconditions={setconditions}
            />
          </div>
        </CTabPane>
      </CTabContent>
    </div>
  )
}
