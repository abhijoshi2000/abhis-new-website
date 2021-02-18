import React from "react";

//import stock
import flexify from "../img/flexify.png";
import lebron from "../img/lebron.png";
import pharma from "../img/pharma.jpg";
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
            <div className="col-md-6">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/nba-all-stars">
                  <div className="work-img">
                    <img src={lebron} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">nba-all-stars</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Python ML</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="work-box">
                <a href="https://github.com/abhijoshi2000/pharma-news-scraper">
                  <div className="work-img">
                    <img src={pharma} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">pharma-latest</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Python Web Scraping</span>
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
