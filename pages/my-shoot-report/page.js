"use client"

import React from "react";
import HeroShot from "../../components/hero-shot.js";
import ShootName from "../../components/shoot-name.js";
import sendData from "../../../utils/sendData.js";
import "../../../styles/my-shoot-report.css"; // Import the external CSS file
import { table, minifyItems } from "../../utils/airtable.js";

  const MyShootReportPage = ({ shootNames }) => {
    return (
      <div className="background-image">
        <div className="shoot-info-container">
          <h1 className="large-heading">_photo-video-base-23.1</h1>
          <div className="centered-content">
            <div className="content-item centered-item">
              <HeroShot />
            </div>
            <div className="content-item centered-item">
              <Shoot>{shootNames}</Shoot>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function Shoot({ children }) {
    return <h2>{children}</h2>;
  }
  