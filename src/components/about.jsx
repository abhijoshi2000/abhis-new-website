import React from "react";
import profile from "../img/profile.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a current software engineer at Meta, working within Instagram. Outside of work, I love to stay active through exercise, am an avid reader, and love to travel and explore new areas!",
        },
      ],
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="title-box-2">
                    <h5 className="title-left">About Me</h5>
                  </div>
                  {this.state.about_me.map((content) => {
                    return (
                      <p className="lead" key={content.id}>
                        {content.content}
                      </p>
                    );
                  })}
                  <div className="row">
                    <div
                      className="col-sm-12 col-md-5"
                      style={{ margin: "10 auto" }}
                    >
                      <div
                        className="about-img"
                        style={{ textAlign: "center" }}
                      >
                        <img
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="prof-pic-div">
                      <img src={profile} className="prof-pic" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
