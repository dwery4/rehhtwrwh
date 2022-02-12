---
sidebar_position: 1
---

# Introduction

As your application grows, the effort required to test it also grows exponentially. GoReplay offers you the simple idea of reusing your existing traffic for testing, which makes it incredibly powerful. Our state of art technique allows you to analyze and record your application traffic without affecting it. This eliminates the risks that come with putting a third party component in the critical path.

GoReplay made to increases your confidence in code deployments, configuration and infrastructure changes.

Instead of being a proxy, GoReplay in background listen for traffic on your network interface, requiring no changes in your production infrastructure. GoReplay daemon needs to be run on the same machine as your service or, as alternative, you can mirror network traffic to the machines with running damemon.

![Shadowing](/img/shadowing.png)

## Concepts

This section describes different patterns and ways how you can use GoReplay.

* [Integration testing and shadowing](/docs/concepts/integration-testing)
* [Load testing](/docs/concepts/load-testing)
* [Monitoring](/docs/concepts/monitoring) - get information about your 

## Get started

This section explains how to install and run GoReplay using one of the following methods:

* [Binaries](/docs/installation/binaries) for direct downloads to run on Linux, macOS or Windows
* [Homebrew](/docs/installation/macos) for running GoRepay on macOS
* [Docker](/docs/installation/docker) for using in containerised environments like Kubernetes 

Once GoRepay is installed, a guide is provided to [record and replay your first scenario](/docs/tutorial).

## Third-party tools

This section describes how to integrate GoReplay with third-party tools and utilities for sending metrics and visualizing data:
* Grafana instructions for connecting QuestDB as a datasource for building visualizations and dashboards
* Kafka guide for ingesting data from topics into QuestDB by means of Kafka Connect
* AWS S3

## Operations
This section contains resources for managing QuestDB instances and has dedicated pages for the following topics:

* Capacity planning for configuring server settings and system resources for common scenarios and edge cases
* Data retention strategy to delete old data and save disk space
* Health monitoring endpoint for determining the status of the instance

## Support
We are happy to help with any question you may have.
Feel free to reach out using the following channels:

* [Raise an issue on GitHub](https://github.com/buger/goreplay/issues)
* [Ask questions in our Forum](https://github.com/buger/goreplay/discussions)
* [Join the Community Slack](TODO)
* or send us an email at hello@goreplay.org