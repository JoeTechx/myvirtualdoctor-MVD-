"use client";

import { useEffect, useState } from "react";

const Chatbox = () => {
  const [userData, setUserData] = useState(null);
  const userType = localStorage.getItem("userType");

  useEffect(() => {
    if (userType !== null) {
      // Fetch user data based on userType from local storage
      if (userType === "doctor") {
        // Fetch doctor data
        const doctorData = JSON.parse(localStorage.getItem("doctorData")!);
        setUserData(doctorData);
      } else if (userType === "patient") {
        // Fetch patient data
        const patientData = JSON.parse(localStorage.getItem("patientData")!);
        setUserData(patientData);
      }
    }
  }, [userType]);

  return (
    <div>
      <h1>Dashboard</h1>
      {userData && (
        <div>
          <h2>User Data</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
