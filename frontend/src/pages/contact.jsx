import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_kx6bala",
    "template_mj7f95c",
    form.current,
    "QBN_7MT6vHtpnSsYZ"
  )
  .then(
    () => {
      alert("Message sent successfully!");
      form.current.reset();
    },
    () => {
      alert("Failed to send message.");
    }
  );
};

return (

<section className="contact-section py-5">
  <div className="container">

    <h2 className="text-center mb-5">Contact Me</h2>

    <div className="row">

      <div className="col-md-5 mb-4">

        <h4>Get In Touch</h4>

        <p>
          If you have any project idea or want to collaborate,
          feel free to contact me.
        </p>

        <p><strong>Email:</strong> taniaakhtar098@gmail.com</p>
        <p><strong>Location:</strong> Bangladesh</p>

      </div>


      <div className="col-md-7">

        <form ref={form} onSubmit={sendEmail}>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

        </form>

      </div>

    </div>

  </div>
</section>

);

}

export default Contact;