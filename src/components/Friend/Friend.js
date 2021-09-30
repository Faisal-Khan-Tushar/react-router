import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
  const {id,name,phone,address,website}=props.friend;
  const url=`/friend/${id}`
  const friendStyle={
    backgroundColor:'#FAEEE0',
    border:'3px solid black',
    padding:'10px',
    borderRadius:'10px'
    
  }
  return (
    <div style={friendStyle}>
      <h2> name: {name} id: {id}</h2>
      <h5>My cell number:{phone}</h5>
      <p>Address : {address.city}</p>
      <p><small>Website: {website}</small></p>
      <Link to={url}>Visit me</Link>
    </div>
  );
};

export default Friend;