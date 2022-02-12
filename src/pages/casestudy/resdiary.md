[< Back to Case Studies](/casestudy)


# ResDiary Case Study

![ResDiary.com](/img/customers/resdiary.png)
## [ResDiary.com](https://ResDiary.com)
**Leading restraunt food delivery service**

<p className="font-bigger">
ResDiary team needed migrate infrastructure from RackSpace to Azure.
In order to safely perform it, team first wanted to:
<ul>
<li>Understand performance of new infrastructure and accurately plan budget</li>
<li>Know how new infrastructure behave under the load</li>
<li>Ensure that infrastructure does not introduce side effects to the application logic</li>
</ul>
</p>

Migrating to a new platform means that you will have to deal with to different hardware and different infrastructure like load-ballancers, databases, caches and etc. Going to unknown territory means that you'll deliberately over provision your infrastructure and plan to scale down in the future, which incur additional expenses, and leave you in uncertainty for a long time.

> Scripted tests can typically provide as high a throughput as you desire, allowing you to stress test your infrastructure with many requests. However, the diversity of these requests relies upon well designed tests that cover different branches of the application. Otherwise, you could end up repeating a request that isn't very resource intensive. You would need to consider how these repeated requests are handled by your database and/or cache too. This is unlikely to be representative of real traffic if your application is complex with many branches to cover.
With GoReplay, unlike with scripted tests, you do not need to think about emulating all possible cases, because it uses original production traffic and replaying to your test environment. However if your application has a state, you may need to slightly modify your original application traffic, to implement logic like session IDs.

In case of ResDiary.com, some requests was using ASPX session cookies, and replaying such request as it it would result in error. GoReplay middleware helped in this case, making it possible to inject new session IDs to original requests, based on data returned from test environemnt response.

> Using GoReplay, we were able to accurately estimate our infrastructure requirements and highlight the flaws in our prospective setup. When the time came to flip the switch, we had confidence that we wouldn't encounter any major catastrophes as we had caught them in our load tests. Inspired by our success during this migration, we recently performed similar load tests using GoReplay to aid in our UK migration to Azure. This was a larger task than the Australia migration, so we're glad to report that the migration went rather smoothly once again. We were confident enough to run GoReplay totally unsupervised for days on end during the UK migration.

[Read original article](https://medium.com/resdiary-product-team/an-introduction-to-loadtesting-with-goreplay-5c02b0d02aaa)


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