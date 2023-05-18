import { table, minifyItems } from "../utils/airtable";
import React, { useState } from 'react';

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


export default function SendData({ initialItems }) {
  const [selectedShootID, setSelectedShootID] = useState(null);

  const handleShootIDChange = (event) => {
    setSelectedShootID(event.target.value);
  };

  return (
    <div className="page-container">
      <div className="centered-container">
        <div className="content-container">
          <div className="dropdown-container">
            <select value={selectedShootID} onChange={handleShootIDChange}>
              <option value="">Select a Shoot ID</option>
              {initialItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.fields.ShootIDOverride}
                </option>
              ))}
            </select>
          </div>
          {selectedShootID && (
            <div className="image-wrapper">
              <img
                className="image"
                src={initialItems.find((item) => item.id === selectedShootID).fields.HeroShot[0].thumbnails.large.url}
                alt="Hero Shot"
              />
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .centered-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .content-container {
          text-align: center;
        }
        .dropdown-container {
          margin-bottom: 10px;
        }
        .image-wrapper {
          display: flex;
          justify-content: right;
          align-items: center;
        }
        .image {
          max-width: 100%;
          max-height: 100vh;
        }
      `}</style>
    </div>
  );
}