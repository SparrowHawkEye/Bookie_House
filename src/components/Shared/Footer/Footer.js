import React from "react";
import { Link } from "react-router-dom";
import { BiBookBookmark } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center mr-3 h-6 sm:h-9 text-2xl">
          <BiBookBookmark color="orenge-red" /> &nbsp; Bookie House
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="mr-4 hover:underline md:mr-6">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <div className="flex space-x-3">
              <Link to="https://www.facebook.com/ami1dukhi/" className="hover:text-green-400 text-lg">
                <FaFacebookF />
              </Link>
              <Link to="https://twitter.com/SparrowHawk_Eye" className="hover:text-green-400 text-lg">
                <FaTwitter />
              </Link>
              <Link to="https://github.com/SparrowHawkEye" className="hover:text-green-400 text-lg">
                <FaGithub />
              </Link>
              <Link to="https://www.linkedin.com/in/maksudur-rahman-a9733a161/" className="hover:text-green-400 text-lg">
                <FaLinkedinIn />
              </Link>
              {/* <Link
                to="#"
                onClick={() => (window.location = "mailto:makh0043@gmail.com")} className="hover:text-green-400 text-lg"
              >
                <MdAttachEmail />
              </Link> */}
            </div>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link to={" "} className="hover:underline hover:text-green-400">
          Bookie House
        </Link>
        <small className="mx-1">
          by Maksud aka{" "}
          <Link
            to="https://github.com/SparrowHawkEye"
            className="hover:underline hover:text-green-400"
          >
            {" "}
            SparrowHawkEye.{" "}
          </Link>
        </small>
        All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
