import React, { useState } from 'react';
import {
  Button,
  Grid,
  Row,
  Col,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  ButtonToolbar,
  List,
} from 'rsuite';
import ListItems from '../components/ListItems';
import { useItemReducer } from '../misc/helper';

import '../styles/home.css';

const initialState = {
  title: '',
  desc: '',
};

function Home() {
  const [items, dispatch] = useItemReducer();
  const [isSave, setIsSave] = useState(false);
  const [formValue, setFormValue] = useState(initialState);

  const handleFormReset = () => {
    setFormValue(initialState);
  };

  const handleFormChange = value => {
    setFormValue(value);
  };

  const handleItemAdd = () => {
    dispatch({ type: 'ADD', data: { id: Date.now(), ...formValue } });

    setFormValue(initialState);
  };

  const handleItemEdit = id => {
    const item = items.find(item => item.id === id);

    setFormValue(item);
    setIsSave(true);
  };

  const handleItemDelete = id => {
    dispatch({ type: 'REMOVE', id });
  };

  const handleItemSave = () => {
    dispatch({ type: 'SAVE', data: formValue });

    setFormValue(initialState);
    setIsSave(false);
  };

  return (
    <>
      <Grid fluid className="home-wrapper">
        <Row>
          <Col xs={22} md={18} xsOffset={1} mdOffset={3}>
            <Panel shaded header={<h4>Add or Save Item</h4>}>
              <Form fluid onChange={handleFormChange} formValue={formValue}>
                <FormGroup>
                  <ControlLabel>Title</ControlLabel>
                  <FormControl
                    name="title"
                    required
                    placeholder="Enter Title"
                  />
                </FormGroup>
                <FormGroup>
                  <ControlLabel>Description</ControlLabel>
                  <FormControl
                    rows={4}
                    name="desc"
                    componentClass="textarea"
                    required
                    placeholder="Enter Description"
                  />
                </FormGroup>
                <ButtonToolbar>
                  {isSave ? (
                    <Button appearance="primary" onClick={handleItemSave}>
                      Save
                    </Button>
                  ) : (
                    <Button appearance="primary" onClick={handleItemAdd}>
                      Add
                    </Button>
                  )}
                  <Button
                    appearance="primary"
                    color="green"
                    onClick={handleFormReset}
                  >
                    Reset
                  </Button>
                </ButtonToolbar>
              </Form>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col xs={22} md={18} xsOffset={1} mdOffset={3}>
            <Panel shaded header={<h4>Items</h4>} className="items-wrapper">
              <List
                hover
                className={`list-wrapper ${
                  items.length === 0 ? 'shadow-none' : null
                }`}
              >
                {items.length !== 0 ? (
                  items.map(item => (
                    <ListItems
                      key={item.id}
                      item={item}
                      handleItemDelete={handleItemDelete}
                      handleItemEdit={handleItemEdit}
                    />
                  ))
                ) : (
                  <List.Item>Currently no items present</List.Item>
                )}
              </List>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default Home;
