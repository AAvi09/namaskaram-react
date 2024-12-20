import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="font-bold black text-center p-4 m-4">
        Contact us 📞📱☎📲
      </h1>
      <form className="space-x-2">
        <input
          className="border-black p-2 m-2 focus:border-blue-600   "
          placeholder="name"
        />
        <input className="border-black p-2 m-2 " placeholder="contact number" />
        <input
          className="border-black p-2 m-2 "
          placeholder="what you wanna say"
        />
        <button className="bg-red-600 text-white rounded-lg p-2 m-2">
          submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
