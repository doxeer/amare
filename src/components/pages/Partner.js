import "./Partner.css";
import branderPhoto from "../images/brander.webp";
import step2 from "../images/step2.avif";
import step3 from "../images/step3.avif";
import step4 from "../images/step4.avif";
import amare from "../images/amare.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function Partner() {
  return (
    <div className="partner">
      <head>
        <Helmet>
          <title>Amare - Partnership</title>
          <meta
            name="description"
            content="Become an Amare Partner and help others achieve overall wellness while supporting your financial wellness. Join a community of purpose-driven entrepreneurs."
          />
          <meta
            name="keywords"
            content="Amare Partner, wellness, financial wellness, purpose-driven entrepreneurs, Amare Global"
          />
          <meta
            property="og:title"
            content="Join as an Amare Partner - Amare Global"
          />
          <meta
            property="og:description"
            content="Become an Amare Partner and help others achieve overall wellness while supporting your financial wellness. Join a community of purpose-driven entrepreneurs."
          />
          <meta property="og:image" content={branderPhoto} />
        </Helmet>
      </head>
      <img src={branderPhoto} alt="brander-photo" id="brander-photo" />
      <a href="https://www.amare.com/1942935/en-us/account/register">
        <button id="btn1">Enroll Today</button>
      </a>
      <h2>Join as an Amare Partner</h2>
      <h1>What does it mean to be an Amare Partner?</h1>
      <p id="p1">
        Help others achieve overall wellness through our holistic, natural, and
        effective solutions. Plus, support your financial wellness and earn
        exclusive rewards along the way by introducing others to Amare
        Products.*
      </p>
      <div className="steps">
        <h2>Step 1</h2>
        <h1>Enroll</h1>
        <p>
          When you enroll as an Amare Partner, you are joining a community of
          purpose driven entrepreneurs who have come together to bring wellness
          and change to the world.
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: "2em",
          }}
        >
          <a href="https://www.amare.com/1942935/en-us/account/register">
            <button>Become a partner</button>
          </a>
        </div>
        <div className="step">
          <img src={step2} alt="2" />
          <div className="partner-step">
            <h2>Step 2:</h2>
            <h1>Share Award Winning Products</h1>
            <p>
              Share award winning best in class products each one backed by
              scientific research proven to deliver results.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="partner-step">
            <h2>Step 3:</h2>
            <h1>Build & Experience a Community of Leaders</h1>
            <p>
              As you build your team, you'll be able to network with proven
              leaders and learn how they've built businesses from the ground up.
              Tap in and grow your business exponentially.
            </p>
          </div>
          <img src={step3} alt="3" />
        </div>
        <div className="step">
          <img src={step4} alt="4" />
          <div className="partner-step">
            <h2>Step 4:</h2>
            <h1>Make a Difference</h1>
            <p>
              As you grow your business, you are making a real difference
              mentally, physically and financially.* In addition, Amare gives
              back to organizations like The Children's Center as we make a
              difference in the community around us.
            </p>
            <a href="https://www.amare.com/1942935/en-us/account/register">
              <button>Make a difference</button>
            </a>
          </div>
        </div>
      </div>
      <div className="partner-bottom">
        <h2>Why Amare?</h2>
        <p>
          <strong>Business Builder App:</strong> Amare provides you with access
          to Builder, a powerful app that will organize tasks, spark
          conversations, and help build and strengthen authentic relationships.
        </p>
        <p>
          <strong>Generous Compensation Plan: </strong>Build income opportunity
          through the compensation plan. Earn from product sales, bonus pools,
          and much more.*
        </p>
        <a href="https://amarecdn.azureedge.net/webassets/resources/OtherInformation/Amare_IncomeDisclosureStatement.pdf">
          Income Disclosure Statement
        </a>
        <a href="https://www.nxtbook.com/amareglobal/WelcomeKit/amare-compensation-plan/index.php">
          Amare Compensation Plan
        </a>
        <p>
          <strong>Onboarding System:</strong> If you're completely brand new to
          social selling or a seasoned veteran, Amare will provide concierge
          level onboarding to ensure proper set up, training, and ongoing
          support the moment you become an Amare Partner.
        </p>
        <p>
          <strong>Monthly Specials & Promotions:</strong> Gain access to
          promotions, generous discount codes, free product credits, and loyalty
          reward programs. These special offers are designed to help grow your
          business and sales every month. So.... what are you waiting for?
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <a href="https://www.amare.com/1942935/en-us/account/register">
            <button>Become a partner</button>
          </a>
        </div>
        <div className="signup-section">
          <h2>Join Us Today!</h2>
          <p>
            Become a part of Amare and discover the benefits of our amazing
            products. Sign up now and start your journey to better health and
            wellness!
          </p>
          <Link to="/sign-up-or-log-in-to-amare">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
      <footer>
        <img src={amare} alt="5" />
        <p id="p">
          This is an Amare Global Independent Distributor website. This site is
          not owned or operated by Amare Global. Any information, views, or
          representations on this website are my own and not endorsed by Amare
          Global. For official information and inquiries, please visit the
          Official Amare Website Amare Brand Partner #1942935
        </p>
        <div className="footer-side">
          <p>
            <h4 id="h4">Customer Service</h4>
            If you have any questions about your order, please contact customer
            service:
            <p>Phone: +1 888-898-8551</p>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Partner;
