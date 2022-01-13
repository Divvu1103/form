import React from 'react'

const Reactcontact = () => {
    return (
        <>
        
    <div>
        <h1>Contact Us...!</h1>
    </div>
    <div class="container">
        <p>Full Name: <input type="text" placeholder="Full Name" required/></p>
        <p>E-mail:  <input type="email" placeholder="abcd@gmail.com" required/></p>
        <p>Subject: <input type="text"placeholder="Job Enquiry" required/> </p>
        <p>Message: <input type="text"name="Message"placeholder="Message" required/> </p>
        <input type="submit" value="Submit"/>
    </div>
    
        </>
    )
}

export default Reactcontact
