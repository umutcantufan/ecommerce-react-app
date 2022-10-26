import React from "react";
import Contact from "../pages/Contact";

const Footer = () => {
  return (
    <footer className="p-4 rounded-lg shadow md:px-7 md:py-4 dark:bg-gray-600">
      <div className="sm:flex sm:items-center sm:justify-between ">
        <a
          href="https://github.com/umutcantufan"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            UmutShop
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-700">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Store
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href={Contact} className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-700 lg:my-8"></hr>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://github.com/umutcantufan" className="hover:underline">
          Umut Shop™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
