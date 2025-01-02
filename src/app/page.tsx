'use client';

import './globals.css'
import React, { PropsWithChildren, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { defaultNavItems } from '../components/defaultNavItems';
import Frequencies from '../components/Freqeuncy'
//import FlightInfo from '../pages/FlightInfo';
import Departure from '../pages/Departure';
//import Cruise from '../pages/Cruise';
//import Descent from '../pages/Descent';

const Layout = (props: PropsWithChildren) => {
    const [currentComponent, setCurrentComponent] = useState('flightInfo');

    const handleButtonClick = (componentName: string) => {
        setCurrentComponent(componentName);
    };
    const renderComponent = () => {
        switch (currentComponent) {
            case 'Flight Information':
 //               return <FlightInfo />;
            case 'Departure':
                return <Departure />;
            case 'Cruise':
  //              return <Cruise />;
            case 'Descent':
  //              return <Descent />;
            default:
  //              return <FlightInfo />;
        }
    };
    
  return (
        <div className="grid h-screen bg-background-dark">
            <div className="grid grid-cols-sidebar-flightInfo">
                <div className="col-start-1 max-w-min max-h-screen">
                    <Sidebar navItems={defaultNavItems} onButtonClick={handleButtonClick} />
                </div>
                    <div className="col-start-2 max-h-screen max-w-full">
                        {renderComponent()}
                    <div>
                        <Frequencies /> 
                    </div>
                </div>
            </div>
            {props.children}
        </div>
  );
};

export default Layout;