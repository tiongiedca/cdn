function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "jw.org") || dnsDomainIs(host, "*.jw.org")) {
		return "HTTPS Q0Qjgb:aPDFmM@38.170.252.244:9108; DIRECT";
	}
	return "DIRECT";
}
