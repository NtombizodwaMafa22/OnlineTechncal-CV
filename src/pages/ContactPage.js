import React from 'react';
import Content from '../components/content';
import Hero from '../components/hero';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { db } from '../firebase';
import emailjs from 'emailjs-com';

class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',
            disabled: false,
            emailSent:null
        }
    }



    handleChange = (event)=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault(); //to avoid refreshing
        this.setState={
            disabled:true
        }

        db.collection('ContactsPage').add({
            name : this.state.name,
            email : this.state.email,
            message : this.state.message,
        }).then( () => {
            alert('Message has been submited. Thank you!');
        }).catch( (error) => {
            alert(error.message);
        });
        this.sendEmail(event);
        event.target.reset();
    }

  sendEmail = (e) =>{
        //e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_iwtsdjh', e.target, 'user_Sxnj17gpr1eMNmOa2XmAu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
    render(){
        return(
            <div className="contact-style" padding-bottom="5px">
                <Hero title={this.props.title}/>
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full_name">Full Name</Form.Label>
                            <Form.Control id="full_name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"  rows="3" value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="secondary" type="submit">
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline-sucess-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline-sucess-msg">Email Not sent</p>}
                    </Form>


                </Content>
            </div>
        );
    }

}

export default ContactPage;