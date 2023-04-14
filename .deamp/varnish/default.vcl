vcl 4.1;

import std;

backend default {
    .host = "web";
    .port = "80";
    .first_byte_timeout = 300s;
    .between_bytes_timeout = 300s;
}

# Add hostnames, IP addresses and subnets that are allowed to purge content
acl purge {
    "fpm";
}
