import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import AuthAxios from 'src/Interceptors/AuthAxios'
import ReactPaginate from 'react-paginate'
import './style.css'
import { CSVLink } from 'react-csv'
import CIcon from '@coreui/icons-react'
import { cilClearAll, cilFilter, cilPrint, cilSearch } from '@coreui/icons'
import { CRow, CCol, CFormInput } from '@coreui/react'

function CallDetailsReport() {
  const [data, setData] = useState([])
  const [filterValues, setfilterValues] = useState({
    graphicLocator: '',
    serviceCode: '',
    serviceType: '',
    filter: false,
    filter2: false,
    filter3: false,
  })

  useEffect(() => {
    AuthAxios.get('CallDetails')
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })
      .catch((err) => console.error(err.message))
  }, [])

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
  console.log('sdsdf', filterValues.filter, filterValues.filter2)

  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10
  const endOffset = itemOffset + itemsPerPage
  const currentItems = filteredCountries.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(filteredCountries.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCountries.length
    setItemOffset(newOffset)
  }

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
                placeholder="Enter ServiceCode"
                aria-describedby="exampleFormControlInputHelpInline"
                value={filterValues.serviceCode}
                onChange={(event) => handleInputChange(event, 'serviceCode')}
              />
            </CCol>
            <CCol lg={3} md={3} sm={6} className="mb-3">
              <CFormInput
                type="text"
                id="exampleFormControlInput1"
                placeholder="Enter ServiceType"
                aria-describedby="exampleFormControlInputHelpInline"
                value={filterValues.serviceType}
                onChange={(event) => handleInputChange(event, 'serviceType')}
              />
            </CCol>
            <CCol lg={3} md={3} sm={6} className="mb-3">
              <CFormInput
                type="text"
                id="exampleFormControlInput1"
                placeholder="Enter GraphicLocator"
                aria-describedby="exampleFormControlInputHelpInline"
                value={filterValues.graphicLocator}
                onChange={(event) => handleInputChange(event, 'graphicLocator')}
              />
            </CCol>
            <CCol lg={3} md={3} sm={6} className="mb-3">
              {filterValues.filter && filterValues.filter2 ? (
                <button
                  style={{
                    padding: '7px 20px',
                    backgroundColor: '#969ea9',
                    border: 'none',
                    borderRadius: '25px',
                    color: 'white',
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    setfilterValues((filterValues) => ({
                      ...filterValues,
                      filter: false,
                      filter2: false,
                      filter3: !filterValues.filter3,
                      serviceCode: '',
                      serviceType: '',
                      graphicLocator: '',
                    }))
                  }
                >
                  <CIcon icon={cilClearAll} className="me-2" size="lg" style={{ color: 'white' }} />
                  Clear
                </button>
              ) : (
                <button
                  style={{
                    padding: '7px 20px',
                    backgroundColor: 'green',
                    border: 'none',
                    borderRadius: '25px',
                    color: 'white',
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    setfilterValues((filterValues) => ({
                      ...filterValues,
                      filter: true,
                      filter2: true,
                      filter3: !filterValues.filter3,
                    }))
                  }
                >
                  <CIcon icon={cilFilter} className="me-2" size="lg" style={{ color: 'white' }} />
                  Filter
                </button>
              )}
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
              data={currentItems}
              filename={'IncidentCallDetails.csv'}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              CSV
            </CSVLink>
          </button>
        </CCol>
      </CRow>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ServiceCode</th>
            <th>ServiceType</th>
            <th>DateOfIncident</th>
            <th>TimeOfIncident</th>
            <th>DestinationDeterminant</th>
            <th>GraphicLocator</th>
            <th>SceneLocationType</th>
            <th>DestinationFacility</th>
            <th>SceneFacility</th>
            <th>EMS</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((itm, index) => (
              <tr key={index}>
                <td>{itm.serviceCode}</td>
                <td>{itm.serviceType}</td>
                <td>{itm.dateOfIncident}</td>
                <td>{itm.timeOfIncident}</td>
                <td>{itm.destinationDeterminant}</td>
                <td>{itm.graphicLocator}</td>
                <td>{itm.sceneLocationType}</td>
                <td>{itm.destinationFacility}</td>
                <td>{itm.sceneFacility}</td>
                <td>{itm.EMS}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="paginates"
      />
    </div>
  )
}

export default CallDetailsReport
