import React from "react";

function Footer() {
  return (
    <footer id="footer" style={{backgroundColor: "rgb(250, 250, 250"}}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{width: "50%"}} />
            <p class="copyright text-grey mt-3">
              &copy; 2010-2026, Not Zerodha Broking Ltd.
              <p class="copyright text-grey">All rights reserved.</p>
              <ul className="social">
                <li>
                  <a href="https://x.com/@hgupt69">
                    <img
                      src="media\images\x-twitter.svg"
                      alt="x-twitter"
                      style={{width: "20px"}}></img>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919876344952?text=Hello!"
                    target="_blank">
                    <img
                      src="media\images\whatsapp-logo.svg"
                      style={{width: "20px"}}></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@zerodhaonline">
                    <img
                      src="media\images\youtube.svg"
                      style={{width: "24px"}}></img>
                  </a>
                </li>
                <a href="https://www.linkedin.com/in/hariomgupta2756/">
                  {" "}
                  <i class="fa-brands fa-square-linkedin"></i>
                </a>
              </ul>
              <hr />
              <div className="app-badges">
                <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                  <img src="media\images\google-play-badge-light.svg"></img>
                </a>

                <a
                  href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
                  style={{width: "50%"}}>
                  <img src="media\images\appstore-badge-light.svg"></img>
                </a>
              </div>
            </p>
          </div>
          <div className="col">
            <p>Account</p>
            <a
              href="https://zerodha.com/open-account/"
              mb-2
              style={{textDecoration: "none"}}>
              Open demat account
            </a>
            <br />
            <a
              href="https://zerodha.com/open-account/minor/"
              mb-2
              style={{textDecoration: "none"}}>
              Minor demat account
            </a>
            <br />
            <a
              href="https://zerodha.com/open-account/nri/"
              mb-2
              style={{textDecoration: "none"}}>
              60 day challange
            </a>
            <br />
            <a
              href="https://zerodha.com/open-account/nri/"
              mb-2
              style={{textDecoration: "none"}}>
              NRI demat account
            </a>
            <br />
            <a
              href="https://zerodha.com/commodities/"
              mb-2
              style={{textDecoration: "none"}}>
              Commodity
            </a>
            <br />
            <a
              href="https://zerodha.com/dematerialise/"
              mb-2
              style={{textDecoration: "none"}}>
              Dematerialisation
            </a>
            <br />
            <a
              href="https://zerodha.com/fund-transfer/"
              mb-2
              style={{textDecoration: "none"}}>
              Fund transfer
            </a>
            <br />
            <a
              href="https://zerodha.com/mtf/"
              mb-2
              style={{textDecoration: "none"}}>
              MTF
            </a>
            <br />
          </div>
          <div className="col">
            <p>Company</p>
            <a
              href="https://zerodha.com/about/"
              mb-2
              style={{textDecoration: "none"}}>
              About
            </a>
            <br />
            <a
              href="https://zerodha.com/about/philosophy/"
              mb-2
              style={{textDecoration: "none"}}>
              Philosophy
            </a>
            <br />
            <a
              href="https://zerodha.com/media/"
              mb-2
              style={{textDecoration: "none"}}>
              Press and media
            </a>
            <br />
            <a
              href="https://zerodha.com/refer/"
              mb-2
              style={{textDecoration: "none"}}>
              Referral programe
            </a>
            <br />
            <a
              href="https://careers.zerodha.com/"
              mb-2
              style={{textDecoration: "none"}}>
              Careers
            </a>
            <br />
            <a
              href="https://zerodha.tech/"
              mb-2
              style={{textDecoration: "none"}}>
              Zerodha.tech
            </a>
            <br />
            <a href="" mb-2 style={{textDecoration: "none"}}>
              Press & media
            </a>
            <br />
            <a
              href="https://zerodha.com/cares/"
              mb-2
              style={{textDecoration: "none"}}>
              Zerodha Cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a
              href="https://zerodha.com/contact/"
              mb-2
              style={{textDecoration: "none"}}>
              Contact us
            </a>
            <br />
            <a
              href="https://support.zerodha.com/"
              mb-2
              style={{textDecoration: "none"}}>
              Support portal
            </a>
            <br />
            <a
              href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha"
              mb-2
              style={{textDecoration: "none"}}>
              How to file a complaint?
            </a>
            <br />
            <a
              href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets"
              mb-2
              style={{textDecoration: "none"}}>
              Status of your complaints
            </a>
            <br />
            <a
              href="https://zerodha.com/marketintel/bulletin/"
              mb-2
              style={{textDecoration: "none"}}>
              Bulletin
            </a>
            <br />
            <a
              href="https://zerodha.com/marketintel/circulars/"
              mb-2
              style={{textDecoration: "none"}}>
              Circulars
            </a>
            <br />
            <a
              href="https://zerodha.com/z-connect/"
              mb-2
              style={{textDecoration: "none"}}>
              Z-Connect blog
            </a>
            <br />
            <a
              href="https://zerodha.com/resources/"
              mb-2
              style={{textDecoration: "none"}}>
              Downloads
            </a>
            <br />
          </div>

          <div className="col">
            <p>Quick Links</p>
            <a
              href="https://zerodha.com/ipo/"
              mb-2
              style={{textDecoration: "none"}}>
              Upcoming IPOs
            </a>
            <br />
            <a
              href="https://zerodha.com/charges/"
              mb-2
              style={{textDecoration: "none"}}>
              Brokerage charges
            </a>
            <br />
            <a
              href="https://zerodha.com/marketintel/holiday-calendar/"
              mb-2
              style={{textDecoration: "none"}}>
              Market holidays
            </a>
            <br />
            <a
              href="https://zerodha.com/markets/calendar/"
              mb-2
              style={{textDecoration: "none"}}>
              Economic calendar
            </a>
            <br />
            <a
              href="https://zerodha.com/calculators/"
              mb-2
              style={{textDecoration: "none"}}>
              Calculators
            </a>
            <br />
            <a
              href="https://zerodha.com/markets/stocks/"
              mb-2
              style={{textDecoration: "none"}}>
              Markets
            </a>
            <br />
            <a
              href="https://zerodha.com/markets/sector/"
              mb-2
              style={{textDecoration: "none"}}>
              Sectors
            </a>
            <br />
            <a
              href="https://zerodha.com/market/giftnifty/"
              mb-2
              style={{textDecoration: "none"}}>
              Gift Nifty
            </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-small text-muted" style={{widht: "14px"}}>
          <p>
            <a href="https://zerodha.com/" style={{textDecoration: "none"}}>
              Zerodha
            </a>{" "}
            Broking Ltd.: Member of NSE, BSE, MCX & MSEI - SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
