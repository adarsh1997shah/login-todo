import React from 'react';
import { Button, Col, Icon, List, Row } from 'rsuite';

function ListItems({ item, handleItemDelete, handleItemEdit }) {
  return (
    <List.Item key={item.id}>
      <Row>
        <Col sm={8}>
          <h5>Title</h5>
          <p>{item.title}</p>
        </Col>
        <Col sm={12}>
          <h5>Description</h5>
          <p>{item.desc}</p>
        </Col>
        <Col sm={4}>
          <Button
            appearance="primary"
            color="red"
            onClick={() => handleItemDelete(item.id)}
          >
            <Icon icon="trash" />
          </Button>
          <Button
            appearance="primary"
            color="orange"
            onClick={() => handleItemEdit(item.id)}
            style={{ marginLeft: '5px' }}
          >
            <Icon icon="edit2" />
          </Button>
        </Col>
      </Row>
    </List.Item>
  );
}

export default ListItems;
