import React from "react";

//import stock
import finKG from "../img/finKG.png";
import flexify from "../img/flexify.png"
import lebron from "../img/lebron.png"
class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-left">Portfolio</h3>
                <br/>
                <p className="subtitle-a">
                  Take a look at some of my personal projects, ranging in scope and interests.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/fin-kg">
                  <div className="work-img">
                    <img src={finKG} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">fin-kg</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python SpaCy ML
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/flexify">
                  <div className="work-img">
                    <img src={flexify} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">flexify</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS JavaScript Spotify Web API
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/nba-analytics">
                  <div className="work-img">
                    <img src={lebron} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">nba-analytics</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python ML
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
