import React from "react";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import "./Machinary.css"; // Import custom CSS file

const MachinaryImages = [
  {"title":"Injection Molding Machine :- 80ton, 160ton Milacron ","path":"../../services1.png"},
  {"title":"Injection Molding Machine :- 100ton L&T machine","path":"../../services2.jpg"},
  {"title":"Power Press 500ton, 120ton, 90ton, 30ton & 10ton","path":"../../services3.jpg"},
  {"title":"Pressure Die Casting Machines 120ton, 160ton, 220ton & 400ton","path":"../../services4.jpg"},
  {"title":"CNC Milling 1080*800*550","path":"../../services5.jpg"},
  {"title":"CNC Milling 1150*700*550","path":"../../services6.jpg"},
  {"title":"CNC Milling 650*450*350","path":"../../services7.jpg"},
  {"title":"CNC Milling 1200*850*650","path":"../../services8.jpg"},
  {"title":"CNC Turning 350*400","path":"../../services9.jpeg"},
  {"title":"Wire Cut Machine 450*350*300","path":"../../services10.jpg"},
  {"title":"Wire Drill Machine 250*250*500","path":"../../services11.jpg"},
  {"title":"Electro Dischsrge Machine 500*350*250","path":"../../services12.jpeg"}
];

const Machinery = () => {
  return (
    <div style={{backgroundColor:"black",color:"white"}}>
         <h2 style={{textAlign:'center',fontSize:"50px",paddingTop:"70px"}}>Services</h2>
    <div className="machinery-container" > 
   
      {MachinaryImages.map((item, index) => (
        <div key={index} className="machinery-item"> 
          <Card>
            <CardHeader className="pb-0 pt-2 px-4 flex-col ">
              <h4 className="font-bold text-large" style={{textAlign:"center"}}>{item.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 flex justify-center items-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl "
                src={item.path}
                style={{ width: "100%", height: "250px" }}
              />
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export { Machinery };
