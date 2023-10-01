export const Contact = () => {
  return (
    <div className="flex flex-col justify-start items-start px-20 py-5">
      <h1 className="text-2xl max-sm:text-sm font-extrabold text-black pb-4">
        Contact Us
      </h1>
      <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black pr-5 pb-5">
        Thank you for your interest in Utility Ware Ltd and our product Ware
        Book. We value your feedback, inquiries, and partnership opportunities.
        Please do not hesitate to reach out to us using the contact information
        below:
      </p>
      <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black pr-5 pb-5">
        Email: hello@utilityware.co
      </p>
      <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black pr-5 pb-5">
        Phone: +234 70 1312 3835
      </p>
      <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black pr-5 pb-5">
        Our team is dedicated to providing prompt and helpful assistance.
        Whether you have questions about our services, require technical
        support, or wish to explore potential collaborations, we are here to
        assist you.
      </p>
      <p className="text-base items-start leading-normal text-left break-normal max-sm:text-sm text-black pr-5 pb-5">
        Feel free to drop us a message or give us a call, and we will get back
        to you as soon as possible. Your input is vital to our mission of
        revolutionizing digital publishing and empowering authors and readers
        alike. Thank you for choosing Utility Ware Ltd. We look forward to
        hearing from you and working together to make Ware Book a valuable asset
        to the literary world.
      </p>

      <form action="#" className="items-center">
        <p
          className="mb-4 font-light text-left 
                          text-gray-500 sm:text-xl"
        >
          Got an issue? Want to send feedback? Need details about our Services?
          Let us know.
        </p>
        <div className="flex flex-row">
          <div className="w-1/2 pr-2 ">
            <label
              for="firstName"
              className="block my-2 text-left 
                                          text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border
                                          border-gray-300 text-gray-900 
                                          text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter First Name"
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label
              for="firstName"
              className="block my-2 text-left text-sm 
                                          font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900 
                                          text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div>
          <label
            for="email"
            className="block my-2 text-left text-sm 
                                      font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            className="shadow-sm bg-gray-50 border 
                                      border-gray-300 text-gray-900 
                                      text-sm rounded-lg block w-full p-2.5"
            placeholder="abc@example.org"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            className="block my-2 text-left 
                                      text-sm font-medium text-gray-900"
          >
            Subject
          </label>
          <input
            type="text"
            className="block p-3 w-full text-sm 
                                      text-gray-900 bg-gray-50 rounded-lg 
                                      border border-gray-300 shadow-sm "
            placeholder="Brief description of your enquiry"
            required
          />
        </div>
        <div>
          <label
            for="message"
            className="block my-2 text-left 
                                      text-sm font-medium text-gray-900 "
          >
            Your message
          </label>
          <textarea
            rows="6"
            className="block p-2.5 w-full text-sm 
                                         text-gray-900 bg-gray-50 rounded-lg 
                                         shadow-sm border border-gray-300 "
            placeholder="Detailed message"
          />
        </div>
        <button
          type="submit"
          className="mt-2 p-2 float-right text-white  
                                   rounded-lg border-blue-600 
                                   bg-[#393280] hover:scale-105"
        >
          Send message
        </button>
      </form>
    </div>
  );
};
