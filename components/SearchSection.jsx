import React from "react"
const SearchSection = () => {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <>
      {" "}
      {showModal ? (
        <div className="border border-black absolute inset-x-0 modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-end items-center pb-3">
              <div
                className="cursor-pointer z-50"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            <div className="my-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/QR_Code_example.png/900px-QR_Code_example.png"
                style={{ bgContent: "cover" }}
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 py-20 px-4 mb-16 md:px-16 items-center">
        <div className="flex flex-col items-center sm:items-start ">
          <h1 className="text-5xl mb-10 font-bold">
            Our Menu from the <br></br> Hands of Artists
          </h1>
          <div className="flex flex-col  relative md:flex-row items-center space-arround mt-5">
            <a
              target="_blank"
              href="https://eight-hackathon.digipages.net/maldini"
              rel="noopener noreferrer"
              className="bg-gray-900 text-gray-100 rounded-full sm:rounded-full z-0  sm:text-lg px-4 py-2 "
            >
              Check the Full Menu
            </a>{" "}
            <span className="text-3xl mx-4">or</span>
            <button
              onClick={() => setShowModal(true)}
              className="bg-white border border-4 rounded-full sm:rounded-full z-0 border-black sm:text-lg text-gray-900 px-4 py-2"
            >
              Get the QR Code
            </button>
          </div>
        </div>
        <div className=" w-full py-10 order-first md:order-last">
          <div className="  w-full">
            <input
              type="text"
              className=" w-full sm:w-[350px] sm:w-[100%] px-4 py-4 text-gray-900 text-2xl rounded-full border border-black border-2 focus:outline-none"
              placeholder="Search"
            />

            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchSection
