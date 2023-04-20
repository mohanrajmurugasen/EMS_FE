import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormSelect,
  CFormTextarea,
  CRow,
  CFormCheck,
  CToast,
  CToastHeader,
  CToastBody,
  CToaster,
} from '@coreui/react'
import { Input } from 'reactstrap'
import AuthAxios from 'src/Interceptors/AuthAxios'
import { ToastContainer, toast } from 'react-toastify'

const PatientCallDetails = ({
  setActiveKey,
  activeKey,
  setCallDetails,
  callDetails,
  conditions,
  setconditions,
}) => {
  const [visible, setVisible] = useState(false)
  const [submitCon, setsubmitCon] = useState(true)
  const [disabel, setdisabel] = useState(true)

  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)

  const [state, setState] = useState({
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
    govt_benefits: '',
    private_ins_id: '',
    private_benefits: '',
    hospital_chart_no: '',
    commends: '',
    email1: '',
    email2: '',
    benifits: '',
  })

  useEffect(() => {
    if (state.medicalInsurance === 'Yes') {
      if (state.typeOfInsurance === 'Government') {
        if (
          state.firstName !== '' &&
          state.sureName !== '' &&
          state.street !== '' &&
          state.city !== '' &&
          state.state !== '' &&
          state.postalCode !== '' &&
          state.country !== '' &&
          state.telePhone !== '' &&
          state.aadhar !== '' &&
          state.DOB !== '' &&
          state.age !== '' &&
          state.gender !== '' &&
          state.medicalInsurance !== '' &&
          state.typeOfInsurance !== '' &&
          state.govt_ins_Id !== '' &&
          state.coverage_Amount !== '' &&
          state.benifits !== '' &&
          state.hospital_chart_no !== '' &&
          state.commends !== ''
        ) {
          setsubmitCon(false)
        } else {
          setsubmitCon(true)
        }
      } else if (state.typeOfInsurance === 'Private') {
        if (
          state.firstName !== '' &&
          state.sureName !== '' &&
          state.street !== '' &&
          state.city !== '' &&
          state.state !== '' &&
          state.postalCode !== '' &&
          state.country !== '' &&
          state.telePhone !== '' &&
          state.aadhar !== '' &&
          state.DOB !== '' &&
          state.age !== '' &&
          state.gender !== '' &&
          state.medicalInsurance !== '' &&
          state.typeOfInsurance !== '' &&
          state.govt_ins_Id !== '' &&
          state.benifits !== '' &&
          state.hospital_chart_no !== '' &&
          state.commends !== ''
        ) {
          setsubmitCon(false)
        } else {
          setsubmitCon(true)
        }
      } else {
        setsubmitCon(true)
      }
    } else {
      if (
        state.firstName !== '' &&
        state.sureName !== '' &&
        state.street !== '' &&
        state.city !== '' &&
        state.state !== '' &&
        state.postalCode !== '' &&
        state.country !== '' &&
        state.telePhone !== '' &&
        state.aadhar !== '' &&
        state.DOB !== '' &&
        state.age !== '' &&
        state.gender !== '' &&
        state.medicalInsurance !== '' &&
        state.hospital_chart_no !== '' &&
        state.commends !== ''
      ) {
        setsubmitCon(false)
      } else {
        setsubmitCon(true)
      }
    }
  }, [state])

  const handleInputChange = (event, name) => {
    setState((prevProps) => ({
      ...prevProps,
      [name]: event,
    }))
  }

  const users = JSON.parse(localStorage.getItem('user'))

  const submitHandler = () => {
    const item = {
      userId: users.result._id,
      firstName: state.firstName,
      sureName: state.sureName,
      street: state.street,
      city: state.city,
      state: state.state,
      country: state.country,
      postalCode: state.postalCode,
      telePhone: state.telePhone,
      DOB: state.DOB,
      age: state.age,
      gender: state.gender,
      aadhar: state.aadhar,
      medicalInsurance: state.medicalInsurance,
      typeOfInsurance: state.typeOfInsurance,
      governmentInsurance_insuranceId:
        state.typeOfInsurance === 'Government' ? state.govt_ins_Id : '',
      governmentInsurance_coverageAmount:
        state.typeOfInsurance === 'Government' ? state.coverage_Amount : '',
      governmentInsurance_benefits: state.typeOfInsurance === 'Government' ? state.benifits : '',
      privateInsurance_insuranceId: state.typeOfInsurance === 'Private' ? state.govt_ins_Id : '',
      privateInsurance_benefits: state.typeOfInsurance === 'Private' ? state.benifits : '',
      hospitalChart: state.hospital_chart_no,
      comments: state.commends,
      email1: state.email1,
      email2: state.email2,
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email1 = regex.test(state.email1)
    const email2 = regex.test(state.email2)
    if (email1 && email2) {
      setdisabel(false)
      AuthAxios.post('PatientCallDetails', item)
        .then((res) => {
          console.log(res.data)
          success(res.data.message)
          setVisible(false)
          setdisabel(true)
          setTimeout(() => {
            setState((prevProps) => ({
              ...prevProps,
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
              govt_benefits: '',
              private_ins_id: '',
              private_benefits: '',
              hospital_chart_no: '',
              commends: '',
              email1: '',
              email2: '',
              benifits: '',
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
    setCallDetails((callDetails) => ({
      ...callDetails,
      firstName: state.firstName,
      sureName: state.sureName,
      street: state.street,
      city: state.city,
      state: state.state,
      country: state.country,
      postalCode: state.postalCode,
      telePhone: state.telePhone,
      DOB: state.DOB,
      age: state.age,
      gender: state.gender,
      aadhar: state.aadhar,
      medicalInsurance: state.medicalInsurance,
      typeOfInsurance: state.typeOfInsurance,
      governmentInsurance_insuranceId:
        state.typeOfInsurance === 'Government' ? state.govt_ins_Id : '',
      governmentInsurance_coverageAmount:
        state.typeOfInsurance === 'Government' ? state.coverage_Amount : '',
      governmentInsurance_benefits: state.typeOfInsurance === 'Government' ? state.benifits : '',
      privateInsurance_insuranceId: state.typeOfInsurance === 'Private' ? state.govt_ins_Id : '',
      privateInsurance_benefits: state.typeOfInsurance === 'Private' ? state.benifits : '',
      hospitalChart: state.hospital_chart_no,
      comments: state.commends,
    }))
    setActiveKey('vehicle')
  }

  useEffect(() => {
    if (conditions) {
      setState((prevProps) => ({
        ...prevProps,
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
        govt_benefits: '',
        private_ins_id: '',
        private_benefits: '',
        hospital_chart_no: '',
        commends: '',
        email1: '',
        email2: '',
        benifits: '',
      }))
    }
    setconditions(false)
  }, [conditions])

  return (
    <div>
      <CRow>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              value={state.firstName}
              onChange={(event) => handleInputChange(event.target.value, 'firstName')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">FirstName</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              value={state.sureName}
              onChange={(event) => handleInputChange(event.target.value, 'sureName')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">Surname</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol lg={12} md={12} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Street Address"
              value={state.street}
              onChange={(event) => handleInputChange(event.target.value, 'street')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">Street Address</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="City"
              value={state.city}
              onChange={(event) => handleInputChange(event.target.value, 'city')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">City</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="State"
              value={state.state}
              onChange={(event) => handleInputChange(event.target.value, 'state')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">State</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Country"
              value={state.country}
              onChange={(event) => handleInputChange(event.target.value, 'country')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">Country</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Postal Code"
              value={state.postalCode}
              onChange={(event) => handleInputChange(event.target.value, 'postalCode')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">Postal Code</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Telephone"
              value={state.telePhone}
              onChange={(event) => handleInputChange(event.target.value, 'telePhone')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">Telephone</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <Input
              type="date"
              style={{ height: '50px' }}
              name="DOB"
              value={state.DOB}
              onChange={(event) => handleInputChange(event.target.value, 'DOB')}
            ></Input>
            <CFormLabel htmlFor="floatingInput">Date of Birth</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Age"
              value={state.age}
              onChange={(event) => handleInputChange(event.target.value, 'age')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">Age</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol lg={6} md={6} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Aadhar"
              value={state.aadhar}
              onChange={(event) => handleInputChange(event.target.value, 'aadhar')}
              style={{ height: '50px' }}
            />
            <CFormLabel htmlFor="floatingInput">Aadhar</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol lg={6} md={6} sm={12}>
          <CFormLabel name="gender">Gender</CFormLabel>
          <div>
            <CFormCheck
              inline
              type="radio"
              value="Male"
              label="Male"
              checked={state.gender === 'Male' ? true : false}
              onClick={() => handleInputChange('Male', 'gender')}
            />
            <CFormCheck
              inline
              type="radio"
              value="Female"
              label="Female"
              checked={state.gender === 'Female' ? true : false}
              onClick={() => handleInputChange('Female', 'gender')}
            />
            <CFormCheck
              inline
              type="radio"
              value="Other"
              label="Other"
              checked={state.gender === 'Other' ? true : false}
              onClick={() => handleInputChange('Other', 'gender')}
            />
          </div>
        </CCol>
        <CCol lg={6} md={6} sm={12}>
          <CFormLabel>Medical Insurance</CFormLabel>
          <div>
            <CFormCheck
              inline
              type="radio"
              value="Yes"
              label="Yes"
              checked={state.medicalInsurance === 'Yes' ? true : false}
              onClick={() => handleInputChange('Yes', 'medicalInsurance')}
            />
            <CFormCheck
              inline
              type="radio"
              value="No"
              label="No"
              checked={state.medicalInsurance === 'No' ? true : false}
              onClick={() => handleInputChange('No', 'medicalInsurance')}
            />
          </div>
        </CCol>
      </CRow>

      {state.medicalInsurance === 'Yes' && (
        <CRow>
          <CCol lg={12} md={12} sm={12}>
            <CFormLabel htmlFor="floatingInput" className="mt-3">
              (fill the below details only if Medical Insurance exist)
            </CFormLabel>
            <CFormSelect
              size="lg"
              className="mb-3"
              aria-label="Large select example"
              value={state.typeOfInsurance}
              onChange={(event) => handleInputChange(event.target.value, 'typeOfInsurance')}
            >
              <option>Types Of Insurance</option>
              <option value="Government">Government</option>
              <option value="Private">Private</option>
            </CFormSelect>
          </CCol>
        </CRow>
      )}

      {state.medicalInsurance === 'Yes' && (
        <CRow>
          <CCol>
            <CFormLabel htmlFor="floatingInput">
              {state.typeOfInsurance === 'Government'
                ? `((For Goverment Insurance))`
                : `((For Private Insurance))`}
            </CFormLabel>
          </CCol>
        </CRow>
      )}

      {state.medicalInsurance === 'Yes' && (
        <CRow>
          <CCol lg={12} md={12} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Insurance ID Number"
                value={state.govt_ins_Id}
                onChange={(event) => handleInputChange(event.target.value, 'govt_ins_Id')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Insurance ID Number</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      )}

      {state.medicalInsurance === 'Yes' && (
        <CRow>
          {state.typeOfInsurance === 'Government' && (
            <CCol lg={6} md={6} sm={12}>
              <CFormFloating className="mb-3">
                <CFormInput
                  type="text"
                  id="floatingInput"
                  placeholder="FirstName"
                  value={state.coverage_Amount}
                  onChange={(event) => handleInputChange(event.target.value, 'coverage_Amount')}
                  style={{ height: '50px' }}
                />
                <CFormLabel htmlFor="floatingInput">Maximum Coverage Amount</CFormLabel>
              </CFormFloating>
            </CCol>
          )}
          <CCol lg={6} md={6} sm={12}>
            {state.typeOfInsurance === 'Government' ? (
              <CFormSelect
                size="lg"
                className="mb-3"
                aria-label="Large select example"
                value={state.benifits}
                onChange={(event) => handleInputChange(event.target.value, 'benifits')}
              >
                <option>Types Of Benefits</option>
                <option value="Aayushman Bharat Yojana">Aayushman Bharat Yojana</option>
                <option value="Pradhan Mantri Jeevan Jyoti Beema Yojana">
                  Pradhan Mantri Jeevan Jyoti Beema Yojana
                </option>
              </CFormSelect>
            ) : (
              <CFormSelect
                size="lg"
                className="mb-3"
                aria-label="Large select example"
                value={state.benifits}
                onChange={(event) => handleInputChange(event.target.value, 'benifits')}
              >
                <option>Types Of Benefits</option>
                <option value="Family Floater">Family Floater</option>
                <option value="Group Health">Group Health</option>
                <option value="Senior Citizen Health">Senior Citizen Health</option>
                <option value="Maternity Health">Maternity Health</option>
                <option value="Criticial lllness">Criticial lllness</option>
                <option value="Top-up Health">Top-up Health</option>
              </CFormSelect>
            )}
          </CCol>
        </CRow>
      )}

      <CRow>
        <CCol lg={12} md={12} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="hospital_chart_no"
              className="mt-3"
              value={state.hospital_chart_no}
              onChange={(event) => handleInputChange(event.target.value, 'hospital_chart_no')}
            />
            <CFormLabel htmlFor="floatingInput">Hospital Chart No</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

      <CRow>
        <CCol lg={12} md={12} sm={12}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="commends"
              id="floatingInput"
              placeholder=""
              name="commends"
              value={state.commends}
              onChange={(event) => handleInputChange(event.target.value, 'commends')}
            />
            <CFormLabel htmlFor="floatingInput">Commends</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>

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
            <button class="btn btn-success" disabled={submitCon} onClick={() => nextTab()}>
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
              value={state.email1}
              onChange={(event) => handleInputChange(event.target.value, 'email1')}
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
              onChange={(event) => handleInputChange(event.target.value, 'email2')}
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

export default PatientCallDetails
