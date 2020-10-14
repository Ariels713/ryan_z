import React from "react";

// reactstrap components

// core components

function ProfilePageHeader() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" +
            require("../../assets/siteImages/properties_header_image.jpg") +
            ")",
        }}
      >
        {/* <div className="filter" /> */}
      </div>
    </>
  );
}

export default ProfilePageHeader;
