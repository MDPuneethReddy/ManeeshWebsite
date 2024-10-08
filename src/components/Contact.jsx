import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { FaPhoneSquareAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    fetch('https://formspree.io/f/meqydvge', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        toast.success('Message sent successfully', {
          position: 'top-center',
          autoClose: 3000, 
          hideProgressBar: true,
        });
      } else {
        toast.error('Message not sent', {
          position: 'top-center',
          autoClose: 3000, 
          hideProgressBar: true,
        });
      }
    })
    .catch(error => {
      toast.error('Message not sent', {
        position: 'top-center',
        autoClose: 3000, 
        hideProgressBar: true,
      });
    });
  }
  

  return (
    <div>
    <div className="flex items-center justify-center h-full" style={{ paddingTop: "70px" }}>
      <div className="max-w-screen-md mx-auto bg-white rounded-md p-8 shadow-lg" style={{ width: '75%' }}>
        <h2 className="text-2xl font-bold mb-4" style={{ textAlign: "center", fontSize: "30px", textDecoration: "underline", paddingBottom: "20px" }}>Contact US</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4" >
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4" >
            <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter your subject"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:border-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600 transition duration-300 border border-black"
            style={{ color: "black", borderColor: "black" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <ContactInfo />
    <ToastContainer />
    </div>
  );
};

const ContactInfo = () => {
  return (
    <Grid container spacing={2} style={{ marginTop: '20px' }}>
  <Grid item xs={12} sm={6}>
    <Box display="flex" flexDirection="column" alignItems="center">
      <img src="../../logo.png" alt="Logo" style={{ height: '200px', marginBottom: '10px' }} />
      <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
        Diexperts1
      </Typography>
    </Box>
  </Grid>
  <Grid item xs={12} sm={6} style={{ paddingTop: '100px', '@media (max-width: 600px)': { paddingTop: 0 } }}>
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center" marginBottom="10px">
        <FaPhoneSquareAlt style={{ marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
          +91 8897767753/ +91 9603292763
        </Typography>
      </Box>
      
      <Box display="flex" alignItems="center">
        <MdEmail style={{ marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
          sales@diexperts1.com
        </Typography>
        
      </Box>
      <Box display="flex" alignItems="center">
        <FaLocationDot style={{ marginRight: '10px' }} />
        <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
          5-36/173, Near Venkateswara Swami Temple Prashanthi Nagar, I.E., Kukatpally,Hyderabad-72
        </Typography>
        
      </Box>
    </Box>
  </Grid>
</Grid>
  );
};

export { Contact, ContactInfo };
