---
sidebar_position: 3
---

# Load testing

Writing synthetic tests is difficult, and it's almost impossible to truly replicate production traffic patterns. Humans, browsers, and robots all do strange things that affect the frequency of requests, URL weighting, size of headers, session persistance and way more. In some cases only specific user flow can show performance issues.

GoReplay offers a very simple idea of re-using your existing production traffic in order to replay it to staging environment. GoReplay records content, order, frequency and even TCP sessions of original requests, and replays them in exactly the same way to the target environment, with specified speed: you can speedup or slowdown request flow to fit your needs.

GoReplay can be configured in a distributed maneer, by having master,and multiple slaves, to perform load testing of any coplexity. In addition, you can dynamically modify requests content on the fly via built-in features or custom plugins.

![Load testing](/img/loadtesting.png)

Knowing exact perfromance requirments in advance allows you to avoid surprises after deploying to production, and allows you accurately estimate infrastrucuture requirments so you can plan your budget. Using GoReplay give you the high level of confidence, and allows you to claim that test environment behave in exactly the same conditions as your production environment.