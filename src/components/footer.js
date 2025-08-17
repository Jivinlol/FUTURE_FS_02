import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-500 text-gray-800 py-12 px-6">
      <div className="bg-neutral-500 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Stay Updated */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Stay Updated</h2>
          <p className="mb-4 text-sm">
            Sign up with your email address to receive news and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 ">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded border border-gray-300 flex-1"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Info</h2>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>Plant Care</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow</h2>
          <ul className="space-y-1 text-sm">
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm">
            46 Kim Yam Road <br />
            #02-07/8, S239351
          </p>
          <p className="mt-2 text-sm">hello@soilboy.sg</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* Bottom Links & Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between text-sm px-2">
        <div className="flex gap-4 mb-2 sm:mb-0">
          <a href="#">FAQs and Delivery</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div>Soilboy © 2025</div>
      </div>
    </div>
  );
};

export default Footer;
