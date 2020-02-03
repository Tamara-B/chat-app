import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          online: props.online
        };
      }
    
    render() {
        return (
            <div className='Contact'>
                <img className='avatar' src={this.props.avatar} alt={this.props.name}/>
                <div className='status'>
                    <h4 className='name'> {this.props.name} </h4>  
                    <p className='status-text'> 
                        <span className={this.state.online ? 'status-online' : 'status-offline'} 
                        onClick={event => {
                            const newStatus = !this.state.online;
                            this.setState({ online: newStatus });
                        }} > 
                        <span className='insideText'>{this.state.online ? 'Online' : 'Offline'} </span>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}


export default Contact;