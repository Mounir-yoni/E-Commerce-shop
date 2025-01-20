import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import catimg1 from '../../image/clothe.png';
import catimg2 from '../../image/cat2.png';
import catimg3 from '../../image/labtop.png';
import catimg4 from '../../image/sale.png';
import catimg5 from '../../image/pic.png';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import './Category-style.css';

export default function AllcategoryComponet() {
  const catimg = [catimg1, catimg2, catimg3, catimg4, catimg5, catimg1, catimg2, catimg3, catimg4, catimg5, catimg2, catimg5];

  const dataflow = catimg.map((item, index) => {
    return (
      <Col
        key={index}
        className="d-flex justify-content-center slide-in" // Add the animation class
        style={{ animationDelay: `${index * 0.2}s` }} // Add delay for staggered effect
      >
        <Link to={'/Allcategory'} state={{ display: 'inline-block' }} style={{ textDecoration: 'none' }}>
          <Card
            style={{
              border: 'none',
              margin: '10px 0',
              backgroundColor: 'transparent',
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              style={{
                backgroundColor: '#ffd39a89',
                borderRadius: '50%',
                padding: '15px',
              }}
            >
              <Image className="catimg" src={item} />
            </div>
            <p
              style={{
                fontFamily: 'IBM Plex Sans Arabic',
                fontSize: '20px',
                fontWeight: '700',
                margin: '10px 0 0 0',
                textAlign: 'center',
                color: 'black',
              }}
            >
              Discounts
            </p>
          </Card>
        </Link>
      </Col>
    );
  });

  return (
    <Container fluid="xl  mt-4" style={{ maxWidth: '80%' }}>
      <nav className="navbar d-flex">
        <h2 style={{ fontFamily: 'IBM Plex Sans Arabic', fontSize: '30px', margin: '0' }}>Category</h2>
        <Button variant="outline-dark" style={{ fontSize: '20px', padding: '5px 20px', margin: '0' }}>
          More
        </Button>
      </nav>

      <Container fluid="xl mt-4 mb-4" style={{ maxWidth: '95%' }}>
        <Row className="d-flex justify-content-between">{dataflow}</Row>
      </Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={0}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={20}
        previousLabel="previous"
        containerClassName={'pagination justify-content-center p-3'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </Container>
  );
}
