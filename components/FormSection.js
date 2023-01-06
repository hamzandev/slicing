import InputWithLabel from "./InputWithLabel";
import style from "../styles/Banner.module.css";

export default function FormSection() {
  return (
    <div
      id="contact"
      className="message-section bg-gradient-to-b from-blue-100/80 to-blue-50"
    >
      <div className={`py-10 md:px-8 px-5 ${style.bgImage}`}>
        <h3 className="text-4xl font-poppins text-center lg:w-1/3 lg:p-0 px-3 mx-auto mb-10 mt-5 text-titleText">
          Facing Problem? Lets Get In Touch Now
        </h3>
        <form className="lg:w-8/12 mb-10 font-poppins inset-0 md:p-14 p-8 mx-auto bg-white shadow-2xl rounded-xl flex flex-col gap-y-8">
          <div className="name-section flex lg:flex-row flex-col gap-5">
            <InputWithLabel type="text" id="first-name" placeholder="John">
              First Name
            </InputWithLabel>
            <InputWithLabel type="text" id="last-name" placeholder="Doe">
              Last Name
            </InputWithLabel>
          </div>
          <InputWithLabel
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
          >
            Your Email Address
          </InputWithLabel>
          <div className="form-group grid w-full">
            <label className="text-gray-600" htmlFor="problem">
              Which Related Problem You Are Facing?
            </label>
            <select
              name="problem"
              placeholder="Select One"
              id="problem"
              className="border-b-2 w-full py-3 bg-transparent focus:border-primary text-primary focus:outline-none"
            >
              <option className="text-indigo-500" value="1">
                Lorem, ipsum dolor.
              </option>
              <option className="text-indigo-500" value="2">
                Lorem, ipsum.
              </option>
              <option className="text-indigo-500" value="3">
                Lorem ipsum dolor sit Lorem, ipsum.
              </option>
              <option className="text-indigo-500" value="4">
                Lorem ipsum dolor sit.
              </option>
            </select>
          </div>
          <div className="form-group grid w-full">
            <label className="text-gray-600" htmlFor="message">
              Type Your Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Type Your Message here..."
              className="border-2 w-full rounded-md focus:border-primary border-gray-300 px-4 py-2 mt-5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 md:w-max w-full py-3 rounded-md text-gray-100 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
