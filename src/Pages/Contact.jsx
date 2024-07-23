import React from "react";
import Example from "../Components/Example";

import Footer from "../Components/Footer";

import ChatComponent from "../Components/ChatComponent";



function Contact() {
  return (
    <div>
      <div>
        <Example />
        <ChatComponent></ChatComponent>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;