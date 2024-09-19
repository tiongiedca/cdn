function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "jw.org") || dnsDomainIs(host, ".jw.org") || dnsDomainIs(host, "jwpub.org") || dnsDomainIs(host, ".jwpub.org") || dnsDomainIs(host, "jw-cdn.org") || dnsDomainIs(host, ".jw-cdn.org") || dnsDomainIs(host, "2ip.ru") || dnsDomainIs(host, ".prostovpn.org")) {
		return "SOCKS5 31.207.47.250:8443";
	}		
	return "DIRECT";
}
