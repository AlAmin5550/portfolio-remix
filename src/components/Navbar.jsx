import Link from "next/link";
import React from "react";

const Navbar = () => {
    const navLinks = [
        {
          title: "Intro",
          path: "/",
        },
        {
          title: "Riots",
          path: "/riots",
        },
        {
          title: "Free Speech",
          path: "/freeSpeech",
        },
        {
          title: "Authoritarianism",
          path: "/authoritarianism",
        },
        {
          title: "Awareness",
          path: "/awareness",
        },
      ];
  return (
    <div className="navbar  font-main">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map((items) => (
              <Link key={items.title} href={items.path}>
                <li>{items.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((items) => (
              <Link className="mr-4" key={items.title} href={items.path}>
                <li>{items.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
