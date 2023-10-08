import axios from 'axios';
import React, { useState } from 'react'


const Contact = () => {

    const [Name, setName]=useState("");
    const [email,setEmail]=useState("");
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const data = await axios.post("https://portfolio-backend-d7b1.onrender.com/api/v1/user/contact", {
            Name,email,subject,message
          },
          {
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials:true,
          }
          );
          console.log(data.data.message)
          alert(data.data.message)
          setName("")
          setEmail("")
          setSubject("")
          setMessage("")
        } catch (error) {
          console.log(error);
          alert(error.response.data.data.message)
        }
      };
  return (
    <div>
      <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">Get in Touch</div>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Priyanshu Shrivastava</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Rampur, India</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">singhpsv2002@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form method='POST'>
                        <div className="fields">
                            <div className="field name">
                                <input 
                                required
                                value={Name} 
                                onChange={(e)=>setName(e.target.value)}
                                type="text" 
                                placeholder='Name'  />
                            </div>
                            <div className="field email">
                                <input required
                                 value={email} 
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email" 
                                placeholder='Email'  />
                            </div>
                        </div>
                        <div className="field">
                            <input required
                             value={subject} 
                            onChange={(e)=>setSubject(e.target.value)}
                            type="text" 
                            placeholder='Subject'  />
                        </div>
                        <div className="field textarea">
                            <textarea  value={message} cols="30" rows="10" placeholder="Message.." required
                            onChange={(e)=>setMessage(e.target.value)} ></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit" onClick={handleSubmit}>Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Contact
