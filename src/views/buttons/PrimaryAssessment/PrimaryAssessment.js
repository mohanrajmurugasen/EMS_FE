import React, { useEffect } from 'react'
import { useState } from 'react'

import { CButton, CContainer } from '@coreui/react'

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CRow,
  CCol,
  CFormFloating,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify'
import AuthAxios from 'src/Interceptors/AuthAxios'
import { useDispatch, useSelector } from 'react-redux'
import { addFormValue } from 'src/Redux/Actions/FormAction'

const PrimaryAssessment = ({
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

  const [submitCon, setsubmitCon] = useState(true)

  const state1 = useSelector((state) => state.formValueReducer.formValue)
  const dispatch = useDispatch()

  const [state, setState] = useState({
    userId: '1',
    neroResponse: '',
    bodySystem: '',
    glasGlow: '',
    generalAssessment: '',
    airway: '',
    symptoms: '',
    email: '',
  })

  useEffect(() => {
    if (
      state.neroResponse !== '' &&
      state.bodySystem !== '' &&
      state.glasGlow !== '' &&
      state.generalAssessment !== '' &&
      state.airway !== '' &&
      state.symptoms !== ''
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
      AuthAxios.post('PrimaryAssessment', state)
        .then((res) => {
          console.log(res.data)
          success(res.data.message)
          setdisabel(true)
          setVisible(false)
          setTimeout(() => {
            setState((prevProps) => ({
              ...prevProps,
              userId: '1',
              neroResponse: '',
              bodySystem: '',
              glasGlow: '',
              generalAssessment: '',
              airway: '',
              symptoms: '',
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
      neroResponse: state.neroResponse,
      bodySystem: state.bodySystem,
      glasGlow: state.glasGlow,
      generalAssessment: state.generalAssessment,
      airway: state.airway,
      symptoms: state.symptoms,
    }))
    setActiveKey('patientAssessment')
  }

  useEffect(() => {
    if (conditions) {
      setState((prevProps) => ({
        ...prevProps,
        userId: '1',
        neroResponse: '',
        bodySystem: '',
        glasGlow: '',
        generalAssessment: '',
        airway: '',
        symptoms: '',
        email: '',
      }))
    }
    setconditions(false)
  }, [conditions])

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
                name="neroResponse"
                value={state1.neroResponse}
                onChange={(event) => handleInputChange(event, 'neroResponse')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Nero Response</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="bodySystem"
                value={state1.bodySystem}
                onChange={(event) => handleInputChange(event, 'bodySystem')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Body System</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="glasGlow"
                value={state1.glasGlow}
                onChange={(event) => handleInputChange(event, 'glasGlow')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Glasgow and pupil</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="generalAssessment"
                value={state1.generalAssessment}
                onChange={(event) => handleInputChange(event, 'generalAssessment')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">General Assessment</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="airway"
                value={state1.airway}
                onChange={(event) => handleInputChange(event, 'airway')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Airway</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="symptoms"
                value={state1.symptoms}
                onChange={(event) => handleInputChange(event, 'symptoms')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Symbtoms</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CRow>
        <CCol lg={6} md={6} sm={6}>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-secondary" onClick={() => setActiveKey('patientHistory')}>
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
            <input
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
      <ToastContainer />
    </div>
  )
}

export default PrimaryAssessment
