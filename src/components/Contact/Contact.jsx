import React from "react";
import "./Contact.css";
import { RiChat3Line } from "react-icons/ri";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const trackRef = React.useRef();
  const [istrackVisible, setIsTrackVisible] = React.useState();

  React.useEffect(() => {
    if (istrackVisible) {
      trackRef.current.classList.add("inView");
    }
  }, [istrackVisible]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsTrackVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    observer.observe(trackRef.current);
  }, []);

  const formik = useFormik({
    initialValues: {
      subject: "",
      msg: "",
    },
    validationSchema: Yup.object({
      subject: Yup.string().required(),
      msg: Yup.string().required(),
    }),
    onSubmit: (values) => {
      try {
        const email = "jochen.j.camacho@gmail.com";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(
          values.subject
        )}&body=${encodeURIComponent(values.msg)}`;
        alert(
          "If your email client did not open, please check your browser settings or email setup."
        );
      } catch (error) {
        console.error("Failed to open email client:", error);
      }
    },
  });

  return (
    <div className="pageCont" id="contact">
      <div className="pageInner scrollPage" ref={trackRef}>
        <h2 className="pageTitle titleFont pageHeader scrollPage">Contact</h2>
        <form className="contactCont" onSubmit={formik.handleSubmit}>
          <div className="contactHero">
            <h1 className="heroTop scrollPage">
              Let's <RiChat3Line className="chatIcon" />
            </h1>
            <h1 className="heroBot scrollPage">Chat</h1>
          </div>
          <div className="contactEntry scrollPage">
            <label>
              <p className="entryLab">Subject</p>
              <input
                type="text"
                placeholder="Greetings"
                required
                className="entryIn"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
              ></input>
            </label>
            <label>
              <p className="entryLab">Message</p>
              <textarea
                required
                className="entryIn"
                placeholder="Send me a message!"
                name="msg"
                value={formik.values.msg}
                onChange={formik.handleChange}
              ></textarea>
            </label>
          </div>
          <div className="btnSendCont scrollPage">
            <button className="btnSend">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};
