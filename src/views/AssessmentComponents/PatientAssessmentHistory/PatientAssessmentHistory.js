import React, { useEffect } from 'react'
import { useState } from 'react'

import { CButton } from '@coreui/react'

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CContainer,
  CRow,
  CCol,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CFormCheck,
  CFormFloating,
} from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify'
import AuthAxios from 'src/Interceptors/AuthAxios'
import { Input } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFormValue } from 'src/Redux/Actions/FormAction'

const PatientAssessmentHistory = ({
  setActiveKey,
  activeKey,
  setAssessment,
  assessment,
  conditions,
  setconditions,
}) => {
  const [visible, setVisible] = useState(false)
  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)
  const [disabel, setdisabel] = useState(true)
  const navigate = useNavigate()

  const [submitCon, setsubmitCon] = useState(true)

  const state1 = useSelector((state) => state.formValueReducer.formValue)
  const dispatch = useDispatch()

  const [state, setState] = useState({
    userId: '1',
    dateOfInjury: '',
    timeOfInjury: '',
    coResponders: '',
    treatmentRendered: '',
    patientCondition: '',
    patientDisplacement: '',
    suspectedIntoxication: '',
    chiefComplaint: '',
    email: '',
  })

  useEffect(() => {
    if (
      state.dateOfInjury !== '' &&
      state.timeOfInjury !== '' &&
      state.coResponders !== '' &&
      state.treatmentRendered !== '' &&
      state.patientCondition !== '' &&
      state.patientDisplacement !== '' &&
      state.suspectedIntoxication !== '' &&
      state.chiefComplaint !== ''
    ) {
      setsubmitCon(false)
    } else {
      setsubmitCon(true)
    }
  }, [state])

  const handleInputChange = (event, name) => {
    const { value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
    dispatch(addFormValue({
      name: name,
      value: value
    }))
  }

  const users = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    setState((prevProps) => ({
      ...prevProps,
      userId: users.result._id,
    }))
  }, [])

  const submitHandler = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = regex.test(state.email)
    if (email) {
      setdisabel(false)
      AuthAxios.post('PatientHistoryAssessment', state)
        .then((res) => {
          console.log(res.data)
          success(res.data.message)
          setdisabel(true)
          setVisible(false)
          setTimeout(() => {
            setState((prevProps) => ({
              ...prevProps,
              userId: '1',
              dateOfInjury: '',
              timeOfInjury: '',
              coResponders: '',
              treatmentRendered: '',
              patientCondition: '',
              patientDisplacement: '',
              suspectedIntoxication: '',
              chiefComplaint: '',
              email: '',
            }))
          }, 1000)
        })
        .catch((err) => {
          failure('Internal Server Error')
          setdisabel(true)
          console.error(err.message)
        })
    } else {
      failure('Enter valid emails!')
    }
  }

  const nextTab = () => {
    setAssessment((callDetails) => ({
      ...callDetails,
      dateOfInjury: state.dateOfInjury,
      timeOfInjury: state.timeOfInjury,
      coResponders: state.coResponders,
      treatmentRendered: state.treatmentRendered,
      patientCondition: state.patientCondition,
      patientDisplacement: state.patientDisplacement,
      suspectedIntoxication: state.suspectedIntoxication,
      chiefComplaint: state.chiefComplaint,
    }))
    setActiveKey('primary')
  }

  useEffect(() => {
    if (conditions) {
      setState((prevProps) => ({
        ...prevProps,
        userId: '1',
        dateOfInjury: '',
        timeOfInjury: '',
        coResponders: '',
        treatmentRendered: '',
        patientCondition: '',
        patientDisplacement: '',
        suspectedIntoxication: '',
        chiefComplaint: '',
        email: '',
      }))
    }
    setconditions(false)
  }, [conditions])

  return (
    <div>
      <CContainer>
        <CRow className="mb-3">
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <Input
                type="date"
                name="dateOfInjury"
                value={state1.dateOfInjury}
                onChange={(event) => handleInputChange(event, 'dateOfInjury')}
                style={{ width: '100%', height: '50px' }}
              ></Input>
              <CFormLabel htmlFor="floatingInput">Date Of Injury</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <Input
                type="Time"
                name="timeOfInjury"
                value={state1.timeOfInjury}
                onChange={(event) => handleInputChange(event, 'timeOfInjury')}
                style={{ width: '100%', height: '50px' }}
              ></Input>
              <CFormLabel htmlFor="floatingInput">Time Of Injury</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Co-Respondars"
                value={state1.coResponders}
                onChange={(event) => handleInputChange(event, 'coResponders')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Co-Respondars</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Treatment Rendered"
                value={state1.treatmentRendered}
                onChange={(event) => handleInputChange(event, 'treatmentRendered')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Treatment Rendered</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer>
        <CRow className="mt-3">
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Patient Condition at Destination"
                value={state1.patientCondition}
                onChange={(event) => handleInputChange(event, 'patientCondition')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Patient Condition at Destination</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Patient Displacement"
                value={state1.patientDisplacement}
                onChange={(event) => handleInputChange(event, 'patientDisplacement')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Patient Displacement</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer>
        <CRow className="mt-3 mb-4">
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Suspected Intoxication"
                value={state1.suspectedIntoxication}
                onChange={(event) => handleInputChange(event, 'suspectedIntoxication')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Suspected Intoxication</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Chief Complaint"
                value={state1.chiefComplaint}
                onChange={(event) => handleInputChange(event, 'chiefComplaint')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Chief Complaint</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol lg={6} md={6} sm={6}>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-secondary" onClick={() => navigate("/CallDetails")}>
                Back
              </button>
            </div>
          </CCol>
          <CCol lg={6} md={6} sm={6}>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-success" onClick={() => nextTab()}>
                Next
              </button>
            </div>
          </CCol>
        </CRow>

        <CModal visible={visible}>
          <CModalHeader>
            <CModalTitle>DOTTY CARE</CModalTitle>
          </CModalHeader>

          <div class="modal-body mx-3">
            <div class="md-form mb-4">
              <i class="fas fa-envelope prefix grey-text"></i>
              <CFormInput
                type="email"
                id="form2"
                value={state.email}
                onChange={(event) => handleInputChange(event, 'email')}
                class="form-control validate"
              />
              <label data-error="wrong" data-success="right" for="form2">
                Hospital EMail-Id
              </label>
            </div>
          </div>

          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton
              color="primary"
              disabled={state.email !== '' && disabel ? false : true}
              onClick={() => submitHandler()}
            >
              Submit
            </CButton>
          </CModalFooter>
        </CModal>
      </CContainer>
      <ToastContainer />
    </div>
  )
}

export default PatientAssessmentHistory
