import React from "react";
import Image from "next/image";
import imgSignup from "../../../../public/images/imgSignup.jpg";

const Index = () => {
  return (

    <div className="h-full p-8 bg-gray-100 flex items-center justify-center" >

      <div className="flex gap-1 w-5/6 h-5/6 drop-shadow-lg  " style={{ backgroundColor: '#CAE2FE', }}>
        <div className="hidden lg:inline-flex w-1/2">
          <Image src={imgSignup} alt="" />
        </div>
        <div className="lg:w-1/2 lg:pl-20 lg:pr-20  pt-5 pb-5 pl-5 pr-5">
          <h1 className="text-center text-3xl font-semibold mb-5">Sign up</h1>
          <form>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              required
              className="w-full h-10 mb-2 px-5 rounded-md"
            />
            <label htmlFor="lastName">last name</label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
              className="w-full h-10 mb-2  px-5 rounded-md"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="w-full h-10 mb-2  px-5 rounded-md"
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              placeholder="phone"
              name="phone"
              required
              className="w-full h-10 mb-2  px-5 rounded-md"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className="w-full h-10 mb-2  px-5 rounded-md"
            />
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              className="w-full h-10 mb-2  px-5 rounded-md"
            />
            <div className="text-center">
              <button
                type="submit"
                className="mt-4 w-2/6 font-semibold text-white bg-blue-700 py-2 rounded-md"
              >
                Submit
              </button>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
