---
sidebar_position: 2
---

# Integration testing

GoReplay use shadowing technique, also known as mirroring, or dark traffic testing.

As the Principles of Chaos Engineering puts it:

> Systems behave differently depending on environment and traffic patterns. Since the behavior of utilization can change at any time, sampling real traffic is the only way to reliably capture the request path.

Trying to enumerate all the possible combinations of test cases for testing services in non-production/test environments can be daunting. In some cases, you'll find that all of the effort that goes into cataloging these use cases doesn't match up to real production use cases. Ideally, we could use live production use cases and traffic to help illuminate all of the feature areas of the service under test that we might miss in more contrived testing environments.

Shadowing is the technique by which production traffic to any given service is captured and replayed against the newly deployed version of the service. This can happen either in real time where incoming production traffic is bifurcated and routed to both the released and deployed version, or it could happen asynchronously when a copy of the previously captured production traffic is replayed against the deployed service. Shadowing have a few important properties:

* Zero production impact. Since traffic is duplicated, any bugs in services that are processing shadow data have no impact on production.
* Test persistent services. Since there is no production impact, shadowing provides a powerful technique to test persistent services. You can configure your test service to store data in a test database, and shadow traffic to your test service for testing. Both blue/green deployments and canary deployments require more machinery for testing.
* Test the actual behavior of a service. When used in conjunction with GoReplay middleware, shadowing lets you measure the behavior of your service and compare it with an expected output. A typical canary rollout catches exceptions (e.g., HTTP 500 errors), but what happens when your service has a logic error and is not returning an exception?

## Shadowing with GoReplay

GoReplay offers unique approach for shadowing. Instead of being a proxy, GoReplay in background listen for traffic on your network interface, requiring no changes in your production infrastructure, rather then running GoReplay daemon on the same machine as your service.

![Shadowing](/img/shadowing.png)

GoReplay can forward requests either in real time or save to file and replay later. You can use built-in filtering and rewriting to adopt original requests for your test environment.

Unlike simple traffic mirroring tools built-in to proxies like Envoy or Nginx, GoReplay has access to both request, response and replayed response. And you can write middlewares of any complexity in order to compare original and replayed data, monitor latency changes, and generate analytics based on that data.
