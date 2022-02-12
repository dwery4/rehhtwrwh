---
sidebar_position: 4
---

# Monitoring

Having monitoring and analytics data for your application can be critical to its success. It allows you to solve wide range of issues like debugging some tricky bugs, researching performance issues, or implementing company secuirty policies like audit. However modifying your original application or changing your infrastructure sometimes can be impossible to too costly.

GoReplay comes here to help, because it can collect and process your application data from outside, without touching your application source code at all. Main idea is that GoReplay works on network level: it analyze low level traffic of your application and reconstruct HTTP messages.

GoReplay allows you to upload original traffic to S3, ElasticSearch, Kafka or custom source of your choice, implemented by custom middleware. Middleware itself can be written in any language, can leverage any third party libraries, like sending data to monitoring or log management software. Middleware has full access to both request and response, allowing you to write logic of any complexity.

![Shadowing](/img/monitoring.png)

Capabilities are limited only by your imagination:
* Store latest snapshot of production traffic to create repeatable test cases
* Log data for audit purpose, and dynamically stripping sensitive data
* Exposing live app metrics, via statsd, ELK, prometheus agent, or similar
* Monitoring performance and health of your app