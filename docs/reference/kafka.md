# Kafka

GoReplay allows you to use Apache Kafka to stream data from and to GoReplay.
It is straightforward to use, similar to the rest of plugins:

### Recording data
`gor --input-raw :8080 --output-kafka-host '192.168.0.1:9092,192.168.0.2:9092' --output-kafka-topic 'kafka-log'`

### Reading from Kafka
`gor --input-kafka-host '192.168.0.1:9092,192.168.0.2:9092' --input-kafka-topic 'kafka-log' --output-stdout`

### Optional JSON format
By default, it will write data as raw HTTP payloads. Optionally you can turn on `--output-kafka-json-format` and `--input-kafka-json-format` which will format HTTP payloads to a nice looking structured JSON, but be aware of possible performance hits.