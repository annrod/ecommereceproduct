import React from 'react';
import { Card } from 'react-bootstrap';

const User = ({ user }) => {
  return (
    <Card.Body>
        <Card className='my-3 p-3 rounded'>
            <Card.Text as='h3'>$ {user.name}</Card.Text>   
    
        </Card>
    </Card.Body>
  );
};

export default User;