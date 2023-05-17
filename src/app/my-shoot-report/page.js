"use client"

import React from "react";
import HeroShot from "../../../components/hero-shot.js";
import ShootName from "../../../components/shoot-name";
// import sendData from "../../../utils/sendData.js";
import "../../../styles/my-shoot-report.css"; // Import the external CSS file
import { table, minifyItems } from "../utils/airtable";

export async function getServerSideProps(context) {
    try {
      const items = await table.select({}).firstPage();
      return {
        props: {
          initialItems: minifyItems(items),
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          err: "Something went wrong 😕",
        },
      };
    }
  }

  export default function sendData({ initialItems }) {
    for (let i = 0; i < initialItems.length; i++) {
      const jsonItems = initialItems[i];
      console.log(JSON.stringify(jsonItems.fields.ShootIDOverride, null, 4));
    }
  
    return null; // You need to return JSX or null from the component
  }



const MyShootReportPage = ({ shootName }) => {
  return (
    <div className="background-image">
      <div className="shoot-info-container">
        <h1 className="large-heading">_photo-video-base-23.1</h1>
        <div className="centered-content">
          <div className="content-item centered-item">
            <HeroShot />
          </div>
          <div className="content-item centered-item">
            <ShootName>{sendData}</ShootName>
          </div>
        </div>
      </div>
    </div>
  );
};

function Shoot({ children }) {
  // Use the shoot name supplied as children
  return <h2>{children}</h2>;
}

export default MyShootReportPage;
