import React, { useEffect } from 'react'
import { useState } from 'react'

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CContainer,
  CRow,
  CCol,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

import { CButton } from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify'
import { Input } from 'reactstrap'
import AuthAxios from 'src/Interceptors/AuthAxios'

const IncidentCallDetails = ({
  setActiveKey,
  activeKey,
  setCallDetails,
  callDetails,
  setconditions,
}) => {
  const [visible, setVisible] = useState(false)
  const success = (e) => toast.success(e)
  const [disabel, setdisabel] = useState(true)
  const failure = (e) => toast.error(e)

  const [submitCon, setsubmitCon] = useState(true)

  const [state, setState] = useState({
    userId: '',
    serviceCode: '',
    serviceType: '',
    dateOfIncident: '',
    timeOfIncident: '',
    incidentLocation_street: '',
    incidentLocation_city: '',
    incidentLocation_state: '',
    incidentLocation_postalCode: '',
    destinationDeterminant: '',
    graphicLocator: '',
    sceneLocationType: '',
    destinationFacility: '',
    sceneFacility: '',
    destinationLocationAddress: '',
    destinationLocation_street: '',
    destinationLocation_city: '',
    destinationLocation_state: '',
    destinationLocation_postalCode: '',
    servicePayment_responsibility: '',
    servicePayment_number: '',
    EMS: '',
    patientDisposition: '',
    destinationLocationType: '',
    email1: '',
    email2: '',
  })

  useEffect(() => {
    if (
      state.serviceCode !== '' &&
      state.serviceType !== '' &&
      state.dateOfIncident !== '' &&
      state.timeOfIncident !== '' &&
      state.incidentLocation_street !== '' &&
      state.incidentLocation_city !== '' &&
      state.incidentLocation_state !== '' &&
      state.incidentLocation_postalCode !== '' &&
      state.destinationDeterminant !== '' &&
      state.graphicLocator !== '' &&
      state.sceneLocationType !== '' &&
      state.destinationFacility !== '' &&
      state.sceneFacility !== '' &&
      state.destinationLocation_street !== '' &&
      state.destinationLocation_city !== '' &&
      state.destinationLocation_state !== '' &&
      state.destinationLocation_postalCode !== '' &&
      state.servicePayment_responsibility !== '' &&
      state.servicePayment_number !== '' &&
      state.EMS !== '' &&
      state.patientDisposition !== '' &&
      state.destinationLocationType !== ''
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

  const submitHandler = () => {
    const item = {
      userId: users.result._id,
      serviceCode: state.serviceCode,
      serviceType: state.serviceType,
      dateOfIncident: state.dateOfIncident,
      timeOfIncident: state.timeOfIncident,
      incidentLocation_street: state.incidentLocation_street,
      incidentLocation_city: state.incidentLocation_city,
      incidentLocation_state: state.incidentLocation_state,
      incidentLocation_postalCode: state.incidentLocation_postalCode,
      incident_destinationDeterminant: state.destinationDeterminant,
      graphicLocator: state.graphicLocator,
      sceneLocationType: state.sceneLocationType,
      destinationFacility: state.destinationFacility,
      sceneFacility: state.sceneFacility,
      destinationLocationType: state.destinationLocationType,
      destinationLocation_street: state.destinationLocation_street,
      destinationLocation_city: state.destinationLocation_city,
      destinationLocation_state: state.destinationLocation_state,
      destinationLocation_postalCode: state.destinationLocation_postalCode,
      responsibility: state.servicePayment_responsibility,
      number: state.servicePayment_number,
      EMS: state.EMS,
      patientDisposition: state.patientDisposition,
      firstName: callDetails.firstName,
      sureName: callDetails.sureName,
      street: callDetails.street,
      city: callDetails.city,
      state: callDetails.state,
      country: callDetails.country,
      postalCode: callDetails.postalCode,
      telePhone: callDetails.telePhone,
      DOB: callDetails.DOB,
      age: callDetails.age,
      gender: callDetails.gender,
      aadhar: callDetails.aadhar,
      medicalInsurance: callDetails.medicalInsurance,
      typeOfInsurance: callDetails.typeOfInsurance,
      governmentInsurance_insuranceId: callDetails.governmentInsurance_insuranceId,
      governmentInsurance_coverageAmount: callDetails.governmentInsurance_coverageAmount,
      governmentInsurance_benefits: callDetails.governmentInsurance_benefits,
      privateInsurance_insuranceId: callDetails.privateInsurance_insuranceId,
      privateInsurance_benefits: callDetails.privateInsurance_benefits,
      hospitalChart: callDetails.hospitalChart,
      comments: callDetails.comments,
      timeNotified: callDetails.timeNotified,
      timeEnroute: callDetails.timeEnroute,
      timeAtScene: callDetails.timeAtScene,
      crewPatient: callDetails.crewPatient,
      timeOutScene: callDetails.timeOutScene,
      timeAtDestination: callDetails.timeAtDestination,
      available: callDetails.available,
      backArea: callDetails.backArea,
      responseToScene: callDetails.responseToScene,
      responseFromScene: callDetails.responseFromScene,
      crewType: callDetails.crewType,
      mileage: callDetails.mileage,
      patientContact: callDetails.patientContact,
      vehicle_destinationDeterminant: callDetails.vehicle_destinationDeterminant,
      startDate: callDetails.startDate,
      endDate: callDetails.endDate,
      dateModified: callDetails.dateModified,
      email1: state.email1,
      email2: state.email2,
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email1 = regex.test(state.email1)
    const email2 = regex.test(state.email2)
    if (email1 && email2) {
      setdisabel(false)
      AuthAxios.post('CallDetails', item)
        .then((res) => {
          success(res.data.message)
          setdisabel(true)
          setVisible(false)
          console.log(res.data)
          setTimeout(() => {
            setState((prevProps) => ({
              ...prevProps,
              userId: '',
              serviceCode: '',
              serviceType: '',
              dateOfIncident: '',
              timeOfIncident: '',
              incidentLocation_street: '',
              incidentLocation_city: '',
              incidentLocation_state: '',
              incidentLocation_postalCode: '',
              destinationDeterminant: '',
              graphicLocator: '',
              sceneLocationType: '',
              destinationFacility: '',
              sceneFacility: '',
              destinationLocationAddress: '',
              destinationLocation_street: '',
              destinationLocation_city: '',
              destinationLocation_state: '',
              destinationLocation_postalCode: '',
              servicePayment_responsibility: '',
              servicePayment_number: '',
              EMS: '',
              patientDisposition: '',
              destinationLocationType: '',
              email1: '',
              email2: '',
            }))
            setconditions(true)
            setActiveKey('patient')
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
  console.log(callDetails)

  return (
    <div>
      <CContainer>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                value={state.serviceCode}
                onChange={(event) => handleInputChange(event, 'serviceCode')}
                style={{ width: '100%', height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Service Code</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="serviceType"
                value={state.serviceType}
                onChange={(event) => handleInputChange(event, 'serviceType')}
                style={{ width: '100%', height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Service Type</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow className="">
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <Input
                type="date"
                name="dateOfIncident"
                value={state.dateOfIncident}
                onChange={(event) => handleInputChange(event, 'dateOfIncident')}
                style={{ width: '100%', height: '50px' }}
                className=""
              ></Input>
              <CFormLabel htmlFor="floatingInput">Date of Incident</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <Input
                type="Time"
                name="timeOfIncident"
                value={state.timeOfIncident}
                onChange={(event) => handleInputChange(event, 'timeOfIncident')}
                style={{ width: '100%', height: '50px' }}
                className=""
              ></Input>
              <CFormLabel htmlFor="floatingInput">Time of Incident</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Destination Determinant"
                value={state.destinationDeterminant}
                onChange={(event) => handleInputChange(event, 'destinationDeterminant')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Destination Determinant</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Destination Determinant"
                value={state.destinationLocationType}
                onChange={(event) => handleInputChange(event, 'destinationLocationType')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Destination Location Type</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="graphicLocator"
                value={state.graphicLocator}
                onChange={(event) => handleInputChange(event, 'graphicLocator')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Geographic Locator</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="sceneFacility"
                value={state.sceneFacility}
                onChange={(event) => handleInputChange(event, 'sceneFacility')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Scene Facility</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Scene Location Typ"
                value={state.sceneLocationType}
                onChange={(event) => handleInputChange(event, 'sceneLocationType')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Scene Location Type</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Destination Facility"
                value={state.destinationFacility}
                onChange={(event) => handleInputChange(event, 'destinationFacility')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Destination Facility</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Patient Disposition"
                value={state.patientDisposition}
                onChange={(event) => handleInputChange(event, 'patientDisposition')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Patient Disposition</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Factors Affecting EMS"
                value={state.EMS}
                onChange={(event) => handleInputChange(event, 'EMS')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Factors Affecting EMS</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer className="">
        <CRow>
          <p>Incident Location</p>
          <CCol lg={3} md={3} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="incidentLocation_street"
                value={state.incidentLocation_street}
                onChange={(event) => handleInputChange(event, 'incidentLocation_street')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Street</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={3} md={3} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="incidentLocation_city"
                value={state.incidentLocation_city}
                onChange={(event) => handleInputChange(event, 'incidentLocation_city')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">city</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={3} md={3} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="incidentLocation_state"
                value={state.incidentLocation_state}
                onChange={(event) => handleInputChange(event, 'incidentLocation_state')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">State</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={3} md={3} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="incidentLocation_postalCode"
                value={state.incidentLocation_postalCode}
                onChange={(event) => handleInputChange(event, 'incidentLocation_postalCode')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Postal Code</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer className="">
        <CRow className="mt-3">
          <p>Destination Location</p>
          <CCol lg={3} md={3} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="destinationLocation_street"
                value={state.destinationLocation_street}
                onChange={(event) => handleInputChange(event, 'destinationLocation_street')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Street</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={3} md={3} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="destinationLocation_city"
                value={state.destinationLocation_city}
                onChange={(event) => handleInputChange(event, 'destinationLocation_city')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">city</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={3} md={3} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="destinationLocation_state"
                value={state.destinationLocation_state}
                onChange={(event) => handleInputChange(event, 'destinationLocation_state')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">State</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={3} md={3} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="destinationLocation_postalCode"
                value={state.destinationLocation_postalCode}
                onChange={(event) => handleInputChange(event, 'destinationLocation_postalCode')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Postal Code</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer className="">
        <CRow>
          <p className="mt-3">Service Payment</p>
          <CRow>
            <CCol lg={6} md={6} sm={12}>
              <CFormFloating className="mb-3">
                <CFormInput
                  type="text"
                  id="floatingInput"
                  placeholder="FirstName"
                  name="servicePayment_responsibility"
                  value={state.servicePayment_responsibility}
                  onChange={(event) => handleInputChange(event, 'servicePayment_responsibility')}
                  style={{ height: '50px' }}
                />
                <CFormLabel htmlFor="floatingInput">Response</CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol lg={6} md={6} sm={12}>
              <CFormFloating className="mb-3">
                <CFormInput
                  type="text"
                  id="floatingInput"
                  placeholder="Surname"
                  name="servicePayment_number"
                  value={state.servicePayment_number}
                  onChange={(event) => handleInputChange(event, 'servicePayment_number')}
                  style={{ height: '50px' }}
                />
                <CFormLabel htmlFor="floatingInput">Number</CFormLabel>
              </CFormFloating>
            </CCol>
          </CRow>
        </CRow>
      </CContainer>

      <CRow>
        <CCol lg={6} md={6} sm={6}>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-secondary" onClick={() => setActiveKey('vehicle')}>
              Back
            </button>
          </div>
        </CCol>
        <CCol lg={6} md={6} sm={6}>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button
              class="btn btn-success"
              // disabled={submitCon}
              onClick={() => setVisible(!visible)}
            >
              Submit
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
            <input
              type="email"
              id="form2"
              value={state.email1}
              onChange={(event) => handleInputChange(event, 'email1')}
              class="form-control validate"
            />
            <label data-error="wrong" data-success="right" for="form2">
              Hospital EMail-Id
            </label>
          </div>

          <div class="md-form mb-4">
            <i class="fas fa-envelope prefix grey-text"></i>
            <input
              type="email"
              id="form2"
              value={state.email2}
              onChange={(event) => handleInputChange(event, 'email2')}
              class="form-control validate"
            />
            <label data-error="wrong" data-success="right" for="form2">
              Ambulance EMail-Id
            </label>
          </div>
        </div>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton
            color="primary"
            disabled={state.email1 !== '' && state.email2 !== '' && disabel ? false : true}
            onClick={() => submitHandler()}
          >
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
      <ToastContainer />
    </div>
  )
}

export default IncidentCallDetails
