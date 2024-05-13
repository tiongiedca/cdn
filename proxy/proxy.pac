function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "jw.org") || dnsDomainIs(host, ".jw.org") || dnsDomainIs(host, "jwpub.org") || dnsDomainIs(host, ".jwpub.org") || dnsDomainIs(host, "jw-cdn.org") || dnsDomainIs(host, ".jw-cdn.org") || dnsDomainIs(host, "2ip.ru") || dnsDomainIs(host, ".2ip.ru")) {
		return "PROXY 38.170.252.244:9108; HTTPS 38.170.252.244:9108; SOCKS5 38.170.252.244:9108; DIRECT";
	}		
	return "DIRECT";
}
