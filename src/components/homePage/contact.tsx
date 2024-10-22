"use client";
import { Map, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  // const sendEmail = (event) => {
  //   event.preventDefault();
  //   const f = event.target;
  //   console.log(f);
  //   // emailjs
  //   //   .sendForm(
  //   //     "service_vzeh0h9",
  //   //     "template_wexktxd",
  //   //     form.current,
  //   //     "xAw3OmnMLxdRtNlSU"
  //   //   )
  //   //   .then(
  //   //     (result) => {
  //   //       console.log(result.text);
  //   //       f.reset();
  //   //     },
  //   //     (error) => {
  //   //       console.log(error.text);
  //   //     }
  //   //   );
  // };

  return (
    <div className="max-w-screen-xl mx-auto my-4 " id="contact">
      {/* Header */}
      <h3 className="text-3xl text-center my-4 py-4 bg-gradient-to-r from-primary-100 font-bold rounded-md">
        Get in Touch
      </h3>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-16 justify-center items-start">
        {/* Contact Info */}
        <div className="space-y-8 w-full lg:w-1/2 text-center lg:text-left">
          {/* Email Card */}
          <div className="flex items-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <MessageCircle className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-bold  mb-2">Email</h2>
              <Link
                href="mailto:mdalimransahin@gmail.com"
                className="text-primary text-lg  transition-colors"
              >
                mdalimransahin@gmail.com
              </Link>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex items-center  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Phone className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-bold  mb-2">Call Me</h2>
              <Link
                href="tel:+8801517824146"
                className="text-primary text-lg  transition-colors"
              >
                +88 01517-824146
              </Link>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex items-center  p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Map className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-bold  mb-2">Location</h2>
              <Link
                href="https://goo.gl/maps/j3x7t4SKfSuhibTs9"
                className="text-primary text-lg  transition-colors"
              >
                Narayanganj, Bangladesh
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card w-full lg:w-1/2 bg-gradient-to-br from-default-100 to-default-50 p-10 rounded-2xl shadow-2xl">
          <form>
            <div className="space-y-6">
              {/* Name Input */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered w-full text-md rounded-lg p-4 text-gray-800  border border-primary-50"
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="input input-bordered w-full text-md rounded-lg p-4 text-gray-800  border border-primary-50"
                />
              </div>

              {/* Message Input */}
              <div className="form-control">
                <textarea
                  className="input input-bordered w-full text-md rounded-lg p-4 text-gray-800  border border-primary-50"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-primary to-secondary text-white w-full hover:opacity-90 transition-all py-4 rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
