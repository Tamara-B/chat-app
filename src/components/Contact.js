import React from 'react';
import './Contact.css';


function Contact(props) {
        
    return (
        <div className='Contact'>
            <img className='avatar' src={props.avatar} alt={props.name}/>
            <div className='status'>
                <h4 className='name'> {props.name} </h4>  
                <p className='status-text'> 
                    <span className={props.online === true ? 'status-online' : 'status-offline'}></span> 
                    {props.online === true ? 'Online' : 'Offline'} 
                </p>
            </div>
        </div>
    );
}


export default Contact;