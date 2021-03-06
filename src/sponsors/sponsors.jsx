import React, { Component } from "react";
import "./sponsors.css";
import Navbar from "../components/navbar/navbar";
import IITR from "../assets/iitrlogo.png";
import Melasta from "../assets/melasta.png";
import CFT from "../assets/cft.png";
import Goodluck from "../assets/goodluck.png";
import Jlcpcb from "../assets/jlcpcb.png";
import Pcb from "../assets/pcb.png";
import Coroplast from "../assets/coroplast.png";
import App from "../assets/app.png";
import Bqf from "../assets/bqf.png";
import Gigavac from "../assets/gigavac.png";
import Simscale from "../assets/simscale.png";
import Wilwood from "../assets/wilwood.png";
import Gri from "../assets/gripump.svg";
import Ipg from "../assets/ipg.png";
import Solidworks from "../assets/solidworks.svg";
import Footer from "../components/footer/footer";
import STmicro from "../assets/ST-micro.png";
import Norton from "../assets/norton.png";
import AppW from "../assets/app_white.png";
import Bender from "../assets/bender.png";
import BQF from "../assets/BQF_white.png";
import CoroplastW from "../assets/coroplast_white.png";
import Dupont from "../assets/dupont.png";
import Fluke from "../assets/fluke.png";
import GigavacW from "../assets/gigavac_white.png";
import GriW from "../assets/gri_white.png";
import Herms from "../assets/herms.png";
import JLCPCB from "../assets/JLCPCB_white.png";
import Lapp from "../assets/Lapp.png";
import Novoflex from "../assets/novoflex-white.png";
import Pankaj from "../assets/Pankaj-white.png";
import WE from "../assets/WE.png";
import WilwoodW from "../assets/wilwood_white.png";
import { BrowserRouter, Link } from "react-router-dom";
import KR from "../assets/KRCW.png";
import Nippon from "../assets/NipponW.png";
import AG from "../assets/ag_indutriesW.png";
import SimscaleW from "../assets/SimscaleW.png";
import Solid from "../assets/SolidWorksW.png";
import IPG from "../assets/IPGW.png";

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className="sponsors">
        <Navbar></Navbar>
        <div className="blogs-heading">
          <div className="blogs-heading1">OUR PROUD SPONSORS</div>
          <div className="blogs-heading2">
            Companies that have helped us fuel our drive
          </div>
        </div>
        <div className="sponsors-current">
          <div className="sponsors-powered">
            <div className="sponsors-indiv-heading">POWERED BY</div>
            <div className="sponsors-title-all">
              <a href="https://www.iitr.ac.in" style={{ color: "inherit" }}>
                <div className="sponsors-title-all-indiv">
                  <img className="sponsors-image" src={IITR}></img>
                </div>
              </a>
            </div>
          </div>
          <div className="sponsors-gold">
            <div className="sponsors-indiv-heading">
              <span style={{ color: "#ECC539" }}>GOLD&nbsp;</span>SPONSORS
            </div>
            <div className="sponsors-gold-all">
              <a
                href="https://www.st.com/content/st_com/en.html"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-gold-all-indiv">
                  <img className="sponsors-image" src={STmicro}></img>
                </div>
              </a>
              <a href="http://www.melasta.com/" style={{ color: "inherit" }}>
                <div className="sponsors-gold-all-indiv">
                  <img className="sponsors-image" src={Melasta}></img>
                </div>
              </a>
            </div>
          </div>
          <div className="sponsors-silver">
            <div className="sponsors-indiv-heading">
              <span style={{ color: "#9F9F9F" }}>SILVER&nbsp;</span>SPONSORS
            </div>
            <div className="sponsors-silver-all">
              <a
                href="https://www.nortonabrasives.com/en-in"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-silver-all-indiv">
                  <img className="sponsors-image" src={Norton} />
                </div>
              </a>
              <a href="" style={{ color: "inherit" }}>
                <div className="sponsors-silver-all-indiv">
                  <img className="sponsors-image" src={Lapp} />
                </div>
              </a>
            </div>
          </div>
          <div className="sponsors-bronze">
            <div className="sponsors-indiv-heading">
              <span style={{ color: "#B97B42" }}>BRONZE&nbsp;</span>SPONSORS
            </div>
            <div className="sponsors-bronze-all">
              <a
                href="https://www.flukeindia.com/"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={Fluke} />
                </div>
              </a>
              <a href="http://www.we-online.com" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={WE} />
                </div>
              </a>
              <a href="" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={Dupont} />
                </div>
              </a>
              <a href="http://www.novoflex.in/" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={Novoflex} />
                </div>
              </a>
              <a href="https://pankaj.com/" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={Pankaj} />
                </div>
              </a>
              <a href="https://jlcpcb.com/" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={JLCPCB} />
                </div>
              </a>
              <a href="https://www.gripumps.com/" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={GriW} />
                </div>
              </a>
              <a
                href="https://www.andersonpower.com/"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={AppW} />
                </div>
              </a>
              <a href="https://www.gigavac.com/" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={GigavacW} />
                </div>
              </a>
              <a href="https://www.bender-in.com/" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={Bender} />
                </div>
              </a>
              <a
                href="https://www.coroplast-group.com/"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={CoroplastW} />
                </div>
              </a>
              <a href="https://www.wilwood.com/" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={WilwoodW} />
                </div>
              </a>
              <a href="https://www.bqf.co.in/" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={BQF} />
                </div>
              </a>
              <a href="www.hermes-abrasives.com" style={{ color: "inherit" }}>
                <div className="sponsors-bronze-all-indiv">
                  <img className="sponsors-image" src={Herms} />
                </div>
              </a>
            </div>
          </div>
          <div className="sponsors-partners">
            <div className="sponsors-indiv-heading">PARTNERS</div>
            <div className="sponsors-partners-all">
              <a
                href="https://www.krcomposites.com/"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-partners-all-indiv">
                  <img className="sponsors-image" src={KR}></img>
                </div>
              </a>
              <a
                href="https://nipponpaint-autorefinishes.in/"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-partners-all-indiv">
                  <img className="sponsors-image" src={Nippon}></img>
                </div>
              </a>
              <a href="https://agindus.com/" style={{ color: "inherit" }}>
                <div className="sponsors-partners-all-indiv">
                  <img className="sponsors-image" src={AG}></img>
                </div>
              </a>
              <a href="https://www.simscale.com/" style={{ color: "inherit" }}>
                <div className="sponsors-partners-all-indiv">
                  <img className="sponsors-image" src={SimscaleW}></img>
                </div>
              </a>
              <a
                href="https://www.solidworks.com/"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-partners-all-indiv">
                  <img className="sponsors-image" src={Solid}></img>
                </div>
              </a>
              <a
                href="https://ipg-automotive.com/"
                style={{ color: "inherit" }}
              >
                <div className="sponsors-partners-all-indiv">
                  <img className="sponsors-image" src={IPG}></img>
                </div>
              </a>
            </div>
          </div>
          <div
            style={{ border: "1px solid #58585C", borderRadius: "50%" }}
          ></div>
          <div className="sponsors-support">
            <div className="sponsors-support-wishtosupport">
              Wish to support us?
            </div>
            <div className="sponsors-support-brochure">
              Read our sponsordship brochure
            </div>
            <div className="sponsors-support-contact">Contact Us</div>
          </div>
          <div
            style={{ border: "1px solid #58585C", borderRadius: "50%" }}
          ></div>
        </div>
        <div className="sponsors-former">
          <div className="sponsors-indiv-heading">FORMER SPONSORS</div>
          <div className="sponsors-former-all">
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={IITR} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Melasta} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={CFT} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Goodluck} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Jlcpcb} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Pcb} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Coroplast} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={App} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Bqf} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Gigavac} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Simscale} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Wilwood} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Gri} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Ipg} className="homepage-partners-partner"></img>
            </div>
            <div
              style={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Solidworks} className="homepage-partners-partner"></img>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100vw", height: "40px", backgroundColor: "#9D9FA8" }}
        ></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Sponsors;
