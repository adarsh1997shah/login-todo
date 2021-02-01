import React, { useReducer, useState } from 'react';
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
  Alert,
} from 'rsuite';

const reducer = (prevItems, action) => {
  let data = [];

  switch (action.type) {
    case 'ADD':
      if (prevItems.some(item => item.title === action.data.title)) {
        Alert.error('Item with title already declared', 4000);
        data = prevItems;
      } else {
        data = [...prevItems, action.data];
      }
      break;
    case 'REMOVE':
      data = prevItems.filter(item => item.id !== action.id);
      break;
    case 'SAVE':
      data = prevItems.map(item => {
        if (item.id === action.data.id) {
          return action.data;
        } else {
          return item;
        }
      });
      break;
    default:
      Alert.error('Invalid operation', 4000);
  }

  return data;
};

const initialState = {
  title: '',
  desc: '',
};

function Home() {
  const [items, dispatch] = useReducer(reducer, []);
  const [isSave, setIsSave] = useState(false);

  const [formValue, setFormValue] = useState(initialState);

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
      <Grid fluid>
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
                </ButtonToolbar>
              </Form>
            </Panel>
          </Col>
        </Row>

        <Row>
          <Col xs={22} md={18} xsOffset={1} mdOffset={3}>
            <Panel shaded header={<h4>Items</h4>}>
              <List hover>
                {items.length !== 0 ? (
                  items.map(item => (
                    <List.Item key={item.id}>
                      <div>{item.title}</div>
                      <div>{item.desc}</div>
                      <Button
                        appearance="primary"
                        color="red"
                        onClick={() => handleItemDelete(item.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        appearance="primary"
                        color="orange"
                        onClick={() => handleItemEdit(item.id)}
                      >
                        Edit
                      </Button>
                    </List.Item>
                  ))
                ) : (
                  <div>No</div>
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
