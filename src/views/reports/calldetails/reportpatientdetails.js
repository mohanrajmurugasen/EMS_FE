import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import AuthAxios from 'src/Interceptors/AuthAxios'
import ReactPaginate from 'react-paginate'
import '../style.css'
import { CSVLink } from 'react-csv'
import CIcon from '@coreui/icons-react'
import { cilPrint } from '@coreui/icons'

export default function Reportpatientdetails() {
  const [data, setData] = useState([])

  useEffect(() => {
    AuthAxios.get('PatientCallDetails')
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
            filename={'PatientCallDetails.csv'}
            style={{ color: 'white', textDecoration: 'none' }}
          >
            CSV
          </CSVLink>
        </button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>TelePhone</th>
            <th>Insurance Type</th>
            <th>Hospital Chart</th>
            <th>Medical Insurance</th>
            <th>Comments</th>
            <th>Aadhar</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((itm, index) => (
              <tr key={index}>
                <td>{itm.firstName}</td>
                <td>{itm.sureName}</td>
                <td>{itm.gender}</td>
                <td>{itm.DOB}</td>
                <td>{itm.telePhone}</td>
                <td>{itm.typeOfInsurance}</td>
                <td>{itm.hospitalChart}</td>
                <td>{itm.medicalInsurance}</td>
                <td>{itm.comments}</td>
                <td>{itm.aadhar}</td>
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
