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
import { useDispatch, useSelector } from 'react-redux'
import { addFormAll, addFormValue } from 'src/Redux/Actions/FormAction'
import { useNavigate } from 'react-router-dom'

const VitalSign = ({ setActiveKey, activeKey, setTreatment, treatment, setconditions }) => {
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState('')
  const [disabel, setdisabel] = useState(true)
  const [copy_id, setcopy_id] = useState(false)
  const [track, settrack] = useState('')

  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)

  const [submitCon, setsubmitCon] = useState(true)

  const state1 = useSelector((state) => state.formValueReducer.formValue)
  const dispatch = useDispatch()

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
    email2: '',
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
    dispatch(
      addFormValue({
        name: name,
        value: value,
      }),
    )
  }

  const users = JSON.parse(localStorage.getItem('user'))

  const submitHandler = () => {
    const item = {
      userId: users.result._id,
      serviceCode: state1.serviceCode,
      serviceType: state1.serviceType,
      dateOfIncident: state1.dateOfIncident,
      timeOfIncident: state1.timeOfIncident,
      incidentLocation_street: state1.incidentLocation_street,
      incidentLocation_city: state1.incidentLocation_city,
      incidentLocation_state: state1.incidentLocation_state,
      incidentLocation_postalCode: state1.incidentLocation_postalCode,
      incident_destinationDeterminant: state1.inci_destinationDeterminant,
      graphicLocator: state1.graphicLocator,
      sceneLocationType: state1.sceneLocationType,
      destinationFacility: state1.destinationFacility,
      sceneFacility: state1.sceneFacility,
      destinationLocationType: state1.destinationLocationType,
      destinationLocation_street: state1.destinationLocation_street,
      destinationLocation_city: state1.destinationLocation_city,
      destinationLocation_state: state1.destinationLocation_state,
      destinationLocation_postalCode: state1.destinationLocation_postalCode,
      responsibility: state1.servicePayment_responsibility,
      number: state1.servicePayment_number,
      EMS: state1.EMS,
      patientDisposition: state1.patientDisposition,
      firstName: state1.firstName,
      sureName: state1.sureName,
      street: state1.street,
      city: state1.city,
      state: state1.state,
      country: state1.country,
      postalCode: state1.postalCode,
      telePhone: state1.telePhone,
      DOB: state1.DOB,
      age: state1.age,
      gender: state1.gender,
      aadhar: state1.aadhar,
      medicalInsurance: state1.medicalInsurance,
      typeOfInsurance: state1.typeOfInsurance,
      governmentInsurance_insuranceId: state1.govt_ins_Id,
      governmentInsurance_coverageAmount: state1.coverage_Amount,
      governmentInsurance_benefits: state1.benifits,
      privateInsurance_insuranceId: state1.private_ins_id,
      privateInsurance_benefits: state1.benifits,
      hospitalChart: state1.hospital_chart_no,
      hospitalName: state1.hospitals,
      comments: state1.commends,
      timeNotified: state1.timeNotified,
      timeEnroute: state1.timeEnroute,
      timeAtScene: state1.timeAtScene,
      crewPatient: state1.crewPatient,
      timeOutScene: state1.timeOutScene,
      timeAtDestination: state1.timeAtDestination,
      available: state1.available,
      backArea: state1.backArea,
      responseToScene: state1.responseToScene,
      responseFromScene: state1.responseFromScene,
      crewType: state1.crewType,
      mileage: state1.mileage,
      patientContact: state1.patientContact,
      vehicle_destinationDeterminant: state1.destinationDeterminant,
      startDate: state1.startDate,
      endDate: state1.endDate,
      dateModified: state1.dateModified,
      dateOfInjury: state1.dateOfInjury,
      timeOfInjury: state1.timeOfInjury,
      coResponders: state1.coResponders,
      treatmentRendered: state1.treatmentRendered,
      patientCondition: state1.patientCondition,
      patientDisplacement: state1.patientDisplacement,
      suspectedIntoxication: state1.suspectedIntoxication,
      chiefComplaint: state1.chiefComplaint,
      neroResponse: state1.neroResponse,
      bodySystem: state1.bodySystem,
      glasGlow: state1.glasGlow,
      generalAssessment: state1.generalAssessment,
      airway: state1.airway,
      symptoms: state1.symptoms,
      respiration: state1.respiration,
      seizure: state1.seizure,
      toxicExposure: state1.toxicExposure,
      cardiacArrest: state1.cardiacArrest,
      chestPain: state1.chestPain,
      neonatal: state1.neonatal,
      obstetric: state1.obstetric,
      trauma: state1.trauma,
      procedureStartTime: state1.procedureStartTime,
      procedureType: state1.procedureType,
      procedureEndTime: state1.procedureEndTime,
      deviceMethod: state1.deviceMethod,
      technicianID: state1.technicianID,
      deviceSize: state1.deviceSize,
      outcome: state1.outcome,
      successfull: state1.successfull,
      treatment: state1.treatment,
      totalTime: state1.totalTime,
      treatmentType: state1.treatmentType,
      administrativeRoute: state1.administrativeRoute,
      assessmentTime: state1.assessmentTime,
      consciousnessLevel: state1.consciousnessLevel,
      pulseRate: state1.pulseRate,
      siteOfPulseCheck: state1.siteOfPulseCheck,
      temperature: state1.temperature,
      siteOfTemperatureCheck: state1.siteOfTemperatureCheck,
      skinColor: state1.skinColor,
      skinCondition: state1.skinCondition,
      moisture: state1.moisture,
      bloodPressure: state1.bloodPressure,
      treatment_respiration: state1.treatment_respiration,
      bloodGlucose: state1.bloodGlucose,
      oxygenSaturation: state1.oxygenSaturation,
      email1: state.email,
      email2: state.email2,
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = regex.test(state.email)
    if (email) {
      setdisabel(false)
      AuthAxios.post('CallDetails', item)
        .then((res) => {
          console.log(res.data)
          setcopy_id(true)
          settrack(res.data.data._id)
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

  const navigate = useNavigate()

  const dones = () => {
    success('Form Submitted Successfully!')
    setdisabel(true)
    setVisible(false)
    setTimeout(() => {
      setconditions(true)
      dispatch(
        addFormAll({
          firstName: '',
          sureName: '',
          street: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
          telePhone: '',
          aadhar: '',
          DOB: '',
          age: '',
          gender: '',
          medicalInsurance: '',
          typeOfInsurance: '',
          govt_ins_Id: '',
          coverage_Amount: '',
          private_ins_id: '',
          private_benefits: '',
          hospital_chart_no: '',
          commends: '',
          benifits: '',
          hospitals: '',
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
          destinationDeterminant: '',
          startDate: '',
          endDate: '',
          dateModified: '',
          serviceCode: '',
          serviceType: '',
          dateOfIncident: '',
          timeOfIncident: '',
          incidentLocation_street: '',
          incidentLocation_city: '',
          incidentLocation_state: '',
          incidentLocation_postalCode: '',
          inci_destinationDeterminant: '',
          graphicLocator: '',
          sceneLocationType: '',
          destinationFacility: '',
          sceneFacility: '',
          destinationLocation_street: '',
          destinationLocation_city: '',
          destinationLocation_state: '',
          destinationLocation_postalCode: '',
          servicePayment_responsibility: '',
          servicePayment_number: '',
          EMS: '',
          patientDisposition: '',
          destinationLocationType: '',
          serviceCodeType: '',
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
          systolic: '',
          diastolic: '',
          treatment_respiration: '',
          bloodGlucose: '',
          bloodPressure: '',
          oxygenSaturation: '',
          preOxygen: '',
          postOxygen: '',
          diatolic: '',
          skinCondition: '',
        }),
      )
      navigate('/#/CallDetails')
    }, 1000)
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
                dispatch(
                  addFormValue({
                    name: 'assessmentTime',
                    value: e.format('LT'),
                  }),
                )
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
                value={state1.consciousnessLevel}
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
                value={state1.pulseRate}
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
                value={state1.siteOfPulseCheck}
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
                value={state1.temperature}
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
                value={state1.siteOfTemperatureCheck}
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
              value={state1.skinColor}
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
              value={state1.skinCondition}
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
                value={state1.moisture}
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
                name="treatment_respiration"
                value={state1.treatment_respiration}
                onChange={(event) => handleInputChange(event, 'treatment_respiration')}
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
                value={state1.bloodGlucose}
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
                value={state1.systolic}
                onChange={(event) => handleInputChange(event, 'systolic')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Systolic</CFormLabel>
            </CFormFloating> */}
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Large select example"
              value={state1.bloodPressure}
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
                value={state1.diastolic}
                style={{ height: '50px' }}
                onChange={(event) => handleInputChange(event, 'diastolic')}
              />
              <CFormLabel htmlFor="floatingInput">Diastolic</CFormLabel>
            </CFormFloating> */}
            <CFormSelect
              size="sm"
              className="mb-3"
              aria-label="Large select example"
              value={state1.oxygenSaturation}
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
                value={state1.preOxygen}
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
                value={state1.postOxygen}
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

          {copy_id ? (
            <div class="modal-body mx-3">
              <div class="md-form mb-4">
                <label data-error="wrong" data-success="right" for="form2">
                  Copy the tracking ID
                </label>
                <br />
                <label data-error="wrong" data-success="right" for="form2">
                  {track}
                </label>
              </div>
            </div>
          ) : (
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
          )}

          {copy_id ? (
            <CModalFooter>
              <CButton color="primary" onClick={() => dones()}>
                Done
              </CButton>
            </CModalFooter>
          ) : (
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
          )}
        </CModal>
      </CRow>
      <ToastContainer />
    </div>
  )
}

export default VitalSign
