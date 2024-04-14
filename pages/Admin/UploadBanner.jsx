import React from "react";
import Layout from "./Layout";
import AdminNav from "../../src/components/AdminNav/AdminNav.jsx";


const UploadBanner = () => {
  return (
    <div className="flex">
      <Layout />
      <AdminNav/>
    </div>
  );
};

export default UploadBanner;
