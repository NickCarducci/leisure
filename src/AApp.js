import React from "react";
import Cable from "./Dropwire";
import Government from "./government";

class AApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    for (let i = 0; i < 350; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  };
  componentWillUnmount = () => {
    clearTimeout(this.dragMove);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    //universal
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
  render() {
    //const {} = this.state;
    //console.log(this.state.username);
    //const space = " ";
    const setting = (n, more) => {
      return {
        style: {
          color: this.state["hoverin" + n] ? "rgb(50,70,90)" : "black",
          cursor: "pointer",
          ...more
        },
        onMouseEnter: () => this.setState({ ["hoverin" + n]: true }),
        onMouseLeave: () => this.setState({ ["hoverin" + n]: false })
      };
    };
    const setting2 = (n, more) => {
      return {
        style: {
          color: this.state["hoverin" + n]
            ? "rgb(80,100,120)"
            : "rgb(50,70,90)",
          cursor: "pointer",
          ...more
        },
        onMouseEnter: () => this.setState({ ["hoverin" + n]: true }),
        onMouseLeave: () => this.setState({ ["hoverin" + n]: false })
      };
    };
    const handleScollImgError = (e) => {
      if (e) {
        this.setState({ settleDropboxFree: true });
      }
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
          transition: ".3s ease-in",
          display: "flex",
          flexDirection: "column",
          justifyContent: this.props.onscroll ? "start" : "space-around",
          maxheight: "min-content",
          height: "calc(100vh - 20px)",
          fontFamily: "sans-serif",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            position: "relative",
            top: "0px",
            marginTop: "30px"
          }}
        >
          <a
            href="https://truncatedwholesaletax.com"
            {...setting(8, {
              color: "black",
              textDecoration: "none",
              position: "fixed",
              left: "30px",
              top: "40px"
            })}
          >
            truncatedwholesaletax
          </a>
          <div
            onClick={this.props.setIndex}
            {...setting(8, {
              textDecoration: "none",
              position: "fixed",
              right: "30px",
              top: "40px"
            })}
          >
            &diams;
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h1 {...setting(0)}>
              Saver <a href="https://www.reddit.com/r/saverparty/">Party</a>
              <br />
              <a
                style={{ fontSize: "15px", fontWeight: "normal" }}
                href="https://marx.quora.com/What-is-Marxs-definition-of-Utopia-1"
              >
                universal education
              </a>
            </h1>
            <h4 {...setting(1)}>
              Bonds by{space}
              <a href="https://www.reddit.com/r/realeconomics/comments/wpet89/what_economic_theories_are_wrongincorrect">
                private
              </a>
              {space}
              <a href="https://occupyrepublicans.quora.com/How-would-a-backing-of-gold-allow-the-amount-of-deficit-spending-Trump-did">
                investors
              </a>
              {space}
              also <a href="https://vaults.biz/party">inflate</a>
            </h4>
            <Cable
              style={{ width: "100%", maxWidth: "300px" }}
              img="true"
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dropbox.com/s/7v0g480c8nfy862/Screen%20Shot%202022-10-09%20at%2012.53.52%20PM.png?raw=1"
              }
              float={null}
              title="vaults.biz/party, thetax.party, truncatedwholesaletax.com"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <div
              style={{
                width: "100%",
                maxWidth: "300px"
              }}
            >
              Shouldn't we end blmanagement even though it{space}
              <a href="https://saverparty.quora.com/Was-the-small-black-business-community-helped-by-Donald-Trump-1">
                makes a profit to save
              </a>
              {space}money?
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  moreInfo: !this.state.moreInfo
                });
              }}
            >
              {this.state.moreInfo ? "less" : "more"}
            </button>
            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                fontSize: this.state.moreInfo ? "14px" : "0px",
                padding: "6px"
              }}
            >
              <span>
                Why is{space}
                <a
                  style={{
                    color: "black"
                  }}
                  href="https://saverparty.quora.com/Isnt-American-oil-expensive-because-of-labor"
                >
                  higher wages
                </a>
                {space}
                as inflation{space}
                <a
                  style={{
                    color: "black"
                  }}
                  href="https://vaults.biz"
                >
                  political cushion
                </a>
                ? Now that{space}
                <a
                  style={{
                    color: "black"
                  }}
                  href="https://fredaccount.stlouisfed.org/dashboard/83986"
                >
                  we work
                </a>
                {space}
                and{space}
                <a
                  style={{
                    color: "black"
                  }}
                  href="https://beingstable.quora.com/Wouldn-t-lending-have-to-stop-completely-to-ever-make-the-paying-down-of-all-public-and-private-debt-at-all-possible-wit"
                >
                  spend
                </a>
                {space}
                more than{space}
                <a
                  style={{
                    color: "black"
                  }}
                  href="https://humanharvest.info"
                >
                  ever
                </a>
                , do economists think they are still{space}
                <a
                  style={{
                    color: "black"
                  }}
                  href="https://insurancebenefits.quora.com/How-would-Florida-residents-save-money-and-or-profit-with-hurricane-insurance-if-they-all-share-the-risk"
                >
                  productive
                </a>
                ?{space}
                <span style={{ fontSize: "11px" }}>
                  Doesn't the CPI survey miss{space}
                  <a href="https://commie.dev">shrinkflation</a>?
                </span>
                {space}
                <i style={{ fontSize: "12px" }}>
                  Isn’t a recession always in long-term employment but for
                  technical short-term inefficiencies?
                </i>
              </span>
            </div>
            <div
              style={{
                width: "min-content",
                minWidth: "180px",
                color: "white",
                backgroundColor: "rgba(20,20,20,.6)",
                fontSize: this.state.moreInfo ? "14px" : "0px",
                padding: "6px"
              }}
            >
              {/*redacted after announced (curious)
              <br />
              <br />
              deviant credit{space}
              <a href="https://commie.dev" style={{ color: "white" }}>
                is not
              </a>{space}
              output exchanged price.
            <br />*/}
              <span
                style={{
                  fontSize: this.state.moreInfo ? "12px" : "0px"
                }}
              >
                Crime related to deficit spending
                <br />
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://targetmarginnetworks.quora.com"
                >
                  Utilies
                </a>
                {space}
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://generalmaintenanceunit.quora.com"
                >
                  management
                </a>
                {space}
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://courttechnology.quora.com"
                >
                  experience
                </a>
                <br />
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://saltbank.org"
                >
                  Right to own[ership]
                </a>
                {space}
                and{space}
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://thetaxparty.com"
                >
                  liberty
                </a>
              </span>
              <br />
              Docket,{space}
              <a href="https://leisuretoprefer.com" style={{ color: "white" }}>
                desist
              </a>
              , spoof geohash (
              <a href="https://saltbank.org" style={{ color: "white" }}>
                protest
              </a>
              )
              <br />
              <br />
              <span style={{ color: "linen" }}>
                <span style={{ color: "lightsteelblue" }}>
                  Is Amendment 14.4 an abrogation of Article 3.3?
                  <br />
                  <i>Article 1.8 states a common defense and general welfare</i>
                </span>
                {space}
                <i style={{ color: "silver" }}>
                  (and to borrow money on the credit of the United States, which
                  makes no mention on who is to invest).
                </i>
                <br />
                Although all "Duties, Imposts and Excises shall be{space}
                <a
                  style={{ color: "linen" }}
                  href="https://islamicbanks.quora.com/If-marriage-is-dissolved-upon-chastity-in-U-S-justice-system-why-isnt-paydayt-legal-If-suitable-compensation-for-div"
                >
                  uniform
                </a>
                {space}
                throughout the United States"{space}
                <span style={{ color: "darkseagreen" }}>
                  does not mention debt, defense nor welfare{space}
                  <span style={{ color: "lightgrey" }}>
                    [
                    <a
                      style={{ color: "lightgrey" }}
                      href="https://kondratiev.quora.com/Is-in-person-instruction-better-than-online-because-of-body-language-or-a-need-to-speak-with-hand-motions-If-the-teache"
                    >
                      over such 'uniform' terms
                    </a>
                    ]
                  </span>
                  , <i>so such an implied matter is uniformity</i> for expensing
                  <span style={{ color: "lightgrey" }}>[-receipts]</span> but
                  not in the commercial{space}
                  <a
                    style={{ color: "darkseagreen" }}
                    href="https://microtheory.quora.com/Doesn-t-price-being-cardinal-imply-that-the-intercept-can-be-negative"
                  >
                    supposition
                  </a>
                  {space}
                  <span style={{ color: "lightgrey" }}>
                    [as to imply welfare is inherently not uniform]
                  </span>
                  .
                </span>
                <br />
                <i
                  style={{
                    fontSize: this.state.moreInfo ? "12px" : "0px"
                  }}
                >
                  So, not only will I say Article 1.8 abrogates itself, but
                  {space}
                  <a
                    style={{ color: "linen" }}
                    href="https://federalreserve.quora.com/Wouldnt-the-Federal-Reserve-be-unable-to-reverse-split-checkable-deposits-into-the-balance-good-will-value-Isnt-the-F"
                  >
                    [yes]
                  </a>
                  {space}
                  amendment 14.4 amends the{space}
                  <a
                    style={{ color: "linen" }}
                    href="https://occupywallst.quora.com/If-the-top-3m-wealthiest-in-America-have-14m-in-assets-and-300k-in-cash-why-are-financial-markets-such-the-news-in-mo"
                  >
                    faith and credit
                  </a>
                  {space}
                  of the United States as if it were in question{space}
                  <a
                    style={{ color: "linen" }}
                    href="https://secretary.quora.com/Don-t-you-feel-Bill-Mahr-asking-about-a-Ukrainian-tax-deal-instead-of-duty-free-international-trade-for-Russia-is-weird"
                  >
                    constitutionally
                  </a>
                  {space}
                  <span style={{ color: "lightgrey" }}>
                    [over what else but the terms of such a{space}
                    <a
                      style={{ color: "linen" }}
                      href="https://courttechnology.quora.com/What-are-the-steps-to-remove-a-President-who-is-unfit-for-duty-due-to-mental-illness-1"
                    >
                      foreign
                    </a>
                    -
                    <a
                      style={{ color: "linen" }}
                      href="https://froth.quora.com/Other-than-political-and-banking-issues-why-do-market-industry-sectors-move-together-in-prices"
                    >
                      investor
                    </a>
                    {space}
                    question]
                  </span>
                  .
                </i>
              </span>
              <div
                style={{
                  backgroundColor: "rgba(100,160,255,.5)"
                }}
              >
                <a href="https://commie.dev" style={{ color: "white" }}>
                  Why is economic growth favored to saving?
                </a>
              </div>
            </div>
            {this.props.lastWidth && (
              <Government
                lastWidth={Math.min(300, this.props.lastWidth - 20)}
              />
            )}
            <h4 {...setting(3)}>
              <a href="https://courttechnology.quora.com/Is-Amendment-14-4-an-abrogation-of-Article-3-3-1">
                Save
              </a>
              {space}
              the{space}
              <a href="https://www.quora.com/Why-is-there-an-FDA-USPTO-or-NIH-when-we-can-name-and-open-source-without-prescription-costs">
                rats
              </a>
              {space}
              &bull;{space}
              <a href="https://www.quora.com/Should-all-military-operations-other-than-non-violent-reconnaissance-missions-be-made-available-for-public-review-after-two-weeks-of-execution">
                <span role="img" aria-label="rat">
                  🐀
                </span>
              </a>
              {space}
              &bull;{space}
              <a href="https://www.quora.com/unanswered/Why-arent-whistleblowers-allowed-on-the-jury">
                <span role="img" aria-label="chipmunk">
                  🐿
                </span>
              </a>
            </h4>
            <h4 {...setting(3)}>
              <a href="https://www.quora.com/unanswered/Do-lower-prescription-drugs-come-by-price-controls-on-copay">
                Price
              </a>
              {space}
              control prem
            </h4>

            <Cable
              style={{ width: "100%", maxWidth: "300px" }}
              img="true"
              onError={handleScollImgError}
              src={
                this.state.noyoutube
                  ? ""
                  : "https://www.dropbox.com/s/i4n49rvipyd21jx/Screen%20Shot%202022-11-12%20at%2012.38.47%20PM.png?raw=1"
              }
              float={null}
              title="ASP 50, 200 market concentration unpoverty generally inequality, VX_F, NZD/USD"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
              scrollTop={this.state.scrollTop}
            />
            <br />
            <br />
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            //alignSelf: "start",baby step debt ceiling, then paid of  aces
            bottom: "3px",
            right: "5px"
          }}
        >
          no <a href="https://realvelocity.asia">capitalization</a>
        </div>
      </div>
    );
  }
}

export default AApp;
