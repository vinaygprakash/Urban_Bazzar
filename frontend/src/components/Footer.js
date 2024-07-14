import React from 'react'
import { useContext, useState } from 'react';
import ShopContext from '../context/ShopContext';

export default function Footer() {
    const context = useContext(ShopContext);
    const { setalertMessage, alertShowfun } = context;
    const [user, setuser] = useState({ name: '', message: '' });

    const onchangefun = (event) => {
        if(event.target.name==='name')
        event.target.value = event.target.value.toUpperCase();
        setuser({ ...user, [event.target.name]: event.target.value })
    }

    const onsubmitfun = async (event) => {
        try {
            event.preventDefault();
            // let url = 'https://urbanbazzar-backend.onrender.com/';
            const url = "http://localhost:4000/api/user/feedback";
            // const url = "https://urbanbazzar-backend.onrender.com/api/user/feedback";
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: user.name, message: user.message })
            });
            const json = await response.json();

            setalertMessage(json.message);
            setuser({name:'',message:''});
            alertShowfun();
        } catch (error) {
            setuser({name:'',message:''});
            alertShowfun();
            console.log('feedback error in frontend', error);
        }
    }
    return (
        <>
            <div className="container-fluid footer mx-0">
                <div className="row mx-0">
                    <div className="col-md-3 mx-auto text-center mb-4">
                        <h3>Follow Me</h3>
                        <div className="mx-auto mb-2">
                            <samp>
                                <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i>
                                </a>
                                </samp>
                                <samp>
                                    <a href="https://www.instagram.com/vinayprakash009" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-instagram mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i>
                                    </a>
                                </samp>

                                <samp>
                                <a href="https://www.linkedin.com/in/vinayprakashiiitk" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin mx-2" style={{ cursor: 'pointer', color: 'white', fontSize: '23px' }}></i>
                                </a>
                                </samp>


                        </div>
                    </div>
                    <div className="col-md-3 mx-auto text-center mb-2">
                        <img style={{ width: '200px' }} src="images/logo.png" alt="" />
                        <p className="mt-2">Disclaimer: This website is intended solely for informational purposes and is not for commercial use. All materials and information presented are for general reference only.</p>
                    </div>
                    <div className="col-md-3 mx-auto text-center mb-2">
                        <h3>FeedBack</h3>
                        <form onSubmit={onsubmitfun}>
                            <input onChange={onchangefun} required autoComplete="off" name="name"  value={user.name} type="text" placeholder="Name" style={{ textAlign: 'center', outline: 'none', marginBottom: '7px', borderRadius: '20px', padding: '2px',border:'none' }} /><br />
                            <input onChange={onchangefun} required autoComplete="off" name="message" value={user.message} type="text" placeholder="Message Me" style={{ textAlign: 'center', outline: 'none', borderRadius: '20px', padding: '2px',border:'none' }} /><br />
                            <button type="submit" className="BTN my-2">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-3 mx-auto text-center mb-2">
                        <h3>Contact Me</h3>
                        <div>
                            <samp>Kalyani,Nadia</samp><br />
                            <samp>West Bengal</samp><br />
                            <samp>Phone: 7733842416</samp><br />
                        </div>
                    </div>
                    <hr />
                    <p className="copyright">@Copyright 2024 - Vinay Prakash</p>
                </div>
            </div>
        </>
    )
}
