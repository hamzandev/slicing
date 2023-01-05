"use client";

import { useState } from "react";

function StateTips() {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState({
    username: "",
    email: "",
    gender: "",
    address: "",
  });

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  const handleCounterAsync = () => {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 2000);
  };

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold font-quicksand">
        useState Hook Tips
      </h1>
      <section>
        <button
          className="px-6 py-2 mx-auto block my-5 rounded-md shadow bg-blue-500 text-gray-100 font-quicksand text-sm"
          onClick={handleCounter}
        >
          Counter
        </button>
        <button
          className="px-6 py-2 mx-auto block my-5 rounded-md shadow bg-blue-500 text-gray-100 font-quicksand text-sm"
          onClick={handleCounterAsync}
        >
          Counter Async
        </button>
        <span className="text-center block text-2xl font-poppins font-bold">
          {counter}
        </span>
      </section>

      <section className="mt-10">
        <form className="flex flex-col justify-center w-64 mx-auto gap-5 shadow-lg p-5 rounded-md">
          <input
            type="text"
            className="border-2 border-gray-600 px-6 py-2"
            onChange={handleChange}
            name="username"
            placeholder="Username"
          />
          <input
            type="text"
            className="border-2 border-gray-600 px-6 py-2"
            onChange={handleChange}
            name="email"
            placeholder="Email Address"
          />
          <input
            type="text"
            className="border-2 border-gray-600 px-6 py-2"
            onChange={handleChange}
            name="gender"
            placeholder="Gender"
          />
          <input
            type="text"
            className="border-2 border-gray-600 px-6 py-2"
            onChange={handleChange}
            name="address"
            placeholder="Address"
          />
        </form>
        <div className="my-5 mx-auto text-center">{JSON.stringify(user)}</div>
      </section>
    </div>
  );
}

export default StateTips;
