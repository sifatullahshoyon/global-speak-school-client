import React, { useContext, useState } from "react";
import Container from "../Container";
import { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "../../Theme/DarkModeToggle";
import { AuthContext } from "../../../providers/AuthProviders";
import { Bounce, toast } from "react-toastify";
import Avatar from "./Avatar";
import useScrollPosition from "../../../hooks/useScrollPosition";

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const scrolled = useScrollPosition();
  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign Out Successfully.
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <div
      className={`fixed w-full ${
        scrolled ? "top-0" : ""
      } z-50 transition duration-500 ${
        scrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between bg-transparent px-4 py-2 text-white pb-8">
          <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            <Link to="/">
              <h2 className="text-amber-500">Global Speak School</h2>
            </Link>
          </div>
          <ul className="hidden items-center justify-between gap-10 md:flex">
            <NavLink to="/">
              <li className="group flex initialColorMode cursor-pointer flex-col">
                Home
                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink to="/instructors">
              <li className="group flex  cursor-pointer flex-col">
                Instructors
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
            <NavLink>
              <li className="group flex  cursor-pointer flex-col">
                Classes
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </NavLink>
            <li className="group flex  cursor-pointer flex-col">
              Contact
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
              {user?.email ? (
                <>
                  <span onClick={handleSignOut}>Sign Out</span>
                </>
              ) : (
                <Link to="/login">
                  <span>Sign In</span>
                </Link>
              )}
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            {user?.email && (
              <NavLink>
                <Avatar />
              </NavLink>
            )}
            <NavLink>
              <DarkModeToggle
                size="sm"
                className="group flex  cursor-pointer flex-col"
              />
            </NavLink>
          </ul>
          <div
            ref={dropDownMenuRef}
            onClick={() => setDropDownState(!dropDownState)}
            className="relative flex transition-transform md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            >
              {" "}
              <line x1="4" x2="20" y1="12" y2="12" />{" "}
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />{" "}
            </svg>
            {dropDownState && (
              <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                <NavLink to="/">
                  <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-amber-600 ">
                    Home
                  </li>
                </NavLink>
                <NavLink to="/instructors">
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-amber-600 ">
                    Instructors
                  </li>
                </NavLink>
                <NavLink>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-amber-600 ">
                    Classes
                  </li>
                </NavLink>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-amber-600">
                  Contact
                </li>
                <li className="group flex  cursor-pointer flex-col">
                  {user?.email ? (
                    <>
                      <span onClick={handleSignOut}>Sign Out</span>
                    </>
                  ) : (
                    <Link to="/login">
                      <span>Sign In</span>
                    </Link>
                  )}
                  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                {user?.email && (
                  <NavLink>
                    <Avatar />
                  </NavLink>
                )}
                <NavLink>
                  <DarkModeToggle
                    size="sm"
                    className="group flex  cursor-pointer flex-col"
                  />
                </NavLink>
              </ul>
            )}
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
