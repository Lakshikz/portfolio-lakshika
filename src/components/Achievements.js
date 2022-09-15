import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import colorSharp from "../assets/img/color-sharp.png";

export const Achievements = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Education</h2>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <br />
              <div>
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <b
                        style={{
                          background:
                            "linear-gradient( rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                        }}
                      >
                        Sep 2020 - June 2024
                      </b>{" "}
                      <br />
                      <h4>
                        Sri Lanka Institute of Information Technology
                      </h4>{" "}
                      BSc(Hons) in Information Technology Specializing in
                      Software Engineering
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <b
                        style={{
                          background:
                            "linear-gradient( rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                        }}
                      >
                        Dec 2019 - May 2020
                      </b>{" "}
                      <br />
                      <h4>ESOFT Metro Campus</h4> Diploma in Information
                      Technology
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <b
                        style={{
                          background:
                            "linear-gradient( rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                        }}
                      >
                        Mar 2015 - Dec 2019
                      </b>{" "}
                      <br />
                      <h4>Ananda Balika Vidyalaya Colombo 10</h4> Physical
                      Science Stream
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
