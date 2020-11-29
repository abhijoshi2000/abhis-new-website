import React from "react";
class Work extends React.Component {
  render() {
    return (
      <section id="experience" className="about-mf sect-pt4 route">
        <div className="container">
            <div className="box-shadow-full">
                <div className="title-box text-center">
                    <h3 className="title-left">Experience</h3>
                    <br/>
                    <p className="subtitle-a">
                        Work and Internship Experience.
                    </p>
                </div>
                <div class="yui-u">
                    <div class="job">
                        <h3>Facebook</h3>
                        <h4 className="work-title">Incoming Software Engineering Intern</h4>
                        <h5>September 2021 - December 2021</h5>
                        <p></p>
                    </div>
                    <div class="job">
                        <h3>Amazon</h3>
                        <h4 className="work-title">Incoming Software Engineering Intern</h4>
                        <h5>June 2021 - August 2021</h5>
                        <p></p>
                    </div>
                    <div class="job">
                        <h3>Exyn Technologies</h3>
                        <h4 className="work-title">Software Engineering Intern</h4>
                        <h5>May 2020 - July 2020</h5>
                        <p>• Produced a flight log-file viewing interface with React and Python to display and plot 16+ metadata plots, optimizing workflow for various field-engineers and other end-users 
                            <br/>• Developed extensive unit test coverage across multiple projects, utilizing Google Test module and Python’s unittest module, increasing test coverage from 84% to 98%</p>
                    </div>
                    <div class="job">
                        <h3>Broadridge Financial Solutions</h3>
                        <h4 className="work-title">Software Development Intern</h4>
                        <h5>June 2019 - August 2019</h5>
                        <p>• Implemented a full-stack bulk messaging service with Angular and Java to publish onto Active and IBM MQ, achieving a 5x reduction in publishing time
                        <br/>• Constructed a message search functionality with Java, using Splunk’s REST API and AES decryption to validate the status over 100 client message types on logs         </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Work;
