import React from "react";
import book from "../../../assets/images/book.svg";
import moment from "moment";
import { Link } from "react-router-dom";
import Container from "../Container";

const Footer = () => {
  const currentDate = moment();
  const currentYear = currentDate.format("YYYY");
  return (
    <footer className="flex flex-col">
      <div className="bg-[#065C97] py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">
            {/* logo */}
            <div>
              <aside className="text-xl flex items-center flex-wrap">
                <img src={book} alt="book img" className="w-9" />
                <Link to="/">
                  <p>Global Speak School</p>
                </Link>
              </aside>
            </div>
            {/* links */}
            <div>
              <h4 className="text-lg md:text-xl pb-4 underline text-white">
                Useful Links :
              </h4>
              <nav>
                <ul className="flex flex-col gap-3 text-lg">
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Instructors
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h4 className="text-lg md:text-xl pb-4 underline text-white">
                Useful Links :
              </h4>
              <nav>
                <ul className="flex flex-col gap-3 text-lg">
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Instructors
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <h4 className="text-lg md:text-xl pb-4 underline text-white">
                Useful Links :
              </h4>
              <nav>
                <ul className="flex flex-col gap-3 text-lg">
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Instructors
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="cursor-pointer hover:underline">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </div>
      <aside className="bg-[#06385B] py-5 text-center text-sm">
        <p>&copy; {currentYear} Global Speak School. All Rights Reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
