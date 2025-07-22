import React from "react";

const Contact = () => (
  <div style={{ padding: "4rem" }}>
    <h1>Contact Me</h1>
    <form action="https://formspree.io/f/mnnzpjgd" method="POST">
      <input name="name" placeholder="Your Name" required />
      <br />
      <br />
      <input name="email" type="email" placeholder="Your Email" required />
      <br />
      <br />
      <textarea name="message" placeholder="Your Message" required />
      <br />
      <br />
      <button type="submit">Send</button>
    </form>
  </div>
);

export default Contact;
