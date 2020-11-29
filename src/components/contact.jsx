import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        // style={{ backgroundImage: "url(" + imageOverlay + ")" }}
      >
        <div className="about-overlay-mf"></div>
        <div className="container">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div>
                <div>
                  <div className="title-box-3">
                    <h5 className="title-left">Contact Me</h5>
                  </div>
                  <div>
                    <form
                      action="https://formspree.io/f/meqplzdw"
                      method="POST"
                      className="contactForm"
                    >
                      <div id="sendmessage">
                        Your message has been sent. Thank you!
                      </div>
                      <div id="errormessage"></div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 4 chars"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              data-rule="email"
                              data-msg="Please enter a valid email"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              data-rule="minlen:4"
                              data-msg="Please enter at least 8 chars of subject"
                            />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="message"
                              rows="5"
                              data-rule="required"
                              data-msg="Please write something for us"
                              placeholder="Message"
                            ></textarea>
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="button button-a button-big button-rouded"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
