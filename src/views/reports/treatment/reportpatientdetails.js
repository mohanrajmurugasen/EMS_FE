import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import AuthAxios from 'src/Interceptors/AuthAxios'
import ReactPaginate from 'react-paginate'
import '../style.css'
import { CSVLink } from 'react-csv'
import CIcon from '@coreui/icons-react'
import { cilPrint } from '@coreui/icons'

function BasicExample() {
  const [data, setData] = useState([])

  useEffect(() => {
    AuthAxios.get('PatientTreatmentDetails')
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data)
      })
      .catch((err) => console.error(err.message))
  }, [])

  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10
  const endOffset = itemOffset + itemsPerPage
  const currentItems = data.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(data.length / itemsPerPage)

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <div></div>
        <button
          style={{ backgroundColor: '#263040', padding: '5px 10px' }}
          variant="contained"
          color="primary"
        >
          {/* <LocalPrintshopIcon className="me-2" /> */}
          <CIcon icon={cilPrint} className="me-2" size="lg" style={{ color: 'white' }} />
          <CSVLink
            data={currentItems}
            filename={'PatientTreatmentDetails.csv'}
            style={{ color: 'white', textDecoration: 'none' }}
          >
            CSV
          </CSVLink>
        </button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ProcedureStartTime</th>
            <th>ProcedureType</th>
            <th>ProcedureEndTime</th>
            <th>DeviceMethod</th>
            <th>TechnicianID</th>
            <th>DeviceSize</th>
            <th>Outcome</th>
            <th>Successfull</th>
            <th>Treatment</th>
            <th>TreatmentType</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((itm, index) => (
              <tr key={index}>
                <td>{itm.procedureStartTime}</td>
                <td>{itm.procedureType}</td>
                <td>{itm.procedureEndTime}</td>
                <td>{itm.deviceMethod}</td>
                <td>{itm.technicianID}</td>
                <td>{itm.deviceSize}</td>
                <td>{itm.outcome}</td>
                <td>{itm.successfull}</td>
                <td>{itm.treatment}</td>
                <td>{itm.treatmentType}</td>
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

export default BasicExample
