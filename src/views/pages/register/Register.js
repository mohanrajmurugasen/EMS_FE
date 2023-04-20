import React, { useEffect } from 'react'
import { useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
  CInputGroupText,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import AuthAxios from 'src/Interceptors/AuthAxios'
import { ToastContainer, toast } from 'react-toastify'

const Register = () => {
  const [state, setState] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    userType: 'client',
  })
  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)
  const handleInputChange = (event, name) => {
    const { value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const users = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    if (users) {
      location.href = '/#/dashboard'
    }
  }, [])

  const submitHandler = () => {
    AuthAxios.post('Users', state)
      .then((res) => {
        console.log(res.data)
        if (res.data.message === 'Success') {
          success('Register Successfully')
          setTimeout(() => {
            location.href = '/#/login'
          }, 1000)
        } else {
          failure('Email already Exist!')
        }
      })
      .catch((err) => {
        failure('Internal Server Error')
        console.error(err.message)
      })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm method="post" encType="multipart/form-data" className="form-horizontal">
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      name="userName"
                      value={state.userName}
                      onChange={(event) => handleInputChange(event, 'userName')}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      name="email"
                      value={state.email}
                      onChange={(event) => handleInputChange(event, 'email')}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name="password"
                      value={state.password}
                      onChange={(event) => handleInputChange(event, 'password')}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="phone-number"
                      placeholder="Mobile Number"
                      autoComplete="mobile-number"
                      name="phone"
                      value={state.phone}
                      onChange={(event) => handleInputChange(event, 'phone')}
                    />
                  </CInputGroup>

                  <div className="d-grid">
                    <CButton
                      disabled={
                        state.userName !== '' &&
                        state.email !== '' &&
                        state.password !== '' &&
                        state.phone !== ''
                          ? false
                          : true
                      }
                      onClick={() => submitHandler()}
                      color="success"
                    >
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
      <ToastContainer />
    </div>
  )
}

export default Register
