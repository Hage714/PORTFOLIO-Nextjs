"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

//users submitting the form and api req is sent
const handleSubmit = async (e) => {
e.preventDefault();
const data = {
    name: e.target.name.value,
    email: e.target.email.value,
    message: e.target.message.value,
  };
  const JSONdata = JSON.stringify(data); 
  const endpoint = "/api/send";  //stringified JSON data
    const options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSONdata,
}

//fetch request to send email
const response = await fetch(endpoint, options);
const resData = await response.json();
console.log(resData);

//response handling
if (response.status === 200) {
    console.log("Message sent successfully!");
    setEmailSubmitted(true);
}
}

  return (
      <section className="relative grid md:grid-cols-2 my-12 py-24 gap-4">
          <div className="absolute inset-0 flex justify-center items-center">
          </div>
          <div className="z-10">
              <h5 className="text-xl font-bold text-black my-2">Let&apos;s connect</h5>
              <p className="mb-4 max-w-md text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                  aut nostrum quod quas, optio excepturi repellat itaque praesentium
                  vitae placeat.
              </p>

              <div className="socials flex flex-row gap-2 text-black">
                  <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <FaGithub size={24} />
                  </a>
                  <a
                      href="https://www.linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <FaLinkedin size={24} />
                  </a>
              </div>
                            <div className=" mt-6 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 to-transparent rounded-full h-64 w-64 blur-lg"></div>

          </div>
          <div className="flex flex-col z-10">
              <h5 className="text-xl font-bold text-black my-2">Get in touch</h5>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="">
                      <label htmlFor="name" className="text-black">
                          Your name
                      </label>
                      <input name="name"
                          type="text"
                          id="name"
                          className="border-2 text-black border-gray-400 p-2 w-full"
                          required
                          placeholder="Name"
                      />
                  </div>
                  <div className="text-black">
                      <label htmlFor="email" >
                          Your Email
                      </label>
                      <input name="email"
                          type="email"
                          id="email"
                          className="border-2 text-black border-gray-400 p-2 w-full"
                          placeholder="Email"
                      />
                  </div>
                  <div className="">
                      <label htmlFor="message" className="text-black">
                          Your Message
                      </label>
                      <textarea name="message"
                          className="border-2 text-black border-gray-400 p-2 w-full"
                          placeholder="Let's talk about ..."
                          rows="4"
                      />
                  </div>
                  <button
                      type="submit"
                      className="bg-blue-900 text-white p-2 w-full mt-4 rounded"
                  >
                      Send
                  </button>
                  {
                    //show a success message if email is sent successfully
                    emailSubmitted && (
                      <p className="text-center text-sm mt-2 text-blue-800">
                          Email sent successfully!
                      </p>
                    )
                  }
              </form>
          </div>
      </section>

  );
};

export default EmailSection;
