[< Back to Case Studies](/casestudy)


# PagesJaunes Case Study

![Pagesjaunes.fr](/img/customers/pagesjaume.png)
## [Pagesjaunes.fr](https://Pagesjaunes.fr)
**Top French Yellow-pages site**

<p className="font-bigger">
PagesJaunes is one of the oldest GoReplay customers.
GoReplay helped solved numerous issues, and now included into standard development workflow and CD environment.
</p>

Around end of 2014 PagesJaunes team started gradually rolling out redesigned application architecture. Original plan was slowly shifting traffic from old version of the site to new one, but once traffic to the new site reached 30% most of the components of our system start to malfunction within a few seconds. Team had only four weeks to get all the traffic to the new site.

Initial approach was to create JMeter tests, with a few requests based on production analytics. However it did not show any anomalies, and on test environment everything worked as expected. At this point one the solutiotions was either debugging on production or turning off parts of new site. At the same time, team discovered GoReplay and was able to replicate issues on test environment in matter of a day, allowing team to triage the origin issue,

Following success described above, thanks to speed of reproduction of production problems, GoReplay become essential tool for debugging any kind of issues. Goal was to embed GoReplay to continous development platform, and runs tests automatically. PagesJaumes picked strategy of defining KPI for each of the services: the thresholds based on the server performance tolerable in production at the various critical input points. So when change is pushed by developer, it automatically gets evaluated using latest production traffic, and in cases of failing the KPI, developer gets immidialy notified. This days PageJaumes team holds last few days of traffic, which allows them to quickly triage production issues, even if they happened a while ago.

Before having GoReplay, PagesJaunes team maintained multiple testing environments for different purpose: general purpose staging environment, automated load testing using JMeter, platform for SEO team to simulate crawls, platform for automated functional testing of modules, and etc. Introducing GoReplay helped simplify testing environment, keeping only replica of production plaform, which continiously receive part of production traffic.

<hr/>
<br/>
<br/>

<p className="font-bigger">
<h2>PRO Version</h2>

If you decided to rely on GoReplay for your business, we provide dedicated support, commercial licensing, and exteded functionality, like support for binary protocols or using cloud storage for saving and replaying.
</p>

<Link
  className="button button--primary button--lg"
  to="/pro">
  Learn more
</Link>