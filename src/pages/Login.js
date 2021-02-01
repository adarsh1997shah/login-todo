import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  ButtonToolbar,
  Grid,
  Panel,
  Row,
  Col,
} from 'rsuite';

import '../styles/login.css';

const initialState = {
  name: '',
  password: '',
};

function Login() {
  const [formValue, setFormValue] = useState(initialState);
  const history = useHistory();

  const handleFormSubmit = () => {
    if (formValue.name !== '' && formValue.name !== '') {
      localStorage.setItem('login', JSON.stringify(formValue));
      setFormValue(initialState);
      history.push('/');
    }
  };

  const handleFormChange = value => {
    setFormValue(value);
  };

  return (
    <>
      <Grid fluid>
        <Row className="login-wrapper">
          <Col xs={22} md={18} xsOffset={1} mdOffset={3}>
            <Panel shaded header={<h4>Login to Enter</h4>}>
              <Form fluid onChange={handleFormChange} formValue={formValue}>
                <FormGroup>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl name="name" required placeholder="Enter name" />
                  <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl
                    name="password"
                    type="password"
                    required
                    placeholder="Enter password"
                  />
                  <HelpBlock>Required</HelpBlock>
                </FormGroup>
                <ButtonToolbar>
                  <Button
                    appearance="primary"
                    type="submit"
                    onClick={handleFormSubmit}
                  >
                    Submit
                  </Button>
                </ButtonToolbar>
              </Form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default Login;
