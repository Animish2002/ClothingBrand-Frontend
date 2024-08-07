import React from "react";

const Header = () => {
  return (
    <section id="header">
      <div className="flex items-center justify-between header">
        <div>
          <h1 className="text-3xl font-bold">WICKWEAR</h1>
        </div>
        <ul className="flex gap-10 items-center font-medium">
          <li>
            <form class="flex items-center max-w-sm mx-auto">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-[24px] h-[24px] text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 4a7 7 0 1 0 7 7 7 7 0 0 0-7-7zm0 2a5 5 0 1 1-5 5 5 5 0 0 1 5-5zm-1 8h2v2h-2v-2z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ms-2 text-sm font-medium text-white rounded-lg border  focus:ring-4 focus:outline-none"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000"
             
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </form>
          </li>

          <li className="cursor-pointer ">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Log in</li>
          <li className="cursor-pointer">Cart🛒</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
