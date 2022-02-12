import React, {useState, useEffect} from 'react';
import { SwitchTransition, Transition } from "react-transition-group";
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import styled from "styled-components";
import CodeBlock from '@theme/CodeBlock';
import BrowserWindow from '../components/BrowserWindow';

const FadeTransition = ({ children, ...rest }) => (
  <Transition {...rest}>
    {state => <FadeDiv state={state}>{children}</FadeDiv>}
  </Transition>
);

const SwitchableText = ({ content }) => (
  <SwitchTransition mode="out-in">
    <FadeTransition
      key={content}
      timeout={250}
      unmountOnExit
      mountOnEnter
    >
      {content}
    </FadeTransition>
  </SwitchTransition>
);

const FadeDiv = styled.span`
  transition: 0.5s;
  border-bottom: 2px solid #ccc;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "inline")};
`;


class HomepageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: 0};
  }

  componentDidMount() {
     this.timerID = setInterval(() => this.setState({visible: !this.state.visible}), 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <div className="row row--no-gutters">
            <div className="col col--6">
              <h1 className="hero__title">Modern <SwitchableText content={this.state.visible ? <span>Performance</span> : <span>Integration</span>} /> testing</h1>
              <p className="hero__subtitle">GoReplay is an open-source solution which allows capture existing application traffic and re-use it for testing. <br/>Bring back confidence in deployments and ifrastructure changes by accurately emulating production environment!
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/tutorial/getting-started">
                  Tutorial - 5min ⏱️
                </Link>
                <Link
                  className="button button--secondary button--lg"
                  to="https://github.com/buger/goreplay">
                  <img src="/img/github.svg"/>
                  GitHub
                </Link>
              </div>
            </div>
            <div className="col col--6">
              <BrowserWindow minHeight={240}>
                <CodeBlock className="language-bash">
                brew install gor{"\n"}
                {"\n"}
                # Record application traffic to the file{"\n"}
                gor --input-raw localhost:8080 --output-file requests.gor{"\n"}
                {"\n"}
                # Do some activity in your application{"\n"}
                curl http://localhost:8080{"\n"}
                {"\n"}
                # Replay it on demand{"\n"}
                gor --input-file requests_*.gor --output-http localhost:8080{"\n"}
                </CodeBlock>
              </BrowserWindow>
            </div>
          </div>
          
          <div className="section section--inner section--center">
            <div className="logos">
              <img src="/img/customers/fiverr.png" />
              <img src="/img/customers/govuk.png" />
              <img src="/img/customers/resdiary.png" />
              <img src="/img/customers/here.png" />
              <img src="/img/customers/hulu.png" />
              <img src="/img/customers/intuit.png" />
              <img src="/img/customers/nbc.png" />
              <img src="/img/customers/weather.png" />
              <img src="/img/customers/guardian.png" />
              <img src="/img/customers/videology.png" />
              <img src="/img/customers/tomtom.png" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function Quote() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx(quoteIdx => quoteIdx + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const quotes = [
    {
      logo: "/img/customers/pagesjaume.png",
      author: "Benjamin Letrou",
      role: "Chief architect",
      url: "https://pagesjaunes.fr",
      title: "pagesjaunes.fr",
      quote: "Today we keep 10 days of traffic in case of problem. We are one of the top10 French website which means a lot of traffic! Gor saved our life more than once! It was the only way to find very specific issues.",
      style: {maxWidth: "108px"}
    },
    {
      logo: "/img/customers/here.png",
      author: "Stefan Friese",
      role: "Test Framework team lead",
      url: "https://here.com",
      title: "here.com",
      quote: "Gor is really a nice tool and we use it to capture traffic. The traffic is then redirected to 2 versions so that we can compare their performance behavior under real-time production load mix conditions.",
      style: {maxWidth: "90px"}
    },
    {
      logo: "/img/customers/guardian.png",
      author: "Nicolas Long",
      role: "Tech lead",
      url: "https://theguardian.com",
      title: "theguardian.com",
      quote: "We've been using Gor to test our Content API at The Guardian and it's been great! Our API serves tens of millions of requests a day so being able to test changes with real traffic has been great. Thanks for the great library!",
      imgClass: "wide"
    },
    {
      logo: "/img/customers/videology.png",
      author: "Sahil Verma",
      role: "Lead operations engineer",
      url: "https://videologygroup.com",
      title: "videologygroup.com",
      quote: "Videology has been using Gor for at least a few months now. Traffic from our production load balancers stream a small slice of traffic to Gor which then streams it to multiple QA environments. We soak test our new and old versions of our web service and the compare their metrics to discover bugs. Great stuff!",
      imgClass: "wide"
    }
  ]

  const dots = quotes.map((_, idx) => {
    function handleClick(e) {
      e.preventDefault();
      setQuoteIdx(idx)
    }

    if (idx == quoteIdx % quotes.length) {
      return <span key={idx} className="active" onClick={handleClick}>•</span>
    } else {
      return <span key={idx} onClick={handleClick}>•</span>
    }
  })

  const quote = quotes[quoteIdx % quotes.length]

  const row = <div className="row row--no-gutters">
    <div className="col col--3">
      <address>
        <img src={quote.logo} className={quote.imgClass} style={quote.style}/>
        <div>
          {quote.author}<br/>
          {quote.role} at <a href={quote.url}>{quote.title}</a>
        </div>
      </address>
    </div>
    <div className="col col--9">
      <blockquote>{quote.quote}</blockquote>
    </div>
  </div>

  return (
    <div className="container">
      <div className="section section--inner section--center case-study-hero">
        <div className="dots">{dots}</div>
        {row}
        <h3><a href="/casestudy">Read Case Studies</a></h3>
      </div>
    </div>
  );
}

function Pitch() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col--4">
          <img src="/img/performance_testing.svg" style={{width: "100%"}} />
        </div>
        <div className="col col--7">
          <h2><a href="/docs/concepts/load-testing">Performance testing</a></h2>
          <p style={{fontSize: "1.2rem", fontWeight: 200}}>Writing synthetic tests is difficult because it's almost impossible to truly replicate production traffic patterns. Humans, browsers, and robots all do strange things that affect the frequency of requests, URL weighting, size of headers, etc.<br/><br/>

With GoReplay you can replay your recorded traffic on higher or lower speed, ensuring that <b style={{fontWeight: 400}}>replayed requests will be exactly the same, will come in the same order, and even in the same TCP session</b>, making GoReplay is arguably the simplest and most accurate load testing tool.<br/><br/>

GoReplay performance and clustering capabilities allow you to scale it both vertically and horisontally, in order to perform efficient and accurate load testing of any complexity.</p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="row">
        <div className="col col--7">
          <h2><a href="/docs/concepts/inteegration-testing">Integration testing</a></h2>
          <p style={{fontSize: "1.2rem", fontWeight: 200}}>Systems behave differently depending on environment and traffic patterns. There is an entire layer of errors that just can't be found via standard integrational or manual testing and happen only on production.<br/><br/>

GoReplay offers you the simple idea of <b style={{fontWeight: 400}}>reusing your existing traffic for testing</b>: you can select part of production traffic and replay it to testing environment, while having the ability to filter and rewrite requests on the fly.<br/><br/>

Our state of art technique allows analyze and <b style={{fontWeight: 400}}>record network traffic without affecting your applications</b>, which eliminates risks that come with putting a third party component in the critical path.<br/><br/>

<b style={{fontWeight: 400}}>GoReplay increases your confidence in code deployments, configuration changes and infrastructure changes and ensures that your app isn't tripped up by an edge-case that only presents itself after you've gone live.</b></p>
        </div>
        <div className="col col--4">
          <img src="/img/integration-testing.svg" style={{width: "100%"}} />
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="row">
        <div className="col col--4">
          <img src="/img/monitoring.svg" style={{width: "80%"}} />
        </div>
        <div className="col col--7">
          <h2><a href="/docs/concepts/monitoring">Monitoring and analytics</a></h2>
          <p style={{fontSize: "1.2rem", fontWeight: 200}}>Even if application do not support monitoring or audit, <b style={{fontWeight: 400}}>GoReplay record all traffic, without modifying your application</b>, and store it in plain files or redirect to sources like ElasticSearch, Kafka, or S3 for further analysis.<br/><br/>

GoReplay can be extended with plugins, which can be written in any language, and allow you to dynamicaly access and modify original request, response and replayed respose data, to implement complex rewriting and monitoring logic, making it a trully <b style={{fontWeight: 400}}>swiss army knife for testing and monitoring web apps</b>.<br/><br/>

Capabilities are limited only by your imagination:
<ul>
<li>Store latest snapshot of production traffic to create repeatable test cases</li>
<li>Log data for audit purpose, and dynamically stripping sensitive data</li>
<li>Exposing live app metrics, via statsd, ELK, prometheus agent, or similar</li>
<li>Monitoring performance and health of your app</li></ul>
<br/>
You can also <b style={{fontWeight: 400}}>embed GoReplay as data capture engine</b> to your own stack with our <a href="/docs/pro/appliance">appliance license</a>.
</p>
        </div>
      </div>
    </div>    
  )
}

function OSS() {
  return (
    <div className="container oss">
      <div class="row">
        <div class="col col--6">
          <div>
          <img src="/img/oss.svg" width="50px" />
          <h2>Driven by developers</h2>
          <ul>
          <li>Active Open-Source project since 2013</li>
          <li>14k+ stars on GitHub</li>
          <li>Hundreds of pull requests</li>
          </ul>
          <br/>
          <a href="https://github.com/buger/goreplay">Visit Github</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://join.slack.com/t/goreplayhq/shared_invite/zt-vccekafo-W5jz_iKSDdVCUV_49KXelw">Join Slack</a>
          </div>
        </div>
        <div class="col col--6">
          <div>
          <img src="/img/heart.svg" width="50px" />
          <h2>For Large Organizations</h2>
          <ul>
          <li>Commercial friendly license</li>
          <li>Proffesional services</li>
          <li>Extended functionality</li>
          </ul>
          <br/>
          <a href="/pro">Pro version</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/docs/pro/getting-started">Commercial FAQ</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Quote />
        <Pitch /> 
        <OSS />
      </main>
    </Layout>
  );
}
