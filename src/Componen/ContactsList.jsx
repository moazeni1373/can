import React from 'react'
import ContactsItem from './ContactsItem'
import {FaSearch}  from "react-icons/fa";
 function ContactsList({contacts,deleteHandler,searchHandler,searchTerm}) {
  return (
    <div>
       <div>
        <button  onChange={searchHandler}
                    ><FaSearch /></button>
                <input
                    type="text"
                    placeholder="search"
                    value={searchTerm}
                    onChange={searchHandler}
                    
                />
            </div>
      {contacts.length ? (

      <ul>
        {
          contacts.map((contact)=>(<ContactsItem key={contact.id} date={contact} 
            deleteHandler={deleteHandler}/>
          ))
        }

      </ul>):(<p>No Contacts Yet</p> )}
    </div>
  )
}
export default ContactsList
