import React from 'react';
import { Typography,Button } from '@mui/material';
import {NextUIProvider} from "@nextui-org/react";
import { NavBar } from './components/NavBar';
import {BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import { Machinery } from './components/Machinary';
import { PastProjects } from './components/PastProjects';
import { About } from './components/About';
import { Link } from 'react-router-dom';
import { Contact } from './components/Contact';


const HomePage = () => {

  return (
    <NextUIProvider>
  <div className="mx-auto max-w-screen-xl" style={{ padding: 0 }}>
    {/* Hero Image Section */}
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url('../Home2.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
          zIndex: 1,
        }}
      ></div>

      {/* Text Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <Typography
          variant="body1"
          paragraph
          style={{
            fontSize: 'clamp(30px, 4vw, 60px)',
            lineHeight: '1.3',
            color: 'white',
            margin: '0 20px',
          }}
        >
          Expertise in Die Making
        </Typography>
        <Link to="/About">
          <Button
            variant="contained"
            color="info"
            sx={{
              backgroundColor: 'transparent',
              border: '2px solid white',
              padding: 'clamp(4px, 2vw, 8px) clamp(16px, 4vw, 16px)', // Responsive padding
              fontSize: 'clamp(12px, 3vw, 24px)', // Responsive font size for the button
            }}
          >
            Explore
          </Button>
        </Link>
      </div>
    </div>
  </div>
</NextUIProvider>

  );
};



const App = () => {
  return (
    <>
<Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/past-projects" element={<PastProjects />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

    </>
  );
};

export default App;