function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "jw.org") || dnsDomainIs(host, "*.jw.org") || dnsDomainIs(host, "jwpub.org") || dnsDomainIs(host, "*.jwpub.org") || dnsDomainIs(host, "jw-cdn.org") || dnsDomainIs(host, "*.jw-cdn.org")) {
		return "HTTPS Q0Qjgb:aPDFmM@38.170.252.244:9108; SOCKS5 Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	}
	return "DIRECT";
}
