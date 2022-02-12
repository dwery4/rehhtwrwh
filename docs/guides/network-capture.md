# Capturing traffic outside of the application machine

Since GoReplay works on networking level, it is possible to have a configuration when GoReplay agent installed outside of application machine,  on a separate instance. Using this approach you do not need to install agent on application machines at all, and such approach is unvirsal enough to work with any installation type. 

AWS, for example, offers Traffic mirroring for VPC groups https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html
![AWS Mirroring](https://docs.aws.amazon.com/vpc/latest/mirroring/images/traffic-mirroring.png)

Here is set of alternative open-source tooling you can use https://docs.aws.amazon.com/vpc/latest/mirroring/tm-example-open-source.html
Additionally, it is possible to mirror traffic with linux tooling like iptables.

GoReplay can also be installed with Hardware based network devices, which are commonly used in enterprise networks. 

When running GoReplay, since it does not have access to original network interfaces, and does not know IPs, you may need to specify a custom BPF filter https://biot.com/capstats/bpf.html and enable promiscuous mode (e.g. ignore filtering traffic by interface IP)

For example:
`gor --input-raw :80 --input-raw-promisc --input-raw-bpf-filter "dst port 80" --output-stdout`
