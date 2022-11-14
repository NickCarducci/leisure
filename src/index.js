import React from "react";
import ReactDOM from "react-dom";
import { UAParser } from "ua-parser-js";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
//import Older from "./Older";
import Dies from "./dies";
import Fraud6 from "./Fraud6";
import Epiology from "./epiology";
import Polio from "./polio";
import Lifetimes from "./lifetimes";
import Cable from "./Dropwire";
import TestingCases from "./testingcases";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import Vaxx from "./vaxx";
import "./style.css";
import ReverseAmortize from "./reverseamortize";
import GdpPDEBT from "./gdpPdebt";
import Racists from "./racists";
import NATO from "./nato";
import Trade from "./trade";
import AApp from "./AApp";

var curses = ["fuck"];
//var curses = ["bitch", "cunt", "pussy", "pussies", "fuck", "shit"];

//var bypass = false;
/*this.props.auth !== undefined &&
this.props.user !== undefined &&
!this.props.user.under13 &&
this.props.user.showCurses;*/

//RegisterCurseWords(parent.message, bypass);
export const RegisterCurseWords = (mT, bypass) => {
  if (bypass) {
    return mT;
  } else {
    const newerText = (curse, index) => {
      var hyphen = "-";
      for (let x = 0; x < curse.length - 1; x++) {
        hyphen = hyphen + "-";
      }
      return mT.replace(mT.substring(index, index + curse.length), hyphen);
    };
    var set = curses.map((c) => {
      var index = 0;
      if (mT.toLowerCase().includes(c)) {
        var curses = [];
        mT.split(/\W+/).map(
          (cc) => cc.toLowerCase().includes(c) && curses.push(cc)
        );
        var set = curses.map((curse) => {
          index = mT.lastIndexOf(curse);
          return (mT = newerText(curse, index));
        });
        return set[set.length - 1];
      } else return mT;
    });
    return set[set.length - 1];
  }
}; //q regs, poison, libertarian expiry

class Index extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      nofredgraphs: true,
      browser: name,
      landedPresentation: true,
      top: true,
      scrollTop: 0,
      scrollPlacementHeight: 0,
      openMenu: false,
      inSection: "New",
      ios: name.includes("Safari"),
      iosNoPhoto: name.includes("Safari"),
      serviceCancelingImages: name.includes("Safari"),
      settleDropboxFree: name.includes("Safari"),
      racketeeringDoneeClaimables: true
    };
    this.poverty = React.createRef();
    this.global = React.createRef();
    this.squirrel = React.createRef();
    this.racists = React.createRef();
    this.nato = React.createRef();
    this.jesus = React.createRef();
    this.thumbprint = React.createRef();
    for (let i = 0; i < 350; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    window.addEventListener("resize", this.refresh);
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (first || Math.abs(this.state.lastWidth - width) > 0) {
          this.setState({
            lastWidth: width,
            width,
            availableHeight: this.state.ios
              ? window.screen.availHeight - 20
              : window.innerHeight
          });
        }
      }, 600);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.dragMove);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const innerHeight = window.innerHeight;
      const scrollTop = window.scrollY; //+ window.innerHeight;
      // const scrollHeight = window.pageYOffset; //document.documentElement.scrollHeight;

      const top = scrollTop === 0;
      this.setState(
        {
          landedPresentation: false,
          scrolling: true,
          openMenu: top ? false : this.state.openMenu,
          top,
          scrollTop
        },
        () => {
          clearTimeout(this.timey);
          this.timey = setTimeout(
            () =>
              this.setState({
                onscroll:
                  window.document.body.scrollHeight -
                    window.document.body.clientHeight >
                  50
              }),
            200
          );

          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState(
              {
                scrollPlacementHeight: Math.round(
                  (innerHeight - 65) *
                    (window.scrollY / document.documentElement.scrollHeight)
                ),
                scrolling: false,
                landedPresentation: scrollTop > scrollTop + innerHeight + 40
              },
              () => {
                clearTimeout(this.scrollScrollTimeout);
                this.scrollScrollTimeout = setTimeout(() => {
                  this.setState({ landedPresentation: false });
                }, 2577);
              }
            );
          }, 900);
        }
      );
    }
  };
  handleMove = (ev, touch) => {
    ev.preventDefault();
    //ev.preventDefault();
    ev.stopPropagation();
    // console.log(ev.targetTouches);
    /*if (ev.currentTarget.tagName !== 'HTML') {
        let target = null;
        if (ev.clientX) {
            target = document.elementFromPoint(ev.clientX, ev.clientY);
        } else {
            target = document.elementFromPoint(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
        }
      }*/

    //var onEndEnd = null;
    var overMouseDrag = null;
    //var onUpEnd = null;
    var listener = null;
    if (touch) {
      listener = "touchmove";
      //onUpEnd = "ontouchup";
      overMouseDrag = "ontouchenter";
      //onEndEnd = "ontouchend";
    } else {
      listener = "mousemove";
      //  onUpEnd = "onmouseup"; //"ondragend";
      overMouseDrag = "ondragover";
      //onEndEnd = "ondragend";
    }

    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account

    //let shiftX = ev.clientX - ev.target.getBoundingClientRect().left;
    //let shiftY = ev.clientY - ev.target.getBoundingClientRect().top;

    const onMouseMove = (ev) => {
      var e = null;
      var timeout = null;
      if (touch) {
        e = ev.touches[0].clientY;

        //pageY- document.documentElement.scrollTop;
        //  var clientX = pageX- document.documentElement.scrollLeft;
        //https://stackoverflow.com/a/37200339/11711280
        timeout = 500;
      } else {
        e = ev.clientY;
        timeout = 500;
      }
      //clearTimeout(this.dragMove);
      //this.dragMove = setTimeout(() => {
      var scrollPlacementHeight = e - 115;
      //console.log(e);
      if (
        e &&
        timeout &&
        !isNaN(scrollPlacementHeight) &&
        scrollPlacementHeight !== this.state.scrollPlacementHeight
      ) {
        if (scrollPlacementHeight > -115) {
          //console.log(scrollPlacementHeight);
          this.setState({ scrollPlacementHeight, offScroll: true }, () => {
            //ev.target = this.squirrel.current
            //const acorn = this.squirrel.current;
            const ifEnded = () => {
              const { scrollPlacementHeight } = this.state;
              var top = Math.round(
                (scrollPlacementHeight / (window.innerHeight - 115)) *
                  document.documentElement.scrollHeight //window.scrollY
              );
              // console.log(document.documentElement.scrollHeight);
              window.scroll(0, top); // - window.scrollY);
              //window.pageYOffset = top;
              // document.documentElement.scrollTop = top;
              // window.scroll({ top, behavior: "instant" });
              this.setState({ offScroll: false }, () => {
                window.removeEventListener(listener, onMouseMove);
                window.removeEventListener(overMouseDrag, overIt);
                //window.removeEventListener(onEndEnd, onMouseEnd);
                //window.removeEventListener(onUpEnd, ifEnded);
              });
            };
            clearTimeout(this.dragMove);
            this.dragMove = setTimeout(ifEnded, timeout);
          });
        }
      }
    };
    //const onMouseEnd = () => {};
    const overIt = (event) => {
      // prevent default to allow drop
      event.preventDefault();
    };
    //window.addEventListener(onUpEnd, ifEnded,);
    //console.log(ev);
    //console.log(listener);
    // move the ball on mousemove
    window.addEventListener(listener, onMouseMove);
    window.addEventListener(overMouseDrag, overIt, false);
    //window.addEventListener(onEndEnd, onMouseEnd);
    // drop the ball, remove unneeded handlers
    //console.log(ev);
  };
  handleSpotifyError = (e) => {
    this.setState({ spotifyerror: true });
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        /*const offsetTop = (e) => {
          let offsetTop = 0;
          while (e) {
            offsetTop += e.offsetTop;
            e = e.offsetParent;
          }
          console.log(e);
          return offsetTop;
        };*/
        if (this.props.pathname !== "/jesus") {
          this.setState({
            racketeeringDoneeClaimables: false
          });
        }
        if (this.props.pathname === "/poverty") {
          window.scroll(0, this.poverty.current.offsetTop);
        } else if (this.props.pathname === "/nato") {
          window.scroll(0, this.nato.current.offsetTop);
        } else if (this.props.pathname === "/racists") {
          window.scroll(0, this.racists.current.offsetTop);
        } else if (this.props.pathname === "/global") {
          window.scroll(0, this.global.current.offsetTop);
        } else if (this.props.pathname === "/thumbprint") {
          this.setState(
            {
              journal: true
            },
            () => window.scroll(0, this.thumbprint.current.offsetTop)
          );
        } else if (this.props.pathname === "/jesus") {
          this.setState(
            {
              journal: true
            },
            () => window.scroll(0, this.jesus.current.offsetTop)
          );
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const { width } = this.state;
    var showSquirrel = this.state.top && !this.state.openMenu;
    const handleScollImgError = (e) => {
      if (e) {
        this.setState({ settleDropboxFree: true });
      }
    };
    //const string = x=>`${x}` replace all backticks with
    //https://www.javascripttutorial.net/es6/javascript-template-literals/
    //return RegisterCurseWords(
    //`
    const buttonstyle = {
      border: "1px solid black",
      color: "black",
      backgroundColor: "rgb(220,220,220)",
      borderRadius: "15px",
      padding: "15px",
      margin: "10px"
    };
    let arrayOfnumbers = [0];
    const scrollnum = () => {
      const num = arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      arrayOfnumbers.push(num);
      return num;
    };
    const space = " ";
    return (
      <div
        style={{
          maxWidth: "600px",
          minHeight: "100%",
          overflow: "hidden",
          height: "min-content",
          width: "100%",

          fontFamily: "sans-serif",
          textAlign: "center"
        }}
      >
        <div
          ref={this.squirrel}
          onDragStart={() => false}
          onMouseDown={this.handleMove} //onDrag
          onTouchStart={(e) => this.handleMove(e, true)}
          style={{
            cursor: "pointer",
            opacity: showSquirrel ? 1 : 0.3,
            top: 90 + this.state.scrollPlacementHeight,
            zIndex: 30,
            right: "10px",
            width: "30px",
            position: "fixed",
            transition: ".3s ease-in"
          }}
        >
          <img
            alt=""
            style={{
              borderRadius: "10px",
              border: "5px solid rgb(5,5,5)",
              width: "100%",
              height: "auto"
            }}
            src={
              this.state.nofred
                ? ""
                : "https://www.dropbox.com/s/oi43wpcc0h9phcz/saverAcorn%20%281%29.png?raw=1"
            }
          />
        </div>
        <a
          href="https://github.com/NickCarducci/NickCarducci/blob/main/README.md"
          style={{
            zIndex: "2000",
            transition: ".6s",
            transform: `translate(0%,${width > 900 ? 0 : 900}px`,
            //width: !this.state.scrolling ? 500 : 200,
            position: "fixed",
            right: "0px",
            bottom: "0px",
            width: width * ((width - 660) / width)
          }}
        >
          <a
            href="https://thetax.party"
            style={{ transform: "translateY(-20px)", position: "absolute" }}
          >
            thetax.party
          </a>
          {/*<span
              style={{
                backgroundColor: "rgb(200,200,250)",
                fontSize: "11px",
                position: "absolute",
                right: "0px",
                bottom: "0px"
              }}
            >
              savers do, not children will, pay for accrual over free rider
              immutable sewage police lawsuits by bonds and freerider mutable
              debt in private mostly. more coverage, less money
              (delusional-old-people-price-inelasticity). "match cash back on
              all credit cards, everyone wins!" A bizarre, rancor of rhetoric,
              investigated; public park rangers 20% fed lands; "eradication of
              poverty" the friend of poorness; monthly savings in lieu of
              greater savings. "money is cheap, 30yr fixed, what a mortgage to
              open up with, 6 offers, with a backup" sounds like communist.
              borrowers are squatters/loiterers. "stock market doing well," is
              the bid meeting ask. you don't buy a house by third party
              beneficiary laundered. that is my house; won't give wrong answer
              to pass
            </span>*/}
          <img
            alt="yellen"
            style={{
              //opacity: this.state.scrolling ? 1 : 0.2,
              width: "100%",
              height: "auto"
            }}
            src="https://www.dropbox.com/s/y8j4p21t4nag3bt/yellen%20park%20ranger.png?raw=1"
          />
        </a>
        <div
          onClick={(e) => this.setState({ journal: !this.state.journal })}
          style={{
            transition: `${!this.state.journal ? 0.5 : 0.2}s ease-in`,
            border: "1px solid",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "white",
            display: "flex",
            position: "fixed",
            width: "calc(100% - 42px)",
            fontFamily: "sans-serif",
            justifyContent: this.state.scrollTop === 0 ? "center" : "flex-end"
          }}
        >
          {this.state.journal ? "journal" : "plan"}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          onClick={this.props.setIndex}
          style={{
            zIndex: "9",
            textDecoration: "none",
            position: "fixed",
            left: "30px",
            bottom: "40px"
          }}
        >
          &diams;
        </div>
        {/**home prices national currency un GDP/p as PPP (not exchange rate) material labor percentage */}
        <div
          style={{
            backgroundColor: "rgb(205,205,205)",
            fontFamily: "'Nunito', sans-serif",
            overflow: "hidden",
            height: this.state.journal ? "0px" : "",
            position: this.state.journal ? "fixed" : "relative",
            width: "100%",

            textAlign: "center"
          }}
        >
          Tax for what and foreign
          <br />
          Nick Carducci
          <br />
          policy-drafting software-developer & microeconomist
          <br />
          "What are the advantages and disadvantages of an IMF loan?"
          <br />
          You must be on time (as borrower) from labor-demand (e.g. ex- sales of
          inventory, hourly-, estimate-until-margins-positive-withstanding,
          implausible use lease beyond 5 condos and stores or standardized
          hysterical guarantees) for there to be net-advantages, for
          laborless-demand generates less economic welfare, 1/hour-GDP/p.
          Collateralization repossession or none is worse than tortable-revenue
          skimping by vertical industry-line.
          <br />
          <Cable
            style={{ width: "100%" }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/5ebigoe49kfa67b/Screen%20Shot%202022-04-06%20at%209.32.02%20AM.png?raw=1"
            }
            float={null}
            title="(Newsmax)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          Helpful presidential and integrity
          <Cable
            style={{ width: "100%" }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/geeol8ocwcnzpcd/Screen%20Shot%202022-04-06%20at%209.30.43%20AM.png?raw=1"
            }
            float={null}
            title="Kirk"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h4>Tax the Mortgages &bull; st gua schm*</h4>
          {/*being self-deprecation is not a debilitation<br/>st gua schm*/}
          <Cable
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/ssaxibgxpuox59d/Screen%20Shot%202022-03-30%20at%202.23.50%20PM.png?raw=1"
            }
            float={"left"}
            title="Dr. Shuren - insurance saves on costs by margins for doctors"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          If it is not covered and paid for 'name-your-price' tool then it isn’t
          cost prohibitive, 1.2 times FCSU or PCE-CPI, ban invoices instead of
          tax for them - starve doctors and prescription commerce prevention for
          1/hour-GDP/p of labor-borne bid surrendered, non-rollover.
          <br />
          <br />
          Checking tax is triple currency, 3/2020-
          <h4>
            Just because you say scheme doesn't mean it isn't surrendered bid
          </h4>
          Salaries should triple for mortgage checking 3/2020-, I thought it was
          meaningless accounting but not legal
          <br />
          Rental assistance? I’ll prosecute implausible use lease beyond 5
          storefronts and condominiums, $10k NYC outright
          <br />
          65% wish to occupy wall st to end debt, and the top left{space}
          <span role="img" aria-label="pink-heart blue-heart green-heart">
            💖💙💚
          </span>
          {space}want to pay mortgages off with checking, but not currency?
          <br />
          Prescriptions prevent commerce, even economic welfare 1/hour-GDP/p
          legal reason Tranquil
          <br />
          For that household what are we cattle? 30 hr workweek vaults.biz/party
          25-34/45-54 2x
          <br />
          IRA index not fungible for anything
          <br />
          The cops and mental health are medicating homeless and castrating
          pedo, most shelter is puppy mill
          <br />
          <Cable
            style={{
              width: "300px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/w6vum5ty37uple7/Screen%20Shot%202022-03-30%20at%2010.57.42%20AM.png?raw=1"
            }
            float={"left"}
            title="GBNews youtube UK PM Boris, 'faces questions from Select Committee Chairs on Ukraine'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “$10.5k/refugee, needs to happen now.” Boris
          <br />
          Involuntary castration is happening in{space}
          <a href="https://truncatedsalestax.com/gov">
            RiverviewMedCtr, Red Bank, NJ
          </a>
          . No trial and without torttech paid without unequal bond-tax but
          truncated production tax geohash/month + 2 week public review.
          Obamacare saves by mean inflation targeting because supple already
          isn't able to{space}
          <a href="https://qr.ae/pG0ZKL">
            substitute from demand of another market
          </a>
          , which proves crowding out by population/scarcity is a fallacy.
          <br />
          <br />
          why do we stop killing?? the division of labor and power, or mimetic
          value?
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/qwcg3yxw5f1jbgm/Screen%20Shot%202022-03-30%20at%2010.19.03%20AM.png?raw=1"
            }
            float={"right"}
            title="Jimmy Dore - 3/29/22 youtube live"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Jimmy wants to tax for invoices. I'll end them on foreseeable
          impossibility and surrendered freedom to bid (as half to be) of
          labor-borne - boycott credit teapharmacy.party/drugs (
          <span style={{ color: "blue" }}>everyone can concentrate</span>),
          ratified. Thanks jim dawg. 'name your price' tool is donee, -doink.
          There he goes on the hospital fund. it used to be just
          {space}
          <a href="https://fred.stlouisfed.org/graph/fredgraph.png?g=NB7B">
            garments
          </a>
          . Don't forget to impute your chores! Name and open source, NFC Motor
          Vehicle convict intranet so I can launch e2e encryption on device.
          {space}
          <a href="https://2024nj.com/poverty">Income inequality</a>
          {space}artifacr of cornering market by trade secret. You get 5
          storefronts and condominiums, and have to rollover outright for
          1/hour-GDP/p. Anti communism is debentures, loans, implausible use
          lease inventory. 'Never vulgar,' Marx, '[and],' Engels, 'never
          outright.'
          {space}
          <a href="https://2024nj.com/disability">
            Anti-social 35.4%, 5.2% disabled by autism and downs
          </a>
          .
          <h4>
            <span style={{ color: "purple" }}>It's a plant</span>, like Demand
            for investible income does drive war.
          </h4>
          dethroning{space}
          <a href="https://qr.ae/pvyLqE">Iblis</a>
          {space}the begrudging-executioner as a juror for standardized
          guarantee PCE-CPI ascertainable loss, impausible use lease 5 store
          condo intent, and of bankingisnot.biz cycle kept down of foreseeable
          impossibility and donee beneficiary
          <br />
          <br />
          OECD says expense/hour is productivity, CDC says n=2019-20 p{"<"}
          .05 significance of{space}
          <a href="https://humanharvest.info/polio">
            single-year all-cause excess deaths
          </a>
          {space}is meaningful, DUI presentation daily and accident-weed
          matches, so it is certainly-fraud - don't ween cops off
          bond-loss-profit (war) per diem incarceration and FDA/USPTO/NIH, and
          have despondence of -science/skew; I disagree, sample size requires n
          {">"}100 - shuffling of population (address-assuming all inclusive and
          power in{space}
          <i>randomness</i>)
          <br />
          <br />
          at this rate, the uneducated will get{space}
          <a href="https://2024nj.com/disability">disability</a>
          historically,{space}
          <a href="https://qr.ae/pvyLqE">
            violence has been for petty sales tax scope ratification
          </a>
          <h4>
            he played a{space}
            <span style={{ color: "purple" }}>
              rubixcube genius with such a future
            </span>
            {space}and spent it on lessing - treasury is like debenture offlet
            inventory before default, no holds by NAICS 1/12, ever!
          </h4>
          tax the mortgages. Polio ms all cause (?) matches, sewage is disparity
          despondence (e.g. U.S. India cross ref age at death average, taxes
          only exist because of gravity toilets{space}
          <span role="img" aria-label="toilet">
            🚽
          </span>
          )
          <br />
          <br />
          <h4>
            <a href="https://qr.ae/pvyLDk">malfeasance yields to reason</a>
          </h4>
          Stephen Dorrel: Waiting lists happens because of standardized
          guarantee schemes and implausible use lease of inventory and 5 store
          condo{space}
          <a href="https://qr.ae/pvyLop">for 1/hour-GDP/p</a>
          {space}mimetic-average comp innocence functional grounds. Growing
          elderly care and new science shouldn't raise rents beyond trade and
          hourly revenue. tax payer free rider mutable only raises costs for
          those that need it by making a Hospital fund beyond negotiation of
          labor-borne
          <br />
          <br />
          <Cable
            style={{
              width: "100%"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/lioddjz4crnuc2b/Screen%20Shot%202022-03-30%20at%209.21.59%20AM.png?raw=1"
            }
            float={null}
            title="Newsmax Joni Earsnt on debentures"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          That treasury inventory is{space}
          <a href="https://qr.ae/pvyL52">$2t currency</a>, debenture for thee is
          good enough for me.{space}
          <a href="https://qr.ae/pvyLop">
            I will kill Joni Earsnt for not taking Hryvnia for inventory, and
            everyone in government for $2t currency checking mortgage fraud
          </a>
          .
          <br />
          <br />
          The big have gotten bigger because of overregulation, but moreso
          underregulation as would be a penny for a pound short like an option
          for a dollar by index expiring hedge
          <br />
          Recapitalize, banks are in create shape: Republicans Overseas Chair
          Greg Swenson to Mark Dolan, Hospital Fund guy shvitzing
          <br />
          <br />
          Does the{space}
          <a href="https://saverparty/global">
            U.S. and Russian monetary-debit lessing-and-relenting transaction
            fee security depositary receipt oligarchy
          </a>
          {space}- work together to{space}
          <a href="https://www.quora.com/Are-Russian-citizens-prohibited-from-importing-with-rubles/answer/Mats-Andersson-16">
            prohibit Russians from importing with roubles
          </a>
          ??
          <br />
          Saver-lesser mediation:
          <br />
          currencies are fungible for royalties% and - tentatively -
          vig-lessing-inventory, relenting open ingredient naming; alt:
          geohash/month, + 2 week public review transaction fee… NAICS
          max-royalty + reverse amortize (cash/debt)*income: surrendered freedom
          for foreseeable impossibility, or surrendered freedom to bid of
          labor-borne third party donee beneficiary, in: standardized-guarantee,
          -loan or -debenture (corporate bond, no SEC for inventory/justice),
          Checking +$3t, +$1t corp, -$4t mortgage. yes, vault share of salt by
          grading, absolutely
          <br />
          <br />
          India imports with rupee because Russian and China force their people
          to only have Ruble; import with Ruble? Nope, customs forces exchange
          rate. surrenderings happen, what good are they? Are Russian provinces
          users of Ruble/Hryvnia for non-durables? Checking +$3t, +$1t corp,
          -$4t mortgage
          <br />
          <br />
          In 1990,{space}
          <a href="https://commie.dev">lendings without savings</a>, or currency
          FDIC, or both, was Glass Steagall?
          <br />
          <br />
          Yet, lessings of monetary-debits, loan or guarantee, debenture or
          corporate bond, without NAICS max-royalty 1/12 vertical industry line
          naming and open ingredient that can sell out of inventory before
          default. Share split Hryvnia? Ruble annexes transaction fee
          <span role="img" aria-label="coyguy">
            🤠
          </span>
          {space}
          don’t let anyone tell you differently that population is bad nor that
          GDP/hour is richness nor productivity. Doesn’t cost anything just fee
          by{space}
          <span style={{ color: "purple" }}>
            transaction (open ingredient naming) and not inventory lessing
          </span>
          <br />
          *blows kiss, disabled uneducated criminally insane
          <br />
          <br />
          {/**"Shanghai half wealth and population, swing" */}
          "Leave livlihood alone." - Silk. Covid19 start debenture general
          income checking has to for credibility Science Inventory Vertical
          Industry line tortious max-royalty -{space}
          <b>
            1814-1870 GDP/p imputed slavery yet for 1/hour-GDP/p ratification by
            any means
          </b>
          .
          <h4>
            and expenses grew ascertanably, still, -1913 3-1%/yr+ population
          </h4>
          Fee no inventory lessing general income debenture faith of surrendered
          bid of labor-borne checking by mortgage backed securities $1t for
          corporates and $3t for households, to get into debt service. GET OUT
          Hospital Fund UK - standardized guarantee scheme, no fault of their
          own, like workers' comp? Horizontal-lines of business duress.
          <h2>
            Crowding out is fallacy, for supply is substitute for demand by
            another mark
          </h2>
          That thing you know what I mean dsm5 General for specific? That is
          statistician’s works!
          <h3>
            Nick Carducci - Injured yet labeled schizophrenic for boycott credit
            income
          </h3>
          For{space}
          <b>durable equipment and structures</b>, sure, logistically it is
          {space}
          <b>“fixed”-startup</b>
          {space}cost and non-durable/labor are variable-part of a project, but
          if that continues GDP/p growth thereafter, no technological
          advancement by non-redundancies can be ascertained, especially if you
          analyze credit as the cause instead of an endogenous factor to measure
          against, in determining -GDP/p expense lessening by bargain of input
          costs. The traditional collective bargain only comes about if it is
          not lessened, but royalty%, subservient to bid-borne-by-labor,{space}
          <span style={{ color: "purple" }}>
            substitutive as labor(price,invsales) for demand(hours,revrate)
          </span>
          {space}and is gained in the case of a producer for concurrentable,
          -input-cost, -<b>inventory indifference</b>, as demand is
          so-indifferent/utility between markets. Otherwise, the producer gains
          margin for ask-first but especially if they know they can -
          tentatively - surrender freedoms of a third party donee beneficiary to
          the contract of a debenture or directly-collateralized-loan.
          <br />
          Put up rubles for imports, enough of customs tax nationally. Share
          split Hryvnia and royalty%/sales state or government owned inventory,
          not as to less.
          <br />
          Standardized guarantees, implausibnle use lease, outright
          debenture-general-income or loan-collateralized/-compound,
          ascertainable loss CPI-PCE. Libertarians count GDP/hour as
          productivity, for now...
          <span role="img" aria-label="coyguy">
            🤠
          </span>
          . Count the majority of non-voters.{space}
          <a href="https://billbiden.org">Approval must be wrong</a>
          {space}if they are{space}
          <a href="https://qr.ae/pG0eiZ">all detesting</a>.
          <br />
          <br />
          "Cut off r&d funding without demand, is totally and completely
          insane." Dick Morris, "China is underwriting the war," by insuring
          weaponry to not work? This guy designed index fund instead of
          lendings, let alone changing the etymoloy for false advertising of
          "Savings." Section 43(a) of the Lanham Act, like Richest countries in
          the world means physical resources per labor, not expense.
          <br />
          You must fix prices if Supply propensity doesn't already equate{space}
          <a href="https://qr.ae/pG0eT0">demand</a>
          {space}ascertainable by labor-despondency in price (if you cannot by
          minimal-viable-product quality, 11/12 industry-variable-permit-vote to
          tort or jail programatic-reviewable), and PCE-CPI is for standardized
          guarantee schemes, index-equity and debenture, _ and _, by prevention
          of commerce by patent vig, state closed source, the reason for false
          bid pool and known hazard fraud
          <br />
          profit on transaction fee and outright sales of inventory,
          non-exclusive utility
          <br />
          traitor undermine U.S. petty tax, and more!
          <br />
          Not GDP not per hour but less
          <br />
          Not GDP per hour
          <h3>science</h3>
          Nick Carducci - Chairperson at{space}
          <a href="https://qr.ae/pG0eRY">Saver Party</a>
          {space}(2020–present)
          <br />
          "What’s the new charges on Donald Trump 2022?"
          <br />
          I’m charging him for known fraud of baby boomers dying, for ppp, small
          business/unemployed/disabled average age 50+. He also allowed for
          honor system signatures, although that was not his motive, to lose.
          <br />
          Yet, I am also for ccc gerontocracy charges, as with bbb trust
          breaking hypocrisy free rider mutable albeit operational monopsony by
          truncated prosecution tax geohash/month and 2 week public review NFC
          Motor Vehicle bridge, spectrum, pipelines, royalty% instead of
          inventory lessing, and unilateral-known hazard tort and jail,
          surrendered freedom to bid of labor-borne third party donee
          beneficiary in standardized guarantee, implausible use lease and
          compound or debenture general income instead of 1/12
          vertical-industry-type max-royalty.
          <br />
          <br />
          <Cable
            style={{
              width: "270px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/nj2whkh8v9i9pom/Screen%20Shot%202022-03-27%20at%2012.46.36%20PM.png?raw=1"
            }
            float="right"
            title="GDP index reflecting equities future option expires - https://corporatefinanceinstitute.com/resources/knowledge/trading-investing/non-deliverable-forward-ndf/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Martinis and Molotov Coctail if they need it," forced "pretty cool."
          <br />
          <br />
          Subsidized like{space}
          <a href="https://occupywallst.quora.com/The-S-P-https-www-quora-com-What-is-a-GDP-derivative-answer-Nick-Carducci">
            currency and index
          </a>
          ?
          <br />
          <br />
          Third party surrendered freedom max-royalty NAICS, projection
          hypocrisy, not what you’re doing
          <br />
          <br />
          FCSU HEALTH IN CRAW (new value added in GDP expense)
          <br />
          Nick Carducci - Chairperson at Saver Party (2020–present)
          <br />
          "What are your general opinions on having to work for a living?"
          <br />
          Work (incl. imputations of chores/errands) is to live, by trade of
          inventory or hours non-imputable (counted by currency and debt
          velocity/time-period), and laborless-demand by lessing inventory -
          financial collateralization and general-income debentures, instead of
          vertical-industry max-royalty and truncated production tax
          geohash/month + 2 week public review naming and open ingredient
          unilateral known hazard tort and jail with programmatic arrest with
          evidence and review-labor, or immediate-acquittal -
          <br />
          is to kill.
          <br />
          Drive the kids crazy by staying in the mortgage
          <br />
          <br />
          <a href="https://qr.ae/pG0awX">DSM-5</a>: "loss of memory is dementia,
          country cannot afford to have President like that," isn’t there a CT
          color or chemical you need?
          <br />
          You’re a danger to the life and safety of Americans, larceny in
          contract of third party donee beneficiaries of surrendered freedom of
          labor-borne-demand to bid in name your price standardized guarantee
          schemes, implausible use leases and general income debentures or
          compound instead of vertical-industry max-royalty.
          <br />
          Biggest killer of young people if fentanyl, whom is{space}
          <a href="https://teapharmacy.party/drugs">carried up ass</a>, and
          naming open ingredients will help
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/eqwb8qddg22rc06/jamie%20dimon.jpeg?raw=1"
            }
            float={"left"}
            title=" Minnesota Pharma Cops, or else; closed-source"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          cdc significant death rate years sample size.
          <br />
          <br />
          You can have a significant increase then by a small increase in single
          year death rate, which accounts for all ages, even{space}
          <a href="https://humanharvest.info/polio">life expectancy</a>
          {space}age growth.
          <h4>
            <a href="https://www.quora.com/Can-the-DoT-take-my-money-from-my-savings-to-pay-off-a-debt">
              Can the DoT take my money from my savings to pay off a debt?
            </a>
          </h4>
          "He is going to borrow $11b and some stoonads will give it to him
          [debeniture, otherwise inflation by homes only pays to borrow or
          repossess]."
          <br />
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/0aiih7c5c1qyedz/Screen%20Shot%202022-03-25%20at%209.56.12%20AM.png?raw=1"
            }
            float={"right"}
            title="GBNews - stop inflation with money, paying off creditors so they can work less"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          How much do you appreciate it, bitch? You have prisoners of war?? They
          can kill you (re: 1775-1787, 1814-1870 GDP/p imputed still not -GDP/p,
          but 0%/yr+ -1913). Psychiatrists draw correlations of anothers'
          rationality, while microeconomists understand all "crimes" are
          rational, by spite or hysteria - if the latter, that is the only
          choice. They do not use CT scans to diagnose. to understand the psyche
          of a person and aying back debt is a philisophical one, not
          concurrentable (reality). Are we talking about debt or war, Judy
          Sheldon? Larceny in contract - carface all closed source licensure
          pharma cops, crack is base form cocaine? Don't we all love cocaine?
          Transaction fee inventory currency, geohash/month + 2 week public
          review & (cash/debt)*income every year back and then 1/12 NAICS
          max-royalty. Foreseeable impossibility and surrendered freedom to bid
          by labor-borne, whatever wets your licker. Source of scientific valor
          and good will branding, $170t non-concurrentable rollover debenture
          with full reign "fractional." MARXISM INSTEAD OF ECONOMIC LIBERTY
          <br />
          I was able to secure a Canine unit (repossessable, open source) to rip
          larceny in contract legs off. Relief as in Hryvnia share-split.
          <br />
          <br />
          Currency non-fungible checking because of the meaninglessly and
          thereby INsignificant plandemic, now Ukraine offletting treasury
          currency inventory for nothing when NAICS max-royalty, truncated
          production tax geohash/month 2 week public review and politicians with
          only stake in currency is possible.
          <h3>The most creative creditors get to be, in their lives</h3>
          We have done some successful, sophisticated weapons transfers,
          {space}
          <a href="https://commie.dev">currency</a>
          {space}meaningless pandemic
          <h2>Do you want to watch?</h2>
          <h3>"Should smacking of children be banned?"</h3>
          Customs of net export (nominal PPP coefficience by GDP/p for exports)
          likely{space}
          <a href="https://saverparty.xyz/global">exchange</a>
          {space}by force for all foreign purchases of their constituents. the
          law punishes after the event, libertarians don't like, there is
          already adequate, ways to prevent unreasonable physical chastisement,
          on what grounds, ever? Not saying to round everyone up who is
          described as smackers, but if they actually smack, they go to{space}
          <span style={{ color: "purple" }}>
            jail, in truncated levy for a wagered-stay, or a dog-bite in the
            back of the knee
          </span>
          . Greater movement to revoke parental authority, those kids deserve
          liberty, and becoming wards of the state is not that. National Health
          Service is a very good thing, PCE-CPI empoyer contributions
          ascertainable gains. Report without evidence is not applicable, Mark
          Dolan, notwithstanding grounds at all.
          {width && <Trade lastWidth={Math.min(600, width - 20)} />}
          25k good paying jobs coming to Queens, lost opportunity to lose
          personal income competing with Amazon, for the general fund invests in
          Amazon and Amazon invests in the general fund. I am G-d.
          dangerousness, non-programmatic cash/bond bail === "conviction without
          evidence." Waterways are more important than expensive lease return,
          just buy from Russia - let them ruin their waters (NWP12). "release
          caps on savings accounts" === unequal bond-tax tax breaks for
          investments
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/6k060v4fymouc5v/Screen%20Shot%202022-03-25%20at%2011.36.18%20AM.png?raw=1"
            }
            float={"left"}
            title="Wilshire, PCE, CPI"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Insurance saves money, you can{space}
          <a href="https://www.bls.gov/osmr/research-papers/2017/st170010.htm">
            see the difference between PCE and CPI
          </a>
          .
          <br />
          <br />
          Bond holders were wiped out because of foreclosure, not inflation…
          5%APR is common for mortgage because that is the rate in increase in
          money (debt) and currency. This makes your equity worth the borrowed
          money. That is the only case, yet that is 1/3 of debt, corporate and
          treasury being monetary-debit lessings, like a mortgage backed
          security, without direct collateral.
          <br />
          <br />
          Inflation does not help people in debt, for the amount they owe is the
          same, yet now they have higher ongoing expenses.
          <br />
          <br />
          Inflation helps companies corner the market, by depreciating past
          labor.
          <br />
          <br />
          If they have no collateral that grows in value to match the borrowed
          money debasement, it doesn’t even help non-concurrently. We are really
          taking about mortgages, with tsy and corp being other 1/3 share, yet
          those are like mortgage backed securities with despondence from
          collateral.
          <br />
          <br />
          Are lenders washing debt into general income, notwithstanding
          surrendered freedom to bid of labor-borne demand? I have paid my
          student loans, not my credit cards, because the latter have no
          collateral, yet now{space}
          <a href="https://qr.ae/pG0MCd">
            all the sudden I have a student loan balance again
          </a>
          {space}("
          <span
            style={{
              color: "purple"
            }}
          >
            If the government doesn't do something, then prices are going to go
            up still further
          </span>
          ") ? It is the lenders' fault for promising third party doneee
          beneficiaries' currency and surrendered freedoms to bid labor borne,
          knowing currency being less than debt is impossible but keeping down
          payments. Profit + education is wrong. There needs to be a labor
          party. Where do you put the tax, real GDP falls and GDP rises when
          expenses are more than government and structures. Real GDP rises and
          GDP falls when expenses are less than government and structures.
          Chorers work for free 1814-1870 Checking is no longer currency and
          treasury borrowers loiter and elder sons PCE-CPI ascertainable
          standardized guarantee loss
          <br />
          <br />
          Work for your own copy when the currency is not fungible checking.
          <br />
          Cash advance , or monetary-debit lessings, to your collateralized.
          <br />
          “Anyone [the conscripted youth on both sides] who cannot immigrate to
          Europe will be killed by Russians. That is crystal. Certain Ukrainian
          authorities are demanding payments to leave,{space}
          <span style={{ color: "purple" }}>
            gentrifying transport as it happens
          </span>
          .”
          <br />
          <br />
          GDP growth is expenses, that is all that matters. To be anti-dumping
          and tarrif science of closed source and educate instead of open
          ingredient source and name and ban name your price tools from the cost
          of labor (GDP/p to another national treasury inventory + royalty%able
          currency not "exchange rate"). "Corporations do not pay their fair
          share," as it{space}
          <a href="https://www.ssa.gov/oact/progdata/taxRates.html">
            used to be DOUBLE what self-employed pay
          </a>
          , for purposes of going public - but I have invented vertical-line
          tortious max-royalty instead. It just goes to hospitals and treasury
          leases instead of royalty% subservient to consumer, yet ask-first.
          <br />
          <br />
          “If you believe the numbers Ukraine is putting out, I think the
          offletting of inventory and self-dealing of government owned,
          contractors or subsidies is really making a difference.” Ben Habib
          <hr ref={this.nato} />
          {width && <NATO lastWidth={Math.min(600, width - 20)} />}
          <h4>
            <a href="https://qr.ae/pG0oIF">Share split Hryvnia</a>
            {space}and suspend global bond loss profit, geohash/month 2 week
            public review stops conscripting "Russian and Ukrainian misfit,
            young-males."
          </h4>
          "economic growth." Joe Biden - competition, comp discrimination beyond
          price, begotten by population "crowding out," so there is no
          1/hour-GDP/p economic welfare reason for treasury-debit-currency to
          grow with currency
          <h2>Work, baby</h2>
          <Cable
            style={{
              width: "100%"
            }}
            //img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/unvuVf_xGks"
            }
            float={null}
            title="Ketanji Brown Jackson Day 4 - https://youtu.be/unvuVf_xGks"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Laugh show teeth
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/y4w5rihm1xljx3u/Screen%20Shot%202022-03-24%20at%2012.52.32%20PM.png?raw=1"
            }
            float="left"
            title="Ketanji Brown Jackson Day 4 - "
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Buy food for them, don’t buy their food for them, as treasury-debit is
          currency
          <br />
          <br />
          lia thomas can win without dominating, unisex; borrowing is to compell
          against debt for inflation.
          {/**it's the same fucking thing! */}
          <br />
          <br />
          “We all came back from being experts in infectious disease.” “Not me.”
          <br />
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            //img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/m-CwPBcrMYQ"
            }
            float="right"
            title="Rudy Giuliani quick draw politicians talking science, namely, biology - https://youtu.be/m-CwPBcrMYQ"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          executive and judicial not governmed by law executive authority in war
          to move troops, courts couldn't decide, exec operates equal,
          regressive tax
          <br />
          <br />
          there is a lot of history that the market [concentration of
          -science/skew, and GDP/p expenses] is flat for a long time. tax
          corporates over self, for public, and before that tax for free rider
          immutable, not 50 average age small business ppp and parent bbb over
          youth, nor hospital fund instead of banning invoice and standardized
          guarantee schemes for surrendered freedom to bid of labor-borne
          demand. Take care of people with truncated production tax for naming
          and open ingredient lists for merely unilateral known hazard{space}
          <span style={{ textDecoration: "line-through" }}>warn</span>
          {/**exude 1y/-x elastic when Supply (/) is a strong substitute for Demand (\) */}
          {space}tort jail, 11/12 vertical-lines of industry (e.g. NAICS)
          permits for Tranquil and voluntary trade, let alone equal bond-tax, to
          which not to be trust-breaking hypocrisy and exude 0y/1x 1/hour-GDP/p
          (efficiency), especially{space}
          <a href="https://qr.ae/pG0Uat">
            when Supply (/) is a weak substitute for Demand (\_)
          </a>
          .
          <br />
          <br />
          "Growth[ by GDP/p expense] and innovation is the{space}
          <a href="https://magnate.company">solution</a>
          {space}to carbon binding." Larry Kudlow. What about tidal waves and
          wastewater? QE watching $2t currency for $2.2t/yr tax and $1.8t/yr
          debt spending real interest rate is discounting by inflation{space}
          <a href="https://fred.stlouisfed.org/graph/?g=Np8s">-2%/yr+</a>
          homes for what collateral? Debt instead of 1/12 NAICS max-royalty
          damages the supply side by competition, any concentration is dead
          weight. Please, stay in your lane. "Capital formation," has nothing to
          do with lending, but innovation itself. You just want to charge fees
          for closed source vig-licensure instead of naming and open ingredient
          lists for higher productivity 1/hour-GDP/p. all you can do is laugh
          because you have no reason for debt, with the advent of truncated
          production tax, geohash/month 2 week public review, currency-only
          politicians and "no-candidate" vote goes to power of the plurality
          First Past The Post winner. Wages is 1/2 sprint, that is bad. A tight
          labor market is not healthy, that means tech deprecation and
          laborless-demand. Takes a few weeks to settle Mortgage Backed
          Securities, helping borrowers loiter, checking no longer fungible for
          currency.
          <br />
          <br />
          "money and debt," money is debt,{space}
          <a href="https://qr.ae/pG0MCd">currency is treasury inventory</a>.
          "mortgages have been bought, is that needed?" It has been that way
          since your Trump administration made checking from that, which for
          pandemic no longer is fungible for currency. "Putin has stolen from
          his people while they suffer [with lower GDP/p expenses]. Trump would
          have bluffed seizing the yhact." Lee Zeldin
          <h3>
            Debentures answer to no one; Demand should be money market
            investors...
          </h3>
          <div
            style={{
              margin: "10px",
              borderRadius: "10px",
              border: "1px solid",
              padding: "10px"
            }}
          >
            So, a{space}
            <a href="https://qr.ae/pG0Oj7">debenture</a>
            {space}is a bond that has no control over assets, if corporate has
            collateral, that is. By name, alone. More appropriately would be
            vertical industry tortious (e.g. 1/12 NAICS max-royalty), instead of
            default on a name.
            <br />
            <br />
            "You have to make money somehow[, by lessing inventory and guarantee
            instead of labor or inventory sales, even if it costs more per item,
            1/hour-GDP/p]," - Amy Tarkanian, Nevada GOP Chair. Sell to make
            money on inventory, the bourgoise do not trade outright.
            <br />
            <br />
            Communism deprives no man of the power to appropriate the products
            of society; all that it does is to deprive him of the power to
            subjugate the labour of others by means of such appropriations.
            <Cable
              style={{
                width: "100%"
              }}
              img="true"
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dropbox.com/s/jtvzr1gw0j62pwm/2019%20physical%20import%20not%20national%20currency.jpeg?raw=1"
              }
              float={"left"}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            <a href="https://www.quora.com/profile/Nick-Carducci">
              Nick Carducci
            </a>
            {space}- Legal Writer & Software Engineer at Vaults.biz
            (2020–present)
            <br />
            "When the Dollar collapses, how can the US pay its debt?"
            <br />
            Dollars, currency, are treasury-debits, with wells in UT, NM and WY.
            These should be royalty% instead of leases to trust breaking
            hypocrisy (for what but for 1/hour-GDP/p) and local sign off for
            wastewater instead of NWP12.
            <br />
            1/3 mort, corp, tsy share each are debt.
            <br />
            Concurrentable currency is $2t, checking non-fungible has been made
            available by adding $3t mortgage lessings to its assets, of $170t
            outstanding stocks and bonds (all monetary-debit lessings).
            <br />
            <br />
            (Cash/debt)*income reverse amortize and truncated production tax for
            surrendered freedom to bid by labor-demand, and borrower defense of
            foreseeable impossibility of contractor of estimate purchaser with
            extrapolative-judicial backing as if it is property (re: NJ Consumer
            Fraud Act).
            <br />
            <br />
            "What’s the best way to consolidate and reduce credit card debt?"
            <br />
            As a matter of standing, one may claim (cash/debt)*income every year
            back reverse amortization, then payday, by third party donee
            beneficiary surrendered freedom to bid by labor-borne-demand, or
            just the same by borrowers’ defense, to which if not from a third
            party to the contractor-liable contract, foreseeably impossible, or
            literally working the money, back. This is called lessing,
            possessing a lien or collateral, making inventory have income
            instead of royalty% of sales, much less hourly revenue or
            contributions in branding non-exclusive process-answer in stead of
            an open source and naming licensure, science, for
            unilaterally-known-hazards’ warning, tort and jail without state
            victimization, of course, to which fees and lesses of
            treasury-/monetary-debit are none, yet for truncated production tax
            geohash/month + 2 week public review.
            <br />
            <br />
            Doubt, legally, does require an alternative to convict, or none to
            acquit on negligence at most, to which I say NAICS max-royalty.
            <h3>
              imports of national currencies, or exports, (e.g. United States)
              by national currency (e.g. import country): imports by country
              (compiled)
            </h3>
            <h4>
              <a href="https://ec.europa.eu/eurostat/web/products-eurostat-news/product/-/asset_publisher/VWJkHuaYvLIN/content/id/12541714/pop_up">
                Coefficient
              </a>
              {space}debt (domestic){space}
              <a href="https://www.visualcapitalist.com/cp/biggest-trade-partner-of-each-country-1960-2020/">
                and
              </a>
              {space}exports (foreign currency), imports (domestic);{space}
              <a href="https://ec.europa.eu/eurostat/databrowser/view/env_ac_mfa/default/table?lang=en">
                _
              </a>
              *(($GDP/P)/(GDP/p))
            </h4>
            Deals with U.S., NDA will benefit how? Can we call it [
            <a href="https://www.linkedin.com/posts/profgalloway_chartoftheweek-activity-6912904050355101696-nn4P">
              %/sales{">"}.1
            </a>
            ] concentrated share/science, or -science/skew. Eliad Amsalem, "Will
            be interesting to compare it to the CPI change over the years."
            {space}
            <a href="https://fred.stlouisfed.org/graph/?g=Nm6s">Here</a>, and
            PCE-CPI is ascertainable loss imbued by standardized guarantee
            schemes. "The only way to increase supply," meaning inventory, not
            exactly propensity/
            <span style={{ color: "purple" }}>indifference</span>
            {space}curve, "is by changing sources of imports," Andy Mayer
            (Institute for Economic Affairs COO). Exports only accountable by
            foreign currency*
            <span style={{ color: "purple" }}>
              coefficience(($GDP/P)/(GDP/p))
            </span>
            ...{space}
            <a href="https://tcdata360.worldbank.org/indicators/NE.EXP.GNFS">
              this
            </a>
            {space}is after conversion (by exchange rate). I need exports by
            trade direction, before conversion (for all-inclusive GDP/p PPP, for
            currency is mortgage backed{space}
            <a href="https://commie.dev">+$3t</a>
            {space}MBS for checking).
            <br />
            <br />
            Nick Carducci - CEO & Founder at Thumbprint.us - Social Calendar
            (2012–present)
            <br />
            "Is the federal government a charity?"
            <br />
            The federal government is not a charity because it distributes, let
            alone lesses treasury-debits (currency, no longer checking-fungible)
            themselves (standardized guarantee PCE-CPI ascertainable loss,
            student loans, rig rates UT NM WY), instead of works regularly and
            gifts, or volunteers by hours, or contributes by product.{space}
            <span style={{ color: "purple" }}>
              At its simplest, it is a trust breaking body with truncated
              production tax, a geohash/month and 2 week public review reporting
              protocol, for free rider immutable sewage gravity toilets, police
              and lawsuits for unilaterally-known hazard naming and open
              ingredient list licensure
            </span>
            .
          </div>
          <br />
          <br />
          stop giving disability for those who aren't disabled, just have
          age-/fat-onset heart disease. Start giving disability for the
          uneducated, not the anti-social psychotic people (
          <a href="https://2024nj.com/disability">32% SSA DI</a>) who have
          committed no crime yet you involuntarily commit them, and housing the
          homeless doesn't require medicating them, nor does jailing the
          pedophiles require castrating them.
          <h3>
            <a href="https://fred.stlouisfed.org/graph/?g=NmqN">
              Savings by surrendered freedom
            </a>
            , akin to PCE-CPI savings
          </h3>
          <Cable
            style={{
              width: "200px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/v00g19d564rk8q9/Screen%20Shot%202022-03-25%20at%2012.24.31%20PM.png?raw=1"
            }
            float={"left"}
            title="Daily Wire was live. LIVE: Biden Receives Briefing on the Humanitarian Efforts for Ukraine - https://www.facebook.com/watch/live/?ref=notif&v=655650225698864"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Buy their water and food for them (mortgages, made less). Share split
          Hryvnia currency inventory + royalty% cow. home prices NATIONAL
          CURRENCY United Nations(?) GDP/p as PPP (not exchange rate),
          material-labor percentage of GDP (nearly mining, transport and
          warehousing, not services and all else, horizontal Value Added as
          vertical?)
          <br />
          <br />
          Let your people leave if they want. Enough visa fee & ascertainable
          loss of standardized guarantee PCE-CPI. Those weapons are treasury
          currency inventory, pandemic now made checking not fungible for that.
          <br />
          <br />
          How bout non-candidate goes to power of politician, and
          currency-/debit-only longs (not debit lessings nor, now, checking)?
          <br />
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/kiqwjzxufoce6y4/Screen%20Shot%202022-03-23%20at%207.05.59%20PM.png?raw=1"
            }
            float="right"
            title="Ketanji Brown Jackson Day 3 Cory Booker -'Communist dragging up stories trying to throw whatever might stick.' I would like to submit this to the record."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Knowingly malice spite comp malfeasance no holds barred for precedence
          of comparative petty tax war.
          <br />
          <br />
          Picking and choosing what will be entered into the record. Chorer
          homeless meds that’s a lot of gavagoul. Comp discrimination is not
          difficult question that is for economic welfare, 1/hour-GDP/p. I’m
          just a messenger of public opinion, a surrogate on behalf of the
          non-voter. I’m gonna yield the remainder of my time.” Thank{space}
          <a href="https://commie.dev/marx">G-d</a>! Calm down yield back. I’m
          just a messenger of public opinion, a surrogate on behalf of the
          non-voter.
          <h4>
            Progressive guarantee scheme and keep illegals out, Liberty of
            labor-demand, and Tranquility, let alone trust-break hypocrisy for
            international hostility in competing with consumers of input costs
            and gentrifying our own people by input costs of semiconductors,
            even FDA/USPTO/NIH{space}
            <a href="https://magnate.company">preventing innovation</a>
          </h4>
          contractors are liable for any third party donee beneficiary Liberties
          surrendered, as with Consumer Fraud Act imposing estimates by
          customers being operational contractor surrendering the rights of
          others that are labor-borne
          <br />
          <br />
          Given -1% is criminal, illegals, is there any virtuous reason for a
          wall? Just treasury fees?
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            //img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/MznlxLerCnc"
            }
            float="right"
            title="Ketanji Brown Jackson - https://youtube.com/shorts/MznlxLerCnc?feature=share"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Union (Worker-Cooporates preventing commerce) are Corporations just
          the same! "Chips are critical to the trade front, compete with China
          is to allow input costs to be competitive, without government
          contracting and profit seeking, nor subsidies, for 1y/-1x dead-weight
          economic welfare loss, 1/hour-GDP/p, alone." Prices 18% due to chip
          shortage because of gentrification of chip factories? Dismantle
          financial industry instead. Cap by margin not abject price for no
          quality skew. Ban invoices to protect uninsured.
          <br />
          <br />
          "China has been good monetizing ideas" (science? you can't have
          FDA/USPTO close source vig), pharmacy scripts only limit when supply
          propensity doesn't meet labor-demand, due to patents. Tangled supply
          chains and dependance on Chinese goods would best be solved by
          destroying financial and closed source licensure "industry."
          <br />
          <br />
          Cheaper labor with anti union states prevents labor from becoming
          owners and earn LESS if you appropriately don't count revenue to
          Unions
          <br />
          <br />
          <hr ref={this.racists} />
          {width && <Racists lastWidth={Math.min(600, width - 20)} />}
          Lower costs by trust breaking hypocrisy on input cost? Vertical line.
          No more guarantee schemes for public and private!
          <br />
          <br />
          You aren’t allowed to delete platform content, big or small, without
          paying or getting a desist order. Stfu Babylon Bee you corporate
          shills.
          <br />
          <br />
          1814-1870 slavery must be imputed, yet still shows an increase in
          expenses per person. buy their food for them
          <br />
          <br />
          Messy hair gets you disability. Children are our most precious
          resource as in chores and per diem bond loss profit?
          <br />
          <br />
          Government cannot be victim, unless protecting treasury inventory
          currency holders, and not for lessings (“equal” bond-tax)
          <br />
          <br />
          Ween cops off bonds with 3% under $2k geohash/month & 2 week public
          review, (cash/debt)*income reverse amortization
          <br />
          <br />
          Customs don’t want their constituents to sell treasury share abroad,
          now the U.S. is offletting inventory, and making checking not fungible
          for currency, because of a meaningless and so INsignificant fraud over
          the election, whom non-voters were told to stay home, and ppp bbb let
          alone the currency treaury-debit inventory and royalty% not leases
          subservience.
          <h1>
            I would never fight for "country" whatever that means; how can you
            not manage a paid (voluntary with trade of hours or inventory)
            military?
          </h1>
          Marx says inventory is not to be leased out but sold outright
          (surrendered freedoms to bid of labor-borne third party donee
          beneficiary, contractor liable)
          <br />
          <br />
          Babies to this lady is a number, an income-generating asset instead of
          a trading partner. PCE-cpi ascertainable
          <br />
          <br />
          There is like child porn on Snapchat not just obscure websites.
          Login.gov now. No more per diem incarceration bond loss profit
          conflict of interest! Truncated Production Tax 2024nj.com/carducci
          world peace
          <br />
          <br />
          Shuffle before extrapolation, significance requires meaning,
          “no-candidate” vote counts to power? You cannot audit magnets! Let it
          go
          <br />
          <br />
          Government cannot be victim, unless protecting treasury inventory
          currency holders, and not for lessings (“equal” bond-tax)
          <br />
          <br />
          Past crimes goes into [sentencing] decisions. Isn’t that double
          jeopardy?
          <br />
          <br />
          What but for 1/hour-GDP/p economic welfare? By division of labor,
          inventory sales and hourly revenue. Discrimination by comps for
          otherwise than price
          <br />
          <br />
          Steven Baker no meds, just jail homeless
          <br />
          <br />
          about 216/day missing children FBI true
          <h4>
            But for what other reason than efficiency; the division of labor,
            comparative advantage, Tranquil and voluntary trade
          </h4>
          "Make our environmentalist friends, so happy, if we have NWP12
          wastewater forlorn-locals and leases to treasury instead of royalty%
          subservient to consumers, not as to compete with them except in
          production, and not bifs to an implausible use lease, implicitly by
          the Currency holders, fungible for treasury, that which checking no
          longer is due to the Bipartisan Plandemic." Brian Kilmeade & Heritage
          Foundation, "poverty, income less than thrice average basic FCSU
          expense, with guaranteed and mortgage third party donee-bids imputed,
          lifted out from," but hours and asset inequality, albeit
          non-concurrentable, -unaccounted, unused leases, to treasury, bond
          loss profit, owned mostly for corporations. Libertarians are far right
          and Saver is far left (global ubi or bust, past labor borne bid). The
          most important thing is economic welfare, 1/hour-GDP/p, 0y/1x. Seize
          the means of law. It’s called communist bro. Marriage with comp
          exhibited discrimination is to use law to profit, not labor, Laws
          countervail, only purpose for justices, Sentence within guideline AND
          tortious-capacity, for debt is the bid of a third party donee
          beneficiary OR foreseeable impossibility. You as the contractor are
          liable. No state victimization nor payout when known hazards and 11/12
          minimal viable product. The answer is the intention of the Preamble,
          up to her thereafter. People in this position need to speak to it. I
          am for whistleblowers-inclusive jury (case vs countervailing law, lest
          for appeal-fines for being verily incorrect) of NAICS variance to
          review evidence, without bail for anyone, especially with nothing yet
          to review.{/* when is the U.S. to be unaccountable to questioning??*/}{" "}
          You screen for non-rollover insurance whistleblowers of government,
          like standardized guarantee schemes of laborless-demand, claims by
          expiring premiums and superfluous capacity, again surrendered freedom
          to bid of others whom are labor-borne Oh really you are going to talk
          with your hanfs now, Mr. Whitehouse?
          <br />
          <Cable
            style={{
              width: "200px"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/dszumzm68059ku5/Screen%20Shot%202022-03-22%20at%2011.44.34%20AM.png?raw=1"
            }
            float="right"
            title="Lindsay Graham SC Justice nominee hearing on GITMO"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          ‘Scheme’ is dox to name your price insurance for treasury, and
          corporate, vs labor-borne bid. Is plea bargain, under oath? 'Fair
          enough' = bail without evidence. Higher costs, delivered by inflation,
          and other factors. Labor of revenue and sales of inventory, leases?
          <br />
          “Aflac can help keep the madness in the bracket and out of your
          finances,” when PCE-CPI enumerates the literal cost?
          <br />
          <br />
          naming etymology open ingredient internist vs psychologist mockery
          <br />
          <br />
          Labor like antisocial - nationalist $6k/p - checking no longer
          fungible for currency
          <br />
          <br />
          Government cannot be victim, unless protecting treasury inventory
          currency holders, and not for lessings (“equal” bond-tax)
          <a href="https://commie.dev">
            <Cable
              style={{
                width: "100%"
              }}
              img="true"
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dropbox.com/s/5333mm4xno24s11/Russia%20confirmed%20ukraine%20barley%20proper.png?raw=1"
              }
              float="left"
              title="Russia and Ukraine barley proper"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </a>
          <h4 ref={this.global}>
            healthcare not wealthcare: get vertical lines out of horizontal
          </h4>
          <h3>
            aud/uah treasury barley
            <br />
            QE saves the dollar from treasury loss
          </h3>
          "Russia is not much of an exporter," meaning they have high
          'variable-part' labor-costs, relatively 'weak' treasury balance
          notwithstanding.
          <div
            style={{
              borderLeft: "2px solid",
              padding: "10px"
            }}
          >
            The price both of the great and small cattle which are fed on
            improved and cultivated land must be sufficient to pay the rent
            which the landlord, and the profit which the farmer has reason to
            expect from improved and cultivated land. If it is not, they will
            soon cease to feed them. Whatever part of this price, therefore, is
            not paid by the wool and the hide must be paid by the carcass. The
            less there is paid for the one, the more must be paid for the other.
            In what manner this price is to be divided upon the different parts
            of the beast is indifferent to the landlords and farmers, provided
            it is all paid to them.{space}
            <i>
              In an improved and cultivated country, therefore, their interest
              as landlords and farmers cannot be much affected by such
              regulations, though their interest as consumers may by the rise in
              the price of provisions.
            </i>{" "}
            ...According to this reasoning, therefore, this degradation in the
            price of wool is not likely, in an improved and cultivated country,
            to occasion any diminution in the annual produce of that commodity,
            except so far as, by raising the price of mutton, it may somewhat
            diminish the demand for, and consequently the production of, that
            particular species of butcher's meat. Its effect, however, even in
            this way, it is probable, is not very considerable.
            <i>
              But though its effect upon the quantity of the annual produce may
              not have been very considerable, its effect upon the quality, it
              may perhaps be thought, must necessarily have been very great. The
              degradation in the quality of English wool, if not below what it
              was in former times, yet below what it naturally would have been
              in the present state of improvement and cultivation, must have
              been, it may perhaps be supposed, very nearly in proportion to the
              degradation of price. As the quality depends upon the breed, upon
              the pasture, and upon the management and cleanliness of the sheep,
              during the whole progress of the growth of the fleece, the
              attention to these circumstances, it may naturally enough be
              imagined, can never be greater than in proportion to the
              recompense which the price of the fleece is likely to make for the
              labour and expense which that attention requires.
            </i>
          </div>
          <br />
          Incredible that customs after exporting forces exchange of their
          constituents, for any foreign purchases. Is my gleaning as this being
          the situation for Russian Chinese Brazilian customers correct?
          {width && (
            <GdpPDEBT
              lastWidth={Math.min(600, width - 20)}
              suggCountry={"Russia"}
            />
          )}
          Note my PPP coefficience for national debt is by labor-cost
          despondency of U.S. being so financial service oriented,
          laborless-demand, that is, 1/hour-GDP/p economic welfare deprecative.
          <br />
          <br />
          “Cadet force enrollment,” just because the youth are unable to make
          their own decisions sexually, you don’t go making decisions for them
          in general. “No one forces you to be there.” Frankly, disability
          should be granted for not being educated in the Dark Arts.
          <br />
          <br />
          "Greater movement to revoke 'parental authority,'"{space}
          <a href="https://2024nj.com/bachelors">
            those kids deserve liberty
          </a>{" "}
          and becoming wards of the state is not that
          <br />
          <br />
          You need to be proud and then you can be comfortable in humility.
          Tranquil and voluntary trade for what but 1/hour-GDP/0
          <br />
          I’m wondering why India and U.S. import in our currency and Russia and
          China import with the same, repatriation, instead of Ruble and Yuan.
          <br />
          Something to do with{space}
          <a href="https://qr.ae/pGLV3y">FX RESERVE</a>
          <br />
          <br />
          Can you be an enemy combatant if you view surrendered freedom of
          labor-borne bid (Revenue and sales, Cmon babe buck up) as arrest, or
          else? As third party donee.
          <br />
          Is war/general bond fund a conflict of interest, of Preamble?
          (Cash/debt)*income and geohash/month spoofable paytech Truncated
          Production Tax.
          <br />
          The war is over Islamic banking, if anything else for then otherwise
          taking the Iblis execution mantle - transaction fee.
          <br />
          Transaction fee for inventory currency, NAICS max-royalty,
          geohash/month + 2 week Public review with login.gov intranet.
          <br />
          <br />
          What is unorthodox of Barisma? Were there government owned entities or
          contracts? Who cares? Just about 60% of the population that gains
          income by explicit contracts and otherwise invoices and standardized
          guarantee schemed laborless-demand and surrendered actual-bid borne of
          labor. The solution is for the Federal Reserve (how is public opinion
          fine for them but not wall st?) to suggest that politicians
          exclusively long the treasury-currency
          <br />
          <br />
          <h4>
            your debts are actually my money if at all concurrentable; "I just
            want to see him squirm, don't you?" Greg Kelly
          </h4>
          <Cable
            style={{
              width: "100%"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/463okkoyur85a3k/IMG_0520.jpg?raw=1"
            }
            float="left"
            title="Meta 8,219,221 followers - https://www.linkedin.com/posts/meta_facebook-is-working-to-help-keep-you-safe-activity-6897304067345932288-sSMh/"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <Cable
            style={{
              width: "100%"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/63enned27gby170/IMG_0508.PNG?raw=1"
            }
            float="left"
            title="What if other countries refused to pay China's debts? - https://qr.ae/pG0Tn7"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “
          <a href="https://qr.ae/pG0Tn7">
            Dangerousness is important for law enforcement
          </a>
          . NY is the only state that doesn't allow conscription of the
          forlorn.” - 77WABC
          <br />
          <br />
          Implausble use leases are very much the fault of the contractor beyond
          5 storefronts and condominiums
          <br />
          <br />
          <Cable
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/vtot4mw913rxi1s/Screen%20Shot%202022-03-21%20at%206.31.15%20PM.png?raw=1"
            }
            float="left"
            title="NHS tort with 'conservative sir christopher Chope' Dan Whooton GBNews"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          6.1m UK NHS backlog due to non-rollover insurance for invoices. I want
          same day surgeries, no surrendered freedoms of others as labor-borne
          nor foreseeable impossible. Tax for 17 hours after antra zenica
          fetal-cell-lines and .45% lost luggage, Consequences who’ve been
          forced to prisoners’ dilemma duress, much like a{space}
          <a href="https://qz.com/1033336/survey-americans-hate-the-health-care-industry-even-more-than-wall-street/">
            guarantee scheme
          </a>
          . Stop state{space}
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            victimization
          </span>
          {space}
          <span
            style={{
              //textDecoration:"line-through"
              color: "grey"
            }}
          >
            [trust breaking hypocrisy]
          </span>
          {space}self fine!
          <br />
          Just the News reporting politically, you can have an intranet. Put him
          in jail.
          <br />
          <br />
          Why do we stop people crossing the border?
          <br />
          Narcotics coming across the board is{space}
          <a href="https://teapharmacy.party/drugs">
            extrapolated from overdoses
          </a>
          <br />
          "4-5% Barr presentation of gangs
          <br />
          criminal (regressive against) trust breaking hypocrist enterprise 5-10
          yrs for guns that haven't paid the open ingredient vig without
          evidence of a crime." Bill O'Reilly coming for our guns. Login.gov
          auth convict intranet is malfeasant for these cases. We can
          logistically have on-device e2e encryption. You want treasury fee?
          Royalty% instead for treasury inventory monetary-debit (vault-share)
          drill ask local, margin-target spectrum, pipelines and bridges, NFC
          Motor Vehicle
          <br />
          <br />
          “China will be a colonizer of Russia, that will buy it without
          leases.” Fmr Trade Advisor, Peter Navarro, "serfdom for thee in
          science, but not for me in implausible use lease!
          <br />
          When we allow them to fund their war machine with our bond profit loss
          (lessing tsy) is otherwise a down payment on OUR farmland." A lot of
          royalties to unpack there, quota (my new nickname for navarro)
          <br />
          <h3>
            The uneducated{space}
            <a href="https://2024nj.com/bachelors">should</a>
            {space}get disability
          </h3>
          Marijuana, Cocaine, is a performance enhancer, not DUI impairing, as
          proven by matching presentation of high during accidents and daily. I
          would make no vic licensure, just open ingedient and name Heroine,
          even in vault-share without prescriptions.
          <br />
          <br />
          Shut down G-d-given resources under Treasury inventory and royalty%
          subservient to customers, not leases. "What we need to do to create
          those jobs," that is not labor-borne demand, so it is all rents.
          <br />
          Lessing is the exclusive cause of inflation over labor revenue and
          trade sales.
          <br />
          <br />
          Eric Bolling: "Putin will be hung for conscripting misfits. Ukrainian
          suffering innocent women and children, so unfair, devastating and
          cruel. Mall obliterated, beutiful buildings city after city,
          absolutely ravenged, not only physical damage to buildings to women
          and children, elderly, maternal mothers in the streets absolutely
          slaughtered. People's lives are changing forever, even to not exist. I
          want the world to actually do something, instead of watching and
          observing. Say, we are the leaders of the world, you need to stop
          this. Bag, all they have, their whole lives, this 2m/177m is changing.
          Let's take them in."
          <br />
          <br />
          <Cable
            style={{
              width: "100%"
            }}
            img="true"
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/aa6rjto4s0u7q67/Screen%20Shot%202022-03-22%20at%208.50.05%20AM.png?raw=1"
            }
            float="left"
            title="https://www.quora.com/If-aggregate-demand-increase-does-price-increase-too/answer/Tim-Pellemeier"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          OCD as{space}
          <a href="https://2024nj.com/disability">disability</a>
          {space}makes a mockery of actual disability, you bet the spread,
          taking a bet, subservient to their bid with your ask, royalty-imbued.
          “Somewhere in their life the 32% get the special allotment of social
          security disability.” Curtis Sliwa. "$15k bail couldn't be afforded so
          he has to come back. When you have a limited supply, your costs go
          up," those are people's propensity, you want people to be willing to
          sell inventory? Supply is always met with competition from demand to
          produce it as a laborer, driving prices back down concurrently as if
          crowding out is ever a factor.
          <br />
          <br />
          checking no longer good for currency because of the plandemic
          <br />
          Geohash/month Truncated Production Tax. Article 1.8 oxymoronic equal
          bond-tax. This is why I only hold Preamble as nice; Tranquil during
          slavery, then 1814-1870 slavery imputed still grows GDP expenses per
          person btw. Laborless-demand. 1775-1787 Brits, 1814-1870 imputed
          slavery, 1913 tax, never a drop but for 1787-1813 and 1870-1912
          <br />
          <br />
          Worth a parachute
          {/**Duress albeit moot. Justice cannot move forward knowing this and
           acclaim prudence, however. Anti-decency?*/}
          <h3>
            Including others doesn’t mean flaccid collective loss (sprints of
            variable-part labor and material, that is monetary-debit treassury
            inventory curency, royalties not to be lessers) nor laborless-demand
          </h3>
          Thumbprint horseshoe direct action. I want a justice that views
          1775-1787 malfeasance by petty tax as precedence. I said everyone like
          a parfait
          <br />
          <Cable
            style={{
              width: "100%"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/GIAAKtVUWV4"
            }
            float="left"
            title="Hack4Congress 2015 DC - thumbprint.us civictech - https://youtu.be/GIAAKtVUWV4"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "collegial, genuine" charisma. debate whether trade is expense,
          standardized claims is surrendered bid of labor-borne, closed source
          vic licensure trust breaking hypocrisy, not gain corp or individual;
          follow, the law. conscripts for mentally-ill? what kind of{space}
          <a href="https://brainscan.info">law is that</a>? Bird law? Who tf is
          G-d?{space}
          <span
            style={{
              color: "green"
            }}
          >
            Does that mean we don't use evidence anymore?
          </span>
          <br />
          <br />
          Pitfall is all I said, flaccid collective loss when premiums expire,
          rollover insurance
          <br />
          Guaranteed surrendered bid of labor-Of course!
          <br />
          <br />
          orderly is by time (and repo surrendered bid of actual-labor-demand)
          constraints instead of NAICS max-royalty?
          <h4>Scheme bif (not trade of) revenue hour inventory sales, $TBT</h4>
          Tax should actually be regressive, and{space}
          <a href="https://www.ssa.gov/oact/progdata/taxRates.html">
            corporate double self
          </a>
          , as in truncated, or flat-flat (2x), in concern against price gouging
          by sewage (gravity toilets) police and lawsuits, 3% under $2k
          geohash/month report from spoofable paytech, and 2 week public review
          of executions. Login.gov auth convict intranet is malfeasant for these
          cases. We can logistically have on-device e2e encryption. No invoices
          but then taxes for beyond free rider immutable (mutable), is merely
          trust breaking hypocrisy, albeit not like an invoice for not even
          ableists!
          <br />
          <br />
          fine for successful appeals is the only way to stop law-licensure
          conflict of interest. No invoices (and therefore the need for
          standardized guarantee schemes) for ableists, either! bigots stand on
          shoulders (save for science too broad, vic or lesser), but
          technological advancement -GDP/p is an individual contribution, we do
          not hold hands working with hands.
          {/**
          Weird shouldn’t happen, 13 mile run
          Humility is self-defeating
          When you have to fix things, you shouldn’t be humble, or you harm 
          those that you wish to help
          You don’t correct people by telling them they are correct
          Not as a partizan  */}
          <h3>
            Supreme Court is for law* and appellate corrections, not cases;
            GDP/p is expense, but for what else than 1/hour-GDP/p
            {/**Pandemic checking made for nonfungible currency, average 
            is not much for a guideline, cases are to interpret under */}
          </h3>
          *When there are so many laws that countervail, donee beneficiary,
          surrendered freedoms of others in EULA only? Known hazard closed
          source vig licensure? Practical per diem incarceration loss bond
          profit? Uphold Tranquil and voluntary trade over conscripting the
          forlorn? Steven Baker you want treasury fee? Prevent commerce? Working
          age, even? These judges will decide if the mentally ill can be
          involuntarily committed without crime, or even fight in war. Marx
          would not support insurance, public nor private, nor invoices. illegal
          immigrants are 1% less criminal than everyone else. check parcels
          before you blame immigrants vaults.biz/immi{space}
          <a href="https://teapharmacy.party/drugs">
            carrying fentanyl up butts
          </a>
          . fda only for uspto. fine successful appeals. comp descrimination
          without scapegoating.
          <br />
          <br />
          Insurance for invoices? Estimates as property in NJ Consumer Fraud Act
          should make it to Supreme Court soonish.
          Neighborhood/tort-capacity/brand 'good will' non-concurrentable
          <br />
          <br />
          {/*bscure, confused or concealed. confused means different what is the point, .*/}
          (Rollover) Insurance needed for invoice, Klobuchar: "Supreme Court
          choses who gets to speak."
          <br />
          We all pay average price by ascertained damages by standardized
          guarantee scheme. I would only be hypocrite if I took credit as income
          (cash/debt)*income. I am currency-(not checking anymore)-bartender, at
          most. Checking is no longer fungible for currency due to the global
          pandemic, non-concurrentable. Currency fungible for treasury share and
          royalty% of wells, not leases, subservient to customers! Fuck, bro.
          Racketeering by the Bar: There are so many laws that countervail,
          donee beneficiary, surrendered freedom of others in EULA only? Known
          hazard closed source vig licensure? duress, practice what you preach
          prisoners' dilemma, is moot.
          <br />
          <br />
          Contractors are liable for surrendered trade, unTranquil nor voluntary
          in whole, when minimal viable product is practical. Marx, as to not
          collatteralize nor capitalize on others' labor by invoices over
          revenue and sales, or lessings, by private nor public standardized
          guarantee schemes nor invoice, public nor private.
          <br />
          Practical per diem incarceration bond loss profit?
          <br />
          <a href="https://lightte.ch">govtech without vig</a>, nor increase,
          for{space}
          <a href="https://thumbprint.us">auxilliary profits</a>; GDP/p not
          necessary-to increase in expense except for finance and profits in
          excess of revenue and sales. Government plus ups are how to
          necessarily match what is natural propensity of labor-borne-demand.
          <br />
          Tranquil fine successful appeals, voluntary trade by NAICS variance of
          juries with{space}
          <span
            style={{
              color: "purple"
            }}
          >
            whistleblowers
          </span>
          . Appeals are inherently a correction, so fine for poignant
          cost-appropriations. I think he is doxxing my policy proposal to fine
          successful appeals, albeit it is inherently cost
          appropriative-correction{space}
          <a href="https://2024nj.com/disability">
            32% disable are OCD,{space}
            <span
              style={{
                textDecoration: "line-through"
              }}
            >
              4x
            </span>
            {space}Chris Reeves
          </a>
          <h2>
            End standardized guarantee scheme (donee beneficiary), and
            State-victimization (licensures can just enforce naming and open
            ingredients)
          </h2>
          equal justice and opportunity, like mental health instead of actual
          disability?
          <br />
          That's what it means, signifiance notwithstanding otherwise, like
          excess deaths according to CDC n=2019-20.{space}
          <a href="https://commie.dev">#PandemicChecking</a>
          <br />
          Conscripts are mentally insane, worth a shot
          <br />
          Grounded libertarians like standardized guarantee schemes
          (surrendered/false bif pools)
          <br />
          Oxymoronic statement, equal bond-tax
          <br />
          <br />
          Treasury fee, prevent commerse, leases? working age, even? Prevent
          commerce? You want treasury fee? Royalty% instead for treasury
          inventory monetary-debit (vault-share) drill ask local, margin-target
          spectrum, pipelines and bridges, NFC Motor Vehicle
          <br />
          <br />
          End standardized guarantee schemes. surrendered freedom of others to
          bid by labor-demand. Lessings rent out money for surrendered bid of
          others’ labor- whistleblower incarceration conflict of interest
          truncated production tax trust breaking purpose by free rider
          immutable sewage gravity toilets police and lawsuits, alone GDP is
          expenses, revenue and sales, work and inventory trade
          <br />
          <br />
          Borrowing causes more tax revenue than labor-borne free rider
          immutables, EXCLUSIVELY sewage gravity toilets police and lawsuits
          <br />
          <br />
          Don't force people to take heart medication. NGO charity is not 501c3,
          dissolves to treasury
          <br />
          Impossible or donee beneficiary.
          <br />
          Animal testing kink, FDA/USPTO closed source vig.
          <br />
          levy on financial services to treasury, instead of jail? The Sleazy
          sleaze-callers, on GBNews
          <br />
          Lessings rent out monetary-debits (vault share) for surrendered bid of
          others’ labor-borne instead of NAICS max-royalty.
          <br />
          <br />
          Communism deprived no man the ability to trade or work, just
          capitalize on the labor of others
          <h4>You don't need to medicate the homeless to house them</h4>
          <br />
          (cash/debt)*income is islamic banking, NAICS max-royalty, .45% lost
          luggage unlikely. Intent is already had, could have done another way.
          "they don't have the medical service they need, easy money," but they
          don't want to be castrated like Russia conscripts drug users to
          dispose them. It is none of your business, producers ask.
          <br />
          <br />
          30% is at least three points short in either first past the post or
          ranked choice voting if non-voters turn out. Stay at home moms are not
          my vote.The war is actually fought because the jobs are needed to keep
          people busy, (cash/debt)*hour for 1/hour-GDP/p is economic welfare.
          GDP does count rate of trade of homes by collateral of broad money.
          <br />
          <br />
          Front running food corporation is not an advantage to take. Senior
          Tech White House and Google Behavorial Economics.
          <br />
          Inflation by Supply and Demand by micro-theory is propensities of
          labor-borne-demand, and inventory material sales or revenue hours
          <br />
          <br />
          Mayonetski punish people instead of regime, allows the regime to
          continue, instead of known hazard? Comparative innocence forlorn and
          absolute hypocrist
          <br />
          <br />
          "psychotic, detatched from reality, obsessed with this that he becomes
          completely crazy." War for taxes is rational. "If we default on our
          bonds, I think the international community would allow us to borrow
          again Not based on inability to pay, but for not supporting Ukraine
          and plausibly for the first time ever in history make virus inseminate
          a cell."
          <br />
          <br />
          "ok but nothing like $6t/yr, growth, like filling up cgas full but it
          is snowing, like snowing because of covid, with full tanks, now go
          drive and new refrigerator and new car. everything is worn because we
          haven't been able to shop. and that means a huge traffic jam and that
          inflation is too many people chasing too few goods. the make profits
          as they should, and gas goes up, and they don't make as much unless
          they raise prices. there is only one cure for inflation, yet it is
          recession or depression, where either patient has high blood pressure,
          take his heart out and kill tgat son of a gun. kill him to get rid of
          the problem. high taxes stops interest rates, republicans do not like
          taxing corporations and democrats don't like taxing coops. tax credit
          help heads of households out, but keep the balance. Adam Smith in the
          Economics hall of fame for division of labor should knight Larry
          Kudlow for supply side laborless-demand margin by implausible-leases,
          profits, and standardized guarantee false/surrendered bid schemes."
          <br />
          <br />
          Why is a credit market instrument considered a liability, when it is
          money owned, held lending? Usually, loans are assets, and liabilities
          is money you owe, not have an non-expiry option to buy for a price you
          don't control.
          <br />
          <br />
          Homeless old people whom scapegoat delinquency for an entire life
          <br />
          Everyone has a clear mind, you just scapegoat
          <br />
          Cocaine is good for everyone; DUI for weed is proven to be superfluous
          police permit, same presentation as high, generally, and in accidents.
          <br />
          Inflation by material and variable-part labor sales of inventory and
          revenue of hours
          <br />
          Only in leases, (guaranteed NAICS max-royalties)
          <br />
          spoofable geohash
          <br />
          (Cash/debt)*hour;{space}
          <a href="https://commie.dev">$2t</a>
          {space}currency fungible checking for when $2.2t/yr tax $1.8t/yr debt
          spending not enough
          <h4>
            America needs help in organization, amortization and mediation, not
            OCD, messy hair, nor crime as a disability, nor{space}
            <a href="https://commie.dev">monetary-debits</a>
            {space}or inventory-offletting of foreign treasuries. Geohash/month
            world peace
          </h4>
          <h3>
            currency and raising rates to compel less lessing, suggest
            popliticians long inventory treasury currency only
          </h3>
          some kind of general accounting of hours by inventory
          <br />
          lessings are cash advances and all; Lenders loan for collateral,
          lessers loan for cash
          <br />
          <h4 ref={this.poverty}>
            Revenue by hour, sales by inventory, net premium by false pools
            expiring, duress, involuntary and third party donee beneficiary (to
            bid)
          </h4>
          <a href="https://www.oecd.org/pensions/insurance/globalinsurancemarkettrends.htm">
            Standardized guarantee schemes
          </a>
          , surrendered bid of{space}
          <a href="https://content.naic.org/sites/default/files/inline-files/2020-Annual-Health-Insurance-Industry-Analysis-Report.pdf">
            others
          </a>
          {space}as labor-borne,
          {width && <ReverseAmortize lastWidth={Math.min(600, width - 20)} />}
          just for superfluous torts, ascertained by estimate or neighborhood
          extrapolation, non-concurrentable good-will?
          <br />
          <br />
          Why is the SPM thrice the average expense? What about Savers and
          chorers?
          <br />
          <br />
          Sure, but only pennywise, that margin on kickbacks (seller) and
          lending is ascertainable by PCE minus CPI, employer contributions by
          standardized guarantee schemes - such is nearly the same as
          monetary-debit lendings. Hard all else to delineate average price into
          premium for debt in general, unless we start talking GDP/p with less
          credit as income -1913 amidst 3%/yr+ population, too. Crowding out is
          a lie! I’m structuring alternative finance contracts by NAICS
          designation as “collateral” instead, and (cash/debt)*income reverse
          amortization, so we all paid what we would have without average price
          that we all share (bookie/market operation is ask-first, then bid).
          Cancel will allow sellers to keep credit, from some, more laborless
          demand, let alone third party donee beneficiary and foreseeable force
          majeure, non concurrentable, debt is, in total. If debt payments on
          time, no harm no foul, yet extensions really asks for more of third
          parties to the contract necessarily, and in EULA that is
          ascertainably-tortious upon the contractor.
          <br />
          <br />
          Oligarchs big tech billionairs, Ron Johnson is a jackass. He wants
          common carrier for big platforms instead of by payments. Do not let
          whatever your definition of small be the threshold
          <br />
          <br />
          It’s not a boring jobs, I keep pretty busy for the corporate profit
          flaccid loss account over leasing science beyond NAICS max-royalties
          <br />
          <br />
          You can’t make the actually disabled work a job they have never done
          before, let alone specific proclivities against countervailing laws or
          even ethics - i've tried and don't want my copy to be given to a
          corporation. I was happy bartending, because I was able to deal in
          currency, not checking that is now NOT fungible for currency and
          treasury inventory/ not credit as income but royalty% and local NWP12
          drilling
          <h4>government, against their own interests</h4>
          Nick Carducci - BA in Political Science & Economics, Johns Hopkins
          University (Graduated 2015)34m
          <br />
          What is the best building society interest rate?
          <br />
          Structural interest rates are best by NAICS max-royalty share,
          otherwise you are imbuing laborless-demand by implausible use leases?
          <br />
          <br />
          Nick Carducci -
          <a href="https://2024nj.com/carducci">
            Candidate at U.S. Senate (2020–present)
          </a>
          <br />
          Are REITs a worthwhile investment in 2022 now that inflation and
          interest rates are rising?
          <br />
          Given my confidence in banning implausible use leases beyond 5
          storefronts and condominiums for ascertainable damages by removing
          imputation and capacity of renters to buy outright, and intent to do
          so deduced by said maximum, by unit, I would suggest not investing in
          REITs. However, as the federal reserve buys less bonds than necessary
          to suppress the $2t currency from asking for a higher coupon rate of
          $1.8t/yr debt spending, and $2.2t/yr tax, people rush to stocks
          generally, until the quantitative targeting resumes, of which I’m just
          as confident won’t happen, and instead we will reserve amortize all
          debts by (cash/debt)*income, moving to a NAICS max-royalty investing
          regime. Subsidies don't make more of something, they take input costs
          that all markets share. Free marketeers do not cause anywastewater,
          especially{space}
          <a href="https://magnate.company">prohibiting innovations</a>. “We
          understand that you wish to spend money that you don’t have,”
          moreover, it is stealing
          <br />
          <br />
          If nothing changes, a high interest rate prevents purchases outright
          and surrendered bid of others, and promotes renting, theoretically,
          and historically such index fund prices relative to others follows
          this suit.
          <br />
          <br />
          violent criminals don't need medication.
          <br />
          common sense approach of cats at night, particularly amongst
          democrats, why do you need to mediate to house homeless? This is
          Sharia Law, superfluous and beyond capacity of the defendant and the
          crime. if you have evidence of a crime to review, that is what the
          arrest is for, otherwise, NO ONE GETS BAIL. appeal fines and
          whistleblowers stand
          <h4>preventing commerce like Greeks</h4>
          Pro-hard-working-people-who-can-pay-or-has-a-skill-like-being-young,
          fees-and-leases-to-treasury, check int'l parcels before you blame
          illegals strapping fentanyl, ubi. I’m to the left of progressives,
          global ubi colonize past labor or colonize. wouldn't it be prudent to
          instead of stop borrowing by not buying necessary to target rates by
          natural ask capacity of $2t currency and $1.8/yr debt spending with
          $2.2t/yr tax, keep politicians' assets in{space}
          <a href="https://commie.dev">currency</a>?
          <br />
          <br />
          Mental health forced to take medication, without even biomedical proof
          of self-harm, let alone subjective preference being legal of
          non-tortuousness to others, just scapegoating delinquency of economic
          policy in implausible use leases, standardized guarantee schemes and
          surrendered bid of. forced castration, on a hunch? let alone not ever
          fitting for a crime when you can just jail.
          <br />
          <br />
          I was forced to take medication for a knee appointment and was
          attacked when I tried to elope, then they lied and said I kicked and
          punch. I had a clean shot at their ribs, but withheld
          <br />
          <br />
          savers do, not children will, pay for accrual over free rider
          immutable sewage police lawsuits by bonds and freerider mutable debt
          in private mostly. more coverage, less money
          (delusional-old-people-price-inelasticity). "match cash back on all
          credit cards, everyone wins!" A bizarre, rancor of rhetoric,
          investigated; public park rangers 20% fed lands; "eradication of
          poverty" the friend of poorness; monthly savings in lieu of greater
          savings. "money is cheap, 30yr fixed, what a mortgage to open up with,
          6 offers, with a backup" sounds like communist. borrowers are
          squatters/loiterers. "stock market doing well," is the bid meeting
          ask. you don't buy a house by third party beneficiary laundered. that
          is my house; won't give wrong answer to pass
          <br />
          <br />
          "Inflation is escalating quickly, it isn’t slowing down, your dollar
          is now 93 cents by the last year!" that is.
          <br />
          <br />
          "$85b/yr business," credit is not a business.
          <br />
          "Trumo got energy going, tarrifed for balance of trade from less
          efficient economy, not less industry, except the inefficiencies is
          because of debt." davewhiteforgovernor.com
          <br />
          <br />
          Article 1.8 is ocymoronic, unequal tax by compound and third party
          donee invocations.
          <h2>
            I am an expert in propaganda, Sean Spicer is pro Medicare funded by
            stocks over currency. He is treasonous and needs to be hung.
          </h2>
          "Psych is increasing faster than the suicide change-rate." Ben Carson.
          "We don't know the long term effects of these vaccines are going to
          be, nor if they stop disease at all, or just non-exclusive byproduct."
          Mental health concerns. cloth masks don't work. that's a FACT. omicron
          is low risk, another scientific FACT. Democrats want to keep control
          and government involved, if they were about the science they would
          measure themselves against metrics forecasted. Herd immunity is keep
          moving because they don't want it to end. It is based on public
          polling, not the science. WHO-standard is herd immunity, they don't
          want it to end, because it is good business for the left. Privatize
          insurance!"
          <br />
          <br />
          "Is/will the US healthcare system get better?"
          <br />I can make it better, and{space}
          <a href="https://www.cbo.gov/sites/default/files/111th-congress-2009-2010/costestimate/amendreconprop.pdf#page=14">
            CBO admits insurance is a net loss
          </a>
          :
          <br />
          <br />
          <div style={{ marginLeft: "5px", borderLeft: "3px white solid" }}>
            The reconciliation proposal and H.R. 3590 would maintain and put
            into effect a number of policies that might be difficult to sustain
            over a long period of time. Under current law, payment rates for
            physicians’ services in Medicare would be reduced by about 21
            percent in 2010 and then decline further in subsequent years; the
            proposal makes no changes to those provisions. At the same time, the
            legislation includes a number of provisions that would constrain
            payment rates for other providers of Medicare services. In
            particular, increases in payment rates for many providers would be
            held below the rate of inflation (in expectation of ongoing
            productivity improvements in the delivery of health care). The
            projected longer-term savings for the legislation also reflect an
            assumption that the Independent Payment Advisory Board established
            by H.R. 3590 would be fairly effective in reducing costs beyond the
            reductions that would be achieved by other aspects of the
            legislation.8
          </div>
          <br />
          <br />
          Insurance makes money for you on par as a casino does, but its outlay
          and claims are donee invoking, meaning another customer can bid for
          what you gave to the end producer on an expiring premium basis. The
          logistical-reason why Obamacare price-controls was found to save money
          is merely because insurance deals in hours, invoices, prescriptions
          and prior authorizations, far from a broker permitting a collective
          bargain of concurrentable units, not siphoning free rider mutable
          healthcare from government.
          <br />
          <br />
          Currently, 44% of $829.5b/yr Medicare/Medicaid is funded by stock
          sales (“general revenue” asset sales), part of the total $2.7t/yr
          “healthcare” by invoice, prescriptions, expiring premiums and stock
          sales’ laborless-demand, providing healthcare at the surrendered
          rights of third party donee beneficiaries.
          <br />
          <br />
          Rather than rent-seek/gentrify with government tax and free rider
          immutable made mutable by mixing budget of, and general revenues of,
          other industries, with debt.
          <br />
          <br />
          just, don’t. Starve the producers and don’t tell them when disposable
          income increases.
        </div>
        <div
          style={{
            backgroundColor: "rgb(205,205,205)",
            fontFamily: "'Nunito', sans-serif",
            overflow: "hidden",
            //height: !this.state.journal ? "0px" : "",
            //position: !this.state.journal ? "fixed" : "relative",
            width: "100%",

            textAlign: "center"
          }}
        >
          <div
            style={{
              width: "calc(100% - 50px)",
              zIndex: 3,
              position: "absolute"
            }}
          >
            <a
              href="https://squatcommune.com"
              style={{
                textDecoration: "none",
                right: "170px",

                fontWeight: "bolder",
                position: "fixed",
                fontSize: "8px"
              }}
            >
              Gift cards (FTC)
            </a>
            <a
              href="https://billbiden.org"
              style={{
                textDecoration: "none",
                right: "90px",

                fontWeight: "bolder",
                position: "fixed",
                fontSize: "8px"
              }}
            >
              Class Action Suit
            </a>
            <a
              href="https://micro-theory.com"
              style={{
                textDecoration: "none",
                right: "40px",

                fontWeight: "bolder",
                position: "fixed",
                fontSize: "8px"
              }}
            >
              Vain & co.
            </a>
            <div
              style={{
                transform: "rotate(90deg)",
                backgroundColor: "rgb(205,205,205)",
                position: "fixed",
                width: "40px",
                display:
                  this.state.landedPresentation && this.state.openMenu
                    ? "block"
                    : "none",
                left: "0px",
                top: "0px"
              }}
            >
              <div
                onClick={() => this.setState({ openMenu: false })}
                style={{
                  transform: "scale(-1,-1)",
                  position: "relative",
                  float: "left",
                  textAlign: "left",
                  padding: "4px 10px",
                  maxHeight: "40px",
                  height: "40px",
                  color: "black",
                  border: "2px blue solid",
                  width: "max-content",
                  transition: ".3s ease-out"
                }}
              >
                {this.state.inSection /*.split(" ").map((x) => `${x}\n`)*/}
              </div>
            </div>
            <div
              onClick={() =>
                this.setState({
                  openMenu: !this.state.openMenu,
                  offScroll: !this.state.offScroll
                })
              }
              style={{
                color: "rgb(200,200,200)",
                width:
                  !this.state.top && this.state.scrolling
                    ? "min-content"
                    : "max-content",
                fontSize: "9px",
                position: "fixed",
                padding: "4px 10px",
                height:
                  this.state.inSection !== "story" && this.state.openMenu
                    ? "min-content"
                    : this.state.top || !this.state.scrolling
                    ? "56px"
                    : "60px",
                right: "0px",
                top: "0px",
                backgroundColor: `rgba(5,5,5,${this.state.top ? 0.5 : 1})`
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  width: this.state.openMenu
                    ? ""
                    : !this.state.top && this.state.scrolling
                    ? "min-content"
                    : "max-content",
                  transition: ".3s ease-out"
                }}
              >
                EXPLICIT
              </span>
              <span
                aria-label="skull & bones"
                role="img"
                style={{
                  padding: "4px",
                  display: this.state.openMenu ? "none" : "flex",
                  opacity: this.state.top ? 0 : 1,
                  transition: ".3s ease-out"
                }}
              >
                ☠️
              </span>
              {!this.state.openMenu &&
                this.state.inSection
                  .replace("-", " ")
                  .split(" ")
                  .map((x) => (
                    <span
                      key={x}
                      style={{ width: "max-content", position: "relative" }}
                    >
                      {x.length < 5 ? x : x.substring(0, 5)}
                    </span>
                  ))}
              {[
                "New",
                "Rentier-Colonialism",
                "Abuse of Power",
                "War on Poverty",
                "Gun Safety",
                "False Advert in House",
                "Polling Fraud",
                "Immigration",
                "Ownership Fraud",
                "False Advert in Senate",
                "Insurance Fraud",
                "Virus",
                "Monopoly",
                "Education",
                "Null Hypothesis",
                "Securities Fraud",
                "Systemic Inequality",
                "Mission",
                "Early Comms",
                "Illegal Gov Decrees",
                "close"
              ].map((x) => (
                <div
                  key={x}
                  style={{
                    position: "relative",
                    color: this.state.inSection === x ? "rgb(255,250,235)" : "",
                    opacity:
                      this.state.inSection !== "story" && this.state.openMenu
                        ? 1
                        : 0,
                    transition: ".3s ease-in",
                    margin: "2px"
                  }}
                >
                  {x !== "close" ? (
                    <span
                      style={{
                        width: this.state.openMenu
                          ? ""
                          : !this.state.top && this.state.scrolling
                          ? "min-content"
                          : "",
                        transition: ".3s ease-in",
                        fontSize:
                          this.state.inSection !== "story" &&
                          this.state.openMenu
                            ? this.state.inSection === x
                              ? "20px"
                              : "12px"
                            : "0px"
                      }}
                    >
                      {x}
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "20px"
                      }}
                    >
                      &times;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <a
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://carducci.us"
          >
            carducci.us
          </a>
          <a
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://3under2.us"
          >
            3under2.us
          </a>
          <a
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "max-content",
              padding: "0px 10px",
              fontSize: "20px",
              fontFamily: "'Pacifico', sans-serif",
              color: "rgb(230,230,255)",
              backgroundColor: "rgb(32, 22, 11)"
            }}
            href="https://truncatedsalestax.com"
          >
            truncatedsalestax.com
          </a>
          <div>
            elasticity in the same market.
            <br />
            voters are not identical coins;{/* Cnn jason sekerovic*/}
            <br />
            poor=pov/social.
            <br />
            38% detest & eligible voters, occupy never represented reverse
            debt:cash, cancel forbidden by past demand and bailout by labor,
            <br />
            voluntary more random than random, 1/11 down payment to gdp.
            <br />
            Public park rangers 20% fed lands. wrong answer to pass,
            <br />
            epiologial cohort size, not age-standardized excess deaths
            <br />
            600k/200k jobs/pop-growth a month is the opposite of productivity
            (of hours).
          </div>
          1/3 public/private gentrification beyond article 4
          receipt-method/outlay-scope and free rider immutable reason,
          bipartisans collude rcv 50% over plural majority, if not simple
          <br />
          get bankers out of home contractor,&nbsp;
          <a href="https://teapharmacy.party/drugs">cops out of pharma</a>, and
          insurers out of surgery. don't give me that free market crock, we
          assume infinite producers to find perfect equillibrium of
          non-laborless-demand.
          <br />
          <br />
          Productivity is price deflation per hour. In no way is deflation to
          fair value, bad, nor is pure technological advancement price
          deflation.
          <br />
          <br />
          "fever is leading sign of covid (but that is 5% of pneumonia,
          influenza covid)," exogen
          <br />
          <br />
          "If you kept money in a savings account, that would be a foolish place
          to keep it. Interest rates on bank accounts are far lower than the
          return you can make by investing it wisely." What is we change
          economic policy? Downvote
          <br />
          <br />
          “To be red-pilled is to ask: 'am I better to get the virion, than the
          vaccine?'” - Carl Higbie
          <br />
          Save facers like the null hypothesis
          <br />
          <br />
          <Cable
            style={{
              width: "100%"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1Wh2pEDuxdSm-2Rwvr5B30QJTEYigPg3l/preview"
            }
            float="left"
            title="National Report (Newsmax) - NM Mike Murphy / Besty Mc."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “We have a republican form of government, where we have
          representatives,” but not insofar that they can infringe upon natural
          human rights, said in Tranquil society and voluntary trade.
          <br />
          <br />
          "Because we are vaccinated, there will no longer be a pandemic."
          <h2>Excess deaths 500k</h2>
          <Cable
            style={{
              width: "100%"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1SzQo5COx6e1jTHJChY-nD9hWw5vDcgtu/preview"
            }
            float="left"
            title="National Report (Newsmax) - Dr. Sophia Deben, Surgeon in Miami, terrorist"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          We haven’t seen this high of a death rate over our lifetimes, because
          now there are a lot of old age deaths! WWII lull in baby-making and
          immigrant baby-making fills in the 2010-2020 excess deaths level,
          boomers called boomers because year over year change is 1.2m/yr+
          2020-2030 80+
          <br />
          <br />
          "It would inconveniece quite a few people." I don't want excess
          antibodies nor fetal cell lines, this duress without jury-science is
          not inconvenient. Exhibit virion injecting DNA into cell.
          <br />
          <br />
          Rich as defined by items that are of utility to others or good will
          value of last trade is not necessarily of utility to you. Most if not
          all wealth today is relative. You cannot make everyone rich, but you
          can by making everyone more equal, based on labor-based-demand, not
          rental-income. This would produce productivity that makes life easier,
          making everyone rich in that sense.
          <br />
          Tech advancement is going backwards. We work 10x more than the boomer
          generation did today (10x hours per average-home-sold, c1970).&nbsp;
          <a href="https://nationalsecuritycasino.com/gdp">GDP/p 1800–1913</a>
          &nbsp; was oscillating from the repo-cycle but not exponentially
          rising. Finance is the isolated reason, therefore, that price
          deflation per hour over time lowers, by lender, landlord, insurer work
          deficit, not population/unscarcity. Economists would easily arrive at
          this conclusion if they had homes, equities, bonds and
          intermediate-labor in inflation, gini and poverty.
          <br />
          <br />
          <Cable
            style={{
              width: "100%"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1eSuR04qtn_yuvryCZbvpmooqJRZ_Xctc/preview"
            }
            float="right"
            title="National Report (Newsmax) - Joe Gamali National VP Fraternal Order of Police"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Bail reform has been an unmitigated disaster everywhere it has been
          tried.”
          <br />
          If you have no evidence from the arresting officer, no bail nor jail.
          Also, white collar crime justice is malfeasant, I will have to take
          the law into my own hands.
          <br />
          "Fund them properly," not bonded net loss but truncated sales tax by
          those arrested, while customers.
          <br />
          <br />
          There is no such thing as a medical authority, why are PCR tests a
          uspto issue? Has nothing to do with brought forward demand by free
          rider mutable tax that is pure inflation. Why do tests need to be
          produced by a website? Just take the risk as a private investor like
          the rest of us. Stop the r&d monopsony trust-building. "Acknowledged
          the pain that they are feeling," for asymptomatic tests? Population
          life expectancy ago grew by 1.2 million people, holy shit. 500
          thousand in U.S. and 5 million worldwide is insignificant jeff zelani,
          stop terrorizing. You are a destabilizing force, a national security
          threat.
          <br />
          “The whole world no one saw it coming,” 2015 Census Bureau projected
          this “pandemic.”
          <br />
          Deadly virus only comes out, it’s prevalence 5% of symptomatic cases
          is not all-cause, “injecting DNA in an instant,” is made up.
          <br />
          <br />
          Delta is bacterial byproduct, it didn’t kill anyone. Injective dna
          into cell is made up.
          <br />
          All you have to do is (cash/debt)*income every year back… what do you
          mean never recover financially less people. That doesn’t matter,
          labor-competition is perfectly elastic.
          <br />
          <br />
          Cash bond war arms
          <br />
          If bonds fund the MIC, beyond Article 4 scope, isn’t that a war crime?
          <br />
          war bonds are cheating at war, no one wants to pay without your
          counterfeit, Savers only can fight with their bare hands and trde
          their earnings. Bond index funds, gentrification free rider mutable
          tax is pure inflation, can spend our share split!
          <br />
          <br />
          Beth Van Duyne with Rob Schmitt: "Finish the wall after money had
          already been allocated for it," no article 4 is tax only, so truncated
          sales tax after.
          <h2>
            Bond index funds would take up arms to stop cash v bonds over parks;
            Only way out is (cash/debt)*income every year back is middle ground
          </h2>
          Good teachers invest in kids’ 1-level-board max-profit-royalty, not
          payday loans general income nor compounding interest of third party
          donee surrendered freedom (EULA)
          <br />
          <br />
          You aren’t counting all cases, just non-exclusive byproduct. Stop
          trusting dr saveface. testing asymptomatic 5% of all-prevalence is
          retarded dr schafner and smerconish. ms matches paralytic polio and
          sewage lifetime portality is correlated since 1775. YOU DID NOTHING
          EXCEPT FRAUD, you literally made up, "virion injecting DNA in cell."
          what makes it not eligible to all, with side-effects nor ingredient
          list, for what? People have a right to try WITH INGREDIENT LIST
          without doctor cop script release prohibiting trade and causing
          poverty. Shove the nobel prize up your ass. Severity as difference
          between bacterial and viral is not a different method, so it cannot be
          multiple exclusive cause, let alone all-prevalence by byproduct.
          Evolution goes from bacteria={">"}cell={">"}virion, never has the
          virion infected a cell: it only comes out. Antibodies stop cell debris
          from blood clotting, and you are only counting 5% of actual all-cause
          cases.
          <br />
          <br />
          Good doctors with great training, following eachother
          <br />
          Nutrients that prevent covid from taking over the human body, how have
          we survived all these years? I used common sense. Ms is paralytic
          polio and lifetime mortality is lessening from sewage and nutrition
          since 1775
          <h2>
            Grades attendance stat actually learning subjects, like GDP and
            prices*hours is productivity. FUCK OFF; "Take your pills," Ablest is
            ok; need a xanax doc, I'm long - put the pfizer in the water - jail
            profits when bonds not consumers before arrest truncated sales tax
            2025 against menendez 10x more work and 20x/millennial
            rental-income, 1.2m/yr+, 55m/yr+ boomers WORLDWIDE work so much!
            People that follow "unamortized savings," by verifiably-all-cause
            (not-just-prevalence) inflation is not population as gdp/p nearly
            constant ocillation 1800-1913, but finance. Levin Oreilly and Valdes
            are basket-cases, and need to be locked up for competing with
            consumers. THEY ARE RETARDED. TO SAY DISABLED ARE SELF HARMERS IS
            RETARDED, ETYMOLOGICALLY, LEGALLY and PRODUCTIVELY.I WILL NOT SIGN
            FOR NON COMPETE NOR CREDIT/EXPIRY/ESTIMATE AS INCOME!
          </h2>
          Jack sesh.show (Katie Halper,Youtube) - "It is not that insulin
          doesn't work, it is that they are profiting unfairly that makes it not
          work."&nbsp;
          <a href="https://humanharvest.info">Healthcare Banking</a>
          <br />
          <br />
          JustTheNews.com: "'Yeah, politicians should be able to make money
          handsomely,' lifelong public service somehow make multimillion gains,"
          by 20 years to double homes but that NOT included in poverty metrics.
          OR YOU CAN FORCE ABSTAIN ANY HOLDINGS financial disclosure form
          disparity of uuid anon over pattern day trading competing with
          consumers, as well as 2 week execution public discovery release.
          <br />
          <br />
          Nationalizing & rent-seeking prek is not socialist. watching
          eachothers kids to increase hours worked is not&nbsp;
          <a href="https://bankingisnot.biz">per hour price deflation</a>
          &nbsp;productive.
          <br />
          <br />
          “Universal pre k, goes to climate, help 300k kids and can slip into
          poverty if those payments towards bills, dry up,” reverse don’t cancel
          nor bailout, Democrat pig. JustTheNews.com: “Cooler heads will
          prevail, and they will make a deal.”
          <br />
          Hold dems responsible for what they elected, to achieving the
          impossible to get things done, thru reconciliation, not a rift, but a
          rapture against not increasing the deficit beyond 40% debt spending,
          if we itemize some parts and don’t include others, like we get away
          with in treasury share accounting.
          <br />
          <br />
          Katie Halper: “What is Elizabeth Warren saying? Where has she been.”
          Matt Bruenig: “I think she was talking about the debt, let’s see what
          she is Tweetingggahh.” Third Guy (Jack sesh.show): “Well, they were
          looking at restarting the debt.&nbsp;
          <span role="img" aria-label="smirk">
            😏
          </span>
          ”
          <br />
          “Her feed is '[Expand the courts, student debt, pass build back
          better],' that’s pretty much it.” Matt Bruenig
          <br />
          <br />
          Faux conservatives: "if you subsidize childcare, you get more of it.
          Worked hard to save your whole life in bond value." That is made up
          shit. If you put up dollar v bonds in court over parks, who the fuck
          do you think wins? "Fix some roads and bridges," why can't you use
          electric tolls retard? Collateralized gets serviced, uncollateralized
          gets bailed out or kept down payments impossibly implausibly deniable.
          "More than 700k americans dead because of covid." They died ON TIME!
          fucking idiot. “Wall st has no confidence in Biden, when BBB isn’t
          funded, stocks go down. I don't think anyone is in charge of the
          government, I don't think anyone is in charge of the company.”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1maCIn-XcjVOGRl8NGhtMP3fbaK-AJdW6/preview"
            }
            float="right"
            title="National Report (Newsmax) - Daniel Linville on Manchin and debt"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Everyone wants to cancel debt, but no one wants to cancel the national
          debt. Roads are free rider mutable, but why does expats need 40% debt
          service?
          <h1>
            Bill O'Reilly: "nationalism is socialism" takes away urge to work,
            we work 10x more than you did!
            <br />
            <span style={{ fontSize: "18px" }}>
              bernie sanders isnt socialist, he wants to nationalize bridge
              tolls and broadband network fees. he doesn't want to stand up to
              insurance companies. he wants to trust build
            </span>
          </h1>
          Rich Zeoli, of Mark Levin ilk: “Machin could have destroyed interests
          of WV,” like it is ever to a precincts benefit to go against another
          human’s, comparative advantage tech advantage is retarded if you
          enslave others, isn’t it not matter if it really is damaging?
          Scientific jury is not mob-rule, it is consensus. So no candidate, no
          vote means default, “no.” "The virus likes to keep its host alive,"
          but where does the first one come from, are you a Creationist?
          <br />
          <br />
          Put a virion in front of an industry variable multiple of 11/12
          without any Dr. Savefaces & they'll conclude it is non-exclusive
          byproduct of a bacterial infection/not the killer prevalent cause.
          Vaccines are just a front-ran racket, Chris Reeves foundation counts
          the same prevalence of paralytic polio as ms, and 1775 sewage started
          becoming cool. Only 5% of suspected cases and less than expected total
          deaths from population growth alone. "
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
            Virion injects DNA into cell
          </a>
          ," is made up.
          <br />
          <br />
          The inflation that everyone is dealing with, is from share split, no
          doubt about it. Even when $4t/yr fed spend 40% debt spend only is $2t
          currencyComponentOfM1? Is 1/3 of total debt? Nothing to do with work
          deficit of lenders landlords of insurers? GDP/p before 1913 used to be
          nearly constant, so obviously inflation is from finance, as
          labor-competition is elastic for population/scarcity.
          <br />
          <br />
          "Could have easily helped his community with the money," says some
          conservative who thinks money adds ANYTHING except bails our finance.
          we can literally reverse debt instead (cash/debt)*income every year
          back. WHAT A FUCKING RETARD. "Trump cared about the greater good of
          mankind, not the hedge funds," he spent more than the rest of them!
          Bill "unamortized savings" O'Reilly: "They are poor they need
          government services,” EVERY FREE RIDER MUTABLE SERVICE ISN’T HELPED BY
          GOVERNMENT. fucking 'conservatives' will be quick to sellout
          principles if their lender work deficit jives. "The national debt is
          unsustainable," but 2x that in private isn't? Borrowers loiter on the
          third party donee claimable beneficiary freedoms surrendered, force
          majeure implausible deniability.
          <br />
          <br />
          <Cable
            style={{
              height: "240px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1sKFyx2kFFyl52J46w-8CKBNPIPf6nQrI/preview"
            }
            float="left"
            title="Chris Salcedo (Newsmax) - slander and propoganda, count population growth for significance, retard"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "More have died of china virus under Biden than Trump, not per time
          not per population size. We are seeing replicating and infection
          quickly, infection is upper resperatory infection, not deep within the
          lungs that caused deaths and hospitalizations. I admitted 3 people
          with 3 jabs, they cannot leave. Now they are doing well, they went
          home. We are watching them. If it is mild, at least have some
          antibodies. 50% isolates are omicron, 1.7% when hospitalized. Viruses
          mutate," or do you just test for what you would like to find? There
          are hundred of thousands, and coronavirus is only 5% of PIC
          hospitalizations. "He is not attacking the virus but the zmericans and
          citizens patients, more paternally patronize patients, more they
          comply with the Dr. Saveface. More infectious, less virulent, less to
          do with vaccinations. Most hospitalized for the omicron are in
          fully-vaccinated people."
          <br />
          <br />
          White House: "Unvaccinated are looking at a severe winter of illness
          and death, for yourselves for your families. The virion is an
          evolutionary trait to do so, it injects its DNA into the cell in an
          instant."
          <h2>
            "The data does not show that omicron is deadly, but delta D614G
            chinavirus is."
          </h2>
          "CDC says, 'unvaccinated have been infected,' a vaccine that is
          clearly facing shortcomings." Prevalence does not cause/transmission,
          make. "Little over 98% who catch it, survive." “Are they sworn to
          silence of violent forced unneccesary roughness entry as well? Well ok
          they bust into your home and take electronics, they don't tell you
          why, they make up violence about you, so what? Did you get in contact
          with your Senator?"
          <br />
          <br />
          "Smash and grabs, 40 year high murder rates," because of finance.
          trade, don't spend. 1/3 public/private
          <h2>crack no scripts currency; state-victimized work deficit</h2>
          "Great guy, high bail, jail," wall st pharma cop vs wall st pharma
          cop, is the plural minorities. pay cops by those they arrest, with
          evidence from arresting officer or no bail nor jail.
          <br />
          <br />
          If you don’t have evidence, then let them go or no bail. If you do you
          can always review it later
          <h3>
            Out of 170m drug-free prejudice employees, half 2.8m continuing
            claims, most disability, we work 10x as much as boomers did
          </h3>
          Are you conservative? You want to nationalize bridge tolls and
          broadband network fees instead of forcing companies to get led out,
          something that a industry variant jury would decide certainly 11/12
          <h2>
            population growth caused the pandemic, life expectancy ago, alone.
            you think marijuana causes accidents because most people smoke.
          </h2>
          Bo Snerdly killed Rush Limbaugh: "We can't describe how all this came
          to be, ultimately, questions of life are so vast they go beyond our
          understanding. Deaths came unexpectedly from covid, wen you are
          getting a check but not working for it it does something to your
          psyche too. ...How about the people that you lost, for how long they
          were in your life."
          <h2>
            logically, bacteria evolved into cell with nucleus, and virion comes
            out when infected with bacteria.
          </h2>
          <Cable
            style={{
              height: "600px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1pVrqOnIpwQpSRkXzNOmRn53mVL5fFz4e/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - "
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Parental-Gerontocracy, useless price-inelasticity for financial
          bailout of spending, 1/3 public/private, not trade, trust-building
          like bbb ppp existing contractors: "ccc 1.6 1.6 for something else,
          manchin would have signed off." Kilmead responds to his guest, "Right,
          the biggest mistake he made is not having the votes in the Senate."
          "Come over to Republicans and then trump will get credit for the
          majority. At least an independent that caususes with the Republicans."
          <br />
          <br />
          $2.5t social welfare spending isn't socialist. socialist puts labor
          above bureaucracy
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1Eiu-ZvgSKKFkZjAKbnoNC5VhUVjk7DWq/preview"
            }
            float="right"
            title="Ric Grenell on population growth, excess deaths, and China"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “If you have natural immunity, you shouldn’t even take the vaccine,
          I’ve had a saveface doctor say just that.”
          <br />
          <br />
          We have to make sure the threat is not credible, so we make up that he
          kicked and punched trying to elope from an faux orthopedic surgeon
          whom heard rollover-insurance and locked him up for 13 days in Carrier
          <h2>
            no-scripts, open-source licensure, ban invoices. you don't have to
            gentrify, you aren't socialist. you want to lower poverty to make
            poorness richer.
          </h2>
          "Take on the drug companies to lower the costs of prescription drugs.
          <br />
          Elderly wanted to stay home, forced into nursing homes.
          <br />
          Medicare..."
          <br />
          <br />
          "A woman impeded an arrest.
          <br />
          $25m to victimize small businesses," and $1m in acting wages. that is
          third party donee beneficiary claimable and surrendering of anothers'
          rights.. I could kill you for that if the courts do nothing.
          <br />
          <br />
          Taxes will continued to have to pay for it, like poverty will only be
          saved for one month’s expenses. Just like Mark Levin (Republican,
          Libertarian) says you have “savings,” unamortized but in reality a net
          loss for useless price inelasticity of bid-to-ask.
          <h2>no surrender anothers' freedom</h2>
          REPUBLICANS KNOW THAT A DEFAULT WOULD BE A “DISASTER” – BUT THEY ARE
          “UNITED IN OPPOSITION TO RAISING THE DEBT CEILING”
          <br />
          <TwitterTweetEmbed
            style={{
              width: "300px",
              float: "right"
            }}
            key="1411470492834439171"
            tweetId="1411470492834439171"
          />
          The thing is, it wouldn't be a disaster to reverse the debt, I have
          designed an economy for government to symbiotically to work with the
          economy, on a per hour productivity (price-deflation) microeconomic
          basis.
          <h2>
            parental gerontocracy: lender landlord insurer work deficit, public
            and private
          </h2>
          Kilmeade: "family climate immigration. Print up some cash if we want
          to, do something that we need." Only need for cash is made by third
          party donee beneficiary claimable.
          <br />
          Why is Joe Manchin trying to hurt this country by getting in the way
          of good economic policies?
          <br />
          "$2.9t taxes real and harmful."
          <br />
          Build Back Better is measured as a good thing only because watching
          eachothers’ kids boons the jobs numbers, and poverty only includes
          materials, but not the wealth gap from bonds, homes, equities and
          corporate profits deriding intermediate-labor. If we cared for the
          most bang for an hour of work, we would ban that which the bipartisans
          wish to pay off, that is invoices and expiring-claims, on third party
          donee beneficiary claimables.
          <br />
          (Poverty/equality)=poorness, including assets; we aren’t serfs nor
          employables, outlay corporate profits, (cash/debt)*income every year
          back, ban non-rollover insurance & cap rent at 5 units or 30 days, not
          price! M4a used to mean invoices are theft and no-scripts, now it just
          means doctors get paid by bond-index-funds’ work deficit. Now
          bipartisans are nationalizing bridge tolls and broadband network fees.
          Normal spending is 1/4 1/4 1/4 insurance-premium pentagon pensions,
          10% debt service, 40% debt spending, $4t/yr (2010–2020) producing $2t
          CurrencyComponentOfM1 checking. Go figure!
          <h2>
            nationalizing bridge tolls and broadband network fees, free rider
            mutable monopsony beyond article 4 and useless price-inelasticity of
            bid-to-ask
          </h2>
          Goodwin: “Joe Biden promised he would work with Manchin, but the
          Democrats outsourced to Progressives.” What free rider mutable
          contractor beyond article4 scope do you want paid, market-communist?
          Kilmeade: “This is no way thru the pandemic, cannot spend anymore.”
          What bridge tolls and broadband network fees do you want to
          nationalize? “Now they are starving after Afghanistan taken over by
          terrorists and we don’t deal with them. ...Won’t even ask about the
          China virus that is poisoning the world, again.”
          <h2>deaths were lower than expected from population growth alone</h2>
          Debbie Dingle: "We have to preserve performance while we move to
          energy, upkeep-able rent seekable charging stations, without
          customers. Childcare monopsony useless bid-to-ask instead of banning
          invoices, "lowering prescription drugs" instead of banning
          prescriptions for&nbsp;
          <a href="https://teapharmacy.party">pharmacy currency</a>, all grows
          the wealth gap, that in which inflation nor poverty accounts for,
          causing a great work deficit; anyone going to say global climate
          change isnt real,&nbsp;
          <a href="https://magnate.company">see exteme weather</a>, ice
          glaciers? Work together to get something done, find common ground,
          problems we are addressing, need to come together on.{" "}
          {/*smaller groups test work with scientists."*/}
          <br />
          <br />
          Truncated sales tax weens cops off bonds so they get paid by those
          they arrest.
          <br />
          <br />
          anyone who doesn't support immediate immigration is a union&nbsp;
          <a href="https://nationalsecuritycasino.com/trump">retard/gimp</a>
          &nbsp;"patriotic and anti-americanism turned off latinos in drove.
          biden's build back bancruptcy bill."
          <h1>
            1/4 1/4 1/4 premium pentagon pensions 10% debt-service, 40% njta,
            40% debt-spending, 50% nj, 1/3 public/private: fighting fire with
            fire, %4t/yr 2010-2020 fed spend, how only $2t currencyComponentOfM1
          </h1>
          <Cable
            style={{
              height: "250px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/130cAu9SFO_c01K5eU8TmxhOUfRa7Kx_w/preview"
            }
            float="right"
            title="war bonds - doing all you can, brother?"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Dick Morris, advisor to Clinton and Trump: “Unemployment, crash, falls
          apart. …inflation weren’t happening until Biden introduced it. …can’t
          make gold and silver nor park deeds, G-d did that.”
          <br />
          <br />
          “All come to defend the nation attacked,” is as stupid as open-carry,
          per behavioral economics and threats, albeit justified, can
          incorrectly-countervail safe-spaces. “To lower blood pressure, one way
          is to take medication,” or work out! Fucking troll
          <br />
          <br />
          "5m-250k, 3m peasant farmers starve to death. ...USSR-free-enterprise
          was and what Putin wants to be." If that is what happened in excess,
          population growth calls for 1m/yr, and 3m is 150% that estimate of
          excess, year to year BASIS. Just as expected, first with 1.2m/yr+
          covid in U.S., 505m/yr+ in worldwide, and 15m/5yr+ in Great Leap
          Forward., and&nbsp;
          <a href="https://www.christopherreeve.org/living-with-paralysis/stats-about-paralysis">
            2.5m
          </a>
          /2/38 accute flaccid paralysis in&nbsp;
          <a href="https://www.chop.edu/news/feature-article-flashback-parenting-and-summer-1950s#%3A~%3Atext%3DFor%20parents%20of%20children">
            paralytic polio
          </a>
          <br />
          <br />
          Bernie Sanders, glass steagall/fdic/m4a==invoices-are-theft sellout:
          “Pay raise in inflation accounted for dollars. Maybe we will stand up
          for working families, elderly, children instead of the lobbyist, 40%
          childhood poverty is over, tell that to the struggling in WV and
          America. Pentagon gets 4x more than what whether lower cost of
          prescription Expand medicare to have dental and eyeglasses, I suspect,
          working families, I’ll pay for the damn poll, see what the people of
          WV feel. Equation is clean, one side billionaire pay nothing, climate,
          child poverty, prescription drugs, the other side, says we do. Pass
          infrastructure, and then we will get to bbb. Was that a mistake? We
          needed tandem for this reason, it’s we needed to keep duress together,
          pass bill to working class needs. Childcare paid family leave,
          environment program, biden agenda dead? Climate, protecting American
          democracy, denying color, disabilities, young people old people. What
          is terribly important is pass voting rights, states cannot deny people
          the right to vote. Trying to suppress by extreme gerrymandering. We
          need 50 votes to do that. How that is 1 person 1 vote, what he does
          would be a tragedy. Tell man chins of the world that we want a healthy
          climate, scientists say we have to act right now, to change our energy
          systems.&nbsp;
          <a href="https://qr.ae/pGzTNz">Cost of living adjustments</a>, is
          Biden doing enough to help? Younger workers earn less than older, and
          sending good paying jobs to Mexico. Representing people whom corporate
          CEOs don’t give people what they need.”&nbsp;
          <a href="https://nationalsecuritycasino.com/gdp">
            POVERTY/EQUALITY=POORNESS
          </a>
          , BERNIE WILL SOLVE POVERTY BECAUSE HE THINKS YOU ARE A DUMB SERF AND
          EMPLOYABLE FOREVER, YOUR INPUT COSTS ARE RENT/MATERIAL AND NEVER
          HOMES, EQUITIES, BONDS, NOR HOMES OUTRIGHT, RIGHT? child tax credit is
          parental-gerontocracy and public insurance is expiring claims still,
          no other way to have doctors on call. Lowering prices by price-fixing
          misappropriates labor equity from our (labor) propensity to spend such
          non-financial-earnings; lowering prices without unions, immediate
          immigration, open-source-licensure and no-script pharmacy demositary.
          <br />
          <br />
          Rudy: “Is it covid? Cannot get healthcare people, that might be from
          covid overreaction for miscounting expected deaths.” “We all want
          infrastructure help, bridges do need help, now there is a lot of other
          crap in there, you know what we are going to fund broadband, bridge
          repair, road repair.” Tax from outside market is pure inflation and
          monopsony. "Big picture, long term 2x/florida live here. Why do you
          think there is a&nbsp;
          <a href="https://qr.ae/pGzTNz">
            lag except in how long producers eat the cost
          </a>
          &nbsp;exclusively? Stop calling it long term, like we are meant to be
          serfs and employables forever People’s issues, the school voucher for
          property tax."
          <br />
          <br />
          Rita Cosby: “Need better free rider mutable nursing home system with
          expiring claims of stacked intermediate-labor for
          useless-price-inelasticity of bid-to-ask. Nursing home deaths, because
          of covid.”
          <br />
          <br />
          hate crimes are when there is no scapegoat
          <br />
          <br />
          Dermott Shae: "Decriminalization of alc, peeing & marijuana is now
          civil summons default." Car-smoking-marijuana is prevalence not cause!
          retards. Jails shouldn’t exist, except for murderers, third party
          donee beneficiary no surrender EULA white collar criminals, and
          closed-source FDA pharma currency script cops. Not per incarceration
          net loss bond profit swaths of lifers.&nbsp;
          <a href="https://qr.ae/pGzTgd">
            When you launder money it matter not what you spend on
          </a>
          . we can have a trade no spend economy, with industry various multiple
          of 11/12 jury for permits, desistation or convictions with arresting
          evidence, or no jail nor bail.
          {/*"If the default there is no one in jail"*/}
          <br />
          <br />
          Rob Carson (unvaxxed because of his heart's current condition): “To
          catch covid, traveled to NY. That’s right, I have it,” that just means
          you PRODUCED it. Antibodies act to stop viral debris blood clotting,
          and symptoms are a warning mechanism, but the&nbsp;
          <a href="https://qr.ae/pGzp1w">INFECTION</a>&nbsp;is from bacteria.
          <h2>
            FREE THE KIDS FROM JAKE TAPPER PARENTAL-GERONTOCRACY AND THE
            NATIONALIZED BIPARTISAN BRIDGE TOLLS/NETWORK FEES; TRUNCATED SALES
            TAX
          </h2>
          Ayanna Pressley: "disabled that make this democratic majority
          possible, cancel student debt (bailout uncollateralized), service
          collateral like Andrew Yang. (cash/debt)*income every year back would
          be too well mediated for force majeure implausible deniability
          repo-cycle-kept-down-payments.
          <br />
          Stop obstructing President’s agenda, that is the people’s. He got 1/3
          of the vote, counting non-voters as a vote, 'neither'"
          <br />
          <br />I got Republicans by the&nbsp;
          <a href="https://nationalsecuritycasino.com/trump">balls</a>.
          <br />
          I says, your racists
          <br />
          They says how are wes racists
          <br />
          And so I goes, immigration
          <br />
          Then they say, “we only want the good jobs and I say that is almost
          worst because they they will run thru the jobs plumber dishwasher; and
          go opes bankers, insurer, that’s us
          <h2>
            Mission to make sure everyone gets the coverage they deserve. An
            better. This is a solicitation for insurance
          </h2>
          Larry Kudlow says we, “actually have to pay this debt off!” as opposed
          to the rest. We have the Nile river of disparity between us Saver
          Party servicing and bailing with 40-50% debt spending FOR DECADES,
          $4t/yr (2010-2020), how mv1===mv2==GDP & $2t CurrencyComponentOfM1?
          56/40m normal 65+ now 75+ since 2015, 500k excess deaths, “requires
          cell to reproduce,” is no pandemic but non-exclusive byproduct warning
          mechanism of bacterial infection! Twice public share of absolute and
          $12k/year/p debt, $3k/year/p bond, $64/year/p new is private! Only way
          out is (cash/debt)*income every year back! On third party donee
          beneficiary force majeure implausible deniability grounds and
          repo-cycle kept down payments standing, granting trade no spending,
          that is expiring nor estimates, or surrendered as option to buy,
          without realization, concurrently of 1-level-board notwithstanding.
          <br />
          <br />
          “The only thing mortally-wounded is trumps election prospects.”
          <br />
          Dr oz: “Wuhan funding conspiracy ‘certified,’ viral induction
          inconclusive (debunked/confirmed) in HIV.”
          <br />
          <br />
          <Cable
            style={{
              width: "300px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/DN_OV_3PVHA"
            }
            float="right"
            title="CNN - Mary Trump with JAcosta on Census Projected Mortality, Non-Voter Turnout, and Doubt Trump Lost"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Mary Trump: "My (great-?)grandfather was a former NAZI, I know Donald
          bought into every single antisimetic trope out there. Reduce the
          amount of testing to lower spread accross the country, malignant
          personalities and lies. The fact that he keeps getting away with
          crimes, lying about elections, extraordinarily dire for future of the
          economy; put economy over the safety and health of american people,
          how distorted leader of GOP is today. How Donald looked so sick, red
          streaks in his eyes, hair was a mess, didn't want realease to be shown
          a loser, how twisted and weird is that? rather than the insurrection
          at the capital? If our system cannot respond to threat to future of
          american irrevocabable progress, and he didn't want to be called a
          loser, clear problems he has, massive trouble, how is he allowed to
          consider, that is not a matter of if the people consider it, it is a
          matter if a whole political party has to consider it."
          <br />
          <br />
          Dr. Peter Hotez: "Protections being vaccinated 21k triple last month,
          get vaxxed, boosted, tested for christmas gatherings, lining up at
          spot in urgest care, sense of urgency, need to know, potentially
          infect their loved-ones, new normal here in ny omicron picking up like
          the first wave, what we have to do, doesn't feel as gravitas as first
          being here." Gotta play it safe, no question about it. already
          expected another delta wave, 50% two doses, unvaccinated pile into
          hospoitals, 4-6 week lag from africa than UK, that is why so much
          social distruption with CHristmas, 3rd two doses of mRNA sporing
          growth from infection but ok for ICU admission. a 1/3 have gotten the
          booster, 70% infection reduction, but not hospitlization nor cause of
          death. healthcare workforce becoming sick can be retarded. two doses,
          need the booster. this isa 3 dose vaccine, been saying that. if you
          are infected and recovered you don't need to get vaccinated, that is
          not true. A lot of hospitalizations in the U.S. if child is not
          vaccinated. General public only asymptomatic or travel purposes, data
          is too low. two doses not enough, need third dose booster. omicron is
          transmissable, if we don't play it safe I don't see how we can
          continue the season."
          <h1>
            I'm not against innumerable-beyond-by-last-trade torts, just
            expiring claims insurer work deficit and state vic
          </h1>
          home equity line of credit made it possible, help a little, help a
          lot, dip into home equity for tuition! Everyone can bank at BethPage
          Federal Credit Union, we care about what you care about, no HELC fee
          for under $500k
          <br />
          <br />
          options to buy, sold, on estimates: consumer fraud act nj
          <br />
          Curtis Sliwa: "If everyone who said they voted for me did I would be
          sworn into office already, 1/5 even bothered to vote pulling my
          shorts, chain, or didn’t vote at all. Neck and Neck races turns out,
          but not like a full place of options, including an abstainer’s, “no”
          for the policy reign of the office
          <h2>
            disenfranchise children with schools, free rider immutable truncated
            sales tax only
          </h2>
          Elise Stefanik: "We have done our job as Republicans to show that jobs
          can double if we watch eachother' kids. Talk about inflation, from tax
          and spend being only 1/3 total with private debt, that impacts real
          americans with crumbling roads and inflrastructure, we can rent-seek
          and launder to bonds the bridge tolls and network fees, target-margins
          for microeconomic reasoning of free market self-regulation of perfect
          equillibrium of per hour price deflation from comparative advantage
          <br />
          <Cable
            style={{
              width: "100%",

              height: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/W-Vv1vysGzE"
            }
            float="right"
            title="Open Gov Foundation Hack4Congress"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          tech advancement of good products over blind jobs numbers with
          infinite producers be damned. These are true rising-stars, and
          standing up for hardworking every day , measured by credit as income
          instead of productivity per hour price deflation with open source
          utility. I am exciting, looking forward, to increase that number."
          <h2>What does Stephen Moore want for Christmas?</h2>
          "know what is in it after spend it, 72 hours, 2 weeks, public review."
          <br />
          <br />
          Rattle off for my 2025 Senate Run to take out Menendez who is not
          servicing collateralized debt and bailing out uncollateralized, or
          writing off forbidden past demand, I don’t know which cancel means.
          Cash:debt*income,
          <br />
          pharmacy depositary without scripts,
          <br />
          truncated sales tax sewage police lawsuits,
          <br />
          industry variant multiple of 11/12 jury,
          <br />
          1-level-board max-royalty contracts,
          <br />
          cap rent at units and days not prices,
          <br />
          no estimates for ability to sell options to buy, third party
          beneficiary donee claimable.
          <h1>
            This land is our land, in dollar v bond parks (20% of Tranquil and
            voluntary U.S.).
          </h1>
          "read by law U.S. code 302 in G-d we trust, Donald Trump save the
          country and the world. Tragedies of life like gambling and drug
          addiction, consequences of lifetime in Hell." Like the prejudice by
          employers? STFU BITCH. "Finance is not the cause of all the problems!
          actually, with trade but not spending, there wouldn't be any problems;
          price-elastic free rider mutable of 1/1. This isn't for people, it is
          paying off the donors and bonds, just like putting rentier-class
          pay-to-play lender landlord work deficit. Only contributions from
          people they represent. True for both parties, they are true to their
          donors everywhere, not constitutents."
          <h1>
            "Address quality of life by cops." Fuck off 'former intelligence
            public discoverable' Richard Steve Rogers, first why
          </h1>
          don't we ween you off bonds so you are paid by those you arrest, with
          evidence or no jail, never bail, character "evidence," nor
          hung-multiple of 11/12 industry various jury
          <br />
          <br />
          "'Immigration,' to enforce the law and protect the citizens of the
          United States, you sound like a Union douche Richard St. Paul
          <br />
          <br />
          "U.S. is an accountable nation to its people. Communism, at least
          coming from Russia, almost led to nuclear blows. You don't capitulate
          to dictatorial regimes that do not listen to their people. They are
          not liberal democracies, they work to support their own vision. Make
          NATO stand up against what is happening in Ukraine: it invaded the
          Czeck Republic and Poland, we can all see what they are doing here.
          What will the West do in response? Only G-d knows. Inflation, preying
          on the economy, will americans get the boom they so desparately need?"
          <h2>
            please include intermediate-labor, assets, homes and bonds in
            inflation, not just materials and labor
          </h2>
          “After peak inflation, 13% higher prices in assets. Downside presents
          opportunities to take revenues as income, not&nbsp;
          <a href="https://qr.ae/pGz7wX">
            price appreciate market concentration
          </a>
          &nbsp;in public versus private corporation and individual.”
          <br />
          <br />
          "Debt ceiling isn’t about spending it is about a statement from
          American Express that you, ‘need to pay.’" It is promising money of
          another at force majeure implausible deniability, third party benefii
          donee claimable no surrender in a standard EULA of that which you
          cannot surmise in reality. Simply (cash/debt)*income thru hisotry, cap
          rent at 5 units or 30 days not price for market liquidity, and make
          sure Claudia Tenney hangs herself!
          <br />
          <br />
          "Omicron is not sending people to the hospitals nor morgue; political
          science, not medical science. Just hurting our small business, with
          more we can do with monopclonal antibodies, social distancing, not
          people able to go to work because they have a medical or King James
          Bible reason to not take the vaccine, so it doesn't overflow
          hospitals." They haven't built more hospital beds since at least 1970,
          half life, population and 10x productivity price deflation per hour
          ago, not because of population because of labor competition, but
          because of finance, invoices, expirign claims, implausible landlord
          use and repo cycle kept down payments, or other implausibly deniable
          competing with consumers or force majeure intent.
          <br />
          <br />
          Don't want healthcare policy dictated from the oval office, scientist
          saveface nor business. Get a permit, try to prove a virion is an
          evolutionary trait if it, "requires cell to reproduce" to a jury of
          industry various multiple of 11/12, and it is not a non-exclusive
          warning mechanism of an all inclusive cause: bacterial-infection.
          <Cable
            style={{
              width: "100%",

              height: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1AhoiZt01HAtTbQbOGBqSMmIiUUFYRCSY/preview"
            }
            float="left"
            title="Saturday Agenda (Newsmax) - Joe Pinion on foreign relations and their means by finance"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            Russia, China and U.S are "invested" in eachother, war only happens
            because bonds, not 1-level-board max-royalty-profit and equities
            concurretable (full reserve depositary, rollover-insurance). "Begin
            to hold accountable, ensure the leadership we deserve."
          </h2>
          <h1>
            "It is going to be bad, anti-growth, more tax less of it." taxes
            outside market is pure-inflation, as is lender landlord insurer work
            deficit for no gain in good products, just busy-work
          </h1>
          Stephen Moore: "We have to kill government debt, but not private,
          albeit twice as much! Medicare cover more issues, or childcare issues
          for families. Immigration of working age, just sagged of its own
          weight. Saddles the next generation with trillions of debt, it gets
          harder. The Dems think the people are with them, center right
          patriotic reject 90% the left beleives in. Stong border and foreign
          relations, complete give up with Putin, we are lying down, 'you know
          what you are totally right, you can have Ukraine back.' In the
          Economist, 'What will America Fight For?' Not territory, but
          sovereignity of Ukraine, anti-free markets, colonialism and/or
          anti-finance, that is what Putin wants. What will the left fight nor?
          Climate Change, and miscounting ice cores for CO2 natural debinding as
          axis races the sun 41k years. They are nuts! Did anyone see coal
          consumption of 5%/yr+ coal burning and CO2 binding, please cleanup
          your foul atmosphere because it is affecting the rest of the world?
          The Defense and military motion now is to make it carbon neutral, not
          national defense, only carbon neutral matters."
          <h2>
            "It is going to be bad, anti-growth, more tax less of it. You can’t
            grow your way out of debt if you are taxing." You can’t surmount
            $12k/year/p debt, $3k/year/p bond, $64/year/p you fucking bitch liz
            peek. "Hoover & FDR lowered revenues while taxing more, yet the
            first two of Trump years tax-revenues were way up while lower
            corporate tax! Getting more in direct government benefits than
            paying in."
          </h2>
          "I have a supply side pooch too, *barks in agreement*, After Obama
          years we actually did have to pay it off, I was involved in that.
          lender landlord insurers are free loaders on third party donee
          beneficiary wind and solor carter subsidies, but instead the
          competition is so trust-built in gov, free market really works, ppp
          trust building is not the way to go!" "Well, what about government
          contractors and 10-40% debt service!"
          <h1>
            “It is an amazing product, measures by busy-work, it is not just a
            feel good product.”
          </h1>
          "Being on earth is hard enough." It doesn’t have to be, retard.
          <br />
          "I’m a risk taker and producer. Retail not inventory, looted products
          are still being paid for by target, and they won’t stop trying."
          <br />I am a contributor, you are a spender, not a trader, when credit
          is income while it is theft. Wait for consumers. 1-level-board
          max-royalty-contracts. "You do need cash and cash flow, to pay the
          dividend." 5 1.2 doesn't stop from taking care of your health with
          expiring claims false bid pools non-rollover insurance is a third
          party beneficiary donee claimable is a big beast to tame, so I am not
          too worried."
          <br />
          <br />
          Inventory with bifurcating markets didn’t lower car prices because
          unions and nationalism
          <br />
          <br />
          <Cable
            style={{
              width: "100%",

              height: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1P2-8zDKsXGuHJf5qtmNhvH5EQcceY6kE/preview"
            }
            float="left"
            title="America Right Now (Newsmax) - Tom Basile with Chuck Fleischmann of TN on FEMA front-running monopsony, expiring claim false bid pools and government gentrification"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          We fund no matter we will be here to help you. Can we not have
          delivery? Stop front-running on fraudulent basis
          <br />
          <br />
          <TwitterTweetEmbed
            style={{
              width: "300px",
              float: "left"
            }}
            key="1413909110140149768"
            tweetId="1413909110140149768"
          />
          <h2>
            I said population growth a life expectancy ago, but the only way to
            get the point across seems to be to say, “I projected this
            mortality.”
          </h2>
          "Nasty thing to economy and jobs story, crazy progressive caucus with
          close to 100 people I don’t think they are going to buy it, not
          progressive enough, will be against it." Mick Mulveyney responds,
          "Freedom caucus that I founded moving against its original principles.
          'Hope is a placeholder for future compromise,'” on lending compound or
          general income beyond 1-level-board max-royalty-contract. "50-50
          senate im deciding vote, that is good math, but with a 50-50 senate,
          every vote is the deciding vote."
          <br />
          <br />
          "Sacrifice the short run for the long run," is delusional. inflation
          should include assets, bonds, homes and intermediate-labor.
          <h2>
            you are holding it upsidedown: it is per hour price-deflation, not
            blind growth which is integrally population anyway, gdp/p isolates
            inflation.
          </h2>
          Brooke Rollins, think tank for pro growth trump acheivements and build
          for the future: "CBO is not a friend of conservatives, leftist, not
          radical, lower numbers with gov spending, unfair scoring of trump tax
          cuts, biden all out war over CBO on the numbers $3t $2.66t interest.
          Changes fabric of america and may never recover if this bill passes.
          Shine more light on the tax hike part of the bill."
          <br />
          "Anti-growth, -business, -worker, -family-wage, now focused on
          spending and inflation which is fine, but the tax thing is a
          disaster." Brooke responds, "You are a leader of everything. You are
          sort of a moral compass in the west wing, everyone adored you. The
          greatest economy in the U.S., maybe the world, 40% earners saw an
          increase of 50% of their net worth. These are people who were strapped
          with only government income. When you raise taxes the dream goes away.
          Inflation is why we are working 7 days a week 24 hours a day. …We have
          to stop this ‘deal.’" After you supported to nationalize bridge tolls
          and network fees, you call childcare helping the child? give the child
          the job. #FreeBritney
          <br />
          "If you tax something, you get less of it, if you subsidize, you get
          more of it." That goes against price-elasticity, you probably think
          credit is more than monopsony and loitering and implausibly deniable
          repo-cycle-kept-down-payments.
          <br />
          "Social issues, housing, immigration; national economic council runs
          through economic and trade stuff; then foreign policy; the only groups
          that can call inter-agency meetings. Mnuchin ran the treasury but it
          sort of had it's own operation.
          <hr />
          <br />
          "As it happens, my reverse mortgage loan was declined, and I am now
          living below the poverty level and struggling for survival. Are there
          any suggestions?"
          <br />
          <div
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "15px",
              padding: "10px",
              margin: "10px"
            }}
          >
            The only solution is a class one: (cash/debt)*income every year
            back. Compound and general income investment is subject to the
            impossibility doctrine, and force majeure of the repo-cycle kept
            down payments is implausibly deniable. We also need to enforce
            actualized market liquidity by capping rent at units or days, not
            price, for implausible landlord use grounds. Finally, we need to ban
            non-rollover-insurance for third party donee beneficiary grounds as
            well, as the expiring claims are false bid pools, laundered from the
            co-signers’ employers and customers. With these policies and
            truncated sales tax afterwards, for free-rider-immutable
            sewage-police-lawsuits thereafter, poverty (especially if accounting
            for assets, homes, bond and intermediate-labor, not just material,
            food, energy and rent) will not be the default, from the absence of
            a lender-landlord-insurer work deficit. Only groups that can call
            inter-agency meetings
          </div>
          Mark Pinklefeld and David Bahnsen: “Only REITs and MLP has dividends
          now.” Larry Kudlow: "I can't in good heart tell people to buy bonds."
          <br />
          "Buy dividends. If tighter credit markets because fed sort of has to
          take liquidity out of the market, and stock market inflation not going
          p/e but growing cash-flow. High p/e of FANG and tech is 40's, high for
          record earnings growth pulled forward by covid, market smarter than
          vaccines over the stupid pandemic. Musk to trade his equity, that will
          yeild 700k from tax revenues from his sales. $11b liquidity from
          market-maket market-communist spread, to exercise options. Musk
          started companies employes thousand of people, wouldn't it be more
          productive to open source with no jobs? Musk actually knows business,
          as he is loitering on borrowed intermediate-collateral. Can shut the
          door on competition." Competing with consumer behavior, even,
          'intermediate-supply,' is illegal.
          <h2>
            having no burden of religion, price, quality nor duress of minimal
            viable product, is conservative?
          </h2>
          <Cable
            style={{
              width: "100%",

              height: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1sF4f9OPlvAE6QCs1zXJeGedyoaUEn1lY/preview"
            }
            float="left"
            title="America Right Now (Newsmax) - Tom Basile on covid religion"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “We know the 96%+ efficiency rate for vaccines is waning.” you are
          counting non-exclusive byproduct, that doesn't make for an
          all-inclusive&nbsp;
          <a href="fda.gov/media/144245/download#page=42">cause</a>. The
          pandemic was projected anyway from population growth, and ms matches
          paralytic polio. Do you honestly beleive virion, if it is the cause of
          death, "requires cell to replicate," meaning it only comes out and it
          is therefore an evolutionary trait? No, it is&nbsp;
          <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
            bacterial-byproduct
          </a>
          , 'severity' is not a differential for vitro retrospective&nbsp;
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">analysis</a>.
          <br />
          <br />
          “I felt better after I tested negative,” terrorizes Kudlow with null
          hypothesis. “Every citizen gets tested 1 or 2 a month. Only citizen is
          in finance? They have a lender landlord insurer work deficit. 'Whoops
          more asymptomatic than expected,' so we wore masks to protect
          eachother, need asymptomatic testing. Best thing is to have
          stay-at-home-tests, then see to have Christmas parties.” Rob Redfield.
          “The virion only comes out, so it cannot be the cause of death.”
          <br />
          <br />
          "Biden is surrounded by doctrinaires; I am conservative, but need
          some, 'walking around sense.' Yeah, this only makes sense only to a
          point, but look at where you are, what you are trying to do, and why
          it would work in the real world. ...Understood how the economy works,
          didn’t want to&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=Gkvt">
            stunt its growth
          </a>
          . The&nbsp;
          <a href="https://nationalsecuritycasino.com/gdp">economy</a>
          &nbsp;slumped into a recession. Literally, 'choked in the crib,' that
          were imposed in Obama regulations.
          <br />
          'The only thing, big, should be government.' We are going to even up,
          not just with inflation, but stagflation that we knew in late 70’s,
          early 80’s Rohi Chopra, consumer protection, 'hates banks' and wants
          to overturn the FDIC, which is very good (that is glass Steagall in an
          institution, bonds aren’t savings. Dollar v bond park deeds)
          <br />
          Politicians need credible, competent views, not so far out of
          the&nbsp;
          <a href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963/">
            mainstream
          </a>
          , that the candidate wouldn’t understand why they would appoint the
          person. Understand appreciate system that makes American prosperity,
          agenda of the agencies they run. When investors have invested billions
          with somebody, and they have a 'fiduciary' responsibility, it effects
          what they say and do. They regulate to manipulate business to espouse
          interests of government. Exxon claiming green new deal. People can’t
          afford to not openly oppose it. Sometimes people come along but not
          often. A government in name only."
          <br />
          <br />
          “People are rejecting the Biden agenda.” Phil Graham: “Yea.”
          <br />
          "His&nbsp;
          <a href="https://nationalsecuritycasino.com/trump">
            immigration and pandemic
          </a>
          &nbsp;policies are in tatters;
          <br />
          Adjust to what the public wants, but not what the crazy woke left
          people want."
          <h2>I’m not doing this to learn from you but to criminalize you</h2>
          "Very few people whom you convince their policy is wrong will change
          their policy, you were an influence for good and I'm glad you were
          there for issues of wrongheadedness. You implemented
          right-headedness."
          <h2>anti-business and -child policy</h2>
          Larry Kudlow: "They did get infrastructure bill with help of gop
          spread over 10 years, green new deal, the rest is infrastructure. they
          did get emergency relief bill last winter and THAT was the trigger
          point inflation. I wouldn't count that as a win. I mean the emergency
          is almost over. Should have built wall, packing court is dead,
          nationalized election bill is dead. Manchin and Sinema will not play
          with the rules of super majority. Foreign policy retreat from
          Afghanaistan emboldens Putin to threaten to invade Ukraine, Biden will
          make concessions to Putin. China is sending airplanes. Taiwan
          airspace. climate change, economic catastrophe, rejected. Remember,
          'bankers are a-holes, have federal reserve manage all loans.' She had
          to withdrawal. Progressive socialist work requirements," what does
          that even mean? "Union US battery subsidies for Ford gm Chrysler
          aren't 'Right to work.' ...Leftover pandemic issues, inflation folks
          out of work, small business unemployed. Excess continued gov spend,
          fed money printing and reg that stops business and energy.” Manchin
          won no new spending $5-6t no gimmicks, work requirements for able
          bodied people." What does that mean? “Not one year of 2k, 3.5k ccc.
          Permanent child welfare, no work requirements for the parents. ...One
          year of spending with 10 years of tax hikes. No electric benchmarks.
          Doesn’t let go, can’t buy him off. 70% in a red state. doing the lords
          work. bbb so-called transformational proposals is dead. now they are
          going to bring it back this coming winter. lot of pomp and
          circumstance, ordnary budget matters, not this big bill. next test is
          february. Inflation will remain at and above where it is today. After
          a booming 4th quarter, third week of January, 7% growth of the
          broadest inflation measure 7 maybe 6, argue against any government
          spending/stimulous. Lefties will make another run at it, manchin isn't
          caving in. I think he is a republican by february. I would not rule
          that out."
          <h2>wall st is twice as much debt as government</h2>
          "'We have to regulate this, throw money are that,' no human thinks it
          will lower inflation. America is smarter than politicians think. And
          they said no to Joe Biden."
          <h2>non-voters won, default, "no"</h2>
          <a href="https://billbiden.org">JOE BIDEN</a>: "JOB PROGRAMS, JOB
          OPPORTUNITIES, TO KEEP PEOPLE SAFE AND SET THEM UP FOR SUCCESS," GREG
          KELLY: "ALWAYS MAKING EMPTY PROMISES," WOULD DOUBLE EMPLOYMENT BY
          WATCHING EACHOTHERS' KIDS. MAYBE COMPETING WITH CONSUMERS SHOULD BE
          ILLEGAL?!? STOP & REVERSE THE LENDER LANDLORD WORK DEFICIT!!! NOT FOR
          BOND INDEX FUND GAIN, INCLUDE THAT IN POVERTY LEVELS
          <br />
          <br />
          "The Social spending package that we call Build Back Better."
          <br />
          <br />
          THE DESTRUCTION OF PUBLIC EDUCATION IS GOOD, STOP THE SLAVERY. LET US
          EARN MONEY. TRADE, DO NOT SPEND. TRADE SECRET CROCK NOAM CHOMSKY. GO
          TO HELL ALREADY. RICH VALDES: “DEMOCRATIC-SOCIALISTS SAY YOU NEED
          JUSTICE IN EVERY AREA OF SOCIETY, AND WE SHOULD, ACTUALLY HAVE, IN
          EVERY AREA OF SOCIETY, JUSTICE.” THE NATUIONAL DEBT IS UNSUSTAINABLE
          AND THE BIDEN ECONOMIC POLICIES CAN MAKE IT EVEN WORSE. WHAT ABOUT
          PRIVATE WHICH IS TWICE AS MUCH, LOITERER, FORCE MAJEURE KEPT DOWN
          PAYMENT REPO IMPLAUSIBLE DENIABILITY.
          <br />
          <br />
          <Cable
            style={{
              width: "100%",

              height: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1H1D5lVH3JdHoMU1X-nd23Vm_AvxEfvwZ/preview"
            }
            float="left"
            title="Spicer & co (Newsmax) - 'social spending' nationalist rent-seeking bridge tolls & network fees"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h3>
            "DARKEST 1/3 REAL ESTATE 4/5 POPULATION SUBVERT CHURCHES, AND
            WHISPER AS WOULD THE VIPER TO EVE." NO SHIT. AS A DETECTIVE, YOU
            EXPLORE MOTIVE AND METHOD BY VICARIOUS ACADEMIC EXERCISE. THEY ARE
            WRITING THEIR OWN EMBODIMENT OF WHAT THEY CRITIQUE, AND THE REASON
            WHY FREE-MARKETS IS QUALITY AND PRICE ASSUMPTION. PAUL HARVEY (1964,
            HUNDREDS OF YEARS AFTER MARX SPEAKING ON THE CREDIT-CYCLE
            USELESSNESS). "SCHOOLS HAVE AND GIVE TO THOSE WHO WANT UNTIL KILL
            INCENTIVES OF THE AMBITIOUS." EDUCATION-BY-DEFAULT IS TRADE SECRET
            MONOPSONY
          </h3>
          <br />
          "Where does the money come from?" CNN responds, "We already told you.
          'I blame it on the Tea Party movement, Moms for Liberty is a danger to
          society and only 1/3 public/private.'" 1/4 1/4 1/4 premium pentagon
          pensions 10% debt-service, 40% debt-service njta. literacy-rates are
          like reasonable doubt duress of commerce minimal viable product
          Tranquil society and voluntary trade. Lender landlord insurer work
          deficit. 40% debt-spending, $12k/year/p debt, $3/year/p bonds,
          $64/year/p new currencyComponentOfM1, $6k/year/p gdp, $66k/year/p GDP.
          <br />
          <br />
          Monica Crowley bond-index-fund v dollar-park shill, “Trump has a [pro
          corporate-profit, hours-worked/utility & anti-monsanto/-finance-growth
          economic agenda, to&nbsp;
          <a href="https://blog.ucsusa.org/doug-boucher/world-population-growth-exponential/">
            make more babies constant 2% requires more significant birth rate
          </a>
          ], lower taxes, less of a regulatory burden, and that the pipelines
          are as open as possible.
          <br />
          Labor shortage as long as virus occurs, and will be 2% target
          ‘inflation.’” Republican Gov: we will have to live with virus, endemic
          nor pandemic, life is meant to be lived, thrive in spite of
          coronavirus, data seems successful, it is no longer about the virus
          and public health but power and control. Not helping worker citizen
          and business, but locking in their power of control over us.”
          <br />
          All about political power on the left, so bingo on that.”
          <br />
          Raise rates multiple times to tamp down inflation. All these things
          that have been kind of helping us out, now higher mortgage costs,
          higher car oatients.” Yeah 3.5k Biden inflation than to 2021,
          stagflation weakening economy with inflation, higher interest rates
          late 70s early wrench economy out of entrenched inflation is very
          painful thing. Only way to get this monstrous inflation under control
          is raise interest rates. Americans don’t understand what is coming
          their way if we do not get inflation under control as soon as
          possible.
          <br />"
          <a href="https://fred.stlouisfed.org/graph/?g=G8nU">
            I don’t see any light at the end of the tunnel
          </a>
          .” Sean Spicer 12/17/2021 6:30 pm est
          <br />
          <br />
          “People care about how their 401k looks, how many hours they work and
          how much they pay for the same intermediate goods, inflation from
          lender landlord insurer work deficit, that’s why the Democrats are
          trying to pivot.”
          <br />
          <br />
          <Cable
            style={{
              width: "100%",

              height: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/11OmL8aTfYogU3JOQLEX_PjU97P5h896q/preview"
            }
            float="left"
            title="Chris Salcedo (Newsmax) - sin sacrifice and Rich Lowry"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            “NOT JUST ANY BABY, IT IS CHRIST IN THE FLESH,” SAYS THE JEHOVAS
            WITNESS, SKEEVING FORTUNE SIN SACRIFICE LIKE IT WORKS. TOTALLY
            DELUSIONED. THEY STILL BLOODLET GOATS OUT THERE
          </h2>
          <h1>
            "THE OTHERS ARE ANTI-BUSINESS ANTI-SUCCESS. PROFITS ARE VERY GOOD
            FOR THE STOCK MARKET, HOWEVER, THE INFLATION PROBLEM IS HABPPENING.
            THAT CUTS INTO MIDDLE CLASS REAL INCOMES FOR FAMILY HOUSEHOLDS. GDP
            GROWTH COULD BE 9% GROWTH AND INFLATION 7%. IT WILL BE A BIG PROBLEM
            FOR THE ECONOMY: THE FED WILL HAVE TO STOP BUYING ALTOGETHER." LARRY
            KUDLOW RACKETPROP.
          </h1>
          <Cable
            style={{
              width: "100%",

              height: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1JttI2c7h8Z_HvZjZjOgTlfgKG45CHreh/preview"
            }
            float="left"
            title="Chris Salcedo (Newsmax) - we need to ween cops off net loss bond profit and fine victimization."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Extremists have to prove their outlandish theory, the onus is on the
          changer, not the status quo,”
          <br />
          Never for ppp trust building existing businesses, nor duress in
          voluntary trade and a Tranquil society without competition with
          consumers in price or quality. Private can take market share and
          institute any duress because of free market theory is reasoned by
          perfect equilibrium, but in REALITY, networks and bridge tolls need to
          be target-margined, not nationalized. Taxes need to be truncated on
          production-sales, not free rider mutable 1/4 1/4 1/4 expiring premium
          pentagon pension net loss 10% debt service, 40% njta, 40% debt
          spending, 50% nj
          <br />
          <br />
          “Whatever man or woman is on the tip of our spear, so the world knows
          we take our enemies to bear. Democrat socialists and American media
          turns their eye from Afghanistan to beta male pajama boy yes-men. I’m
          a retarded hispanic still who thinks virus kills but it isn’t
          dangerous.”
          <h1>
            CASH ADVANCE TO $TBT: HUD RENT-SEEKING CAP UNITS OR DAYS, NOT PRICE
            - HOME CONTRACTOR GENTRIFICATION: PROFITS, INTERMEDIATE-LABOR,
            HOMES, BONDS NOR EQUITIES IN INFLATION POVERTY, MEASURE NOR GINI;
            MEANT TO BE PERPETUAL SERFS AND EMPLOYABLE-NON-OWNERS
          </h1>
          "We need the research, they need the money." Why wouldn’t you allow
          the individual researchers do their own thing, instead of funnel the
          fruits of their labor to corporate profits withheld outlays
          <br />
          <br />
          Fenatnyl is used in pnemonia, "let's not wipe them out, but help them
          out." Mind your own fucking business, Dog. What, are you considering
          wiping us out? Have to talk yourself and the genocidal right down?
          Leave us the fuck alone. Stop prohibiting a currency of a pharmacy
          depositary that would require no-scripts and open-source ingredient
          lists, no FDA market-communist Bolling.
          <br />
          <br />
          The messy hair and implausible landlord use landlord work deficit
          diagnosis: schizophrenic-bipolar. I'm fucking pissed, a human thing!
          <br />
          <Cable
            style={{
              width: "100%",

              height: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1qva7F4s76eUhuIo-g4g5ScJqzy1tBSjd/preview"
            }
            float="left"
            title="Eric Bolling (Newsmax) - we need to ween cops off net loss bond profit and fine victimization."
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Give the mental help services money to help cops, in addition to
          cops." If you tell an orthopedic surgeon psychiatrist, “rollover
          insurance,” then they lock you up for 13 days in RiverviewMedCtr Red
          Bank, NJ. "Psychosis of unscientific fear that they have a 13d-retail
          uuid Anon for a reason," according to Chris Salcedo
          <br />
          Simple negligence, criminally liable state victimization beyond torts?
          Speeding is already a law, but that doesn’t mean it isn’t still state
          victimization.
          <br />
          <br />
          “They are a threat, by assumption, so they can use deadly force
          against them.” Try it Brandon.
          <br />
          <br />
          Feelings are normal human things, finance is not: it is spending, not
          trading. invoices, expiring claims, implausible landlord use, repo
          cycle kept down payments, closed source licensure for a
          competitive-depositary, leave us alone!
          <br />
          <br />
          "There is only 3 or 4 people that can do this," sounds like we should
          target margin instead of have expiring claims.
          <br />
          <br />
          <h2>
            EXPIRING CLAIMS NO SURRENDER EULA THIRD PARTY DONEE BENEFICIARY
            CLAIMABLE OF OTHER BUSINESS, AS NON-LABORLESS-DEMAND
            <br />
            did Trump lose? I am a magnetic data, login.gov and content
            addressability&nbsp;
            <a href="https://thumbprint.us/voting">freak</a>. We do know
            non-voters won simply in guber and plurally in presidential. We will
            split both parties ideological-duress.
          </h2>
          "take care to not overwhelm the hospitals, tax and spend ourselves
          into oblivion." Dr Richard McCormick and what about others as to
          compete with consumers? 1/3 public/private, is that not a comparative
          advantage technological advancement net loss? It is useless price
          inelasticity of bid-to-ask, then minopsony for borrowing loiterer
          government gentrification for rent-seeking and nationalized network
          fees and bridge tolls, instead of industry variant multiple of 11/12
          jury free rider immutable or collective non-flaccid bargain truncated
          sales tax with sewage-police-lawsuit basis, (cash/debt)*income every
          year back, and
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1asL7BfwWXQx2_lQl7nf662Go4OVfIg09/preview"
            }
            float="left"
            title="John Bachmann Now (Newsmax) - 'GOP aren't constituting market-communism!' he cries. 'You are imagining 1/4 1/4 1/4 premium pentagon pensions 10% debt service, 40% in njta, 40% debt spending, 50% in nj, lender landlord insurer work deficit.'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Everything paid after ten years, that it will make inflation in ten
          years, it’s just that, it’s speculation,” trust-building government
          gentrification and free rider mutable monopsony is not. Useless
          price-inelasticity of bid-to-ask is reality.
          <br />
          <div
            style={{
              backgroundColor: "rgb(240,220,180)",
              borderRadius: "15px",
              padding: "10px",
              margin: "10px"
            }}
          >
            “When you can’t get the bill passed, you blame republicans for the
            inflammation.” $12k/year/p debt, $3k/year/p bond, $64/year/p new
            checking, $6k/year/p gdp, $66k/year/p GDP, 5 years doubles hours to
            home when before 1913 gdp/p was nearly constant amidst 3%/yr
            realm/regime/basis.
          </div>
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.serviceCancelingImages
                ? ""
                : "https://drive.google.com/file/d/1jWVrrm9se0Rd_UKO87xs5dKYSLOwi2M3/preview"
            }
            float="right"
            title="National Report (Newsmax) - Marcela Roca MD candidate"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Cunt, there is nothing socialist about nationalizing bridge tolls nor
          redistribution except from those who didn't earn it like finance
          invoice, expiring claims, implausible landlord use & repo cycle kept
          down payments work deficit competing with consumers. If you were
          actually conservative for per hour price deflation from comparative
          advantage for technological advancement, you would call this
          market-communism.
          <h2>
            1-LEVEL-BOARD MAX_ROYALTY-PROFIT IS WITHOUT THIRD PARTY DONEE
            BENEFICIARY CLAIMABLE&nbsp;&bull;&nbsp;(CASH/DEBT)*INCOME EVERY YEAR
            BACK.{" "}
            {/*"Want to give kids the gift that keeps on giving, get them rare earths, "ammo"*/}
            IT'S YOUR HONOR TO CLASS RESOLVE, YOUR HONOR. AMORTIZE MEDIATION OF
            PRINCIPAL, KEEP TO INDUSTRY-VARIANT-MULTIPLE-OF-11/12-JURY (IVMOETJ)
            FOR FREE RIDER IMMUTABLE/COLLECTIVE-BARGAIN TRUNCATED SALES TAX
            DESIGNATION, AND MINIMAL VIABLE PRODUCT DURESS TO FIT WITHIN
            TRANQUIL SOCIETY AND VOLUNTARY TRADE, STAY OUT OF
            OPEN-SOURCE-PHARMACIES AND CHARACTER ASSASINATION, FOR
            STATE-VICTIMIZED-GAIN, RACKETPROP.
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/10UzLHCATHl36gXglvJ440aoPiIe_IhpL/preview"
            }
            float="left"
            title="Katie Halper - 'Free assange,' but first slander (Abby)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <div
            style={{
              backgroundColor: "rgb(180,240,200)",
              borderRadius: "15px",
              padding: "10px",
              margin: "10px"
            }}
          >
            “This war cost $2.3t and $2t, of course, to the MIC,” but there is
            only $2t checking CurrencyComponentOfM1. Where does that go?
            velocity of m2 minus gdp divided by m2 minus CurrencyComponentOfM1
            times CurrencyComponentOfM1 $6k/year/p, GDP $66k/year/p
          </div>
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1aXtSwUbmlEz-S6euO7QIDhHCE9UKJaYK/preview"
            }
            float="right"
            title="Katie Halper - 'Free assange,' but first slander (kevin)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “'If he is extradited he is going to kill himself.' They don't say he
          will get medical or psychiatric treatment, they give him a prison
          doctor, whatever that means.” Did he tell you this? Who cares? It is a
          human thing to do. They will lock you up in New Jersey for 13 days for
          saying rollover-insurance to an orthopedic surgeon, and give Paul
          Krugman saying the same thing in a half-baked way. “It is a legally
          binding contract lest war power with the United States to not make net
          loss bond profit on a lifetime prison sentence for this Mendoza
          extradition. May not be criminal if jailors only funded by truncated
          sales tax. $14m seized state victimization free rider mutable
          monopsony & gentrification. That from private is hard enough. lender
          landlord insurer net loss work deficit.”
          <h1>“This is not a partisan statement, this is a literal fact.”</h1>
          Usually microeconomics says consumer discrepancy-of-propensity causes
          prices, but if 5%/yr home prices is a second order effect after
          7.5%/yr bonds, then producers of retail goods evidently withhold
          raising price until they need it, integrally.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1TqPnQf1tlCvDzL7QhQoTQBJJIp3ZkDQA/preview"
            }
            float="left"
            title="Katie Halper - 'Free assange,' but first slander (richard)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Prisons are notoriously bad to be relied upon for any sort of
          treatment.” Why are you so obsessed with mental health like sadness
          isn’t natural? Ptsd moral injury from the drone program Daniel Hail.
          <br />
          <div
            style={{
              backgroundColor: "rgb(240,180,200)",
              borderRadius: "15px",
              padding: "10px",
              margin: "10px"
            }}
          >
            2 week closed discovery as anon uuid for 13d-retail executions
            <br />
            Tamper proof dns grid & convict intranet, end to end encryption on
            device.
          </div>
          <br />
          Political prisoner, or perpetual serf & employable?
          <br />
          <h2>
            <a
              style={{
                shapeOutside: "rect()",
                float: "left",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://30under5.us"
            >
              30under5.us
            </a>
            population before 1913 3% and gdp/p nearly constant,
            <br />
            <span style={{ fontSize: "9px" }}>
              lest repo-cycle keep down payment options to buy sold on estimate
              of intermediate material and labor intent
            </span>
            <br />
            <br />
            <span style={{ fontSize: "16px" }}>
              expiring claim settlements at down payment with outstanding scoped
              out estimates is still due upon the contractor.
            </span>
            <span style={{ fontSize: "16px" }}>
              NJ consumer fraud act is fraudulent option to buy, sold
            </span>
            <br />
            <a
              style={{
                shapeOutside: "rect()",
                float: "left",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://thumbprint.us/payments"
            >
              thumbprint.us/payments
            </a>
            <br />
            3m/yr+ 40m legal 6m illegal, good for labor shortage. finance is
            first order effect, however, by lender landlord insurer work
            deficit, fry yourselves like bacon
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1e_PYRIN4UkzoCFqMs--y4-lojfMLvqog/preview"
            }
            float="left"
            title="Spicer & co (Newsmax) - some shill hindi saveface doctor"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <div
            style={{
              backgroundColor: "rgb(200,180,250)",
              borderRadius: "15px",
              padding: "10px",
              margin: "10px"
            }}
          >
            government recommends not the J&J fetal cell line, go for excess
            antibody mRNA-sporing-graft, oncogenic-dysregulation prone for
            immunocompromized blood disorder patients as well as every human
            being, for a 'pandemic' of no significant age standardized excess
            deaths, per cohort size, boomers 56m/40m 2020-2030 75+
          </div>
          <br />
          Shoprite didn’t want to fget sued for replacing the workforce with
          machines, and that’s why they racket prop covid, to excuse layoffs,
          although this is not with market standing of course (competing with
          consumers of intermediate-labor), just an academic exercise.
          <br />
          <br />
          Covid is a very dangerous disease, you think it doesn’t require cell
          to reproduce, at first? Is an evolutionary trait of our cellular
          anatomy? What is the taxonomy, imbecile dr saveFace? Show the vivo not
          vitro retroactive in court
          <h1>
            lender, landlord, insurer work deficit; non-exclusive byproduct does
            not all-inclusive cause, make
            <br />
            <Cable
              style={{ height: "320px" }}
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://drive.google.com/file/d/1rEmn7j3V0_N3vAiauhNe0wI7xX2tabbt/preview"
              }
              float="left"
              title="American Agenda (Newsmax) - healthcare gentrifier John Byrnes Education Firector Concerned Vegterans for American fiefdom of asset valuations not in inflation"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <span
              style={{
                fontSize: "12px"
              }}
            >
              "community care choice card," STOP FUCKING insurance net loss of
              veteran heathcare, it is not concurrentable and not conservative
              to have such a collective loss. "care they need and care they
              obviously use," "we wen't back to the mat, and front run their
              doctors, c cfora.org"
            </span>
            <br />
            ms matches paralytic polio as acute flaccid paralysis class, and
            sewage+nutrition correlates with lifetime mortality since
            1775.&nbsp;
            <a href="https://humanharvest.info/polio">YOU HAVE FIXED NOTHING</a>
            , U.S. Census Bureau and I PROJECTED this "pandemic," by population
            growth alone
          </h1>
          "You’re not going to know you have it if you aren’t tested. When you
          aren’t sick." So what the fuck are you complaining about. Virus, the
          only “being” in the world without taxonomy beyond a cell, “it only
          comes out.” Bacteria is the exclusive cause of the non-exclusive
          artifact. Let’s get back to an all-inclusive symptomatic regime.
          <br />
          <br />
          “Why are we freaking out now, because it is a new variant, why are we
          locking down or allowing businesses to discriminate without
          jury-permitting? “It was the delta that was the deadly one.” It is not
          part of the Tranquil and voluntary trade minimal viable product. It
          only comes out, so it cannot be the cause of death. Deaths have been
          insignificant thru “Delta,” and the other D614G cellular debris.
          <br />
          “You can deactivate a virus, you cannot kill it,” Jeff, have you
          fucking made virus with an&nbsp;
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
            un-bacterially-infected cell
          </a>
          , yet? Douche
          <br />
          <br />
          If you do this, and look at that, the red circles go up into a
          “protective range.” But it still isn’t vivo, is it? It's just a
          warning-mechanism byproduct or artifact.
          <br />
          <br />
          "It works! Is that they found in this study." There is a null
          hypothesis over byproduct for cause, as missing forrest for trees.
          Symptomatic credential is all-inclusive of non-exclusive. “Access to
          affordable and regular testing,” is not provided by front-running
          demand for not only expiring claims, but propensity non-negotiated.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1Y55slELkbZM6bZg49CWtDycwfHgMlrzP/preview"
            }
            float="left"
            title="National Report (Newsmax) - Applebees removes non-vaxx from dining: Carl DeMaio, Jenna Ellis, Jesse James Duff"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Military, now being discharged, over their vaccination status,” Emma
          Reckenburg
          <br />
          “Virus is the reason for all government deficiencies.”
          <br />
          <br />
          "donate to nursing home victims for Andrew Cuomo's 'tightbacks,' and
          the nursing home deaths that followed." It was likely terror, the only
          people I knew that died were lovers, they fucking passed in the same
          week after telling them they are going to. You choose when you go,
          naturally. We were short&nbsp;
          <a href="https://humanharvest.info/polio">700k/year+ ON TIME</a>
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1OFc89bvPS-B5BJU9MTf-nyoPtHrKozTH/preview"
            }
            float="right"
            title="National Report (Newsmax) - Applebees removes non-vaxx from dining"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Rising crime, like a patron refusing to leave Applebees when failing
          to show a vaccination card." It is illegal to discriminate without
          jury-desistation and permit for duress in minimal viable product.
          There is poof virus is a byproduct of bacterial infection. This
          "crime" is a crime.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1YeVqtSMnulM3lCz18UkLt62Nrg1M923m/preview"
            }
            float="left"
            title="Spicer & co (Newsmax) -  border control"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “They were already deported or have a criminal record, so they try to
          avoid the apprehension process. They also seek to trade without
          credit. So we cannot have that exclusion from the market, as fat
          piggies on the article 4 racketprop out of scope receipt and outlay
          abuse. You’re a fucking pussy Drug smugglers and human traffickers,
          hundreds compared to hundreds of thousands caused by login.gov convict
          intranet repeat offender malfeasance, because they know it is one step
          away from end to end on device tamper proof grid dns."
          <h1>
            “At the end of the day, people vote with their pocketbook, and they
            have less than they did when president trump was in office.”
          </h1>
          "'[$2t covid bill passes, and we learned we should have gone even
          further, we are going to hr1 fed gov takeover of election process to
          stoke majority already in place, rcv 50% plural majority forelorn],'
          for what?"
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1KgA8YatW3flwtNFM3-CYKlWTJBzPK2mP/preview"
            }
            float="right"
            title="Spicer & co (Newsmax) - "
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <div
            style={{
              backgroundColor: "rgb(180,250,220)",
              borderRadius: "15px",
              padding: "10px",
              margin: "10px"
            }}
          >
            1/3 public private $12k/year/p debt, $3k/year/p bonds, $64/year/p
            new cash currencyComponentOfM1 checking, $66k/year/p GDP, $6k/year/p
            gdp, mv1===mv2==GDP, but m2 is bonds + currencyComponentOfM1?
          </div>
          <br />
          "Green new deal program so obsessed with global climate change agenda
          because they have a naive belief we can work with China on Climate
          Change, I know they do not give a rif for it. Lighter military
          resistance, is why there is more hostility[, on the horizon excess
          than happens every day already].
          <br />
          third party beneficiary donee claimable force majeure implausible
          deniability beyond free rider immutable && article 4 scope of outlays
          AND receipt-method. (NOT BONDS, like 10% debt service feds and 40%
          njta)
          <h1>
            House cost mortgage; 1-level-board max-royalty-contracts will
            replace debt "investments."
            <br />
            Socialists don't market-communist profits, our leaders are popular
            not principaled, only desistation, conviction and permit for
            commerce beyond minimal viable product. america first is not taxing
            and job barriers nationally, nor comparative advantage.
          </h1>
          fuck your, "sticking the landing," you have productivity upsidedown:
          price deflation per hour; rot in hell.
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/10lEOqnzrm09WCfx9JheTFgLxlDLkvqKF/preview"
            }
            float="right"
            title="Spicer & co (Newsmax) - Kelly Tshibaka Alaska Senate candidate"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>
            1/3 public/private, look after&nbsp;
            <a href="https://laborequity.org">savers</a>', tax payers have been
            on vacation. taxes outside the market is pure price inflation, and
            beyond multiple of 11/12 industry variant jury free rider mutable
            collective non-flaccid bargain designation;
          </h2>
          lest expiring or corporate profit account withheld or taxxed income
          ooutlays twice is a net loss, or options to but sold as down payment
          by estimates of changing material, labor and regulations;
          <h2>
            and other free rider immutable with basis sewage police lawsuits 3%
            under $2k max $60 I estimate, no gift nor non-production-tax, nor
            income or large item flat tax, but a flat flat tax: truncated.
          </h2>
          Consumer Fraud Act in NJ IS fraud and racketprop itself. Put every
          industry on the jury. But how is the law so messy you can't allow us
          to public review your acquittal until one piece of non-character
          "evidence" had.
          <br />
          <br />
          Does it make sense to have stimulus when immigration at record highs,
          work requirements for government benefits, it helps childcare
          providers with loads of student dent. Bailout and collateralized
          launders service to keep appraisal fixed.
          <h2>
            "who knows when things will be back to normal, don't want to offend
            the commies, they are going to run out of alphabet and have a run on
            bonds for cash' standing." Morgan Stanley lender work deficit
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1ANWiJjMfpBx3PahYpb1XkKwBSEhBYCIY/preview"
            }
            float="left"
            title="Cortes and Pellegrino (Newsmax) - Rich Granell's taxonomy lab leak matches one of hundred of thousands non-exclusive artifact asymptomatic instead of all-inclusive symptomatic regime naivity"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "It's a virus, we know everyone is going to get exposed to it. We
          think the virus is an evolutionary trait, since it requires cell to
          produce, and cells have evolutionary taxonomy through protistology,
          and virus&nbsp;<a href="https://qr.ae/pGqBA8">only comes out</a>. We
          aren't going to stop the virus. We will find out the true origins of
          the virus, eventually."
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1TF2nLbWvCP2ErKiGXYksl1mEXsqbDgec/preview"
            }
            float="right"
            title="Stinchfield (Newsmax) - NFL vaxxed still produce virion"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “NFL is mostly vaccinated and positive, hope they get well,”
          stinchfeild saying you should worry about asymptomatic covid 🤣it only
          comes out doofus, it is byproduct of bacterial-infection
          <br />
          <br />
          "Does it make sense to have stimulus when immigration at record highs,
          work requirements for government benefits, it helps childcare
          providers with loads of student dent. Bailout and collateralized
          launders service to keep appraisal fixed.
          <br />
          5.3m worldwide is 50m/yr short expected from population growth a
          lifetime ago.
          <br />
          They didn’t even know they are sick that is why they need to get this
          testing done. A lot of cases are asymptomatic. So you mean it isn’t an
          indication of illness
          <br />
          Fuck off hypertension 9 days after the vaccine, onset of excess
          antibody production. 4 people here is your money back, you gotta turn
          around. testing, then infusion PCR, then antibody testing. When I told
          a psych in NJ at riverviewMedCtr that their income is fraud and should
          be rollover-insurance, I got strapped to a chair, lied about kicked
          and punch trying to elope from what i thought was an orthopedic
          surgeon appointment, they plunged the blood test into my nerve 3
          different places, I'll do it on my own time, douche bag
          <br />
          Die in a hole
          <br />
          Viruses are for people that spread it."
          <br />
          <br />
          <Cable
            style={{
              height: "230px"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1mjXoF0xU96sIZG2_8Udkflfe-XeJQa7L/preview"
            }
            float="left"
            title="GBNews - conservatives vs torries on debt-based-investments vs 1-level-board max-royalty-contracts"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Conservatives lost their reputation on the economy,” “Tories lost
          their reputation on the economy, as you say, with interest/inflation
          soaring through the roof.”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1xLcJCA-DOP-_1-jxuFPU8j2pE982KdaE/preview"
            }
            float="right"
            title="Eric Bolling (Newsmax) - Quisha King Co-Chair Moms for liberty"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “It is marxism, we know what it is it is what it is we all know what
          it is.”
          <h1>
            Marx wants industry various jury science, where are you getting
            business rights over consumers in duress beyond minimal viable
            product? dig yourself a ditch and crawl in
            <br />
            <style style={{ fontSize: "9px" }}>
              build back welfare forever, that's where the money comes from. not
              tax payer funds, but 40% debt spending. nationalizing network fees
              and bridge tolls, closed source uspto for Fauci Beagle Craft Beer.
            </style>
            <Cable
              style={{ height: "260px" }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1jqagH5SKLYkIUESRWnAgdPvnmCD9_Vqo/preview"
              }
              float="right"
              title="World Economic Forum (Facebook) - The state will 'step in' to cover half of household energy bills, instead of banning invoices, for lender work deficit and price fixed"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            i will commit perjury under duress from state victimization, fuck
            off, that is what a plea bargain is.
            <br />
            <br />
            That is called price fixing, lender work deficit. Let the prices
            fall and for energy networks, target margin. Can certainly ban
            invoices upon third party beneficiary law
            <span style={{ fontSize: "9px" }}>
              republican funding scheme with your tax dollars, not even testing
              immigrants for "muh jobs" like union trust building barrier to
              entry for labor shortage second order effect after 56m/40m 75+
              2020-2030.
            </span>
            “Target,” is a verb, “margin,” is an accounting term, of legal
            grounds, as a “network,” in microeconomic reason, perfect
            equilibrium infinite producer and trade, not spending nor &nbsp;
            <a href="https://www.investopedia.com/ask/answers/031815/why-are-there-no-profits-perfectly-competitive-market.asp">
              laborless-demand
            </a>
            .
            <br />
            <br />
            “Third party donee beneficiary,” is a legal term that I am
            admittedly trying to&nbsp;
            <a href="https://law.justia.com/cases/california/supreme-court/3d/11/394.html">
              make more precedent
            </a>
            <span style={{ fontSize: "9px" }}>
              <Cable
                style={{
                  height: "440px"
                }}
                onError={handleScollImgError}
                src={
                  this.state.noyoutube
                    ? ""
                    : "https://drive.google.com/file/d/1Byf7lrChYlx_HkI8p6WSFl6vmI2RTJq3/preview"
                }
                float="left"
                title="Dennis and Judy fill-ins (NJ 101.5) - Chase bank ad"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              “Teach your kids good money habits.” coming from a fractional
              reserve bank that contributes to impossibility $12/year/p debt,
              $3k/year/p bonds, $64/year/p new cash
              <br />
              "Give money that has true meaning, that is going to buy life
              saving care, say goodbye to your newborn because he is not going
              to make it. Don’t haggle with doctors with child life services.
              One of the amazing thing is they will not turn away children
              because their parent’s cannot afford medical care, instead of
              bringing down prices without discrimination, be the consumer
              friend, family, happy-face, nor checking or asset account, even if
              we don’t; count it in inflation like forever employable."
            </span>
            "Are they going to run on a better market, or lower inflation?
            Raising taxes may have a deflationary tact as well, the spending and
            liquidity they pump intot the market. the best stimulous plans is
            the vaccines. I mean, with the variants, vaccines prevent disease
            and death, allow you to go to dinner, maybe make treatments more
            available. STAY THE FUCK OUT OF PHARMACY PIG
            <br />
          </h1>
          raise rates will tamper inflation and increase cost of borrowing for
          businesses (that isn't income from consumers, when compounding of on
          general income and gifting. Trade, no spending. Wineberg is a market
          communist, drop dead!), inflation is transitory but it keeps growing
          and growing and growing, tax cuts, it is bewildering how much stuff is
          in here. people carrying them out were pretty normal," Charlie
          Gasparino
          <br />
          <br />
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.dropbox.com/s/018s7f6k3e8405a/Screen%20Shot%202021-12-16%20at%205.28.44%20PM.png?raw=1"
            }
            float="left"
            title="blm riot vs jan 6 numbers comparative innocence"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Lift everyone up, take care of everyone across the city, but that
          they are safe. Message to every elected official to be responsive to
          those in the city. …give them the tools. Everyone has to be loud,
          louder than before, can’t have half the team running left and half the
          team right, you will lose 3 yards every time. Let’s take the team
          where in Neds to go. New York does bounce back. Let’s colonialize
          Greenland.” Dermott Shae
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1cLLyItHh3EcQMup6habyRWqaGSLF9Y7t/preview"
            }
            float="right"
            title="mortality projection 2015- plandemic"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Letting everyone out of jail, and then preventing people from going
          to jail, overnight graffiti, working with kids, delivering food during
          covid, while they were sick, couldn’t take a day off because they
          couldn’t, but we look at the murder of George Floyd and the terror
          that came out of it. Small group hijacking a worthy cause. Attacked _,
          not perfect, we have to correct, I’ll _ that.
          <br />
          The deplorable amount of people that turned out to vote, we need to
          stand up and change the tide, the left are afraid they are going to
          get challenged. We need people to say enough his enough. WE ARE NOT
          GOING TO TAKE IT ANYMORE. Laws that are literally designed to take
          tools away from police. We have worked to lower incarceration. Seeing
          as a model for the whole county. You get to claim good but not chaos.
          <br />
          Based on a threat to public safety, a threat to their fellow human
          beings. Drop dead socialists, though.”
          <Cable
            style={{ width: "100%" }}
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://drive.google.com/file/d/1E-CpXiM_1zEzSXfvV6TmG6z-ns7_lSRf/preview"
            }
            float="right"
            title="weed wallet gateway currency"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                suppledemand: !this.state.suppledemand
              });
            }}
          >
            <h3>Supply & demand</h3>
            <br />
            profits are the mother's milk of stocks, inflation that of the same
            until intermediate-labor is demanded by labor again, without
            rent-seeker
          </button>
          <br />
          {/*<div
            style={{
              zIndex: 1,
              display: this.state.suppledemand ? "block" : "none"
            }}
          >*/}
          <a href="https://fred.stlouisfed.org/graph/?g=H5XB">supply chain</a>
          &nbsp;problems by&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=FSwQ">damage</a>
          &nbsp;from&nbsp;
          <a href="https://teapharmacy.party">lender/landlord work deficit</a>
          <br />
          <h2>
            assigning my mom as my disability payee because she has
            collateralized debts, that loitering borrower bitch
          </h2>
          <a href="https://fred.stlouisfed.org/graph/?g=JHaU">$12k/yr+</a>,
          $32/day+, $200k total debt per person. $3k/yr+, $8/day+, $60k total m2
          per person. $60k/yr+, $.18/day+,&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=JHaE">$6k total</a>
          &nbsp;checking CurrencyComponentOfM1 per person means that gdp is made
          high by debt made and paid for, like nannying eachothers kids' to
          boost jobs numbers
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1sKoqq8bnYagXwXJN1JtZ2OeibhjHLbo9/preview"
            }
            float="left"
            title="Spicer & co - CBO: House-Passed 'reconciliation' Bill Will Amnesty 6.5m illegal Aliens"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <a href="https://humanharvest.info">Lawfully present</a>&nbsp;in
          actuality (1m/yr, 6m actualizable), or else you are merely prohibiting
          trade. If you want to solve the&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=Gkvt">supply</a>
          -chain-
          <a href="https://fred.stlouisfed.org/graph/?g=Hc1R">crisis</a>,
          immigrate-working-age
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1YKrOjnMBtzPp989vm35ueO1E8tm1nF7B/preview"
            }
            float="right"
            title="Spicer & co - Braun & maternity doctor senator"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Humming on high gear, spending sugar high is only 20% of normal
          fed/debt spending and 8% of total debt /wall st
          <br />
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <TwitterTweetEmbed
              style={{ float: "left", width: "300px" }}
              key="1425460613711605760"
              tweetId="1425460613711605760"
            />
          </div>
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1rMg7pGn2m2yCO-cPOilJtUWwyMwSsCB0/preview"
            }
            float="left"
            title="Daily Caller - Republicans want education"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Republicans want education,”
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.noyoutube
                ? ""
                : "https://www.youtube.com/embed/4hrMuZEGGmk"
            }
            float="right"
            title="Dick Morris (77WABC) - intent for accounting home sales and bond last trade outside of inflation and gini, but inside net asset value"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Giving people work and job skills is the way to bring people up, but
          yes if you commit a crime, you need to do your service,”
          <br />
          <br />
          expiring claims, invoices, down payments kept upon repo-cycle and
          option to buy upon estimates of materials and labor, dollar-share
          being the most perfect durable-good without maintenance requirements
          rent-seekable operating cost for contractors racketeered and with
          autonomously-misled duress in minimal viable product and truncated
          sales tax free rider immutable sewage police lawsuits by jury-permits
          of ALL industries represented as the ONLY sequestor nor cause for
          removal of and from the jury
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1ioILc5Y8uIatE5HwcawL1tj9qjz-t_0O/preview"
            }
            float="left"
            title="Eric Bolling (Newsmax) - slandering the bottom-left as not being conservative while counting expiring claims and invoices as withdrawable income, but not inequality (gini is half home-prices and quarter of debt-outstanding, 60/40 private/fed spending 1/4 pension 1/4 premiums 1/4 pentagon free rider mutable tax/debt-spending 60/40)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Conservative,” asinine examples of agenda driven reporting
          <br />
          <br />
          "Omicron is contageous, but far less deadly, doesn't stop people from
          lining up for a "clinic. NY and NJ have seen heaviest lockdown
          measures, vaccinations, and&nbsp;
          <a href="https://www.ecdc.europa.eu/sites/default/files/documents/Methods-for-the-detection-and-identification-of-SARS-CoV-2-variants.pdf">
            largest omicron positivity
          </a>
          ." They only&nbsp;
          <a href="https://www.cdc.gov/flu/about/professionals/antigenic.htm">
            pick out of hundreds of thousands
          </a>
          &nbsp; of potential sequences, likely that&nbsp;
          <a href="https://www.labcorp.com/coronavirus-disease-covid-19/covid-news-education/guide-covid-19-variants-what-you-need-know-about#:~:text=Because%20our%20tests%20target%20the%20SARS-CoV-2%20nucleocapsid">
            exist before discovery by guessing
          </a>
          . Eric Bolling to Mike Carter, "I dont know, Fauci doesn't know. Yes,
          it is infectious, but is it deadly? only time will tell." I know it,
          "requires cell to replicate," that means it is byproduct, not cause.
          You haven't&nbsp;
          <a href="https://youtu.be/Weqb9KrQ-TU?t=21">
            created virion with cell without mitosis nor bacteria
          </a>
          .
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1WhYJcBJ6qjhiDGVnBwUiPZuwTTjmXByb/preview"
            }
            float="right"
            title="Eric Bolling (Newsmax) - slandering the bottom-left as not being conservative while counting expiring claims and invoices as withdrawable income, but not inequality (gini is half home-prices and quarter of debt-outstanding, 60/40 private/fed spending 1/4 pension 1/4 premiums 1/4 pentagon free rider mutable tax/debt-spending 60/40)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Can’t vaccinate straight, don’t mandate, but it still is the cause of
          death, can be suppressed by antibodies and I respect Article 4,” says
          the republican and libertarian. Saver knows prevalence does not make
          cause, and this case it doesn’t but byproduct of bacterial-infection,
          and age standardized excess deaths doesn’t account for 1.2m/yr+ 75+
          2015-
          <br />
          <br />
          <h2>
            There is nothing social about nationalization, nor reappropriation
            of laborequity.org&nbsp;
            <span style={{ fontSize: "9px" }}>
              (job-work per hour price-deflation, isolated IP and profits in
              best case as price equillibrium by infinite producers, must
              regulate to emulate)
            </span>
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1xTa9hFKSJEdzsfx3Fn4_aMDGSIL6OYpZ/preview"
            }
            float="left"
            title="American Agenda (Newsmax) - Heritage foundation justice deserved undefined and useless, just net loss profit per incarceration by bonds instead of truncated sales tax"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “The justice they deserve,” like state victimized tort in fines and
          expiring claims inflation? That is not deserved and I was removed from
          jury duty for having this idea about non-rollover insurance third
          party beneficiary law by competing with consumers in a false bid pool,
          laundering the false bid from your consumers and employer
          <br />
          <br />
          “Inclusion,” as it relates to “just capital,” broadness, of accrual
          and false bid pools (expiring-claims), by legal-nomenclature is not a
          good thing
          <br />
          <br />
          <a href="https://teapharmacy.party">
            opening the licensure-source and border
          </a>
          &nbsp;can solve the lender-work-deficit-supply-chain-crisis,&nbsp;
          <a href="https://humanharvest.info">prevalence does not cause make</a>
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1zaKeY475sf9FRuLMnbAVAEvUo4da6Rni/preview"
            }
            float="right"
            title="American Agenda (Newsmax) - (R) Roger Williams on the debt ceiling"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “I’ve been up here 12 years and I’m one of the few, the problem isn’t
          spending but cash flow,” do you mean investment?
          <br />
          <br />
          “No private sector component” is trust-building. Why can’t bridges
          have tolls and broadband+ oil-pipes have margin-targeted
          consumer-surrogates without rent-seeking government gentrification
          (for requiring maintenance) beyond article 4 scope of receipts and
          outlays, non-voters detesting the wall st Pharma cop oligopoly of
          simple minorities with their own ideological duress? Money taxed just
          raises price for intermediate materials and labor.
          <h2>
            “We are the party of less government and Main St. America,”&nbsp;
            <span style={{ fontSize: "9px" }}>more like market-communist</span>
          </h2>
          <br />
          Home loans by the army actually does affect our ability to be
          suppliers (gentrification) and launders third party beneficiary from
          their customers and employers
          <br />
          <br />
          The radio talk shows are all sponsored by the home financing and
          insurance companies
          <br />
          <br />
          “Donate to shelter to help solve homelessness in LA and around the
          country.” John Bachmann. Money doesn’t do anything, except bailout
          egregious lenders ({">"}5 units or 30 days) and allow them to keep
          operating like this
          <br />
          <br />
          the strong economy as defined by congress is price*hours, and if
          bond-index-funds is not in gini, albeit valued beyond amortization
          capacity in third party beneficiary law counterfeit, Powell will not
          consider its change in effect from his policies:
          poorness=(poverty/equality), which doesn't account for home-prices
          11/1 gdp/down unless it benefits them in withdrawal. Not even btc can
          stop fractional reserves than without third party beneficiary laws
          enforced in invoices, false bid pools (expiring claims), implausible
          landlord use and repo-cycle keeping down payments
          <br />
          get cops off bonds and state off victimization by fines:
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1f71scLubT_A2ps52OmtkwXmA_ELkw7Wc/preview"
            }
            float="left"
            title="John Bachmann Now - More Marxist anti-credit slander"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          the right wants to repo-cycle keep down-payments and loiter as
          borrowers, stoking lender-work-deficit, the left wants to bailout or
          cancel. Third party beneficiary law requites cash:debt*income thru
          history (amortization of reverse dont'cancel or correcting collateral
          fair value to purchases without debt:cash inelasticity 4400%,
          inflation 102%)
          <br />
          <br />
          paying my mom my disability because she has collateralized-debt and
          they cannot touch mine
          <br />
          <br />
          free market communism means no rent-seeking in public nor private.
          public parks is perfectly durable, all else needing maintenance is
          rent-seekable, free rider mutable is reason to keep govenrment to
          sewage police lawsuits and not broadband/bridge-tolls rent-seeking
          instead of target-margin consumer surrogate & jury-for-business and
          free rider immutable truncated sales tax designation. invoices, false
          bid pools and implausble landlord use are theft
          <br />
          <br />
          “For a good big truck you are going to spend $70k easy,” don’t you
          realize you are promising anothers’ money and loitering on the
          collateral?
          <br />
          <br />
          October 2019 respiratory outbreak of asymptomatic-testing vs
          cases,&nbsp;
          <a href="humanharvest.info">
            insignificant hospitalizations & deaths year-to-year
          </a>
          <br />
          "decentralization is to incorporate everyone, whether being corporate
          or individual," says Fetch.ai CEO Humayun Sheikh “Financial products
          make a lot of money, very useful, transfer money across, search and
          discovery of [shipping].”
          <br />
          <br />
          "Demand of maple syrup is up 20%," John Prado ("commercial"-banker),
          because of debt-spending, public and private, why does that not become
          checking, anyway? Demand by more people is actually price-deflating on
          net because they need to work for their funds
          <br />
          <br />
          Options volume on ask or bid thru history would map holdings, like
          “the market” sees in retail trades (non 13d) hypocrisy is illegal by
          making laws for some but not others to disclose, let alone Amendment
          13 being involuntary for being not part of a minimal viable product of
          trade except for spread making (front-running and hoarding by
          “market-makers” “in any direction”)
          <br />
          <h2>
            lenders, insures, landlords, free rider mutable government, and
            competing with consumers lagging work
          </h2>
          "Supply lagging demand," implying suppliers aren’t demand (labor isn’t
          demand) doesn’t need government free rider mutable tax 40%,
          debt-spending 60% and 10-40% debt-service fed-state, it needs target
          margin consumer surrogate in private investors, with invoices and
          insurance banned for settlement instead of breaking third party
          beneficiary standing and grounds
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                racketeeringDoneeClaimables: !this.state
                  .racketeeringDoneeClaimables
              });
            }}
          >
            <h3>racketeeringDoneeClaimables</h3>
            <br />
            third party beneficiary donee as per finance/rentier,
            landlord/lender/insurer work-deficit: invoice,
            expiring/estimated-material-&-labor/plausible undeniability of
            forseeable force majeure (fract-reserve-in-contract) claims (fixed
            with cash:debtincome thru history, truncated sales tax free rider
            immutable sewage police lawsuits multiple of 11/12 industry variant
            jury, 1-level-board max-profit-royalty), implausible landlord use
            (fixed by cap unit or days, not price), &
            repo-cycle-kept-down-payments, loitered for same price elastic
            intermediate good and laundered.
          </button>
          <br />
          {/*} <div
            style={{
              zIndex: 1,
              display: this.state.racketeeringDoneeClaimables ? "block" : "none"
            }}
          >*/}
          False bid pools or accrual
          <br />
          <br />
          <h2>
            why do you count&nbsp;<a href="https://30under5.us">homeless</a>
            &nbsp;as&nbsp;
            <a href="https://brainscan.info">mentally-ill</a>?
          </h2>
          "mentally-ill are those whom are committing crimes too," it is an
          opinion or due to economic policies (10x more hours per home since
          when John Catsimitidis was working-age, not from population growth as
          gdp/p was nearly constant before central banks enabled exorbinant
          amounts of debt)
          <br />
          <br />
          "Bail bonds is nothing at $1k, basically letting this criminal off
          free," Rep Pete King racketeering criminals for bail bonds instead of
          keeping people when evidence is had. Saver wants the third option of
          no-delay acquitting without evidence
          <br />
          <br />
          I went for disability for my knee but they gave it on the basis of
          messy hair, as a mental disorder. Mental disorder is diagnosed by
          opinion and is primary evidence to social security now before hole in
          the leg
          <br />
          <br />
          Infrastructure to the right is paying back the debt instead of
          reversing for impossible and third party beneficiary, they count costs
          40-50% debt spending as costing tax-payers when it if funded by
          share-split of Savers&nbsp;
          <span role="img" aria-label="white-circle">
            ⚪
          </span>
          . Proponents of trial lawyers for pick & choose laws, illegal
          precedence by comparative law, over class solutions
          <br />
          <br />
          Price-fixing is misappropriation, if producers are infinite, but the
          landlord still has a work deficit unless you cap per unit (5) or days
          (30)
          <br />
          <br />
          The right and left wing media think antibodies stop illness rather
          than just their basis rate. Saver is bottom left, where government nor
          business has authority beyond jury-permitting consensus of&nbsp;
          <a href="https://humanharvest.info">the presentable facts</a>
          <br />
          <br />
          <Cable
            style={{
              maxWidth: "100%",
              width: "400px"
            }}
            onError={handleScollImgError}
            src={
              this.state.noSpotify
                ? ""
                : "https://open.spotify.com/embed/episode/3MVGr23zEtyaKeIc3S5nAi?t=3247782"
            }
            float="right"
            title="Spotify - Philip Goff on Joe Rogan"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Matter is was consciousness does
          <br />
          Causal skeleton charge mass
          <br />
          Physical science tells you what chemicals effect but not their vivo
          watched
          <br />
          “Consciousness fills the mathematical structures,” it depends on what
          you define as math, with basis rate fallacy or not.
          <br />
          <span
            style={{
              backgroundColor: "rgba(200,100,150,.5)"
            }}
          >
            “Math is quantitative, not qualities, smell of coffee or red of
            sunset, leaving our descriptors leaves out consciousness itself, we
            shouldn’t be surprised it doesn’t because In Galileo’s error math
            was going to be the language of science, but not the philosophical
            work earth around sun guy did to get there. …Qualities aren’t out
            there in the physical world, but the consciousness of the observer.
            …All is left is the variables can be captured in geometry.”
          </span>
          &nbsp;Assumes apples and oranges can be multiplied in gdp though
          dollars should be fixed for federal inventory as certificates.&nbsp;
          <span
            style={{
              backgroundColor: "rgba(200,100,150,.5)"
            }}
          >
            "If we want to bring consciousness fully into science, we need a new
            world view, we need to find a new way to to bring together what
            Galileo separated, we need to bring the qualitative domain [means]
            of consciousness and the quantitative means of science panpsychism.”
          </span>
          "descriptive neuroscience cannot express red to a blind person,
          entails an explanatory. ...Cannot capture those qualities in a purely
          quantitative language, but panpsychist v materialist..." language is
          only quantitiatively wrong when you multiply units together like a
          dumbass
          <br />
          <br />
          you really don't understand reason as cause without interview as vivo
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/164Nd8ipjyivj26jP7pGKDFqQCCP_uqSb/preview"
            }
            float="left"
            title="GBNews - Mark and retiring conservative, 'on his way out'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Those who’ve lived under marxism, they know what [market-]communism
          was like.” Marx never emulated an infinite producer reason in a finite
          producer world.
          <br />
          “Once a country has lived under marxism, they become passionately
          against marxism thru a time, to discover how marxism really is.” Marx
          is more conservative for labor being exclusively labor without
          market-communist profits withheld, outlay why don’tcha
          <br />
          <br />
          roger christian morathy
          <br />I studied Propoganda at Johns Hopkins University
          <h2>
            Jim Acosta racketeering share-split from third-party-beneficiary
            counterfeit. it is not covid-induced, your asymptomatic-testing
            caused panic, pension write downs and continuing claims to half 65+
          </h2>
          it is impossible to pay back past debt without share-split. you want
          to do it now because the public do not see dollar-park as just that in
          40% debt spending and lender-work-deficit by 10-40% fed-state
          bond-laundering (debt-servicing). the only way forward is to reverse
          debvt:cash*income thru history
          <br />
          <br />
          There is a lag time to ppp trust-building inflation of work deficit of
          corporate profiteers withheld
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/10cpJ47AxAFbzmYqnv8EboEJtbb03Lcpd/preview"
            }
            float="right"
            title="Carl Higbie complaining about inflation 102% but not for market share of government over operational-net-loss with bond but free rider mutable utility, not understanding that prices drop when you do not bid as bona fide conservatives, of labor effort, would"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “The stock market crashed. Only the Biden admin can make the economy
          crash this bad,” Carl higbie measuring the economy by prices and hours
          instead of, well, the opposite
          <br />
          <br />
          Trump did ppp trust-building
          <br />
          Free rider mutable tax 60%, 40% debt spending
          <br />
          “The price at the pump is the greatest factor to see your agenda
          implemented on the US economy”
          <br />
          Things that aren’t possible without heavy subsidies, thinking that
          prices do not fall when capacity to buy is not there. Carl Higbie and
          Josh Mandel are rent-seekers for government contractors, furthest from
          conservative and demand only being labor. Why not target-margin (&
          jury for business) in consumer-surrogate
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1t30NDdxpNjNEGQDSefbflbuN4W-Bnpv3/preview"
            }
            float="left"
            title="Eric Bolling complaining about inflation 102% but not for market share of public corporation profits withheld for useless market-communism, checking account collective bargain"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          The right is pro-fractional reserve in contract
          <br />
          <br />
          Too many old people, 1.2m/yr 75+ since 2015, put money into the
          kettle, we can all be better of by reversing debt:cash*income thru
          history
          <br />
          <br />
          imagine thinking last traded on no volume is "damage," only Eric
          bolling and the Trump/Cheney GOP
          <h2>
            lender work deficit, market liquidity from capping rent at 5 units
            or 30 days to force sale of useless accrual by rent, invloice or
            false bid pools and repo-cycle with down-payments kept instead of
            amortized by reverse cash:debt*income thru history
          </h2>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1P6x8mETIn7I01tCPC7wfnXJGHqZJvFrY/preview"
            }
            float="right"
            title="Eric Bolling complaining about inflation 102% but debt-inelastity is 4400%, not including implausible landlord use and lender work deficit"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Yeah there needs to be something”
          <br />
          <br />
          Bo Snerdley thinks more money makes higher prices, but not credit
          spending. Absolute hypocrisy, asking more about price elasticity after
          me saying money without working age cohort is useless for the same
          intermediate-material-and-labor ask
          <br />
          <br />
          These people are there to make profit[, by any means], not be
          charitable so they can rip them off,” amidst finite producer reality
          and infinite producer reasoning assumption for free markets being the
          most efficient net gain,
          <br />
          <br />
          bipartisans say hours worked is positive instead of positive if under
          another metric like price-deflation
          <h2>$12k/year/person counterfeit in contract</h2>
          republicans do more damage than the government because they want to
          pay off gov debt and private debt, false pool bids, implausible use
          landlord work deficit and keep deficit over repo-cycle
          <br />
          by law and order, but stopping immigration beyond criminal record, is
          prohibiting trade, which is just retarded for productivity per hour
          <br />
          <br />
          But those immigrants in 1850 don’t have claim to this land delegated
          to new ones. And they didn’t build the land nor infrastructure that
          does depreciate in quality and market value of last trade (but
          unbought)
          <br />
          <br />
          bipartisan is not less controversial 60% than 60% along bottom split
          lines, Johnathan Hayt
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1JUT4koSLHbAk2iq627LeYuQgQGIP-1DQ/preview"
            }
            float="left"
            title="Newsmax with Logan Raddick - John Burnett and Steve S. on insurance from racketeering security by fraudulent non-bona-fide-crime"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Insurance companies paying out a claim is necessarily less than the
          expiring-premium
          <br />
          Breaking the bank is fractional reserve to be written down, 60/40 wall
          st/gov and 60% free rider mutable tax, 40% share-split compounding
          against hours worked
          <br />
          <br />
          "Who stands for this slander?” Asks can of their guests, marty tellopp
          and whoever else.
          <br />
          “Islam is not against our National Security.”
          <br />
          <br />
          Communist against invoices, false bid pools & hung-jury-permits
          <br />
          <br />
          official, recognized, proper route is not a reasoning of
          discrimination lest you're thinking immigration is bad...
          <br />
          putting people up with cash is monopsony for same goods of bid-to-ask,
          no?
          <br />
          <br />
          Im proud to be an American, where at least I know I’m free. And I
          won’t forget, the men who died, and gave that right to me, and ill
          proudly stand up, and sing this land is my land, this land is your
          land, from california, to the New York island. 20% of this land is
          backing the US dollar-share-split!
          <br />
          <br />
          Social isn't 'reappropriation, trust building & gentrification' - that
          is rather, "market-communism."
          <br />
          The right calls welfare, 'socialism,' because otherwise calling it
          "share-split" would lead in "accrual" as having the same description.
          <br />
          Market-communism is "dollar-park-share-split, and
          subprimally-redistribution (tax)," for market communists at the
          center, not 'giveaways.'
          <br />
          Redistribution by demand outside a market is "inflation," anyway. 40%
          share-split accrued, 605 redistributed, and 60/40 wall st/Gov
          $12k/year/person new debt
          <br />
          Welfare is "taking goods from labor," that isn't socialism. Occupy
          wall st anti-dead-weight-rentier in supply and demand (only labor) is
          <br />
          <br />
          “Childcare prek, housing more affordable education more affordable.”
          Phil Murphy’s plan is more spending, gentrification & trust-building.
          My policy is to cap rent 5 units or 30 days, reimbursement down
          payments upon repo amortization, replace debt with alternative finance
          (outlay corporate profits immediately, max profit royalty, p2p only
          non-concurrentable), banishment of invoices & false-bid-pools
          (non-rollover-insurance, false collective bargaining lest immediate
          escrow).
          <h2>
            A little voter fraud can go a long way in voter dissuassion in
            non-streamed but tranched results in early & mail-in voting,
            unshuffles, or overnight anomolies
          </h2>
          <a
            href="https://www.statista.com/statistics/284298/total-united-kingdom-hmrc-tax-receipts/"
            rel="nofollow"
          >
            <img
              src="https://www.statista.com/graphic/1/284298/total-united-kingdom-hmrc-tax-receipts.jpg"
              alt="Statistic: Tax receipts in the United Kingdom from 2000/01 to 2020/21 (in billion GBP) | Statista"
              style={{ width: "100%" }}
            />
          </a>
          <br />
          <Cable
            style={{ height: "370px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1VckMAKn52mWm2F7TCGH57WHKxz-AoEVo/preview"
            }
            float="left"
            title="George Galloway (RTUK)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Excess deaths year to year were so constant, seeing the bump in 75+
          population by 1.2m/yr (55m/yr extra people worldwide) starting 2015
          was significant in dispelling my ignorance, but only after it was too
          late. The votes had already been cast, without notaries
          <br />
          <br />
          “For the lord has set his cannon against self-slaughter, I am the
          closest thing you will ever meet than is an entirely, free man” -
          George Galloway, “there’s not really two parties, they are two cheeks
          of the same ass.”
          <br />
          <br />
          “Scores of British tax payer money will have to be settled,” doss this
          bloke confuse settlement with share-split (cancel/bailout) and
          correcting the damages and no more (amortize).
          <br />
          <br />
          <h2>"problem-solvers" vs. savers</h2>
          Gop doesn’t want target margin and truncated sales tax but bailout
          past debt, at least
          <br />
          “Hide their income,” as opposed to corporate profits banked year to
          year, collective bargain my checking account
          <br />
          <br />
          Brought a lot of currency into china, being durables certificated by
          the dollar, albeit share-split
          <br />
          <br />
          Mandates aren’t successful,” as opposed to business without jury upon
          microeconomic infinite producer assumptions (of price quality and
          duress within minimal viable product)
          <br />
          <br />
          Spending is, not primarily taxes for 50% debt spending. Truncated
          sales tax 2025, after cash:debt*income thru history as to no longer
          debt service/bond launder 40%
          <br />
          <h2 ref={this.jesus}>The new covenant with G-d is a toast!</h2>
          “Abraham conquering G-d. Jesus becoming messiah and eternal life.”
          <br />
          <br />
          <a href="https://www.quora.com/If-Jesus-is-G-d-and-He-is-risen-how-much-did-He-really-sacrifice">
            If Jesus is G-d, and He is risen, how much did He really sacrifice?
          </a>
          <br />
          <br />
          I came down here to do that which you solve now with sleighing animals
          to no avail.
          <br />
          <br />
          <a href="https://thechurchoftruth.org/jesus-did-not-die-for-your-sins/">
            Para
          </a>
          &nbsp;Russo
          <br />
          <br />
          none of those quotes are stated by Jesus Himself. He made a toast for
          He knew Romans would crucify Him, because of their sins and hypocrisy.
          'Sacrifice and offering you did not desire, but a body you prepared
          for me; with burnt offerings and sin offerings you were not pleased.'
          "Then I said, ‘Here I am—it is written about me in the scroll— I have
          come to do your will, my God.’” Psalm 40:6, spoken by Jesus Himself
          <br />
          <br />
          “‘The days are coming,’ declares the Lord, ‘when I will make a new
          covenant with the people of Israel and with the people of Judah'”
          (Jeremiah 31:31).
          <br />
          <br />
          “This is my blood of the covenant, which is poured out for many for
          the forgiveness of sins” (Matthew 26:28).
          <br />
          <br />
          Jesus was like, ‘drink in the forgiveness of sins,’ then Peter made it
          a Sunday ritual, the Eucharist. I really imagine Jesus holding true to
          the anti-sin-sacrifice and …lessings of non-concurrentable
          monetary-debits.{space}
          <span
            style={{
              color: "blue"
            }}
          >
            I believe he would support moving to NAICS max-royalty instead of
            current money changing operations
          </span>
          <br />
          <br />
          If fed spend is $4t/yr, why is there only $2t currencyComponentOfM1?
          There is $170t bond value for all collateral equity, land and
          durable-goods, after all
          <br />
          If it is true 41k year carbon cycles are from humans and not natural
          binding, then humans must go extinct
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1HXTP4k7rrBIH0xVru-E3SZwtOlbAhae2/preview"
            }
            float="right"
            title="Newsmax Church"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <a href=" https://www.kingjamesbibleonline.org/Colossians-1-14/">
            Jesus crisps
          </a>
          &nbsp;was never in the Bible, it was written by 1 Peter 2:10 and was
          actually against the sin-cleansing-sacrifices, watch out 1 John 2:22
          <br />
          <br />
          "the Bible is written by Jesus Christ, see corinthians 1 (written by
          &nbsp;
          <a href="https://www.christiancourier.com/articles/699-did-paul-sin-in-submitting-to-the-temple-ritual">
            Paul
          </a>
          ),"
          <br />
          <br />
          <a href="https://www.bible.com/bible/1/1PE.2.KJV#:~:text=13Submit">
            13Submit
          </a>
          &nbsp;yourselves to every ordinance of man for the Lord's sake:
          whether it be to the king, as supreme; 14or unto governors, as unto
          them that are sent by him for the punishment of evildoers, and for the
          praise of them that do well. 15For so is the will of God, that with
          well doing ye may put to silence the ignorance of foolish men: 16as
          free, and not using your liberty for a cloke of maliciousness, but as
          the servants of God. 17Honour all men. Love the brotherhood. Fear God.
          Honour the king.
          <br />
          <br />
          Assumption without backup can be desisted but not fined lest multiple
          times and in capacity without expiring insurance and for numerable
          “damage,” not feelings
          <br />
          https://www.bibletools.org/index.cfm/fuseaction/Bible.show/sVerseID/24083/eVerseID/24083
          matt 24:15
          <br />
          https://www.bibletools.org/index.cfm/fuseaction/Bible.show/sVerseID/2134/eVerseID/2134
          exodus 22:20
          <br />
          https://www.bibletools.org/index.cfm/fuseaction/Bible.show/sVerseID/2957/eVerseID/2957
          levidicus 9:3
          <br />
          https://www.gotquestions.org/millennial-sacrifices.html
          <br />
          "As the Lord’s Supper is a reminder of the death of Christ to the
          Church today, animal sacrifices will be a reminder during the
          millennial kingdom. To those born during the millennial kingdom,
          animal sacrifices will again be an object lesson. During that future
          time, righteousness and holiness will prevail, but those with earthly
          bodies will still have a sin nature, and there will be a need to teach
          about how offensive sin is to a holy and righteous God. Animal
          sacrifices will serve that purpose, "but in those sacrifices there is
          a reminder of sins year by year" (Hebrews 10:3)."
          <br />
          https://bible.knowing-jesus.com/topics/Sacrifice
          <br />
          <br />
          "Contraception is a mortal sin, I don’t care if you have a monogamous
          relationship with your fat wife"
          <br />
          Not enough fornication, to much contraception
          <br />
          <br />
          What is implied from animal sacrifice being required or couldn’t be
          stopped requiring Jesus
          <h2>Jesus died BECAUSE of sins</h2>
          <Cable
            style={{ height: "40px", width: "60px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1ccdgbORmMfrLUx4Bu8wSJnE3R6byDIKT/preview"
            }
            float="left"
            title="John Bachmann Now (Newsmax) - Jo Pinion and pastors talking Jesus"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “Experiment in civil discourse and disagree freely.” Jo Pinion.
          <br />
          Catholic-"Christian“: "Supernatural rising from dead and fulfilled
          prophecies, Jesus is a sin sacrifice.”
          <br />
          <hr />
          Cats: “Paganism-arson a hate crime?”
          <br />
          Curanaj: “What about a mosque, or a Christmas tree that represents
          christianity?”
          <br />
          <br />
          It will hurt our economy, so we need to stop people from exporting
          policy.
          <br />
          Laborless-demand is more work per expense, GDP/p-1/hour
          <br />
          Default is the closing of a surrendered bid of labor-borne-demand,
          kept down payments upon repo for foreseeably non-concurrentable <br />
          <br />
          <a
            href="https://www.statista.com/statistics/298465/government-spending-uk/"
            rel="nofollow"
          >
            <img
              src="https://www.statista.com/graphic/1/298465/government-spending-uk.jpg"
              alt="Statistic: Total managed expenditure of the United Kingdom government from 1977/78 to 2020/21 (in billion GBP) | Statista"
              style={{ width: "100%" }}
            />
          </a>
          <br />
          ("real" is discounting poorness for poverty,&nbsp;
          <a
            href="https://micro-theory.com"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            "true" accounts for bond-index-funds as property
          </a>
          ) "being unemployed means you build YOUR portfiolio." Cindy Adams
          doesn't get it
          <br />
          <br />
          Internet forces credit as income,&nbsp;
          <a href="https://github.com/NickCarducci/mastercard-backbank">
            I have to write my own paytech
          </a>
          . I won’t even take donations until then
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                insurancedisability: !this.state.insurancedisability
              });
            }}
          >
            <h3>
              insurance fraud: expiring claim false bid
              option-general-expiry-by-estimate-court-backed-appraisal useless
              price bid-to-ask inelasticity duress pools
            </h3>
            <br />
            6m/40m from 6m/20m 1970 unemployed, half continuing claims, most of
            disabiity, and 20x/millennial rental-income
          </button>
          <br />
          {/*<div
            style={{
              zIndex: 1,
              display: this.state.insurancedisability ? "block" : "none"
            }}
          >*/}
          <h2>
            Can my mom license as a mental institution so we can get more
            money?&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              Federal living arrangements type D baby
            </a>
          </h2>
          I have a hole im my leg but old people get half of disability, and
          they only give it to me t cost of slandering me as "insane"
          <br />
          <h2>
            Describing me as bizarre without correlative evidence of
            biological-malformity
          </h2>
          You haven’t looked at the evidence, after asking for permission to. I
          have sent the graphical image but your judge’s testimony doesn’t
          mention the muscular-stitches from the initial injury at Bayshore in
          2015. This injury happened next to the trail on highway rt79 on my way
          from my fathers’. This statement is self-evidentiary and my fathers’
          name, Verizon phone records show I lived there in 2015, and it became
          unbearable to walk for more than ten minutes, and now I am disfigured
          as my whole body depends on the&nbsp;
          <a
            href="https://www.researchgate.net/publication/43297722_Repair_of_Traumatic_Skeletal_Muscle_Injury_with_Bone-Marrow-Derived_Mesenchymal_Stem_Cells_Seeded_on_Extracellular_Matrix"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            vastus medialis
          </a>
          <br />
          <h2>Assigning my mother as payee</h2>
          You just want to pay off the lenders whom counterfeit third party
          beneficiary in contract, borrowers loiter and launder from hospitality
          workers like me. The opinions of your judge is presumptive of the
          precedence of incorrect nature - as I have told him on the phone, the
          hospital that diagnosed me said I kicked and punched when I was trying
          to elope, for an appointment that I wanted to fix my leg with
          <br />
          <br />
          People call themselves incorrectly misnomer as they gentrify,
          trust-build and reappropriate-labor, not emulate&nbsp;
          <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch02.htm">
            I am Marxist
          </a>
          <br />
          communism is the worst only when jury makes 1/12 legally-crazy,
          lest&nbsp;<a href="https://brainscan.info">head-dent</a>
          <h2>
            p2p "lending" without time, loitering & counterfeiting, and such
            without false bid pools,&nbsp;
            <span style={{ fontSize: "9px" }}>
              banking collective bargaining remain in concurrentable equity
            </span>
          </h2>
          Share split = monetary-investment(dilution/keep down payment upon repo
          vs max profit royalty)/contributing-partner, unless it is perfectly so
          as global/universal ubi
          <br />
          <br />
          public parks = durable goods/services
          <h2>net export of</h2>
          <Cable
            style={{ height: "40px", width: "60px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1rTktXHe1x8nZzDOO7anMw4sGV38-ZTum/preview"
            }
            float="left"
            title="virus insemination cartoon evidence"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          masks don't stop the&nbsp;
          <a href="https://pubs.acs.org/doi/10.1021/acssynbio.8b00135">cause</a>
          &nbsp;of&nbsp;
          <a href="https://theconversation.com/your-poo-is-mostly-alive-heres-whats-in-it-102848#:~:text=www.shutterstock.com-,Microbes,of%20the%20bacteria%20were%20alive.">
            infection
          </a>
          , illness is likely a warning mechanism of mitosis 1/day/cell
          <br />
          “Vaccinated counties will certainly see less cases,” because you
          aren’t counting all those hospitalized (let alone hospital bed count
          as misappropriated by false bid pools) by the actual cause, not the
          output… debris tested for potential blood clot post evolutionary
          bacterial contamination of cell
          <br />
          <br />
          "how can black people amass so much wealth," says a VA lt gov
          Republican opining upon compound interest
          <br />
          <br />
          <h2>
            Is rhino anti-trump or anti-neocon? Trump is more nationalistic to
            working age deficit boon&nbsp;
            <span
              style={{
                fontSize: "9px"
              }}
            >
              "free money share split tax payer vacation will be paid by our
              children!" - Righties
            </span>
          </h2>
          “Not having safety net does a lot of damage to economies and
          communities,” Larry Kudlow. Prices are elastic, allow people to live
          without income/durable-goods or hours worked instead by ending the
          &nbsp;
          <a
            href="https://30under5.us"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            rentier
          </a>
          .
          <br />
          <br />
          “Need to[ without reason],” arms race to which cats replies
          “understood.” Bite off your tongue, you need to
          <h2>
            regulation by jury science, not licensing. you can
            certify/force-open-source
          </h2>
          paid family leave - give me that opportunity to trade my labor
          commensurately
          <span style={{ color: "grey" }}>
            , not by share-splitting my funds or other networkers of comparative
            advantage in the market
          </span>
          <br />
          <br />
          "medicare negotiating prices," is not price-cap like monthly-savings
          is not higher premiums without amortization, especially when more
          money doesn't actually make the resources it buys
          <br />
          <br />
          “The only way is retreat,” but open carry would have no other use,
          closed carry no less
          <br />
          <br />
          "capital needs, good for nyc and ny," says John bailout Cats, money
          coming in is essential to keep mta afloat." we can reverse instead of
          bond launder 40% debt service
          <br />
          <br />
          Old people say we are entitled with a lack of gratitude, but borrowers
          loiter and rental-income is work-deficit, lenders keep down payments
          upon repossession, and landlords beyond 5 units or 30 days is
          implausible use intent to compete with consumers
          <br />
          <h2>
            nj GOP rent-seeking broadband and tolls, laundering 40% debt-service
            & 50% debt-spending, instead of consumer surrogate and target margin
          </h2>
          "These investments are going to help," jobs and childcare false bid
          non-concurrentable nannycare pools of existing business trust building
          pre-k drinking water fines/government gentrification rent-seeking
          instead of regulations and jailtime.
          <br />
          <br />
          "Prices people pay will override any theoretical, stuff," Bill
          O'Reilly says of monthly deductible savings is "savings" to voters
          even if premium is greater in Sum (amortized, without time-series)
          <br />
          <br />
          2 week anon uuid-broker-trades & executionable-evidence-discovery
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1dmhFv9xjcAMv4wELQ07pAI_eJ2QbblPT/preview"
            }
            float="right"
            title="Spicer & co - Pat Fallon"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          People are taught to hate the country, so we need a draft to change
          that, and literally shoot suspects, ignore evidence of jail for
          pharmacy competition with open source licensure in uppers, when
          forcing a plea by duress to be labeled as disobedient. Rot in hell
          tool
          <br />
          <h2>
            It literally is, "
            <a
              style={{
                color: "rgb(20,100,200)"
              }}
              href="https://www.cdc.gov/flu/weekly/overview.htm#:~:text=5.%20Mortality%20Surveillance"
            >
              just the flu
            </a>
            ."
          </h2>
          the people hospitalized with the merk pill doesn't count those who
          went to the hospital with cause of bacteria but another byproduct
          (basis rate fallacy)
          <br />
          <br />
          <iframe
            style={{
              shapeOutside: "rect()",
              float: "left",
              border: 0
            }}
            src="https://www.youtube.com/embed/OqgUxnqc3AM"
            title="YouTube video player"
          />
          <div>
            <Cable
              style={{ height: "auto", width: "300px" }}
              img={true}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://www.dropbox.com/s/3lmwgcqcvrj1gx2/Projected%20mortality%20census.png?raw=1"
              }
              float={"right"}
              title="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            WWII was a life-expectancy ago... rate of change thru 2009 shows
            this <br />
            <br />
            In US 700k/less and in World 50m/less than population growth a
            lifetime ago... that is insignificant,&nbsp;
            <a href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference">
              changing byproduct testing
            </a>
            .
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "right",
                border: 0
              }}
              src="https://www.youtube.com/embed/m-CwPBcrMYQ"
              title="YouTube video player"
            />
            <br />
            <br />
            {width && <Epiology lastWidth={Math.min(600, width)} />}
            <a
              href="https://youtu.be/Weqb9KrQ-TU?t=21"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              electron microscope
            </a>
            &nbsp;snapshot, cartoon in vivo virus insemination. I think it only
            comes out, & is&nbsp;
            <a
              href="https://wyss.harvard.edu/news/the-secret-life-of-bacteria-revealed/"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              exclusively caused by bacterial infection
            </a>
            .
            <br />
            <br />
            third party beneficiary is our law, no surrender what option to buy
            of intermediate-scope you can't concurrently-fulfill
            <br />
            <br />
            finite producers, 11/12 jury means 1 person is crazy when convicted
            or permitted in duress for minimal viable product for voluntary
            trade
            <br />
            <br />
            ms literally, "matches paralytic polio" in US numbers
            {width && <Polio lastWidth={Math.min(600, width)} />}
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "left",
                border: 0
              }}
              src="https://www.youtube.com/embed/GDOaqkjfIcg"
              title="YouTube video player"
            />
            There is 2k/yr virus discovered, we test for one at a time based on
            predilections, insignificant aggregate hospitalizations when fixing
            for all types, & the only diagnostic difference between bacteria and
            virus is severity
            <br />
            <br />
            even if antibodies just clear up byproduct of bacterial-cause and
            virus only comes out, you can expect this 800n result
            <a
              href="https://link.springer.com/article/10.1007/s00259-021-05314-2"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              4.8%+ lymphoma "hot nodes"
            </a>
            <br />
            <br />
            excess antibodies attacking mRNA-spored-protein-graft
            <br />
            attacking your own cell with protein made from the grafted-mRNA*
            {/*<Cable
                style={{ height: "auto", width: "300px" }}
                img={true}
                onError={handleScollImgError}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://www.dropbox.com/s/mgm24pg4qqzelyy/2009%20index%20wwii%20life%20expectancy.jpeg?raw=1"
                }
                float={"left"}
                title={
                  `indicies of population and monies are expounded, ` +
                  `respectively showing gdp/population is constant with ` +
                  `fixed resources with differing forms and technological ` +
                  `advancements but still same melted- or decompositional-forms`
                }
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <Cable
                style={{ height: "auto", width: "300px" }}
                img={true}
                onError={handleScollImgError}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://www.dropbox.com/s/7juhzw918i6hxwm/index%20of%20growths.jpeg?raw=1"
                }
                float={"right"}
                title="full chart of the above that is zoomed-in"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <Cable
                style={{ height: "auto", width: "300px" }}
                img={true}
                onError={handleScollImgError}
                src={
                  this.state.serviceCancelingImages
                    ? ""
                    : "https://www.dropbox.com/s/6a47ublnabh49ze/evidence%20rent%20no%2045%20to%2055%20work.jpeg?raw=1"
                }
                float={"left"}
                title="population cohorts show dramatic increase of 65-74 cohort over 2010's, absolutely"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />*/}
            "people smoke, and that is why the work is so bad," Greg Kelly,
            "they want to distract us while they steal from us!"
            <br />
            <br />
            <h2>
              <a href="https://www.newsweek.com/industries-staff-most-likely-smoke-weed-1468396">
                you fucking idiot
              </a>
            </h2>
            <Cable
              style={{ width: "550px", maxWidth: "100%", height: "770px" }}
              onError={handleScollImgError}
              src={
                this.state.nofredgraphs
                  ? ""
                  : "https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=500&height=660"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              style={{ height: "760px", width: "100%" }}
              onError={handleScollImgError}
              src={
                this.state.nofredgraphs
                  ? ""
                  : "https://fred.stlouisfed.org/graph/graph-landing.php?g=HRsT&width=500&height=660"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            froth.app/stats
          </div>
          population 1.2m/yr
          <br />
          <br />
          What is the crime of prostitution, duress? Stop saying we don't work,
          we work twice as much than you Goya CEO. Stop slandering socialism as
          reappropriating labor, DROP DEAD
          <br />
          <br />
          “With inflation already going higher, we don’t need anymore spending,”
          Larry Kudlow
          <br />
          What is a safety net that isn't welfare, false bid pools? LOITERER!
          <br />
          <br />
          Good paying jobs is not the goal, we want equity/retire/benefit from
          tech changes! Outlay corporate profits today! Don’t pay us with them
          for government, bond-index-fund, nor corporation profit!
          <br />
          <br />
          brought forward demand for expiring insurance hidden by expiring
          premiums is a false bid pool and third party beneficiary,
          counterfeited. Desist
          <br />
          <br />
          It’s force majeure of changing intermediate good (of grandiose scope
          onus upon the the buyer, estimate) and it is not an explicit option to
          buy at that price by such unfoldingly-impossible
          <br />
          <br />
          “Yeah and she wants to starve banks too, apparently,” Heather Childers
          responds to Bob Sellers, “mhm”
          <br />
          Like restrict compounding to wait for consumers before outlaying by
          accrual-laundering? Or actually cancel, forbidden or foreclosure with
          share-split or down-payment kept? The bipartisan oligopoly want to
          share split and cancel, I want to multiply cash:debt*income they
          history and max profit royalty p2p non-concurrentable
          <br />
          <br />
          To be under contract is a false bid, using your future labor, too. Not
          when it isn’t pooled, it is purely monopsony, not allowing the
          employee to work for their own profit or at least settle per hour
          without signing away rights discrimination for work by duress
          unnecessarily, merely and abjectly to not-compete rather than bargain
          of sorts impossibly in future time
          <br />
          <h2>
            performance degradation isn't even necessarily in your purview
          </h2>
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Za9yLDIaZR17gNa2F0WlShpuj6gbefEI/preview"
            }
            float="left"
            title="Charlie Kirk - producer fill-in, insurance false bid pool coverage, coverage"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <br />
          "time constraints" is not the credit cycle false bid pool expiring
          non-concurrentable collective bargaining fraud scheme, keeping down
          payments upon reposession of collateral loitered. that is not freedom,
          more like freedumb. you can only sell a business account to a group,
          timelesspaydayroyalty scoped for industry-type for p2p only (as is
          non-concurrentable schedule)
          <h2>medical exemption only based on 1600 King</h2>
          <br />
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1UK8cetR32ilUBM-AQODYF-czVgvlFdmv/preview"
            }
            float="right"
            title="LinkedIn JHU post pfizer 'proofs'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Struggling what to do with insurance,” yeah when you are the
          breadwinner (and loiterer, launderer) of the family,” well you can
          have public insurance or just ban invoices. Insurance write down on
          exogenous fraud. It’s what they do.
          <br />
          <br />
          To be under contract is a false bid, using your future labor, too. Not
          when it isn’t pooled, it is purely monopsony, not allowing the
          employee to work for their own profit or at least settle per hour
          without signing away rights discrimination for work by duress
          unnecessarily, merely and abjectly to not-compete rather than bargain
          of sorts impossibly in future time
          <br />
          <br />
          torts/recouperation of true-bid-settled without racketeering is use of
          cops and jail, not net-loss bond profit whom care about us after the
          following, truncatedsalestax.com free rider immutable sewage police
          lawsuits
          <h2>borrowers loiter</h2>
          Cap rent at 5 units (of lease/lien (not-option without settled scope,
          just estimate) & expiring-false-pool-bid mechanic/nanny/doctor hours
          nor outlays, non-concurrentable) per person instead and watch the
          foodstuffs competition from actual liquidity amortize don't cancel,
          bailout nor
          <br />
          Gentrification is not positive. Collective bargaining certainly
          doesn’t work when 50% debt spending, rent-seeking.
          <br />
          If you didn’t force rental-costs and compete with other consumers,
          there wouldn’t only be fast food.
          <br />
          Tax from non-consumer of that market literally, “doesn’t matter,”
          wholly price-elastic
          <br />
          <br />
          excluding the non-contracted contributor (self-profit by money or
          kind) from the wage gap considering average weekly earnings is
          definitely illegal.
          <h2>
            every accountant today is culpable for third party beneficiary fraud
          </h2>
          <Cable
            style={{ height: "440px" }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1EpAirlQVCbgK9FxZq96n8yPPGpLzpsEi/preview"
            }
            float="left"
            title="NJ 101.5 - accountant tells gov Phil Murphy what he neeeds to do"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Are you kidding me, when there is $31b taxes, $60b spending (2016)
          <br />
          <br />
          “Risk and debt, sometimes you have to go splat.” A GOP guy discusses
          his latest haul in the last credit cycle and how his borrowers didn’t
          even think to take their down payments in retribution after losing
          <h2>if you're going to foreclose, I'll forbid</h2>
          <br />
          <iframe
            style={{
              shapeOutside: "rect()",
              float: "right",
              width: "80%",
              border: 0
            }}
            src="https://www.youtube.com/embed/EssAVI0-bhA"
            title="YouTube video player"
          />
          “Handling sadness yourself invokes a great burden on those around
          you,” Biden racketeering for psychologists as priority over the
          folding burden of debt and landlords
          <br />
          <h2>is it deadly or not? article 4 hypocrites</h2>
          If you are in compliance just because your employer-monopsony free
          rider mutable tax and 40% debt spending- not tax payer… 10-40%
          fed-state bond-laundering/debt-service told you to spend on
          asymptomatic testing for 1.2m/yr expected deaths not being a pandemic,
          you can stand down,” Grant "anger management" Stinchfield.
          jury-permits are required for microeconomic reasoning to emulate
          infinite producers, target-margin consumer-surrogate investment bank
          by equity or p2p max profit royalty per IP as well
          #LibertariansAreGimps
          <br />
          <br />
          It doesn’t stop you from being sick, it just stops you from testing
          positive for the byproduct. The only difference between bacterial and
          viral cause is severity, according to current science, which is
          impossible.
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1WxVlPFKH9OkCA9DyFCytyZGJTj8Tqawf/preview"
            }
            float="left"
            title="Spicer & co - lindsay m keith abdication of abnormalities, change, innovation, angles, niches, creativity, uncommon-sense, chicken or egg (it doesn't matter! imagine that"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "Is it normal, or abnormal?"
          <br />
          <br />
          "plenty of busy-work, the american life," while drowning in
          lender-work-deficit, closing the borders to the working-age,
          appraising assets without bid
          <h2>
            <a href="https://www.ftc.gov/sites/default/files/documents/statutes/credit-card-accountability-responsibility-and-disclosure-act-2009-credit-card-act/credit-card-pub-l-111-24_0.pdf#page=21">
              LET THEM FIGHT
            </a>
            ," ftc says to the states about expiring gift cards in
            false-bid-pools, otherwise known as competing with consumers, or
            "insurance coverage"
          </h2>
          Demand increasing by money or accrual invoices debt is like net
          exporting durable-goods for services and hamburgers, demand by
          working-age cohort size is like having everyone chip in
          <br />
          <br />
          “If someone sexually-assaulted my kid, I would want to cut the guys
          head off, I wouldn't be able to control myself,”
          mental-prejudice-false-bid-pool-sponsored deminski and Doyle replies,
          “oh yeah.”
          <br />
          <br />
          "depicting murder of another member would mean censure"
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1j4cdd0GjPNaGNucLdl2fgfTbp5Q4jCSt/preview"
            }
            float="right"
            title="Ocasio-Cortez responds to Gosar video"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "inciting violence, begets violence, like invoices beget expiring
          insurance, silence normlizes violence, women is common with
          psychological, threats beatings, rape or abduction, the intent is
          clear- to discourage them from running for congress."
          <br />
          <br />
          “Political violence, to use your platform to depict violence depletes
          the credibility of this body,” is not defense of livelihood of
          fractional reserve in contract, false-savings-bid-expiring-pool
          <br />
          <br />
          no surrender = claim as much time as i can consume implausible use
          impossible settlement intent
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1nnYWqo7JBLK0s2yHXkbZp5l5knWBWTj0/preview"
            }
            float="left"
            title="McCarthy reacts to Gosar Censure Measure"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          no matter which way this trial shakes out, let's ritualize it with
          pizza rolls every Tuesday and communists see reason over
          countervailing laws and precendence
          <br />
          Kevin McCarthey, "A standard that you have others to abide by, but not
          yourselfs. you see, the other side of the isle incites violence, at
          detriment to this congress, I yield back."
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1z1uQeKUoFxBGkF2gVIYJIG_DG_X_kVTC/preview"
            }
            float="right"
            title="National Report - GOP budget guy"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Socialists’ dream, “tax increases for small businesses,” a socialists
          dream would be to outlay
          <h2>Dr. saveFace vs Epiologist</h2>
          Transmission and spread of covid 19” the only thing spreading is
          testing, amongst 2k/yr newly discovered known possibilities of output,
          why don’t you test for them all to determine that covid is spreading?
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1WSKbJm2cG4PG1d93wYrJE_ab81aBBo_v/preview"
            }
            float="left"
            title="National Report - Dr. John 'good for nothing' Baugh"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          Food pantries buy things for people, but it only helps if it is money
          coming from people also buying in the same market
          <h2>
            prices are elastic, instead of paying credit with bonds, ban credit
          </h2>
          Phil Murphy: "Keep up with higher education, state have role to play
          by donating bond funds that "assist" collges and universities by
          remaining strong, and helping families by insulated them by having to
          pay more
          <br />
          investment in revolving funds is one in affordability and
          competitiveness"
          <br />
          Stop trust-building! A majority of people in New Jersey don’t agree
          with you nor Jack. Investment by government or commercial bank is
          rent-seeking for no benefit except intermediate-good-price-inflation &
          monopsony over NEW educators, especially with 60% tax and 40% debt
          spending
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1QFbwrU6SEn6GVSe7iY4eikQbDEuJHbBu/preview"
            }
            float="left"
            title="Wake Up America - Joni Ernst terrorizing"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          {width && <Dies lastWidth={Math.min(600, width)} />}
          Joni Ernst: "On top of every Americans mine is the covid 19 pandemic,
          and the supply chain."
          <br />
          It’s not a pandemic, you just can’t count, the supply chain is not
          working half as much and issues were prevalent before, being that
          working age cohort size deficit. Epiological issue
          <br />
          <br />
          Origin of covid was a new asymptomatic testing regime. They use &nbsp;
          <a
            href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            cartoons
          </a>
          &nbsp;to prove in vivo insemination and&nbsp;
          <a
            href="https://www.nature.com/articles/s41598-020-73162-5"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            electron microscope
          </a>
          snapshot with&nbsp;
          <a
            href="https://youtu.be/Weqb9KrQ-TU?t=21"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            bacteria and virus
          </a>
          ...
          {width && <TestingCases lastWidth={Math.min(600, width)} />}
          <br />
          <br />
          Bacteria v virus disease diagnostic-difference is merely&nbsp;
          <a
            href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            severity
          </a>
          , according to current scientist guesses
          <br />
          <br />
          Dr. SaveFace says Virus is alive. Is it like, an evolutionary trait?
          Don't trust radio talkshow hosts, trust econometrists
          <br />
          <br />
          No excuse Krugman isn’t age-discrimination for Nobel, as with appeal
          of disability without excuse not to give it with medical historical
          hospital and physical therapy by orthopedist evidence, asked for
          disclosure implies it will be evidence,&nbsp;
          <a
            href="https://www.google.com/search?q=dr+dickerson"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            then photo in appeal
          </a>
          . Give me disability for calling me bizarre for saying
          expiring-insurance is like ftc gift card stance of no-expiry advice to
          states
          <h2>Chris Salcedo: "federal Democratic socialists break the law"</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <div
              style={{
                float: "left"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap"
                }}
              >
                <Cable
                  onError={handleScollImgError}
                  style={{ height: "500px" }}
                  src={
                    this.state.iosNoPhoto
                      ? ""
                      : "https://drive.google.com/file/d/1S6AvYvE1DfYUXTDhZyz02pQSzcO1ODpB/preview"
                  }
                  float="left"
                  title="Phil Murphy - covering the basis, financially, for bond-index-fund contracting intermediate-good expiring ftc"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <Cable
                  onError={handleScollImgError}
                  style={{ height: "500px" }}
                  src={
                    this.state.iosNoPhoto
                      ? ""
                      : "https://drive.google.com/file/d/1jpai688Y5J-tg6XHeqk41EVli-Dzxgna/preview"
                  }
                  float="right"
                  title="Phil Murphy - covering the basis, financially, for bond-index-fund contracting intermediate-good expiring ftc"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <Cable
                  onError={handleScollImgError}
                  style={{ height: "500px" }}
                  src={
                    this.state.iosNoPhoto
                      ? ""
                      : "https://drive.google.com/file/d/1RArQ7ylNrW8poYCWf4KsL9ZxHyFmQ7tA/preview"
                  }
                  float="left"
                  title="Phil Murphy - covering the basis, financially, for bond-index-fund contracting intermediate-good expiring ftc"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              </div>
            </div>
            $100k/year/person of debt is Gov premium for deductible savings,
            (40% debt spend on 40% of total new debt, public and private), how
            is that not checking after credit is spent? $6k
            currencyComponentOfM1/person? Do government rent-seeking hospitals
            just "reinvest" in bonds?
            <br />
            <br />
            "create jobs and grow the economy,"" is merely inequality and
            busy-work, busines roundtable launders gottheimer nj to rent-seeking
            government contractors and bond laundering 40% (10% federal,
            excluding QE?) with 40% debt-spending
          </div>
          <Cable
            onError={handleScollImgError}
            style={{ transform: "scale(-1,1)" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1n_OQsEOdbGI2ll5doHnQMheAwBScVMy9/preview"
            }
            float="right"
            title="Elizabeth Cohen - cnn medical shill"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "19% [defianly excluded from discrininating favored-law of laurels,
          counting only voters, plural-minorities. eligible citizens not with
          standing.]" Elizabeth Cohen.
          <br />
          <h2>
            immunity by clearing byproduct naturally,&nbsp;
            <a
              href="https://health.clevelandclinic.org/virus-vs-bacteria-whats-causing-my-kids-cold/"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              bacterial-vs-virus cell
            </a>
          </h2>
          <a
            href="https://www.frontiersin.org/articles/10.3389/fcimb.2018.00396/full"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            in vivo cell-insemination cartoon
          </a>
          , vs&nbsp;
          <a
            href="https://www.youtube.com/watch?v=Weqb9KrQ-TU?start=21"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            electron microscope snapshot with bacteria and virus
          </a>
          <div
            style={{
              height: "min-content",
              float: this.state.iosNoPhoto ? "" : "right"
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <TwitterTweetEmbed
                key="1428312309685002241"
                tweetId="1428312309685002241"
              />
              <TwitterTweetEmbed
                key="1425460613711605760"
                tweetId="1425460613711605760"
              />
              <TwitterTweetEmbed
                key="1429182687588278276"
                tweetId="1429182687588278276"
              />
            </div>
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ transform: "scale(-1,1)" }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1P7RFjPGgeKCTR-INs5zEV-9wciwkxPot/preview"
              }
              float="left"
              title="Kaitlan Collins - Forbes porait"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Kaitlin Collins: “Roads for so long, aging highways, clear drinking
            water,” isn’t provided my demand of more money rather than
            working-age-cohort-size over rent-seeking-gerontocracy dead-weight.
            Why not regulate don’t fine == jailtime, except for net loss profit
            & closed source licensing saveFace board, target-margin of
            private-investor-consumer-surrogate, & jury-permit science
            mvp-duress instead of industry-precedencial-interest &
            racketeering-malfeasance, force non-“no”-vote-abstain for holders
            <br />
            <br />
            Heather Childers, Chad Wolfe, Bob Sellers, Shut the Fuck up, you
            cannot compare asymptomatic prevalence with symptomatic-testing, nor
            age-standardize without accounting for cohort-size, ever increasing
            1.2m/yr a lifetime-ago, sewage-diminishing-to-plateauing-returns
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1_f4yNmal6jbv5e6Sn_QgO2EWsgSOLGnT/preview"
              }
              float="right"
              title="Mayokas proud of sex offender haul 450/$8b-32b, how much from hearsay?"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "450 sex offenders has been incarcerated by ICE"
            <br />
            The agency has an annual budget of approximately $8 billion,
            primarily devoted to three operational directorates — Homeland
            Security Investigations (HSI), Enforcement and Removal Operations
            (ERO) and&nbsp;
            <a
              href="https://login.gov"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              Office of the Principal Legal Advisor (OPLA)
            </a>
            .
          </div>
          <br />
          <h2>Politics: somewhere between reason and law</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1llsMgN_9Y41Y1zouPEEf4EXGvnK9bivL/preview"
              }
              float="left"
              title="Jersey Shore Premium Outlets for sewage police lawsuits bridge tolls or traffic then 3under2.us without rent-seeking intermediate-monopsony"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            BORROWING-LOITERERS: STOP SPENDING MY FOOKING MONEY 20x/person
            55+/millennial rental-income implausible use or false pool bid
            expiring insurance when you can cash:debt*income thru history and
            &nbsp;
            <a
              href="https://carducci.us"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              truncated sales tax 2025 against menendez
            </a>
            . 60% wall st $12k/person/year, fda craft beer and 40% debt
            spending, 10%-40% bond laundering, to state respectively
            <br />
            laws favor somebody; "the left permit chaos when it refers to their
            [livlihood]"
          </div>
          <h2>
            imagine the release of&nbsp;
            <a
              href="https://carducci.sh"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              inventory
              <span role="img" aria-label="squirrel down-left white-circle">
                🐿↙️⚪️
              </span>
            </a>
          </h2>
          cap 5 units or 30 days for implausible leasee use too
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/19Bd6r59yDt1JZ24LRX4JW_9WLhd9s7mt/preview"
              }
              float="right"
              title="National Report - Addison Smith constipated about Marxist caste-regard critique"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            They literally, "profit off of net loss per incarceration"
            <br />
            Weed cops off {/*strawmanning non-*/}fda craft beer & bonds
            laundering 10% and 40% debt spending Addison Smith, Truncated sales
            tax after cash:debt*purchases thru historically
            <h2>consumer, not animal investment</h2>
          </div>
          <br />
          <a
            href="https://3under2.us"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            sewage immutable free rider, smelly-torts without state as victim
            nor article 4, is not with standing
          </a>
          <br />
          Why cant you have conversations about the case with other jurors? NO
          FUCKING REASON, law-precedence-gimp, becoming-tard per
          natural/comparative law and therefore "" advantage surplus in
          trade-utility,
          <h2>price-deflation per hour over time (roc/t-span)</h2>
          <br />
          "hours logged is success," says Kat Cammack about mayorkas, is
          reciprocol
          <br />
          <br />
          says only symptoms are tested is why positivity is is higher, per
          basis capita
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ height: "500px" }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1j3mvMeMO3OrpSc0wA9Z7g_mJrgXkge2p/preview"
              }
              float="left"
              title="Bernie and Sid - Carrier-Pooled-False-Bid"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “More and more tax dollars to ‘pay’ for this stuff.” A few months
            after Rich Valdes clicks me for calling Mark Levin to discuss his
            pooled-false-demand scheme in CarShield and AmericanHomeFinancing
            <br />
            Most Americans smoke weed, most people are forced into IRA and
            social security by law, stock values aren’t utility nor prices
            <br />
            <br />
            Currency is concurrent units like public parks not 40% debt spending
            nor expiring insurance
          </div>
          <br />
          Not only open-carry, but legal!” CNN analyst on Wisconsin
          <br />
          <br />
          most people that are vaccinated now were forced to
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1gDEFBXYiCvKQFYyDwfmdqw1dSYT3wbUw/preview"
              }
              float="right"
              title="Spicer & co - mindless stable to perjury as if it were tortiable without a victim"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            You can, with their own evidence perjure yourself to get out of jail
            while comparative law says&nbsp;
            <a href="https://teapharmacy.party">
              I can smoke however much weed I want and drive
            </a>
            , by claiming that you were disobedient. then they lie with 13 days
            after I just repeat what Paul Krugman says. not hiring because of
            pothead prejudice is retarded. 70% pro-weed, 10% of the employed by
            corporations... chicken or egg, doesn't matter
            <br />
            <br />
            "duress purjery can bankrupt you."
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <iframe
              title="Masterclass - Paul Krugman, 'insurance is a net loss'"
              style={{
                shapeOutside: "rect()",
                float: "left",
                width: "200px",
                border: 0
              }}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.youtube.com/embed/aJEszZK54dw"
              }
            />
            "Appeals work, when system is deemed to not work, that is really
            bad." Blind justice about itself. 90 fucking days of chaos and
            &nbsp;
            <a href="https://truncatedsalestax.com">called me bizarre while</a>
            &nbsp;Krugman runs free saying,&nbsp;
            <a href="https://www.youtube.com/watch?v=aJEszZK54dw">
              “insurance is net loss,” in a fucking masterclass
            </a>
            <br />
            <br />
            80k/yr missing children maleasance repeat offenders convict
            intranet, login.gov malfeasance, every incarceration net loss profit
            by bonds maakes cops not care, grocer-pollsters malfeasant in duress
            to launder truncated sales tax to their bond-index-funds rather than
            only flat-flat truncated ales tax only AFTER cash:debt*puchases as
            to amortize down payment & repo instead of cancelliung
            gdp/down-payments that is purposefully-impossible and of prisoners'
            dilemma to match
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1KJdnYFYVUQt2lYPv7z6eXMIVnNPNkkqS/preview"
              }
              float="right"
              title="American Agenda (Newsmax) - Bob Sellers and Heather Childers"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "inflation isn't counting services nor home prices, real gdp growth
            (productivity per price-deflating-hour as output) would otherise be
            negative (true gdp)"
            <br />
            "we need to spend more on services because we are spending so much
            on net capital exports (net exports via capital/services), not a
            different party thn the services, no less. we need to manufacture
            the picks and shovels to hug the innovation-curve
            <br />
            <br />
            “We need China for the high technology thing.” I’m peeing
          </div>
          <br />
          <br />
          Saver is libertarian without rentier seen as dead weight, profits are
          net loss of supply and demand individual labor savings, taking glass
          steagall grounds term back
          <br />
          kick you off nj jury duty for thinking torts should be in capacity
          without surrendering your customers/employers cash with false bid
          {!this.state.spotifyerror && (
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://open.spotify.com/embed/episode/06stKb6W6oaMopDgl5lkEG?t=3:55"
              }
              float="right"
              title="Office Hours w/ Scott Galloway - asset-lite flow Uber 2nd holding verbal disclosure (anon-uuid 2-weeks out for every broker-tranche-part)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          )}
          <br />
          <br />
          <h2>expiring insurance is so becoming of your tardness</h2>
          "Pinch and pinch and pinch, less money" means lower prices - if you
          ban insurance
          <br />
          <br />
          m4a was invoices are theft before schumer, but now is like MArk Levin,
          monthly-"savings" for higher premium, 40% debt-spending
          <br />
          <br />
          <a href="https://www.fbi.gov/file-repository/2015-ncic-missing-person-and-unidentified-person-statistics.pdf/view">
            80k/yr missing children unrecovered, that's 216/day, known at least
            since 2015 by FBI
          </a>
          , (for context, 15k/day people die, half of old age, covid with
          standing) and login.gov product-manager unlinkedin me when I lay blame
          on him (convict-intranet actual end-to-end,&nbsp;
          <a href="https://thumbprint.us/phone">tamper-proof dns grid</a>)
          <br />
          law-licensing board of court cases around the country blocks on
          Twitter
          <br />
          <br />
          Atmospheric convection heat/density, population growth life expectancy
          ago 1.2m/yr excess deaths expected ("heat" "rises" aka electrons via
          binding/solving compounds, after sun's ray? wtfff... light speed
          squared is a troll because it literlly, "doesn't matter" and cancels
          out like chicken or egg)
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                prodemic: !this.state.prodemic
              });
            }}
          >
            <h3>prodemic</h3>
            <br />
            US Census and I projected mortality 1.2m/yr+ 75+ 2015+
          </button>
          <a href="https://www.census.gov/library/stories/2017/10/aging-boomers-deaths.html">
            projecting
          </a>
          &nbsp;<a href="https://humanharvest.info">saveface</a>
          <br />
          {/*} <div
            style={{
              zIndex: 1,
              display: this.state.prodemic ? "block" : "none"
            }}
          >*/}
          contributions are doubly trade/spending, with working age cohort size
          and money being the opposite
          <br />
          excess deaths account for
          <h2>
            Federal-courts seem to be …prosecution-favorable” Vinoo Varghese
          </h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1F1gaYqdisbpk2xV1rAswFjMqNYuZdrWI/preview"
              }
              float="left"
              title="Newsmax & 'Bipartisan Research Center'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "This will never go away, but the way to get it under control is to
            get vaccinated" - Bipartisan Research Center
            (plural-minority-collusion, and simply when including the
            ideologically-duress with detest & eligible non-voters)
          </div>
          <br />
          "Boost holiday spike in cases," of testing-basis makes regression
          analysts cringe
          {width && (
            <Lifetimes
              lastWidth={Math.min(600, width)}
              style={{
                float: "right",
                width: "300px",
                height: "200px",
                transform: "translate(0,0)"
              }}
            />
          )}
          <br />
          <br />
          Vaxx and hospitalizations are literally, “positively correlated,”
          using fluview CDC PiC pneumonia influenza covid discharges
          <div style={{ height: "200px", width: "100%", marginTop: "50px" }}>
            <Vaxx
              lastWidth={Math.min(600, width)}
              style={{
                height: "200px",
                width: "100%",
                transform: "translate(0,0)"
              }}
            />
          </div>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1GsZmX019fMpHyLWJHf2nQJ9lbrFS6Uy3/preview"
            }
            float="left"
            title="John Bachmann NOW - crumbling infrastructure racketeering operating contractor & bond rent seeking"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "
          <a
            href="https://froth.app"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            Lawful-order
          </a>
          ”, hung-jury and bacterial v viral diagnosis by severity, in vivo
          cartoon, and electron microscope snapshot
          <br />
          <Cable
            onError={handleScollImgError}
            style={{ height: "500px" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1tu8Q_8rBXugE0StZbaAV4rdZCkBHn5Iu/preview"
            }
            float="right"
            title="Tucker Hawley - debasing mayorkas about something libertarian-danger"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1qX_aUu8a0ffDIUHZ8LEYzqcKC1LpzaI-/preview"
              }
              float="left"
              title="John Bachmann NOW - crumbling infrastructure racketeering operating contractor & bond rent seeking"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "crumbling infrastructure"
            <br />
            tolls for 40% debt spend 10% bond laundering (
            <a
              href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              40% in nj transit...
            </a>
            ), make Verizon pay and target-margins for finite-producer grounds
            <br />
            <a
              href="https://vaults.biz"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              worth its salt
            </a>
            <h2>
              punitive flat flat truncated sales tax 2025 against menendez AFTER
              cash:debt*purchases is only way to amortize, don't continue down
              payment upon repo, bailout nor cancel forbidden by past-demand
            </h2>
            this money will not reduce costs for the american people, need to
            target-margin consumer-surrogates in investors, not
            government-rent-seek housing, healthcare,
            trade-secret-child-concentration-education-camps ...nor broadband
          </div>
          <br />
          <a
            href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            symptoms are the diagnosis of bacterial and viral cause
          </a>
          , they are the same, but bacterial is more acute.&nbsp;
          <a
            href="https://link.springer.com/article/10.1007/s00259-021-05314-2"
            style={{
              color: "rgb(20,100,200)"
              //color: "rgb(20,100,200)"
            }}
          >
            mRNA sporing grafts produce 4.8%+ blood disorder
          </a>
          <h2>existing business complacency</h2>
          wreckless endangerment of another human life (starvation, competing
          with consumers, expiring insurance net loss, "savings" monthly without
          amortizing-(premium) fraud)
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ height: "500px" }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1dtvc0uNrjgLRh5uLGLdeGBa5TjlkeCuG/preview"
              }
              float="right"
              title="public protest in NYC - pfizer for medicare premiums hidden 40% debt-spending"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{ height: "500px" }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1lQmQYx0DwWZsNvA_T9jRYjvomKL3d3nS/preview"
              }
              float="left"
              title="public protest in NYC - pfizer for medicare premiums hidden 40% debt-spending"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{ height: "500px" }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Ez6ksZS6cG9wu961OJslapUrJWlPsa77/preview"
              }
              float="right"
              title="public protest in NYC - pfizer for medicare premiums hidden 40% debt-spending"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            the youth-license law and livlihood gives license, to boot
            <br />
            gross negligence of comparative natural or illegal precedence or
            countervailing law as open-carry without luggage & malfeasance of
            suppressing 90 FUCKING DAYS OF DAMAGE, tort-stewarding capacity and
            victim with net loss profit of bonds is nullifying your honor and
            the law-licensing-boards of the parties
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              style={{ height: "800px" }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1y_lzfInDkQ8OV5YXSHgIgg56VfaJSP7s/preview"
              }
              float="right"
              title="Kyle with gloves dirtied"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            death threats on voting for infrastructure" No labels (bipartisan
            collusion against the majority of non-voters, against wall st pharma
            cop vs wall st pharma cop)
            <br />
            That’s what theft in contract 40% debt spending and trust building,
            malfeasance in justice, will compel. To not make consumer-surrogate
            pay in target-margin for being finite producer and rather government
            rent seeking and 10% bond-laundering is a human rights issue. Please
            desist for your own good, and ours. Stop competing with consumers.
            <br />
            Nick Carducci.sh
            <br />
            <br />
            duress 86% vaxxed isn't a choice autonomous by producers in a finite
            producer reasoned non malreasant justice
            <br />
            <br />
            natural immunity is more effective than vaccination:" that doesn't
            control for symptoms of another cause retard, PIC fluview grasp is
            event put forward by CDC pnemonia influenza covid precedence is
            trash, use jury-permitting for science not industry-saveFace &
            holding-interest
            <br />
            <br />
            fda craft beer & invoices r theft
          </div>
          <h2>
            expiring-insurance is a net loss, I'm called, "bizarre," Krugman
            walks free
          </h2>
          <Cable
            onError={handleScollImgError}
            style={{ height: "500px" }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1JDQze4bt2NuoY6JogVlEuMxa2ZG24kGY/preview"
            }
            float="left"
            title="National Report - Emma Rechenberg hand-raise"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          "when you spend trillions of dollars, you cause inflation" -the
          immutable ted cruz (debt inelasticity) 4400% v 102%
          (debt/down=gdp=11/1
          <br />
          <br />
          “The more the government spends, and prints, the more inflation you
          just talked about. 6.2%…” down payments kept upon repo ignoring
          unsettled, non-tranquil, bid-to-ask inelasticity 4400% debt/checking,
          1100% gdp/down, purposefully-impossible
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ height: "500px" }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1lKNhgxFbH5iADQ9tC3ywRn7XK8_w2E0w/preview"
              }
              float="right"
              title="National Report - Emma Rechenberg hand-raise"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>splitting the bipartisans, the other way, non-voters win</h2>
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              style={{ height: "500px" }}
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1QfdGD9XyBI1-iO4dDhynqENhabsqedUB/preview"
              }
              float="left"
              title="WABC w/ Deborah Valentine - here I tell chat to imagine me dx crotch chopping them"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Inflation 5.8% over 2008 recession,” Invlation v asset prices? or
            from continuing claims.... that's why you fucking retard
            "conservatives" Kilmeade
            {/*width && <InflationAsset width={Math.min(600, width)} />*/}
            <Cable
              style={{ height: "760px", width: "100%" }}
              onError={handleScollImgError}
              src={
                this.state.nofredgraphs
                  ? ""
                  : "https://fred.stlouisfed.org/graph/graph-landing.php?g=IYow&width=500&height=660"
              }
              float="left"
              title="price inflation never by population except when dead weight by public or private"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>
              for the most interesting guck in the world, asset prices isn't
              inflation
            </h2>
          </div>
          <br />
          Everyone is back to work, we have half unemployment:population than
          1970 but 10x hours per home.
          <br />
          <br />
          <h2>the pandemic was never here</h2>
          cohort size isn't accounted for in excess deaths age standardized,
          population growth was 1.2m/yr life-expectancy ago
          <br />
          <br />
          hung jury-permits are illegal no matter what the racketeering courts
          say
          <br />
          <br />
          Scientists today think bacteria and virus are diagnosed by severity,
          nothing real
          <br />
          <h2>
            the right reasons free-market, instead of jury-permit/target margin,
            with infinite producers, hypocritically for government rent seeking
            instead
          </h2>
          make Verizon be consumer-surrogate broadband and target-margin
          <br />
          <br />
          Win that national security free rider mutable federal contract,” John
          Solomon, “nice About rent-seeking instead of consumer-surrogate of
          target-margin, jury-permit private investors
          <br />
          <br />
          Tax for every mile or value is not purchase sales price, truncated out
          of home sales HUD rent seeking government-gentrification, monopsony
          and trust-building contractors 40% debt spending and 10-40% bond
          laundering (debt servicing)
          <br />
          <br />
          Any non-consumer money (or tax) is wholly-elastic, and aid from
          similar demand of industry-predilections or physical contributions are
          help, trade is less so, and corporate profit is harm, why not outlay
          right away?
          <br />
          <br />
          Co-opting mutual aid as investment is predatory
          <br />
          Only money from consumer of the same market isn’t inflationary,
          actually helps. Otherwise physical help
          <br />
          <br />
          Health insurane is a net loss according to Krugman, prisoners' dilemma
          according to me for non-concurrentable-units. M4a meant invoices are
          theft before Schumer
          <br />
          Mechanic and home warrranty grandiose scopes, unsettled isn't
          collective bargain. Is fraud of such
          <br />
          <br />
          Collective bargaining for a purchase is true, but not laundering into
          general accounts or markets to prevent prices from falling by expiring
          insurance <br />
          Public banking is government rent seeking
          <br />
          <br />
          chip and metal shortage is manufactured, inventory is stacked of a
          bifurcating technological market of cheaper gas cars and electric new
          impossibly except for collusion amongst finite producers, abjectly
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1z2ogVdmQMKjN0gCFyts1xRt_e6DMDIhh/preview"
              }
              float="right"
              title="Frederica Whitfield - headshot"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Many are turning to [volunteer organizations, not charities that are
            elastic for same goods, as opposed to actual contributions] to
            collect goods, Frederica racketeers and cajoles aid/welfare by
            share-split instead of volunteering/contributing with actual things
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1a9gLVaGfwwEDrBR_AXo4dxARif9maNx6/preview"
              }
              float="left"
              title="CNN with John Avlon propoganda and slander before jury, whatever (but cannot disclude unless paid platform or jury-desist)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            vaccines are propoganda, excess deaths age-standardized account for
            cohort size, please. notice ms matches paralytic polio
            2.5m/38=39k/yr 1951-53 adjusted for overal mortality (38 is
            life-expectancy, better to know as average-lifetime, of 1900 for
            polio-symptoms, not -cause as is bacteria) by sewage and population
            size (1.25/38=35k/yr)
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1FNVXPggrsPKXYSJFHahpsd1c7BSifa7t/preview"
              }
              float="left"
              title="Frederica Whitfield - Elizabeth Clayborne MD, saveFace efforts for malpractice"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Why is bacteriaphage also called virus? Is it unsure where it comes
            from because you only have snapshot rather than in vivo control?
            <br />
            Scientists think viral v bacterial disease is severity&nbsp;
            <span role="img" aria-label="side-splitting-laughter">
              🤣
            </span>
            &nbsp;is a byproduct not cause. You’re a nut
          </div>
          <br />
          <br />
          expiring-insurance abett invoices begetting expiring-insurance
          <h2>
            broadband rent seeker manchin: will not target margin
            jury-permit-mvp-duress finite producers
          </h2>
          "People need to be working for their benefits,'" Chris Reegan quoting
          Manchin, talking about corporate/government selling out of labor-IP,
          against $12k/person/year funded-jobs from debt/down generated income,
          somehow never becomes checking because of BIPARTISAN FRAUDULENT
          accounting
          <br />
          <h2>
            "reduction of poverty by 50%" for a moment is the best friend of
            poorness, monthly-savings is negative when amortizing premium
            increase-hidden
          </h2>
          rent-seeker for gov contractors and 40% debt spend 10% bond-laundering
          (debt service). They take your econ degree away if you think
          debt/down=11/1 isn’t production, 60% wall st $32/person/day before
          3/2020.
          <br />
          <br />
          "if you can't print it, you can't inflate it," talking about accrual
          and expiring-insurance as opposed to settlement. inflation to people
          means price-inelasticity of bid-to-ask beyond concurrent-reality
          (currency) by any means, not goods price changes from
          dollar-park-share-split alone, without debt:cash*purchases
          USELESS-RETARDATION, for some hypocritical, gluttonous and
          racketeering reason of currency controllers from wall st malintents,
          exclusively. public parks are the backing of the dollar, made by G-d.
          you cannot legally-share-split in compounding nor general-income,
          competing with consumer-terms
          <div
            style={{
              height: "min-content"
            }}
          >
            <div
              style={{
                maxWidth: "200px",
                zIndex: "1",
                backgroundColor: "rgba(0,0,0,.4)",
                position: "absolute",
                left: "0px"
              }}
            >
              RETARD, socialism by name alone
            </div>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1k5Eobtz4lNwWna6QJY197xEMK_Zvaag_/preview"
              }
              float="left"
              title="Dick Morris - retard on radio, consultant for bipartisans"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            sacrifice bond-index-funds and government-rent-seekers on free rider
            mutable operating broadband, roads, oil-pipes, land-bids
            <br />
            the cause of price-changes are debt 4400% and inflation by money
            102%
          </div>
          <br />
          <iframe
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "200px",
              maxWidth: "80%",
              border: 0
            }}
            src="https://www.youtube.com/embed/nKvUf7F4Xn4"
            title="YouTube video player"
          />
          <br />
          <h2>
            Transitory bid-to-ask inelasticity, across Apple and oranges (public
            officials own stock, abstain (not default “no”))
          </h2>
          Wall St is a greater force of inflation (or inelasticity if you are a
          hypocrite about price-changes, by accrual implausibly contracted,
          counterfeit in contract and loitered collateral-intermediate-goods as
          opposed to using earnings like main st and
          bootstrapping-entrpreneurial-laborers), than government, being 60% of
          new debt, $32/person/day
          <br />
          Inflation may be temporary as per wages, but wages are just hiding the
          static inflation, unless you only call inflation changes and disregard
          past demand, and they are intermediate-supply to boot, that is labor,
          that is consumers, inseparable except by precedence of wall st third
          party beneficiary implausibly-compounded, laundered and keeping down
          payments upon reposession like regular entrapments with duress and
          abject-non-consent
          <h2>
            third rail majority is Saver, libertarian and greens are redundant,
            socialists think reposession of collateral shouldn't reimburse down
            payments & price-fixing with welfare is at all social for
            laborequity.org
          </h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/19PM-Mgnaf1tBKWOaqyADICjBdINxJr6c/preview"
              }
              float="right"
              title="Save the Nation (Newsmax) - 'Freedom Works'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Infrastructure is an important topic," says the slighter of
            inflation of free rider-mutable contractor-operating rent-seeking by
            bond-laundering. let private own roads, but margin-target tolls
          </div>
          <br />
          <br />
          <h2>
            no payment, no discrimination, for labor no comment, no
            discrimination
          </h2>
          Think creatively, fantasy-level stuff of fantasies .
          <br />
          <br />
          Third party beneficiary trust-building just like Britney is John or
          Carlson, non-compete. Redraft every season, lmao…
          <br />
          <br />
          You can say people are Willy-nilly without evidence until the case to
          verifiably desist (with proof of not being)
          <br />
          <br />
          Brian Stelter, Rashad: "Misinformation on the platforms we see are
          from a small number of people, so we need to keep them off," only 1/12
          jury of population is crazy and desistable, all else is reasonable
          doubt
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1n46ZWb2JIxj059joG8g1rqAAlnvWbj0j/preview"
              }
              float="right"
              title="Save the Nation (Newsmax) - intro"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            I have been accused of punching and kicking BY THE STATE-HOSPITALS
            WITHOUT EVIDENCE, POLITICAL PRISONER HELD FOR 13 days, trying to
            elope the siringe of medication unrelating to my original knee issue
            and based on the opinion rather than biological malformality that
            non rollover insurance should be illegal is bizarre, while Paul
            Krugman, father of gdp, can describe it as a net loss (that is not a
            productive "business-producer" of willing/fully-aware consumers), I
            arrived at that conclusion with prisoners' dilemma logic and
            expiring-insurance per unit-concurrentable is an oxymoron
            <br />
            <br />I literally had an open shot at their ribs but they claimed I
            hit them then strapped me down
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1k5HHziJp8T-Pp1oqBYwn3JNh8lqDy24q/preview"
              }
              float="left"
              title="Save the Nation (Newsmax) - 'Freedom Works'"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>
              no talent, no problem. trade-secret education, keep kids from
              earning wealth. all in all, you're just another brick in the
              wall...
            </h2>
            "Coping with anemic job growth," in way of preventing immigration of
            working age immediately and doing busy-work (without customers
            down-payment/gdp 1/11), liberty to this afro-tool. My chorer,
            laundering fruits of labor profits to bonds, corporations and
            existing business ppp. calls r&d by rent-seeking-gov and wall st a
            "good thing"
          </div>
          <br />
          <h2>
            Brian Stelter,&nbsp;
            <a
              href="https://brainscan.info"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              mental disorder
            </a>
          </h2>
          mental disorder by name alone, just like diagnosis of
          bacterial-vs-viral infection, "how severe is it?" Bacteria is
          exclusive cause of virus, to submit your preconceived notions into
          evidence is abjectly illegal, but there is always doubt your actions
          are because of a biological-malformality without even
          controlled-correlative-regressions
          <br />
          <br />
          corporate culture is complacent culture
          <h2>
            I guess occupy wall st is on the right, then? I figured more
            bottom-left as Libertarians have higher prevalanece of wall st than
            ideolgically-duressed bipartisans
          </h2>
          CNN: "Will public utilities with operating costs create inflation as
          right wing pundits claim?" it will because it allows bond-index-funds
          not to work and contractors r&d advantage for
          useless-price-inelasticity of bid-to-ask. then they say you
          save-monthly with higher premiums (just like Mark Levin), without
          averageing collective write up costs of expiring-insurance without
          units-concurrentable
          <br />
          <hr ref={this.thumbprint} />
          <TwitterTweetEmbed
            style={{
              float: "right"
            }}
            key="1433877605606952965"
            tweetId="1433877605606952965"
          />
          Kudlow thinks emergency spending is required to keep successful
          companies paying the same intermediate-good prices. Does supply-side
          mean to bloat means of production prices to trust-build?
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/16xeox2a9jgiwAi5ZQHugwsXU4D5ELu2k/preview"
            }
            float="left"
            title="Save the Nation (Newsmax) - intro"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Social safety isn't price-fixing, millions won't be paying for
          decisions of congress because we only service (bond-launder) with 10%
          and debt spend with 40%
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                freedomFromCompoundLaundering: !this.state
                  .freedomFromCompoundLaundering
              });
            }}
          >
            <h3>freedomFromCompoundLaundering</h3>
            <br />
            and retarded comparative advantage, tech advance,
            price-deflation-per-hour nationalism. You've got the thing
            upsidedown.
          </button>
          <br />
          {/*} <div
            style={{
              zIndex: 1,
              display: this.state.freedomFromCompoundLaundering
                ? "block"
                : "none"
            }}
          >*/}
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/15Hxp8VGKCFJWkNPbwQ5EYcXHvGXx22Fz/preview"
              }
              float="right"
              title="Save the Nation (Newsmax) - intro"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Freedom to do what we want to do to fulfill their destiny. Is that
            decided by you laundering to compuond interest (and
            government-/wallSt-gentrification) terms or business account (and
            target margins)
          </div>
          <br />
          "Stabilize Ukraine economy with loans," says IMF {/**Fiona Hill */}
          (keep down payments upon reposession, useless-price-inelasticity of
          bid-to-ask (money cannot wash dishes, but launder to contractors and
          bonds rent-seeking))
          <div
            style={{
              shapeOutside: "rect()",
              float: "right",
              width: "200px",
              border: 0,
              fontSize: "60px"
            }}
          >
            F
          </div>
          <br />
          <br />
          most crimes aren't illegal by natural or comparative law, but
          incarceration makes profit on net loss operation with bonds, which is
          inflationary... a waste... dead-weight, public or private, doesn't
          matter
          <br />
          <br />
          cannot trust finite producers to innovate in a bona fide sense, nor
          regulators to target margin & jury-permit-mvp-duress finite producers
          in a bona fide sense, either
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1ACzvwjH5snzzpBJvJNcwYXX7AMlj5FPu/preview"
              }
              float="left"
              title="Anna Swanson - Forbes portrait"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>
              money growth is inflationary, labor-competition with new business,
              not existing trust-building, is deflationary
            </h2>
            Anna Swanson: "lowering economic growth will lead to inflation," but
            growth is measured by immigration of working age, prices and hours
            determined by anything, including busy work without customers ready
            willing and able or selling business accounts, down-payments to gdp
            1/11
          </div>
          <br />
          <br />
          degrees for the inefficient economists, Larry Summers wants
          tax-revenue by free rider mutable 40% debt spending and 10%
          bond-laundering. He pleads, "Allow the fed to do what it needs to do,"
          truncated sales tax after cash:debt*income thru income is the right
          answer. Not selling out or counting debt and hours as productive
          <h2>
            they take your economic degree away if you are
            anti-debt-rent-seeking as dead-weight, useless for supply and demand
            price-deflation per hour (output)
          </h2>
          "robbed of purchasing power by higher prices," totally ignores the
          bond-index-fund investors not working, prices should be declining
          amongth population growth over time, as was before 1913 if not even
          private banking were allowed to surrender settlement of your own being
          the burden of your customers/employers
          <h2>don't need to engineer interest-rates, can rule it out</h2>
          “Right wing populism is nationalism,” Fareed Zakaria. no inflation, is
          temporary."
          <br />
          <br />
          “Free open and fair economic system,” Dept Defense. Free would be
          fair, those aren’t ever mutually exclusive, unless you think down
          payment kept upon repossession of collateral from loitering-borrowers’
          consumers is free, abjectly lo, by delusions
          <br />
          <br />
          What are the symptoms of strep vs. a viral infection?
          <br />
          A true streptococcal infection of the throat often leads to
          excruciating throat pain accompanied by difficulty swallowing and even
          speaking. Fever may be present, and the tonsils are often covered with
          a whitish layer of pus. Cough and runny nose are not commonly related
          to strep throat, but it is possible to have a streptococcal infection
          along with a viral upper respiratory infection and symptoms of a cold.
          The bacterial infection may result in enlarged, tender lymph nodes in
          the neck. Children may have an accompanying rash; a streptococcus
          infection along with a rash is commonly termed scarlet fever.
          <br />
          <br />
          Why do you need the state to own pipeline, use dollar-share-split or
          tax to purchase and rent-seek free rider mutable, just target-margin a
          consenting consumer surrogate for a toll, no need to rent-seek
          broadband either, no way it saves except in monthly to principal
          hidden like expiring-insurance and M4A; why don't you divide principal
          to month to bona fide compare?
          <br />
          <br />
          Navarro: "everyone can put a 401k and hedge inflation," catsimitidis
          replies, "those people made a ton of money!" what a fucking idiot,
          that is last-trade, one at a time
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1PdnEEY9CA7fw01HdtLCvOAS7mf65p4gM/preview"
              }
              float="left"
              title="Brian Deese - official portrait"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{
                transform: "scale(-1,1)"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/17yzun7_Cvqn7rwDSaR-k1AZuINkvZY38/preview"
              }
              float="right"
              title="Brian Deese - official portrait"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Working with ports across the country, to make production transport
            faster (money cannot wash dishes, demand by more money is useless
            laundering to liabilities & trust-building. DEMOCRATS DONT WANT TO
            MARGIN TARGET. Money is elastic, summers saying it won’t cause
            inflation and will include more people than existing small
            government contractors than contributors and new labor is incorrect
            <br />
            <br />
            Housing healthcare transportation rent-seeking
            <br />
            <br />
            “Artificial interest rates,” but home value isn’t artificial?
            Fucking wall st con. Reverse debt:cash*income stop hiding premiums
            for monthly savings THEN truncated sales tax
          </div>
          <br />
          <br />
          “$24k/yr public schools, tax-payers,” upon 40% debt spending? Stfu Al
          D’mato market-communist. Free market communism now: get wall st out of
          business. Savers pay
          <br />
          <br />
          Eradication of poverty is the best friend of poorness
          <br />
          <br />
          “Artificial interest rates,” but home value isn’t artificial? Fucking
          wall st con Catsimitidis. Reverse debt:cash*income stop hiding
          premiums for monthly savings THEN truncated sales tax
          <br />
          <br />
          nothing socialist about reappropriating/controlling
          <br />
          Supply line traitor by rent-seeking instead of target margin personal
          investment. Stop separating consumers, labor and investors! The only
          public utility that isn’t a waste is contractor and bond laundering
          operating-costs. Bipartisans are a minority, if without ideological
          duress. Only jury can tax beyond sewage police lawsuits, but not for
          operating-contractors nor -bonds, not by bonds (now 40% nationwide,
          10% service, 100% withdrawalable (not at once, collective bargain
          fraud), not "tax-payer")
          <h2>bipartisans looking for a fight</h2>
          <br />
          <br />
          <a
            href="https://health.clevelandclinic.org/virus-vs-bacteria-whats-causing-my-kids-cold/"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            6/2020, WHO:
          </a>
          <br />
          "FACT: The coronavirus disease (COVID-19) is caused by a virus, NOT by
          bacteria
          <br />
          The virus that causes COVID-19 is in a family of viruses called
          Coronaviridae. Antibiotics do not work against viruses.
          <br />
          Some people who become ill with COVID-19 can also develop a bacterial
          infection as a complication. In this case, antibiotics may be
          recommended by a health care provider."
          <h2>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters?gclid=Cj0KCQiA4b2MBhD2ARIsAIrcB-T1u2IWMw6zQLL9M02SXRpxiKQV3FxD52g5QxVZsc3Qnj279KqfoMIaAltVEALw_wcB#virus"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              WHAT A FUCKING JOKE
            </a>
          </h2>
          <br />
          <br />
          First asymptomatic test is retarded in the eyes of a bona-fide
          statistician for time-series (epiology)
          <br />
          Highest testing and vaccination rate is because they are the same
          predolictions zuhdi jasser. Stop blaming the byproduct as cause
          <br />
          <br />
          Chase points paid by investing fractional reserve in contract by
          hypocritical-libertarians by time-royalty not awaiting customers but
          still laundering and KEEPING down payments upon repossession of
          collateral, birthing Marxism as to diametrical opposition to such
          credit/business-cycle
          <br />
          <br />
          "Never done medicine to benefit others,” vaxxers think virion is an
          evolutionary-trait&nbsp;
          <a
            href="https://www.pfizer.com/news/hot-topics/viral_vs_bacterial_pneumonia_understanding_the_difference"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            as opposed to exclusive virion-production by bacteria
          </a>
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({
                bipartisannationalism: !this.state.bipartisannationalism
              });
            }}
          >
            <h3>bipartisan-nationalism of free rider mutable tax</h3>
            <br />
            from outside the market, collective flaccid loss
          </button>
          <br />
          {/*<div
            style={{
              zIndex: 1,
              display: this.state.bipartisannationalism ? "block" : "none"
            }}
          >*/}
          "Trumps economy wasn't anemic like Obama, we have driven all races to
          work," you're going the wrong way JJD, we want less hours-worked and
          more people immigrating-working-age, right?
          <h2>
            fake jobs, demand by money is elastic, demand by immigration working
            age is the other way
          </h2>
          Micron semiconductors: “Sustained government support mean jobs,” is
          literally racketeering R&D monopsony-trust-building existing small
          business over new business, contributors & labor
          <br />
          <br />
          stop laundering share-split involuntary fractional reserve in
          non-signed contract to lenders and landlords for implausible use
          intent&nbsp;
          <a
            href="https://30under5.us"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            number of units beyond 5 or 30 days
          </a>
          <br />
          <br />
          marxists don't want you to go bankrupt but amortize reimbursement of
          down payments to borrowing loiterers' consumers/employer, by reverse
          debt:cash*income thru history, and spoofable=geohash/month reporting
          from your open-source-paytech-provider to accounting softwares and
          banks
          <br />
          <br />
          people on the bottom-left, don't want higher hidden premiums for
          monthly-"savings" in debt-spending by wall st nor
          government-gentrifiers, rent-seeking on operating public networks
          instead of target-margining tolls and production usage, private
          investors. the bipartisan right want to rent-seek broadband with for
          government bonds and contractors without competition of r&d by
          bootstraped contributors, rather small business over new business ppp
          trust-building-monopsony
          <br />
          <br />
          Anthony Scaramoocci: "great investor, keeping down payements upon
          reposession." On dollars, “not worth anything, but you can trade it
          for goods or services.” Actually it represents the deeds of 20% of the
          US being federal lands. "Because of scarcity, prices of Bitcoin is
          going higher.[ But it is merely a surrogate of actual," and is merely
          as secure as the wallet, who store your passwords, unless the
          transaction has your name written on it. Transferring power from state
          to wallet isn't a technological innovation in security, merely a
          social one.
          <br />
          <br />
          who owns bitcoin? it should be given equally first, if anything. the
          nodes are the many copies? the pr copy doesn't seem to say the node
          that affirms transactions updates the history of transactions that
          ever happen. Or is the transaction the hash and not the history, then
          where is it distributed/replicated? the security-contribution of
          blockchain isn't the RSA-modulo-hashing but the consensus with the
          IPFS theorum, which can be achieved by content-addressability if you
          don't need to edit nor anonymize, or an ArrayArrays to match count of
          id to anon entry.
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1rq_W7Sqm35VzGsYW5dsJ5Y925Hcew_Wr/preview"
            }
            float="right"
            title="Chris Salcedo - Thanksgiving rants about trade without accrual, blaming socialists"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Pilgrims cannot do their best work without incentive to do so, while
          right-wingers wish to keep profits in corporations and accrual
          <br />
          <br />
          Chris Salcedo: “Plot of land for each family, hoever much they made,
          was theirs, turned loose the power of the free market, good old
          fashioned free enterprise, …their own crops and products,” without
          third party beneficiary
          <br />
          <br />
          The flaws of user-side is more: who owns your wallet? the ledger isn't
          immutable because the identification is still determined by the
          wallet-auth, who store your password on their servers
          <br />
          <br />
          weed is a competitor to public-park-parks. I was right that dollars
          come from G-d when my Econ double major was taken away from me
          <br />
          <br />
          de-fi decentralized finance from an exchange that needlessly doesn't
          hide uuid in brokerage-tranches unlike {">"}5% equity-13D filers,
          abjectly to compete with consumers. 2 week anonymous-executions and
          execution-discovery-reporting
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1uAbr1jJ8Wo9jnCvp-EqGvgfTO3EjzSgD/preview"
              }
              float="left"
              title="Mark Halpern's voter-biased polls - gloating for duress of infrastructure for 40% debt spend, without even a warning"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Banks consolidate money and loan it out, that’s how banks make
            money, I’m gonna receive my loan, no middle-men.” facilitating
            human-trafficking by proxy, no better than fractional reserve by
            government away from social labor's earnings and individual labor
            savings, only useful on collective bargaining per unit on the same
            market, as productivity by price-deflation is per hour, not GDP.
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1xbr43udEmylbwPwIvzG7JVO52TgKu9ef/preview"
              }
              float="right"
              title="Mark Halpern's voter-biased polls - gloating for duress of infrastructure for 40% debt spend, without even a warning"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            People DO NOT want bipartisan spending on free rider mutable “roads
            & bridges,” when 40% is by new debt, nor even before all debt is
            reversed to cash spending
            <br />
            <br />
            "entitlements are inflationary," but (rent-seeking such free rider
            mutable tolls for target margin AFTER reversing debt:cash*income
            instead of laundering by bailout dollar-park-share-split nor cancel
            forbidden by past settled demand), is not? busy-work if without
            consumer-investor anyway (stop separating them! redundant as all
            fuck)
            <br />
            infrastructure is going to provide jobs for the eastern seaboard,
            the rest is governmental malpractice" RPK
            <br />
            <br />
            third party beneficiary is way to cash:debt*income as amortizing
            reimbursement of down payments upon reposession.. thru supply Chain
          </div>
          <br />
          saver party will retire you,
          <br />
          by class-action-trust-building-tort/amortization or tech-advancement
          without dead-weight-rentier in supply and demand, other than labor
          <h2>
            monthly-savings for premium hidden is a waste, gdp/down-payments
            11/1 is not a job; boycotting credit as income as ticket seller:
            have to make my own paytech. don't let 501c3 rent-seek
          </h2>
          premiums hidden by 40% debt spending is red herring by People's,
          Socialist's and Greens, whom do not want to ban invoices &
          expiring-insurance nor cash:debt*income thru history
          <br />
          reappropriating labor equity isn't social, certainly
          <br />
          transitory is accross supply chain, desistable
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1ZshzQVUqk-igkvo35kId9emEp-MMcQJ2/preview"
              }
              float="left"
              title="The Count w/ rob schmitt - jenna ellis and bruce levell on discovery-related-torts"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            They will use the&nbsp;
            <a
              href="https://github.com/nickcarducci/react-fumbler"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              tools at their disposal
            </a>
            , _ in the hands of the judge. Penalty jail, prison, fine. But they
            make money on that by net loss bonds, to boot. Isn’t that a conflict
            of interest to make the whole judicial body moot? YES, AND THEY ARE
            TREASONOUS
            <br />
            <br />
            <h2>law by name alone</h2>
            Deleting messages isn’t an obstruction of justice, especially not a
            crime in itself to boot except in tortious claims by legitimate
            parties, not the bonded-state without a victim. For instance,
            closed-source-licensure by fda is illegal law, but is convictable
            anyway (for no victim)
            <br />
            “I suppose turnabout is fair play.” Jim Acosta
          </div>
          <br />
          <br />
          you can't 10.5 celcius,
          <a
            href="https://www.carbonbrief.org/explainer-how-the-rise-and-fall-of-co2-levels-influenced-the-ice-ages"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            greenhouse gases make things hotter, but is average heat across the
            poles as well, obliquity aligns with the CO2 binding, so either
            humans come in 41k/yr cycles, or CO2 de-binding is also a natural
            occurance
          </a>
          <div style={{ padding: "10px" }}>
            Im on the left because accrual isn’t income and finite producers
            don’t want jury
            <br />
            <br />
            Non-voters win again! Give us an Occupy wall st candidate (not
            bailout nor cancel, but reverse debt:cash*income)
            <br />
            _a green and socialist candidate was on the ballot. Why you no
            vote?...
            <br />
            they want to cancel or bailout not reverse. Read my platform
            SaverParty.xyz carducci.us
            <br />
            <br />
            Not hiring for smoking or not getting vaxxed before jury that virus
            is a killer is ILLEGAL per natural law, lest give us a list of your
            employees to deflect without jury-truth
            <br />
            <br />
            "Individuals as well, business in general are getting caught in the
            squeeze," cnn abiguates one party into supply and demand to bring it
            forward or whatever the fuck
            <br />
            <br />
            Rat race competing with consumers is not free markets that communism
            seeks to UPHOLD, and market-communism seeks to launder. After all,
            it is not very social to reappropriate the means of labor unless for
            torts, nor keep margins in corporations and unions for without
            perpetual-motion-machines in public (like parks, truncated sales tax
            rangers) else target-margins in private ownership (tolls on highways
            and pipes), consumer as producer choice (charging stations
            margin-targeted as well, as is not a price efficiently found to
            foster output productivity per price per hour, and apples/orange
            elasticity as opposed to insular-market elasticity is as subjective
            as the pricing mechanism is without a bid-ask last trade tick… just
            your gut (propensity to spend earnings…)
            <br />
            <br />
            all retailers with fake consumers (loitering borrowers)
            <br />
            Fortune 500 companies shouldn’t be the goal, taxed for the
            opportunity to sell out is a&nbsp;
            <span role="img" aria-label="red flag">
              🚩
            </span>
            &nbsp;
            <a
              href="https://www.forbes.com/largest-private-companies/list/2/#tab:rank"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              originally wrote this about tax to be public-traded corporate
            </a>
            &nbsp;as opposed to a non-rent-seeking proprietor with&nbsp;
            <a
              href="https://lightte.ch"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              custom contracts
            </a>
          </div>
          <h2>drop dead common-sense: chicken or egg, doesn't matter</h2>
          protection from disearse and death, but those latter aren't judged by
          the actual cause, just the byproduct. still&nbsp;
          <a
            href="https://froth.app/consumption"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            retail sales
          </a>
          &nbsp;have the biggest have most of the debt/down-payment 11/1 share,
          surely not hospitality
          <br />
          <br />
          Their whole lives to save
          <br />
          <h2>proper registration of closed-source animal-testing</h2>
          They were forced to bet on IRA by duress or jail
          <br />
          Truncated sales tax can suffice, to say force was needed to fund free
          rider immutables with asset appraisal based on lies is NUTS, fucking
          afro-tool
          <h2>
            gdp/down-payment is no different to prices than share-split making
            those "purchases" with loitering-borrowers' customers/employers
            money, made true by share-split of laborequity.org
          </h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1aCHWX6VWL86E0WC-WFRIAMS4_PUPFlwv/preview"
              }
              float="right"
              title="Saturday Agenda w/ jo pinion - slighted inflation fears for partial-cause, not even most"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Quarter of a trillion in debt, that is just part of regular spending
            and if that were included, part of mostly wall st. Fucking
            hypocrites. Not hiring people because of your weed prejudice is
            retarded
            <br />
            <br />
            “Inflation effects the middle lower working class the most”
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1xLfnrDWHCYtzezFokQWbbJS40nWDtm0a/preview"
              }
              float="left"
              title="Saturday Agenda w/ jo pinion - Marxist slander"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            wall st and gentrification-by-government is market-communism and
            rent-seeking, occupy wall st is free-market-communism or socialism
            that is labor without dead-weight-rentier in supply and demand,
            outlay profits today. Do not separate labor and consumers of
            intermediate-goods, the value is theirs, not to be reappropriated by
            wall st appraisals and withdrawal-structures backed by court-actions
            and class precedencial malfeasance of natural, countervailing and
            comparative law
            <br />
            <br />
            spend more decrease inflation, I don't know who believes that,
            American people get it, the left doesn't. the left wants more
            control, an accelerated march to communism."
            <br />
            <br />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1zOv5ecK_yGP9xZ4VmhR5EtCATCk0MEOV/preview"
              }
              float="right"
              title="The Count w/ rob - fmr diversity for neo-nationalist-fixed-income job-guy Trump"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Decrease production, increase production, how about allow consumers
            to choose the rate Production by money costs more, less production
            by money costs less. America first without working age immigration
            is retarded to your stated druthers, JIM JORDAN (hypocrite)
          </div>
          <br />
          profits are net loss of individual savings: supply-siders are
          market-communists: "
          <a
            href="https://hightoweradvisors.com/stephanie-link.html"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            stock prices reflect higher profits, and that is a good sign.
          </a>
          " the bitch thinks hours is productivity too. IT'S THE FUCING
          DENOMINATOR IN THE TIME-SERIES under preferably price-deflation than
          output changes
          <h2>
            "are we going to 'get' the infrastricture money, we still have a
            liquidity boom"&nbsp;
            <span style={{ fontSize: "8px" }}>
              you don't just 'get' dollar-park-share-split for rent-seeking on
              operating-contractor purposes
            </span>
          </h2>
          plenty of jobs gdp/down-payments 11/1 is BUSY-WORK without actual
          setlled customers, but not enough working-age immigration, if you want
          that, we never needed emergency policy when cap rent at 5 units or 30
          days, not price
          <div
            style={{
              float: this.state.iosNoPhoto ? "" : "left"
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <TwitterTweetEmbed
                /*style={{
                display: "inline-block",
                position: "relative",
                height: "min-content",
                shapeOutside: "rect()",
                float: "left",
                width: "600px",
                maxWidth: "100%"
              }}
              float doesn't work for twitter api widgets
              */
                key="1421471623136358405"
                tweetId="1421471623136358405"
              />
            </div>
          </div>
          <br />
          <br />
          wages are great for the consumer," are you literally separating new
          business and consumers? 75% of gdp, bitch what is 25%?
          <br />
          <br />
          can't have inflation without financing (cannot spend bond-value on
          goods, but can withdrwawal against it in accrual, fractional-reserve
          in private-contracts. HYPOCRITE non-bona-fide criticism. stop calling
          bond-value savings little bitch kudlow)
          <br />
          <br />
          Why would their not be investors bound to targeted margins for being
          finite producer network? And eminent domain of none except the market
          <br />
          <span role="img" aria-label="clown show">
            🚨🚨🐿🛢🚬💊🤡
          </span>
          &nbsp;without government gentrification rent seeking. Refinery jobs is
          lifeblood of smaller towns, don’t let 10k’s job loss be thwarting
          nobody interested in investment (or carbon binded into the air)
          <br />
          <br />
          sales tax elimination, favorablely-disposed to Eric Adams," Larry
          Kudlow, only because you are laundering to 10% and 40% in state
          debt-service. cash:debt*income thru history and THEN ween cops off
          bonds. tax the outlets
          <br />
          <br />
          Marx is dead-utilitarian, maybe autonomy for emulating in finite
          producers
          <br />
          marxist authoritarian regimes
          <h2>“Trade as economic investment”</h2>
          Newsmax, “relying on aid to survive.” DOES AID DO THE DISHES? fucking
          morons
          <div
            style={{
              padding: "10px"
            }}
          >
            "Accrual couldn’t have gotten out of hand without the fed financing
            it.” These are modern socialists”
            <h2>
              nationalizing, rent-seeking broadband&nbsp;
              <span style={{ fontSize: "8px" }}>
                capital-investment does not increase production, just
                monopsonizes intermediate-supply-demand rather than outlay
                profits now
              </span>
            </h2>
            the right doesn't want truncated sales tax to be enforced, would
            rather home sales tax and debt, but then they aren't bona fide
            critical and say:
            <br />
            <br />
            "Simon and schumpeter+penguin house 27% of the market, cannot do
            anything without 'socialist' approval, they allow profits to not be
            outlaid and used for acquisition? Or do you misunderstand that
            infinite producers is an assumption of the reasoning behind free
            market efficiency in per hour output?
            <br />
            <br />
            “I’d like everyone be a millionaire, but not from [free rider
            mutable tax & debt government contractors] handouts[, yet by
            accrual, keeping down-payments upon reposession].”
            <br />
            <br />
            “Lefties don’t care about work,” the right doesn’t care about ACTUAL
            jobs before down payments 1/11 gdp, mostly because of wall st. They
            think inflation is a bigger deal than debt inelasticity of accrual
            appraised. CANT YOU COUNT BONA FIDE MAN?
            <br />
            <br />
            “Socialist wants government banks, controller of currency, hat in
            hand to foreign oil producers, to stop lending to domestic oil
            production,” I want to stop all lending, which wouldn’t improve
            competitiveness. More money demand is elastic for same resources by
            inelasticity of bid-to-ask, and more labor demand is elastic the
            other way
            <br />
            <br />
            “If it were up to this former communist, we’d be bankrupt!” Any
            cause of bankruptcy is the lending instead of business-account
            trading in the first place
            <br />
            <br />
            <h2>
              prosperity, housing market rebounded and prices are pretty hi-"
              Larry kudlow. "We've had a lot of banking deregulation but a lot
              of m2."
            </h2>
            60% fed bought 40% debt spending 10%
            <br />
            <br />
            Milton Friedman said that is the root cause of inflation while wall
            st makes more of that “Too money [accrual, share-split] chasing too
            few goods”
            <br />
            <br />
            By three months in, we reopened and didn’t need more relief.” 20% up
            was the plan by bipartisans. “Federal reserve was still implementing
            their emergency policies.” Treasury implemented shutdown policies,
            when the alarm was from more asymptomatic testing, not accounting
            for cohort size in timely deaths, making the cause for shutdowns
            insignificant. GOP do not regret spending so much, bailing out
            lenders and landlords.
            <br />
            <br />
            You dollars are getting less because of gov spend, but wall st
            accrual is 1.2x greater..
          </div>
          <br />
          Public housing and infrastructure is rent-seeking by government, 40%
          debt service & 40% debt spending. We need to reverse debt:cash*income
          <br />
          <br />
          SAVER IS BOTTOM-LEFT, NOT&nbsp;
          <a
            href="https://youtu.be/MTM2Pw73Ol0?t=172"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            VAXX-COMPLIANT, ANTIVAXX
          </a>
          <h2>anyone who calls themselves a scholar is a bastard</h2>
          Ro Khanna's latest cajole: "stimulous decreases inflation because it
          increases supply capacity." To purchase trust-building the same
          resources, does nothing for comparative advantage competition, the
          epitome of price-efficiency towards infinite producers, even...
          <h2>follow the white squirrel</h2>
          let consumers decide, but regulate producers,&nbsp;
          <a
            href="https://www.carbonbrief.org/explainer-how-the-rise-and-fall-of-co2-levels-influenced-the-ice-ages"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            understand that ice cores consisting of carbon is not proven to be
            absurd CO2
          </a>
          , the alternative you think is only
          upkeepable-electric-charging-stations, rent-seeked by gov
          gentrification
          <br />
          "people don't want handouts, they want good paying jobs, and an
          opportunity to succeed," those are opposites (oxymoron), Rick Santorum
          <br />
          "100k walked out&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=H5XB"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            due to vaccine mandates
          </a>
          ," Logan Raddick
          <br />
          <h2 style={{ backgroundColor: "white", color: "black" }}>
            inflation is from wall st mostly, 60% new debt $12k/person/year:
            uppers legal by natural law
          </h2>
          brain-fog, is this a long-game to correlate marijuana use? it is a
          currency alternative, you&nbsp;
          <a
            href="https://teapharmacy.party"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            FAT PEICE OF SHIT GROCER PHARMACY GUY
          </a>
          , drop dead
          <br />
          positive-correlation with vaccination rate-of-change year-to-year &&
          hospitalizations, and symptom rate-of-change is insignificant,
          <a
            href="https://froth.app"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            virion-poop irregardless
          </a>
          "sellout to the state to rent seek and remain complacent rather than
          a&nbsp;
          <a
            href="https://github.com/NickCarducci/react-instagram-post/blob/7fb823bffdc7ce83b4a27df576779cfc0eaf9b0d/license.lz.txt"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            UNIVERAL
          </a>
          &nbsp;license,"&nbsp;
          <a
            href="https://truncatedsalestax.com"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            NO THANKS
          </a>
          <br />
          GOP/DEMS, you need to win Occupy over
          <br />
          <a
            href="https://froth.app"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            Same precedenccial excess deaths and hospitalizations for
            cohort-size, testing is basis rate not prevalence
          </a>
          {"<>~o"}; stop terrorising with your bizarre notions without
          concordiance with the jury-truths determined by non-desistations but
          absence of such exclusive-tort, within-ability of individual bid not
          "investors," in purchases without labor in such margins of
          non-perpetual-motion-machine with operating-costs-rent-seekable
          (competing-with-consumers)
          <h2>Cases have to solve, elections have to move</h2>
          everything w/ operating is rent-seekable&nbsp;
          <a
            href="https://constitutioncenter.org/interactive-constitution/article/article-iii"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            like imprisonment for net loss profit, jury-abdication or
            industrial-interest, duress-plea, perjury is moot
          </a>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Wg30Sv47tNa8_ECoTLG0DpUlSR6OrkSX/preview"
              }
              float="right"
              title="National Report - rittenhouse qualifications among police malfeasance"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            got a wide-stance
            <h2>Marx rolling over in his grave</h2>
            Half as many or half as much unemployed to population RATIO since
            half-life
            <br />
            <h2>
              Laws and precedence can be illegal in natural law (NAP,
              comparative, competing with consumer intent)
            </h2>
            Buyer beware open source license fda
            <br />
            <br />
            No breakdown guarantee or it’s free is like a friends and family
            discount, 40% debt-spending of $4t/yr fed spend pre-3/2020 with
            gdp/down 11/1 and $2t cash (pre-3/2020)
            <br />
            <br />
            Your income goes up because of inflation of assets, so is that a
            good thing? " i worry the concentration of state power," but not
            rentier? not bona fide critique
          </div>
          <br />
          Ask Jen Psaki and the White House before they remove their
          overwhelming dislikes amidst login.gov malfeasance for
          repeat-offenders and fraud, if the chicken or egg came first, like it
          matters, maggots grow from meat, the sun revolves around the earth and
          light speed squared, even matters.
          <br />
          <br />
          vaccines/antibodies only clear the byproduct, not the cause of
          infection and illness in bacteria-cell byproduct
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1rN9tCSjZrzT3KFiiV0ot69NV0hiiw0wt/preview"
              }
              float="left"
              title="National Report - rittenhouse qualifications among police malfeasance"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>realizing common sense is fallacy</h2>
            if cops cannot recover nor protect, you can step up. qualify my dick
            <br />
            <br />
            is he qualified? the riots for 90days prior was obvious malfeasance
          </div>
          <br />
          <br />
          <h2>no candidate, no vote, less power</h2>
          expiring-insurance abetting invoices that are theft begetting
          expiring-insurance a vote-no is deduced from not-voting, candidates of
          plural-majority non-voters should have no power and default to "no"
          unless for holdings of industry-interest to force-abstain of
          sitting-officials
          <h2>
            duress is not a choice; off-jury-duty when understanding that
            expiring-insurance is fraud&nbsp;
            <span style={{ fontSize: "8px" }}>
              I called to eliminate copays,” millions of people have trusted
              upside trajectory- Bill Shatner
            </span>
            <div
              style={{
                height: "min-content"
              }}
            >
              <div
                style={{
                  maxWidth: "200px",
                  zIndex: "1",
                  backgroundColor: "rgba(0,0,0,.4)",
                  position: "absolute",
                  right: "0px"
                }}
              >
                MARKET-COMMUNIST WALL ST
              </div>
              <Cable
                onError={handleScollImgError}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1KP6m5YVS2Uc2mqEzWOJhRQBU-oDKfMhP/preview"
                }
                float="right"
                title="National Report - rittenhouse qualifications among police malfeasance"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              non-voters won, not your "compromise," how about some
              RECIPROCATION macro-benefits of roads 40% debt service instead of
              tolls without bond- nor contractor-rent-seeking
              <br />
              "fairly distributed across the country." BET $TBT
              <br />
              At least your socialist colleagues would not and you are willing
              to do so,” have me on, pussy
            </div>
            <br />
            <br />, not "bizzare," and imprisonment by bonded-gov makes profit
            on their net loss operation, insularly (without bonded-with-strings
            as income on all books except m2), such a conflict of interst makes
            all state-prosecutions moot, "for cause" of industry-interest
          </h2>
          <a
            href="https://fred.stlouisfed.org/graph/?g=IHdV"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            teachers back to work
          </a>
          &nbsp;because that is important for teachers and kids," says alison
          maloney, feigning their well-being, prohibiting them from earning
          wealth and open-sourcing trade-secrets for gov-bond and -contractor
          rent-seeking
          <br />
          labor shortage is not an for low pay, but working age. need
          immigration or cash:debt*income thru history with settled transactions
          (by units) afterwards
          <h2>a feigned-cause ignorace</h2>
          wealth tax likely will not be free, merely price-inelastic of
          bid-to-ask
          <br />
          population growth has no effect on gdp/p inflation
          <br />
          debt spending will only increase the inflation rate," buddy, most of
          the problem is private
          <br />
          inflation by wall st, mostly (60% new debt)
          <br />
          Wall st is so much interfering with business that we are about to
          seasonally draft non-compete nannies in expiring-insurance and
          grandiose intermediate-good home-warrantly collective bargaining fraud
          <br />
          <br />
          <h2>tax payer my ass</h2>
          New Jersey spends $31,546,720,000/$59,838,000,000 (2016) and you allow
          Phil Murphy to rent-seek instead of use tolls and target-margins,
          allow producers to invest, before reverse cash:debt*income instead of
          cancel forbidden by past demand, to boot
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <h2>had your entire lives to save</h2>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Vm7sbQjl0DCdSPu7e7f6wfLpDfaYQUkn/preview"
              }
              float="right"
              title="National Report - GOP gerontocracy rental-income plea"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "People are feeling it, especially those on fixed income," they are
            reliant because of that, finance & corporate profits prohbits
            savings of individual labor savings. learn some fucking economics
            old hick. Biden is continuing Trumps' spending & trust-building
            policies. even if pandemics had grounds to fix prices, fix for
            cohort size. virion is dead byproduct of bacteria and cell, not the
            cause of infection nor illness
            <br />
            <br />
            only charity from another customer of what towards ask-dollar-market
            is to be bought, is not a total bid-to-ask waste. money from
            share-split or an unused checking account is merely price-elastic,
            and useless
            <br />
            <br />
            Why is there only $2-6t currencyComponentOfM1 checking when $4t/yr
            should be new cash down-payment portion of gdp $20t? The 40%
            debt-spending with strings should come out as $1.8t/yr excess cash,
            like births life expectancy ago accounts for deaths not having to
            count the whole. There must be an account where $1.8t cash from fed
            spend is destroyed, but the $18t debt velocity in $20t gdp remains
            the same
          </div>
          <div
            style={{
              padding: "10px",
              backgroundColor: "rgba(255,60,60,.4)",
              color: "white"
            }}
          >
            where do you get that assessment of socialism from? Socialism is
            when labor has means
            <br />
            <br />
            _ Socialism is when government owns and controls the means of
            production. Setting prices is regulation of exchange of goods.
            <br />
            "so·cial·ism
            <br />
            /ˈsōSHəˌlizəm/
            <br />
            a political and economic theory of social organization which
            advocates that the means of production, distribution, and exchange
            should be owned or regulated by the community as a whole."
            <br />
            <br />
            “owned by the community” by the whole is a misinterpretation of
            Marx, against credit cycle and corporate profits, where labor has
            all margins. I’m disappointed in that google result, an affront to
            people that actually studied historical markets.
            <br />
            “According to Marx's theory, surplus value is equal to the new value
            created by workers in excess of their own labor-cost, which is
            appropriated by the capitalist as profit when products are sold.”
            Occupy wall st is like free market communism, force profit outlays
          </div>
          <br />
          stock options isn't money you fucking retard, good morning bad news,
          tax breaks on loan interest is also retarded unless you are the
          government contractors/lenders... subsidies off the ground isn't
          really the chance given since it pays .8 debt for every dollar without
          strings
          <br />
          <br />
          "Zip now, pay later," literally loitering for useless price
          inelasticity, thanks wall st
          <br />
          <br />
          “We don’t want politics in this case: no more black pastors!”
          <br />
          You’re allowed to influence the jury with TRUTHS
          <br />
          <br />
          Nearly on market-communist, right-wing, expiring-premium for
          deductible Mark Levin radio-show:
          <br />
          "It will depend on what the jury believes,” alan dersh, what a nut
          <br />
          <br />
          alright take a break fatass
          <br />
          Courageous enough crazy enough to keep working against $32/person/day
          new debt from wall st, not gov as much as spending is not tax-paid at
          40% debt-spending and at best 10% debt service, keep getting up,
          shutdown closed down the world 60m hotel-restaurant let off? That
          sounds like more than total 170m employed,&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=H5XB"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            I count -34m -4m-18m+12m unemployed (12k, 1.2m, 1.4m continuing
            claims) [15-24,24-54,55+] got back to work within a few months after
            3/2020
          </a>
          , but Trumps’ ppp trust-building is continuing, like claims for mostly
          65+, but recovery in employment to population is all 15-24. the
          elderly still maintain&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=FSwQ"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            their 20x/person rental-income 55+/millennials
          </a>
          <b>
            scanning for bona-fides: craft beers, r&d monopsony,
            education(trade-secrets)
          </b>
          <br />
          open-carry-without-luggage is causes war like
          open-source-without-teapharmacy.party licensure
          <br />
          <br />
          <h2>
            “Giving money to terrorist organizations like Black Lives Matter!”
            Catsimitidis
          </h2>
          On way to battle violent crime by prejudice is inviting livelihood
          &nbsp;
          <a
            href="https://nationalsecuritycasino.com"
            style={{ color: "white" }}
          >
            castle doctrine
          </a>
          <br />
          <br />
          “Giving money to terrorist organizations like Black Lives Matter!”
          Catsimitidis Capital instead of expiring-insurance abetting invoices
          begetting expiring-insurance. Purposefully-impossible AND implausible
          use, borrowers loitering on lender-counterfeit-in-contract-collusion;
          20x/person rental-income 55+/millennials, wall st debt inelasticity
          bid-to-ask 44x, inflation merely 1.2x, gdp/down-payments literally,
          “11 debt for every down payment,” mostly wall st, lo 40% fed spending
          and debt spending of $12k/person/year for $4t/yr free rider mutable
          tax, rent-seeking for contractors and bond-index-funds the operating
          and upkeep of the eminent domain taken from a bizarre notion of
          “tranquility,” to literally mean, “pay premium for lower
          monthly-deductible.”
          <br />
          <br />
          10% debt service, except 40% turnpike akin to fed racket. families
          don't need it until&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            invoices are theft and insurance don't expire
          </span>
          <h2>
            America first will falter for loss of comparative advantage per
            hour, excess bid-to-ask&nbsp;
            <span style={{ fontSize: "8px" }}>
              immigrate working age, by size
            </span>
          </h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1MWkVVA7Js3xVl25-pEGAVgXMgjTphW5m/preview"
              }
              float="left"
              title="nj 101.5 & Rudy Giuliani - VA insurance expiring-insurance ebetting invoices begetting expiring-insurance"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            is VA just another insurance supply-side scheme to bring forward
            demand for monthly-deductible, deductible?
            <br />
            <br />
            “I get my care from the VA and have been waiting for an
            appointment.” It just doesn’t help to herd non-compete drafts beyond
            the season. collective-bargaining non-competes beyond rollover-tech
            minutes into schedules of not just outlays but hours
            non-concurrentable, idk man. investment banks can keep to equity,
            timelesspaydayroyalty scoped for industry-type for p2p only =&nbsp;
            <a
              href="https://altfi.agency"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              alternativefinance
            </a>
            <br />
            <br />
            truncated sales tax ween aid & comfort to production tax of law
            without rackets. open-carry is the cause... you are saying the cause
            of jan 6 is not having&nsp;
            <a
              href="https://thumbprint.us/voting"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              content-addressability
            </a>
            &nbsp;in elections?
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1_84GrnemaNdpGtTtm5pKlZjHs17Shl_Q/preview"
              }
              float="right"
              title="Allison Maloney - Jan 6 bipartisan exclusion of anti-wall st. non-voter"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "This is not hypocrisy, this is not double standards
            <br />
            This is about safety
            <br />
            Rittenhouse - or jan 6/afghanistan." Holy shit wtf are you talking
            about
            <br />
            Hope right, for an afro-wall-st. Gotta keep up instead of slow down,
            right{/**si se (te?) puede */}
          </div>
          <br />
          <br />
          "do things better, sex crimes, fraud, you name it,"
          <h2>
            <a
              href="https://nationalsecuritycasino.com"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              r&d, jury-permit, convict-intranet failures
            </a>
          </h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                transform: "scale(-1,1)"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1ExEXuhF2FfrcxX2Y8bEiwaI4-yJ1QRhX/preview"
              }
              float="left"
              title="Phil Murphy FB - solar panel gentrification and trust-building"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Open design
            <br />
            <br />
            When your baby goes to bootcamp rather than your husband, it’s been
            a hard two/few weeks,”
            <br />
            <br />
            Jobs is the denominator of productivity, haha, busy work might take
            “creative destruction” literally and create shovel ready jobs by the
            latter. Any job a politician creates is a waste. Only customers can
            create jobs
            <br />
            <br />
            “Unlike most of wall street, we only have.one boss: our customer” Ed
            Bugos dollar vigilante, vigilante meaning a risk, discounting even
            potential-market-entrants, more and more as
            bond-value-withdrwawalable overpowers dollar
          </div>
          <br />
          <br />
          We are feeling richer because the wall st gains,” you feel wealthy,
          not be wealthy
          <br />
          Always transitory, this and that, holiday spenders is high, retailers
          already spent,”
          <br />
          <br />
          Deficit concurrently when bundling apples and oranges, not price
          elastic, transitively
          <h1>
            charity is useless price inelasticity (bid-to-ask), contributing (by
            project)/volunteers (by hour) is not&nbsp;
            <span
              style={{
                fontSize: "8px"
              }}
            >
              unless the giver was going to purchase in the same market with
              that money, of course
            </span>
          </h1>
          "I think it was a good bill, not a great bill," rep. Bacon on his 13
          GOP bipartisan government-rent-seeking
          <br />
          it is ideological duress
          <br />
          trust-building
          <br />
          <br />
          Education is merely closed-source trust-building, every Gov program is
          price-elastic waste
          <h2>the kids should work</h2>
          Judge Janine wants to keep the kids dependent with trade-secret-op by
          60% tax
          <h2>
            cant audit magnetic-data, dunce. Need content-addressable voting
          </h2>
          Wall St is the cause of inflation, but GOP/Libertarians will not
          curtail them from getting in our business' and means of labor,
          innovation liker pipelines should be privately invested &
          margin-targeted (finite prod)
          <h2>
            excess deaths cannot account for cohort size, not plateauing
            lifetime with sewage of wrinkly-old-80
          </h2>
          At least eminent domain only considers article 4, not oil. Then all
          but Saver antimandate says, "not antivaxx" giving credence to virus
          for being deadly but not a national security issue, stead of
          bacterial-cause
          <br />
          <br />
          Networks for oil can be margin-targeted, not owned and rent-seeken by
          the state and its lenders/contractors
          <br />
          <br />
          Fines instead of regulation means no corporate leaders jailed only
          regular-people which is net loss profit by bonds
          <br />
          <br />
          130k veterans suicided much needed solutions is not taking guns from
          people that are sad. I would argue those without emotions are more
          dangerous
          <br />
          <br />
          rule of law is no longer if it isn't prosecuted in
          comparative/common/natural law, lest you're prejudiced
          <br />
          <br />
          invoices beget expiring-insurance. m4a according to Schumer is not
          invoice are theft, but higher premiums hidden by 40% debt spending 10%
          debt service, .8$ for every dollar fed spending (without strings, not
          counting it twice as debt & spending concurrently)
          <br />
          what nationalization entails
          <br />
          dangerous libertarians
          <br />
          <br />
          Eminent domain for utility patents, I’ll give mine if you give yours.
          Nothing is invented by humans, just discovered, but that doesn’t mean
          the capital is a perpetual motion machine without
          government-contractors taking rent or laundering to bonds, as 501c3
          dissolves to such a black hole
          <div style={{ padding: "10px" }}>
            wabc highlights
            <br />
            If you don’t have a simple majority of eligible voters, you can’t
            just decide a collective bargain eminent domain, especially if
            rent-seeking by it inextricably linked to contractors
            <br />
            <br />
            Sewage police lawsuits article 4 is free rider immutable, is nat
            sec, but collective bargain can happen if subcontractors don’t
            benefit, certainly not got to benefit government contractors
            <br />
            <br />
            Wabc wants to hide higher prices from wall st debt spending in tech
            advancement, and “ we will pay any price,” self indulgent eminent
            domain, defeating its purpose
            <br />
            <br />
            America first America last then realizing common sense is wrong and
            slavery it’s retarded (comparative advantage tech advancement -
            "Illiterate father made Fredrick Douglas chore all the time"), for
            per hour price-deflation amidst population growth, being normal
            without debt, mostly exhibited by pre-1913 gdp/p being nearly
            constant
            <br />
            <br />
            Grid R&D by gov becomes outdated faster than they contribute,
            deregulation of jury-found mvp duress truth isn’t a contribution
            <br />
            <br />
            Everyone wants clean water, socialist control of the economy to
            ensure trade is trade , as gdp/down payments is not job, and big oil
            is not voluntary. Don’t meet market communist broadband, but
            socialist keeping individual actors out of defining truths (accrual,
            hung-jury-permits), keep Gov and wall st out of HHS business, not
            regulating oil or charging station of rentier upkeep duress
            <br />
            <br />
            Recession is due to deflation, economic pain,” James Golden.
            Deflation means that means of labor decreases cost, inflation
            doesn’t create jobs of utility, just jobs (busy-work,
            trust-building)
            <br />
            <br />
            Occupy is free market communism
          </div>
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ freemarketcomm: !this.state.freemarketcomm });
            }}
          >
            <h3>free-market-communism</h3>
          </button>
          <br />
          {/*<div
            style={{
              zIndex: 1,
              display: this.state.freemarketcomm ? "block" : "none"
            }}
          >*/}
          Mark Zandy (CNN): “spending/tax will not add to inflation,” it will if
          it was going to be outlaid to coorporate profits, but
          debt-inelasticity is a graver differential, 44x vs 1.2x
          <div style={{ padding: "10px" }}>
            Newsmax highlights
            <br />
            Don’t bring it up if already moot by another court, but the torts
            beyond possible is of matter to every tort…
            <br />
            <br />
            You need to prove guilt, that is why so many cases don’t make it to
            trial,” uh, no, trial isn’t had for people dubbed insane for poor
            wall st & gov (rent-seeking hhs, cap rent 5 units or 30 days
            implausible rentier use) driven economic conditions driving
            homelessness, just labeled mentally-insane.
            <br />
            <br />
            Only jury 1/12 is legally crazy, without reasonable doubt
            <br />
            In defense of property in way of livelihood, extrapolating is fine
            for coins if that precedence isn’t also based on lies
            <br />
            <br />
            “One person didn’t have a gun, so it is ill-founded, but is it
            reasonable?” Megan Kelly. That’s pretty synonymic
          </div>
          <br />
          Please speed it up,”
          <br />
          You told us just now you needed it for protection”
          <br />
          I did but I didn’t think I was going to need to protect myself”
          <br />
          You brought it for protection, but didn’t think you would need it for
          protection?”
          <br />
          I’m trying to clarify the two different answers I think he just gave,
          it’s your honor”
          <br />
          Go ahead”
          <br />
          I asked you why you brought the gun, you said you needed it for
          protection [in case, not will need]”
          <br />
          I said, “protection against what,” you said “you didn’t think you
          needed protection. I’m confused, can you help me understand why you’re
          telling us you needed a gun for protection, but didn’t think you would
          need a gun.” You prepare for the unlikely too. Life isn’t an expected
          Sum, obscured by the mean or random-emulated sample.
          <br />
          I needed the gun for protection but I said I didn’t think I would have
          to use the gun and end up defending myself.
          <br />
          <h2>jury-permitting-mvp</h2>
          “People are being banned on social media for arguing for Kyle’s
          innocence[, but not for guilt to boot],” says Rogan O. to Emma
          Rechenberg “We will await a jury decision.” Thinking a 12 person
          sample without every person included (included, not discluded for
          temporary-notions), and voluntary is more random than such. When I say
          jury defines truth, I mean 11/12 of a population. Not randomness
          emulated or even the deterministic-randomness of fate/G-d
          <br />
          <br />
          “Friendly” says the potentially-guilty, but that would be
          intent-bona-fide, intent to not neglect intent, as a guilty mental
          illness wouldn’t
          <br />
          <h2>
            “Mass psychosis,” every episode is rational, ask a murderer why,
            without a motive it isn’t necessarily of chargeability. You,
            however, are misleading people, which is not an issue with their
            mind unless you show me brainscans
          </h2>
          <br />
          Bats and clubs, mele weapons, “doesn’t think they have those things.
          Why is skateboard guy not on trial if you aren’t allowed to skateboard
          open carriers?&nbsp;
          <h2>Just because the illegal-precedence went wrong this time?</h2>
          <br />
          <br />
          Shouldn’t leave it behind, “ to protect me in a hostile environment,
          not hostile against me by prejudice[, evidently going to stop fire],”
          <br />
          “I told him I was an EMT while I wasn’t,” wearing gloves already dirty
          <h2>
            "loose cannon," malfeasant cannon critique with countervailing
            natural & illegal-precedence, "protect your property, not the
            streets"
          </h2>
          Dems, republicans, libertarians & greens agree on rent-seeking, but
          not the plural-majority non-voters, nor even simple majority
          ideologically duressed voters
          <br />
          <br />
          I want popular vote of non-voter plural-majority to turnout, rank
          choice ruins our chance about the AARP Bipartisans.
          <br />
          <br />
          there aren’t enough stances for that many parties. It is wall st
          pharma cop by premium, wall st pharma cop by premium, anti rent
          seeking . There are three colors Red WHITE and blue. Libertarians are
          hypocrites for private debt and greens want cancel or bailout,
          not&nbsp;
          <a
            href="https://www.theatlantic.com/politics/archive/2011/10/poll-most-americans-support-occupy-wall-street/246963"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            reverse debt:cash*income
          </a>
          <br />
          <br />
          gdp/down-payments 11/1 is busy-work, not a business. surrendering your
          expiring-insurance is third party beneficiary standing of your
          customers. 20x/person rental-income 55+/millennials&nbsp;
          <a
            href="https://30under5.us"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            implausible landlord use
          </a>
          <h2>
            "no business being there, no business with a gun, no business
            shooting and killing two people"
          </h2>
          State prosecution: "so if law is not being enforced, you can
          disreguard it?" YES THAT IS COMPARATIVE LAW! judge doesn't allow him
          to answer for? class precedence malfeasance american bar assocoation
          racketeering. UNBLOCK ME BITCH
          <h2>
            Prosecution (guilty of open-carry-laws, no-luggage): Nick Smith is
            allowed to "guard properties," if only cops can brandish for arson,
            and you can bop somebody in the nose for stealing your car, what
            about mall cops?
          </h2>
          <h2>
            Turning point thinks religion "barring you from choice," but
            anti-mandate not anti-vaxx, saying keystone XL is national security
            issue, but virus is cause and not merely byproduct of bacteria =
            tards
          </h2>
          "not allowed to protect property," that's why you are there, is your
          reason for protecting property with your gun just because people are
          there && you happened to have your gun?
          <h2>Involuntary</h2>
          <br />
          portapotty, flatbed trailer, you'd agree unoccupied car on fire,
          traffic cones, on fire, correct? correct “Being mad about something,
          along those lines,” would like to have a gun… that is neglect of what
          is justifiable to be mad about, unless you think the other will think
          such a thing. Just like prisoners’ dilemma duress insurance &
          reciprocation
          <br />
          <br />
          fire-cadet-member vs on-roster (Andiock fire depaertment, liability
          reasons "invoices begets insurance" only ride-along)
          <br />
          Entrapping by video games, gives stunning Full-bore blowback recoil
          response, yeah I like video games and guns, but that isn’t real life.”
          Follows with, "are you trying to be famous," Yes! Then grills the
          18-year-old on his emt work, "when was that," as the prosecution puts
          his elbows out, as if he were about to do the chicken dance
          <br />
          <br />
          intent-neglect prejudice of jury-truths (11/12) as attorney aba with
          conflict on interest to
          <h2>im in contempt under moot duress to out my sanity</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1wM-jROJPp1FV_rV91-8x7fxd0dErjc69/preview"
              }
              float="left"
              title="Phil Murphy FB - solar panel gentrification and trust-building"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            when you can hate by saying tard but not retard, you know education
            closed-source DOESN'T WORK
            <br />
            how is curfew relevant to decision-making but
            <br />
            what he thinks of law is dispositive, anyway. natural law TRUMPS lil
            bitch
            <h2>
              <a
                href="https://teapharmacy.party"
                style={{
                  color: "rgb(20,100,200)"
                }}
              >
                class precedence malfeasanace
              </a>
              &nbsp;- racketeering, trust building
            </h2>
            "There to help people is what defense attorneys would say," no a
            good, bona fide one would say he wanted to “protect his livelihood,”
            are police doing enough?
          </div>
          Maybe it is racketeering, excess deaths don’t standardize for cohort
          size
          <br />
          Occupy is free market communism with jury for duress within mvp
          (11/12) not simple majority
          <br />
          Elections are for movements and can be won on a plural-majority.
          Occupy never ran a candidate
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1YqIDonTmY-4-Hgd0ZIyzeeHs5rYZkXhw/preview"
              }
              float="right"
              title="'Occupy' Democrats - zuckerberg between two real occupy stances (without rent-seeking)"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            {/**4 more yrs. Please take your meds. And please don't drive. Less nuts are good. Phil Murphy is your governor
                · 46m
                Nick Carducci

                vaxxers think virus is alive and cannot account excess deaths for cohort size. I'll choose what drugs to take, top-left
                · 44m
                Nick Carducci

                non-voters won, claimed that no candidate was available. no politician has consent of majority if you know how to count, you tard
                · 43m
                Nick Carducci

                probably on pension. your whole life to save. pathetic old man, gdp/down-payments 11/1 isn't a real job, just busy-work & self-harming */}
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1liTKiGzreb1MUzRu6vySz5hwns3ounjG/preview"
              }
              float="left"
              title="National Report - ted harvey on "
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Ted Harvey, “normally, lawyers would not allow the defendant to make
            his own case.”
            <br />
            <br />
            Invoices begets expiring-insurance
            <br />
            “People that don’t make a lot of money benefit from how healthcare
            is now,”
            <br />
            <br />
            "100k scott afghanistan, sdaa visa, reimburse non-profits is 40% new
            debt..." that isn't tortable
            <br />
            private sector effort&nbsp;
            <a
              href="https://lightte.ch"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              without rent-seeking
            </a>
            , volunteering capital, not whatever busy-work down payments - gdp =
            -10
          </div>
          <br />
          <br />
          Ratio is a little confusing, coming from a calculus & statistics
          background as epiological moves to the first derivative space (roc),
          appropriately predecessors to economics, lo macro is pure
          retardation&nbsp;(
          <a
            href="https://micro-theory.com"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            speaking as micro
          </a>
          )<br />
          <h2>
            occupy is free-market-communism&nbsp;
            <span>
              just steward it, bro. settle down-payments to gdp lest not job
            </span>
          </h2>
          "doesn't matter democrat republican conservative moderate or liberal."
          need 10% assumbly of petitioning party to be recognized by these
          douches
          <div
            style={{
              height: "min-content"
            }}
          >
            <div
              style={{
                maxWidth: "200px",
                zIndex: "1",
                backgroundColor: "rgba(0,0,0,.4)",
                position: "absolute",
                left: "0px"
              }}
            >
              market communist james comer
            </div>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1AHml7B4xYcTfbNoMiC_Wubw60zq6aopa/preview"
              }
              float="left"
              title="National Report - james comer complaining about spending but not wall st? the latter is more"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "when printing money it devalues the money," what do you think wall
            st does? they are simple majority of new debt $32/person/day
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1r2tdiue-fvza7KRvjwd1n_rVj6fcjgq-/preview"
              }
              float="right"
              title="national Report - emma rechenberg & shaun kraisman invite vaxxers only"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Inflation hurts the seniors the most"
            <br />
            they had their WHOLE LIVES to save but children don't have income
            either, and they have 20x 55+/millennials rental-income for NOT
            WORKING. let alone how they worked half as much as we do now (1970
            is half-life for working-age comparison)
            <h2>stfu granny, elderly out to sea</h2>
            <br />
            <br />
            "anti-mandate not anti-vaxx"
            <h2>
              saying virus is deadly instead of a byproduct of bacterial-cause,
              but is not a national security issue, but then claim keystone XL
              is, is nuts
            </h2>
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1A-KTlgBADA5dhi14YhdbU8yq0yFL1Gvi/preview"
              }
              float="right"
              title="national Report - emma rechenberg & shaun kraisman invite vaxxers only"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            even if you go against the political science and go for the
            biomedical science, they criminalize you, but religion barring you
            from doing it is ok," a turning point retard
            <br />
            <br />
            duress beyond mvp decided by jury (11/12) is not a choice, legally!
            Is moot
            <h2>fines are corporate-government collusion</h2>
            "self-inflicted loss" is not measured from a grandiose target,
            amanda brohante, or before it is attributable; "conservative" news
            network thinks accrual is earned
          </div>
          <br />
          <br />
          1/3 of colds start with coronavirus, how can you tell that if you only
          test for covid. fucking retard spadea, always flopping. there are
          2k/yr discovered by cdc,&nbsp;
          <a
            href="https://www.nature.com/articles/d41586-019-00991-4"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            output dead by cell when coming in contact with bacteria
          </a>
          <h2>
            dedication to the future in r&d monopsony/government-gentrification
            is slighted about competition
          </h2>
          stupid to appreciate 50% in a polytechnic election instead of
          plural-majority. A losing plural-majority Occupy Wall St candidate is
          very plausible with rcv.plural-majority is the choice of the people,
          not adding up second place until you get to 50%. absolutely self-harm
          <h2>vaxxers think virus is alive</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <div
              style={{
                maxWidth: "200px",
                zIndex: "1",
                backgroundColor: "rgba(0,0,0,.4)",
                position: "absolute",
                left: "0px"
              }}
            >
              market communist buddy carter
            </div>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1AIaEZo54EXMimDbOPrwVOf1o2L0_WhkM/preview"
              }
              float="left"
              title="National Report - Buddy Carter calling government-gentrification, socialism?"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            down-payments to gdp 1/11 is not a real job, telling you what to do
            from bonds valued by their own collateralization
            <h2>
              Humanitarian issue in paid family leave is slighted about
              competition
            </h2>
            "illegal to discriminate on race or gender, [but not countervailing
            laws nor illegal-precedence]"
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1uoWMksjplSMpJHIFZpISe97Wyq_w4CB3/preview"
              }
              float="right"
              title="Cortes & pelligrino - describing the opportunities amidst down payments to gdp 1/11"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Plenty of opportunities to go around, from the wall st counterfeit
            is literally busy-work without consumers, why would you work for a
            corporation instead of yourself? The "conservatives" are such
            sellouts and market-communists. employment to population is double
            what it was since 1970 (if you can call continuing claims
            "unemployment," I can call half unemployed to population (without
            claims), double), 10x more hours for a median home and totally not
            normal for population growth alone produced gdp/p before 1913
            nearly-constant, save the private-credit cycle. More like plenty of
            cash to spend, against $12k/person/year new debt
            <h2>those aren't real jobs, just countefeit for trust-building</h2>
          </div>
          <br />
          <br />
          "Most of those children who died, died with comorbidities," those with
          co-morbidities shouldn't have antibody-dysregulation by
          vaccines/mRNA-sporing-grafts, the point is that they were going to die
          anyway, standardize for cohort size, Jeffery Barke, MD
          <br />
          <br />
          Less cases with less mandates," Stinchfeild falling for
          basis-rate-fallacy in less testing by symptoms only. FUCKING RETARDED
          <h3>
            literally the tax-payer doesn't pay debt, nor do children. and how
            is that paid less than thru the supply chain third party beneficiary
            counterfeit in contract by private, which is 1.2x public debt, for
            useless price inelasticity, to boot
          </h3>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Z5pq01MWz52ao0uctuOmIZsnpHBJgZ-w/preview"
              }
              float="left"
              title="Spicer & co - Astroworld trial attorney argues for insurance, LMKeith smirks about the cash-grab"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            wall st amoral, dictitorial, and [ruins] out liberty and freedom
            (except he said socialism). where in the world does labor have means
            mean that
            <br />
            <br />
            "excess deaths insignificant is a fastball," Anderson Cooper, CNN
            <br />
            <br />
            <h2>
              patents are rent seeking, profits are net loss & net loss is
              profits accrual-withdrawalable with bonds
            </h2>
            is election tech required to provide security, is utility owned by
            G-d, at least misrepresentation of the inventor is more appaling if
            plagerized with so much malfeasance, certainly not to rent-seek for
            bonds of yesterday signed by private actors, to which communism was
            meant to fight (Odessa). gov would likely not make utility actually
            free but hide a subcontractor
          </div>
          <br />
          <br />
          don't withhold profits in corporate nor treasury bond-index-fund
          negative accounts
          <br />
          Transformational change," says the gentrifier, market-communist
          <br />
          <br />
          Everyone else spends $12k/year/person new debt and you’re going to
          hold me against my $20k on shorting debt, I’m forced to match prices
          with? I would have made money if the people I traded against couldn’t
          see my portfolio like I couldn’t see theirs
          <br />
          <br />
          That’s why they don’t make it anonymous
          <br />
          <br />
          Insurance hides the fair value; you think you are saving but it is
          only that price because invoices that are theft abetted by insurance
          premiums, and deductibles unclaimed. Simple logic
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1dQqu10Aav2loeg83VDapPurvezgWdQNW/preview"
              }
              float="left"
              title="Spicer & co - Astroworld trial attorney argues for insurance, LMKeith smirks about the cash-grab"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            As you know, everyone is suing eachother,” says the old person as a
            matter of fact, nearly harming-himself to save face for
            illegal-precedence. If anything wouldn’t the crowd be charged?
            Directives aren’t liable, unless compelled.
            <br />
            <br />
            Gross negligence vs premises inherent risk is obfuscated to keep
            class precedence malfeasance lawyers in “business”
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1NW3gXnCMPurVRbnt1XGdMMLrm2h07A7Q/preview"
              }
              float="right"
              title="Spicer & co - Astroworld trial attorney argues for insurance"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “It is going to come down to how much insurance there is,” grossly
            forlorn of not-surrendering the non-settle-ability of
            non-concurrentable premiums promised in all claims. Without that
            prisoners’ dilemma, there is not that capacity. In NJ, they will
            remove you from jury duty for being against insurance
            premium-non-concurrentable-fraud of those forced to pay into it as
            the insureds’ customers.
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1ePUoaev7de96svHVg49pQvcjA8iNmoIF/preview"
              }
              float="left"
              title="Spicer & co - Ohio GOP senate candidate pleading for public schooling"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “It’s about the American dream, we need to ensure people are
            educated,” GOP wants nothing to do with school privatization,
            unlocking trade-secrets and allowing vocational
            timelesspaydayroyalty scoped for industry type by p2p to not
            fraudulently collectively bargain on non-concurrentable outlays nor
            general income, abject competing with consumers intent. Libertarians
            are fine with debt, certainly do not want to cash:debt*income back
            to 1908
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1BZbvtzL2quTdG842uNe9E7NN9VaHhOkv/preview"
              }
              float="right"
              title="Spicer & co - Malliotakis gentrification of free rider mutable roads, not even target margin but bond laundering"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            $300b to roads, highways and bridges, but it is concurrently while
            deficit of 5x the amount is paid by new debt (costing
            savers/bartender-money, not children for bond-index-fund value of
            bid to ask fraudulently-withdrawalable), and those&nbsp;
            <a
              href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              cost 40% debt service in states
            </a>
            <br />
            <br />
            What has the Pentagon done that is good? Your ansswer to china-rare
            earths is to spend it on stations instead of&nbsp;
            <a
              href="https://magnate.company"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              modular-circular-magnetic-engines
            </a>
            <br />
            <br />
            “Capital investment can increase production,” talking about tax free
            rider mutable beyond article 4 & debt-paid (not tax-payer-paid)
            fraud-WABC “conservative” market-communism instead of
            targeting-margins instead. TRUNCATED SALES TAX YOUR GROCERY AFTER
            REVERSE DEBT:CASH*INCOME.
          </div>
          <br />
          <br />
          "Negotiating a lease" is retarded: all competing on
          prohibited-settled-trade for useless price-inelasticity
          <br />
          <br />
          “Executive took too much power, because it was an emergency,” Alan
          Dershowitz… can’t count insignificant deaths for cohort size nor
          population growth, let alone life-expectancy plateauing at wrinkly-old
          80, biologically-appropriate
          <h2>Article III, Section 2</h2>
          <br />
          "we don't live in a dictatorship, but a constitutional-republic
          [except when it comes to jury-found-science/-permits]"
          <br />
          <br />
          Finite producer or employers is not a choice; only can only
          discriminate without comment for labor and consumer, price
          withstanding
          <br />
          <br />
          old people love to make an example out of young men.
          "illegal-precedence for me but not for thee,"&nbsp;
          <a
            href="https://chicago.suntimes.com/2021/11/6/22766726/astroworld-festival-travis-scott-8-dead-numerous-injured-houson-music"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            it's called a mosh pit
          </a>
          .<h2>if you want to change the law, change the law</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1IGE7idpmZKtXPF5VGuxLKdzg6rmNdq3w/preview"
              }
              float="left"
              title="Eric Bolling - Travis Scott concert"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            If you want to blame T. Scott for not believing somebody random I
            mean<h2>"wealth-creation," today is counterfeit</h2>
            "shipping is free," money-laundering concurrent-deficit, isn't it?
            <br />
            Blah blah blah, "kills viruses," uh we have decided in science that
            virus is dead, greg
            <h2>
              Wait, at 40% debt spending, 10% debt service, that IS .8 new debt
              for every fed spending*&nbsp;
              <span style={{ fontSize: "8px" }}>* no strings attached</span>
            </h2>
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/15j93_DyPxqA3eZQZEWfwbtWNspMYXsXN/preview"
              }
              float="right"
              title="American Agenda - Pete Schiff libertarian Euro Asset Counterfeiters, private only"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Importing what everyone else produces” Peter Schiff
            <br />
            It is paid for my printing-money [share-split, third party
            beneficiary, reverse debt:cash*income],” we pay for it thru
            withdrawalability by market-maker steward-spread of collective
            appraisal (last-trade is market-cap collateralized/booked
            <br />
            “Inflation is an unofficial tax. Increase burden of that tax higher
            and higher as government spend.” Half new debt is private industry,
            hypocrite. We pay it thru the supply chain
          </div>
          <br />
          <h2>
            Wages that are competitive in the workforce as well,"&nbsp;this
            bitch trust-builds
          </h2>
          Greg-Kelly:&nbsp;
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/230116/"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            brain-virus epstein-barr
          </a>
          <br />
          <br />
          Talk about value of bid to ask cancel forbidden or Newsom payday loan
          maniac! I choose the latter and reverse it, you boob
          (cash:debt*income)
          <br />
          <br />
          credit cards accepted from covenant house, contributing to the
          $12k/debt/person/year newly generated for no benefit, if prices are
          elastic (the giver is not a consumer, too), claims to be helping
          people. I am building paytech to boycott, have to front-Mastrcard's
          perpetual loss when writing their book to their own fucking ask
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/19x6RdSobBfVJS9ejwb_Xdu5a35BKxoSf/preview"
              }
              float="left"
              title="John Bachmann Pinion - americn state farm king foundation"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>“No one wants to be coherced”</h2>
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1_a79vnA1MOgMEBSC8e_Q2QDUyjY-tzwA/preview"
              }
              float="right"
              title="John Bachmann Pinion - young socialists for american tards"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "people think we have the right to know vaccination status," Jo
            Pinion, are you only calling the collusion simple majority of the
            voting plural minorities?
            <h2>fuck off afro-tool</h2>You need to prove guilt, that is why so
            many cases don’t make it to trial,” uh, no, trial isn’t had for
            people dubbed insane for poor wall st & gov (rent-seeking hhs, cap
            rent 5 units or 30 days implausible rentier use) driven economic
            conditions driving homelessness, just labeled mentally-insane.
            <br />
            The plea if prosecuted for perjury makes the state liable for not
            looking at the cameras or acquitting, or prosecuting permits beyond
            mvp duress in a trade of currency not capital, without jury (11/12)
            as finite producers cannot efficiently bestow quality and price
            efficiency (per hour)
            <br />
            <br />
            your policy, like contract, is my dollars for your collective
            non-bargain in
            <br />
            Payday loans (Gavin Newsom)
          </div>
          <div
            style={{
              height: "min-content"
            }}
          ></div>
          <Cable
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1-ndUm6LZNgxq6B_9C-rE3QSaigTALmta/preview"
            }
            float="left"
            title="John Bachmann Pinion - g chang slander-potential (desist not only just reasonable doubt)"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “700k people died because China released covid” G
          "paywall-teleprompter" Chang presumes with failure inseminating cell
          with virus, other than this cartoon
          <h1>
            We report that Pf bacteriophage were present in 25 of 37 (68%)
            Pa-infected wounds in our cohort. Furthermore, wounds infected with
            Pf-positive strains were significantly older than wounds infected
            with Pf-negative strains, and Pf was more commonly found in chronic,
            nonhealing wounds.&nbsp;
            <a
              href="https://www.science.org/doi/10.1126/science.aat9691"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              source J M Sweere 2019
            </a>
            . We propose that filamentous phage may be relevant to human
            interactions with a broad range of pathogenic and commensal bacteria
            and that these viruses may have profound, direct effects on human
            health and disease.
          </h1>
          <br />
          <br />I gotta do your fucking job for free everyday jo pinion
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1wSZtU7YxHHi-i59wOmaAXEd-_3ry60Sq/preview"
              }
              float="right"
              title="John Bachmann Pinion - alan dersh replay racketeering basis rate fallacy, epiology"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>
              you cannot attribute byproduct test for cause without controlled
              studies, if basis-rate-fallacy of excess deaths from population
              growth a life expectancy ago weren't with standing for not just
              reasonable-doubt, but desistation
            </h2>
            nj 101.5 Jeff on Dennis & Judy "I think&nbsp;
            <a
              href="https://brainscan.info"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              you're insane
            </a>
            &nbsp;if you do not get the vaccine, I just don't think the
            government should mandate it," first of all, article 4 if it weren't
            nuts to think virus is like, an evolutionary trait rather than just
            debris, but secondly, hung-jury-permits is illegal.
            <h2>choice isn't duress, "you can make choices,"</h2>
            <br />
            <br />
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "left",
                width: "600px",
                maxWidth: "80%",
                border: 0
              }}
              src="https://www.youtube.com/embed/mJempu8ebT0"
              title="YouTube video player"
            />
            Nick Carducci: "I’m gonna squat on the minority opinion of&nbsp;
            <span style={{ textDecoration: "line-through" }}>vaccine</span>
            &nbsp;masks but for antidepressants, nih funded mental illness
            impact on infection,
            <h2>I don't know why you keep calling with this [info]</h2>
            <span
              style={{
                textDecoration: "line-through"
              }}
            >
              just for friends and family - masks don’t stop bacteria
            </span>
            , atmospheric convection heat over density is true so it doesn’t
            float in perfect equilibrium.
            <br />
            <h2>thanks for letting us know, okay? CLICK</h2>
            desist&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              nj 101.5/hackensack
            </a>
            <br />
            <br />
            50% false positive is literally random for binary evens, especially
            when virus doesn’t even correlate with sickness
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1w9IyiffCLSYbMdszycSvQl7JFPQbILME/preview"
              }
              float="right"
              title="National Report - MI/WI pipeline"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “That is a problem, [and if I am AG I will do _ about precedence
            standing]”
            <br />
            What about abuse of eminent domain for trade instead of sewage
            police lawsuits
          </div>
          <br />
          <br />
          “With their insurance it is at no cost to them, “except by measure of
          insurance with collective bargaining fraud of non-concurrentable
          claims higher premium
          <br />
          <br />
          “Gas, childcare and clothing are impediments to work,”
          <br />
          Every dollar in welfare pays .4$ to bond-index-funds (+interest), and
          taxes except wealth hits consumers… outlay corporate profits, today!
          Target margin instead of raise premium for lower deductible with
          invoices are theft & reverse debt:cash*income - then let’s talk
          welfare! lo it is useless price-inelasticity and makes producers rich
          for the same thing... unless you take it from their rich consumers,
          not just the rich... like a purchase by someone who needs to use that
          money elsewhere overwhelms the collective bargaining of a concentrated
          purchase that is meant to be merely relative to a big potential
          spender, from the jump
          <br />
          {/*width && <Fraud6 width={Math.min(600, width - 100)} />*/}
          <Cable
            onError={handleScollImgError}
            src={
              this.state.nofredgraphs
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=IHdV&width=500&height=660"
            }
            float="left"
            title=""
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>accrual is bizarre, my fucking money</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1z_mmLUDrvwzKgnMbJB5il7TsT_1hiFxA/preview"
              }
              float="right"
              title="Spicer & co - Huckabee on markets infinite producers"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "it's one thing for private to mandate things for employees you have
            to suck up, thats a market decision"
            <br />
            <h2>
              HOW THE FUCK IS FINITE PRODUCERS A MARKET DECISION YOU MOTHER OF
              ALL FUCKERS&nbsp;
              <span style={{ fontSize: "8px" }}>
                how is the tax-payer expenses when it is 40%, this is
                bartender-money
              </span>
            </h2>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1RzFsXcRcjQxnd23CzzXgBbvVxir33Ooq/preview"
              }
              float="left"
              title="Spicer & co - Missouri Attorney General"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "One agency for people to determine their lives, and what they put
            in their body,”
            <br />
            This excludes all producers other than with scientific consensus of
            duress in minimal viable product without hung-jury-permits
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1c0ehItLuHSTcKV5YKpYtbkGwFtUaMnCC/preview"
              }
              float="right"
              title="Chris Salcedo - Tim Burchett TN"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "broadband, participants in the jobs of tomorrow," but you (Tom
            Reed) are laundering rents on the networks to bond-index-funds,
            right?
            <br />
            <br />
            “All meant for big cities,” exemplary in those 16 who crossed.
            Abject racketeering. He continues, “the weird thing about it is,
            they’re all moving to TN!”
            <br />
            <br />
            $700 fines who don’t comply with covid directive. Even if you wanted
            the spending, that is duress, voidable/removable for being the cause
          </div>
          <br />
          <h2>voluntary is more random than emutalatable</h2>
          <span
            style={{
              backgroundColor: "rgb(29,161,242)",
              color: "white"
            }}
          >
            "I don't think anyone doesn't want the&nbsp;
            <a
              href="https://www.isidewith.com/poll/488729614"
              style={{ color: "white" }}
            >
              infrastructure bill
            </a>
            "
          </span>
          &nbsp;says Catsimitidis, owner of several truncated sales
          tax/open-source-license/hung-jury-permit/class-precedence-malfeasance
          targets
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1CfqaE70PC0v150zxHBkVkCJJMNsROJPn/preview"
              }
              float="left"
              title="Chris Salcedo - Mary Walters with Jack4NJ in back"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Socialist-blueprint," ... reality is, usually when we put money
            out, we don't get it back, listen, there is a reason why public
            banking ACO..." Rep Pete King gets cutoff by Curanai, wife of usurer
            <br />
            Presumes standard of living (to me, price-deflation over hours) is
            derived by market-communist spending
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/10aIMsTXuWwqgVZdpeNDJZnZi_ZVyl2n6/preview"
              }
              float="right"
              title="Chris Salcedo - Tx guber Huffines"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Pure marxist theology,” where is your proof?
            <br />
            Don’t they think nationalists should have payout instead of
            illegals? While you cry about epiologically-induced supply chain
            problems?
            <br />
            That’s exactly what communism implies: torts
          </div>
          <br />
          People that work at home mostly work for themselves, and corporations
          do not work for the country so as to contribute an invention that will
          retire us
          <br />
          <br />
          non-voters won, simple-majority this time, not just plural
          <h2>
            It is bartender-money, you fucking slut. 40% debt-spending, 10%
            debt-service&nbsp;
            <span
              style={{
                fontSize: "8px"
              }}
            >
              borrowers loiter lenders counterfeit insurers expire
            </span>
          </h2>
          Cared for physically and mentally, well the cause is rentiers not
          mental acuity. Cops need care and weened off
          bond-index-funds/closed-source-pharmacy-license, Catsimitidis just
          wants to avoid truncated sales tax on his grocers' bounty AFTER
          reverse debt:cash*income and cap 5 units or 30 days to not bailout
          rentier/landlord/lender/counterfeiter (down-payments to gdp 1/11
          bid-price-fixed to "value"-ask)
          <br />
          <br />
          Disease is diagnosed by byproduct not the cause by {/*near-death */}
          Bill "The Artifact" O'Reilly
          <br />
          <br />
          “Shut down pipelines to aid Russia,”
          <br />
          How about you let producers surrogate consumers instead of have
          eminent domain appraised by force. You’re a market-communist, Salcedo
          <br />
          <br />
          “Mass psychosis,” every episode is rational, ask a murderer why,
          without a motive it isn’t necessarily of chargeability. You, however,
          are misleading people, which is not an issue with their mind
          <h2>unless you show me brainscans</h2>: stop&nbsp;
          <a
            href="https://nationalsecuritycasino.com"
            style={{
              color: "rgb(20,100,200)"
            }}
          >
            malfeasance for convict intranet
          </a>
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1m4AVZMiMRkXkuUsb6syWhlkzxgf746Gk/preview"
              }
              float="left"
              title="Dennis Prager"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Prager thinks people cannot come back to consensus, based on a
            plural-minority of people wanting mandates. It is horseshoe, retard
            <h2>
              speak english, hispanic: labor and means == jury without
              racketeering
            </h2>
            now chris salcedo says "marxist extremism," and one of the vitures
            of his show is to, "refuse to define you"
            <br />
            <br />
            existing business is inherently complacent and obstructive
          </div>
          <br />
          <br />
          “$50b bolster energy generally,” make the producers invest, don’t
          force consumers’ and producers’ hand, unless jury-consensus 11/12
          <h2>give me a list of Twitter employees</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "250px",
                height: "540px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1dUQs5SMhnD0U5YFA-kqQzzbpCJm47SRY/preview"
              }
              float="right"
              title="Majority Report - copyright gestation king"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{
                width: "250px",
                height: "540px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1kIRTTRRk9AkSOt3F7m2BqVXRGhEh5BNk/preview"
              }
              float="left"
              title="Majority Report - friends and family"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <a
              href="https://link.springer.com/article/10.1007/s00259-021-05314-2"
              style={{
                color: "rgb(20,100,200)"
              }}
            >
              <h2>
                <Cable
                  style={{ height: "40px", width: "60px" }}
                  onError={handleScollImgError}
                  src={
                    this.state.iosNoPhoto
                      ? ""
                      : "https://drive.google.com/file/d/1rTktXHe1x8nZzDOO7anMw4sGV38-ZTum/preview"
                  }
                  float="left"
                  title="virus insemination cartoon evidence"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                &nbsp;cartoon-science
              </h2>
            </a>
            "Robust natural immunity is what we need," mRNA-sporing-graft
            inventor
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1PX3Jlh2Agc7CMQkQszPpt8AMnZWArcqH/preview"
              }
              float="right"
              title="The Balance - Sesame st & Cnn personalities"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/19n4xZepkafa1bCRM1hA0Ix26HzabhF-2/preview"
              }
              float="right"
              title="The Balance - Sesame st & Cnn personalities"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            market-communism of board-precedence- ("noble lie" - Pierre Kory
            MD), non-concurrentable collective bargaining or delaying collective
            write down, closed-source licensure-trusts
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "250px",
                height: "540px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1H4sPombp4sU_EMqD8pjP7eoxwUrxgkwd/preview"
              }
              float="left"
              title="Indisputable TYT - virus cartoon evidence front"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <h2>
              take it in the ass, Rudy&nbsp;
              <span style={{ fontSize: "8px" }}>
                krugman says insurance is a net loss
              </span>
            </h2>
            <br />
            Science is: you cannot fire someone for sickness, only price-cuts
            (you don’t hire someone else and continue paying 65+ with half of
            2.8m claims, while working age work twice as much as 1970 and 10x
            hours to own median home)
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px",
                height: "350px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1zjBOJduQJiR1B2-wwC0bmNpuCCPerexi/preview"
              }
              float="left"
              title="BBB laundering concurrent deficit"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Bond-laundering, government and wall st-monopsony & -gentrification.
            This is only a 1/2 portion of normal (-3/2020) federal spending (
            <span style={{ backgroundColor: "white", color: "black" }}>
              share-split of public-parks
            </span>
            ) that is 40% new debt and 10% debt service, and in stead of
            outplaying corporate profits, not necessarily having a collective
            bargain but much more a bid-price-to-ask inelasticity of debt 4400%
            as opposed to 102% “realized”-inflation, which is merely relative
            while the former is absolute and undetected in
            year-to-year-progressions
            <br />
            <br />
            "Republicans voted for it because they get a cut, normal political
            waste," on concurrent-deficit-paid-for before corporate profits
            outlay today && reverse debt:cash*income don't cancel forbidden by
            past demand amortize reimbursement of down payments upon repo
            timelesspaydayroyalty scoped for industry-type for p2p as is
            non-concurrentable, that is outlays & hours
            <br />
            <br />
            Higher premium vs monthly-deductible is, “Socialized-medicine.” What
            is social about that?
            <br />
            To Rudy
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                height: "80px"
              }}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1JLdZKFHz712layg6u2TRa6_1h7vbufxm/preview"
              }
              float="left"
              title="angelina"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Correlation is not causation, you literally need to control the
            rubicon with vaccuum
            <br />
            <br />
            <a
              href="https://teapharmacy.party"
              style={{ color: "rgb(20,100,200)" }}
            >
              anti-biotics
            </a>
            <br />
            Bacteria causes infection, exclusively; protection from the
            byproduct, not the cause.
          </div>
          Do you realize how significant for standing is simple majority won by
          non-voters? Wall st pharma cop v wall st pharma cop
          <br />
          <br />
          Testing 2k/yr new types is NOT insemination of cell
          <br />
          <br />
          Hung-jury-permits
          <br />
          <br />
          They take you off jury duty if you think invoices are theft Bacteria
          causes infection exclusively
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/11I4kbNZgy2jReY0L6NVYTlor7njnxIXA/preview"
              }
              float="right"
              title="farmers insurance and bert"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            How can you call what you do "customers?" You borrow collude and
            loiter to launder the accrual bid-price to ask of counterfeit means,
            of late argued foreseeable then blundering themselves into
            premediation, complicity & malfeasance
            <br />
            <br />
            "Time-off, good work, as a paren't making preschool affordable and
            child tax deduction is going to make such a huge difference for new
            parents,"&nbsp;
            <span
              style={{
                backgroundColor: "rgb(180,220,255)",
                color: "black"
              }}
            >
              at cost of inequality
            </span>
            &nbsp;and loss of vocational work for half & +careworker, net
            comparative advantage loss and education of trade-secrets cudgel of
            wall st impediments
          </div>
          <Cable
            onError={handleScollImgError}
            style={{
              width: "640px",
              maxWidth: "100%",
              height: "480px"
            }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1-pLg-9iUTiqDziZ9h6o4O6VB21SOZgsv/preview"
            }
            float="left"
            title="newsmax"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1M7Tu5zFDl13OHlq4Qay3tkjF_Y3TqKYw/preview"
              }
              float="left"
              title="buttgieg south bend"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            basic government services, like public Ssssssschoolssss," Bill
            O'Reilly
            <br />
            <br />
            "this is the largest investment since the creation of the interstate
            highway system, as well in public transit for seniors and people
            with disabilities, electric rail-cars, transformative-acheivements
            in safety"&nbsp;
            <span>
              regulate, don't fine == jailtime. r&d tax is trust-building,
              nothing else
            </span>
            ;
            <br />
            "infrastructure is so elemental in societal but when it is strong,
            every community feels the benefits"
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1a5e4ICmb2iFIZ4jlg0j4dhHGe8V0yeOa/preview"
              }
              float="left"
              title="allen"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <span
              style={{
                backgroundColor: "rgb(197,179,88)",
                color: "black"
              }}
            >
              Working families-gerontocracy
            </span>
            : "union dues makes Virginia more competitive"
            <br />
            NYC = wall st pharma cop v wall st pharma cop, NJ = wall st pharma
            cop v wall st pharma cop
            <br />
            <br />
            “Creates demand & drives up the price” -Dennis (nj 101.5), if you
            are counting production - busy-work, to which output-deflation per
            hour is second-, lattest-derivative of “productivity,” it is &nbsp;
            <span
              style={{
                backgroundColor: "white",
                color: "black"
              }}
            >
              actually the other way around
            </span>
            . The chicken or egg, it is still a birth of evolution, of which the
            virus is not lo bacterial-cell byproduct
          </div>
          <br />
          <span
            style={{
              backgroundColor: "rgb(170,90,220)"
            }}
          >
            gdp to down payments is possible
          </span>
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/grdvhc3dlct9dy8/Screen%20Shot%202021-11-08%20at%2012.39.25%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Of course government has an understandable interest in policy &
            finance, however no individual can whip house-disciplinary matters,
            of sex or racket Standards committee is not a ‘court of law,’ as
            would require legal-representation, and that might lead to a process
            that might benefit the wealthy that can afford lawyers than those
            that cannot,” lawyers also are interested in
            industrial-precedence&nbsp;
            <span
              style={{
                backgroundColor: "navy"
              }}
            >
              save-face
            </span>
            <br />
            <br />
            "stop warding donors with _ from the house of lords.
            <br />
            the only reason to be in that house is the lobbying, 'their
            philanthophy'; least-deserving good cause in this land"
          </div>
          <br />
          <br />
          <span
            style={{
              backgroundColor: "rgb(166,16,30)",
              color: "black"
            }}
          >
            Conserving accrual & collective-bargaining fraud
          </span>
          &nbsp; $32/day/person cost is paid by all of us, inflation being 102%,
          debt-inelasticity 4400%
          <br />
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            no-surrender third party beneficiary
          </span>
          &nbsp;
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            castle (as livability/livelihood, when police recovery &
            tort-conservative malfeasance) doctrine
          </span>
          <br />
          "Take into consultancy with private business," for collective
          bargaining to eminent domain but not for rent-seeking
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/5n3ifq04zcdssvc/italian%20fu.gif?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            covid pandemic courtesy, _, and respect would be counting population
            correctly
            <br />
            <br />
            jury doesn't have to move - elections do.
            <br />
            oh, my druthers! Government Accountability malfeasance
            <br />
            There are just not enough producers to make them compete, we need to
            dispel the notion that prices and quality is found without
            target-margins in whole supply chain. It’s becoming harder to
            complete jobs when down payments to gdp is 1/11 and
            intermediate-goods are out of scope. If they give you the wrong
            material or abjectly do not show up for the hours in receipt, that
            is fraud, not forced majeure. Good luck
            <br />
            <br />
            If you pay later, you may be liened if the estimated-scope
            intermediate-cost turns out to be grandiose; which is hardly
            possible for an addition, and is more common rather than paying as
            you go, respectively. Estimation is immutable, but your risk is
            capped when you pay up front and kept out of escrow in smaller
            investments. The onus is on you for grandiose scopes and hiring the
            wrong people, like any other business.
          </div>
          <br />
          <br />
          parliamentary standards commissioner, Kathryn Stone:
          <br />
          <br />
          <a
            href="https://www.theguardian.com/politics/2021/nov/02/why-stakes-so-high-owen-paterson-suspension-vote"
            style={{ color: "rgb(20,100,200)" }}
          >
            First
          </a>
          , breaching the part of the MPs’ code of conduct on paid advocacy.
          Paterson said he was acting as a whistleblower over milk safety but
          the commissioner said this was only true of the initial approach and
          first meeting. Thereafter, follow-up communications “were intended to
          benefit his clients rather than to raise a serious wrong”.
          <br />
          <br />
          40% debt spending, 10% debt service: $12k/person/year, 60% wall st
          <br />
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            BROADBAND == RENT-SEEKING
          </span>
          , MAKE VERIZON INVEST LIKE THE REST OF US, target-margin
          networks/finite producers instead of gentrify nor trust-build
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/6stkluhs7lns1in/Screen%20Shot%202021-11-08%20at%209.29.17%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Families with bills to pay every month,” Bidens’ solution is to
            rent-seek broadband and increase premiums hidden to allow the
            producer to work less, instead of declare invoices are theft,
            reverse debt:cash*income not cancel forbidden by previous-demand nor
            bailout, cap rent 5 units or 30 days, ban insurance as collective
            bargaining fraud non-concurrentable, “currency” being 20% fed lands;
            timelesspaydayroyalty scoped for industry-type to replace debt, as
            non-concurrentable "currency," person-to-person, outlays; keep
            investment banks in equity
            <br />
            <br />
            Non-voters win even presidential elections with claims of no
            candidate, all others won by ideological duress
            <br />
            <br />
            Jason Chafitz, “guess what, when democrats have all branches they
            call the shots,” another “conservative,” who thinks politicians are
            more in control than natural law, like free rider mutable tax or
            debt is useless price inelasticity for government gentrification
            trust-building monopsony . Collective bargaining MAYBE for truncated
            sales tax for non-free rider immutable sewage police lawsuits. Let
            producers pay into pipes and broadband instead of allow government
            to rent-seek and pay instead of investing by producers like the rest
            of us.
            <br />
            Except, trash is "stacking up," you cannot let up until uber for
            trash........................
            <div style={{ textAlign: "right", height: "min-content" }}>
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/zrfgli98vbmo325/Screen%20Shot%202021-11-08%20at%2011.48.11%20AM.png?raw=1"
                }
                float="right"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
            <br />
            <br />
            "The people on fixed-incomes, limited incomes, it hits them the
            most. the rich dont' feel it," yeah, because the rich are
            bond-holders making double-money on welfare
            <br />
            <br />
            Keep wall st & Gov out of business
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/p64vihn8yjlcofe/Screen%20Shot%202021-11-08%20at%209.18.08%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vyiahyqr306zpay/Screen%20Shot%202021-11-08%20at%209.15.26%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            These fines are obviously bond-laundering & racketeering before
            jury-conviction of virus, with all the evidence questioned by its
            defense as harmless debris of a bacterial-infection, that such a
            cause in which antibodies do nothing to reduce
            <br />
            <br />
            In review of economic numbers, cnn is going in the wrong direction.
            Less unemployment continuing claims, less unemployment, that’s the
            opposite of technological-advancement. Cut poverty for
            relative-poorness is cheating by "less deficit," for paid off bonds
            instead of reverse third party beneficiary.
          </div>
          <br />
          <br />
          "No harm done," with insurance and Medicare for all further heightened
          premiums for producer-collusion, you already paid more
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/v3zgfosdnxj2n6k/Screen%20Shot%202021-11-08%20at%208.26.32%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Everyone always flops, are these actors? If a virus is a
            live-evolutionary-trait, then it is a matter of security
            <br />
            “Hard-hat is not like a virus that is contagious,” you have no proof
            that we don’t make them individually or that bacteria changes the
            viral-cellular-debris
          </div>
          <br />
          in what world is growing the economy measured by prices*hours*trades,
          good?
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/wyoj6nca2d4vt3j/Screen%20Shot%202021-11-08%20at%208.19.17%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Broadband infrastructure is great for those who don't have it," this
            self-proclaimed conservative advocated for market-communists for
            free-rider-mutables instead of making Verizon invest in it
            themselves, with target-margins for being a networking
            <br />
            <br />
            <div style={{ textAlign: "right", height: "min-content" }}>
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/jxph5g8f5ac5wj1/Screen%20Shot%202021-11-08%20at%2011.04.41%20AM.png?raw=1"
                }
                float="right"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              Not selling a book/have precedence to save face,
              hung-jury-convictions & non-voter duress
            </div>
            Newsmax boasts having weekly testing, first time a virus has been so
            asymptomatically, and the costs are bad for your customers. Do not
            claim choice/efficiency from finite producers. This is how you
            money-launder. any infrastructure is a waste that is not sewage,
            police lawsuits that is free-rider-immutable Inflation mostly
            happens from private debt, to which laws currently countervail. jobs
            without customers are always busy-work or inflation by tax for free
            rider-mutables or debt, which is MOSTLY PRIVATE
          </div>
          <br />
          Rot in hell
          <div style={{ textAlign: "right", height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/2nrvk2vw11qe80u/Screen%20Shot%202021-11-08%20at%2011.45.31%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <div style={{ textAlign: "right", height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/6v1p04pp3mx9pwg/Screen%20Shot%202021-11-08%20at%2011.47.56%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/cq8xj36s0wyt2rw/Screen%20Shot%202021-11-08%20at%208.04.29%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "We cannot handle this [vaccine mandate] admist supply chain
            shortages," Burchett describes the 6% staunch-antivaxx loss but like
            it is a supply-chain-shortage of labor rather than of working-age,
            epiologically. WE WORK MORE THAN YOUR GENERATION.
            <br />
            <br />
            Maliotakis saying subways have been malinvested, asking for more
            funds instead of using customers' money like the rest of us. Says it
            will save trillions by spending now. How? A complete lie
          </div>
          {/*. bond-laundering & useless price-inela*/}
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "100px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/iix8y2rq7nydedo/recessive%20avlon.jpeg?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/xm2rt5sc9vxia93/Screen%20Shot%202021-11-08%20at%207.45.34%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Market-communism (socialism is stewardship, not this.
            Social-spending is an oxymoron. Not even family-subsizies are
            social) is trust-building, not competitive. self-harm economically.
            Isn't it known that monopoly is a waste?
            <br />
            <br />
            Even family-subsidies isn’t social-spending. Social-spending is an
            oxymoron, reappropriating means from labor
            <br />
            <br />
            Socialism is consumer protection, market-communism is the spending
            that GOP feigns. Market-communist for broadband and all this crap
            <br />
            <br />
            "Listen to your doctor, not Biden," someone on Cnn, whom have
            incentive to slight-precedence.
            <br />
            Less spread of disease cannot be measured by changing basis, bitch
            Kim Swire
          </div>
          <br />
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ supplyside: !this.state.supplyside });
            }}
          >
            <h3>supply-side-"economics"</h3>
          </button>
          <br />
          {/*<div
            style={{
              zIndex: 1,
              display: this.state.supplyside ? "block" : "none"
            }}
          >*/}
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/nq9w93srerrwdzr/Screen%20Shot%202021-11-07%20at%203.10.27%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Trump made sure that the HBCU got the funding that they needed,"
            how conservative is the GOP and how altruistic is are the Dems
            <br />
            <br />
            universal healthcare is higher premiums paid by share-split,
            poorness in lieu of poverty is self-harm
            <br />
            <br />
            Vector-implications of finance in the immigrant-less supply chain
            retiring and continuing claims beyond epiological basis of excess
            deaths under expected by population growth a life expectancy
            ago&nbsp;
            <span role="img" aria-label="squirrel">
              🐿
            </span>
            $32/person/day new debt, mostly-private, value is not price but
            fraud, embezzlement or laundering
          </div>
          <br />
          <br />
          “Foreign devils, nanjing massacre by Japanese” against tea pharmacy
          party opium open-source-licensure" too much
          malarkey/assumptions/presumptions/wokeness
          <br />
          <br />
          medicare for all is just lower deductible for higher premium, it is
          not a bargain concurrentable, non-expiring
          <br />
          the right uses this "monthly-savings" tactic, too
          <br />
          "mutual-aid doesn't always have to be
          [charity-useless-price-elastic]financial"
          <br />
          <br />
          Price goes up when demand is money instead of labor
          <br />
          price-should be getting better over time, gdp/p was nearly constant
          before 1913 when 3% pop growth so
          <br />
          <br />
          turnout is awaiting non-gentrification, public nor private, collective
          bargaining a bundle instead of whole account boost (by share-split or
          tax). hrmm
          <br />
          prices are elastic from useless charity non financial, or is a greater
          bid for same resources collective bargaining ever the same as lowered
          ask from collective ESCROW.
          <br />
          <br />
          non-escrow is money-laundering embezzlement prone, like allowing
          mechanics to claim way more than otherwise settled from an
          individualized-write-down (individual/collective = bid/ask)
          <br />
          <br />
          left == jobs, cancel, right == profits, bailout, bottom == efficiency,
          reverse
          <br />
          a simple majority beat both candidates, rank choice collusion of
          plural-minorities beat the plural-majority
          (Occupy/anti-vaxx/non-voters(detest&eligibleVoters)
          <br />
          <br />
          The total ms is paralytic&nbsp;
          <a href="https://froth.app" style={{ color: "rgb(20,100,200)" }}>
            polio prevalence
          </a>
          &nbsp;you fucking idiot D Morris
          <br />
          changing updates requite consumers ready willing and able settled
          without collective bargaining non-concurrency
          <div
            style={{
              height: "min-content"
            }}
          >
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "600px",
                maxWidth: "80%",
                border: 0
              }}
              src="https://www.youtube.com/embed/p7075yIUBW4?start=550"
              title="YouTube video player"
            />
            <br />
            <br />
            Cost-effective by charging stations instead of&nbsp;
            <a
              href="https://magnate.company"
              style={{ color: "rgb(20,100,200)" }}
            >
              modular-circular-magnet-engines
            </a>
            ? Let consumers decide, fuckers. Infrastructure market-communism for
            useless price inelasticity of free rider mutables instead of
            target-margins
            <br />
            <br />
            "Bipartisan infrastructure bill, salt relief," how about
            bringing-true-market-liquidity with truncated sales tax
            <br />
            <br />
            “Mark 5 deranged evil spirits into pigs,” D.Morris deranged but
            real?
            <br />
            obstensibly_misuse -B.S.
            <br />
            <a
              href="https://github.com/NickCarducci/react-fumbler/blob/master/src/index.js"
              style={{ color: "rgb(20,100,200)" }}
            >
              Blacklist
            </a>
            &nbsp;any misuse of presumptions, event integral-“real” with
            presumptional-derivative
            <br />
            <br />
            <h2>So many colors</h2>
            For every dollar I lose from not working dor you,&nbsp;
            <span style={{ backgroundColor: "orange", color: "black" }}>
              i own copyright
            </span>
          </div>
          <br />
          <span
            style={{
              backgroundColor: "rgb(166,16,30)",
              color: "black"
            }}
          >
            Judge Janine
          </span>
          &nbsp;"The left is happy to have children sit at home, they don't care
          that your kids aren't being educated, their kids competing on a global
          level while their kids will not"&nbsp;
          <span style={{ textDecoration: "underline" }}>trade-secrets</span>
          <br />
          <span
            style={{
              backgroundColor: "rgb(46,90,216)",
              color: "black"
            }}
          >
            Democrats on Virginia Guber
          </span>
          &nbsp;"leaving our kids in the dust," children stay choring and
          accruing debt instead of timelesspaydayroyalty scoped for
          industry-type/ max-profit-royalty per IP that is design & discoveries
          in regards to nothing new under the sun. Mark Warner: job-creation
          slave-drivers produce busy-work, good! poorness in lieu of poverty
          boost to bid for without collective bargaining as not in escrow but in
          general-savings like laundering the ask, not gaining bid-propensity
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ww7bequ48cypjvy/Screen%20Shot%202021-11-07%20at%2011.07.05%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <span
              style={{
                backgroundColor: "rgb(197,179,88)",
                color: "black"
              }}
            >
              Central-planning by name alone
            </span>
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/xzk4fi06duzb97y/Screen%20Shot%202021-11-07%20at%2011.13.09%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Consumption, voluntary-economic-arrangements aren’t actualized
            production. The treasury is a 1.2x better steward-of-dollars 20% fed
            lands than banks $12k/person/year. Dave Brat: “Milton Friedman,
            ‘inflation from the fed.’” Marxist-control tendies up to and until
            infinite producers/jury, pussy!
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/5qc6ppyotykkfva/Screen%20Shot%202021-11-07%20at%2011.00.19%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “I don’t want to say 100% but pretty much because I don’t want to
            jinx it,” hahahah
            <br />
            Big tech has a lot of users, so hackers don’t really see Sekur as a
            target,” are you implying that big tech being 90% has known
            vulnerabilities that constitute 1/10days hack event?
            <br />
            <br />
            Sekur password is only as secure as SIM card, if I request a
            password recovery, you use the same authentication as a new SIM.
            This is why we need convict-intranet repeat offender use case
            login.gov, so the key is provided by state ID (in person)
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/pxayw0ysgw8g3vm/Screen%20Shot%202021-11-07%20at%2010.47.19%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            How is closed source more secure?
            <br />
            Cors is fine
            <br />
            <br />
            Jesus came down to stop animal-sacrifice & money-changers, had
            literally no problem with adultery, 4 years for a wall, 10 years for
            solving all security flaws in telecommunications. 1 Peter 2:10
            conscripted 'for' to mean every sunday, rather than an
            alternative-sarcastic-toast (AST)
          </div>
          <br />
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/oq4111tqdtgrhyp/Screen%20Shot%202021-11-07%20at%2010.36.04%20AM.png?raw=1"
              }
              float="left"
              title="facebook.com - Occupy Wall st reviews"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Undercollateralized loans, assess the credit-worthiness of the
            individual, sort of this innumerable…” I can’t legally say kill me,
            nor even maybe fml lest Involuntary Commitment &
            gun-rights-malarkey, so my distain will have to be portrayed by kys,
            bro
            <br />
            “Only 5m people out of the workforce right now,” Payne, uh maybe per
            10 year cohort since 1970….
            <br />
            Rudy thinks keeping your copyright, not selling-out, is being a
            lazy-bum. Down payments to gdp is 1/11 is haram (& retarded)
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "600px",
                maxWidth: "90%",
                border: 0
              }}
              src="https://www.youtube.com/embed/-spTY4y8euI"
              title="YouTube video player"
            />
            “Will you be ok with non-vaccinated do not work Religious exemptions
            with real precedence (Eric adams doesn’t even look into the cause of
            that, just blindly calls precedence real, “do it with the science,
            but social development is the smile, not being able to identify the
            child. I looks forward to getting rid of the mask, but with the
            science, not closing it down.) “doing bitcoin right” would be you
            buying it not overstepping your authority and force a purchase by
            state
            <br />
            <br />
            All WABC does is slander socialism (labor has means) as
            reappropriating money (market-communism). then says only cops should
            have guns
            <br />
            <br />
            Family leave/ppp/ctc is discrimination for innovators, contributors
            & children. The old people get paid, I'm not. Probably wants to keep
            excessive rent, insurance & accrual that necessitates fixed income
            <br />
            <br />
            <div
              style={{
                height: "min-content"
              }}
            >
              {/*<img
                  alt=""
                  style={{
                    shapeOutside: "rect()",
                    float: "left",
                    width: "200px"
                  }}
                  src={`${
                    this.state.settleDropboxFree
                      ? ""
                      : "https://www.dropbox.com/s/ruozefjvlqgl5q2/Screen%20Shot%202021-11-08%20at%209.21.26%20AM.png?raw=1"
                  }`}                />*/}
              <Cable
                onError={handleScollImgError}
                style={{
                  height: "500px"
                }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1AKHfVNXAR8yqzjJOznMWbYGEApa4pnEA/preview"
                }
                float="left"
                title="facebook.com - Occupy Wall st reviews"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <Cable
                onError={handleScollImgError}
                style={{
                  height: "500px"
                }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1nhwR5mV8zN_nwmHYJhUVm6k3wCpQRX8x/preview"
                }
                float="left"
                title="nextdoor.com - anti-rent-seeker bona fides"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <Cable
                onError={handleScollImgError}
                style={{
                  height: "500px"
                }}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1BEPoDIKY-KpnDGIwPA6Xw0X8U52fhij1/preview"
                }
                float="left"
                title="nextdoor.com - anti-rent-seeker bona fides"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              After some clutch comments about haggling-discrimination with
              friends & family discount comparative law jason borne
              <Cable
                onError={handleScollImgError}
                src={
                  this.state.iosNoPhoto
                    ? ""
                    : "https://drive.google.com/file/d/1YWQM3kIi1ea1Cl7n9RkxmO9v8mOx7K1W/preview"
                }
                float="left"
                title="nextdoor.com - anti-rent-seeker bona fides"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <br />
              sampling randomly is emulated randomness, to which volutary and
              jury-permits is more
              <br />
              <br />
              Obvious bond-laundering
              <br />
              Biden wants to compensate monetarily for losing children? That’s
              not even their fault (they can look for them) nor can it be
              monetized. Children aren’t worth anything unless you’re about to
              admit you use them for chores. GOP think it is a “calling card”
              for more immigrants while they drool about their epiological
              “supply chain problem.” The bipartisans do not care what “cause”
              money is launders for anymore, as long as third party beneficiary
              accrual gets bailed out thru the supply chain instead of reversed.
              “Stock market is looking strong,” they say to describe prices
              increasing. That is like saying you are going to raise rhetoric! A
              market is strongest when it is efficient, ask meeting bid. They
              got elected because there isn’t an occupy candidate, so people
              don’t turnout and are under ideological duress
            </div>
          </div>
          <br />
          <br />
          Only 5m people out of the workforce right now,”&nbsp;
          <span style={{ textDecoration: "underline" }}>market-communist</span>
          &nbsp;accrual is money&nbsp;
          <span style={{ backgroundColor: "orange", color: "black" }}>
            Payne Jr.
          </span>
          , uh maybe per 10 year cohort since 1970
          <br />
          <br />
          Reduced hospitalizations/byproducts in half, says fraud Peter
          Michalos. bacteria causes inflamation. replication is mitosis. FUCKING
          RETARD&nbsp;
          <span role="img" aria-label="reverse">
            🔄
          </span>
          . your testing is made for each type-detected... that's a /basis rate
          fallacy. "Fines for non-compliance and being fired for not being
          vaccinated. thats a thing that is happening, to show
          protection."&nbsp;
          <span style={{ backgroundColor: "navy", color: "white" }}>
            Racketeering tool
          </span>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Q1m8c1DNGXwgfQEW0R-1OszAQYg4eCzr/preview"
              }
              float="left"
              title="kildee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            More jobs is not serving the people... it is brought forward demand
            without consumers for busy-work and bond profit of net losses
            <br />
            <br />
            Saver party tax policy is corporate profit outlays not forcing
            purchases of your government-chosen contractors, and stopping credit
            as income
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1vOirQ6LnXFUv5SnW9krxMBEM2hY0JfaR/preview"
              }
              float="left"
              title="kildee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Republicans' policies succeed," left wants jobs, Saver wants
            efficiency, right wants profit, Trumps' policies worked in what way?
            price-deflation under hours is still declining -.2x/yr, trust-built
            existing small business over labor & spent 5x normal for Bidens'
            precedence to do so, & promised to drain the swamp but allowed
            pandemic-diagnosis on less than expected excess deaths
            <br />
            <br />
            Now Carl is saying Marx has at all commented about gun rights. The
            means of labor should be owned by labor has nothing to do with this!
            Might even perceive a gun as means to defend yourself as a laborer.
            Fucking retard
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/18Q6PtCKmIejCALTuWmlM6ZI8R5nELHV2/preview"
              }
              float="left"
              title="kildee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            You cannot say 700k died because of the coronavirus you fucking
            retard, you would need to test all deaths to make a claim of
            changing prevalence. It isn’t even correlated with symptoms!
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/15GEbh4xZ_7h_hlIRPQ_m2bPhKKlYVx4h/preview"
              }
              float="right"
              title="kildee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Marx would never market-communize. shut the fuck up and drop dead
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1ngajRbXkaO09FAY-deW1IGelAB_OIU1P/preview"
              }
              float="left"
              title="kildee"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <span
              style={{
                backgroundColor: "rgb(255,180,255)",
                color: "black"
              }}
            >
              Employing people instead of allowing them to invent
            </span>
            &nbsp;is less competitive. You do not want to "keep momentum," with
            busy-work (no customers). “The left invest in education,” you mean
            monopsony & allow them racketeer their trade-secrets & license
            closed-source-licenses?
            <br />
            <br />
            $1.2t gets tax-payers paid for during $4t/yr concurrent 40% deficit
            is loitering. It doesn’t actually get you those things, they exist
            before it is paid for, you just enabled a higher price for
            reappropriating means from labor, government gentrification & bond
            laundering. Not “goodies,” as described by Cnn
            <br />
            <br />
            Collective bargaining investment isn’t as effective as marginal
            investment by consumer-sprint
            <br />
            Left jobs, right bailout accrual profit. bottom-left is efficient,
            supply and demand with only labor, outlaid right away without
            private communes unsettled. The right want bankruptcy & credit-cycle
            instead of suspension of assumption of borrowers' customers' money
            brought forward. Collective bargaining investment isn’t as effective
            as marginal investment by consumer-sprint
          </div>
          <br />
          <br />
          competing with consumers
          <br />
          Republicans want everyone to enslave each other without
          discrimination. FUCKING WAIT FOR CUSTOMERS BEFORE WITHDRAWING LOSER
          <br />
          <br />
          My family are home-contractors, NY Republicans think homes are by
          default a burden, no, dead-weight-finance disables settlement. YOU ARE
          FUCKING LOITERING AND COLLUDING WITH LENDERS of saver-money
          <br />
          <br />
          "Domestic terrorist BLM, millions of dollars of property damage," Rep
          Peter King. not if you sold at once and amortized for reimbursement of
          down payments upon repo, reverse don't cancel debt:cash*income
          <br />
          <br />
          poverty eradication is the best-friend of generating retarded-poorness
          <br />
          <span style={{ backgroundColor: "rgb(180,220,255)", color: "black" }}>
            "Families are feeling it the most, cutting child poverty in half,"
          </span>
          &nbsp; for a moment while you make the producer a lot richer for not
          having to lower price nor work to live
          <br />
          <br />
          "Tax-free-INCOME-for-life," so-called-conservative Newsmax ad, calling
          rental-income, income
          <br />
          <br />
          GORDON CHANG WHAT EVIDENCE DO YOU HAVE THAT CHINA SPREAD THE VIRUS
          SUCCESSFULLY, YOU JUST STARTED TESTING FOR IT fucking retard
          <br />
          <br />
          <span
            style={{
              backgroundColor: "navy",
              color: "white"
            }}
          >
            “You’re a navy seal you don’t need one,” I missed the part where I
            was taught to catch bullets,”&nbsp;
            <a href="https://truncatedsalestax.com" style={{ color: "white" }}>
              Carl Higby NY NJ & CT
            </a>
          </span>
          <br />
          <br />
          Anthony Tatar fighter for rights of depression-obscurity. Every
          episode is rational “If you have thoughts of suicide, call the hotline
          and we will help you,” is that the number Epstein called?
          <br />
          Share-split tsy-laundering-concurrent-40%-deficit
          <br />
          “Critical to have income coming in,” Payne slights&nbsp;
          <span
            style={{
              textDecoration: "underline"
            }}
          >
            market-communism
          </span>
          &nbsp; rhetorically, “once you live of land, fixed dividends or
          income, no matter what market does.”
          <br />
          <br />
          “'$10m at $1m/yr you are going to run out of money in ten years,' ...
          'what do you mean?'” Payne jr. Another’s gain past zero-sum is more
          work
          <br />
          <br />
          Profits nor America first is conservative
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1IQgjYABEqXe0Wve8tomTx2uHu8KdmLTg/preview"
              }
              float="left"
              title="hodge, scott of Tax Foundation speaking about the importance of expensing"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            if you had a large growth portfolio, you made 18% a year.&nbsp;
            <span
              style={{
                backgroundColor: "white",
                color: "black"
              }}
            >
              Outlay corporate profits, today
            </span>
            <br />
            <h2>You might be dumb and rich, but you're criminal</h2>
            <br />
            "You haven't had an infaltion issue in 40 years," are you
            obfuscating absent supply of labor from rental-income?
            <br />
            Boomers have worked half as much as the&nbsp;
            <span
              style={{
                backgroundColor: "white",
                color: "black"
              }}
            >
              youngest millennials
            </span>
            , who lives more and more in the
            old-person-lender-loitering-collusion
            <br />
            "milennials average aren't in home anymore," well 30 is still
            negative net worth of last-trade-value of frauduulent outstanding
            without collective-write-down
          </div>
          <br />
          <br />
          Stocks anticipating inflation and earnings
          <br />
          "(flush, common-sense, more money, more supply!) Consumers are always
          ready to spend their own money,”&nbsp;
          <span style={{ backgroundColor: "orange", color: "black" }}>
            Payne Capital Management
          </span>
          &nbsp;while down payments to gdp is 1/11
          <br />
          "Americans got an early holiday gift this week when the House finally
          passed the bipartisan infrastructure bill. This means better roads,
          bridges, broadband, and water for all of us. And the crazy part is,
          the two parties actually did it together."
          <br />
          <br />
          <span style={{ backgroundColor: "rgb(255,180,255)", color: "black" }}>
            "No Labels is a national movement of Democrats, Republicans and
            independents working to bring our leaders together to solve
            America’s toughest problems."
          </span>
          <br />
          <br />
          How the hell is “no-label” bipartisan instead of poly? A
          plural-majority of non-voters always win. We want an anti-rent-seeking
          candidate
          <br />
          Nick Carducci
          <br />
          SaverParty.xyz
          <br />
          <br />
          “‘Not all skin folk are kinfolk,’” pinion says “this tells us how to
          behave,” but rather it tells us now not to
          <br />
          <span
            style={{
              backgroundColor: "rgb(166,16,30)",
              color: "black"
            }}
          >
            "save small business under pandemic rule. thats what we do. we rush
            in and bail people out.treasury rates is the discounting mechanism,
            bonds moving higher, yields lower."
          </span>
          <br />
          <br />
          "GDP will be reduced by -1 by every dollar of government spending."
          What kind of market-communist math is that? Do you not count
          government debt in m2 without currencyComponentOfM1.
          <br />
          {/*I'm estimating that net value is because you fucking count
              "investment"-government-gentrification as income. the capital loss is*/}
          Another fool who counts Investment and Government as Exported when
          attempting to accounting for income
          <br />
          <br />
          gdp by another measure than the actual price*trades is nuts, unless
          burgeoning for price*hours*trades, when price =
          currencyComponentOfM1/public-park-lands
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/16pwuj68t2vRkTIBTYniyVXVbVKpXABSM/preview"
              }
              float="left"
              title="hodge, scott of Tax Foundation speaking about the importance of expensing"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            full-expensing for capital investment, important for the economy
            today," Scott hodge
            <br />
            "book (finance, accountants salivating, put in by economists,
            capital investment for full-expensing, net-operating-loss bail-outs
            vs irs tax-cash-profits (cash, "pro-growth, rules out depreciaton
            and expensing").
            <br />
            literally said loss-deductions was, "good," first for growth and
            then said to be "pro-growth" would be to stop that. then he fucking
            finished with, "importance of expensing, as is scheduled to do," for
            the economy,&nbsp;
            <span style={{ backgroundColor: "orange", color: "black" }}>
              more admittance of trust-building on air
            </span>
          </div>
          <br />
          <br />
          America first&nbsp;
          <a
            href="https://www.academia.edu/48950663/Economics_of_Politics_Public_Finance_Term_Paper"
            style={{ color: "rgb(20,100,200)" }}
          >
            foreign tax increase above corporate
          </a>
          , for the only&nbsp;
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            utilitarian purpose being to
          </span>
          , "go public"
          <br />
          <br />
          ACLU WAS ON THE SIDE OF BUSINESS/Consumer, hung-jury-permits,&nbsp;
          <a
            href="https://doi.org/10.3389/fcimb.2018.00396"
            style={{ color: "rgb(20,100,200)" }}
          >
            "science"
          </a>
          <br />
          “Economists turn away because they didn’t want to be ridiculed by Paul
          Krugman too,” Kevin Hasset presenting&nbsp;
          <a
            href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy"
            style={{ color: "rgb(20,100,200)" }}
          >
            Socialism, Capitalism & Democracy
          </a>
          <br />
          <br />
          <h2>What am I living in the fucking Giver?</h2>
          <span
            style={{
              backgroundColor: "rgb(170,90,220)"
            }}
          >
            Can only discriminate without comment for labor and consumer, price
            withstanding
          </span>
          <br />
          <br />
          Registered voter, likely voter, why would you not include non-voters
          as representative-authority after moooving on the election with what
          uya got
          <span style={{ backgroundColor: "rgb(240,160,160)", color: "black" }}>
            “I don’t want to put you on the spot because this is how you make
            your living,” Tom Basile
          </span>
          <br />
          <br />
          Single largest investment in public works in the nations history, turn
          the climate crisis as an opportunity
          <br />
          <br />
          Blue collar blue print jobs infrastructure resilience, 2-3 months of
          ghost cities, will visit ports first. Why not charge the shipping?
          Racketeering
          <br />
          <br />
          Scott Georgia bipartisan $339m rent-seeking-laundering
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            High speed internet
          </span>
          <span
            style={{
              backgroundColor: "rgb(180,255,220)",
              color: "black"
            }}
          >
            , _, water quality, charging stations electric vehicles Useless
            price inelasticity, labor-monopsony instead of regulation, fines
            instead of jailtime, net loss imprisonment by bonds instead of
            truncatedsalestax.com 666&nbsp;
            <a href="https://billbiden.org">BBB</a>
          </span>
          <br />
          <br />
          Non-voters always win in detest & eligible voters in plural-majority
          <br />
          <br />
          “Self destructive, make own case,” is that disqualifying now, newt?
          <br />
          “Customer-client,” finished
          <br />
          <br />
          <span role="img" aria-label="clown">
            🤡
          </span>
          "Bipartisan $5t emergency spending, Myself, Trump, MNuchin, then
          jammed thru another $2t with no bipartisanship," (R) Larry Kudlow
          <br />
          <br />
          "The emergency is over, the economy is expanding. before they destroy
          it with taxes, regulation and energy damage. We are growing at $6t",
          Larry continues "they are still printing, the pandemic is over." Money
          Market is the big cause of the inflation (ignoring
          value-"price"-elasticity from debt-inelasticity)
          <br />
          <br />
          "They project 2% gdp growth, what the heck is that," uhh stasis of
          basis? that is population growth half life ago
          <br />
          <br />
          <span style={{ backgroundColor: "rgb(255,180,255)", color: "black" }}>
            net-loss-bond-laundering
          </span>
          , if you can keep it
          <br />
          <br />
          <span
            style={{
              textDecoration: "underline"
            }}
          >
            market-communist
          </span>
          -takeover in the healthcare & energy industry
          <br />
          <br />
          "Left loves jobs," the right loves profits, the bottom left loves
          efficiency, emulating with regulation of contracting infinite
          producers
          <br />
          <br />
          what if technology for charging stations need to upgrade, but you
          already forced everyone to "purchase" it
          <h2>Throwing out the baby with the bathwater</h2>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1uSLG4f6g9Zy3no16Nmvzbl-fSUDcHoox/preview"
              }
              float="left"
              title="biden infrastructure monopsony"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          Chargin-stations, led-pipes,&nbsp;
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            broadband
          </span>
          , all can be purchased by consumers
          <br />
          torts may be appropriate for every-subsidy prior
          <br />
          <br />
          Power-grid monopsony instead of target-margin is ILLEGAL
          trust-building beyond article 4, & free rider mutable
          <br />
          <br />
          There is nothing social about gentrification/welfare, price-inelastic
          and a boon to producer-ask
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              src={
                this.state.iosNoPhoto
                  ? ""
                  : "https://drive.google.com/file/d/1Tlbew46Y9zEv_xyv0te65CAAjLighfTq/preview"
              }
              float="right"
              title="bulwark"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            The bulwarks favorite part of the free rider mutable gentrification
            bill is the front-running of low income housing improvements and
            rent seeking by the government instead of actually regulating? Debt
            inelasticity 4400% is more real than inflation 102%, says the super
            wealthy are going to pay for it when it only costs consumers in
            comparison to outplaying corporate profits today. It concurrently
            with 40% debt spending is LAUNDERING to say it is paid for, even
            when gorging consumers with their own money, forcing purchases and
            gentrification of the poors’ homes
          </div>
          <br />
          "you and I and our kids will all pay," this prick is fucking
          delusional
          <br />
          <Cable
            onError={handleScollImgError}
            style={{
              width: "80px"
            }}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1G5ZPxvVXeXAHlYtynAUs8mOjqYYAkRIc/preview"
            }
            float="left"
            title="zeoli"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <br />
          socialism is conservative, not those protecting accrual and insurance
          <br />
          collective bargaining fraudulent. Literally thinks spending will
          bankrupt our country, right now it is impossible without using more
          saver-money third party beneficiary share-split for government
          gentrification and bond laundering which is mostly private, and Marx
          just wants to stop private actors from counterfeiting in contract
          (third party beneficiary/no-surrender is already law, not
          "progressive-kook-
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            marxist
          </span>
          -nutjobs," marx would never gentrify nor reappropriate means of labor,
          only regulate market-communist tranch-fag wall st)
          <br />
          <br />
          “Family court supervision FUCKING LUNATIC. borrowers loiter.
          Pensioners are PIGS using grandiose accrual value not bid-price ready
          willing and able,” NY Commissioner Shae of my dreams. YOU STILL HAVE
          MY NUGG, and your mortgage collateral is bartenders’-money
          {width && <Fraud6 width={Math.min(600, width - 100)} />}
          <span style={{ backgroundColor: "white", color: "black" }}>
            Jury-duty: accrual is bizarre&nbsp;
            <span role="img" aria-label="shh face finger lips">
              🤫
            </span>
          </span>
          <br />
          <a
            href="https://truncatedsalestax.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            Illegally
          </a>
          &nbsp;carrying guns on street is only cases as to not
          threaten-recklessly.&nbsp;
          <a
            href="https://teapharmacy.party"
            style={{ color: "rgb(20,100,200)" }}
          >
            confistacting
          </a>
          ? Well, at least they aren't shooting on site, but they are making
          money on net loss thru imprisonment when bonded
          <br />
          sonthing is corrupt when login.gov is so, so malfeasant towards&nbsp;
          <a
            href="https://thumbprint.us/phone"
            style={{ color: "rgb(20,100,200)" }}
          >
            repeat-offender-comms
          </a>
          <br />
          Class action can be a compelled mediation & hung-jury-desist order
          <br />
          <br />
          reappropriating money and scalping the bond net loss profits with
          useless price-inelasticity free rider mutable instead of cap rent 5
          units 30 days to force settlement, of which Schumer says affirmitavily
          invices are theft is NOT in medicare for all but merely a greater
          premium for less deductible to make the producers inexorbinantly rich
          over "poverty" or if let, price-deflation
          <br />
          <span style={{ backgroundColor: "brown" }}>
            growth of brought forward demand, ideological duress muck
          </span>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/8av0hooby5uek3r/clyburn.jpeg?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          <br />
          you aren't transformative by gentrifying r&d&nbsp;
          <span style={{ backgroundColor: "rgb(180,220,255)", color: "black" }}>
            gentrify, don't target-margin
          </span>
          <br />
          you aren't more competitive by bloating demand befor the bid-is ready,
          willing & able, for useless dead-weight-rentier cost on labor to
          sustain
          <br />
          broadband and carbon capture monopsony by colonialist Pelosi
          <br />
          laundering 40% debt spending concurrently to pay-fors, profits
          redistribution instead of immediate corporate outlays Psaki
          <br />
          if you don't want liability you need to open-source and only certify
          instead of prohibit
          <br />
          consensus amongst the industry-precedence-incentivized takes the cake
          for biggest pro-testor! I got D in Game Theory bc racism
          <div
            style={{
              backgroundColor: "rgb(14,118,168)",
              padding: "20px",
              paddingRight: "40px",
              width: "calc(100% - 150px)"
            }}
          >
            "Paid by whom? https://usdebtclock.org/"
            <br />
            <br />
            _ Everyone pays for it and everyone benefits. Duh.
            <br />
            Curious curious like 3
            <br />
            <br />
            comparative advantage isn’t worth it when replacing two industrial
            workers with one and the other watching their kids. Future and past
            demand are cheated
            <br />
            <br />
            _ Do you have children?
            <br />
            <br />
            that’s exactly my point. I’m the child doing chores. Enough
            gerontocracy. Let me take the job. Enough trust-building
            <br />
            <br />
            _ Do you have children? Yes or no?
            <br />
            <br />
            I said I’m the child. How dumb can you be. That means no
            <br />
            <br />
            _ So—this topic does not apply to you as a worker. You haven’t
            needed this benefit—so you just have an opinion to offer, and not
            much more. No “real” experience, just your “two cents.”
            <br />
            <br />
            I’m a worker… are you racist or something? Everyone works, even kids
            <br />
            <br />
            _ Money exists between our ears. Chase alone could conjure up 29
            trillion this afternoon—hell, they may already have—we will never
            know. Plus, debt is good, at least that's the conventional wisdom.
            That money is coming from everyone on Linkedin—we're good for it—we
            are money. Our "American" productivity is what will pay off the
            debt. #societyandculture
            <br />
            <br />
            _ So, you don't bet on America to pay its debt? Is that your worry?
            That American won't pay what it owes? Why do you not believe in
            America?
            <br />
            <br />
            I appreciate your acknowledgment that conventional wisdom can be
            changed. Alternative finance like max profit royalty contracts in
            Vaults.biz or Pipe . Communism was actually written in context of
            credit-cycle by market communists. I attest productivity is actually
            price deflation under hours
            <br />
            <br />
            insightful 1
            <br />
            _ No, I'm not racist. Kids in my family don't work jobs—they go to
            school. You have to ask if adults who work can't get paid family
            leave—will child workers get a fair deal? Capitalism can easily pay
            for all of this. Folks need to stop acting silly.
            <br />
            <br />
            we can actually reverse debt:cash*income, so Savers compel 20% US is
            fed lands/bartender-money as a third party beneficiary to the down
            payments to gdp 1/11. 10x more hours than 1970 to own median home,
            not because of gdp/p nearly constant before 1913.
            Timelesspaydayroyalty scoped for industry-type, settle cap 5 units
            or 30 days Saver Party
            <br />
            <br />
            _ Sigh. The point is this—they do these things (good pay, WLB, long
            family leave, public option health care, etc.) in western Europe,
            and the world capitalism hasn't ended. We can do them in
            America—that is my point.
            <br />
            <br />
            it’s useless price inelasticity, monopsony, gentrification &
            trust-building. Get out. Schumer admitting now invoices are theft is
            out of Medicare for all and it means higher premiums to match
            deductible lowering
            <br />
            <br />
            _ Dude, what (blank) are you saying? 🙄 Wow.
            <br />
            <br />
            just look up "third party beneficiary" law, then "monopsony." Only
            need it because of debt, implausible landlord use and collective
            bargaining fraud, and it is useless price inelasticity
          </div>
          <br />
          "Federal reserve is going to stop inflation by creating more
          debt-inelasticity," Jake Tapper says smiling
          <br />
          <br />
          Future hours rollover non-concurrentable UNITS (lest apt. book escrow
          withut refund but review for grandiose consumer protection law scopes
          <br />
          <span style={{ backgroundColor: "rgba(180,220,255,.4)" }}>
            Government healthcare literally lied about me punching and kicking,
            trying to elope for going in for a knee injury after being presented
            with an unidentified syringe. Riverview will not reveal the hallway
            footage to this day (5 months before the time of this writing)
          </span>
          <br />
          "job gains, a lot to celebrate, ..."&nbsp;considering instead of&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            outlay corporate profits today
          </span>
          , tax profits for bond laundering 10% debt-service but 40-50% spending
          is new debt or grandiose accrual of collateral valued by those very
          bonds.
          <br />
          <span style={{ backgroundColor: "rgb(255,180,255)", color: "black" }}>
            monopsony, fine, not regulate/target-margin
          </span>
          <br />
          "infrastructure enormous, tremendous benefit to the economy," he
          continues "get shit done," on cnn.
          <br />
          “The economy is not just inflation, it is job creation,”&nbsp;
          <span style={{ backgroundColor: "rgb(180,220,255)", color: "black" }}>
            cnn/biden busy-work
          </span>
          <br />
          <br />I work for copyright, you work against $12k/year/person new
          debt, postly private. expansion of social safety net is
          reappropriating labors' means to trust-building parents from children,
          existing business from workers. timelesspaydayroyalty scoped for
          industry-type max-profit royalty contracts like alternative finance
          after&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            reverse debt:cash*income
          </span>
          <br />
          <br />
          So you are telling me, Trump paid Obama’s pro-stitute pee bed?
          <br />
          <br />
          Bipartisas want to collude rank choice to fine instead of regulate,
          closed-source-license instead of certify
          <br />
          <br />
          <span>Teapharmacy.party</span>. Gentrification/charity had
          intermediate supply-demand elasticity of 1:1 to price-change.
          Investment as GDP, means Net exports is selling out - except for
          dollars as 20% US is Federal Lands/bartender-money
          <br />
          <h2>
            Do you have a gigantic dent&nbsp;
            <a
              href="https://brainscan.info"
              style={{ color: "rgb(20,100,200)" }}
            >
              in your head
            </a>
            ?
          </h2>
          private MARKET-communist republicans and libertarians want to hoard
          profits, copyrights & concurrentability (non-expiring unit) in
          corporations rather than OUTLAY CORPORATE PROFITS TODAY
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "120px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/e29e0ruqx6o4cz6/Screen%20Shot%202021-11-05%20at%2012.01.15%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Brainwashing the oxymoron,&nbsp;
            <span
              style={{
                backgroundColor: "rgb(240,160,160)",
                color: "black"
              }}
            >
              "Big-Government-Socialism"
            </span>{" "}
            to mean government gentrification of jury & intermediate
            supply-demand? Do you have a gigantic dent in your head?
            <br />
            Even if 2.5m ms + acute flaccid paralysis was not paralytic polio &,
            not only uncartoonized cause lest electron microscope
            bacteria-cell-virus snapshot, but lest&nbsp;
            <a
              href="https://www.nature.com/articles/d41586-019-00991-4"
              style={{ color: "rgb(20,100,200)" }}
            >
              bacteria-in-order
            </a>
            , ad Article 4 grounds would be found by a jury to convict the all
            but not than an "alive, evolutionary-trait or manifestation of
            antimatter," to duress within an indiscrimiate minimal viable
            product without duress and reciprocal exclusio lest
            involuntary-servitude with unmet standing to sue
            <br />
            +500k/200k basis jobs, Productivity over Hours&nbsp;
            <span style={{ backgroundColor: "orange", color: "black" }}>
              is like, the opposite of hours
            </span>
          </div>
          <br />
          in what world would Marx mandate anything except labor having means.
          They gentrify, reappropriating means is not Socialism, but
          market-communism. Mandates with hung-jury is like, legal-communism.
          <br />
          <br />
          Rudy talking about his $90b budget then bashes Marxism as
          market-communist... He literally invented communism to, "fight that"
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{
                width: "800px",
                maxWidth: "calc(100% - 50px)"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/1t1njxazwq70gjk/Screen%20Shot%202021-11-05%20at%2011.13.36%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/38jcaugeyanm73p/Screen%20Shot%202021-11-05%20at%204.36.10%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/znqq689vncdjjyq/Screen%20Shot%202021-11-05%20at%204.35.56%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            <iframe
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "600px",
                maxWidth: "90%",
                border: 0
              }}
              src="https://www.youtube.com/embed/OqgUxnqc3AM"
              title="YouTube video player"
            ></iframe>
            Cases pending religious class-precedence-malfeasance for religious
            beliefs by pedo-preist Peter follower sancctions & derelictions when
            everyone thinks G-d made virus or it is a human evolutionary trait
            rather than bacterial-source, exclusively
            <br />
            <br />
            If $2-6t currencycomponentM1 travels 1ce a year, where does it go if
            gdp to down payments is 11/1, $1.98 trillion
            <br />
            I was curious where the money goes if $4t/yr is fed spending before
            3/2020
            <br />
            But it actually is half new debt, 10% is debt-service, but yes gdp
            to down payments is 11/1, or $2t a year, happens to be the total
            outstanding public park deeds of 20% fed lands, $88t bond value,
            third party beneficiary should be reversed
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/qo7bxddaumkvybt/Screen%20Shot%202021-11-05%20at%204.36.22%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            <br />
            Inflation problem from immigration or supply chain solved?
            <br />
            If you knew you could solve supply trade problems with immigration
            but without wall st to not have inflation, would you do it?
            <br />
            <br />
            <span
              style={{
                backgroundColor: "rgb(180,220,255)",
                color: "black"
              }}
            >
              ERIC ADAMS CANNOT FUCKING REQUEST TO BE PAID BEYOND DOLLARS
            </span>
            , he has to buy it himself, do not let a bitcoin pass thru the
            office so spuriously
            <br />
            <br />
            Psychotic and antisocial is subjective - Paternity male but is trust
            building against the&nbsp;
            <span
              style={{
                backgroundColor: "rgb(240,160,160)",
                color: "black"
              }}
            >
              baby taking that job
            </span>{" "}
            for 2 lost vocational workers for one and a nanny
            <br />
            Anybody but the illegals, cosigning share-split but complains about
            supply chain, just let them in Karen you fucking kook on Rita Cosby
            <br />
            They say children savers will pay by share split down payments to
            gdp 1/11 endlessly, are you kidding me?
            <br />
            50% of $4t/yr pre-3/2020 fed expenditures is debt Kathy you TOTAL
            BITCH
          </div>
          <br />
          <span role="img" aria-label="alarm">
            🚨
          </span>
          &nbsp;getting on&nbsp;
          <a
            href="https://truncatedsalestax.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            probation if you've done something wrong
          </a>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/6q73v4euxw1y08k/Screen%20Shot%202021-11-04%20at%2010.40.19%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Our choice is to have voucher, keep public schools, but not remove
            it. Baby steps or entrapping? Inception deep state
            <br />
            <br />
            Preventing deaths is not changing the byproduct, but not the cause
            <br />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/o5ahjh9qlae7nz4/bob%20costas.jpeg?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            <Cable
              onError={handleScollImgError}
              style={{ width: "50px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/237l11jixc8e38s/Screen%20Shot%202021-10-29%20at%203.17.55%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Science," Bob Costas, what a fucking idiot
            <br />
            <br />
            "Protect citizens," says the colonialist
            <br />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/dqm5hvza8llrcnx/Screen%20Shot%202021-11-04%20at%209.44.28%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            you cannot owe what you have not earned! any compounding from poor
            investment is the fault of the investor
            <br />
            <br />
            Want to solve your over-population-by-boomer ("supply chain")
            problem?
            <br />
            Your laws are all over the place. Enforcing one often countervails
            another. You are prohibiting trade when stopping immigration, for
            instance
          </div>
          <br />
          <br />
          Insurance discounts is an oxymoron & fraud,
          class-precedence-malfeasance
          <br />
          INSURANCE CANNOT SAVE YOU MONEY WITHOUT CONCURRENTABLE UNITS
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/yx7er7xf4vaozto/Screen%20Shot%202021-11-04%20at%209.36.46%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Perjury is not a crime because you are under duress and is vailed by
            Amendment 5 unless you’re lie harms others rather than launderers
            net loss imprisonment for a net loss, like in competition with
            closed-source-ingredient-list&nbsp;
            <a
              href="https://teapharmacy.party"
              style={{ color: "rgb(20,100,200)" }}
            >
              pharma cops
            </a>
            . why do you care if I smoke when it is a performance enhancer? YOU
            NEED TO LOSE WEIGHT IF IT WER LAW NOT TO BE I GUESS WE WILL USE LAWS
            INSTEAD OF NATURAL LAW IN RETRIBUTIONAL PERPETRUITY
            <br />
            <br />
            This guy definitely gets off on imprisonment for lying to stay out
            of jail, even if there is no victim except yourself
          </div>
          <br />
          DEMOCRATS: “Gdp is growing, we’ve gotten things done,” that isn’t a
          measure of productivity, being prices*hours*trades
          <br />
          The voters told us that we don’t like ANY of the candidates
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/1mzbqrwnnj00tvl/Screen%20Shot%202021-11-04%20at%208.10.21%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            paid family-leave is gerontocracy trust-building. I'm the child
            doing the chores. Let me take the job. enough trust-building
            <br />
            Gentrification and reappropriation of labors' savings isn't
            socialism, forbidding corporate profits year to year and implausible
            use rent is, but not public banking. Democrats & Republicans
            solution to inequality is always gentrification & fines instead of
            regulation
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/wxrqv7gotpyeq17/Screen%20Shot%202021-11-04%20at%208.04.48%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            market-communism permeates in finance not just public
            <br />
            willful disobedience with hun-gjury-permitted science is abject
            gentrification for government
            <br />
            <br />
            Not actually fighting against vaccine mandates when you say vaccine
            helps. If the virus is deadly, you are required to stop that within
            the minimal viable duress parameters
          </div>
          <br />
          <br />
          Stinchfeild calls cops free thinking when they have no retort for
          viral-cause of deaths other than, "just because." Fucking flop
          <div
            style={{
              float: this.state.iosNoPhoto ? "" : "left"
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <TwitterTweetEmbed
                key="1428312309685002241"
                tweetId="1428312309685002241"
              />
            </div>
          </div>
          "I projected the virus would kill 500k americans, and it did," any
          tard could estimate that since age-standardized excess deaths expected
          is 1.2m from population growth alone
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/b22mgsqdly71pqc/Screen%20Shot%202021-11-04%20at%207.58.41%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/xee2x3qx1xo5j5l/Screen%20Shot%202021-11-04%20at%207.58.31%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          <br />
          PUBLIC DEBT {"<"} PRIVATE DEBT
          <br />
          Mark Levin, retarded market-communist, doesn’t realize private debt is
          more than public in $12k/person/year, complains when government does
          it, claims our children will pay when gdp to down payments is 11/1 and
          total debt is 4400% currencyComponentOfM1 tied up in corporate bank
          accounts. LITERALLY DEFICIENT IN COUNTING or lying to you night in and
          out. third party beneficiary contracts are impossible without waiting,
          all you can do is sell business-account, not appraise before consumer
          pays. Profits are a net loss of individual-labor-savings
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/75h7jbg8eypoor2/Screen%20Shot%202021-11-04%20at%206.35.41%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Republicans are the party of solutions,” you haven’t solved anything
            more than tying your shoes
            <br />
            <br />
            Bipartisan support for Infrastructure but plural majority against
            both parties
            <br />
            <br />
            no need to tax profits instead of outlay immediately and stopping
            private-market-communism for debt-service in free rider immutables
            but most roads can have margin target tolls and private-pipes can be
            regulated without fines nor gentrification. STFU LYNDSAY, FUCKING
            COUNT EVERY PERSON not just voters who have ideological duress at
            worst and a candidate to rep at best
          </div>
          <br />
          there are policy alternatives but you are just gluttonous
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/4idoe10sagtj4qj/Screen%20Shot%202021-11-04%20at%206.17.02%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Stolen technology,” USPTO grunt Michael McCaul. No utility is
            invented but discovered, copyright is sufficient for IP competition
            <br />
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/c09o1qixp2xrdbz/Screen%20Shot%202021-11-04%20at%206.08.39%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            High gas prices will get better, Bank of America just doesn’t want
            to reverse debt:cash*income so they don’t present it as a solution
          </div>
          <br />
          THERE ARE SO MANY LAWS THEY COUNTERVAIL WITH OTHERS AND PRECEDENCE;
          competing-with-consumers is abject intent
          <div
            style={{
              shapeOutside: "rect()",
              float: "left",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/bp3bpgjld5zhcjl/Screen%20Shot%202021-11-04%20at%205.56.45%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          “Allow people to opt out as county from spending bill,” a private
          market-communist cajoles literally theft in contract as long as it is
          voluntary between the counterfeiting lender and loitering borrower
          <br />
          <br />
          Market-communists fighting anti-rentier for it is the way of american
          life, drop dead
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ec9cu6oljvwl611/Screen%20Shot%202021-11-04%20at%205.38.39%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/1880nukh2xmkj3o/newt.jpeg?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Elections do not have the power merely for having to move without
            <br />
            . Socialists were NEVER redistribution of labor’s equity except
            retributable torts for third party beneficiary insurance collective
            bargaining fraud & implausible landlord use DEAD-WEIGHT in
            supply-demand
            <br />
            <br />
            Communism is agains market-communism, rampant corporate profits and
            hung-jury-permits, prejudicial assumptions, countervailing laws and
            neglected-intent
            <br />
            <br />
            What kind of socialist with means to labor would allow mandates or
            private business discrimination and involuntary servitude of the
            discriminated’s contributions lest retributed without jury 11/12 in
            the populous not randomized emulated but voluntary with abstain as a
            default “no” unless is from conflict of interest. You're fucking
            idiots Brian Mast and Chris Salcedo
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ud95p1ay8g45hrr/Screen%20Shot%202021-11-04%20at%205.15.19%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            mandatory-testing isn't even necessary since it gives false
            positives of bacterial causes
            <br />
            <br />
            <iframe
              style={{ width: "90%", border: 0 }}
              src="https://www.youtube.com/embed/10kjUOVqk7o"
              title="YouTube video player"
            ></iframe>
            <a href="https://froth.app" style={{ color: "rgb(20,100,200)" }}>
              Work to feed my family
            </a>
            ,” no you fucking tool you work for the bank impossibly involving
            savers’ money THATS MY MONEY TO SPEND can only “promise”
            business-line
            <br />
            <br />
            Osha/Article4 regulation when the ONLY proof you have virus is
            created by virus is a FUCKING CARTOON?
          </div>
          <div
            style={{
              shapeOutside: "rect()",
              float: "left",
              display: "flex",
              flexWrap: "wrap",
              width: "100%"
            }}
          >
            <div
              style={{
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/iwcdoybc89tz1nv/Screen%20Shot%202021-11-04%20at%204.26.54%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/3rkidthbcl7hxrm/Screen%20Shot%202021-11-04%20at%204.27.33%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/chc8pfzxgyes735/Screen%20Shot%202021-11-04%20at%204.27.21%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/3vpw5afaduwqur5/Screen%20Shot%202021-11-04%20at%204.26.43%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/mwmd4ag3fc53q5b/Screen%20Shot%202021-11-04%20at%204.26.33%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
            <div
              style={{
                display: "flex",
                height: "min-content"
              }}
            >
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/cca4uxl24gj4j2j/Screen%20Shot%202021-11-04%20at%204.27.11%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
            <div
              style={{
                width: "400px",
                maxWidth: "100%",
                display: "flex",
                height: "min-content"
              }}
            >
              Grounds for a new French Revolution against the White House
              <br />
              <br />
              “At least she is not arrogant,” she just said she is never wrong.
              Being in power, humble & wrong is dangerous
              <br />
              <br />
              Age-standardized excess deaths are less than expected by cohort
              size epiologically and bacteria makes virus exclusively (J M
              Sweere, 2019)
              <br />
              <br />
              Marx would never allow market-communes overpower consumer-rights
              of scientific consensus without hung-jury-permits of minimal
              viable product in duress excess
            </div>
          </div>
          <br />
          Marxism uses community to stop suppliers competing with consumers, not
          the indifvidual when they are rightly outlaying profits to labor
          immediately without market-communism
          <div
            style={{
              maxWidth: "calc(100% - 46px)",
              width: "max-content",
              height: "min-content"
            }}
          >
            "We are rich," Rudy says, but with nothing but wealth-inequality,
            the lands have always been the same
            <Cable
              onError={handleScollImgError}
              style={{ width: "50px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vk68ahw9woekrzi/kerrick%20rudy.jpeg?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <div
            style={{
              maxWidth: "calc(100% - 46px)",
              width: "max-content",
              height: "min-content"
            }}
          >
            "everytime Biden goes out, he potentially destroys, himself." SAY IT
            YOU FUCKING TOOL. REEEETARD
            <br />
            Ween them off bonds with&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{ color: "rgb(20,100,200)" }}
            >
              truncated sales
            </a>
            &nbsp;tax AFTER reverse debt:cash&income
            <br />
            <Cable
              onError={handleScollImgError}
              style={{ width: "50px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/o2rrreussf9cijs/nypd.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          <br />
          Contributors of utility do actual work, or trading hours for
          copyright, not trading dollars for labor, belaboring the rate
          <br />
          Assess a county with 40% "value" premium discrimination for similar
          House. Republicans and libertarians think price is determined by what
          the borrower and lender can agree, without regaur for those who pay
          the borrower, loitering
          <br />
          <br />
          "Bad or anyone affected," that is your onus Greg. fucking liablility
          communist
          <br />
          <br />
          The&nbsp;
          <a
            href="https://micro-theory.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            Reasoning for infinite producers
          </a>
          &nbsp;to make price-efficient and hung-jury is false
          <br />
          <br />
          “$1 back rub grandpa,” Judy replies, “I would never do that,” while
          $32/day/person new mostly private debt
          <br />
          <br />
          In therapy, your purpose is to lose customers
          <div
            style={{
              maxWidth: "calc(100% - 46px)",
              width: "max-content",
              height: "min-content"
            }}
          >
            finite producers cannot emulate jury-permitting
            <br />
            <Cable
              onError={handleScollImgError}
              style={{ width: "50px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/237l11jixc8e38s/Screen%20Shot%202021-10-29%20at%203.17.55%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            It's coming out, not in
          </div>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "80px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/n782ienk5rxl6fl/Screen%20Shot%202021-11-04%20at%209.08.58%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Invoking superhero neurosis to cajole vaccine profits into coffers
            from children, of which aren’t even affected by it.”
          </div>
          <br />
          <div
            style={{
              shapeOutside: "rect()",
              float: "left",
              width: "100%"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/aadxeks7evt2f59/Screen%20Shot%202021-11-04%20at%205.15.08%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          Benny Johnson, “it came from a lab and is as deadly as the flu. That’s
          what the medical experts say.” Imagine if he said those thinks
          together over and over, me might realize Wuhan mimicked nature, then
          tested for it naturally occurring.
          <br />
          <br />
          <span style={{ backgroundColor: "white", color: "black" }}>
            gerontocracy/dead-weight-rentier begs immigration
          </span>
          : If you are listening to people of who to ask on in the media pit,
          and you’r angry of getting them angry,” Uncovering the root cause my
          ass
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/0870zbp8e2nevz7/Screen%20Shot%202021-11-04%20at%202.56.11%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          "Boosters not being asked now but being workshopped” against what
          basis? Stop saying virus is the cause or age-standardized excess
          deaths is unexpected, "if you want to open the liability to producers,
          I'd be for that," cajoling for class-precedence-malfeasance, he
          continues
          <br />
          <br />
          “I am who I am and that’s how I became who I am,” Ed Durr.
          <br />
          “Greatest political feat in recent memory”
          <br />
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/y1eus6keqalc13c/jayapal.jpeg?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            Reverse debt:cash*income
          </span>
          <br />
          Anti-afro, anti-child, anti-woman?
          <br />
          Social welfare plan or gentrification
          <br />
          <br />
          Tax payers don’t pay
          <br />
          Family leave is trust building parents
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/re8tpd0n5ceboye/Screen%20Shot%202021-11-04%20at%203.07.17%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          We won, the non-voters, if you count them. The empathy with the old
          people in New Jersey voting isn’t as important as their will
          <br />
          <br />
          “$20m 200x average cvs employee” Steve Cortes, $100k average admins
          useless non-workers. Profits is net loss of individual labor savings
          <br />
          <br />
          I will be using ArrayArrays and withholding the copyright and I have
          medical opinions for entry
          <br />
          <br />
          AP calling Murphy, no candidate.
          <br />
          Less turnout, less standing
          <br />
          NO ONE CARES WHAT EITHER OF YOU THINK, FUCKING NERDS
          <br />
          <br />
          <span
            style={{
              backgroundColor: "orange",
              color: "black"
            }}
          >
            I guess non-voters won
          </span>
          <br />
          Our&nbsp;
          <a
            href="https://projectequity.org"
            style={{ color: "rgb(20,100,200)" }}
          >
            <span role="img" aria-label="hammer & sickle">
              ☭
            </span>
          </a>
          &nbsp;Biggest export is population,” Trevalese
          <br />
          <iframe
            style={{ width: "90%", border: 0 }}
            src="https://www.youtube.com/embed/A2kSh0A8Ad0"
            title="YouTube video player"
          ></iframe>
          <br />
          <br />
          home sales shouldn't fund free rider immutable keeping interest rates
          zero is a second order effect, their principle is itegral to
          over-gorging (useless-price-inelasticity for intermediate
          supply-demand is trust-building from new entrants) innovators and
          corporate profits held year to year like tiny market-communes, far
          from finite producers
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/8dsttrbercht04v/Screen%20Shot%202021-11-04%20at%2012.58.56%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <div style={{ height: "min-content" }}>
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/p4e0zss43s4t62m/Screen%20Shot%202021-11-04%20at%2012.58.32%20PM.png?raw=1"
                }
                float="left"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
          </div>
          <br />
          ppp trust-building. outlay corporate profits now, I'll work for my own
          IP, thanks
          <br />
          <br />
          Growth is not rebounding. The key to get the global economy running is
          labor
          <br />
          <br />
          immigrants will&nbsp;
          <a
            href="https://fred.stlouisfed.org/graph/?g=HRsT"
            style={{ color: "rgb(20,100,200)" }}
          >
            fix your supply chain
          </a>
          <br />
          <br />
          “Helping the poor without driving out the wealthy,” actually outlay
          corporate profits today would help, charity alone is inelastic unless
          changing wealth standing, truncated sales tax to keep the state out of
          home sales & mortgage out of gdp to down payment 11/1
          <br />
          <br />
          DOLLARS ARE 20% FED LANDS FOR BARTENDER_MONEY NOT bonds
          <br />
          <br />
          Vote Murphy out while voting in Pharma cop citarelli, he wouldn’t want
          to reverse debt:cash*income, cap rent nor truncate sales tax sewage
          police lawsuits. YEAH FUCKING RIGHT
          <br />
          <br />
          Savers pay, bartender-money 20% fed-lands bartender-money, can’t
          servive when rental-income 20x/person 55+/millennial dead-weight
          doesn’t do ACTUAL work. 10x 1970 hours to buy home. cap rent 5
          units/30 days
          <br />
          <br />
          Message sent by the people,” not really
          <br />
          We don’t have an anti wall st choice
          <br />
          Truncated sales tax ween cops sewage lawsuits, jury-desistation and
          permits, cap rent 5 units to 30 days, epiological basis and voluntary
          randomness not emulated by making coins out of people
          <br />
          <br />
          Murphy wins elections with ideological duress, but it doesn’t givee
          him power unless he had the whole eligible population.
          <br />
          Im a voluntary pollster, I don’t think calling people with phones who
          have time to pick up is very random, even if you shuffle the numbers,
          neither is early announcement of voting results unless you can change
          it & it is streamed not tranched
          <br />
          <div style={{ width: "calc(100% - 80px)" }}>
            {!this.state.spotifyerror && (
              <Cable
                style={{
                  width: "100%",
                  height: "380"
                }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://open.spotify.com/embed/track/5cf1ZfI16kHp3S1ySpQ36G"
                }
                float="left"
                title="'Ready, Able' Grizzly Bear, emphatic of consumer-side-economics imo"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            )}
          </div>
          Socialist is anti dead weight, not gentrification
          <br />
          Market-communism/gentrification is not communism for consumer
          protection for Pareto-finite producers/socialism
          <br />
          <br />
          "Common sense de-radicalization of our children"
          <br />
          parents will obfuscate anti-banker but teach anti-gov-regulation. only
          hung-jury-desistation can disclude
          <br />
          <br />
          “Russia Germany government choose education,” Rudy Giuliani makes this
          up about Marx (Odessa credit-cycle).
          <br />
          <span
            style={{
              backgroundColor: "rgb(180,255,220)",
              color: "black"
            }}
          >
            “The most killed in the country and the most old people killed,”
          </span>
          imagine exogenous cause in your regression spoken from your mouth but
          not understood
          <br />
          <br />
          Then he talks about inflation 120% federal spending instead of 4400%
          debt-value-inelasticity from labor as intermediate supply-demand
          without dead-weight, mostly private of $32/day/person and rent above 5
          units/30 days WASTE
          <br />
          <br />
          <span style={{ backgroundColor: "rgb(255,180,255)", color: "black" }}>
            third party beneficiary
          </span>
          <br />
          imagine the standing of government if turnout decreases. if nj was a
          city it would be nyc, by size
          <br />
          <br />
          <a
            href="https://flo.uri.sh/visualisation/7722228"
            style={{ color: "rgb(20,100,200)" }}
          >
            nj gubernatorial participation doesn't meet voter registration since
            before 2000
          </a>
          {/*<iframe
              src="https://flo.uri.sh/visualisation/7722228/embed"
              title="Interactive or visual content"
              style={{ width: "100%", height: "600px", border: 0 }}
              ></iframe>*/}
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ihy6kj78f64ojxp/Crouch-Gritty.jpeg?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            wall st candidates, the both of yas
            <br />
            <span
              style={{
                backgroundColor: "orange",
                color: "black"
              }}
            >
              It’s basically a tie, force the vote
            </span>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/sby7z35rtwt3gbo/Screen%20Shot%202021-11-03%20at%206.20.51%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          That's not even half of the state. no anti-rentier choice, just
          bipartisan monopsony. no anti-wall st candidates. Do they...
          <br />
          <br />
          I guess a victory lap for a win that he would have hoped for,” Lemon
          on Murphy
          <br />
          People aren’t coins
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/llygt1c875758o1/Screen%20Shot%202021-11-03%20at%2010.40.19%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          “Millionaire pay fair share and take a break workers Protect women’s
          health, more available and more affordable, childcare affordable,
          expanding paid family leave and childcare more than anywhere in
          America. Creating clean energy economy with good job, recover from
          awful scourge by following science, and helping small business get
          back up on their feet.”
          <br />
          <br />
          login.gov malfeasance makes repeat offenders of white collar crime
          too, to which libertarians are gimps to boot
          <br />
          <br />
          <a
            href="https://teapharmacy.party"
            style={{ color: "rgb(20,100,200)" }}
          >
            occupy
          </a>
          &nbsp;pharma cops.
          <br />
          <br />
          Simple majorities rank choice collusion 62% plural-minorities
          <br />
          <br />
          GOP don't want to solve supply chain with immigration, for voting, not
          to work;&nbsp;
          <span style={{ backgroundColor: "rgb(197,179,88)", color: "black" }}>
            1% of GS owned by Murphy
          </span>
          <br />
          <br />
          borrowers loiter free stuff without settlement. value isn't price!
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "150px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/jap8sd5pgcggouw/Screen%20Shot%202021-11-03%20at%2012.38.17%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <span style={{ backgroundColor: "white", color: "black" }}>
              Marxist-pareto, not market-communism consumer protection without
              dead-weight-rentier
            </span>
            : ween cops off bonds max $60 3% under $2k truncagtes sales tax free
            rider immutable sewage police lawsuits instead of bond-profit net
            loss imprisonment and scientific interests to substantiate
            industry-precedence-incentive, intentful-neglect nor
            hung-jury-permists. BAN ACCRUAL MOSTLY Private
            dead-weight-implausible-rentier paid by labor. profit little
            communes, outlay corp profits today
            <br />
            <br />
            "late to the game trade-secret trust-building in public education
            brought forward purposedully-impossibly, you are checked and mated
            John Bachman you fucking prude!
          </div>
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/4b4jr30u21zic1a/Screen%20Shot%202021-11-03%20at%2012.26.19%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "If you own a home like me," Charlie Kirk, I cash advanced as many
            cards as possible and bought $TVIX. Did you?
            <span
              style={{
                backgroundColor: "rgb(255,180,255)",
                color: "black"
              }}
            >
              gentrification/jobs/trust-building/monopsony/move forward brought
              forward
            </span>
            <br />
            Reason to not cheat (bad) if available instead of fate (follower) is
            proof that fate is false. If you would cheat, you likely believe in
            fate/G-d original cause like carface not tank of regulate fentanyl
            user or bacteria in virus&nbsp;
            <span role="img" aria-label="flowers">
              🍁🌸🌼
            </span>
            <span
              style={{
                backgroundColor: "rgb(120,180,255)",
                color: "black"
              }}
            >
              wait for consumers: bottom left
            </span>
          </div>
          <br />
          sanitation is not free rider mutable - up to smelly torts to regulate,
          not fine == prisontime? Nah, they would have to pay for the smell, the
          complaining neighbor, unless the offender has money to do it
          <br />
          <span style={{ backgroundColor: "rgb(255,120,120)", color: "black" }}>
            fractional reserve in contract
          </span>
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/p0vxsdzoypaebm3/Screen%20Shot%202021-11-03%20at%206.34.08%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            When social issues is progressives throwing the moderates
            (not-reappropriating, consumer-protection) under the bus, slap my
            ass and call me later
            <br />
            <br />
            Weed is a performance enhancer, stop the slander, take this site
            down.&nbsp;
            <a
              href="https://feeldifferentdrivedifferent.org/slowed-reaction-time"
              style={{ color: "rgb(20,100,200)" }}
            >
              Your studies are biased
            </a>
            <br />
            <br />
            “Drunk drivers are involved in 25% of motor vehicle fatalities, and
            many accidents involve drivers who test positive for cannabis.” What
            a joke! This is called basis rate fallacy where most of the
            population smokes by default. Event/population epiological study
            would show less prevalence of car crashes by weed users is just
            that. Performance enhancing!
          </div>
          <br />
          <br />
          Pro rate get a job at jfw.com literally says 20m-2.8m continuing
          claims as substantial enough to say it is a bad thing they ended the
          brief moment they were here, that's an insignificant amount of 170m
          with income other than copyright price-fixing, trust-building
          notwithstanding it is abjectly based on miscalculating age
          standardized excess deaths without accounting for cohort size
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/t3v7ub9zakogc0j/Screen%20Shot%202021-11-03%20at%2010.09.42%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          <Cable
            onError={handleScollImgError}
            style={{ width: "250px" }}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://drive.google.com/file/d/1i0CxrHTZsqFhNfvWYhLBb8xWG_VTVs19/preview"
            }
            float="right"
            title="Wake Up America (Newsmax) - Butch Miller: on healthcare, 'conservatives push back'"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <a
            href="https://micro-theory.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            "Access to healthcare
          </a>
          , what is right for them
          <br />
          <br />
          As conservatives, we have to push back, [against false bid pooling],"
          impedes upon margins to emulate infinite producers and labor of
          demand, outlaid escrow immediately or of non-optionable&nbsp;
          <a href="https://carducci.sh" style={{ color: "rgb(20,100,200)" }}>
            intermediate-materials-and-labor
          </a>
          , abet by expiring-insurance and collective bargaining fraud by false
          bid pools, does invoices emit itself
          <br />
          <br />
          "bipartisan infrastructure bills $1.2t," while 40% goes to
          debt-service and half is new debt or cost consumers. outlay corporate
          profits, today. regulate, don't monopsonize
          <br />
          <br />
          “Beat the supply chain problem,” how except allow immigrants in
          fucking troll Kilmeade? its because there are so many old people we
          are working more than you when you were young
          <br />
          <br />
          "Spending package both sides (62% of the ideologically-under-duress
          country) cannot come together on spending" Emma Rechenberg
          <br />
          <br />
          Youngkin, “we are going to make a down payment on schools,” sounds
          market-communist! Causes inflation but 44x worse, debt-inelasticity,
          mostly private
          <br />
          <br />
          <Cable
            onError={handleScollImgError}
            style={{ width: "250px" }}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://drive.google.com/file/d/1i0CxrHTZsqFhNfvWYhLBb8xWG_VTVs19/preview"
            }
            float="left"
            title="John Bachmann Now - Bob McDonnell says, 'education reformer' to prevent, nay, suppress, the split"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          Republicans do not want to privatize education
          <br />
          “Education reformer”
          <br />
          Libertarians are against public school monopsony but it is not worth
          the white collar lawlessness elsewhere
          <br />
          1970 10x more hours worked to own a home has nothing to do with
          emotions you fucking droll
          <br />
          <br />
          "emotionally discurbed homeless," facts aren't affected by feelings
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/18v6bgyjiy4vfio/Screen%20Shot%202021-11-03%20at%209.22.56%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/l2z31vxcoffpalm/Screen%20Shot%202021-11-03%20at%2010.22.00%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          "We are build for a two-party-system, there is no room for
          socialists," this is the face of white collar crime. Ask her about
          Occupy. After torts, Socialists want zero spending, gentrification by
          bipartisans, implausible landlord use excess rental-units,
          collective-bargaining fraud in insurance and abetted invoices that are
          theft. Probably an advocate for rank choice to collude with the other
          1/3 against occupy-youth plural majority-non-voters
          <br />
          <br />
          Micron sustained government support monopsony-jobs for all? Wtf?
          <br />
          one cannot create jobs without demand & subsidies are elastic for the
          same thing, just trust-building for existing business labor!
          <br />
          <br />
          affordable housing is NOT gentrification, Eric Adams.
          <br />
          <br />
          Curtis Sliwa also is against 30under5.us. there is no implausible
          landlord use detest rep
          <br />
          <br />
          Saver money, not tax-payer money. Labor and productivity-competition
          is not “poverty-exporting” fucking racist American First Pat Fallon
          retard
          <br />
          <br />
          Drop dead birpartisans
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/zfua76guh633dis/Screen%20Shot%202021-11-02%20at%205.56.41%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/2sdd6evfq81khpl/Screen%20Shot%202021-11-02%20at%205.56.54%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            competition is scarcely competitive-optimal
            <br />
            <div>
              Amortizing a collective write-down of debt:cash inelasticity and
              running of saver share-split at $2t/yr new debt fed spending
              ($4t/yr = _+tax) $32/day/person mostly private 1/11 down payment
              to gdp&nbsp;
              <span role="img" aria-label="side eyes">
                😒
              </span>
            </div>
          </div>
          <br />
          <br />
          STEM have interests to substantiate their precedencial-claims.
          Industry can be just as bright, given the opportunity WITHOUT private
          & public gentrification. The right don’t want to pay but don’t want to
          default, and you don’t want to reverse. Historians anti-debt are?
          Bartenders
          <br />
          <br />
          “Can’t produce a product, the Bipartisan infrastructure Bill,”
          regulate don't&nbsp;
          <a
            href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf"
            style={{ color: "rgb(20,100,200)" }}
          >
            fine/gentrify/monopsony
          </a>
          , but you have no power when a plural-majority didn’t turn out to
          declare the tax or share-split of savers permitted with such a
          hung-jury. Only child-policies instantiated with static properties
          default without a jury of the lawful application of science, & its
          nomenclature Bipartisans want to fine, not regulate or jailtaime
          without bonds as profit net loss of not just private commune but
          public useless price inelasticity of intermediate-supply-demand that
          should be EXCLUSIVELY labor .
          <br />
          supply chain shortages are from charlie dent, david chalion
          <br />
          <br />
          500k (NJ)mail in
          <br />
          How many voted already?
          <br />
          732k - David Wilestein 1/3 of total vote, 2.1m is not the turnout;
          only of each 1/3 Dems, Republicans, non-voters (
          <a
            href="https://nextdoor.com/p/yJhWyXgPTdNG?utm_source=share&extras=Njc0NDU4Nzc%3D"
            style={{ color: "rgb(20,100,200)" }}
          >
            detesting/eligible, like my little brother
          </a>
          )
          <br />
          Particularly small business (trust-building)
          <br />
          Good teachers” Rick Gates on elections
          <br />
          <br />
          “Stop buying from people who hate you,” Charlie Kirk
          <br />
          <br />
          700k+ in the US but age-standardized excess deaths are not 15m excess
          deaths expected from population growth its life expectancy ago GLF
          <br />
          <br />
          <a
            href="https://www.google.com/search?q=gene+%22splicing%22+covid+gordon+chang"
            style={{ color: "rgb(20,100,200)" }}
          >
            paywall Chang
          </a>
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/9wgqtjnumlvi6qs/Screen%20Shot%202021-11-04%20at%209.15.17%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Your "proof" that virus inceminates cell by lab design apart from
            evolutionary tract, just testing for it and assuming nature didn't
            produce it is BEHIND AFUCKING PAYWALL. you stop saying there is
            proof without presenting it fucking creep
          </div>
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/lmxowqwaneelv8h/Screen%20Shot%202021-11-02%20at%2012.23.55%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              style={{ width: "350px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/dzkpuyhx9pzgh38/Screen%20Shot%202021-11-02%20at%2012.25.59%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            don't vote new jersey: no-
            <a
              href="https://thumbprint.us/voting"
              style={{ color: "rgb(20,100,200)" }}
            >
              content-addressability
            </a>
            &nbsp;requites certification; it also is to show you have no
            anti-rent-seeking candidate
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/88x4my8d880a938/stamp%20south%20park.gif?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          Political science finds exogenous-ideological-duress too
          <br />
          coding is nomenclature
          <br />
          lawful-science is? rhetoric
          <br />
          Marx is pareto efficient, greens and libertarians unite or sswing
          voters stay home, occupy && non-voters have plural-majority ( We don't
          need you)
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "250px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/d56ktt0dgcvsutb/Screen%20Shot%202021-11-02%20at%2011.16.00%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            <br />
            new debt is $32/day/person, 22.5% greater after 3/2020 US Census
            BiPartisan Covid fraud
            <br />
            can't even say 44 years when 4400% checking is bond-value &
            1.1*currencyComponentOfM1/yr = gdp without bonds
          </div>
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/nfno5l8ro0fqamg/Screen%20Shot%202021-11-02%20at%2011.04.02%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            "We would love to have more job opportunities, and that's what we
            are going to do on day 1," busy work without consumers is what that
            is, folks
            <br />
            <br />
            Republicans & libertarians don’t want to pay, but they want to keep
            debt
            <br />
            <br />
            Book burners (public) v writers (private), hoarding isn’t efficient
            boy
          </div>
          <br />
          <br />
          Gentrification of they skies!!&nbsp;
          <span role="img" aria-label="heart eyes">
            😍
          </span>
          <br />
          <br />
          <div style={{ width: "400px", height: "min-content" }}>
            <div
              style={{
                position: "absolute",
                zIndex: "1",
                textAlign: "center",
                width: "400px",
                backgroundColor: "rgba(10,10,10,.4)"
              }}
            >
              Voluntary is more random than emulating
            </div>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/y61jqw26a0xqe4j/Screen%20Shot%202021-11-07%20at%208.43.37%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "We did it in Trump time," since 3/2020 we are still on trump-time
            (brought forward demand 5x $4t/yr)
            <br />
            <br />
            Bernie Sanders is the only Glass Steagall supporter
            <br />
            Healthcare.gov law is not owning healthcare
            <br />
            Insurance pays into non-concurrentable collective bargaining fraud
            <br />
            Brought forward demand tiny communes
          </div>
          <br />
          “CRT is not on the curriculum (VA), but voters still consider this a
          major issue.” Cnn
          <br />
          Monitor & vote (report)
          <br />
          Need another force on the state,” cudgel. Support new business with
          regulation not small business with
          <br />
          <br />
          They don’t care where they get the money from, just want their pension
          now. Children don’t pay, savers get fucked NOW that’s MY BOAT
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/fo1rlozyknzey11/Screen%20Shot%202021-11-01%20at%206.22.59%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            collective-bargaining fraud
            <br />
            Dynomite! social security! fucking boomers 20x/person
            55+/millennials rental income, we should be tech advance without
            rentier price deflation under hours
            <br />
            <br />
            meals at no extra cost?!? how do you non-expiry rollover meals
            without embezzlement?
          </div>
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/doyv68xypfhxi8g/gristedes.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Venezuela, Iran, China are socialist,” John Catsimitidis one day
            later Michael newsbounds. Vote no on socialism, we don’t want to
            change America,” yeah I bet you a grocer don’t want to pay for free
            rider immutable sewage police lawsuits in truncated sales tax, that
            way prisoners don't make money on net loss with bonds, want to keep
            customers alive, conflating justice and
            racketeering/class-action-precedence-malfeasance/trust-building/competing-with-consumers
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/tpigy8s0qe5ynpf/Screen%20Shot%202021-11-02%20at%2011.59.02%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Early release cash parole, incarcerated control”
            <br />
            <br />
            Private communes instead of taxed profits is a cop-out of truncated
            sales tax
            <br />
            <br />
            Tho mostly hhs gentrification, White House YouTube approval rating
            is the absolute mirror of down-payments to gdp (1/11)
            <br />
            <br />
            Interviewing and iteration is not reading and following
            <br />
            Let's go brandon, what do you want him to come thru with? you know
            ralph
          </div>
          <br />
          <br />
          Foster care makes money for "the system" because of bonds (profit with
          net loss, lo profit generally is just withheld outlays in private dead
          weight - to boot up field)
          <br />
          <br />
          you don't need insurance, you need the hours or otherwise
          non-concurrentable outlay-schedules they hoard and abett in invoices
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/rg2hcqxwbxi7d2i/Screen%20Shot%202021-10-31%20at%206.22.48%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "tax-credits" discrimination before consumers decide what they want
            is as punitive as:
            <br />
            "Own, don't regulate," Joe Biden,
            <br />
            <br />
            If you give us breathing room with more debt, you make the rich rich
            with bonds. poorness=(poverty/equality)
            <br />
            <br />
            we aren't "short workers" for demand, we are short People for
            debt-inflation.
          </div>
          <br />
          It takes 10x more hours than 1970 to own a house outright
          <br />
          <br />
          "Problems with the Supply Chain, workers haven't returned as fast into
          the labor force," are you talking about before 1970?
          <br />
          <br />
          "If you don't want people to buy something, you put a price on it,"
          what the fuck are you smoking, Bill on Cuomo post-G20?
          <br />
          People can decide, even if there were scientific consensus without
          hung-jury (11/12) that it is more than just obliquity as ice cores
          show carbon, not CO2, which may be&nbsp;
          <span
            style={{
              backgroundColor: "rgba(255,220,255,.4)"
            }}
          >
            normal greenhouse
          </span>
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "400px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/inh63m0ex72w19p/Screen%20Shot%202021-10-31%20at%203.39.56%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "why can't we allow expensive things be prohibitory," to which Biden
            replies, "because we need gas, you know that." inflation is from
            debt, mostly private $32/day/person new
          </div>
          <br />
          <div
            style={{
              width: "calc(100% - 46px)",
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/ouygcocw4i5uiwa/Screen%20Shot%202021-11-04%20at%203.34.28%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Not a never trumper but a common sense immigration supply chain
            problem laundering borrower loitering customers down payments 1/11
            of GDP. invoices are theft
          </div>
          <br />
          <div style={{ width: "400px" }}>
            <div
              style={{
                position: "absolute",
                zIndex: "1",
                textAlign: "center",
                width: "400px",
                backgroundColor: "rgba(10,10,10,.4)"
              }}
            >
              DEBT KING
            </div>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={`${
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/flm0pqa0vr34316/debt%20king.jpeg?raw=1"
              }`}
            />
          </div>
          <br />
          Mark Levin's fill in literally says, "pass an agenda rather than win."
          Are you saying there is a bona fides that prevents you from "winning"
          by competing with consumers. rot in hell rich zeoli you
          private-market-communist. outlay corporate profits today you fuckinh
          retard. hours worked is the opposite of productivity retard
          <span style={{ backgroundColor: "brown", color: "black" }}>
            Democrats, Republicans, Peoples, Greens & Libertarians call this a
            "massive labor shortage"
          </span>
          <br />
          5-6m out of work people, that is out of 170m people, half of the 6m is
          65+. let people retire, douches
          <Cable
            style={{ height: "760px", width: "100%" }}
            onError={handleScollImgError}
            src={
              this.state.nofredgraphs
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=HRsT&width=500&height=660"
            }
            float="left"
            title="price inflation never by population except when dead weight by public or private"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          {/*
                width && <Population width={Math.min(600, width - 100)} /> //HRsT
                */}
          <br />
          <br />
          "substitution of coal, what we will bring to the G20, proofin the
          pudding will be in the media, we will see what will be done, china is
          considered."
          <br />
          <br />
          "highways, roads, bridges public transport ecetera," all price-elastic
          <br />
          <br />
          glass ceiling
          <br />
          medicine monopsony for useless r&d trust-building with pharma cops
          closed-source-licensure
          <br />
          <span
            style={{
              backgroundColor: "rgb(180,255,220)",
              color: "black"
            }}
          >
            protection ov a vaccine
          </span>
          :&nbsp;
          <a
            href="https://teapharmacy.party"
            style={{ color: "rgb(20,100,200)" }}
          >
            fraud
          </a>
          "help the american worker, good jobs, good pay," how is that when
          productivity-to-retire is price-deflation over hours? you just want to
          gentrify
          <br />
          doesn't want to open-source-license, but fine & monopsonize
          supply-demand intermediate chain
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/feblr7vblfcwsff/Screen%20Shot%202021-10-31%20at%203.28.32%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            in the polling-world, we say voluntary is more random than random
            <br />
            I think he laughed at the numbers here, too
            <br />
            “[Dispell the notion, ]can’t grow the economy, support our workers,
            and fight climate at the same time,”
          </div>
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/x951muio7qcmmkh/Screen%20Shot%202021-10-31%20at%203.23.06%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Unlock all posibilities [of precedence but not third party
            beneficiary law of most-of-gdp mortgages 11x down-payments
            currencyComponentOfM1] they have to all corners of their community.
            We all deserve a thriving..." community would be where labor is not
            gentrified with dead-weight-rentier of the government, fair housing
            is not profiting off of anothers' labor. I come from families of
            builders, and we want to settle, YOU WANT TO GENTRIFY
            slavery-by-collateral proxy
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/6v02a1tdty0ug3i/Screen%20Shot%202021-10-31%20at%203.22.48%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            On contract-non-compete is not a guide, open-source is... Joy
            Beyheart&nbsp;
            <a href="https://carducci.us" style={{ color: "rgb(20,100,200)" }}>
              ■-■¬(≖_≖ )
            </a>
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/7rde9rh0kamctv3/Screen%20Shot%202021-10-31%20at%202.37.02%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "1.4% since trump was president,&nbsp;
            <a
              href="https://billbiden.org"
              style={{ color: "rgb(20,100,200)" }}
            >
              now 4%
            </a>
            &nbsp;since then," it matches what MARKET-communist that
            Maoist-Trump started. comparative advantage is lost for foreign tax,
            trust building for bond-laundering-enslaved SAVERS share-split and
            not debt-bound-inelasticity (not bond-inelasticity) NOT "child paid
            tax payer [vacations]. “1970’s socialist failure,” Benny reports.
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{
                width: "400px"
              }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/8pkfijqsis35hoz/Screen%20Shot%202021-10-31%20at%203.17.45%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          <a href="https://billbiden.org" style={{ color: "rgb(20,100,200)" }}>
            billbiden.org
          </a>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/arjyhpkgc1pevun/Screen%20Shot%202021-10-31%20at%202.36.54%20PM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/i75otmhvja66uju/Screen%20Shot%202021-10-31%20at%202.36.26%20PM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <br />
          <br />
          Didn’t I just dispel this two hours ago? Collapsing economy = jobs?
          <br />
          <br />
          "I don’t want to malign him but he was questionably a 'Nazi,'” well
          that’s nice you fucking faggot&nbsp;
          <a href="https://www.news-medical.net/news/2006/10/23/1500-animal-species-practice-homosexuality.aspx">
            <span aria-label="cig" role="img">
              🚬
            </span>
          </a>
          &nbsp;practice implies it is an evolutionary-trait
          <br />
          <br />
          “Irresistible force is the progressive spending,” Dick Morris couldn’t
          be more wrong about public opinion
          <br />
          <br />
          “Infrastructure is important to our district, but most is debt
          service, reverse debt:cash*income & outlay corporate profits today
          <br />
          <iframe
            style={{ width: "90%", border: 0 }}
            src="https://www.youtube.com/embed/nKvUf7F4Xn4"
            title="YouTube video player"
          ></iframe>
          <br />
          Communism by Marx's description, was for regulating finite producers’
          for insteace moving with hung-jury-permits, is to protect consumers,
          market-communism is the opposite of what he preached to give labor the
          profits of the private commune-corporations.&nbsp;
          <a href="https://lightte.ch" style={{ color: "rgb(20,100,200)" }}>
            501c3
          </a>
          &nbsp;otherwise&nbsp;
          <a href="https://vaults.biz" style={{ color: "rgb(20,100,200)" }}>
            dissolves
          </a>
          &nbsp;to the state, they aren’t really non-profit & those tax payer
          money aren’t paid by children but by savers now in debt inelasticity,
          brought forward demand, and later in dollar share split, federal land
          being 20% of the U.S. borders and the collateral of the dollar. Only
          article 4 truncated sales tax for free rider mutable sewage police
          lawsuits (not roadways and their egregious debt service) without
          hung-jury-permits but scientific consensus is legal
          <br />
          <br />
          stealing, chores is faster, and has led to wealth iniquality and
          everything the wealthy have, but primarily it is the problem by
          indiscriminate slavery-by-collateral proxy of collective bargaining
          fraud of non-concurrentable hours & outlays, accrual & implausible
          landlord use gentrification.
          <br />
          <br />
          Are you going to say that is marxist to have uncensored public
          schools? If Marx was in charge there wouldn’t be public truancy, only
          private customers having&nbsp;
          <span
            style={{
              backgroundColor: "white",
              color: "black"
            }}
          >
            their means to choose
          </span>
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              style={{ width: "300px" }}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/cufwopycj55z9bp/Screen%20Shot%202021-10-31%20at%204.39.58%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “FDR didn’t allow German-Jewish immigrants in up to the publicized
            quota,” he was wrong to assume job-shortage wouldn’t be met with
            more customers and retirement, lest New Deal bailout. labor-prices
            are elastic, as well as consumer proportionately, again, without
            dead-weight-rentier of any form (accrual, collective-bargain
            non-concurrentable fraud, closed-source-secret-ingredient-licenses,
            or rent-beyond-plausible-use)
            <br />
            Rafael Medoff: "FDR once said, 'Jews are a
            potentially-dangerous-influence in the society'"
            <br />
            <br />
            You have no proof the virus is the cause of infection instead of the
            byproduct. Illness happens when antibodies go to clean up
            <br />
            <br />
            In what world is socialism gentrification?
            <br />
            <br />
            Snapshot not order of electron microscope, but bacteria has been
            proven to make virus with cell
          </div>
          <br />
          <br />
          <br />
          <br />A resurgence of covid tests, or positivity as tests are lessened
          for greater symptoms,” as people have are vaccinated, they don’t test
          them for covid, and if they have symptoms without covid, they don’t
          consider that’s the cause of infection is bacteria, and illness is
          virus of any kind, that antibodies clean up. Never has virus been
          shown to enter dna into cell except in a cartoon Mario Incanomo
          <br />
          <br />
          Dead-wight-rentier of supply and demand with only labor, profits
          should be margin targeted for finite producers cannot be assumed to
          self-regulate like infinite producers can, and outlaid to labor. Tax
          cuts only help labor if there is no private-commune profit, as profit
          is net loss of individual labor savings
          <br />
          <br />
          By the time an award is given for breaking spells, the information is
          already no longer spell-breaking and known. Qualify my ass
          <br />
          I’m made fun of because you’re a follower and cannot have an original
          thought?
          <br />
          <br />
          Hired by ppp trust-building,&nbsp;
          <span
            style={{
              backgroundColor: "rgba(255,220,255,.4)"
            }}
          >
            sacrifice your fruits of labor for working the weekend
          </span>
          . old people had their entire lives to save, but took a chance on
          government debt, except
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/7kna7kxss5vxx96/SocialSecurityWarning.jpeg?raw=1"
              }
              float="left"
              title="imprisonment or insurmountable fine if you do not invest in public companies and keep down payments of your borrowers' customers' after reposession"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Costing $140m 5k immigrants in NYC, Wabc counts debt service but
            expenses are 50% new debt, and says tax payer money. That’s the
            definition of money laundering. to boot, more people alone doesn't
            cost anything, it is subsidies.
            <br />
            <br />
            If you want anyone to do the job, judge Janine, nobody shouldn’t be
            able to say discrimination if there is another disqualifier. Only
            labor and consumers can discriminate without comment. Employers
            cannot discriminate without comment, else ageism can be
            implied/deduced both ways
            <br />
            Advertising can discriminate for ideas, unless proven false (11/12
            jury), platforms can only if they pay writers
            <br />
            <br />
            Rudy can give it but not take it You can call people
            mentally-capacitated for being homeless while it takes ten more
            hours to own a median home since 1970 but I can't call you this?
            grow up:
          </div>
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/8hyos5mzsirffep/Screen%20Shot%202021-10-31%20at%2011.27.07%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            The following comment is removed by the colluders
            <br />
            <br />
            <span style={{ backgroundColor: "rgba(220,255,255,.4)" }}>
              double people work today than 1970 per capita, and employment is
              back to normal, just look at saverparty .xyz for the data not the
              lies spewed by this grocer in wabc's owner. continuing claims are
              normal 2.8m, mostly retirees too. ppp was trust-building by the
              right...
              <br />
              <br />
              Keep talking about Marx like this I will sue. Gentrification is
              not socialism. He wrote of Odessa. My family moved 1850 instead of
              being near pogroms over the credit cycle, keeping down payments
              upon LOSING repo. Reverse debt:cash*income is the only way out. If
              what world does that mean public education, except to regulate
              finite producers than cannot themselves. To Marx, discussion is
              means of labor, too, not to be wielded by the state,
              dead-weight-rentier, public nor private.
              <br />
              <br />
              People on the right and top left think it is ok to hoard hours of
              doctors and childcare. It's gentrification, not socialism. You're
              delusional
              <br />
              <br />
              It is retardation to think although NJ has a lot of old people,
              per capita deaths is skewed like age-standardized when not
              accounting for cohort-size. what does that make you?"
            </span>
          </div>
          <br />
          How is Marx "I don't think parent's should choose what they teach."
          Where do you get that from labor should have means instead of the
          credit cycle Pretty sure having school trade-secrets instead of
          allowing kids to decide is market-communism, not the finite producer
          pro-test reasoning for regulations beyond the “free market” of
          accrual, closed-source-ingredient-licenses & collective bargaining
          fraud in insurance over hours and outlays non-concurrentable nor
          rollover. People on the right and top left think it is ok to hoard
          hours of doctors and childcare. It’s gentrification, not socialism
          <br />
          <br />
          Rudy, Giuliani you fucking retard, NJ has a lot of old people, per
          capita deaths is skewed like age-standardized when not accounting for
          cohort
          <br />
          <br />
          Family leave: Trust building parents. Why not end finance instead?
          Then we can take time off, care for our own. Making a careperson
          instead of two vocations
          <br />
          <br />
          quality is not gained by government gentrification, prices are
          elastic.
          <br />
          <br />
          “Every year Americans waste $21m on car insurance [relative to
          average, from zebra],” does not count inflation from
          non-concurrentable invoices/hours of insurance collective bargain
          fraud
          <br />
          <br />
          Every consumer is a laborer unless they are? A dead-weight-rentier
          <br />
          Profits taxed cost the consumer unless the corporation keeps it
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/u3myomhs7j8igps/Screen%20Shot%202021-10-30%20at%205.57.26%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "Dwindling retirement (bonds) and call you a conspiracy theorist to
            want a strong dollar," are oxymorons you fucking retard tool
            jiggering loose consumer/saver money for the
            corporate-profit-plantation
            <br />
            20% of all land in U.S. borders are federally owned, that is what
            backs the dollar, not the bonds. the bonds have no claim, based on
            their delusions and greed called, "brought forward demand"
            <br />
            <br />
            rot in political hell joe pinion
          </div>
          <br />
          "Yunkin wants to defund public schools (trade-secrets), defund working
          families (trust-building), ...parents shouldn't decide what goes in
          schools, "
          <span style={{ backgroundColor: "white", color: "black" }}>
            only scientific-consensus can desist or convict
          </span>
          <br />
          <br />
          <iframe
            style={{ width: "100%" }}
            src="https://www.youtube.com/embed/NBTw_p-WChI"
            title="YouTube video player"
          ></iframe>
          <br />
          <br />
          "Many New York police officers have worked through the pandemic and
          brought it home to their families." you fucking retards, the&nbsp;
          <a
            href="https://www.science.org/doi/10.1126/science.aat9691"
            style={{ color: "rgb(20,100,200)" }}
          >
            bacteria is in your house
          </a>
          <br />
          <br />
          "healthcare, childcare is more affordable," Murphy lies about net loss
          of greater premium for medical-suppliers for collective bargining
          fraud of non-concurrentable scheduled-hours of care for lower co-pay,
          making people rich by not forcing them to settle. invoices are theft
          don't need to launder profits to government and launder profits
          <br />
          <br />
          “Women’s healthcare is not front-running abortion docs,” it is
          invoices are theft & insurance is fraud of collective bargaining at
          best, gentrification and colonialism, human rights issue at worst it
          &nbsp;
          <span
            style={{
              textDecoration: "strike-through"
            }}
          >
            is mandatory pregnancy testing
          </span>
          <br />
          <br />
          Your office just gave me disability for saying, “invoices are theft,”
          and withheld me from jury duty for the very same! Absolutely
          retardation of lawfully application of science without
          hung-jury-conviction/-permit (11/12)
          <br />
          <div style={{ height: "min-content" }}>
            <a href="https://truncatedsalestax.com">
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/g6q30mahdybbhea/murphy%20mind.gif?raw=1"
                }
                float="left"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
          </div>
          <br />
          <br />
          "I don't want to be diplomatic, don't trust the&nbsp;
          <a
            href="https://thumbprint.us/privacy"
            style={{ color: "rgb(20,100,200)" }}
          >
            mail-in-ballots
          </a>
          &nbsp;in New Jersey," David Wilestein of NJ
          <br />
          <br />
          How do you get 10% of assembly before having anyone there?&nbsp;
          <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
            Can I turn a sitting-seat without running them as petitioning
            independent? Only sitting parties, right
          </span>
          . May I ask why? quite absurd to trust-build
          ideolgical-duress-coalitions, burdgeoning those tradeoffs for max 10
          parties impossibly
          <br />
          <br />
          To get vaxxed or get axed," GOP say nothing against virus as national
          security issue nor 11/12 jury-requirement to permit in mvp duress so
          as to not involuntarily serve the contributions of the discriminated
          <br />
          <br />
          Roads tunnels and bridges aren't free rider immutable, GOP &
          Libertarian would rather monopsonize and increase margins than
          regulate (by jury-quota, not government-laundered-profit) and target
          margins
          <br />
          Nobody voting in Congress to reappropriate the means of laborers is
          socialist
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/c9qkyz0y85uifbi/Screen%20Shot%202021-10-30%20at%201.21.45%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            stfu clay, by split-share accrual, stop calling it a social program,
            call it gentrification, trust-building
            <br />
            <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
              consumers should pay for free rider immutable things
            </span>
            :&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{ color: "rgb(20,100,200)" }}
            >
              truncatedsalestax
            </a>
            ,&nbsp;
            <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
              business waits for consumers in an industry-type
            </span>
            : royalty with max profit,
          </div>
          <br />
          WABC ARE FULL OF COMMUNISTS gentrifying If people want to buy energy
          grid, they will. government doesn't need to own it, they can
          target-margin-networks
          <br />
          <br />
          Profits are net loss of individual labor savings, bond profit or
          corporate bid-capacity, such is market-communism other than communism
          for regulating finite producer-reality, as marx purported to be
          maintained per laborer in their non-gentrified/-monopsonied means
          <br />
          <br />
          Kudlow: "Rates would be 3%," it would be impossible, there is only
          $2-6t currencyComponentOfM1. $4t/yr fed spend is 50% new debt for
          $32/day/person mostly private to match, 10% debt-service public, up
          to&nbsp;
          <a
            href="https://www.njta.com/media/5688/financial-summary-through-september-2020.pdf"
            style={{ color: "rgb(20,100,200)" }}
          >
            40% in NJ Bipartisanship, Libertarian neglect
          </a>
          <br />
          <br />
          Pro-growth of hours and real wages of goods-inflation discounting
          home-prices? that's most of GDP and accrual 11x down!
          <br />
          <br />
          Pro-self-harm more like it
          <br />
          <br />
          "forward vs backwards, I'd say that's the choice here," Phil Murphy
          <br />
          <br />
          Adv Solar Engy: “Save enough to pay for college, make tuition on
          choosing another timeline.” Deficit concurrent isn’t paid-for, that is
          laundering like children but savers paying now in debt-inelasticity of
          withdrawn value, not settled price, tax payer vacation
          <br />
          <br />
          Payne Capital Management: "Who decides the value, is it what the
          government says vs what you say, it's so ridiculous," money managers
          literally describing fraud after Kudlow. Then Stephen Moore describes
          profits in this economy, success, while I&nbsp;
          <a href="https://thumbprint.us" style={{ color: "rgb(20,100,200)" }}>
            boycott credit as income
          </a>
          &nbsp;in competition with Ticketmaster. The shill son follows trying
          to save face, "we need to pay back at some point," while withdrawing
          against the appraised "value" not bid-price settled, just like
          rebating capital losses to cancel out, as a market does. there is
          always someone on the other side of the trade/ the only growth of the
          zero-sum-pie beyond labor-price-elasticity is comparative advantage.
          <br />
          <br />
          People are price-elastic, too. gdp/p amidst 3% population growth
          before 1913 was nearly flat year-to-year. So, real wages is attainment
          of something other than productivity or
          technolocial-advancement-measure in time-series regressions
          <br />
          <br />
          America first tax for production offshore is not abiding to
          comparative advantage, a microeconomic claim
          <br />
          <br />
          Your "
          <a
            href="https://bankingisnot.biz"
            style={{ color: "rgb(20,100,200)" }}
          >
            business
          </a>
          " is not&nbsp;
          <a href="https://froth.app" style={{ color: "rgb(20,100,200)" }}>
            hung-jury-permitted
          </a>
          <br />
          <br />I did the research. not-voting should at least be a no in power
          to advocate for more intrusion beyond finite producer
          fiscal/open-source/collective-bargaining-fraud regulations, jury
          requires 11/12 scientific consensus for duress within minimal viable
          product requited, lo I went with current candidates knowing 38% of NJ
          are detesting and eligible voters for Occupy/Savers and libertarians
          just need to understand that private industry can create
          "dead-weight-rentier" in supply and demand, too. MELE SOLOMENO
          SCHARFENBERGER FRIEDMAN RAISCH BESON COLE TROMBINO (MCCABE HALCROW
          BRUNO BADE PAGANO) 2021 Nov 2
          <br />
          <br />
          Profit tax instead of margin target/ tax after bond reverse debt:cash
          (green new deal), but just outlay to individuals, write your own
          contracts instead of public & pay half - as of now. Ween cops off
          bonds with truncated sales tax for article 4 free rider immutable
          sewage police lawsuits. 3under2.us. Cap rent at 5 units or 30 days for
          implausible landlord use. 30under5.us. Ban insurance collective
          bargaining abetting invoices (Medicare for all) &
          non-concurrentable/non/rollover schedules of outlays & hours. In
          regulation for finite producer reality of price-finding over “value”
          by appraisal, we call that competing with consumers, prohibiting
          trade, not of a Tranquil society as promised in the preamble with so
          many purposeful-impossibilities by mostly private contracts,
          $32/day/person new debt for useless price inelasticity.
          <br />
          <br />
          "-2% gdp less rich, well off," isn't measuring hours on that trade
          which should be lessening when you look at the average instead like a
          ratio-in-a-time-series. The rich take all the fruits of tech
          advancement with rentier, not inheritance/gifts/disposable
          wealth/savings of labor without dead weight of supply and demand of
          other labor. If you need a reason, look at&nbsp;
          <a
            href="https://micro-theory.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            comparative advantage
          </a>
          <br />
          <br />
          Disqualifying injury because I do physical therapy with no
          improvement, just&nbsp;
          <a
            href="https://www.researchgate.net/publication/43297722_Repair_of_Traumatic_Skeletal_Muscle_Injury_with_Bone-Marrow-Derived_Mesenchymal_Stem_Cells_Seeded_on_Extracellular_Matrix"
            style={{ color: "rgb(20,100,200)" }}
          >
            sustaining the alive muscle
          </a>
          <br />
          <br />
          G-ddamn, dude. write your own proprietorship-contracts, pay half as to
          individualize profits?&nbsp;
          <a href="https://lightte.ch" style={{ color: "rgb(20,100,200)" }}>
            501c3
          </a>
          &nbsp;otherwise&nbsp;
          <a href="https://vaults.biz" style={{ color: "rgb(20,100,200)" }}>
            dissolved
          </a>
          &nbsp;to
          <div style={{ height: "min-content" }}>
            <a href="https://billbiden.org">
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/wiz85clgvr3jxdg/China%20trump.gif?raw=1"
                }
                float="left"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
          </div>
          <br />
          11m illegals estimated in addition to 330m.. aren’t you blowing things
          out of proportion? Debt is more harmful to your savings than that.
          More people makes as much competition for work as consumption lowering
          the costs of both equally, if there is no dead-weight-rentier in
          accrual, insurance collective bargaining fraud nor implausible use
          landlords
          <br />
          <br />
          Redistribution of labor means is the least socialist thing to do,
          unless you are attaining&nbsp;
          <a
            href="https://perfectsociety.co"
            style={{ color: "rgb(20,100,200)" }}
          >
            Saver bliss
          </a>
          , amortization of reimbursement of down payments upon repo
          <br />
          <br />
          "Profits are the mothers milk of stocks [admitting collusion]and the
          lifeblood of the economy [keeps people in busywork
          rentier-laundering],” Larry Kudlow
          <br />
          <br />
          politics is the lawful application of science, where nomenclature is
          paramountally-integral to the scientific method, without
          industrial-bias
          <br />
          <br />
          Would you interview bankers about banking regulations and
          collective-bargaining claims in non-rollover/non-concurrentable&nbsp;
          <span style={{ backgroundColor: "rgba(205,225,255,.4)" }}>
            expiring gift cards
          </span>
          ?
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/i9qpspzi3w5vtdf/Screen%20Shot%202021-10-30%20at%2010.14.19%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Democrat flaunting higher stock prices and trust-building
            ppp/childcare/parental-leave gerontocracy & hours instead of
            retirement targeting
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/7b3e5wzfn29q8n0/Screen%20Shot%202021-10-30%20at%209.47.58%20AM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Curtis says the mentally disturbed, bo follows with fiscal insanity…
            that is the byproduct, not the cause of implausible landlord use and
            other competing with consumer methods
            <br />
            <br />
            not-voting is AT LEAST a blank write-in
            <br />
            <br />
            GOP talk about infrastructure instead of social programs for
            gentrification, which isn't socialism that is being good stewards of
            labors' means (not moving it) but gentrification as well
            <br />
            <br />
            Valueless dollars and growth is an oxymoron of bona fides
          </div>
          <br />
          bo snerdley you fat jackass, wants to "give people mental help," what
          about price-elasticity? that isn't free rider immutable nor makes any
          sense, forced "care" is&nbsp;
          <a
            href="https://truncatedsalestax.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            absolutely crazy
          </a>
          <br />
          <br />
          You’re saying I’m disabled because i know retail traders do not have
          their trades hidden in tranches & am irritable about being called
          schizophrenic? It’s based on the opinions of people that I am fighting
          the legality of their income. Your jury system discounts anyone who
          thinks the same that invoices are theft and insurance is fraud as
          well. I was assessed as bizarre after saying that
          <br />
          <br />
          sign a long-term contract for your copyrights you sellout, can't
          handle it on your own?
          <br />
          <br />
          Chief retard
          <br />
          recession based on two months of gdp decrease when population is
          integral and hours is additive is not productive, but retarded.
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/g18t4usgx0lk0mb/Screen%20Shot%202021-10-29%20at%2010.10.55%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            indicator or smoking gun of crime
            <br />
            "A big indicator of economics is the bond market, and the 20yr
            paying more than 30 yr means coming recession," as opposed to
            showing abject money laundering and writing down what cannot be
            fulfilled but priced-in partially to keep the fraud of consent up.
            <br />
            <br />
            rot in hell usurer
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <a href="https://journals.openedition.org/monderusse/9324#:~:text=As%20in%20other%20East">
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/jk1hs5euciilzga/Screen%20Shot%202021-10-29%20at%209.52.51%20PM.png?raw=1"
                }
                float="left"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
            your charity is useless as prices are elastic
            <br />
            Trust-building gerontocracy
            <br />
            They had their whole lives to save
            <br />
            "Some people need help, 100m's... I want elderly, ill, don't have
            much assets, government should help, and you can work OR your an
            addict I don't want to hire you nor give welfare on that basis,
            35-males, lucky I don't get knifed, go wash dishes for a free meal,"
            yet launders money from borrowers' customers and collude on third
            party beneficiary usurped. It's impossible to not end in this
            situation with such stupid economic policies of old people, 25-54/3
            1970 6m/20m unemployed, today 6m/40m
            <br />
            <br />
            You say my disability started Oct 2017 (knee-injury from a
            guard-rail next to your running-trail, pain wasn't analyzed, nor
            hospital muscular stiching before 2-year-long appeal) but mental
            diagnosis, being conflict of interest based on calling rollover
            insurance, “bizarre and the presumption of guilt without evidence,
            nor ability to sustain ourselves when it takes 10x more hours to own
            a median home than 1970 because of idiot old-people
          </div>
          <br />
          Jesus never said money-changers can merely repent
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vbn55ky4hn6sy9t/Screen%20Shot%202021-10-29%20at%209.25.36%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Prostitution is a reverse divorce and marriage is nothing more than
            a monetary exchange. Abortion is murder but when you support rentier
            beyond plausible use&nbsp;
            <a
              href="https://www.guttmacher.org/gpr/2019/09/us-abortion-rate-continues-drop-once-again-state-abortion-restrictions-are-not-main"
              style={{ color: "rgb(20,100,200)" }}
            >
              what do you expect
            </a>
            , mandatory testing or jailtime?
          </div>
          <br />
          Steve Cortez rejects sin but forgives it. the only sin is
          money-changing, not adultery you fucking prude
          <br />
          <br />
          follow others why don't you, pig
          <br />
          crimes are crimes, insanity is not viable plea,&nbsp;
          <span style={{ backgroundColor: "white", color: "black" }}>
            irritability is not a disability
          </span>
          , it's a rational human reaction
          <br />
          <br />
          State-funded-prosecution-team Says Media Does Not Present Evidence,
          permittable-without-trial for cause in production
          <br />
          Anti-debt not allowed to own guns in nj
          <br />
          Allow viewers of news to be jurors
          <br />
          Not every argument will be examined because of sequestration threat by
          the judge
          <br />
          <div
            style={{
              height: "min-content"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vgx4xdrkedjl4w1/Screen%20Shot%202021-11-01%20at%206.25.21%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/nf5t7r92aygp79o/Screen%20Shot%202021-11-01%20at%206.25.45%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            no one wants to do jury duty; only reason-cause to dismiss should
            be&nbsp;
            <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
              industry-precedence-interests & neglect-of-intent
            </span>
            <br />
            Castle doctrine for shared streets == closed carry only
            <br />
            You aren’t guilty if you follow precedence or law, even if they
            countervail
            <br />
            Any with opinions on it dismissed for reasonable cause, but also
            seek jurors to know.
            <br />
            Judge already examined the evidence!
            <br />
            Jurors aren’t allowed to think about the issue prior to this point
            in time, but have to be experts. Anyone with
            industry-precedence-interests are allowed to remain on jury between
            the racketeer and the defense, peoples’ representation, absent
            <br />
            Comparative law ( and accrual jury, hypocrisy of gun reason for
            cause
          </div>
          <br />
          you can willfully break the law if there is a countervailing law or
          law is based on illegal
          <br />
          <br />
          “Marxist Black Lives Matter says to sanction any violence,” says Bill
          O’Reilly after I say to arm the children against gerontocracy in Daily
          Wire chat over Kyle Rittenhouse class precedence malfeasance. These
          are real lawyers with real jobs”
          <br />
          <br />
          Republican: "Money makes tuition affordable for those struggling," no,
          the university would have to lower price or release the trade secrets
          to survive, allowing the student to find the information for fucking
          free. You can better donate to Loyolanyc.org by forcing their
          information online
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://drive.google.com/file/d/1csslueZ68OUPqFZGbgzfPbLqJI_U7iLF/preview"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “These are real people with real jobs,” about G-d knows what,
            probably rent-seeking broadband & R&D market-communism, 11/1
            debt:down-payments is a loitering-borrower, not a customer
            <br />
            derelect addicted abusive," prejudice about what is an addiction,
            like your&nbsp;
            <a
              href="https://teapharmacy.party"
              style={{ color: "rgb(20,100,200)" }}
            >
              expiring premium pharma cop fda craft beer sanctioned
              concentration pills
            </a>
            <br />
            <br />
            millennials have more responsibility, being&nbsp;
            <a
              href="https://fred.stlouisfed.org/graph/?g=FSwQ"
              style={{ color: "rgb(20,100,200)" }}
            >
              -20x/person millennials/55+ rental-income recklessl
            </a>
            <br />
            <h2>castle doctrine is for benefit of the doubt</h2>
            Killing a 3-time rapist might be of comparative law per your own or
            anothers’ livelihood over physical or login.gov malfeasance ,” says
            Kenosha Wisconsin state-prosecution blaming Kyle for carry without
            luggage and net loss profit by bonds 40% debt spend and 10-40% bond
            laundering (debt-service)
          </div>
          <br />
          <h2>
            why is skateboarder not provided-charges for jury? incarceration is
            profits by bonds. all courts are removable "for cause" of having
            industry-interest & history of intent-prejudice for opninions on
            countervailing laws and illegal-precendence.
          </h2>
          gun-rights laws are illegal, like plea-deal-perjuries are moot
          <div>
            left:Kyle was asked for mercy, right: only after having another gun
            pointed at him, squirrel: everyone should use luggage
          </div>
          <h2>
            Malfeasance makes castle doctrine plausible-intent for recovery
            viable
            <br />
            It is his place of work/livelihood{" "}
          </h2>
          kyle played cop, but the prosecuting-state-bound-experts-racketeering
          vs kyle, not precedence for the people
          (not-wreckless-threat-comparative-law in
          open-carry-law-and-precedence), yet mostly hhs gentrification;
          exhibitory-evidence is White House YouTube approval rating is the
          absolute mirror of down-payments to gdp (1/11)
          <br />
          <br />
          Cops can only brandish arsonists and you can fight if the building is
          empty, or if they want to harm the cop or victims if interfere
          otherwise, of course. cops need to be paid by truncated sales tax, not
          net loss on incarceration thru bonds-abetting
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/vn8z86hh1iv1yez/Screen%20Shot%202021-10-30%20at%208.13.48%20AM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            “Millionaire pay fair share and take a break workers
            <br />
            Protect women’s health, more available and more affordable,
            childcare affordable, expanding paid family leave and childcare more
            than anywhere in America. Creating clean energy economy with good
            job, recover from awful scourge by following science, and helping
            small business get back up on their feet.”
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/llygt1c875758o1/Screen%20Shot%202021-11-03%20at%2010.40.19%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Republicans can’t decide between a "
            <a href="https://login.gov" style={{ color: "rgb(20,100,200)" }}>
              thorough vetting process
            </a>
            " and only taking people with "threats" against their lives
            <br />
            <br />
            People think they are more important than they actually are, that's
            why we started free space, to show that people are crap," stfu
            <br />
            <br />
            literally said "rollover insurance," is a bizarre policy
            <br />
            as they profit off of non-concurrentable collective bargaining fraud
            <br />
            Probably out for my copyright at thumbprint.us et al
            <br />
            calling any detestation of the status quo, schizoaffective, when I
            found out that the stock market does not anonymize your trades when
            tranching them for no utilitarian-reason necessary except to
            troucnce competition when they are consumers as opposed to "playing
            the ball" in production
          </div>
          <br />
          <a
            href="https://truncatedsalestax.com"
            style={{ color: "rgb(20,100,200)" }}
          >
            useless douche-bag-yeast-cleaners
          </a>
          , slanderous with conviction-desistable of without proof than
          subjective opinion, not persuasive and bizarre, conflict of interest
          borne too - by administration that excludes tort-reformers from jury
          for abject and open trust building
          <br />
          in the retarded United States, where it takes 10x more hours to own a
          home outright than in 1970, and the GOP blames this on oil rather than
          private debt primarily, think irritability with the stats quo is a
          mental disorder
          <br />
          <br />
          Mark Levin always detests marxists and then advertises a collective
          bargaining fraud that expires (monthly, unsettled)
          <br />
          <br />
          Blowing up buildings, self-proclaimed marxists," marx would never do
          that you fucking idiot, that is another laborers' means not usurped by
          MOSTLY private "industry" of brought forward demand/competing with
          consumers in all forms loitering, accrual and fraud and trade-secrets
          <br />
          <br />
          George P. Bush: "We could use the $1b to illegals to remove them[,
          like hitmen],"
          <br />
          <br />
          <a href="https://billbiden.org" style={{ color: "rgb(20,100,200)" }}>
            Biden CAN['t]
          </a>
          &nbsp;use the executive pen," to reappropriate funds, if not everyone
          voted
          <br />
          <br />
          Bottom left is calling out the dead-weight-rentier, not sure if you
          mean top left? Occupy will never not anti-rent-seeker, we have plural
          majority in every place in the world
          <br />
          <br />
          Not bottom left, at least third party beneficiary, implausible
          landlord use & non-concurrentable collective bargaining fraud
          <br />
          <br />
          No one represents occupy: reverse don’t cancel nor bailout nor
          gentrify by public nor private, open-source everything. Not voting is
          a vote for that
          <br />
          <br />
          38% of nj don’t vote because there isn’t an anti-rent-seeking nor
          bailout/cancel candidate (reverse/occupy/Saver)
          <br />
          <br />
          menendez&nbsp;
          <a href="https://carducci.us" style={{ color: "rgb(20,100,200)" }}>
            ■-■¬(≖_≖ )
          </a>
          <br />
          <br />
          Tos yes is moot if duress beyond mvp decided by without
          hung-jury-permits and of without surrendering third party beneficiary
          as with fraud of collective-bargaining, fda-secret-ingredients, nor in
          accrual of that very collateral, ….unsettled and all that entails….
          <br />
          <br />
          disabilities not for deaf-people
          <a
            href="https://teapharmacy.party"
            style={{ color: "rgb(20,100,200)" }}
          >
            They don't give over the counter
          </a>
          &nbsp;to near-sighted people like you
          <div
            style={{
              maxWidth: "100%",
              width: "600px",
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/h1xmimv6k58zwke/IMG_2265.PNG?raw=1"
              }
              float={null}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <div style={{ width: "200px", justifyContent: "column" }}>
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/6fqa08lrp1rpagq/IMG_2575.jpeg?raw=1"
                }
                float={null}
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/237l11jixc8e38s/Screen%20Shot%202021-10-29%20at%203.17.55%20PM.png?raw=1"
                }
                float={null}
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </div>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/xd20k4x7nql0q8w/coughs%20and%20sneezes.jpeg?raw=1"
              }
              float={null}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          <div style={{ height: "min-content" }}>
            <a href="https://en.wikipedia.org/wiki/Base_rate_fallacy">
              <Cable
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.settleDropboxFree
                    ? ""
                    : "https://www.dropbox.com/s/5ipsfibplwlj5sk/Screen%20Shot%202021-10-29%20at%202.05.59%20PM.png?raw=1"
                }
                float="left"
                title=""
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            </a>
            97% hospitalized with covid aren't vaccinated," Peter "
            <a
              href="https://en.wikipedia.org/wiki/Base_rate_fallacy"
              style={{ color: "rgb(20,100,200)" }}
            >
              basis rate fallacy
            </a>
            " King
            <br />
            I'll give you&nbsp;
            <a
              href="https://truncatedsalestax.com"
              style={{ color: "rgb(20,100,200)" }}
            >
              the treatment
            </a>
            , cig
            <br />
            retribution, cash advance to short debt;&nbsp;
            <a
              href="https://thumbprint.us/privacy"
              //style={{ color: "rgb(20,100,200)" }}
            >
              pawn
            </a>
          </div>
          <Cable
            onError={handleScollImgError}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://www.dropbox.com/s/xfb7b4f3kv49g1x/Screen%20Shot%202021-10-29%20at%2011.05.05%20AM.png?raw=1"
            }
            float="right"
            title=""
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          donations, on the newsfeed, not subscribers to "watch," (if people
          paid into it, data beyond mvp is notwithstanding).
          <br />
          <br />
          No-Mask-mandate correlate with testing basis you fucking retard
          <br />
          ginnie pig/abuse, give me virus I’ll take chance to prove it
          <br />
          “Doesn’t end because you say it doesn’t, you can stop it by going to
          the polls,” ideological-duress you fucking prick trevalese. There is
          no occupy candidate
          <br />
          <Cable
            onError={handleScollImgError}
            img={true}
            src={
              this.state.settleDropboxFree
                ? ""
                : "https://www.dropbox.com/s/z6y9wbkoafx6eor/Screen%20Shot%202021-10-28%20at%206.27.19%20PM.png?raw=1"
            }
            float="left"
            title=""
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          “The left doesn’t allow dissent, liberals & conservatives allow it.”
          The left allows any idea except vaxxers took over the comment section.
          Most people allow discussion. You’re lying to yourself that Marx
          Piketty and I would stop comments. Paul Krugman didn’t block my
          replies when I had Twitter… stfu Prager, you fucking prude
          <br />
          <br />
          "how the conservatives on the right can fight the radical-left,"
          bottom left is anti-rent0-seeking, conservative for labor, not accrual
          third party beneficiary malfeasnace, collective bargaining fraud nor
          implausible landlord use
          <br />
          <br />
          tax-payer vacation paid by children, except really, savers (not
          savings accounts, they get paid by reappropriation of labors' means)
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/v1urbz58grw645c/Screen%20Shot%202021-10-28%20at%206.07.22%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/hqwyjgxoxoonscu/Screen%20Shot%202021-10-28%20at%206.07.35%20PM.png?raw=1"
              }
              float="right"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            "funding" is not taxing producers that consumers pay for unless you
            allow corporations to keep profits year to year instead of outlay to
            labor immediately, why except to communize-privately for no
            practical collective bargain nor consent of consumers, prices being
            bound to finite-producer discretion, not equillibrium as our
            reasoning for
            unregulated(precedentially-fettered-by-private-debt)-markets gains
            consensus is more science than simple majority, having to all but
            not move in election
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/jupjqyuu0t1oykg/Screen%20Shot%202021-10-28%20at%205.26.36%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Cost of living in large measure because of Biden policies, try
            actually counting retard self-harmer
            <br />
            consistently seeing byproduct, not the cause
            <br />
            <br />
            coverage by collective bargaining fraud instead of invoices are
            theft is economic retardation
            <br />
            <br />
            “Let markets work all by themselves,” Bob “fine don’t regulate”
            Sellers (hypocrite) well money “market,” collective-bargaining
            non-concurrentable fraud, ingredient-list-hidden+FDA-license,
            hung-jury-permits &
            <br />
            Implausible landlord use is not
            <br />
            You would want to own one if without accrual, collateral not
            unsettled, making the whole supply chain of labor and&nbsp;
            <span style={{ backgroundColor: "white", color: "black" }}>
              dead-weight-rentier
            </span>
            , “unsettled”
          </div>
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/0eph1ozt7lr0ruy/Screen%20Shot%202021-10-29%20at%2012.35.16%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            Take them “out[ of office or retribution],” lo the power rests with
            the non-voters as a vote; or amortizing debt:cash*income third party
            beneficiary non-malfeasanace in precedent (but not law)
            <br />
            <br />
            Chores literally, "jiggers" profits from consumers, laundering
            individual labor savings to profits in corpoations y/y. it's not
            about color, at least root of word
            <br />
            <br />
            200yrs afro/euro match current income, 44years cash*trade/debt match
            current income... purposefully-impossible. Green new deal would be
            reverse debt:cash*income not cancel forbidden nor bailout
            lenders/landlords scheming implausible use, competing with consumer
            intent, dead-weight-rentier abjectly
          </div>
          <br />
          <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
            wealth/hours
          </span>
          : poorness,&nbsp;
          <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
            cost of living
          </span>
          : home-inflation,&nbsp;
          <span style={{ backgroundColor: "rgba(255,220,255,.4)" }}>
            income/hours
          </span>
          : poverty,
          <br />
          <br />
          why do you think?&nbsp;
          <a href="https://30under5.us" style={{ color: "rgb(20,100,200)" }}>
            implausible landlord use
          </a>
          , pharma-cops and fda-craft-beers?
          <br />
          <br />
          Self-abstain rather than having holdings is a default no
          <br />
          <br />
          Hour is purchased because it is a fixed good, if is impossible to get
          back a grandiose scope it is consumer risk for review; can't sell it
          twice un-lest concurrentable... like tech or
          another-item-in-same-reality
          <br />
          <br />
          poorness=(poverty/equality), C+I+G is redundant, NE is
          self-gentrification, & P is integral; gdp=m1v1==m2v2 is impossible
          <br />
          <br />
          education grants is useless price inelasticity and intermediate
          supply-demand trust-building, also bolstering trade-secrets
          <br />
          <br />
          Biden is making tax-credit refundable for to balkanize wealth between
          old and young
          <br />
          <br />
          Democrats want “taxes on profits above a billion dollars,” instead of
          forcing outlay to individual labor savings. Republicans want profits
          to be kept by the private communes.
          <br />
          <br />
          green new deal would be reverse debt:cash*income reimburse down
          payments upon repo amortized
          <br />
          medicare for all vs obamacare would be invoices are theft &&
          non-concurrentable collective bargaining fraud banned
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/wpfdmigmvlu0q08/Screen%20Shot%202021-11-04%20at%202.19.45%20PM.png?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            bipartisans want to fine and libertarians don't want to regulate
            <br />
            Paid family leave is waste of comparative advantage, just fire them
            <br />
            Child tax credit is parent monopsony over children
            <br />
            "tuition-free" is like the right saying monthy-payment is less when
            total is greater
            <br />
            <br />
            The right wants to fine instead of regulate. not-voting is a vote,
            when your option isn't there
          </div>
          <br />
          <div
            style={{
              backgroundColor: "rgba(255,100,225,.4)",
              padding: "10px"
            }}
          >
            pay tax twice to go public! ok retard (the reptilian-deep-state
            can't handle name-calling) Murphy feigning&nbsp;
            <a
              href="https://teapharmacy.party"
              style={{ color: "rgb(20,100,200)" }}
            >
              weed
            </a>
            &nbsp;for ideological-duress/non-voters isn't consent beyond article
            4/scientific-consensus without hung-jury-permits (11/12). binary
            simple majority is having to move, but plural majorities will trump
            ideological duress of party-coalating, and pro-tests to move from
            natural/common/international-law, not precedence
            evidently-necessarily-historically
          </div>
          <br />
          <br />
          <div
            style={{
              float: this.state.iosNoPhoto ? "" : "left"
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <TwitterTweetEmbed
                key={" 1425460613711605760"}
                tweetId={"1425460613711605760"}
              />
            </div>
          </div>
          "{"<"}1% 44% income tax"
          <br />
          “MU polling is very variable; with the advent of cell phones, people
          don’t want to answer calls right now,” Chris Christie Cannot
          extrapolate voters, unshuffled population to boot, like coins
          <br />
          <br />
          “Obligation to accept legitimacy of this election”
          <br />
          <br />
          <div style={{ height: "min-content" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/h1pckpafyv9wagn/biden%20official.jpg?raw=1"
              }
              float="left"
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <span
              style={{
                backgroundColor: "rgb(180,255,220)",
                color: "black"
              }}
            >
              "Negotiate and lower the price of drugs,"
            </span>
            &nbsp;does that mean it will declare invoices and theft or are you
            buying non-compete nurses gentrifying? reverse debt:cash*income
            don't lessen poverty doubly retiring the bond-index-funds
            <br />
            Must certify honor system signatures without content addressability,
            audit magnetic-data hard disc is fraud
          </div>
          <br />
          <TwitterTweetEmbed
            style={{
              width: "300px",
              float: "left"
            }}
            key="1433857610923532288"
            tweetId="1433857610923532288"
          />
          Savers split both parties, occupy && non-voters win plural-majority
          (if no-rank-choice)
          <br />
          <br />
          republicans like ppp trust-building, libertarians like
          private-gentrification, instead of regulating finite producers in
          target-margin networks & duress of business over consumers'
          protections. FDA only purpose is closed-source ingredient list of
          craft beers
          <br />
          <br />
          socialists are conservative, never reappropriating means of another
          nor have hung-jury-permits of duress in minimal-viable-product,
          publicly nor privately; supply chain is all labor or dead weight
          profit-private-commune
          <br />
          <br />
          You cannot squat on land, like New Jersey, and discriminate, gentrify
          beyond Article 4
          <br />
          marx described communism as a cudgel against finite producers, now it
          is government, or private, gentrification
          <br />
          <br />
          socialism where supply and demand is without dead weight (20x
          55+/millennial rental-income)
          <br />
          wealth-distribute from tax-payer vacation, not share-split neither
          accrual, lazy old people had your whole lives to save for retirement
          <br />
          regulate instead of fine and monopsony; poverty=(poverty/equality),
          gdp/p*bond=((1/price)/hours), no regard for tech-advancement in
          bipartisan racketeering, and gimpy-self-harm in private-communes (that
          not of regulation against credit-cycle for labor exclusivity to supply
          and demand theorum, all other brokerage fee target-margin for
          networking or being finite producer alone)
          <br />
          <a
            href="https://carducci.sh"
            style={{
              display: "inline-block",
              color: "rgb(20,100,200)",
              textAlign: "center",
              width: "100%"
            }}
          >
            all parties
          </a>
          <br />
          &nbsp;do is unite in lieu of consent granted (without "ideological
          duress")
          <br />
          <br />
          please say euro and afro to be consistent
          <div style={{ flexWrap: "wrap", display: "flex" }}>
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/bylo9brxxw6nxmx/Screen%20Shot%202021-10-28%20at%2011.10.58%20AM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/u2l0gw7i6dal5fo/Screen%20Shot%202021-10-28%20at%2011.13.24%20AM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <Cable
              onError={handleScollImgError}
              img={true}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/4lsgyyetyfdguq4/Screen%20Shot%202021-10-28%20at%2011.13.06%20AM.png?raw=1"
              }
              float={null}
              title=""
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
          </div>
          "seeking unemployment [from work] is a joke, bad economics, bad
          politics,"&nbsp;
          <a
            href="https://froth.app/consumption"
            style={{ color: "rgb(20,100,200)" }}
          >
            Larry Kudlow
          </a>
          <br />
          <div style={{ width: "200px" }}>
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={`${
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dropbox.com/s/o1575yuzp6w9lw2/this%20is%20kudlow.jpeg?raw=1"
              }`}
            />
          </div>
          <br />
          {/*
              width && <Employment width={Math.min(600, width - 100)} /> //H5XB
            */}
          <Cable
            style={{ height: "760px", width: "100%" }}
            onError={handleScollImgError}
            src={
              this.state.nofredgraphs
                ? ""
                : "https://fred.stlouisfed.org/graph/graph-landing.php?g=H5XB&width=500&height=660"
            }
            float="left"
            title="price inflation never by population except when dead weight by public or private"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <div
            style={{
              backgroundColor: "black",
              overflow: "hidden",
              height: "50px",
              width: "calc(100% - 46px)",
              display: "flex",
              position: "relative",
              padding: "4px 10px"
            }}
          >
            <div
              style={{
                right: "23px",
                zIndex: "1",
                boxShadow: "inset -15px 0px 14px 2px rgb(5,5,5)",
                overflow: "hidden",
                height: "50px",
                width: "46px",
                display: "flex",
                position: "absolute",
                padding: "4px 10px"
              }}
            />
            <div
              style={{
                overflowX: "auto",
                overflowY: "hidden",
                height: "62px",
                width: "calc(100% - 46px)",
                display: "flex",
                position: "relative",
                padding: "4px 10px"
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  marginBottom: "12px",
                  display: "flex",
                  position: "absolute",
                  height: "calc(100% - 12px)",
                  width: "max-content"
                }}
              >
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#9749ffff",
                      color: "white"
                    }}
                    href="https://thumbprint.us"
                  >
                    thumbprint.us
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(225, 100, 170)",
                      color: "black"
                    }}
                    href="https://magnate.company"
                  >
                    magnate.company
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://teapharmacy.party"
                  >
                    teapharmacy.party
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://30under5.us"
                  >
                    30under5.us
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://3under2.us"
                  >
                    3under2.us
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://truncatedsalestax.com"
                  >
                    truncatedsalestax.com
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://2052.live"
                  >
                    2052.live
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://residualsplit.us"
                  >
                    residualsplit.us
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://equityutilitymoney.com"
                  >
                    equityutilitymoney.com
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://micro-theory.com"
                  >
                    micro-theory.com
                  </a>
                </div>
                <a
                  style={{
                    height: "100%",
                    position: "relative",
                    display: "flex",
                    width: "min-content"
                  }}
                  href="https://froth.app"
                >
                  <img
                    style={{ height: "100%", width: "auto" }}
                    src={`${
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dropbox.com/s/u9kahqiqiiqse5t/froth%20logo300150.png?raw=1"
                    }`}
                    alt="froth.app"
                  />
                </a>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(218, 198, 90)",
                      color: "blue"
                    }}
                    href="https://foiegras.life"
                  >
                    foiegras.life
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#0000fa",
                      color: "white"
                    }}
                    href="https://vaults.biz"
                  >
                    vaults.biz
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "white",
                      color: "black"
                    }}
                    href="https://nationalsecuritycasino.com"
                  >
                    nationalsecuritycasino.com
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(200, 230, 255)",
                      color: "rgb(178, 90, 197)"
                    }}
                    href="https://moldmask.co"
                  >
                    moldmask.co
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      color: "rgb(112, 101, 55)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(212, 171, 95)"
                    }}
                    href="https://humanharvest.info"
                  >
                    humanharvest.info
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,15)",
                      color: "#92b8daff"
                    }}
                    href="https://vau.money"
                  >
                    vau.money
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#c39767ff",
                      color: "white"
                    }}
                    href="https://scopes.cc"
                  >
                    scopes.cc
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#92b8da",
                      color: "#cfe2f3"
                    }}
                    href="https://browser.glass"
                  >
                    browser.glass
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "#3f6aadff",
                      color: "white"
                    }}
                    href="https://actuapedia.com"
                  >
                    actuapedia.com
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://keybox.email"
                  >
                    keybox.email
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://drive.google.com/file/d/1fEi15P1689bWpKBzUprB3DjZKf4h_Cf3/view?usp=sharing"
                    //"https://vianickcarducci.medium.com/im-on-the-blockchain-742e3702721"
                  >
                    blockchain.fart
                  </a>
                </div>
                <div
                  style={{
                    marginRight: "4px",
                    display: "flex",
                    position: "relative",
                    height: "min-content"
                  }}
                >
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://linkedin.com/in/nickcarducci"
                  >
                    nick
                  </a>
                  @
                  <a
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      backgroundColor: "rgb(5,5,5)",
                      color: "white"
                    }}
                    href="https://carducci.sh"
                  >
                    carducci.sh
                  </a>
                </div>
              </div>
            </div>
            <br />
            <div
              onMouseEnter={() =>
                this.setState({ hoverDemandExplained: true }, () => {
                  clearTimeout(this.stophoverDemandExplain);
                  this.stophoverDemandExplain = setTimeout(
                    () => this.setState({ hoverDemandExplained: false }),
                    4200
                  );
                })
              }
              style={{
                marginTop: "10px",
                width: "100%",
                position: "relative",
                height: "36px"
              }}
            >
              <span
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  padding: "4px 10px",
                  transition: ".3s ease-in",
                  position: "absolute",
                  opacity: !this.state.hoverDemandExplained ? 1 : 0
                }}
              >
                <span
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline"
                  }}
                >
                  Consumer
                </span>
                -Side Economics & Human Rights
              </span>
              <span
                style={{
                  marginTop: "10px",
                  textAlign: "left",
                  fontSize: "20px",
                  padding: "4px 10px",
                  transition: ".3s ease-in",
                  position: "absolute",
                  opacity: this.state.hoverDemandExplained ? 1 : 0
                }}
              >
                <span
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline"
                  }}
                >
                  Socialist
                </span>
                -Conservative & laborequity.org
              </span>
              <div
                onClick={() =>
                  this.setState({ openAbout: !this.state.openAbout })
                }
                style={{
                  color: "white",
                  position: "absolute",
                  right: "66px",
                  zIndex: "1",
                  margin: "10px",
                  padding: "4px 10px",
                  backgroundColor: "blue",
                  borderRadius: "6px"
                }}
              >
                {this.state.openAbout ? "Close" : "About"}
              </div>
            </div>
            <div
              style={{
                color: "rgb(200,200,200)",
                backgroundColor: "rgb(5,5,5)",
                height: this.state.openAbout ? "min-content" : "0px",
                overflow: "hidden",
                wordBreak: "break-word",
                width: "calc(100% - 46px)",
                position: "relative",
                padding: "4px 10px",
                paddingTop: "20px",
                transition: ".3s ease-in"
              }}
            >
              “If nat security, make everyone share sacrifice,” said jihadist
              Colin Powell. Half do it for money, half do it because they are
              psycho. The latter half of the same hold for cops care. Who says
              national security is so at steak that you can’t use tech
              advancement and small teams? Certainly not before two-week public
              review of the evidence of murder in action.
              <br />
              <br />
              non-voters 38% is a vote of non-consent, not even giving mind to
              simple majority scientific monopoly of possibly without hung-jury
              (many more resolved science and law that doesn't make it into
              political discourse), especially with ideological duress of
              political-party-making
              <br />
              <br />
              <span style={{ backgroundColor: "white", color: "black" }}>
                Repealing the grocery tax is not grocery tax after reverse
                debt:cash*invoices
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                <Cable
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.settleDropboxFree
                      ? ""
                      : "https://www.dropbox.com/s/bgz2xzey09bj5an/Screen%20Shot%202021-11-03%20at%206.45.39%20PM.png?raw=1"
                  }
                  float={null}
                  title=""
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
                <div style={{ width: "200px" }}>
                  <div
                    style={{
                      position: "absolute",
                      zIndex: "1",
                      textAlign: "center",
                      width: "400px",
                      backgroundColor: "rgba(10,10,10,.4)"
                    }}
                  >
                    APPRAISAL KING
                  </div>
                  <Cable
                    onError={handleScollImgError}
                    img={true}
                    src={
                      this.state.settleDropboxFree
                        ? ""
                        : "https://www.dropbox.com/s/um8lxim6ddi9qen/Screen%20Shot%202021-11-03%20at%206.46.00%20PM.png?raw=1"
                    }
                    float={null}
                    title=""
                    scrolling={this.state.scrolling}
                    fwd={this["scrollImg" + scrollnum()]}
                    scrollTopAndHeight={
                      this.state.scrollTop + window.innerHeight
                    }
                    scrollTop={this.state.scrollTop}
                  />
                </div>
              </div>
            </div>
            <br />
            Yang trumpeting rank choice voting for primaries by tech
            <br />
            “2-3 parties in them”
            <br />
            <br />
            vm=gdp for both monies? v1 is fraudulent. $170t total market cap,
            $88t bond value, $2-6t cash currencyComponentOfM1 checking but
            $4t/yr of federal spending is normal? Most of gdp is bonds, about
            10/11 of them if&nbsp;
            <a style={{ color: "rgb(150,220,255)" }} href="https://vaults.biz">
              recalc gdp for without m2 minus currencyComponentOfM1
            </a>{" "}
            (TrueGdp) Boom times produce scarcity as people is integral to gdp
            that is labor elastic for propensity to consume, and gdp/p is
            fraudulently brought forward, dead weight by private or public is no
            matter.
            <br />
            <br />
            Prosperity is tranquility, settled trade
            <br />
            <br />
            Productivity is hours under price-deflation over a time-series
            <br />
            <br />
            Sustainability, Inclusivity and Accessability
            <br />
            A&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.investopedia.com/articles/personal-finance/070715/insurance-companies-vs-banks-separate-and-not-equal.asp"
            >
              duressful
            </a>
            -economy of our&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://www.investopedia.com/articles/investing/110513/utilizing-prisoners-dilemma-business-and-economy.asp"
            >
              doing, but not our choosing
            </a>
            ; on the clock, cornered, hoarded & counterfeit
            <br />
            <span style={{ fontSize: "30px" }}>&</span>&nbsp;&nbsp;&nbsp;The
            forces that are out to obfuscate and scourge&nbsp;
            <a
              style={{ color: "rgb(150,220,255)" }}
              href="https://micro-theory.com"
            >
              $82tdebt:$2tcurrencyComponentOfM1
            </a>
            &nbsp;(savings)
            <br />
            <span style={{ /**rgb(250,10,88) */ color: "rgb(250,100,100)" }}>
              suffocating inventors
            </span>
            &nbsp;- disturbing opportunity [default-1/42 reposession
            adjunication malfeasance (if debt-didn't exist, for all
            purchases)];&nbsp;
            <span style={{ color: "rgb(180,180,180)" }}>
              not acting to ban counterfeit-in-contract financial-cannibalism or
              rentier-colonisation to launder to rich with bonds
            </span>
            <div
              style={{
                margin: "4px 0px",
                padding: "4px 0px",
                borderTop: "2px solid",
                borderBottom: "2px solid"
              }}
            >
              Harm, net-agressive self-defense, prevention of others owning
              assets
            </div>
            <span
              style={{
                color: "rgb(255,240,240)"
              }}
            >
              if you move [not advise w/o intent or neglect to deceive, unless
              under non-state-tort(A5)] people you are at fault
              <br />
              read 'state' as p2s not public service role, see liability of
              product advertising... which should carry same crime of
              intent/negligence non-state-tort...
            </span>
            <br />
            <br />
            <div
              style={{
                margin: "4px 0px",
                padding: "4px 0px",
                borderTop: "2px solid",
                borderBottom: "2px solid"
              }}
            >
              <span style={{ color: "rgb(80,220,0)" }}>
                Competing with customers
              </span>
              &nbsp;- growth causes consterNation
            </div>
            <span
              style={{
                color: "rgb(240,255,245)"
              }}
            >
              You can tax sales (of end-products, not equity) for
              free-rider-immutable services, wealth for systematic reparations
              but really those are torts, and adjunicate torts to repair
              unjustice;&nbsp;
              <span
                //ref={this.law}
                style={{
                  transition: ".3s ease-in",
                  color: this.state.highlightLaw ? "white" : "",
                  backgroundColor: this.state.highlightLaw
                    ? "rgb(170,100,205)"
                    : ""
                }}
              >
                any tax or debt otherwise not only is involuntary slavery and a
                trust-building monopsony by the government, their contractors
                and their propograndising conspitators in ratings and education,
                but debt benefits the bond-holders & interference by tax or
                credit does nothing for the state of the world or the utilities
                purchased but raise prices and circumvent Savers who have worked
                for what they earn
              </span>
              . Saver Party represents the people that work or fund
              entrepreneurs on their&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://vaults.biz"
              >
                customers' time
              </a>
              , and do not borrow or lend, and it is good for quality + -price.
              It is an obvious&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://www.opensecrets.org/2020-presidential-race/joe-biden/industries?id=N00001669"
              >
                red-herring
              </a>
              &nbsp; to help Wall st; yet the Republicans do the same. Saver
              party exists and represents&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://www.isidewith.com/poll/488729614"
              >
                most Americans
              </a>
              . Why call your parties one of the primary two; bipartisanship
              representing a minority of Americans - and no civil or human
              rights - is a lie, if claiming it to be what people want - or
              deserve.
            </span>
            <span style={{ color: "grey" }}>
              &nbsp; Like my stuff? Hire me! 7322331085. I am asking for 4100%
              of what you think is possible. Please collude with Twitter, CNN &
              AP to gaslight people into thinking they want to fulfill my wishes
              for myself by splitting their equity, try not to let them on to
              what is happening
            </span>
            <br />
            <br />
            <div
              style={{
                marginBottom: "4px",
                padding: "4px 0px",
                borderTop: "2px solid",
                borderBottom: "2px solid"
              }}
            >
              <span style={{ color: "rgb(25,122,158)" }}>
                International Relations
              </span>
              &nbsp;- Individual World Order
            </div>
            <span
              style={{
                color: "rgb(240,245,255)"
              }}
            >
              In order to compete with a debt-based country (not because it is
              economically unfair, like a&nbsp;
              <a
                style={{ color: "rgb(150,220,255)" }}
                href="https://www.academia.edu/43983386/Can_a_socialist_or_communist_system_compete_effectively_in_a_global_economy"
              >
                communist economy is not as strong economically
              </a>
              &nbsp;as a productive && EFFICIENT, micro-controlled/empowered by
              currency concord one), China wars/threatens. However, from my
              historical market studies - world peace would come from the
              understanding of and repairing, as needed, the following:
            </span>
          </div>
          <div
            style={{
              position: "relative",
              height: "min-content",
              width: "100%",
              fontSize: "10px",
              backgroundColor: "rgb(100,150,200)"
            }}
          >
            <a
              href="https://magnate.company"
              style={{
                color: "rgb(100,200,150)"
              }}
            >
              EVERYCREDIT HAS AN EQUAL AND OPPOSITE REACTION, in price,
              exclusively
            </a>
          </div>
          <button
            style={buttonstyle}
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ c2020: !this.state.c2020 });
            }}
          >
            <h3>c2020</h3>
          </button>
          <br />
          {/*
        <div
          style={{
            zIndex: 1,
            display: this.state.c2020 ? "block" : "none",
            alignItems: "flex-end",
            width: "100%",
            height: "min-content"
          }}
        >
            <App
              settleDropboxFree={this.state.settleDropboxFree}
              width={width}
              ios={this.state.ios}
              inSection={(section) =>
                !this.state.ios &&
                this.setState({ inSection: section, openMenu: true }, () => {
                  clearTimeout(this.openmenu);
                  this.openmenu = setTimeout(
                    () => this.setState({ openMenu: false }),
                    5432
                  );
                })
              }
              pauseScroll={() =>
                this.setState({ offScroll: true }, () => {
                  clearTimeout(this.offScroll);
                  this.offScroll = setTimeout(
                    () => this.setState({ offScroll: false }),
                    5432
                  );
                })
              }
              landedPresentation={
                this.state.landedPresentation && this.state.openMenu
              }
              openMenu={this.state.openMenu}
              scrolling={this.state.scrolling}
              scrollTop={this.state.scrollTop}
              top={this.state.top}
              section={this.state.inSection}
              goToTop={() =>
                this.setState({ highlightLaw: true }, () => {
                  setTimeout(
                    () => this.setState({ highlightLaw: false }),
                    10000
                  );
                  window.scroll({ top: 0, behavior: "smooth" });
                })
              }
            />
        </div>*/}
        </div>
      </div>
    );
  }
}

class PathRouter extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name
    };
    //this.bf = React.createRef();
    this.matchMedia = null;
    this.deferredPrompt = null;
  }
  componentDidMount = () => {
    this.setState(
      {
        ios: this.state.browser.includes("Safari"),
        iosNoPhoto: this.state.browser.includes("Safari")
      },
      () => {
        this.resize();
        window.addEventListener("resize", this.resize);
        //window.addEventListener("scroll", this.scroll);
        this.checkInstall(true);
        window.FontAwesomeConfig = { autoReplaceSvg: "nest" };
        window.addEventListener("scroll", this.scroll);
      }
    );
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("scroll", this.scroll);
    window.removeEventListener("beforeinstallprompt", this.beforeinstallprompt);
    window.removeEventListener("appinstalled", this.afterinstallation);
    this.matchMedia &&
      this.matchMedia.removeEventListener("change", this.installChange);
  };
  resize = () =>
    this.setState(
      {
        width: this.state.ios ? window.screen.availWidth : window.innerWidth,
        availableHeight: this.state.ios
          ? window.screen.availHeight - 20
          : window.innerHeight
      },
      () => this.scroll()
    );

  scroll = () => {
    const w = !this.matchMedia ? window.screen.availWidth : window.innerWidth;
    this.setState(
      {
        width:
          window.innerHeight - window.document.body.offsetHeight < 0
            ? w - 16
            : w
      },
      () => {
        clearTimeout(this.timey);
        this.timey = setTimeout(
          () =>
            this.setState({
              onscroll:
                window.document.body.scrollHeight -
                  window.document.body.clientHeight >
                50
            }),
          200
        );
      }
    );
  };
  // Initialize deferredPrompt for use later to show browser install prompt.
  beforeinstallprompt = (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    this.setState({ showPWAprompt: true }, () => (this.deferredPrompt = e));
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  };
  afterinstallation = () => {
    this.setState({ showPWAprompt: false }, () => (this.deferredPrompt = null));
    console.log("PWA was installed");
  };
  installChange = (evt) => this.setState({ showPWAprompt: !evt.matches });

  checkInstall = (addListers) => {
    if (
      navigator.standalone ||
      window.matchMedia("(display-mode: standalone)").matches ||
      document.referrer.startsWith("android-app://")
    ) {
      console.log("PWA");
      window.alert(
        `wow, thanks for adding us to your homescreen, please re-add ` +
          `if any bugs pop up and email nick@thumbprint.us with any complaints! ` +
          `STAGE: Work-In-Progress Beta (a.k.a. Alpha)`
      );
    } else {
      const ios = () => {
        return (
          [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod"
          ].includes(navigator.platform) ||
          // iPad on iOS 13 detection
          (navigator.userAgent.includes("iOS") && "ontouchend" in document)
        );
      };
      //!/iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
      if (ios()) {
        if (addListers) {
          this.matchMedia = window.matchMedia("(display-mode: standalone)");
          this.matchMedia.addEventListener("change", this.installChange);

          console.log("PWA query");
          window.addEventListener(
            "beforeinstallprompt",
            this.beforeinstallprompt
          );
          window.addEventListener("appinstalled", this.afterinstallation);
          this.resize();
        }
      } else
        this.setState({ showPWAprompt: true }, () =>
          console.log("PWA query on iOS")
        );
    }
  };
  render() {
    const { availableHeight, showPWAprompt, width } = this.state;
    return (
      <Route //BrowserRouter
        render={({ location, history }) => {
          if (location.pathname !== this.state.pathname) {
            clearTimeout(this.pauseRender);
            this.pauseRender = setTimeout(() => {
              this.setState({ pathname: location.pathname, history }, () => {
                if (location.state && location.state.statePathname) {
                  this.setState({
                    statePathname: location.state.statePathname
                  });
                }
              });
            }, 200);
          }
          return (
            <TransitionGroup
              key="1"
              style={{
                width: "100%",
                transition: ".3s ease-in"
                //minHeight: availableHeight ? availableHeight : "min-content"
              }}
            >
              <CSSTransition key="11" timeout={300} classNames={"fade"}>
                <Switch key={location.key} location={location}>
                  <Route
                    render={(
                      props //delete for deploy
                    ) =>
                      this.state.pathname === "/" && !this.state.openAll ? (
                        <AApp
                        lastWidth={width}
                          setIndex={() =>
                            this.setState({ openAll: !this.state.openAll })
                          }
                          onscroll={this.state.onscroll}
                        />
                      ) : (
                        <Index
                          pathname={this.state.pathname}
                          setIndex={() =>
                            this.setState({ openAll: !this.state.openAll })
                          }
                        />
                      )
                    }
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      ></Route>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <PathRouter />
  </BrowserRouter>,
  rootElement
);
