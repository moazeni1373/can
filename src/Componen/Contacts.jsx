import React, { useState } from 'react'
import ContactsList from './ContactsList'
import { v4 } from 'uuid';
import inputs from '../Constants/inputs'


        function Contacts() {
    const [contacts,setContacts]=useState([])
    const [alert,setAlert]=useState("")

    const [searchTerm, setSearchTerm] = useState(""); 
    const [contact,setContact]=useState({id:"",
        name:"", lastName:"", email:"", phone:"", job:"",
    });


    const  changeHandler=(event)=>{
        const name=event.target.name;
    const value =event.target.value;

setContact((Contact)=>({...contact,[name]:value}))}

const addHandler=()=>{
    if(!contact.name || !contact.lastName || !contact.email || !contact.phone || !contact.job){
        setAlert("please enter valid date!")
        return;
    }
    setAlert("")
const newContact={...contact,id:v4()}
    setContacts((Contacts)=>[...Contacts,newContact])
    setContact({
        name:"", lastName:"", email:"", phone:"", job:"",
    });
   
};
const deleteHandler =(id)=>{
   const newContacts=contacts.filter((contact)=>contact.id ==!id 
);setContacts (newContacts);
}
const searchHandler = (event) => {
    setSearchTerm(event.target.value); // مقدار جستجو به‌روزرسانی می‌شود
}; 
const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
        <div>
            {inputs.map((input,index)=>(<input
            key={index}
             type={input.type }
            placeholder={input.placeholder }
            name={input.name }
            value={contact[input.name]}
            onChange={ changeHandler}/>))};
            <button onClick={addHandler}
            >Add contact</button>
        </div>
        <div  >{alert && <p>{alert} </p> }</div>
        <ContactsList contacts={filteredContacts}  searchHandler={searchHandler}      deleteHandler={deleteHandler}/>

     
    </div>
  )
}

export default Contacts
