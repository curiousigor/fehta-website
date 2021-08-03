import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="container mx-auto max-w-screen-xl items-center">
      <footer className=" transition duration-500 ease-in-out transform ">
        <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
          <a
            href="/"
            className="pb-5 md:pb-0 md:pr-2 lg:pr-8 lg:px-6 focus:outline-none inline-flex items-center"
          >
            <div className="inline-flex items-center ml-auto mr-auto h-6">
              <img
                className="h-6"
                alt="fehta-logo"
                src="/images/fehta-logo.svg"
              />
            </div>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base lg:mr-auto lg:border-l lg:pl-8 pb-5 md:pb-0">
            <a
              href="#"
              className="px-3 py-1 mr-1 text-base text-black transition duration-200 ease-in-out hover:text-gray-800"
            >
              Tofu
            </a>
            <a
              href="#"
              className="px-3 py-1 mr-1 text-base text-black transition duration-200 ease-in-out hover:text-gray-800"
            >
              Tempeh
            </a>
            <br />
            <a
              href="#"
              className="px-3 py-1 mr-1 text-base text-black transition duration-200 ease-in-out hover:text-gray-800"
            >
              Trgovine
            </a>
            <a
              href="#"
              className="px-3 py-1 md:mr-1 text-base text-black transition duration-200 ease-in-out hover:text-gray-500"
            >
              O Fehti
            </a>
          </nav>
          <span className="inline-flex justify-center mt-2 mr-2 sm:ml-auto sm:mt-0 sm:justify-start">
            {/* Facebook icon */}
            <a
              className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out"
              href="https://www.facebook.com/fehta.family"
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* Instagram icon */}
            <a
              className="ml-3 text-red-600 hover:text-red-800 transition duration-200 ease-in-out"
              href="instagram.com/fehta.family/"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
      <div className="w-full">
        <div className="justify-center ml-auto mr-auto w-32">
          <img alt="fehta-wave" src="/images/fehta-wave.svg" />
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;

