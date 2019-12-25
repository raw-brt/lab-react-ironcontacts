import React from 'react';

const ContactRow = (props) => {
  return (
    <tr>
      <td><img src={props.pictureUrl} alt={props.name} className="img-thumbnail" style={{ maxWidth: "70px" }}/></td>
      <td>{props.name}</td>
      <td>{props.popularity.toFixed(2)}</td>
    </tr>
  )
}

export default ContactRow;