import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

const FilterComponent = () => {
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState({ min: '', max: '' });

  const handleCategoryChange = (value) => {
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleBrandChange = (value) => {
    setBrand((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPrice({ ...price, [name]: value });
  };

  return (
    <div className="filter-component" style={{ maxWidth: '300px', margin: '0 auto' }}>
      <Form>
        {/* Category Section */}
        <FormGroup>
          <Label className="fw-bold">Category</Label>
          {['All', 'Home Appliances', 'Electronics', 'Furniture', 'Clothing'].map((item, index) => (
            <div key={index}>
              <Input
                type="checkbox"
                value={item}
                onChange={() => handleCategoryChange(item)}
                checked={category.includes(item)}
              />
              <Label className="ms-2">{item}</Label>
            </div>
          ))}
        </FormGroup>

        {/* Brand Section */}
        <FormGroup>
          <Label className="fw-bold">Brand</Label>
          {['All', 'Apple', 'Samsung', 'Sony', 'LG'].map((item, index) => (
            <div key={index}>
              <Input
                type="checkbox"
                value={item}
                onChange={() => handleBrandChange(item)}
                checked={brand.includes(item)}
              />
              <Label className="ms-2">{item}</Label>
            </div>
          ))}
        </FormGroup>

        {/* Price Section */}
        <FormGroup>
          <Label className="fw-bold">Price</Label>
          <div className="d-flex">
            <Input
              type="number"
              name="min"
              placeholder="From"
              value={price.min}
              onChange={handlePriceChange}
              className="me-2"
            />
            <Input
              type="number"
              name="max"
              placeholder="To"
              value={price.max}
              onChange={handlePriceChange}
            />
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FilterComponent;
