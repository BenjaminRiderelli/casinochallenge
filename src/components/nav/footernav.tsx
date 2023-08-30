import React from "react";

const FooterNav = () => {
  return (
    <div className="flex fixed z-20 bottom-0 w-full bg-dark-bg-color p-2 px-4 gap-4">
      <button className="rounded-md text-lg font-semibold bg-p-btn-color w-full p-3">
        Join us
      </button>
      <button className="rounded-md text-lg font-semibold bg-s-btn-color w-full p-3">
        Login
      </button>
    </div>
  );
};

export default FooterNav;
