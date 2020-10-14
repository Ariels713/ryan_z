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
          backgroundImage: `url(${"https://dl.airtable.com/.attachments/9ae626df88102fb404cbe425f263b15b/632c51fb/properties_header_image.jpg"})`,
        }}
      >
        {/* <div className="filter" /> */}
      </div>
    </>
  );
}

export default ProfilePageHeader;
