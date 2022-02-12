[< Back to Case Studies](/casestudy)


# Zenika Case Study

<img src="/img/customers/zenika.png" style={{maxWidth: "200px"}}/>

## [Zenika.com](https://Zenika.com)
**Leading French agency**

<p className="font-bigger">
Goal of Zenika team was to replace critical component of clients application. The general issue was the new version was not properly tested, and risks were too high.
</p>

> Replacing a critical component of the product without taking an incremental approach is a risky strategy. But sometimes the implementation of such a project is also unavoidable: when the functionality is complex, poorly mastered, and the existing code is poorly tested and it has been holding back for too long the implementation of new business features.
Using GoReplay allowed Zenika team to take part of production traffic, and send it to new version of the component, in order to spot all the bugs in advance, before deploying to production.

Tested application, used user sessions, and various objects, which IDs differ in test and production environment. Zenika team used GoReplay middleware in order to dynamically rewrite request, by replacing IDs to values needed for test environment.

> Apart from the 30 minutes of downtime required for data migration, we have been able to replace a major legacy component of our IS in full transparency for our customers. Only one minor bug was detected two weeks after experimental version was put into production. This was an administrative operation which had never been carried out in the double-run phases.


[Read original article (French)](https://blog.zenika.com/2017/04/19/migration-dun-legacy-avec-goreplay/?__s=mhs9qy194xzbfzuaeaxf)

[Read translation](https://translate.google.ru/translate?sl=fr&tl=en&u=https%3A%2F%2Fblog.zenika.com%2F2017%2F04%2F19%2Fmigration-dun-legacy-avec-goreplay%2F%3F__s%3Dmhs9qy194xzbfzuaeaxf)

<br/>
<br/>

<h2 className="font-bigger">PRO Version</h2>
<p className="font-bigger">
If you decided to rely on GoReplay for your business, we provide dedicated support, commercial licensing, and exteded functionality, like support for binary protocols or using cloud storage for saving and replaying.
</p>

<Link
  className="button button--primary button--lg"
  to="/pro">
  Learn more
</Link>