import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import AuthAxios from 'src/Interceptors/AuthAxios'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
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
    AuthAxios.post('UsersLogin', state)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('user', JSON.stringify(res.data.data))
        if (res.data.status === 'Success') {
          success('Login Successfully')
          setTimeout(() => {
            location.href = '/#/dashboard'
          }, 1000)
        } else {
          failure('Enter valid credential!')
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
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm method="post" encType="multipart/form-data" className="form-horizontal">
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        value={state.email}
                        onChange={(event) => handleInputChange(event, 'email')}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={state.password}
                        onChange={(event) => handleInputChange(event, 'password')}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          disabled={state.email !== '' && state.password !== '' ? false : true}
                          onClick={() => submitHandler()}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p className="mt-2">DOTTY CARE</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      <ToastContainer />
    </div>
  )
}

export default Login
