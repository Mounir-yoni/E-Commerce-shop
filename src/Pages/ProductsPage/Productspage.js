import React from 'react'
import Navbarcomponent from '../../Commponet/Utility/Navbar'
import Categoryheader from '../../Commponet/Category/Categoryheader'
import { Col, Container } from 'react-bootstrap'
import FilterComponent from '../../Commponet/ProductspageComponet/Filter'
import Productsstep from '../../Commponet/ProductspageComponet/Productsstep'
import ReactPaginate from 'react-paginate';
export default function Productspage() {
  return (
    <div>
      <Navbarcomponent/>
      <Categoryheader/>
      <Container style={{ maxWidth: '90%', backgroundColor: '#eae8e829' }}>

      <div className='mt-4 ' style={{fontFamily:'IBM Plex Sans Arabic',fontSize:'30px'}}> 
        <h2 >Avelable products</h2>
      </div>
        <Container style={{ maxWidth: '100%', backgroundColor: '#eae8e829' }} className='d-flex justify-content-center  mt-4'>
        <Col xs={2}  >
        <FilterComponent/>
        </Col>
        <Col xs={10}>
        <Productsstep/>
        </Col>

        </Container>
<ReactPaginate
            breakLabel="..."
            nextLabel="next"
            onPageChange={0}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={20}
            previousLabel="previous"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
      </Container>
    </div>
  )
}
