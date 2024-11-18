import React from "react";
import "./footerTemplate.scss";
import Icons from "../../../components/Icons";
const FooterTemplate = () => {
  return (
    <footer className="pt-16 pb-6">
      <div className="container">
        <div className="footer_top grid grid-cols-5">
          <div className="footer_item">
            <h6>Categorles</h6>
            <ul>
              <li>
                <a href="">Graphics & Design</a>
              </li>
              <li>
                <a href="">Digital Marketing</a>
              </li>
              <li>
                <a href="">Writing & Translation</a>
              </li>
              <li>
                <a href="">Video & Animation</a>
              </li>
              <li>
                <a href="">Music & Audio</a>
              </li>
              <li>
                <a href="">Programming & Tech</a>
              </li>
              <li>
                <a href="">AI Services</a>
              </li>
              <li>
                <a href="">Consulting</a>
              </li>
              <li>
                <a href="">Data</a>
              </li>
              <li>
                <a href="">Business</a>
              </li>
              <li>
                <a href="">Photography</a>
              </li>
              <li>
                <a href="">Finance</a>
              </li>
              <li>
                <a href="">End-to-End Projects</a>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <h6>For Clients</h6>
            <ul>
              <li>
                <a href="">How Fiverr Works</a>
              </li>
              <li>
                <a href="">Customer Success Stories</a>
              </li>
              <li>
                <a href="">Trust & Safety</a>
              </li>
              <li>
                <a href="">Quality Guide</a>
              </li>
              <li>
                <a href="">
                  Fiverr Learn <span>Online Courses</span>
                </a>
              </li>
              <li>
                <a href="">Fiverr Guides</a>
              </li>
              <li>
                <a href="">Fiverr Answers</a>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <h6>For Freelancers</h6>
            <ul>
              <li>
                <a href="">Become a Fiverr Freelancer</a>
              </li>
              <li>
                <a href="">Become an Agency</a>
              </li>
              <li>
                <a href="">Kickstart</a>
              </li>
              <li>
                <a href="">Community Hub</a>
              </li>
              <li>
                <a href="">Forum</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <h6>Business Solutions</h6>
            <ul>
              <li>
                <a href="">Fiverr Pro</a>
              </li>
              <li>
                <a href="">Project Management Service</a>
              </li>
              <li>
                <a href="">
                  ClearVoice <span>Content Marketing</span>
                </a>
              </li>
              <li>
                <a href="">
                  Working Not Working <span>Creative Talent</span>
                </a>
              </li>
              <li>
                <a href="">
                  AutoDS <span> Dropshipping Tool</span>
                </a>
              </li>
              <li>
                <a href="">Fiverr Logo Maker</a>
              </li>
              <li>
                <a href="">Contact Sales</a>
              </li>
            </ul>
          </div>
          <div className="footer_item">
            <h6>Company</h6>
            <ul>
              <li>
                <a href="">About Fiverr</a>
              </li>
              <li>
                <a href="">Help & Support</a>
              </li>
              <li>
                <a href="">Social Impact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Partnerships</a>
              </li>{" "}
              <li>
                <a href="">Creator Network</a>
              </li>{" "}
              <li>
                <a href="">Affiliates</a>
              </li>{" "}
              <li>
                <a href="">Invite a Friend</a>
              </li>{" "}
              <li>
                <a href="">Press & News</a>
              </li>{" "}
              <li>
                <a href="">Investor Relations</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_left">
            <Icons.logo />
            <span>© Fiverr International Ltd. 2024</span>
          </div>
          <div className="footer_bottom_right">
            <ul>
              <li>
                <a href="">
                  {" "}
                  <i class="fa-brands fa-tiktok"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
            <div className="bottom_btn">
              <button>
                <i class="fa-solid fa-globe"></i> English
              </button>
              <button>US$ USD</button>
              <button>
                <i class="fa-solid fa-child-reaching"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTemplate;
