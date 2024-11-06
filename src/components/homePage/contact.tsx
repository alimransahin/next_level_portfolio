"use client";
import { Mail, Map, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-4 " id="contact">
      {/* Header */}
      <h3
        className="text-3xl  text-center  py-4 bg-gradient-to-r from-primary-100 to-secondary-100 font-bold rounded-md"
        style={{ fontFamily: "Josefin Sans, sans-serif" }}
      >
        Get in Touch
      </h3>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-start my-4">
        {/* Contact Info */}
        <div className="card w-full md:w-1/2 bg-gradient-to-br from-default-100 to-default-50 p-10 rounded-2xl shadow-2xl flex flex-col justify-between">
          {/* Email Card */}

          <div className="flex items-center p-6 rounded-xl transition-shadow duration-300">
            <Mail className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-lg font-bold mb-2">Call Me</h2>
              <Link
                className="text-primary text-lg transition-colors"
                href="mailto:mdalimransahin@gmail.com"
              >
                mdalimransahin@gmail.com
              </Link>
            </div>
          </div>
          {/* Phone Card */}
          <div className="flex items-center p-6 rounded-xl transition-shadow duration-300">
            <Phone className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-lg font-bold mb-2">Call Me</h2>
              <Link
                className="text-primary text-lg transition-colors"
                href="tel:+8801517824146"
              >
                +88 01517-824146
              </Link>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex items-center p-6 rounded-xl transition-shadow duration-300">
            <Map className="text-primary text-4xl mr-4" />
            <div>
              <h2 className="text-lg font-bold mb-2">Location</h2>
              <Link
                className="text-primary text-lg transition-colors"
                href="https://goo.gl/maps/j3x7t4SKfSuhibTs9"
              >
                Narayanganj, Bangladesh
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card w-full lg:w-1/2 bg-gradient-to-br from-default-100 to-default-50 p-10 rounded-2xl shadow-2xl flex flex-col justify-between">
          <form>
            <div className="space-y-6">
              {/* Name Input */}
              <div className="form-control">
                <input
                  className="input input-bordered w-full text-md rounded-lg p-4 text-gray-800 border border-primary-50"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                />
              </div>

              {/* Email Input */}
              <div className="form-control">
                <input
                  className="input input-bordered w-full text-md rounded-lg p-4 text-gray-800 border border-primary-50"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                />
              </div>

              {/* Message Input */}
              <div className="form-control">
                <textarea
                  className="input input-bordered w-full text-md rounded-lg p-4 text-gray-800 border border-primary-50"
                  name="message"
                  placeholder="Your Message"
                />
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  className="btn bg-gradient-to-r from-primary to-secondary text-white w-full hover:opacity-90 transition-all py-4 rounded-lg"
                  type="submit"
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
