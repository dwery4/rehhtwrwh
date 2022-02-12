---
sidebar_position: 1
---

# Architecture

Gor architecture tries to follow UNIX philosophy: everything made of pipes - various inputs multiplexing data to outputs. It is possible to have multiple inputs and outputs. 

Examples:
```bash
# Read HTTP traffic from port 80 and write to a file
gor --input-raw :80 --output-file requests.gor

# Replay from file, output to console
gor --input-file requests.gor --output-stdout

# Read from S3 and output to HTTP
gor --input-s3 s3://bucket/requests-2021-05-* --output-http http://staging.internal
```


You can [rate limit](/docs/reference/limiter), [filter](/docs/reference/filter), [rewrite](/docs/reference/rewrite) requests or even use your own [Middleware](/docs/reference/middleware) to implement custom logic. Also, it is possible to replay requests at the higher rate for [load testing](/docs/reference/file).

## Available input and outputs

See [CLI documentation](/docs/reference/cli) for all possible options