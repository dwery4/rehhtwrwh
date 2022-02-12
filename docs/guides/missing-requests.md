# Dealing with missing requests and responses

By its nature, GoReplay works by collecting raw TCP packets on network interface. The packets can arrive in random order, and role of GoReplay, in this case, is to re-construct TCP flow and extract data from TCP packets in the right order. Protocols like HTTP can be quite complex to re-construct since messages can divided to multiple packets, and there are cases like handling `100 continue` messages, when relations between request and response TCP flows are not that obvious. If one of the packets in this flow for some reason will not be tracked, message will be either corrupted or GoReplay will not be able to build association between request and response. 

Traffic interception techniques, like GoReplay use, do not provide 100% guarantee that all packets will be processed. Interception itself happens on OS kernel level, and GoReplay use libpcap library to talk with this APIs. In general, OS maintain some internal buffer where it temporary holds the packets, until they will be processed by the application, which does intercepting, e.g. GoReplay. If buffer overfills, packets gets discarded.  So if buffer gets overfilled faster then application process packets, you may see a package drop.

You may control buffer usage using 2 variables: Snap length - number of bytes used to read the packet, and Buffer size itself. The less is Snap length, the more packets will fit into the buffer.

Setting small snaplen can be useful if you need only protcol information of the packet, which can be useful in case if you are doing network topology or similar. In case of GoReplay it aims to track all data, and Snap len is set automatically based on network interface MTU (maximum size of the packet data on interface level). So if you want to reduce Spanlen, in order not to lose packet information, you can reduce MTU of your network interface.

Default value of OS buffer, used to hold packets, vary on different OS. For example on Linux this value is 2MB, and on Windows 1MB. Since GoReplay 0.17 you now can control buffer size using `--input-raw-buffer-size` option, which accepts bytes as argument. For example setting buffer to 10MB will look like: `--input-raw-buffer-size 10485760`

If setting bigger buffer or reducing MTU doest not help reduce missing packets, there is always chance that it is a GoReplay bug. 

In order to identify this issue, create an issue on Github, and if possible, send recorded `pcap` file containing packets which replicate the issue to support@goreplay.org. Example command: `tcpdump -ni eth0 -s0 -w /var/tmp/capture.pcap`
Additionally, run GoReplay with `--http-pprof :8181` flag (replace with your port) which will expose multiple report to /debug/pprof/ and /debug/vars URLs. Pls download this reports, attach them to the ticket. 

