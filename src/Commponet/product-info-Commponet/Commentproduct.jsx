import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactPaginate from 'react-paginate';
import './proudect-style.css'; // Add this CSS file for animations

export default function Commentproduct() {
  const data = [
    { id: 1, username: 'Ahmed Raid' },
    { id: 2, username: 'Mahdi Laly' },
    { id: 3, username: 'Bachir Mohamed' },
  ];

  const affichage = data.map((item) => (
    <Card
      key={item.id}
      className="mt-3 animated-fade-in"
      body
      style={{
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.59)',
        borderRadius: '3px',
        fontFamily: 'IBM Plex Sans Arabic',
      }}
    >
      <header
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}
      >
        {item.username}{' '}
        <span style={{ color: 'orange' }}>
          4.3
          <svg
            style={{ width: '20px', height: '20px', marginBottom: '4px' }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </span>
      </header>
      <p style={{ fontSize: '17px', marginBottom: '0px' }}>
        This is some text within a card body.
      </p>
    </Card>
  ));

  const five = [1, 2, 3, 4, 5];
  const fivestar = five.map((item, index) => (
    <svg
      key={index}
      style={{ width: '20px', height: '20px', marginBottom: '4px' }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-star-fill animated-bounce"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  ));

  return (
    <div className="animated-slide-up">
      <h2 style={{ color: 'black', fontSize: '30px' }}>
        Reviews{' '}
        <span style={{ color: 'orange', fontSize: '21px' }}>
          4.3
          <svg
            style={{ width: '20px', height: '20px', marginBottom: '4px' }}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
          <span style={{ color: 'gray', fontSize: '20px' }}>(162)</span>
        </span>
      </h2>
      <div style={{ display: 'flex' }}>
        <h6
          style={{
            color: 'black',
            fontSize: '20px',
            fontFamily: 'IBM Plex Sans Arabic',
          }}
        >
          Ahmed Mohamed
        </h6>

        <div style={{ color: 'orange', marginLeft: '5px' }}>{fivestar}</div>
      </div>
      <FloatingLabel
        controlId="floatingTextarea2"
        style={{
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.59)',
          borderRadius: '10px',
        }}
        label="Comments"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button variant="dark" className="mt-3" style={{ padding: '15px 20px' }}>
        Add comment
      </Button>
      <hr />
      {affichage}
      <div style={{ display: 'flex', justifyContent: 'center' }} className="mt-3">
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
      </div>
    </div>
  );
}
