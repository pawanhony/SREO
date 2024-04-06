import React from 'react'
import Header from '../Layout/Header'
import { Card, Container, FloatingLabel, Form } from 'react-bootstrap'

export default function ToolKit() {
  return (
    <>
      <Header />
      <Container>
        <Form>
          <Card>
            <Card.Header>Tool Kit</Card.Header>
            <Card.Body>
              <FloatingLabel controlId="floatingName" label="Candidate Name" className="mb-3">
                <Form.Control type="text" name="name" placeholder=" Candidate Name" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingfName" label="Father Name" className="mb-3">
                <Form.Control type="text" name="fname" placeholder=" Father Name" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingdob" label="Date of Birth" className="mb-3">
                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
              </FloatingLabel>

              <Form.Floating className="mb-3">
                <Form.Select id="floatingInputCustom" type="text" placeholder="Gender" name='gender'>
                  <option>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
                <label htmlFor="floatingInputCustom">Gender</label>
              </Form.Floating>

              <FloatingLabel controlId="floatingmobile" label="Mobile Number" className="mb-3">
                <Form.Control type="number" name="mobile" placeholder="Mobile Number" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingemail" label="Gmail" className="mb-3">
                <Form.Control type="text" name="email" placeholder="Gmail" />
              </FloatingLabel>

              <Form.Floating className="mb-3">
                <Form.Select id="floatingInputCustom" type="text" placeholder="Category / Caste" name='gender'>
                  <option>Select Caste/ Category</option>
                  <option value="gen">General</option>
                  <option value="obc">OBC</option>
                  <option value="sc">SC</option>
                  <option value="st">ST</option>
                </Form.Select>
                <label htmlFor="floatingInputCustom">Category / Caste</label>
              </Form.Floating>

              <FloatingLabel controlId="floatingincome" label="Family Income" className="mb-3">
                <Form.Control type="text" name="income" placeholder="Family Income" />
              </FloatingLabel>

              
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </>
  )
}
