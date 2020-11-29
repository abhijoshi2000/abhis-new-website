import React from "react";
import prof from "../img/prof.png"

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "Java", content: "Java", porcentage: "90%", value: "90" },
        { id: "Python", content: "Python", porcentage: "85%", value: "85" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "75%",
          value: "75"
        },
        { id: "NodeJS_skill", content: "Node", porcentage: "80%", value: "80" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "CPP_skill",
          content: "C++",
          porcentage: "55%",
          value: "55"
        },
        {
          id: "MySQL_skill",
          content: "MySQL",
          porcentage: "65%",
          value: "65"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a current senior at Georgia Institute of Technology studying Computer Science. In the past, I have primarily dealt with full stack web development as well machine learning through a variety of internships and projects. I am interested in furthering my software development experience, along with relevant data science and machine learning capabilities, applying my interests to novel technologies and exploring unique sectors."
        }
      ]
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
                    {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
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
                    </div>
                    < img src={prof}
                          className="prof-pic"
                          alt=""
                      /> 
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                        <h5 className=""></h5>
                      </div>
                      <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
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
