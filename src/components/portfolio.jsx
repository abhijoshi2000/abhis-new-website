import React from "react";

import flexify2 from "../img/flexify2.png";
import allstars from "../img/allstars.jpeg";
import pharma from "../img/pharma.jpg";
import tiktok from "../img/tiktok.jpg";
import rwsbets from "../img/rwsbets.jpg";
class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-left">Portfolio</h3>
                <br />
                <p className="subtitle-a">
                  Take a look at some of my personal projects, ranging in scope
                  and interests.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/flexify">
                  <div className="work-img">
                    <img src={flexify2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">flexify</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            ReactJS | JavaScript | Spotify Web API
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/nba-all-stars">
                  <div className="work-img">
                    <img src={allstars} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">nba-all-stars</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python | Scikit-Learn
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/tiktok-trends">
                  <div className="work-img">
                    <img src={tiktok} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">tiktok-trends</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python | scikit-learn
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/r-wsbets">
                  <div className="work-img">
                    <img src={rwsbets} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">r-wsbets</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Python | NTLK</span>
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
