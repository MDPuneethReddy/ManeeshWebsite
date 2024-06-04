import React from "react";
import "./About.css"; 
import "./Machinary.css"
import { Typography, Grid,  } from '@mui/material';
import { Card, CardBody,  CardHeader} from "@nextui-org/react";

import PopOutCard from './popoutCard';
const About = () => {
    const molds=[
        
        {"name":"Injection Molds","Description":"Injection molds are commonly used in manufacturing processes to produce plastic parts with precision and efficiency."},
        {"name":"Blow Molding","Description":"Blow molding is a manufacturing process that creates hollow plastic parts by inflating a heated plastic tube (parison) inside a mold cavity to form the desired shape."},
        {"name":"Hot Runner Molds","Description":"Hot runner molds utilize a heating system to maintain molten plastic within the mold cavity, enabling faster production cycles and reducing material waste."},
        {"name":"Family Molds","Description":"Family molds are designed to produce multiple parts simultaneously, optimizing efficiency and reducing manufacturing costs."},
        {"name":"Rotational Molding","Description":"Rotational molding is a manufacturing process used to create hollow plastic parts by rotating a mold around two axes, ensuring even distribution of material for consistent results."},
        {"name":"Compression Molds","Description":"Compression molds are used to shape materials such as rubber or thermosetting plastics by applying pressure and heat to a pre-formed material."},
        {"name":"Pre-Forms Molds","Description":"Pre-form molds are specifically designed to create pre-formed shapes or components that can be further processed or assembled into final products."},
        {"name":"Insert Molding","Description":"Insert molding involves inserting pre-formed components, such as metal inserts or other parts, into the mold cavity before the injection of molten plastic to create a finished product."},{"name":"High Impact Polystyrene","Description":"High impact polystyrene (HIPS) is a versatile plastic material known for its toughness and impact resistance, commonly used in applications requiring durability and strength."}]

        const pressTools=[
            {"name":"Tandom dies","Description":"Tandem dies are a type of tooling used in metalworking processes, particularly in stamping or forming operations. They consist of two or more dies arranged in sequence along the material flow path, allowing for multiple operations to be performed on the workpiece in a single pass."},
            {"name":"Transfer dies","Description":"Transfer dies are specialized tools used in metal stamping processes to transfer the workpiece between different stations or operations within a stamping press. They help automate the production process and ensure precise positioning of the workpiece during each stage of forming or shaping."},
            {"name":"Progressive dies","Description":"Progressive dies are complex tooling systems used in high-volume manufacturing processes, such as metal stamping or punching. These dies contain multiple stations, each performing a specific operation on the workpiece as it moves through the die. Progressive dies enable efficient and cost-effective production of parts with multiple features or complex geometries."},
            {"name":"Checking fixtures","Description":"Checking fixtures, also known as inspection fixtures or gauges, are specialized tools used to verify the dimensional accuracy and quality of manufactured parts. They are designed to hold the workpiece in a fixed position relative to specific measurement points or features, allowing inspectors to compare the part to its design specifications and ensure it meets quality standards. Checking fixtures play a critical role in quality control and assurance processes across various industries, including automotive, aerospace, and manufacturing."},
        ]
  return (
<div className="container" style={{paddingTop:"72px"}}>
  {/* First Section: Left Text, Right Image */}
  <div className="section" style={{backgroundColor:"#F5F5F5"}}>
    <div className="grid" >
      <div className="text">
        <h2 style={{fontSize:"80px"}}>About US</h2>
        <p>
          In Die Experts 1, Quality is important for us. We specialize in Plastic and Metal Injection Molds, Press Tools and Pressure Die Casting. Our engineers are highly skilled with an eye for detail. Our knowledge and experience of process and control ensures that quality is of the highest importance from quotation/contract review through to packing and dispatch. 
        </p>
      </div>
      <div className="image">
        <img src="../../about.png" style={{height:"80%",width:"70%"}} alt="Image 1" />
      </div>
    </div>
  </div>

  {/* Second Section: Left Image, Right Text */}
  <div className="section">
    <div className="grid">
      <div className="image">
        <img src="../../mission.png" style={{height:"80%",width:"70%"}} alt="Image 2" />
      </div>
      <div className="text">
        <h2 style={{fontSize:"60px",paddingBottom:"20px"}}>Our Mission</h2>
        <p>
        It is our mission to Higher performance in the tooling, on behalf of our Customers, always to assist them to be the prime performer in the respective sectors, by continual improvement along with time & technology        </p>
      </div>
    </div>
  </div>

  {/* Third Section: Left Text, Right Image */}
  <div className="section" style={{backgroundColor:"#F5F5F5"}}>
    <div className="grid">
      <div className="text">
        <h2 style={{fontSize:"60px",paddingBottom:"20px"}}>Our Vision</h2>
        <p>
        It is our vision to become the premier tooling & engineering network in India providing high quality and reliable services for corporate around the world.        </p>
      </div>
      <div className="image">
        <img src="../../vision.jpeg" alt="Image 3" style={{height:"80%",width:"70%"}}/>
      </div>
    </div>
  </div>
  <div className="section" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="grid">
          <div className="text">
            <h2 style={{ fontSize: "60px", paddingBottom: "20px", textAlign: "center"}}>Founder</h2>
            <h2 style={{ fontSize: "40px", paddingBottom: "20px", textAlign: "center" }}>Jasti Sai Maneesh</h2>
            <h3 style={{ fontSize: "20px", paddingBottom: "20px", textAlign: "center" }}>Founder and Operator of Die Experts 1</h3>

          </div>
        </div>
      </div>
  {/* <h2 style={{fontSize:"60px",paddingBottom:"20px",textAlign:"center",textDecoration: "underline"}}>Founder</h2>
  <div className="section" style={{backgroundColor:"#F5F5F5"}}>
    <div className="grid">
      <div className="image">
        <img src="../../mission.png" style={{height:"80%",width:"70%"}} alt="Image 2" />
      </div>
      <div className="text">
        <h2 style={{fontSize:"40px",paddingBottom:"20px"}}>Co-Founder / Chief Executive Officer
</h2>
<h2 style={{fontSize:"40px",paddingBottom:"20px"}}>Jasti Sai Maneesh, Diploma in T&D NTTF
</h2>
      </div>
    </div>
  </div> */}
  <div className="section" style={{paddingTop:"50px",backgroundColor: "#132b40"}}>
        <h2 style={{fontSize:'50px',textAlign:"center",paddingBottom:"40px",color:"white"}}>Types of Dies we Make</h2>
        <h4 style={{fontSize:'40px',textAlign:"center",paddingBottom:"40px",color:"white"}}>Molds</h4>

        <div style={{ backgroundColor: "#F5F5F5", color: "white" }}>

  <div className="machinery-container" style={{ display: "flex",backgroundColor:  "#132b40", flexWrap: "wrap", justifyContent: "center" }}>
    {molds.map((item, index) => (
      <div key={index} className="machinery-item" style={{ width: "calc(100% / 3)", padding: "10px" }}>
        <PopOutCard>
          <CardHeader className="pb-0 pt-2 px-4 flex-col ">
            <h4 className="font-bold text-large" style={{ textAlign: "center" }}>{item.name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center items-center">
            <p>{item.Description}</p>
          </CardBody>
        </PopOutCard>
      </div>
    ))}
  </div>
</div>
<h4 style={{fontSize:'40px',textAlign:"center",paddingBottom:"30px",color:"white",paddingTop:"30px",backgroundColor:  "#132b40"}}>Press Tools</h4>

<div style={{ backgroundColor:  "#132b40", color: "white" }}>
  <div className="machinery-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
    {pressTools.map((item, index) => (
      <div key={index} className="machinery-item" style={{ width: "calc(100% / 3)", padding: "10px" }}>
        <PopOutCard color="#F5F5F5">
          <CardHeader className="pb-0 pt-2 px-4 flex-col ">
            <h4 className="font-bold text-large" style={{ textAlign: "center" }}>{item.name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center items-center">
            <p>{item.Description}</p>
          </CardBody>
        </PopOutCard>
      </div>
    ))}
  </div>
</div>
<h4 style={{fontSize:'40px',textAlign:"center",paddingBottom:"20px",paddingTop:"20px",color:"white"}}>Pressure Die Casting</h4>


    <Grid item  style={{paddingLeft:"25px",paddingRight:"25px"}}>
      <PopOutCard color="#F5F5F5">
        <Typography variant="body2" paragraph style={{ color: "black" }}>
        <p>          Pressure die casting is a quick, reliable, and cost-effective manufacturing process for production of high volume, metal components that are net-shaped have tight tolerances. Basically, the pressure die casting process consists of injecting under high pressure a molten metal alloy into a steel mold (or tool). This gets solidified rapidly (from milliseconds to a few seconds) to form a net-shaped component. It is then automatically extracted.
</p>
        </Typography>
      </PopOutCard>
    </Grid>
    <h4 style={{ fontSize: '40px', textAlign: "center", paddingBottom: "20px", paddingTop: "20px", color: "white" }}>Metal Injection Molding</h4>
    <Grid item xs={12} md={6} style={{ paddingTop:"20px",paddingLeft:"25px",paddingRight:"25px" }}>
      <PopOutCard color="#F5F5F5">
        <Typography variant="body2" paragraph style={{ color: "#2e475d" }}>
          Metal injection molding is a niche process in which finely metal powdered material is mixed with binder to create a feedstock and then it is injected to get solidified complex-shaped parts.
          <br />
          <br />
          Metal Injection Molding Process:
          <br />
          The MIM process consists of major steps,
          <br />
          1. Compounding
          <br />
          2. Molding
          <br />
          3. Debinding
          <br />
          4. Sintering
        </Typography>
      </PopOutCard>
    </Grid>
    
</div>
</div>
 );
};

export {About};
