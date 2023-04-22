import React, { useEffect } from 'react'
import { useState } from 'react'
import './style.css'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CRow,
  CCol,
  CFormLabel,
  CFormFloating,
  CFormInput,
  CFormSelect,
} from '@coreui/react'

import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
import AuthAxios from 'src/Interceptors/AuthAxios'
import { ToastContainer, toast } from 'react-toastify'

const VitalSign = ({ setActiveKey, activeKey, setTreatment, treatment, setconditions }) => {
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState('')
  const [disabel, setdisabel] = useState(true)

  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)

  const [submitCon, setsubmitCon] = useState(true)

  const [state, setState] = useState({
    assessmentTime: '',
    consciousnessLevel: '',
    pulseRate: '',
    siteOfPulseCheck: '',
    temperature: '',
    siteOfTemperatureCheck: '',
    skinColor: '',
    moisture: '',
    systolic: '',
    diastolic: '',
    respiration: '',
    bloodGlucose: '',
    bloodPressure: '',
    oxygenSaturation: '',
    preOxygen: '',
    postOxygen: '',
    diatolic: '',
    skinCondition: '',
    email: '',
  })

  useEffect(() => {
    if (
      state.assessmentTime !== '' &&
      state.consciousnessLevel !== '' &&
      state.pulseRate !== '' &&
      state.siteOfPulseCheck !== '' &&
      state.temperature !== '' &&
      state.siteOfTemperatureCheck !== '' &&
      state.skinColor !== '' &&
      state.moisture !== '' &&
      state.systolic !== '' &&
      state.diastolic !== '' &&
      state.respiration !== '' &&
      state.bloodGlucose !== '' &&
      state.preOxygen !== '' &&
      state.postOxygen !== ''
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
      procedureStartTime: treatment.procedureStartTime,
      procedureType: treatment.procedureType,
      procedureEndTime: treatment.procedureEndTime,
      deviceMethod: treatment.deviceMethod,
      technicianID: treatment.technicianID,
      deviceSize: treatment.deviceSize,
      outcome: treatment.outcome,
      successfull: treatment.successfull,
      treatment: treatment.treatment,
      totalTime: treatment.totalTime,
      treatmentType: treatment.treatmentType,
      administrativeRoute: treatment.administrativeRoute,
      assessmentTime: state.assessmentTime,
      consciousnessLevel: state.consciousnessLevel,
      pulseRate: state.pulseRate,
      siteOfPulseCheck: state.siteOfPulseCheck,
      temperature: state.temperature,
      siteOfTemperatureCheck: state.siteOfTemperatureCheck,
      skinColor: state.skinColor,
      moisture: state.moisture,
      bloodPressure_systolic: state.systolic,
      bloodPressure_diastolic: state.diastolic,
      respiration: state.respiration,
      bloodGlucose: state.bloodGlucose,
      oxygenSaturation_preOxygen: state.preOxygen,
      oxygenSaturation_postOxygen: state.postOxygen,
      email: state.email,
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = regex.test(state.email)
    if (email) {
      setdisabel(false)
      AuthAxios.post('Treatment', item)
        .then((res) => {
          console.log(res.data)
          success(res.data.message)
          setdisabel(true)
          setVisible(false)
          setTimeout(() => {
            setState((prevProps) => ({
              ...prevProps,
              assessmentTime: '',
              consciousnessLevel: '',
              pulseRate: '',
              siteOfPulseCheck: '',
              temperature: '',
              siteOfTemperatureCheck: '',
              skinColor: '',
              moisture: '',
              systolic: '',
              diastolic: '',
              respiration: '',
              bloodGlucose: '',
              preOxygen: '',
              postOxygen: '',
              diatolic: '',
              skinCondition: '',
              bloodPressure: '',
              oxygenSaturation: '',
              email: '',
            }))
            setconditions(true)
            setActiveKey('patientDetails')
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

  return (
    <div>
      <CRow>
        <CRow className="mb-3 vehicle">
          <p>Time Of Assessment</p>
          <CCol lg={6} md={6} sm={12}>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => {
                setState((prevProps) => ({
                  ...prevProps,
                  assessmentTime: e.format('LT'),
                }))
                setTime(e.format('LT'))
              }}
              className="times"
            />
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="consciousnessLevel"
                value={state.consciousnessLevel}
                onChange={(event) => handleInputChange(event, 'consciousnessLevel')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Level Of Consciousness</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CRow>

      <CRow>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="pulseRate"
                value={state.pulseRate}
                onChange={(event) => handleInputChange(event, 'pulseRate')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Pulse Rate</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="siteOfPulseCheck"
                value={state.siteOfPulseCheck}
                onChange={(event) => handleInputChange(event, 'siteOfPulseCheck')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Site Of Pulse Check</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="temperature"
                value={state.temperature}
                onChange={(event) => handleInputChange(event, 'temperature')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Temperature</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                value={state.siteOfTemperatureCheck}
                onChange={(event) => handleInputChange(event, 'siteOfTemperatureCheck')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Site Of Temperature Check</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Large select example"
              value={state.skinColor}
              onChange={(event) => handleInputChange(event, 'skinColor')}
              style={{ height: '50px' }}
            >
              <option>Select SkinColor</option>
              <option value="Flushed">Flushed</option>
              <option value="Pale">Pale</option>
              <option value="Cyanosis">Cyanosis</option>
              <option value="Jaundice">Jaundice</option>
              <option value="Unremarkable">Unremarkable</option>
            </CFormSelect>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Large select example"
              value={state.skinCondition}
              onChange={(event) => handleInputChange(event, 'skinCondition')}
              style={{ height: '50px' }}
            >
              <option>Select Skin Condition</option>
              <option value="Dry">Dry</option>
              <option value="Cammy">Cammy</option>
              <option value="Diaphoretic">Diaphoretic</option>
              <option value="Unremarkable">Unremarkable</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={12} md={12} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="moisture"
                value={state.moisture}
                onChange={(event) => handleInputChange(event, 'moisture')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Moisture</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>

        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="respiration"
                value={state.respiration}
                onChange={(event) => handleInputChange(event, 'respiration')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Respiration</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="bloodGlucose"
                value={state.bloodGlucose}
                onChange={(event) => handleInputChange(event, 'bloodGlucose')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Blood Glucose</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>

        <CRow>
          {/* <p>Blood Pressure</p> */}
          <CCol lg={6} md={6} sm={12}>
            {/* <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="systolic"
                value={state.systolic}
                onChange={(event) => handleInputChange(event, 'systolic')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Systolic</CFormLabel>
            </CFormFloating> */}
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Large select example"
              value={state.bloodPressure}
              onChange={(event) => handleInputChange(event, 'bloodPressure')}
              style={{ height: '50px' }}
            >
              <option>Select Blood Pressure</option>
              <option value="Systolic 120">Systolic 120</option>
              <option value="Dyastolic 76">Dyastolic 76</option>
            </CFormSelect>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            {/* <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="diastolic"
                value={state.diastolic}
                style={{ height: '50px' }}
                onChange={(event) => handleInputChange(event, 'diastolic')}
              />
              <CFormLabel htmlFor="floatingInput">Diastolic</CFormLabel>
            </CFormFloating> */}
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Large select example"
              value={state.oxygenSaturation}
              onChange={(event) => handleInputChange(event, 'oxygenSaturation')}
              style={{ height: '50px' }}
            >
              <option>Select Oxygen Saturation</option>
              <option value="Pre Oxygen">Pre Oxygen</option>
              <option value="Post Oxygen">Post Oxygen</option>
            </CFormSelect>
          </CCol>
        </CRow>

        {/* <CRow>
          <p>Oxygen Saturation</p>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="preOxygen"
                value={state.preOxygen}
                onChange={(event) => handleInputChange(event, 'preOxygen')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Pre Oxygen</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="postOxygen"
                value={state.postOxygen}
                onChange={(event) => handleInputChange(event, 'postOxygen')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Post Oxygen</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow> */}
      </CRow>

      <CRow item xs={12}>
        <CRow>
          <CCol lg={6} md={6} sm={6}>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-secondary" onClick={() => setActiveKey('patientDetails')}>
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

export default VitalSign
