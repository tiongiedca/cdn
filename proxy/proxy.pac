function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "jw.org") || dnsDomainIs(host, ".jw.org") || dnsDomainIs(host, "jw-russia.org") || dnsDomainIs(host, ".jw-russia.org") || dnsDomainIs(host, "jwpub.org") || dnsDomainIs(host, ".jwpub.org") || dnsDomainIs(host, "jw-cdn.org") || dnsDomainIs(host, ".jw-cdn.org") || dnsDomainIs(host, "sharefile.com") || dnsDomainIs(host, ".sharefile.com") || dnsDomainIs(host, "sharefile.io") || dnsDomainIs(host, ".sharefile.io") || dnsDomainIs(host, "sf-api.com") || dnsDomainIs(host, ".sf-api.com")) {
		return "SOCKS5 31.207.47.250:8443; DIRECT";
	}
}
