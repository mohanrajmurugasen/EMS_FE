import React, { useEffect } from 'react'
import { useState } from 'react'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'

import { CButton, CCol, CContainer, CRow } from '@coreui/react'
import {
  // CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormLabel,
  CFormFloating,
  CFormInput,
  CFormSelect,
  CFormCheck,
} from '@coreui/react'
import './style.css'
import AuthAxios from 'src/Interceptors/AuthAxios'
import { ToastContainer, toast } from 'react-toastify'

const PatientTreatmentDetails = ({
  setActiveKey,
  activeKey,
  setTreatment,
  treatment,
  conditions,
  setconditions,
}) => {
  const [visible, setVisible] = useState(false)
  const [disabel, setdisabel] = useState(true)
  const [time, setTime] = useState('')

  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)

  const [submitCon, setsubmitCon] = useState(true)

  const [state, setState] = useState({
    userId: '1',
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
    email: '',
  })

  useEffect(() => {
    if (
      state.procedureStartTime !== '' &&
      state.procedureType !== '' &&
      state.procedureEndTime !== '' &&
      state.deviceMethod !== '' &&
      state.technicianID !== '' &&
      state.deviceSize !== '' &&
      state.outcome !== '' &&
      state.successfull !== '' &&
      state.treatment !== '' &&
      state.totalTime !== '' &&
      state.treatmentType !== '' &&
      state.administrativeRoute !== ''
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
      AuthAxios.post('PatientTreatmentDetails', state)
        .then((res) => {
          console.log(res.data)
          success(res.data.message)
          setVisible(false)
          setdisabel(true)
          setTimeout(() => {
            setState((prevProps) => ({
              ...prevProps,
              userId: '1',
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
    setTreatment((callDetails) => ({
      ...callDetails,
      procedureStartTime: state.procedureStartTime,
      procedureType: state.procedureType,
      procedureEndTime: state.procedureEndTime,
      deviceMethod: state.deviceMethod,
      technicianID: state.technicianID,
      deviceSize: state.deviceSize,
      outcome: state.outcome,
      successfull: state.successfull,
      treatment: state.treatment,
      totalTime: state.totalTime,
      treatmentType: state.treatmentType,
      administrativeRoute: state.administrativeRoute,
    }))
    setActiveKey('vitalSign')
  }

  useEffect(() => {
    if (conditions) {
      setState((prevProps) => ({
        ...prevProps,
        userId: '1',
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
        email: '',
      }))
    }
    setconditions(false)
  }, [conditions])

  return (
    <div>
      <CContainer className="m-4 vehicle">
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <p>Procedure Start Time</p>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => {
                setState((prevProps) => ({
                  ...prevProps,
                  procedureStartTime: e.format('LT'),
                }))
                setTime(e.format('LT'))
              }}
              className="times"
            />
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <p>Treatment End Time</p>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => {
                setState((prevProps) => ({
                  ...prevProps,
                  procedureEndTime: e.format('LT'),
                }))
                setTime(e.format('LT'))
              }}
              className="times"
            />
          </CCol>
        </CRow>

        <CRow>
          <CCol lg={4} md={4} sm={12} className="mt-4">
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="procedureType"
                value={state.procedureType}
                onChange={(event) => handleInputChange(event, 'procedureType')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Types Of Procedure</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={4} md={4} sm={12} className="mt-4">
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="state"
                value={state.deviceMethod}
                onChange={(event) => handleInputChange(event, 'deviceMethod')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Device Method</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={4} md={4} sm={12} className="mt-4">
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="technicianID"
                value={state.technicianID}
                onChange={(event) => handleInputChange(event, 'technicianID')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">TechnicianID</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={4} md={4} sm={12} className="">
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="deviceSize"
                value={state.deviceSize}
                onChange={(event) => handleInputChange(event, 'deviceSize')}
                style={{ height: '50px' }}
                className="mb-3"
              />
              <CFormLabel htmlFor="floatingInput">Device Size</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={4} md={4} sm={12}>
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Outcome"
                value={state.outcome}
                onChange={(event) => handleInputChange(event, 'outcome')}
                style={{ height: '50px' }}
                className="mb-3"
              />
              <CFormLabel htmlFor="floatingInput">Outcome</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={4} md={4} sm={12}>
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Successful"
                value={state.successfull}
                onChange={(event) => handleInputChange(event, 'successfull')}
                style={{ height: '50px' }}
                className="mb-3"
              />
              <CFormLabel htmlFor="floatingInput">Successful</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>

        <CRow>
          <CCol lg={6} md={6} sm={12} className="mt-3">
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="treatment"
                value={state.treatment}
                onChange={(event) => handleInputChange(event, 'treatment')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Treatment</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12} className="mt-3">
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="todalTime"
                value={state.totalTime}
                onChange={(event) => handleInputChange(event, 'totalTime')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Total Time</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Treatment Type"
                value={state.treatmentType}
                onChange={(event) => handleInputChange(event, 'treatmentType')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Treatment Type</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="adminstrativeRoute"
                value={state.administrativeRoute}
                onChange={(event) => handleInputChange(event, 'administrativeRoute')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Administrative Route</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CRow item xs={12}>
        <CRow>
          <CCol lg={6} md={6} sm={6}>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-secondary" disabled>
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
      </CRow>
      <ToastContainer />
    </div>
  )
}

export default PatientTreatmentDetails
