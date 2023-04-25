import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import AuthAxios from 'src/Interceptors/AuthAxios'
import ReactPaginate from 'react-paginate'
import './style.css'
import { CSVLink } from 'react-csv'
import CIcon from '@coreui/icons-react'
import { cilClearAll, cilFilter, cilPrint, cilSearch } from '@coreui/icons'
import { CRow, CCol, CFormInput } from '@coreui/react'

function Report() {
  const [data, setData] = useState([])
  const [filterValues, setfilterValues] = useState({
    graphicLocator: '',
    serviceCode: '',
    serviceType: '',
    filter: false,
    filter2: false,
    filter3: false,
    track: '',
    search: false,
  })
  console.log(data[0])

  useEffect(() => {
    AuthAxios.get(`CallDetailsById/${filterValues.track}`)
      .then((res) => {
        // console.log(res.data.data)
        setData(res.data.data)
      })
      .catch((err) => console.error(err.message))
  }, [filterValues.search])

  const [filteredCountries, setfilteredCountries] = useState([])

  useEffect(() => {
    let values

    values = data.filter((item) => {
      return (
        item.graphicLocator.toLowerCase() === filterValues.graphicLocator.toLowerCase() &&
        item.serviceCode.toLowerCase() === filterValues.serviceCode.toLowerCase() &&
        item.serviceType.toLowerCase() === filterValues.serviceType.toLowerCase()
      )
    })

    if (filterValues.filter) {
      setfilteredCountries(values)
    } else {
      setfilteredCountries(data)
    }
  }, [filterValues.filter3, data])

  const handleInputChange = (event, name) => {
    const { value } = event.target
    setfilterValues((filterValues) => ({
      ...filterValues,
      [name]: value,
      filter2: false,
    }))
  }

  return (
    <div>
      <CRow className="mb-3">
        <CCol lg={10} md={10} sm={12}>
          <CRow>
            <CCol lg={3} md={3} sm={6} className="mb-3">
              <CFormInput
                type="text"
                id="exampleFormControlInput1"
                placeholder="Enter Tracking ID"
                aria-describedby="exampleFormControlInputHelpInline"
                value={filterValues.track}
                onChange={(event) => handleInputChange(event, 'track')}
              />
            </CCol>
            <CCol lg={3} md={3} sm={6} className="mb-3">
              <button
                style={{
                  padding: '7px 20px',
                  backgroundColor: 'green',
                  border: 'none',
                  borderRadius: '25px',
                  color: 'white',
                }}
                onClick={() => {
                  setfilterValues((filterValues) => ({
                    ...filterValues,
                    search: !filterValues.search,
                  }))
                }}
                variant="contained"
                color="primary"
              >
                <CIcon icon={cilSearch} className="me-2" size="lg" style={{ color: 'white' }} />
                Search
              </button>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg={2} md={2} sm={12} className="d-flex justify-content-end">
          <button
            style={{ backgroundColor: 'rgb(60 75 100)', padding: '5px 10px', height: 37 }}
            variant="contained"
            color="primary"
          >
            {/* <LocalPrintshopIcon className="me-2" /> */}
            <CIcon icon={cilPrint} className="me-2" size="lg" style={{ color: 'white' }} />
            <CSVLink
              data={data}
              filename={'IncidentCallDetails.csv'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              CSV
            </CSVLink>
          </button>
        </CCol>
      </CRow>

      <CRow>
        {data[0] &&
          Object.keys(data[0])
            .filter((nam) => nam !== '_id' && nam !== '__v' && nam !== 'userId')
            .map(
              (item, i) =>
                data[0][item] !== '' && (
                  <CCol key={i} className="mb-3 me-3 border p-2">
                    <div>
                      <h5 style={{ textTransform: 'capitalize' }}>{item}</h5>
                      <h6>{data[0][item]}</h6>
                    </div>
                  </CCol>
                ),
            )}
      </CRow>

      {/* <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="paginates"
      /> */}
    </div>
  )
}

export default Report
