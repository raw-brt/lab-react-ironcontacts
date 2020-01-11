import React from 'react';

const ContactRow = ({name, popularity, deleteContact, pictureUrl}) => {
  return (
    <tr>
      <td><img src={pictureUrl} alt={name} className="img-thumbnail" style={{ maxWidth: "70px" }}/></td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td><button onClick={deleteContact}>Delete</button></td>
    </tr>
  )
}

export default ContactRow;