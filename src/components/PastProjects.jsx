import React from "react";
import "./ImagesList.css"; // Import custom CSS file
const pressureDieImages=[
    {"path":"../../prevInPressure1.png"},
    {"path":"../../prevInPressure2.png"},
    {"path":"../../prevInPressure3.png"},
    {"path":"../../prevInPressure4.png"},
    {"path":"../../prevInPressure5.png"},
    {"path":"../../prevInPressure6.png"},
    {"path":"../../prevInPressure7.png"},
    {"path":"../../prevInPressure8.png"},
    {"path":"../../prevInPressure9.png"},
    {"path":"../../prevInPressure10.png"},
    {"path":"../../prevInPressure11.png"},
 
]
const pressureMetalImages=[
    {"path":"../../prevInMetal1.png"}
]

const pressurePlasticImages=[
    {"path":"../../prevInPlastic1.png"},
    {"path":"../../prevInPlastic2.png"},
    {"path":"../../prevInPlastic3.png"},
    {"path":"../../prevInPlastic4.png"},
    {"path":"../../prevInPlastic5.png"},
    {"path":"../../prevInPlastic6.png"},
    {"path":"../../prevInPlastic7.png"},
    {"path":"../../prevInPlastic8.png"},
    {"path":"../../prevInPlastic9.png"},
    {"path":"../../prevInPlastic10.png"},
    {"path":"../../prevInPlastic11.png"},

]

const pressureInsertImages=[
    {"path":"../../prevInInsert1.png"},
    {"path":"../../prevInInsert2.jpg"},
    {"path":"../../prevInInsert3.jpg"},
    {"path":"../../prevInInsert4.png"},
    {"path":"../../prevInInsert5.jpg"}
]
const pressurePressImages=[
    {"path":"../../prevInPress1.png"},
    {"path":"../../prevInPress2.png"},
    {"path":"../../prevInPress3.jpg"},
    {"path":"../../prevInPress4.jpg"},
    {"path":"../../prevInPress5.jpg"},
    {"path":"../../prevInPress6.jpg"},
    {"path":"../../prevInPress7.jpg"},
    {"path":"../../prevInPress8.jpg"},
    {"path":"../../prevInPress9.jpg"},
    {"path":"../../prevInPress10.jpg"},
    {"path":"../../prevInPress11.jpg"},
    {"path":"../../prevInPress12.jpg"},
    {"path":"../../prevInPress13.jpg"},
    {"path":"../../prevInPress14.jpg"},
    {"path":"../../prevInPress15.jpg"},
    {"path":"../../prevInPress16.jpg"},
    {"path":"../../prevInPress17.jpg"},
    {"path":"../../prevInPress18.jpg"},
    {"path":"../../prevInPress19.jpg"},
    {"path":"../../prevInPress20.jpg"},
    {"path":"../../prevInPress21.jpg"},
    
]
const PastProjects = () => {
  return (
    <div style={{backgroundColor:"black",color:"white"}}>
    <div style={{ paddingTop: "70px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px",fontSize:"40px" }}>
        Past Projects
      </h2>
      <div style={{ lineHeight: "1.6", fontSize: "16px" }}>
        <p>
          <strong>In plastic:</strong> We make almost 150 Mold Dies in Multi Cavity, single
          cavity and different types of mechanical parts used in defense, civil constructions
          house hold items etc,. We also provide production service with Injection Mold, Blow
          Mold and Compression molding machines. We have Feromatic Milacron.
        </p>
        <br />
        <p>
          <strong>In press tools:</strong> We have done 200 tools like draw tools, blanking
          tools, piercing dies, compound tools, cam tools, casting dies. We also provide
          production service. We have production like 30ton, 90ton, 160 ton and 350ton
          mechanical press.
        </p>
        <br />
        <p>
          <strong>In Pressure Die casting:</strong> We have done almost 80 Dies in Multi
          cavity, Single Cavity and also mechanical parts with machining and production. For
          production we have 120ton, 150ton, 250ton and 400ton PDC machines. We will also
          provide the end machine parts with any sort of machining with CNC Lathe, Milling,
          Wire Cut and EDM machines.
        </p>
        <br />
        <p>
        <strong>Metal Injection Molding: </strong> we have started recently and done 10-12 dies in MIM. We have the required machine for the trail check and production too. We will deliver the final Product.
        </p>
        <br />
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "20px",fontSize:"40px" }}>
      Pressure Die Casting 
      </h2>
      <div className="image-list-container">
      <div className="image-list">
        {pressureDieImages.map((image, index) => (
          <img key={index} src={image.path} alt={image.title} className="image-item" />
        ))}
      </div>
    </div>
    <h2 style={{ textAlign: "center", marginBottom: "20px",fontSize:"40px" }}>
    Plastic Injection Molding 
      </h2>
      <div className="image-list-container">
      <div className="image-list">
        {pressurePlasticImages.map((image, index) => (
          <img key={index} src={image.path} alt={image.title} className="image-item" />
        ))}
      </div>
    </div>
    <h2 style={{ textAlign: "center", marginBottom: "20px",fontSize:"40px" }}>
    Insert Moulding
      </h2>
      <div className="image-list-container">
      <div className="image-list">
        {pressureInsertImages.map((image, index) => (
          <img key={index} src={image.path} alt={image.title} className="image-item" />
        ))}
      </div>
    </div>
    <h2 style={{ textAlign: "center", marginBottom: "20px",fontSize:"40px" }}>
    Press Tools
      </h2>
      <div className="image-list-container">
      <div className="image-list">
        {pressurePressImages.map((image, index) => (
          <img key={index} src={image.path} alt={image.title} className="image-item" />
        ))}
      </div>
    </div>
    <h2 style={{ textAlign: "center", marginBottom: "20px",fontSize:"40px" }}>
    Metal Injection Molding
      </h2>
      <div className="image-list-container">
      <div className="image-list">
        {pressureMetalImages.map((image, index) => (
          <img key={index} src={image.path} alt={image.title} className="image-item" />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export { PastProjects };
