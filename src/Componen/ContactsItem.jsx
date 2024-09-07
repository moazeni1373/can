import React from 'react'

function ContactsItem({date:{id, name , lastName, email,},deleteHandler,filteredContacts,searchHandler}) {
  return (
    <li key={id}  ><p>
    {name} {lastName}
             </p>
             <p>{email}</p>
             <button onClick={()=>deleteHandler(id)}>Remove</button>
             <button>Edit</button>
              
             </li>
  )
}

export default ContactsItem
