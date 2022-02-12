---
sidebar_position: 1
---

# Getting Started

### Video tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/CxuKZcMKaW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Dependencies

To start working with GoRepllay, you need to have a web server running on your machine, and a terminal to run commands. If you are just poking around, you can quickly start the server by calling `gor file-server :8000`, this will start a simple file server of the current directory on port `8000`. 

### Installing GoReplay

GoReplay can be installed as [binary, packages](/docs/installation/binaries), [Docker](/docs/installation/docker) or using [Homebrew](/docs/installation/homebrew)
Download the latest Gor binary from https://github.com/buger/gor/releases (we provide precompiled binaries for Windows, Linux x64 and Mac OS).


### Capturing web traffic
Now run this command in terminal: 

```bash
gor --input-raw :8000 --output-stdout
```

This command says to listen for all network activity happening on port 8000 and log it to stdout.
If you are familiar with `tcpdump`, we are going to implement similar functionality, but instead of dealing with raw network packets, GoReplay will reconstruct HTTP messages for you.

:::tip
You may notice that on some operating systems it may require `sudo` and asks for the password: to analyze network, GoReepay may needs permissions which are available only to super users.
However, it is possible to configure it [being run for non-root users](/docs/guides/running-without-root-permissions).
:::

Make a few requests by opening `http://localhost:8000` in your browser, or just by calling curl in terminal `curl http://localhost:8000`. You should see that `gor` outputs all the HTTP requests right to the terminal window where it is running. 

:::note
Note that by default GoReplay do not track responses, you can enable them using `--output-http-track-response` option.
:::


**GoReplay is not a proxy:** you do not need to put 3-rd party tool to your critical path. Instead, GoReplay just silently analyzes the traffic of your application in background and does not affect it anyhow.

### Replaying

Now it's time to replay your original traffic to another environment. Let's start the same file web server but on a different port: `gor file-server :8001`. 

Instead of `--output-stdout` we will use `--output-http` and provide URL of second server: 

```bash
gor --input-raw :8000 --output-http="http://localhost:8001"`
```

Make few requests to first server. You should see them replicated to the second one, voila! 

### Saving requests to file and replaying them later

Sometimes it's not possible to replay requests in real time; Gor allows you to save requests to the file and replay them later. 

First use `--output-file` to save them: 

```bash
gor --input-raw :8000 --output-file=requests.gor
```

This will create new file and continuously write all captured requests to it. 

Let's re-run Gor, but now to replay requests from file:
```bash
gor --input-file requests.gor --output-http="http://localhost:8001"
```

You should see all the recorded requests coming to the second server, and they will be replayed in the same order and with exactly same timing as they were recorded.