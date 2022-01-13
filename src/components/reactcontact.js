import React,{useState} from 'react'
import './reactcontact.css';

const Reactcontact = () => {
    const [user,setUser]= useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    });
    let name,value;
    const getUserData = (event)=>
    {
         name= event.target.name;
         value= event.target.value;
         setUser({...user,[name]:value});

    };
    const postData = async (e)=>
    {
        e.preventDefault();

         const {name, email, phone, message,} = user;
        const  res = await fetch("https://contactform-d861e-default-rtdb.firebaseio.com/contactform.json",
                            {
                                method:"POST",
                                headers:{
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                    name,
                                    email,
                                    phone,
                                    message,
                    
                                }),
                            } 
        
        
            );
            if(res){
                setUser({
                    name:"",
                    email:"",
                    phone:"",
                    message:"",
                });
                alert("data stored");
            }
     
    };
    return (
        <>
        
    <div>
        <h1>Contact Us...!</h1>
    </div>
    <form method='POST'>
    <div class="container">
        <p>Full Name: <input type="text" name='name'  value= {user.name} onChange={getUserData} placeholder="Full Name" required/></p>
        <p>E-mail:  <input type="email" name='email'  value= {user.email} onChange={getUserData} placeholder="abcd@gmail.com" required/></p>
        <p>Phone number: <br /> <input type="tel" name='phone'  value= {user.phone} onChange={getUserData} placeholder="91 XXXXXXXXXXX" required/> </p>
        <p>Message: <input type="text"name="Message" name='message'  value= {user.message} onChange={getUserData} placeholder="Message" required/> </p>
        <button onClick={postData}> submit</button>
    </div>
    </form>
    
        </>
    )
}

export default Reactcontact
